(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-detaillistpm-scanserial-scanserial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/detaillistpm/scanserial/scanserial.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/detaillistpm/scanserial/scanserial.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>สแกน Serial</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/detaillistpm/scanserial/scanserial.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/detaillistpm/scanserial/scanserial.module.ts ***!
  \*******************************************************************/
/*! exports provided: ScanserialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanserialPageModule", function() { return ScanserialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scanserial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanserial.page */ "./src/app/page/detaillistpm/scanserial/scanserial.page.ts");







const routes = [
    {
        path: '',
        component: _scanserial_page__WEBPACK_IMPORTED_MODULE_6__["ScanserialPage"]
    }
];
let ScanserialPageModule = class ScanserialPageModule {
};
ScanserialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_scanserial_page__WEBPACK_IMPORTED_MODULE_6__["ScanserialPage"]]
    })
], ScanserialPageModule);



/***/ }),

/***/ "./src/app/page/detaillistpm/scanserial/scanserial.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/page/detaillistpm/scanserial/scanserial.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZGV0YWlsbGlzdHBtL3NjYW5zZXJpYWwvc2NhbnNlcmlhbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/page/detaillistpm/scanserial/scanserial.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page/detaillistpm/scanserial/scanserial.page.ts ***!
  \*****************************************************************/
/*! exports provided: ScanserialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanserialPage", function() { return ScanserialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");






let ScanserialPage = class ScanserialPage {
    constructor(route, navCtrl, storageService, postDataService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.postDataService = postDataService;
        this.route.queryParams.subscribe(params => {
            this.datas = JSON.parse(params["data"]);
            this.empID = this.datas.empID;
            this.type = this.datas.type;
            this.data = this.datas.data;
            this.item = this.datas.item;
            console.log(this.datas);
            console.log(this.data);
            console.log(this.empID);
            console.log(this.type);
            console.log(this.item.installId);
        });
        this.apiServer_url = this.postDataService.apiServer_url;
    }
    ngOnInit() {
    }
};
ScanserialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"] }
];
ScanserialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanserial',
        template: __webpack_require__(/*! raw-loader!./scanserial.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/detaillistpm/scanserial/scanserial.page.html"),
        styles: [__webpack_require__(/*! ./scanserial.page.scss */ "./src/app/page/detaillistpm/scanserial/scanserial.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"]])
], ScanserialPage);



/***/ })

}]);
//# sourceMappingURL=page-detaillistpm-scanserial-scanserial-module-es2015.js.map