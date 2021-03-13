(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-job-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/job/job.page.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/job/job.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"text-left\">งานในความรับผิดชอบ</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"page-content-inner\">\r\n      <div class=\"row\" style=\"padding:5px;\">\r\n        <div class=\"col-lg-4 background\" style=\"padding: 0px; background-color: white;\">\r\n          <div class=\"col-12\" style=\"padding: 2px;\">\r\n            <button type=\"button\" class=\"btn default\" (click)=\"next('pm')\">\r\n              <i class=\"fa fa-check\"></i> รายการตรวจเช็ค (PM)\r\n            </button>\r\n          </div>\r\n          <div class=\"col-12\" style=\"padding: 2px;\">\r\n            <button type=\"button\" class=\"btn default\" (click)=\"next('cm')\">\r\n              <i class=\"fa fa-check\"></i> รายการซ่อม (CM)\r\n            </button>\r\n          </div>\r\n          <div class=\"col-12\" style=\"padding: 2px;\">\r\n            <button type=\"button\" class=\"btn default\" (click)=\"next('install')\">\r\n              <i class=\"fa fa-check\"></i> รายการติดตั้ง (Install)\r\n            </button>\r\n          </div>\r\n          <div class=\"col-12\" style=\"padding: 2px;\">\r\n            <button type=\"button\" class=\"btn default\" (click)=\"next('uninstall')\">\r\n              <i class=\"fa fa-check\"> </i> รายการถอนการติดตั้ง (Uninstall)\r\n            </button>\r\n          </div>\r\n          <div class=\"col-12\" style=\"padding: 2px;\">\r\n            <button type=\"button\" class=\"btn default\" [routerLink]=\"['/job/calendarpm']\">\r\n              <i class=\"fa fa-calendar\"></i> ปฏิทิน\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-lg-8\" style=\"padding: 0px; padding-left: 5px;\">\r\n          <div class=\"portlet blue box\" style=\"margin-top:0px!important;\">\r\n            <div class=\"portlet-title\" style=\"margin-top:0px;\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-check\"></i>รายการผ่านการตรวจเช็คล่าสุด </div>\r\n            </div>\r\n            <div class=\"portlet-body\" style=\"padding-top: 5px;\" *ngIf=\"isShow\">\r\n              <div class=\"row\" style=\"padding: 5px;\">\r\n                <label class=\"col-12\" style=\"text-align: center; font-size: 0.9em;\">\r\n                  ไม่พบข้อมูล\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"portlet-body\" style=\"padding-top: 5px;\">\r\n              <div class=\"row\" *ngFor=\"let item of jobresolve\" (click)=\"click(item)\"\r\n                style=\"padding: 5px;\">\r\n                <label class=\"col-6 head\">\r\n                  ชื่อลูกค้า: {{item.CustomerName}} {{item.CustomerNameEng}}\r\n                </label>\r\n\r\n                <label class=\"col-6 head\">\r\n                  วันที่กำหนด: {{item.service_date_plan}}\r\n                  <!-- วันที่กำหนด: {{item.service_date_plan | date: 'dd-MM-yyyy HH:mm:ss'}} -->\r\n                </label>\r\n\r\n\r\n                <label class=\"col-6 head\">\r\n                  สินค้าที่ติดตั้ง: {{item.InstallPlanName}}\r\n                </label>\r\n\r\n                <label class=\"col-6 head\">\r\n                  เริ่มทำงาน: {{item.start_service_date}}\r\n                </label>\r\n\r\n\r\n                <label class=\"col-6 head\">\r\n                  ชื่อสินค้า: {{item.ItemsName}}\r\n                </label>\r\n\r\n                <label class=\"col-6 head\">\r\n                  เสร็จงาน: {{item.end_service_date}}\r\n                </label>\r\n\r\n                <label class=\"col-6 head\">\r\n                  Serial No: {{item.SerialNo}}\r\n                </label>\r\n\r\n                <label class=\"col-6 head\">\r\n                  เวลาที่ใช้: {{item.TimeSpent}}\r\n                </label>\r\n\r\n                <label class=\"col-6 head\">\r\n                  ประเภทงาน: {{item.JobTypeName}} ({{item.JobTypeNameEng}})\r\n                </label>\r\n                <label class=\"col-6 head\" *ngIf=\"item.JobType == 'CM'else CM \" #CM>\r\n                  การปิดงาน: {{item.WorkClose}}\r\n                </label>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/job/job.module.ts":
/*!****************************************!*\
  !*** ./src/app/page/job/job.module.ts ***!
  \****************************************/
/*! exports provided: JobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPageModule", function() { return JobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _job_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job.page */ "./src/app/page/job/job.page.ts");








var routes = [
    {
        path: '',
        component: _job_page__WEBPACK_IMPORTED_MODULE_7__["JobPage"]
    }
];
var JobPageModule = /** @class */ (function () {
    function JobPageModule() {
    }
    JobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_job_page__WEBPACK_IMPORTED_MODULE_7__["JobPage"]]
        })
    ], JobPageModule);
    return JobPageModule;
}());



