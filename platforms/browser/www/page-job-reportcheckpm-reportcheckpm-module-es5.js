(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-job-reportcheckpm-reportcheckpm-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/job/reportcheckpm/reportcheckpm.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/job/reportcheckpm/reportcheckpm.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n            <ion-title>รายการตรวจเช็ค(PM) ของ {{name}}</ion-title>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\" style=\"padding: 5px;\">\r\n            <div class=\"col-12\" style=\"padding-top: 10px; padding: 0px;\">\r\n                <div class=\"btn-group btn-group btn-group-justified btn-lg\" style=\"padding: 0px; width: 100%;\">\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"ChangeMonth()\"> ปัจจุบัน </button>\r\n                    <button href=\"javascript:;\" class=\"btn blue btn-lg\" style=\"width: 50%; padding: 5px;\">\r\n                        รายการตรวจเช็ค (PM)\r\n                        เดือน{{textShow}} </button>\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"changeMonthBack(listpm)\"> ก่อนหน้า </button>\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"changeMonthNext(listpm)\"> ถัดไป </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"centered\">\r\n                <ion-spinner name=\"lines\" *ngIf=\"listpm == null || load == true\"></ion-spinner>\r\n            </div>\r\n            <div class=\"col-12\" #lblData *ngIf=\"listpm != false; else lblData\" style=\"padding-top: 10px; padding: 0px;\">\r\n                <div class=\"portlet box blue\" *ngFor=\"let data of listpm\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption\">\r\n                            <i class=\"fa fa-circle\"></i>{{data.planDateTH}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\" style=\"padding: 5px;\">\r\n                        <ul class=\"list-group\">\r\n                            <li *ngFor=\"let item of data.customerdata | keyvalue\" (click)=\"click(item,data)\"\r\n                                class=\"list-group-item\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-8\">\r\n                                        <i class=\"fa fa-square-o\" #lblSuccess\r\n                                            *ngIf=\"item.value.WorkAll != item.value.WorkFinish; else lblSuccess\">\r\n                                        </i>\r\n                                        <i class=\"fa fa-check-square-o\" #lblInstall\r\n                                            *ngIf=\"item.value.WorkAll == item.value.WorkFinish; else lblInstall\">\r\n                                        </i>\r\n                                        {{ item.value.Customer }} {{item.value.CustomerEng}}\r\n                                    </div>\r\n                                    <div class=\"col-4\">\r\n                                        <div class=\"pull-right\">\r\n                                            <div class=\"badge badge-default bg-blue\" style=\"margin:5px;\"\r\n                                                style=\"font-size: 0.9em;\">ตรวจเช็ค : {{ item.value.WorkAll }}\r\n                                                สำเร็จ : {{ item.value.WorkFinish }}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\" *ngIf=\"listpm == false && load == false\">\r\n                <label>ไม่พบข้อมูล</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"alert\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/job/reportcheckpm/reportcheckpm.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/job/reportcheckpm/reportcheckpm.module.ts ***!
  \****************************************************************/
/*! exports provided: ReportcheckpmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcheckpmPageModule", function() { return ReportcheckpmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportcheckpm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportcheckpm.page */ "./src/app/page/job/reportcheckpm/reportcheckpm.page.ts");







var routes = [
    {
        path: '',
        component: _reportcheckpm_page__WEBPACK_IMPORTED_MODULE_6__["ReportcheckpmPage"]
    }
];
var ReportcheckpmPageModule = /** @class */ (function () {
    function ReportcheckpmPageModule() {
    }
    ReportcheckpmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reportcheckpm_page__WEBPACK_IMPORTED_MODULE_6__["ReportcheckpmPage"]]
        })
    ], ReportcheckpmPageModule);
    return ReportcheckpmPageModule;
}());



/***/ }),

/***/ "./src/app/page/job/reportcheckpm/reportcheckpm.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/page/job/reportcheckpm/reportcheckpm.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#EEEEEE;\n}\n\nion-spinner {\n  display: block;\n  margin: auto;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2IvcmVwb3J0Y2hlY2twbS9DOlxcVXNlcnNcXE1hcnRcXERvY3VtZW50c1xcV2luZ3BsdXNcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxqb2JcXHJlcG9ydGNoZWNrcG1cXHJlcG9ydGNoZWNrcG0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL2pvYi9yZXBvcnRjaGVja3BtL3JlcG9ydGNoZWNrcG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2pvYi9yZXBvcnRjaGVja3BtL3JlcG9ydGNoZWNrcG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNFRUVFRUU7XHJcbn1cclxuaW9uLXNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNFRUVFRUU7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/job/reportcheckpm/reportcheckpm.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/page/job/reportcheckpm/reportcheckpm.page.ts ***!
  \**************************************************************/
