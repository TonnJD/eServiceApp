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

module.exports = "ion-content {\n  --ion-background-color: white;\n  font-size: 12px;\n}\n\n.container-fluid {\n  padding: 0px;\n}\n\n.portlet {\n  padding: 0px;\n}\n\n.portlet .portlet-body {\n  padding-top: 0px;\n  margin-bottom: 20px;\n}\n\n.tab {\n  color: black;\n  text-align: center;\n  font-size: 1em;\n  background-color: #BDBDBD;\n  margin: 0px;\n}\n\n.head {\n  font-size: 1em;\n  font-weight: bold;\n  padding: 0px;\n}\n\n.sub {\n  font-size: 1em;\n  padding: 0px;\n}\n\nion-select {\n  font-size: 1em !important;\n  padding: 5px 7px 5px 0 !important;\n  max-width: 100% !important;\n}\n\nion-label {\n  font-size: 1em;\n}\n\nli {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wcm9kdWN0L0M6XFxVc2Vyc1xcTWFydFxcRG9jdW1lbnRzXFxXaW5ncGx1c1xcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXHByb2R1Y3RcXHByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5wb3J0bGV0IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAucG9ydGxldC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRCREJEO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zdWIge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNXB4IDdweCA1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxubGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wb3J0bGV0IHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnBvcnRsZXQgLnBvcnRsZXQtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YWIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNCREJEQkQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uaGVhZCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3ViIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4IDAgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

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