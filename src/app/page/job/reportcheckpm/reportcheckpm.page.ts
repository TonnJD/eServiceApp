import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { StorageService } from '../../../storage.service';
import { PostDataService } from '../../../post-data.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reportcheckpm',
  templateUrl: './reportcheckpm.page.html',
  styleUrls: ['./reportcheckpm.page.scss'],
})
export class ReportcheckpmPage implements OnInit {

  //#region data
  items;
  name;
  type = "PM";
  data: any;
  Today;
  month;
  intMonth;
  intYear;
  textShow;
  json: any;
  listpmdetail;
  job;
  myempID: string;
  empid: any;
  listpm;
  load = false;
  //#endregion

  //#region constructor
  constructor(public DataService: AuthServiceService,
    public alertController: AlertController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private storageService: StorageService,
    private postDataService: PostDataService,) {
    this.json;
    this.listpmdetail = [];
    this.job = [];
    this.storageService.getUser().then(items => {
      this.items = items;  
      for (let i = 0; i < this.items.length; i++) {
        this.myempID = this.items[i].empID;
        this.name = this.items[i].name;
      }
    });

    this.route.queryParams.subscribe(params => {
      this.listpm = null;
      this.ChangeMonth();
      this.ngOnInit();
    });

    this.ChangeMonth()
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }
  //#endregion

