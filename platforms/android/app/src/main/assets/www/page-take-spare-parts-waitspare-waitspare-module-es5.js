(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-take-spare-parts-waitspare-waitspare-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/take-spare-parts/waitspare/waitspare.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/take-spare-parts/waitspare/waitspare.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>รายการเบิกรอช่างมารับอะไหล่</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"portlet-body\">     \r\n      <div class=\"row\"> \r\n        <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\" *ngIf=\"load == false\">\r\n        <label>ไม่พบข้อมูล</label>\r\n      </div>\r\n        <div class=\"col-md-12\" style=\"margin: 2px;\" *ngIf=\"load == true\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-user\"></i>รายการเบิกรอช่างมารับอะไหล่</div>\r\n            </div>\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"table-scrollable\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"text-center\"> ลำดับ </th>\r\n                            <th> เลขที่ใบเบิก </th>\r\n                            <th class=\"text-center\"> อะไหล่ที่เบิก </th>\r\n                            <th> วันที่เบิก </th>\r\n                            <th> สถานะ </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of ListJob; let i = index\">\r\n                            <td class=\"text-center\"> {{i + 1}} </td>\r\n                            <td> {{item.Docno}} </td>\r\n                            <td class=\"text-center\"> {{item.Balance}} </td>\r\n                            <td> {{item.CreatedDate}} </td>\r\n                            <td> {{item.Status}} </td>\r\n                            <td>\r\n                              <ion-button expand=\"block\" color=\"warning\" (click)=\"GetJob(item.JobID,item.Docno)\"\r\n                                size=\"small\">กดรับอะไหล่</ion-button>\r\n                              <!-- <span class=\"label label-sm label-warning circle\"\r\n                                (click)=\"DeleteFromList(i,item)\">ลบออกจากรายการเบิก</span> -->\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"margin:2px;\" *ngIf=\"DetailJobList\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-user\"></i>รายการเบิกอะไหล่ {{No}}</div>\r\n            </div>\r\n            <div class=\"portlet-body\">\r\n              <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"table-scrollable\">\r\n                        <table class=\"table table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"text-center\"> ลำดับที่ </th>\r\n                              <th> ประเภทอะไหล่ </th>\r\n                              <th> ชื่ออะไหล่ </th>\r\n                              <th class=\"text-center\"> ตำแหน่ง </th>\r\n                              <th class=\"text-center\"> จำนวนที่เบิก </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of DetailJobList; let i = index\">\r\n                              <td class=\"text-center\"> {{i + 1}} </td>\r\n                              <td> {{item.AssetTypeName}} </td>\r\n                              <td> {{item.Skuname}} </td>\r\n                              <td class=\"text-center\"> {{item.PositionNo}} </td>\r\n                              <td class=\"text-center\"> {{item.Amount}} </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/take-spare-parts/waitspare/waitspare.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/page/take-spare-parts/waitspare/waitspare.module.ts ***!
  \*********************************************************************/
/*! exports provided: WaitsparePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitsparePageModule", function() { return WaitsparePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _waitspare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waitspare.page */ "./src/app/page/take-spare-parts/waitspare/waitspare.page.ts");







var routes = [
    {
        path: '',
        component: _waitspare_page__WEBPACK_IMPORTED_MODULE_6__["WaitsparePage"]
    }
];
var WaitsparePageModule = /** @class */ (function () {
    function WaitsparePageModule() {
    }
    WaitsparePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_waitspare_page__WEBPACK_IMPORTED_MODULE_6__["WaitsparePage"]]
        })
    ], WaitsparePageModule);
    return WaitsparePageModule;
}());



/***/ }),

/***/ "./src/app/page/take-spare-parts/waitspare/waitspare.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/page/take-spare-parts/waitspare/waitspare.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvdGFrZS1zcGFyZS1wYXJ0cy93YWl0c3BhcmUvd2FpdHNwYXJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page/take-spare-parts/waitspare/waitspare.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/take-spare-parts/waitspare/waitspare.page.ts ***!
  \*******************************************************************/
/*! exports provided: WaitsparePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitsparePage", function() { return WaitsparePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sparepart_parts_waiting_list_parts_waiting_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sparepart/parts-waiting-list/parts-waiting-list.page */ "./src/app/page/sparepart/parts-waiting-list/parts-waiting-list.page.ts");






var WaitsparePage = /** @class */ (function () {
    function WaitsparePage(postDataService, storageService, modalController) {
        this.postDataService = postDataService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.load = false;
        this.loadItems();
    }
    WaitsparePage.prototype.ngOnInit = function () {
    };
    WaitsparePage.prototype.loadItems = function () {
        var _this = this;
        this.storageService.getUser().then(function (items) {
            for (var i = 0; i < items.length; i++) {
                _this.empID = items[i].empID;
            }
            _this.GetListJob();
        });
    };
    WaitsparePage.prototype.GetListJob = function () {
        var _this = this;
        var params = {
            EmpID: this.empID,
            Type: "GetListJobWait",
        };
        console.log(params);
        this.postDataService.PostCus(params).then(function (ListJob) {
            _this.ListJob = ListJob;
            console.log(_this.ListJob);
            if (_this.ListJob == []) {
                _this.load = false;
            }
            else {
                _this.load = true;
            }
        });
    };
    WaitsparePage.prototype.GetJob = function (item, Docno) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _sparepart_parts_waiting_list_parts_waiting_list_page__WEBPACK_IMPORTED_MODULE_5__["PartsWaitingListPage"],
                            cssClass: 'my-custom-modal-css-pm',
                            componentProps: {
                                empID: this.empID,
                                JobID: item,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WaitsparePage.ctorParameters = function () { return [
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    WaitsparePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waitspare',
            template: __webpack_require__(/*! raw-loader!./waitspare.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/take-spare-parts/waitspare/waitspare.page.html"),
            styles: [__webpack_require__(/*! ./waitspare.page.scss */ "./src/app/page/take-spare-parts/waitspare/waitspare.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], WaitsparePage);
    return WaitsparePage;
}());



/***/ })

}]);
//# sourceMappingURL=page-take-spare-parts-waitspare-waitspare-module-es5.js.map