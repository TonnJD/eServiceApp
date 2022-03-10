(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["overview-overview-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/overview/overview.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/overview/overview.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n            <ion-title>ภาพรวมการทำงาน</ion-title>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"GetBarcode()\">\r\n                <ion-icon slot=\"icon-only\" name=\"barcode\"></ion-icon>\r\n            </ion-button>\r\n            <!-- <ion-button (click)=\"Openpop($event)\">\r\n                <i class=\"fa fa-bell\"></i>&nbsp;{{job}}\r\n            </ion-button> -->\r\n            <!-- <ion-button (click)=\"loadpage()\">\r\n                <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>\r\n            </ion-button> -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"page-content-inner\">\r\n            <div class=\"row\" style=\"padding:5px;\">\r\n                <div class=\"col-md-8\" style=\"padding-left:2px;padding-right: 2px;margin-top: 3px;\">\r\n                    <div class=\"portlet box blue\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-dashboard\" style=\"font-size:1em;\"></i>สรุปภาพรวมการทำงาน\r\n                            </div>                            \r\n                        </div>\r\n                        <div class=\"portlet-body\" style=\"padding: 2px;\">\r\n                            <div class=\"btn-group btn-group btn-group-justified btn-lg\"\r\n                                style=\"padding: 0px; width: 100%;\">\r\n                                <button class=\"btn blue text-center\" style=\"padding: 5px;\" (click)=\"changeMonthBack()\">\r\n                                    ย้อนกลับ\r\n                                </button>\r\n                                <button class=\"btn default\" style=\"padding: 5px; width: 65%;\" (click)=\"ChangeMonth()\">\r\n                                    {{textShow}} </button>\r\n                                <button class=\"btn blue text-center\" style=\"padding: 5px;\" (click)=\"changeMonthNext()\">\r\n                                    ถัดไป\r\n                                </button>\r\n                            </div>\r\n                            <!-- <ion-list>\r\n                            <ion-item>\r\n                              <ion-label>Name</ion-label>\r\n                              <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\r\n                            </ion-item>\r\n                            </ion-list> -->\r\n                            <div>\r\n                                <div style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                    <label class=\"col-6\">งานทั้งหมด</label>\r\n                                    <label class=\"col-6 text-right\">{{workall}}</label>\r\n                                </div>\r\n                                <div style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                    <label class=\"col-6\">เสร็จไปแล้ว</label>\r\n                                    <label class=\"col-6 text-right\">{{workfinish}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"portlet box blue\" style=\"margin-top: 5px;\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-spinner\"></i>งานที่ยัง UPLOAD ไม่เสร็จ\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"portlet-body\" style=\"padding: 2px;\">\r\n                            <label class=\"col-6\">ทั้งหมด</label>\r\n                            <label class=\"col-6 text-right\">{{jobupload}}</label>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"portlet box blue\" style=\"margin-top: 5px;\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-wrench\"></i>งานที่ยังไม่เสร็จ\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\" style=\"padding: 2px;\">\r\n                            <div (click)=\"next('worknew')\" style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                <label class=\"col-6\">งาน CM ใหม่ / ติดตามงาน</label>\r\n                                <label class=\"col-6 text-right\">{{worknew}}</label>\r\n                            </div>\r\n                            <div (click)=\"next('pm')\" style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                <label class=\"col-6\">PM</label>\r\n                                <label class=\"col-6 text-right\">{{pm}}</label>\r\n                            </div>\r\n                            <div (click)=\"next('cm')\" style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                <label class=\"col-6\">CM</label>\r\n                                <label class=\"col-6 text-right\">{{cm}}</label>\r\n                            </div>\r\n                            <div (click)=\"next('install')\" style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                <label class=\"col-6\">INSTALL</label>\r\n                                <label class=\"col-6 text-right\">{{install}}</label>\r\n                            </div>\r\n                            <div (click)=\"next('uninstall')\" style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                <label class=\"col-6\">UNINSTALL</label>\r\n                                <label class=\"col-6 text-right\">{{uninstall}}</label>\r\n                            </div>\r\n                            <!-- <div (click)=\"next('waiting')\" style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                <label class=\"col-6\">รายการรอรับอะไหล่</label>\r\n                                <label class=\"col-6 text-right\">{{wait}}</label>\r\n                            </div>\r\n                            <div (click)=\"next('ice')\" style=\"border-bottom: 1px solid #e1e5ec;\">\r\n                                <label class=\"col-6\">ชั่งน้ำแข็ง</label>\r\n                                <label class=\"col-6 text-right\">{{ice}}</label>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\" style=\"padding-left:2px;padding-right: 2px;margin-top: 3px;\">\r\n                    <div class=\"portlet box blue\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-user\"></i>ข้อมูลพนักงาน\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"portlet-body\" style=\"padding: 3px;\">\r\n                            <label class=\"col-4\">ชื่อ</label>\r\n                            <label class=\"col-8\">{{ name }}</label>\r\n                            <label class=\"col-4\">ชื่อผู้ใช้</label>\r\n                            <label class=\"col-8\">{{ username }}</label>\r\n                            <label class=\"col-4\">หน้าที่</label>\r\n                            <label class=\"col-8\">{{ position }}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\" style=\"margin-top: 5px;padding: 0;\">\r\n                        <div class=\"tools\" style=\"padding: 0px;margin-top: 2px;\">\r\n                            <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"loadpage()\" style=\"width: 100%;height: 40px;\">\r\n                                <ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon>&nbsp;&nbsp;โหลดข้อมูลล่าสุด                               \r\n                            </ion-button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding:5px;\">\r\n                <div class=\"col-md-12\" style=\"padding-left:2px;padding-right: 2px;margin-top: 3px;\">\r\n                    <div class=\"portlet box blue\" style=\"margin-top: 5px;\">\r\n                        <div class=\"portlet-title\">\r\n                            <div class=\"caption\">\r\n                                <i class=\"fa fa-wrench\"></i>รอบเปลี่ยนไส้กรอง\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"portlet-body\" style=\"padding: 2px;\">\r\n                            <table class=\"table table-bordered\">\r\n                                <thead style=\"background-color: rgb(255, 190, 190);\">\r\n                                  <tr>\r\n                                    <th> ร้านค้า/สาขา </th>\r\n                                    <th> รายการ </th>\r\n                                    <!-- <th> ชื่อ/รุ่นเครื่อง </th> -->\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr *ngFor=\"let item of filterList\">\r\n                                    <td> {{item.CusName}} <br/> <span style=\"font-size: 11px; font-weight: bold;\">เครื่อง: {{item.InsName}}</span> </td>\r\n                                    <td>\r\n                                        <div [innerHtml]=\"item.SpareName\"></div>\r\n                                    </td>\r\n                                    <!-- <td> {{item.InsName}} </td> -->\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/overview/overview.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/overview/overview.module.ts ***!
  \**************************************************/
/*! exports provided: OverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageModule", function() { return OverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview.page */ "./src/app/page/overview/overview.page.ts");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/index.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__);








