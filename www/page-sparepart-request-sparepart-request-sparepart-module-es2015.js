(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-sparepart-request-sparepart-request-sparepart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>เบิกอะไหล่</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-md-12 col-12\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-wrench\"></i> <label>เบิกอะไหล่</label>\r\n            </div>\r\n            <div class=\"tools\">\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\">\r\n            <div class=\"col-md-12 col-12\" style=\"margin-top: 20px;\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-md-5 col-5\">\r\n                  <label>Part No.</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"รหัสอะไหล่\">\r\n                </div>\r\n                <div class=\"col-md-5 col-5\">\r\n                  <label>Part Name</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"ชื่ออะไหล่\">\r\n                </div>\r\n                <div class=\"col-md-2 col-2\">\r\n                  <label>&nbsp;</label>\r\n                  <a class=\"btn btn-block btn-primary text-white\">\r\n                    <i class=\"fa fa-search\"></i> ค้นหา\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/sparepart/request-sparepart/request-sparepart.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/page/sparepart/request-sparepart/request-sparepart.module.ts ***!
  \******************************************************************************/
/*! exports provided: RequestSparepartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSparepartPageModule", function() { return RequestSparepartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-sparepart.page */ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.ts");







const routes = [
    {
        path: '',
        component: _request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__["RequestSparepartPage"]
    }
];
let RequestSparepartPageModule = class RequestSparepartPageModule {
};
RequestSparepartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_request_sparepart_page__WEBPACK_IMPORTED_MODULE_6__["RequestSparepartPage"]]
    })
], RequestSparepartPageModule);



/***/ }),

/***/ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/page/sparepart/request-sparepart/request-sparepart.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*=\" fa-\"]:not(.fa-stack),\n[class*=\" glyphicon-\"],\n[class*=\" icon-\"],\n[class^=fa-]:not(.fa-stack),\n[class^=glyphicon-],\n[class^=icon-] {\n  font-size: 1em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zcGFyZXBhcnQvcmVxdWVzdC1zcGFyZXBhcnQvRTpcXEdpdEh1YlxcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXHNwYXJlcGFydFxccmVxdWVzdC1zcGFyZXBhcnRcXHJlcXVlc3Qtc3BhcmVwYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9zcGFyZXBhcnQvcmVxdWVzdC1zcGFyZXBhcnQvcmVxdWVzdC1zcGFyZXBhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9zcGFyZXBhcnQvcmVxdWVzdC1zcGFyZXBhcnQvcmVxdWVzdC1zcGFyZXBhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj1cIiBmYS1cIl06bm90KC5mYS1zdGFjayksXHJcbltjbGFzcyo9XCIgZ2x5cGhpY29uLVwiXSxcclxuW2NsYXNzKj1cIiBpY29uLVwiXSxcclxuW2NsYXNzXj1mYS1dOm5vdCguZmEtc3RhY2spLFxyXG5bY2xhc3NePWdseXBoaWNvbi1dLFxyXG5bY2xhc3NePWljb24tXSB7XHJcbiAgICBmb250LXNpemU6IDEuMGVtICFpbXBvcnRhbnQ7XHJcbn0iLCJbY2xhc3MqPVwiIGZhLVwiXTpub3QoLmZhLXN0YWNrKSxcbltjbGFzcyo9XCIgZ2x5cGhpY29uLVwiXSxcbltjbGFzcyo9XCIgaWNvbi1cIl0sXG5bY2xhc3NePWZhLV06bm90KC5mYS1zdGFjayksXG5bY2xhc3NePWdseXBoaWNvbi1dLFxuW2NsYXNzXj1pY29uLV0ge1xuICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/page/sparepart/request-sparepart/request-sparepart.page.ts ***!
  \****************************************************************************/
/*! exports provided: RequestSparepartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSparepartPage", function() { return RequestSparepartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RequestSparepartPage = class RequestSparepartPage {
    constructor() { }
    ngOnInit() {
    }
};
RequestSparepartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-sparepart',
        template: __webpack_require__(/*! raw-loader!./request-sparepart.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/sparepart/request-sparepart/request-sparepart.page.html"),
        styles: [__webpack_require__(/*! ./request-sparepart.page.scss */ "./src/app/page/sparepart/request-sparepart/request-sparepart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RequestSparepartPage);



/***/ })

}]);
//# sourceMappingURL=page-sparepart-request-sparepart-request-sparepart-module-es2015.js.map