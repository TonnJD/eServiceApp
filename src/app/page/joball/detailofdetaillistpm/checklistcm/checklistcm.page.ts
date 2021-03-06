import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams, ToastController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { PostDataService } from '../../../../post-data.service';
import { AlertController } from '@ionic/angular';
import { InsertOldSparepartPage } from '../insert-old-sparepart/insert-old-sparepart.page';

@Component({
  selector: 'app-checklistcm',
  templateUrl: './checklistcm.page.html',
  styleUrls: ['./checklistcm.page.scss'],
})
export class ChecklistcmPage implements OnInit {

  //#region data
  empID;
  planID;
  install;
  installID;
  InstallPlanName;
  ItemsName;
  ItemCode;
  SerialNo;
  spare;
  InstallPlanNameNew;
  ItemsNameNew;
  ItemCodeNew;
  SerialNoNew;
  cat;
  public anArray: any = [];
  data;
  dataspare;
  serial = "";
  isShowType = true;
  isShowDevice = false;
  isShowSpare = false;
  isShowSpareDetail = false;
  isShowDeviceDetail = false;
  isEditDevice = false;
  isEditSpare = false;
  sparepart = "";
  asset;
  productname;
  installcode;
  installname;
  installserial;
  installtype;
  assetnew;
  assetold;
  chkdata;
  listreal = [];
  spareList = [];
  list;
  stock;
  No;
  true;
  AsList = [];
  status;
  isdevice = true;
  isspare = true;
  isnon = true;
  show;
  type;
  jobtype;
  spare1 = '';
  spare2 = '';
  spare3 = '';
  spare4 = '';
  spare5 = '';
  qty1;
  qty2;
  qty3;
  qty4;
  qty5;
  jobInSpare;
  //#endregion
  disableNon = false;
  disableChange = false;
  device;

  //#region constructor
  constructor(public modalController: ModalController,
    private barcodeScanner: BarcodeScanner,
    private navParams: NavParams,
    public navCtrl: NavController,
    public alertController: AlertController,
    private postDataService: PostDataService,
    sanitizer: DomSanitizer,
    private toastCtrl: ToastController) {
    this.empID = this.navParams.data.empID;
    this.planID = this.navParams.data.planID;
    this.install = this.navParams.data.install;
    this.installID = this.navParams.data.install.installId;
    this.InstallPlanName = this.navParams.data.InstallPlanName;
    this.ItemsName = this.navParams.data.ItemsName;
    this.ItemCode = this.navParams.data.ItemCode;
    this.SerialNo = this.navParams.data.SerialNo;
    this.cat = this.navParams.data.Cat;
    this.jobtype = this.navParams.data.jobtype;
    this.stock = [];
    console.log('this.jobtype', this.jobtype);


    let param = {
      installID: this.installID,
      typedevice: "CheckCM",
      empID: this.empID,
      planID: this.planID,
    }

    this.postDataService.postdevice(param).then(data => {
      this.show = data;
      console.log('this.show', this.show = data);

      if (this.show == "device") {
        this.isdevice = true;
        this.isspare = false;
        this.isnon = false;
      } else if (this.show == "spare") {
        this.isdevice = false;
        this.isspare = true;
        //this.isnon = false;
      } else {
        this.isdevice = true;
        this.isspare = true;
        this.isnon = true;
      }

      if (this.jobtype == "PM") {
        this.isShowType = false;
        this.isShowSpare = true;
        this.isShowDevice = false;
        this.isShowDeviceDetail = false;
        this.isEditSpare = true;

        if (this.install.RoundFilter != null) {
          this.GetSpareTran();
          this.GetSpareFilter();
        }
        else {
          this.GetSpareTran();
          this.GetSpareCM();
        }
      }
      else if (this.jobtype == "CM")
      {
        this.postDataService.CheckSparepart(this.planID).then(res => {
          this.device = res;
          let length = this.device.length;
          console.log('device', this.device);
          
          if (length === 0) {
            this.disableNon = false;
            this.disableChange = true;
          }
          else
          {
            this.disableNon = true;
            this.disableChange = false;
          }
        });
      }
    });

    this.postDataService.SelectSparepart(this.planID).then(res => {
      this.jobInSpare = res;
      console.log('this.jobInSpare', this.jobInSpare);

      for (let i = 0; i < this.jobInSpare.length; i++) {
        if (this.jobInSpare[i].ListNo == 1) {
          this.spare1 = this.jobInSpare[i].SparepartName;
          this.qty1 = this.jobInSpare[i].Qty;
        }
        else if (this.jobInSpare[i].ListNo == 2) {
          this.spare2 = this.jobInSpare[i].SparepartName;
          this.qty2 = this.jobInSpare[i].Qty;
        }
        else if (this.jobInSpare[i].ListNo == 3) {
          this.spare3 = this.jobInSpare[i].SparepartName;
          this.qty3 = this.jobInSpare[i].Qty;
        }
        else if (this.jobInSpare[i].ListNo == 4) {
          this.spare4 = this.jobInSpare[i].SparepartName;
          this.qty4 = this.jobInSpare[i].Qty;
        }
        else if (this.jobInSpare[i].ListNo == 5) {
          this.spare5 = this.jobInSpare[i].SparepartName;
          this.qty5 = this.jobInSpare[i].Qty;
        }
      }
    });
  }

