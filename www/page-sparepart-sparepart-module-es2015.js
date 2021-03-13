(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-sparepart-sparepart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/sparepart.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/sparepart/sparepart.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>เบิกอะไหล่ ({{ItemsName}})</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"Type != 'history'\">\r\n    <ion-item>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\" style=\"margin-top: 15px; margin-bottom: 15px;\">\r\n          <ion-searchbar type=\"text\" (ionChange)=\"getItems($event)\" placeholder=\"ค้นหา\"></ion-searchbar>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <ion-label color=\"primary\">ประเภทอะไหล่</ion-label>\r\n        </div>\r\n        <div class=\"col-sm-3\" *ngFor=\"let s of itemname; let i = index\">\r\n          <ion-button expand=\"block\" color=\"{{s.color}}\" (click)=\"getImage(i,s.SparepartGroupID,s.MainSKUID)\">\r\n            {{s.SparepartGroupName}}</ion-button>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-12\">        \r\n        <ion-select interface=\"popover\" (ionChange)=\"getImage($event)\" [(ngModel)]=\"SpareID\">\r\n          <ion-select-option *ngFor=\"let s of SpareList\" [value]=\"s.SparepartGroupID\" [selected]=\"s.SparepartGroupName\" style=\"width: auto!important;\">\r\n            {{s.SparepartGroupName}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </div> -->\r\n\r\n        <!-- <div class=\"col-sm-3\" *ngFor=\"let s of SpareList\">\r\n        <ion-button expand=\"block\" (click)=\"getImage(s)\" [ngStyle]=\"{'background-color': buttonColor}\">{{s.ProductName}}</ion-button>\r\n        <span class=\"label label-sm label-success circle\" (click)=\"getImage(s)\">{{s.ProductName}}</span>\r\n      </div> -->\r\n      </div>\r\n      <!-- <ion-select interface=\"popover\" (ionChange)=\"getImage($event)\" [(ngModel)]=\"SpareID\">\r\n      <ion-select-option *ngFor=\"let s of SpareList\" [value]=\"s.ProductID\" [selected]=\"s.ProductName\">{{s.ProductName}}\r\n      </ion-select-option>\r\n    </ion-select> -->\r\n    </ion-item>\r\n    <ion-slides zoom>\r\n      <ion-slide>\r\n        <div class=\"swiper-zoom-container\">\r\n          <img [src]=\"SpareImage\" *ngIf=\"SpareImage != null\" />\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <div class=\"row\" style=\"margin: 5px;\" *ngIf=\"DataSpare\">\r\n      <div class=\"col-md-6\" style=\"padding:2px;\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>รายการอะไหล่\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\">\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"table-scrollable\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"text-center\"> ลำดับที่ </th>\r\n                            <th> ชื่ออะไหล่ </th>\r\n                            <th class=\"text-center\"> ตำแหน่ง </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of DataSpare; let i = index\">\r\n                            <td class=\"text-center\"> {{i + 1}} </td>\r\n                            <td> {{item.Skuname}} </td>\r\n                            <td class=\"text-center\"> {{item.PositionNo}} </td>\r\n                            <td class=\"text-center\">\r\n                              <ion-button expand=\"block\" color=\"warning\" (click)=\"AddToList(i,item)\" size=\"small\">เพิ่ม\r\n                              </ion-button>\r\n                              <!-- <span class=\"label label-sm label-warning circle\"\r\n                              (click)=\"AddToList(i,item)\">เพิ่มลงในรายการเบิก</span> -->\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\" style=\"padding:2px;\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>รายการอะไหล่ที่ต้องการเบิก\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\">\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"table-scrollable\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"text-center\"> ลำดับ </th>\r\n                            <th> ชื่ออะไหล่ </th>\r\n                            <th class=\"text-center\"> ตำแหน่ง </th>\r\n                            <th> จำนวนที่ต้องการเบิก </th>\r\n                            <!-- <th> จำนวนคงเหลือในสต็อก </th> -->\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of ListSpare; let i = index\">\r\n                            <td class=\"text-center\"> {{i + 1}} </td>\r\n                            <td> {{item.Skuname}} </td>\r\n                            <td class=\"text-center\"> {{item.PositionNo}} </td>\r\n                            <td> <input type=\"number\" [(ngModel)]=\"item.Amount\" style=\"width: 120px\" /> </td>\r\n                            <!-- <td> {{item.Balance}} </td> -->\r\n                            <td>\r\n                              <ion-button expand=\"block\" color=\"danger\" (click)=\"DeleteFromList(i,item)\" size=\"small\">ลบ\r\n                              </ion-button>\r\n                              <!-- <span class=\"label label-sm label-warning circle\"\r\n                              (click)=\"DeleteFromList(i,item)\">ลบออกจากรายการเบิก</span> -->\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <div class=\"text-center\" *ngIf=\"ListSpare != null\">\r\n                        <ion-button shape=\"round\" color=\"success\" class=\"text-center\" (click)=\"SaveSpare(ListSpare)\">\r\n                          ยืนยันการเบิกอะไหล่</ion-button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"Type == 'history'\">\r\n    <div class=\"portlet-body\">\r\n      <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\" *ngIf=\"ListJob == []\">\r\n        <label>ไม่พบข้อมูล</label>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\" style=\"margin: 2px;\" *ngIf=\"ListJob\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-user\"></i>ประวัติการเบิกอะไหล่\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"table-scrollable\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"text-center\"> ลำดับ </th>\r\n                            <th> เลขที่ใบเบิก </th>\r\n                            <th class=\"text-center\"> อะไหล่ที่เบิก </th>\r\n                            <th> วันที่เบิก </th>\r\n                            <th> สถานะ </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of ListJob; let i = index\">\r\n                            <td class=\"text-center\"> {{i + 1}} </td>\r\n                            <td> {{item.Docno}} </td>\r\n                            <td class=\"text-center\"> {{item.Balance}} </td>\r\n                            <td> {{item.CreatedDate}} </td>\r\n                            <td> {{item.Status}} </td>\r\n                            <td>\r\n                              <ion-button expand=\"block\" color=\"warning\" (click)=\"GetJob(item.JobID,item.Docno)\"\r\n                                size=\"small\">ดู</ion-button>\r\n                              <!-- <span class=\"label label-sm label-warning circle\"\r\n                              (click)=\"DeleteFromList(i,item)\">ลบออกจากรายการเบิก</span> -->\r\n                            </td>\r\n                            <td>\r\n                              <ion-button expand=\"block\" color=\"danger\" (click)=\"DeleteJob(item.JobID)\" size=\"small\"\r\n                                *ngIf=\"item.Status == 'ช่างขอเบิกอะไหล่'\">ลบ</ion-button>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"margin:2px;\" *ngIf=\"DetailJobList\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-user\"></i>รายการเบิกอะไหล่ {{No}}\r\n              </div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n              <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"table-scrollable\">\r\n                        <table class=\"table table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"text-center\"> ลำดับที่ </th>\r\n                              <th> ประเภทอะไหล่ </th>\r\n                              <th> ชื่ออะไหล่ </th>\r\n                              <th class=\"text-center\"> ตำแหน่ง </th>\r\n                              <th class=\"text-center\"> จำนวนที่เบิก </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of DetailJobList; let i = index\">\r\n                              <td class=\"text-center\"> {{i + 1}} </td>\r\n                              <td> {{item.AssetTypeName}} </td>\r\n                              <td> {{item.Skuname}} </td>\r\n                              <td class=\"text-center\"> {{item.PositionNo}} </td>\r\n                              <td class=\"text-center\"> {{item.Amount}} </td>\r\n                              <td>\r\n                                <ion-button expand=\"block\" color=\"danger\" (click)=\"delete(item)\" size=\"small\"\r\n                                  *ngIf=\"item.Status == 'ช่างขอเบิกอะไหล่'\">ลบ</ion-button>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/sparepart/sparepart.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/sparepart/sparepart.module.ts ***!
  \****************************************************/
/*! exports provided: SparepartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparepartPageModule", function() { return SparepartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sparepart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sparepart.page */ "./src/app/page/sparepart/sparepart.page.ts");