/*! exports provided: ReportcheckpmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcheckpmPage", function() { return ReportcheckpmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ReportcheckpmPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function ReportcheckpmPage(DataService, alertCtrl, route, navCtrl, storageService, postDataService, loadingCtrl) {
        var _this = this;
        this.DataService = DataService;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.postDataService = postDataService;
        this.loadingCtrl = loadingCtrl;
        this.type = "PM";
        this.load = false;
        this.json;
        this.listpmdetail = [];
        this.job = [];
        // this.storageService.getUser().then(items => {
        //   this.items = items;  
        //   for (let i = 0; i < this.items.length; i++) {
        //     this.myempID = this.items[i].empID;
        //     this.name = this.items[i].name;
        //   }
        // });
        this.route.queryParams.subscribe(function (params) {
            _this.items = JSON.parse(params["data"]);
            _this.listpm = null;
            _this.ChangeMonth();
            //this.ngOnInit();
        });
        // this.ChangeMonth()
        // setTimeout(() => {
        //   this.ngOnInit();
        // }, 500);
    }
    //#endregion
    //#region load 
    ReportcheckpmPage.prototype.loadItems = function () {
        var _this = this;
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.myempID = _this.items[i].empID;
                console.log(_this.myempID);
            }
        });
    };
    //#endregion
    //#region click
    ReportcheckpmPage.prototype.click = function (item, data) {
        var _this = this;
        console.log('item click', item);
        var param = {
            planID: item.value.planID,
            empID: this.empid,
            type: "checkstatus",
        };
        this.postDataService.postcheck(param).then(function (status) {
            console.log(status);
            if (status == true) {
                var params = {
                    empID: _this.items.empID,
                    item: item.value,
                    type: _this.type,
                    date: data.planDate,
                };
                console.log('checkpm params', params);
                var navigationExtras = {
                    queryParams: {
                        data: JSON.stringify(params)
                    }
                };
                _this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
            }
            else {
                _this.status();
            }
        });
    };
    //#endregion
    //#region alert status
    ReportcheckpmPage.prototype.status = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'ยังไม่ถึงกำหนดรอบการตรวจเช็ค',
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
    //#endregion
    ReportcheckpmPage.prototype.loadingData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 5000);
                        return [2 /*return*/];
                }
            });
        });
    };
    //#region ChangMonth
    ReportcheckpmPage.prototype.ChangeMonth = function () {
        var _this = this;
        this.load = true;
        this.listpm = false;
        var month = new Date().getMonth() + 1;
        this.intMonth = month;
        var year = new Date().getFullYear();
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
        // this.storageService.getUser().then(items => {
        //   this.items = items;
        //   // console.log(items);      
        //   for (let i = 0; i < this.items.length; i++) {
        //     this.empid = this.items[i].empID
        //     this.name = this.items[i].name;
        //   }
        //   this.job.empID = this.empid;
        //   this.job.month = this.intMonth;
        //   this.job.year = this.intYear;
        //   this.job.jobtype = this.type
        //   console.log(this.job);
        //   this.postDataService.postJobList(this.job).then(work => {
        //     this.listpm = work;
        //     for (let i = 0; i < this.listpm.length; i++) {
        //       this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
        //     }
        //   });
        // });
        console.log('this.items', this.items);
        // this.job.empID = this.empid;
        // this.job.month = this.intMonth;
        // this.job.year = this.intYear;
        // this.job.jobtype = this.type
        var parJob = {
            empID: this.items.empID,
            month: this.intMonth,
            year: this.intYear,
            jobtype: this.type,
        };
        this.postDataService.postJobList(parJob).then(function (work) {
            _this.listpm = work;
            for (var i = 0; i < _this.listpm.length; i++) {
                _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
            }
        });
    };
    //#endregion
    //#region ChangMonthNext
    ReportcheckpmPage.prototype.changeMonthNext = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parJob;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('value next', value);
                this.load = true;
                this.listpm = false;
                // const year = new Date().getFullYear();
                //#region nextmonth
                console.log('this.month', this.month);
                console.log('this.intMonth', this.intMonth);
                console.log('this.intYear', this.intYear);
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
                //#endregion
                if (value == false) {
                    // this.job.empID = this.empid;
                    // this.job.month = this.intMonth;
                    // this.job.year = this.intYear;
                    // this.job.jobtype = this.type      
                }
                parJob = {
                    empID: this.items.empID,
                    month: this.intMonth,
                    year: this.intYear,
                    jobtype: this.type,
                };
                this.postDataService.postJobList(parJob).then(function (work) {
                    _this.listpm = work;
                    console.log('this.listpm next', _this.listpm);
                    for (var i = 0; i < _this.listpm.length; i++) {
                        _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
                    }
                    if (_this.listpm == false) {
                        _this.load = false;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    //#endregion
    //#region ChangBack
    ReportcheckpmPage.prototype.changeMonthBack = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parJob;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('value back', value);
                this.load = true;
                this.listpm = false;
                //#region backmonth
                console.log('this.month', this.month);
                console.log('this.intMonth', this.intMonth);
                console.log('this.intYear', this.intYear);
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
                    // this.job.empID = this.empid;
                    // this.job.month = this.intMonth;
                    // this.job.year = this.intYear;
                    // this.job.jobtype = this.type
                    // console.log(this.job);
                }
                parJob = {
                    empID: this.items.empID,
                    month: this.intMonth,
                    year: this.intYear,
                    jobtype: this.type,
                };
                this.postDataService.postJobList(parJob).then(function (work) {
                    _this.listpm = work;
                    //console.log('this.listpm back', this.listpm);
                    for (var i = 0; i < _this.listpm.length; i++) {
                        _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
                    }
                    if (_this.listpm == false) {
                        _this.load = false;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    //#endregion
    //#region start
    ReportcheckpmPage.prototype.ngOnInit = function () {
        // this.storageService.getUser().then(items => {
        //   this.items = items;
        //   // console.log(items);      
        //   for (let i = 0; i < this.items.length; i++) {
        //     this.empid = this.items[i].empID
        //     this.name = this.items[i].name;
        //   }
        // });
    };
    //#endregion
    //#region load
    ReportcheckpmPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.ngOnInit();
        }, 350);
    };
    ReportcheckpmPage.ctorParameters = function () { return [
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_5__["PostDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
    ]; };
    ReportcheckpmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportcheckpm',
            template: __webpack_require__(/*! raw-loader!./reportcheckpm.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/job/reportcheckpm/reportcheckpm.page.html"),
            styles: [__webpack_require__(/*! ./reportcheckpm.page.scss */ "./src/app/page/job/reportcheckpm/reportcheckpm.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_5__["PostDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], ReportcheckpmPage);
    return ReportcheckpmPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-job-reportcheckpm-reportcheckpm-module-es5.js.map