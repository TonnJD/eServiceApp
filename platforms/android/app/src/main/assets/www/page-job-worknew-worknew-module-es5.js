(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-job-worknew-worknew-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/job/worknew/worknew.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/job/worknew/worknew.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>รายการงานใหม่ ของ {{name}}</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n      <div class=\"row\" style=\"padding: 5px;\">\r\n          <div class=\"centered\">\r\n              <ion-spinner name=\"lines\" *ngIf=\"listpm == null || load == true\"></ion-spinner>\r\n          </div>\r\n          <div class=\"col-12\" #lblData *ngIf=\"listpm != false; else lblData\" style=\"padding-top: 10px; padding: 0px;\">\r\n              <div class=\"portlet box blue\">\r\n                  <div class=\"portlet-title\">\r\n                      <div class=\"caption\">\r\n                          <i class=\"fa fa-circle\"></i>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"portlet-body\" style=\"padding: 5px;\">\r\n                      <ul class=\"list-group\">\r\n                          <li *ngFor=\"let item of listpm\" (click)=\"click(item)\"\r\n                              class=\"list-group-item\">\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-8\">\r\n                                      <!-- <i class=\"fa fa-square-o\" #lblSuccess\r\n                                      *ngIf=\"item.value.WorkAll != item.value.WorkFinish; else lblSuccess\">\r\n                                  </i>\r\n                                  <i class=\"fa fa-check-square-o\" #lblInstall\r\n                                      *ngIf=\"item.value.WorkAll == item.value.WorkFinish; else lblInstall\">\r\n                                  </i> -->\r\n                                  {{ item.Customer }} {{item.CustomerEng}}\r\n                                  </div>\r\n                                  <div class=\"col-4\">\r\n                                      <div class=\"pull-right\">\r\n                                          <div class=\"badge badge-default bg-blue\" style=\"margin:5px;\"\r\n                                              style=\"font-size: 0.9em;\">จำนวน : {{ item.WorkAll }} งาน\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>   \r\n                          </li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\"  *ngIf=\"listpm == false && load == false\">\r\n              <label>ไม่พบข้อมูล</label>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n          <ion-icon name=\"alert\"></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/job/worknew/worknew.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/job/worknew/worknew.module.ts ***!
  \****************************************************/
/*! exports provided: WorknewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorknewPageModule", function() { return WorknewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _worknew_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worknew.page */ "./src/app/page/job/worknew/worknew.page.ts");







var routes = [
    {
        path: '',
        component: _worknew_page__WEBPACK_IMPORTED_MODULE_6__["WorknewPage"]
    }
];
var WorknewPageModule = /** @class */ (function () {
    function WorknewPageModule() {
    }
    WorknewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_worknew_page__WEBPACK_IMPORTED_MODULE_6__["WorknewPage"]]
        })
    ], WorknewPageModule);
    return WorknewPageModule;
}());



/***/ }),

/***/ "./src/app/page/job/worknew/worknew.page.scss":
/*!****************************************************!*\
  !*** ./src/app/page/job/worknew/worknew.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2Ivd29ya25ldy9FOlxcQXBwX01vYmlsZVxcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXGpvYlxcd29ya25ld1xcd29ya25ldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvam9iL3dvcmtuZXcvd29ya25ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2pvYi93b3JrbmV3L3dvcmtuZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH0iLCIuY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/job/worknew/worknew.page.ts":
/*!**************************************************!*\
  !*** ./src/app/page/job/worknew/worknew.page.ts ***!
  \**************************************************/
