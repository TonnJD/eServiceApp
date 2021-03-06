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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobdetail.page */ "./src/app/page/job/jobdetail/jobdetail.page.ts");







const routes = [
    {
        path: '',
        component: _jobdetail_page__WEBPACK_IMPORTED_MODULE_6__["JobdetailPage"]
    }
];
let JobdetailPageModule = class JobdetailPageModule {
};
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



/***/ }),

/***/ "./src/app/page/job/jobdetail/jobdetail.page.scss":
/*!********************************************************!*\
  !*** ./src/app/page/job/jobdetail/jobdetail.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: silver;\n}\n\nlabel {\n  font-size: 0.9em;\n}\n\nimg {\n  width: auto;\n  margin: auto;\n  display: block;\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2Ivam9iZGV0YWlsL0U6XFxHaXRIdWJcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxqb2JcXGpvYmRldGFpbFxcam9iZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9qb2Ivam9iZGV0YWlsL2pvYmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURzRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDbkVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9qb2Ivam9iZGV0YWlsL2pvYmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XHJcbn1cclxubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbi8vIC5jb250YWluZXItZmx1aWQge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmNhcmQge1xyXG4vLyAgICAgcGFkZGluZzogMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50ZXh0LWNhcmQge1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGNvbG9yOiAjODU4NTg1O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAudGFiIHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYmVmb3JlIHtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIG1hcmdpbjogMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5iZWZvcmUtdGV4dCB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jaGVjayB7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLmNhcmQtY2hlY2sge1xyXG4vLyAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQtY2hlY2sge1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGNvbG9yOiAjODU4NTg1O1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4vLyB9XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIH0iLCJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG5pbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMXB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _joball_detailofdetaillistpm_checklist_checklist_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../joball/detailofdetaillistpm/checklist/checklist.page */ "./src/app/page/joball/detailofdetaillistpm/checklist/checklist.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");










