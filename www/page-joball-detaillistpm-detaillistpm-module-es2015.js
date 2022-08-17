(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-joball-detaillistpm-detaillistpm-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/joball/detaillistpm/detaillistpm.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/joball/detaillistpm/detaillistpm.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>ข้อมูลของ {{Customername}} </ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\" *ngFor=\"let item of data\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12\" id=\"\" style=\"padding: 0px;padding-right: 5px;\">\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>ลูกค้า\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\" style=\"padding: 15px;\">\r\n            <div class=\"col-4 text\">ชื่อลูกค้า </div>\r\n            <label class=\"col-8 subtext padding\">{{item.CustomerName}} {{item.CustomerNameEng}}</label>\r\n            <label class=\"col-4 text\">อีเมลล์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Email}}</label>\r\n            <label class=\"col-4 text\">โทรศัพท์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Phone}}</label>\r\n            <label class=\"col-4 text\">แฟกซ์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Fax}}</label>\r\n            <label class=\"col-4 text\">ที่อยู่</label>\r\n            <label class=\"col-8 subtext\">{{item.Address}}</label>\r\n            <label class=\"col-4 text\">ชื่อบิล</label>\r\n            <label class=\"col-8 subtext padding\">{{item.BillName}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-bank\"></i>สำนักงานใหญ่\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\" style=\"padding: 15px\">\r\n            <label class=\"col-4 text\">ชื่อบัญชี</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountName}}</label>\r\n            <label class=\"col-4 text\">ประเภทธุรกิจ</label>\r\n            <label class=\"col-8 subtext padding\">{{item.IndustryType}}</label>\r\n            <label class=\"col-4 text\">อีเมลล์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountEmail}}</label>\r\n            <label class=\"col-4 text\">โทรศัพท์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountPhone}}</label>\r\n            <label class=\"col-4 text\">แฟกซ์</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountFax}}</label>\r\n            <label class=\"col-4 text\">รหัสลูกค้า</label>\r\n            <label class=\"col-8 subtext padding\">{{item.CustomerCode}}</label>\r\n            <label class=\"col-4 text\">ชื่อบิล</label>\r\n            <label class=\"col-8 subtext padding\">{{item.AccountBill}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-user\"></i>พนักงานขาย\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\" style=\"padding: 15px\">\r\n            <label class=\"col-4 text\">สถานะการทำงาน</label>\r\n            <label class=\"col-8 subtext padding\">{{item.WorkStatus}}</label>\r\n            <label class=\"col-4 text\">ประเภทงาน</label>\r\n            <label class=\"col-8 subtext padding\">{{item.WorkType}}</label>\r\n            <label class=\"col-4 text\">ชื่อ</label>\r\n            <label class=\"col-8 subtext padding\">{{item.NameSale}}</label>\r\n            <label class=\"col-4 text\">เพศ</label>\r\n            <label class=\"col-8 subtext padding\">{{item.Gender}}</label>\r\n            <label class=\"col-4 text\">กลุ่มงาน</label>\r\n            <label class=\"col-8 subtext padding\">-</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12\" id=\"\" style=\"padding: 0px;\">\r\n        <div class=\"portlet blue box\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-cube\"></i>สินค้า\r\n            </div>\r\n\r\n          </div>\r\n          <div style=\"padding: 5px;\" *ngFor=\"let data of item.productInstall | keyvalue\">\r\n            <!-- <div (click)=\"click(item, data.value)\"> -->\r\n            <div class=\"row col-12\">\r\n              <div class=\"col-5 text\">สถานะ:</div>\r\n              <div class=\"col-7 subtext\" #lblWait style=\"color: #E78D8D;font-size: 14px;font-weight: bold;\"\r\n                *ngIf=\"data.value.Workfinish == 0; else lblWait\">รอการตรวจสอบ</div>\r\n              <div class=\"col-7 subtext\" #lblSuccess style=\"color: green;font-size: 14px;font-weight: bold;\"\r\n                *ngIf=\"data.value.Workfinish == 1; else lblSuccess\">งานเสร็จแล้ว</div>\r\n              <div class=\"col-7 subtext\" #lblwaiting style=\"color: rgb(35, 7, 248);font-size: 14px;font-weight: bold;\"\r\n                *ngIf=\"data.value.Workfinish == 2; else lblwaiting\">รอลูกค้าประเมิน</div>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <div class=\"col-5 text\">สินค้าที่ติดตั้ง:</div>\r\n              <div class=\"col-7 subtext\">{{data.value.InstallPlanName}}</div>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\">รหัสสินค้า:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ItemCode}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'INSTALL' && data.value.OldAssetName != null\">\r\n              <label class=\"col-5 text\">เครื่องที่รื้อถอน:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.OldAssetName}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'INSTALL'\">\r\n              <label class=\"col-5 text\">เครื่องที่ติดตั้ง:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ItemsName}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType != 'INSTALL'\">\r\n              <label class=\"col-5 text\">ชื่อสินค้า:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ItemsName}}</label>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\">Serial No:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.SerialNo}}</label>\r\n              <!-- <ion-input class=\"col-6\" *ngIf=\"data.value.JobType == 'PM'\" type=\"text\" style=\"padding: 0px!important;padding-left: 5px!important;\" name=\"SerialNo\" [(ngModel)]=\"data.value.SerialNo\"> -->\r\n              <!-- </ion-input> -->\r\n              <!-- <div class=\"col-1\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                    <ion-button size=\"small\" (click)=\"viewpic(item, data.value)\">\r\n                      <ion-icon name=\"view\"></ion-icon>\r\n                    </ion-button>\r\n                  </div> -->\r\n              <!-- <div class=\"col-1\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                  <ion-button size=\"small\" (click)=\"SaveSerial(data.value)\">\r\n                    <ion-icon name=\"save\"></ion-icon>\r\n                  </ion-button>\r\n                </div> -->\r\n              <!-- <div class=\"col-1\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                  <ion-button size=\"small\" (click)=\"SaveSerialBarcode(data.value)\">\r\n                    <ion-icon name=\"barcode\"></ion-icon>\r\n                  </ion-button>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\">Asset No:</label>\r\n              <div class=\"col-7\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                <label>{{data.value.AssetplateSFS}}</label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row col-12\" style=\"margin-bottom: 10px;\">\r\n              <label class=\"col-5 text\"></label>\r\n              <div class=\"col-7\" *ngIf=\"data.value.JobType == 'PM'\">\r\n                <ion-button size=\"small\" (click)=\"SaveSerialBarcode(data.value)\" style=\"margin-top: 0px;\" title=\"สแกน Barcode\">\r\n                  <ion-icon name=\"barcode\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM' || data.value.JobType == 'INSTALL' || data.value.JobType == 'UNINSTALL'\">\r\n              <label class=\"col-5 text\">Case ID:</label>\r\n              <label class=\"col-7 subtext\">{{data.value.ServiceReportNo}}</label>\r\n            </div>\r\n            <div class=\"row col-12\">\r\n              <label class=\"col-5 text\" *ngIf=\"new\">New Serial No:</label>\r\n              <label class=\"col-7 subtext\" *ngIf=\"new\">{{data.value.SerialNoNew}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType != 'PM' && data.value.JobType != 'CM' else pmnot\">\r\n              <label class=\"col-5 text\" #pmnot>ประเภทงาน :</label>\r\n              <label class=\"col-7 subtext\" #pmnot>{{data.value.JobType}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM' else cm\">\r\n              <label class=\"col-5 text\" #cm>ประเภทงาน :</label>\r\n              <label class=\"col-7 subtext\" #pmnot>CM</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'PM' else pm\">\r\n              <label class=\"col-5 text\" #pm>ประเภทงาน :</label>\r\n              <div class=\"col-7 subtext\" [innerHtml]=\"data.value.typePm\" #pm></div>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.RoundFilter != null\">\r\n              <label class=\"col-12 text\" #pm>เปลี่ยนไส้กรอง :</label>\r\n              <label class=\"col-12 subtext\" #pm style=\"font-weight: bold;color:#E78D8D;\" [innerHTML]=\"data.value.RoundFilter\"></label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'PM' && data.value.cause != null && data.value.cause != '' && data.value.Workfinish != 1\">\r\n              <label class=\"col-5 text\" #pm>ไม่เข้าตรวจเช็ค :</label>\r\n              <label class=\"col-7 subtext text-danger\" #pm>{{data.value.cause}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM'\">\r\n              <label class=\"col-5 text\">ปัญหาที่รับแจ้ง :</label>\r\n              <label class=\"col-7 subtext\">{{data.value.Description}}</label>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 1 else cm\">\r\n              <div class=\"col-5 text\" #cm>การปิดงาน :</div>\r\n              <div class=\"col-7 subtext\" #cm>{{data.value.WorkClose}}</div>\r\n            </div>\r\n            <div class=\"row col-12\"\r\n              *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 1 && data.value.WorkCloseID == 'WorkClose004' && data.value.newinstallID != null else cm\">\r\n              <div class=\"col-5 text\" #cm>การเปลี่ยนอุปกรณ์ :</div>\r\n              <div class=\"col-7 subtext\" #cm>{{data.value.TypeChang}}</div>\r\n            </div>\r\n            <div class=\"row col-12\"\r\n              *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 1 && data.value.WorkCloseID == 'WorkClose004' else cm\">\r\n              <div class=\"col-5 text\" #cm>ปัญหาเกิดจาก :</div>\r\n              <div class=\"col-7 subtext\" #cm>{{data.value.ResolutionDetaill}}</div>\r\n            </div>\r\n            <div class=\"row col-12\" *ngIf=\"data.value.sparepart != '' && data.value.JobType == 'PM' else spare\">\r\n              <div class=\"col-5 text\" #spare>อะไหล่ที่ต้องเปลี่ยน :</div>\r\n              <div class=\"col-7 subtext\" #spare>\r\n                <div [innerHTML]=\"data.value.sparepart\"></div>\r\n              </div>\r\n            </div>\r\n            <!-- </div> -->\r\n\r\n            <div class=\"col-12\">\r\n              <ion-button expand=\"block\" size=\"small\" (click)=\"Imgbf(data.value)\" *ngIf=\"imgbefore\">ภาพหน้างาน\r\n              </ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"warning\" size=\"small\" (click)=\"assign(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && data.value.status == 'Assign' else assigns\" #assigns>ตอบรับงาน\r\n              </ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.JobType != 'CM' && data.value.Workfinish == 0 else wait\" #wait>เริ่มงาน</ion-button>\r\n\r\n              <!-- <ion-button expand=\"block\" color=\"primary\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.JobType != 'CM' && data.value.Workfinish == 0 else wait\" #wait>ตรวจสอบข้อมูล</ion-button> -->\r\n\r\n              <ion-button expand=\"block\" color=\"danger\" size=\"small\" (click)=\"NotPM(item, data.value)\"\r\n                *ngIf=\"data.value.JobType == 'PM' && data.value.Workfinish == 0 else wait\" #wait>ไม่เข้าตรวจเช็ค</ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 2 else waiting\" #waiting>ดำเนินการต่อ\r\n              </ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"scan(item, data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 0 && data.value.status != 'Assign'\" #wait>\r\n                เริ่มงาน</ion-button>\r\n\r\n              <!-- <ion-button expand=\"block\" size=\"small\" (click)=\"showSpare(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'PM' && data.value.Workfinish == 0\">เบิกอะไหล่</ion-button>\r\n\r\n              <ion-button expand=\"block\" size=\"small\" (click)=\"showSpareHistory(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'PM'\">\r\n                ประวัติการเบิกอะไหล่</ion-button> -->\r\n\r\n              <!-- <ion-button expand=\"block\" size=\"small\" (click)=\"showSpare(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && data.value.Workfinish == 0 && type != 'New'\">เบิกอะไหล่\r\n              </ion-button> -->\r\n\r\n              <ion-button expand=\"block\" size=\"small\" (click)=\"showSpareHistory(data.value)\"\r\n                *ngIf=\"data.value.JobType == 'CM' && type != 'New'\">\r\n                ประวัติการเบิกอะไหล่</ion-button>\r\n\r\n              <!-- <ion-button expand=\"block\" color=\"warning\" size=\"small\" (click)=\"imgice(data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 1 && data.value.JobType == 'INSTALL' else ice\" #ice>ชั่งน้ำแข็ง\r\n              </ion-button> -->\r\n\r\n              <!-- <ion-button expand=\"block\" color=\"warning\" size=\"small\" (click)=\"viewpic(item, data.value)\"\r\n                *ngIf=\"data.value.JobType != 'UNINSTALL' && data.value.isSerial == true else sn\" #sn>ดูรูป Serial\r\n              </ion-button>  -->\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"logs()\"\r\n                *ngIf=\"data.value.JobType != 'PM' && data.value.status != 'Assign'\">สถานะการติดตามงาน</ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"click(item, data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 1 && (data.value.JobType == 'PM' || data.value.JobType == 'UNINSTALL')\">\r\n                รายละเอียด</ion-button>\r\n\r\n              <ion-button expand=\"block\" color=\"success\" size=\"small\" (click)=\"click(item, data.value)\"\r\n                *ngIf=\"data.value.Workfinish == 1 && data.value.JobType == 'CM' && data.value.WorkCloseID == 'WorkClose004'\">\r\n                รายละเอียด</ion-button>\r\n            </div>\r\n            <hr />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"fab()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"alert\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detaillistpm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detaillistpm.page */ "./src/app/page/joball/detaillistpm/detaillistpm.page.ts");







const routes = [
    {
        path: '',
        component: _detaillistpm_page__WEBPACK_IMPORTED_MODULE_6__["DetaillistpmPage"]
    }
];
let DetaillistpmPageModule = class DetaillistpmPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
let DetaillistpmPage = class DetaillistpmPage {
    //#endregion
    //#region constructor
    constructor(route, navCtrl, postDataService, storageService, alertController, modalController, barcodeScanner, toastCtrl) {
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
        this.route.queryParams.subscribe(params => {
            this.myId = JSON.parse(params["data"]);
            this.detailPM = JSON.parse(params["data"]);
            this.items = this.myId.items;
            console.log('this.myId', this.myId);
            if (this.myId != "undefined") {
                this.item = this.myId.item;
                this.type = this.myId.type;
                this.date = this.myId.date;
                this.datacm = this.myId.datacm;
                if (this.item == undefined || this.item == "undefined" || this.item == 'undefined') {
                    this.cusID = this.myId.cusID;
                    this.planID = this.myId.planID;
                    this.workfinish = this.myId.workfinish;
                    this.month = this.myId.month;
                    this.year = this.myId.year;
                }
                else {
                    this.cusID = this.item.cusID;
                    this.planID = this.item.planID;
                    this.workfinish = this.item.WorkFinish;
                    this.month = this.item.month;
                    this.year = this.item.year;
                    if (this.cusID == undefined || this.cusID == "undefined" || this.cusID == 'undefined') {
                        this.cusID = this.myId.cusID;
                        this.planID = this.myId.planID;
                        this.workfinish = this.myId.workfinish;
                        this.month = this.myId.month;
                        this.year = this.myId.year;
                    }
                }
                if (this.type == "PM") {
                    this.imgbefore = false;
                }
                if (this.type == "getPM") {
                    this.detaillistpm.PlanID = this.planID,
                        this.detaillistpm.jobtype = "SuccessPM";
                    this.postDataService.postGetList(this.detaillistpm).then(work => {
                        this.data = work;
                        for (let i = 0; i < this.data.length; i++) {
                            this.Customername = this.data[i].CustomerName;
                            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                            for (let j = 0; j < this.data[i].productInstall.length; j++) {
                            }
                        }
                    });
                    this.type = "PM";
                }
                else if (this.type == "getIN") {
                    this.imgbf = true;
                    this.detaillistpm.PlanID = this.planID;
                    this.detaillistpm.jobtype = "SuccessIN";
                    this.postDataService.postGetList(this.detaillistpm).then(work => {
                        this.data = work;
                        for (let i = 0; i < this.data.length; i++) {
                            this.Customername = this.data[i].CustomerName;
                            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                        }
                    });
                    this.type = "INSTALL";
                }
                else if (this.type == "getCM") {
                    this.imgbf = true;
                    this.detaillistpm.PlanID = this.planID;
                    this.detaillistpm.jobtype = "SuccessCM";
                    this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
                        this.data = work;
                        for (let i = 0; i < this.data.length; i++) {
                            this.Customername = this.data[i].CustomerName;
                            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                        }
                    });
                    let workclose = {
                        jobtype: "getworkclose"
                    };
                    this.postDataService.SaveCaseAll(workclose).then(data => {
                        this.getworkclose = data;
                        for (let i = 0; i < this.getworkclose.length; i++) {
                            console.log(this.getworkclose);
                            if (i == 1) {
                                this.getworkclose1 = this.getworkclose[1].SystemDataName;
                                this.getworkclosevalue1 = this.getworkclose[1].SystemID;
                                this.text = 'ปิดงาน';
                            }
                            else if (i == 3) {
                                this.getworkclose2 = this.getworkclose[3].SystemDataName;
                                this.getworkclosevalue2 = this.getworkclose[3].SystemID;
                                this.text = 'ตกลง';
                            }
                            else if (i == 0) {
                                this.getworkclose3 = this.getworkclose[0].SystemDataName;
                                this.getworkclosevalue3 = this.getworkclose[0].SystemID;
                                this.text = 'บันทึก';
                            }
                        }
                    });
                    this.type = "CM";
                }
                else if (this.type == "getUN") {
                    this.detaillistpm.PlanID = this.planID;
                    this.detaillistpm.jobtype = "SuccessUN";
                    this.postDataService.postGetList(this.detaillistpm).then(work => {
                        this.data = work;
                        for (let i = 0; i < this.data.length; i++) {
                            this.Customername = this.data[i].CustomerName;
                            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                            for (let j = 0; j < this.data[i].productInstall.length; j++) {
                                console.log(this.data[i].productInstall[j]);
                            }
                        }
                    });
                    this.type = "UNINSTALL";
                }
                //this.ngOnInit();
            }
            else {
                alert("ไม่พบข้อมูล");
            }
            if (this.type == "CM") {
                this.imgbf = true;
                this.detaillistpm.cusID = this.cusID;
                this.detaillistpm.planID = this.planID;
                this.detaillistpm.month = this.month;
                this.detaillistpm.year = this.year;
                this.detaillistpm.type = this.type;
                this.detaillistpm.date = this.date;
                this.detaillistpm.empid = this.empID;
                this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
                    this.data = work;
                    for (let i = 0; i < this.data.length; i++) {
                        this.Customername = this.data[i].CustomerName;
                        this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                    }
                    console.log('this.data', this.data);
                });
                let workclose = {
                    jobtype: "getworkclose"
                };
                this.postDataService.SaveCaseAll(workclose).then(data => {
                    this.getworkclose = data;
                    for (let i = 0; i < this.getworkclose.length; i++) {
                        if (i == 1) {
                            this.getworkclose1 = this.getworkclose[1].SystemDataName;
                            this.getworkclosevalue1 = this.getworkclose[1].SystemID;
                            this.text = 'ปิดงาน';
                        }
                        else if (i == 3) {
                            this.getworkclose2 = this.getworkclose[3].SystemDataName;
                            this.getworkclosevalue2 = this.getworkclose[3].SystemID;
                            this.text = 'ตกลง';
                        }
                        else if (i == 0) {
                            this.getworkclose3 = this.getworkclose[0].SystemDataName;
                            this.getworkclosevalue3 = this.getworkclose[0].SystemID;
                            this.text = 'บันทึก';
                        }
                    }
                });
            }
            else if (this.type == "INSTALL") {
                this.imgbf = true;
                this.route.queryParams.subscribe(params => {
                    this.items = JSON.parse(params["data"]);
                });
                console.log('this.items install', this.items);
                this.detaillistpm.cusID = this.items.item.cusID;
                this.detaillistpm.planID = this.items.item.planID;
                this.detaillistpm.month = this.items.item.month;
                this.detaillistpm.year = this.items.item.year;
                this.detaillistpm.type = this.type;
                this.detaillistpm.date = this.date;
                this.detaillistpm.empid = this.items.empID;
                console.log('this.detaillistpm install', this.detaillistpm);
                this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
                    this.data = work;
                    for (let i = 0; i < this.data.length; i++) {
                        this.Customername = this.data[i].CustomerName;
                        this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                    }
                });
            }
            else {
                this.route.queryParams.subscribe(params => {
                    this.items = JSON.parse(params["data"]);
                });
                console.log('this.items', this.items);
                this.detaillistpm.cusID = this.items.item.cusID;
                this.detaillistpm.planID = this.items.item.planID;
                this.detaillistpm.month = this.items.item.month;
                this.detaillistpm.year = this.items.item.year;
                this.detaillistpm.type = this.items.type;
                this.detaillistpm.date = this.items.date;
                this.detaillistpm.empid = this.items.empID;
                console.log('this.detaillistpm', this.detaillistpm);
                this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
                    this.data = work;
                    for (let i = 0; i < this.data.length; i++) {
                        this.Customername = this.data[i].CustomerName;
                        this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                        console.log('this.data[i].productInstall', this.data[i].productInstall);
                    }
                });
            }
        });
    }
    //#endregion
    //#region start
    ngOnInit() {
        // if (this.type == "CM") {
        //   this.imgbf = true
        //   // this.storageService.getUser().then(items => {
        //   //   this.items = items;
        //   //   for (let i = 0; i < this.items.length; i++) {
        //   //     this.empID = this.items[i].empID;
        //   //   }
        //   //   this.detaillistpm.cusID = this.cusID;
        //   //   this.detaillistpm.planID = this.planID;
        //   //   this.detaillistpm.month = this.month;
        //   //   this.detaillistpm.year = this.year;
        //   //   this.detaillistpm.type = this.type;
        //   //   this.detaillistpm.date = this.date;
        //   //   this.detaillistpm.empid = this.empID;
        //   //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
        //   //     this.data = work;
        //   //     for (let i = 0; i < this.data.length; i++) {
        //   //       this.Customername = this.data[i].CustomerName;
        //   //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
        //   //     }
        //   //     console.log('this.data', this.data);
        //   //   });
        //   // });
        //   this.detaillistpm.cusID = this.cusID;
        //   this.detaillistpm.planID = this.planID;
        //   this.detaillistpm.month = this.month;
        //   this.detaillistpm.year = this.year;
        //   this.detaillistpm.type = this.type;
        //   this.detaillistpm.date = this.date;
        //   this.detaillistpm.empid = this.empID;
        //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
        //     this.data = work;
        //     for (let i = 0; i < this.data.length; i++) {
        //       this.Customername = this.data[i].CustomerName;
        //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
        //     }
        //     console.log('this.data', this.data);
        //   });
        //   //console.log('this.items', this.items);
        //   let workclose = {
        //     jobtype: "getworkclose"
        //   }
        //   this.postDataService.SaveCaseAll(workclose).then(data => {
        //     this.getworkclose = data
        //     for (let i = 0; i < this.getworkclose.length; i++) {
        //       if (i == 1) {
        //         this.getworkclose1 = this.getworkclose[1].SystemDataName;
        //         this.getworkclosevalue1 = this.getworkclose[1].SystemID;
        //         this.text = 'ปิดงาน'
        //       } else if (i == 3) {
        //         this.getworkclose2 = this.getworkclose[3].SystemDataName;
        //         this.getworkclosevalue2 = this.getworkclose[3].SystemID;
        //         this.text = 'ตกลง'
        //       } else if (i == 0) {
        //         this.getworkclose3 = this.getworkclose[0].SystemDataName;
        //         this.getworkclosevalue3 = this.getworkclose[0].SystemID;
        //         this.text = 'บันทึก'
        //       }
        //     }
        //   });
        // }
        // else if (this.type == "INSTALL") {
        //   this.imgbf = true
        //   // this.storageService.getUser().then(items => {
        //   //   this.items = items;
        //   //   for (let i = 0; i < this.items.length; i++) {
        //   //     this.empID = this.items[i].empID;
        //   //   }
        //   //   this.detaillistpm.cusID = this.cusID;
        //   //   this.detaillistpm.planID = this.planID;
        //   //   this.detaillistpm.month = this.month;
        //   //   this.detaillistpm.year = this.year;
        //   //   this.detaillistpm.type = this.type;
        //   //   this.detaillistpm.date = this.date;
        //   //   this.detaillistpm.empid = this.empID;
        //   //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
        //   //     this.data = work;
        //   //     for (let i = 0; i < this.data.length; i++) {
        //   //       this.Customername = this.data[i].CustomerName;
        //   //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
        //   //       for (let j = 0; j < this.data[i].productInstall.length; j++) {
        //   //       }
        //   //     }
        //   //   });
        //   // });
        //   this.route.queryParams.subscribe(params => {
        //     this.items = JSON.parse(params["data"]);
        //   });
        //   console.log('this.items', this.items); 
        //   this.detaillistpm.cusID = this.items.item.cusID;
        //   this.detaillistpm.planID = this.items.item.planID;
        //   this.detaillistpm.month = this.items.item.month;
        //   this.detaillistpm.year = this.items.item.year;
        //   this.detaillistpm.type = this.type;
        //   this.detaillistpm.date = this.date;
        //   this.detaillistpm.empid = this.items.empID;
        //   console.log('this.detaillistpm', this.detaillistpm);      
        //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
        //     this.data = work;
        //     for (let i = 0; i < this.data.length; i++) {
        //       this.Customername = this.data[i].CustomerName;
        //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
        //       // for (let j = 0; j < this.data[i].productInstall.length; j++) {
        //       // }
        //     }
        //   });     
        // }
        // else {
        //   this.route.queryParams.subscribe(params => {
        //     this.items = JSON.parse(params["data"]);
        //   });
        //   console.log('this.items', this.items);
        //   this.detaillistpm.cusID = this.items.item.cusID;
        //   this.detaillistpm.planID = this.items.item.planID;
        //   this.detaillistpm.month = this.items.item.month;
        //   this.detaillistpm.year = this.items.item.year;
        //   this.detaillistpm.type = this.items.type;
        //   this.detaillistpm.date = this.items.date;
        //   this.detaillistpm.empid = this.items.empID;
        //   console.log('this.detaillistpm', this.detaillistpm);
        //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
        //     this.data = work;
        //     for (let i = 0; i < this.data.length; i++) {
        //       this.Customername = this.data[i].CustomerName;
        //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
        //       console.log('this.data[i].productInstall', this.data[i].productInstall);
        //       // for (let j = 0; j < this.data[i].productInstall.length; j++) {
        //       // }
        //     }
        //   });
        //   // this.storageService.getUser().then(items => {
        //   //   this.items = items;
        //   //   for (let i = 0; i < this.items.length; i++) {
        //   //     this.empID = this.items[i].empID;
        //   //   }
        //   //   this.detaillistpm.cusID = this.cusID;
        //   //   this.detaillistpm.planID = this.planID;
        //   //   this.detaillistpm.month = this.month;
        //   //   this.detaillistpm.year = this.year;
        //   //   this.detaillistpm.type = this.type;
        //   //   this.detaillistpm.date = this.date;
        //   //   this.detaillistpm.empid = this.empID;
        //   //   this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
        //   //     this.data = work;
        //   //     for (let i = 0; i < this.data.length; i++) {
        //   //       this.Customername = this.data[i].CustomerName;
        //   //       this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
        //   //       console.log('this.data[i].productInstall', this.data[i].productInstall);
        //   //       for (let j = 0; j < this.data[i].productInstall.length; j++) {
        //   //       }
        //   //     }
        //   //   });
        //   // });
        // }
    }
    //#endregion
    popupclose(item, header, workclose) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(item);
            const modal = yield this.modalController.create({
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
                    date: this.date,
                    items: this.items
                }
            });
            modal.onDidDismiss().then(data => {
            });
            return yield modal.present();
        });
    }
    viewpic(data, item) {
        let params = {
            empID: this.empID,
            data: data,
            item: item,
            type: this.type,
        };
        console.log(params);
        const navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        this.navCtrl.navigateForward(['/picserial'], navigationExtras);
    }
    scan(data, item) {
        if (this.type == "PM" || this.type == "CM") {
            let params = {
                installID: item.installId,
                typedevice: "checkserial"
            };
            this.postDataService.postdevice(params).then(statusserial => {
                this.statusserial = statusserial;
                if (this.statusserial == false) {
                    this.click(data, item);
                }
                else {
                    let tran = {
                        AssetID: item.AssetID,
                        Serial: item.Serial,
                        planID: item.planID,
                        empID: this.empID,
                        insID: item.installId,
                        type: this.type
                    };
                    this.postDataService.postTranService(tran).then(TranService => {
                        let params = {
                            empID: this.empID,
                            data: data,
                            item: item,
                            type: this.type,
                        };
                        const navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        this.navCtrl.navigateForward(['/picserial'], navigationExtras);
                    });
                }
            });
        }
        else {
            this.click(data, item);
        }
    }
    //#region click
    click(data, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Data', data);
            console.log('item', item);
            if (item.Workfinish == 0 || item.Workfinish == 2) {
                if (item.status == "Pending") {
                    const alert = yield this.alertController.create({
                        message: 'กรุณาติดต่อแอดมินบริษัทสุพีเรีย',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
                else if (this.type == "CM") {
                    if (item.tranID != null) {
                        console.log('item.WorkCloseID', item.WorkCloseID);
                        let tran = {
                            AssetID: item.AssetID,
                            Serial: item.Serial,
                            planID: item.planID,
                            empID: this.items.empID,
                            insID: item.installId,
                            type: this.type
                        };
                        console.log('tran', tran);
                        this.postDataService.postTranService(tran).then(TranService => {
                            // console.log(TranService);
                        });
                        let params = {
                            empID: this.items.empID,
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
                        console.log('params', params);
                        const navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                        console.log("sent", navigationExtras);
                    }
                    else {
                        let alertChoose = yield this.alertController.create({
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
                                    handler: value => {
                                        if (value == this.getworkclosevalue1) {
                                            let params = {
                                                planID: item.planID,
                                                installID: item.installId,
                                                empID: this.empID,
                                                jobtype: "saveclose",
                                                workclose: value
                                            };
                                            console.log('params ' + value, params);
                                            this.postDataService.SaveCaseAll(params).then(result => {
                                                if (result == true) {
                                                    this.imgbf = true;
                                                    this.detaillistpm.PlanID = item.planID;
                                                    this.detaillistpm.jobtype = "SuccessCM";
                                                    this.postDataService.postDetailListpm(this.detaillistpm).then(work => {
                                                        this.data = work;
                                                        for (let i = 0; i < this.data.length; i++) {
                                                            this.Customername = this.data[i].CustomerName;
                                                            this.data[i].productInstall = JSON.parse(this.data[i].productInstall);
                                                        }
                                                    });
                                                    this.alertSuccess();
                                                    //this.navCtrl.navigateForward(['/menu/overview']);
                                                }
                                                if (data == false) {
                                                    this.alertFail();
                                                }
                                            });
                                        }
                                        else if (value == this.getworkclosevalue2) {
                                            this.UpdateInprogresss();
                                            let tran = {
                                                AssetID: item.AssetID,
                                                Serial: item.Serial,
                                                planID: item.planID,
                                                empID: this.items.empID,
                                                insID: item.installId,
                                                type: this.type,
                                                workclose: value
                                            };
                                            console.log('tran ' + value, tran);
                                            this.postDataService.postTranService(tran).then(TranService => {
                                            });
                                            let params = {
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
                                                empID: this.items.empID,
                                            };
                                            console.log('params', params);
                                            const navigationExtras = {
                                                queryParams: {
                                                    data: JSON.stringify(params)
                                                }
                                            };
                                            this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                                            console.log("sent", navigationExtras);
                                        }
                                        else if (value == this.getworkclosevalue3) {
                                            this.popupclose(item, this.getworkclose3, value);
                                        }
                                    }
                                }]
                        });
                        yield alertChoose.present();
                    }
                }
                if (item.tranID != null && this.type != "CM") {
                    let tran = {
                        AssetID: item.AssetID,
                        Serial: item.Serial,
                        planID: item.planID,
                        empID: this.items.empID,
                        insID: item.installId,
                        cause: item.cause,
                        type: this.type
                    };
                    this.postDataService.postTranService(tran).then(TranService => {
                        // console.log(TranService);
                    });
                    let params = {
                        empID: this.items.empID,
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
                    const navigationExtras = {
                        queryParams: {
                            data: JSON.stringify(params)
                        }
                    };
                    this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                }
                else if ((item.tranID == null && this.type != "CM")) {
                    let tran = {
                        AssetID: item.AssetID,
                        Serial: item.Serial,
                        planID: item.planID,
                        empID: this.items.empID,
                        insID: item.installId,
                        cause: item.cause,
                        type: this.type
                    };
                    let params = {
                        empID: this.items.empID,
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
                    if (this.type == 'PM') {
                        const modal = yield this.modalController.create({
                            component: _update_product_update_product_page__WEBPACK_IMPORTED_MODULE_11__["UpdateProductPage"],
                            cssClass: 'my-custom-modal-css-stock',
                            componentProps: {
                                tran: tran,
                                params: params
                            }
                        });
                        modal.onDidDismiss().then(res => {
                            let sres = res.data;
                            if (sres == 'success') {
                                console.log('sres', sres);
                                this.postDataService.postTranService(tran).then(TranService => {
                                    // console.log(TranService);
                                });
                                const navigationExtras = {
                                    queryParams: {
                                        data: JSON.stringify(params)
                                    }
                                };
                                this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                            }
                            else {
                                this.NotRecheckAlert();
                            }
                        });
                        return yield modal.present();
                    }
                    else {
                        //alert();
                        this.postDataService.postTranService(tran).then(TranService => {
                            // console.log(TranService);
                        });
                        const navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                    }
                    // const alert = await this.alertController.create({
                    //   header: 'แจ้งเตือน!',
                    //   message: 'ต้องการเริ่มทำงาน',
                    //   buttons: [
                    //     {
                    //       text: 'ตกลง',
                    //       handler: () => {
                    //         let tran = {
                    //           AssetID: item.AssetID,
                    //           Serial: item.Serial,
                    //           planID: item.planID,
                    //           empID: this.empID,
                    //           insID: item.installId,
                    //           cause: item.cause,
                    //           type: this.type
                    //         }
                    //         console.log('tran', tran);
                    //         this.postDataService.postTranService(tran).then(TranService => {
                    //           // console.log(TranService);
                    //         });
                    //         let params = {
                    //           planID: item.planID,
                    //           install: item,
                    //           data: data,
                    //           insID: item.installId,
                    //           sparetype: item.sparepart,
                    //           item: this.item,
                    //           type: this.type,
                    //           date: this.date,
                    //           month: this.month,
                    //           year: this.year,
                    //         }
                    //         console.log(params);
                    //         const navigationExtras: NavigationExtras = {
                    //           queryParams: {
                    //             data: JSON.stringify(params)
                    //           }
                    //         };
                    //         this.navCtrl.navigateForward(['joball/listpm/detailofdetaillistpm'], navigationExtras);
                    //         console.log("sent", navigationExtras);
                    //       }
                    //     }, {
                    //       text: 'ยกเลิก',
                    //       role: 'cancel',
                    //       cssClass: 'secondary',
                    //       handler: (blah) => {
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                }
            }
            //รายละเอียด
            if (item.Workfinish == 1) {
                if (this.type == "CM") {
                    if (item.WorkCloseID == "WorkClose001" || item.WorkCloseID == "WorkClose003") {
                    }
                    else {
                        let params = {
                            empID: this.items.empID,
                            data: data,
                            newinstallID: item.newinstallID,
                            installID: item.installId,
                            tranID: item.tranID,
                            planID: item.planID,
                            type: this.type
                        };
                        console.log('params', params);
                        const navigationExtras = {
                            queryParams: {
                                data: JSON.stringify(params)
                            }
                        };
                        this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
                    }
                }
                else if (this.type != "CM") {
                    let params = {
                        empID: this.items.empID,
                        data: data,
                        installID: item.installId,
                        tranID: item.tranID,
                        planID: item.planID,
                        type: this.type
                    };
                    console.log(params);
                    const navigationExtras = {
                        queryParams: {
                            data: JSON.stringify(params)
                        }
                    };
                    this.navCtrl.navigateForward(['/job/jobdetail'], navigationExtras);
                    console.log("sent", navigationExtras);
                }
            }
        });
    }
    //#endregion
    NotRecheckAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: 'ไม่สามารถส่งข้อมูลได้',
                //mode: 'ios',
                color: 'danger',
                //showCloseButton: true,
                duration: 3000,
            });
            toast.present();
        });
    }
    NotPM(data, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //#region 
            let alert = this.alertController.create({
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
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'บันทึก',
                        handler: data => {
                            this.notPM = data.detail;
                            let tran = {
                                AssetID: item.AssetID,
                                Serial: item.Serial,
                                planID: item.planID,
                                empID: this.empID,
                                insID: item.installId,
                                cause: data.detail,
                                type: this.type
                            };
                            console.log('tran', tran);
                            this.postDataService.postTranService(tran).then(res => {
                            });
                            this.ngOnInit();
                        }
                    }
                ]
            });
            (yield alert).present();
            //#endregion
            // const modal = await this.modalController.create({
            //   component: NotCheckedPage,
            //   cssClass: 'my-custom-modal-css-pm',
            //   componentProps: {
            //     AssetID: item.AssetID,
            //     Serial: item.Serial,
            //     planID: item.planID,
            //     empID: this.empID,
            //     insID: item.installId,
            //     cause: data.detail,
            //     type: this.type
            //   }
            // });
            // modal.onDidDismiss().then(data => {
            // });
            // return await modal.present();
        });
    }
    UpdateInprogresss() {
        let params = {
            installID: this.insID,
            planID: this.planID,
            typedevice: "UpdateInprogresss",
            empID: this.empID
        };
        console.log(params);
        this.postDataService.postdevice(params).then(status => {
            console.log(status);
        });
    }
    //#region Imgbf
    Imgbf(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(item);
            if (this.type == "INSTALL" || this.type == "CM" || this.type == "New") {
                const modal = yield this.modalController.create({
                    component: _job_showimginstall_showimginstall_page__WEBPACK_IMPORTED_MODULE_6__["ShowimginstallPage"],
                    cssClass: 'my-custom-modal-css',
                    componentProps: {
                        installId: item.installId,
                        empID: this.items.empID,
                        planID: item.planID,
                    }
                });
                return yield modal.present();
            }
        });
    }
    //#endregion
    //#region
    showSpareHistory(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _detailofdetaillistpm_requestsparepart_requestsparepart_page__WEBPACK_IMPORTED_MODULE_10__["RequestsparepartPage"],
                cssClass: 'my-custom-modal-css-pm',
                componentProps: {
                    empID: this.items.empID,
                    insID: value.installId,
                    planID: value.planID,
                    ItemsName: value.ItemsName,
                    type: "history"
                }
            });
            return yield modal.present();
            // console.log(value);
            // let params = {
            //   empID: this.empID,
            //   insID: value.installId,
            //   planID: value.planID,
            //   item: this.item,
            //   type: this.type,
            //   date: this.date,
            //   ItemsName: value.ItemsName,
            //   Type: "history"
            // }
            // const navigationExtras: NavigationExtras = {
            //   queryParams: {
            //     data: JSON.stringify(params)
            //   }
            // };
            // this.navCtrl.navigateForward(['/sparepart'], navigationExtras);
        });
    }
    //#endregion
    //#region
    showSpare(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _detailofdetaillistpm_requestsparepart_requestsparepart_page__WEBPACK_IMPORTED_MODULE_10__["RequestsparepartPage"],
                cssClass: 'my-custom-modal-css-pm',
                componentProps: {
                    empID: this.empID,
                    insID: value.installId,
                    planID: value.planID,
                    ItemsName: value.ItemsName,
                    type: "request"
                }
            });
            return yield modal.present();
            // let params = {
            //   empID: this.empID,
            //   insID: value.installId,
            //   planID: value.planID,
            //   item: this.item,
            //   type: this.type,
            //   date: this.date,
            //   ItemsName: value.ItemsName,
            //   Type: "Sparepart",
            //   data: this.detailPM
            // }
            // console.log('detail params', params);
            // const navigationExtras: NavigationExtras = {
            //   queryParams: {
            //     data: JSON.stringify(params)
            //   }
            // };
            // this.navCtrl.navigateForward(['/sparepart'], navigationExtras);
            // console.log(navigationExtras);
        });
    } //#endregion
    //#region alert success
    alertSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'แจ้งเตือน',
                message: 'บันทึกสำเร็จ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    //#endregion
    //#region alert success
    alertFail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'แจ้งเตือน',
                message: 'บันทึกไม่สำเร็จ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    //#endregion
    SaveSerial(value) {
        console.log(value);
        let params = {
            insID: value.installId,
            Type: "UpdateSerial",
            EmpID: this.empID,
            SerialNo: value.SerialNo
        };
        console.log(params);
        this.postDataService.PostCus(params).then(status => {
            console.log(status);
        });
    }
    SaveSerialBarcode(value) {
        this.barcodeScanner.scan().then(barcodeData => {
            let barcode = barcodeData;
            if (barcode != null || barcode.text != '') {
                let params = {
                    insID: value.installId,
                    Type: "UpdateSerial",
                    EmpID: this.empID,
                    SerialNo: barcode.text
                };
                console.log(params);
                this.postDataService.PostCus(params).then(status => {
                    console.log(status);
                    if (status == true) {
                        alert('บันทึกข้อมูล Asset No. เรียบร้อย');
                    }
                    else if (status == false) {
                        alert('Asset No. ซ้ำ !!!');
                    }
                });
                //this.ngOnInit();
            }
        }).catch(err => {
            alert('error ' + err);
            //console.log('Error', err);
        });
    }
    fab() {
        console.log('test');
    }
    imgice(value) {
        console.log(value);
        let params = {
            empID: this.empID,
            insID: value.installId,
            planID: value.planID,
            ItemName: value.ItemsName,
            CustomerName: this.Customername,
        };
        console.log(params);
        const navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        this.navCtrl.navigateForward(['/iceimg'], navigationExtras);
        console.log(navigationExtras);
    }
    assign(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let params = {
                empID: this.empID,
                insID: value.installId,
                planID: value.planID,
                item: this.item,
                type: this.type,
                date: this.date,
                ItemsName: value.ItemsName,
                Type: "jobrespons",
                items: this.items
            };
            const navigationExtras = {
                queryParams: {
                    data: JSON.stringify(params)
                }
            };
            this.navCtrl.navigateForward(['/jobrespons'], navigationExtras);
            // console.log('this.empID',this.empID);
            // const modal = await this.modalController.create({
            //   component: JobresponsPage,
            //   cssClass: 'my-custom-modal-css',
            //   componentProps: {
            //     empID: this.empID,
            //     planID: value.planID,
            //     Type: "jobrespons"
            //   }      
            // });
            // modal.onDidDismiss().then(res => {
            //   this.planID = res.data;
            //   this.postDataService.CheckJobResponse(this.planID).then(res => {
            //     this.jobResponse = res;
            //     console.log('this.jobResponse', this.jobResponse.StatusID);
            //     if (this.jobResponse.StatusID == 'Response') {
            //       this.navCtrl.navigateRoot('/menu/overview');
            //     }
            //   });
            // })
            // return await modal.present();
            // console.log(navigationExtras);
            // let alert = this.alertController.create({
            //   message: 'ตอบรับงาน',
            //   inputs: [
            //     {
            //       name: 'date',
            //       placeholder: 'วันที่',
            //       type: 'date'
            //     },
            //     {
            //       name: 'time',
            //       placeholder: 'เวลา',
            //       type: 'time',
            //     },
            //     {
            //       name: 'remark',
            //       placeholder: 'หมายเหตุ',
            //       type: 'text'
            //     }
            //   ],
            //   buttons: [
            //     {
            //       text: 'ยกเลิก',
            //       role: 'cancel',
            //       handler: data => {
            //       }
            //     },
            //     {
            //       text: 'บันทึก',
            //       handler: data => {
            //         this.saveAssign(data)
            //       }
            //     }
            //   ]
            // });
            // (await alert).present();
        });
    }
    saveAssign(data) {
        console.log(data);
        if (data.date == '' || data.time == '' || data.remark == '') {
            this.alertAssign();
        }
        else {
            let params = {
                insID: this.insID,
                planID: this.planID,
                typedevice: "SaveAssignCM",
                empID: this.empID,
                remark: data.remark,
                time: data.time,
                date: data.date + ' ' + data.time
            };
            console.log(params);
            this.postDataService.postdevice(params).then(status => {
                console.log(status);
                if (status == true) {
                    this.alertSuccess();
                    this.type == "CM";
                    this.ngOnInit();
                }
            });
        }
    }
    //#region alert success
    alertAssign() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'แจ้งเตือน',
                message: 'กรุณากรอกข้อมูลให้ครบ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    //#endregion
    logs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _detaillistpm_log_log_page__WEBPACK_IMPORTED_MODULE_9__["LogPage"],
                cssClass: 'my-custom-modal-css-pm',
                componentProps: {
                    empID: this.items.empID,
                    insID: this.insID,
                    planID: this.planID,
                }
            });
            modal.onDidDismiss().then(data => {
                console.log(data);
            });
            return yield modal.present();
        });
    }
};
DetaillistpmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=page-joball-detaillistpm-detaillistpm-module-es2015.js.map