  //#region load 
  loadItems() {
    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.myempID = this.items[i].empID;
        console.log(this.myempID);
      }
    });
  }
  //#endregion

  //#region click
  click(item, data) {
    console.log('item', item);
    let param = {
      planID: item.value.planID,
      empID: this.empid,
      type: "checkstatus",
    }

    this.postDataService.postcheck(param).then(status => {
      console.log(status);

      if (status == true) {
        let params = {
          item: item.value,
          type: this.type,
          date: data.planDate,
        }

        console.log('checkpm params', params);

        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(params)
          }
        };
        
        this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
      } else {
        this.status();
      }
    });


  }
  //#endregion

  //#region alert status
  async status() {
    const alert = await this.alertController.create({
      message: '????????????????????????????????????????????????????????????????????????????????????',
      buttons: ['OK']
    });
    await alert.present();
  }
  //#endregion
  //#region ChangMonth
  ChangeMonth() {
    const month = new Date().getMonth() + 1;
    this.intMonth = month;
    const year = new Date().getFullYear();
    this.intYear = year;

    //#region changemonth  
    if (month == 1) {
      this.month = '??????????????????'
      this.intMonth = 1;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 2) {
      this.month = '??????????????????????????????'
      this.intMonth = 2;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 3) {
      this.month = '??????????????????'
      this.intMonth = 3;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 4) {
      this.month = '??????????????????'
      this.intMonth = 4;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 5) {
      this.month = '?????????????????????'
      this.intMonth = 5;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 6) {
      this.month = '????????????????????????'
      this.intMonth = 6;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 7) {
      this.month = '?????????????????????'
      this.intMonth = 7;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 8) {
      this.month = '?????????????????????'
      this.intMonth = 8;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 9) {
      this.month = '?????????????????????'
      this.intMonth = 9;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 10) {
      this.month = '??????????????????'
      this.intMonth = 10;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 11) {
      this.month = '???????????????????????????'
      this.intMonth = 11;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 12) {
      this.month = '?????????????????????'
      this.intMonth = 12;
      this.textShow = this.month + " " + this.intYear
    }
    //#endregion

    // if (this.intYear > year) {
    //   this.intYear = year
    // }

    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.empid = this.items[i].empID
        this.name = this.items[i].name;
      }
      this.job.empID = this.empid;
      this.job.month = this.intMonth;
      this.job.year = this.intYear;
      this.job.jobtype = this.type
      console.log(this.job);

      this.postDataService.postJobList(this.job).then(work => {
        this.listpm = work;
        
        for (let i = 0; i < this.listpm.length; i++) {
          this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
        }
      });
    });
  }
  //#endregion

  //#region ChangMonthNext
  changeMonthNext(value) {
    console.log(value);
    this.load = true;

    // const year = new Date().getFullYear();
    //#region nextmonth
    if (this.month == '??????????????????') {
      this.month = '??????????????????????????????'
      this.intMonth = 2;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????????????????') {
      this.month = '??????????????????'
      this.intMonth = 3;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????') {
      this.month = '??????????????????'
      this.intMonth = 4;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 5;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '????????????????????????'
      this.intMonth = 6;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '????????????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 7;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 8;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 9;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '??????????????????'
      this.intMonth = 10;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????') {
      this.month = '???????????????????????????'
      this.intMonth = 11;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '???????????????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 12;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '??????????????????'
      this.intMonth = 1;
      this.intYear = this.intYear + 1
      this.textShow = this.month + " " + this.intYear
    }
    // if (this.intYear > year) {
    //   this.intYear = year
    // }
    //#endregion

    if (value == false) {
      this.job.empID = this.empid;
      this.job.month = this.intMonth;
      this.job.year = this.intYear;
      this.job.jobtype = this.type
      console.log(this.job);

      this.postDataService.postJobList(this.job).then(work => {
        this.listpm = work;
        
        for (let i = 0; i < this.listpm.length; i++) {
          this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
        }
      });
    }

    if (value != false) {
      this.listpm = false;
    }

    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.empid = this.items[i].empID
        this.name = this.items[i].name;
      }
      this.job.empID = this.empid;
      this.job.month = this.intMonth;
      this.job.year = this.intYear;
      this.job.jobtype = this.type
      console.log(this.job);

      this.postDataService.postJobList(this.job).then(work => {
        this.listpm = work;

        for (let i = 0; i < this.listpm.length; i++) {
          this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
        }
        
        if (this.listpm == false) {
          this.load = false;
        }

      });
    });
  }
  //#endregion

  //#region ChangBack
  changeMonthBack(value) {
    this.load = true;
    //#region backmonth
    if (this.month == '??????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 12;
      this.intYear = this.intYear - 1
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????????????????') {
      this.month = '??????????????????'
      this.intMonth = 1;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????') {
      this.month = '??????????????????????????????'
      this.intMonth = 2;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????') {
      this.month = '??????????????????'
      this.intMonth = 3;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '??????????????????'
      this.intMonth = 4;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '????????????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 5;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '????????????????????????'
      this.intMonth = 6;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 7;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 8;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '??????????????????') {
      this.month = '?????????????????????'
      this.intMonth = 9;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '???????????????????????????') {
      this.month = '??????????????????'
      this.intMonth = 10;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == '?????????????????????') {
      this.month = '???????????????????????????'
      this.intMonth = 11;
      this.textShow = this.month + " " + this.intYear
    }

    //#endregion
    if (value == false) {
      this.job.empID = this.empid;
      this.job.month = this.intMonth;
      this.job.year = this.intYear;
      this.job.jobtype = this.type
      console.log(this.job);

      this.postDataService.postJobList(this.job).then(work => {
        this.listpm = work;
        console.log(this.listpm);


        for (let i = 0; i < this.listpm.length; i++) {
          this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
        }

        // console.log('listpm', this.listpm);

      });
    }
    if (value != false) {
      this.listpm = false;
    }

    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.empid = this.items[i].empID
        this.name = this.items[i].name;
      }
      this.job.empID = this.empid;
      this.job.month = this.intMonth;
      this.job.year = this.intYear;
      this.job.jobtype = this.type
      console.log(this.job);

      this.postDataService.postJobList(this.job).then(work => {
        this.listpm = work;
        console.log(this.listpm);


        for (let i = 0; i < this.listpm.length; i++) {
          this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
        }

        // console.log('listpm', this.listpm);
        if (this.listpm == false) {
          this.load = false;
        }
      });
    });
  }

  //#endregion

  //#region start
  ngOnInit() {
    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.empid = this.items[i].empID
        this.name = this.items[i].name;
      }
    });

  }
  //#endregion

  //#region load
  ionViewDidLoad() {
    setTimeout(() => {
      this.ngOnInit();
    }, 350);
  }
  //#endregion
}
