(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-sparepart-request-sparepart-request-sparepart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>เบิกอะไหล่</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-md-12 col-12\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <h6>ค้นหา สินค้า/อะไหล่</h6>\r\n            </div>\r\n            <div class=\"tools\"></div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\">\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 20px;\">\r\n\r\n              <div class=\"form-group row\" style=\" margin-bottom: 30px;\">\r\n                <div class=\"col-9\" style=\"padding-top: 5px;\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Part No. / ชื่ออะไหล่\" [(ngModel)]=\"textSearch\">\r\n                </div>\r\n                <div class=\"col-3\">\r\n                  <ion-button expand=\"block\" color=\"primary\" (click)=\"searchSparepart()\">\r\n                    <ion-icon name=\"search\"></ion-icon>ค้นหา</ion-button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <div style=\"height: 250px; overflow-y:scroll; width: 100%;border: 1px solid gainsboro;\">\r\n                  <div class=\"table-scrollable\" style=\"margin-top: 0 !important;border-top: 0 !important;\">\r\n                    <table class=\"table table-hover\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th> SKU Code </th>\r\n                          <th> ชื่ออะไหล่ </th>\r\n                          <th class=\"text-center\"></th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of partData\">\r\n                          <td style=\"padding-top: 20px;\"> {{item.SKUCode}} </td>\r\n                          <td style=\"padding-top: 20px;\"> {{item.Name}} </td>\r\n                          <td class=\"text-center\">\r\n                            <ion-button expand=\"block\" color=\"warning\" (click)=\"AddToList(item)\" size=\"small\">เพิ่ม\r\n                            </ion-button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              \r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-12\">\r\n                  <ion-button color=\"primary\" (click)=\"addSparepart()\">\r\n                    <ion-icon name=\"add\"></ion-icon>เพิ่มรายการ\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"alert alert-primary\" role=\"alert\">\r\n                    <h5 class=\"alert-heading\">หมายเหตุ:</h5>\r\n                    <hr>\r\n                    <p class=\"mb-0\">กดปุ่มเพิ่มรายการ กรณีที่ไม่มีรายการอะไหล่ในระบบ</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" *ngIf=\"this.selectSpareList.length > 0\">\r\n            <div class=\"col-md-12 col-12\">\r\n              <h5>รายการที่เลือก </h5>&emsp; <h6 *ngIf=\"this.selectSpareList.length > 0\">{{this.selectSpareList.length}} รายการ</h6>\r\n            </div>\r\n            <div class=\"col-md-12 col-12\">\r\n              <div style=\"height: 250px; overflow-y:scroll;border: 1px solid gainsboro;\">\r\n                <div class=\"table-scrollable\" style=\"margin-top: 0 !important;border-top: 0 !important;\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th> SKU Code </th>\r\n                        <th> ชื่ออะไหล่ </th>\r\n                        <th> จำนวนที่เบิก </th>\r\n                        <th class=\"text-center\"></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of selectSpareList; let i = index\">\r\n                        <td style=\"padding-top: 20px;\"> {{item.SKUCode}} </td>\r\n                        <td style=\"padding-top: 20px;\"> {{item.Name}} </td>\r\n                        <td>\r\n                          <input type=\"number\" [(ngModel)]=\"item.Qty\" style=\"width: 120px; text-align: center;\" min=\"1\" class=\"form-control\" />\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <ion-button expand=\"block\" color=\"danger\" (click)=\"DeleteFromList(i)\" size=\"small\">ลบ\r\n                          </ion-button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" *ngIf=\"this.selectSpareList.length > 0\">\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 15px;\">\r\n              <h5>กรุณาเลือก ประเภทการเบิก </h5>\r\n            </div>\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 15px;\">\r\n              <ion-radio-group (ionChange)=\"onRadioChange($event)\" [(ngModel)]=\"problemby\">\r\n                <ion-item>\r\n                  <ion-label>เบิกอะไหล่งาน PM</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"PM\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>เบิกอะไหล่งาน CM</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"CM\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>เบิกอะไหล่สำรอง</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"Spare\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" *ngIf=\"this.selectSpareList.length > 0\">\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 15px;\">\r\n              <h5>กรุณาเลือก ร้านค้า/สาขา </h5>\r\n            </div>\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 15px;\">\r\n              <ion-searchbar type=\"text\" (ionChange)=\"searchCustomer($event)\" placeholder=\"ค้นหา ร้านค้า/สาขา\"></ion-searchbar>\r\n            </div>\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 15px;\">\r\n              <div style=\"height: 250px; overflow-y:scroll; width: 100%;border: 1px solid gainsboro;\">\r\n                <div class=\"table-scrollable\" style=\"margin-top: 0 !important;border-top: 0 !important;\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th> ร้านค้า/สาขา </th>\r\n                        <th class=\"text-center\" style=\"width: 80px;\"></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of customer\">\r\n                        <td style=\"padding-top: 20px;\"> {{item.CustomerName}} </td>\r\n                        <td class=\"text-center\" style=\"width: 80px;\">\r\n                          <ion-button expand=\"block\" color=\"primary\" (click)=\"addCustomer(item)\" size=\"small\" *ngIf=\"item.CustomerID != cusID\">เลือก\r\n                          </ion-button>\r\n                          <ion-button expand=\"block\" color=\"success\" (click)=\"rmCustomer(item)\" size=\"small\" *ngIf=\"item.CustomerID == cusID\">เลือกแล้ว\r\n                          </ion-button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" *ngIf=\"this.selectSpareList.length > 0\">\r\n            <div style=\"margin-top: 10px; margin-bottom: 30px;\" class=\"text-center\">\r\n              <ion-button color=\"primary\" class=\"text-center\" (click)=\"modalReqDetail()\">\r\n                ตรวจสอบรายละเอียด</ion-button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/sparepart/request-sparepart/request-sparepart.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/page/sparepart/request-sparepart/request-sparepart.module.ts ***!
  \******************************************************************************/
/*! exports provided: RequestSparepartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSparepartPageModule", function() { return RequestSparepartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-sparepart.page */ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.ts");







var routes = [
    {
        path: '',
        component: _request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__["RequestSparepartPage"]
    }
];
var RequestSparepartPageModule = /** @class */ (function () {
    function RequestSparepartPageModule() {
    }
    RequestSparepartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__["RequestSparepartPage"]]
        })
    ], RequestSparepartPageModule);
    return RequestSparepartPageModule;
}());



