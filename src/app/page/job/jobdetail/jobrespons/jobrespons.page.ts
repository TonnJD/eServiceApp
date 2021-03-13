import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
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
  ListJob ;
  DetailJobList;
  No;
 
  url: SafeResourceUrl;
  constructor(public modalController: ModalController,
    private postDataService: PostDataService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    public navCtrl: NavController,
    sanitizer: DomSanitizer,) {
      this.buttonColor = 'medium';
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["data"]);
      this.insID = this.data.insID;
      this.empID = this.data.empID;
      this.planID = this.data.planID;
      this.item = this.data.item;
      this.type = this.data.type;
      this.date = this.data.date;
      this.ItemsName = this.data.ItemsName;
      this.cusID = this.item.cusID;
      this.Type = this.data.Type;      
      this.url = sanitizer.bypassSecurityTrustResourceUrl(this.postDataService.apiServer_url + 'Web/TabletRespone.aspx' + '?planID=' + this.planID + "&empId=" + this.empID); 
    });       
  }

  ngOnInit() {
    
  } 
}