var routes = [
    {
        path: '',
        component: _overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]
    }
];
var OverviewPageModule = /** @class */ (function () {
    function OverviewPageModule() {
    }
    OverviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_overview_page__WEBPACK_IMPORTED_MODULE_6__["OverviewPage"]]
        })
    ], OverviewPageModule);
    return OverviewPageModule;
}());



/***/ }),

/***/ "./src/app/page/overview/overview.page.scss":
/*!**************************************************!*\
  !*** ./src/app/page/overview/overview.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#EEEEEE;\n}\n\nlabel {\n  font-size: 0.9em;\n  padding: 5px;\n}\n\n.offPointer {\n  pointer-events: all !important;\n}\n\nion-item {\n  --ion-background-color:#fff;\n}\n\n.portlet.box.blue > .portlet-title > .caption, .portlet.box.blue > .portlet-title > .caption > {\n  font-size: 1.3em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9vdmVydmlldy9DOlxcU29sdXRpb25cXEdpdGh1YlxcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXG92ZXJ2aWV3XFxvdmVydmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvb3ZlcnZpZXcvb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksOEJBQUE7QUNHSjs7QURERTtFQUNFLDJCQUFBO0FDSUo7O0FEREM7RUFFRywyQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9vdmVydmlldy9vdmVydmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0VFRUVFRTtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9mZlBvaW50ZXJ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gfVxyXG5cclxuIC5wb3J0bGV0LmJveC5ibHVlPi5wb3J0bGV0LXRpdGxlPi5jYXB0aW9uLCAucG9ydGxldC5ib3guYmx1ZT4ucG9ydGxldC10aXRsZT4uY2FwdGlvbj5cclxuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW0gIWltcG9ydGFudDtcclxuIH1cclxuLy8gICAgIC5iYWNrZ3JvdW5ke1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDI4MnB4O1xyXG4vLyAgICAgfSAgXHJcbi8vICAgICAuYmFja2dyb3VuZC1jb2w0e1xyXG4vLyAgICAgICAgIHBhZGRpbmc6ICAwcHg7XHJcbi8vICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbi8vICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbi8vICAgICB9ICAgIFxyXG5cclxuLy8gLmhlYWQge1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIG1hcmdpbjogMHB4O1xyXG4vLyB9XHJcbi8vIC50ZXh0LWVtcGxveWVlIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gfVxyXG4vLyAucG9ydGxldC1ib2R5e1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5idG4ge1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNENkQ3RDc7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAycHg7XHJcbi8vICAgICB3aWR0aDogNjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmhlYWQtd2hpdGUge1xyXG4vLyAgICAgY29sb3I6ICNGRkZGRkY7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgbWFyZ2luOiAwcHg7XHJcbi8vIH1cclxuLy8gLnRhYi1vdmVydmlld3tcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7IFxyXG4vLyAgICAgcGFkZGluZzogNXB4OyBcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAudGFiLW1vbnRoe1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkRCRDsgXHJcbi8vICAgICBwYWRkaW5nOiA1cHg7IFxyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC50YWItZW1wbG95ZWV7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRCREJEOyBcclxuLy8gICAgIHBhZGRpbmc6IDVweDsgXHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vIH1cclxuLy8gLmJ0bi11cGxvYWR7XHJcbi8vICAgICBwYWRkaW5nOiAzcHg7XHJcbi8vICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDdENztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRUVFRUVFO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm9mZlBvaW50ZXIge1xuICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xufVxuXG4ucG9ydGxldC5ib3guYmx1ZSA+IC5wb3J0bGV0LXRpdGxlID4gLmNhcHRpb24sIC5wb3J0bGV0LmJveC5ibHVlID4gLnBvcnRsZXQtdGl0bGUgPiAuY2FwdGlvbiA+IHtcbiAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/overview/overview.page.ts":
/*!************************************************!*\
  !*** ./src/app/page/overview/overview.page.ts ***!
  \************************************************/
