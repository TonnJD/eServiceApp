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
  installName;
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
    console.log('this.dataType', this.dataType);
    
    if (this.showInstallName && (this.installName == '' || this.installName.length < 4)) {
      const alert = await this.alertCtrl.create({
        header: 'แจ้งเตือน',
        message: 'กรุณากรอกมากกว่า 4 ตัวอักษร',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    else if (this.dataType == '') {
      const alert = await this.alertCtrl.create({
        header: 'แจ้งเตือน',
        message: 'กรุณาเลือกประเภทข้อมูล',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    else {
      this.postDataService.RecheckInstallPlan(this.tran.insID, this.installName).then(res => {
        this.SuccessAlert();
        this.modalCtrl.dismiss('success');
      });
    }
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
