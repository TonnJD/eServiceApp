(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/news/news.page.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/news/news.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>ข่าว</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"row\">\r\n        <div class=\"col-4\" >\r\n            <ion-list *ngFor=\"let item of data\" (click)=\"onChange(item)\">\r\n                <ion-list-header>\r\n                    <ion-label>{{item.title}}</ion-label>\r\n                </ion-list-header>\r\n                <ion-item color=\"transparent\">\r\n                    <ion-icon name=\"calendar\"></ion-icon>\r\n                    <ion-label>{{item.name}}</ion-label>\r\n                    <ion-label slot=\"end\" class=\"text-right\">{{item.updated_at}}</ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n        <div class=\"col-8\">\r\n            <ion-list *ngIf=\"Show\">\r\n                <ion-item>\r\n                    <ion-label>{{header}}</ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-icon name=\"calendar\"></ion-icon>\r\n                    <ion-label> ประเภท: {{type}}</ion-label>\r\n                    <ion-label slot=\"end\" class=\"text-right\">เขียนเมื่อ: {{date}}</ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <div [innerHTML]=\"content\"></div>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"container-fluid\">\r\n        <div class=\"page-content-inner\">\r\n            <div class=\"row\" style=\"padding:5px;\">\r\n                <div class=\"col-4 background\" style=\"padding-left: 5px;\">\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let item of data\" (click)=\"onChange(item)\">\r\n                            {{item.CustomerName}}<br />10 ส.ค. 2016</li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"col-8\" style=\"padding-left: 5px; padding-right: 5px;\">\r\n                    <ion-list *ngIf=\"Show\">\r\n                        <ion-item>\r\n                            <ion-label>{{header}}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label>{{type}}</ion-label>\r\n                            <ion-label slot=\"end\">เขียนเมื่อ: {{date | date: 'dd/MM/yyyy H:mm' }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label>{{content}}</ion-label>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/news/news.module.ts":
/*!******************************************!*\
  !*** ./src/app/page/news/news.module.ts ***!
  \******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/page/news/news.page.ts");







const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }
];
let NewsPageModule = class NewsPageModule {
};
NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
    })
], NewsPageModule);



/***/ }),

/***/ "./src/app/page/news/news.page.scss":
/*!******************************************!*\
  !*** ./src/app/page/news/news.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:white;\n}\n\nion-label {\n  color: black;\n  font-size: 1em;\n}\n\nion-content {\n  font-size: 0.9em !important;\n  color: black;\n}\n\nion-content ion-label {\n  font-size: 0.9em !important;\n}\n\nion-content .bg {\n  background-color: white;\n}\n\nion-content .btn {\n  font-size: 0.9em;\n}\n\nion-content .card {\n  padding: 0px;\n  border-radius: 5px !important;\n}\n\nion-content .container-fluid {\n  background-color: #EEEEEE;\n}\n\nion-content .background {\n  background-color: white;\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 10px;\n  height: 100% !important;\n}\n\nion-content .circle {\n  text-align: center;\n  font-size: 0.9em;\n  border-radius: 5px !important;\n  font-weight: bold;\n}\n\nion-content .text {\n  text-align: center;\n  font-size: 0.9em;\n}\n\nion-content .head {\n  font-size: 0.9em;\n  color: #777777;\n}\n\nion-content .subhead {\n  font-size: 0.9em;\n  color: #777777;\n}\n\nion-content .no-scroll .scroll-content {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9uZXdzL0M6XFxVc2Vyc1xcTWFydFxcRG9jdW1lbnRzXFxXaW5ncGx1c1xcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXG5ld3NcXG5ld3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL25ld3MvbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREZJO0VBQ0ksMkJBQUE7QUNJUjs7QURGSTtFQUNJLHVCQUFBO0FDSVI7O0FEREk7RUFDSSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FDR1I7O0FEREk7RUFDSSx5QkFBQTtBQ0dSOztBRERJO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDR1I7O0FEREk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlL25ld3MvbmV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAwLjllbSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmd7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICB9XHJcbiAgICAuYmFja2dyb3VuZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogIDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxuICAgIH0gICAgXHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcbiAgICAuaGVhZHtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgfVxyXG4gICAgLnN1YmhlYWR7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIH1cclxuICAgIC5uby1zY3JvbGwgLnNjcm9sbC1jb250ZW50e1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCAuYnRuIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbmlvbi1jb250ZW50IC5jYXJkIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuaW9uLWNvbnRlbnQgLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNpcmNsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5pb24tY29udGVudCAuaGVhZCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuaW9uLWNvbnRlbnQgLnN1YmhlYWQge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cbmlvbi1jb250ZW50IC5uby1zY3JvbGwgLnNjcm9sbC1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/news/news.page.ts":
/*!****************************************!*\
  !*** ./src/app/page/news/news.page.ts ***!
  \****************************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth-service.service */ "./src/app/auth-service.service.ts");



let NewsPage = class NewsPage {
    //#endregion
    //#region constuctor
    constructor(DataService) {
        this.DataService = DataService;
        this.Show = false;
        this.DataService.getnew().subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }
    //#endregion
    //#region onchang
    onChange(item) {
        this.Show = true;
        this.header = item.title;
        this.type = item.name;
        this.content = item.content;
        this.date = item.updated_at;
    }
    //#endregion
    //#region start
    ngOnInit() {
    }
};
NewsPage.ctorParameters = () => [
    { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] }
];
NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: __webpack_require__(/*! raw-loader!./news.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/news/news.page.html"),
        styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/page/news/news.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"]])
], NewsPage);



/***/ })

}]);
//# sourceMappingURL=news-news-module-es2015.js.map