/*! exports provided: OverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPage", function() { return OverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _overview_modalpop_modalpop_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../overview/modalpop/modalpop.page */ "./src/app/page/overview/modalpop/modalpop.page.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "./node_modules/@ionic-native/browser-tab/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");

















var OverviewPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function OverviewPage(DataService, http, postDataService, loadingController, route, camera, popoverController, platform, sqlite, events, localNotifications, storageService, appVersion, alertController, navCtrl, browserTab, barcodeScanner, router) {
        var _this = this;
        this.DataService = DataService;
        this.http = http;
        this.postDataService = postDataService;
        this.loadingController = loadingController;
        this.route = route;
        this.camera = camera;
        this.popoverController = popoverController;
        this.platform = platform;
        this.sqlite = sqlite;
        this.events = events;
        this.localNotifications = localNotifications;
        this.storageService = storageService;
        this.appVersion = appVersion;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.browserTab = browserTab;
        this.barcodeScanner = barcodeScanner;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.items = JSON.parse(params["data"]);
            console.log('this.items', _this.items);
            _this.empID = _this.items.empID;
            _this.name = _this.items.name;
            _this.position = _this.items.position;
            _this.username = _this.items.username;
            console.log('this.empID', _this.empID);
            _this.postDataService.RoundFilterList(_this.empID).then(function (res) {
                _this.filterList = res;
                console.log('this.filterList', _this.filterList);
            });
            _this.user.empID = _this.empID;
            _this.user.month = _this.intMonth;
            _this.user.year = _this.intYear;
            console.log(_this.user);
            _this.postDataService.postjobOverview(_this.user).then(function (work) {
                console.log('worknow', work);
                _this.jobOverview = work;
                for (var i = 0; i < _this.jobOverview.length; i++) {
                    _this.workall = _this.jobOverview[i].WorkAll;
                    _this.workfinish = _this.jobOverview[i].WorkFinish;
                    _this.cm = _this.jobOverview[i].cm;
                    _this.pm = _this.jobOverview[i].pm;
                    _this.install = _this.jobOverview[i].install;
                    _this.uninstall = _this.jobOverview[i].uninstall;
                    _this.job = _this.jobOverview[i].job;
                    _this.wait = _this.jobOverview[i].wait;
                    _this.ice = _this.jobOverview[i].ice;
                    _this.jobupload = _this.jobOverview[i].jobupload;
                    _this.worknew = _this.jobOverview[i].worknew;
                }
            });
        });
        setTimeout(function () {
            //this.ngOnInit();
            _this.checkversion();
        }, 500);
        this.user = [];
        this.test = [];
        this.ChangeMonth();
        this.Today = new Date();
        //this.onReload();
    }
    OverviewPage.prototype.loadpage = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.items = JSON.parse(params["data"]);
            console.log('this.items', _this.items);
            _this.empID = _this.items.empID;
            _this.name = _this.items.name;
            _this.position = _this.items.position;
            _this.username = _this.items.username;
            console.log('this.empID', _this.empID);
            _this.postDataService.RoundFilterList(_this.empID).then(function (res) {
                _this.filterList = res;
                console.log('this.filterList', _this.filterList);
            });
            _this.user.empID = _this.empID;
            _this.user.month = _this.intMonth;
            _this.user.year = _this.intYear;
            console.log(_this.user);
            _this.postDataService.postjobOverview(_this.user).then(function (work) {
                console.log('worknow', work);
                _this.jobOverview = work;
                for (var i = 0; i < _this.jobOverview.length; i++) {
                    _this.workall = _this.jobOverview[i].WorkAll;
                    _this.workfinish = _this.jobOverview[i].WorkFinish;
                    _this.cm = _this.jobOverview[i].cm;
                    _this.pm = _this.jobOverview[i].pm;
                    _this.install = _this.jobOverview[i].install;
                    _this.uninstall = _this.jobOverview[i].uninstall;
                    _this.job = _this.jobOverview[i].job;
                    _this.wait = _this.jobOverview[i].wait;
                    _this.ice = _this.jobOverview[i].ice;
                    _this.jobupload = _this.jobOverview[i].jobupload;
                    _this.worknew = _this.jobOverview[i].worknew;
                }
            });
        });
        this.load();
        // setTimeout(() => {
        //   this.load();
        //   //this.ngOnInit();
        //   //this.noti();
        // }, 500);
    };
    OverviewPage.prototype.onReload = function () {
        var _this = this;
        setTimeout(function () {
            _this.ngOnInit();
            _this.onReload();
        }, 300000);
    };
    OverviewPage.prototype.noti = function () {
        //   this.localNotifications.schedule({
        //     title: 'The big survey',
        //   text: 'Are you a fan of RB Leipzig?',
        //   attachments: ['file://img/rb-leipzig.jpg']
        // });
    };
    OverviewPage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'กำลังโหลดข้อมูล...',
                            duration: 500,
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OverviewPage.prototype.Openpop = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _overview_modalpop_modalpop_page__WEBPACK_IMPORTED_MODULE_10__["ModalpopPage"],
                            event: ev,
                            translucent: true,
                            componentProps: {
                                pm: this.pm,
                                cm: this.cm,
                                install: this.install,
                                uninstall: this.uninstall,
                                wait: this.wait,
                                ice: this.ice
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region Month
    OverviewPage.prototype.ChangeMonth = function () {
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
            this.all = '8';
            this.finish = '8';
            this.intMonth = 8;
            this.textShow = this.month + " " + this.intYear;
        }
        if (this.intMonth == 9) {
            this.month = 'กันยายน';
            this.all = '9';
            this.finish = '9';
            this.intMonth = 9;
            this.textShow = this.month + " " + this.intYear;
        }
        if (this.intMonth == 10) {
            this.month = 'ตุลาคม';
            this.all = '10';
            this.finish = '10';
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
        console.log(this.intMonth);
        console.log(this.intYear);
        this.user.empID = this.empID;
        this.user.month = this.intMonth;
        this.user.year = this.intYear;
        this.postDataService.postjobOverview(this.user).then(function (work) {
            console.log('postjobOverview', work);
            if (work != null) {
                _this.jobOverview = work;
                for (var i = 0; i < _this.jobOverview.length; i++) {
                    _this.workall = _this.jobOverview[i].WorkAll;
                    _this.workfinish = _this.jobOverview[i].WorkFinish;
                }
            }
        });
    };
    OverviewPage.prototype.changeMonthNext = function () {
        var _this = this;
        // const year = new Date().getFullYear();
        //#region nextmonth
        if (this.month == 'มกราคม') {
            this.month = 'กุมภาพันธ์';
            this.all = '2';
            this.finish = '2';
            this.intMonth = 2;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กุมภาพันธ์') {
            this.month = 'มีนาคม';
            this.all = '3';
            this.finish = '3';
            this.intMonth = 3;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'มีนาคม') {
            this.month = 'เมษายน';
            this.all = '4';
            this.finish = '4';
            this.intMonth = 4;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'เมษายน') {
            this.month = 'พฤษภาคม';
            this.all = '5';
            this.finish = '5';
            this.intMonth = 5;
        }
        else if (this.month == 'พฤษภาคม') {
            this.month = 'มิถุนายน';
            this.all = '6';
            this.finish = '6';
            this.intMonth = 6;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'มิถุนายน') {
            this.month = 'กรกฎาคม';
            this.all = '7';
            this.finish = '7';
            this.intMonth = 7;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กรกฎาคม') {
            this.month = 'สิงหาคม';
            this.all = '8';
            this.finish = '8';
            this.intMonth = 8;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'สิงหาคม') {
            this.month = 'กันยายน';
            this.all = '9';
            this.finish = '9';
            this.intMonth = 9;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'กันยายน') {
            this.month = 'ตุลาคม';
            this.all = '10';
            this.finish = '10';
            this.intMonth = 10;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'ตุลาคม') {
            this.month = 'พฤศจิกายน';
            this.all = '11';
            this.finish = '11';
            this.intMonth = 11;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'พฤศจิกายน') {
            this.month = 'ธันวาคม';
            this.all = '12';
            this.finish = '12';
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
        console.log(this.intMonth);
        console.log(this.intYear);
        this.user.empID = this.empID;
        this.user.month = this.intMonth;
        this.user.year = this.intYear;
        this.postDataService.postjobOverview(this.user).then(function (work) {
            console.log('worknext', work);
            _this.jobOverview = work;
            for (var i = 0; i < _this.jobOverview.length; i++) {
                _this.workall = _this.jobOverview[i].WorkAll;
                _this.workfinish = _this.jobOverview[i].WorkFinish;
            }
        });
        this.loadpage();
    };
    OverviewPage.prototype.changeMonthBack = function () {
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
            this.all = '8';
            this.finish = '8';
            this.intMonth = 8;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'ตุลาคม') {
            this.month = 'กันยายน';
            this.all = '9';
            this.finish = '9';
            this.intMonth = 9;
            this.textShow = this.month + " " + this.intYear;
        }
        else if (this.month == 'พฤศจิกายน') {
            this.month = 'ตุลาคม';
            this.all = '10';
            this.finish = '10';
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
        this.user.empID = this.empID;
        this.user.month = this.intMonth;
        this.user.year = this.intYear;
        this.postDataService.postjobOverview(this.user).then(function (work) {
            console.log('workback', work);
            _this.jobOverview = work;
            for (var i = 0; i < _this.jobOverview.length; i++) {
                _this.workall = _this.jobOverview[i].WorkAll;
                _this.workfinish = _this.jobOverview[i].WorkFinish;
            }
        });
        this.loadpage();
    };
    //#endregion
    //#region start
    OverviewPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter ');
    };
    OverviewPage.prototype.ngOnInit = function () {
        // this.storageService.getUser().then(items => {
        //   this.items = items;
        //   console.log('this.items', this.items);
        //   for (let i = 0; i < this.items.length; i++) {
        //     this.empID = this.items[i].empID;
        //     this.name = this.items[i].name
        //     this.position = this.items[i].position
        //     this.username = this.items[i].username
        //     console.log(this.empID);
        //   }
        //   this.postDataService.RoundFilterList(this.empID).then(res => {
        //     this.filterList = res;
        //     console.log('this.filterList', this.filterList);
        //   });
        //   this.user.empID = this.empID;
        //   this.user.month = this.intMonth;
        //   this.user.year = this.intYear;
        //   console.log(this.user);
        //   this.postDataService.postjobOverview(this.user).then(work => {
        //     console.log('worknow', work);
        //     this.jobOverview = work;
        //     for (let i = 0; i < this.jobOverview.length; i++) {
        //       this.workall = this.jobOverview[i].WorkAll;
        //       this.workfinish = this.jobOverview[i].WorkFinish;
        //       this.cm = this.jobOverview[i].cm;
        //       this.pm = this.jobOverview[i].pm;
        //       this.install = this.jobOverview[i].install;
        //       this.uninstall = this.jobOverview[i].uninstall;
        //       this.job = this.jobOverview[i].job;
        //       this.wait = this.jobOverview[i].wait;
        //       this.ice = this.jobOverview[i].ice;
        //       this.jobupload = this.jobOverview[i].jobupload;
        //       this.worknew = this.jobOverview[i].worknew
        //     }
        //   });
        // });
        // this.localNotifications.schedule({
        //   id: 1,
        //   text: 'งานทั้งหมด' + this.job + "งาน",
        //   data: { secret: 'key_data' },
        //   trigger: { every: { hour: 12 }, count: 1 },
        // });
    };
    //#endregion
    //#region Check Version
    OverviewPage.prototype.checkversion = function () {
        var _this = this;
        this.appVersion.getVersionNumber().then(function (s) {
            _this.VersionNumber = s;
            console.log(_this.VersionNumber);
            var param = {
                version: _this.VersionNumber,
                typedevice: "checkversion",
            };
            console.log(param);
            _this.postDataService.postdevice(param).then(function (data) {
                _this.statusversion = data;
                console.log(_this.statusversion);
                if (_this.statusversion == true) {
                }
                else {
                    _this.link = _this.statusversion;
                    _this.alertversion();
                }
            });
        });
    };
    //#endregion
    //#region 
    OverviewPage.prototype.alertversion = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'กรุณาดาวน์โหลดเวอร์ชั่นใหม่',
                            buttons: [
                                {
                                    text: 'ดาวน์โหลดเวอร์ชั่นใหม่',
                                    handler: function () {
                                        _this.openUrl();
                                    }
                                }, {
                                    text: 'ยกเลิก',
                                    handler: function () {
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
    //#endregion
    //#region 
    OverviewPage.prototype.openUrl = function () {
        var _this = this;
        console.log(this.link);
        this.browserTab.isAvailable()
            .then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl(_this.link);
                //this.browserTab.openUrl('https://test.erpsuperior.com/APK/eServiceTest.apk');
                //this.browserTab.openUrl('https://drive.google.com/file/d/1CYrs3j1akx2gtIXRx3A_DvD8kX9bSsea/view?usp=sharing');
            }
            else {
                // if custom tabs are not available you may  use InAppBrowser
            }
        });
    };
    //#endregion
    OverviewPage.prototype.GetPM = function () {
        var param = {
            planID: this.planID,
            install: this.item,
            data: this.data,
            insID: this.installId,
            sparetype: this.sparepart,
            item: this.productInstall,
            type: "PM",
        };
        console.log(param);
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(param)
            }
        };
        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
    };
    OverviewPage.prototype.scan = function (data, item) {
        var _this = this;
        console.log("data" + data);
        console.log("item" + item);
        var params = {
            installID: item.installId,
            typedevice: "checkserial"
        };
        console.log(params);
        this.postDataService.postdevice(params).then(function (statusserial) {
            console.log(statusserial);
            if (statusserial != false) {
                _this.GetPM();
            }
            else {
                var params_1 = {
                    empID: _this.empID,
                    data: data,
                    item: item,
                    type: 'PM',
                };
                console.log(params_1);
                var navigationExtras = {
                    queryParams: {
                        data: JSON.stringify(params_1)
                    }
                };
                _this.navCtrl.navigateForward(['/picserial'], navigationExtras);
            }
        });
    };
    OverviewPage.prototype.gopm = function (barcode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    typedevice: 'GetPM',
                    empID: this.empID,
                    SerialScan: barcode
                };
                console.log(params);
                this.postDataService.postdevice(params).then(function (datas) {
                    _this.datas = datas;
                    console.log(_this.datas);
                    if (_this.datas == true) {
                        _this.success();
                    }
                    else if (_this.datas == false) {
                        _this.fail();
                    }
                    else {
                        for (var i = 0; i < _this.datas.length; i++) {
                            _this.data = _this.datas[i];
                            _this.productInstall = JSON.parse(_this.datas[i].productInstall);
                        }
                        for (var i = 0; i < _this.productInstall.length; i++) {
                            _this.item = _this.productInstall[i];
                            _this.installId = _this.productInstall[i].installId;
                            _this.planID = _this.productInstall[i].planID;
                            _this.sparepart = _this.productInstall[i].sparepart;
                            console.log(_this.item);
                            _this.GetPM();
                            //this.scan(this.data, this.item)
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    OverviewPage.prototype.success = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'ปิดงานเรียบร้อยแล้ว',
                            buttons: [
                                {
                                    text: 'ตกลง',
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
    OverviewPage.prototype.GetBarcode = function () {
        var _this = this;
        // this.gopm('8859015702278');
        this.barcodeScanner.scan().then(function (barcodeData) {
            var barcode = barcodeData;
            if (barcode != null || barcode.text != '') {
                _this.gopm(barcode.text);
            }
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    OverviewPage.prototype.fail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'ไม่พบ Serial No. / Asset Plate SFS นี้',
                            buttons: [
                                {
                                    text: 'ตกลง',
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
    OverviewPage.prototype.next = function (type) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(this.items)
            }
        };
        if (type == 'worknew') {
            this.router.navigate(['/job/worknew'], navigationExtras);
            //this.popoverController.dismiss();
        }
        if (type == 'pm') {
            this.router.navigate(['/job/reportcheckpm'], navigationExtras);
            //this.popoverController.dismiss();
        }
        if (type == 'cm') {
            this.router.navigate(['/job/cm'], navigationExtras);
            //this.popoverController.dismiss();
        }
        if (type == 'install') {
            this.router.navigate(['/job/install'], navigationExtras);
            //this.popoverController.dismiss();
        }
        if (type == 'uninstall') {
            this.router.navigate(['/job/uninstall'], navigationExtras);
            //this.popoverController.dismiss();
        }
        if (type == 'waiting') {
            this.router.navigate(['/waitspare']);
            this.popoverController.dismiss();
        }
        if (type == 'ice') {
            var params = {
                type: 'icelist'
            };
            console.log(params);
            var navigationExtras_1 = {
                queryParams: {
                    data: JSON.stringify(params)
                }
            };
            this.navCtrl.navigateForward(['/iceimg'], navigationExtras_1);
            this.popoverController.dismiss();
            console.log(navigationExtras_1);
        }
    };
    OverviewPage.ctorParameters = function () { return [
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__["SQLite"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
        { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_13__["BrowserTab"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["BarcodeScanner"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    OverviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! raw-loader!./overview.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/overview/overview.page.html"),
            styles: [__webpack_require__(/*! ./overview.page.scss */ "./src/app/page/overview/overview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_3__["PostDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__["SQLite"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_11__["LocalNotifications"],
            _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_13__["BrowserTab"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["BarcodeScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OverviewPage);
    return OverviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=overview-overview-module-es5.js.map