import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { PostDataService } from '../../../../post-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-requestsparepart',
  templateUrl: './requestsparepart.page.html',
  styleUrls: ['./requestsparepart.page.scss'],
})
export class RequestsparepartPage implements OnInit {
  request;
  isBreak;
  itemName;
  planID;
  empID;
  followLog;
  sentCM;
  type;
  notSpare;

  constructor(
    private postDataService: PostDataService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private toastCtrl: ToastController) {
    console.log('this.navParams.data', this.navParams.data);
    this.itemName = this.navParams.data.ItemsName;
    this.planID = this.navParams.data.planID;
    this.empID = this.navParams.data.empID;
    this.sentCM = this.navParams.data.sentCM;
    this.type = this.navParams.data.type;

    this.selectRequestSparepart();
  }

  selectRequestSparepart() {
    this.postDataService.SelectRequestSparepart(this.planID).then(res => {
      console.log('res', res);
      this.followLog = res;
      if (this.followLog.length == 0) {
        this.notSpare = true;
      }
      else {
        this.notSpare = false;
      }
    });
  }

  machineBreak(event) {
    this.isBreak = event.detail.checked;
  }

  submitRequest() {
    console.log('this.request', this.request);
    console.log('this.isBreak', this.isBreak);
        
    this.postDataService.RequestSparepart(this.planID, this.empID, this.isBreak, this.request).then(res => {
      this.request = '';
      this.followLog = res;
      this.presentToastWithOptions();

      if (this.type != 'history') {
        let param = {
          type: 'submit'
        }

        this.modalCtrl.dismiss(param);
      }
    });
  }

  async confirmSubmit() {
    if (this.request == null) {
      const alert = await this.alertCtrl.create({
        header: 'แจ้งเตือน',
        message: 'กรุณากรอก <strong>รายละเอียดขอเบิกอะไหล่</strong>',
        buttons: ['OK']
      });

      await alert.present();
    }
    else {
      const alert = await this.alertCtrl.create({
        header: 'ยืนยันการเบิกอะไหล่',
        message: 'ต้องการยืนยันการเบิกอะไหล่ หรือไม่?',
        buttons: [
          {
            text: 'ยืนยัน',
            handler: () => {
              try {
                this.submitRequest();
              } catch (error) {
                console.log('error',error);
                
                this.alertSubmitFail();
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
  }

  async alertSubmitFail() {
    const alert = await this.alertCtrl.create({
      header: 'แจ้งเตือน',
      message: 'ไม่สามารถบักทึกได้ กรุณาลองใหม่อีกครั้ง',
      buttons: ['ตกลง']
    });
  
    await alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'เรียบร้อย',
      message: 'ระบบส่งรายละเอียดการเบิกอะไหล่เรียบร้อยแล้ว',
      duration: 20000,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK');
          }
        }
      ]
    });
    toast.present();
  }

  close() {
    let param = {
      type: 'close'
    }

    this.modalCtrl.dismiss(param);
  }

  ngOnInit() {
  }

}