/*! exports provided: WorknewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorknewPage", function() { return WorknewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");







var WorknewPage = /** @class */ (function () {
    //#endregion
    function WorknewPage(DataService, route, alertController, navCtrl, storageService, postDataService) {
        var _this = this;
        this.DataService = DataService;
        this.route = route;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.postDataService = postDataService;
        this.type = "New";
        this.load = false;
        this.json;
        this.listpmdetail = [];
        this.job = [];
        this.route.queryParams.subscribe(function (params) {
            _this.listpm = null;
            _this.ngOnInit();
        });
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.myempID = _this.items[i].empID;
                _this.name = _this.items[i].name;
                console.log(_this.myempID);
            }
        });
        setTimeout(function () {
            _this.ngOnInit();
        }, 500);
        this.ChangeMonth();
    }
    //#endregion
    //#region loaditem
    WorknewPage.prototype.loadItems = function () {
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
    WorknewPage.prototype.click = function (data) {
        var params = {
            item: data,
            type: this.type,
            date: data.planDate,
        };
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        console.log(navigationExtras);
        this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
        console.log(data);
    };
    //#endregion
    //#region alert status
    WorknewPage.prototype.status = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
    //#region ChangeMonth
    WorknewPage.prototype.ChangeMonth = function () {
        var _this = this;
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
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.empid = _this.items[i].empID;
                _this.name = _this.items[i].name;
            }
            _this.job.empID = _this.empid;
            _this.job.month = _this.intMonth;
            _this.job.year = _this.intYear;
            _this.job.jobtype = _this.type;
            console.log(_this.job);
            _this.postDataService.postJobList(_this.job).then(function (work) {
                _this.listpm = work;
                console.log(_this.listpm);
                for (var i = 0; i < _this.listpm.length; i++) {
                    _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
                }
                console.log('listpm', _this.listpm);
            });
        });
    };
    //#endregion
    //#region changeMonthNext
    WorknewPage.prototype.changeMonthNext = function (value) {
        var _this = this;
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
        //#endregion
        if (value == false) {
            this.job.empID = this.empid;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
            console.log(this.job);
            this.postDataService.postJobList(this.job).then(function (work) {
                _this.listpm = work;
                console.log(_this.listpm);
                for (var i = 0; i < _this.listpm.length; i++) {
                    _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
                }
                console.log('listpm', _this.listpm);
            });
        }
        if (value != false) {
            this.listpm = false;
        }
        console.log(this.intMonth);
        console.log(this.intYear);
        console.log(this.empid);
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.empid = _this.items[i].empID;
                _this.name = _this.items[i].name;
            }
            _this.job.empID = _this.empid;
            _this.job.month = _this.intMonth;
            _this.job.year = _this.intYear;
            _this.job.jobtype = _this.type;
            console.log(_this.job);
            _this.postDataService.postJobList(_this.job).then(function (work) {
                _this.listpm = work;
                console.log(_this.listpm);
                for (var i = 0; i < _this.listpm.length; i++) {
                    _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
                }
                console.log('listpm', _this.listpm);
                if (_this.listpm == false) {
                    _this.load = false;
                }
            });
        });
    };
    //#endregion
    //#region changeMonthBack
    WorknewPage.prototype.changeMonthBack = function (value) {
        var _this = this;
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
        console.log(this.intMonth);
        console.log(this.intYear);
        console.log(this.empid);
        if (value == false) {
            this.job.empID = this.empid;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
            console.log(this.job);
            this.postDataService.postJobList(this.job).then(function (work) {
                _this.listpm = work;
                console.log(_this.listpm);
                for (var i = 0; i < _this.listpm.length; i++) {
                    _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
                }
                console.log('listpm', _this.listpm);
            });
        }
        if (value != false) {
            this.listpm = false;
        }
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.empid = _this.items[i].empID;
                _this.name = _this.items[i].name;
            }
            _this.job.empID = _this.empid;
            _this.job.month = _this.intMonth;
            _this.job.year = _this.intYear;
            _this.job.jobtype = _this.type;
            console.log(_this.job);
            _this.postDataService.postJobList(_this.job).then(function (work) {
                _this.listpm = work;
                console.log(_this.listpm);
                for (var i = 0; i < _this.listpm.length; i++) {
                    _this.listpm[i].customerdata = JSON.parse(_this.listpm[i].customerdata);
                }
                console.log('listpm', _this.listpm);
                if (_this.listpm == false) {
                    _this.load = false;
                }
            });
        });
    };
    //#endregion
    //#region start
    WorknewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.empid = _this.items[i].empID;
                _this.name = _this.items[i].name;
            }
        });
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.empid = _this.items[i].empID;
                _this.name = _this.items[i].name;
            }
            _this.job.empID = _this.empid;
            _this.job.month = _this.intMonth;
            _this.job.year = _this.intYear;
            _this.job.jobtype = _this.type;
            console.log(_this.job);
            _this.postDataService.postJobList(_this.job).then(function (work) {
                _this.listpm = work;
                console.log(_this.listpm);
                console.log('listpm', _this.listpm);
            });
        });
    };
    //#endregion
    //#region load
    WorknewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.ngOnInit();
        }, 350);
    };
    WorknewPage.ctorParameters = function () { return [
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"] }
    ]; };
    WorknewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-worknew',
            template: __webpack_require__(/*! raw-loader!./worknew.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/job/worknew/worknew.page.html"),
            styles: [__webpack_require__(/*! ./worknew.page.scss */ "./src/app/page/job/worknew/worknew.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"]])
    ], WorknewPage);
    return WorknewPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-job-worknew-worknew-module-es5.js.map