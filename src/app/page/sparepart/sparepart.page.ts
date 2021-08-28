import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, NavParams } from '@ionic/angular';
import { PostDataService } from '../../post-data.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AddSparepartPage } from '../sparepart/add-sparepart/add-sparepart.page';

@Component({
  selector: 'app-sparepart',
  templateUrl: './sparepart.page.html',
  styleUrls: ['./sparepart.page.scss'],
})
export class SparepartPage implements OnInit {
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
  detailPM;
  mainData;
  searhSparepart;

  constructor(public modalController: ModalController,
    private postDataService: PostDataService,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private navParams: NavParams) {

    // this.route.queryParams.subscribe(params => {
    //   console.log('params', params);
    //   this.detailPM = JSON.parse(params["data"]);
    //   this.mainData = this.detailPM.mainData;
    //   this.ListSpare = JSON.parse(params["sparelist"]);
    //   console.log('this.ListSpare', this.ListSpare);
    // });

    this.detailPM = this.navParams.data;
    this.mainData = this.detailPM.mainData;
    this.ListSpare = this.detailPM.sparelist;
    console.log('this.ListSpare', this.ListSpare);

    this.buttonColor = 'medium';
    this.insID = this.detailPM.insID;
    this.empID = this.detailPM.empID;
    this.planID = this.detailPM.planID;
    this.item = this.detailPM.item;
    this.type = this.detailPM.type;
    this.date = this.detailPM.date;
    this.ItemsName = this.detailPM.ItemsName;
    this.cusID = this.item.cusID;
    this.Type = this.detailPM.Type;

    console.log(this.insID);
    console.log(this.empID);
    console.log(this.planID);
    console.log("item", this.item);
    console.log("type", this.type);
    console.log("Type", this.Type);
    if (this.Type == 'history') {
      this.GetListJob()
    } else { }
    this.getSpare();
  }

  ngOnInit() {
    // this.buttonColor = 'medium';
    // this.route.queryParams.subscribe(params => {
    //   this.detailPM = JSON.parse(params["data"]);
    //   this.insID = this.detailPM.insID;
    //   this.empID = this.detailPM.empID;
    //   this.planID = this.detailPM.planID;
    //   this.item = this.detailPM.item;
    //   this.type = this.detailPM.type;
    //   this.date = this.detailPM.date;
    //   this.ItemsName = this.detailPM.ItemsName;
    //   this.cusID = this.item.cusID;
    //   this.Type = this.detailPM.Type;
    // });

    // console.log(this.insID);
    // console.log(this.empID);
    // console.log(this.planID);
    // console.log("item", this.item);
    // console.log("type", this.type);
    // console.log("Type", this.Type);
    // if (this.Type == 'history') {
    //   this.GetListJob()
    // } else { }
    // this.getSpare();
  }

  getSpare() {
    let params = {
      insID: this.insID,
      Type: "GetSpare",
    }
    console.log(params);
    this.postDataService.PostCus(params).then(SpareList => {
      this.SpareList = SpareList;
      console.log('this.SpareList', this.SpareList);
      for (let a = 0; a < this.SpareList.length; a++) {
        this.itemname.push(
          {
            SparepartGroupID: this.SpareList[a].SparepartGroupID,
            SparepartGroupName: this.SpareList[a].SparepartGroupName,
            MainSKUID: this.SpareList[a].MainSKUID,
            color: 'medium'
          });
        this.MainSKUID = this.SpareList[a].MainSKUID;
      }
      //this.Test();
      console.log('this.itemname', this.itemname);
      console.log('DataSpare', this.DataSpare);
      console.log(this.MainSKUID);

    });
  }

  GetListJob() {
    let params = {
      planID: this.planID,
      insID: this.insID,
      Type: "GetListJob",
    }
    console.log(params);
    this.postDataService.PostCus(params).then(ListJob => {
      this.ListJob = ListJob;
      console.log(this.ListJob);

    });
  }

