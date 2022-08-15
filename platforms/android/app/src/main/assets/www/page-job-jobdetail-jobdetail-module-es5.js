(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-job-jobdetail-jobdetail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/job/jobdetail/jobdetail.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/job/jobdetail/jobdetail.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n            <ion-title>สรุปผล{{typethai}}&nbsp;({{typeeng}})</ion-title>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\" style=\"padding: 5px;\" *ngFor=\"let item of result\">\r\n            <div class=\"col-lg-12\" style=\"padding: 0px;\">\r\n                <div class=\"portlet blue box\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption\">\r\n                            <i class=\"fa fa-dashboard\"></i>ข้อมูลโดยรวม\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\">\r\n                        <div>\r\n                            <label class=\"col-6\">ชื่อลูกค้า&nbsp;:&nbsp;{{item.CustomerName}}\r\n                                {{item.CustomerNameEng}}</label>\r\n                            <label class=\"col-6\">ผู้ตรวจเช็ค&nbsp;:&nbsp;{{item.Name}}</label>\r\n                        </div>\r\n                        <div>\r\n                            <label class=\"col-6\">โทรศัพท์&nbsp;:&nbsp;{{item.Phone}} </label>\r\n                            <label class=\"col-6\">วันที่กำหนด&nbsp;:&nbsp;{{item.service_date_plan}}</label>\r\n                        </div>\r\n                        <div>\r\n                            <label class=\"col-6\">ที่อยู่ร้าน&nbsp;:&nbsp;{{item.Address}}</label>\r\n                            <label class=\"col-6\">ต่างจากวันกำหนด&nbsp;:&nbsp;{{item.TimeDiff}}</label>\r\n                        </div>\r\n                        <div>\r\n                            <label class=\"col-6\" *ngIf=\"type != 'CM'\">ประเภทสินค้า&nbsp;:&nbsp;{{item.InstallPlanName}}\r\n                            </label>\r\n                            <label class=\"col-6\"\r\n                                *ngIf=\"type == 'CM'\">ประเภทสินค้า&nbsp;:&nbsp;{{item.InstallPlanNameNew}} </label>\r\n                            <label class=\"col-6\">เริ่มทำงาน&nbsp;:&nbsp;{{item.start_service_date}}</label>\r\n                        </div>\r\n                        <div *ngIf=\"!isdevice\">\r\n                            <label class=\"col-6\"\r\n                                *ngIf=\"type != 'CM'\">Serial&nbsp;No&nbsp;:&nbsp;{{item.SerialNo}}</label>\r\n                            <label class=\"col-6\"\r\n                                *ngIf=\"type == 'CM'\">Serial&nbsp;No&nbsp;:&nbsp;{{item.SerialNoNew}}</label>\r\n                            <label class=\"col-6\">เสร็จงาน&nbsp;:&nbsp;{{item.end_service_date}}</label>\r\n                        </div>\r\n                        <div *ngIf=\"!isdevice\">\r\n                            <label class=\"col-6\" *ngIf=\"type != 'CM'\">ชื่อสินค้า&nbsp;:&nbsp;{{item.ItemsName}}</label>\r\n                            <label class=\"col-6\"\r\n                                *ngIf=\"type == 'CM'\">ชื่อสินค้า&nbsp;:&nbsp;{{item.ItemsNameNew}}</label>\r\n                            <label class=\"col-6\">เวลาที่ใช้&nbsp;:&nbsp;{{item.TimeSpent}}</label>\r\n                        </div>\r\n                        <div *ngIf=\"isdevice\">\r\n                            <label class=\"col-6\">Serial&nbsp;No&nbsp;:&nbsp;{{item.SerialNoNew}}</label>\r\n                            <label class=\"col-6\">เสร็จงาน&nbsp;:&nbsp;{{item.end_service_date}}</label>\r\n                        </div>\r\n                        <div *ngIf=\"isdevice\">\r\n                            <label class=\"col-6\">ชื่อสินค้า&nbsp;:&nbsp;{{item.ItemsNameNew}}</label>\r\n                            <label class=\"col-6\">เวลาที่ใช้&nbsp;:&nbsp;{{item.TimeSpent}}</label>\r\n                        </div>\r\n                        <div *ngIf=\"type == 'CM' && WorkCloseID == 'WorkClose004' && newinstall != '-' else cm else chang\"\r\n                            #chang>\r\n                            <hr>\r\n                            <label class=\"col-12\">การเปลี่ยนอุปกรณ์ : เปลี่ยน{{typeChang}}</label>\r\n                        </div>\r\n                        <div *ngIf=\"isdevice\">\r\n                            <div *ngFor=\"let i of devices;\">\r\n                                <label class=\"col-4\">สินค้าที่ติดตั้ง&nbsp;:&nbsp;{{i.InstallPlanName}}</label>\r\n                                <label class=\"col-8\">ชื่อสินค้า&nbsp;:&nbsp;{{i.ItemsName}}</label>\r\n                                <label class=\"col-4\">รหัสสินค้า&nbsp;:&nbsp;{{i.ItemCode}}</label>\r\n                                <label class=\"col-8\">Serial No&nbsp;:&nbsp;{{i.SerialNo}}</label>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"isspare\">\r\n                            <div *ngFor=\"let i of devices;\">\r\n                                <label class=\"col-4\">ชื่ออุปกรณ์เสริม&nbsp;:&nbsp;{{i.Name}}</label>\r\n                                <label class=\"col-8\">Part No.&nbsp;:&nbsp;{{i.Serial}}</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"isShowImage && (type == 'PM' || type == 'INSTALL' ||type == 'UNINSTALL')\">\r\n                <div class=\"col-12\" style=\"padding-right: 0px;\">\r\n                    <div class=\"portlet blue box\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-file-image-o\"></i>ภาพถ่ายการตรวจเช็ค\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"col-12\">\r\n                                <img [src]=\"img.src1\" *ngIf=\"isShowImage1\" width=\"100%\" />\r\n                                <img [src]=\"img.src2\" *ngIf=\"isShowImage2\" width=\"100%\" />\r\n                                <img [src]=\"img.src3\" *ngIf=\"isShowImage3\" width=\"100%\" />\r\n                                <img [src]=\"img.src4\" *ngIf=\"isShowImage4\" width=\"100%\" />\r\n                                <img [src]=\"img.src5\" *ngIf=\"isShowImage5\" width=\"100%\" />\r\n                                <img [src]=\"img.src6\" *ngIf=\"isShowImage6\" width=\"100%\" />\r\n                                <img [src]=\"img.src7\" *ngIf=\"isShowImage7\" width=\"100%\" />\r\n                                <img [src]=\"img.src8\" *ngIf=\"isShowImage8\" width=\"100%\" />\r\n                                <img [src]=\"img.src9\" *ngIf=\"isShowImage9\" width=\"100%\" />\r\n                                <img [src]=\"img.src10\" *ngIf=\"isShowImage10\" width=\"100%\" />\r\n                                <img [src]=\"img.src11\" *ngIf=\"isShowImage11\" width=\"100%\" />\r\n                                <img [src]=\"img.src12\" *ngIf=\"isShowImage12\" width=\"100%\" />\r\n                                <img [src]=\"img.src13\" *ngIf=\"isShowImage13\" width=\"100%\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"isShowImage && type == 'CM'\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"portlet blue box\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-file-image-o\"></i>ภาพถ่ายการตรวจเช็ค\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\">\r\n                            <div class=\"col-12\">\r\n                                <img [src]=\"img.src1\" *ngIf=\"isShowImage1\" width=\"100%\" />\r\n                                <img [src]=\"img.src2\" *ngIf=\"isShowImage2\" width=\"100%\" />\r\n                                <img [src]=\"img.src3\" *ngIf=\"isShowImage3\" width=\"100%\" />\r\n                                <img [src]=\"img.src4\" *ngIf=\"isShowImage4\" width=\"100%\" />\r\n                                <img [src]=\"img.src5\" *ngIf=\"isShowImage5\" width=\"100%\" />\r\n                                <img [src]=\"img.src6\" *ngIf=\"isShowImage6\" width=\"100%\" />\r\n                                <img [src]=\"img.src7\" *ngIf=\"isShowImage7\" width=\"100%\" />\r\n                                <img [src]=\"img.src8\" *ngIf=\"isShowImage8\" width=\"100%\" />\r\n                                <img [src]=\"img.src9\" *ngIf=\"isShowImage9\" width=\"100%\" />\r\n                                <img [src]=\"img.src10\" *ngIf=\"isShowImage10\" width=\"100%\" />\r\n                                <img [src]=\"img.src11\" *ngIf=\"isShowImage11\" width=\"100%\" />\r\n                                <img [src]=\"img.src12\" *ngIf=\"isShowImage12\" width=\"100%\" />\r\n                                <img [src]=\"img.src13\" *ngIf=\"isShowImage13\" width=\"100%\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- <div *ngIf=\"type == 'PM'; else checklist\" #checklist class=\"text-center\">\r\n        <ion-button *ngFor=\"let item of result\" shape=\"round\" (click)=\"editChecklist()\">แก้ไขใบรายงานตรวจสอบ{{item.InstallPlanName}}</ion-button>\r\n    </div> -->\r\n\r\n    </div>\r\n    <div class=\"col-lg-12\" style=\"width:100%;height:100%;padding: 0px;\" *ngIf=\"ShowList\">\r\n        <iframe [src]=\"url\" style=\"width:100%;height:100%\" frameBorder=\"0\">\r\n        </iframe>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/job/jobdetail/jobdetail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/job/jobdetail/jobdetail.module.ts ***!
  \********************************************************/
/*! exports provided: JobdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdetailPageModule", function() { return JobdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobdetail.page */ "./src/app/page/job/jobdetail/jobdetail.page.ts");







