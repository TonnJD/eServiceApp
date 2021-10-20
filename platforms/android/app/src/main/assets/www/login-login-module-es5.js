(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"centered\">   \r\n    <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" class=\"text-center\">\r\n      <img src=\"../../assets/img/logo.png\" alt=\"\"/>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\" style=\"padding: 5px;margin-bottom: 30px;\">\r\n          <div style=\"font-size: 20px;font-weight: bold;\">Login your account</div>\r\n          <div class=\"text-center\" style=\"text-align: center;color: red;\"> {{text}}</div>\r\n        </div>    \r\n      </div> \r\n      <ion-item>\r\n        <ion-input name=\"username\" type=\"text\" [(ngModel)]=\"user.email\" placeholder=\"ชื่อผู้ใช้\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"รหัสผ่าน\" ngModel required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-button shape=\"round\" [disabled]=\"form.invalid\" (click)=\"login()\">Login</ion-button>\r\n    </form>\r\n  </div> \r\n  <!-- <iframe [src]=\"url\" style=\"width:100%;height:100%\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.head {\n  text-align: center;\n  font-size: 0.9em;\n  color: #124BA3;\n}\n\n.form-control {\n  box-shadow: none;\n  border-color: #ddd;\n}\n\n.text {\n  text-align: center;\n  font-size: 0.9em;\n  color: black;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXEdpdEh1YlxcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4vLyB9XHJcbi5pbWd7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5oZWFke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGNvbG9yOiAjMTI0QkEzO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG59XHJcbi50ZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufSIsIi5pbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjMTI0QkEzO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var LoginPage = /** @class */ (function () {
    function LoginPage(alertController, loadingController, postDataService, navCtrl, platform, storageService, network, authService, DataService, sanitizer, router, route) {
        var _this = this;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.postDataService = postDataService;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.storageService = storageService;
        this.network = network;
        this.authService = authService;
        this.DataService = DataService;
        this.router = router;
        this.route = route;
        this.items = [];
        this.newUser = {};
        this.text = "";
        this.network.onDisconnect().subscribe(function () {
            _this.text = "...กรุณาเชื่อมต่ออินเทอร์เน็ต...";
        });
        setTimeout(function () {
            _this.ngOnInit();
            // this.checkNetwork();
        }, 500);
        this.user = [];
        this.route.queryParams.subscribe(function (params) {
            _this.authService.authenticationState.subscribe(function (state) {
                if (state) {
                    _this.router.navigate(['/menu/overview']);
                }
                else {
                    _this.router.navigate(['login']);
                }
            });
        });
    }
    //#endregion
    //#region Check Network
    LoginPage.prototype.checkNetwork = function () {
        this.network.onDisconnect().subscribe(function () {
            alert('network was disconnected :-(');
        });
        this.network.onConnect().subscribe(function () {
            alert('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
        });
    };
    //#endregion
    //#region load
    LoginPage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'กำลังเข้าสู่ระบบ...',
                            duration: 500,
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region login
    LoginPage.prototype.login = function () {
        var _this = this;
        this.load();
        this.user.email = this.user.email;
        this.user.password = this.user.password;
        this.user.type = "eservice";
        console.log(this.user);
        this.postDataService.login(this.user).then(function (data) {
            _this.data = data;
            console.log(_this.data);
            for (var i = 0; i < _this.data.length; i++) {
                _this.status = _this.data[i].Status;
                _this.name = _this.data[i].Name;
                _this.username = _this.data[i].Username;
                _this.position = _this.data[i].Position;
                _this.workall = _this.data[i].WorkAll;
                _this.workfinish = _this.data[i].WorkFinish;
                _this.empID = _this.data[i].empID;
                _this.role = _this.data[i].roleID;
                _this.Tablet = _this.data[i].Tablet;
                _this.link = _this.data[i].Link;
            }
            if (_this.status == false) {
                _this.false();
            }
            else if (_this.Tablet == "On" && _this.status == true) {
                _this.true();
            }
            else {
                _this.access();
            }
        });
    };
    //#endregion
    //#region check  
    LoginPage.prototype.false = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'อีเมลล์ หรือ รหัสผ่านไม่ถูกต้อง',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.storageService.resetLocalStorage();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.access = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'ระบบยังไม่เปิดใช้งาน',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.storageService.resetLocalStorage();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.true = function () {
        var _this = this;
        this.newUser.id = 1;
        this.newUser.name = this.name;
        this.newUser.username = this.username;
        this.newUser.position = this.position;
        this.newUser.empID = this.empID;
        this.newUser.role = this.role;
        this.newUser.status = this.status;
        this.newUser.link = this.link;
        console.log(this.newUser);
        this.authService.login(this.newUser);
        this.storageService.addUser(this.newUser).then(function (item) {
            _this.newUser = {};
        });
    };
    //#endregion
    //#region checkspace
    LoginPage.prototype.checkspace = function () {
        cordova.exec(function (result) {
            // alert("Free Disk Space: " + result);
        }, function (error) {
            // alert("Error: " + error);
        }, "File", "getFreeDiskSpace", []);
    };
    //#endregion
    //#region start
    LoginPage.prototype.ngOnInit = function () {
        //this.storageService.resetLocalStorage();
        // this.checkspace();
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
        { type: _auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
        { type: _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mylist', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
    ], LoginPage.prototype, "mylist", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
            _auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map