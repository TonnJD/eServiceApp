(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"centered\">   \r\n    <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" class=\"text-center\">\r\n      <img src=\"../../assets/img/logo.png\" alt=\"\"/>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\" style=\"padding: 5px;margin-bottom: 30px;\">\r\n          <div style=\"font-size: 20px;font-weight: bold;\">Login your account</div>\r\n          <div class=\"text-center\" style=\"text-align: center;color: red;\"> {{text}}</div>\r\n        </div>    \r\n      </div> \r\n      <ion-item>\r\n        <ion-input name=\"username\" type=\"text\" [(ngModel)]=\"user.email\" placeholder=\"ชื่อผู้ใช้\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"รหัสผ่าน\" ngModel required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-button shape=\"round\" [disabled]=\"form.invalid\" (click)=\"login()\">Login</ion-button>     \r\n    </form>\r\n  </div> \r\n  <!-- <iframe [src]=\"url\" style=\"width:100%;height:100%\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
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



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.head {\n  text-align: center;\n  font-size: 0.9em;\n  color: #124BA3;\n}\n\n.form-control {\n  box-shadow: none;\n  border-color: #ddd;\n}\n\n.text {\n  text-align: center;\n  font-size: 0.9em;\n  color: black;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  /* bring your own prefixes */\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXEFwcF9Nb2JpbGVcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNGRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuLy8gfVxyXG4uaW1ne1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaGVhZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogIzEyNEJBMztcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogI2RkZDtcclxufVxyXG4udGV4dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn0iLCIuaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzEyNEJBMztcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cblxuLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let LoginPage = class LoginPage {
    constructor(alertController, loadingController, postDataService, navCtrl, platform, storageService, network, authService, DataService, sanitizer, router, route) {
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
        this.network.onDisconnect().subscribe(() => {
            this.text = "...กรุณาเชื่อมต่ออินเทอร์เน็ต...";
        });
        setTimeout(() => {
            this.ngOnInit();
            // this.checkNetwork();
        }, 500);
        this.user = [];
        this.route.queryParams.subscribe(params => {
            this.authService.authenticationState.subscribe(state => {
                if (state) {
                    this.router.navigate(['/menu/overview']);
                }
                else {
                    this.router.navigate(['login']);
                }
            });
        });
    }
    //#endregion
    //#region Check Network
    checkNetwork() {
        this.network.onDisconnect().subscribe(() => {
            alert('network was disconnected :-(');
        });
        this.network.onConnect().subscribe(() => {
            alert('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
        });
    }
    //#endregion
    //#region load
    load() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'กำลังเข้าสู่ระบบ...',
                duration: 500,
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
    //#endregion
    //#region login
    login() {
        this.load();
        this.user.email = this.user.email;
        this.user.password = this.user.password;
        this.user.type = "eservice";
        console.log(this.user);
        this.postDataService.login(this.user).then(data => {
            this.data = data;
            console.log(this.data);
            for (let i = 0; i < this.data.length; i++) {
                this.status = this.data[i].Status;
                this.name = this.data[i].Name;
                this.username = this.data[i].Username;
                this.position = this.data[i].Position;
                this.workall = this.data[i].WorkAll;
                this.workfinish = this.data[i].WorkFinish;
                this.empID = this.data[i].empID;
                this.role = this.data[i].roleID;
                this.Tablet = this.data[i].Tablet;
                this.link = this.data[i].Link;
            }
            if (this.status == false) {
                this.false();
            }
            else if (this.Tablet == "On" && this.status == true) {
                this.true();
            }
            else {
                this.access();
            }
        });
    }
    //#endregion
    //#region check  
    false() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'อีเมลล์ หรือ รหัสผ่านไม่ถูกต้อง',
                buttons: ['OK']
            });
            yield alert.present();
            this.storageService.resetLocalStorage();
        });
    }
    access() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'ระบบยังไม่เปิดใช้งาน',
                buttons: ['OK']
            });
            yield alert.present();
            this.storageService.resetLocalStorage();
        });
    }
    true() {
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
        this.storageService.addUser(this.newUser).then(item => {
            this.newUser = {};
        });
    }
    //#endregion
    //#region checkspace
    checkspace() {
        cordova.exec(function (result) {
            // alert("Free Disk Space: " + result);
        }, function (error) {
            // alert("Error: " + error);
        }, "File", "getFreeDiskSpace", []);
    }
    //#endregion
    //#region start
    ngOnInit() {
        //this.storageService.resetLocalStorage();
        // this.checkspace();
    }
};
LoginPage.ctorParameters = () => [
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
];
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



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map