var routes = [
    {
        path: '',
        component: _jobdetail_page__WEBPACK_IMPORTED_MODULE_6__["JobdetailPage"]
    }
];
var JobdetailPageModule = /** @class */ (function () {
    function JobdetailPageModule() {
    }
    JobdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_jobdetail_page__WEBPACK_IMPORTED_MODULE_6__["JobdetailPage"]]
        })
    ], JobdetailPageModule);
    return JobdetailPageModule;
}());



/***/ }),

/***/ "./src/app/page/job/jobdetail/jobdetail.page.scss":
/*!********************************************************!*\
  !*** ./src/app/page/job/jobdetail/jobdetail.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: silver;\n}\n\nlabel {\n  font-size: 0.9em;\n}\n\nimg {\n  width: auto;\n  margin: auto;\n  display: block;\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2Ivam9iZGV0YWlsL0M6XFxVc2Vyc1xcTWFydFxcRG9jdW1lbnRzXFxXaW5ncGx1c1xcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXGpvYlxcam9iZGV0YWlsXFxqb2JkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL2pvYi9qb2JkZXRhaWwvam9iZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBRHNFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNuRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2pvYi9qb2JkZXRhaWwvam9iZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuLy8gLmNvbnRhaW5lci1mbHVpZCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuY2FyZCB7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQtY2FyZCB7XHJcbi8vICAgICBtYXJnaW46IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgY29sb3I6ICM4NTg1ODU7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC50YWIge1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5iZWZvcmUge1xyXG4vLyAgICAgcGFkZGluZzogMHB4O1xyXG4vLyAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmJlZm9yZS10ZXh0IHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIG1hcmdpbjogMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuLy8gLmNoZWNrIHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuY2FyZC1jaGVjayB7XHJcbi8vICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAudGV4dC1jaGVjayB7XHJcbi8vICAgICBtYXJnaW46IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgY29sb3I6ICM4NTg1ODU7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbi8vIH1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgfSIsImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbmltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/job/jobdetail/jobdetail.page.ts":
/*!******************************************************!*\
  !*** ./src/app/page/job/jobdetail/jobdetail.page.ts ***!
  \******************************************************/
