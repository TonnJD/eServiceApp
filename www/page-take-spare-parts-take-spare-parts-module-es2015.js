(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-take-spare-parts-take-spare-parts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/take-spare-parts/take-spare-parts.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/take-spare-parts/take-spare-parts.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>รายละเอียดการเบิกอะไหล่</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"portlet box blue\">\r\n          <!-- <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>ข้อมูลลูกค้า\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"portlet-body\">\r\n            <div class=\"tab-content\">\r\n              <div class=\"tab-pane active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <!-- <button (click)=\"Save()\" class=\"btn btn-success\" *ngIf=\"Status != 'ปิดใบเบิก' && Status != 'รอช่างรับ' && Status != 'อนุมัติ' && Status != 'รออนุมัติ' && CusID != null;\">\r\n                      <span style=\"color: white;\">บันทึก</span>\r\n                    </button>\r\n                    <button (click)=\"Requested()\" class=\"btn btn-primary\" *ngIf=\"Status != 'ปิดใบเบิก' && Status != 'รอช่างรับ' && Status != 'อนุมัติ' && Status != 'รออนุมัติ' && CusID != null;\">\r\n                      <span style=\"color: white;\">ขอเบิกอะไหล่</span>\r\n                    </button> -->\r\n\r\n                    <!-- <div class=\"tools\"\r\n                      *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null; else lblOld\">\r\n                      <button (click)=\"Save()\" class=\"btn btn-success\" #lblOld>\r\n                        <span style=\"color: white;\">บันทึก</span>\r\n                      </button>\r\n                      <span class=\"label label-sm label-success circle\" (click)=\"Save()\" #lblOld>บันทึก</span>\r\n                    </div>\r\n                    <div class=\"tools\"\r\n                      *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null; else lblTake\">\r\n                      <button (click)=\"Requested()\" class=\"btn btn-primary\" #lblTake>\r\n                        <span style=\"color: white;\">ขอเบิกอะไหล่</span>\r\n                      </button>\r\n                      <span class=\"label label-sm label-success circle\" (click)=\"Requested()\"\r\n                        #lblTake>ขอเบิกอะไหล่</span>\r\n                    </div> -->\r\n\r\n                    <div class=\"form-group row\" style=\"margin-top: 20px; margin-bottom: 10px;padding-left: 20px;\">\r\n                      <div class=\"col-xs-12 col-md-3 col-lg-3 h5\">หมายเลขเอกสาร:</div>\r\n                      <div class=\"col-xs-12 col-md-9 col-lg-9 h5\">{{ServiceReportNo}}</div>\r\n                    </div>\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px;padding-left: 20px;\">\r\n                      <div class=\"col-xs-12 col-md-3 col-lg-3 h5\">วัน/เวลาที่เบิก:</div>\r\n                      <div class=\"col-xs-12 col-md-9 col-lg-9 h5\">{{myDate | date: 'dd-MM-yyyy HH:mm'}}</div>\r\n                    </div>\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px;padding-left: 20px;\">\r\n                      <div class=\"col-xs-12 col-md-3 col-lg-3 h5\">ผู้ขอเบิก:</div>\r\n                      <div class=\"col-xs-12 col-md-9 col-lg-9 h5\">{{name}}</div>\r\n                    </div>\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px;padding-left: 20px;\">\r\n                      <div class=\"col-xs-12 col-md-3 col-lg-3 h5\">รหัสลูกค้า:</div>\r\n                      <div class=\"col-xs-12 col-md-9 col-lg-9 h5\">{{CustomerCode}}</div>\r\n                    </div>\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px;padding-left: 20px;\">\r\n                      <div class=\"col-xs-12 col-md-3 col-lg-3 h5\">ร้านค้า/สาขา:</div>\r\n                      <div class=\"col-xs-12 col-md-9 col-lg-9 h5\">{{CustomerName}}</div>\r\n                    </div>\r\n                    <div class=\"form-group row\" style=\"margin-bottom: 10px;padding-left: 20px;\">\r\n                      <div class=\"col-xs-12 col-md-3 col-lg-3 h5\">ประเภทการเบิก:</div>\r\n                      <div class=\"col-xs-12 col-md-9 col-lg-9 h5\">{{RequisionType}}</div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"display: none;\">\r\n                  <div class=\"col-12\">\r\n                    <ion-list>\r\n                      <ion-item *ngIf=\"JobID == null; else lblNew\" #lblNew>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ค้นหา</ion-label>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          <ion-input [(ngModel)]=\"CustomerNameSearch\"></ion-input>\r\n                        </div>\r\n                        <div class=\"col-2 pull-right\">\r\n                          <ion-icon name=\"search\" (click)=\"onChange($event,'SearchCustomerName')\"></ion-icon>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">รหัสลูกค้า</ion-label>\r\n                        </div>\r\n                        <div class=\"col-6\" *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-input #lblNew [(ngModel)]=\"CustomerCode\"></ion-input>\r\n                        </div>\r\n                        <div class=\"col-2 pull-right\" *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-icon name=\"search\" (click)=\"onChange($event,'code')\" #lblNew></ion-icon>\r\n\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{CustomerCode}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ชื่อลูกค้า</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-select interface=\"popover\" (ionChange)=\"onChange($event,'cus')\" #lblNew\r\n                            [(ngModel)]=\"CustomerID\">\r\n                            <ion-select-option style=\"text-align: left;\" *ngFor=\"let title of Cus\"\r\n                              [value]=\"title.CustomerID\" [selected]=\"true\">{{title.CustomerName}}</ion-select-option>\r\n                          </ion-select>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{CustomerName}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ที่อยู่ร้าน</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-textarea rows=\"3\" [(ngModel)]=\"AddressSite\"></ion-textarea>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">เบอร์โทรศัพท์ร้าน</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-label>{{TelCompany}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">หมายเลขเอกสาร</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-label>{{ServiceReportNo}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">วันที่เบิก</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID == null; else lblNew\">\r\n                          <ion-label>{{myDate | date: 'dd-MM-yyyy'}}</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label>{{myDate | date: 'dd-MM-yyyy'}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">เบอร์โทรศัพท์ช่าง</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\"\r\n                          *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null || type == 'new'; else lblNew\">\r\n                          <ion-input type=\"number\" [(ngModel)]=\"EngineerTel\" #lblNew></ion-input>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{EngineerTel}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">อ้างอิง</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\"\r\n                          *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && JobID != null || type == 'new'; else lblNew\">\r\n                          <ion-input [(ngModel)]=\"Reference\" #lblNew></ion-input>\r\n                        </div>\r\n                        <div class=\"col-8\" *ngIf=\"JobID != null; else lblOld\">\r\n                          <ion-label #lblOld>{{Reference}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <div class=\"col-4\">\r\n                          <ion-label color=\"primary\">ชื่อช่าง</ion-label>\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                          <ion-label>{{name}}</ion-label>\r\n                        </div>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"table-scrollable\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead>\r\n                      <tr>\r\n                        <!-- <th> ลำดับที่ </th> -->\r\n                        <th> Part No. </th>\r\n                        <th> ชื่ออะไหล่ </th>\r\n                        <th style=\"text-align: right;\"> จำนวน </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of list; let i = index\">\r\n                        <!-- <td> {{i+1}}</td> -->\r\n                        <td> {{item.AccessCode}} </td>\r\n                        <td> {{item.AssetNo}} </td>\r\n                        <td style=\"text-align: right;\"> {{item.Qty}} </td>\r\n                        <!-- <td *ngIf=\"Status == 'ช่างขอเบิกอะไหล่'; else lblOld\">\r\n                          <span class=\"label label-sm label-warning\" (click)=\"Edit(item)\" #lblOld> แก้ไข </span>\r\n                        </td> -->\r\n                        <!-- <td *ngIf=\"Status == 'ช่างขอเบิกอะไหล่'; else lblOld\">\r\n                          <span class=\"label label-sm label-danger\" (click)=\"Delete(item)\" #lblOld> ลบ </span>\r\n                        </td> -->\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"col-lg-12\" style=\"text-align: right; padding: 20px;\">\r\n        <span class=\"label label-sm label-warning\" (click)=\"spare()\"> เพิ่มเครื่อง </span>\r\n      </div> -->\r\n      <!-- <div class=\"col-lg-12\" style=\"text-align: right; padding: 20px;\"\r\n        *ngIf=\"Status != 'อนุมัติ' && Status != 'รออนุมัติ' && CusID != null; else lblOld\">\r\n        <span class=\"label label-sm label-warning\" (click)=\"takespare()\" #lblOld> เพิ่มอะไหล่ </span>\r\n      </div> -->\r\n      <div class=\"col-lg-12\" *ngIf=\"JobID != null; else lbltable\">\r\n        <div class=\"portlet light \" #lbltable>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _take_spare_parts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./take-spare-parts.page */ "./src/app/page/take-spare-parts/take-spare-parts.page.ts");







const routes = [
    {
        path: '',
        component: _take_spare_parts_page__WEBPACK_IMPORTED_MODULE_6__["TakeSparePartsPage"]
    }
];
let TakeSparePartsPageModule = class TakeSparePartsPageModule {
};
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



/***/ }),