/***/ }),

/***/ "./src/app/page/job/job.page.scss":
/*!****************************************!*\
  !*** ./src/app/page/job/job.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#EEEEEE;\n  font-size: 0.9em;\n}\n\n.btn {\n  text-align: left;\n  width: 100%;\n  border-radius: 5px !important;\n}\n\nlabel {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2IvRTpcXEFwcF9Nb2JpbGVcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxqb2JcXGpvYi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvam9iL2pvYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxnQkFBQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQ0VKOztBREFBO0VBQ0UsZ0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvam9iL2pvYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0VFRUVFRTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuLmJ0bntcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG59XHJcbmxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuLy8gI0xlZnRcclxuLy8ge1xyXG4vLyAgIHdpZHRoOiAxNzVweDtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gI1JpZ2h0XHJcbi8vIHtcclxuLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDE3NXB4KTtcclxuLy8gbGVmdDogMTc1cHg7XHJcbi8vIGhlaWdodDogY2FsYygxMDAlICsgNTBweCk7XHJcbi8vIGZsb2F0OiByaWdodDtcclxuLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNFRUVFRUU7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5idG4ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/job/job.page.ts":
/*!**************************************!*\
  !*** ./src/app/page/job/job.page.ts ***!
  \**************************************/
/*! exports provided: JobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPage", function() { return JobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");








var JobPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function JobPage(DataService, navCtrl, route, router, storageService, postDataService) {
        this.DataService = DataService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.postDataService = postDataService;
        this.isShow = false;
        this.job = [];
        this.jobdetail = [];
    }
    //#endregion
    //#region click
    JobPage.prototype.click = function (item) {
        console.log(item.WorkCloseID);
        if (item.JobType == "CM") {
            if (item.WorkCloseID == "WorkClose001") {
            }
            else {
                console.log(item);
                var params = {
                    data: item,
                    newinstallID: item.installnew,
                    installID: item.installID,
                    tranID: item.tranID,
                    planID: item.planID,
                    type: item.JobType
                };
                console.log(params);
                var navigationExtras = {
                    queryParams: {
                        data: JSON.stringify(params)
                    }
                };
                this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
                console.log("sent", navigationExtras);
            }
        }
        else {
            console.log(item);
            var params = {
                data: item,
                installID: item.installID,
                tranID: item.tranID,
                planID: item.planID,
                type: item.JobType
            };
            console.log(params);
            var navigationExtras = {
                queryParams: {
                    data: JSON.stringify(params)
                }
            };
            this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
            console.log("sent", navigationExtras);
        }
    };
    //#endregion
    //#region loaditem
    JobPage.prototype.loadItems = function () {
        var _this = this;
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            console.log('job item', items);
            for (var i = 0; i < _this.items.length; i++) {
                _this.empID = _this.items[i].empID;
                // console.log(this.empID, this.month, this.year);
                _this.job.empID = _this.empID;
                _this.job.month = _this.month;
                _this.job.year = _this.year;
                // console.log(this.job);
                // this.postDataService.postjob(this.job).then(work => {
                //   this.jobresolve = work;
                //   console.log(this.jobresolve)
                //   if (this.jobresolve == false) {
                //     this.isShow = true;
                //   }
                //   for (let i = 0; i < this.jobresolve.length; i++) {
                //     this.type = this.jobresolve[i].JobType
                //   }
                // });
            }
            console.log('job', _this.job);
            _this.postDataService.postjob(_this.job).then(function (work) {
                _this.jobresolve = work;
                console.log('job postjob', _this.jobresolve);
                if (_this.jobresolve == false) {
                    _this.isShow = true;
                }
                for (var i = 0; i < _this.jobresolve.length; i++) {
                    _this.type = _this.jobresolve[i].JobType;
                }
            });
        });
    };
    //#endregion
    //#region start
    JobPage.prototype.ngOnInit = function () {
        this.loadItems();
    };
    //#endregion
    //#region next
    JobPage.prototype.next = function (type) {
        console.log(type);
        if (type == 'pm') {
            this.router.navigate(['/job/reportcheckpm']);
        }
        if (type == 'cm') {
            this.router.navigate(['/job/cm']);
        }
        if (type == 'install') {
            this.router.navigate(['/job/install']);
        }
        if (type == 'uninstall') {
            this.router.navigate(['/job/uninstall']);
        }
    };
    JobPage.ctorParameters = function () { return [
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"] }
    ]; };
    JobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! raw-loader!./job.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/job/job.page.html"),
            styles: [__webpack_require__(/*! ./job.page.scss */ "./src/app/page/job/job.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_6__["PostDataService"]])
    ], JobPage);
    return JobPage;
}());



/***/ })

}]);
//# sourceMappingURL=job-job-module-es5.js.map