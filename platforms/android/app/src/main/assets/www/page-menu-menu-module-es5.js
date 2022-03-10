(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/menu/menu.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/menu/menu.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <img src=\"../../../assets/img/logo.png\" width=\"20%\" />\r\n        <ion-title>eService</ion-title>\r\n      </ion-buttons>\r\n      <ion-menu-button slot=\"end\"></ion-menu-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <!-- <ion-list *ngFor=\"let p of pageservice\">\r\n      <ion-menu-toggle menu=\"first\" autoHide=\"false\">\r\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n          <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            {{ p.title }}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list> -->\r\n\r\n    <ion-list *ngFor=\"let p of pageservice\">\r\n      <ion-menu-toggle menu=\"first\" autoHide=\"false\">\r\n        <ion-item routerDirection=\"root\" routerLinkActive=\"active\" (click)=\"onOpenItem(p)\">\r\n          <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            {{ p.title }}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"content1\"></ion-router-outlet>"

/***/ }),

/***/ "./src/app/page/menu/menu.module.ts":
/*!******************************************!*\
  !*** ./src/app/page/menu/menu.module.ts ***!
  \******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/page/menu/menu.page.ts");







var routes = [
    {
        path: '',
        redirectTo: '/menu/overview',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: 'overview',
                loadChildren: '../overview/overview.module#OverviewPageModule'
            },
            {
                path: 'job',
                loadChildren: '../job/job.module#JobPageModule'
            },
            // {
            //   path: 'joball',
            //   loadChildren: '../joball/joball.module#JoballPageModule'
            // },
            {
                path: 'sparepart',
                loadChildren: '../take-spare-parts/sparelist/sparelist.module#SparelistPageModule'
            },
            {
                path: 'device',
                loadChildren: '../devices-acessory/devices-acessory.module#DevicesAcessoryPageModule'
            },
            {
                path: 'product',
                loadChildren: '../product/product.module#ProductPageModule'
            },
            {
                path: 'news',
                loadChildren: '../news/news.module#NewsPageModule'
            },
            {
                path: 'setting',
                loadChildren: '../setting/setting.module#SettingPageModule'
            }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/page/menu/menu.page.scss":
/*!******************************************!*\
  !*** ./src/app/page/menu/menu.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  --ion-text-color: var(--ion-color-primary);\n}\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion-color-primary);\n}\n.parent-active {\n  font-weight: 500;\n}\nion-list {\n  background-color: white !important;\n}\nion-content {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tZW51L0M6XFxTb2x1dGlvblxcR2l0aHViXFxlU2VydmljZUFwcC9zcmNcXGFwcFxccGFnZVxcbWVudVxcbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FDQ0o7QURDSTtFQUNJLDhDQUFBO0FDQ1I7QURHQTtFQUNJLGdCQUFBO0FDQUo7QURHQTtFQUNJLGtDQUFBO0FDQUo7QURHQTtFQUNJLGtDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG4ucGFyZW50LWFjdGl2ZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iLCIuYWN0aXZlIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmFjdGl2ZSBpb24taWNvbiB7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5wYXJlbnQtYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/menu/menu.page.ts":
/*!****************************************!*\
  !*** ./src/app/page/menu/menu.page.ts ***!
  \****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MenuPage = /** @class */ (function () {
    function MenuPage(storageService, menu, route, router) {
        var _this = this;
        this.storageService = storageService;
        this.menu = menu;
        this.route = route;
        this.router = router;
        this.pageservice = [
            {
                id: 'overview',
                title: 'ภาพรวมการทำงาน',
                url: '/menu/overview',
                icon: 'home',
            },
            {
                id: 'job',
                title: 'งานในความรับผิดชอบ',
                url: '/menu/job',
                icon: 'person'
            },
            {
                id: 'sparepart',
                title: 'เบิกอะไหล่',
                url: '/menu/sparepart',
                icon: 'hammer'
            },
            {
                id: 'device',
                title: 'เครื่องและอุปกรณ์คงเหลือ',
                url: '/menu/device',
                icon: 'briefcase'
            },
            {
                id: 'product',
                title: 'สินค้าและคู่มือ',
                url: '/menu/product',
                icon: 'bookmarks'
            },
            {
                id: 'setting',
                title: 'ตั้งค่า',
                url: '/menu/setting',
                icon: 'settings'
            }
        ];
        this.route.queryParams.subscribe(function (params) {
            _this.items = JSON.parse(params["data"]);
        });
    }
    MenuPage.prototype.onOpenItem = function (item) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(this.items)
            }
        };
        console.log('this.items menu', this.items);
        this.router.navigate([item.url], navigationExtras);
    };
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.ctorParameters = function () { return [
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/page/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-menu-menu-module-es5.js.map