/***/ "./src/app/page/take-spare-parts/take-spare-parts.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/page/take-spare-parts/take-spare-parts.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: white;\n}\n\nion-label {\n  font-size: 0.8em !important;\n}\n\nion-input {\n  font-size: 0.8em !important;\n}\n\nion-textarea {\n  font-size: 0.8em !important;\n}\n\n.container-fluid {\n  padding: 0px;\n}\n\nion-select {\n  font-size: 0.8em !important;\n  --ion-background-color: white;\n  max-width: 100% !important;\n}\n\nion-select-option {\n  font-size: 0.8em !important;\n  --ion-background-color: white;\n}\n\nion-popover ion-backdrop {\n  opacity: 0.5 !important;\n}\n\nion-popover .popover-wrapper .popover-content {\n  background-color: white;\n  width: 100% !important;\n  left: 0px !important;\n}\n\n[class*=\" fa-\"]:not(.fa-stack),\n[class*=\" glyphicon-\"],\n[class*=\" icon-\"],\n[class^=fa-]:not(.fa-stack),\n[class^=glyphicon-],\n[class^=icon-] {\n  font-size: 1em !important;\n}\n\nlabel {\n  padding-top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS90YWtlLXNwYXJlLXBhcnRzL0M6XFxTb2x1dGlvblxcR2l0aHViXFxlU2VydmljZUFwcC9zcmNcXGFwcFxccGFnZVxcdGFrZS1zcGFyZS1wYXJ0c1xcdGFrZS1zcGFyZS1wYXJ0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvdGFrZS1zcGFyZS1wYXJ0cy90YWtlLXNwYXJlLXBhcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QUREQTtFQUNJLDJCQUFBO0FDSUo7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7QUNFSjs7QURFSTtFQUNJLHVCQUFBO0FDQ1I7O0FER0k7RUFDRSx1QkFBQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNEUjs7QURNQTs7Ozs7O0VBTUkseUJBQUE7QUNISjs7QURNQTtFQUNJLDRCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3Rha2Utc3BhcmUtcGFydHMvdGFrZS1zcGFyZS1wYXJ0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOGVtIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBmb250LXNpemU6IDAuOGVtIWltcG9ydGFudDtcclxufVxyXG5pb24tdGV4dGFyZWF7XHJcbiAgICBmb250LXNpemU6IDAuOGVtIWltcG9ydGFudDtcclxufVxyXG4vLyBpb24tYnV0dG9ue1xyXG4vLyAgICAgZm9udC1zaXplOiAxZW0haW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gICAgZm9udC1zaXplOiAwLjhlbSFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VsZWN0LW9wdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMC44ZW0haW1wb3J0YW50O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVye1xyXG4gICAgaW9uLWJhY2tkcm9we1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50OyAgXHJcbiAgICB9XHJcblxyXG4gICAgLnBvcG92ZXItd3JhcHBlcntcclxuICAgIC5wb3BvdmVyLWNvbnRlbnR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5bY2xhc3MqPVwiIGZhLVwiXTpub3QoLmZhLXN0YWNrKSxcclxuW2NsYXNzKj1cIiBnbHlwaGljb24tXCJdLFxyXG5bY2xhc3MqPVwiIGljb24tXCJdLFxyXG5bY2xhc3NePWZhLV06bm90KC5mYS1zdGFjayksXHJcbltjbGFzc149Z2x5cGhpY29uLV0sXHJcbltjbGFzc149aWNvbi1dIHtcclxuICAgIGZvbnQtc2l6ZTogMS4wZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1wb3BvdmVyIGlvbi1iYWNrZHJvcCB7XG4gIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xufVxuaW9uLXBvcG92ZXIgLnBvcG92ZXItd3JhcHBlciAucG9wb3Zlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5bY2xhc3MqPVwiIGZhLVwiXTpub3QoLmZhLXN0YWNrKSxcbltjbGFzcyo9XCIgZ2x5cGhpY29uLVwiXSxcbltjbGFzcyo9XCIgaWNvbi1cIl0sXG5bY2xhc3NePWZhLV06bm90KC5mYS1zdGFjayksXG5bY2xhc3NePWdseXBoaWNvbi1dLFxuW2NsYXNzXj1pY29uLV0ge1xuICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xufVxuXG5sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _take_spare_parts_take_new_take_new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../take-spare-parts/take-new/take-new.page */ "./src/app/page/take-spare-parts/take-new/take-new.page.ts");








