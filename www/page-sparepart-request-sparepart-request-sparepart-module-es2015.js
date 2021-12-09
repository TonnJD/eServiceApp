(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-sparepart-request-sparepart-request-sparepart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>เบิกอะไหล่</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-md-12 col-12\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <h6>ค้นหา สินค้า/อะไหล่</h6>\r\n            </div>\r\n            <div class=\"tools\"></div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\">\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 5px;\">\r\n              <div class=\"form-group row\">\r\n                <ion-searchbar type=\"text\" (ionChange)=\"searchSparepart($event)\" placeholder=\"ค้นหา\"></ion-searchbar>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div style=\"height: 300px; overflow-y:scroll; width: 100%;\">\r\n                  <div class=\"table-scrollable\">\r\n                    <table class=\"table table-hover\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th> SKU Code </th>\r\n                          <th> ชื่ออะไหล่ </th>\r\n                          <th class=\"text-center\"></th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of partData\">\r\n                          <td> {{item.SKUCode}} </td>\r\n                          <td> {{item.Name}} </td>\r\n                          <td class=\"text-center\">\r\n                            <ion-button expand=\"block\" color=\"warning\" (click)=\"AddToList(item)\" size=\"small\">เพิ่ม\r\n                            </ion-button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" *ngIf=\"this.selectSpareList.length > 0\">\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 15px;\">\r\n              <h5>รายการที่เลือก </h5>&emsp; <h6 *ngIf=\"this.selectSpareList.length > 0\">{{this.selectSpareList.length}} รายการ</h6>\r\n            </div>\r\n            <div class=\"col-md-12 col-12\">\r\n              <div style=\"height: 300px; overflow-y:scroll;\">\r\n                <div class=\"table-scrollable\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th> SKU Code </th>\r\n                        <th> ชื่ออะไหล่ </th>\r\n                        <th> จำนวนที่เบิก </th>\r\n                        <th class=\"text-center\"></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of selectSpareList; let i = index\">\r\n                        <td> {{item.SKUCode}} </td>\r\n                        <td> {{item.Name}} </td>\r\n                        <td style=\"padding-top: 18px;\">\r\n                          <input type=\"number\" [(ngModel)]=\"item.Qty\" style=\"width: 120px; text-align: right;\" min=\"1\" />\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <ion-button expand=\"block\" color=\"danger\" (click)=\"DeleteFromList(i)\" size=\"small\">ลบ\r\n                          </ion-button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div style=\"margin-top: 10px; margin-bottom: 30px;\" class=\"text-center\">\r\n              <ion-button color=\"primary\" class=\"text-center\" (click)=\"submitSpareList()\">\r\n                ยืนยันการเบิกอะไหล่</ion-button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-sparepart.page */ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.ts");







const routes = [
    {
        path: '',
        component: _request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__["RequestSparepartPage"]
    }
];
let RequestSparepartPageModule = class RequestSparepartPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");





let RequestSparepartPage = class RequestSparepartPage {
    constructor(postDataService, alertCtrl, navCtrl, storageService, toastCtrl) {
        this.postDataService = postDataService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.toastCtrl = toastCtrl;
        this.partData = [];
        this.selectSpareList = [];
    }
    ngOnInit() {
        this.storageService.getUser().then(items => {
            for (let i = 0; i < items.length; i++) {
                this.empID = items[i].empID;
            }
        });
    }
    Search() {
        // this.postDataService.SearchSparepart(this.PartName).then(res => {
        //   this.partData = res;
        //   console.log(this.partData);
        // });
    }
    searchSparepart(ev) {
        const strSearch = ev.target.value;
        this.partData = [];
        this.postDataService.SearchSparepart(strSearch).then(res => {
            this.data = res;
            console.log('res', res);
            for (let i = 0; i < this.data.length; i++) {
                this.partData.push({
                    Name: this.data[i].Name,
                    SKUCode: this.data[i].SKUCode,
                    SKUID: this.data[i].SKUID,
                });
            }
        });
    }
    AddToList(item) {
        console.log('item', item);
        let check = false;
        if (this.selectSpareList != []) {
            for (let j = 0; j < this.selectSpareList.length; j++) {
                const a = this.selectSpareList[j].SKUID;
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
    }
    submitSpareList() {
        let params = {
            empID: this.empID,
            sparelist: this.selectSpareList
        };
        this.postDataService.InsertRequisition(params);
        this.toastSuccess();
        let navigationExtras = {
            queryParams: {
                sparelist: JSON.stringify(params.sparelist),
                data: JSON.stringify(params)
            }
        };
        this.navCtrl.navigateBack(['/menu/sparepart'], navigationExtras);
    }
    DeleteFromList(i) {
        this.selectSpareList.splice(i, 1);
    }
    alertMeanSpart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'รายการอะไหล่ซ้ำ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    toastSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
                duration: 3000,
                color: 'success'
            });
            toast.present();
        });
    }
};
RequestSparepartPage.ctorParameters = () => [
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
RequestSparepartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-sparepart',
        template: __webpack_require__(/*! raw-loader!./request-sparepart.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html"),
        styles: [__webpack_require__(/*! ./request-sparepart.page.scss */ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], RequestSparepartPage);



/***/ })

}]);
//# sourceMappingURL=page-sparepart-request-sparepart-request-sparepart-module-es2015.js.map