(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-job-uninstall-uninstall-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/job/uninstall/uninstall.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/job/uninstall/uninstall.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n            <ion-title>รายการถอนการติดตั้ง (Uninstall) ของ {{name}}</ion-title>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\" style=\"padding: 5px;\">\r\n            <div class=\"col-12\" style=\"padding-top: 10px; padding: 0px;\">\r\n                <div class=\"btn-group btn-group btn-group-justified btn-lg\" style=\"padding: 0px; width: 100%;\">\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"ChangeMonth()\"> ปัจจุบัน </button>\r\n                    <button href=\"javascript:;\" class=\"btn blue btn-lg\" style=\"width: 50%; padding: 5px;\">\r\n                        รายการถอนการติดตั้ง (Uninstall)\r\n                        เดือน{{textShow}} </button>\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"changeMonthBack(listpm)\"> ก่อนหน้า </button>\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"changeMonthNext(listpm)\"> ถัดไป </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"centered\">\r\n                <ion-spinner name=\"lines\" *ngIf=\"listpm == null || load == true\"></ion-spinner>\r\n            </div>\r\n            <div class=\"col-12\" #lblData *ngIf=\"listpm != false; else lblData\" style=\"padding-top: 10px; padding: 0px;\">\r\n                <div class=\"portlet box blue\" *ngFor=\"let data of listpm\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption\">\r\n                            <i class=\"fa fa-circle\"></i>{{data.planDateTH}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\" style=\"padding: 5px;\">\r\n                        <ul class=\"list-group\">\r\n                            <li *ngFor=\"let item of data.customerdata | keyvalue\" (click)=\"click(item,data)\"\r\n                                class=\"list-group-item\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-8\">\r\n                                        <i class=\"fa fa-square-o\" #lblSuccess\r\n                                            *ngIf=\"item.value.WorkAll != item.value.WorkFinish; else lblSuccess\">\r\n                                        </i>\r\n                                        <i class=\"fa fa-check-square-o\" #lblInstall\r\n                                            *ngIf=\"item.value.WorkAll == item.value.WorkFinish; else lblInstall\">\r\n                                        </i>\r\n                                        {{ item.value.Customer }} {{item.value.CustomerEng}}\r\n                                    </div>\r\n                                    <div class=\"col-4\">\r\n                                        <div class=\"pull-right\">\r\n                                            <div class=\"badge badge-default bg-blue\" style=\"margin:5px;\"\r\n                                                style=\"font-size: 0.9em;\">ถอนเครื่อง : {{ item.value.WorkAll }}\r\n                                                สำเร็จ : {{ item.value.WorkFinish }}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\" *ngIf=\"listpm == false && load == false\">\r\n                <label>ไม่พบข้อมูล</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"alert\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/job/uninstall/uninstall.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/job/uninstall/uninstall.module.ts ***!
  \********************************************************/
/*! exports provided: UninstallPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UninstallPageModule", function() { return UninstallPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uninstall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uninstall.page */ "./src/app/page/job/uninstall/uninstall.page.ts");







const routes = [
    {
        path: '',
        component: _uninstall_page__WEBPACK_IMPORTED_MODULE_6__["UninstallPage"]
    }
];
let UninstallPageModule = class UninstallPageModule {
};
UninstallPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_uninstall_page__WEBPACK_IMPORTED_MODULE_6__["UninstallPage"]]
    })
], UninstallPageModule);



/***/ }),

/***/ "./src/app/page/job/uninstall/uninstall.page.scss":
/*!********************************************************!*\
  !*** ./src/app/page/job/uninstall/uninstall.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2IvdW5pbnN0YWxsL0M6XFxTb2x1dGlvblxcR2l0aHViXFxlU2VydmljZUFwcC9zcmNcXGFwcFxccGFnZVxcam9iXFx1bmluc3RhbGxcXHVuaW5zdGFsbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvam9iL3VuaW5zdGFsbC91bmluc3RhbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9qb2IvdW5pbnN0YWxsL3VuaW5zdGFsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfSIsIi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/job/uninstall/uninstall.page.ts":
/*!******************************************************!*\
  !*** ./src/app/page/job/uninstall/uninstall.page.ts ***!
  \******************************************************/
