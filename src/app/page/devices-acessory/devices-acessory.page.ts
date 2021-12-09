import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../post-data.service';
import { StorageService, User } from '../../storage.service';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-devices-acessory',
  templateUrl: './devices-acessory.page.html',
  styleUrls: ['./devices-acessory.page.scss'],
})
export class DevicesAcessoryPage implements OnInit {
  empID;
  Data;
  DataDetail;
  user;
  items;
  isShowDetail = false;
  load = false;
  productID;

  constructor(
    private postDataService: PostDataService,
    private storage: StorageService,
    private storageService: StorageService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController) {

    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

  ngOnInit() {
    this.storageService.getUser().then(items => {
      this.items = items;

      for (let i = 0; i < this.items.length; i++) {
        this.empID = this.items[i].empID;
      }
    });

    this.loadProduct();
  }

  loadpage() {
    this.loadProduct();
  }

  loadProduct() {
    let params = {
      empID: this.empID,
      type: "Overall",
    }
    console.log(params);

    this.postDataService.GetDevice(params).then(list => {
      this.Data = list
      console.log('this.Data', this.Data);

      if (this.Data == []) {
        this.load = false;
      }else{
        this.load = true;
      }

    });
  }
  
  showDetail(item) {
    console.log('item', item);
    
    this.isShowDetail = true;
    this.productID = item.ProductID;

    let params = {
      empID: this.empID,
      type: "Detail",
      ProductID: item.ProductID
    }

    this.postDataService.GetDevice(params).then(list => {
      this.DataDetail = list
      console.log(this.DataDetail);
    });
  }

  async onReturn(item) {
    console.log('item', item.Count);        
    this.alertAmountReturn(item);
  }

  async alertAmountReturn(item) {
    const alert = await this.alertCtrl.create({
      header: 'จำนวนสินค้าที่ต้องการคืน',
      subHeader: item.SKUName,
      message: 'คงเหลือ: ' + item.Count,
      mode: 'ios',
      inputs: [
        {
          type: 'number',
          min: 1,
          max: parseInt(item.Count),
          name: 'value',
          placeholder: 'จำนวน',
          value: 1
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก'
        },
        {
          text: 'ตกลง',
          handler: (data) => {            
            if (data.value == 0) {
              this.alertLess(item); //ใส่จำนวนสินค้าไม่ถูกต้อง
            }
            else if (data.value > item.Count) {
              this.alertLess(item); //ใส่จำนวนสินค้าไม่ถูกต้อง
            }
            else {
              this.alertReturnSubmit(item, data.value);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async alertLess(item) {
    const alert = await this.alertCtrl.create({
      header: 'ใส่จำนวนสินค้าไม่ถูกต้อง',
      mode: 'md',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => { 
            this.onReturn(item);
          }
        }
      ]
    });
    
    await alert.present();
  }

  async alertReturnSubmit(item, value) {
    const alert = await this.alertCtrl.create({
      header: 'ต้องการคืนสินค้า',
      subHeader: item.SKUName,
      message: 'จำนวนที่คืน: ' + value,
      mode: 'ios',
      buttons: [
        {
          text: 'ยกเลิก'
        },
        {
          cssClass: 'btn btn-primary',
          text: 'ยืนยัน',
          handler: () => { 
            this.postDataService.ReturnProduct(item.SKUID, value, this.empID).then( res => {
              let params1 = {
                empID: this.empID,
                type: "Detail",
                ProductID: this.productID
              }
  
              this.postDataService.GetDevice(params1).then(list => {
                this.DataDetail = list
              });
  
              let params2 = {
                empID: this.empID,
                type: "Overall",
              }
          
              this.postDataService.GetDevice(params2).then(list => {
                this.Data = list
          
                if (this.Data == []) 
                {
                  this.load = false;
                }
                else
                {
                  this.load = true;
                }

                this.presentToast()
              });
            });
          }
        }
      ]
    });
    
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      header: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
      color: 'success',
      duration: 3000
    });

    toast.present();
  }

}
