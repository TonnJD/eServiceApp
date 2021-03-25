(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-take-spare-parts-take-spare-parts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/take-spare-parts/take-spare-parts.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/take-spare-parts/take-spare-parts.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>รายละเอียดการเบิกอะไหล่</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>ข้อมูลลูกค้า</div>\r\n            <div class=\"tools\" *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null; else lblOld\">\r\n              <span class=\"label label-sm label-success circle\" (click)=\"Save()\" #lblOld>บันทึก</span>\r\n            </div>\r\n            <div class=\"tools\" *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null; else lblTake\">\r\n              <span class=\"label label-sm label-success circle\" (click)=\"Requested()\" #lblTake>ขอเบิกอะไหล่</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\">\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <ion-list>\r\n                      <ion-item *ngIf=\"JobID == null; else lblNew\" #lblNew>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ค้นหา</ion-label>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          <ion-input [(ngModel)]=\"CustomerNameSearch\"></ion-input>\r\n                        </div>\r\n                        <div class=\"col-2 pull-right\">\r\n                          <ion-icon name=\"search\" (click)=\"onChange($event,'SearchCustomerName')\"></ion-icon>                          \r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">รหัสลูกค้า</ion-label>\r\n                        </div>\r\n                        <div class=\"col-6\" *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-input #lblNew [(ngModel)]=\"CustomerCode\"></ion-input>\r\n                        </div>\r\n                        <div class=\"col-2 pull-right\" *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-icon name=\"search\" (click)=\"onChange($event,'code')\" #lblNew></ion-icon>\r\n                          \r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{CustomerCode}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ชื่อลูกค้า</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\"  *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-select interface=\"popover\" (ionChange)=\"onChange($event,'cus')\" #lblNew [(ngModel)]=\"CustomerID\">\r\n                            <ion-select-option style=\"text-align: left;\" *ngFor=\"let title of Cus\"\r\n                              [value]=\"title.CustomerID\" [selected]=\"true\">{{title.CustomerName}}</ion-select-option>\r\n                          </ion-select>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{CustomerName}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ที่อยู่ร้าน</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-textarea rows=\"3\" [(ngModel)]=\"AddressSite\"></ion-textarea>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">เบอร์โทรศัพท์ร้าน</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-label>{{TelCompany}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">หมายเลขเอกสาร</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-label>{{ServiceReportNo}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">วันที่เบิก</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-label>{{myDate | date: 'dd-MM-yyyy'}}</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label>{{myDate | date: 'dd-MM-yyyy'}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">เบอร์โทรศัพท์ช่าง</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\"\r\n                          *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null || type == 'new'; else lblNew\">\r\n                          <ion-input type=\"number\" [(ngModel)]=\"EngineerTel\" #lblNew></ion-input>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{EngineerTel}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">อ้างอิง</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\"\r\n                          *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null || type == 'new'; else lblNew\">\r\n                          <ion-input [(ngModel)]=\"Reference\" #lblNew></ion-input>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{Reference}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ชื่อช่าง</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-label>{{name}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\" style=\"text-align: right; padding: 20px;\"\r\n        *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && CusID != null; else lblOld\">\r\n        <span class=\"label label-sm label-warning\" (click)=\"spare()\" #lblOld> เพิ่มเครื่อง </span>\r\n      </div>\r\n      <!-- <div class=\"col-lg-12\" style=\"text-align: right; padding: 20px;\"\r\n        *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && CusID != null; else lblOld\">\r\n        <span class=\"label label-sm label-warning\" (click)=\"takespare()\" #lblOld> เพิ่มอะไหล่ </span>\r\n      </div> -->\r\n      <div class=\"col-lg-12\" *ngIf=\"JobID != null; else lbltable\">\r\n        <div class=\"portlet light \" #lbltable>\r\n          <div class=\"portlet-body\">\r\n            <div class=\"table-scrollable\">\r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th> ลำดับที่ </th>\r\n                    <th> ประเภทเครื่อง </th>\r\n                    <th> รายละเอียดเครื่อง </th>\r\n                    <th> จำนวน </th>\r\n                    <th> </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of list; let i = index\">\r\n                    <td> {{i+1}}</td>\r\n                    <td> {{item.AssetType}} </td>\r\n                    <td> {{item.AssetNo}} </td>\r\n                    <td> {{item.Qty}} </td>\r\n                    <!-- <td *ngIf=\"Status == 'ช่างขอเบิกอะไหล่'; else lblOld\">\r\n                      <span class=\"label label-sm label-warning\" (click)=\"Edit(item)\" #lblOld> แก้ไข </span>\r\n                    </td> -->\r\n                    <td *ngIf=\"Status == 'ช่างขอเบิกอะไหล่'; else lblOld\">\r\n                      <span class=\"label label-sm label-danger\" (click)=\"Delete(item)\" #lblOld> ลบ </span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page/take-spare-parts/take-spare-parts.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/page/take-spare-parts/take-spare-parts.module.ts ***!
  \******************************************************************/
/*! exports provided: TakeSparePartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSparePartsPageModule", function() { return TakeSparePartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _take_spare_parts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./take-spare-parts.page */ "./src/app/page/take-spare-parts/take-spare-parts.page.ts");







var routes = [
    {
        path: '',
        component: _take_spare_parts_page__WEBPACK_IMPORTED_MODULE_6__["TakeSparePartsPage"]
    }
];
var TakeSparePartsPageModule = /** @class */ (function () {
    function TakeSparePartsPageModule() {
    }
    TakeSparePartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_take_spare_parts_page__WEBPACK_IMPORTED_MODULE_6__["TakeSparePartsPage"]]
        })
    ], TakeSparePartsPageModule);
    return TakeSparePartsPageModule;
}());



