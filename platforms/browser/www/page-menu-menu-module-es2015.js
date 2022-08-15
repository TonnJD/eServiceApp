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

module.exports = ".active {\n  --ion-text-color: var(--ion-color-primary);\n}\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion-color-primary);\n}\n.parent-active {\n  font-weight: 500;\n}\nion-list {\n  background-color: white !important;\n}\nion-content {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tZW51L0M6XFxVc2Vyc1xcTWFydFxcRG9jdW1lbnRzXFxXaW5ncGx1c1xcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQ0NKO0FEQ0k7RUFDSSw4Q0FBQTtBQ0NSO0FER0E7RUFDSSxnQkFBQTtBQ0FKO0FER0E7RUFDSSxrQ0FBQTtBQ0FKO0FER0E7RUFDSSxrQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG59XHJcbiBcclxuLnBhcmVudC1hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59IiwiLmFjdGl2ZSB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5hY3RpdmUgaW9uLWljb24ge1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucGFyZW50LWFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MenuPage = class MenuPage {
    constructor(storageService, menu, route, router) {
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
        this.route.queryParams.subscribe(params => {
            this.items = JSON.parse(params["data"]);
        });
    }
    onOpenItem(item) {
        const navigationExtras = {
            queryParams: {
                data: JSON.stringify(this.items)
            }
        };
        console.log('this.items menu', this.items);
        this.router.navigate([item.url], navigationExtras);
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
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



/***/ })

}]);
//# sourceMappingURL=page-menu-menu-module-es2015.js.map