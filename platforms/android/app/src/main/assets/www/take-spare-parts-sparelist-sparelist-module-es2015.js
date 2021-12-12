(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["take-spare-parts-sparelist-sparelist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/take-spare-parts/sparelist/sparelist.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/take-spare-parts/sparelist/sparelist.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>รายการเบิกอะไหล่</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"loadpage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-12\" style=\"text-align: center; margin-top: 20px;\" *ngIf=\"loads == false\">\r\n        <label>ไม่พบข้อมูล</label>\r\n      </div>\r\n      <div class=\"col-md-12 col-12\" *ngIf=\"loads == true\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>รายการเบิกอะไหล่\r\n            </div>\r\n            <!-- <div class=\"tools\">\r\n              <span class=\"label label-sm label-success circle\" (click)=\"NewSpare()\">เปิดใบเบิกอะไหล่</span>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"portlet-body\">\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 text-right\" style=\"padding-top: 10px; padding-bottom: 10px;\">\r\n                    <ion-button color=\"primary\" (click)=\"NewSpare()\">\r\n                      <ion-icon name=\"add\"></ion-icon> เปิดใบเบิกอะไหล่</ion-button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"table-scrollable\">\r\n                      <table class=\"table table-hover\">\r\n                        <thead>\r\n                          <tr>\r\n                            <!-- <th> ลำดับที่ </th> -->\r\n                            <th> เลขที่เอกสาร </th>\r\n                            <th> ชื่อลูกค้า </th>\r\n                            <th> สถานะ </th>\r\n                            <th style=\"text-align: center;\"> วันที่<br>สร้างเอกสาร </th>\r\n                            <th></th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of list; let i = index\">\r\n                            <!-- <td style=\"text-align: center;\"> {{i+1}}</td> -->\r\n                            <td> {{item.ServiceReportNo}} </td>\r\n                            <td> {{item.CustomerName}} </td>\r\n                            <td> {{item.Status}} </td>\r\n                            <td> {{item.CreatedDate}} </td>\r\n                            <td *ngIf=\"item.Status != 'ช่างขอเบิกอะไหล่'; else lblEdit\">\r\n                              <ion-button size=\"small\" color=\"warning\" (click)=\"Detail(item)\">\r\n                                <ion-icon name=\"eye\"></ion-icon>  \r\n                              </ion-button>\r\n                            </td>\r\n                            <td *ngIf=\"item.Status == 'ช่างขอเบิกอะไหล่'; else lblView\">\r\n                              <span class=\"label label-sm label-warning circle\" #lblView\r\n                                (click)=\"Detail(item)\">แก้ไข</span>\r\n                            </td>\r\n                            <td *ngIf=\"item.Status == 'ช่างขอเบิกอะไหล่'; else lblView\">\r\n                              <span class=\"label label-sm label-danger circle\" #lblView (click)=\"Delete(item)\">ลบ</span>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/take-spare-parts/sparelist/sparelist.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/page/take-spare-parts/sparelist/sparelist.module.ts ***!
  \*********************************************************************/
/*! exports provided: SparelistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparelistPageModule", function() { return SparelistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sparelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sparelist.page */ "./src/app/page/take-spare-parts/sparelist/sparelist.page.ts");







const routes = [
    {
        path: '',
        component: _sparelist_page__WEBPACK_IMPORTED_MODULE_6__["SparelistPage"]
    }
];
let SparelistPageModule = class SparelistPageModule {
};
SparelistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sparelist_page__WEBPACK_IMPORTED_MODULE_6__["SparelistPage"]]
    })
], SparelistPageModule);



/***/ }),

/***/ "./src/app/page/take-spare-parts/sparelist/sparelist.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/page/take-spare-parts/sparelist/sparelist.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS90YWtlLXNwYXJlLXBhcnRzL3NwYXJlbGlzdC9DOlxcU29sdXRpb25cXEdpdGh1YlxcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXHRha2Utc3BhcmUtcGFydHNcXHNwYXJlbGlzdFxcc3BhcmVsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS90YWtlLXNwYXJlLXBhcnRzL3NwYXJlbGlzdC9zcGFyZWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS90YWtlLXNwYXJlLXBhcnRzL3NwYXJlbGlzdC9zcGFyZWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/take-spare-parts/sparelist/sparelist.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/take-spare-parts/sparelist/sparelist.page.ts ***!
  \*******************************************************************/
/*! exports provided: SparelistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparelistPage", function() { return SparelistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let SparelistPage = class SparelistPage {
    constructor(postDataService, storageService, alertController, loadingController, navCtrl) {
        this.postDataService = postDataService;
        this.storageService = storageService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.loads = false;
        setTimeout(() => {
            this.ngOnInit();
        }, 500);
    }
    loadpage() {
        setTimeout(() => {
            this.loaddata();
            this.ngOnInit();
        }, 500);
    }
    loaddata() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'กำลังโหลดข้อมูล...',
                duration: 500,
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.storageService.getUser().then(items => {
            for (let i = 0; i < items.length; i++) {
                this.empID = items[i].empID;
            }
            let params = {
                EmpID: this.empID,
                Type: "List",
            };
            this.postDataService.PostCus(params).then(list => {
                this.list = list;
                console.log(list);
                if (this.list.length == 0) {
                    this.loads = false;
                }
                else {
                    this.loads = true;
                }
            });
        });
    }
    Detail(item) {
        console.log(item);
        let params = {
            JobID: item.JobID,
            type: "edit",
            CusID: item.CustomerID,
            item: item
        };
        console.log(params);
        const navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        console.log(navigationExtras);
        this.navCtrl.navigateForward(['take-spare-parts'], navigationExtras);
    }
    NewSpare() {
        let params = {
            type: "new"
        };
        console.log(params);
        const navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        console.log(navigationExtras);
        this.navCtrl.navigateForward(['request-sparepart'], navigationExtras);
    }
    Delete(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'แจ้งเตือน!',
                message: 'ต้องการลบข้อมูล',
                buttons: [
                    {
                        text: 'ตกลง',
                        handler: () => {
                            let params = {
                                JobID: item.JobID,
                                EmpID: this.empID,
                                Type: "DeleteJob",
                            };
                            this.postDataService.PostCus(params).then(list => {
                                console.log(list);
                                this.ngOnInit();
                            });
                        }
                    }, {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SparelistPage.ctorParameters = () => [
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
SparelistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sparelist',
        template: __webpack_require__(/*! raw-loader!./sparelist.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/take-spare-parts/sparelist/sparelist.page.html"),
        styles: [__webpack_require__(/*! ./sparelist.page.scss */ "./src/app/page/take-spare-parts/sparelist/sparelist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_data_service__WEBPACK_IMPORTED_MODULE_2__["PostDataService"],
        _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], SparelistPage);



/***/ })

}]);
//# sourceMappingURL=take-spare-parts-sparelist-sparelist-module-es2015.js.map