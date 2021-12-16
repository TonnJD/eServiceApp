import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, NavParams, ToastController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { PostDataService } from 'src/app/post-data.service';

@Component({
  selector: 'app-device-spare-list',
  templateUrl: './device-spare-list.page.html',
  styleUrls: ['./device-spare-list.page.scss'],
})
export class DeviceSpareListPage implements OnInit {
  data;
  navData;
  spareList;
  empID;
  productID;
  load = false;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private postDataService: PostDataService,
    private toastCtrl: ToastController,
    private navParams: NavParams) {
    this.navData = this.navParams.data;
    this.empID = this.navData.empID;

    this.postDataService.SparepartWaitReturnList(this.navData.item.SKUID, this.empID).then(res => {
      this.spareList = res;
      console.log('this.spareList', this.spareList);

      if (this.spareList.length == 0) {
        this.load = false;
      }
      else {
        this.load = true;
      }
    });
  }

  close() {
    this.modalCtrl.dismiss('close');
  }

  async onReturn(item) {
    this.alertAmountReturn(item);
  }

  async alertAmountReturn(item) {
    const alert = await this.alertCtrl.create({
      header: 'จำนวนสินค้าที่ต้องการคืน',
      subHeader: item.SKUName,
      //message: 'คงเหลือ: ' + item.Count,
      mode: 'ios',
      inputs: [
        {
          type: 'number',
          min: 1,
          max: item.Count,
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
              console.log('item', item);
              console.log('data', data);

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
            this.postDataService.ReturnProduct(item.SKUID, this.empID, item.Count, item.CusID).then(res => {

              this.postDataService.SparepartWaitReturnList(this.navData.item.SKUID, this.empID).then(res => {
                this.spareList = res;
                console.log('this.spareList', this.spareList);

                if (this.spareList.length == 0) {
                  this.load = false;
                }
                else {
                  this.load = true;
                }
                
                this.modalCtrl.dismiss('ReturnSuccess');
              });

              // let params1 = {
              //   empID: this.empID,
              //   type: "Detail",
              //   ProductID: this.productID
              // }

              // this.postDataService.GetDevice(params1).then(list => {
              //   //this.DataDetail = list
              // });

              // let params2 = {
              //   empID: this.empID,
              //   type: "Overall",
              // }

              // this.postDataService.GetDevice(params2).then(list => {
              //   this.data = list

              //   if (this.data == [])
              //   {
              //     this.load = false;
              //   }
              //   else
              //   {
              //     this.load = true;
              //   }

              //   this.presentToast()
              // });
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

  ngOnInit() {
  }

}