  //#endregion

  //#region start

  ngOnInit() {

  }

  //#endregion

  //#region click

  close() {
    this.modalController.dismiss();
  }

  GetSparePM() {
    let param = {
      installID: this.installID,
      typedevice: "GetSparePM",
      empID: this.empID,
      planID: this.planID,
    }

    this.postDataService.postdevice(param).then(data => {
      this.dataspare = data
      console.log('this.dataspare', this.dataspare);

      for (let p = 0; p < this.dataspare.length; p++) {
        this.spareList.push(
          {
            AssID: this.dataspare[p].AssID,
            SKUID: this.dataspare[p].SKUID,
            SKUCode: this.dataspare[p].SKUCode,
            Name: this.dataspare[p].Name,
            NameOld: this.dataspare[p].NameOld,
            No: this.dataspare[p].No,
            Qty: this.dataspare[p].Qty,
            Unit: this.dataspare[p].Unit,
            Serial: this.dataspare[p].Serial,
            PartOld: this.dataspare[p].PartOld,
            Balance: this.dataspare[p].Balance,
            isChecked: this.dataspare[p].isChecked
          });
      }

      console.log('this.spareList', this.spareList);
    });
  }

  GetSpareTran() {
    let param = {
      installID: this.installID,
      typedevice: "GetSpareTran",
      empID: this.empID,
      planID: this.planID,
    }

    this.postDataService.postdevice(param).then(data => {
      this.dataspare = data
      console.log('this.dataspare', this.dataspare);

      for (let p = 0; p < this.dataspare.length; p++) {
        this.spareList.push(
          {
            AssID: this.dataspare[p].AssID,
            SKUID: this.dataspare[p].SKUID,
            SKUCode: this.dataspare[p].SKUCode,
            Name: this.dataspare[p].Name,
            NameOld: this.dataspare[p].NameOld,
            No: this.dataspare[p].No,
            Qty: this.dataspare[p].Qty,
            Unit: this.dataspare[p].Unit,
            Serial: this.dataspare[p].Serial,
            PartOld: this.dataspare[p].PartOld,
            Balance: this.dataspare[p].Balance,
            isChecked: this.dataspare[p].isChecked
          });

        console.log('this.spareList', this.spareList);
      }
    });
  }

  GetSpareCM() {
    let params = {
      planID: this.planID,
      installID: this.installID,
      typedevice: "GetSpareCM",
      empID: this.empID,
      type: this.jobtype
    }

    console.log('GetSpareCM', params);

    this.postDataService.postdevice(params).then(res => {
      this.data = res;
      console.log('this.data', this.data);

      this.listreal.splice(0);
      for (let j = 0; j < this.data.length; j++) {
        this.listreal.push(
          {
            AssID: this.data[j].AssID,
            SKUID: this.data[j].SKUID,
            SKUCode: this.data[j].SKUCode,
            Name: this.data[j].Name,
            No: this.data[j].No,
            Unit: this.data[j].Unit,
            Serial: this.data[j].Serial,
            Balance: this.data[j].Balance,
            PartOld: this.data[j].PartOld,
          });
      }
    });

    console.log('this.listreal', this.listreal);
  }

