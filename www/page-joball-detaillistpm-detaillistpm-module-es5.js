(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-joball-detaillistpm-detaillistpm-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/joball/detaillistpm/detaillistpm.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/joball/detaillistpm/detaillistpm.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>ข้อมูลของ {{Customername}} </ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\" *ngFor=\"let item of data\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12\" id=\"\" style=\"padding: 0px;padding-right: 5px;\">\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>ลูกค้า\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\" style=\"padding: 15px;\">\r\n            <div class=\"col-4 text\">ชื่อลูกค้า </div>\r\n            <label class=\"col-8 subtext padding\">{{item.CustomerName}} {{item.CustomerNameEng}}</label>\r\n            <label class=\"col-4 text\">อีเมลล์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Email}}</label>\r\n            <label class=\"col-4 text\">โทรศัพท์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Phone}}</label>\r\n            <label class=\"col-4 text\">แฟกซ์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Fax}}</label>\r\n            <label class=\"col-4 text\">ที่อยู่</label>\r\n            <label class=\"col-8 subtext\">{{item.Address}}</label>\r\n            <label class=\"col-4 text\">ชื่อบิล</label>\r\n            <label class=\"col-8 subtext padding\">{{item.BillName}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-bank\"></i>สำนักงานใหญ่\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\" style=\"padding: 15px\">\r\n            <label class=\"col-4 text\">ชื่อบัญชี</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountName}}</label>\r\n            <label class=\"col-4 text\">ประเภทธุรกิจ</label>\r\n            <label class=\"col-8 subtext padding\">{{item.IndustryType}}</label>\r\n            <label class=\"col-4 text\">อีเมลล์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountEmail}}</label>\r\n            <label class=\"col-4 text\">โทรศัพท์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountPhone}}</label>\r\n            <label class=\"col-4 text\">แฟกซ์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountFax}}</label>\r\n            <label class=\"col-4 text\">รหัสลูกค้า</label>\r\n            <label class=\"col-8 subtext padding\">{{item.CustomerCode}}</label>\r\n            <label class=\"col-4 text\">ชื่อบิล</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountBill}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>พนักงานขาย\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\" style=\"padding: 15px\">\r\n            <label class=\"col-4 text\">สถานะการทำงาน</label>\r\n            <label class=\"col-8 subtext padding\">{{item.WorkStatus}}</label>\r\n            <label class=\"col-4 text\">ประเภทงาน</label>\r\n            <label class=\"col-8 subtext padding\">{{item.WorkType}}</label>\r\n            <label class=\"col-4 text\">ชื่อ</label>\r\n            <label class=\"col-8 subtext padding\">{{item.NameSale}}</label>\r\n            <label class=\"col-4 text\">เพศ</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Gender}}</label>\r\n            <label class=\"col-4 text\">กลุ่มงาน</label>\r\n            <label class=\"col-8 subtext padding\">-</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12\" id=\"\" style=\"padding: 0px;\">\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-cube\"></i>สินค้า\r\n            </div>\r\n\r\n          </div>\r\n          <div style=\"padding: 5px;\" *ngFor=\"let data of item.productInstall | keyvalue\">\r\n            <!-- <div (click)=\"click(item, data.value)\"> -->\r\n            <div class=\"row col-12\">\r\n              <div class=\"col-5 text\">สถานะ:</div>\r\n              <div class=\"col-7 subtext\" #lblWait style=\"color: #E78D8D;font-size: 14px;font-weight: bold;\"\r\n                *ngIf=\"data.value.Workfinish == 0; else lblWait\">รอการตรวจสอบ</div>\r\n              <div class=\"col-7 subtext\" #lblSuccess style=\"color: green;font-size: 14px;font-weight: bold;\"\r\n                *ngIf=\"data.value.Workfinish == 1; else lblSuccess\">งานเสร็จแล้ว</div>\r\n              <div class=\"col-7 subtext\" #lblwaiting style=\"color: rgb(35, 7, 248);font-size: 14px;font-weight: bold;\"\r\n                *ngIf=\"data.value.Workfinish == 2; else lblwaiting\">รอลูกค้าประเมิน</div>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <div class=\"col-5 text\">สินค้าที่ติดตั้ง:</div>\r\n              <div class=\"col-7 subtext\">{{data.value.InstallPlanName}}</div>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\">รหัสสินค้า:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ItemCode}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'INSTALL' && data.value.OldAssetName != null\">\r\n              <label class=\"col-5 text\">เครื่องที่รื้อถอน:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.OldAssetName}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'INSTALL'\">\r\n              <label class=\"col-5 text\">เครื่องที่ติดตั้ง:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ItemsName}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType != 'INSTALL'\">\r\n              <label class=\"col-5 text\">ชื่อสินค้า:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ItemsName}}</label>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\">Serial No:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.SerialNo}}</label>\r\n              <!-- <ion-input class=\"col-6\" *ngIf=\"data.value.JobType == 'PM'\" type=\"text\" style=\"padding: 0px!important;padding-left: 5px!important;\" name=\"SerialNo\" [(ngModel)]=\"data.value.SerialNo\"> -->\r\n              <!-- </ion-input> -->\r\n              <!-- <div class=\"col-1\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                    <ion-button size=\"small\" (click)=\"viewpic(item, data.value)\">\r\n                      <ion-icon name=\"view\"></ion-icon>\r\n                    </ion-button>\r\n                  </div> -->\r\n              <!-- <div class=\"col-1\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                  <ion-button size=\"small\" (click)=\"SaveSerial(data.value)\">\r\n                    <ion-icon name=\"save\"></ion-icon>\r\n                  </ion-button>\r\n                </div> -->\r\n              <!-- <div class=\"col-1\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                  <ion-button size=\"small\" (click)=\"SaveSerialBarcode(data.value)\">\r\n                    <ion-icon name=\"barcode\"></ion-icon>\r\n                  </ion-button>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\">Asset No:</label>\r\n              <div class=\"col-7\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                <label>{{data.value.AssetplateSFS}}</label>&nbsp;\r\n                <ion-button size=\"small\" (click)=\"SaveSerialBarcode(data.value)\" style=\"margin-top: 0px;\"\r\n                  title=\"สแกน Barcode\">\r\n                  <ion-icon name=\"barcode\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM' || data.value.JobType == 'INSTALL' || data.value.JobType == 'UNINSTALL'\">\r\n              <label class=\"col-5 text\">Case ID:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ServiceReportNo}}</label>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\" *ngIf=\"new\">New Serial No:</label>\r\n              <label class=\"col-7 subtext\" *ngIf=\"new\">{{data.value.SerialNoNew}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType != 'PM' && data.value.JobType != 'CM' else pmnot\">\r\n              <label class=\"col-5 text\" #pmnot>ประเภทงาน :</label>\r\n              <label class=\"col-7 subtext\" #pmnot>{{data.value.JobType}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM' else cm\">\r\n              <label class=\"col-5 text\" #cm>ประเภทงาน :</label>\r\n              <label class=\"col-7 subtext\" #pmnot>CM</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'PM' else pm\">\r\n              <label class=\"col-5 text\" #pm>ประเภทงาน :</label>\r\n              <div class=\"col-7 subtext\" [innerHtml]=\"data.value.typePm\" #pm></div>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.RoundFilter != null\">\r\n              <label class=\"col-12 text\" #pm>เปลี่ยนไส้กรอง :</label>\r\n              <label class=\"col-12 subtext\" #pm style=\"font-weight: bold;color:#E78D8D;\" [innerHTML]=\"data.value.RoundFilter\"></label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'PM' && data.value.cause != null && data.value.cause != '' && data.value.Workfinish != 1\">\r\n              <label class=\"col-5 text\" #pm>ไม่เข้าตรวจเช็ค :</label>\r\n              <label class=\"col-7 subtext text-danger\" #pm>{{data.value.cause}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM'\">\r\n              <label class=\"col-5 text\">ปัญหาที่รับแจ้ง :</label>\r\n              <label class=\"col-7 subtext\">{{data.value.Description}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 1 else cm\">\r\n              <div class=\"col-5 text\" #cm>การปิดงาน :</div>\r\n              <div class=\"col-7 subtext\" #cm>{{data.value.WorkClose}}</div>\r\n            </div>\r\n            <div class=\"row col-12\"\r\n              *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 1 && data.value.WorkCloseID == 'WorkClose004' && data.value.newinstallID != null else cm\">\r\n              <div class=\"col-5 text\" #cm>การเปลี่ยนอุปกรณ์ :</div>\r\n              <div class=\"col-7 subtext\" #cm>{{data.value.TypeChang}}</div>\r\n            </div>\r\n            <div class=\"row col-12\"\r\n              *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 1 && data.value.WorkCloseID == 'WorkClose004' else cm\">\r\n              <div class=\"col-5 text\" #cm>ปัญหาเกิดจาก :</div>\r\n              <div class=\"col-7 subtext\" #cm>{{data.value.ResolutionDetaill}}</div>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.sparepart != '' && data.value.JobType == 'PM' else spare\">\r\n              <div class=\"col-5 text\" #spare>อะไหล่ที่ต้องเปลี่ยน :</div>\r\n              <div class=\"col-7 subtext\" #spare>\r\n                <div [innerHTML]=\"data.value.sparepart\"></div>\r\n              </div>\r\n            </div>\r\n            <!-- </div> -->\r\n\r\n            <div class=\"col-12\">\r\n              <ion-button expand=\"block\" size=\"small\" (click)=\"Imgbf(data.value)\" *ngIf=\"imgbefore\">ภาพหน้างาน\r\n              </ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"warning\" size=\"small\" (click)=\"assign(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && data.value.status == 'Assign' else assigns\" #assigns>ตอบรับงาน\r\n              </ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.JobType != 'CM' && data.value.Workfinish == 0 else wait\" #wait>เริ่มงาน</ion-button>\r\n\r\n              <!-- <ion-button expand=\"block\" color=\"primary\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.JobType != 'CM' && data.value.Workfinish == 0 else wait\" #wait>ตรวจสอบข้อมูล</ion-button> -->\r\n\r\n              <ion-button expand=\"block\" color=\"danger\" size=\"small\" (click)=\"NotPM(item, data.value)\"\r\n                *ngIf=\"data.value.JobType == 'PM' && data.value.Workfinish == 0 else wait\" #wait>ไม่เข้าตรวจเช็ค</ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 2 else waiting\" #waiting>ดำเนินการต่อ\r\n              </ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 0 && data.value.status != 'Assign'\" #wait>\r\n                เริ่มงาน</ion-button>\r\n\r\n              <!-- <ion-button expand=\"block\" size=\"small\" (click)=\"showSpare(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'PM' && data.value.Workfinish == 0\">เบิกอะไหล่</ion-button>\r\n\r\n              <ion-button expand=\"block\" size=\"small\" (click)=\"showSpareHistory(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'PM'\">\r\n                ประวัติการเบิกอะไหล่</ion-button> -->\r\n\r\n              <!-- <ion-button expand=\"block\" size=\"small\" (click)=\"showSpare(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 0 && type != 'New'\">เบิกอะไหล่\r\n              </ion-button> -->\r\n\r\n              <ion-button expand=\"block\" size=\"small\" (click)=\"showSpareHistory(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && type != 'New'\">\r\n                ประวัติการเบิกอะไหล่</ion-button>\r\n\r\n              <!-- <ion-button expand=\"block\" color=\"warning\" size=\"small\" (click)=\"imgice(data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 1 && data.value.JobType == 'INSTALL' else ice\" #ice>ชั่งน้ำแข็ง\r\n              </ion-button> -->\r\n\r\n              <!-- <ion-button expand=\"block\" color=\"warning\" size=\"small\" (click)=\"viewpic(item, data.value)\"\r\n                *ngIf=\"data.value.JobType != 'UNINSTALL' && data.value.isSerial == true else sn\" #sn>ดูรูป Serial\r\n              </ion-button>  -->\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"logs()\"\r\n                *ngIf=\"data.value.JobType != 'PM' && data.value.status != 'Assign'\">สถานะการติดตามงาน</ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"click(item, data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 1 && (data.value.JobType == 'PM' || data.value.JobType == 'UNINSTALL')\">\r\n                รายละเอียด</ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"click(item, data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 1 && data.value.JobType == 'CM' && data.value.WorkCloseID == 'WorkClose004'\">\r\n                รายละเอียด</ion-button>\r\n            </div>\r\n            <hr />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"fab()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"alert\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/joball/detaillistpm/detaillistpm.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page/joball/detaillistpm/detaillistpm.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetaillistpmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaillistpmPageModule", function() { return DetaillistpmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detaillistpm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detaillistpm.page */ "./src/app/page/joball/detaillistpm/detaillistpm.page.ts");







var routes = [
    {
        path: '',
        component: _detaillistpm_page__WEBPACK_IMPORTED_MODULE_6__["DetaillistpmPage"]
    }
];
var DetaillistpmPageModule = /** @class */ (function () {
    function DetaillistpmPageModule() {
    }
    DetaillistpmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detaillistpm_page__WEBPACK_IMPORTED_MODULE_6__["DetaillistpmPage"]]
        })
    ], DetaillistpmPageModule);
    return DetaillistpmPageModule;
}());



