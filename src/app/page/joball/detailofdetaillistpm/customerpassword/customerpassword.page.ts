import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { PostDataService } from '../../../../post-data.service';

@Component({
  selector: 'app-customerpassword',
  templateUrl: './customerpassword.page.html',
  styleUrls: ['./customerpassword.page.scss'],
})
export class CustomerpasswordPage implements OnInit {
  getpassword;
  Cuscomment = "";
  code = "";
  installID;
  planID;
  data;
  type;
  Ischkpassword;
  commentType = 0;
  showComment = false;

  constructor(private modalController: ModalController,
    public alertController: AlertController,
    private postDataService: PostDataService,
    private navParams: NavParams) {

    console.table(this.navParams);
    this.getpassword = this.navParams.data.password;
    this.planID = this.navParams.data.planID;
    this.installID = this.navParams.data.installID;
    this.type = this.navParams.data.type

    if (this.type == 'PM') {
      this.Ischkpassword = true;
    }
    else {
      this.Ischkpassword = false;
    }

    let params1 = {
      installID: this.installID,
      planID: this.planID,
      typedevice: "chkpassword"
    }

    this.postDataService.postdevice(params1).then(chkpassword => {
      this.getpassword = chkpassword;      
    })

    let params = {
      installID: this.installID,
      planID: this.planID,
      jobtype: "detailtran"
    }
    
    this.postDataService.SaveCaseAll(params).then(data => {
      this.data = data
      this.Cuscomment = this.data.CusComment
      console.log(this.data.CusComment);
    });    
  }

  ngOnInit() {

  }

  onChange(type) {
    this.commentType = type;

    if (type == 1) {
      this.showComment = false;
    }
    else {
      this.showComment = true;
    }
  }

  async closeModal() {
    await this.modalController.dismiss(0);    
  }

  async confirmSubmit(){
    const alert = await this.alertController.create({
      header: 'ยืนยันบันทึกการประเมิน',
      message: 'เมื่อยืนยันการประเมินแล้ว จะไม่สามารถแก้ไขได้อีก',
      buttons: [
        {
          text: 'ยืนยัน',
          handler: () => {
            try {
              this.submit();
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

  async submit() {   
    console.log(this.code);
    console.log(this.getpassword);
    
    if (this.type == 'PM') {
      if (this.Cuscomment == "" || this.Cuscomment == null || this.code != this.getpassword) {
        if (this.Cuscomment == "" || this.Cuscomment == null) {
          const alert = await this.alertController.create({
            header: 'แจ้งเตือน',
            message: 'กรุณากรอกความคิดเห็น',
            buttons: ['OK']
          });

          await alert.present();
        }
        else if (this.code != this.getpassword) {
          const alert = await this.alertController.create({
            header: 'แจ้งเตือน',
            message: 'รหัสยืนยันตัวตนลูกค้าไม่ถูกต้อง',
            buttons: ['OK']
          });

          await alert.present();
        }
      }

      if (this.code == this.getpassword && this.Cuscomment != "" && this.Cuscomment != null) {
        let params = {
          code: this.code,
          Cuscomment: this.Cuscomment
        }
        await this.modalController.dismiss(params);
      }
    }
    else if (this.type == 'CM') {
      console.log('this.type', this.type);
      console.log('this.commentType', this.commentType);
      
      if (this.commentType == 0) {
        const alert = await this.alertController.create({
          header: 'แจ้งเตือน',
          message: 'กรุณาเลือกความเห็น',
          buttons: ['OK']
        });

        await alert.present();
      }
      else if (this.commentType == 2) {
        if (this.Cuscomment == "" || this.Cuscomment == null) {
          const alert = await this.alertController.create({
            header: 'แจ้งเตือน',
            message: 'กรุณากรอกความคิดเห็น',
            buttons: ['OK']
          });
  
          await alert.present();
        }
        else if (this.Cuscomment.length < 4) {
          const alert = await this.alertController.create({
            header: 'แจ้งเตือน',
            message: 'กรุณากรอกความคิดเห็น มากกว่า 4 ตัวอักษร',
            buttons: ['OK']
          });
  
          await alert.present();
        }
        else {
          let params = {
            code: this.code,
            Cuscomment: this.Cuscomment
          }
  
          await this.modalController.dismiss(params);
        }
      } else {
        let params = {
          code: this.code,
          Cuscomment: 'ไม่มีความคิดเห็น'
        }

        await this.modalController.dismiss(params);
      }
    }
    else {
      let params = {
        Cuscomment: this.Cuscomment
      }

      this.modalController.dismiss(params);
    }
  }
}