/*! exports provided: JobdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdetailPage", function() { return JobdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _joball_detailofdetaillistpm_checklist_checklist_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../joball/detailofdetaillistpm/checklist/checklist.page */ "./src/app/page/joball/detailofdetaillistpm/checklist/checklist.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");










var JobdetailPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function JobdetailPage(DataService, route, sanitizer, storageService, modalController, postDataService) {
        var _this = this;
        this.DataService = DataService;
        this.route = route;
        this.storageService = storageService;
        this.modalController = modalController;
        this.postDataService = postDataService;
        this.json_checklist = {
            header: '',
            subheader: '',
            row: ''
        };
        this.isShowImage = true;
        this.ShowList = true;
        this.ShowCM = false;
        this.HideCM = true;
        this.booimg1 = false;
        this.booimg2 = false;
        this.booimg3 = false;
        this.booimg4 = false;
        this.booimg5 = false;
        this.booimg6 = false;
        this.booimg7 = false;
        this.booimg8 = false;
        this.booimg9 = false;
        this.booimg10 = false;
        this.booimg11 = false;
        this.booimg12 = false;
        this.booimg13 = false;
        this.isShowImage1 = false;
        this.isShowImage2 = false;
        this.isShowImage3 = false;
        this.isShowImage4 = false;
        this.isShowImage5 = false;
        this.isShowImage6 = false;
        this.isShowImage7 = false;
        this.isShowImage8 = false;
        this.isShowImage9 = false;
        this.isShowImage10 = false;
        this.isShowImage11 = false;
        this.isShowImage12 = false;
        this.isShowImage13 = false;
        this.isdevice = false;
        this.isspare = false;
        this.jobdetail = [];
        this.img = [];
        this.route.queryParams.subscribe(function (params) {
            _this.query = JSON.parse(params["data"]);
            _this.items = _this.query;
            _this.empID = _this.items.empID;
            _this.data = _this.query.data;
            _this.insID = _this.query.installID;
            _this.newinsID = _this.query.newinstallID;
            _this.tranID = _this.query.tranID;
            _this.type = _this.query.type;
            _this.planID = _this.query.planID;
            _this.url = sanitizer.bypassSecurityTrustResourceUrl(_this.postDataService.apiServer_url + 'Web/CK_CheckInfo.aspx' + '?empID=' + _this.empID + '&serviceplanid=' + _this.planID + '&installplanid=' + _this.insID);
            if (_this.type == "INSTALL") {
                _this.typethai = "งานติดตั้ง";
                _this.typeeng = 'Install';
                console.log(_this.typethai);
            }
            else if (_this.type == "CM") {
                _this.typethai = "งานซ่อม";
                _this.typeeng = 'TK';
                _this.checkcm();
            }
            else if (_this.type == "PM") {
                _this.typethai = "งานตรวจเช็ค";
                _this.typeeng = 'PM';
            }
            else if (_this.type == "UNINSTALL") {
                _this.typethai = "งานถอนการติดตั้ง";
                _this.typeeng = 'Uninstall';
            }
            if (_this.type != "PM") {
                _this.ShowList = false;
            }
            if (_this.type == "CM") {
                _this.jobdetail.insID = _this.newinsID;
            }
            else {
                _this.jobdetail.insID = _this.insID;
            }
            _this.jobdetail.planID = _this.planID;
            _this.jobdetail.tranID = _this.tranID;
            _this.jobdetail.type = _this.type;
            console.log(_this.jobdetail);
            _this.postDataService.postjobDetail(_this.jobdetail).then(function (jobdetail) {
                _this.result = jobdetail;
                console.log('this.result', _this.result);
                if (_this.result.length > 0) {
                    for (var i = 0; i < _this.result.length; i++) {
                        _this.image = JSON.parse(_this.result[i].image);
                    }
                    console.log(_this.image);
                    for (var v = 0; v < _this.image.length; v++) {
                        if (_this.image[v].type == "step1_pic1") {
                            _this.img.src1 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg1 = true;
                            //console.log("1", this.img.src1);
                        }
                        if (_this.image[v].type == "step1_pic2") {
                            _this.img.src2 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg2 = true;
                            //console.log("2", this.img.src2);
                        }
                        if (_this.image[v].type == "step1_pic3") {
                            _this.img.src3 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg3 = true;
                            //console.log("3", this.img.src3);
                        }
                        if (_this.image[v].type == "step1_pic4") {
                            _this.img.src4 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg4 = true;
                            //console.log("4", this.img.src4);
                        }
                        if (_this.image[v].type == "step1_pic5") {
                            _this.img.src5 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg5 = true;
                            //console.log("5", this.img.src5);
                        }
                        if (_this.image[v].type == "step1_pic6") {
                            _this.img.src6 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg6 = true;
                            //console.log("6", this.img.src6);
                        }
                        if (_this.image[v].type == "step1_pic7") {
                            _this.img.src7 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg7 = true;
                            //console.log("7", this.img.src7);
                        }
                        if (_this.image[v].type == "step1_pic8") {
                            _this.img.src8 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg8 = true;
                            //console.log("8", this.img.src8);
                        }
                        if (_this.image[v].type == "step3_pic1") {
                            _this.img.src9 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg9 = true;
                            //console.log("9", this.img.src9);
                        }
                        if (_this.image[v].type == "step3_pic2") {
                            _this.img.src10 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg10 = true;
                            //console.log("10", this.img.src10);
                        }
                        if (_this.image[v].type == "step3_pic3") {
                            _this.img.src11 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg11 = true;
                            //console.log("11", this.img.src11);
                        }
                        if (_this.image[v].type == "step3_pic4") {
                            _this.img.src12 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg12 = true;
                            //console.log("12", this.img.src12);
                        }
                        if (_this.image[v].type == "step3_pic5") {
                            _this.img.src13 = _this.postDataService.apiServer_url + _this.image[v].file_path;
                            _this.booimg13 = true;
                            //console.log("13", this.img.src13);
                        }
                        //console.log(this.booimg12);
                        //console.log(this.booimg13)
                    }
                }
                _this.isShowImage1 = _this.booimg1;
                _this.isShowImage2 = _this.booimg2;
                _this.isShowImage3 = _this.booimg3;
                _this.isShowImage4 = _this.booimg4;
                _this.isShowImage5 = _this.booimg5;
                _this.isShowImage6 = _this.booimg6;
                _this.isShowImage7 = _this.booimg7;
                _this.isShowImage8 = _this.booimg8;
                _this.isShowImage9 = _this.booimg9;
                _this.isShowImage10 = _this.booimg10;
                _this.isShowImage11 = _this.booimg11;
                _this.isShowImage12 = _this.booimg12;
                _this.isShowImage13 = _this.booimg13;
            });
        });
        // this.storageService.getUser().then(items => {
        //   this.items = items;
        //   // console.log(items);      
        //   for (let i = 0; i < this.items.length; i++) {
        //     this.empID = this.items[i].empID;
        //   }
        //   this.postDataService.apiServer_url
        //   this.url = sanitizer.bypassSecurityTrustResourceUrl(this.postDataService.apiServer_url + 'Web/CK_CheckInfo.aspx' + '?empID=' + this.empID + '&serviceplanid=' + this.planID + '&installplanid=' + this.insID);
        // });
        //this.postDataService.apiServer_url
    }
    //#endregion
    //#region start
    JobdetailPage.prototype.ngOnInit = function () {
    };
    //#endregion
    JobdetailPage.prototype.checkcm = function () {
        var _this = this;
        var param = {
            installID: this.insID,
            typedevice: "CheckCM",
            empID: this.empID,
            planID: this.planID,
        };
        console.log(param);
        this.postDataService.postdevice(param).then(function (data) {
            _this.shows = data;
            console.log(_this.shows);
            if (_this.shows == "device") {
                _this.typeChang = "เครื่อง";
                _this.showdevice();
            }
            else if (_this.shows == "spare") {
                _this.typeChang = "อะไหล่";
                _this.showspare();
            }
        });
    };
    JobdetailPage.prototype.showdevice = function () {
        var _this = this;
        var param = {
            installID: this.insID,
            typedevice: "GetDeviceTran",
            empID: this.empID,
            planID: this.planID,
        };
        this.postDataService.postdevice(param).then(function (data) {
            _this.devices = data;
            _this.isdevice = true;
            console.log(_this.devices);
        });
    };
    JobdetailPage.prototype.showspare = function () {
        var _this = this;
        var param = {
            installID: this.insID,
            typedevice: "GetSpareTran",
            empID: this.empID,
            planID: this.planID,
        };
        this.postDataService.postdevice(param).then(function (data) {
            _this.devices = data;
            _this.isspare = true;
            console.log(_this.spares);
        });
    };
    //#region 
    JobdetailPage.prototype.editChecklist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _joball_detailofdetaillistpm_checklist_checklist_page__WEBPACK_IMPORTED_MODULE_8__["ChecklistPage"],
                            cssClass: 'my-custom-modal-css-pm',
                            componentProps: {
                                empID: this.empID,
                                planID: this.planID,
                                install: this.insID,
                                type: "edit"
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    JobdetailPage.ctorParameters = function () { return [
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"] }
    ]; };
    JobdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobdetail',
            template: __webpack_require__(/*! raw-loader!./jobdetail.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/job/jobdetail/jobdetail.page.html"),
            styles: [__webpack_require__(/*! ./jobdetail.page.scss */ "./src/app/page/job/jobdetail/jobdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"]])
    ], JobdetailPage);
    return JobdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-job-jobdetail-jobdetail-module-es5.js.map