  GetJob(item, Docno) {
    this.No = Docno;
    let params = {
      planID: this.planID,
      insID: this.insID,
      Type: "GetJob",
      JobID: item
    }
    console.log(params);
    this.postDataService.PostCus(params).then(DetailJobList => {
      this.DetailJobList = DetailJobList;
      console.log(this.DetailJobList);

    });
  }

  delete(value) {
    let params = {
      JobDeviceID: value.JobDeviceID,
      Type: "DeleteJobDevice",
      EmpID: this.empID
    }
    console.log(params);
    this.postDataService.PostCus(params).then(ListJob => {
      console.log(ListJob);
      this.GetJob(ListJob, this.No);
      this.GetListJob();
    });
  }

  DeleteJob(JobID) {
    let params = {
      JobID: JobID,
      Type: "DeleteJob",
      EmpID: this.empID
    }
    console.log(params);
    this.postDataService.PostCus(params).then(ListJob => {
      console.log(ListJob);
      this.GetListJob();
      this.GetJob("", "");
    });
  }

  getImage(i, SparepartGroupID, MainSKUID) {
    this.itemname.splice(0);
    for (let a = 0; a < this.SpareList.length; a++) {
      this.itemname.push(
        {
          SparepartGroupID: this.SpareList[a].SparepartGroupID,
          SparepartGroupName: this.SpareList[a].SparepartGroupName,
          MainSKUID: this.SpareList[a].MainSKUID,
          color: 'medium'
        });
      this.MainSKUID = this.SpareList[a].MainSKUID;
    }

    this.itemname[i].color = 'primary';

    let params = {
      SparepartGroupID: SparepartGroupID,
      empID: this.empID,
      Type: "GetSpareImage",
      MainSKUID: MainSKUID
    }

    this.postDataService.PostCus(params).then(SpareImage => {
      this.SpareImage = this.postDataService.apiStock + SpareImage;
      if (this.SpareImage != null) {
        this.DataSpare.splice(0);
        this.GetListSpare(SparepartGroupID, MainSKUID);
      }
    });
  }

  GetListSpare(SparepartGroupID, MainSKUID) {
    let params = {
      SparepartGroupID: SparepartGroupID,
      empID: this.empID,
      Type: "GetListSpare",
      MainSKUID: MainSKUID
    }
    console.log(params);
    this.postDataService.PostCus(params).then(SpareData => {
      this.SpareData = SpareData;
      console.log('this.SpareData', this.SpareData);

      if (this.SpareImage != null) {
        this.AddDataToList();
      }
    });
  }

  async addSparepart() {
    const modal = await this.modalController.create({
      component: AddSparepartPage,
      //cssClass: 'my-custom-modal-css',
      componentProps: {
      }
    });

    modal.onDidDismiss().then(res => {
      console.log('res', res);
      if (res.data != 'close') {
        this.ListSpare.push(
          {
            ID: res.data.ID,
            PositionNo: res.data.PositionNo,
            Skuname: res.data.Skuname,
            SubSKUID: res.data.SubSKUID,
            Qty: res.data.Qty,
            Balance: res.data.Balance
          });

        console.log('this.ListSpare', this.ListSpare);

      }
    });

    return await modal.present();
  }

  AddDataToList() {
    for (let i = 0; i < this.SpareData.length; i++) {
      this.DataSpare.push(
        {
          ID: this.SpareData[i].ID,
          PositionNo: this.SpareData[i].PositionNo,
          Skuname: this.SpareData[i].Skuname,
          Skucode: this.SpareData[i].Skucode,
          Qty: this.SpareData[i].Qty,
          SubSKUID: this.SpareData[i].SubSKUID,
          Balance: this.SpareData[i].Balance,
          Unit: this.SpareData[i].Unit
        });
    }

    console.log('AddDataToList', this.DataSpare);

  }