const routes = [
    {
        path: '',
        component: _sparepart_page__WEBPACK_IMPORTED_MODULE_6__["SparepartPage"]
    }
];
let SparepartPageModule = class SparepartPageModule {
};
SparepartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sparepart_page__WEBPACK_IMPORTED_MODULE_6__["SparepartPage"]]
    })
], SparepartPageModule);



/***/ }),

/***/ "./src/app/page/sparepart/sparepart.page.scss":
/*!****************************************************!*\
  !*** ./src/app/page/sparepart/sparepart.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  max-width: 100% !important;\n}\n\nion-select-option {\n  max-width: 100% !important;\n}\n\nion-popover .popover-wrapper .popover-content {\n  background-color: white;\n  width: auto !important;\n  left: 0px;\n  max-width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zcGFyZXBhcnQvRTpcXEFwcF9Nb2JpbGVcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxzcGFyZXBhcnRcXHNwYXJlcGFydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvc3BhcmVwYXJ0L3NwYXJlcGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGOztBRENBO0VBQ0UsMEJBQUE7QUNFRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc3BhcmVwYXJ0L3NwYXJlcGFydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0e1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1zZWxlY3Qtb3B0aW9ue1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1wb3BvdmVyIC5wb3BvdmVyLXdyYXBwZXIgLnBvcG92ZXItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gIGxlZnQ6IDBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcbiIsImlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLXBvcG92ZXIgLnBvcG92ZXItd3JhcHBlciAucG9wb3Zlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/sparepart/sparepart.page.ts":
/*!**************************************************!*\
  !*** ./src/app/page/sparepart/sparepart.page.ts ***!
  \**************************************************/
