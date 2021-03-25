(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-joball-listpm-listpm-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/joball/listpm/listpm.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/joball/listpm/listpm.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n            <ion-title>รายการตรวจเช็ค(PM) ของ {{name}}</ion-title>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\" style=\"padding: 5px;\">\r\n            <div class=\"col-lg-12\" style=\"padding-top: 10px; padding: 0px;\">\r\n                <div class=\"btn-group btn-group btn-group-justified btn-lg\" style=\"padding: 0px; width: 100%;\">\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"ChangeMonth()\"> ปัจจุบัน </button>\r\n                    <button href=\"javascript:;\" class=\"btn blue btn-lg\" style=\"width: 50%; padding: 5px;\">\r\n                        รายการการตรวจเช็ค (PM)\r\n                        เดือน{{textShow}} </button>\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"changeMonthBack(listpm)\"> ก่อนหน้า </button>\r\n                    <button href=\"javascript:;\" class=\"btn default btn-lg\" style=\"padding: 5px;\"\r\n                        (click)=\"changeMonthNext(listpm)\"> ถัดไป </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-12\" #lblData *ngIf=\"listpm != false; else lblData\"\r\n                style=\"padding-top: 10px; padding: 0px;\">\r\n                <div class=\"portlet box blue\" *ngFor=\"let data of listpm\">\r\n                    <div class=\"portlet-title\">\r\n                        <div class=\"caption\">\r\n                            <i class=\"fa fa-circle\"></i>{{data.planDateTH}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"portlet-body\" style=\"padding: 5px;\">\r\n                        <ul class=\"list-group\">\r\n                            <li *ngFor=\"let item of data.customerdata | keyvalue\" class=\"list-group-item\">\r\n                                <i class=\"fa fa-square-o\" #lblSuccess\r\n                                    *ngIf=\"item.value.WorkAll != item.value.WorkFinish; else lblSuccess\">\r\n                                </i>\r\n                                <i class=\"fa fa-check-square-o\" #lblInstall\r\n                                    *ngIf=\"item.value.WorkAll == item.value.WorkFinish; else lblInstall\">\r\n                                </i>\r\n                                {{ item.value.Customer }}\r\n                                <div class=\"pull-right\">\r\n                                    <div class=\"badge badge-default bg-blue\" style=\"margin:5px;\"\r\n                                        style=\"font-size: 0.9em;\">ติดตั้ง : {{ item.value.WorkAll }}\r\n                                        สำเร็จ : {{ item.value.WorkFinish }}\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-12\" style=\"text-align: center; margin-top: 20px;\" #lblWait\r\n                *ngIf=\"listpm == false; else lblWait\">\r\n                <label>ไม่พบข้อมูล</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/joball/listpm/listpm.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/joball/listpm/listpm.module.ts ***!
  \*****************************************************/
/*! exports provided: ListpmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListpmPageModule", function() { return ListpmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listpm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listpm.page */ "./src/app/page/joball/listpm/listpm.page.ts");







var routes = [
    {
        path: '',
        component: _listpm_page__WEBPACK_IMPORTED_MODULE_6__["ListpmPage"]
    }
];
var ListpmPageModule = /** @class */ (function () {
    function ListpmPageModule() {
    }
    ListpmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_listpm_page__WEBPACK_IMPORTED_MODULE_6__["ListpmPage"]]
        })
    ], ListpmPageModule);
    return ListpmPageModule;
}());



/***/ }),

/***/ "./src/app/page/joball/listpm/listpm.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/page/joball/listpm/listpm.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #EEEEEE;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2JhbGwvbGlzdHBtL0U6XFxHaXRIdWJcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxqb2JhbGxcXGxpc3RwbVxcbGlzdHBtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9qb2JhbGwvbGlzdHBtL2xpc3RwbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvam9iYWxsL2xpc3RwbS9saXN0cG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/joball/listpm/listpm.page.ts":
/*!***************************************************!*\
  !*** ./src/app/page/joball/listpm/listpm.page.ts ***!
  \***************************************************/
/*! exports provided: ListpmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListpmPage", function() { return ListpmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");







var ListpmPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function ListpmPage(DataService, route, navCtrl, storageService, postDataService) {
        var _this = this;
        this.DataService = DataService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.postDataService = postDataService;
        this.type = "PM";
        this.route.queryParams.subscribe(function (params) {
            _this.myId = JSON.parse(params["data"]);
            _this.emp = _this.myId.EmpID;
            _this.name = _this.myId.Name;
            console.log(_this.name);
        });
        this.json;
        this.listpmdetail = [];
        this.job = [];
        this.ChangeMonth();
    }
    //#endregion
    //#region click
    ListpmPage.prototype.loadItems = function () {
        var _this = this;
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.myempID = _this.items[i].empID;
                // console.log(this.myempID);
            }
        });
    };
    //#endregion
    //#region Month
    ListpmPage.prototype.ChangeMonth = function () {
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
        // if (this.intYear > year) {
        //   this.intYear = year
        // }
        console.log(this.intMonth);
        console.log(this.intYear);
        console.log(this.empid);
        this.job.empID = this.emp;
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
    };
    ListpmPage.prototype.changeMonthNext = function (value) {
        var _this = this;
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
            this.job.empID = this.emp;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
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
        this.job.empID = this.emp;
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
    };
    ListpmPage.prototype.changeMonthBack = function (value) {
        var _this = this;
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
            this.job.empID = this.emp;
            this.job.month = this.intMonth;
            this.job.year = this.intYear;
            this.job.jobtype = this.type;
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
        this.job.empID = this.emp;
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
    };
    //#endregion
    //#region start
    ListpmPage.prototype.ngOnInit = function () {
        var _this = this;
        this.job.empID = this.emp;
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
    };
    ListpmPage.ctorParameters = function () { return [
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"] }
    ]; };
    ListpmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listpm',
            template: __webpack_require__(/*! raw-loader!./listpm.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/joball/listpm/listpm.page.html"),
            styles: [__webpack_require__(/*! ./listpm.page.scss */ "./src/app/page/joball/listpm/listpm.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"]])
    ], ListpmPage);
    return ListpmPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-joball-listpm-listpm-module-es5.js.map