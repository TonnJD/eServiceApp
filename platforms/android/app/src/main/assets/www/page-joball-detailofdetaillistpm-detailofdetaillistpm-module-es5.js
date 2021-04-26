(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-joball-detailofdetaillistpm-detailofdetaillistpm-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <ion-title>{{worktype}}: {{ItemsName}}</ion-title>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\" style=\"padding: 5px;\">\r\n      <div class=\"col-lg-3\" style=\"padding: 0px;\">\r\n        <div class=\"row\" style=\"padding-left:15px;\">\r\n          <div class=\"col-12 hidden\" style=\"padding: 0px;\">\r\n            <div class=\"portlet box blue\">\r\n              <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                  <i class=\"fa fa-bar-chart\"></i>สถานะ\r\n                </div>\r\n              </div>\r\n              <div class=\"portlet-body\" style=\"margin: 0px;\">\r\n                <div class=\"portlet light \">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <p class=\"profile-desc-text\" style=\"text-align: center; padding: 5px;\">รอการตรวจสอบ</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12\" style=\"padding: 0px; padding-right:2px;\">\r\n            <div class=\"portlet box blue\">\r\n              <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                  <i class=\"fa fa-clock-o\"></i>สถานะและเวลาทำงาน\r\n                </div>\r\n              </div>\r\n              <div class=\"portlet-body\">\r\n                <iframe [src]=\"url\" style=\"width:100%;border:0px;background-color: white;\"></iframe>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 hidden\" style=\"padding: 0px;\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-bar-chart\"></i>สถานะ\r\n              </div>\r\n            </div>\r\n            <div class=\"portlet-body\" style=\"margin: 0px;\">\r\n              <div class=\"portlet light \">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"profile-desc-text\" style=\"text-align: center; padding: 5px;\">รอการตรวจสอบ</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" style=\"padding: 0px;\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-cube\"></i>สินค้า\r\n              </div>\r\n            </div>\r\n            <div class=\"portlet-body\" style=\"margin: 0px;\">\r\n              <div class=\"portlet light \">\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <p class=\"profile-desc-text\">สินค้าที่ติดตั้ง:</p>\r\n                    <p class=\"profile-desc-text\">รหัสสินค้า:</p>\r\n                    <p class=\"profile-desc-text\" *ngIf=\"jobtype != 'INSTALL'\">ชื่อสินค้า:</p>\r\n                    <p class=\"profile-desc-text\" *ngIf=\"jobtype == 'INSTALL' && OldItemsName != null\">เครื่องที่รื้อถอน:\r\n                    </p>\r\n                    <p class=\"profile-desc-text\" *ngIf=\"jobtype == 'INSTALL'\">เครื่องที่ติดตั้ง:</p>\r\n                    <p class=\"profile-desc-text\">Serial No:</p>\r\n                  </div>\r\n                  <div class=\"col-8\">\r\n                    <p class=\"profile-desc-text\">{{InstallPlanName}}</p>\r\n                    <p class=\"profile-desc-text\">{{ItemCode}}</p>\r\n                    <p class=\"profile-desc-text\" *ngIf=\"jobtype != 'INSTALL'\">{{ItemsName}}</p>\r\n                    <p class=\"profile-desc-text\" *ngIf=\"jobtype == 'INSTALL' && OldItemsName != null\">{{OldItemsName}}\r\n                    </p>\r\n                    <p class=\"profile-desc-text\" *ngIf=\"jobtype == 'INSTALL'\">{{ItemsName}}</p>\r\n                    <p class=\"profile-desc-text\">{{SerialNo}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" style=\"padding: 0px;\" *ngIf=\"isdevice && jobtype == 'CM'\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-cube\"></i>เครื่องที่เปลี่ยน\r\n              </div>\r\n            </div>\r\n            <div class=\"portlet-body\" style=\"margin: 0px;\">\r\n              <div class=\"portlet light\" *ngFor=\"let i of devices;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <p class=\"profile-desc-text\">สินค้าที่ติดตั้ง:</p>\r\n                    <p class=\"profile-desc-text\">ชื่อสินค้า:</p>\r\n                    <p class=\"profile-desc-text\">รหัสสินค้า:</p>\r\n                    <p class=\"profile-desc-text\">Serial No:</p>\r\n                  </div>\r\n                  <div class=\"col-8\">\r\n                    <p class=\"profile-desc-text\">{{i.InstallPlanName}}</p>\r\n                    <p class=\"profile-desc-text\">{{i.ItemCode}}</p>\r\n                    <p class=\"profile-desc-text\">{{i.ItemsName}}</p>\r\n                    <p class=\"profile-desc-text\">{{i.SerialNo}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" style=\"padding: 0px;\" *ngIf=\"isspare && jobtype == 'CM'\">\r\n          <div class=\"portlet box blue\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                <i class=\"fa fa-cube\"></i>อะไหล่ที่เปลี่ยน\r\n              </div>\r\n            </div>\r\n            <div class=\"portlet-body\" style=\"margin: 0px;\">\r\n              <div class=\"portlet light\" *ngFor=\"let i of spares;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <p class=\"profile-desc-text\">ชื่ออุปกรณ์เสริม :</p>\r\n                    <p class=\"profile-desc-text\">Part No. :</p>\r\n                  </div>\r\n                  <div class=\"col-8\">\r\n                    <p class=\"profile-desc-text\">{{i.Name}}</p>\r\n                    <p class=\"profile-desc-text\">{{i.Serial}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9\" style=\"padding: 0px;\">\r\n        <div class=\"portlet box blue\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption\">\r\n              <i class=\"fa fa-sticky-note-o\"></i>รายการตรวจเช็ค\r\n              <ion-label>ร้าน {{CustomerName}} {{planDate}} </ion-label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle1\">\r\n            <div class=\"portlet light \">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"caption\">\r\n                    <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                    <span style=\"font-size: 1.1em!important;\" class=\"caption-subject font-blue-sharp bold uppercase\">\r\n                      {{title1}} </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src1\" *ngIf=\"isShowImage1\" />\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src2\" *ngIf=\"isShowImage2\" />\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src3\" *ngIf=\"isShowImage3\" />\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src4\" *ngIf=\"isShowImage4\" />\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src5\" *ngIf=\"isShowImage5\" />\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src6\" *ngIf=\"isShowImage6\" />\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src7\" *ngIf=\"isShowImage7\" />\r\n                </div>\r\n                <div class=\"col-3 text-center\">\r\n                  <img [src]=\"img.src8\" *ngIf=\"isShowImage8\" />\r\n                </div>\r\n\r\n                <div class=\"col-1 text-center\">\r\n                </div>\r\n\r\n                <div class=\" col-2 text-center\" *ngIf=\"isInstall\">\r\n                  <div #take1 *ngIf=\"isShow1 == false ; else take1\">\r\n                    <ion-fab vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                      <ion-fab-button (click)=\"Take(1)\">\r\n                        <ion-icon name=\"camera\"></ion-icon>\r\n                      </ion-fab-button>\r\n                    </ion-fab>\r\n                  </div>\r\n                  <img [src]=\"photo1\" *ngIf=\"isShow1\" (click)=\"Take(1)\">\r\n                </div>\r\n\r\n                <div class=\"col-2 text-center\" *ngIf=\"isInstall\">\r\n                  <div #take2 *ngIf=\"isShow2 == false ; else take2\">\r\n                    <ion-fab vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                      <ion-fab-button (click)=\"Take(2)\">\r\n                        <ion-icon name=\"camera\"></ion-icon>\r\n                      </ion-fab-button>\r\n                    </ion-fab>\r\n                  </div>\r\n                  <img [src]=\"photo2\" *ngIf=\"isShow2\" (click)=\"Take(2)\" />\r\n                </div>\r\n\r\n                <div class=\"col-2 text-center\" *ngIf=\"isInstall\">\r\n                  <div #take3 *ngIf=\"isShow3 == false ; else take3\">\r\n                    <ion-fab vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                      <ion-fab-button (click)=\"Take(3)\">\r\n                        <ion-icon name=\"camera\"></ion-icon>\r\n                      </ion-fab-button>\r\n                    </ion-fab>\r\n                  </div>\r\n                  <img [src]=\"photo3\" *ngIf=\"isShow3\" (click)=\"Take(3)\">\r\n                </div>\r\n\r\n                <div class=\"col-2 text-center\" *ngIf=\"isInstall\">\r\n                  <div #take4 *ngIf=\"isShow4 == false ; else take4\">\r\n                    <ion-fab vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                      <ion-fab-button (click)=\"Take(4)\">\r\n                        <ion-icon name=\"camera\"></ion-icon>\r\n                      </ion-fab-button>\r\n                    </ion-fab>\r\n                  </div>\r\n                  <img [src]=\"photo4\" *ngIf=\"isShow4\" (click)=\"Take(4)\">\r\n                </div>\r\n\r\n                <div class=\"col-2 text-center\" *ngIf=\"isInstall\">\r\n                  <div #take5 *ngIf=\"isShow5 == false ; else take5\">\r\n                    <ion-fab vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                      <ion-fab-button (click)=\"Take(5)\">\r\n                        <ion-icon name=\"camera\"></ion-icon>\r\n                      </ion-fab-button>\r\n                    </ion-fab>\r\n                  </div>\r\n                  <img [src]=\"photo5\" *ngIf=\"isShow5\" (click)=\"Take(5)\">\r\n                </div>\r\n\r\n                <div class=\"col-12\" *ngIf=\"isPM\">\r\n                  <div class=\"row\" style=\"margin-bottom: 10px;\">\r\n                    <div class=\"col-3 text-center\" style=\"margin-bottom: 80px;\" *ngFor=\"let p of productphoto\">\r\n                      <div>{{p.Name}}</div>\r\n                      <div #take *ngIf=\"p.show == false ; else take\">\r\n                        <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                          <ion-fab-button (click)=\"TakePM(p)\">\r\n                            <ion-icon name=\"camera\"></ion-icon>\r\n                          </ion-fab-button>\r\n                        </ion-fab>\r\n                      </div>\r\n                      <img [src]=\"apiServer_url + p.img\" *ngIf=\"p.show\" (click)=\"TakePM(p)\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <div class=\"text-center\" style=\"padding-left: 10px;\">\r\n                      <button (click)=\"showimgremark()\" class=\"btn default\" style=\"width: 100%;\">\r\n                        รูปภาพเพิ่มเติม </button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"isimgRemark\" style=\"margin-top: 10px;margin-bottom: 10px;;\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-1 text-center\">\r\n                      </div>\r\n\r\n                      <div class=\" col-2 text-center\" *ngFor=\"let p of photoremark\">\r\n                        <div #takere *ngIf=\"p.show == false ; else takere\">\r\n                          <ion-fab vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"TakePMRe(p)\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"apiServer_url + p.img\" *ngIf=\"p.show\" (click)=\"TakePMRe(p)\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle2\">\r\n            <div class=\"portlet box light\">\r\n              <div class=\"portlet-title\">\r\n                <div class=\"caption\">\r\n                  <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                  <span class=\"caption-subject font-blue-sharp bold uppercase\" style=\"font-size: 1.1em!important;\">\r\n                    {{title2}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"portlet-body form\">\r\n                <div class=\"horizontal-form\">\r\n                  <div class=\"form-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-2 text-center\" style=\"margin-bottom: 80px;\">\r\n                        <div>รูปภาพที่ 1</div>\r\n                        <div *ngIf=\"isShow1 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(1)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo1\" *ngIf=\"isShow1\" (click)=\"Take(1)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\" style=\"margin-bottom: 80px;\">\r\n                        <div>รูปภาพที่ 2</div>\r\n                        <div *ngIf=\"isShow2 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(2)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo2\" *ngIf=\"isShow2\" (click)=\"Take(2)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\" style=\"margin-bottom: 80px;\">\r\n                        <div>รูปภาพที่ 3</div>\r\n                        <div *ngIf=\"isShow3 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(3)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo3\" *ngIf=\"isShow3\" (click)=\"Take(3)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\" style=\"margin-bottom: 80px;\">\r\n                        <div>รูปภาพที่ 4</div>\r\n                        <div *ngIf=\"isShow4 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(4)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo4\" *ngIf=\"isShow4\" (click)=\"Take(4)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\" style=\"margin-bottom: 80px;\">\r\n                        <div>รูปภาพที่ 5</div>\r\n                        <div *ngIf=\"isShow5 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(5)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo5\" *ngIf=\"isShow5\" (click)=\"Take(5)\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-2 text-center\">\r\n                        <div>รูปภาพที่ 6</div>\r\n                        <div *ngIf=\"isShow6 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(6)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo6\" *ngIf=\"isShow6\" (click)=\"Take(6)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\">\r\n                        <div>รูปภาพที่ 7</div>\r\n                        <div *ngIf=\"isShow7 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(7)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo7\" *ngIf=\"isShow7\" (click)=\"Take(7)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\">\r\n                        <div>รูปภาพที่ 8</div>\r\n                        <div *ngIf=\"isShow8 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(8)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo8\" *ngIf=\"isShow8\" (click)=\"Take(8)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\">\r\n                        <div>รูปภาพที่ 9</div>\r\n                        <div *ngIf=\"isShow9 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(9)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo9\" *ngIf=\"isShow9\" (click)=\"Take(9)\">\r\n                      </div>\r\n                      <div class=\"col-md-2 text-center\">\r\n                        <div>รูปภาพที่ 10</div>\r\n                        <div *ngIf=\"isShow10 == false\">\r\n                          <ion-fab style=\"margin-top: 25px;\" vertical=\"bottom\" horizontal=\"center\" class=\"button-native\">\r\n                            <ion-fab-button (click)=\"Take(10)\" [disabled]=\"!isenabledTakeback\">\r\n                              <ion-icon name=\"camera\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab>\r\n                        </div>\r\n                        <img [src]=\"photo10\" *ngIf=\"isShow10\" (click)=\"Take(10)\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle3\">\r\n            <div class=\"portlet light \">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"caption\" style=\"margin-top: 20px;\">\r\n                    <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                    <span class=\"caption-subject font-blue-sharp bold uppercase\" style=\"font-size: 1.1em!important;\">\r\n                      {{title3}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div #nospare class=\"col-md-6 text-center\"\r\n                  style=\"padding-left: 10px;margin-top: 5px;margin-bottom: 10px;\"\r\n                  *ngIf=\"jobtype != 'INSTALL' else nospare\">\r\n                  <button (click)=\"check()\" [disabled]=\"!isenabledcheck\" class=\"btn default\">\r\n                    คลิกเพื่อตรวจเช็ครายการ</button>\r\n                </div>\r\n                <!-- <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;margin-top: 5px;margin-bottom: 10px;\"\r\n                  *ngIf=\"jobtype == 'PM'\">\r\n                  <button (click)=\"changsparepm()\" [disabled]=\"!isenabledcheck\" class=\"btn default\">\r\n                    เปลี่ยนอะไหล่\r\n                  </button>\r\n                </div> -->\r\n                <div #device class=\"col-md-6 text-center\"\r\n                  style=\"padding-left: 10px;margin-top: 5px;margin-bottom: 10px;\"\r\n                  *ngIf=\"SerialNoInstall == '-' && jobtype == 'INSTALL' else device\">\r\n                  <button (click)=\"changspare('device')\" [disabled]=\"!isenabledadddevice\" class=\"btn default\">\r\n                    เพิ่มเครื่อง </button>\r\n                </div>\r\n                <div #spare class=\"col-md-6 text-center\" style=\"padding-left: 10px;margin-top: 5px;margin-bottom: 10px;\"\r\n                  *ngIf=\"jobtype == 'INSTALL' else spare\">\r\n                  <button (click)=\"changspare()\" [disabled]=\"!isenabledadddevice\" class=\"btn default\">\r\n                    เพิ่มอุปกรณ์เสริม </button>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;margin-bottom: 10px;\">\r\n                  <!-- <div *ngIf=\"sparetype != '' && jobtype == 'PM'; else sparepart\">\r\n                    <button (click)=\"changspare()\" [disabled]=\"!isenabledspare\" class=\"btn default\" #sparepart>\r\n                      รายการเปลี่ยนอะไหล่ </button>\r\n                  </div> -->\r\n                  <div *ngIf=\"jobtype == 'CM' && request == null; else CM\" style=\"margin-top: 5px;margin-bottom: 10px;\">\r\n                    <!-- <button (click)=\"takerequest()\" class=\"btn default\" #CM [disabled]=\"!isenabledrequest\">\r\n                      ใบเบิกอะไหล่ </button> -->\r\n                    <!-- <img *ngIf=\"jobtype == 'CM' && request != null ; else imgrequest\" [src]=\"request\"\r\n                  (click)=\"takerequest()\" #imgrequest> -->\r\n\r\n                    <!-- <button (click)=\"showSpare()\" class=\"btn default\" #CM [disabled]=\"!isenabledrequest\"> ขอเบิกอะไหล่\r\n                    </button> -->\r\n                    <button (click)=\"requestSparepart()\" class=\"btn default\" [disabled]=\"!isenabledrequest\"> ขอเสนอราคา\r\n                      / ขอเบิกอะไหล่\r\n                    </button>\r\n                    <div *ngIf=\"jobtype != 'PM'\" style=\"margin-top: 5px;margin-bottom: 5px;\">\r\n                      <button class=\"btn default\" (click)=\"response()\"\r\n                        style=\"background-color: rgb(245, 197, 76);color: white;\">\r\n                        แจ้งปัญหากรณีไม่สามารถปิดงานได้</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle7\">\r\n            <div class=\"portlet light \">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"caption\" style=\"margin-top: 20px;\">\r\n                    <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                    <span class=\"caption-subject font-blue-sharp bold uppercase\" style=\"font-size: 1.1em!important;\">\r\n                      {{title7}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;margin-bottom: 10px;\">\r\n                  <button class=\"btn default\" (click)=\"openModalcustomereva()\" [disabled]=\"!isenabledcuseva\">\r\n                    คลิกเพื่อกรอกข้อมูล </button>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                  <button class=\"btn default\" (click)=\"onBackToPageMain()\" [disabled]=\"!isenabledeva\"\r\n                    style=\"background-color: #3880FF;color: white;\">\r\n                    ย้อนกลับหน้าหลัก (รอลูกค้าปิดงาน) </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle5\">\r\n            <div class=\"portlet light \">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"caption\" style=\"margin-top: 15px;\">\r\n                    <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                    <span class=\"caption-subject font-blue-sharp bold uppercase\" style=\"font-size: 1.1em!important;\">\r\n                      {{title5}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                  <button class=\"btn default\" [disabled]=\"!isenabledeva\" (click)=\"clickeva()\">\r\n                    คลิกเพื่อกรอกข้อมูล </button>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle4\">\r\n            <div class=\"portlet light \">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"caption\" style=\"margin-top: 15px;\">\r\n                    <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                    <span class=\"caption-subject font-blue-sharp bold uppercase\" style=\"font-size: 1.1em!important;\">\r\n                      {{title4}}</span>\r\n                    <div *ngIf=\"showSig\">\r\n                      <img class=\"sig\" [src]=\"sign\" style=\"width: 50% !important; border: 1px solid black;\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                  <button #btnhiddensig class=\"btn default\" (click)=\"Modal()\" [disabled]=\"!isenabledsig\"\r\n                    *ngIf=\"showSig == false; else btnhiddensig\"> ลายเซ็นต์ผู้รับผิดชอบ\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle6\">\r\n            <div class=\"portlet light \">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"caption\" style=\"margin-top: 15px;\">\r\n                    <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                    <span class=\"caption-subject font-blue-sharp bold uppercase\" style=\"font-size: 1.1em!important;\">\r\n                      {{title6}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                  <button class=\"btn default\" *ngIf=\"jobtype != 'PM' else spare\" #spare (click)=\"openModalcustomerpw()\"\r\n                    [disabled]=\"!isenabledcuspass\">\r\n                    ความคิดเห็นจากลูกค้า </button>\r\n                  <button class=\"btn default\" *ngIf=\"jobtype == 'PM' else all\" #all (click)=\"openModalcustomerpw()\"\r\n                    [disabled]=\"!isenabledcuspass\">\r\n                    รหัสยืนยันตัวตนลูกค้า </button>\r\n                </div>\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"portlet-body\" style=\"margin: 0px;\" *ngIf=\"isenabledtitle8\">\r\n            <div class=\"portlet light \">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"caption\">\r\n                    <i class=\"fa fa-map-pin font-blue-sharp\"></i>\r\n                    <span class=\"caption-subject font-blue-sharp bold uppercase\" style=\"font-size: 1.1em!important;\">\r\n                      {{title8}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 text-center\" #btnSuccess style=\"padding-left: 10px;\"\r\n                  *ngIf=\"IsWaitsave == false; else btnSuccess\">\r\n                  <button class=\"btn default\" [disabled]=\"!isenabledsave\" (click)=\"saveData()\">\r\n                    ยืนยันการปิดงาน </button>\r\n                </div>\r\n                <div class=\"col-6 subtext text-center\" #lblSuccess\r\n                  style=\"color: green;font-size: 14px;font-weight: bold;\" *ngIf=\"IsWaitsave == true; else lblSuccess\">\r\n                  ระบบกำลังบันทึกข้อมูล กรุณารอสักครู่.....</div>\r\n                <div class=\"col-md-6 text-center\" style=\"padding-left: 10px;\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"log()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"alert\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DetailofdetaillistpmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailofdetaillistpmPageModule", function() { return DetailofdetaillistpmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detailofdetaillistpm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailofdetaillistpm.page */ "./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.ts");







var routes = [
    {
        path: '',
        component: _detailofdetaillistpm_page__WEBPACK_IMPORTED_MODULE_6__["DetailofdetaillistpmPage"]
    }
];
var DetailofdetaillistpmPageModule = /** @class */ (function () {
    function DetailofdetaillistpmPageModule() {
    }
    DetailofdetaillistpmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detailofdetaillistpm_page__WEBPACK_IMPORTED_MODULE_6__["DetailofdetaillistpmPage"]]
        })
    ], DetailofdetaillistpmPageModule);
    return DetailofdetaillistpmPageModule;
}());



