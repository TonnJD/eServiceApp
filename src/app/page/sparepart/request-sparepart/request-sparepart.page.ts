import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../../post-data.service';
import { NavController, ModalController, AlertController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { StorageService, User } from '../../../storage.service';
import { ReqDetailPage } from '../req-detail/req-detail.page';

@Component({
  selector: 'app-request-sparepart',
  templateUrl: './request-sparepart.page.html',
  styleUrls: ['./request-sparepart.page.scss'],
})
export class RequestSparepartPage implements OnInit {

  PartNo;
  PartName;
  partData = [];
  data;
  selectSpareList = [];
  empID;
  textSearch;
  isSearching = false;
  customer;
  cusID;
  cusName = '';
  reqType;

  constructor(
    private postDataService: PostDataService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private storageService: StorageService,
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.storageService.getUser().then(items => {
      for (let i = 0; i < items.length; i++) {
        this.empID = items[i].empID;
      }
    });
  }

  searchCustomer(ev: any) {
    //this.presentLoading();
    const strSearch = ev.target.value;

    this.postDataService.CustomerList(strSearch).then(Cus => {
      this.customer = Cus;
      //this.loadCtrl.dismiss(null);
    });
  }

  searchSparepart() {
    this.presentLoading();
    const strSearch = this.textSearch;
    this.partData = [];

    this.postDataService.SearchSparepart(strSearch).then(res => {
      this.data = res;
      console.log('res', res);
      
      for (let i = 0; i < this.data.length; i++) {
        this.partData.push(
          {
            Name: this.data[i].Name,
            SKUCode: this.data[i].SKUCode,
            SKUID: this.data[i].SKUID,
          });
      }

      this.loadCtrl.dismiss(null);
    });
  }

  onRadioChange(ev) {
    this.reqType = ev.detail.value;
  }

  AddToList(item) {
    console.log('item', item);

    let check = false;

    if (this.selectSpareList != []) {
      for (let j = 0; j < this.selectSpareList.length; j++) {
        const a = this.selectSpareList[j].SKUID;

        if (item.SKUID == a) {
          console.log(a);
          check = true;
          break;
        }
      }

      if (check == false) {
        this.selectSpareList.push(
          {
            Name: item.Name,
            SKUCode: item.SKUCode,
            SKUID: item.SKUID,
            Qty: 1
          });
      }
      else {
        this.alertMeanSpart();
      }
    }
    else {
      this.selectSpareList.push(
        {
          Name: item.Name,
          SKUCode: item.SKUCode,
          SKUID: item.SKUID,
          Qty: 1
        });
    }
  }

  addCustomer(item) {
    this.cusID = item.CustomerID;
    this.cusName = item.CustomerName;
  }

  rmCustomer(item) {
    this.cusID = '';
    this.cusName = '';
  }

  submitSpareList() {    
    let params = {
      empID: this.empID,
      sparelist: this.selectSpareList
    }
    
    this.postDataService.InsertRequisition(params);
    this.toastSuccess();

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sparelist: JSON.stringify(params.sparelist),
        data: JSON.stringify(params)
      }
    };

    this.navCtrl.navigateBack(['/menu/sparepart'], navigationExtras);
  }

  DeleteFromList(i) {
    this.selectSpareList.splice(i, 1);
  }

  async alertMeanSpart() {
    const alert = await this.alertCtrl.create({
      message: 'รายการอะไหล่ซ้ำ',
      buttons: ['OK']
    });
    await alert.present();
  }

  async toastSuccess() {
    const toast = await this.toastCtrl.create({
      header: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
      duration: 3000,
      color: 'success'
    });

    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      //spinner: null,
      duration: 1000,
      message: 'กำลังค้นหา...',
      translucent: true,
      //cssClass: 'custom-class custom-loading'
    });

    return await loading.present();
  }

  async modalReqDetail() {
    const modal = await this.modalCtrl.create({
      component: ReqDetailPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        empID: this.empID,
        cusID: this.cusID,
        cusName: this.cusName,
        reqType: this.reqType,
        sparelist: this.selectSpareList
      }
    });

    modal.onDidDismiss().then(res => {
      let type = res.data;

      if (type == 'submit') {
        let params = {
          empID: this.empID,
          cusID: this.cusID,
          reqType: this.reqType,
          sparelist: this.selectSpareList
        }
        
        this.postDataService.InsertRequisition(params);
        this.toastSuccess();
    
        let navigationExtras: NavigationExtras = {
          queryParams: {
            sparelist: JSON.stringify(params.sparelist),
            data: JSON.stringify(params)
          }
        };
    
        this.navCtrl.navigateBack(['/menu/sparepart'], navigationExtras);
      }
      
    })

    return await modal.present();
  }

}