  GetSpareFilter() {
    let params = {
      planID: this.planID,
      installID: this.installID,
      typedevice: "GetSpareFilter",
      empID: this.empID,
      type: this.jobtype
    }

    this.postDataService.postdevice(params).then(res => {
      this.data = res;
      console.log('this.data', this.data);

      this.listreal.splice(0);
      for (let j = 0; j < this.data.length; j++) {
        this.listreal.push(
          {
            AssID: this.data[j].AssID,
            SKUID: this.data[j].SKUID,
            SKUCode: this.data[j].SKUCode,
            Name: this.data[j].Name,
            No: this.data[j].No,
            Unit: this.data[j].Unit,
            Serial: this.data[j].Serial,
            Balance: this.data[j].Balance,
            PartOld: this.data[j].PartOld,
          });
      }
    });

    console.log('this.listreal', this.listreal);
  }

  chang(type) {
    if (type == "sparepart") {
      this.isShowType = false;
      this.isShowSpare = true;
      this.isShowDevice = false;
      this.isShowDeviceDetail = false;
      this.isEditSpare = true;
      this.GetSpareCM();
      this.GetSpareTran();
    }
    else if (type == "device") {
      this.isShowType = false;
      this.isShowDevice = true;
      this.isShowSpare = false;
      let devicetran = {
        planID: this.planID,
        installID: this.installID,
        typedevice: "GetDeviceTran",
        empID: this.empID
      }
      this.postDataService.postdevice(devicetran).then(status => {
        this.status = status
        console.log(this.status);
        if (this.status == false) {
          let params = {
            installID: this.installID,
            typedevice: "GetDevice",
            empID: this.empID
          }
          this.postDataService.postdevice(params).then(data => {
            this.data = data
          });
        } else {
          this.data = this.status;
        }
      });
    }
    else if (type == "non") {
      let devicetran = {
        planID: this.planID,
        installID: this.installID,
        typedevice: "non",
        empID: this.empID
      }
      this.postDataService.postdevice(devicetran).then(status => {
        this.status = status
        console.log(this.status);
      });

      let param = {
        typedevice: "non"
      }
      console.log(param);

      this.modalController.dismiss(param);
    }
  }
  //#endregion

  async InsertOldSparepart(i, item) {
    console.log('item', item);

    const modal = await this.modalController.create({
      component: InsertOldSparepartPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        item: item,
        insID: this.installID,
        tranID: this.install.tranID,
        empID: this.empID,
      }
    });

    modal.onDidDismiss().then(res => {
      let oldData = res.data;
      let status = res.data.status;
      console.log('oldData', oldData);

      if (!status) {
        this.remove(i, item);
      }
      else
      {
        for (let index = 0; index < this.spareList.length; index++) {
          const element = this.spareList[index];
          
          if (element.AssID === oldData.assID) {
            element.NameOld = oldData.oldName;
            element.PartOld = oldData.oldNo;
          }
        }  
        console.log('this.spareList', this.spareList);

      }
    });

