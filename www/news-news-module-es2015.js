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

module.exports = "ion-content {\n  --ion-background-color:white;\n}\n\nion-label {\n  color: black;\n  font-size: 1em;\n}\n\nion-content {\n  font-size: 0.9em !important;\n  color: black;\n}\n\nion-content ion-label {\n  font-size: 0.9em !important;\n}\n\nion-content .bg {\n  background-color: white;\n}\n\nion-content .btn {\n  font-size: 0.9em;\n}\n\nion-content .card {\n  padding: 0px;\n  border-radius: 5px !important;\n}\n\nion-content .container-fluid {\n  background-color: #EEEEEE;\n}\n\nion-content .background {\n  background-color: white;\n  padding-top: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 10px;\n  height: 100% !important;\n}\n\nion-content .circle {\n  text-align: center;\n  font-size: 0.9em;\n  border-radius: 5px !important;\n  font-weight: bold;\n}\n\nion-content .text {\n  text-align: center;\n  font-size: 0.9em;\n}\n\nion-content .head {\n  font-size: 0.9em;\n  color: #777777;\n}\n\nion-content .subhead {\n  font-size: 0.9em;\n  color: #777777;\n}\n\nion-content .no-scroll .scroll-content {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9uZXdzL0U6XFxHaXRIdWJcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxuZXdzXFxuZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9uZXdzL25ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7QUNHSjs7QURGSTtFQUNJLDJCQUFBO0FDSVI7O0FERkk7RUFDSSx1QkFBQTtBQ0lSOztBRERJO0VBQ0ksZ0JBQUE7QUNHUjs7QURESTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQ0dSOztBRERJO0VBQ0kseUJBQUE7QUNHUjs7QURESTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0dSOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0dSOztBRERJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDR1I7O0FEREk7RUFDSSxnQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9uZXdzL25ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW0haW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW0haW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6ICA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB9ICAgIFxyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgfVxyXG4gICAgLmhlYWR7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIH1cclxuICAgIC5zdWJoZWFke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XHJcbiAgICB9XHJcbiAgICAubm8tc2Nyb2xsIC5zY3JvbGwtY29udGVudHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgLmJ0biB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5pb24tY29udGVudCAuY2FyZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cbmlvbi1jb250ZW50IC5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5jaXJjbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuaW9uLWNvbnRlbnQgLmhlYWQge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cbmlvbi1jb250ZW50IC5zdWJoZWFkIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5pb24tY29udGVudCAubm8tc2Nyb2xsIC5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

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