/***/ }),

/***/ "./src/app/page/joball/detaillistpm/detaillistpm.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/page/joball/detaillistpm/detaillistpm.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #EEEEEE;\n}\n\n.box {\n  background-color: white;\n}\n\n.text {\n  font-weight: bold;\n  font-size: 0.9em;\n}\n\n.ex2 {\n  overflow-y: hidden;\n}\n\n.ex3 {\n  overflow-y: scroll;\n}\n\n.native-input sc-ion-input-md {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2JhbGwvZGV0YWlsbGlzdHBtL0M6XFxTb2x1dGlvblxcR2l0aHViXFxlU2VydmljZUFwcC9zcmNcXGFwcFxccGFnZVxcam9iYWxsXFxkZXRhaWxsaXN0cG1cXGRldGFpbGxpc3RwbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2Uvam9iYWxsL2RldGFpbGxpc3RwbS9kZXRhaWxsaXN0cG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURrQ0E7RUFDSSx1QkFBQTtBQy9CSjs7QURrQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDL0JKOztBRHlDQTtFQUNJLGtCQUFBO0FDdENKOztBRHlDQTtFQUNJLGtCQUFBO0FDdENKOztBRHdDQTtFQUNJLHVCQUFBO0FDckNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9qb2JhbGwvZGV0YWlsbGlzdHBtL2RldGFpbGxpc3RwbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG59XHJcbi8vIC5jb250YWluZXItZmx1aWQge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuLy8gfVxyXG5cclxuLy8gLnBvcnRsZXQge1xyXG4vLyAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuLy8gICAgIC5wb3J0bGV0LWJvZHkge1xyXG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnRhYiB7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JCREVGQjtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5saXN0IHtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRCREJEO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4vLyB9XHJcblxyXG4uYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi8vIC5zdWJ0ZXh0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vIH1cclxuLy8gLnBhZGRpbmd7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcbi8vIH1cclxuXHJcbi5leDIge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uZXgzIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4ubmF0aXZlLWlucHV0IHNjLWlvbi1pbnB1dC1tZHtcclxuICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG59XG5cbi5ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmV4MiB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmV4MyB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm5hdGl2ZS1pbnB1dCBzYy1pb24taW5wdXQtbWQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/joball/detaillistpm/detaillistpm.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/page/joball/detaillistpm/detaillistpm.page.ts ***!
  \***************************************************************/
