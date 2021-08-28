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
  spareList = [];
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
      console.log('this.item', this.item);
      
    }

  ngOnInit() {
  }

  close() {
    let param = {
      status: this.status,
      assID: this.item.AssID,
      oldName: this.oldSpareName,
      oldNo: this.oldPartNo
    }

    this.modalCtrl.dismiss(param);
  }

  submit() {
    this.status = true;
    this.close();
  }
}
