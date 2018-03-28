webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <app-login> </app-login>\r\n<!-- *ngIf=\"isLoggedIn$ | async\" -->\r\n<div *ngIf=\"isLoggedIn$ | async\" class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n    <mat-toolbar class=\"class.mat-elevation-z4\" class=\"example-toolbar\"> \r\n        \r\n        <div class=\"test\" fxLayout=\"row\">\r\n          <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n          <h2> Inscrierea la licenta FII </h2>\r\n        </div>\r\n        <div>      \r\n          <button mat-icon-button (click) = \"searchOpen = !searchOpen\" fxHide=\"true\" [fxHide.gt-xs]=\"false\">\r\n            <i class=\"material-icons\">search</i>\r\n          </button>\r\n    \r\n          <mat-form-field class=\"search\" [ngClass]=\"{'search-open': searchOpen == true}\">\r\n            <input matInput autocomplete=\"off\">\r\n          </mat-form-field>\r\n\r\n          \r\n          \r\n        </div>\r\n    </mat-toolbar>\r\n    \r\n  \r\n    <mat-sidenav-container class=\"example-sidenav-container\"\r\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n      <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n                   [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n        \r\n        <img src=\"assets/img/fii.png\">\r\n        <div class=\"menu-link\">\r\n            \r\n            <button mat-button routerLink=\"/projects\">\r\n                <mat-icon> dashboard </mat-icon>\r\n                <span> Proiecte </span>\r\n            </button>\r\n\r\n            <button mat-button routerLink=\"/lecturer-account\">\r\n                <mat-icon> account_circle </mat-icon>\r\n                <span> Cont profesor </span>\r\n            </button>\r\n\r\n            <button mat-button routerLink=\"/student-account\">\r\n                <mat-icon> account_box </mat-icon>\r\n                <span> Cont student </span>\r\n            </button>\r\n\r\n            <button mat-button routerLink=\"/admin-account\">\r\n              <mat-icon> build </mat-icon>\r\n              <span> Cont admin </span>\r\n            </button> \r\n\r\n           \r\n\r\n        </div>\r\n\r\n        <div class=\"menu-bottom\">\r\n\r\n        </div>\r\n      </mat-sidenav>\r\n  \r\n      <mat-sidenav-content fxFlex>\r\n\r\n        <router-outlet> </router-outlet>\r\n\r\n      </mat-sidenav-content>\r\n    \r\n    </mat-sidenav-container>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  z-index: 2; }\n\n.example-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n\n.mat-sidenav {\n  width: 200px; }\n\n.menu-link {\n  height: 40%; }\n  .menu-link button, .menu-link a:hover {\n    width: 100%;\n    height: 48px;\n    font-size: 14px;\n    line-height: 48px;\n    padding: 0 16px;\n    text-decoration: none;\n    text-align: left;\n    color: white !important; }\n\nimg {\n  margin: 15px;\n  max-width: 170px;\n  text-align: center; }\n\nmat-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.search {\n  width: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n  .search.search-open {\n    width: 250px;\n    visibility: visible;\n    opacity: 1;\n    margin-top: 11px; }\n\nmat-sidenav-content {\n  background: #d7e2e8;\n  min-height: 100vh; }\n\nmat-sidenav {\n  background: #546E7A; }\n\n.menu-bottom {\n  height: 20%;\n  background-color: #37474F;\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n  transition: all 0.2s ease; }\n\n.test {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, changeDetectorRef, media, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'app';
        this.searchOpen = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_project_card_project_card_component__ = __webpack_require__("../../../../../src/app/components/project-card/project-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_project_details_project_details_component__ = __webpack_require__("../../../../../src/app/components/project-details/project-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_student_account_student_account_component__ = __webpack_require__("../../../../../src/app/components/student-account/student-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_lecturer_account_lecturer_account_component__ = __webpack_require__("../../../../../src/app/components/lecturer-account/lecturer-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_edit_project_dialog_edit_project_dialog_component__ = __webpack_require__("../../../../../src/app/components/edit-project-dialog/edit-project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_create_project_create_project_component__ = __webpack_require__("../../../../../src/app/components/create-project/create-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_edit_lecturer_account_edit_lecturer_account_component__ = __webpack_require__("../../../../../src/app/components/edit-lecturer-account/edit-lecturer-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_project_list_project_list_component__ = __webpack_require__("../../../../../src/app/components/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_edit_student_account_edit_student_account_component__ = __webpack_require__("../../../../../src/app/components/edit-student-account/edit-student-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_account_admin_account_component__ = __webpack_require__("../../../../../src/app/components/admin-account/admin-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_lecturer_project_statistics_dialog_statistics_dialog_component__ = __webpack_require__("../../../../../src/app/components/lecturer-project-statistics-dialog/statistics-dialog-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_auth_guard__ = __webpack_require__("../../../../../src/app/shared/services/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- #1 import module




















// services


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_project_card_project_card_component__["a" /* ProjectCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_project_details_project_details_component__["a" /* ProjectDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_student_account_student_account_component__["a" /* StudentAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_lecturer_account_lecturer_account_component__["a" /* LecturerAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_lecturer_account_lecturer_account_component__["b" /* SearchStudentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_edit_project_dialog_edit_project_dialog_component__["a" /* EditProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_create_project_create_project_component__["a" /* CreateProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_edit_lecturer_account_edit_lecturer_account_component__["a" /* EditLecturerAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_project_list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_edit_student_account_edit_student_account_component__["a" /* EditStudentAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_admin_account_admin_account_component__["a" /* AdminAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_lecturer_project_statistics_dialog_statistics_dialog_component__["a" /* StatisticsDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__components_lecturer_account_lecturer_account_component__["b" /* SearchStudentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_edit_project_dialog_edit_project_dialog_component__["a" /* EditProjectDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_lecturer_project_statistics_dialog_statistics_dialog_component__["a" /* StatisticsDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__angular_cdk_layout__["d" /* MediaMatcher */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_project_list_project_list_component__ = __webpack_require__("../../../../../src/app/components/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_project_details_project_details_component__ = __webpack_require__("../../../../../src/app/components/project-details/project-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_student_account_student_account_component__ = __webpack_require__("../../../../../src/app/components/student-account/student-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_lecturer_account_lecturer_account_component__ = __webpack_require__("../../../../../src/app/components/lecturer-account/lecturer-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_account_admin_account_component__ = __webpack_require__("../../../../../src/app/components/admin-account/admin-account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_3__components_project_list_project_list_component__["a" /* ProjectListComponent */] /*, canActivate: [AuthGuard] */ },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'project-details', component: __WEBPACK_IMPORTED_MODULE_4__components_project_details_project_details_component__["a" /* ProjectDetailsComponent */] /*, canActivate: [AuthGuard] */ },
    { path: 'student-account', component: __WEBPACK_IMPORTED_MODULE_5__components_student_account_student_account_component__["a" /* StudentAccountComponent */] },
    { path: 'lecturer-account', component: __WEBPACK_IMPORTED_MODULE_6__components_lecturer_account_lecturer_account_component__["a" /* LecturerAccountComponent */] },
    { path: 'admin-account', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_account_admin_account_component__["a" /* AdminAccountComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-account/admin-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" style=\"padding: 20px;\" class=\"components-container-gt-xs\" [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\r\n\r\n    <div class=\"filter\">\r\n\t\t<div class=\"table-header\" style=\"padding: 0 20px;\">\r\n\t\t\t<h1 class=\"mat-headline center-align\" >Utilizatori</h1>\r\n\t\t</div>\r\n\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\r\n\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"height: 80%; width: 100%;\">\r\n\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\r\n\t\t\t</mat-form-field>\r\n        </div>\r\n        \r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n            <ng-container matColumnDef=\"email\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef> email </mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n            </ng-container>\r\n            \r\n            <ng-container matColumnDef=\"role\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef> role </mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.role}} </mat-cell>\r\n            </ng-container>\r\n            \r\n            <ng-container matColumnDef=\"action\">\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef> action </mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> action </mat-cell>\r\n            </ng-container>\r\n            \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator #paginator\r\n            [pageSize]=\"10\"\r\n            [pageSizeOptions]=\"[5, 10, 20]\"\r\n            [showFirstLastButtons]=\"true\">\r\n        </mat-paginator>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-account/admin-account.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-header {\n  background-color: #327ebd;\n  color: white; }\n\n.filter {\n  background: white;\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-account/admin-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminAccountComponent = (function () {
    function AdminAccountComponent() {
        this.displayedColumns = ['email', 'role', 'action'];
        this.dataSource = ELEMENT_DATA;
    }
    AdminAccountComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AdminAccountComponent.prototype, "filter", void 0);
    AdminAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-account',
            template: __webpack_require__("../../../../../src/app/components/admin-account/admin-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-account/admin-account.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminAccountComponent);
    return AdminAccountComponent;
}());

var ELEMENT_DATA = [
    { email: 'bboca@yahoo.comm', role: 'admin' },
    { email: 'bboca@yahoo.comm', role: 'admin' },
    { email: 'bboca@yahoo.comm', role: 'admin' }
];


/***/ }),

/***/ "../../../../../src/app/components/create-project/create-project.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div fxFlex class=\"input-component-holder mat-elevation-z4\">\r\n  \r\n    \r\n    <mat-toolbar class=\"input-header\">\r\n        <h1 class=\"mat headline center-align\"> Adauga un proiect </h1>\r\n        \r\n        <input style=\"display: none;\" type=\"file\" #fileInput>\r\n        <button mat-button type=\"button\" (click)=\"fileInput.click()\">\r\n            <mat-icon> file_upload </mat-icon>\r\n            <span> Importa Proiect </span>\r\n        </button>\r\n    </mat-toolbar>\r\n\r\n    <form [formGroup]=\"createProjectForm\" class=\"input-container\" (ngSubmit)=\"createProjectForm.valid && createProject()\">\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Titlu proiect\" formControlName=\"titleControl\">\r\n                    <mat-error *ngIf=\"createProjectForm.controls['titleControl'].errors?.required && createProjectForm.controls['titleControl'].touched\">\r\n                        Titlul este <strong> obligatoriu </strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Capacitate\" formControlName=\"capacityControl\">\r\n                    <mat-error *ngIf=\"createProjectForm.controls['capacityControl'].errors?.required && createProjectForm.controls['capacityControl'].touched\">\r\n                        Introdu <strong> numarul maxim de studenti pentru acest proiect </strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n            <div fxFill>\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Introdu descrierea\" formControlName=\"descriptionControl\"></textarea>\r\n                    <mat-error *ngIf=\"createProjectForm.controls['descriptionControl'].errors?.required && createProjectForm.controls['descriptionControl'].touched\">\r\n                        Introdu <strong> o descriere pentru acest proiect </strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n            <div fxFill>\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <mat-chip-list #chipList>\r\n                        <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"true\" [removable]=\"true\" (remove)=\"remove(tag)\">\r\n                            {{tag.name}}\r\n                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                        </mat-chip>\r\n                        <input placeholder=\"Adauga tag-uri...\"\r\n                            [matChipInputFor]=\"chipList\"\r\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                            [matChipInputAddOnBlur]=\"true\"\r\n                            (matChipInputTokenEnd)=\"add($event)\" />\r\n                    </mat-chip-list>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n            \r\n            <div fxFLex fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-form-field style=\"width: 80%;\">\r\n                    <input #reference (keyup.enter)=\"addReference(reference.value)\" matInput placeholder=\"Adauga o referinta\">\r\n                </mat-form-field>\r\n                <button type=\"button\" mat-icon-button (click)=\"addReference(reference.value)\">\r\n                    <i class=\"material-icons\">add</i>\r\n                </button>\r\n            </div>\r\n        \r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-list class=\"references-list\">\r\n                    <h3 matSubheader> Referinte </h3>\r\n                    <mat-list-item *ngFor=\"let reference of references; let i = index\">\r\n                        <h4 matLine> {{reference.url}}</h4>\r\n                        <button type=\"button\" mat-icon-button (click)=\"removeReference(i)\">\r\n                            <i class=\"material-icons\">close</i>\r\n                        </button>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n            <div fxFill>\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!createProjectForm.valid\">Adauga proiect</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n</div> \r\n"

/***/ }),

/***/ "../../../../../src/app/components/create-project/create-project.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.input-container {\n  padding: 15px 15px 15px 15px; }\n\n.input-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.example-full-width {\n  width: 100%; }\n\n.input-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n  .input-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n  .input-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n.references-list {\n  max-height: 150px !important;\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-project/create-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var CreateProjectComponent = (function () {
    function CreateProjectComponent(fb) {
        this.fb = fb;
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["c" /* COMMA */]];
        this.tags = [];
        this.references = [];
        this.matcher = new MyErrorStateMatcher();
        this.createForm();
    }
    CreateProjectComponent.prototype.ngOnInit = function () {
    };
    CreateProjectComponent.prototype.createForm = function () {
        this.createProjectForm = this.fb.group({
            titleControl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            capacityControl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            descriptionControl: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
        });
    };
    CreateProjectComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our tag
        if ((value || '').trim()) {
            this.tags.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    CreateProjectComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    CreateProjectComponent.prototype.addReference = function (reference) {
        if (reference === '') {
            return;
        }
        this.references.unshift({ url: reference });
        this.ref.nativeElement.value = '';
    };
    CreateProjectComponent.prototype.removeReference = function (index) {
        this.references.splice(index, 1);
    };
    CreateProjectComponent.prototype.createProject = function () {
        console.log('ma submite');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('reference'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CreateProjectComponent.prototype, "ref", void 0);
    CreateProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-project',
            template: __webpack_require__("../../../../../src/app/components/create-project/create-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-project/create-project.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-lecturer-account/edit-lecturer-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex class=\"input-component-holder mat-elevation-z4\">\r\n        <mat-toolbar class=\"input-header\">\r\n            <h1 class=\"mat headline center-align\"> Modifica setarile contului </h1>\r\n        </mat-toolbar>\r\n\r\n        <div class=\"input-container\">\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n                <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Email (disabled)\" disabled value=\"boca@info.uaic.ro\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Cabinet\" value=\"C201\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n                <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Nume\" value=\"Boca\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Prenume\" value=\"Bogdan\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n                <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                    <div>\r\n                        <mat-form-field style=\"width: 70%;\">\r\n                            <input matInput type=\"{{ isChecked? 'text' : 'password' }}\" placeholder=\"Parola\" value=\"parola\">\r\n                        </mat-form-field>\r\n                        <mat-checkbox [(ngModel)]=\"isChecked\">Arata parola</mat-checkbox>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\">Salveaza schimbarile</button>\r\n        </div>\r\n\r\n</div>    "

/***/ }),

/***/ "../../../../../src/app/components/edit-lecturer-account/edit-lecturer-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLecturerAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditLecturerAccountComponent = (function () {
    function EditLecturerAccountComponent() {
        this.isChecked = false;
    }
    EditLecturerAccountComponent.prototype.ngOnInit = function () {
    };
    EditLecturerAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-lecturer-account-component',
            template: __webpack_require__("../../../../../src/app/components/edit-lecturer-account/edit-lecturer-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-project/create-project.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], EditLecturerAccountComponent);
    return EditLecturerAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-project-dialog/edit-project-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Editeaza proiect </h2>\r\n\r\n<form [formGroup]=\"updateProjectForm\" fxFill (ngSubmit)=\"updateProjectForm.valid && updateProject()\">\r\n    <mat-dialog-content fxLayout=\"row\">\r\n        <div fxFill>    \r\n            <mat-form-field style=\"width: 100%\">\r\n                <input matInput placeholder=\"Titlu\" value={{data.project.title}} formControlName=\"titleControl\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 100%\">\r\n                <textarea matInput placeholder=\"Descriere\" value={{data.project.description}} formControlName=\"descriptionControl\"> </textarea>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 100%\">\r\n                <mat-chip-list #chipList>\r\n                    <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"true\" [removable]=\"true\" (remove)=\"remove(tag)\">\r\n                        {{tag}}\r\n                        <mat-icon matChipRemove>cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input placeholder=\"Adauga sau sterge taguri\"\r\n                        [matChipInputFor]=\"chipList\"\r\n                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                        [matChipInputAddOnBlur]=\"true\"\r\n                        (matChipInputTokenEnd)=\"add($event)\" />\r\n                </mat-chip-list>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field style=\"width: 100%\">\r\n                <input matInput placeholder=\"Numar studenti\" value=\"{{data.project.capacity}}\" formControlName=\"capacityControl\">\r\n            </mat-form-field>\r\n\r\n            <mat-list>\r\n                <h3 matSubheader> Referinte </h3>\r\n                <mat-list-item *ngFor=\"let reference of references; let i = index\">\r\n                    <h4 matLine> {{reference}}</h4>\r\n                    <button type=\"button\" mat-icon-button (click)=\"removeReference(i)\">\r\n                        <i class=\"material-icons\">close</i>\r\n                    </button>\r\n                </mat-list-item>\r\n            </mat-list>\r\n\r\n            <div class=\"row\" style=\"width: 100%; margin-left: 3px;\">\r\n                <mat-form-field style=\"width: calc(100% - 58px) !important;\">\r\n                    <input #reference matInput placeholder=\"Adauga o noua referinta\">\r\n                </mat-form-field>\r\n                <button type=\"button\" mat-icon-button (click)=\"addReference(reference.value)\">\r\n                    <i class=\"material-icons\">add</i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </mat-dialog-content>\r\n\r\n    <mat-dialog-actions> \r\n        <button mat-button mat-dialog-close>Anuleaza</button>\r\n        <button mat-button type=\"button\" (click)=\"updateProject()\">Modifica</button>\r\n    </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-project-dialog/edit-project-dialog.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-project-dialog/edit-project-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditProjectDialogComponent = (function () {
    function EditProjectDialogComponent(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        // Enter, comma
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_2__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_2__angular_cdk_keycodes__["c" /* COMMA */]];
        this.tags = [];
        this.references = [];
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.tags = data.project.tags;
        this.references = data.project.references;
    }
    EditProjectDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditProjectDialogComponent.prototype.updateProject = function () {
        if (this.updateProjectForm.valid) {
            var project = this.prepareUpdateProject();
            this.onUpdate.emit(project);
            this.dialogRef.close();
        }
    };
    EditProjectDialogComponent.prototype.ngOnInit = function () {
        this.updateProjectForm = this.fb.group({
            titleControl: [this.data.project.title, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            capacityControl: [this.data.project.capacity, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            descriptionControl: [this.data.project.description, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]
        });
    };
    EditProjectDialogComponent.prototype.prepareUpdateProject = function () {
        var formModel = this.updateProjectForm.value;
        var updateProject = {
            title: formModel.titleControl,
            capacity: formModel.capacityControl,
            description: formModel.descriptionControl,
            tags: Object.assign([], this.tags),
            references: Object.assign([], this.references)
        };
        return updateProject;
    };
    EditProjectDialogComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our tag
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    EditProjectDialogComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    EditProjectDialogComponent.prototype.removeReference = function (index) {
        this.references.splice(index, 1);
    };
    EditProjectDialogComponent.prototype.addReference = function (value) {
        console.log(value);
        if (value !== '') {
            this.references.push({ url: value });
        }
    };
    EditProjectDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-project-dialog',
            template: __webpack_require__("../../../../../src/app/components/edit-project-dialog/edit-project-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-project-dialog/edit-project-dialog.component.sass")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]])
    ], EditProjectDialogComponent);
    return EditProjectDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-student-account/edit-student-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex class=\"input-component-holder mat-elevation-z4\">\r\n    <mat-toolbar class=\"input-header\">\r\n        <h1 class=\"mat headline center-align\"> Modifica setarile contului </h1>\r\n    </mat-toolbar>\r\n\r\n    <div class=\"input-container\">\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Email (disabled)\" disabled value=\"boca@info.uaic.ro\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Numar matricol (disabled)\" disabled value=\"1961011226774\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Nume\" value=\"Boca\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Prenume\" value=\"Bogdan\">\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\r\n            <div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\r\n                <div>\r\n                    <mat-form-field style=\"width: 70%;\">\r\n                        <input matInput type=\"{{ isChecked? 'text' : 'password' }}\" placeholder=\"Parola\" value=\"parola\">\r\n                    </mat-form-field>\r\n                    <mat-checkbox [(ngModel)]=\"isChecked\">Arata parola</mat-checkbox>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <button mat-raised-button color=\"primary\">Salveaza schimbarile</button>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-student-account/edit-student-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStudentAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EditStudentAccountComponent = (function () {
    function EditStudentAccountComponent() {
        this.isChecked = false;
    }
    EditStudentAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-student-account',
            template: __webpack_require__("../../../../../src/app/components/edit-student-account/edit-student-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-project/create-project.component.sass")]
        })
    ], EditStudentAccountComponent);
    return EditStudentAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lecturer-account/lecturer-account.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group fxLayout=\"column\" style=\"padding: 20px;\" class=\"components-container-gt-xs\" [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\r\n\r\n    <mat-tab>\r\n        <ng-template mat-tab-label>\r\n            <strong> Proiecte propuse </strong>\r\n        </ng-template>\r\n\r\n        <div class=\"table-component-holder mat-elevation-z4\">\r\n                <mat-toolbar class=\"table-header\">\r\n                    <h1 class=\"mat-headline center-align\">Proiecte propuse</h1>\r\n                    <button mat-button type=\"button\" (click)=\"openStatisticsDialog()\">\r\n                        <mat-icon> assessment </mat-icon>\r\n                        <span> Statistici proiecte </span>\r\n                    </button>\r\n                </mat-toolbar>\r\n            \r\n                <div class=\"table-container\">\r\n                    <mat-table #table [dataSource]=\"dataSource\">\r\n                      \r\n                        <ng-container matColumnDef=\"title\">\r\n                        <mat-header-cell *matHeaderCellDef> Titlu </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\r\n                        </ng-container>\r\n        \r\n                        <ng-container matColumnDef=\"capacity\">\r\n                        <mat-header-cell *matHeaderCellDef> Numar studenti </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\"> {{element.capacity}} </mat-cell>\r\n                        </ng-container>\r\n        \r\n                        <ng-container matColumnDef=\"assignedStudents\">\r\n                                <mat-header-cell *matHeaderCellDef> Studenti asignati </mat-header-cell>\r\n                                <mat-cell *matCellDef=\"let element; let i = index\"> \r\n                                    \r\n                                    <div *ngIf=\"!element.assignedStudents.length\">\r\n                                        None\r\n                                    </div>\r\n        \r\n                                    <mat-chip-list #chipList>\r\n                                        <mat-chip *ngFor=\"let student of element.assignedStudents; let j = index\"\r\n                                        [removable]=\"true\" (remove)=\"remove(i, j)\">\r\n                                            {{student.name}}\r\n                                            <mat-icon matChipRemove>cancel</mat-icon>\r\n                                        </mat-chip>\r\n                                    </mat-chip-list>\r\n        \r\n                                </mat-cell>\r\n                        </ng-container>\r\n                \r\n                        <ng-container matColumnDef=\"actions\">\r\n                            <mat-header-cell *matHeaderCellDef> Actiuni </mat-header-cell>\r\n                           \r\n                            <mat-cell *matCellDef=\"let element; let i = index\" fxFlex>\r\n                                <button mat-icon-button>\r\n                                    <i class=\"material-icons\" (click)=\"removeProject(i)\">delete</i>\r\n                                </button>\r\n                                <button mat-icon-button>\r\n                                    <i class=\"material-icons\" (click)=\"openEditProjectModal(i)\">mode_edit</i>\r\n                                </button> \r\n                                <button mat-icon-button>\r\n                                    <i class=\"material-icons\" (click)=\"openSearchStudentModal()\">person_add</i>\r\n                                </button>\r\n                            </mat-cell>\r\n                        </ng-container>\r\n        \r\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n                </div>\r\n            </div>\r\n\r\n    </mat-tab>\r\n    \r\n    <mat-tab>\r\n        <ng-template mat-tab-label>\r\n            <strong> Adauga un proiect </strong>\r\n        </ng-template>\r\n        \r\n        <app-create-project> </app-create-project>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n        <ng-template mat-tab-label>\r\n            <strong> Setarile contului </strong> \r\n        </ng-template>\r\n\r\n        <app-edit-lecturer-account-component>\r\n            \r\n        </app-edit-lecturer-account-component>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/components/lecturer-account/lecturer-account.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-container {\n  position: relative;\n  margin-top: 50px; }\n  .table-container .mat-table {\n    max-height: calc(100vh - 300px);\n    overflow-y: auto; }\n    .table-container .mat-table .mat-header-row {\n      position: absolute;\n      top: -50px;\n      left: 0px;\n      right: 18px;\n      background: #fff; }\n\n.table-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.table-container {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lecturer-account/lecturer-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchStudentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_project_dialog_edit_project_dialog_component__ = __webpack_require__("../../../../../src/app/components/edit-project-dialog/edit-project-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lecturer_project_statistics_dialog_statistics_dialog_component__ = __webpack_require__("../../../../../src/app/components/lecturer-project-statistics-dialog/statistics-dialog-component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LecturerAccountComponent = (function () {
    function LecturerAccountComponent(dialog) {
        this.dialog = dialog;
        this.removable = true;
        this.displayedColumns = ['title', 'capacity', 'assignedStudents', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatTableDataSource */](ELEMENT_DATA);
    }
    LecturerAccountComponent.prototype.remove = function (projectIndex, studentIndex) {
        this.dataSource.data[projectIndex].assignedStudents.splice(studentIndex, 1);
    };
    LecturerAccountComponent.prototype.removeProject = function (index) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatTableDataSource */](this.dataSource.data);
    };
    LecturerAccountComponent.prototype.openSearchStudentModal = function () {
        var dialogRef = this.dialog.open(SearchStudentDialogComponent, {
            width: '350px',
            data: { student: this.searchStudent }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    LecturerAccountComponent.prototype.openEditProjectModal = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__edit_project_dialog_edit_project_dialog_component__["a" /* EditProjectDialogComponent */], {
            width: '600px',
            data: { project: this.dataSource.data[index] }
        });
        var sub = dialogRef.componentInstance.onUpdate.subscribe(function (data) {
            // temp hack
            _this.dataSource.data[index].title = data.title;
            _this.dataSource.data[index].capacity = data.capacity;
            _this.dataSource.data[index].description = data.description;
            _this.dataSource.data[index].tags = data.tags;
            _this.dataSource.data[index].references = data.tags;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatTableDataSource */](_this.dataSource.data);
        });
        dialogRef.afterClosed().subscribe(function (result) {
            sub.unsubscribe();
        });
    };
    LecturerAccountComponent.prototype.openStatisticsDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__lecturer_project_statistics_dialog_statistics_dialog_component__["a" /* StatisticsDialogComponent */], {
            width: '600px'
        });
    };
    LecturerAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lecturer-account',
            template: __webpack_require__("../../../../../src/app/components/lecturer-account/lecturer-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lecturer-account/lecturer-account.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], LecturerAccountComponent);
    return LecturerAccountComponent;
}());

