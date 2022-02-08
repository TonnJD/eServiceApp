import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-req-detail',
  templateUrl: './req-detail.page.html',
  styleUrls: ['./req-detail.page.scss'],
})

export class ReqDetailPage implements OnInit {

  data;
  cusID;
  cusName;
  sparelist;
  empID;
  reqType;
  reqTypeStr;
  items;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.items = JSON.parse(params["data"]);
      console.log('this.items', this.items);
      
    });

    console.log('this.navParams.data', this.navParams.data);
    

    this.data = this.navParams.data;
    this.empID = this.data.empID;
    this.cusID = this.data.cusID;
    this.cusName = this.data.cusName;
    this.reqType = this.data.reqType;

    if (this.data.reqType == "PM") {
      this.reqTypeStr = "เบิกอะไหล่งาน PM";
    }
    else if (this.data.reqType == "CM") {
      this.reqTypeStr = "เบิกอะไหล่งาน CM";
    }
    else if (this.data.reqType == "Spare") {
      this.reqTypeStr = "เบิกอะไหล่เพื่อสำรอง";
    }
    
    this.sparelist = this.data.sparelist;
  }

  ngOnInit() {
  }

  submit() {
    this.modalCtrl.dismiss('submit');
  }

  close() {
    this.modalCtrl.dismiss('close');
  }

}