  AddToList(i, item) {
    this.check = false;
    console.log(this.check);
    console.log(item);
    if (this.ListSpare != []) {
      for (let j = 0; j < this.ListSpare.length; j++) {
        const a = this.ListSpare[j].ID;
        if (item.ID == a) {
          console.log(a);
          this.check = true;
          break;
        }
      }

      if (this.check == false) {
        this.ListSpare.push(
          {
            ID: item.ID,
            PositionNo: item.PositionNo,
            Skuname: item.Skuname,
            Skucode: item.Skucode,
            SubSKUID: item.SubSKUID,
            Qty: item.Qty,
            Balance: item.Balance,
            Unit: item.Unit
          });
      }
      else {
        this.alertMeanSpart();
      }
    }
    else {
      this.ListSpare.push(
        {
          ID: item.ID,
          PositionNo: item.PositionNo,
          Skuname: item.Skuname,
          Skucode: item.Skucode,
          SubSKUID: item.SubSKUID,
          Qty: item.Qty,
          Balance: item.Balance
        });
    }
  }

  DeleteFromList(i, item) {
    this.ListSpare.splice(i, 1);
  }

  SaveSpare() {
    this.check = false;
    for (let k = 0; k < this.ListSpare.length; k++) {
      const amount = 0;
      if (this.ListSpare[k].Qty == 0) {
        this.check = true;
        break;
      }
    }

    if (this.check == true) {
      this.alertZero();
    }
    else {
      let params = {
        insID: this.insID,
        SkuData: this.ListSpare,
        EmpID: this.empID,
        Type: "SaveSpare",
        CusID: this.cusID,
        planID: this.planID,
        JobID: this.JobID,
      }

      this.postDataService.PostCus(params).then(SpareData => {
        let params = {
          item: this.data.item,
          type: this.data.type,
          date: this.data.date
        }

        console.log('sparepart params', params);

        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(params)
          }
        };

        console.log('sparepart navigationExtras', navigationExtras);
        this.navCtrl.navigateBack(['/joball/listpm/detaillistpm'], navigationExtras);
      });
    }
  }

  submitSpareList() {
    let params = {
      sparelist: this.ListSpare,
      maindata: this.mainData
    }

    this.modalCtrl.dismiss(params);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sparelist: JSON.stringify(params.sparelist),
        data: JSON.stringify(params.maindata)
      }
    };

    //this.navCtrl.navigateBack(['/joball/listpm/detailofdetaillistpm'], navigationExtras);
  }

  close() {
    this.modalCtrl.dismiss('close');
  }

  async alertMeanSpart() {
    const alert = await this.alertCtrl.create({
      message: 'รายการอะไหล่ซ้ำ',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertZero() {
    const alert = await this.alertCtrl.create({
      message: 'กรุณากรอกจำนวนที่ต้องการเบิกให้ถูกต้อง',
      buttons: ['OK']
    });
    await alert.present();
  }

  getItems(ev: any) {
    const val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.itemname = this.itemname.filter((item) => {
        return (item.SparepartGroupName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.itemname.splice(0);
      for (let i = 0; i < this.SpareList.length; i++) {
        this.itemname.push(
          {
            SparepartGroupID: this.SpareList[i].SparepartGroupID,
            SparepartGroupName: this.SpareList[i].SparepartGroupName,
            MainSKUID: this.SpareList[i].MainSKUID,
          });
      }
    }
    console.log('this.itemname', this.itemname);

  }

  searchSparepart(ev: any) {
    const strSearch = ev.target.value;
    
    let params = {
      Type: "GetSparepart",
      searchspare: strSearch,
      MainSKUID: this.SpareList[0].MainSKUID
    }
    console.log(params);
    

    this.postDataService.GetSparepart(params).then(res => {
      this.SpareData = res;
      this.DataSpare = this.SpareData;
      // for (let i = 0; i < this.SpareData.length; i++) {
      //   this.DataSpare.push(
      //     {
      //       ID: this.SpareData[i].ID,
      //       PositionNo: this.SpareData[i].PositionNo,
      //       Skuname: this.SpareData[i].Skuname,
      //       Skucode: this.SpareData[i].Skucode,
      //       Qty: this.SpareData[i].Qty,
      //       SubSKUID: this.SpareData[i].SubSKUID,
      //       Balance: this.SpareData[i].Balance,
      //       Unit: this.SpareData[i].Unit
      //     });
      // }
    });

  }

}