/***/ }),

/***/ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/page/sparepart/request-sparepart/request-sparepart.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*=\" fa-\"]:not(.fa-stack),\n[class*=\" glyphicon-\"],\n[class*=\" icon-\"],\n[class^=fa-]:not(.fa-stack),\n[class^=glyphicon-],\n[class^=icon-] {\n  font-size: 1em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zcGFyZXBhcnQvcmVxdWVzdC1zcGFyZXBhcnQvQzpcXFNvbHV0aW9uXFxHaXRodWJcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxzcGFyZXBhcnRcXHJlcXVlc3Qtc3BhcmVwYXJ0XFxyZXF1ZXN0LXNwYXJlcGFydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvc3BhcmVwYXJ0L3JlcXVlc3Qtc3BhcmVwYXJ0L3JlcXVlc3Qtc3BhcmVwYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUkseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc3BhcmVwYXJ0L3JlcXVlc3Qtc3BhcmVwYXJ0L3JlcXVlc3Qtc3BhcmVwYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9XCIgZmEtXCJdOm5vdCguZmEtc3RhY2spLFxyXG5bY2xhc3MqPVwiIGdseXBoaWNvbi1cIl0sXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbltjbGFzc149ZmEtXTpub3QoLmZhLXN0YWNrKSxcclxuW2NsYXNzXj1nbHlwaGljb24tXSxcclxuW2NsYXNzXj1pY29uLV0ge1xyXG4gICAgZm9udC1zaXplOiAxLjBlbSAhaW1wb3J0YW50O1xyXG59IiwiW2NsYXNzKj1cIiBmYS1cIl06bm90KC5mYS1zdGFjayksXG5bY2xhc3MqPVwiIGdseXBoaWNvbi1cIl0sXG5bY2xhc3MqPVwiIGljb24tXCJdLFxuW2NsYXNzXj1mYS1dOm5vdCguZmEtc3RhY2spLFxuW2NsYXNzXj1nbHlwaGljb24tXSxcbltjbGFzc149aWNvbi1dIHtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/page/sparepart/request-sparepart/request-sparepart.page.ts ***!
  \****************************************************************************/
