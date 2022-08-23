import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from '../../../../post-data.service';
import { async } from '@angular/core/testing';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {

  data;
  item;
  showInstallName = false;
  installName = '';
  assetNo = '';
  dataType = '';
  tran;
  params;

  constructor
  (
    private route: ActivatedRoute,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private postDataService: PostDataService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ){ 
    this.data = this.navParams.data;
    this.item = this.data.params.install;
    this.tran = this.data.tran;
    this.params = this.data.params;
    console.log('this.data', this.data);
    
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async submit() {
    console.log('this.installName', this.installName);
    console.log('this.assetNo', this.assetNo.indexOf("SFS"));
    console.log('assetno None', this.assetNo.indexOf("ไม่มี"));
    
    if ((this.installName == '' || this.installName.length < 4) || (this.assetNo == '' || this.assetNo.length < 4)) {
      let text;
      if (this.installName.length < 4) {
        text = 'กรุณากรอกชื่อ/รุ่นเครื่อง มากกว่า 4 ตัวอักษร';
      }
      else if ((this.assetNo.length < 4)) {
        text = 'กรุณากรอก Asset No. มากกว่า 4 ตัวอักษร';
      }

      const alert = await this.alertCtrl.create({
        header: 'แจ้งเตือน',
        message: text,
        buttons: ['OK']
      });
  
      await alert.present();
    }
    else if (this.assetNo != 'ไม่มี' && this.assetNo == '') {
      const alert = await this.alertCtrl.create({
        header: 'แจ้งเตือน',
        message: 'กรุณากรอก "ไม่มี" ถ้าไม่มี Asset No. บนตัวเครื่อง',
        buttons: ['OK']
      });

      await alert.present();
    }
    else {
      this.postDataService.RecheckInstallPlan(this.tran.insID, this.installName, this.assetNo).then(res => {
        this.SuccessAlert();
        this.modalCtrl.dismiss('success');
      });
    }

    // if (this.showInstallName && (this.installName == '' || this.installName.length < 4)) {
    //   const alert = await this.alertCtrl.create({
    //     header: 'แจ้งเตือน',
    //     message: 'กรุณากรอกมากกว่า 4 ตัวอักษร',
    //     buttons: ['OK']
    //   });
  
    //   await alert.present();
    // }
    // else if (this.dataType == '') {
    //   const alert = await this.alertCtrl.create({
    //     header: 'แจ้งเตือน',
    //     message: 'กรุณาเลือกประเภทข้อมูล',
    //     buttons: ['OK']
    //   });
  
    //   await alert.present();
    // }
    // else {
    //   this.postDataService.RecheckInstallPlan(this.tran.insID, this.installName).then(res => {
    //     this.SuccessAlert();
    //     this.modalCtrl.dismiss('success');
    //   });
    // }
  }

  onChange(type) {
    this.dataType = type;

    if (type == 'matched') {
      this.showInstallName = false;
      this.installName = 'ถูกต้อง';
    }
    else {
      this.showInstallName = true;
      this.installName = '';
    }
  }

  async SuccessAlert() {
    const toast = await this.toastCtrl.create({
      header: 'ส่งข้อมูลเรียบร้อย',
      //mode: 'ios',
      //color: 'success',
      //showCloseButton: true,
      duration: 3000,
    });

    toast.present();
  }

}
