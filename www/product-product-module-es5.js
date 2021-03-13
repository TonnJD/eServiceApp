(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/product/product.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/product/product.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>สินค้าและคู่มือ</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-lg-4\" style=\"padding-right:5px;background-color:white;\">\r\n        <div class=\"portlet light\">\r\n          <div class=\"portlet-body\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <ion-item>\r\n                <ion-label>กลุ่ม</ion-label>\r\n                <ion-select interface=\"popover\" [(ngModel)]=\"title\" (ionChange)=\"onChange($event)\">\r\n                  <ion-select-option *ngFor=\"let title of data\" [value]=\"title.ProductID\"\r\n                    [selected]=\"title.ProductName\">{{title.ProductName}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <li class=\"list-group-item\" *ngFor=\"let item of product\" (click)=\"detail(item)\">\r\n                <span>{{item.ItemsName}}</span><br />\r\n                <span style=\"font-size: 1em;color: grey;\">ประเภท: {{item.cat1}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-8\" style=\"padding:0;background-color:white;\">\r\n        <div class=\"portlet light\">\r\n          <div class=\"portlet-body\">\r\n            <div class=\"tab text-center\">รายละเอียดสินค้า</div>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">ชื่อสินค้า: </label>\r\n                  <label class=\"col-9 sub\">{{ItemsName}}</label>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">รหัสสินค้า: </label>\r\n                  <label class=\"col-9 sub\">{{ItemsCode}}</label>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">รายละเอียด: </label>\r\n                  <label class=\"col-9 sub\">{{Description}}</label>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">ประเภท 1: </label>\r\n                  <label class=\"col-9 sub\">{{cat1}}</label>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">ประเภท 2: </label>\r\n                  <label class=\"col-9 sub\">{{cat2}}</label>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">ประเภท 3: </label>\r\n                  <label class=\"col-9 sub\">{{cat3}}</label>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">กลุ่มสินค้า: </label>\r\n                  <label class=\"col-9 sub\">{{ProductName}}</label>\r\n                </div>\r\n\r\n                <div class=\"col-12\">\r\n                  <label class=\"col-3 head\">รหัสกลุ่มสินค้า: </label>\r\n                  <label class=\"col-9 sub\">{{ProductCode}}</label>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/product/product.module.ts":
/*!************************************************!*\
  !*** ./src/app/page/product/product.module.ts ***!
  \************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/page/product/product.page.ts");







var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/page/product/product.page.scss":
/*!************************************************!*\
  !*** ./src/app/page/product/product.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: white;\n  font-size: 12px;\n}\n\n.container-fluid {\n  padding: 0px;\n}\n\n.portlet {\n  padding: 0px;\n}\n\n.portlet .portlet-body {\n  padding-top: 0px;\n  margin-bottom: 20px;\n}\n\n.tab {\n  color: black;\n  text-align: center;\n  font-size: 1em;\n  background-color: #BDBDBD;\n  margin: 0px;\n}\n\n.head {\n  font-size: 1em;\n  font-weight: bold;\n  padding: 0px;\n}\n\n.sub {\n  font-size: 1em;\n  padding: 0px;\n}\n\nion-select {\n  font-size: 1em !important;\n  padding: 5px 7px 5px 0 !important;\n  max-width: 100% !important;\n}\n\nion-label {\n  font-size: 1em;\n}\n\nli {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wcm9kdWN0L0U6XFxBcHBfTW9iaWxlXFxlU2VydmljZUFwcC9zcmNcXGFwcFxccGFnZVxccHJvZHVjdFxccHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBvcnRsZXQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5wb3J0bGV0LWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCREJEQkQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnN1YiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggN3B4IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5saXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnBvcnRsZXQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ucG9ydGxldCAucG9ydGxldC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhYiB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkRCRDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5oZWFkIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zdWIge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDdweCA1cHggMCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/product/product.page.ts":
/*!**********************************************!*\
  !*** ./src/app/page/product/product.page.ts ***!
  \**********************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth-service.service */ "./src/app/auth-service.service.ts");



var ProductPage = /** @class */ (function () {
    //#endregion data
    //#region constructor
    function ProductPage(DataService) {
        var _this = this;
        this.DataService = DataService;
        this.DataService.getProduct().subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                _this.data[i].DetailProduct = JSON.parse(_this.data[i].DetailProduct);
                if (_this.data[i].ProductID == 'd0506370-b111-45d5-8532-69ff00d833de') {
                    _this.product = _this.data[i].DetailProduct;
                    _this.title = 'd0506370-b111-45d5-8532-69ff00d833de';
                    console.log(_this.title);
                }
            }
        });
    }
    //#endregion
    //#region onchang
    ProductPage.prototype.onChange = function (value) {
        var _this = this;
        this.items = value.detail.value;
        this.DataService.getProduct().subscribe(function (data) {
            _this.data = data;
            for (var i = 0; i < _this.data.length; i++) {
                _this.data[i].DetailProduct = JSON.parse(_this.data[i].DetailProduct);
                if (_this.data[i].ProductID == _this.items) {
                    _this.product = _this.data[i].DetailProduct;
                }
            }
        });
    };
    //#endregion
    //#region detail
    ProductPage.prototype.detail = function (item) {
        console.log(item);
        this.ItemsName = item.ItemsName;
        this.ItemsCode = item.ItemsCode;
        this.Description = item.Description;
        this.cat1 = item.cat1;
        this.cat2 = item.cat2;
        this.cat3 = item.cat3;
        this.ProductName = item.ProductName;
        this.ProductCode = item.ProductCode;
    };
    //#endregion
    //#region start
    ProductPage.prototype.ngOnInit = function () {
    };
    ProductPage.ctorParameters = function () { return [
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }
    ]; };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/page/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module-es5.js.map