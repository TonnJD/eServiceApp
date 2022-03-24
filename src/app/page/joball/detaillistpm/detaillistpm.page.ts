import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { PostDataService } from '../../../post-data.service';
import { StorageService } from '../../../storage.service';
import { from } from 'rxjs';
import { ShowimginstallPage } from '../../job/showimginstall/showimginstall.page';
import { CustomerevaluationPage } from '../detailofdetaillistpm/customerevaluation/customerevaluation.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LogPage } from '../../detaillistpm/log/log.page';
import { RequestsparepartPage } from '../detailofdetaillistpm/requestsparepart/requestsparepart.page';
import { NotCheckedPage } from '../not-checked/not-checked.page';
import { UpdateProductPage } from './update-product/update-product.page';
//import { JobresponsPage } from '../../job/jobdetail/jobrespons/jobrespons.page'

@Component({
  selector: 'app-detaillistpm',
  templateUrl: './detaillistpm.page.html',
  styleUrls: ['./detaillistpm.page.scss'],
})
export class DetaillistpmPage implements OnInit {

  //#region data
  detail;
  resolution;
  resolutiondetail;
  getworkclose
  getworkclose1;
  getworkclose2;
  getworkclose3;
  text;
  getworkclosevalue1;
  getworkclosevalue2;
  getworkclosevalue3;
  myId;
  workfinish;
  cusID;
  planID;
  detaillistpm;
  data;
  Customername;
  Name;
  month;
  year;
  insID;
  item;
  type;
  date;
  items;
  empID;
  new = false;
  imgbf = true;
  imgbefore = true;
  sparetype;
  statusserial;
  datacm;
  detailPM;
  jobResponse;
  sentCM;
  notPM;
  //#endregion

  //#region constructor
  constructor(private route: ActivatedRoute,
    public navCtrl: NavController,
    private postDataService: PostDataService,
    private storageService: StorageService,
    public alertController: AlertController,
    public modalController: ModalController,
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController) {
    this.detaillistpm = [];

    this.route.queryParams.subscribe(params => {
      this.myId = JSON.parse(params["data"]);
      this.detailPM = JSON.parse(params["data"]);
      this.items = this.myId.items;
      console.log('this.myId', this.myId);

      if (this.myId != "undefined") {
        this.item = this.myId.item
        this.type = this.myId.type
        this.date = this.myId.date
        this.datacm = this.myId.datacm

        if (this.item == undefined || this.item == "undefined" || this.item == 'undefined') {
          this.cusID = this.myId.cusID
          this.planID = this.myId.planID
          this.workfinish = this.myId.workfinish
          this.month = this.myId.month
          this.year = this.myId.year
        } else {
          this.cusID = this.item.cusID
          this.planID = this.item.planID
          this.workfinish = this.item.WorkFinish
          this.month = this.item.month
          this.year = this.item.year

          if (this.cusID == undefined || this.cusID == "undefined" || this.cusID == 'undefined') {
            this.cusID = this.myId.cusID
            this.planID = this.myId.planID
            this.workfinish = this.myId.workfinish
            this.month = this.myId.month
            this.year = this.myId.year
          }
        }

        if (this.type == "PM") {
          this.imgbefore = false
        }

        if (this.type == "getPM") {
          this.detaillistpm.PlanID = this.planID,
            this.detaillistpm.jobtype = "SuccessPM"

          this.postDataService.postGetList(this.detaillistpm).then(work => {
            this.data = work;

            for (let i = 0; i < this.data.length; i++) {
              this.Customername = this.data[i].CustomerName;
              this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
              for (let j = 0; j < this.data[i].productInstall.length; j++) {

              }
            }
          });

          this.type = "PM";
        }
        else if (this.type == "getIN") {
          this.imgbf = true
          this.detaillistpm.PlanID = this.planID
          this.detaillistpm.jobtype = "SuccessIN"

          this.postDataService.postGetList(this.detaillistpm).then(work => {
            this.data = work;

            for (let i = 0; i < this.data.length; i++) {
              this.Customername = this.data[i].CustomerName;
              this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
            }
          });

          this.type = "INSTALL";
        }
        else if (this.type == "getCM") {
          this.imgbf = true
          this.detaillistpm.PlanID = this.planID
          this.detaillistpm.jobtype = "SuccessCM"

          this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
            this.data = work;

            for (let i = 0; i < this.data.length; i++) {
              this.Customername = this.data[i].CustomerName;
              this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
            }
          });

          let workclose = {
            jobtype: "getworkclose"
          }

          this.postDataService.SaveCaseAll(workclose).then(data => {
            this.getworkclose = data

            for (let i = 0; i < this.getworkclose.length; i++) {
              console.log(this.getworkclose);
              if (i == 1) {
                this.getworkclose1 = this.getworkclose[1].SystemDataName;
                this.getworkclosevalue1 = this.getworkclose[1].SystemID;
                this.text = 'ปิดงาน'
              } else if (i == 3) {
                this.getworkclose2 = this.getworkclose[3].SystemDataName;
                this.getworkclosevalue2 = this.getworkclose[3].SystemID;
                this.text = 'ตกลง'
              } else if (i == 0) {
                this.getworkclose3 = this.getworkclose[0].SystemDataName;
                this.getworkclosevalue3 = this.getworkclose[0].SystemID;
                this.text = 'บันทึก'
              }
            }
          });

          this.type = "CM";
        }
        else if (this.type == "getUN") {
          this.detaillistpm.PlanID = this.planID
          this.detaillistpm.jobtype = "SuccessUN"

          this.postDataService.postGetList(this.detaillistpm).then(work => {
            this.data = work;

            for (let i = 0; i < this.data.length; i++) {
              this.Customername = this.data[i].CustomerName;
              this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
              for (let j = 0; j < this.data[i].productInstall.length; j++) {
                console.log(this.data[i].productInstall[j]);
              }
            }
          });
          this.type = "UNINSTALL";
        }

        //this.ngOnInit();
      }
      else {
        alert("ไม่พบข้อมูล");
      }

      if (this.type == "CM") {
        this.imgbf = true
  
        this.detaillistpm.cusID = this.cusID;
        this.detaillistpm.planID = this.planID;
        this.detaillistpm.month = this.month;
        this.detaillistpm.year = this.year;
        this.detaillistpm.type = this.type;
        this.detaillistpm.date = this.date;
        this.detaillistpm.empid = this.empID;
  
        this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
          this.data = work;
  
          for (let i = 0; i < this.data.length; i++) {
            this.Customername = this.data[i].CustomerName;
            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
          }
          console.log('this.data', this.data);
  
        });
  