/***/ }),

/***/ "./src/app/page/take-spare-parts/take-spare-parts.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/page/take-spare-parts/take-spare-parts.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: white;\n}\n\nion-label {\n  font-size: 0.8em !important;\n}\n\nion-input {\n  font-size: 0.8em !important;\n}\n\nion-textarea {\n  font-size: 0.8em !important;\n}\n\n.container-fluid {\n  padding: 0px;\n}\n\nion-select {\n  font-size: 0.8em !important;\n  --ion-background-color: white;\n  max-width: 100% !important;\n}\n\nion-select-option {\n  font-size: 0.8em !important;\n  --ion-background-color: white;\n}\n\nion-popover ion-backdrop {\n  opacity: 0.5 !important;\n}\n\nion-popover .popover-wrapper .popover-content {\n  background-color: white;\n  width: 100% !important;\n  left: 0px !important;\n}\n\n[class*=\" fa-\"]:not(.fa-stack),\n[class*=\" glyphicon-\"],\n[class*=\" icon-\"],\n[class^=fa-]:not(.fa-stack),\n[class^=glyphicon-],\n[class^=icon-] {\n  font-size: 1em !important;\n}\n\nlabel {\n  padding-top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS90YWtlLXNwYXJlLXBhcnRzL0U6XFxHaXRIdWJcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFx0YWtlLXNwYXJlLXBhcnRzXFx0YWtlLXNwYXJlLXBhcnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS90YWtlLXNwYXJlLXBhcnRzL3Rha2Utc3BhcmUtcGFydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURDQTtFQUNJLDJCQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksMkJBQUE7QUNJSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURDQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ0VKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtBQ0VKOztBREVJO0VBQ0ksdUJBQUE7QUNDUjs7QURHSTtFQUNFLHVCQUFBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQ0RSOztBRE1BOzs7Ozs7RUFNSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0ksNEJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvdGFrZS1zcGFyZS1wYXJ0cy90YWtlLXNwYXJlLXBhcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW0haW1wb3J0YW50O1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW0haW1wb3J0YW50O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW0haW1wb3J0YW50O1xyXG59XHJcbi8vIGlvbi1idXR0b257XHJcbi8vICAgICBmb250LXNpemU6IDFlbSFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgICBmb250LXNpemU6IDAuOGVtIWltcG9ydGFudDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qtb3B0aW9ue1xyXG4gICAgZm9udC1zaXplOiAwLjhlbSFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXBvcG92ZXJ7XHJcbiAgICBpb24tYmFja2Ryb3B7XHJcbiAgICAgICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7ICBcclxuICAgIH1cclxuXHJcbiAgICAucG9wb3Zlci13cmFwcGVye1xyXG4gICAgLnBvcG92ZXItY29udGVudHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMHB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbltjbGFzcyo9XCIgZmEtXCJdOm5vdCguZmEtc3RhY2spLFxyXG5bY2xhc3MqPVwiIGdseXBoaWNvbi1cIl0sXHJcbltjbGFzcyo9XCIgaWNvbi1cIl0sXHJcbltjbGFzc149ZmEtXTpub3QoLmZhLXN0YWNrKSxcclxuW2NsYXNzXj1nbHlwaGljb24tXSxcclxuW2NsYXNzXj1pY29uLV0ge1xyXG4gICAgZm9udC1zaXplOiAxLjBlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXBvcG92ZXIgaW9uLWJhY2tkcm9wIHtcbiAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XG59XG5pb24tcG9wb3ZlciAucG9wb3Zlci13cmFwcGVyIC5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbltjbGFzcyo9XCIgZmEtXCJdOm5vdCguZmEtc3RhY2spLFxuW2NsYXNzKj1cIiBnbHlwaGljb24tXCJdLFxuW2NsYXNzKj1cIiBpY29uLVwiXSxcbltjbGFzc149ZmEtXTpub3QoLmZhLXN0YWNrKSxcbltjbGFzc149Z2x5cGhpY29uLV0sXG5bY2xhc3NePWljb24tXSB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/take-spare-parts/take-spare-parts.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/take-spare-parts/take-spare-parts.page.ts ***!
  \****************************************************************/
