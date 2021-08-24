import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { PostDataService } from '../../../../post-data.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-insert-old-sparepart',
  templateUrl: './insert-old-sparepart.page.html',
  styleUrls: ['./insert-old-sparepart.page.scss'],
})
export class InsertOldSparepartPage implements OnInit {
  oldSpareName;
  oldPartNo;
  item;
  insID;
  tranID;
  empID;
  status = false;

  constructor(private postDataService: PostDataService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private navParams: NavParams,
    private route: ActivatedRoute,
    private toastCtrl: ToastController) { 
      this.item = this.navParams.data.item;
      this.insID = this.navParams.data.insID;
      this.tranID = this.navParams.data.tranID;
      this.empID = this.navParams.data.empID;
      this.oldSpareName = this.item.Name;
      this.oldPartNo = this.item.SKUCode;
    }

  ngOnInit() {
  }

  close() {
    let param = {
      status: this.status
    }

    this.modalCtrl.dismiss(param);
  }

  submit() {
    this.postDataService.InsertOldSparepart(this.insID, this.item.SKUID, this.oldSpareName, this.oldPartNo, this.tranID, this.empID).then(res => {
      let st = res;
      
      if (st) {
        this.status = true;
        this.presentToast();
      }
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      //header: 'เรียบร้อย',
      message: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }

}