        let workclose = {
          jobtype: "getworkclose"
        }
  
        this.postDataService.SaveCaseAll(workclose).then(data => {
          this.getworkclose = data
  
          for (let i = 0; i < this.getworkclose.length; i++) {
            if (i == 1) {
              this.getworkclose1 = this.getworkclose[1].SystemDataName;
              this.getworkclosevalue1 = this.getworkclose[1].SystemID;
              this.text = 'ปิดงาน'
            } else if (i == 3) {
              this.getworkclose2 = this.getworkclose[3].SystemDataName;
              this.getworkclosevalue2 = this.getworkclose[3].SystemID;
              this.text = 'ตกลง'
            } else if (i == 0) {
              this.getworkclose3 = this.getworkclose[0].SystemDataName;
              this.getworkclosevalue3 = this.getworkclose[0].SystemID;
              this.text = 'บันทึก'
            }
          }
        });
      }
      else if (this.type == "INSTALL") {
        this.imgbf = true

        this.route.queryParams.subscribe(params => {
          this.items = JSON.parse(params["data"]);
        });
        console.log('this.items install', this.items); 
  
        this.detaillistpm.cusID = this.items.item.cusID;
        this.detaillistpm.planID = this.items.item.planID;
        this.detaillistpm.month = this.items.item.month;
        this.detaillistpm.year = this.items.item.year;
        this.detaillistpm.type = this.type;
        this.detaillistpm.date = this.date;
        this.detaillistpm.empid = this.items.empID;
        console.log('this.detaillistpm install', this.detaillistpm);      
  
        this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
          this.data = work;
  
          for (let i = 0; i < this.data.length; i++) {
            this.Customername = this.data[i].CustomerName;
            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
          }
        });     
      }
      else {
        this.route.queryParams.subscribe(params => {
          this.items = JSON.parse(params["data"]);
        });
  
        console.log('this.items', this.items);
  
        this.detaillistpm.cusID = this.items.item.cusID;
        this.detaillistpm.planID = this.items.item.planID;
        this.detaillistpm.month = this.items.item.month;
        this.detaillistpm.year = this.items.item.year;
        this.detaillistpm.type = this.items.type;
        this.detaillistpm.date = this.items.date;
        this.detaillistpm.empid = this.items.empID;
  
        console.log('this.detaillistpm', this.detaillistpm);
  
        this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
          this.data = work;
  
          for (let i = 0; i < this.data.length; i++) {
            this.Customername = this.data[i].CustomerName;
            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
            console.log('this.data[i].productInstall', this.data[i].productInstall);
          }
        });
      }
    });
  }

  //#endregion

  //#region start
  ngOnInit() {
    // if (this.type == "CM") {
    //   this.imgbf = true
    //   // this.storageService.getUser().then(items => {
    //   //   this.items = items;

    //   //   for (let i = 0; i < this.items.length; i++) {
    //   //     this.empID = this.items[i].empID;
    //   //   }

    //   //   this.detaillistpm.cusID = this.cusID;
    //   //   this.detaillistpm.planID = this.planID;
    //   //   this.detaillistpm.month = this.month;
    //   //   this.detaillistpm.year = this.year;
    //   //   this.detaillistpm.type = this.type;
    //   //   this.detaillistpm.date = this.date;
    //   //   this.detaillistpm.empid = this.empID;

    //   //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
    //   //     this.data = work;

    //   //     for (let i = 0; i < this.data.length; i++) {
    //   //       this.Customername = this.data[i].CustomerName;
    //   //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
    //   //     }
    //   //     console.log('this.data', this.data);

    //   //   });
    //   // });

    //   this.detaillistpm.cusID = this.cusID;
    //   this.detaillistpm.planID = this.planID;
    //   this.detaillistpm.month = this.month;
    //   this.detaillistpm.year = this.year;
    //   this.detaillistpm.type = this.type;
    //   this.detaillistpm.date = this.date;
    //   this.detaillistpm.empid = this.empID;

    //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
    //     this.data = work;

    //     for (let i = 0; i < this.data.length; i++) {
    //       this.Customername = this.data[i].CustomerName;
    //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
    //     }
    //     console.log('this.data', this.data);

    //   });

    //   //console.log('this.items', this.items);

    //   let workclose = {
    //     jobtype: "getworkclose"
    //   }

    //   this.postDataService.SaveCaseAll(workclose).then(data => {
    //     this.getworkclose = data

    //     for (let i = 0; i < this.getworkclose.length; i++) {
    //       if (i == 1) {
    //         this.getworkclose1 = this.getworkclose[1].SystemDataName;
    //         this.getworkclosevalue1 = this.getworkclose[1].SystemID;
    //         this.text = 'ปิดงาน'
    //       } else if (i == 3) {
    //         this.getworkclose2 = this.getworkclose[3].SystemDataName;
    //         this.getworkclosevalue2 = this.getworkclose[3].SystemID;
    //         this.text = 'ตกลง'
    //       } else if (i == 0) {
    //         this.getworkclose3 = this.getworkclose[0].SystemDataName;
    //         this.getworkclosevalue3 = this.getworkclose[0].SystemID;
    //         this.text = 'บันทึก'
    //       }
    //     }
    //   });
    // }
    // else if (this.type == "INSTALL") {
    //   this.imgbf = true
    //   // this.storageService.getUser().then(items => {
    //   //   this.items = items;

    //   //   for (let i = 0; i < this.items.length; i++) {
    //   //     this.empID = this.items[i].empID;

    //   //   }
    //   //   this.detaillistpm.cusID = this.cusID;
    //   //   this.detaillistpm.planID = this.planID;
    //   //   this.detaillistpm.month = this.month;
    //   //   this.detaillistpm.year = this.year;
    //   //   this.detaillistpm.type = this.type;
    //   //   this.detaillistpm.date = this.date;
    //   //   this.detaillistpm.empid = this.empID;

    //   //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
    //   //     this.data = work;

    //   //     for (let i = 0; i < this.data.length; i++) {
    //   //       this.Customername = this.data[i].CustomerName;
    //   //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
    //   //       for (let j = 0; j < this.data[i].productInstall.length; j++) {

    //   //       }
    //   //     }
    //   //   });
    //   // });

    //   this.route.queryParams.subscribe(params => {
    //     this.items = JSON.parse(params["data"]);
    //   });
    //   console.log('this.items', this.items); 

    //   this.detaillistpm.cusID = this.items.item.cusID;
    //   this.detaillistpm.planID = this.items.item.planID;
    //   this.detaillistpm.month = this.items.item.month;
    //   this.detaillistpm.year = this.items.item.year;
    //   this.detaillistpm.type = this.type;
    //   this.detaillistpm.date = this.date;
    //   this.detaillistpm.empid = this.items.empID;
    //   console.log('this.detaillistpm', this.detaillistpm);      

    //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
    //     this.data = work;

    //     for (let i = 0; i < this.data.length; i++) {
    //       this.Customername = this.data[i].CustomerName;
    //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
    //       // for (let j = 0; j < this.data[i].productInstall.length; j++) {

    //       // }
    //     }
    //   });     
    // }
    // else {
    //   this.route.queryParams.subscribe(params => {
    //     this.items = JSON.parse(params["data"]);
    //   });

    //   console.log('this.items', this.items);

    //   this.detaillistpm.cusID = this.items.item.cusID;
    //   this.detaillistpm.planID = this.items.item.planID;
    //   this.detaillistpm.month = this.items.item.month;
    //   this.detaillistpm.year = this.items.item.year;
    //   this.detaillistpm.type = this.items.type;
    //   this.detaillistpm.date = this.items.date;
    //   this.detaillistpm.empid = this.items.empID;

    //   console.log('this.detaillistpm', this.detaillistpm);

    //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
    //     this.data = work;

    //     for (let i = 0; i < this.data.length; i++) {
    //       this.Customername = this.data[i].CustomerName;
    //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
    //       console.log('this.data[i].productInstall', this.data[i].productInstall);

    //       // for (let j = 0; j < this.data[i].productInstall.length; j++) {

    //       // }
    //     }
    //   });
      
    //   // this.storageService.getUser().then(items => {
    //   //   this.items = items;

    //   //   for (let i = 0; i < this.items.length; i++) {
    //   //     this.empID = this.items[i].empID;
    //   //   }

    //   //   this.detaillistpm.cusID = this.cusID;
    //   //   this.detaillistpm.planID = this.planID;
    //   //   this.detaillistpm.month = this.month;
    //   //   this.detaillistpm.year = this.year;
    //   //   this.detaillistpm.type = this.type;
    //   //   this.detaillistpm.date = this.date;
    //   //   this.detaillistpm.empid = this.empID;

    //   //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
    //   //     this.data = work;

    //   //     for (let i = 0; i < this.data.length; i++) {
    //   //       this.Customername = this.data[i].CustomerName;
    //   //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
    //   //       console.log('this.data[i].productInstall', this.data[i].productInstall);

    //   //       for (let j = 0; j < this.data[i].productInstall.length; j++) {

    //   //       }
    //   //     }
    //   //   });
    //   // });
    // }
  }

  //#endregion

  async popupclose(item, header, workclose) {
    console.log(item);

    const modal = await this.modalController.create({
      component: CustomerevaluationPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        installID: item.installId,
        planID: item.planID,
        jobtype: this.type,
        header: header,
        empID: this.empID,
        workclose: workclose,
        item: this.item,
        date: this.date,
        items: this.items
      }
    });

    modal.onDidDismiss().then(data => {
    })

    return await modal.present();
  }

  viewpic(data, item) {
    let params = {
      empID: this.empID,
      data: data,
      item: item,
      type: this.type,
    }
    console.log(params);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(params)
      }
    };
    this.navCtrl.navigateForward(['/picserial'], navigationExtras);
  }

  scan(data, item) {
    if (this.type == "PM" || this.type == "CM") {
      let params = {
        installID: item.installId,
        typedevice: "checkserial"
      }

      this.postDataService.postdevice(params).then(statusserial => {
        this.statusserial = statusserial;

        if (this.statusserial == false) {
          this.click(data, item)
        }
        else {
          let tran = {
            AssetID: item.AssetID,
            Serial: item.Serial,
            planID: item.planID,
            empID: this.empID,
            insID: item.installId,
            type: this.type
          }

          this.postDataService.postTranService(tran).then(TranService => {
            let params = {
              empID: this.empID,
              data: data,
              item: item,
              type: this.type,
            }

            const navigationExtras: NavigationExtras = {
              queryParams: {
                data: JSON.stringify(params)
              }
            };

            this.navCtrl.navigateForward(['/picserial'], navigationExtras);
          });
        }
      });
    }
    else {
      this.click(data, item);
    }
  }
  //#region click
  async click(data, item) {
    console.log('Data', data);
    console.log('item', item);

    if (item.Workfinish == 0 || item.Workfinish == 2) {
      if (item.status == "Pending") {
        const alert = await this.alertController.create({
          message: 'กรุณาติดต่อแอดมินบริษัทสุพีเรีย',
          buttons: ['OK']
        });
        await alert.present();
      }
      else if (this.type == "CM") {
        if (item.tranID != null) {
          console.log('item.WorkCloseID', item.WorkCloseID);
          let tran = {
            AssetID: item.AssetID,
            Serial: item.Serial,
            planID: item.planID,
            empID: this.items.empID,
            insID: item.installId,
            type: this.type
          }

          console.log('tran', tran);

          this.postDataService.postTranService(tran).then(TranService => {
            // console.log(TranService);
          });

          let params = {
            empID: this.items.empID,
            planID: item.planID,
            install: item,
            data: data,
            insID: item.installId,
            sparetype: item.sparepart,
            item: item,
            type: this.type,
            date: this.date,
            month: this.month,
            year: this.year,
            sentCM: this.detailPM
          }

          console.log('params', params);

          const navigationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify(params)
            }
          };

          this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
          console.log("sent", navigationExtras);
        }
        else {
          let alertChoose = await this.alertController.create({
            cssClass: 'custom-alert',
            message: 'กรุณาเลือกการปิดงาน',
            inputs: [
              {
                type: 'radio',
                label: this.getworkclose2,
                value: this.getworkclosevalue2
              },
              {
                type: 'radio',
                label: this.getworkclose3,
                value: this.getworkclosevalue3
              }
            ],
            buttons:
              [{
                text: this.text,
                handler: value => {
                  if (value == this.getworkclosevalue1) {
                    let params = {
                      planID: item.planID,
                      installID: item.installId,
                      empID: this.empID,
                      jobtype: "saveclose",
                      workclose: value
                    }
                    console.log('params ' + value, params);

                    this.postDataService.SaveCaseAll(params).then(result => {
                      if (result == true) {
                        this.imgbf = true
                        this.detaillistpm.PlanID = item.planID
                        this.detaillistpm.jobtype = "SuccessCM"
                        this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
                          this.data = work;

                          for (let i = 0; i < this.data.length; i++) {
                            this.Customername = this.data[i].CustomerName;
                            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                          }
                        });

                        this.alertSuccess();
                        //this.navCtrl.navigateForward(['/menu/overview']);
                      }
                      if (data == false) {
                        this.alertFail();
                      }
                    });
                  }
                  else if (value == this.getworkclosevalue2) {
                    this.UpdateInprogresss();
                    let tran = {
                      AssetID: item.AssetID,
                      Serial: item.Serial,
                      planID: item.planID,
                      empID: this.items.empID,
                      insID: item.installId,
                      type: this.type,
                      workclose: value
                    }

                    console.log('tran ' + value, tran);

                    this.postDataService.postTranService(tran).then(TranService => {

                    });

                    let params = {
                      planID: item.planID,
                      install: item,
                      data: data,
                      insID: item.installId,
                      sparetype: item.sparepart,
                      item: item,
                      type: this.type,
                      date: this.date,
                      month: this.month,
                      year: this.year,
                      empID: this.items.empID,
                    }
                    console.log('params', params);

                    const navigationExtras: NavigationExtras = {
                      queryParams: {
                        data: JSON.stringify(params)
                      }
                    };

                    this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                    console.log("sent", navigationExtras);
                  }
                  else if (value == this.getworkclosevalue3) {
                    this.popupclose(item, this.getworkclose3, value)
                  }
                }
              }]
          });

          await alertChoose.present();
        }
      }

      if (item.tranID != null && this.type != "CM") {
        let tran = {
          AssetID: item.AssetID,
          Serial: item.Serial,
          planID: item.planID,
          empID: this.items.empID,
          insID: item.installId,
          cause: item.cause,
          type: this.type
        }

        this.postDataService.postTranService(tran).then(TranService => {
          // console.log(TranService);
        });

        let params = {
          empID: this.items.empID,
          planID: item.planID,
          install: item,
          data: data,
          insID: item.installId,
          sparetype: item.sparepart,
          item: this.item,
          type: this.type,
          date: this.date,
          month: this.month,
          year: this.year,
        }

        const navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(params)
          }
        };

        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
      }
      else if ((item.tranID == null && this.type != "CM")) {
        let tran = {
          AssetID: item.AssetID,
          Serial: item.Serial,
          planID: item.planID,
          empID: this.items.empID,
          insID: item.installId,
          cause: item.cause,
          type: this.type
        }
        
        let params = {
          empID: this.items.empID,
          planID: item.planID,
          install: item,
          data: data,
          insID: item.installId,
          sparetype: item.sparepart,
          item: this.item,
          type: this.type,
          date: this.date,
          month: this.month,
          year: this.year,
        }

        if (this.type == 'PM') {
          const modal = await this.modalController.create({
            component: UpdateProductPage,
            //cssClass: 'my-custom-modal-css',
            componentProps: {
              tran: tran,
              params: params
            }
          });
  
          modal.onDidDismiss().then(res => {
            let sres = res.data;
  
            if (sres == 'success') {
              console.log('sres', sres);
  
              this.postDataService.postTranService(tran).then(TranService => {
                // console.log(TranService);
              });
        
              const navigationExtras: NavigationExtras = {
                queryParams: {
                  data: JSON.stringify(params)
                }
              };
              
              this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
            }
            else {
              this.NotRecheckAlert();
            }
          });
  
          return await modal.present();
        }
        else {
          //alert();
          this.postDataService.postTranService(tran).then(TranService => {
            // console.log(TranService);
          });
    
          const navigationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify(params)
            }
          };
          
          this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
        }

        // const alert = await this.alertController.create({
        //   header: 'แจ้งเตือน!',
        //   message: 'ต้องการเริ่มทำงาน',
        //   buttons: [
        //     {
        //       text: 'ตกลง',
        //       handler: () => {
        //         let tran = {
        //           AssetID: item.AssetID,
        //           Serial: item.Serial,
        //           planID: item.planID,
        //           empID: this.empID,
        //           insID: item.installId,
        //           cause: item.cause,
        //           type: this.type
        //         }
        //         console.log('tran', tran);

        //         this.postDataService.postTranService(tran).then(TranService => {
        //           // console.log(TranService);
        //         });

        //         let params = {
        //           planID: item.planID,
        //           install: item,
        //           data: data,
        //           insID: item.installId,
        //           sparetype: item.sparepart,
        //           item: this.item,
        //           type: this.type,
        //           date: this.date,
        //           month: this.month,
        //           year: this.year,
        //         }
        //         console.log(params);

        //         const navigationExtras: NavigationExtras = {
        //           queryParams: {
        //             data: JSON.stringify(params)
        //           }
        //         };
        //         this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
        //         console.log("sent", navigationExtras);
        //       }
        //     }, {
        //       text: 'ยกเลิก',
        //       role: 'cancel',
        //       cssClass: 'secondary',
        //       handler: (blah) => {
        //       }
        //     }
        //   ]
        // });
        // await alert.present();
      }
    }

    //รายละเอียด
    if (item.Workfinish == 1) {
      if (this.type == "CM") {
        if (item.WorkCloseID == "WorkClose001" || item.WorkCloseID == "WorkClose003") {

        }
        else {
          let params = {
            empID: this.items.empID,
            data: data,
            newinstallID: item.newinstallID,
            installID: item.installId,
            tranID: item.tranID,
            planID: item.planID,
            type: this.type
          }
          console.log('params', params);

          const navigationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify(params)
            }
          };

          this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
        }
      }
      else if (this.type != "CM") {
        let params = {
          empID: this.items.empID,
          data: data,
          installID: item.installId,
          tranID: item.tranID,
          planID: item.planID,
          type: this.type
        }
        console.log(params);

        const navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(params)
          }
        };
        this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
        console.log("sent", navigationExtras);
      }
    }
  }
  //#endregion

  async NotRecheckAlert() {
    const toast = await this.toastCtrl.create({
      header: 'ไม่สามารถส่งข้อมูลได้',
      //mode: 'ios',
      color: 'danger',
      //showCloseButton: true,
      duration: 3000,
    });

    toast.present();
  }

  async NotPM(data, item) {
    //#region 
    let alert = this.alertController.create({
      header: 'ไม่เข้าตรวจเช็ค!',
      message: 'กรุณาระบุสาเหตุการไม่เข้าตรวจเช็ค (PM)',
      inputs: [
        {
          name: 'detail',
          placeholder: 'เช่น: ร้านปิดบริการชั่วคราว',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'บันทึก',
          handler: data => {
            this.notPM = data.detail;

            let tran = {
              AssetID: item.AssetID,
              Serial: item.Serial,
              planID: item.planID,
              empID: this.empID,
              insID: item.installId,
              cause: data.detail,
              type: this.type
            }

            console.log('tran', tran);

            this.postDataService.postTranService(tran).then(res => {

            });

            this.ngOnInit();
          }
        }
      ]
    });
    (await alert).present();
    //#endregion

    // const modal = await this.modalController.create({
    //   component: NotCheckedPage,
    //   cssClass: 'my-custom-modal-css-pm',
    //   componentProps: {
    //     AssetID: item.AssetID,
    //     Serial: item.Serial,
    //     planID: item.planID,
    //     empID: this.empID,
    //     insID: item.installId,
    //     cause: data.detail,
    //     type: this.type
    //   }
    // });

    // modal.onDidDismiss().then(data => {

    // });

    // return await modal.present();
  }

  UpdateInprogresss() {
    let params = {
      installID: this.insID,
      planID: this.planID,
      typedevice: "UpdateInprogresss",
      empID: this.empID
    }
    console.log(params);
    this.postDataService.postdevice(params).then(status => {
      console.log(status);
    });
  }

  //#region Imgbf
  async Imgbf(item) {
    console.log(item);
    if (this.type == "INSTALL" || this.type == "CM" || this.type == "New") {
      const modal = await this.modalController.create({
        component: ShowimginstallPage,
        cssClass: 'my-custom-modal-css',
        componentProps: {
          installId: item.installId,
          empID: this.items.empID,
          planID: item.planID,
        }
      });
      return await modal.present();
    }
  }
  //#endregion

  //#region
  async showSpareHistory(value) {
    const modal = await this.modalController.create({
      component: RequestsparepartPage,
      cssClass: 'my-custom-modal-css-pm',
      componentProps: {
        empID: this.items.empID,
        insID: value.installId,
        planID: value.planID,
        ItemsName: value.ItemsName,
        type: "history"
      }
    });

    return await modal.present();

    // console.log(value);
    // let params = {
    //   empID: this.empID,
    //   insID: value.installId,
    //   planID: value.planID,
    //   item: this.item,
    //   type: this.type,
    //   date: this.date,
    //   ItemsName: value.ItemsName,
    //   Type: "history"
    // }

    // const navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     data: JSON.stringify(params)
    //   }
    // };

    // this.navCtrl.navigateForward(['/sparepart'], navigationExtras);
  }
  //#endregion

  //#region
  async showSpare(value) {
    const modal = await this.modalController.create({
      component: RequestsparepartPage,
      cssClass: 'my-custom-modal-css-pm',
      componentProps: {
        empID: this.empID,
        insID: value.installId,
        planID: value.planID,
        ItemsName: value.ItemsName,
        type: "request"
      }
    });

    return await modal.present();

    // let params = {
    //   empID: this.empID,
    //   insID: value.installId,
    //   planID: value.planID,
    //   item: this.item,
    //   type: this.type,
    //   date: this.date,
    //   ItemsName: value.ItemsName,
    //   Type: "Sparepart",
    //   data: this.detailPM
    // }

    // console.log('detail params', params);

    // const navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     data: JSON.stringify(params)
    //   }
    // };
    // this.navCtrl.navigateForward(['/sparepart'], navigationExtras);

    // console.log(navigationExtras);
  }  //#endregion

  //#region alert success
  async alertSuccess() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'บันทึกสำเร็จ',
      buttons: ['OK']
    });

    await alert.present();
  }
  //#endregion

  //#region alert success
  async alertFail() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'บันทึกไม่สำเร็จ',
      buttons: ['OK']
    });

    await alert.present();
  }
  //#endregion
  SaveSerial(value) {
    console.log(value);
    let params = {
      insID: value.installId,
      Type: "UpdateSerial",
      EmpID: this.empID,
      SerialNo: value.SerialNo
    }
    console.log(params);
    this.postDataService.PostCus(params).then(status => {
      console.log(status);
    });
  }

  SaveSerialBarcode(value) {
    this.barcodeScanner.scan().then(barcodeData => {
      let barcode = barcodeData

      if (barcode != null || barcode.text != '') {
        let params = {
          insID: value.installId,
          Type: "UpdateSerial",
          EmpID: this.empID,
          SerialNo: barcode.text
        }
        console.log(params);

        this.postDataService.PostCus(params).then(status => {
          console.log(status);
          if (status == true) {
            alert('บันทึกข้อมูล Asset No. เรียบร้อย');
          } else if (status == false) {
            alert('Asset No. ซ้ำ !!!');
          }
        });
        //this.ngOnInit();
      }
    }).catch(err => {
      alert('error ' + err);
      //console.log('Error', err);
    });
  }

  fab() {
    console.log('test');
  }

  imgice(value) {
    console.log(value);

    let params = {
      empID: this.empID,
      insID: value.installId,
      planID: value.planID,
      ItemName: value.ItemsName,
      CustomerName: this.Customername,
    }
    console.log(params);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(params)
      }
    };
    this.navCtrl.navigateForward(['/iceimg'], navigationExtras);

    console.log(navigationExtras);
  }

  async assign(value) {
    let params = {
      empID: this.empID,
      insID: value.installId,
      planID: value.planID,
      item: this.item,
      type: this.type,
      date: this.date,
      ItemsName: value.ItemsName,
      Type: "jobrespons",
      items: this.items
    }

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(params)
      }
    };

    this.navCtrl.navigateForward(['/jobrespons'], navigationExtras);

    // console.log('this.empID',this.empID);

    // const modal = await this.modalController.create({
    //   component: JobresponsPage,
    //   cssClass: 'my-custom-modal-css',
    //   componentProps: {
    //     empID: this.empID,
    //     planID: value.planID,
    //     Type: "jobrespons"
    //   }      
    // });

    // modal.onDidDismiss().then(res => {
    //   this.planID = res.data;

    //   this.postDataService.CheckJobResponse(this.planID).then(res => {
    //     this.jobResponse = res;
    //     console.log('this.jobResponse', this.jobResponse.StatusID);
    //     if (this.jobResponse.StatusID == 'Response') {
    //       this.navCtrl.navigateRoot('/menu/overview');
    //     }
    //   });
    // })

    // return await modal.present();

    // console.log(navigationExtras);
    // let alert = this.alertController.create({
    //   message: 'ตอบรับงาน',
    //   inputs: [
    //     {
    //       name: 'date',
    //       placeholder: 'วันที่',
    //       type: 'date'
    //     },
    //     {
    //       name: 'time',
    //       placeholder: 'เวลา',
    //       type: 'time',
    //     },
    //     {
    //       name: 'remark',
    //       placeholder: 'หมายเหตุ',
    //       type: 'text'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'ยกเลิก',
    //       role: 'cancel',
    //       handler: data => {

    //       }
    //     },
    //     {
    //       text: 'บันทึก',
    //       handler: data => {
    //         this.saveAssign(data)
    //       }
    //     }
    //   ]
    // });
    // (await alert).present();
  }

  saveAssign(data) {
    console.log(data);
    if (data.date == '' || data.time == '' || data.remark == '') {
      this.alertAssign();
    } else {
      let params = {
        insID: this.insID,
        planID: this.planID,
        typedevice: "SaveAssignCM",
        empID: this.empID,
        remark: data.remark,
        time: data.time,
        date: data.date + ' ' + data.time
      }
      console.log(params);
      this.postDataService.postdevice(params).then(status => {
        console.log(status);
        if (status == true) {
          this.alertSuccess();
          this.type == "CM"
          this.ngOnInit();
        }
      });
    }
  }

  //#region alert success
  async alertAssign() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      message: 'กรุณากรอกข้อมูลให้ครบ',
      buttons: ['OK']
    });

    await alert.present();
  }
  //#endregion

  async logs() {
    const modal = await this.modalController.create({
      component: LogPage,
      cssClass: 'my-custom-modal-css-pm',
      componentProps: {
        empID: this.items.empID,
        insID: this.insID,
        planID: this.planID,
      }
    });
    modal.onDidDismiss().then(data => {
      console.log(data);
    })
    return await modal.present();
  }

}
