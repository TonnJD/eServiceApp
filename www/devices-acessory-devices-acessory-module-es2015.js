(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devices-acessory-devices-acessory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/devices-acessory/devices-acessory.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/devices-acessory/devices-acessory.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>เครื่องและอุปกรณ์คงเหลือ</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"loadpage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>  \r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"row\" style=\"margin: 5px;\">\r\n    <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\" *ngIf=\"load == false\">\r\n      <label>ไม่พบข้อมูล</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin: 5px;\" *ngIf=\"load == true\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let item of Data\">\r\n      <div (click)=\"showDetail(item)\">\r\n        <a href=\"javascript:;\" class=\"icon-btn col-12\">\r\n          <h5> {{item.ProductNameTH}} </h5>\r\n          <span class=\"badge badge-danger\"> {{item.Count}} </span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin: 5px;\" *ngIf=\"isShowDetail\">\r\n    <div class=\"col-12\">\r\n      <div class=\"table-scrollable table-scrollable-borderless\">\r\n        <table class=\"table table-hover table-light\">\r\n          <thead>\r\n            <tr class=\"uppercase\">\r\n              <th colspan=\"2\" style=\"color:black\"> ชื่อสินค้า </th>\r\n              <th style=\"color:black\"> จำนวนคงเหลือ </th>\r\n              <th style=\"color:black\">  </th>\r\n            </tr>\r\n          </thead>\r\n          <tr *ngFor=\"let item of DataDetail\">\r\n            <td colspan=\"2\" style=\"padding-top: 19px;\"> {{item.SKUName}} </td>\r\n            <td style=\"padding-top: 19px; text-align: center;\">\r\n              <span class=\"bold theme-font\">{{item.Count}}</span>\r\n            </td>\r\n            <td>\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"onReturn(item)\">\r\n                คืนสินค้า\r\n              </ion-button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _devices_acessory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devices-acessory.page */ "./src/app/page/devices-acessory/devices-acessory.page.ts");







const routes = [
    {
        path: '',
        component: _devices_acessory_page__WEBPACK_IMPORTED_MODULE_6__["DevicesAcessoryPage"]
    }
];
let DevicesAcessoryPageModule = class DevicesAcessoryPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const TOKEN_KEY = 'auth-token';
let DevicesAcessoryPage = class DevicesAcessoryPage {
    constructor(postDataService, storage, storageService, alertCtrl, navCtrl, router, toastCtrl) {
        this.postDataService = postDataService;
        this.storage = storage;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.isShowDetail = false;
        this.load = false;
        setTimeout(() => {
            this.ngOnInit();
        }, 500);
    }
    ngOnInit() {
        this.storageService.getUser().then(items => {
            this.items = items;
            for (let i = 0; i < this.items.length; i++) {
                this.empID = this.items[i].empID;
            }
        });
        this.loadProduct();
    }
    loadpage() {
        this.loadProduct();
    }
    loadProduct() {
        let params = {
            empID: this.empID,
            type: "Overall",
        };
        console.log(params);
        this.postDataService.GetDevice(params).then(list => {
            this.Data = list;
            console.log('this.Data', this.Data);
            if (this.Data == []) {
                this.load = false;
            }
            else {
                this.load = true;
            }
        });
    }
    showDetail(item) {
        console.log('item', item);
        this.isShowDetail = true;
        this.productID = item.ProductID;
        let params = {
            empID: this.empID,
            type: "Detail",
            ProductID: item.ProductID
        };
        this.postDataService.GetDevice(params).then(list => {
            this.DataDetail = list;
            console.log(this.DataDetail);
        });
    }
    onReturn(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('item', item.Count);
            this.alertAmountReturn(item);
        });
    }
    alertAmountReturn(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'จำนวนสินค้าที่ต้องการคืน',
                subHeader: item.SKUName,
                message: 'คงเหลือ: ' + item.Count,
                mode: 'ios',
                inputs: [
                    {
                        type: 'number',
                        min: 1,
                        max: parseInt(item.Count),
                        name: 'value',
                        placeholder: 'จำนวน',
                        value: 1
                    }
                ],
                buttons: [
                    {
                        text: 'ยกเลิก'
                    },
                    {
                        text: 'ตกลง',
                        handler: (data) => {
                            if (data.value == 0) {
                                this.alertLess(item); //ใส่จำนวนสินค้าไม่ถูกต้อง
                            }
                            else if (data.value > item.Count) {
                                this.alertLess(item); //ใส่จำนวนสินค้าไม่ถูกต้อง
                            }
                            else {
                                this.alertReturnSubmit(item, data.value);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertLess(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'ใส่จำนวนสินค้าไม่ถูกต้อง',
                mode: 'md',
                buttons: [
                    {
                        text: 'ตกลง',
                        handler: () => {
                            this.onReturn(item);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertReturnSubmit(item, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'ต้องการคืนสินค้า',
                subHeader: item.SKUName,
                message: 'จำนวนที่คืน: ' + value,
                mode: 'ios',
                buttons: [
                    {
                        text: 'ยกเลิก'
                    },
                    {
                        cssClass: 'btn btn-primary',
                        text: 'ยืนยัน',
                        handler: () => {
                            this.postDataService.ReturnProduct(item.SKUID, value, this.empID).then(res => {
                                let params1 = {
                                    empID: this.empID,
                                    type: "Detail",
                                    ProductID: this.productID
                                };
                                this.postDataService.GetDevice(params1).then(list => {
                                    this.DataDetail = list;
                                });
                                let params2 = {
                                    empID: this.empID,
                                    type: "Overall",
                                };
                                this.postDataService.GetDevice(params2).then(list => {
                                    this.Data = list;
                                    if (this.Data == []) {
                                        this.load = false;
                                    }
                                    else {
                                        this.load = true;
                                    }
                                    this.presentToast();
                                });
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
                color: 'success',
                duration: 3000
            });
            toast.present();
        });
    }
};
DevicesAcessoryPage.ctorParameters = () => [
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], DevicesAcessoryPage);



/***/ })

}]);
//# sourceMappingURL=devices-acessory-devices-acessory-module-es2015.js.map