/*! exports provided: UninstallPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UninstallPage", function() { return UninstallPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");







let UninstallPage = class UninstallPage {
    //#endregion
    //#region constructor
    constructor(DataService, route, navCtrl, alertController, storageService, postDataService) {
        this.DataService = DataService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storageService = storageService;
        this.postDataService = postDataService;
        this.type = "UNINSTALL";
        this.load = false;
        this.json;
        this.listpmdetail = [];
        this.job = [];
        this.route.queryParams.subscribe(params => {
            this.listpm = null;
            this.ChangeMonth();
            this.ngOnInit();
        });
        this.storageService.getUser().then(items => {
            this.items = items;
            // console.log(items);      
            for (let i = 0; i < this.items.length; i++) {
                this.myempID = this.items[i].empID;
                this.name = this.items[i].name;
                console.log(this.myempID);
            }
        });
        this.ChangeMonth();
        setTimeout(() => {
            this.ngOnInit();
        }, 500);
    }
    //#endregion
    //#region click
    //#region LoadItem
    loadItems() {
        this.storageService.getUser().then(items => {
            this.items = items;
            // console.log(items);      
            for (let i = 0; i < this.items.length; i++) {
                this.myempID = this.items[i].empID;
                console.log(this.myempID);
            }
        });
    }
    ////#endregion
    click(item, data) {
        console.log(item);
        let param = {
            planID: item.value.planID,
            empID: this.empid,
            type: "checkstatus",
        };
        console.log(param);
        this.postDataService.postcheck(param).then(status => {
            console.log(status);
            if (status == true) {
                let params = {
                    item: item.value,
                    type: this.type,
                    date: data.planDate,
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
                this.status();
            }
        });
    }
    //#endregion
    //#region alert status
    status() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'ยังไม่ถึงกำหนดรอบการตรวจเช็ค',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    //#endregion
    //#region ChangMonth
    ChangeMonth() {
        const month = new Date().getMonth() + 1;
        this.intMonth = month;
        const year = new Date().getFullYear();
        this.intYear = year;
        //#region changemonth  
        if (month == 1) {
            this.month = 'มกราคม';
            this.intMonth = 1;
            this.textShow = this.month + " " + this.intYear;
        }
        if (month == 2) {
            this.month = 'กุมภาพันธ์';
            this.intMonth = 2;
            this.textShow = this.month + " " + this.intYear;
        }
        if (month == 3) {
            this.month = 'มีนาคม';
            this.intMonth = 3;
            this.textShow = this.month + " " + this.intYear;
        }
        if (month == 4) {
            this.month = 'เมษายน';
            this.intMonth = 4;
            this.textShow = this.month + " " + this.intYear;
        }
        if (month == 5) {
            this.month = 'พฤษภาคม';
            this.intMonth = 5;
            this.textShow = this.month + " " + this.intYear;
        }
        if (month == 6) {
            this.month = 'มิถุนายน';
            this.intMonth = 6;
            this.textShow = this.month + " " + this.intYear;
        }
        if (this.intMonth == 7) {
            this.month = 'กรกฎาคม';
            this.intMonth = 7;
            this.textShow = this.month + " " + this.intYear;
        }
        if (this.intMonth == 8) {
            this.month = 'สิงหาคม';
            this.intMonth = 8;
            this.textShow = this.month + " " + this.intYear;
        }
        if (this.intMonth == 9) {
            this.month = 'กันยายน';
            this.intMonth = 9;
            this.textShow = this.month + " " + this.intYear;
        }
        if (this.intMonth == 10) {
            this.month = 'ตุลาคม';
            this.intMonth = 10;
            this.textShow = this.month + " " + this.intYear;
        }
        if (month == 11) {
            this.month = 'พฤศจิกายน';
            this.intMonth = 11;
            this.textShow = this.month + " " + this.intYear;
        }
        if (month == 12) {
            this.month = 'ธันวาคม';
            this.intMonth = 12;
            this.textShow = this.month + " " + this.intYear;
        }
        //#endregion
        // if (this.intYear > year) {
        //   this.intYear = year
        // }
        console.log(this.intMonth);
        console.log(this.intYear);
        console.log(this.empid);
        this.storageService.getUser().then(items => {
            this.items = items;
            // console.log(items);      
            for (let i = 0; i < this.items.length; i++) {
                this.empid = this.items[i].empID;
                this.name = this.items[i].name;
            }
            this.job.empID = this.empid;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
            console.log(this.job);
            this.postDataService.postJobList(this.job).then(work => {
                this.listpm = work;
                console.log(this.listpm);
                for (let i = 0; i < this.listpm.length; i++) {
                    this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
                }
                console.log('listpm', this.listpm);
            });
        });
    }
    //#endregion
    //#region Chang MonthNext
    changeMonthNext() {
        this.load = true;
        // const year = new Date().getFullYear();
        //#region nextmonth
        if (this.month == 'มกราคม') {
            this.month = 'กุมภาพันธ์';
            this.intMonth = 2;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กุมภาพันธ์') {
            this.month = 'มีนาคม';
            this.intMonth = 3;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'มีนาคม') {
            this.month = 'เมษายน';
            this.intMonth = 4;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'เมษายน') {
            this.month = 'พฤษภาคม';
            this.intMonth = 5;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'พฤษภาคม') {
            this.month = 'มิถุนายน';
            this.intMonth = 6;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'มิถุนายน') {
            this.month = 'กรกฎาคม';
            this.intMonth = 7;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กรกฎาคม') {
            this.month = 'สิงหาคม';
            this.intMonth = 8;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'สิงหาคม') {
            this.month = 'กันยายน';
            this.intMonth = 9;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กันยายน') {
            this.month = 'ตุลาคม';
            this.intMonth = 10;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'ตุลาคม') {
            this.month = 'พฤศจิกายน';
            this.intMonth = 11;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'พฤศจิกายน') {
            this.month = 'ธันวาคม';
            this.intMonth = 12;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'ธันวาคม') {
            this.month = 'มกราคม';
            this.intMonth = 1;
            this.intYear = this.intYear + 1;
            this.textShow = this.month + " " + this.intYear;
        }
        // if (this.intYear > year) {
        //   this.intYear = year
        // }
        console.log(this.intMonth);
        console.log(this.intYear);
        console.log(this.empid);
        this.storageService.getUser().then(items => {
            this.items = items;
            // console.log(items);      
            for (let i = 0; i < this.items.length; i++) {
                this.empid = this.items[i].empID;
                this.name = this.items[i].name;
            }
            this.job.empID = this.empid;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
            console.log(this.job);
            this.postDataService.postJobList(this.job).then(work => {
                this.listpm = work;
                console.log(this.listpm);
                for (let i = 0; i < this.listpm.length; i++) {
                    this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
                }
                console.log('listpm', this.listpm);
                if (this.listpm == false) {
                    this.load = false;
                }
            });
        });
        //#endregion
    }
    //#endregion
    //#region ChangMonthBack
    changeMonthBack(value) {
        this.load = true;
        //#region 
        if (this.month == 'มกราคม') {
            this.month = 'ธันวาคม';
            this.intMonth = 12;
            this.intYear = this.intYear - 1;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กุมภาพันธ์') {
            this.month = 'มกราคม';
            this.intMonth = 1;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'มีนาคม') {
            this.month = 'กุมภาพันธ์';
            this.intMonth = 2;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'เมษายน') {
            this.month = 'มีนาคม';
            this.intMonth = 3;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'พฤษภาคม') {
            this.month = 'เมษายน';
            this.intMonth = 4;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'มิถุนายน') {
            this.month = 'พฤษภาคม';
            this.intMonth = 5;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กรกฎาคม') {
            this.month = 'มิถุนายน';
            this.intMonth = 6;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'สิงหาคม') {
            this.month = 'กรกฎาคม';
            this.intMonth = 7;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กันยายน') {
            this.month = 'สิงหาคม';
            this.intMonth = 8;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'ตุลาคม') {
            this.month = 'กันยายน';
            this.intMonth = 9;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'พฤศจิกายน') {
            this.month = 'ตุลาคม';
            this.intMonth = 10;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'ธันวาคม') {
            this.month = 'พฤศจิกายน';
            this.intMonth = 11;
            this.textShow = this.month + " " + this.intYear;
        }
        //#endregion
        if (value == false) {
            this.job.empID = this.empid;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
            console.log(this.job);
            this.postDataService.postJobList(this.job).then(work => {
                this.listpm = work;
                console.log(this.listpm);
                for (let i = 0; i < this.listpm.length; i++) {
                    this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
                }
                console.log('listpm', this.listpm);
            });
        }
        if (value != false) {
            this.listpm = false;
        }
        this.storageService.getUser().then(items => {
            this.items = items;
            // console.log(items);      
            for (let i = 0; i < this.items.length; i++) {
                this.empid = this.items[i].empID;
                this.name = this.items[i].name;
            }
            this.job.empID = this.empid;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
            console.log(this.job);
            this.postDataService.postJobList(this.job).then(work => {
                this.listpm = work;
                console.log(this.listpm);
                for (let i = 0; i < this.listpm.length; i++) {
                    this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
                }
                console.log('listpm', this.listpm);
                if (this.listpm == false) {
                    this.load = false;
                }
            });
        });
    }
    //#endregion
    //#region start
    ngOnInit() {
        this.storageService.getUser().then(items => {
            this.items = items;
            // console.log(items);      
            for (let i = 0; i < this.items.length; i++) {
                this.empid = this.items[i].empID;
                this.name = this.items[i].name;
            }
        });
    }
    //#endregion
    //#region load
    ionViewDidLoad() {
        setTimeout(() => {
            this.ngOnInit();
        }, 350);
    }
};
UninstallPage.ctorParameters = () => [
    { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"] }
];
UninstallPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uninstall',
        template: __webpack_require__(/*! raw-loader!./uninstall.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/job/uninstall/uninstall.page.html"),
        styles: [__webpack_require__(/*! ./uninstall.page.scss */ "./src/app/page/job/uninstall/uninstall.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"]])
], UninstallPage);



/***/ })

}]);
//# sourceMappingURL=page-job-uninstall-uninstall-module-es2015.js.map