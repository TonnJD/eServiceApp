import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, NavParams } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { PostDataService } from '../../../../post-data.service';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-jobrespons',
  templateUrl: './jobrespons.page.html',
  styleUrls: ['./jobrespons.page.scss'],
})
export class JobresponsPage implements OnInit {
  insID;
  empID;
  planID;
  SkuID;
  SpareID;
  SpareList;
  SpareImage;
  SpareData;
  DataSpare = [];
  ListSpare = [];
  Amount;
  data;
  buttonColor;
  check = false;
  type;
  item;
  date;
  ItemsName;
  itemname = [];
  cusID;
  SpareJob;
  JobID;
  MainSKUID;
  Type;
  ListJob;
  DetailJobList;
  No;
  url: SafeResourceUrl;

  constructor(public modalController: ModalController,
    private postDataService: PostDataService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    public navCtrl: NavController,
    sanitizer: DomSanitizer,
    private navParams: NavParams) {
    this.buttonColor = 'medium';

    console.log('this.navParams', this.navParams);
    if (this.navParams.data != undefined) {
      this.empID = this.navParams.data.empID;
      this.planID = this.navParams.data.planID;
      this.url = sanitizer.bypassSecurityTrustResourceUrl(this.postDataService.apiServer_url + 'Web/TabletRespone.aspx' + '?planID=' + this.planID + "&empId=" + this.empID);
    }
  }

  close() {
    this.modalController.dismiss(this.planID);
  }

  ngOnInit() {

  }
}