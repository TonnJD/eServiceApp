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

module.exports = "ion-content {\n  --ion-background-color:white;\n}\n\nion-label {\n  color: black;\n  font-size: 1em;\n}\n\nion-content {\n  font-size: 0.9em !important;\n  color: black;\n}\n\nion-content ion-label {\n  font-size: 0.9em !important;\n}\n\nion-content .bg {\n  background-color: white;\n}\n\nion-content .btn {\n  font-size: 0.9em;\n}\n\nion-content .card {\n  padding: 0px;\n  border-radius: 5px !important;\n}\n\nion-content .container-fluid {\n  background-color: #EEEEEE;\n}\n\nion-content .background {\n  background-color: white;\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 10px;\n  height: 100% !important;\n}\n\nion-content .circle {\n  text-align: center;\n  font-size: 0.9em;\n  border-radius: 5px !important;\n  font-weight: bold;\n}\n\nion-content .text {\n  text-align: center;\n  font-size: 0.9em;\n}\n\nion-content .head {\n  font-size: 0.9em;\n  color: #777777;\n}\n\nion-content .subhead {\n  font-size: 0.9em;\n  color: #777777;\n}\n\nion-content .no-scroll .scroll-content {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9uZXdzL0M6XFxTb2x1dGlvblxcR2l0aHViXFxlU2VydmljZUFwcC9zcmNcXGFwcFxccGFnZVxcbmV3c1xcbmV3cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvbmV3cy9uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FDR0o7O0FERkk7RUFDSSwyQkFBQTtBQ0lSOztBREZJO0VBQ0ksdUJBQUE7QUNJUjs7QURESTtFQUNJLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUNHUjs7QURESTtFQUNJLHlCQUFBO0FDR1I7O0FEREk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0dSOztBRERJO0VBQ0ksZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIH1cclxuICAgIC5iYWNrZ3JvdW5ke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAgNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgfSAgICBcclxuICAgIC5jaXJjbGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIH1cclxuICAgIC5oZWFke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICB9XHJcbiAgICAuc3ViaGVhZHtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xyXG4gICAgfVxyXG4gICAgLm5vLXNjcm9sbCAuc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5idG4ge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuaW9uLWNvbnRlbnQgLmNhcmQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG59XG5pb24tY29udGVudCAuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuY2lyY2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbmlvbi1jb250ZW50IC5oZWFkIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5pb24tY29udGVudCAuc3ViaGVhZCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuaW9uLWNvbnRlbnQgLm5vLXNjcm9sbCAuc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

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