/*! exports provided: DetaillistpmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaillistpmPage", function() { return DetaillistpmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _job_showimginstall_showimginstall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../job/showimginstall/showimginstall.page */ "./src/app/page/job/showimginstall/showimginstall.page.ts");
/* harmony import */ var _detailofdetaillistpm_customerevaluation_customerevaluation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detailofdetaillistpm/customerevaluation/customerevaluation.page */ "./src/app/page/joball/detailofdetaillistpm/customerevaluation/customerevaluation.page.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _detaillistpm_log_log_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../detaillistpm/log/log.page */ "./src/app/page/detaillistpm/log/log.page.ts");
/* harmony import */ var _detailofdetaillistpm_requestsparepart_requestsparepart_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../detailofdetaillistpm/requestsparepart/requestsparepart.page */ "./src/app/page/joball/detailofdetaillistpm/requestsparepart/requestsparepart.page.ts");
/* harmony import */ var _update_product_update_product_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-product/update-product.page */ "./src/app/page/joball/detaillistpm/update-product/update-product.page.ts");












//import { JobresponsPage } from '../../job/jobdetail/jobrespons/jobrespons.page'
var DetaillistpmPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function DetaillistpmPage(route, navCtrl, postDataService, storageService, alertController, modalController, barcodeScanner, toastCtrl) {
        var _this = this;
        this.route = route;
        this.navCtrl = navCtrl;
        this.postDataService = postDataService;
        this.storageService = storageService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.new = false;
        this.imgbf = true;
        this.imgbefore = true;
        this.detaillistpm = [];
        this.route.queryParams.subscribe(function (params) {
            _this.myId = JSON.parse(params["data"]);
            _this.detailPM = JSON.parse(params["data"]);
            if (_this.myId != "undefined") {
                _this.item = _this.myId.item;
                _this.type = _this.myId.type;
                _this.date = _this.myId.date;
                _this.datacm = _this.myId.datacm;
                console.log('this.item PM', _this.item);
                if (_this.item == undefined || _this.item == "undefined" || _this.item == 'undefined') {
                    _this.cusID = _this.myId.cusID;
                    _this.planID = _this.myId.planID;
                    _this.workfinish = _this.myId.workfinish;
                    _this.month = _this.myId.month;
                    _this.year = _this.myId.year;
                }
                else {
                    _this.cusID = _this.item.cusID;
                    _this.planID = _this.item.planID;
                    _this.workfinish = _this.item.WorkFinish;
                    _this.month = _this.item.month;
                    _this.year = _this.item.year;
                    if (_this.cusID == undefined || _this.cusID == "undefined" || _this.cusID == 'undefined') {
                        _this.cusID = _this.myId.cusID;
                        _this.planID = _this.myId.planID;
                        _this.workfinish = _this.myId.workfinish;
                        _this.month = _this.myId.month;
                        _this.year = _this.myId.year;
                    }
                }
                if (_this.type == "PM") {
                    _this.imgbefore = false;
                }
                if (_this.type == "getPM") {
                    _this.detaillistpm.PlanID = _this.planID,
                        _this.detaillistpm.jobtype = "SuccessPM";
                    _this.postDataService.postGetList(_this.detaillistpm).then(function (work) {
                        _this.data = work;
                        for (var i = 0; i < _this.data.length; i++) {
                            _this.Customername = _this.data[i].CustomerName;
                            _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                            for (var j = 0; j < _this.data[i].productInstall.length; j++) {
                            }
                        }
                    });
                    _this.type = "PM";
                }
                else if (_this.type == "getIN") {
                    _this.imgbf = true;
                    _this.detaillistpm.PlanID = _this.planID;
                    _this.detaillistpm.jobtype = "SuccessIN";
                    _this.postDataService.postGetList(_this.detaillistpm).then(function (work) {
                        _this.data = work;
                        for (var i = 0; i < _this.data.length; i++) {
                            _this.Customername = _this.data[i].CustomerName;
                            _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                            for (var j = 0; j < _this.data[i].productInstall.length; j++) {
                                console.log(_this.data[i].productInstall[j]);
                            }
                        }
                    });
                    _this.type = "INSTALL";
                }
                else if (_this.type == "getCM") {
                    _this.imgbf = true;
                    _this.detaillistpm.PlanID = _this.planID;
                    _this.detaillistpm.jobtype = "SuccessCM";
                    _this.postDataService.postDetailListpm(_this.detaillistpm).then(function (work) {
                        _this.data = work;
                        for (var i = 0; i < _this.data.length; i++) {
                            _this.Customername = _this.data[i].CustomerName;
                            _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                        }
                    });
                    var workclose = {
                        jobtype: "getworkclose"
                    };
                    _this.postDataService.SaveCaseAll(workclose).then(function (data) {
                        _this.getworkclose = data;
                        for (var i = 0; i < _this.getworkclose.length; i++) {
                            console.log(_this.getworkclose);
                            if (i == 1) {
                                _this.getworkclose1 = _this.getworkclose[1].SystemDataName;
                                _this.getworkclosevalue1 = _this.getworkclose[1].SystemID;
                                _this.text = 'ปิดงาน';
                            }
                            else if (i == 3) {
                                _this.getworkclose2 = _this.getworkclose[3].SystemDataName;
                                _this.getworkclosevalue2 = _this.getworkclose[3].SystemID;
                                _this.text = 'ตกลง';
                            }
                            else if (i == 0) {
                                _this.getworkclose3 = _this.getworkclose[0].SystemDataName;
                                _this.getworkclosevalue3 = _this.getworkclose[0].SystemID;
                                _this.text = 'บันทึก';
                            }
                        }
                    });
                    _this.type = "CM";
                }
                else if (_this.type == "getUN") {
                    _this.detaillistpm.PlanID = _this.planID;
                    _this.detaillistpm.jobtype = "SuccessUN";
                    _this.postDataService.postGetList(_this.detaillistpm).then(function (work) {
                        _this.data = work;
                        for (var i = 0; i < _this.data.length; i++) {
                            _this.Customername = _this.data[i].CustomerName;
                            _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                            for (var j = 0; j < _this.data[i].productInstall.length; j++) {
                                console.log(_this.data[i].productInstall[j]);
                            }
                        }
                    });
                    _this.type = "UNINSTALL";
                }
                _this.ngOnInit();
            }
            else {
                alert("ไม่พบข้อมูล");
            }
        });
    }
    //#endregion
    //#region start
    DetaillistpmPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type == "CM") {
            this.imgbf = true;
            this.storageService.getUser().then(function (items) {
                _this.items = items;
                for (var i = 0; i < _this.items.length; i++) {
                    _this.empID = _this.items[i].empID;
                }
                _this.detaillistpm.cusID = _this.cusID;
                _this.detaillistpm.planID = _this.planID;
                _this.detaillistpm.month = _this.month;
                _this.detaillistpm.year = _this.year;
                _this.detaillistpm.type = _this.type;
                _this.detaillistpm.date = _this.date;
                _this.detaillistpm.empid = _this.empID;
                _this.postDataService.postDetailListpm(_this.detaillistpm).then(function (work) {
                    _this.data = work;
                    for (var i = 0; i < _this.data.length; i++) {
                        _this.Customername = _this.data[i].CustomerName;
                        _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                    }
                    console.log('this.data', _this.data);
                });
            });
            var workclose = {
                jobtype: "getworkclose"
            };
            this.postDataService.SaveCaseAll(workclose).then(function (data) {
                _this.getworkclose = data;
                for (var i = 0; i < _this.getworkclose.length; i++) {
                    if (i == 1) {
                        _this.getworkclose1 = _this.getworkclose[1].SystemDataName;
                        _this.getworkclosevalue1 = _this.getworkclose[1].SystemID;
                        _this.text = 'ปิดงาน';
                    }
                    else if (i == 3) {
                        _this.getworkclose2 = _this.getworkclose[3].SystemDataName;
                        _this.getworkclosevalue2 = _this.getworkclose[3].SystemID;
                        _this.text = 'ตกลง';
                    }
                    else if (i == 0) {
                        _this.getworkclose3 = _this.getworkclose[0].SystemDataName;
                        _this.getworkclosevalue3 = _this.getworkclose[0].SystemID;
                        _this.text = 'บันทึก';
                    }
                }
            });
        }
        else if (this.type == "INSTALL") {
            this.imgbf = true;
            this.storageService.getUser().then(function (items) {
                _this.items = items;
                for (var i = 0; i < _this.items.length; i++) {
                    _this.empID = _this.items[i].empID;
                }
                _this.detaillistpm.cusID = _this.cusID;
                _this.detaillistpm.planID = _this.planID;
                _this.detaillistpm.month = _this.month;
                _this.detaillistpm.year = _this.year;
                _this.detaillistpm.type = _this.type;
                _this.detaillistpm.date = _this.date;
                _this.detaillistpm.empid = _this.empID;
                _this.postDataService.postDetailListpm(_this.detaillistpm).then(function (work) {
                    _this.data = work;
                    for (var i = 0; i < _this.data.length; i++) {
                        _this.Customername = _this.data[i].CustomerName;
                        _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                        for (var j = 0; j < _this.data[i].productInstall.length; j++) {
                        }
                    }
                });
            });
        }
        else {
            this.storageService.getUser().then(function (items) {
                _this.items = items;
                for (var i = 0; i < _this.items.length; i++) {
                    _this.empID = _this.items[i].empID;
                }
                _this.detaillistpm.cusID = _this.cusID;
                _this.detaillistpm.planID = _this.planID;
                _this.detaillistpm.month = _this.month;
                _this.detaillistpm.year = _this.year;
                _this.detaillistpm.type = _this.type;
                _this.detaillistpm.date = _this.date;
                _this.detaillistpm.empid = _this.empID;
                _this.postDataService.postDetailListpm(_this.detaillistpm).then(function (work) {
                    _this.data = work;
                    for (var i = 0; i < _this.data.length; i++) {
                        _this.Customername = _this.data[i].CustomerName;
                        _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                        console.log('this.data[i].productInstall', _this.data[i].productInstall);
                        for (var j = 0; j < _this.data[i].productInstall.length; j++) {
                        }
                    }
                });
            });
        }
    };
    //#endregion
    DetaillistpmPage.prototype.popupclose = function (item, header, workclose) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        return [4 /*yield*/, this.modalController.create({
                                component: _detailofdetaillistpm_customerevaluation_customerevaluation_page__WEBPACK_IMPORTED_MODULE_7__["CustomerevaluationPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    installID: item.installId,
                                    planID: item.planID,
                                    jobtype: this.type,
                                    header: header,
                                    empID: this.empID,
                                    workclose: workclose,
                                    item: this.item,
                                    date: this.date
                                }
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
    DetaillistpmPage.prototype.viewpic = function (data, item) {
        var params = {
            empID: this.empID,
            data: data,
            item: item,
            type: this.type,
        };
        console.log(params);
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        this.navCtrl.navigateForward(['/picserial'], navigationExtras);
    };
    DetaillistpmPage.prototype.scan = function (data, item) {
        var _this = this;
        if (this.type == "PM" || this.type == "CM") {
            var params = {
                installID: item.installId,
                typedevice: "checkserial"
            };
            this.postDataService.postdevice(params).then(function (statusserial) {
                _this.statusserial = statusserial;
                if (_this.statusserial == false) {
                    _this.click(data, item);
                }
                else {
                    var tran = {
                        AssetID: item.AssetID,
                        Serial: item.Serial,
                        planID: item.planID,
                        empID: _this.empID,
                        insID: item.installId,
                        type: _this.type
                    };
                    _this.postDataService.postTranService(tran).then(function (TranService) {
                        var params = {
                            empID: _this.empID,
                            data: data,
                            item: item,
                            type: _this.type,
                        };
                        var navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        _this.navCtrl.navigateForward(['/picserial'], navigationExtras);
                    });
                }
            });
        }
        else {
            this.click(data, item);
        }
    };
    //#region click
    DetaillistpmPage.prototype.click = function (data, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, tran, params, navigationExtras, alertChoose, tran, params, navigationExtras, tran_1, params_1, modal, navigationExtras, params, navigationExtras, params, navigationExtras;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Data', data);
                        console.log('item', item);
                        if (!(item.Workfinish == 0 || item.Workfinish == 2)) return [3 /*break*/, 12];
                        if (!(item.status == "Pending")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                message: 'กรุณาติดต่อแอดมินบริษัทสุพีเรีย',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(this.type == "CM")) return [3 /*break*/, 7];
                        if (!(item.tranID != null)) return [3 /*break*/, 4];
                        console.log('item.WorkCloseID', item.WorkCloseID);
                        tran = {
                            AssetID: item.AssetID,
                            Serial: item.Serial,
                            planID: item.planID,
                            empID: this.empID,
                            insID: item.installId,
                            type: this.type
                        };
                        this.postDataService.postTranService(tran).then(function (TranService) {
                            // console.log(TranService);
                        });
                        params = {
                            empID: this.empID,
                            planID: item.planID,
                            install: item,
                            data: data,
                            insID: item.installId,
                            sparetype: item.sparepart,
                            item: item,
                            type: this.type,
                            date: this.date,
                            month: this.month,
                            year: this.year,
                            sentCM: this.detailPM
                        };
                        navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                        console.log("sent", navigationExtras);
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'custom-alert',
                            message: 'กรุณาเลือกการปิดงาน',
                            inputs: [
                                {
                                    type: 'radio',
                                    label: this.getworkclose2,
                                    value: this.getworkclosevalue2
                                },
                                {
                                    type: 'radio',
                                    label: this.getworkclose3,
                                    value: this.getworkclosevalue3
                                }
                            ],
                            buttons: [{
                                    text: this.text,
                                    handler: function (value) {
                                        if (value == _this.getworkclosevalue1) {
                                            var params = {
                                                planID: item.planID,
                                                installID: item.installId,
                                                empID: _this.empID,
                                                jobtype: "saveclose",
                                                workclose: value
                                            };
                                            _this.postDataService.SaveCaseAll(params).then(function (result) {
                                                if (result == true) {
                                                    _this.imgbf = true;
                                                    _this.detaillistpm.PlanID = item.planID;
                                                    _this.detaillistpm.jobtype = "SuccessCM";
                                                    _this.postDataService.postDetailListpm(_this.detaillistpm).then(function (work) {
                                                        _this.data = work;
                                                        for (var i = 0; i < _this.data.length; i++) {
                                                            _this.Customername = _this.data[i].CustomerName;
                                                            _this.data[i].productInstall = JSON.parse(_this.data[i].productInstall);
                                                        }
                                                    });
                                                    _this.alertSuccess();
                                                    //this.navCtrl.navigateForward(['/menu/overview']);
                                                }
                                                if (data == false) {
                                                    _this.alertFail();
                                                }
                                            });
                                        }
                                        else if (value == _this.getworkclosevalue2) {
                                            _this.UpdateInprogresss();
                                            var tran = {
                                                AssetID: item.AssetID,
                                                Serial: item.Serial,
                                                planID: item.planID,
                                                empID: _this.empID,
                                                insID: item.installId,
                                                type: _this.type,
                                                workclose: value
                                            };
                                            console.log('tran', tran);
                                            _this.postDataService.postTranService(tran).then(function (TranService) {
                                            });
                                            var params = {
                                                planID: item.planID,
                                                install: item,
                                                data: data,
                                                insID: item.installId,
                                                sparetype: item.sparepart,
                                                item: item,
                                                type: _this.type,
                                                date: _this.date,
                                                month: _this.month,
                                                year: _this.year,
                                            };
                                            var navigationExtras = {
                                                queryParams: {
                                                    data: JSON.stringify(params)
                                                }
                                            };
                                            _this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                                            console.log("sent", navigationExtras);
                                        }
                                        else if (value == _this.getworkclosevalue3) {
                                            _this.popupclose(item, _this.getworkclose3, value);
                                        }
                                    }
                                }]
                        })];
                    case 5:
                        alertChoose = _a.sent();
                        return [4 /*yield*/, alertChoose.present()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!(item.tranID != null && this.type != "CM")) return [3 /*break*/, 8];
                        tran = {
                            AssetID: item.AssetID,
                            Serial: item.Serial,
                            planID: item.planID,
                            empID: this.empID,
                            insID: item.installId,
                            cause: item.cause,
                            type: this.type
                        };
                        console.log('tran', tran);
                        this.postDataService.postTranService(tran).then(function (TranService) {
                            // console.log(TranService);
                        });
                        params = {
                            planID: item.planID,
                            install: item,
                            data: data,
                            insID: item.installId,
                            sparetype: item.sparepart,
                            item: this.item,
                            type: this.type,
                            date: this.date,
                            month: this.month,
                            year: this.year,
                        };
                        console.log('params', params);
                        navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                        return [3 /*break*/, 12];
                    case 8:
                        if (!(item.tranID == null && this.type != "CM")) return [3 /*break*/, 12];
                        tran_1 = {
                            AssetID: item.AssetID,
                            Serial: item.Serial,
                            planID: item.planID,
                            empID: this.empID,
                            insID: item.installId,
                            cause: item.cause,
                            type: this.type
                        };
                        params_1 = {
                            planID: item.planID,
                            install: item,
                            data: data,
                            insID: item.installId,
                            sparetype: item.sparepart,
                            item: this.item,
                            type: this.type,
                            date: this.date,
                            month: this.month,
                            year: this.year,
                        };
                        if (!(this.type == 'PM')) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.modalController.create({
                                component: _update_product_update_product_page__WEBPACK_IMPORTED_MODULE_11__["UpdateProductPage"],
                                //cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    tran: tran_1,
                                    params: params_1
                                }
                            })];
                    case 9:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            var sres = res.data;
                            if (sres == 'success') {
                                console.log('sres', sres);
                                _this.postDataService.postTranService(tran_1).then(function (TranService) {
                                    // console.log(TranService);
                                });
                                var navigationExtras = {
                                    queryParams: {
                                        data: JSON.stringify(params_1)
                                    }
                                };
                                _this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                            }
                            else {
                                _this.NotRecheckAlert();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 10: return [2 /*return*/, _a.sent()];
                    case 11:
                        this.postDataService.postTranService(tran_1).then(function (TranService) {
                            // console.log(TranService);
                        });
                        navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params_1)
                            }
                        };
                        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                        _a.label = 12;
                    case 12:
                        //รายละเอียด
                        if (item.Workfinish == 1) {
                            if (this.type == "CM") {
                                if (item.WorkCloseID == "WorkClose001" || item.WorkCloseID == "WorkClose003") {
                                }
                                else {
                                    params = {
                                        data: data,
                                        newinstallID: item.newinstallID,
                                        installID: item.installId,
                                        tranID: item.tranID,
                                        planID: item.planID,
                                        type: this.type
                                    };
                                    console.log(params);
                                    navigationExtras = {
                                        queryParams: {
                                            data: JSON.stringify(params)
                                        }
                                    };
                                    this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
                                    console.log("sent", navigationExtras);
                                }
                            }
                            else if (this.type != "CM") {
                                params = {
                                    data: data,
                                    installID: item.installId,
                                    tranID: item.tranID,
                                    planID: item.planID,
                                    type: this.type
                                };
                                console.log(params);
                                navigationExtras = {
                                    queryParams: {
                                        data: JSON.stringify(params)
                                    }
                                };
                                this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
                                console.log("sent", navigationExtras);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    DetaillistpmPage.prototype.NotRecheckAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: 'ไม่สามารถส่งข้อมูลได้',
                            //mode: 'ios',
                            color: 'danger',
                            //showCloseButton: true,
                            duration: 3000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetaillistpmPage.prototype.NotPM = function (data, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertController.create({
                            header: 'ไม่เข้าตรวจเช็ค!',
                            message: 'กรุณาระบุสาเหตุการไม่เข้าตรวจเช็ค (PM)',
                            inputs: [
                                {
                                    name: 'detail',
                                    placeholder: 'เช่น: ร้านปิดบริการชั่วคราว',
                                    type: 'text'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'บันทึก',
                                    handler: function (data) {
                                        _this.notPM = data.detail;
                                        var tran = {
                                            AssetID: item.AssetID,
                                            Serial: item.Serial,
                                            planID: item.planID,
                                            empID: _this.empID,
                                            insID: item.installId,
                                            cause: data.detail,
                                            type: _this.type
                                        };
                                        console.log('tran', tran);
                                        _this.postDataService.postTranService(tran).then(function (res) {
                                        });
                                        _this.ngOnInit();
                                    }
                                }
                            ]
                        });
                        return [4 /*yield*/, alert];
                    case 1:
                        (_a.sent()).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetaillistpmPage.prototype.UpdateInprogresss = function () {
        var params = {
            installID: this.insID,
            planID: this.planID,
            typedevice: "UpdateInprogresss",
            empID: this.empID
        };
        console.log(params);
        this.postDataService.postdevice(params).then(function (status) {
            console.log(status);
        });
    };
    //#region Imgbf
    DetaillistpmPage.prototype.Imgbf = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        if (!(this.type == "INSTALL" || this.type == "CM" || this.type == "New")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _job_showimginstall_showimginstall_page__WEBPACK_IMPORTED_MODULE_6__["ShowimginstallPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    installId: item.installId,
                                    empID: this.empID,
                                    planID: item.planID,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region
    DetaillistpmPage.prototype.showSpareHistory = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_requestsparepart_requestsparepart_page__WEBPACK_IMPORTED_MODULE_10__["RequestsparepartPage"],
                            cssClass: 'my-custom-modal-css-pm',
                            componentProps: {
                                empID: this.empID,
                                insID: value.installId,
                                planID: value.planID,
                                ItemsName: value.ItemsName,
                                type: "history"
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region
    DetaillistpmPage.prototype.showSpare = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_requestsparepart_requestsparepart_page__WEBPACK_IMPORTED_MODULE_10__["RequestsparepartPage"],
                            cssClass: 'my-custom-modal-css-pm',
                            componentProps: {
                                empID: this.empID,
                                insID: value.installId,
                                planID: value.planID,
                                ItemsName: value.ItemsName,
                                type: "request"
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }; //#endregion
    //#region alert success
    DetaillistpmPage.prototype.alertSuccess = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'แจ้งเตือน',
                            message: 'บันทึกสำเร็จ',
                            buttons: ['OK']
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
    //#region alert success
    DetaillistpmPage.prototype.alertFail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'แจ้งเตือน',
                            message: 'บันทึกไม่สำเร็จ',
                            buttons: ['OK']
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
    DetaillistpmPage.prototype.SaveSerial = function (value) {
        console.log(value);
        var params = {
            insID: value.installId,
            Type: "UpdateSerial",
            EmpID: this.empID,
            SerialNo: value.SerialNo
        };
        console.log(params);
        this.postDataService.PostCus(params).then(function (status) {
            console.log(status);
        });
    };
    DetaillistpmPage.prototype.SaveSerialBarcode = function (value) {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var barcode = barcodeData;
            if (barcode != null || barcode.text != '') {
                var params = {
                    insID: value.installId,
                    Type: "UpdateSerial",
                    EmpID: _this.empID,
                    SerialNo: barcode.text
                };
                console.log(params);
                _this.postDataService.PostCus(params).then(function (status) {
                    console.log(status);
                    if (status == true) {
                        alert('บันทึกข้อมูล Asset No. เรียบร้อย');
                    }
                    else if (status == false) {
                        alert('Asset No. ซ้ำ !!!');
                    }
                });
                _this.ngOnInit();
            }
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    DetaillistpmPage.prototype.fab = function () {
        console.log('test');
    };
    DetaillistpmPage.prototype.imgice = function (value) {
        console.log(value);
        var params = {
            empID: this.empID,
            insID: value.installId,
            planID: value.planID,
            ItemName: value.ItemsName,
            CustomerName: this.Customername,
        };
        console.log(params);
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        this.navCtrl.navigateForward(['/iceimg'], navigationExtras);
        console.log(navigationExtras);
    };
    DetaillistpmPage.prototype.assign = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                params = {
                    empID: this.empID,
                    insID: value.installId,
                    planID: value.planID,
                    item: this.item,
                    type: this.type,
                    date: this.date,
                    ItemsName: value.ItemsName,
                    Type: "jobrespons"
                };
                navigationExtras = {
                    queryParams: {
                        data: JSON.stringify(params)
                    }
                };
                this.navCtrl.navigateForward(['/jobrespons'], navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    DetaillistpmPage.prototype.saveAssign = function (data) {
        var _this = this;
        console.log(data);
        if (data.date == '' || data.time == '' || data.remark == '') {
            this.alertAssign();
        }
        else {
            var params = {
                insID: this.insID,
                planID: this.planID,
                typedevice: "SaveAssignCM",
                empID: this.empID,
                remark: data.remark,
                time: data.time,
                date: data.date + ' ' + data.time
            };
            console.log(params);
            this.postDataService.postdevice(params).then(function (status) {
                console.log(status);
                if (status == true) {
                    _this.alertSuccess();
                    _this.type == "CM";
                    _this.ngOnInit();
                }
            });
        }
    };
    //#region alert success
    DetaillistpmPage.prototype.alertAssign = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'แจ้งเตือน',
                            message: 'กรุณากรอกข้อมูลให้ครบ',
                            buttons: ['OK']
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
    DetaillistpmPage.prototype.logs = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detaillistpm_log_log_page__WEBPACK_IMPORTED_MODULE_9__["LogPage"],
                            cssClass: 'my-custom-modal-css-pm',
                            componentProps: {
                                empID: this.empID,
                                insID: this.insID,
                                planID: this.planID,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DetaillistpmPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    DetaillistpmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detaillistpm',
            template: __webpack_require__(/*! raw-loader!./detaillistpm.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/joball/detaillistpm/detaillistpm.page.html"),
            styles: [__webpack_require__(/*! ./detaillistpm.page.scss */ "./src/app/page/joball/detaillistpm/detaillistpm.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"],
            _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], DetaillistpmPage);
    return DetaillistpmPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-joball-detaillistpm-detaillistpm-module-es5.js.map