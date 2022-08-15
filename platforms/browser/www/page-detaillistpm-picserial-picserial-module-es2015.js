(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-detaillistpm-picserial-picserial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/detaillistpm/picserial/picserial.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/detaillistpm/picserial/picserial.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>ถ่ายรูปหมายเลขเครื่อง (Serial no.) ก่อนเริ่มงาน</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\" style=\"text-align: center;margin-top: 20px;\">\r\n      <ion-fab>\r\n        <ion-fab-button (click)=\"TakeSerial()\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n      <div class=\"col-3\">\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <img *ngIf=\"picserial != null else img\" [src]=\"picserial\" style=\"width: 100%;padding: 10px;\" #img>\r\n      </div>\r\n      <div class=\"col-3\">\r\n      </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/detaillistpm/picserial/picserial.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page/detaillistpm/picserial/picserial.module.ts ***!
  \*****************************************************************/
/*! exports provided: PicserialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicserialPageModule", function() { return PicserialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _picserial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./picserial.page */ "./src/app/page/detaillistpm/picserial/picserial.page.ts");







const routes = [
    {
        path: '',
        component: _picserial_page__WEBPACK_IMPORTED_MODULE_6__["PicserialPage"]
    }
];
let PicserialPageModule = class PicserialPageModule {
};
PicserialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_picserial_page__WEBPACK_IMPORTED_MODULE_6__["PicserialPage"]]
    })
], PicserialPageModule);



/***/ }),

/***/ "./src/app/page/detaillistpm/picserial/picserial.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/page/detaillistpm/picserial/picserial.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZGV0YWlsbGlzdHBtL3BpY3NlcmlhbC9waWNzZXJpYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/detaillistpm/picserial/picserial.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/page/detaillistpm/picserial/picserial.page.ts ***!
  \***************************************************************/
/*! exports provided: PicserialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicserialPage", function() { return PicserialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");







let PicserialPage = class PicserialPage {
    constructor(route, camera, navCtrl, storageService, postDataService) {
        this.route = route;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.postDataService = postDataService;
        this.picserial = null;
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 960,
            targetHeight: 1067,
        };
        this.route.queryParams.subscribe(params => {
            this.datas = JSON.parse(params["data"]);
            this.empID = this.datas.empID;
            this.type = this.datas.type;
            this.data = this.datas.data;
            this.item = this.datas.item;
            console.log(this.datas);
            console.log(this.data);
            console.log(this.empID);
            console.log(this.item);
            this.GetSerial();
        });
        this.apiServer_url = this.postDataService.apiServer_url;
    }
    ngOnInit() {
    }
    GetSerial() {
        let params = {
            installID: this.item.installId,
            typedevice: "checkserial"
        };
        console.log(params);
        this.postDataService.postdevice(params).then(picserial => {
            if (picserial == false) {
                picserial = null;
            }
            else {
                this.picserial = this.apiServer_url + picserial;
            }
            console.log(this.picserial);
        });
    }
    TakeSerial() {
        this.camera.getPicture(this.cameraOptions).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.photo1 = base64Image;
            if (this.photo1 == null || "") {
            }
            else {
                let params = {
                    planID: this.item.planID,
                    installID: this.item.installId,
                    photo: this.photo1,
                    empID: this.empID,
                    jobtype: "SaveImgSerial"
                };
                console.log(params);
                this.postDataService.SaveCaseAll(params).then(picserial => {
                    this.picserial = this.apiServer_url + picserial;
                    if (this.type == 'CM') {
                        let params = {
                            item: this.item,
                            type: this.type,
                        };
                        let navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        console.log(navigationExtras);
                        this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
                    }
                    else {
                        let params = {
                            planID: this.item.planID,
                            install: this.item,
                            data: this.data,
                            insID: this.item.installId,
                            sparetype: this.item.sparepart,
                            item: this.item,
                            type: this.type,
                        };
                        console.log(params);
                        console.log(this.item);
                        const navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                        console.log("sent", navigationExtras);
                    }
                });
            }
        }, (err) => {
            // Test local Serial
            // this.photo1 = "data:image/png;base64,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"
            // let params = {
            //   planID: this.item.planID,
            //   installID: this.item.installId,
            //   photo: this.photo1,
            //   empID: this.empID,
            //   jobtype: "SaveImgSerial"
            // }
            // console.log(params);
            // this.postDataService.SaveCaseAll(params).then(picserial => {
            //   this.picserial = this.apiServer_url + picserial;
            //   if (this.type == 'CM') {
            //     let params = {
            //       item: this.item,
            //       type: this.type,
            //     }
            //     let navigationExtras: NavigationExtras = {
            //       queryParams: {
            //         data: JSON.stringify(params)
            //       }
            //     };
            //     console.log(navigationExtras);
            //     this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
            //   } else {
            //     let params = {
            //       planID: this.item.planID,
            //       install: this.item,
            //       data: this.data,
            //       insID: this.item.installId,
            //       sparetype: this.item.sparepart,
            //       item: this.item,
            //       type: this.type,
            //     }
            //     console.log(params);
            //     console.log(this.item);
            //     const navigationExtras: NavigationExtras = {
            //       queryParams: {
            //         data: JSON.stringify(params)
            //       }
            //     };
            //     this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
            //     console.log("sent", navigationExtras);
            //   }
            // });
        });
    }
};
PicserialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"] }
];
PicserialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-picserial',
        template: __webpack_require__(/*! raw-loader!./picserial.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/detaillistpm/picserial/picserial.page.html"),
        styles: [__webpack_require__(/*! ./picserial.page.scss */ "./src/app/page/detaillistpm/picserial/picserial.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"]])
], PicserialPage);



/***/ })

}]);
//# sourceMappingURL=page-detaillistpm-picserial-picserial-module-es2015.js.map