/*! exports provided: SparepartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparepartPage", function() { return SparepartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SparepartPage = class SparepartPage {
    constructor(modalController, postDataService, route, alertController, navCtrl) {
        this.modalController = modalController;
        this.postDataService = postDataService;
        this.route = route;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.DataSpare = [];
        this.ListSpare = [];
        this.check = false;
        this.itemname = [];
        this.route.queryParams.subscribe(params => {
            this.detailPM = JSON.parse(params["data"]);
            console.log('spare params', this.detailPM.data);
        });
    }
    ngOnInit() {
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
        });
        console.log(this.insID);
        console.log(this.empID);
        console.log(this.planID);
        console.log("item", this.item);
        console.log("type", this.type);
        console.log("Type", this.Type);
        if (this.Type == 'history') {
            this.GetListJob();
        }
        else { }
        this.getSpare();
    }
    getSpare() {
        let params = {
            insID: this.insID,
            Type: "GetSpare",
        };
        console.log(params);
        this.postDataService.PostCus(params).then(SpareList => {
            this.SpareList = SpareList;
            console.log(this.SpareList);
            for (let a = 0; a < this.SpareList.length; a++) {
                this.itemname.push({
                    SparepartGroupID: this.SpareList[a].SparepartGroupID,
                    SparepartGroupName: this.SpareList[a].SparepartGroupName,
                    MainSKUID: this.SpareList[a].MainSKUID,
                    color: 'medium'
                });
                this.MainSKUID = this.SpareList[a].MainSKUID;
            }
            //this.Test();
            console.log(this.itemname);
            console.log(this.MainSKUID);
        });
    }
    GetListJob() {
        let params = {
            planID: this.planID,
            insID: this.insID,
            Type: "GetListJob",
        };
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
        };
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
        };
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
        };
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
            this.itemname.push({
                SparepartGroupID: this.SpareList[a].SparepartGroupID,
                SparepartGroupName: this.SpareList[a].SparepartGroupName,
                MainSKUID: this.SpareList[a].MainSKUID,
                color: 'medium'
            });
            this.MainSKUID = this.SpareList[a].MainSKUID;
        }
        this.itemname[i].color = 'primary';
        console.log(SparepartGroupID, MainSKUID);
        let params = {
            SparepartGroupID: SparepartGroupID,
            empID: this.empID,
            Type: "GetSpareImage",
            MainSKUID: MainSKUID
        };
        console.log(params);
        this.postDataService.PostCus(params).then(SpareImage => {
            this.SpareImage = this.postDataService.apiStock + SpareImage;
            if (this.SpareImage != null) {
                this.DataSpare.splice(0);
                this.GetListSpare(SparepartGroupID, MainSKUID);
            }
        });
        console.log(this.SpareImage);
    }
    GetListSpare(SparepartGroupID, MainSKUID) {
        let params = {
            SparepartGroupID: SparepartGroupID,
            empID: this.empID,
            Type: "GetListSpare",
            MainSKUID: MainSKUID
        };
        console.log(params);
        this.postDataService.PostCus(params).then(SpareData => {
            this.SpareData = SpareData;
            if (this.SpareImage != null) {
                this.AddDataToList();
            }
        });
    }
    AddDataToList() {
        for (let i = 0; i < this.SpareData.length; i++) {
            this.DataSpare.push({
                ID: this.SpareData[i].ID,
                PositionNo: this.SpareData[i].PositionNo,
                Skuname: this.SpareData[i].Skuname,
                Amount: this.SpareData[i].Amount,
                SubSKUID: this.SpareData[i].SubSKUID,
                Balance: this.SpareData[i].Balance
            });
        }
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
                this.ListSpare.push({
                    ID: item.ID,
                    PositionNo: item.PositionNo,
                    Skuname: item.Skuname,
                    SubSKUID: item.SubSKUID,
                    Amount: item.Amount,
                    Balance: item.Balance
                });
            }
            else {
                this.alertMeanSpart();
            }
        }
        else {
            this.ListSpare.push({
                ID: item.ID,
                PositionNo: item.PositionNo,
                Skuname: item.Skuname,
                SubSKUID: item.SubSKUID,
                Amount: item.Amount,
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
            if (this.ListSpare[k].Amount == 0) {
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
            };
            this.postDataService.PostCus(params).then(SpareData => {
                let params = {
                    item: this.data.item,
                    type: this.data.type,
                    date: this.data.date
                };
                console.log('sparepart params', params);
                let navigationExtras = {
                    queryParams: {
                        data: JSON.stringify(params)
                    }
                };
                console.log('sparepart navigationExtras', navigationExtras);
                this.navCtrl.navigateBack(['/joball/listpm/detaillistpm'], navigationExtras);
            });
        }
    }
    alertMeanSpart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'รายการอะไหล่ซ้ำ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    alertZero() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'กรุณากรอกจำนวนที่ต้องการเบิกให้ถูกต้อง',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    getItems(ev) {
        const val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.itemname = this.itemname.filter((item) => {
                return (item.SparepartGroupName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.itemname.splice(0);
            for (let i = 0; i < this.SpareList.length; i++) {
                this.itemname.push({
                    SparepartGroupID: this.SpareList[i].SparepartGroupID,
                    SparepartGroupName: this.SpareList[i].SparepartGroupName,
                    MainSKUID: this.SpareList[i].MainSKUID,
                });
            }
        }
        console.log(this.itemname);
    }
};
SparepartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
SparepartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sparepart',
        template: __webpack_require__(/*! raw-loader!./sparepart.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/sparepart.page.html"),
        styles: [__webpack_require__(/*! ./sparepart.page.scss */ "./src/app/page/sparepart/sparepart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], SparepartPage);



/***/ })

}]);
//# sourceMappingURL=page-sparepart-sparepart-module-es2015.js.map