/***/ }),

/***/ "./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #EEEEEE;\n  font-size: 0.9em;\n}\n\nion-select {\n  font-size: 1em !important;\n  padding: 5px 7px 5px 0 !important;\n  max-width: 50% !important;\n}\n\n.title {\n  font-size: 1.5em;\n  font-weight: bold;\n}\n\n.icon {\n  padding: 20px;\n  text-align: center;\n  border-radius: 2px !important;\n}\n\np {\n  padding: 5px;\n  margin: 0px;\n  font-size: 0.9em;\n}\n\n.button-native {\n  top: 0px !important;\n}\n\n.btn {\n  text-align: center;\n  font-size: 0.9em;\n  background-color: #D6D7D7;\n  border-radius: 3px !important;\n  width: 80%;\n}\n\n.sig {\n  width: 25%;\n  height: 20%;\n}\n\n.caption {\n  font-size: 0.9em !important;\n  padding: 5px;\n}\n\nspan {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9qb2JhbGwvZGV0YWlsb2ZkZXRhaWxsaXN0cG0vRTpcXEdpdEh1YlxcZVNlcnZpY2VBcHAvc3JjXFxhcHBcXHBhZ2VcXGpvYmFsbFxcZGV0YWlsb2ZkZXRhaWxsaXN0cG1cXGRldGFpbG9mZGV0YWlsbGlzdHBtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9qb2JhbGwvZGV0YWlsb2ZkZXRhaWxsaXN0cG0vZGV0YWlsb2ZkZXRhaWxsaXN0cG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRE1BO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FES0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0ZKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURvQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNqQ0o7O0FEZ0ZBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUM3RUo7O0FEK0VBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FDNUVKOztBRDhFQTtFQUNJLGdCQUFBO0FDM0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9qb2JhbGwvZGV0YWlsb2ZkZXRhaWxsaXN0cG0vZGV0YWlsb2ZkZXRhaWxsaXN0cG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi8vIC5jb250YWluZXItZmx1aWQge1xyXG4vLyAgICAgcGFkZGluZzogMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuLy8gfVxyXG5pb24tc2VsZWN0e1xyXG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweCA3cHggNXB4IDAgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxucHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG4uYnV0dG9uLW5hdGl2ZSB7XHJcbiAgICB0b3A6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLmJ0bmxpbmUge1xyXG4vLyAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNENkQ3RDc7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm1hcmdpbiB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubGlzdGNoZWNrIHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5jYW1lcmEge1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLnRleHQge1xyXG4vLyAgICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZEN0Q3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4vLyAuc3RhdHVzIHtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5oZWFkIHtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50aW1lIHtcclxuLy8gICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuLy8gLndhaXQge1xyXG4vLyAgICAgcGFkZGluZzogMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjllbTtcclxuLy8gICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZHVjdCB7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIC5kZXRhaWxwcm9kdWN0IHtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbi8vICAgICBsaW5lLWhlaWdodDogMC45ZW07XHJcbi8vIH1cclxuLnNpZ3tcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxufVxyXG4uY2FwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5zcGFue1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4IDAgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2RDdENztcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5zaWcge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNhcHRpb24ge1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailofdetaillistpmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailofdetaillistpmPage", function() { return DetailofdetaillistpmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detailofdetaillistpm_signature_signature_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detailofdetaillistpm/signature/signature.page */ "./src/app/page/joball/detailofdetaillistpm/signature/signature.page.ts");
/* harmony import */ var _detailofdetaillistpm_customerevaluation_customerevaluation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detailofdetaillistpm/customerevaluation/customerevaluation.page */ "./src/app/page/joball/detailofdetaillistpm/customerevaluation/customerevaluation.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../post-data.service */ "./src/app/post-data.service.ts");
/* harmony import */ var _detailofdetaillistpm_customerpassword_customerpassword_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../detailofdetaillistpm/customerpassword/customerpassword.page */ "./src/app/page/joball/detailofdetaillistpm/customerpassword/customerpassword.page.ts");
/* harmony import */ var _detailofdetaillistpm_changsparepart_changsparepart_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../detailofdetaillistpm/changsparepart/changsparepart.page */ "./src/app/page/joball/detailofdetaillistpm/changsparepart/changsparepart.page.ts");
/* harmony import */ var _detailofdetaillistpm_checklist_checklist_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../detailofdetaillistpm/checklist/checklist.page */ "./src/app/page/joball/detailofdetaillistpm/checklist/checklist.page.ts");
/* harmony import */ var _detailofdetaillistpm_checklistcm_checklistcm_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../detailofdetaillistpm/checklistcm/checklistcm.page */ "./src/app/page/joball/detailofdetaillistpm/checklistcm/checklistcm.page.ts");
/* harmony import */ var _detailofdetaillistpm_requestsparepart_requestsparepart_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../detailofdetaillistpm/requestsparepart/requestsparepart.page */ "./src/app/page/joball/detailofdetaillistpm/requestsparepart/requestsparepart.page.ts");
/* harmony import */ var _detailofdetaillistpm_checkevaluation_checkevaluation_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../detailofdetaillistpm/checkevaluation/checkevaluation.page */ "./src/app/page/joball/detailofdetaillistpm/checkevaluation/checkevaluation.page.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _page_detaillistpm_log_log_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../page/detaillistpm/log/log.page */ "./src/app/page/detaillistpm/log/log.page.ts");



















