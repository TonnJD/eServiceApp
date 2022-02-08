import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from '@ionic/angular';
import { PostDataService } from '../../../../post-data.service';
import { Sig } from '../../../../storage.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-customerevaluation',
  templateUrl: './customerevaluation.page.html',
  styleUrls: ['./customerevaluation.page.scss'],
})

export class CustomerevaluationPage implements OnInit {
  resolution;
  resolutiondetail = "";
  data;
  installID;
  TecComment = "";
  jobtype;
  planID;
  detail;
  header;
  empID;
  workclose;
  item;
  myId;
  date;
  problemby;
  problembydata;

  firstname: any;
  isShow = false;
  image: any;
  isSave = true;
  isSign = true;
  newSig: Sig = <Sig>{};
  sig;
  test;
  base64;
  urlImg;
  items;

  @ViewChild(SignaturePad, { static: false }) signaturePad;

  public signaturePadOptions: Object = {
    'minWidth': 2,
    canvasWidth: 683,
    canvasHeight: 280,
    backgroundColor: 'white',
    penColor: 'black'
  };

  constructor(private postDataService: PostDataService,
    public modalController: ModalController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private navParams: NavParams,
    private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.myId = JSON.parse(params["data"]);
      this.item = this.myId.item
      this.date = this.myId.date
      this.items = this.myId.items
    });

    console.log('this.items', this.items);
    console.log('this.navParams', this.navParams);
    console.log('this.navParams.data', this.navParams.data);
    
    this.resolution = this.navParams.data.resolution;
    this.resolutiondetail = this.navParams.data.resolutiondetail;
    this.installID = this.navParams.data.installID
    this.jobtype = this.navParams.data.jobtype
    this.planID = this.navParams.data.planID
    this.header = this.navParams.data.header
    this.empID = (this.navParams.data.empID == undefined) ? this.items.empID : this.navParams.data.empID
    this.workclose = this.navParams.data.workclose
    this.problemby = this.navParams.data.problemby
    this.TecComment = this.navParams.data.TecComment
    console.log('this.empID', this.empID);

    this.postDataService.SelectSignatureTech(this.planID, this.installID).then(res => {
      if (res != null) {
        this.isShow = true;
        this.isSign = false;
        this.sig = this.postDataService.apiServer_url + res;
      }
      console.log('sig ', this.sig); 
    });

    if ((this.jobtype == "CM" && this.workclose != 'workclose') || (this.jobtype == "CM" && this.workclose == 'workclose')) {
      let problembydata = {
        installID: this.installID,
        jobtype: "problembydata"
      }

      this.postDataService.SaveCaseAll(problembydata).then(data => {
        this.problembydata = data
      });

      let params = {
        installID: this.installID,
        jobtype: "getresolution"
      }

      this.postDataService.SaveCaseAll(params).then(data => {
        this.data = data
      });
    }

    let params = {
      installID: this.installID,
      planID: this.planID,
      jobtype: "detailtran"
    }

    this.postDataService.SaveCaseAll(params).then(detail => {
      this.detail = detail
      this.TecComment = this.detail.TecComment

      if (this.jobtype == "CM") {
        this.resolution = this.detail.ResolutionID
        this.resolutiondetail = this.detail.Resolutiondetail
        this.problemby = this.detail.ProblemBy
      } else {
        this.resolutiondetail = "resolutiondetail"
      }

      console.log('this.detail', this.detail);
    });
    
  }

  ngAfterViewInit() {
    let width = (window.innerWidth - 85);

    console.log(width);
    
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    this.signaturePad.set('canvasWidth', width);
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawStart() {
    this.isShow = true;
    this.isSave = false;
    this.isSign = false;
  }

  savePad() {
    console.log('trainID: ', this.detail.id);

    const base64 = this.signaturePad.toDataURL('image/png', 0.5);
    const blob = this.signature(base64)
    this.image = base64;
    this.drawStart();

    if (this.image == false) {

    }
    else {
      let params = {
        insID: this.installID,
        planID: this.planID,
        base64: this.image
      }

      this.postDataService.SignatureTech(params).then(res => {
        this.sig = this.postDataService.apiServer_url + res;
      });

    }
  }

  signature(base64) {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(':')[0];
    const byteNumbers = new Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      byteNumbers[i] = byteString.charAt(i);
    }
    const ia = new Uint8Array(byteNumbers);
    return new Blob([ia], { type: mimeString });
  }

  async confirmSave() {
    const alert = await this.alertCtrl.create({
      header: 'ยืนยันการบันทึกลายเซ็น',
      message: 'เมื่อยืนยันแล้ว จะไม่สามารถแก้ไขได้อีก',
      buttons: [
        {
          text: 'ยืนยัน',
          handler: () => {
            try {
              this.savePad();
            } catch (error) {
              this.alertSaveFail();
            }
          }
        },
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  async alertSaveFail() {
    const alert = await this.alertCtrl.create({
      header: 'แจ้งเตือน',
      message: 'ไม่สามารถบักทึกได้ กรุณาลองใหม่อีกครั้ง',
      buttons: ['ตกลง']
    });

    await alert.present();
  }

  clearPad() {
    this.isShow = false;
    this.isSave = true;
    this.isSign = true;

    this.ngAfterViewInit();
  }

  ngOnInit() {
    
  }

  close() {
    this.modalController.dismiss();
  }

  onChange(value, type) {
    if (type == 'resolution') {
      this.resolution = value.detail.value
    }
  }

  async submit() {
    console.log('this.jobtype', this.jobtype);
    console.log('this.workclose', this.workclose);
    console.log('this.problemby', this.problemby);
    console.log("this.resolutiondetail", this.resolutiondetail);
    console.log('this.TecComment', this.TecComment);

    if (this.jobtype == "CM" && this.workclose != 'workclose') {
      if (this.resolutiondetail == null || this.resolutiondetail == "") {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอก <strong>วิธีการแก้ปัญหา</strong>',
          buttons: ['OK']
        });

        await alert.present();
      }
      else if (this.resolutiondetail.length < 4) {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอก <strong>วิธีการแก้ปัญหา</strong> มากกว่า 4 ตัวอักษร',
          buttons: ['OK']
        });

        await alert.present();
      }
      else {
        let params = {
          installID: this.installID,
          planID: this.planID,
          empID: (this.empID != undefined) ? this.empID : this.items.empID,
          workclose: this.workclose,
          jobtype: "saveclosecustomer",
          resolution: this.resolution,
          resolutiondetail: this.resolutiondetail,
          problemby: this.problemby,
        }

        console.log('params', params);

        this.postDataService.SaveCaseAll(params).then(data => {
          if (data == true) {
            this.alertSuccess();

            let param = {
              empID: (this.empID != undefined) ? this.empID : this.items.empID,
              item: this.item,
              type: "getCM",
              date: this.date,
              items: this.items
            }
            console.log('getCM params', param);

            let navigationExtras: NavigationExtras = {
              queryParams: {
                data: JSON.stringify(param)
              }
            };

            this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
            this.modalController.dismiss();
          }

          if (data == false) {
            this.alertFail();
          }
        });
      }
    }
    else if (this.jobtype == "CM" && this.workclose == 'workclose') {
      if (this.problemby == null || this.problemby == "") {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอกหัวข้อ <strong>ปัญหาเกิดจาก</strong>',
          buttons: ['OK']
        });
        await alert.present();
      }
      else if (this.resolutiondetail == null || this.resolutiondetail == "") {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอก <strong>วิธีการแก้ปัญหา</strong>',
          buttons: ['OK']
        });

        await alert.present();
      }
      else if (this.resolutiondetail.length < 4) {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอก <strong>วิธีการแก้ปัญหา</strong> มากกว่า 4 ตัวอักษร',
          buttons: ['OK']
        });

        await alert.present();
      }
      else if (this.TecComment == null || this.TecComment == '') {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอก <strong>ความคิดเห็นเพิ่มเติมของช่าง</strong>',
          buttons: ['OK']
        });

        await alert.present();
      }
      else if (this.TecComment.length < 4) {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอก <strong>ความคิดเห็นเพิ่มเติมของช่าง</strong> มากกว่า 4 ตัวอักษร',
          buttons: ['OK']
        });

        await alert.present();
      }
      else if (this.sig == null || this.sig == '') {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณา <strong>เซ็นชื่อหรือลงลายมือชื่อ</strong> ของช่าง',
          buttons: ['OK']
        });

        await alert.present();
      }
      else {
        let params = {
          installID: this.installID,
          planID: this.planID,
          empID: this.empID,
          workclose: this.workclose,
          jobtype: "savewaitcustomer",
          resolution: this.resolution,
          resolutiondetail: this.resolutiondetail,
          problemby: this.problemby,
          TecComment: this.TecComment
        }
        console.log('params', params);
        this.postDataService.SaveCaseAll(params).then(data => {
          if (data == true) {
            this.modalController.dismiss(params);
          }
          if (data == false) {
            this.alertFail();
          }
        });
      }
    }
    else {
      if (this.TecComment == null || this.TecComment == "") {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอกความคิดเห็น',
          buttons: ['OK']
        });

        await alert.present();
      }
      else if (this.TecComment.length < 4) {
        const alert = await this.alertCtrl.create({
          header: 'แจ้งเตือน',
          message: 'กรุณากรอก <strong>ความคิดเห็นเพิ่มเติมของช่าง</strong> มากกว่า 4 ตัวอักษร',
          buttons: ['OK']
        });

        await alert.present();
      }
      else {
        let params = {
          resolution: this.resolution,
          resolutiondetail: this.resolutiondetail,
          TecComment: this.TecComment,
          ProblemBy: this.problemby
        }

        this.modalController.dismiss(params);
      }
    }
  }

  //#region alert success
  async alertSuccess() {
    const alert = await this.alertCtrl.create({
      header: 'แจ้งเตือน',
      message: 'บันทึกสำเร็จ',
      buttons: ['OK']
    });

    await alert.present();
  }
  //#endregion

  //#region alert success
  async alertFail() {
    const alert = await this.alertCtrl.create({
      header: 'แจ้งเตือน',
      message: 'บันทึกไม่สำเร็จ',
      buttons: ['OK']
    });

    await alert.present();
  }
  //#endregion

}
