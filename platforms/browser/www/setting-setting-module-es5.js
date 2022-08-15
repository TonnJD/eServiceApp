(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/setting/setting.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/setting/setting.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>ตั้งค่า</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"polaroid center\">\r\n    <img src=\"../../../assets/img/logo.png\">\r\n  </div>\r\n  <div class=\"head\" style=\"margin-top: 5px; margin-bottom: 10px;\">บริษัท สุพีเรียฟู้ด เซอร์วิส จำกัด</div>\r\n  <div class=\"head\">19 1-2 ถนน พัฒนาชนบท 2</div>\r\n  <div class=\"head\">แขวงคลองสองต้นนุ่น เขตลาดกระบัง กรุงเทพมหานคร 10520</div>\r\n  <div class=\"head\">Office: 02-184-9780-5</div>\r\n  <div class=\"head\">Fax: 02-184-9786</div>\r\n  <div class=\"text-center\">\r\n    <div class=\"btn\" (click)=\"Changpassword()\">เปลี่ยนรหัสผ่าน</div>\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <div class=\"btn\" (click)=\"logout()\">ออกจากระบบ</div>\r\n  </div> \r\n  <!-- <div class=\"text-center\">\r\n    <div class=\"btn\" (click)=\"test()\">test</div>\r\n  </div>   -->\r\n  <div class=\"text-center\">\r\n    <div class=\"btn\" (click)=\"checkversion()\">ตรวจสอบเวอร์ชั่นล่าสุด</div>\r\n  </div>\r\n  <div class=\"head\" style=\"margin-top: 20px;\">เวอร์ชั่น : {{VersionNumber}}</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/setting/setting.module.ts":
/*!************************************************!*\
  !*** ./src/app/page/setting/setting.module.ts ***!
  \************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/page/setting/setting.page.ts");







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/page/setting/setting.page.scss":
/*!************************************************!*\
  !*** ./src/app/page/setting/setting.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#EEEEEE;\n}\n\n.polaroid {\n  width: 250px;\n  box-shadow: rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n\n.head {\n  font-size: 0.8em;\n  text-align: center;\n  color: #7C7C7C;\n}\n\n.btn {\n  font-size: 0.8em;\n  background-color: #D6D7D7;\n  border-radius: 3px !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXR0aW5nL0M6XFxVc2Vyc1xcTWFydFxcRG9jdW1lbnRzXFxXaW5ncGx1c1xcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXHNldHRpbmdcXHNldHRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGdFQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHTjs7QURERTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0VFRUVFRTtcclxufVxyXG4ucG9sYXJvaWQge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmhlYWR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM3QzdDN0M7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDdENztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNFRUVFRUU7XG59XG5cbi5wb2xhcm9pZCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjN0M3QzdDO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDdENztcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/page/setting/setting.page.ts":
/*!**********************************************!*\
  !*** ./src/app/page/setting/setting.page.ts ***!
  \**********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _setting_changpassword_changpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setting/changpassword/changpassword.page */ "./src/app/page/setting/changpassword/changpassword.page.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "./node_modules/@ionic-native/browser-tab/ngx/index.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");











var SettingPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function SettingPage(platform, sqlite, storageService, authService, navCtrl, modalController, appVersion, alertController, browserTab, postDataService) {
        var _this = this;
        this.platform = platform;
        this.sqlite = sqlite;
        this.storageService = storageService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.appVersion = appVersion;
        this.alertController = alertController;
        this.browserTab = browserTab;
        this.postDataService = postDataService;
        this.appVersion.getVersionNumber().then(function (s) {
            _this.VersionNumber = s;
        });
    }
    //#endregion
    //#region start
    SettingPage.prototype.ngOnInit = function () {
    };
    //#endregion
    //#region logout
    SettingPage.prototype.logout = function () {
        this.storageService.resetLocalStorage();
        console.log("Logout Finish");
        this.authService.logout();
    };
    //#endregion
    //#region Changpassword
    SettingPage.prototype.Changpassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _setting_changpassword_changpassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangpasswordPage"],
                            cssClass: 'my-custom-modal-css',
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region Check Version
    SettingPage.prototype.checkversion = function () {
        var _this = this;
        this.appVersion.getVersionNumber().then(function (s) {
            _this.VersionNumber = s;
            console.log(_this.VersionNumber);
            var param = {
                version: _this.VersionNumber,
                typedevice: "checkversion",
            };
            console.log(param);
            _this.postDataService.postdevice(param).then(function (data) {
                _this.statusversion = data;
                console.log(_this.statusversion);
                if (_this.statusversion == true) {
                    _this.alertversionlast();
                }
                else {
                    _this.link = _this.statusversion;
                    _this.alertversion();
                }
            });
        });
    };
    //#endregion
    //#region 
    SettingPage.prototype.alertversion = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'กรุณาดาวน์โหลดเวอร์ชั่นใหม่',
                            buttons: [
                                {
                                    text: 'ดาวน์โหลดเวอร์ชั่นใหม่',
                                    handler: function () {
                                        _this.openUrl();
                                    }
                                }, {
                                    text: 'ยกเลิก',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingPage.prototype.alertversionlast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'เวอร์ชั่น' + this.VersionNumber + ' เป็นเวอร์ชั่นล่าสุด',
                            buttons: [
                                {
                                    text: 'ยกเลิก',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region 
    SettingPage.prototype.openUrl = function () {
        var _this = this;
        console.log(this.link);
        this.browserTab.isAvailable()
            .then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl(_this.link);
                //this.browserTab.openUrl('https://test.erpsuperior.com/APK/eServiceTest.apk');
                //this.browserTab.openUrl('https://drive.google.com/file/d/1CYrs3j1akx2gtIXRx3A_DvD8kX9bSsea/view?usp=sharing');
            }
            else {
                // if custom tabs are not available you may  use InAppBrowser
            }
        });
    };
    //#endregion
    SettingPage.prototype.test = function () {
        var _this = this;
        var params = {
            typedevice: 'GetPM',
            empID: '02026476-e932-4a8f-a1bb-7481b4e58e0a',
            SerialScan: '1803002848'
        };
        console.log(params);
        this.postDataService.postdevice(params).then(function (data) {
            _this.data = data;
            console.log(data);
            for (var i = 0; i < _this.data.length; i++) {
                _this.productInstall = JSON.parse(_this.data[i].productInstall);
                console.log(_this.data);
            }
            for (var i = 0; i < _this.productInstall.length; i++) {
                _this.installId = _this.productInstall[i].installId;
                _this.planID = _this.productInstall[i].planID;
                _this.sparepart = _this.productInstall[i].sparepart;
                console.log(_this.installId + "-" + _this.planID + "-" + _this.sparepart);
            }
        });
    };
    SettingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_8__["BrowserTab"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_9__["PostDataService"] }
    ]; };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/page/setting/setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"],
            _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_8__["BrowserTab"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_9__["PostDataService"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=setting-setting-module-es5.js.map