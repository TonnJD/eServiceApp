import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { PostDataService } from '../../../../post-data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkevaluation',
  templateUrl: './checkevaluation.page.html',
  styleUrls: ['./checkevaluation.page.scss'],
})
export class CheckevaluationPage implements OnInit {

  //#region data
  link;
  empID;
  planID;
  installID;
  tran;
  url: SafeResourceUrl;
  data;
  name;
  eva = [];
  type1 = 0;
  type2 = 0;
  type3 = 0;
  type4 = 0;
  type5 = 0;
  //#endregion

  //#region constructor
  constructor(public modalController: ModalController,
    private postDataService: PostDataService,
    private navParams: NavParams,
    public alertController: AlertController,
    sanitizer: DomSanitizer,) {
    this.empID = this.navParams.data.empID;
    this.planID = this.navParams.data.planID;
    this.installID = this.navParams.data.install,
      console.log(this.empID, this.planID, this.installID);
    this.tran = [];;
    // this.getEva();


    //this.url = sanitizer.bypassSecurityTrustResourceUrl(this.postDataService.apiServer_url + 'Web/CK_Evaluation.aspx' + '?empID=' + this.empID + '&serviceplanid=' + this.planID + '&installplanid=' + this.installID);
    // this.url = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:41669/Web/CK_Evaluation.aspx' + '?empID=' + this.empID + '&serviceplanid=' + this.planID + '&installplanid=' + this.installID);
  }
  //#endregion

  async Save() {
    if (this.type1 == 0 || this.type2 == 0 || this.type3 == 0 || this.type4 == 0 || this.type5 == 0) {
      const alert = await this.alertController.create({
        header: 'แจ้งเตือน',
        message: 'กรุณาเลือกคะแนนประเมินให้ครบถ้วน',
        buttons: ['OK']
      });

      await alert.present();
    }
    else {
      this.confirmSave();
    } 
  }

async confirmSave(){
  const alert = await this.alertController.create({
    header: 'ยืนยันบันทึกการประเมิน',
    message: 'เมื่อยืนยันการประเมินแล้ว จะไม่สามารถแก้ไขได้อีก',
    buttons: [
      {
        text: 'ยืนยัน',
        handler: () => {
          try {
            this.postDataService.SaveEvaluation(this.empID, this.planID, this.installID, this.type1, this.type2, this.type3, this.type4, this.type5).then(res => {
              this.modalController.dismiss(0);
            });
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

async alertSaveFail(){
  const alert = await this.alertController.create({
    header: 'แจ้งเตือน',
    message: 'ไม่สามารถบักทึกได้ กรุณาลองใหม่อีกครั้ง',
    buttons: ['ตกลง']
  });

  await alert.present();
}

  onChange(type, value) {
    if (type == 'type1') {
      this.type1 = value;
    }

    if (type == 'type2') {
      this.type2 = value;
    }

    if (type == 'type3') {
      this.type3 = value;
    }

    if (type == 'type4') {
      this.type4 = value;
    }

    if (type == 'type5') {
      this.type5 = value;
    }
  }

  setQuantity(value) {
    console.log(value);

  }
  test(event) {
    console.log(event.detail);
    alert("test");

  }

  // getvalue(data){
  //   var input1 = (<HTMLInputElement>document.getElementById("rdo11")).value;

  //   for (let i = 0; i < data.length; i++) {
  //     this.eva.push({value:input1});
  //   }    
  //   let params = {
  //     type: "SaveEvaluation",
  //     eva: this.eva,
  //     installID:this.installID,
  //     planID:this.planID
  //   }
  //   console.log(params);
  //   this.postDataService.getEvaluation(params).then(data => {
  //     this.data = data
  //     console.log(this.data);
  //   });  
  // }
  //#region dtart
  ngOnInit() {
  }
  //#endregion

  //#region close
  close() {
    let params = {
      jobtype: "CheckEva",
      installID: this.installID,
      planID: this.planID
    }

    console.log(params);
    this.postDataService.SaveCaseAll(params).then(data => {
      console.log(data);
      this.modalController.dismiss(0);
      // if (data == "true") {
      //   this.modalController.dismiss(0);
      // } else {
      //   this.alertFail()       
      // }
    });

  }
  //#endregion
  // getEva(){
  //   let params = {
  //     type: "Evaluation"
  //   }
  //   console.log(params);
  //   this.postDataService.getEvaluation(params).then(data => {
  //     this.data = data
  //     console.log(this.data);
  //   });
  // }

  async alertFail() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      buttons: ['OK']
    });

    await alert.present();
  }
}