/*! exports provided: TakeSparePartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSparePartsPage", function() { return TakeSparePartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _take_spare_parts_take_new_take_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../take-spare-parts/take-new/take-new.page */ "./src/app/page/take-spare-parts/take-new/take-new.page.ts");








var TakeSparePartsPage = /** @class */ (function () {
    function TakeSparePartsPage(storageService, modalController, postDataService, navCtrl, alertController, route) {
        var _this = this;
        this.storageService = storageService;
        this.modalController = modalController;
        this.postDataService = postDataService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.myDate = new Date().toISOString();
        this.isShowSpare = false;
        this.isShow = false;
        var params = {
            EmpID: this.empID,
            Type: "Customer"
        };
        this.postDataService.PostCus(params).then(function (Cus) {
            _this.Cus = Cus;
        });
        this.route.queryParams.subscribe(function (params) {
            _this.myId = JSON.parse(params["data"]);
            _this.type = _this.myId.type;
            if (_this.type == "new") {
                _this.type = _this.myId.type;
                console.log(_this.type);
            }
            else {
                _this.item = _this.myId.item;
                _this.CustomerCode = _this.item.CustomerCode;
                _this.CustomerName = _this.item.CustomerName;
                _this.AddressSite = _this.item.AddressSite;
                _this.ServiceReportNo = _this.item.ServiceReportNo;
                _this.Status = _this.item.Status;
                _this.TelCompany = _this.item.TelCompany;
                _this.EngineerTel = _this.item.EngineerTel;
                _this.Reference = _this.item.Reference;
                _this.JobID = _this.myId.JobID;
                _this.CusID = _this.myId.CusID;
                console.log(_this.JobID, _this.type, _this.CusID);
                console.log(_this.item);
            }
        });
    }
    TakeSparePartsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type == "edit") {
            var params = {
                JobID: this.JobID,
                Type: "ListDetail",
            };
            this.postDataService.PostCus(params).then(function (list) {
                _this.list = list;
                console.log(list);
                if (_this.list != null) {
                    _this.isShow = true;
                    _this.JobID = _this.JobID;
                }
            });
        }
        else if (this.type == "new") {
            var params = {
                JobID: this.JobID,
                Type: "ListDetail",
            };
            this.postDataService.PostCus(params).then(function (list) {
                _this.list = list;
                console.log(list);
                if (_this.list != null) {
                    _this.list = list;
                    _this.isShow = true;
                    _this.JobID = _this.JobID;
                }
            });
        }
        this.loadItems();
    };
    TakeSparePartsPage.prototype.spare = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _take_spare_parts_take_new_take_new_page__WEBPACK_IMPORTED_MODULE_6__["TakeNewPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                EmpID: this.empID,
                                CusID: this.CusID,
                                JobID: this.JobID,
                                Reference: this.Reference,
                                EngineerTel: this.EngineerTel
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.JobID = data.data;
                            if (_this.JobID != null) {
                                if (_this.type == "new") {
                                    var params = {
                                        JobID: _this.JobID,
                                        Type: "ListNew",
                                    };
                                    _this.postDataService.PostCus(params).then(function (list) {
                                        _this.cus = list;
                                        console.log(list);
                                        if (_this.cus != null) {
                                            _this.isShow = true;
                                            for (var i = 0; i < _this.cus.length; i++) {
                                                _this.ServiceReportNo = _this.cus[i].ServiceReportNo;
                                                _this.CustomerName = _this.cus[i].CustomerName;
                                                _this.EngineerTel = _this.cus[i].EngineerTel;
                                                _this.Reference = _this.cus[i].Reference;
                                                _this.JobID = _this.cus[i].JobID;
                                            }
                                        }
                                    });
                                }
                                _this.ngOnInit();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TakeSparePartsPage.prototype.loadItems = function () {
        var _this = this;
        this.storageService.getUser().then(function (items) {
            for (var i = 0; i < items.length; i++) {
                _this.empID = items[i].empID;
                _this.name = items[i].name;
            }
            var params = {
                EmpID: _this.empID,
                Type: "Customer"
            };
            _this.postDataService.PostCus(params).then(function (Cus) {
                // this.Cus = Cus;
            });
        });
    };
    TakeSparePartsPage.prototype.onChange = function (value, type) {
        var _this = this;
        if (type == 'SearchCustomerName') {
            var params = {
                CusID: this.CustomerNameSearch,
                Type: "SearchCustomerName"
            };
            console.log('SearchCustomerName params', params);
            this.postDataService.PostCus(params).then(function (Cus) {
                _this.Cus = Cus;
                for (var i = 0; i < _this.Cus.length; i++) {
                    _this.CustomerID = _this.Cus[i].CustomerID;
                    _this.CustomerCode = _this.Cus[i].CustomerCode;
                    _this.CustomerName = _this.Cus[i].CustomerName;
                    _this.AddressSite = _this.Cus[i].Address;
                    _this.ServiceReportNo = _this.Cus[i].ServiceReportNo;
                    _this.Status = _this.Cus[i].Status;
                    _this.TelCompany = _this.Cus[i].TelCompany;
                    _this.EngineerTel = _this.Cus[i].EngineerTel;
                    _this.Reference = _this.Cus[i].Reference;
                    _this.JobID = _this.Cus[i].JobID;
                }
                console.log(_this.Cus);
            });
        }
        if (type == 'cus') {
            this.CusID = value.detail.value;
            console.log('cusid', this.CusID);
            var params = {
                CusID: this.CusID,
                Type: "Detail"
            };
            this.postDataService.PostCus(params).then(function (Cus) {
                _this.value = Cus;
                console.log(Cus);
                _this.CustomerID = _this.value.CustomerID;
                _this.CustomerCode = _this.value.CustomerCode;
                _this.TelCompany = _this.value.EngineerTel;
                _this.AddressSite = _this.value.Address;
                // for (let i = 0; i < this.Cus.length; i++) {
                //   this.CustomerID = this.Cus[i].CustomerID
                //   this.CustomerCode = this.Cus[i].CustomerCode
                //   this.CustomerName = this.Cus[i].CustomerName
                //   this.AddressSite = this.Cus[i].Address
                //   this.ServiceReportNo = this.Cus[i].ServiceReportNo
                //   this.Status = this.Cus[i].Status
                //   this.TelCompany = this.Cus[i].TelCompany
                //   this.EngineerTel = this.Cus[i].EngineerTel
                //   this.Reference = this.Cus[i].Reference
                //   this.JobID = this.Cus[i].JobID
                // }
                console.log(_this.CusID);
            });
        }
        if (type == 'code') {
            var params = {
                CusID: this.CustomerCode,
                Type: "Cuscode"
            };
            this.postDataService.PostCus(params).then(function (Cus) {
                _this.code = Cus;
                console.log(_this.code);
                for (var i = 0; i < _this.code.length; i++) {
                    _this.CustomerID = _this.code[i].CustomerID;
                    _this.CustomerCode = _this.code[i].CustomerCode;
                    _this.CustomerName = _this.code[i].CustomerName;
                    _this.AddressSite = _this.code[i].Address;
                    _this.ServiceReportNo = _this.code[i].ServiceReportNo;
                    _this.Status = _this.code[i].Status;
                    _this.TelCompany = _this.code[i].TelCompany;
                    _this.EngineerTel = _this.code[i].EngineerTel;
                    _this.Reference = _this.code[i].Reference;
                    _this.JobID = _this.code[i].JobID;
                }
                console.log(_this.CusID);
            });
        }
    };
    TakeSparePartsPage.prototype.Delete = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'แจ้งเตือน!',
                            message: 'ต้องการลบข้อมูล',
                            buttons: [
                                {
                                    text: 'ตกลง',
                                    handler: function () {
                                        var params = {
                                            JobDeviceID: item.JobDeviceID,
                                            EmpID: _this.empID,
                                            Type: "Delete",
                                        };
                                        _this.postDataService.PostCus(params).then(function (list) {
                                            console.log(list);
                                            _this.isShow = true;
                                            _this.ngOnInit();
                                        });
                                    }
                                }, {
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }
                            ]
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
    TakeSparePartsPage.prototype.Edit = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        return [4 /*yield*/, this.modalController.create({
                                component: _take_spare_parts_take_new_take_new_page__WEBPACK_IMPORTED_MODULE_6__["TakeNewPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    item: item,
                                    EmpID: this.empID,
                                    CusID: this.CusID,
                                    JobID: this.JobID,
                                    Reference: this.Reference,
                                    EngineerTel: this.EngineerTel,
                                    type: "edit"
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(_this.JobID);
                            if (_this.JobID != null) {
                                _this.ngOnInit();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TakeSparePartsPage.prototype.Save = function () {
        var _this = this;
        var params = {
            EmpID: this.empID,
            JobID: this.JobID,
            Reference: this.Reference,
            EngineerTel: this.EngineerTel,
            Type: "UpdateJob",
        };
        this.postDataService.PostCus(params).then(function (list) {
            _this.cus = list;
            console.log(list);
            if (_this.cus != null) {
                for (var i = 0; i < _this.cus.length; i++) {
                    _this.CustomerCode = _this.cus[i].CustomerCode;
                    _this.CustomerName = _this.cus[i].CustomerName;
                    _this.AddressSite = _this.cus[i].AddressSite;
                    _this.ServiceReportNo = _this.cus[i].ServiceReportNo;
                    _this.Status = _this.cus[i].Status;
                    _this.TelCompany = _this.cus[i].TelCompany;
                    _this.EngineerTel = _this.cus[i].EngineerTel;
                    _this.Reference = _this.cus[i].Reference;
                    _this.JobID = _this.cus[i].JobID;
                    _this.type = _this.cus[i].type;
                    console.log(_this.CustomerName);
                }
                _this.alertSuccess();
            }
        });
    };
    TakeSparePartsPage.prototype.Requested = function () {
        var _this = this;
        var params = {
            JobID: this.JobID,
            Type: "Approve",
        };
        this.postDataService.PostCus(params).then(function (list) {
            _this.list = list;
            console.log(list);
            _this.alertSuccess();
            _this.navCtrl.navigateForward(['sparelist']);
        });
    };
    //#region alert Success
    TakeSparePartsPage.prototype.alertSuccess = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'แจ้งเตือน',
                            message: 'บันทึกสำเร็จ',
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
    //#region  
    TakeSparePartsPage.prototype.SearchCustomer = function (value) {
    };
    TakeSparePartsPage.ctorParameters = function () { return [
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    TakeSparePartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-take-spare-parts',
            template: __webpack_require__(/*! raw-loader!./take-spare-parts.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/take-spare-parts/take-spare-parts.page.html"),
            styles: [__webpack_require__(/*! ./take-spare-parts.page.scss */ "./src/app/page/take-spare-parts/take-spare-parts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], TakeSparePartsPage);
    return TakeSparePartsPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-take-spare-parts-take-spare-parts-module-es5.js.map