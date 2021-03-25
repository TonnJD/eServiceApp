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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/page/setting/setting.page.ts");







const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
let SettingPageModule = class SettingPageModule {
};
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



/***/ }),

/***/ "./src/app/page/setting/setting.page.scss":
/*!************************************************!*\
  !*** ./src/app/page/setting/setting.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color:#EEEEEE;\n}\n\n.polaroid {\n  width: 250px;\n  box-shadow: rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n\n.head {\n  font-size: 0.8em;\n  text-align: center;\n  color: #7C7C7C;\n}\n\n.btn {\n  font-size: 0.8em;\n  background-color: #D6D7D7;\n  border-radius: 3px !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXR0aW5nL0U6XFxHaXRIdWJcXGVTZXJ2aWNlQXBwL3NyY1xcYXBwXFxwYWdlXFxzZXR0aW5nXFxzZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBRTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR047O0FEREU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNFRUVFRUU7XHJcbn1cclxuLnBvbGFyb2lkIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJveC1zaGFkb3c6ICByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5oZWFke1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjN0M3QzdDO1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENkQ3RDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRUVFRUVFO1xufVxuXG4ucG9sYXJvaWQge1xuICB3aWR0aDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oZWFkIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzdDN0M3Qztcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNENkQ3RDc7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _setting_changpassword_changpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setting/changpassword/changpassword.page */ "./src/app/page/setting/changpassword/changpassword.page.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ "./node_modules/@ionic-native/browser-tab/ngx/index.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../post-data.service */ "./src/app/post-data.service.ts");











let SettingPage = class SettingPage {
    //#endregion
    //#region constructor
    constructor(platform, sqlite, storageService, authService, navCtrl, modalController, appVersion, alertController, browserTab, postDataService) {
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
        this.appVersion.getVersionNumber().then((s) => {
            this.VersionNumber = s;
        });
    }
    //#endregion
    //#region start
    ngOnInit() {
    }
    //#endregion
    //#region logout
    logout() {
        this.storageService.resetLocalStorage();
        console.log("Logout Finish");
        this.authService.logout();
    }
    //#endregion
    //#region Changpassword
    Changpassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _setting_changpassword_changpassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangpasswordPage"],
                cssClass: 'my-custom-modal-css',
            });
            modal.onDidDismiss().then(data => {
            });
            return yield modal.present();
        });
    }
    //#endregion
    //#region Check Version
    checkversion() {
        this.appVersion.getVersionNumber().then((s) => {
            this.VersionNumber = s;
            console.log(this.VersionNumber);
            let param = {
                version: this.VersionNumber,
                typedevice: "checkversion",
            };
            console.log(param);
            this.postDataService.postdevice(param).then(data => {
                this.statusversion = data;
                console.log(this.statusversion);
                if (this.statusversion == true) {
                    this.alertversionlast();
                }
                else {
                    this.link = this.statusversion;
                    this.alertversion();
                }
            });
        });
    }
    //#endregion
    //#region 
    alertversion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'กรุณาดาวน์โหลดเวอร์ชั่นใหม่',
                buttons: [
                    {
                        text: 'ดาวน์โหลดเวอร์ชั่นใหม่',
                        handler: () => {
                            this.openUrl();
                        }
                    }, {
                        text: 'ยกเลิก',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alertversionlast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'เวอร์ชั่น' + this.VersionNumber + ' เป็นเวอร์ชั่นล่าสุด',
                buttons: [
                    {
                        text: 'ยกเลิก',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //#endregion
    //#region 
    openUrl() {
        console.log(this.link);
        this.browserTab.isAvailable()
            .then((isAvailable) => {
            if (isAvailable) {
                this.browserTab.openUrl(this.link);
                //this.browserTab.openUrl('https://test.erpsuperior.com/APK/eServiceTest.apk');
                //this.browserTab.openUrl('https://drive.google.com/file/d/1CYrs3j1akx2gtIXRx3A_DvD8kX9bSsea/view?usp=sharing');
            }
            else {
                // if custom tabs are not available you may  use InAppBrowser
            }
        });
    }
    //#endregion
    test() {
        let params = {
            typedevice: 'GetPM',
            empID: '02026476-e932-4a8f-a1bb-7481b4e58e0a',
            SerialScan: '1803002848'
        };
        console.log(params);
        this.postDataService.postdevice(params).then(data => {
            this.data = data;
            console.log(data);
            for (let i = 0; i < this.data.length; i++) {
                this.productInstall = JSON.parse(this.data[i].productInstall);
                console.log(this.data);
            }
            for (let i = 0; i < this.productInstall.length; i++) {
                this.installId = this.productInstall[i].installId;
                this.planID = this.productInstall[i].planID;
                this.sparepart = this.productInstall[i].sparepart;
                console.log(this.installId + "-" + this.planID + "-" + this.sparepart);
            }
        });
    }
};
SettingPage.ctorParameters = () => [
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
];
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



/***/ })

}]);
//# sourceMappingURL=setting-setting-module-es2015.js.map