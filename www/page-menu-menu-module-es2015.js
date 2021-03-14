(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/menu/menu.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/menu/menu.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\r\n  <ion-header>\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\"> \r\n          <img src=\"../../../assets/img/logo.png\" width=\"20%\"/>           \r\n          <ion-title>eService</ion-title>\r\n        </ion-buttons>\r\n        <ion-menu-button slot=\"end\"></ion-menu-button>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n   <ion-content>\r\n  <ion-list *ngFor=\"let p of pageservice\">\r\n    <ion-menu-toggle menu=\"first\" autoHide=\"false\">\r\n      <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n        <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\r\n        <ion-label>\r\n          {{ p.title }}\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-menu-toggle>  \r\n  </ion-list>  \r\n</ion-content>  \r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"content1\"></ion-router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/page/menu/menu.page.ts");







const routes = [
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
let MenuPageModule = class MenuPageModule {
};
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



/***/ }),

/***/ "./src/app/page/menu/menu.page.scss":
/*!******************************************!*\
  !*** ./src/app/page/menu/menu.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  --ion-text-color: var(--ion-color-primary);\n}\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion-color-primary);\n}\n.parent-active {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tZW51L0U6XFxHaXRIdWJcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUNDSjtBRENJO0VBQ0ksOENBQUE7QUNDUjtBREdBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxufVxyXG4gXHJcbi5wYXJlbnQtYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIiwiLmFjdGl2ZSB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5hY3RpdmUgaW9uLWljb24ge1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucGFyZW50LWFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let MenuPage = class MenuPage {
    constructor(storageService, menu) {
        this.storageService = storageService;
        this.menu = menu;
        this.pageservice = [
            {
                title: 'ภาพรวมการทำงาน',
                url: '/menu/overview',
                icon: 'home'
            },
            {
                title: 'งานในความรับผิดชอบ',
                url: '/menu/job',
                icon: 'person'
            },
            // {
            //   title: 'งานทั้งหมด',
            //   url: '/menu/joball',
            //   icon: 'people'
            // },
            {
                title: 'เบิกอะไหล่',
                url: '/menu/sparepart',
                icon: 'hammer'
            },
            {
                title: 'เครื่องและอุปกรณ์คงเหลือ',
                url: '/menu/device',
                icon: 'briefcase'
            },
            {
                title: 'สินค้าและคู่มือ',
                url: '/menu/product',
                icon: 'bookmarks'
            },
            // {
            //   title: 'ข่าว',
            //   url: '/menu/news',
            //   icon: 'alert'
            // },
            {
                title: 'ตั้งค่า',
                url: '/menu/setting',
                icon: 'settings'
            }
        ];
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/page/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=page-menu-menu-module-es2015.js.map