let TakeSparePartsPage = class TakeSparePartsPage {
    constructor(storageService, modalController, postDataService, navCtrl, alertController, route) {
        this.storageService = storageService;
        this.modalController = modalController;
        this.postDataService = postDataService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.myDate = new Date().toISOString();
        this.isShowSpare = false;
        this.isShow = false;
        let params = {
            EmpID: this.empID,
            Type: "Customer"
        };
        this.postDataService.PostCus(params).then(Cus => {
            this.Cus = Cus;
        });
        this.route.queryParams.subscribe(params => {
            this.myId = JSON.parse(params["data"]);
            this.type = this.myId.type;
            console.log('this.myId', this.myId);
            if (this.type == "new") {
                this.type = this.myId.type;
                console.log(this.type);
            }
            else {
                this.item = this.myId.item;
                this.CustomerCode = this.item.CustomerCode;
                this.CustomerName = this.item.CustomerName;
                this.AddressSite = this.item.AddressSite;
                this.ServiceReportNo = this.item.ServiceReportNo;
                this.RequisionType = this.item.RequisionType;
                this.Status = this.item.Status;
                this.TelCompany = this.item.TelCompany;
                this.EngineerTel = this.item.EngineerTel;
                this.Reference = this.item.Reference;
                this.JobID = this.myId.JobID;
                this.CusID = this.myId.CusID;
                console.log(this.JobID, this.type, this.CusID);
                console.log('this.item', this.item);
            }
        });
    }
    ngOnInit() {
        if (this.type == "edit") {
            let params = {
                JobID: this.JobID,
                Type: "ListDetail",
            };
            this.postDataService.PostCus(params).then(list => {
                this.list = list;
                console.log(list);
                if (this.list != null) {
                    this.isShow = true;
                    this.JobID = this.JobID;
                }
            });
        }
        else if (this.type == "new") {
            let params = {
                JobID: this.JobID,
                Type: "ListDetail",
            };
            this.postDataService.PostCus(params).then(list => {
                this.list = list;
                console.log(list);
                if (this.list != null) {
                    this.list = list;
                    this.isShow = true;
                    this.JobID = this.JobID;
                }
            });
        }
        this.loadItems();
    }
    spare() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _take_spare_parts_take_new_take_new_page__WEBPACK_IMPORTED_MODULE_6__["TakeNewPage"],
                cssClass: 'my-custom-modal-css',
                componentProps: {
                    EmpID: this.empID,
                    CusID: this.CusID,
                    JobID: this.JobID,
                    Reference: this.Reference,
                    EngineerTel: this.EngineerTel
                }
            });
            modal.onDidDismiss().then(data => {
                this.JobID = data.data;
                if (this.JobID != null) {
                    if (this.type == "new") {
                        let params = {
                            JobID: this.JobID,
                            Type: "ListNew",
                        };
                        this.postDataService.PostCus(params).then(list => {
                            this.cus = list;
                            console.log(list);
                            if (this.cus != null) {
                                this.isShow = true;
                                for (let i = 0; i < this.cus.length; i++) {
                                    this.ServiceReportNo = this.cus[i].ServiceReportNo;
                                    this.CustomerName = this.cus[i].CustomerName;
                                    this.EngineerTel = this.cus[i].EngineerTel;
                                    this.Reference = this.cus[i].Reference;
                                    this.JobID = this.cus[i].JobID;
                                }
                            }
                        });
                    }
                    this.ngOnInit();
                }
            });
            return yield modal.present();
        });
    }
    loadItems() {
        this.route.queryParams.subscribe(params => {
            this.items = JSON.parse(params["data"]);
            this.empID = this.items.empID;
            this.name = this.items.name;
            let param = {
                EmpID: this.empID,
                Type: "Customer"
            };
            this.postDataService.PostCus(param).then(Cus => {
                // this.Cus = Cus;
            });
        });
        // this.storageService.getUser().then(items => {
        //   for (let i = 0; i < items.length; i++) {
        //     this.empID = items[i].empID;
        //     this.name = items[i].name;
        //   }
        //   let params = {
        //     EmpID: this.empID,
        //     Type: "Customer"
        //   }
        //   this.postDataService.PostCus(params).then(Cus => {
        //     // this.Cus = Cus;
        //   });
        // });
    }
    onChange(value, type) {
        if (type == 'SearchCustomerName') {
            let params = {
                CusID: this.CustomerNameSearch,
                Type: "SearchCustomerName"
            };
            console.log('SearchCustomerName params', params);
            this.postDataService.PostCus(params).then(Cus => {
                this.Cus = Cus;
                for (let i = 0; i < this.Cus.length; i++) {
                    this.CustomerID = this.Cus[i].CustomerID;
                    this.CustomerCode = this.Cus[i].CustomerCode;
                    this.CustomerName = this.Cus[i].CustomerName;
                    this.AddressSite = this.Cus[i].Address;
                    this.ServiceReportNo = this.Cus[i].ServiceReportNo;
                    this.Status = this.Cus[i].Status;
                    this.TelCompany = this.Cus[i].TelCompany;
                    this.EngineerTel = this.Cus[i].EngineerTel;
                    this.Reference = this.Cus[i].Reference;
                    this.JobID = this.Cus[i].JobID;
                }
                console.log(this.Cus);
            });
        }
        if (type == 'cus') {
            this.CusID = value.detail.value;
            console.log('cusid', this.CusID);
            let params = {
                CusID: this.CusID,
                Type: "Detail"
            };
            this.postDataService.PostCus(params).then(Cus => {
                this.value = Cus;
                console.log(Cus);
                this.CustomerID = this.value.CustomerID;
                this.CustomerCode = this.value.CustomerCode;
                this.TelCompany = this.value.EngineerTel;
                this.AddressSite = this.value.Address;
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
                console.log(this.CusID);
            });
        }
        if (type == 'code') {
            let params = {
                CusID: this.CustomerCode,
                Type: "Cuscode"
            };
            this.postDataService.PostCus(params).then(Cus => {
                this.code = Cus;
                console.log(this.code);
                for (let i = 0; i < this.code.length; i++) {
                    this.CustomerID = this.code[i].CustomerID;
                    this.CustomerCode = this.code[i].CustomerCode;
                    this.CustomerName = this.code[i].CustomerName;
                    this.AddressSite = this.code[i].Address;
                    this.ServiceReportNo = this.code[i].ServiceReportNo;
                    this.Status = this.code[i].Status;
                    this.TelCompany = this.code[i].TelCompany;
                    this.EngineerTel = this.code[i].EngineerTel;
                    this.Reference = this.code[i].Reference;
                    this.JobID = this.code[i].JobID;
                }
                console.log(this.CusID);
            });
        }
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
                                JobDeviceID: item.JobDeviceID,
                                EmpID: this.empID,
                                Type: "Delete",
                            };
                            this.postDataService.PostCus(params).then(list => {
                                console.log(list);
                                this.isShow = true;
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
    Edit(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(item);
            const modal = yield this.modalController.create({
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
            });
            modal.onDidDismiss().then(data => {
                console.log(this.JobID);
                if (this.JobID != null) {
                    this.ngOnInit();
                }
            });
            return yield modal.present();
        });
    }
    Save() {
        let params = {
            EmpID: this.empID,
            JobID: this.JobID,
            Reference: this.Reference,
            EngineerTel: this.EngineerTel,
            Type: "UpdateJob",
        };
        this.postDataService.PostCus(params).then(list => {
            this.cus = list;
            console.log(list);
            if (this.cus != null) {
                for (let i = 0; i < this.cus.length; i++) {
                    this.CustomerCode = this.cus[i].CustomerCode;
                    this.CustomerName = this.cus[i].CustomerName;
                    this.AddressSite = this.cus[i].AddressSite;
                    this.ServiceReportNo = this.cus[i].ServiceReportNo;
                    this.Status = this.cus[i].Status;
                    this.TelCompany = this.cus[i].TelCompany;
                    this.EngineerTel = this.cus[i].EngineerTel;
                    this.Reference = this.cus[i].Reference;
                    this.JobID = this.cus[i].JobID;
                    this.type = this.cus[i].type;
                    console.log(this.CustomerName);
                }
                this.alertSuccess();
            }
        });
    }
    Requested() {
        let params = {
            JobID: this.JobID,
            Type: "Approve",
        };
        this.postDataService.PostCus(params).then(list => {
            this.list = list;
            console.log(list);
            this.alertSuccess();
            this.navCtrl.navigateForward(['sparelist']);
        });
    }
    //#region alert Success
    alertSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'แจ้งเตือน',
                message: 'บันทึกสำเร็จ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    //#endregion
    //#region  
    SearchCustomer(value) {
    }
};
TakeSparePartsPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
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



/***/ })

}]);
//# sourceMappingURL=page-take-spare-parts-take-spare-parts-module-es2015.js.map