    return await modal.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      //header: '???????????????????????????',
      message: '??????????????????????????????????????????????????????????????????',
      //color: 'success',
      duration: 3000
    });

    toast.present();
  }

  //#region device

  search() {
    this.isEditDevice = true;
    console.log(this.serial);
    console.log(this.SerialNo);

    if (this.serial == "") {
      this.isShowDeviceDetail = false;
      let params = {
        installID: this.installID,
        typedevice: "GetDevice",
        empID: this.empID
      }
      this.postDataService.postdevice(params).then(asset => {
        this.data = asset
        console.log(this.asset);
      });
    }
    else if (this.serial == this.SerialNo) {
      this.alertMeanSN();
    }
    else if (this.serial != this.SerialNo) {
      let params = {
        installID: this.installID,
        typedevice: "GetDevice",
        empID: this.empID
      }
      this.postDataService.postdevice(params).then(asset => {
        this.asset = asset
        this.chkdata = 0;
        console.log(this.asset);

        for (let i = 0; i < this.asset.length; i++) {
          const a = this.asset[i].SerialNo
          if (this.serial == a) {
            this.productname = this.asset[i].type;
            this.installcode = this.asset[i].AssetCode;
            this.installname = this.asset[i].AssetNo;
            this.installserial = this.asset[i].SerialNo;
            this.assetnew = this.asset[i].AssetID;
            this.assetold = this.asset[i].assetid;
            this.isShowDeviceDetail = false;
            this.isShowSpare = false;
            this.chkdata = 1;
            console.log(1);
            break;
          }
        }
        if (this.chkdata == 1) {
          let params = {
            installID: this.installID,
            typedevice: "SearchDevice",
            empID: this.empID,
            skuID: this.serial
          }
          this.postDataService.postdevice(params).then(asset => {
            this.data = asset
          });
        }
        if (this.chkdata == 0) {
          this.alertNotSearch();
        }
      });
    }
  }

  //#endregion

  //#region EditDevice
  EditDevice() {
    this.isEditDevice = true;
    let params = {
      installID: this.installID,
      typedevice: "GetDevice",
      empID: this.empID
    }
    this.postDataService.postdevice(params).then(data => {
      this.data = data
    });
  }

  EditSpare() {
    this.isEditSpare = true;
  }
  //#endregion

  select(i, item) {
    this.listreal.splice(i, 1);
    this.spareList.push(
      {
        AssID: item.AssID,
        SKUID: item.SKUID,
        SKUCode: item.SKUCode,
        Name: item.Name,
        NameOld: item.Name,
        No: item.No,
        Unit: item.Unit,
        PartOld: item.PartOld,
        Serial: item.Serial,
        Balance: item.Balance,
        isChecked: item.isChecked
      });

    this.InsertOldSparepart(i, item);
  }
  //#region spare

  Add() {
    if (this.sparepart == "" || this.sparepart == null) {
      this.listreal.splice(0);
      let params = {
        planID: this.planID,
        installID: this.installID,
        typedevice: "GetSpareCM",
        empID: this.empID,
        type: this.jobtype
      }
      console.log(params);

      this.postDataService.postdevice(params).then(data => {
        this.data = data
        for (let j = 0; j < this.data.length; j++) {
          this.listreal.push(
            {
              AssID: this.data[j].AssID,
              SKUID: this.data[j].SKUID,
              SKUCode: this.data[j].SKUCode,
              Name: this.data[j].Name,
              NameOld: this.data[j].Name,
              No: this.data[j].No,
              Unit: this.data[j].Unit,
              Serial: this.data[j].Serial,
              Balance: this.data[j].Balance,
              PartOld: "",
              isChecked: false
            });
        }
      });
    } else {
      let params = {
        installID: this.installID,
        typedevice: "Searchsku",
        empID: this.empID,
        skuID: this.sparepart
      }
      this.postDataService.postdevice(params).then(asset => {

        this.data = asset
        console.log(this.data);

        if (this.data == false) {
          this.alertNotPart();
        } else {
          this.listreal.splice(0);
          for (let j = 0; j < this.data.length; j++) {
            this.listreal.push(
              {
                AssID: this.data[j].AssID,
                SKUID: this.data[j].SKUID,
                SKUCode: this.data[j].SKUCode,
                Name: this.data[j].Name,
                NameOld: this.data[j].Name,
                No: this.data[j].No,
                Unit: this.data[j].Unit,
                Serial: this.data[j].Serial,
                Balance: this.data[j].Balance,
                PartOld: "",
                isChecked: false
              });
          }
        }
      });
    }
  }

  remove(index, item) {
    this.spareList.splice(index, 1);
    this.listreal.push(
      {
        AssID: item.AssID,
        SKUID: item.SKUID,
        SKUCode: item.SKUCode,
        Name: item.Name,
        NameOld: item.NameOld,
        No: item.No,
        Unit: item.Unit,
        PartOld: item.PartOld,
        Serial: item.Serial,
        Balance: item.Balance,
        isChecked: item.isChecked
      });
  }
  //#endregion

  //#region barcode

  scan(type) {
    if (type == 'device') {
      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
        let barcode = barcodeData
        this.serial = barcode.text
        this.search();
      }).catch(err => {
        console.log('Error', err);
      });
    } else if (type == 'spare') {
      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
        let barcode = barcodeData
        this.sparepart = barcode.text
        this.Add();
      }).catch(err => {
        console.log('Error', err);
      });
    }

  }

  //#endregion

  //#region Add Spare
  AddCM(type, item) {
    if (type == "Devices") {
      let params = {
        planID: this.planID,
        installID: this.installID,
        idold: item.assetid,
        idnew: item.AssetID,
        typedevice: "SaveDeviceCM",
        empID: this.empID,
      }
      console.log(params);
      this.postDataService.postdevice(params).then(asset => {
        console.log(asset);
      });

      let param = {
        typedevice: "device"
      }
      console.log(param);
      this.modalController.dismiss(param);
    }
    else if (type == "Spareparts")
    {
      console.log('this.spareList', this.spareList,);

      let strType = (this.install.RoundFilter != null) ? "SaveSparePM" : "SaveSpareCM";

      let params = {
        planID: this.planID,
        installID: this.installID,
        spare: this.spareList,
        typedevice: strType,
        empID: this.empID,
      }
      console.log(params);

      this.postDataService.postdevice(params).then(asset => {
        console.log(asset);
      });

      let param = {
        typedevice: "sparepart",
        spareList: this.listreal,
        install: this.install
      }
      console.log(params);
      this.modalController.dismiss(param);
    }

    this.presentToast();
  }
  //#endregion

  //#region alert
  async alertSN() {
    const alert = await this.alertController.create({
      message: '??????????????????????????? S/N',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertPt() {
    const alert = await this.alertController.create({
      message: '??????????????????????????? Part No.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertPartNo() {
    const alert = await this.alertController.create({
      message: 'Part No. ?????????',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertMeanSN() {
    const alert = await this.alertController.create({
      message: 'S/N ???????????????????????????????????????????????????',
      buttons: ['OK']
    });

    await alert.present();
  }
  async alertNotSearch() {
    const alert = await this.alertController.create({
      message: '??????????????? S/N ?????????',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertStock() {
    const alert = await this.alertController.create({
      message: 'S/N ?????????????????????????????????????????????????????????',
      buttons: ['OK']
    });

    await alert.present();
  }
  //#endregion

  async alertQty() {
    const alert = await this.alertController.create({
      header: '???????????????????????????',
      message: '????????????????????????????????????????????????????????????????????????',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertNotPart() {
    const alert = await this.alertController.create({
      message: '??????????????? Part No. ?????????',
      buttons: ['OK']
    });
    await alert.present();
  }

  async confirmSpare() {
    console.log('this.spare1', this.spare1);
    console.log('this.qty1', this.qty1);

    if (this.spare1 != '' && this.qty1 > 0) {
      this.postDataService.ChangeSparepart(this.planID, this.empID, this.spare1, this.qty1, this.spare2, this.qty2,
        this.spare3, this.qty3, this.spare4, this.qty4, this.spare5, this.qty5).then(res => {
          let param = {
            typedevice: "sparepart"
          }

          this.modalController.dismiss(param);
        });
    }
    else {
      const alert = await this.alertController.create({
        header: '???????????????????????????',
        message: '???????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  async confirmNonSpare() {
    console.log('this.jobInSpare', this.jobInSpare);


    if (this.jobInSpare.length > 0) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '???????????????????????????!',
        message: '??????????????????????????????????????????????????????????????????',
        buttons: [
          {
            text: '??????????????????',
            handler: () => {
              console.log('Confirm Okay');

              this.postDataService.DeleteSparepart(this.planID).then(res => {
                this.chang('non');
              });
            }
          },
          {
            text: '??????????????????',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }
        ]
      });

      await alert.present();
    }
    else {
      this.chang('non');
    }
  }
}
