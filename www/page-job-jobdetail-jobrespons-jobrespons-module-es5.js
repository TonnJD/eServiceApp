(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-job-jobdetail-jobrespons-jobrespons-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/job/jobdetail/jobrespons/jobrespons.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/job/jobdetail/jobrespons/jobrespons.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <ion-title>รายละเอียดงานและการตอบรับงาน</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <iframe [src]=\"url\" style=\"width:100%;height:100%\"></iframe>\n</ion-content>"

/***/ }),

/***/ "./src/app/page/job/jobdetail/jobrespons/jobrespons.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/page/job/jobdetail/jobrespons/jobrespons.module.ts ***!
  \********************************************************************/
/*! exports provided: JobresponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobresponsPageModule", function() { return JobresponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobrespons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobrespons.page */ "./src/app/page/job/jobdetail/jobrespons/jobrespons.page.ts");







var routes = [
    {
        path: '',
        component: _jobrespons_page__WEBPACK_IMPORTED_MODULE_6__["JobresponsPage"]
    }
];
var JobresponsPageModule = /** @class */ (function () {
    function JobresponsPageModule() {
    }
    JobresponsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_jobrespons_page__WEBPACK_IMPORTED_MODULE_6__["JobresponsPage"]]
        })
    ], JobresponsPageModule);
    return JobresponsPageModule;
}());



/***/ }),

/***/ "./src/app/page/job/jobdetail/jobrespons/jobrespons.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/page/job/jobdetail/jobrespons/jobrespons.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvam9iL2pvYmRldGFpbC9qb2JyZXNwb25zL2pvYnJlc3BvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/job/jobdetail/jobrespons/jobrespons.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/page/job/jobdetail/jobrespons/jobrespons.page.ts ***!
  \******************************************************************/
/*! exports provided: JobresponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobresponsPage", function() { return JobresponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var JobresponsPage = /** @class */ (function () {
    function JobresponsPage(modalController, postDataService, route, alertController, navCtrl, sanitizer) {
        var _this = this;
        this.modalController = modalController;
        this.postDataService = postDataService;
        this.route = route;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.DataSpare = [];
        this.ListSpare = [];
        this.check = false;
        this.itemname = [];
        this.buttonColor = 'medium';
        this.route.queryParams.subscribe(function (params) {
            _this.data = JSON.parse(params["data"]);
            _this.insID = _this.data.insID;
            _this.empID = _this.data.empID;
            _this.planID = _this.data.planID;
            _this.item = _this.data.item;
            _this.type = _this.data.type;
            _this.date = _this.data.date;
            _this.ItemsName = _this.data.ItemsName;
            _this.cusID = _this.item.cusID;
            _this.Type = _this.data.Type;
            _this.url = sanitizer.bypassSecurityTrustResourceUrl(_this.postDataService.apiServer_url + 'Web/TabletRespone.aspx' + '?planID=' + _this.planID + "&empId=" + _this.empID);
        });
    }
    JobresponsPage.prototype.ngOnInit = function () {
    };
    JobresponsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    JobresponsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobrespons',
            template: __webpack_require__(/*! raw-loader!./jobrespons.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/job/jobdetail/jobrespons/jobrespons.page.html"),
            styles: [__webpack_require__(/*! ./jobrespons.page.scss */ "./src/app/page/job/jobdetail/jobrespons/jobrespons.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], JobresponsPage);
    return JobresponsPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-job-jobdetail-jobrespons-jobrespons-module-es5.js.map