var ELEMENT_DATA = [
    {
        title: 'Aplicatii ale problemelor Stable', tags: ['web', 'java'], references: ['www.google.com', 'www.facebook.com'],
        capacity: 2, assignedStudents: [{ name: 'Boca' }, { name: 'Boca' }], description: 'ce proiect frumos'
    },
    {
        title: 'Baze de date de tip graf', tags: ['web', 'java', 'graphdatabase'], references: ['www.neo4j.com', 'www.facebook.com'],
        capacity: 2, assignedStudents: [{ name: 'olaru' }, { name: 'marius' }], description: 'Trebuie sa iti placa bazele de date'
    },
    {
        title: 'Criptografie avansata', tags: ['mate', 'cripto'], references: ['www.wikipedia.com', 'www.facebook.com'],
        capacity: 1, assignedStudents: [], description: 'Sunt necesare cunostinte de matematica avansate'
    },
    {
        title: 'Stable matching', tags: ['web', 'java', 'java8'], references: ['www.google.com', 'www.aaaa.com'],
        capacity: 3, assignedStudents: [{ name: 'Boca' }, { name: 'Boca' }], description: 'se va folosi algoritmul lui gale shapley'
    },
    {
        title: 'Partajarea secretelor', tags: ['cripto', 'math'], references: ['www.wiki.com', 'www.flt.com'],
        capacity: 2, assignedStudents: [{ name: 'Boca' }, { name: 'Boca' }], description: 'descrierea proiectului de partajare a secretelor'
    },
    {
        title: 'Proiect de licenta', tags: ['tag1', 'tag2'], references: ['www.site1.com', 'www.site2.com'],
        capacity: 1, assignedStudents: [], description: 'Un proiect de licenta ce este foarte interesant'
    }
];
var SearchStudentDialogComponent = (function () {
    function SearchStudentDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SearchStudentDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SearchStudentDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-student-dialog',
            template: __webpack_require__("../../../../../src/app/components/lecturer-account/search-student-dialog.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lecturer-account/search-student-dialog.sass")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], SearchStudentDialogComponent);
    return SearchStudentDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lecturer-account/search-student-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Cauta student </h2>\r\n<mat-dialog-content>\r\n    <div class=\"test\">\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Introdu numele\" autocomplete=\"off\">\r\n        </mat-form-field>\r\n        <button mat-icon-button>\r\n                <i class=\"material-icons\">search</i>\r\n        </button>\r\n    </div>\r\n</mat-dialog-content> \r\n<mat-dialog-actions> \r\n    <button mat-button mat-dialog-close>Anuleaza</button>\r\n    <button mat-button [mat-dialog-close]=\"true\">Adauga</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/lecturer-account/search-student-dialog.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nbutton {\n  margin-left: auto; }\n\nmat-form-field {\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lecturer-project-statistics-dialog/statistics-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!chart\" style=\"margin: 20px\">\r\n    <canvas id=\"canvas\" style=\"height:350px !important;\">{{ chart }}</canvas>\r\n</div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/lecturer-project-statistics-dialog/statistics-dialog-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var StatisticsDialogComponent = (function () {
    function StatisticsDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.chart = [];
    }
    StatisticsDialogComponent.prototype.ngOnInit = function () {
        this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('canvas', {
            type: 'bar',
            data: {
                labels: [['Aplicatii', 'ale', 'stable', 'matching'],
                    ['Baze de', 'date de', 'tip graf'],
                    ['Criptografie', 'avansata'],
                    ['Stable', 'matching'],
                    ['Partajarea', 'secretelor'],
                    ['Proiect de', 'licenta']
                ],
                datasets: [
                    {
                        backgroundColor: '#7E57C2',
                        borderColor: '#7E57C2',
                        data: [0, 1, 2, 4, 2, 1],
                        label: 'Numar studenti',
                        fill: 'false'
                    },
                ]
            },
            options: {
                legend: {
                    display: false
                },
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                maintainAspectRatio: false,
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    display: true,
                    text: 'SITUATIA INSCRIERILOR'
                }
            }
        });
    };
    StatisticsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-statistics-dialog-component',
            template: __webpack_require__("../../../../../src/app/components/lecturer-project-statistics-dialog/statistics-dialog-component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], StatisticsDialogComponent);
    return StatisticsDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!submitted\" class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"info\">\n      <h2>Inscrierea la licenta FII</h2>\n    </div>\n  </div>\n  <div class=\"form-test\">\n    <div class=\"thumbmail\">\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg\"/>\n    </div>\n\n    <form class=\"login-form\"  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <input type=\"text\" placeholder=\"email\" formControlName=\"email\"/>\n      <input type=\"password\" placeholder=\"password\" formControlName=\"password\"/>\n      <button> Login </button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-test {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 300px;\n  margin: 0 auto 100px;\n  padding: 30px;\n  border-radius: 3px;\n  text-align: center; }\n  .form-test .thumbmail {\n    background: #EF3B3A;\n    width: 150px;\n    height: 150px;\n    margin: 0 auto 30px;\n    padding: 50px 30px;\n    border-radius: 100%;\n    box-sizing: border-box; }\n    .form-test .thumbmail img {\n      display: block;\n      width: 100%; }\n  .form-test input {\n    outline: 0;\n    background: #f2f2f2;\n    width: 100%;\n    border: 0;\n    margin: 0 0 15px;\n    padding: 15px;\n    border-radius: 3px;\n    box-sizing: border-box;\n    font-size: 14px; }\n  .form-test button {\n    outline: 0;\n    background: #EF3B3A;\n    width: 100%;\n    border: 0;\n    padding: 15px;\n    border-radius: 3px;\n    color: #FFFFFF;\n    font-size: 14px;\n    cursor: pointer; }\n\n.container {\n  position: relative;\n  z-index: 1;\n  margin: 0 auto; }\n  .container .info {\n    margin: 50px auto;\n    text-align: center; }\n    .container .info h1 {\n      margin: 0 0 15px;\n      padding: 0;\n      font-size: 36px;\n      color: #1a1919; }\n\n.wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-family: 'Roboto', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .wrapper:before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.authService.login({ email: 'ana', password: 'mere' });
        this.submitted = true;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-card/project-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"project-card\">\r\n    <mat-card-header>\r\n        <mat-card-title>{{project.title}}</mat-card-title>\r\n        <mat-card-subtitle> Propus de: {{project.lecturer.name}} </mat-card-subtitle>\r\n    </mat-card-header>\r\n\r\n    <hr/>\r\n\r\n    <mat-card-content>\r\n        <p> {{ project.description }} </p>\r\n        <mat-chip-list class=\"project-tags\">\r\n            <mat-chip *ngFor=\"let tag of project.tags\" selected=\"true\">\r\n              {{tag.name}}\r\n            </mat-chip>\r\n        </mat-chip-list>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions>\r\n        <button mat-button> Aplica </button>\r\n        <button mat-button routerLink=\"/project-details\"> Detalii </button>\r\n    </mat-card-actions>\r\n\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/project-card/project-card.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-card {\n  min-width: 20vw;\n  max-width: 50vh;\n  min-height: 20vh;\n  border-radius: 4px;\n  box-shadow: 0 15px 35px rgba(50, 50, 90, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);\n  transition: .6s ease;\n  background: white;\n  text-align: center;\n  margin-bottom: 20px; }\n\n.project-tags {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\nmat-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\nbutton {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\nmat-card-title {\n  font-size: 2.4 map-rem;\n  color: #303336;\n  letter-spacing: 1px; }\n\nhr {\n  width: 20%;\n  margin-top: 3vh;\n  margin-bottom: 3vh;\n  border: 0;\n  border-bottom: 1px solid #E6E9EC; }\n\np {\n  margin: 2vh;\n  text-align: center;\n  padding-bottom: 1vh;\n  color: #a0a6ab;\n  font-weight: 400;\n  font-size: 1.0rem;\n  line-height: 1.05rem; }\n\nmat-chip {\n  font-weight: 400;\n  font-size: 0.8rem;\n  line-height: 0.85rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-card/project-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectCardComponent = (function () {
    // availableColors = [
    //   { name: 'Web', color: '' },
    //   { name: 'Java', color: 'primary' },
    //   { name: 'PostgreSQL', color: 'accent' },
    //   { name: 'Rest', color: 'warn' }
    // ];
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProjectCardComponent.prototype, "project", void 0);
    ProjectCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-card',
            template: __webpack_require__("../../../../../src/app/components/project-card/project-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-card/project-card.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-details/project-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <button mat-icon-button>\r\n        <i class=\"material-icons\">arrow_back</i>\r\n        <span> Inapoi </span>\r\n    </button>\r\n\r\n    <mat-card class=\"project-card\">\r\n        <mat-card-header>\r\n            <mat-card-title>Aplicatii ale problemelor Stable Matching</mat-card-title>\r\n            <mat-card-subtitle>Propus de: Frasinaru Cristian</mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <hr/>\r\n        <!--<mat-divider></mat-divider> -->\r\n        \r\n        <mat-card-content>\r\n           \r\n            <div class=\"heading\">\r\n                Descriere:\r\n            </div>\r\n            <p>\r\n                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\r\n            </p>\r\n\r\n            <div class=\"heading\">\r\n                Referinte:\r\n            </div>\r\n\r\n            <div class=\"project-references\">\r\n                <a class=\"project-reference\" *ngFor=\"let reference of references\">\r\n                    {{ reference }}\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"heading\">\r\n                Tag-uri:\r\n            </div>\r\n\r\n            <mat-chip-list class=\"project-tags\">\r\n                <mat-chip *ngFor=\"let tag of tags\" selectable=\"false\">\r\n                    {{tag.name}}\r\n                </mat-chip>\r\n            </mat-chip-list>\r\n        </mat-card-content>\r\n        \r\n        <mat-card-actions>\r\n                <button mat-raised-button color=\"primary\">Aplica</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"other-projects\">\r\n        <mat-card-content>\r\n            <div class=\"heading\">\r\n                De acelasi profesor:\r\n            </div> \r\n\r\n            <a>Baze de date de tip graf</a>\r\n\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project-details/project-details.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin: 20px; }\n\nhr {\n  width: 60%;\n  margin-top: 3vh;\n  margin-bottom: 3vh;\n  border: 0;\n  border-bottom: 1px solid #E6E9EC; }\n\nmat-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n.heading {\n  margin: 5px; }\n\n.other-projects {\n  margin-top: 20px; }\n\na {\n  cursor: pointer;\n  color: #0d4399;\n  text-decoration: none;\n  transition: .2s; }\n\na:hover {\n  color: red;\n  border-bottom: 1px dotted; }\n\n.project-references {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.project-reference {\n  margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-details/project-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectDetailsComponent = (function () {
    function ProjectDetailsComponent() {
        this.references = [
            'www.wikipedia.com',
            'www.google.com',
            'www.spring.io'
        ];
        this.tags = [
            { name: 'Java' },
            { name: 'WEB' },
            { name: 'Postgre' },
            { name: 'REST' }
        ];
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-details',
            template: __webpack_require__("../../../../../src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-details/project-details.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\"> \r\n\r\n    <div class=\"test\" fxLayout=\"row\" style=\"padding: 20px;\">\r\n        \r\n        <div class=\"card\" *ngFor=\"let proj of projects\">\r\n            <app-project-card [project]=\"proj\"> </app-project-card>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    \r\n    <mat-paginator [length]=\"length\"\r\n                   [pageSize]=\"pageSize\"\r\n                   [pageSizeOptions]=\"pageSizeOptions\"\r\n                   (page)=\"pageEvent = fakeServerData($event)\">\r\n    </mat-paginator>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project-list/project-list.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.wrapper {\n  margin-bottom: 65px; }\n\n.card {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 33%;\n          flex: 0 1 33%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectListComponent = (function () {
    function ProjectListComponent() {
        this.projects = [];
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 6;
        this.pageSizeOptions = [6, 12, 24, 48];
        this.project = {
            title: 'Aplicatii ale problemelor de tip Stable Matching',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis \
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestia',
            tags: [
                { id: 1, name: 'Web' },
                { id: 2, name: 'Spring' },
                { id: 3, name: 'Java' }
            ],
            bibliographies: [
                { id: 1, name: 'www.google.com' },
                { id: 2, name: 'www.spring.io' },
                { id: 3, name: 'www.wikipedia.com' }
            ],
            lecturer: {
                name: 'Frasinaru Cristian',
                email: 'acf@info.uaic.ro',
                cabinetNumber: 'C201',
                projects: []
            }
        };
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.pageSize; i++) {
            this.projects.push(this.project);
        }
    };
    ProjectListComponent.prototype.fakeServerData = function (event) {
        console.log(event.pageSize);
        this.project.title = 'Pagina ' + event.pageIndex;
        this.projects = [];
        for (var i = 0; i < event.pageSize; i++) {
            this.projects.push(this.project);
        }
    };
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-list',
            template: __webpack_require__("../../../../../src/app/components/project-list/project-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-list/project-list.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn$ | async\" class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n    <mat-toolbar class=\"class.mat-elevation-z4\" class=\"example-toolbar\"> \r\n        \r\n        <div class=\"test\" fxLayout=\"row\">\r\n          <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n          <h2> Inscrierea la licenta FII </h2>\r\n        </div>\r\n        <div>      \r\n          <button mat-icon-button (click) = \"searchOpen = !searchOpen\" fxHide=\"true\" [fxHide.gt-xs]=\"false\">\r\n            <i class=\"material-icons\">search</i>\r\n          </button>\r\n    \r\n          <mat-form-field class=\"search\" [ngClass]=\"{'search-open': searchOpen == true}\">\r\n            <input matInput autocomplete=\"off\">\r\n          </mat-form-field>\r\n\r\n          \r\n        </div>\r\n    </mat-toolbar>\r\n    \r\n  \r\n    <mat-sidenav-container class=\"example-sidenav-container\"\r\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n      <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n                   [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n        \r\n        <img src=\"assets/img/fii.png\">\r\n        <div class=\"menu-link\">\r\n            \r\n            <button mat-button>\r\n                <mat-icon> dashboard </mat-icon>\r\n                <span> Proiecte </span>\r\n            </button>\r\n\r\n            <button mat-button>\r\n                <mat-icon class=\"about\"> pageview </mat-icon>\r\n                <span> Contul meu </span>\r\n            </button>\r\n\r\n        </div>\r\n\r\n        <div class=\"menu-bottom\">\r\n\r\n        </div>\r\n      </mat-sidenav>\r\n  \r\n      <mat-sidenav-content fxFlex>\r\n        <!--  <app-project-details></app-project-details> -->\r\n\r\n       <!-- <app-student-account> </app-student-account> -->\r\n      <!-- <app-lecturer-account> </app-lecturer-account> -->\r\n      <!-- <app-project-list> </app-project-list> -->\r\n        <router-outlet> </router-outlet>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  z-index: 2; }\n\n.example-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n\n.mat-sidenav {\n  width: 200px; }\n\n.menu-link {\n  height: 40%; }\n  .menu-link button, .menu-link a:hover {\n    width: 100%;\n    height: 48px;\n    font-size: 14px;\n    line-height: 48px;\n    padding: 0 16px;\n    text-decoration: none;\n    text-align: left;\n    color: white !important; }\n\nimg {\n  margin: 15px;\n  max-width: 170px;\n  text-align: center; }\n\nmat-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.search {\n  width: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n  .search.search-open {\n    width: 250px;\n    visibility: visible;\n    opacity: 1;\n    margin-top: 11px; }\n\nmat-sidenav-content {\n  background: #d7e2e8;\n  min-height: 100vh; }\n\nmat-sidenav {\n  background: #546E7A; }\n\n.menu-bottom {\n  height: 20%;\n  background-color: #37474F;\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n  transition: all 0.2s ease; }\n\n.test {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(changeDetectorRef, media, authService) {
        this.authService = authService;
        this.searchOpen = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/student-account/student-account.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutGap=\"10px\" fxFlexFill stype=\"padding: 20px;\">\r\n    <div fxLayout=\"column\"  style=\"padding: 20px;\" fxLayoutAlign=\"space-between stretch\" fxLayoutGap=\"10px\"  fxFlexFill>\t\r\n        <div fxFlexFill>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayout.lt-sm=\"column\">\r\n                <div class=\"mat-elevation-z4\" fxFlex=\"35\">\r\n                    <mat-toolbar>\r\n                        <h5 class=\"mat-title\">Proiecte la care am aplicat:</h5>\r\n                        \r\n                        <button mat-raised-button color=\"primary\">Salveaza</button>\r\n                    </mat-toolbar>\r\n                    <div class=\"projects\" fxFlexFill dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"tasks\">\r\n                        <mat-nav-list>\r\n                            <mat-list-item fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" *ngFor=\"let item of tasks; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">\r\n                                {{ item }}\r\n                                \r\n                                <button mat-icon-button>\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                            </mat-list-item>\r\n                        </mat-nav-list>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n\r\n<mat-tab-group fxLayout=\"column\" style=\"padding: 20px;\" class=\"components-container-gt-xs\" [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\r\n    <mat-tab>\r\n        <ng-template mat-tab-label>\r\n            <strong> Aplicarile mele </strong>\r\n        </ng-template>\r\n\r\n        <div fxFlex class=\"list-component-holder mat-elevation-z4\">\r\n            <mat-toolbar class=\"list-header\">\r\n                <h1 class=\"mat headline center-align\"> Proiectele la care am aplicat </h1>\r\n            </mat-toolbar>\r\n        </div> \r\n\r\n        <div class=\"list-container\">\r\n            <div class=\"projects\" fxFlexFill dnd-sortable-container [dropZones]=\"['boxers-zone']\" [sortableData]=\"tasks\">\r\n                <mat-nav-list>\r\n                    <mat-list-item fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" *ngFor=\"let item of tasks; let i = index\" class=\"list-group-item\" dnd-sortable [sortableIndex]=\"i\">\r\n                        <p class=\"number\">{{i + 1}}</p> {{ item }}\r\n                        \r\n                        <button mat-icon-button>\r\n                            <i class=\"material-icons\" (click)=\"removeProject(i)\">close</i>\r\n                        </button>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab>\r\n        <ng-template mat-tab-label>\r\n            <strong> Setarile contului </strong>\r\n        </ng-template>\r\n        <app-edit-student-account></app-edit-student-account> \r\n    </mat-tab>\r\n\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/components/student-account/student-account.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list-item {\n  background: white !important;\n  border-bottom: 1px solid #e4e4e4; }\n\nbutton {\n  margin-left: auto; }\n\n.list-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.list-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.example-full-width {\n  width: 100%; }\n\n.list-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n  .list-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\np {\n  margin-right: 20px; }\n\n.projects {\n  -ms-touch-action: none;\n      touch-action: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student-account/student-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentAccountComponent = (function () {
    function StudentAccountComponent() {
        this.tasks = ['Aplicatii ale problemor de tip Stable Matching',
            'Baze de date de tip graf',
            'Criptografie pe curbe eliptice',
            'Sisteme distribuite',
            'Dreseaza-l pe cutzu virtual',
            'Inca un proiect de licenta',
            'Alt proiect',
            'La fel'
        ];
    }
    StudentAccountComponent.prototype.ngOnInit = function () {
    };
    StudentAccountComponent.prototype.removeProject = function (index) {
        this.tasks.splice(index, 1);
    };
    StudentAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-student-account',
            template: __webpack_require__("../../../../../src/app/components/student-account/student-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/student-account/student-account.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentAccountComponent);
    return StudentAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__["a" /* MatPaginatorModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__["a" /* MatPaginatorModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn // {1}
            .take(1) // {2}
            .map(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']); // {4}
                return false;
            }
            return true;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        //   if (user.email !== '' && user.password !== '') {
        this.loggedIn.next(true);
        this.router.navigate(['/projects']);
        // }
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map