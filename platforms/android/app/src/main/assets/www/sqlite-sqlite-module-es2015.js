(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sqlite-sqlite-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sqlite/sqlite.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sqlite/sqlite.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Ionic 4 SQLite\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content padding text-center>\r\n \r\n  <ion-button expand=\"block\" (click)=\"createDB()\">\r\n    Create DataBase\r\n  </ion-button>\r\n \r\n  <ion-button expand=\"block\" (click)=\"createTable()\">\r\n    Create Table\r\n  </ion-button>\r\n \r\n  <ion-button expand=\"block\" (click)=\"getRows()\">\r\n    Get Rows\r\n  </ion-button>\r\n \r\n \r\n  <ion-item-divider>\r\n    <ion-input placeholder=\"Enter Name\" [(ngModel)]=\"name_model\"></ion-input>\r\n    <ion-button expand=\"block\" (click)=\"insertRow()\">\r\n      Insert Row\r\n    </ion-button>\r\n  </ion-item-divider>\r\n \r\n \r\n \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        Row ID\r\n      </ion-col>\r\n      <ion-col>\r\n        Name\r\n      </ion-col>\r\n      <ion-col>\r\n        Username\r\n      </ion-col>\r\n      <ion-col>\r\n        Position\r\n      </ion-col>\r\n      <!-- <ion-col>\r\n        position\r\n      </ion-col>\r\n      <ion-col>\r\n        Workall\r\n      </ion-col>\r\n      <ion-col>\r\n        Workfinish\r\n      </ion-col>\r\n      <ion-col>\r\n        empID\r\n      </ion-col>\r\n      <ion-col>\r\n        Delete\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        {{data.empID}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{data.name}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{data.username}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{data.position}}\r\n      </ion-col>\r\n      <!-- <ion-col>\r\n        {{item.position}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{item.Workall}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{item.Workfinish}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{item.empID}}\r\n      </ion-col> -->\r\n      <ion-col>\r\n        <ion-button (click)=\"deleteRow()\" size=\"small\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n \r\n</ion-content>\r\n "

/***/ }),

/***/ "./src/app/sqlite/sqlite.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sqlite/sqlite.module.ts ***!
  \*****************************************/
/*! exports provided: SqlitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlitePageModule", function() { return SqlitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sqlite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sqlite.page */ "./src/app/sqlite/sqlite.page.ts");







const routes = [
    {
        path: '',
        component: _sqlite_page__WEBPACK_IMPORTED_MODULE_6__["SqlitePage"]
    }
];
let SqlitePageModule = class SqlitePageModule {
};
SqlitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sqlite_page__WEBPACK_IMPORTED_MODULE_6__["SqlitePage"]]
    })
], SqlitePageModule);



/***/ }),

/***/ "./src/app/sqlite/sqlite.page.scss":
/*!*****************************************!*\
  !*** ./src/app/sqlite/sqlite.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxbGl0ZS9zcWxpdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sqlite/sqlite.page.ts":
/*!***************************************!*\
  !*** ./src/app/sqlite/sqlite.page.ts ***!
  \***************************************/
/*! exports provided: SqlitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlitePage", function() { return SqlitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let SqlitePage = class SqlitePage {
    constructor(platform, sqlite) {
        this.platform = platform;
        this.sqlite = sqlite;
        this.name_model = "test"; // Input field model
        this.username = "test"; // Input field model
        this.row_data = []; // Table rows
        this.database_name = "db.db"; // DB name
        this.table_name = "user"; // Table name
        this.data = [];
        this.platform.ready().then(() => {
            this.createDB();
            this.createTable();
        }).catch(error => {
            console.log(error);
        });
    }
    createDB() {
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        })
            .then((db) => {
            this.databaseObj = db;
            alert('db Database Created!');
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    createTable() {
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (name varchar(50), username varchar(50), emp_id varchar(50), position varchar(50))', [])
            .then(() => {
            alert('Table Created!');
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    insertRow() {
        this.databaseObj.executeSql('INSERT INTO user VALUES (?,?,?,?)', [this.data.name, this.data.username, this.data.emp_id, this.data.empID])
            .then(() => {
            alert('Row Inserted!');
            this.getRows();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    getRows() {
        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
            .then((res) => {
            this.row_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    this.row_data.push(res.rows.item(i));
                    this.data.user = this.row_data.push(res.rows.item(i).user);
                    this.data.username = this.row_data.push(res.rows.item(i).username);
                    this.data.position = this.row_data.push(res.rows.item(i).position);
                    this.data.empID = this.row_data.push(res.rows.item(i).empID);
                    console.log(this.data.user);
                }
            }
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    deleteRow() {
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE name = " + this.data.name, [])
            .then((res) => {
            alert("Row Deleted!");
            this.getRows();
        })
            .catch(e => {
            alert("error " + JSON.stringify(e));
        });
    }
    ngOnInit() {
    }
};
SqlitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] }
];
SqlitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sqlite',
        template: __webpack_require__(/*! raw-loader!./sqlite.page.html */ "./node_modules/raw-loader/index.js!./src/app/sqlite/sqlite.page.html"),
        styles: [__webpack_require__(/*! ./sqlite.page.scss */ "./src/app/sqlite/sqlite.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]])
], SqlitePage);



/***/ })

}]);
//# sourceMappingURL=sqlite-sqlite-module-es2015.js.map