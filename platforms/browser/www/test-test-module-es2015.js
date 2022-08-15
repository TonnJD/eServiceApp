(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min.js\"></script>\r\n<script type=\"text/javascript\">\r\n    var app = angular.module('MyApp', [])\r\n    app.controller('MyController', function ($scope, $http, $window) {\r\n        $scope.ButtonClick = function () {\r\n            var post = $http({\r\n                method: \"POST\",\r\n                url: \"Service.asmx/GetCurrentTime\",\r\n                dataType: 'json',\r\n                data: { name: $scope.Name },\r\n                headers: { \"Content-Type\": \"application/json\" }\r\n            });\r\n \r\n            post.success(function (data, status) {\r\n                $window.alert(data.d);\r\n            });\r\n \r\n            post.error(function (data, status) {\r\n                $window.alert(data.Message);\r\n            });\r\n        }\r\n    });\r\n</script>\r\n<div ng-app=\"MyApp\" ng-controller=\"MyController\">\r\n    Name:\r\n    <input type=\"text\" ng-model=\"Name\" />\r\n    <br />\r\n    <br />\r\n    <input type=\"button\" value=\"Submit\" (click)=\"post()\" />\r\n    <img src=\"myId\" />\r\n</div>"

/***/ }),

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/test/test.page.ts");







const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
let TestPageModule = class TestPageModule {
};
TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "./src/app/test/test.page.scss":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/test/test.page.ts":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TestPage = class TestPage {
    constructor(http, route, postDataService) {
        this.http = http;
        this.route = route;
        this.postDataService = postDataService;
        this.id = 12;
        this.route.queryParams.subscribe(params => {
            this.myId = JSON.parse(params["sig"]);
            // this.sign = this.myId
            // this.tranID = this.myId.tranID
            console.log("receive", this.myId);
        });
    }
    ngOnInit() {
    }
    post() {
        let params = {
            SubscriptionPassword: 'passx',
            UserID: this.id,
            UserPassword: '00100100957',
            BranchID: '01',
            AllowHttp: true
        };
    }
};
TestPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"] }
];
TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.page.html"),
        styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/test/test.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"]])
], TestPage);



/***/ })

}]);
//# sourceMappingURL=test-test-module-es2015.js.map