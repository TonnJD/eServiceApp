import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { PostDataService } from 'src/app/post-data.service';

@Component({
  selector: 'app-add-sparepart',
  templateUrl: './add-sparepart.page.html',
  styleUrls: ['./add-sparepart.page.scss'],
})
export class AddSparepartPage implements OnInit {
  sparepartName;
  sparepartAmount = 1;

  constructor(private modalCtrl: ModalController,
    private alertCtrl: AlertController) { 

  }

  async submit() {
    console.log('this.sparepartName', this.sparepartName);
    
    if (this.sparepartName == undefined || this.sparepartName == '') {
      const alert = await this.alertCtrl.create({
        header: 'แจ้งเตือน',
        message: 'กรุณากรอก <strong>ชื่ออะไหล่</strong>',
        buttons: ['OK']
      });

      await alert.present();
    }
    else if (this.sparepartAmount <= 0) {
      const alert = await this.alertCtrl.create({
        header: 'แจ้งเตือน',
        message: 'กรุณาใส่จำนวนให้ถูกต้อง',
        buttons: ['OK']
      });

      await alert.present();
    }
    else {
      let param = {
        ID: '',
        PositionNo: '',
        Skuname: this.sparepartName,
        SubSKUID: '',
        Qty: this.sparepartAmount,
        Balance: ''
      }
  
      this.modalCtrl.dismiss(param);
    }
  }

  close() {
    this.modalCtrl.dismiss('close');
  }

  ngOnInit() {

  }

  
}