let JobdetailPage = class JobdetailPage {
    //#endregion
    //#region constructor
    constructor(DataService, route, sanitizer, storageService, modalController, postDataService) {
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
        this.route.queryParams.subscribe(params => {
            this.query = JSON.parse(params["data"]);
            this.data = this.query.data;
            this.insID = this.query.installID;
            this.newinsID = this.query.newinstallID;
            this.tranID = this.query.tranID;
            this.type = this.query.type;
            this.planID = this.query.planID;
            console.log("query", this.query);
            this.ngOnInit();
        });
        this.storageService.getUser().then(items => {
            this.items = items;
            // console.log(items);      
            for (let i = 0; i < this.items.length; i++) {
                this.empID = this.items[i].empID;
                console.log(this.planID);
                console.log(this.insID);
                console.log(this.empID);
            }
            this.postDataService.apiServer_url;
            this.url = sanitizer.bypassSecurityTrustResourceUrl(this.postDataService.apiServer_url + 'Web/CK_CheckInfo.aspx' + '?empID=' + this.empID + '&serviceplanid=' + this.planID + '&installplanid=' + this.insID);
        });
    }
    //#endregion
    //#region start
    ngOnInit() {
        if (this.type == "INSTALL") {
            this.typethai = "งานติดตั้ง";
            this.typeeng = 'Install';
            console.log(this.typethai);
        }
        else if (this.type == "CM") {
            this.typethai = "งานซ่อม";
            this.typeeng = 'TK';
            this.checkcm();
        }
        else if (this.type == "PM") {
            this.typethai = "งานตรวจเช็ค";
            this.typeeng = 'PM';
        }
        else if (this.type == "UNINSTALL") {
            this.typethai = "งานถอนการติดตั้ง";
            this.typeeng = 'Uninstall';
        }
        if (this.type != "PM") {
            this.ShowList = false;
        }
        if (this.type == "CM") {
            this.jobdetail.insID = this.newinsID;
        }
        else {
            this.jobdetail.insID = this.insID;
        }
        this.jobdetail.planID = this.planID;
        this.jobdetail.tranID = this.tranID;
        this.jobdetail.type = this.type;
        console.log(this.jobdetail);
        this.postDataService.postjobDetail(this.jobdetail).then(jobdetail => {
            this.result = jobdetail;
            console.log('this.result', this.result);
            if (this.result.length > 0) {
                for (let i = 0; i < this.result.length; i++) {
                    this.image = JSON.parse(this.result[i].image);
                }
                console.log(this.image);
                for (let v = 0; v < this.image.length; v++) {
                    if (this.image[v].type == "step1_pic1") {
                        this.img.src1 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg1 = true;
                        console.log("1", this.img.src1);
                    }
                    if (this.image[v].type == "step1_pic2") {
                        this.img.src2 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg2 = true;
                        console.log("2", this.img.src2);
                    }
                    if (this.image[v].type == "step1_pic3") {
                        this.img.src3 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg3 = true;
                        console.log("3", this.img.src3);
                    }
                    if (this.image[v].type == "step1_pic4") {
                        this.img.src4 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg4 = true;
                        console.log("4", this.img.src4);
                    }
                    if (this.image[v].type == "step1_pic5") {
                        this.img.src5 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg5 = true;
                        console.log("5", this.img.src5);
                    }
                    if (this.image[v].type == "step1_pic6") {
                        this.img.src6 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg6 = true;
                        console.log("6", this.img.src6);
                    }
                    if (this.image[v].type == "step1_pic7") {
                        this.img.src7 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg7 = true;
                        console.log("7", this.img.src7);
                    }
                    if (this.image[v].type == "step1_pic8") {
                        this.img.src8 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg8 = true;
                        console.log("8", this.img.src8);
                    }
                    if (this.image[v].type == "step3_pic1") {
                        this.img.src9 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg9 = true;
                        console.log("9", this.img.src9);
                    }
                    if (this.image[v].type == "step3_pic2") {
                        this.img.src10 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg10 = true;
                        console.log("10", this.img.src10);
                    }
                    if (this.image[v].type == "step3_pic3") {
                        this.img.src11 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg11 = true;
                        console.log("11", this.img.src11);
                    }
                    if (this.image[v].type == "step3_pic4") {
                        this.img.src12 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg12 = true;
                        console.log("12", this.img.src12);
                    }
                    if (this.image[v].type == "step3_pic5") {
                        this.img.src13 = this.postDataService.apiServer_url + this.image[v].file_path;
                        this.booimg13 = true;
                        console.log("13", this.img.src13);
                    }
                    console.log(this.booimg12);
                    console.log(this.booimg13);
                }
            }
            this.isShowImage1 = this.booimg1;
            this.isShowImage2 = this.booimg2;
            this.isShowImage3 = this.booimg3;
            this.isShowImage4 = this.booimg4;
            this.isShowImage5 = this.booimg5;
            this.isShowImage6 = this.booimg6;
            this.isShowImage7 = this.booimg7;
            this.isShowImage8 = this.booimg8;
            this.isShowImage9 = this.booimg9;
            this.isShowImage10 = this.booimg10;
            this.isShowImage11 = this.booimg11;
            this.isShowImage12 = this.booimg12;
            this.isShowImage13 = this.booimg13;
        });
    }
    //#endregion
    checkcm() {
        let param = {
            installID: this.insID,
            typedevice: "CheckCM",
            empID: this.empID,
            planID: this.planID,
        };
        console.log(param);
        this.postDataService.postdevice(param).then(data => {
            this.shows = data;
            console.log(this.shows);
            if (this.shows == "device") {
                this.typeChang = "เครื่อง";
                this.showdevice();
            }
            else if (this.shows == "spare") {
                this.typeChang = "อะไหล่";
                this.showspare();
            }
        });
    }
    showdevice() {
        let param = {
            installID: this.insID,
            typedevice: "GetDeviceTran",
            empID: this.empID,
            planID: this.planID,
        };
        this.postDataService.postdevice(param).then(data => {
            this.devices = data;
            this.isdevice = true;
            console.log(this.devices);
        });
    }
    showspare() {
        let param = {
            installID: this.insID,
            typedevice: "GetSpareTran",
            empID: this.empID,
            planID: this.planID,
        };
        this.postDataService.postdevice(param).then(data => {
            this.devices = data;
            this.isspare = true;
            console.log(this.spares);
        });
    }
    //#region 
    editChecklist() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _joball_detailofdetaillistpm_checklist_checklist_page__WEBPACK_IMPORTED_MODULE_8__["ChecklistPage"],
                cssClass: 'my-custom-modal-css-pm',
                componentProps: {
                    empID: this.empID,
                    planID: this.planID,
                    install: this.insID,
                    type: "edit"
                }
            });
            modal.onDidDismiss().then(data => {
            });
            return yield modal.present();
        });
    }
};
JobdetailPage.ctorParameters = () => [
    { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=page-job-jobdetail-jobdetail-module-es2015.js.map