/*! exports provided: RequestSparepartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSparepartPage", function() { return RequestSparepartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _req_detail_req_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../req-detail/req-detail.page */ "./src/app/page/sparepart/req-detail/req-detail.page.ts");
/* harmony import */ var _add_sparepart_add_sparepart_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-sparepart/add-sparepart.page */ "./src/app/page/sparepart/add-sparepart/add-sparepart.page.ts");








var RequestSparepartPage = /** @class */ (function () {
    function RequestSparepartPage(postDataService, alertCtrl, navCtrl, storageService, toastCtrl, loadCtrl, modalCtrl, route) {
        var _this = this;
        this.postDataService = postDataService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.partData = [];
        this.selectSpareList = [];
        this.isSearching = false;
        this.cusID = '';
        this.cusName = '';
        this.route.queryParams.subscribe(function (params) {
            _this.items = JSON.parse(params["data"]);
            _this.empID = _this.items.empID;
        });
    }
    RequestSparepartPage.prototype.ngOnInit = function () {
        // this.storageService.getUser().then(items => {
        //   for (let i = 0; i < items.length; i++) {
        //     this.empID = items[i].empID;
        //   }
        // });
    };
    RequestSparepartPage.prototype.searchCustomer = function (ev) {
        var _this = this;
        //this.presentLoading();
        var strSearch = ev.target.value;
        this.postDataService.CustomerList(strSearch).then(function (Cus) {
            _this.customer = Cus;
            //this.loadCtrl.dismiss(null);
        });
    };
    RequestSparepartPage.prototype.searchSparepart = function () {
        var _this = this;
        this.presentLoading();
        var strSearch = this.textSearch;
        this.partData = [];
        this.postDataService.SearchSparepart(strSearch).then(function (res) {
            _this.data = res;
            console.log('res', res);
            for (var i = 0; i < _this.data.length; i++) {
                _this.partData.push({
                    Name: _this.data[i].Name,
                    SKUCode: _this.data[i].SKUCode,
                    SKUID: _this.data[i].SKUID,
                });
            }
            _this.loadCtrl.dismiss(null);
        });
    };
    RequestSparepartPage.prototype.onRadioChange = function (ev) {
        this.reqType = ev.detail.value;
    };
    RequestSparepartPage.prototype.AddToList = function (item) {
        console.log('item', item);
        var check = false;
        if (this.selectSpareList != []) {
            for (var j = 0; j < this.selectSpareList.length; j++) {
                var a = this.selectSpareList[j].SKUID;
                if (item.SKUID == a) {
                    console.log(a);
                    check = true;
                    break;
                }
            }
            if (check == false) {
                this.selectSpareList.push({
                    Name: item.Name,
                    SKUCode: item.SKUCode,
                    SKUID: item.SKUID,
                    Qty: 1
                });
            }
            else {
                this.alertMeanSpart();
            }
        }
        else {
            this.selectSpareList.push({
                Name: item.Name,
                SKUCode: item.SKUCode,
                SKUID: item.SKUID,
                Qty: 1
            });
        }
    };
    RequestSparepartPage.prototype.addCustomer = function (item) {
        this.cusID = item.CustomerID;
        this.cusName = item.CustomerName;
    };
    RequestSparepartPage.prototype.rmCustomer = function (item) {
        this.cusID = '';
        this.cusName = '';
    };
    RequestSparepartPage.prototype.submitSpareList = function () {
        var params = {
            empID: this.empID,
            sparelist: this.selectSpareList
        };
        // this.postDataService.InsertRequisition(params);
        // this.toastSuccess();
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     sparelist: JSON.stringify(params.sparelist),
        //     data: JSON.stringify(params)
        //   }
        // };
        // this.navCtrl.navigateBack(['/menu/sparepart'], navigationExtras);
    };
    RequestSparepartPage.prototype.DeleteFromList = function (i) {
        this.selectSpareList.splice(i, 1);
    };
    RequestSparepartPage.prototype.alertMeanSpart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'รายการอะไหล่ซ้ำ',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestSparepartPage.prototype.toastSuccess = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
                            duration: 3000,
                            color: 'success'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestSparepartPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            //spinner: null,
                            duration: 1000,
                            message: 'กำลังค้นหา...',
                            translucent: true,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestSparepartPage.prototype.modalReqDetail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('this.reqType', this.reqType);
                        console.log('this.items', this.items);
                        if (this.reqType == undefined) {
                            this.alertReqType();
                            return [2 /*return*/];
                        }
                        else if (this.reqType == 'PM' || this.reqType == 'CM') {
                            if (this.cusID == '' && this.cusName == '') {
                                this.alertCustomer();
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _req_detail_req_detail_page__WEBPACK_IMPORTED_MODULE_6__["ReqDetailPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    empID: this.items.empID,
                                    cusID: this.cusID,
                                    cusName: this.cusName,
                                    reqType: this.reqType,
                                    sparelist: this.selectSpareList,
                                    items: this.items
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            var type = res.data;
                            if (type == 'submit') {
                                var params_1 = {
                                    empID: _this.items.empID,
                                    cusID: _this.cusID,
                                    reqType: _this.reqType,
                                    sparelist: _this.selectSpareList
                                };
                                _this.postDataService.InsertRequisition(params_1).then(function (res) {
                                    var status = res;
                                    if (status) {
                                        _this.toastSuccess();
                                        var navigationExtras = {
                                            queryParams: {
                                                sparelist: JSON.stringify(params_1.sparelist),
                                                data: JSON.stringify(params_1)
                                            }
                                        };
                                        _this.navCtrl.navigateBack(['/menu/sparepart'], navigationExtras);
                                    }
                                    else {
                                        _this.alertInsertReq();
                                    }
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestSparepartPage.prototype.addSparepart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _add_sparepart_add_sparepart_page__WEBPACK_IMPORTED_MODULE_7__["AddSparepartPage"],
                            //cssClass: 'my-custom-modal-css',
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            console.log('res', res);
                            if (res.data != 'close') {
                                _this.selectSpareList.push({
                                    Name: res.data.Skuname,
                                    SKUCode: res.data.Skucode,
                                    SKUID: '',
                                    Qty: res.data.Qty
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RequestSparepartPage.prototype.alertInsertReq = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'ขอเบิกอะไหล่เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestSparepartPage.prototype.alertReqType = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'กรุณาเลือกประเภทการเบิก',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestSparepartPage.prototype.alertCustomer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'กรุณาเลือกร้าน/สาขา กรณีเลือกประเภทการเบิกงาน PM และ เบิกงาน CM',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestSparepartPage.ctorParameters = function () { return [
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    RequestSparepartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-sparepart',
            template: __webpack_require__(/*! raw-loader!./request-sparepart.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html"),
            styles: [__webpack_require__(/*! ./request-sparepart.page.scss */ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RequestSparepartPage);
    return RequestSparepartPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-sparepart-request-sparepart-request-sparepart-module-es5.js.map