var DetailofdetaillistpmPage = /** @class */ (function () {
    //#endregion
    //#region constructor
    function DetailofdetaillistpmPage(camera, modalController, route, navCtrl, sanitizer, storageService, alertController, auth, postDataService, toastCtrl) {
        var _this = this;
        this.camera = camera;
        this.modalController = modalController;
        this.route = route;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.storageService = storageService;
        this.alertController = alertController;
        this.auth = auth;
        this.postDataService = postDataService;
        this.toastCtrl = toastCtrl;
        this.title1 = "รายการที่ 1 ถ่ายภาพก่อนการตรวจสอบ";
        this.title2 = "รายการที่ 2 ถ่ายภาพหลังการตรวจสอบ";
        this.title3 = "รายการที่ 3 รายการที่ต้องตรวจเช็ค";
        this.title4 = "รายการที่ 5 ลายเซ็นต์ผู้รับผิดชอบ";
        this.title5 = "รายการที่ 4 ประเมินการทำงาน";
        this.title6 = "รายการที่ 6 สรุปผลการตรวจเช็คและยืนยันการปิดงาน";
        this.title7 = "รายการที่ 7 แบบประเมินร้านค้า";
        this.title8 = "รายการที่ 8 บันทึกข้อมูลและส่งข้อมูลเข้าระบบ";
        this.isenabledtitle1 = true;
        this.isenabledtitle2 = true;
        this.isenabledtitle3 = true;
        this.isenabledtitle4 = true;
        this.isenabledtitle5 = true;
        this.isenabledtitle6 = true;
        this.isenabledtitle7 = true;
        this.isenabledtitle8 = true;
        this.isenabledcheck = false;
        this.isenabledspare = false;
        this.isenabledrequest = false;
        this.isenabledTakeback = false;
        this.isenabledeva = false;
        this.isenabledsig = false;
        this.isenabledcuspass = false;
        this.isenabledcuseva = false;
        this.isenabledadddevice = false;
        this.isnotPM = true;
        this.isPM = false;
        this.status1 = "";
        this.status2 = "";
        this.status3 = "";
        this.status4 = "";
        this.status5 = "";
        this.status6 = "";
        this.status7 = "";
        this.status8 = "";
        this.status9 = "";
        this.status10 = "";
        this.isShowImage = false;
        this.isTake1 = true;
        this.isShow1 = false;
        this.isTake2 = true;
        this.isShow2 = false;
        this.isTake3 = true;
        this.isShow3 = false;
        this.isTake4 = true;
        this.isShow4 = false;
        this.isTake5 = true;
        this.isShow5 = false;
        this.isTake6 = true;
        this.isShow6 = false;
        this.isTake7 = true;
        this.isShow7 = false;
        this.isTake8 = true;
        this.isShow8 = false;
        this.isTake9 = true;
        this.isShow9 = false;
        this.isTake10 = true;
        this.isShow10 = false;
        this.isShowrequest = false;
        this.isenabledsave = false;
        this.isInstall = true;
        this.showSig = false;
        this.Minute = 0;
        this.Hours = 0;
        this.time = 0;
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 960,
            targetHeight: 1067,
        };
        this.galleryOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 960,
            targetHeight: 1067,
        };
        this.booimg1 = false;
        this.booimg2 = false;
        this.booimg3 = false;
        this.booimg4 = false;
        this.booimg5 = false;
        this.booimg6 = false;
        this.booimg7 = false;
        this.booimg8 = false;
        this.boo1 = false;
        this.boo2 = false;
        this.boo3 = false;
        this.boo4 = false;
        this.boo5 = false;
        this.boo6 = false;
        this.boo7 = false;
        this.boo8 = false;
        this.boo9 = false;
        this.boo10 = false;
        this.boo11 = false;
        this.boo12 = false;
        this.isShowImage1 = false;
        this.isShowImage2 = false;
        this.isShowImage3 = false;
        this.isShowImage4 = false;
        this.isShowImage5 = false;
        this.isShowImage6 = false;
        this.isShowImage7 = false;
        this.isShowImage8 = false;
        this.SerialNoInstall = '';
        this.myDate = new Date().toString();
        this.isdevice = false;
        this.isspare = false;
        this.isimgRemark = false;
        this.IsWaitsave = false;
        this.ishiddensig = false;
        this.isQuotation = false;
        this.isRequest = false;
        this.isBreak = false;
        this.DateStart = new Date().toString();
        this.tran = [];
        this.img = [];
        this.imginstall = [];
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.empID = _this.items[i].empID;
                console.log(_this.empID);
            }
        });
        this.apiServer_url = this.postDataService.apiServer_url;
        this.checkimgPM = false;
        this.CheckimgPM();
        this.route.queryParams.subscribe(function (params) {
            _this.myId = JSON.parse(params["data"]);
            _this.item = _this.myId.item;
            _this.type = _this.myId.type;
            _this.date = _this.myId.date;
            _this.planmonth = _this.myId.month;
            _this.planyear = _this.myId.year;
            _this.install = _this.myId.install;
            _this.cusID = _this.myId.data.cusID;
            _this.CustomerName = _this.myId.data.CustomerName;
            _this.CustomerNameEng = _this.myId.data.CustomerNameEng;
            _this.sparetype = _this.myId.sparetype;
            _this.planID = _this.install.planID;
            _this.InstallPlanName = _this.install.InstallPlanName;
            _this.SerialNo = _this.install.SerialNo;
            _this.SerialNoInstall = _this.install.SerialNo;
            _this.ItemsName = _this.install.ItemsName;
            _this.OldItemsName = _this.install.OldAssetName;
            _this.ItemCode = _this.install.ItemCode;
            _this.ProductCode = _this.install.ProductCode;
            _this.password = _this.install.Password;
            _this.installID = _this.install.installId;
            _this.Category = _this.install.Category;
            _this.planDate = _this.install.planDate;
            _this.jobtype = _this.install.JobType;
            _this.url = sanitizer.bypassSecurityTrustResourceUrl(_this.postDataService.apiServer_url + 'Web/TabletCountTime.aspx' + '?planID=' + _this.planID + "&installID=" + _this.installID);
            console.log('this.myId', _this.myId);
            if (_this.type == 'CM') {
                _this.postDataService.UpdateInprogress(_this.planID).then(function (res) {
                });
                _this.sentCM = _this.myId.sentCM;
                console.log('this.sentCM', _this.sentCM);
            }
            _this.postDataService.checkBI(_this.planID, _this.installID).then(function (data) {
                //console.log('checkBI count', data[0].count);
                if (data[0].count > 0) {
                    _this.isenabledcuseva = true;
                }
                else {
                    _this.isenabledcuseva = false;
                }
            });
        });
    }
    //#endregion
    DetailofdetaillistpmPage.prototype.requestSparepart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_requestsparepart_requestsparepart_page__WEBPACK_IMPORTED_MODULE_13__["RequestsparepartPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                empID: this.empID,
                                planID: this.planID,
                                install: this.installID,
                                InstallPlanName: this.InstallPlanName,
                                ItemsName: this.ItemsName,
                                ItemCode: this.ItemCode,
                                SerialNo: this.SerialNo,
                                Cat: this.Category,
                                type: this.jobtype,
                                sentCM: this.sentCM,
                                isQuotation: this.isQuotation,
                                isRequest: this.isRequest,
                                request: this.requesText
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dis) {
                            _this.isQuotation = dis.data.isQuotation;
                            _this.isRequest = dis.data.isRequest;
                            _this.requesText = dis.data.request;
                            _this.isBreak = dis.data.isBreak;
                            console.log('this.isQuotation', _this.isQuotation);
                            console.log('this.isRequest', _this.isRequest);
                            console.log('this.requesText', _this.requesText);
                            console.log('this.isBreak', _this.isBreak);
                            // if (data.data.type == 'submit') {
                            //   this.onBackToPageMain();
                            // }
                            //this.onBackToPageMain();
                            // let params = {
                            //   date: this.sentCM.date,
                            //   item: this.sentCM.item,
                            //   type: this.sentCM.type
                            // }
                            // const navigationExtras: NavigationExtras = {
                            //   queryParams: {
                            //     data: JSON.stringify(params)
                            //   }
                            // };
                            // this.navCtrl.navigateRoot('joball/listpm/detaillistpm', navigationExtras);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#region start
    DetailofdetaillistpmPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.myId = JSON.parse(params["data"]);
            _this.item = _this.myId.item;
            _this.type = _this.myId.type;
            _this.date = _this.myId.date;
            _this.planmonth = _this.myId.month;
            _this.planyear = _this.myId.year;
            _this.install = _this.myId.install;
            _this.cusID = _this.myId.data.cusID;
            _this.CustomerName = _this.myId.data.CustomerName;
            _this.CustomerNameEng = _this.myId.data.CustomerNameEng;
            _this.sparetype = _this.myId.sparetype;
            _this.planID = _this.install.planID;
            _this.InstallPlanName = _this.install.InstallPlanName;
            _this.SerialNo = _this.install.SerialNo;
            _this.SerialNoInstall = _this.install.SerialNo;
            _this.ItemsName = _this.install.ItemsName;
            _this.OldItemsName = _this.install.OldAssetName;
            _this.ItemCode = _this.install.ItemCode;
            _this.ProductCode = _this.install.ProductCode;
            _this.password = _this.install.Password;
            _this.installID = _this.install.installId;
            _this.Category = _this.install.Category;
            _this.planDate = _this.install.planDate;
            _this.jobtype = _this.install.JobType;
            var params1 = {
                installID: _this.installID,
                planID: _this.planID,
                typedevice: "chkpassword"
            };
            _this.postDataService.postdevice(params1).then(function (chkpassword) {
                _this.password = chkpassword;
            });
        });
        var params = {
            planID: this.planID,
            installID: this.installID,
            empID: this.empID,
            jobtype: "Photo"
        };
        console.log(params);
        this.postDataService.SaveCaseAll(params).then(function (Photo) {
            _this.Photo = Photo;
            console.log('this.Photo', _this.Photo);
            if (_this.Photo != null) {
                for (var v = 0; v < _this.Photo.length; v++) {
                    if (_this.Photo[v].type == "step1_pic1") {
                        _this.photo1 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id1 = _this.Photo[v].id;
                        _this.status1 = "1";
                        _this.boo1 = true;
                        console.log(_this.boo1);
                        console.log("bf1", _this.photo1);
                    }
                    else if (_this.Photo[v].type == "step1_pic2") {
                        _this.photo2 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id2 = _this.Photo[v].id;
                        _this.status2 = "1";
                        _this.boo2 = true;
                        console.log("bf2", _this.photo2);
                    }
                    else if (_this.Photo[v].type == "step1_pic3") {
                        _this.photo3 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id3 = _this.Photo[v].id;
                        _this.status3 = "1";
                        _this.boo3 = true;
                        console.log("bf3", _this.photo3);
                    }
                    else if (_this.Photo[v].type == "step1_pic4") {
                        _this.photo4 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id4 = _this.Photo[v].id;
                        _this.status4 = "1";
                        _this.boo4 = true;
                        console.log("bf4", _this.photo4);
                    }
                    else if (_this.Photo[v].type == "step1_pic5") {
                        _this.photo5 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id5 = _this.Photo[v].id;
                        _this.status5 = "1";
                        _this.boo5 = true;
                        console.log("bf5", _this.photo5);
                    }
                    else if (_this.Photo[v].type == "step3_pic1") {
                        _this.photo6 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id6 = _this.Photo[v].id;
                        _this.status6 = "1";
                        _this.boo6 = true;
                        console.log("bf6", _this.photo6);
                        console.log("this.boo6", _this.boo6);
                    }
                    else if (_this.Photo[v].type == "step3_pic2") {
                        _this.photo7 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id7 = _this.Photo[v].id;
                        _this.status7 = "1";
                        _this.boo7 = true;
                        console.log("bf7", _this.photo7);
                    }
                    else if (_this.Photo[v].type == "step3_pic3") {
                        _this.photo8 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id8 = _this.Photo[v].id;
                        _this.status8 = "1";
                        _this.boo8 = true;
                        console.log("bf8", _this.photo8);
                    }
                    else if (_this.Photo[v].type == "step3_pic4") {
                        _this.photo9 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id9 = _this.Photo[v].id;
                        _this.status9 = "1";
                        _this.boo9 = true;
                        console.log("bf9", _this.photo9);
                    }
                    else if (_this.Photo[v].type == "step3_pic5") {
                        _this.photo10 = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id10 = _this.Photo[v].id;
                        _this.status10 = "1";
                        _this.boo10 = true;
                        console.log("bf10", _this.photo10);
                    }
                    else if (_this.Photo[v].type == "signature") {
                        _this.sign = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id11 = _this.Photo[v].id;
                        _this.boo11 = true;
                        console.log("bf10", _this.sign);
                    }
                    else if (_this.Photo[v].type == "step_request") {
                        _this.request = _this.postDataService.apiServer_url + _this.Photo[v].file_path;
                        _this.id12 = _this.Photo[v].id;
                        _this.boo12 = true;
                        console.log("bf10", _this.request);
                    }
                }
                _this.isShow1 = _this.boo1;
                _this.isShow2 = _this.boo2;
                _this.isShow3 = _this.boo3;
                _this.isShow4 = _this.boo4;
                _this.isShow5 = _this.boo5;
                _this.isShow6 = _this.boo6;
                _this.isShow7 = _this.boo7;
                _this.isShow8 = _this.boo8;
                _this.isShow9 = _this.boo9;
                _this.isShow10 = _this.boo10;
                _this.showSig = _this.boo11;
                _this.isShowrequest = _this.boo12;
            }
            if (_this.boo11 == true) {
                _this.isenabledadddevice = true;
                _this.isenabledcuseva = true;
                _this.isenabledeva = true;
                _this.isenabledsig = true;
                _this.isenabledcuspass = true;
                _this.isenabledsave = false;
            }
            if (_this.jobtype == "INSTALL" || _this.jobtype == "CM") {
                if (_this.isShow6 == true || _this.isShow7 == true || _this.isShow8 == true || _this.isShow9 == true || _this.isShow10 == true) {
                    _this.isenabledcheck = true;
                }
                else {
                    _this.isenabledcheck = false;
                }
            }
            _this.checktakeback();
            _this.checklist();
            _this.CheckimgTechCloseJob();
            console.log(_this.request);
        });
        if (this.jobtype == "CM") {
            this.worktype = "งานซ่อม";
            this.title2 = "รายการที่ 1 รูปภาพงานซ่อม";
            this.title3 = "รายการที่ 2 รายการที่ต้องตรวจซ่อม";
            this.title4 = "รายการที่ 5 ลายเซ็นต์ผู้รับผิดชอบ";
            this.title5 = "รายการที่ 4 ประเมินการทำงาน (ลูกค้าประเมิน)";
            this.title6 = "รายการที่ 6 ยืนยันการปิดงาน";
            this.title7 = "รายการที่ 3 แบบประเมินปัญหา";
            this.title8 = "รายการที่ 7 บันทึกข้อมูลและส่งข้อมุลเข้าระบบ";
            this.isenabledtitle1 = false;
            this.isenabledTakeback = true;
            this.isenabledcheck = false;
            this.isenabledcuseva = false;
            this.isenabledrequest = true;
            this.checkcm();
        }
        else if (this.jobtype == "INSTALL") {
            this.worktype = "งานติดตั้ง";
            this.title1 = "รายการที่ 1 รูปภาพหน้างาน";
            this.title2 = "รายการที่ 2 รูปภาพงานติดตั้ง";
            this.title3 = "รายการที่ 3 เลือกเครื่องหลักและอุปกรณ์เสริม";
            this.title7 = "รายการที่ 4 ความคิดเห็นของช่าง";
            this.title5 = "รายการที่ 5 ประเมินการทำงาน (ลูกค้าประเมิน)";
            this.title4 = "รายการที่ 6 ลายเซ็นต์ผู้รับผิดชอบ";
            this.title6 = "รายการที่ 7 ความคิดเห็นจากลูกค้า";
            this.title8 = "รายการที่ 8 บันทึกข้อมูลและส่งข้อมุลเข้าระบบ";
            this.isenabledtitle3 = true;
            this.isenabledadddevice = false;
            this.isenabledcheck = false;
            this.isenabledTakeback = true;
            this.isInstall = false;
            this.getImgInstall();
            this.checkIn();
        }
        else if (this.jobtype == "UNINSTALL") {
            this.isenabledtitle1 = false;
            this.worktype = "งานถอนการติดตั้ง";
            this.title2 = "รายการที่ 1 รูปภาพงานรื้อถอน";
            this.title7 = "รายการที่ 2 ความคิดเห็นของช่าง";
            this.title5 = "รายการที่ 3 ประเมินการทำงาน (ลูกค้าประเมิน)";
            this.title4 = "รายการที่ 4 ลายเซ็นต์ผู้รับผิดชอบ";
            this.title6 = "รายการที่ 5 ความคิดเห็นจากลูกค้า";
            this.title8 = "รายการที่ 6 บันทึกข้อมูลและส่งข้อมุลเข้าระบบ";
            this.isenabledtitle3 = false;
            this.isenabledTakeback = true;
        }
        else if (this.jobtype == "PM") {
            this.getproductphoto();
            this.isnotPM = false;
            this.isInstall = false;
            this.isenabledtitle2 = false;
            this.isenabledcheck = false;
            this.isPM = true;
            this.worktype = "งานตรวจเช็ค";
            this.title3 = "รายการที่ 2 รายการที่ต้องตรวจเช็ค";
            this.title7 = "รายการที่ 3 ความคิดเห็นของช่าง";
            this.title5 = "รายการที่ 4 ประเมินการทำงาน (ลูกค้าประเมิน)";
            this.title4 = "รายการที่ 5 ลายเซ็นต์ผู้รับผิดชอบ";
            this.title6 = "รายการที่ 6 ยืนยันการปิดงาน";
            this.title8 = "รายการที่ 7 บันทึกข้อมูลและส่งข้อมุลเข้าระบบ";
        }
    };
    DetailofdetaillistpmPage.prototype.checkIn = function () {
        var _this = this;
        var params = {
            installID: this.installID,
            planID: this.planID,
            typedevice: "CheckInstall",
            empID: this.empID
        };
        console.log(params);
        this.postDataService.postdevice(params).then(function (status) {
            console.log(status);
            if (status == true) {
                _this.isenabledcuseva = true;
            }
            else {
                _this.isenabledcuseva = false;
            }
        });
    };
    DetailofdetaillistpmPage.prototype.getproductphoto = function () {
        var _this = this;
        var param = {
            installID: this.installID,
            jobtype: "Getproductphoto",
            planID: this.planID,
            empID: this.empID,
        };
        this.postDataService.SaveCaseAll(param).then(function (productphoto) {
            _this.productphoto = productphoto;
            console.log(productphoto);
            _this.CheckimgPM();
        });
    };
    DetailofdetaillistpmPage.prototype.CheckimgPM = function () {
        var _this = this;
        var param = {
            installID: this.installID,
            jobtype: "checkimgPM",
            planID: this.planID,
            empID: this.empID,
        };
        this.postDataService.SaveCaseAll(param).then(function (checkimgPM) {
            _this.checkimgPM = checkimgPM;
            console.log(checkimgPM);
            if (_this.checkimgPM == true) {
                if (_this.sparetype != "") {
                    _this.isenabledspare = true;
                }
                _this.isenabledcheck = true;
            }
            else {
                _this.isenabledcheck = false;
            }
        });
    };
    DetailofdetaillistpmPage.prototype.CheckimgTechCloseJob = function () {
        var _this = this;
        var param = {
            installID: this.installID,
            jobtype: "CheckimgTechCloseJob",
            planID: this.planID,
            empID: this.empID,
        };
        this.postDataService.SaveCaseAll(param).then(function (TechCloseJob) {
            _this.TechCloseJob = TechCloseJob;
            if (_this.TechCloseJob == true) {
                _this.isenabledcheck = true;
                _this.isenabledcuseva = true;
                _this.isenabledeva = true;
            }
        });
        this.onCheckEva();
    };
    DetailofdetaillistpmPage.prototype.onCheckEva = function () {
        var _this = this;
        var paramEva = {
            installID: this.installID,
            jobtype: "CheckEva",
            planID: this.planID,
            empID: this.empID,
        };
        this.postDataService.SaveCaseAll(paramEva).then(function (ischeckEva) {
            //#region gallery  
            _this.IscheckEva = ischeckEva;
            if (_this.IscheckEva == "true") {
                _this.isenabledeva = false;
                _this.isenabledsig = true;
                _this.onChecksign();
            }
        });
    };
    DetailofdetaillistpmPage.prototype.onChecksign = function () {
        var _this = this;
        var paramSign = {
            installID: this.installID,
            jobtype: "CheckSign",
            planID: this.planID,
            empID: this.empID,
        };
        this.postDataService.SaveCaseAll(paramSign).then(function (ischeckSign) {
            //#region gallery  
            _this.IsheckSign = ischeckSign;
            if (_this.IsheckSign == 1) {
                _this.ishiddensig = true;
                _this.isenabledsig = false;
                _this.isenabledcuspass = true;
                _this.onPassCustomer();
            }
        });
    };
    DetailofdetaillistpmPage.prototype.onPassCustomer = function () {
        var _this = this;
        var paramSign = {
            installID: this.installID,
            jobtype: "CheckPassCustomer",
            planID: this.planID,
            empID: this.empID,
        };
        this.postDataService.SaveCaseAll(paramSign).then(function (ischeckPass) {
            //#region gallery  
            _this.IscheckPass = ischeckPass;
            if (_this.IscheckPass == 1) {
                _this.isenabledcuspass = false;
                _this.isenabledsave = true;
            }
        });
    };
    DetailofdetaillistpmPage.prototype.TakePM = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(value);
                //#region gallery  
                // const alert = await this.alertController.create({
                //   buttons: [
                //     {
                //       text: 'เลือกจากคลังรูปภาพ',
                //       handler: () => {
                //         this.camera.getPicture(this.galleryOptions).then((imageData1) => {
                //           let base64Image1 = 'data:image/jpeg;base64,' + imageData1;
                //           this.photo1 = base64Image1;
                //           watermark([this.photo1])
                //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                //             .then(img => {
                //               this.photo1 = img.src;
                //             });
                //           if (this.photo1 == null || "") {
                //           } else {
                //             this.resizePhoto();
                //             let params = {
                //               planID: this.planID,
                //               installID: this.installID,
                //               photo1: this.photo1,
                //               empID: this.empID,
                //               photoID: this.id1,
                //               jobtype: this.jobtype
                //             }
                //             console.log(params);
                //             this.postDataService.SaveCaseAll(params).then(photoID => {
                //               this.photo1 = this.postDataService.apiServer_url + photoID                    
                //               this.isTake1 = false;
                //               this.isShow1 = true;    
                //               this.status1 = "1" 
                //               this.checktakeback();               
                //             });
                //           }
                //         }, (err) => {
                //           //   this.photo1 = "data:image/png;base64,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"
                //           //   watermark([this.photo1])
                //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                //           //     .then(img => {
                //           //       this.photo1 = img.src
                //           //       console.log(this.photo1);
                //           //     });
                //           //  this.resizePhoto();
                //           //   let params = {
                //           //     planID: this.planID,
                //           //     installID: this.installID,
                //           //     photo1:this.photo1,
                //           //     empID: this.empID,
                //           //     photoID: this.id1,
                //           //     jobtype: this.jobtype
                //           //   }
                //           //   console.log(params);
                //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                //           //     this.photoID = photoID
                //           //     this.id1 = this.photoID.id
                //           //     console.log(this.photo1);
                //           //     this.status1 = "1"
                //           //     this.checktakeback();
                //           //     this.isTake1 = false;
                //           //     this.isShow1 = true;
                //           //     this.startTimer();
                //           //   });
                //         });
                //       }
                //     }, {
                //       text: 'ถ่ายภาพ',
                //       handler: () => {
                //         this.camera.getPicture(this.cameraOptions).then((imageData1) => {
                //           let base64Image1 = 'data:image/jpeg;base64,' + imageData1;
                //           this.photo1 = base64Image1;
                //           watermark([this.photo1])
                //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                //             .then(img => {
                //               this.photo1 = img.src;
                //             });
                //           if (this.photo1 == null || "") {
                //           } else {
                //             this.resizePhoto();
                //             let params = {
                //               planID: this.planID,
                //               installID: this.installID,
                //               photo1: this.photo1,
                //               empID: this.empID,
                //               photoID: this.id1,
                //               jobtype: this.jobtype
                //             }
                //             console.log(params);
                //             this.postDataService.SaveCaseAll(params).then(photoID => {
                //               this.photo1 = this.postDataService.apiServer_url + photoID                   
                //               this.isTake1 = false;
                //               this.isShow1 = true;     
                //               this.status1 = "1"    
                //               this.checktakeback();           
                //             });
                //           }
                //         }, (err) => {
                //           //   this.photo1 = "data:image/png;base64,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"
                //           //   watermark([this.photo1])
                //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                //           //     .then(img => {
                //           //       this.photo1 = img.src
                //           //       console.log(this.photo1);
                //           //     });
                //           //  this.resizePhoto();
                //           //   let params = {
                //           //     planID: this.planID,
                //           //     installID: this.installID,
                //           //     photo1:this.photo1,
                //           //     empID: this.empID,
                //           //     photoID: this.id1,
                //           //     jobtype: this.jobtype
                //           //   }
                //           //   console.log(params);
                //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                //           //     console.log(photoID);
                //           //     this.photo1 = this.postDataService.apiServer_url + photoID
                //           //     console.log(this.photo1);                    
                //           //     this.status1 = "1"
                //           //     this.isTake1 = false;
                //           //     this.isShow1 = true;  
                //           //     this.checktakeback();
                //           //   });
                //         });
                //       }
                //     }
                //   ]
                // });
                // await alert.present();
                //#endregion
                this.camera.getPicture(this.cameraOptions).then(function (imageData) {
                    var base64Image = 'data:image/jpeg;base64,' + imageData;
                    _this.photo1 = base64Image;
                    if (_this.photo1 == null || "") {
                    }
                    else {
                        var params = {
                            planID: _this.planID,
                            installID: _this.installID,
                            photo: _this.photo1,
                            empID: _this.empID,
                            type: value.type,
                            jobtype: "SaveImgPM"
                        };
                        console.log(params);
                        _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                            _this.getproductphoto();
                        });
                    }
                }, function (err) {
                    //Test local PM
                    // this.photo1 = "data:image/png;base64,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"
                    // let params = {
                    //   planID: this.planID,
                    //   installID: this.installID,
                    //   photo: this.photo1,
                    //   empID: this.empID,
                    //   type: value.type,
                    //   jobtype: "SaveImgPM"
                    // }
                    // console.log(params);
                    // this.postDataService.SaveCaseAll(params).then(photoID => {
                    //   console.log(photoID);
                    //   this.getproductphoto();
                    // });
                });
                return [2 /*return*/];
            });
        });
    };
    DetailofdetaillistpmPage.prototype.checkcm = function () {
        var _this = this;
        var param = {
            installID: this.installID,
            typedevice: "CheckCM",
            empID: this.empID,
            planID: this.planID,
        };
        this.postDataService.postdevice(param).then(function (data) {
            _this.show = data;
            console.log(_this.show);
            if (_this.show == "device") {
                _this.isdevice = true;
                _this.showdevice();
            }
            else if (_this.show == "spare") {
                _this.isspare = true;
                _this.showspare();
            }
        });
    };
    DetailofdetaillistpmPage.prototype.showimgremark = function () {
        if (this.isimgRemark == true) {
            this.isimgRemark = false;
        }
        else if (this.isimgRemark == false) {
            this.isimgRemark = true;
        }
        this.Getproductphotoremark();
    };
    DetailofdetaillistpmPage.prototype.Getproductphotoremark = function () {
        var _this = this;
        var param = {
            installID: this.installID,
            jobtype: "Getproductphotoremark",
            planID: this.planID,
            empID: this.empID,
        };
        this.postDataService.SaveCaseAll(param).then(function (photoremark) {
            _this.photoremark = photoremark;
            console.log(photoremark);
        });
    };
    // เพิ่มรูป จาก 10 รูป
    DetailofdetaillistpmPage.prototype.TakePMRe = function (value) {
        var _this = this;
        console.log(value);
        //#region gallery  
        // const alert = await this.alertController.create({
        //   buttons: [
        //     {
        //       text: 'เลือกจากคลังรูปภาพ',
        //       handler: () => {
        //         this.camera.getPicture(this.galleryOptions).then((imageData1) => {
        //           let base64Image1 = 'data:image/jpeg;base64,' + imageData1;
        //           this.photo1 = base64Image1;
        //           watermark([this.photo1])
        //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
        //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
        //             .then(img => {
        //               this.photo1 = img.src;
        //             });
        //           if (this.photo1 == null || "") {
        //           } else {
        //             this.resizePhoto();
        //             let params = {
        //               planID: this.planID,
        //               installID: this.installID,
        //               photo1: this.photo1,
        //               empID: this.empID,
        //               photoID: this.id1,
        //               jobtype: this.jobtype
        //             }
        //             console.log(params);
        //             this.postDataService.SaveCaseAll(params).then(photoID => {
        //               this.photo1 = this.postDataService.apiServer_url + photoID                    
        //               this.isTake1 = false;
        //               this.isShow1 = true;    
        //               this.status1 = "1" 
        //               this.checktakeback();               
        //             });
        //           }
        //         }, (err) => {
        //           //   this.photo1 = "data:image/png;base64,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"
        //           //   watermark([this.photo1])
        //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
        //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
        //           //     .then(img => {
        //           //       this.photo1 = img.src
        //           //       console.log(this.photo1);
        //           //     });
        //           //  this.resizePhoto();
        //           //   let params = {
        //           //     planID: this.planID,
        //           //     installID: this.installID,
        //           //     photo1:this.photo1,
        //           //     empID: this.empID,
        //           //     photoID: this.id1,
        //           //     jobtype: this.jobtype
        //           //   }
        //           //   console.log(params);
        //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
        //           //     this.photoID = photoID
        //           //     this.id1 = this.photoID.id
        //           //     console.log(this.photo1);
        //           //     this.status1 = "1"
        //           //     this.checktakeback();
        //           //     this.isTake1 = false;
        //           //     this.isShow1 = true;
        //           //     this.startTimer();
        //           //   });
        //         });
        //       }
        //     }, {
        //       text: 'ถ่ายภาพ',
        //       handler: () => {
        //         this.camera.getPicture(this.cameraOptions).then((imageData1) => {
        //           let base64Image1 = 'data:image/jpeg;base64,' + imageData1;
        //           this.photo1 = base64Image1;
        //           watermark([this.photo1])
        //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
        //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
        //             .then(img => {
        //               this.photo1 = img.src;
        //             });
        //           if (this.photo1 == null || "") {
        //           } else {
        //             this.resizePhoto();
        //             let params = {
        //               planID: this.planID,
        //               installID: this.installID,
        //               photo1: this.photo1,
        //               empID: this.empID,
        //               photoID: this.id1,
        //               jobtype: this.jobtype
        //             }
        //             console.log(params);
        //             this.postDataService.SaveCaseAll(params).then(photoID => {
        //               this.photo1 = this.postDataService.apiServer_url + photoID                   
        //               this.isTake1 = false;
        //               this.isShow1 = true;     
        //               this.status1 = "1"    
        //               this.checktakeback();           
        //             });
        //           }
        //         }, (err) => {
        //           //   this.photo1 = "data:image/png;base64,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"
        //           //   watermark([this.photo1])
        //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
        //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
        //           //     .then(img => {
        //           //       this.photo1 = img.src
        //           //       console.log(this.photo1);
        //           //     });
        //           //  this.resizePhoto();
        //           //   let params = {
        //           //     planID: this.planID,
        //           //     installID: this.installID,
        //           //     photo1:this.photo1,
        //           //     empID: this.empID,
        //           //     photoID: this.id1,
        //           //     jobtype: this.jobtype
        //           //   }
        //           //   console.log(params);
        //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
        //           //     console.log(photoID);
        //           //     this.photo1 = this.postDataService.apiServer_url + photoID
        //           //     console.log(this.photo1);                    
        //           //     this.status1 = "1"
        //           //     this.isTake1 = false;
        //           //     this.isShow1 = true;  
        //           //     this.checktakeback();
        //           //   });
        //         });
        //       }
        //     }
        //   ]
        // });
        // await alert.present();
        //#endregion
        this.camera.getPicture(this.cameraOptions).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.photo1 = base64Image;
            if (_this.photo1 == null || "") {
            }
            else {
                var params = {
                    planID: _this.planID,
                    installID: _this.installID,
                    photo: _this.photo1,
                    empID: _this.empID,
                    type: value.type,
                    jobtype: "SaveImgPM"
                };
                console.log(params);
                _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                    _this.Getproductphotoremark();
                });
            }
        }, function (err) {
            // this.photo1 = "data:image/png;base64,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"
            // let params = {
            //   planID: this.planID,
            //   installID: this.installID,
            //   photo: this.photo1,
            //   empID: this.empID,
            //   type: value.type,
            //   jobtype: "SaveImgPM"
            // }
            // console.log(params);
            //   this.postDataService.SaveCaseAll(params).then(photoID => {
            //     console.log(photoID);            
            //     this.Getproductphotoremark();
            //   });
        });
    };
    DetailofdetaillistpmPage.prototype.showdevice = function () {
        var _this = this;
        var param = {
            installID: this.installID,
            typedevice: "GetDeviceTran",
            empID: this.empID,
            planID: this.planID,
        };
        this.postDataService.postdevice(param).then(function (data) {
            _this.devices = data;
            console.log(_this.devices);
        });
    };
    DetailofdetaillistpmPage.prototype.showspare = function () {
        var _this = this;
        var param = {
            installID: this.installID,
            typedevice: "GetSpareTran",
            empID: this.empID,
            planID: this.planID,
        };
        this.postDataService.postdevice(param).then(function (data) {
            _this.spares = data;
            console.log(_this.spares);
        });
    };
    DetailofdetaillistpmPage.prototype.loadItems = function () {
        var _this = this;
        this.storageService.getSig().then(function (items) {
            _this.sign = items;
            // console.log(this.sign);
        });
    };
    //#endregion
    //#region รูปหน้างาน
    DetailofdetaillistpmPage.prototype.getImgInstall = function () {
        var _this = this;
        this.storageService.getUser().then(function (items) {
            _this.items = items;
            // console.log(items);      
            for (var i = 0; i < _this.items.length; i++) {
                _this.empID = _this.items[i].empID;
                // console.log(this.empID);
            }
            var params = {
                installID: _this.installID,
                empID: _this.empID,
                planID: _this.planID,
            };
            console.log(params);
            _this.postDataService.getImage(params).then(function (resultimg) {
                _this.resultimg = resultimg;
                console.log(_this.resultimg);
                for (var v = 0; v < _this.resultimg.length; v++) {
                    if (_this.resultimg[v].type == "step1_pic1") {
                        _this.img.src1 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg1 = true;
                        console.log("bf1", _this.img.src1);
                    }
                    else if (_this.resultimg[v].type == "step1_pic2") {
                        _this.img.src2 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg2 = true;
                        console.log("bf1", _this.img.src2);
                    }
                    else if (_this.resultimg[v].type == "step1_pic3") {
                        _this.img.src3 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg3 = true;
                        console.log("bf1", _this.img.src3);
                    }
                    else if (_this.resultimg[v].type == "step1_pic4") {
                        _this.img.src4 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg4 = true;
                        console.log("bf1", _this.img.src4);
                    }
                    else if (_this.resultimg[v].type == "step1_pic5") {
                        _this.img.src5 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg5 = true;
                        console.log("bf1", _this.img.src5);
                    }
                    else if (_this.resultimg[v].type == "step1_pic6") {
                        _this.img.src6 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg6 = true;
                        console.log("bf1", _this.img.src6);
                    }
                    else if (_this.resultimg[v].type == "step1_pic7") {
                        _this.img.src7 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg7 = true;
                        console.log("bf1", _this.img.src7);
                    }
                    else if (_this.resultimg[v].type == "step1_pic8") {
                        _this.img.src8 = _this.postDataService.apiServer_url + _this.resultimg[v].file_path;
                        _this.booimg8 = true;
                        console.log("bf1", _this.img.src8);
                    }
                }
                _this.isShowImage1 = _this.booimg1;
                _this.isShowImage2 = _this.booimg2;
                _this.isShowImage3 = _this.booimg3;
                _this.isShowImage4 = _this.booimg4;
                _this.isShowImage5 = _this.booimg5;
                _this.isShowImage6 = _this.booimg6;
                _this.isShowImage7 = _this.booimg7;
                _this.isShowImage8 = _this.booimg8;
            });
        });
    };
    //#endregion
    //#region take request
    DetailofdetaillistpmPage.prototype.takerequest = function () {
        var _this = this;
        this.camera.getPicture(this.cameraOptions).then(function (request) {
            var base64Imagerequest = 'data:image/jpeg;base64,' + request;
            _this.request = base64Imagerequest;
            if (_this.request == null || "") {
            }
            else {
                _this.resizePhoto();
                var params = {
                    planID: _this.planID,
                    installID: _this.installID,
                    photorequest: _this.request,
                    empID: _this.empID,
                    jobtype: "photorequest"
                };
                console.log(params);
                _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                    console.log(photoID);
                    _this.request = _this.postDataService.apiServer_url + photoID;
                    _this.isShowrequest = true;
                });
            }
        }, function (err) {
            // this.request = "data:image/png;base64,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"
            // this.resizePhoto();
            // let params = {
            //   planID: this.planID,
            //   installID: this.installID,
            //   photorequest: this.request,
            //   empID: this.empID,
            //   jobtype: "photorequest"
            // }
            // console.log(params);
            // this.postDataService.SaveCaseAll(params).then(photoID => {
            //   console.log(photoID);
            //   this.isShowrequest = true;
            // });
        });
    };
    //#endregion
    //#region take
    DetailofdetaillistpmPage.prototype.Take = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (id == 1) {
                    //#region gallery  
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData1) => {
                    //           let base64Image1 = 'data:image/jpeg;base64,' + imageData1;
                    //           this.photo1 = base64Image1;
                    //           watermark([this.photo1])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo1 = img.src;
                    //             });
                    //           if (this.photo1 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo1: this.photo1,
                    //               empID: this.empID,
                    //               photoID: this.id1,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo1 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake1 = false;
                    //               this.isShow1 = true;    
                    //               this.status1 = "1" 
                    //               this.checktakeback();               
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo1 = "data:image/png;base64,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"
                    //           //   watermark([this.photo1])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo1 = img.src
                    //           //       console.log(this.photo1);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo1:this.photo1,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id1,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id1 = this.photoID.id
                    //           //     console.log(this.photo1);
                    //           //     this.status1 = "1"
                    //           //     this.checktakeback();
                    //           //     this.isTake1 = false;
                    //           //     this.isShow1 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData1) => {
                    //           let base64Image1 = 'data:image/jpeg;base64,' + imageData1;
                    //           this.photo1 = base64Image1;
                    //           watermark([this.photo1])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo1 = img.src;
                    //             });
                    //           if (this.photo1 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo1: this.photo1,
                    //               empID: this.empID,
                    //               photoID: this.id1,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo1 = this.postDataService.apiServer_url + photoID                   
                    //               this.isTake1 = false;
                    //               this.isShow1 = true;     
                    //               this.status1 = "1"    
                    //               this.checktakeback();           
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAKxklEQVR4Xu1ceViN2xr/ZfYY89wMkbkoGZNzb4iIyJSSjsh06hiOodE8dcx0HBFCihSHU6SUSkmdDNeQMnSKIinjuTyGa6b7rPWcXGm39zfs9l67vvXvft93ve/vt9f4vuvTev2hqAhSYwYBLYkQZrigjkiEsMWHRAhjfEiESISwhgBj/khriEQIYwgw5o40QiRCGEOAMXekESIRwhgCjLkjjRCJEMYQYMwdaYRIhDCGAGPuSCNEIoQxBBhzRxohEiGMIcCYO9IIkQhhDAHG3JFGiEQIYwiIcCc7Owt9vjNF+LEomPfrL8LS/1WlESIQxpXey+C/zQ/xp1LQydhYoJXSahIhPKEsLCiAlaUF+lsMgN+OnTy1FYtXCkL+evIEk50ccSox4QsiVapUQcjBw7CxtVOM0t8Shw4egOvsnxCXmIQuXbtx1uMjWKEJefPmDSz6mqGwsACHwo7CrHefL9h8+PCB/tMjo2NRt25dhZjNmTUDF86dw/nL6QplxQhUWEKcHB0QGXEUCcmpMDXtJROj3NwcrPJejqDg0DIxvHM7lxLnOGEiVvy8SgzWnHQrHCGLFnhh8y8+8A8IxMRJUxSCQMCOS0iSKee9bAmC9wYhNjEJ+voGCm0pQ6DCEBKwyx8ernOwcMkyzF+4GFpaWpzwkUXI+/fvYajfFiNtbPCrrx8nO8oS0nhCUk4nwd7OBrZ29vD1244aNWpwxiYlJRnBQXsQEBT8RSdoz27MnTUTZy+mwdi4M2dbyhLUWELy796lc3vjxo0RcfwEtLW1eWNC9GPiElC1alXczcvDEEsLdDcxQXDob6hWrRpve8pQ0DhCPn/+jJnTXJAQH4fYhCS019cXhENK8mncys7GFGcXai8+9gS1Z9ChgyB7ylLSKELINrZ9qxaY7eqGBYuWiMJgyCALuLl7wW70SCz3Xgmv+QtF2VOWssYQknw6CSOtreg5wNDQSFT88XGxGD3CGg0bNsS1rBw0atRIlD1lKmsEIdOcp+JqRjqdUho0aCAq/vuFhXTt6WNujh07A0TZKg9l5gkZOmgAepr2wso160THfzQ8DOO/t8e+kIOwd/hetL3yMMAsIcW7KHcPL7hMnyE69vle7jiXmooXL1/SnZVu8+aibZaHASYJychIx5CBFkq5xCMXi2SK6mveD2S6MjI2VskViFCymCMk+ngUpjtPQW7+fV6HPFkAEGIHmPemVyPkMnGBlweSz5wXipVK9JgihCze2Vl/0sW7Vq1aogDYGxiApYsXIq/gIT34GRm0w+EjEWo5ffMJhBlCHB3GoHXrNlizfiMf/0vJvnv3DiOsrVCzRg16gidk2Ay3hplZb8xbtFiUbVUoq52Qly9f0isLMsev2/iLqJhfvXqFVrpNsC/0IIaPGElt/ZGSjB3btuLAoTBRtlWlrFZCPn36BL2mOgj57TAGDLQUFfOZ1D8wzMoSmTdvl9hBkamK7Kpat2kjyr6qlNVGSN6dO3RkkLwFyU+LaWUdHMnUNc5xAhwnOIkxr1JdtRBC8g26jRvR3Y9JT1NRAf/TpBuGWA/DipWrS9ghU9WB0P1MnsblBaxyQm7fzqVnjBMnT6Fd+/aCySA1UcTOxk2bMWasQyk7nQ0N6FSl17Kl4D7UoahSQsia0UxHmwJFrkOEtgMh+7F00QK6PdY3KJ1atbayxASnSRo1VRVjoTJCHj96RE/Me0MOoKuIEpoVyxbjZGwszly4LJNPMlWF/X4Ivlu3C+VbrXoqI6RdqxYIDj2I3n36Cgq4eHtsaGRUIuX6rbGunTrStalps2aC+lG3UrkT8vbtW7qbmjzVGZOn/iAo3ufPn6OlbmOER0TBctBgmTbIdEhGoPeqNej9Vf2VoA7VqFTuhAwfMggzZ8+F9bDhgsI8eyaVni+uZt6Uu0AH7wtC1SpVMd5poqB+WFEqV0LI4krqmUg1iJDm5e4Kkikki7e8rN6+wD0IDd1Ppyqu5T9C/FGFTrkRsnTxAujqNseMn2YLioPcbdVv0AD+u/bI1b944d8YazsKdwoeCuqHNaVyIWTi+HF4++Y1Dh85xjveRw8f0rXAzn4sli73lqtPih6MO7Qvc/vLu3MGFJROCLn2vn79Gnw2+fIOLy/vDnp06USnHtNe38nVf/L4MSXu2PETGnf4kxeYUgmZ7+mGtLQ0Cigp9+fTEk7G06kn/8ETTtXonQ31sTMgqERFO5/+WJVVGiFRkccQEryXlv3zbeRy8NrVDDr11K9fX676x48f6cgYP94JU11+5NsV8/JKIcRnwzrERB+nI6N69eq8gibb4k7GnbHeZxMnPfLwxsZ2DGxG23KS1zQh0YSQqWahlwcupl/jFXvBvXv0n+7sMg1unl4KdYuKimgmUEdHR+57DoWGGBcQRQh54uW3ZTOdaurUqcM5VLLok5dNZET1MOnJSW/6jz/AwKAD3D3ncZLXVCHBhJAM3Th7W7oI82lHwn7HNOcpKHz8lFNVyevXr+nVCymC/vrZAJ8+NUlWECHkH+40zoH+wxs3acIpXjLljLW1wdOn/0FMfCJq1qypUO/F8+doo6eLwOAQjLIZrVC+IgjwJiTt8iWMGDqYjgxS0cG1kfPFVGcXzJrjyknleOQxWvaZcSNbY/LhnAJTIMSLEHLr2t3YkNc7iqysP2lmb8u2HRjJ4V9OynjIHRh5kBZ1Ih61a9dWRpwaY4MzITk5tyiw5y9dwT90dDgFqCiz962RmzezYdKlEw6FRwi+HebkGMNCnAkhqdeomDjOqVfy6YnY6OgyM3vfYuKzfi3IeSY3vxB16ih+N84wpqJcU0gImabILmftBh9O5TqkWI3Ik6dm5P23ouvwe/n59DzyLzMzuotSJC8qWg1QVkhI714m8F69tsxM3dcxkkpz/bYtEREVg379LeSG/+zZM4yzt8Otm9kV6rZWLOdyCSGLa8eOhtjku1VhP8WXgzdv58tdY3JzcmgG8MWLF0qpWFTomIYJlEnI+jWrUKt2bcx185AbEjlfkPzH7dwc+k+vV6+eTPnAgN2Y5+EGPT09untqoaenYVCpxl2ZhLi7zkZWZiY9wClqpt06w26sQ4lXseRAR0bM2bOpOBoejgf3CzF95iysXreh0m1jFeH37e+lCEk6lQjyjY/Tqefk2sq8cR1WAy3gv3sPhv1daV6sELh7F9IzrqBnz14YNdpW9ENNvkFpsnwJQkiFh6fbXIV5iW1bfbHVdzO9OmnVurUmx8+c718ISb+ShuFDB6Pg4V9ynSS3riTvfTQymrlgKoJDlBBSjW7QthVi4hNgZNRJZlzF77tJ8YEqvhtVEcAVEoPWvQdPisjB7MDhMJpvkNXIlw/o7W5iErp17yGkH0mHIwJaBh07Fvlt34k+fc1lqpD33aS4Oe1aJkeTkpgYBLR+Xr22yHPeglI2ilOspJZWaOWhGMcqq67Mc4j/dj+s8l5BP22njo94VVYySNylCBk8oB8t4Qw7GlmZcVFb7CW2veSg9+sWP418eaQ2BJXcsdZ/338ucp4yCZcvXaQHvSZNmyq5C8kcHwS0tLUbFbl6eDLzRTU+zldEWa3LV28Uif1CW0UERl0xKUxQqcuxytqvRAhjzEuESIQwhgBj7kgjRCKEMQQYc0caIRIhjCHAmDvSCJEIYQwBxtyRRohECGMIMOaONEIkQhhDgDF3/geqUez9ukynHAAAAABJRU5ErkJggg=="
                    //           //   watermark([this.photo1])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo1 = img.src
                    //           //       console.log(this.photo1);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo1:this.photo1,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id1,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     console.log(photoID);
                    //           //     this.photo1 = this.postDataService.apiServer_url + photoID
                    //           //     console.log(this.photo1);                    
                    //           //     this.status1 = "1"
                    //           //     this.isTake1 = false;
                    //           //     this.isShow1 = true;  
                    //           //     this.checktakeback();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData1) {
                        var base64Image1 = 'data:image/jpeg;base64,' + imageData1;
                        _this.photo1 = base64Image1;
                        if (_this.photo1 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo1: _this.photo1,
                                empID: _this.empID,
                                photoID: _this.id1,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo1 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake1 = false;
                                _this.isShow1 = true;
                                _this.status1 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        //ImgCM
                        // this.photo1 = "data:image/png;base64,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"
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo1: this.photo1,
                        //   empID: this.empID,
                        //   photoID: this.id1,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo1 = this.postDataService.apiServer_url + photoID
                        //   this.isTake1 = false;
                        //   this.isShow1 = true;
                        //   this.status1 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 2) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData2) => {
                    //           let base64Image2 = 'data:image/jpeg;base64,' + imageData2;
                    //           this.photo2 = base64Image2;
                    //           watermark([this.photo2])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo2 = img.src;
                    //             });
                    //           if (this.photo2 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo2: this.photo2,
                    //               empID: this.empID,
                    //               photoID: this.id2,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo2 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake2 = false;
                    //               this.isShow2 = true;    
                    //               this.status2 = "1"
                    //               this.checktakeback();
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo2 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo2])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo2 = img.src
                    // //           //       console.log(this.photo2);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo2:this.photo2,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id2,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id2 = this.photoID.id
                    // //           //     console.log(this.photo2);
                    // //           //     this.status2 = "2"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake2 = false;
                    // //           //     this.isShow2 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData2) => {
                    //           let base64Image2 = 'data:image/jpeg;base64,' + imageData2;
                    //           this.photo2 = base64Image2;
                    //           watermark([this.photo2])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo2 = img.src;
                    //             });
                    //           if (this.photo2 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo2: this.photo2,
                    //               empID: this.empID,
                    //               photoID: this.id2,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //               this.postDataService.SaveCaseAll(params).then(photoID => {
                    //                 this.photo2 = this.postDataService.apiServer_url + photoID                      
                    //                 this.isTake2 = false;
                    //                 this.isShow2 = true; 
                    //                 this.status2 = "1"   
                    //                 this.checktakeback();
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo2 = "data:image/png;base64,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"
                    //           //   watermark([this.photo2])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo2 = img.src
                    //           //       console.log(this.photo2);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo2:this.photo2,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id2,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id2 = this.photoID.id
                    //           //     console.log(this.photo2);
                    //           //     this.status2 = "2"
                    //           //     this.checktakeback();
                    //           //     this.isTake2 = false;
                    //           //     this.isShow2 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData2) {
                        var base64Image2 = 'data:image/jpeg;base64,' + imageData2;
                        _this.photo2 = base64Image2;
                        if (_this.photo2 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo2: _this.photo2,
                                empID: _this.empID,
                                photoID: _this.id2,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo2 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake2 = false;
                                _this.isShow2 = true;
                                _this.status2 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        //ImgCM
                        // this.photo2 = "data:image/png;base64,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"
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo2: this.photo2,
                        //   empID: this.empID,
                        //   photoID: this.id2,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo2 = this.postDataService.apiServer_url + photoID
                        //   this.isTake2 = false;
                        //   this.isShow2 = true;
                        //   this.status2 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 3) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData3) => {
                    //           let base64Image3 = 'data:image/jpeg;base64,' + imageData3;
                    //           this.photo3 = base64Image3;
                    //           watermark([this.photo3])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo3 = img.src;
                    //             });
                    //           if (this.photo3 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo3: this.photo3,
                    //               empID: this.empID,
                    //               photoID: this.id3,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo3 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake3 = false;
                    //               this.isShow3 = true; 
                    //               this.status3 = "1" 
                    //               this.checktakeback();  
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo3 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo3])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo3 = img.src
                    // //           //       console.log(this.photo3);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo3:this.photo3,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id3,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id3 = this.photoID.id
                    // //           //     console.log(this.photo3);
                    // //           //     this.status3 = "3"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake3 = false;
                    // //           //     this.isShow3 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData3) => {
                    //           let base64Image3 = 'data:image/jpeg;base64,' + imageData3;
                    //           this.photo3 = base64Image3;
                    //           watermark([this.photo3])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo3 = img.src;
                    //             });
                    //           if (this.photo3 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo3: this.photo3,
                    //               empID: this.empID,
                    //               photoID: this.id3,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo3 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake3 = false;
                    //               this.isShow3 = true;  
                    //               this.status3 = "1"  
                    //               this.checktakeback();
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo3 = "data:image/png;base64,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"
                    //           //   watermark([this.photo3])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo3 = img.src
                    //           //       console.log(this.photo3);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo3:this.photo3,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id3,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id3 = this.photoID.id
                    //           //     console.log(this.photo3);
                    //           //     this.status3 = "3"
                    //           //     this.checktakeback();
                    //           //     this.isTake3 = false;
                    //           //     this.isShow3 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData3) {
                        var base64Image3 = 'data:image/jpeg;base64,' + imageData3;
                        _this.photo3 = base64Image3;
                        if (_this.photo3 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo3: _this.photo3,
                                empID: _this.empID,
                                photoID: _this.id3,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo3 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake3 = false;
                                _this.isShow3 = true;
                                _this.status3 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        //ImgCM
                        // this.photo3 = "data:image/png;base64,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"
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo3: this.photo3,
                        //   empID: this.empID,
                        //   photoID: this.id3,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo3 = this.postDataService.apiServer_url + photoID
                        //   this.isTake3 = false;
                        //   this.isShow3 = true;
                        //   this.status3 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 4) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData4) => {
                    //           let base64Image4 = 'data:image/jpeg;base64,' + imageData4;
                    //           this.photo4 = base64Image4;
                    //           watermark([this.photo4])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo4 = img.src;
                    //             });
                    //           if (this.photo4 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo4: this.photo4,
                    //               empID: this.empID,
                    //               photoID: this.id4,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo4 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake4 = false;
                    //               this.isShow4 = true;
                    //               this.status4 = "1"    
                    //               this.checktakeback();
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo4 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo4])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo4 = img.src
                    // //           //       console.log(this.photo4);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo4:this.photo4,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id4,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id4 = this.photoID.id
                    // //           //     console.log(this.photo4);
                    // //           //     this.status4 = "4"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake4 = false;
                    // //           //     this.isShow4 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData4) => {
                    //           let base64Image4 = 'data:image/jpeg;base64,' + imageData4;
                    //           this.photo4 = base64Image4;
                    //           watermark([this.photo4])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo4 = img.src;
                    //             });
                    //           if (this.photo4 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo4: this.photo4,
                    //               empID: this.empID,
                    //               photoID: this.id4,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo4 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake4 = false;
                    //               this.isShow4 = true;    
                    //               this.status4 = "1"
                    //               this.checktakeback();
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo4 = "data:image/png;base64,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"
                    //           //   watermark([this.photo4])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo4 = img.src
                    //           //       console.log(this.photo4);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo4:this.photo4,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id4,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id4 = this.photoID.id
                    //           //     console.log(this.photo4);
                    //           //     this.status4 = "4"
                    //           //     this.checktakeback();
                    //           //     this.isTake4 = false;
                    //           //     this.isShow4 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData4) {
                        var base64Image4 = 'data:image/jpeg;base64,' + imageData4;
                        _this.photo4 = base64Image4;
                        if (_this.photo4 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo4: _this.photo4,
                                empID: _this.empID,
                                photoID: _this.id4,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo4 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake4 = false;
                                _this.isShow4 = true;
                                _this.status4 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        //ImgCM
                        // this.photo4 = "data:image/png;base64,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"
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo4: this.photo4,
                        //   empID: this.empID,
                        //   photoID: this.id4,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo4 = this.postDataService.apiServer_url + photoID
                        //   this.isTake4 = false;
                        //   this.isShow4 = true;
                        //   this.status4 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 5) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData5) => {
                    //           let base64Image5 = 'data:image/jpeg;base64,' + imageData5;
                    //           this.photo5 = base64Image5;
                    //           watermark([this.photo5])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo5 = img.src;
                    //             });
                    //           if (this.photo5 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo5: this.photo5,
                    //               empID: this.empID,
                    //               photoID: this.id5,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo5 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake5 = false;
                    //               this.isShow5 = true;  
                    //               this.status5 = "1"  
                    //               this.checktakeback();
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo5 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo5])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo5 = img.src
                    // //           //       console.log(this.photo5);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo5:this.photo5,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id5,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id5 = this.photoID.id
                    // //           //     console.log(this.photo5);
                    // //           //     this.status5 = "5"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake5 = false;
                    // //           //     this.isShow5 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData5) => {
                    //           let base64Image5 = 'data:image/jpeg;base64,' + imageData5;
                    //           this.photo5 = base64Image5;
                    //           watermark([this.photo5])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo5 = img.src;
                    //             });
                    //           if (this.photo5 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo5: this.photo5,
                    //               empID: this.empID,
                    //               photoID: this.id5,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo5 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake5 = false;
                    //               this.isShow5 = true; 
                    //               this.status5 = "1"
                    //               this.checktakeback();   
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo5 = "data:image/png;base64,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"
                    //           //   watermark([this.photo5])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo5 = img.src
                    //           //       console.log(this.photo5);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo5:this.photo5,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id5,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id5 = this.photoID.id
                    //           //     console.log(this.photo5);
                    //           //     this.status5 = "5"
                    //           //     this.checktakeback();
                    //           //     this.isTake5 = false;
                    //           //     this.isShow5 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData5) {
                        var base64Image5 = 'data:image/jpeg;base64,' + imageData5;
                        _this.photo5 = base64Image5;
                        if (_this.photo5 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo5: _this.photo5,
                                empID: _this.empID,
                                photoID: _this.id5,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo5 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake5 = false;
                                _this.isShow5 = true;
                                _this.status5 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        //ImgCM
                        // this.photo5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAKxklEQVR4Xu1ceViN2xr/ZfYY89wMkbkoGZNzb4iIyJSSjsh06hiOodE8dcx0HBFCihSHU6SUSkmdDNeQMnSKIinjuTyGa6b7rPWcXGm39zfs9l67vvXvft93ve/vt9f4vuvTev2hqAhSYwYBLYkQZrigjkiEsMWHRAhjfEiESISwhgBj/khriEQIYwgw5o40QiRCGEOAMXekESIRwhgCjLkjjRCJEMYQYMwdaYRIhDCGAGPuSCNEIoQxBBhzRxohEiGMIcCYO9IIkQhhDAHG3JFGiEQIYwiIcCc7Owt9vjNF+LEomPfrL8LS/1WlESIQxpXey+C/zQ/xp1LQydhYoJXSahIhPKEsLCiAlaUF+lsMgN+OnTy1FYtXCkL+evIEk50ccSox4QsiVapUQcjBw7CxtVOM0t8Shw4egOvsnxCXmIQuXbtx1uMjWKEJefPmDSz6mqGwsACHwo7CrHefL9h8+PCB/tMjo2NRt25dhZjNmTUDF86dw/nL6QplxQhUWEKcHB0QGXEUCcmpMDXtJROj3NwcrPJejqDg0DIxvHM7lxLnOGEiVvy8SgzWnHQrHCGLFnhh8y8+8A8IxMRJUxSCQMCOS0iSKee9bAmC9wYhNjEJ+voGCm0pQ6DCEBKwyx8ernOwcMkyzF+4GFpaWpzwkUXI+/fvYajfFiNtbPCrrx8nO8oS0nhCUk4nwd7OBrZ29vD1244aNWpwxiYlJRnBQXsQEBT8RSdoz27MnTUTZy+mwdi4M2dbyhLUWELy796lc3vjxo0RcfwEtLW1eWNC9GPiElC1alXczcvDEEsLdDcxQXDob6hWrRpve8pQ0DhCPn/+jJnTXJAQH4fYhCS019cXhENK8mncys7GFGcXai8+9gS1Z9ChgyB7ylLSKELINrZ9qxaY7eqGBYuWiMJgyCALuLl7wW70SCz3Xgmv+QtF2VOWssYQknw6CSOtreg5wNDQSFT88XGxGD3CGg0bNsS1rBw0atRIlD1lKmsEIdOcp+JqRjqdUho0aCAq/vuFhXTt6WNujh07A0TZKg9l5gkZOmgAepr2wso160THfzQ8DOO/t8e+kIOwd/hetL3yMMAsIcW7KHcPL7hMnyE69vle7jiXmooXL1/SnZVu8+aibZaHASYJychIx5CBFkq5xCMXi2SK6mveD2S6MjI2VskViFCymCMk+ngUpjtPQW7+fV6HPFkAEGIHmPemVyPkMnGBlweSz5wXipVK9JgihCze2Vl/0sW7Vq1aogDYGxiApYsXIq/gIT34GRm0w+EjEWo5ffMJhBlCHB3GoHXrNlizfiMf/0vJvnv3DiOsrVCzRg16gidk2Ay3hplZb8xbtFiUbVUoq52Qly9f0isLMsev2/iLqJhfvXqFVrpNsC/0IIaPGElt/ZGSjB3btuLAoTBRtlWlrFZCPn36BL2mOgj57TAGDLQUFfOZ1D8wzMoSmTdvl9hBkamK7Kpat2kjyr6qlNVGSN6dO3RkkLwFyU+LaWUdHMnUNc5xAhwnOIkxr1JdtRBC8g26jRvR3Y9JT1NRAf/TpBuGWA/DipWrS9ghU9WB0P1MnsblBaxyQm7fzqVnjBMnT6Fd+/aCySA1UcTOxk2bMWasQyk7nQ0N6FSl17Kl4D7UoahSQsia0UxHmwJFrkOEtgMh+7F00QK6PdY3KJ1atbayxASnSRo1VRVjoTJCHj96RE/Me0MOoKuIEpoVyxbjZGwszly4LJNPMlWF/X4Ivlu3C+VbrXoqI6RdqxYIDj2I3n36Cgq4eHtsaGRUIuX6rbGunTrStalps2aC+lG3UrkT8vbtW7qbmjzVGZOn/iAo3ufPn6OlbmOER0TBctBgmTbIdEhGoPeqNej9Vf2VoA7VqFTuhAwfMggzZ8+F9bDhgsI8eyaVni+uZt6Uu0AH7wtC1SpVMd5poqB+WFEqV0LI4krqmUg1iJDm5e4Kkikki7e8rN6+wD0IDd1Ppyqu5T9C/FGFTrkRsnTxAujqNseMn2YLioPcbdVv0AD+u/bI1b944d8YazsKdwoeCuqHNaVyIWTi+HF4++Y1Dh85xjveRw8f0rXAzn4sli73lqtPih6MO7Qvc/vLu3MGFJROCLn2vn79Gnw2+fIOLy/vDnp06USnHtNe38nVf/L4MSXu2PETGnf4kxeYUgmZ7+mGtLQ0Cigp9+fTEk7G06kn/8ETTtXonQ31sTMgqERFO5/+WJVVGiFRkccQEryXlv3zbeRy8NrVDDr11K9fX676x48f6cgYP94JU11+5NsV8/JKIcRnwzrERB+nI6N69eq8gibb4k7GnbHeZxMnPfLwxsZ2DGxG23KS1zQh0YSQqWahlwcupl/jFXvBvXv0n+7sMg1unl4KdYuKimgmUEdHR+57DoWGGBcQRQh54uW3ZTOdaurUqcM5VLLok5dNZET1MOnJSW/6jz/AwKAD3D3ncZLXVCHBhJAM3Th7W7oI82lHwn7HNOcpKHz8lFNVyevXr+nVCymC/vrZAJ8+NUlWECHkH+40zoH+wxs3acIpXjLljLW1wdOn/0FMfCJq1qypUO/F8+doo6eLwOAQjLIZrVC+IgjwJiTt8iWMGDqYjgxS0cG1kfPFVGcXzJrjyknleOQxWvaZcSNbY/LhnAJTIMSLEHLr2t3YkNc7iqysP2lmb8u2HRjJ4V9OynjIHRh5kBZ1Ih61a9dWRpwaY4MzITk5tyiw5y9dwT90dDgFqCiz962RmzezYdKlEw6FRwi+HebkGMNCnAkhqdeomDjOqVfy6YnY6OgyM3vfYuKzfi3IeSY3vxB16ih+N84wpqJcU0gImabILmftBh9O5TqkWI3Ik6dm5P23ouvwe/n59DzyLzMzuotSJC8qWg1QVkhI714m8F69tsxM3dcxkkpz/bYtEREVg379LeSG/+zZM4yzt8Otm9kV6rZWLOdyCSGLa8eOhtjku1VhP8WXgzdv58tdY3JzcmgG8MWLF0qpWFTomIYJlEnI+jWrUKt2bcx185AbEjlfkPzH7dwc+k+vV6+eTPnAgN2Y5+EGPT09untqoaenYVCpxl2ZhLi7zkZWZiY9wClqpt06w26sQ4lXseRAR0bM2bOpOBoejgf3CzF95iysXreh0m1jFeH37e+lCEk6lQjyjY/Tqefk2sq8cR1WAy3gv3sPhv1daV6sELh7F9IzrqBnz14YNdpW9ENNvkFpsnwJQkiFh6fbXIV5iW1bfbHVdzO9OmnVurUmx8+c718ISb+ShuFDB6Pg4V9ynSS3riTvfTQymrlgKoJDlBBSjW7QthVi4hNgZNRJZlzF77tJ8YEqvhtVEcAVEoPWvQdPisjB7MDhMJpvkNXIlw/o7W5iErp17yGkH0mHIwJaBh07Fvlt34k+fc1lqpD33aS4Oe1aJkeTkpgYBLR+Xr22yHPeglI2ilOspJZWaOWhGMcqq67Mc4j/dj+s8l5BP22njo94VVYySNylCBk8oB8t4Qw7GlmZcVFb7CW2veSg9+sWP418eaQ2BJXcsdZ/338ucp4yCZcvXaQHvSZNmyq5C8kcHwS0tLUbFbl6eDLzRTU+zldEWa3LV28Uif1CW0UERl0xKUxQqcuxytqvRAhjzEuESIQwhgBj7kgjRCKEMQQYc0caIRIhjCHAmDvSCJEIYQwBxtyRRohECGMIMOaONEIkQhhDgDF3/geqUez9ukynHAAAAABJRU5ErkJggg=="
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo5: this.photo5,
                        //   empID: this.empID,
                        //   photoID: this.id5,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo5 = this.postDataService.apiServer_url + photoID
                        //   this.isTake5 = false;
                        //   this.isShow5 = true;
                        //   this.status5 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 6) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData6) => {
                    //           let base64Image6 = 'data:image/jpeg;base64,' + imageData6;
                    //           this.photo6 = base64Image6;
                    //           watermark([this.photo6])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo6 = img.src;
                    //             });
                    //           if (this.photo6 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo6: this.photo6,
                    //               empID: this.empID,
                    //               photoID: this.id6,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo6 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake6 = false;
                    //               this.isShow6 = true; 
                    //               this.status6 = "1"
                    //               this.checklist();   
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAKxklEQVR4Xu1ceViN2xr/ZfYY89wMkbkoGZNzb4iIyJSSjsh06hiOodE8dcx0HBFCihSHU6SUSkmdDNeQMnSKIinjuTyGa6b7rPWcXGm39zfs9l67vvXvft93ve/vt9f4vuvTev2hqAhSYwYBLYkQZrigjkiEsMWHRAhjfEiESISwhgBj/khriEQIYwgw5o40QiRCGEOAMXekESIRwhgCjLkjjRCJEMYQYMwdaYRIhDCGAGPuSCNEIoQxBBhzRxohEiGMIcCYO9IIkQhhDAHG3JFGiEQIYwiIcCc7Owt9vjNF+LEomPfrL8LS/1WlESIQxpXey+C/zQ/xp1LQydhYoJXSahIhPKEsLCiAlaUF+lsMgN+OnTy1FYtXCkL+evIEk50ccSox4QsiVapUQcjBw7CxtVOM0t8Shw4egOvsnxCXmIQuXbtx1uMjWKEJefPmDSz6mqGwsACHwo7CrHefL9h8+PCB/tMjo2NRt25dhZjNmTUDF86dw/nL6QplxQhUWEKcHB0QGXEUCcmpMDXtJROj3NwcrPJejqDg0DIxvHM7lxLnOGEiVvy8SgzWnHQrHCGLFnhh8y8+8A8IxMRJUxSCQMCOS0iSKee9bAmC9wYhNjEJ+voGCm0pQ6DCEBKwyx8ernOwcMkyzF+4GFpaWpzwkUXI+/fvYajfFiNtbPCrrx8nO8oS0nhCUk4nwd7OBrZ29vD1244aNWpwxiYlJRnBQXsQEBT8RSdoz27MnTUTZy+mwdi4M2dbyhLUWELy796lc3vjxo0RcfwEtLW1eWNC9GPiElC1alXczcvDEEsLdDcxQXDob6hWrRpve8pQ0DhCPn/+jJnTXJAQH4fYhCS019cXhENK8mncys7GFGcXai8+9gS1Z9ChgyB7ylLSKELINrZ9qxaY7eqGBYuWiMJgyCALuLl7wW70SCz3Xgmv+QtF2VOWssYQknw6CSOtreg5wNDQSFT88XGxGD3CGg0bNsS1rBw0atRIlD1lKmsEIdOcp+JqRjqdUho0aCAq/vuFhXTt6WNujh07A0TZKg9l5gkZOmgAepr2wso160THfzQ8DOO/t8e+kIOwd/hetL3yMMAsIcW7KHcPL7hMnyE69vle7jiXmooXL1/SnZVu8+aibZaHASYJychIx5CBFkq5xCMXi2SK6mveD2S6MjI2VskViFCymCMk+ngUpjtPQW7+fV6HPFkAEGIHmPemVyPkMnGBlweSz5wXipVK9JgihCze2Vl/0sW7Vq1aogDYGxiApYsXIq/gIT34GRm0w+EjEWo5ffMJhBlCHB3GoHXrNlizfiMf/0vJvnv3DiOsrVCzRg16gidk2Ay3hplZb8xbtFiUbVUoq52Qly9f0isLMsev2/iLqJhfvXqFVrpNsC/0IIaPGElt/ZGSjB3btuLAoTBRtlWlrFZCPn36BL2mOgj57TAGDLQUFfOZ1D8wzMoSmTdvl9hBkamK7Kpat2kjyr6qlNVGSN6dO3RkkLwFyU+LaWUdHMnUNc5xAhwnOIkxr1JdtRBC8g26jRvR3Y9JT1NRAf/TpBuGWA/DipWrS9ghU9WB0P1MnsblBaxyQm7fzqVnjBMnT6Fd+/aCySA1UcTOxk2bMWasQyk7nQ0N6FSl17Kl4D7UoahSQsia0UxHmwJFrkOEtgMh+7F00QK6PdY3KJ1atbayxASnSRo1VRVjoTJCHj96RE/Me0MOoKuIEpoVyxbjZGwszly4LJNPMlWF/X4Ivlu3C+VbrXoqI6RdqxYIDj2I3n36Cgq4eHtsaGRUIuX6rbGunTrStalps2aC+lG3UrkT8vbtW7qbmjzVGZOn/iAo3ufPn6OlbmOER0TBctBgmTbIdEhGoPeqNej9Vf2VoA7VqFTuhAwfMggzZ8+F9bDhgsI8eyaVni+uZt6Uu0AH7wtC1SpVMd5poqB+WFEqV0LI4krqmUg1iJDm5e4Kkikki7e8rN6+wD0IDd1Ppyqu5T9C/FGFTrkRsnTxAujqNseMn2YLioPcbdVv0AD+u/bI1b944d8YazsKdwoeCuqHNaVyIWTi+HF4++Y1Dh85xjveRw8f0rXAzn4sli73lqtPih6MO7Qvc/vLu3MGFJROCLn2vn79Gnw2+fIOLy/vDnp06USnHtNe38nVf/L4MSXu2PETGnf4kxeYUgmZ7+mGtLQ0Cigp9+fTEk7G06kn/8ETTtXonQ31sTMgqERFO5/+WJVVGiFRkccQEryXlv3zbeRy8NrVDDr11K9fX676x48f6cgYP94JU11+5NsV8/JKIcRnwzrERB+nI6N69eq8gibb4k7GnbHeZxMnPfLwxsZ2DGxG23KS1zQh0YSQqWahlwcupl/jFXvBvXv0n+7sMg1unl4KdYuKimgmUEdHR+57DoWGGBcQRQh54uW3ZTOdaurUqcM5VLLok5dNZET1MOnJSW/6jz/AwKAD3D3ncZLXVCHBhJAM3Th7W7oI82lHwn7HNOcpKHz8lFNVyevXr+nVCymC/vrZAJ8+NUlWECHkH+40zoH+wxs3acIpXjLljLW1wdOn/0FMfCJq1qypUO/F8+doo6eLwOAQjLIZrVC+IgjwJiTt8iWMGDqYjgxS0cG1kfPFVGcXzJrjyknleOQxWvaZcSNbY/LhnAJTIMSLEHLr2t3YkNc7iqysP2lmb8u2HRjJ4V9OynjIHRh5kBZ1Ih61a9dWRpwaY4MzITk5tyiw5y9dwT90dDgFqCiz962RmzezYdKlEw6FRwi+HebkGMNCnAkhqdeomDjOqVfy6YnY6OgyM3vfYuKzfi3IeSY3vxB16ih+N84wpqJcU0gImabILmftBh9O5TqkWI3Ik6dm5P23ouvwe/n59DzyLzMzuotSJC8qWg1QVkhI714m8F69tsxM3dcxkkpz/bYtEREVg379LeSG/+zZM4yzt8Otm9kV6rZWLOdyCSGLa8eOhtjku1VhP8WXgzdv58tdY3JzcmgG8MWLF0qpWFTomIYJlEnI+jWrUKt2bcx185AbEjlfkPzH7dwc+k+vV6+eTPnAgN2Y5+EGPT09untqoaenYVCpxl2ZhLi7zkZWZiY9wClqpt06w26sQ4lXseRAR0bM2bOpOBoejgf3CzF95iysXreh0m1jFeH37e+lCEk6lQjyjY/Tqefk2sq8cR1WAy3gv3sPhv1daV6sELh7F9IzrqBnz14YNdpW9ENNvkFpsnwJQkiFh6fbXIV5iW1bfbHVdzO9OmnVurUmx8+c718ISb+ShuFDB6Pg4V9ynSS3riTvfTQymrlgKoJDlBBSjW7QthVi4hNgZNRJZlzF77tJ8YEqvhtVEcAVEoPWvQdPisjB7MDhMJpvkNXIlw/o7W5iErp17yGkH0mHIwJaBh07Fvlt34k+fc1lqpD33aS4Oe1aJkeTkpgYBLR+Xr22yHPeglI2ilOspJZWaOWhGMcqq67Mc4j/dj+s8l5BP22njo94VVYySNylCBk8oB8t4Qw7GlmZcVFb7CW2veSg9+sWP418eaQ2BJXcsdZ/338ucp4yCZcvXaQHvSZNmyq5C8kcHwS0tLUbFbl6eDLzRTU+zldEWa3LV28Uif1CW0UERl0xKUxQqcuxytqvRAhjzEuESIQwhgBj7kgjRCKEMQQYc0caIRIhjCHAmDvSCJEIYQwBxtyRRohECGMIMOaONEIkQhhDgDF3/geqUez9ukynHAAAAABJRU5ErkJggg=="
                    // //           //   watermark([this.photo6])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo6 = img.src
                    // //           //       console.log(this.photo6);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo6:this.photo6,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id6,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id6 = this.photoID.id
                    // //           //     console.log(this.photo6);
                    // //           //     this.status6 = "6"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake6 = false;
                    // //           //     this.isShow6 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData6) => {
                    //           let base64Image6 = 'data:image/jpeg;base64,' + imageData6;
                    //           this.photo6 = base64Image6;
                    //           watermark([this.photo6])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo6 = img.src;
                    //             });
                    //           if (this.photo6 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo6: this.photo6,
                    //               empID: this.empID,
                    //               photoID: this.id6,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo6 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake6 = false;
                    //               this.isShow6 = true; 
                    //               this.status6 = "1"   
                    //               this.checklist();
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo6 = "data:image/png;base64,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"
                    //           //   watermark([this.photo6])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo6 = img.src
                    //           //       console.log(this.photo6);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo6:this.photo6,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id6,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id6 = this.photoID.id
                    //           //     console.log(this.photo6);
                    //           //     this.status6 = "6"
                    //           //     this.checktakeback();
                    //           //     this.isTake6 = false;
                    //           //     this.isShow6 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData6) {
                        var base64Image6 = 'data:image/jpeg;base64,' + imageData6;
                        _this.photo6 = base64Image6;
                        if (_this.photo6 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo6: _this.photo6,
                                empID: _this.empID,
                                photoID: _this.id6,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo6 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake6 = false;
                                _this.isShow6 = true;
                                _this.status6 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        // this.photo6 = "data:image/png;base64,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"
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo6: this.photo6,
                        //   empID: this.empID,
                        //   photoID: this.id6,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo6 = this.postDataService.apiServer_url + photoID
                        //   this.isTake6 = false;
                        //   this.isShow6 = true;
                        //   this.status6 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 7) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData7) => {
                    //           let base64Image7 = 'data:image/jpeg;base64,' + imageData7;
                    //           this.photo7 = base64Image7;
                    //           watermark([this.photo7])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo7 = img.src;
                    //             });
                    //           if (this.photo7 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo7: this.photo7,
                    //               empID: this.empID,
                    //               photoID: this.id7,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo7 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake7 = false;
                    //               this.isShow7 = true; 
                    //               this.status7 = "1" 
                    //               this.checklist();  
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo7 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo7])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo7 = img.src
                    // //           //       console.log(this.photo7);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo7:this.photo7,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id7,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id7 = this.photoID.id
                    // //           //     console.log(this.photo7);
                    // //           //     this.status7 = "7"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake7 = false;
                    // //           //     this.isShow7 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData7) => {
                    //           let base64Image7 = 'data:image/jpeg;base64,' + imageData7;
                    //           this.photo7 = base64Image7;
                    //           watermark([this.photo7])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo7 = img.src;
                    //             });
                    //           if (this.photo7 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo7: this.photo7,
                    //               empID: this.empID,
                    //               photoID: this.id7,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo7 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake7 = false;
                    //               this.isShow7 = true;
                    //               this.status7 = "1"    
                    //               this.checklist();
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo7 = "data:image/png;base64,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"
                    //           //   watermark([this.photo7])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo7 = img.src
                    //           //       console.log(this.photo7);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo7:this.photo7,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id7,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id7 = this.photoID.id
                    //           //     console.log(this.photo7);
                    //           //     this.status7 = "7"
                    //           //     this.checktakeback();
                    //           //     this.isTake7 = false;
                    //           //     this.isShow7 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData7) {
                        var base64Image7 = 'data:image/jpeg;base64,' + imageData7;
                        _this.photo7 = base64Image7;
                        if (_this.photo7 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo7: _this.photo7,
                                empID: _this.empID,
                                photoID: _this.id7,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo7 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake7 = false;
                                _this.isShow7 = true;
                                _this.status7 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        // this.photo7 = "data:image/png;base64,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"
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo7: this.photo7,
                        //   empID: this.empID,
                        //   photoID: this.id7,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo7 = this.postDataService.apiServer_url + photoID
                        //   this.isTake7 = false;
                        //   this.isShow7 = true;
                        //   this.status7 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 8) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData8) => {
                    //           let base64Image8 = 'data:image/jpeg;base64,' + imageData8;
                    //           this.photo8 = base64Image8;
                    //           watermark([this.photo8])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo8 = img.src;
                    //             });
                    //           if (this.photo8 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo8: this.photo8,
                    //               empID: this.empID,
                    //               photoID: this.id8,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo8 = this.postDataService.apiServer_url + photoID                   
                    //               this.isTake8 = false;
                    //               this.isShow8 = true;  
                    //               this.status8 = "1" 
                    //               this.checklist(); 
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo8 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo8])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo8 = img.src
                    // //           //       console.log(this.photo8);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo8:this.photo8,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id8,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id8 = this.photoID.id
                    // //           //     console.log(this.photo8);
                    // //           //     this.status8 = "8"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake8 = false;
                    // //           //     this.isShow8 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData8) => {
                    //           let base64Image8 = 'data:image/jpeg;base64,' + imageData8;
                    //           this.photo8 = base64Image8;
                    //           watermark([this.photo8])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo8 = img.src;
                    //             });
                    //           if (this.photo8 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo8: this.photo8,
                    //               empID: this.empID,
                    //               photoID: this.id8,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo8 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake8 = false;
                    //               this.isShow8 = true;
                    //               this.status8 = "1"    
                    //               this.checklist();
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo8 = "data:image/png;base64,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"
                    //           //   watermark([this.photo8])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo8 = img.src
                    //           //       console.log(this.photo8);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo8:this.photo8,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id8,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id8 = this.photoID.id
                    //           //     console.log(this.photo8);
                    //           //     this.status8 = "8"
                    //           //     this.checktakeback();
                    //           //     this.isTake8 = false;
                    //           //     this.isShow8 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData8) {
                        var base64Image8 = 'data:image/jpeg;base64,' + imageData8;
                        _this.photo8 = base64Image8;
                        if (_this.photo8 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo8: _this.photo8,
                                empID: _this.empID,
                                photoID: _this.id8,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo8 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake8 = false;
                                _this.isShow8 = true;
                                _this.status8 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        // this.photo8 = "data:image/png;base64,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"
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo8: this.photo8,
                        //   empID: this.empID,
                        //   photoID: this.id8,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo8 = this.postDataService.apiServer_url + photoID
                        //   this.isTake8 = false;
                        //   this.isShow8 = true;
                        //   this.status8 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 9) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData9) => {
                    //           let base64Image9 = 'data:image/jpeg;base64,' + imageData9;
                    //           this.photo9 = base64Image9;
                    //           watermark([this.photo9])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo9 = img.src;
                    //             });
                    //           if (this.photo9 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo9: this.photo9,
                    //               empID: this.empID,
                    //               photoID: this.id9,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo9 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake9 = false;
                    //               this.isShow9 = true; 
                    //               this.status9 = "1"   
                    //               this.checklist();
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo9 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo9])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo9 = img.src
                    // //           //       console.log(this.photo9);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo9:this.photo9,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id9,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id9 = this.photoID.id
                    // //           //     console.log(this.photo9);
                    // //           //     this.status9 = "9"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake9 = false;
                    // //           //     this.isShow9 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData9) => {
                    //           let base64Image9 = 'data:image/jpeg;base64,' + imageData9;
                    //           this.photo9 = base64Image9;
                    //           watermark([this.photo9])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo9 = img.src;
                    //             });
                    //           if (this.photo9 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo9: this.photo9,
                    //               empID: this.empID,
                    //               photoID: this.id9,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo9 = this.postDataService.apiServer_url + photoID
                    //               this.isTake9 = false;
                    //               this.isShow9 = true;  
                    //               this.status9 = "1"  
                    //               this.checklist();
                    //             });
                    //           }
                    //         }, (err) => {
                    //             this.photo9 = "data:image/png;base64,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"
                    //             watermark([this.photo9])
                    //               .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //                 '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //               .then(img => {
                    //                 this.photo9 = img.src
                    //                 console.log(this.photo9);
                    //               });
                    //            this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo9:this.photo9,
                    //               empID: this.empID,
                    //               photoID: this.id9,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo9 = this.postDataService.apiServer_url + photoID
                    //               this.photoID = photoID
                    //               this.id9 = this.photoID.id
                    //               console.log(this.photo9);
                    //               this.status9 = "9"
                    //               this.checktakeback();
                    //               this.isTake9 = false;
                    //               this.isShow9 = true;
                    //               this.startTimer();
                    //             });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData9) {
                        var base64Image9 = 'data:image/jpeg;base64,' + imageData9;
                        _this.photo9 = base64Image9;
                        if (_this.photo9 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo9: _this.photo9,
                                empID: _this.empID,
                                photoID: _this.id9,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo9 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake9 = false;
                                _this.isShow9 = true;
                                _this.status9 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        // this.photo9 = "data:image/png;base64,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"
                        // this.resizePhoto();
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo9: this.photo9,
                        //   empID: this.empID,
                        //   photoID: this.id9,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo9 = this.postDataService.apiServer_url + photoID
                        //   this.isTake9 = false;
                        //   this.isShow9 = true;
                        //   this.status9 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                if (id == 10) {
                    //#region gallery
                    // const alert = await this.alertController.create({
                    //   buttons: [
                    //     {
                    //       text: 'เลือกจากคลังรูปภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.galleryOptions).then((imageData10) => {
                    //           let base64Image10 = 'data:image/jpeg;base64,' + imageData10;
                    //           this.photo10 = base64Image10;
                    //           watermark([this.photo10])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo10 = img.src;
                    //             });
                    //           if (this.photo10 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo10: this.photo10,
                    //               empID: this.empID,
                    //               photoID: this.id10,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo10 = this.postDataService.apiServer_url + photoID                                      
                    //               this.isTake10 = false;
                    //               this.isShow10 = true;  
                    //               this.status10 = "1"  
                    //               this.checklist();  
                    //             });
                    //           }
                    //         }, (err) => {
                    // //           //   this.photo10 = "data:image/png;base64,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"
                    // //           //   watermark([this.photo10])
                    // //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    // //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    // //           //     .then(img => {
                    // //           //       this.photo10 = img.src
                    // //           //       console.log(this.photo10);
                    // //           //     });
                    // //           //  this.resizePhoto();
                    // //           //   let params = {
                    // //           //     planID: this.planID,
                    // //           //     installID: this.installID,
                    // //           //     photo10:this.photo10,
                    // //           //     empID: this.empID,
                    // //           //     photoID: this.id10,
                    // //           //     jobtype: this.jobtype
                    // //           //   }
                    // //           //   console.log(params);
                    // //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    // //           //     this.photoID = photoID
                    // //           //     this.id10 = this.photoID.id
                    // //           //     console.log(this.photo10);
                    // //           //     this.status10 = "10"
                    // //           //     this.checktakeback();
                    // //           //     this.isTake10 = false;
                    // //           //     this.isShow10 = true;
                    // //           //     this.startTimer();
                    // //           //   });
                    //         });
                    //       }
                    //     }, {
                    //       text: 'ถ่ายภาพ',
                    //       handler: () => {
                    //         this.camera.getPicture(this.cameraOptions).then((imageData10) => {
                    //           let base64Image10 = 'data:image/jpeg;base64,' + imageData10;
                    //           this.photo10 = base64Image10;
                    //           watermark([this.photo10])
                    //             .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName,
                    //               '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //             .then(img => {
                    //               this.photo10 = img.src;
                    //             });
                    //           if (this.photo10 == null || "") {
                    //           } else {
                    //             this.resizePhoto();
                    //             let params = {
                    //               planID: this.planID,
                    //               installID: this.installID,
                    //               photo10: this.photo10,
                    //               empID: this.empID,
                    //               photoID: this.id10,
                    //               jobtype: this.jobtype
                    //             }
                    //             console.log(params);
                    //             this.postDataService.SaveCaseAll(params).then(photoID => {
                    //               this.photo10 = this.postDataService.apiServer_url + photoID                    
                    //               this.isTake10 = false;
                    //               this.isShow10 = true;  
                    //               this.status10 = "1"  
                    //               this.checklist();
                    //             });
                    //           }
                    //         }, (err) => {
                    //           //   this.photo10 = "data:image/png;base64,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"
                    //           //   watermark([this.photo10])
                    //           //     .image(watermark.text.upperLeft('ร้าน' + this.CustomerName + ' ' + 'ชื่อสินค้า' + this.ItemsName ,
                    //           //       '28px Tahoma bold', '#FBFBF7', 0.8, 48))
                    //           //     .then(img => {
                    //           //       this.photo10 = img.src
                    //           //       console.log(this.photo10);
                    //           //     });
                    //           //  this.resizePhoto();
                    //           //   let params = {
                    //           //     planID: this.planID,
                    //           //     installID: this.installID,
                    //           //     photo10:this.photo10,
                    //           //     empID: this.empID,
                    //           //     photoID: this.id10,
                    //           //     jobtype: this.jobtype
                    //           //   }
                    //           //   console.log(params);
                    //           //   this.postDataService.SaveCaseAll(params).then(photoID => {
                    //           //     this.photoID = photoID
                    //           //     this.id10 = this.photoID.id
                    //           //     console.log(this.photo10);
                    //           //     this.status10 = "10"
                    //           //     this.checktakeback();
                    //           //     this.isTake10 = false;
                    //           //     this.isShow10 = true;
                    //           //     this.startTimer();
                    //           //   });
                    //         });
                    //       }
                    //     }
                    //   ]
                    // });
                    // await alert.present();
                    //#endregion
                    this.camera.getPicture(this.cameraOptions).then(function (imageData10) {
                        var base64Image10 = 'data:image/jpeg;base64,' + imageData10;
                        _this.photo10 = base64Image10;
                        if (_this.photo10 == null || "") {
                        }
                        else {
                            _this.resizePhoto();
                            var params = {
                                planID: _this.planID,
                                installID: _this.installID,
                                photo10: _this.photo10,
                                empID: _this.empID,
                                photoID: _this.id10,
                                jobtype: _this.jobtype
                            };
                            console.log(params);
                            _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                _this.photo10 = _this.postDataService.apiServer_url + photoID;
                                _this.isTake10 = false;
                                _this.isShow10 = true;
                                _this.status10 = "1";
                                _this.checklist();
                            });
                        }
                    }, function (err) {
                        // this.photo10 = "data:image/png;base64,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"
                        // this.resizePhoto();
                        // let params = {
                        //   planID: this.planID,
                        //   installID: this.installID,
                        //   photo10: this.photo10,
                        //   empID: this.empID,
                        //   photoID: this.id10,
                        //   jobtype: this.jobtype
                        // }
                        // console.log(params);
                        // this.postDataService.SaveCaseAll(params).then(photoID => {
                        //   this.photo10 = this.postDataService.apiServer_url + photoID
                        //   this.isTake10 = false;
                        //   this.isShow10 = true;
                        //   this.status10 = "1"
                        //   this.checklist();
                        // });
                    });
                }
                this.checklist();
                this.checktakeback();
                return [2 /*return*/];
            });
        });
    };
    //#endregion
    //#region Check Take Before
    DetailofdetaillistpmPage.prototype.checktakeback = function () {
        if (this.jobtype == "INSTALL") {
            console.log('INSTALL');
            if (this.status6 == "1" || this.status7 == "1" || this.status8 == "1" || this.status9 == "1" || this.status10 == "1") {
                this.isenabledadddevice = true;
            }
        }
        else if (this.jobtype == "CM") {
            console.log('CM');
            console.log('this.status6', this.status6);
            if (this.status6 == "1" || this.status7 == "1" || this.status8 == "1" || this.status9 == "1" || this.status10 == "1") {
                this.isenabledcheck = true;
                this.isenabledrequest = true;
                console.log('this.isenabledcheck', this.isenabledcheck);
            }
        }
        else if (this.jobtype == "UNINSTALL") {
            console.log('UNINSTALL');
            if (this.status6 == "1" || this.status7 == "1" || this.status8 == "1" || this.status9 == "1" || this.status10 == "1") {
                this.isenabledcuseva = true;
            }
        }
        else if (this.jobtype == "PM") {
            console.log('PM');
            if (this.status6 == "1" && this.status7 == "1" && this.status8 == "1" && this.status9 == "1" && this.status10 == "1" &&
                this.status1 == "1" && this.status2 == "1" && this.status3 == "1" && this.status4 == "1" && this.status5 == "1") {
                if (this.sparetype != "") {
                    this.isenabledspare = true;
                }
                this.isenabledcheck = false;
            }
        }
    };
    //#endregion
    //#region Check Take After  
    DetailofdetaillistpmPage.prototype.checklist = function () {
        if (this.jobtype == "INSTALL") {
            if (this.status6 == "1" || this.status7 == "1" || this.status8 == "1" || this.status9 == "1" || this.status10 == "1") {
                this.isenabledadddevice = true;
            }
        }
        else if (this.jobtype == "CM") {
            if (this.status6 == "1" || this.status7 == "1" || this.status8 == "1" || this.status9 == "1" || this.status10 == "1") {
                this.isenabledcheck = true;
                this.isenabledrequest = true;
            }
        }
        else if (this.jobtype == "UNINSTALL") {
            if (this.status6 == "1" || this.status7 == "1" || this.status8 == "1" || this.status9 == "1" || this.status10 == "1") {
                this.isenabledcuseva = true;
            }
        }
        else if (this.jobtype == "PM") {
            if (this.status6 == "1" && this.status7 == "1" && this.status8 == "1" && this.status9 == "1" && this.status10 == "1" &&
                this.status1 == "1" && this.status2 == "1" && this.status3 == "1" && this.status4 == "1" && this.status5 == "1") {
                if (this.sparetype != "") {
                    this.isenabledspare = true;
                }
                this.isenabledcheck = false;
            }
        }
        // if (this.status6 == "1" && this.status7 == "1" && this.status8 == "1" && this.status9 == "1" && this.status10 == "1") {
        //   if (this.jobtype == "INSTALL") {
        //     this.isenabledadddevice = true;
        //   }
        //   else if (this.jobtype == "CM") {
        //     this.isenabledcheck = true;
        //     this.isenabledrequest = true;
        //   }
        //   else if (this.jobtype == "UNINSTALL") {
        //     this.isenabledcuseva = true;
        //   }
        //   else if (this.jobtype == "PM") {
        //     if (this.sparetype != "") {
        //       this.isenabledspare = true;
        //     }
        //     this.isenabledcheck = false;
        //   }
        // }
    };
    //#endregion
    DetailofdetaillistpmPage.prototype.changsparepm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_checklistcm_checklistcm_page__WEBPACK_IMPORTED_MODULE_12__["ChecklistcmPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                empID: this.empID,
                                planID: this.planID,
                                install: this.installID,
                                InstallPlanName: this.InstallPlanName,
                                ItemsName: this.ItemsName,
                                ItemCode: this.ItemCode,
                                SerialNo: this.SerialNo,
                                Cat: this.Category,
                                jobtype: this.jobtype
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.list = data;
                            console.log('dismiss', data);
                            for (var i = 0; i < _this.list.length; i++) {
                                _this.list = _this.list[i];
                            }
                            _this.idnew = _this.list.data.idnew;
                            _this.idold = _this.list.data.idold;
                            _this.sparepart = _this.list.data.sparepart;
                            _this.typedevice = _this.list.data.typedevice;
                            console.log(_this.list.data);
                            if (_this.list.data == 0) {
                                _this.isenabledcuseva = false;
                            }
                            else {
                                _this.isenabledcuseva = true;
                            }
                            _this.checkcm();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#region checklist
    DetailofdetaillistpmPage.prototype.check = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.jobtype != "CM")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _detailofdetaillistpm_checklist_checklist_page__WEBPACK_IMPORTED_MODULE_11__["ChecklistPage"],
                                cssClass: 'my-custom-modal-css-pm',
                                componentProps: {
                                    empID: this.empID,
                                    planID: this.planID,
                                    install: this.installID,
                                    type: "new"
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.postDataService.checkBI(_this.planID, _this.installID).then(function (data) {
                                console.log('checkBI count', data[0].count);
                                if (data[0].count > 0) {
                                    _this.isenabledcuseva = false;
                                }
                                else {
                                    _this.isenabledcuseva = true;
                                }
                                // if (data == "true") {
                                //   this.modalController.dismiss(0);
                                // } else {
                                //   this.alertFail()
                                //   // this.modalController.dismiss(1);
                                // }
                            });
                            // for (let i = 0; i < this.list.length; i++) {
                            //   this.list = this.list[i]
                            // }
                            // this.list = this.list.data
                            // console.log(this.list)
                            // if (this.list == "") {
                            // }
                            // if (this.list == 0) {
                            //   this.isenabledcuseva = true;
                            // }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        if (!(this.jobtype == "CM")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.modalController.create({
                                component: _detailofdetaillistpm_checklistcm_checklistcm_page__WEBPACK_IMPORTED_MODULE_12__["ChecklistcmPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    empID: this.empID,
                                    planID: this.planID,
                                    install: this.installID,
                                    InstallPlanName: this.InstallPlanName,
                                    ItemsName: this.ItemsName,
                                    ItemCode: this.ItemCode,
                                    SerialNo: this.SerialNo,
                                    Cat: this.Category,
                                    type: this.jobtype
                                }
                            })];
                    case 4:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.list = res;
                            console.log('res', res);
                            for (var i = 0; i < _this.list.length; i++) {
                                _this.list = _this.list[i];
                            }
                            _this.idnew = _this.list.data.idnew;
                            _this.idold = _this.list.data.idold;
                            _this.sparepart = _this.list.data.sparepart;
                            _this.typedevice = _this.list.data.typedevice;
                            console.log(_this.list.data);
                            if (_this.list.data == 0) {
                                _this.isenabledcuseva = false;
                            }
                            else {
                                _this.isenabledcuseva = true;
                            }
                            _this.checkcm();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //#endregion
    //#region Modal Sig
    DetailofdetaillistpmPage.prototype.Modal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_signature_signature_page__WEBPACK_IMPORTED_MODULE_4__["SignaturePage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: { sign: this.sign }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.sign = data.data;
                            console.log(_this.sign);
                            if (_this.sign == false) {
                                _this.showSig = false;
                            }
                            else {
                                var params = {
                                    planID: _this.planID,
                                    installID: _this.installID,
                                    signature: _this.sign,
                                    jobtype: _this.jobtype + "2",
                                    empID: _this.empID,
                                    photoID: _this.idsig
                                };
                                console.log(params);
                                _this.postDataService.SaveCaseAll(params).then(function (photoID) {
                                    console.log(photoID);
                                    _this.sign = _this.postDataService.apiServer_url + photoID;
                                    _this.photoID = photoID;
                                    _this.idsig = _this.photoID.id;
                                    console.log('url', _this.sign);
                                });
                                _this.showSig = true;
                                _this.isenabledcuspass = true;
                                _this.onCheckEva();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region Evaluation  
    DetailofdetaillistpmPage.prototype.clickeva = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_checkevaluation_checkevaluation_page__WEBPACK_IMPORTED_MODULE_14__["CheckevaluationPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                empID: this.empID,
                                planID: this.planID,
                                install: this.installID
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.list = data;
                            console.log(data);
                            for (var i = 0; i < _this.list.length; i++) {
                                _this.list = _this.list[i];
                            }
                            _this.list = _this.list.data;
                            console.log(_this.list);
                            if (_this.list == "") {
                            }
                            // if (this.list == 0) {
                            //   this.isenabledsig = true;
                            // }
                            _this.onCheckEva();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    DetailofdetaillistpmPage.prototype.onBackToPageMain = function () {
        var params1 = {
            item: this.item,
            type: this.type,
            date: this.date,
            planID: this.planID,
            cusID: this.cusID,
            installID: this.installID,
            workfinish: 0,
            month: this.planmonth,
            year: this.planyear,
        };
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(params1)
            }
        };
        console.log(navigationExtras);
        this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
    };
    //#region save All 
    DetailofdetaillistpmPage.prototype.saveData = function () {
        var _this = this;
        this.IsWaitsave = true;
        this.pauseTimer();
        if (this.jobtype == 'CM' && (this.isQuotation || this.requesText)) {
            console.log('this.isQuotation', this.isQuotation);
            console.log('this.isRequest', this.isRequest);
            console.log('this.requesText', this.requesText);
            this.postDataService.RequestSparepart(this.planID, this.empID, this.isBreak, this.requesText, this.isQuotation, this.isRequest).then(function (res) {
                console.log('res', res);
                var params = {
                    item: _this.item,
                    type: "getCM",
                    date: _this.date,
                };
                var navigationExtras = {
                    queryParams: {
                        data: JSON.stringify(params)
                    }
                };
                _this.presentToast();
                _this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
            });
        }
        else {
            var params = {
                planID: this.planID,
                cusID: this.cusID,
                installID: this.installID,
                idold: this.idold,
                idnew: this.idnew,
                typedevice: this.typedevice,
                signature: this.sign,
                empID: this.empID,
                jobtype: this.jobtype + "3",
                sparepart: this.sparepart
            };
            console.log('params', params);
            this.postDataService.SaveCaseAll(params).then(function (servicephoto) {
                _this.status = servicephoto;
                if (_this.status == true) {
                    _this.IsWaitsave = false;
                    if (_this.jobtype == 'PM') {
                        var params_1 = {
                            planID: _this.planID,
                            installID: _this.installID,
                            jobtype: "GetTran",
                        };
                        _this.postDataService.GetTran(params_1).then(function (tranid) {
                            _this.tranid = tranid;
                            console.log(_this.tranid);
                            _this.GenReport();
                            _this.onBackToPageMain();
                        });
                    }
                    else {
                        if (_this.jobtype == 'CM') {
                            var params_2 = {
                                item: _this.item,
                                type: "getCM",
                                date: _this.date,
                            };
                            var navigationExtras = {
                                queryParams: {
                                    data: JSON.stringify(params_2)
                                }
                            };
                            _this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
                            // this.navCtrl.navigateForward(['/menu/overview']); 
                        }
                        else if (_this.jobtype == 'INSTALL') {
                            var params_3 = {
                                item: _this.item,
                                type: "getIN",
                                date: _this.date,
                            };
                            var navigationExtras = {
                                queryParams: {
                                    data: JSON.stringify(params_3)
                                }
                            };
                            _this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
                            // this.navCtrl.navigateForward(['/menu/overview']); 
                        }
                        else if (_this.jobtype == 'UNINSTALL') {
                            var params_4 = {
                                item: _this.item,
                                type: "getUN",
                                date: _this.date,
                            };
                            var navigationExtras = {
                                queryParams: {
                                    data: JSON.stringify(params_4)
                                }
                            };
                            _this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);
                            // this.navCtrl.navigateForward(['/menu/overview']); 
                        }
                    }
                    _this.presentToast();
                }
                else if (_this.status == false) {
                    _this.alertFail();
                }
            });
        }
    };
    //#endregion
    DetailofdetaillistpmPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: 'เรียบร้อย',
                            message: 'ระบบบันทึกข้อมูลเรียบร้อยแล้ว',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailofdetaillistpmPage.prototype.GenReport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.tranid);
                        return [4 /*yield*/, this.modalController.create({
                                component: _detailofdetaillistpm_checklist_checklist_page__WEBPACK_IMPORTED_MODULE_11__["ChecklistPage"],
                                cssClass: 'my-custom-modal-css-report',
                                componentProps: {
                                    tranid: this.tranid,
                                    type: "report",
                                    item: this.item,
                                    types: this.type,
                                    date: this.date,
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
    //#region openModalcustomereva
    DetailofdetaillistpmPage.prototype.openModalcustomereva = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_customerevaluation_customerevaluation_page__WEBPACK_IMPORTED_MODULE_5__["CustomerevaluationPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                installID: this.installID,
                                planID: this.planID,
                                jobtype: this.jobtype,
                                workclose: 'workclose'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.cusEva = data;
                            //console.log('cusEva',this.cusEva);
                            _this.resolution = (_this.cusEva.data.resolution != undefined) ? _this.cusEva.data.resolution : '';
                            _this.resolutiondetail = (_this.cusEva.data.resolutiondetail != undefined) ? _this.cusEva.data.resolutiondetail : '';
                            _this.TecComment = (_this.cusEva.data.TecComment != undefined) ? _this.cusEva.data.TecComment : '';
                            _this.workclose = (_this.cusEva.data.workclose != undefined) ? _this.cusEva.data.workclose : '';
                            _this.problemby = (_this.cusEva.data.problemby != undefined) ? _this.cusEva.data.problemby : '';
                            console.log(_this.resolution);
                            console.log(_this.resolutiondetail);
                            console.log(_this.TecComment);
                            console.log(_this.workclose);
                            if (_this.jobtype == "CM") {
                                var params = {
                                    planID: _this.planID,
                                    installID: _this.installID,
                                    jobtype: "resolution",
                                    empID: _this.empID,
                                    resolution: _this.resolution,
                                    idold: _this.idold,
                                    TecComment: _this.TecComment,
                                    resolutiondetail: _this.resolutiondetail,
                                    problemby: _this.problemby,
                                    workclose: "WorkClose004"
                                };
                                console.log(params);
                                _this.postDataService.SaveCaseAll(params).then(function (resolution) {
                                    console.log(resolution);
                                });
                                _this.isenabledeva = true;
                            }
                            else {
                                var params = {
                                    planID: _this.planID,
                                    installID: _this.installID,
                                    jobtype: "TecComment",
                                    empID: _this.empID,
                                    TecComment: _this.TecComment,
                                };
                                console.log(params);
                                _this.postDataService.SaveCaseAll(params).then(function (resolution) {
                                    console.log(resolution);
                                });
                                _this.isenabledeva = true;
                            }
                            _this.onCheckEva();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region changspare
    DetailofdetaillistpmPage.prototype.changspare = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == 'device')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _detailofdetaillistpm_changsparepart_changsparepart_page__WEBPACK_IMPORTED_MODULE_10__["ChangsparepartPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    planID: this.planID,
                                    installID: this.installID,
                                    jobtype: this.jobtype,
                                    empID: this.empID,
                                    type: type
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.list = data;
                            _this.list = _this.list.data;
                            console.log(_this.list);
                            console.log(_this.installID);
                            if (_this.list == 0) {
                                var params = {
                                    installID: _this.installID,
                                    typedevice: "GetSerial",
                                };
                                console.log(params);
                                _this.postDataService.postdevice(params).then(function (serial) {
                                    console.log(serial);
                                    if (serial != false) {
                                        _this.SerialNo = serial;
                                        _this.isenabledcuseva = true;
                                    }
                                    console.log(_this.SerialNo);
                                });
                            }
                            else {
                                _this.isenabledcuseva = false;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_changsparepart_changsparepart_page__WEBPACK_IMPORTED_MODULE_10__["ChangsparepartPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                planID: this.planID,
                                installID: this.installID,
                                jobtype: this.jobtype,
                                empID: this.empID
                            }
                        })];
                    case 4:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.list = data;
                            _this.list = _this.list.data;
                            console.log(_this.list);
                            if (_this.list == 0) {
                                _this.isenabledcuseva = true;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region Modal Cuscode
    DetailofdetaillistpmPage.prototype.openModalcustomerpw = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _detailofdetaillistpm_customerpassword_customerpassword_page__WEBPACK_IMPORTED_MODULE_9__["CustomerpasswordPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                cusName: this.CustomerName,
                                password: this.password,
                                planID: this.planID,
                                installID: this.installID,
                                type: this.jobtype
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            _this.cuscom = data;
                            _this.code = _this.cuscom.data.code;
                            _this.Cuscomment = _this.cuscom.data.Cuscomment;
                            if (_this.jobtype != 'PM') {
                                var params = {
                                    planID: _this.planID,
                                    installID: _this.installID,
                                    jobtype: "Cuscomment",
                                    empID: _this.empID,
                                    Cuscomment: _this.Cuscomment,
                                };
                                _this.postDataService.SaveCaseAll(params).then(function (comment) {
                                    _this.onPassCustomer();
                                });
                                _this.isenabledsave = true;
                            }
                            else {
                                // if (this.cuscom.data == 0) {
                                //   this.alertCusCode();
                                // }
                                if (_this.code == _this.password) {
                                    var params = {
                                        planID: _this.planID,
                                        installID: _this.installID,
                                        jobtype: "Cuscomment",
                                        empID: _this.empID,
                                        Cuscomment: _this.Cuscomment,
                                    };
                                    console.log(params);
                                    _this.postDataService.SaveCaseAll(params).then(function (comment) {
                                        _this.onPassCustomer();
                                    });
                                    _this.isenabledsave = true;
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region Alert Cuscode
    DetailofdetaillistpmPage.prototype.alertCusCode = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'แจ้งเตือน',
                            message: 'กรุณากรอกรหัสยืนยันตัวตนลูกค้า',
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
    DetailofdetaillistpmPage.prototype.alertSuccess = function () {
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
    DetailofdetaillistpmPage.prototype.alertFail = function () {
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
    //#region time
    DetailofdetaillistpmPage.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.time > 0) {
                _this.time++;
            }
            else {
                _this.time = 1;
            }
        }, 1000);
    };
    DetailofdetaillistpmPage.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    //#endregion
    //#region Resize Photo
    DetailofdetaillistpmPage.prototype.compressImage = function (src, newX, newY) {
        return new Promise(function (res, rej) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                var elem = document.createElement('canvas');
                elem.width = newX;
                elem.height = newY;
                var ctx = elem.getContext('2d');
                ctx.drawImage(img, 0, 0, newX, newY);
                var data = ctx.canvas.toDataURL();
                res(data);
            };
            img.onerror = function (error) { return rej(error); };
        });
    };
    DetailofdetaillistpmPage.prototype.resizePhoto = function () {
        var _this = this;
        this.compressImage(this.request, 100, 100).then(function (compressed) {
            _this.request = compressed;
            console.log(_this.request);
        });
        this.compressImage(this.sign, 100, 100).then(function (compressed) {
            _this.sign = compressed;
            console.log(_this.sign);
        });
        this.compressImage(this.photo1, 100, 100).then(function (compressed) {
            _this.photo1 = compressed;
        });
        this.compressImage(this.photo2, 100, 100).then(function (compressed) {
            _this.photo2 = compressed;
        });
        this.compressImage(this.photo3, 100, 100).then(function (compressed) {
            _this.photo3 = compressed;
        });
        this.compressImage(this.photo4, 100, 100).then(function (compressed) {
            _this.photo4 = compressed;
        });
        this.compressImage(this.photo5, 100, 100).then(function (compressed) {
            _this.photo5 = compressed;
        });
        this.compressImage(this.photo6, 100, 100).then(function (compressed) {
            _this.photo6 = compressed;
        });
        this.compressImage(this.photo7, 100, 100).then(function (compressed) {
            _this.photo7 = compressed;
        });
        this.compressImage(this.photo8, 100, 100).then(function (compressed) {
            _this.photo8 = compressed;
        });
        this.compressImage(this.photo9, 100, 100).then(function (compressed) {
            _this.photo9 = compressed;
        });
        this.compressImage(this.photo10, 100, 100).then(function (compressed) {
            _this.photo10 = compressed;
        });
    };
    //#endregion
    DetailofdetaillistpmPage.prototype.log = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertController.create({
                            message: 'แจ้งปัญหาเกี่ยวกับการใช้งานแอพ',
                            inputs: [
                                {
                                    name: 'detail',
                                    placeholder: 'รายละเอียด',
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
                                        _this.saveTabletProblemLog(data.detail);
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
    DetailofdetaillistpmPage.prototype.saveTabletProblemLog = function (LogName) {
        var params = {
            planID: this.planID,
            installID: this.installID,
            empID: this.empID,
            typedevice: "saveTabletProblemLog",
            LogName: LogName
        };
        console.log(params);
        this.postDataService.postdevice(params).then(function (data) {
            console.log(data);
        });
    };
    DetailofdetaillistpmPage.prototype.showSpare = function () {
        var params = {
            empID: this.empID,
            insID: this.installID,
            planID: this.planID,
            item: this.item,
            type: this.type,
            date: this.date,
            ItemsName: this.ItemsName,
            Type: "Sparepart"
        };
        console.log(params);
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(params)
            }
        };
        this.navCtrl.navigateForward(['/sparepart'], navigationExtras);
        console.log(navigationExtras);
    };
    DetailofdetaillistpmPage.prototype.logs = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _page_detaillistpm_log_log_page__WEBPACK_IMPORTED_MODULE_17__["LogPage"],
                            cssClass: 'my-custom-modal-css-pm',
                            componentProps: {
                                empID: this.empID,
                                insID: this.installID,
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
    DetailofdetaillistpmPage.prototype.response = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert = this.alertController.create({
                            message: 'แจ้งแอดมินกรณีไม่สามารถปิดงานได้',
                            inputs: [
                                {
                                    name: 'remark',
                                    placeholder: 'รายละเอียด',
                                    type: 'text'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    handler: function (data) {
                                    }
                                },
                                {
                                    text: 'บันทึก',
                                    handler: function (data) {
                                        _this.saveResponse(data);
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
    DetailofdetaillistpmPage.prototype.saveResponse = function (data) {
        var _this = this;
        console.log(data);
        if (data.desc == '') {
            this.alertResponse();
        }
        else {
            var params = {
                insID: this.installID,
                planID: this.planID,
                typedevice: "SaveResponse",
                empID: this.empID,
                remark: data.remark,
            };
            console.log(params);
            this.postDataService.postdevice(params).then(function (status) {
                console.log(status);
                if (status == true) {
                    _this.alertSuccess();
                }
            });
        }
    };
    DetailofdetaillistpmPage.prototype.alertResponse = function () {
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
    DetailofdetaillistpmPage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] },
        { type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _auth_authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"] },
        { type: _post_data_service__WEBPACK_IMPORTED_MODULE_8__["PostDataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewimage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DetailofdetaillistpmPage.prototype, "waterMarkImage", void 0);
    DetailofdetaillistpmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detailofdetaillistpm',
            template: __webpack_require__(/*! raw-loader!./detailofdetaillistpm.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.html"),
            styles: [__webpack_require__(/*! ./detailofdetaillistpm.page.scss */ "./src/app/page/joball/detailofdetaillistpm/detailofdetaillistpm.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"],
            _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _auth_authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_8__["PostDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], DetailofdetaillistpmPage);
    return DetailofdetaillistpmPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-joball-detailofdetaillistpm-detailofdetaillistpm-module-es5.js.map