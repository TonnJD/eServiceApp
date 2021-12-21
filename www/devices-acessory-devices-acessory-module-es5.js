(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devices-acessory-devices-acessory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/devices-acessory/devices-acessory.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/devices-acessory/devices-acessory.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>เครื่องและอุปกรณ์คงเหลือ</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"loadpage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>  \r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"row\" style=\"margin: 5px;\">\r\n    <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\" *ngIf=\"load == false\">\r\n      <label>ไม่พบข้อมูล</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin: 5px;\" *ngIf=\"load == true\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let item of Data\">\r\n      <div (click)=\"showDetail(item)\">\r\n        <a href=\"javascript:;\" class=\"icon-btn col-12\">\r\n          <h5> {{item.ProductNameTH}} </h5>\r\n          <span class=\"badge badge-danger\"> {{item.Count}} </span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin: 5px;\" *ngIf=\"isShowDetail\">\r\n    <div class=\"col-12\">\r\n      <div class=\"table-scrollable table-scrollable-borderless\">\r\n        <table class=\"table table-hover table-light\">\r\n          <thead>\r\n            <tr class=\"uppercase\">\r\n              <th colspan=\"2\" style=\"color:black\"> ชื่อสินค้า </th>\r\n              <th style=\"color:black; text-align: center;\"> จำนวนคงเหลือ </th>\r\n              <th style=\"color:black\">  </th>\r\n            </tr>\r\n          </thead>\r\n          <tr *ngFor=\"let item of DataDetail\">\r\n            <td colspan=\"2\" style=\"padding-top: 19px;\"> {{item.SKUName}} </td>\r\n            <td style=\"padding-top: 19px; text-align: center;\">\r\n              <span class=\"bold theme-font\">{{item.Count}}</span>\r\n            </td>\r\n            <td>\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"modalDeviceSpareList(item)\">\r\n                รายละเอียด\r\n              </ion-button>\r\n              <!-- <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"onReturn(item)\">\r\n                คืนสินค้า\r\n              </ion-button> -->\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/devices-acessory/devices-acessory.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/page/devices-acessory/devices-acessory.module.ts ***!
  \******************************************************************/
/*! exports provided: DevicesAcessoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesAcessoryPageModule", function() { return DevicesAcessoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _devices_acessory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devices-acessory.page */ "./src/app/page/devices-acessory/devices-acessory.page.ts");







var routes = [
    {
        path: '',
        component: _devices_acessory_page__WEBPACK_IMPORTED_MODULE_6__["DevicesAcessoryPage"]
    }
];
var DevicesAcessoryPageModule = /** @class */ (function () {
    function DevicesAcessoryPageModule() {
    }
    DevicesAcessoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_devices_acessory_page__WEBPACK_IMPORTED_MODULE_6__["DevicesAcessoryPage"]]
        })
    ], DevicesAcessoryPageModule);
    return DevicesAcessoryPageModule;
}());



/***/ }),

/***/ "./src/app/page/devices-acessory/devices-acessory.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/page/devices-acessory/devices-acessory.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZGV2aWNlcy1hY2Vzc29yeS9kZXZpY2VzLWFjZXNzb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page/devices-acessory/devices-acessory.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/devices-acessory/devices-acessory.page.ts ***!
  \****************************************************************/
/*! exports provided: DevicesAcessoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesAcessoryPage", function() { return DevicesAcessoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _device_spare_list_device_spare_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-spare-list/device-spare-list.page */ "./src/app/page/devices-acessory/device-spare-list/device-spare-list.page.ts");







var TOKEN_KEY = 'auth-token';
var DevicesAcessoryPage = /** @class */ (function () {
    function DevicesAcessoryPage(postDataService, storage, storageService, alertCtrl, navCtrl, router, toastCtrl, modalCtrl) {
        var _this = this;
        this.postDataService = postDataService;
        this.storage = storage;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.isShowDetail = false;
        this.load = false;
        setTimeout(function () {
            _this.ngOnInit();
        }, 500);
    }
    DevicesAcessoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            for (var i = 0; i < _this.items.length; i++) {
                _this.empID = _this.items[i].empID;
            }
        });
        this.loadProduct();
    };
    DevicesAcessoryPage.prototype.loadpage = function () {
        this.loadProduct();
    };
    DevicesAcessoryPage.prototype.loadProduct = function () {
        var _this = this;
        var params = {
            empID: this.empID,
            type: "Overall",
        };
        console.log(params);
        this.postDataService.GetDevice(params).then(function (list) {
            _this.Data = list;
            console.log('this.Data', _this.Data);
            if (_this.Data == []) {
                _this.load = false;
            }
            else {
                _this.load = true;
            }
        });
    };
    DevicesAcessoryPage.prototype.showDetail = function (item) {
        var _this = this;
        console.log('item', item);
        this.isShowDetail = true;
        this.productID = item.ProductID;
        var params = {
            empID: this.empID,
            type: "Detail",
            ProductID: item.ProductID
        };
        this.postDataService.GetDevice(params).then(function (list) {
            _this.DataDetail = list;
            console.log(_this.DataDetail);
        });
    };
    DevicesAcessoryPage.prototype.onReturn = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('item', item.Count);
                return [2 /*return*/];
            });
        });
    };
    DevicesAcessoryPage.prototype.alertLess = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'ใส่จำนวนสินค้าไม่ถูกต้อง',
                            mode: 'md',
                            buttons: [
                                {
                                    text: 'ตกลง',
                                    handler: function () {
                                        _this.onReturn(item);
                                    }
                                }
                            ]
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
    DevicesAcessoryPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
                            color: 'success',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DevicesAcessoryPage.prototype.modalDeviceSpareList = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _device_spare_list_device_spare_list_page__WEBPACK_IMPORTED_MODULE_6__["DeviceSpareListPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                empID: this.empID,
                                item: item
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            var type = res.data;
                            if (type == 'ReturnSuccess') {
                                var params1 = {
                                    empID: _this.empID,
                                    type: "Detail",
                                    ProductID: _this.productID
                                };
                                _this.postDataService.GetDevice(params1).then(function (list) {
                                    _this.DataDetail = list;
                                });
                                var params2 = {
                                    empID: _this.empID,
                                    type: "Overall",
                                };
                                _this.postDataService.GetDevice(params2).then(function (list) {
                                    _this.Data = list;
                                    if (_this.Data == []) {
                                        _this.load = false;
                                    }
                                    else {
                                        _this.load = true;
                                    }
                                    _this.presentToast();
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DevicesAcessoryPage.ctorParameters = function () { return [
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    DevicesAcessoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices-acessory',
            template: __webpack_require__(/*! raw-loader!./devices-acessory.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/devices-acessory/devices-acessory.page.html"),
            styles: [__webpack_require__(/*! ./devices-acessory.page.scss */ "./src/app/page/devices-acessory/devices-acessory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], DevicesAcessoryPage);
    return DevicesAcessoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=devices-acessory-devices-acessory-module-es5.js.map