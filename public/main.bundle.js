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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <flash-messages></flash-messages>\n  <ng4-loading-spinner></ng4-loading-spinner>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/components/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_contact_us_service__ = __webpack_require__("../../../../../src/app/services/contact-us.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_modals_projects_modal_projects_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/projects-modal/projects-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_project_dashboard_project_dashboard_component__ = __webpack_require__("../../../../../src/app/components/project-dashboard/project-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_modals_team_work_modal_team_work_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/team-work-modal/team-work-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_electrical_list_electrical_list_component__ = __webpack_require__("../../../../../src/app/components/electrical-list/electrical-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_electrical_item_electrical_item_component__ = __webpack_require__("../../../../../src/app/components/electrical-item/electrical-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_modals_electricals_modal_electricals_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_cable_service__ = __webpack_require__("../../../../../src/app/services/cable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_cable_list_cable_list_component__ = __webpack_require__("../../../../../src/app/components/cable-list/cable-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_cable_item_cable_item_component__ = __webpack_require__("../../../../../src/app/components/cable-item/cable-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_modals_cabels_modals_cable_distance_modal_cable_distance_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_sldschedule_service__ = __webpack_require__("../../../../../src/app/services/sldschedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_sld_schedule_list_sld_schedule_list_component__ = __webpack_require__("../../../../../src/app/components/sld-schedule-list/sld-schedule-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_sld_schedule_item_sld_schedule_item_component__ = __webpack_require__("../../../../../src/app/components/sld-schedule-item/sld-schedule-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_controller_service__ = __webpack_require__("../../../../../src/app/services/controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_controllers_list_controllers_list_component__ = __webpack_require__("../../../../../src/app/components/controllers-list/controllers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_controller_item_controller_item_component__ = __webpack_require__("../../../../../src/app/components/controller-item/controller-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_modals_controller_modal_controller_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/controller-modal/controller-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_instrumentation_service__ = __webpack_require__("../../../../../src/app/services/instrumentation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_instrumentation_list_instrumentation_list_component__ = __webpack_require__("../../../../../src/app/components/instrumentation-list/instrumentation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_instrumentation_item_instrumentation_item_component__ = __webpack_require__("../../../../../src/app/components/instrumentation-item/instrumentation-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_excel_service__ = __webpack_require__("../../../../../src/app/services/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_io_assignment_io_assignment_component__ = __webpack_require__("../../../../../src/app/components/io-assignment/io-assignment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_io_assignment_service__ = __webpack_require__("../../../../../src/app/services/io-assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_drop_down_drop_down_component__ = __webpack_require__("../../../../../src/app/components/drop-down/drop-down.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_modals_simple_electrical_modal_simple_electrical_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/simple-electrical-modal/simple-electrical-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_drop_down_dependent_drop_down_dependent_component__ = __webpack_require__("../../../../../src/app/components/drop-down-dependent/drop-down-dependent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_modals_multiple_modal_multiple_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/multiple-modal/multiple-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_superadmin_superadmin_component__ = __webpack_require__("../../../../../src/app/components/superadmin/superadmin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_modals_copy_project_modal_copy_project_modal_component__ = __webpack_require__("../../../../../src/app/components/modals/copy-project-modal/copy-project-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// MAIN SOLUTION COMPONENTS







// import { UiSwitchModule } from 'angular2-ui-switch';
// MAIN PROJECT COMPONENT

// NAVIGATION COMPONENT

// MAIN SITE COMPONENTS




// CONRACT US COMPONENTS


// PROFILE COMPONENT

// AUTHORIZATION AND AUTHENTICATION COMPONENTS






// PROJECTS COMPONENTS




// PROJECTS TEAM

// ELECTRICALS COMPONENTS




// CABLES COMPONENTS




// SLD SHEDULES COMPONENTS



// CONTROLLER SHEDULE




// INSTRUMENTATION INDEX



// EXCELL service

// IO ASSIGNMENT


// import { ElectricalItemSecondComponent } from './components/electrical-item-second/electrical-item-second.component';
//





// SUPERADMIN and ADMIN part


// TODO move to separate component
var appRoutes = [
    // main pages
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about_us', component: __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'contact_us', component: __WEBPACK_IMPORTED_MODULE_13__components_contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    // registration and authentication
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__["a" /* SigninComponent */] },
    // projects
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__["a" /* ProjectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_25__components_project_dashboard_project_dashboard_component__["a" /* ProjectDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // electricals
    { path: 'project/:id/electricals', component: __WEBPACK_IMPORTED_MODULE_28__components_electrical_list_electrical_list_component__["a" /* ElectricalListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id/electricals/:electricalid', component: __WEBPACK_IMPORTED_MODULE_29__components_electrical_item_electrical_item_component__["a" /* ElectricalItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // cables
    { path: 'project/:id/cables', component: __WEBPACK_IMPORTED_MODULE_32__components_cable_list_cable_list_component__["a" /* CableListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id/cables/:cableId', component: __WEBPACK_IMPORTED_MODULE_33__components_cable_item_cable_item_component__["a" /* CableItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // sld schedule
    { path: 'project/:id/sldshedules', component: __WEBPACK_IMPORTED_MODULE_36__components_sld_schedule_list_sld_schedule_list_component__["a" /* SldScheduleListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id/sldshedules/:sldsheduleId', component: __WEBPACK_IMPORTED_MODULE_37__components_sld_schedule_item_sld_schedule_item_component__["a" /* SldScheduleItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // controller schedule
    { path: 'project/:id/controllers', component: __WEBPACK_IMPORTED_MODULE_39__components_controllers_list_controllers_list_component__["a" /* ControllersListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id/controllers/:controllerId', component: __WEBPACK_IMPORTED_MODULE_40__components_controller_item_controller_item_component__["a" /* ControllerItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // instrumentation index
    { path: 'project/:id/instrumentations', component: __WEBPACK_IMPORTED_MODULE_43__components_instrumentation_list_instrumentation_list_component__["a" /* InstrumentationListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'project/:id/instrumentations/:instrumentationId', component: __WEBPACK_IMPORTED_MODULE_44__components_instrumentation_item_instrumentation_item_component__["a" /* InstrumentationItemComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // IO Assignment
    // {path: 'project/:id/ioassignment', component: IoAssignmentComponent, canActivate:[AuthGuard]},
    // profile
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // Superadmin page
    { path: 'superadmin', component: __WEBPACK_IMPORTED_MODULE_52__components_superadmin_superadmin_component__["a" /* SuperadminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    // Page not found
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_modals_projects_modal_projects_modal_component__["a" /* ProjectsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_modals_team_work_modal_team_work_modal_component__["a" /* TeamWorkModalComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_project_dashboard_project_dashboard_component__["a" /* ProjectDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_electrical_list_electrical_list_component__["a" /* ElectricalListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_electrical_item_electrical_item_component__["a" /* ElectricalItemComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_modals_electricals_modal_electricals_modal_component__["a" /* ElectricalsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_cable_list_cable_list_component__["a" /* CableListComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_cable_item_cable_item_component__["a" /* CableItemComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_modals_cabels_modals_cable_distance_modal_cable_distance_modal_component__["a" /* CableDistanceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_sld_schedule_list_sld_schedule_list_component__["a" /* SldScheduleListComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_sld_schedule_item_sld_schedule_item_component__["a" /* SldScheduleItemComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_controllers_list_controllers_list_component__["a" /* ControllersListComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_controller_item_controller_item_component__["a" /* ControllerItemComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_modals_controller_modal_controller_modal_component__["a" /* ControllerModalComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_instrumentation_list_instrumentation_list_component__["a" /* InstrumentationListComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_instrumentation_item_instrumentation_item_component__["a" /* InstrumentationItemComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_io_assignment_io_assignment_component__["a" /* IoAssignmentComponent */],
                // ElectricalItemSecondComponent,
                __WEBPACK_IMPORTED_MODULE_48__components_drop_down_drop_down_component__["a" /* DropDownComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_modals_simple_electrical_modal_simple_electrical_modal_component__["a" /* SimpleElectricalModalComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_drop_down_dependent_drop_down_dependent_component__["a" /* DropDownDependentComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_modals_multiple_modal_multiple_modal_component__["a" /* MultipleModalComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_superadmin_superadmin_component__["a" /* SuperadminComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_modals_copy_project_modal_copy_project_modal_component__["a" /* CopyProjectModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_27__services_electrical_service__["a" /* ElectricalService */],
                __WEBPACK_IMPORTED_MODULE_31__services_cable_service__["a" /* CableService */],
                __WEBPACK_IMPORTED_MODULE_35__services_sldschedule_service__["a" /* SldscheduleService */],
                __WEBPACK_IMPORTED_MODULE_38__services_controller_service__["a" /* ControllerService */],
                __WEBPACK_IMPORTED_MODULE_42__services_instrumentation_service__["a" /* InstrumentationService */],
                __WEBPACK_IMPORTED_MODULE_14__services_contact_us_service__["a" /* ContactUsService */],
                __WEBPACK_IMPORTED_MODULE_45__services_excel_service__["a" /* ExcelService */],
                __WEBPACK_IMPORTED_MODULE_47__services_io_assignment_service__["a" /* IoAssignmentService */],
                __WEBPACK_IMPORTED_MODULE_53__services_users_service__["a" /* UsersService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .content-style {\r\n    font-size: 13px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 15px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 22px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n  li {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n  li.active {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767px) {\r\n  .content-style {\r\n    font-size: 13px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 15px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 30px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  \r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1199px) {\r\n  .content-style {\r\n    font-size: 14px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 16px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 30px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  \r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .content-style {\r\n    font-size: 20px;\r\n  }\r\n  .small-topic-text-body {\r\n    font-size: 30px;\r\n  }\r\n  .big-topic-text-body {\r\n    font-size: 50px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  \r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\n\r\nli.active {\r\n  background-color: #FFB248!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\nli {\r\n  margin: 5px!important;\r\n  background-color: white!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n.small-topic-text-body {\r\n  font-family: Roboto-Bolt;\r\n  color:#4c4c4c;\r\n}\r\n\r\n.big-topic-text-body {\r\n  font-family: Roboto-Bolt;\r\n  color:#4c4c4c;\r\n}\r\n\r\n.content-justify {\r\n  text-align: justify;\r\n  line-height: 1.3;\r\n}\r\n\r\n.content-style {\r\n  font-family: Roboto-Light;\r\n  color: #4c4c4c;\r\n  text-align: justify;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n\r\n.h-100 {\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators2\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleIndicators2\" data-slide-to=\"3\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"firstImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"firstImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"firstImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"firstImg_768\">\n          <source [srcset]=\"firstImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"firstImg_1920\" alt=\"first_img\" sr-only=\"First Image\">\n        </picture>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"secondImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"secondImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"secondImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"secondImg_768\">\n          <source [srcset]=\"secondImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"secondImg_1920\" alt=\"second_img\" sr-only=\"Second Image\">\n        </picture>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"thirdImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"thirdImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"thirdImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"thirdImg_768\">\n          <source [srcset]=\"thirdImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"thirdImg_1920\" alt=\"third_img\" sr-only=\"Third Image\">\n        </picture>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"fourthImg_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"fourthImg_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"fourthImg_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"fourthImg_768\">\n          <source [srcset]=\"fourthImg_576\">\n          <img class=\"d-block img-fluid\" [src]=\"fourthImg_1920\" alt=\"fourth_img\" sr-only=\"Fourth Image\">\n        </picture>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators2\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"container\">\n    <div class=\"row pt-5\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">\n                About            \n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n                <strong>\n                  Us\n                </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8 content-justify\">\n        <span class=\"content-style\">\n            Based in Calgary, Alberta, AMP X is a company that’s 20 years in the making. Only through the completion of more than 100 electrical,\n             instrumentation and controls (E, I and C) projects did we have enough first-hand information to build a solution we feel can truly help our \n             customers deliver their projects better. Through technology and practical project delivery methods that enable thoughtful engineering, we help \n             customers improve their bottom lines in today’s challenging business environment.\n        </span>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">Our</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                Vision\n              </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8 content-justify\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              Go beyond end-to-end E, I and C professional services.\n            </span>\n          </div>  \n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              With a foundation that includes subject matter expertise in engineering, regulations and codes, construction and inspection, we are passionate about helping \n              our customers focus on optimizing engineering, reducing costs and benefitting long-term from solutions driven by technology and data.\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">\n                Our\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                  Goals\n              </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"row d-none d-block\">\n          <div class=\"col-12\">\n            <picture>\n              <source media=\"(min-width: 1200px)\" [srcset]=\"lightbulbIcon_1200\">\n              <source media=\"(min-width: 768px)\" [srcset]=\"lightbulbIcon_768\">\n              <source [srcset]=\"lightbulbIcon_576\">\n              <img class=\"d-block img-fluid\" [src]=\"lightbulbIcon_1200\" alt=\"lightbulb_icon\" sr-only=\"Lightbulb Icon\">\n            </picture>\n                <!--\n            <img class=\"img-fluid\" [src]=\"lightbulbIcon\"/>\n                -->\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              To provide trusted E, I and C solutions to our customers with a foundation that includes multiple decades of subject matter expertise and lessons-learned \n              in engineering, technology, regulations and codes, construction and inspection.\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3 d-none d-block\">\n          <div class=\"col-12\">\n            <picture>\n              <source media=\"(min-width: 1200px)\" [srcset]=\"graficIcon_1200\">\n              <source media=\"(min-width: 768px)\" [srcset]=\"graficIcon_768\">\n              <source [srcset]=\"graficIcon_576\">\n              <img class=\"d-block img-fluid\" [src]=\"graficIcon_1200\" alt=\"grafic_icon\" sr-only=\"Grafic Icon\">\n            </picture>\n            <!--\n            <img class=\"img-fluid\" [src]=\"graficIcon\"/>\n            -->\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n              <span class=\"content-style\">\n                To add more value to our customers by shifting professional services efforts from tedious and time-consuming deliverable-related tasks to engineering, \n                stakeholder collaboration and total installed cost optimization, while maintaining project schedules.\n              </span>\n          </div>\n        </div>\n        <div class=\"row pt-3 d-none d-md-block\">\n          <div class=\"col-12\">\n            <picture>\n              <source media=\"(min-width: 1200px)\" [srcset]=\"computerIcon_1200\">\n              <source media=\"(min-width: 768px)\" [srcset]=\"computerIcon_768\">\n              <source [srcset]=\"computerIcon_576\">\n              <img class=\"d-block img-fluid\" [src]=\"computerIcon_1200\" alt=\"computer_icon\" sr-only=\"Computer Icon\">\n            </picture>\n            <!--\n            <img class=\"img-fluid\" [src]=\"computerIcon\"/>\n            -->\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              To leverage the benefits of technology and globalization by effectively implementing a proprietary database and design tools, paired with multi-office \n              solutions, while not burdening customers with expensive and complicated software systems and onerous organizational structures.\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">Our</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                Model\n              </strong>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"row\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              To support our customers as they develop new projects or modify existing assets, we believe the best value we can bring is to spend as much effort as possible on tasks outside of deliverable development itself. By completing our designs within a proprietary database and by using effective design tools, we are able to remove many of the tedious and time-consuming efforts faced by projects completed using traditional methods, while maintaining a high level of design control and quality. Even more beneficial to our customers’ bottom lines is our ability to focus more of our time on the engineering itself. This includes an increased ability to concentrate on cost and design optimization and examination of how codes and regulations need to be implemented, while maintaining tight project schedules.\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              Being able to produce high-quality engineering and complete deliverable packages with less effort is where we believe our differentiated solution begins. By using our database, engineering data is recorded, controlled and made available to project stakeholders such as other engineering disciplines, supply chain, vendors, construction and commissioning teams. This promotes collaboration, provides an ability to streamline professional services efforts and improves consistency. And let’s not forget that our customers are left with not only a complete set of deliverables, but also a comprehensive data package to support operations, future projects and long-term asset management.\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 pt-5\">\n        <hr/>\n      </div>\n    </div>\n  <!-- -->\n    <div class=\"row pt-3 pb-5\">\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"small-topic-text-body\">\n              Our\n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"big-topic-text-body\">\n              <strong>\n                Leadership\n              </strong>  \n            </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n              <img class=\"img-fluid\" [src]=\"leaderImg\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              <strong>\n                Greg Jarbeau, P.L.(Eng.), SCO, CME\n              </strong>\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12\">\n            <span class=\"content-style\">\n              <i>\n                Owner and Principal\n              </i>\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              Greg is a professional engineering technologist with more than 20 years of experience working in the energy & resources and commercial sectors. Throughout his career, Greg has helped numerous firms deliver complex projects on schedule and with the highest quality. His experience is in both project lead and technical specialist roles for scopes ranging from conceptual studies to detailed engineering and construction projects.\n            </span>\n          </div>\n        </div>\n        <div class=\"row pt-3\">\n          <div class=\"col-12 content-justify\">\n            <span class=\"content-style\">\n              His specialties include E, I and C engineering, construction management, field inspection and commissioning / start-up support. Greg started his career as an electrician, then completed the electrical engineering technology program at Northern Alberta Institute of Technology (NAIT) in Edmonton. Greg is also a certified master electrician and safety codes officer who is highly knowledgeable with respect to construction practices, codes and regulations. His field experience spans both hands-on and professional field services, with more than 10 years of successfully-delivered roles working at facilities throughout North America and globally.\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  <!-- -->\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n      <div class=\"d-flex align-items-center justify-content-around h-100\">\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n            <div class=\"col-8\">\n              <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n            <div class=\"col-8\">\n              <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-3\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n            <div class=\"col-9\">\n              <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n            <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
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

var AboutUsComponent = (function () {
    function AboutUsComponent() {
        this.sizeWindow = window.innerWidth;
    }
    AboutUsComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    AboutUsComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        this.year = this.today.getFullYear();
        // Header img >1200
        this.firstImg_1920 = 'assets/img/1920/aboutUs/Slider/firstImg.jpg';
        this.secondImg_1920 = 'assets/img/1920/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_1920 = 'assets/img/1920/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_1920 = 'assets/img/1920/aboutUs/Slider/fourthImg.jpg';
        // Header img 992- 1200
        this.firstImg_1200 = 'assets/img/1200/aboutUs/Slider/firstImg.jpg';
        this.secondImg_1200 = 'assets/img/1200/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_1200 = 'assets/img/1200/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_1200 = 'assets/img/1200/aboutUs/Slider/fourthImg.jpg';
        // Header img 768 - 992
        this.firstImg_992 = 'assets/img/992/aboutUs/Slider/firstImg.jpg';
        this.secondImg_992 = 'assets/img/992/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_992 = 'assets/img/992/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_992 = 'assets/img/992/aboutUs/Slider/fourthImg.jpg';
        // Header img 576 - 768
        this.firstImg_768 = 'assets/img/768/aboutUs/Slider/firstImg.jpg';
        this.secondImg_768 = 'assets/img/768/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_768 = 'assets/img/768/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_768 = 'assets/img/768/aboutUs/Slider/fourthImg.jpg';
        // Header img 576 - 768
        this.firstImg_576 = 'assets/img/576/aboutUs/Slider/firstImg.jpg';
        this.secondImg_576 = 'assets/img/576/aboutUs/Slider/secondImg.jpg';
        this.thirdImg_576 = 'assets/img/576/aboutUs/Slider/thirdImg.jpg';
        this.fourthImg_576 = 'assets/img/576/aboutUs/Slider/fourthImg.jpg';
        // Body icons > 1200
        this.lightbulbIcon_1200 = 'assets/img/1200/aboutUs/icons/lightbulb-icon.png';
        this.graficIcon_1200 = 'assets/img/1200/aboutUs/icons/graphic-icon.png';
        this.computerIcon_1200 = 'assets/img/1200/aboutUs/icons/computer-icon.png';
        // Body icons 768 - 1200
        this.lightbulbIcon_768 = 'assets/img/768/aboutUs/icons/lightbulb-icon.png';
        this.graficIcon_768 = 'assets/img/768/aboutUs/icons/graphic-icon.png';
        this.computerIcon_768 = 'assets/img/768/aboutUs/icons/computer-icon.png';
        // Body icons 0 - 768
        this.lightbulbIcon_576 = 'assets/img/576/aboutUs/icons/lightbulb-icon.png';
        this.graficIcon_576 = 'assets/img/576/aboutUs/icons/graphic-icon.png';
        this.computerIcon_576 = 'assets/img/576/aboutUs/icons/computer-icon.png';
        // Leader img
        this.leaderImg = 'assets/img/1920/aboutUs/LeaderImage/greg-img.jpg';
        // Footer image
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AboutUsComponent.prototype, "onResize", null);
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cable-item/cable-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n  font-size: 0.6rem;\r\n}\r\n\r\ntbody tr td  {\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.achievements-wrapper {\r\n  height: auto; \r\n  overflow: auto;\r\n}\r\n  \r\nbutton.btnPlus {\r\n  border-radius: 0 0 0 0!important;\r\n  /*color: black;*/\r\n}\r\n  \r\nbutton.btnMinus {\r\n  border-radius: 0 .25rem .25rem 0!important;\r\n  /*color: black;*/\r\n}\r\n  \r\nselect.selectForOpenModal {\r\n  border-radius: .25rem 0 0 .25rem!important;\r\n}\r\n\r\n.cableTag {\r\n  padding-right: 5px!important;\r\n  padding-left: 5px!important;\r\n}\r\n\r\n.customContainer {\r\n  padding-right: 5px!important;\r\n  padding-left: 5px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cable-item/cable-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mr-3\" *ngIf=\"cabelItem\">\r\n  <div class=\"d-flex justify-content-center pt-3\">\r\n    <h1>Cable Tag <strong>{{cabelItem?.cableTagFirst}} {{cabelItem?.cableTagSecond}} {{cabelItem?.selectedCableTagIndex}} {{cabelItem?.cableTagThird}} {{cabelItem?.cableTagFourth}}</strong></h1>\r\n  </div>\r\n  <form (ngSubmit)=\"saveCable(cabelItem._id, cabelForm.value)\" #cabelForm=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <span class=\"h4\">Info</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"cableTag\">Create Cable Tag</label>\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-xl-3 cableTag\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagFirst\" name=\"cableTagFirst\">\r\n                </div>\r\n                <div class=\"col-xl-3 cableTag\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagSecond\" name=\"cableTagSecond\">\r\n                </div>\r\n                <div class=\"col-xl-3 cableTag\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagThird\" name=\"cableTagThird\">\r\n                </div>\r\n                <div class=\"col-xl-3 cableTag\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableTagFourth\" name=\"cableTagFourth\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"equipmentType\">Cable Type</label>\r\n              <!--\r\n                              <app-drop-down\r\n                                (onChanged) = \"onChanged($event, 'Cable Type')\"\r\n                                (newOnChanged) = \"newOnChanged($event, 'Cable Type')\"\r\n                                [dropDownName] = \"'Cable Type'\"\r\n                                [equipmentType] = 'cabelItem.cableTagIndex'\r\n                                [selectedEquipmentType] = 'cabelItem.selectedCableTagIndex'\r\n                                name=\"selectedCableTagIndex\"\r\n                              >\r\n                              </app-drop-down>\r\n              -->\r\n              <div class=\"d-flex flex-row\">\r\n                <select [disabled]=\"cabelItem.cableTagIndex.length == 0\"\r\n                        id=\"selectedCableTagIndex\"\r\n                        class=\"form-control selectForOpenModal\"\r\n                        [(ngModel)]=\"cabelItem.selectedCableTagIndex\"\r\n                        name=\"selectedCableTagIndex\">\r\n                  <option *ngFor=\"let currentCableTagIndex of cabelItem.cableTagIndex\"\r\n                          [ngValue]=\"currentCableTagIndex\"\r\n                          [selected]=\"currentCableTagIndex==cabelItem.selectedCableTagIndex\">\r\n                    {{currentCableTagIndex}}\r\n                  </option>\r\n                </select>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                        data-toggle=\"tooltip\"\r\n                        data-placement=\"top\"\r\n                        title=\"Add new item\"\r\n                        (click)=\"cableType.showAddModal()\">\r\n                </button>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                        data-toggle=\"tooltip\"\r\n                        data-placement=\"top\"\r\n                        title=\"Drop selected item\"\r\n                        (click)=\"cableType.showDropModal(dropElementFlag)\"\r\n                        [disabled]=\"cabelItem.cableTagIndex.length == 0\">\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"electricalList\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCableFrom\">Cable From</label>\r\n              <select [disabled]=\"electricalList.length == 0\"\r\n                      id=\"selectedCableFrom\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedCableFrom\"\r\n                      (change)=\"getXYZValue(electricalList, cabelItem.selectedCableFrom, cabelItem.selectedCableTo)\"\r\n                      name=\"selectedCableFrom\">\r\n                <option *ngFor=\"let currentCableFrom of electricalList\"\r\n                        [ngValue]=\"currentCableFrom.equipmentTag\"\r\n                        [selected]=\"currentCableFrom.equipmentTag==cabelItem.selectedCableFrom\">\r\n                  {{currentCableFrom.equipmentTag}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"electricalList\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCableTo\">Cable To</label>\r\n              <select [disabled]=\"electricalList.length == 0\"\r\n                      id=\"selectedCableTo\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedCableTo\"\r\n                      (change)=\"setCabelToConnectedFLA(electricalList, cabelItem.selectedCableTo);\r\n                    getXYZValue(electricalList, cabelItem.selectedCableFrom, cabelItem.selectedCableTo)\"\r\n                      name=\"selectedCableTo\">\r\n                <option *ngFor=\"let currentCableTo of electricalList\"\r\n                        [ngValue]=\"currentCableTo.equipmentTag\"\r\n                        [selected]=\"currentCableTo.equipmentTag==cabelItem.selectedCableTo\">\r\n                  {{currentCableTo.equipmentTag}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedPowerSystem\">System</label>\r\n              <select id=\"selectedPowerSystem\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedPowerSystem\"\r\n                      (change)=\"typeChanged()\"\r\n                      name=\"selectedPowerSystem\">\r\n                <option *ngFor=\"let currentPowerSystem of cabelItem.powerSystem\"\r\n                        [ngValue]=\"currentPowerSystem\"\r\n                        [selected]=\"currentPowerSystem==cabelItem.selectedPowerSystem\">\r\n                  {{currentPowerSystem}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedConductorMaterial\">Conductor Material</label>\r\n              <select id=\"selectedConductorMaterial\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedConductorMaterial.name\"\r\n                      (change)=\"conductorMaterialChanged()\"\r\n                      name=\"selectedConductorMaterial\">\r\n                <option *ngFor=\"let currentConductorMaterial of conductorMaterialAfterChangePowerSystem\"\r\n                        [ngValue]=\"currentConductorMaterial.name\"\r\n                        [selected]=\"currentConductorMaterial.name == cabelItem.selectedConductorMaterial.name\">\r\n                  {{currentConductorMaterial.name}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedVoltage\">Circuit Voltage</label>\r\n              <div class=\"d-flex flex-row\">\r\n                <select id=\"selectedVoltage\"\r\n                        class=\"form-control selectForOpenModal\"\r\n                        [(ngModel)]=\"cabelItem.selectedVoltage.name\"\r\n                        name=\"selectedVoltage\"\r\n                        (change)=\"getVoltagePrefix(cabelItem.selectedVoltage.name)\">\r\n                  <option *ngFor=\"let currentVoltage of voltageAfterChangePowerSystem\"\r\n                          [ngValue]=\"currentVoltage.name\"\r\n                          [selected]=\"currentVoltage.name == cabelItem.selectedVoltage.name\">\r\n                    {{currentVoltage.name}}\r\n                  </option>\r\n                </select>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                        data-toggle=\"tooltip\"\r\n                        data-placement=\"top\"\r\n                        title=\"Add new item\"\r\n                        (click)=\"voltageModal.showAddModal()\"></button>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                        data-toggle=\"tooltip\"\r\n                        data-placement=\"top\"\r\n                        title=\"Drop selected item\"\r\n                        (click)=\"voltageModal.showDropModal(dropElementFlag)\"\r\n                        [disabled]=\"voltageAfterChangePowerSystem.length == 0\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedService\">Service</label>\r\n              <select id=\"selectedService\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedService\"\r\n                      name=\"selectedService\">\r\n                <option *ngFor=\"let currentService of cabelItem.serviceArray\"\r\n                        [ngValue]=\"currentService\"\r\n                        [selected]=\"currentService==cabelItem.selectedService\">\r\n                  {{currentService}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedMaxAmbientTemp\">Max. Amb. Temp.</label>\r\n              <select id=\"selectedMaxAmbientTemp\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedMaxAmbientTemp\"\r\n                      name=\"selectedMaxAmbientTemp\">\r\n                <option *ngFor=\"let currentMaxAmbientTemp of cabelItem.maxAmbientTempArray\"\r\n                        [ngValue]=\"currentMaxAmbientTemp\"\r\n                        [selected]=\"currentMaxAmbientTemp==cabelItem.selectedMaxAmbientTemp\">\r\n                  {{currentMaxAmbientTemp}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-sm-8 col-xl-4 align-self-start\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <span class=\"h4\">Physical</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCableType\">Cable Type</label>\r\n              <select id=\"selectedCableType\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedCableType\"\r\n                      name=\"selectedCableType\">\r\n                <option *ngFor=\"let currentCableType of cabelItem.cableTypeArrayArray\"\r\n                        [ngValue]=\"currentCableType\"\r\n                        [selected]=\"currentCableType==cabelItem.selectedCableType\">\r\n                  {{currentCableType}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"outJacket\">Out Jacket</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.outJacket\" name=\"outJacket\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedInsulationVoltage\">Insulation Voltage</label>\r\n              <select id=\"selectedInsulationVoltage\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedInsulationVoltage\"\r\n                      name=\"selectedInsulationVoltage\">\r\n                <option *ngFor=\"let currentInsulationVoltage of cabelItem.insulationVoltageArray\"\r\n                        [ngValue]=\"currentInsulationVoltage\"\r\n                        [selected]=\"currentInsulationVoltage==cabelItem.selectedInsulationVoltage\">\r\n                  {{currentInsulationVoltage}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedJacketColor\">Jacket Color</label>\r\n              <select id=\"selectedJacketColor\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedJacketColor\"\r\n                      name=\"selectedJacketColor\">\r\n                <option *ngFor=\"let currentJacketColor of cabelItem.jacketColorArray\"\r\n                        [ngValue]=\"currentJacketColor\"\r\n                        [selected]=\"currentJacketColor==cabelItem.selectedJacketColor\">\r\n                  {{currentJacketColor}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedInsulationRating\">Ins. Rating</label>\r\n              <select id=\"selectedInsulationRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedInsulationRating\"\r\n                      name=\"selectedInsulationRating\">\r\n                <option *ngFor=\"let currentInsulationRating of cabelItem.insulationRatingArray\"\r\n                        [ngValue]=\"currentInsulationRating\"\r\n                        [selected]=\"currentInsulationRating==cabelItem.selectedInsulationRating\">\r\n                  {{currentInsulationRating}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedRaceway\">Raceway</label>\r\n              <select id=\"selectedRaceway\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedRaceway\"\r\n                      name=\"selectedRaceway\">\r\n                <option *ngFor=\"let currentRaceway of cabelItem.racewayArray\"\r\n                        [ngValue]=\"currentRaceway\"\r\n                        [selected]=\"currentRaceway==cabelItem.selectedJacketColor\">\r\n                  {{currentRaceway}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedConductorInsulationType\">Conductor Ins Type</label>\r\n              <select id=\"selectedConductorInsulationType\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedConductorInsulationType\"\r\n                      name=\"selectedConductorInsulationType\">\r\n                <option *ngFor=\"let currentConductorInsulationType of cabelItem.conductorInsulationTypeArray\"\r\n                        [ngValue]=\"currentConductorInsulationType\"\r\n                        [selected]=\"currentConductorInsulationType==cabelItem.selectedConductorInsulationType\">\r\n                  {{currentConductorInsulationType}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedFtRating\">Ft. Rating</label>\r\n              <select id=\"selectedFtRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedFtRating\"\r\n                      name=\"selectedFtRating\">\r\n                <option *ngFor=\"let currentFtRating of cabelItem.ftRatingArray\"\r\n                        [ngValue]=\"currentFtRating\"\r\n                        [selected]=\"currentFtRating==cabelItem.selectedFtRating\">\r\n                  {{currentFtRating}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedInsulationTemperatureRating\">Ins Temp Rating</label>\r\n              <select [disabled]=\"!cabelItem.selectedConductorMaterial.name || cabelItem.selectedConductorMaterial.name == 'Aluminium'\"\r\n                      id=\"selectedInsulationTemperatureRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedInsulationTemperatureRating.name\"\r\n                      name=\"selectedInsulationTemperatureRating\">\r\n                <option *ngFor=\"let currentInsulationType of insTempRatingAfterChangeConductorMaterial\"\r\n                        [ngValue]=\"currentInsulationType.name\"\r\n                        [selected]=\"currentInsulationType.name == cabelItem.selectedInsulationTemperatureRating.name\">\r\n                  {{currentInsulationType.name}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedWireColor\">Wire Color</label>\r\n              <select id=\"selectedWireColor\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedWireColor\"\r\n                      name=\"selectedWireColor\">\r\n                <option *ngFor=\"let currentWireColor of cabelItem.wireColorArray\"\r\n                        [ngValue]=\"currentWireColor\"\r\n                        [selected]=\"currentWireColor==cabelItem.selectedWireColor\">\r\n                  {{currentWireColor}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedShield\">Shield</label>\r\n              <select id=\"selectedShield\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedShield\"\r\n                      name=\"selectedShield\">\r\n                <option *ngFor=\"let currentShield of cabelItem.shieldArray\"\r\n                        [ngValue]=\"currentShield\"\r\n                        [selected]=\"currentShield==cabelItem.selectedShield\">\r\n                  {{currentShield}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedApproval\">Approval</label>\r\n              <select id=\"selectedApproval\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedApproval\"\r\n                      name=\"selectedApproval\">\r\n                <option *ngFor=\"let currentApproval of cabelItem.approvalArray\"\r\n                        [ngValue]=\"currentApproval\"\r\n                        [selected]=\"currentApproval==cabelItem.selectedApproval\">\r\n                  {{currentApproval}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedArmour\">Armour</label>\r\n              <select id=\"selectedArmour\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedArmour\"\r\n                      name=\"selectedArmour\">\r\n                <option *ngFor=\"let currentArmour of cabelItem.armourArray\"\r\n                        [ngValue]=\"currentArmour\"\r\n                        [selected]=\"currentArmour==cabelItem.selectedArmour\">\r\n                  {{currentArmour}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"od\">O.D.</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.od\" name=\"od\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"kgPerMetr\">kg/m</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.kgPerMetr\" name=\"kgPerMetr\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-xl-6 align-self-end\">\r\n            <div class=\"row\">\r\n              <div class=\"col-2\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemNum\">No</label>\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.itemNum\" name=\"itemNum\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedItemType\">Type</label>\r\n                  <select id=\"selectedItemType\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"cabelItem.selectedItemType\"\r\n                          name=\"selectedItemType\">\r\n                    <option *ngFor=\"let currentItemType of cabelItem.itemTypeArray\"\r\n                            [ngValue]=\"currentItemType\"\r\n                            [selected]=\"currentItemType==cabelItem.selectedItemType\">\r\n                      {{currentItemType}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedCableSize\">Size</label>\r\n                  <select id=\"selectedCableSize\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"cabelItem.selectedCableSize\"\r\n                          name=\"selectedCableSize\">\r\n                    <option *ngFor=\"let currentCableSize of cabelItem.cableSizeArray\"\r\n                            [ngValue]=\"currentCableSize\"\r\n                            [selected]=\"currentCableSize==cabelItem.selectedCableSize\">\r\n                      {{currentCableSize}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Start CONFIGURATION -->\r\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <span class=\"h4\">Configuration</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedInstallMethod\">Install Method</label>\r\n              <select id=\"selectedInstallMethod\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedInstallMethod\"\r\n                      name=\"selectedInstallMethod\">\r\n                <option *ngFor=\"let currentsInstallMethod of cabelItem.installMethodArray\"\r\n                        [ngValue]=\"currentsInstallMethod\"\r\n                        [selected]=\"currentsInstallMethod==cabelItem.selectedInstallMethod\">\r\n                  {{currentsInstallMethod}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedSpacing\">Spacing</label>\r\n              <select id=\"selectedSpacing\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedSpacing\"\r\n                      name=\"selectedSpacing\">\r\n                <option *ngFor=\"let currentsSpacing of cabelItem.spacingArray\"\r\n                        [ngValue]=\"currentsSpacing\"\r\n                        [selected]=\"currentsSpacing==cabelItem.selectedSpacing\">\r\n                  {{currentsSpacing}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedSpacingCorrection\">Spacing Correction</label>\r\n              <select id=\"selectedSpacingCorrection\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedSpacingCorrection\"\r\n                      name=\"selectedSpacingCorrection\">\r\n                <option *ngFor=\"let currentsSpacingCorrection of cabelItem.spacingCorrectionArray\"\r\n                        [ngValue]=\"currentsSpacingCorrection\"\r\n                        [selected]=\"currentsSpacingCorrection==cabelItem.selectedSpacingCorrection\">\r\n                  {{currentsSpacingCorrection}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"tempCorrection\">Temp Correction</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.tempCorrection\" name=\"tempCorrection\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCec\">Cec 28-104</label>\r\n              <select id=\"selectedCec\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedCec\"\r\n                      name=\"selectedCec\">\r\n                <option *ngFor=\"let currentsSelectedCec of cabelItem.cecArray\"\r\n                        [ngValue]=\"currentsSelectedCec\"\r\n                        [selected]=\"currentsSelectedCec==cabelItem.selectedCec\">\r\n                  {{currentsSelectedCec}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"correctedCondAmp\">Corrected Cond. Amp</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.correctedCondAmp\" name=\"correctedCondAmp\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"numberOfRunsPerPhase\">No. of Runs Per Phase</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.numberOfRunsPerPhase\" name=\"numberOfRunsPerPhase\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"feederAmpacity\">Feeder Ampacity</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"cabelItem.feederAmpacity\" name=\"feederAmpacity\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Edd CONFIGURATION -->\r\n      <!-- Strart VOLTAGE DROP section -->\r\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <span class=\"h4\">Voltage Drop</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label>Cable Distance Calc</label>\r\n              <button type=\"button\"\r\n                      class=\"btn btn-secondary btn-block\"\r\n                      (click)=\"cabelDistanceModal.showModal()\">\r\n                Cable calculate\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"cableLenth\">Total Length</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.cableLenth\" name=\"cableLenth\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"voltageDropPercent\">Voltage Drop (%)</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.voltageDropPercent\" name=\"voltageDropPercent\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--End VOLTAGE DROP section -->\r\n      <!-- Strart LOAD section -->\r\n      <div class=\"col-12 col-sm-4 col-xl-2 align-self-start\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <span class=\"h4\">Load</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"connectedFla\">Connected FLA</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.connectedFLA\" name=\"connectedFla\" disabled>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedAmpacityMultiplier\">Ampacity Multiplier</label>\r\n              <select id=\"selectedAmpacityMultiplier\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"cabelItem.selectedAmpacityMultiplier\"\r\n                      name=\"selectedAmpacityMultiplier\">\r\n                <option *ngFor=\"let currentAmpacityMultiplierArray of cabelItem.ampacityMultiplierArray\"\r\n                        [ngValue]=\"currentAmpacityMultiplierArray\"\r\n                        [selected]=\"currentAmpacityMultiplierArray==cabelItem.selectedAmpacityMultiplier\">\r\n                  {{currentAmpacityMultiplierArray}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"minCondAmp\">Min. Cond. Amp.</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.minCondAmp\" name=\"minCondAmp\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"condAmpacity\">Cond. Ampacity</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.condAmpacity\" name=\"condAmpacity\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"ocAmpRating\">O/C Amp Rating</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.ocAmpRating\" name=\"ocAmpRating\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"internalNotes\">Internal Notes</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cabelItem.internalNotes\" name=\"internalNotes\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end\">\r\n      <div class=\"mr-auto p-2\">\r\n        <a routerLink=\"/project/{{projectId}}/cables/\" class=\"btn btn-primary\">Back</a>\r\n      </div>\r\n      <div class=\"p-2 form-group\">\r\n        <span *ngIf=\"isCanChange\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!cabelForm.form.valid\">Update/Create</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ml-3 mr-3\" *ngIf=\"sizeWindow > 576; else werticalTable\">\r\n      <div class=\"row achievements-wrapper\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Rev.</th>                                                 <!-- 1 -->\r\n              <th>Cable Conduit Tag</th>                                    <!-- 2 -->\r\n              <th>Service</th>                                              <!-- 3 -->\r\n              <th>Load(A)</th>                                              <!-- 4 -->\r\n              <th>Volts</th>                                                <!-- 5 -->\r\n              <th>From Source</th>                                          <!-- 6 -->\r\n              <th>To Destination</th>                                       <!-- 7 -->\r\n              <th>Cable/Conduit Size/Type</th>                              <!-- 8 -->\r\n              <th>Cable/Conduit Lenth(m) etc.</th>                          <!-- 9 -->\r\n              <th>No. of Cond.</th>                                         <!-- 10 -->\r\n              <th>Type of Cond.</th>                                        <!-- 11 -->\r\n              <th>Cable Size</th>                                           <!-- 12 -->\r\n              <th>Conductor Insulation Type.</th>                           <!-- 13 -->\r\n              <th>Insul. Volts</th>                                         <!-- 14 -->\r\n              <th>Spare</th>                                                <!-- 15 -->\r\n              <th>Comments/Raceway Numbers</th>                             <!-- 16 -->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td></td>                         <!-- 1 Rev. -->\r\n              <td></td>                     <!-- 2 Cable Conduit Tag -->\r\n              <td>{{cabelItem?.selectedService}}</td>     <!-- 3 Service -->\r\n              <td></td>            <!-- 4 Load(A) -->\r\n              <td>{{voltagePrefix}}</td>             <!-- 5 Volts -->\r\n              <td>{{cabelItem?.selectedCableFrom}}</td>              <!-- 6 From Source -->\r\n              <td>{{cabelItem?.selectedCableTo}}</td>                  <!-- 7 To Destination -->\r\n              <td>{{cabelItem?.selectedCableTagIndex}}</td>                    <!-- 8 Cable/Conduit Size/Type -->\r\n              <td>{{cableLenth}}</td>                          <!-- 9 Cable/Conduit Lenth(m) etc. -->\r\n              <td>{{cabelItem?.itemNum}}</td>                         <!-- 10 No. of Cond. -->\r\n              <td>{{cabelItem?.selectedItemType}}</td>                  <!-- 11 Type of Cond. -->\r\n              <td>{{cabelItem?.selectedCableSize}}</td>                <!-- 12 Cable Size -->\r\n              <td>{{cabelItem?.selectedConductorInsulationType}}</td>                       <!-- 13 Conductor Insulation Type. -->\r\n              <td>{{cabelItem?.selectedInsulationVoltage}}</td>                 <!-- 14 Insul. Volts -->\r\n              <td></td>                 <!-- 15 Spare -->\r\n              <td></td>                  <!-- 16 Comments/Raceway Numbers -->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <ng-template class=\"ml-3 mr-3\" #werticalTable>\r\n      <div class=\"row\">\r\n        <table class=\"table table-bordered\">\r\n          <tr>\r\n            <td><strong>Rev.</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Cable Conduit Tag</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Service</strong></td>\r\n            <td>{{cabelItem?.selectedService}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Load(A)</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Volts</strong></td>\r\n            <td>{{voltagePrefix}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>From Source</strong></td>\r\n            <td>{{cabelItem?.selectedCableFrom}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>To Destination</strong></td>\r\n            <td>{{cabelItem?.selectedCableTo}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Cable/Conduit Size/Type</strong></td>\r\n            <td>{{cabelItem?.selectedCableTagIndex}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Cable/Conduit Lenth(m) etc.</strong></td>\r\n            <td>{{cableLenth}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>No. of Cond.</strong></td>\r\n            <td>{{cabelItem?.itemNum}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Type of Cond.</strong></td>\r\n            <td>{{cabelItem?.selectedItemType}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Cable Size</strong></td>\r\n            <td>{{cabelItem.selectedCableSize}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Conductor Insulation Type.</strong></td>\r\n            <td>{{cabelItem?.selectedConductorInsulationType}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Insul. Volts</strong></td>\r\n            <td>{{cabelItem?.selectedInsulationVoltage}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Spare</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Comments/Raceway Numbers</strong></td>\r\n            <td></td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </ng-template>\r\n  </form>\r\n  <div class=\"row ml-3 mb-3\">\r\n    <span *ngIf=\"isCanChange\">\r\n      <button class=\"btn btn-danger\" (click)=\"deleteCable(cabelItem._id)\">Delete</button>\r\n    </span>\r\n  </div>\r\n</div>\r\n<div>\r\n  <app-electricals-modal [dataValue]=\"voltageAfterChangePowerSystem\" [selectedValue]=\"cabelItem?.selectedVoltage?.name\" [title]=\"voltage\" #voltageModal></app-electricals-modal>\r\n  <app-electricals-modal [dataValue]=\"cabelItem?.cableTagIndex\" [selectedValue]=\"cabelItem?.selectedCableTagIndex\" [title]=\"cableTypeModalName\" #cableType></app-electricals-modal>\r\n  <app-cable-distance-modal [firstElement]=\"cabelItem?.selectedCableFrom\" [secondElement]=\"cabelItem?.selectedCableTo\" [title]=\"cableDistanceModalHeader\" #cabelDistanceModal></app-cable-distance-modal>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/cable-item/cable-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cable_service__ = __webpack_require__("../../../../../src/app/services/cable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NgModel } from '@angular/forms';


//



var CableItemComponent = (function () {
    function CableItemComponent(router, route, cableService, spinnerService, projectServise) {
        this.router = router;
        this.route = route;
        this.cableService = cableService;
        this.spinnerService = spinnerService;
        this.projectServise = projectServise;
        this.teamWork = true;
        this.dropElementFlag = true;
        this.voltage = 'Voltage';
        this.cableTypeModalName = 'Cable Type';
        this.cableDistanceModalHeader = 'Cable Distance';
        this.voltageAfterChangePowerSystem = [];
        this.conductorMaterialAfterChangePowerSystem = [];
        this.insTempRatingAfterChangeConductorMaterial = [];
        this.projectId = this.route.snapshot.params['id'];
        this.cableId = this.route.snapshot.params['cableId'];
        this.sizeWindow = window.innerWidth;
    }
    CableItemComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    CableItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userGuid = u.guid;
            this.userEmail = u.email;
            //
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.cableService.getCableItem(this.projectId, this.cableId).subscribe(function (cables) {
            _this.cabelItem = cables.cabel;
            //
            _this.projectServise.getProjectById(_this.projectId).subscribe(function (itemProject) {
                _this.project = itemProject;
                if (itemProject.creator === _this.userGuid) {
                    _this.isCanChange = true;
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserChange(_this.project.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserView(_this.project.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                }
                /*
                for (let i = 0; i < this.project.team_project.length; ++i) {
                  const teamWorker = this.project.team_project[i];
                  if (this.project.creator === this.userEmail || teamWorker === this.userEmail) {
                    this.teamWork = true;
                    break;
                  } else {
                    this.teamWork = false;
                  }
                }
                */
            });
            //
            _this.voltageAfterChangePowerSystem = cables.cabel.voltage.filter(function (p) { return p.powerSystemType === cables.cabel.selectedPowerSystem; });
            // tslint:disable-next-line:max-line-length
            _this.conductorMaterialAfterChangePowerSystem = cables.cabel.conductorMaterial.filter(function (cm) { return cm.powerSystemType === cables.cabel.selectedPowerSystem; });
            _this.insTempRatingAfterChangeConductorMaterial = cables.cabel.insulationTemperatureRatingArray.filter(function (itr) { return itr.conductorMaterialType === cables.cabel.selectedConductorMaterial.name; });
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
        this.cableService.getElectricalName(this.projectId).subscribe(function (electricals) {
            _this.electricalList = electricals.electricals;
        });
    };
    CableItemComponent.prototype.setCabelToConnectedFLA = function (elecList, selectedCableTo) {
        var electricalsList = elecList;
        for (var key in electricalsList) {
            if (electricalsList[key].equipmentTag === selectedCableTo) {
                this.cabelItem.connectedFLA = electricalsList[key].totalConectedFla;
            }
        }
    };
    CableItemComponent.prototype.getXYZValue = function (elList, from, to) {
        var listOfElecricals = elList;
        var cabelFrom = from;
        var cableTo = to;
        var cabelFromObject = {};
        var cabelToObject = {};
        if (!cabelFrom || !cableTo) {
            return;
        }
        else {
            for (var key in listOfElecricals) {
                if (listOfElecricals[key].equipmentTag === cabelFrom) {
                    cabelFromObject.coordForX = listOfElecricals[key].coordForX;
                    cabelFromObject.coordForY = listOfElecricals[key].coordForY;
                    cabelFromObject.coordForZ = listOfElecricals[key].coordForZ;
                }
            }
            for (var key in listOfElecricals) {
                if (listOfElecricals[key].equipmentTag === cableTo) {
                    cabelToObject.coordForX = listOfElecricals[key].coordForX;
                    cabelToObject.coordForY = listOfElecricals[key].coordForY;
                    cabelToObject.coordForZ = listOfElecricals[key].coordForZ;
                }
            }
            var sumCoordForX = cabelFromObject.coordForX - cabelToObject.coordForX;
            var absoluteCoordForX = Math.abs(sumCoordForX);
            var sumCoordForY = cabelFromObject.coordForY - cabelToObject.coordForY;
            var absoluteCoordForY = Math.abs(sumCoordForY);
            var sumCoordForZ = cabelFromObject.coordForZ - cabelToObject.coordForZ;
            var absoluteCoordForZ = Math.abs(sumCoordForZ);
            this.cabelItem.cableLenth = absoluteCoordForX + absoluteCoordForY + absoluteCoordForZ;
        }
    };
    CableItemComponent.prototype.getVoltagePrefix = function (voltageData) {
        this.voltagePrefix = voltageData;
        var index = this.voltagePrefix.lastIndexOf(' ');
        this.voltagePrefix = this.voltagePrefix.substring(index + 1);
    };
    CableItemComponent.prototype.typeChanged = function () {
        var _this = this;
        if (!this.cabelItem) {
            return;
        }
        else {
            this.voltageAfterChangePowerSystem = this.cabelItem.voltage.filter(function (p) { return p.powerSystemType === _this.cabelItem.selectedPowerSystem; });
            // tslint:disable-next-line:max-line-length
            this.conductorMaterialAfterChangePowerSystem = this.cabelItem.conductorMaterial.filter(function (cm) { return cm.powerSystemType === _this.cabelItem.selectedPowerSystem; });
            this.cabelItem.selectedConductorMaterial.name = '';
            this.cabelItem.selectedInsulationVoltage = '';
            this.cabelItem.selectedRaceway = '';
            this.conductorMaterialChanged();
        }
    };
    CableItemComponent.prototype.conductorMaterialChanged = function () {
        var _this = this;
        if (!this.cabelItem) {
            return;
        }
        else {
            // tslint:disable-next-line:max-line-length
            this.insTempRatingAfterChangeConductorMaterial = this.cabelItem.insulationTemperatureRatingArray.filter(function (itr) { return itr.conductorMaterialType === _this.cabelItem.selectedConductorMaterial.name; });
            this.cabelItem.selectedInsulationTemperatureRating.name = '';
        }
    };
    CableItemComponent.prototype.changeVoltageArrayObject = function (productsAfterChange, projectData) {
        var arayObjectsAfterFilter = projectData.filter(function (p) { return p.powerSystemType !== productsAfterChange[0].powerSystemType; });
        for (var i = 0; i < productsAfterChange.length; ++i) {
            var itemElement = productsAfterChange[i];
            arayObjectsAfterFilter.push(itemElement);
        }
        return arayObjectsAfterFilter;
    };
    CableItemComponent.prototype.saveCable = function (idCable, data) {
        var _this = this;
        this.spinnerService.show();
        // Info part
        data.cableTagFirst = this.cabelItem.cableTagFirst;
        data.cableTagSecond = this.cabelItem.cableTagSecond;
        data.cableTagThird = this.cabelItem.cableTagThird;
        data.cableTagFourth = this.cabelItem.cableTagFourth;
        data.cableTagIndex = this.cabelItem.cableTagIndex;
        data.selectedCableTagIndex = this.cabelItem.selectedCableTagIndex;
        // START TODO chech how it save with electricalItem
        data.selectedCableFrom = this.cabelItem.selectedCableFrom;
        data.selectedCableTo = this.cabelItem.selectedCableTo;
        // END TODO
        this.selectedItemVoltage = data.selectedVoltage;
        data.selectedVoltage = {};
        data.selectedVoltage.name = this.selectedItemVoltage;
        data.voltage = this.changeVoltageArrayObject(this.voltageAfterChangePowerSystem, this.cabelItem.voltage);
        data.selectedVoltage.powerSystemType = data.selectedPowerSystem;
        data.selectedPowerSystem = this.cabelItem.selectedPowerSystem;
        data.selectedConductorMaterial = {};
        data.selectedConductorMaterial.name = this.cabelItem.selectedConductorMaterial.name;
        data.selectedConductorMaterial.powerSystemType = data.selectedPowerSystem;
        //
        data.selectedService = this.cabelItem.selectedService;
        data.selectedMaxAmbientTemp = this.cabelItem.selectedMaxAmbientTemp;
        // Physical part
        data.selectedCableType = this.cabelItem.selectedCableType;
        data.outJacket = this.cabelItem.outJacket;
        data.selectedInsulationVoltage = this.cabelItem.selectedInsulationVoltage;
        data.selectedJacketColor = this.cabelItem.selectedJacketColor;
        data.selectedInsulationRating = this.cabelItem.selectedInsulationRating;
        data.selectedRaceway = this.cabelItem.selectedRaceway;
        data.selectedConductorInsulationType = this.cabelItem.selectedConductorInsulationType;
        data.selectedFtRating = this.cabelItem.selectedFtRating;
        // TODO finish Ins Temp Rating
        data.selectedInsulationTemperatureRating = {};
        data.selectedInsulationTemperatureRating.name = this.cabelItem.selectedInsulationTemperatureRating.name;
        data.selectedInsulationTemperatureRating.conductorMaterialType = this.cabelItem.selectedConductorMaterial.name;
        //
        data.selectedWireColor = this.cabelItem.selectedWireColor;
        data.selectedShield = this.cabelItem.selectedShield;
        data.selectedApproval = this.cabelItem.selectedApproval;
        data.selectedArmour = this.cabelItem.selectedArmour;
        data.od = this.cabelItem.od;
        data.kgPerMetr = this.cabelItem.kgPerMetr;
        data.itemNum = this.cabelItem.itemNum;
        data.selectedItemType = this.cabelItem.selectedItemType;
        data.selectedCableSize = this.cabelItem.selectedCableSize;
        // Configuration part
        data.selectedInstallMethod = this.cabelItem.selectedInstallMethod;
        data.selectedSpacing = this.cabelItem.selectedSpacing;
        data.selectedSpacingCorrection = this.cabelItem.selectedSpacingCorrection;
        data.tempCorrection = this.cabelItem.tempCorrection;
        data.selectedCec = this.cabelItem.selectedCec;
        data.correctedCondAmp = this.cabelItem.correctedCondAmp;
        data.numberOfRunsPerPhase = this.cabelItem.numberOfRunsPerPhase;
        data.feederAmpacity = this.cabelItem.feederAmpacity;
        // Voltage Drop part
        data.cableLenth = this.cabelItem.cableLenth || 0;
        data.voltageDropPercent = this.cabelItem.voltageDropPercent || 0;
        // Load part
        data.connectedFLA = this.cabelItem.connectedFLA;
        data.selectedAmpacityMultiplier = this.cabelItem.selectedAmpacityMultiplier;
        data.minCondAmp = this.cabelItem.minCondAmp;
        data.condAmpacity = this.cabelItem.condAmpacity;
        data.ocAmpRating = this.cabelItem.ocAmpRating;
        data.internalNotes = this.cabelItem.internalNotes;
        this.cableService.updateCabelItem(this.projectId, idCable, data).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'cables']);
        }, function (err) {
            console.log(err);
        });
    };
    CableItemComponent.prototype.deleteCable = function (cableItemId) {
        var _this = this;
        this.spinnerService.show();
        this.cableService.deleteCableItem(this.projectId, cableItemId).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'cables']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CableItemComponent.prototype, "onResize", null);
    CableItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cable-item',
            template: __webpack_require__("../../../../../src/app/components/cable-item/cable-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cable-item/cable-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_cable_service__["a" /* CableService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], CableItemComponent);
    return CableItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cable-list/cable-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n.table-text-style{\r\n  font-family: Roboto-Bolt!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\n.disable-decoration {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.table-cursor {\r\n  cursor: pointer;\r\n}\r\n\r\nthead th {\r\n  font-size: 0.6rem;\r\n}\r\ntbody tr td  {\r\n  font-size: 0.6rem;\r\n}\r\n.achievements-wrapper {\r\n  height: auto; \r\n  overflow: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cable-list/cable-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--class=\"container\"-->\r\n  <div class=\"row\" style=\"margin-left: 0px!important; margin-right: 0px!important\">\r\n    <div class=\"col-12\">\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\" style=\"background-color: white!important\">\r\n          <li *ngIf=\"isAdmin\" class=\"breadcrumb-item\">\r\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/superadmin']\">\r\n              <strong>Admin panel</strong>\r\n            </a>\r\n          </li>\r\n          <li *ngIf=\"!isAdmin\" class=\"breadcrumb-item\">\r\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project']\">\r\n              <strong>Projects List</strong>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\">\r\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project', projectId]\">\r\n              <strong>Dashboard for Project {{ projectName?.title }}</strong>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Cables List</li>\r\n        </ol>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"pt-2 text-center\">\r\n    <h1>\r\n      Cables List\r\n      <span *ngIf=\"isCanChange\">\r\n        <button class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new cable\" (click)=\"saveCable()\">\r\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </span>\r\n    </h1>\r\n  </div>\r\n  <div class=\"row achievements-wrapper ml-3 mr-3\">\r\n    <table id=\"exportable\" class=\"table table-sm table-bordered table-hover table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <!--<th></th> -->                           <!-- 1 -->\r\n          <th>Rev.</th>                               <!-- 2 -->\r\n          <th>Cable Conduit Tag</th>                  <!-- 3 -->\r\n          <th>Service</th>                            <!-- 4 -->\r\n          <th>Load(A)</th>                            <!-- 5 -->\r\n          <th>Volts</th>                              <!-- 6 -->\r\n          <th>From Source</th>                        <!-- 7 -->\r\n          <th>To Destination</th>                     <!-- 8 -->\r\n          <th>Cable/Conduit Size/Type</th>            <!-- 9 -->\r\n          <th>Cable/Conduit Lenth(m) etc.</th>        <!-- 10 -->\r\n          <th>No. of Cond.</th>                       <!-- 11 -->\r\n          <th>Type of Cond</th>                       <!-- 12 -->\r\n          <th>Size (AWG)</th>                         <!-- 13 -->\r\n          <th>Insul</th>                              <!-- 14 -->\r\n          <th>Insul Volts</th>                        <!-- 15 -->\r\n          <th>Spare</th>                              <!-- 16 -->\r\n          <th>Comments/ Raceway/ Numbers</th>         <!-- 17 -->\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let cabel of cables?.cabels\">\r\n          <!--<td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\"></a></td>-->                                              <!-- 1 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\">{{\"N/A\"}}<a class=\"table-cursor\"></a></td>                                            <!-- 2 Rev-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\">\r\n            <a class=\"table-cursor\">\r\n              {{cabel?.cableTagFirst}}-{{cabel?.cableTagSecond}}-{{cabel?.selectedCableTagIndex}}-{{cabel?.cableTagThird}}-{{cabel?.cableTagFourth}}\r\n            </a>\r\n          </td>                                                                                                                                                                   <!-- 3 Cable Conduit Tag-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedService || \"N/A\"}}</a></td>                  <!-- 4 Service -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{\"N/A\"}}</a></td>                                            <!-- 5 Load(A) -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedVoltage?.name || \"N/A\"}}</a></td>            <!-- 6 Volts -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedCableFrom || \"N/A\"}}</a></td>                <!-- 7 From Source -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedCableTo || \"N/A\"}}</a></td>                  <!-- 8 To Destination -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedCableType || \"N/A\"}}</a></td>                <!-- 9 Cable/Conduit Size/Type-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{\"N/A\"}}</a></td>                                            <!-- 10 Cable/Conduit Lenth(m) etc.-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.itemNum || \"N/A\"}}</a></td>                              <!-- 11 No. of Cond.-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedItemType || \"N/A\"}}</a></td>                     <!-- 12 Type of Cond-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{\"N/A\"}}</a></td>                                            <!-- 13 Size (AWG)-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cabel?.selectedConductorInsulationType || \"N/A\"}}</a></td>  <!-- 14 Insul-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{cable?.selectedInsulationVoltage || \"N/A\"}}</a></td>        <!-- 15 Insul Volts -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{\"N/A\"}}</a></td>                                            <!-- 16 Spare -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/cables/{{cabel._id}}\"><a class=\"table-cursor\">{{\"N/A\"}}</a></td>                                            <!-- 17 Comments/ Raceway/ Numbers-->\r\n          <td>\r\n            <input type=\"checkbox\" [(ngModel)]=\"cabel.isChecked\" (click)=\"puchToCabelArray(cabel)\">\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"mt-1 ml-auto mr-3\">\r\n      <div class=\"form-group\">\r\n        <label for=\"isChecked\">Select All</label>\r\n        <input type=\"checkbox\" [(ngModel)]=\"isChecked\" (click)=\"changeFlag(isChecked)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"ml-auto mr-3\">\r\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcell()\">Export Cable Shedule</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"mt-1 ml-auto mr-3\">\r\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcellUIData()\" [disabled]=\"cableArrayList == 0\">Export Cabels UI Data</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/cable-list/cable-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cable_service__ = __webpack_require__("../../../../../src/app/services/cable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_excel_service__ = __webpack_require__("../../../../../src/app/services/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {saveAs as importedSaveAs} from "file-saver";
// import * as XLSX from 'xlsx';


var CableListComponent = (function () {
    function CableListComponent(cableService, router, route, spinnerService, projectServise, excelService) {
        this.cableService = cableService;
        this.router = router;
        this.route = route;
        this.spinnerService = spinnerService;
        this.projectServise = projectServise;
        this.excelService = excelService;
        this.isChecked = false;
        this.teamWork = false;
        this.isCanChange = false;
        this.isViewOnly = false;
        this.projectId = this.route.snapshot.params['id'];
        this.cableArrayList = [];
    }
    CableListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userEmail = u.email;
            this.userGuid = u.guid;
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.cableService.getCables(this.projectId).subscribe(function (cableList) {
            _this.cables = cableList;
            _this.projectServise.getProjectById(_this.projectId).subscribe(function (itemProject) {
                _this.project = itemProject;
                if (itemProject.creator === _this.userGuid) {
                    _this.isCanChange = true;
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_7__shared_Availability__["a" /* Availability */].CanUserChange(_this.project.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_7__shared_Availability__["a" /* Availability */].CanUserView(_this.project.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                }
                /*
                for (let i = 0; i < this.project.team_project.length; ++i) {
                  const teamWorker = this.project.team_project[i];
                  if (this.project.creator === this.userEmail || teamWorker === this.userEmail) {
                    this.teamWork = true;
                    break;
                  } else {
                    this.teamWork = false;
                  }
                }
                */
            });
        }, function (err) {
            console.log(err);
            return false;
        });
        this.projectServise.getProjectNameById(this.projectId).subscribe(function (project) {
            _this.projectName = project;
        }, function (err) {
            _this.spinnerService.hide();
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    CableListComponent.prototype.puchToCabelArray = function (element) {
        if (!element.isChecked) {
            this.cableArrayList.push(element._id);
        }
        else {
            this.cableArrayList.pop();
        }
    };
    CableListComponent.prototype.changeFlag = function (isCheck) {
        if (isCheck) {
            this.isChecked = false;
            for (var i = 0; i < this.cables.cabels.length; ++i) {
                this.cables.cabels[i].isChecked = false;
                this.cableArrayList = [];
            }
        }
        else {
            this.isChecked = true;
            for (var i = 0; i < this.cables.cabels.length; ++i) {
                this.cables.cabels[i].isChecked = true;
                this.cableArrayList.push(this.cables.cabels[i]._id);
            }
        }
    };
    CableListComponent.prototype.saveToExcell = function () {
        var wscols = [
            // tslint:disable-next-line:max-line-length
            // A      // B       // C       // D      // E       // F       // G         // H     // I       // J       // K       // L       // M      // N       // O      // P
            { wch: 5 }, { wch: 18 }, { wch: 12 }, { wch: 7 }, { wch: 10 }, { wch: 13 }, { wch: 18 }, { wch: 25 }, { wch: 29 }, { wch: 12 }, { wch: 15 }, { wch: 10 }, { wch: 7 }, { wch: 11 }, { wch: 7 }, { wch: 32 }
        ];
        /*
          var ws = XLSX.utils.table_to_book(document.getElementById('exportable')).Sheets.Sheet1;
          ws['!cols'] = wscols;
          let wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "Cabels List");
          let wbout = XLSX.write(wb, {
            bookType:'xlsx',
            type:'binary',
            cellStyles:true
            //bookSST:true
          });
          console.log(wbout);
          function s2ab(s) {
            let buf = new ArrayBuffer(s.length);
            let view = new Uint8Array(buf);
            for (let i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
          }
          importedSaveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), "Report from project cabels "+Date.now()+".xlsx");
          */
        var projectArray = [];
        for (var i = 0; i < this.cables.cabels.length; ++i) {
            projectArray.push(this.cables.cabels[i]._id);
        }
        var queryString = 'cable-item-list';
        var scheetName = 'Cabels List';
        var controllerName = 'Cabel';
        var fileName = 'CABLE INDEX';
        // tslint:disable-next-line:max-line-length
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    CableListComponent.prototype.saveToExcellUIData = function () {
        var wscols = [
            // tslint:disable-next-line:max-line-length
            // A       // B       //C        //D       //E        //F        //G        //H        // I       // J       // K       // L       // M       // N       // O       // P      // Q
            { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 7 }, { wch: 21 }, { wch: 17 }, { wch: 14 }, { wch: 17 }, { wch: 15 }, { wch: 20 }, { wch: 12 }, { wch: 25 }, { wch: 17 }, { wch: 10 }, { wch: 10 }, { wch: 7 }, { wch: 12 },
            // tslint:disable-next-line:max-line-length
            // R       // S       // T       // U       // V       // W     // X       // Y      // Z       // AA      // AB      // AC      // AD      // AE      // AF      // AG      // AH
            { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 12 }, { wch: 10 }, { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 7 }, { wch: 16 }, { wch: 10 }, { wch: 20 }, { wch: 18 }, { wch: 12 }, { wch: 22 }, { wch: 22 }, { wch: 17 },
            // AI      // AJ      // AK      // AL      // AM      // AN      // AO      // AP
            { wch: 15 }, { wch: 17 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }
        ];
        var projectArray = [];
        for (var i = 0; i < this.cables.cabels.length; ++i) {
            projectArray.push(this.cables.cabels[i]._id);
        }
        var queryString = 'cable-item';
        var scheetName = 'Cabels UI List';
        var controllerName = 'Cabel';
        var fileName = 'CABLE REPORT';
        // tslint:disable-next-line:max-line-length
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    CableListComponent.prototype.saveCable = function () {
        var _this = this;
        this.cable = {};
        this.cable.length = 0;
        this.spinnerService.show();
        this.cableService.createCable(this.projectId, this.cable).subscribe(function (res) {
            var id = res['_id'];
            var responseId = res[res.length - 1]['_id'];
            var routeToCableItem = '/project/' + _this.route.snapshot.params['id'] + '/cables/' + responseId;
            _this.router.navigate([routeToCableItem]);
        }, function (err) {
            console.log(err);
        });
        this.spinnerService.hide();
    };
    CableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cable-list',
            template: __webpack_require__("../../../../../src/app/components/cable-list/cable-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cable-list/cable-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cable_service__["a" /* CableService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5__services_excel_service__["a" /* ExcelService */]])
    ], CableListComponent);
    return CableListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-touched.ng-invalid {border:solid red 1px;}\r\ninput.ng-touched.ng-valid {border:solid green 1px;}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n\r\ninput:-ms-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n\r\ninput::placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\r\n  \r\nhr {\r\n  background: #ffb248;\r\n  height: 0.25vw;\r\n  width: 5.2vw;\r\n  z-index: 2;\r\n  border: 0;\r\n}\r\n\r\n.img-block {\r\n  position:relative;\r\n}\r\n\r\n.img-captcha {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10%;\r\n  width: 30%;\r\n  /*z-index: 2;*/\r\n  height: 100%;\r\n}\r\n\r\n.img-captcha-fone {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  opacity: .7;\r\n  position: absolute;\r\n}\r\n\r\n.max-height {\r\n  height: 100%;\r\n}\r\n\r\n.captcha-header {\r\n  color: white;\r\n  z-index: 2;\r\n  font-size: 3.7vw;\r\n}\r\n\r\n.captcha-footer{\r\n  color: white;\r\n  z-index: 2;\r\n  text-align: justify;\r\n  font-size: 1.3vw;\r\n}\r\n\r\n.form-element-height{\r\n  height:4.5rem;\r\n}\r\n.form-text-block{\r\n  margin-bottom: 0.95rem;\r\n}\r\n.validate-message {\r\n  color:#d9534f;\r\n}\r\n\r\n.template-footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032;\r\n}\r\n\r\n.custom-footer-link{\r\n  text-decoration: none;\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n\r\n.contsct-us__submit-btn__block {\r\n  height: 4.5rem;\r\n}\r\n\r\n.contsct-us__submit-btn__stile {\r\n  background: #ffb248;\r\n  color: #FFFFFF!important;\r\n  border-radius: 5px;\r\n  padding: 8px 20px;\r\n  width: 180px;\r\n  border: 0;\r\n}\r\n.contsct-us__submit-btn__stile:hover {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.float-right {\r\n  float: right!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"img-block\">\n    <picture>\n      <source media=\"(min-width: 1200px)\" [srcset]=\"contactUsImg_1920\">\n      <source media=\"(min-width: 992px)\" [srcset]=\"contactUsImg_1200\">\n      <source media=\"(min-width: 768px)\" [srcset]=\"contactUsImg_992\">\n      <source media=\"(min-width: 576px)\" [srcset]=\"contactUsImg_768\">\n      <source [srcset]=\"contactUsImg_576\">\n      <img class=\"d-block img-fluid\" [src]=\"contactUsImg_1920\" alt=\"contactUs\" sr-only=\"Contact Us\">\n    </picture>\n    <div class=\"img-captcha\">\n        <div class=\"img-captcha-fone\"></div>\n        <div class=\"d-flex align-items-start flex-column max-height\">\n          <p class=\"carousel-caption-header-text pl-4 mt-auto mb-auto captcha-header\"><strong>How can we help you?</strong></p>\n          <hr class=\"mb-auto ml-4 mt-auto\">\n          <p class=\"pl-4 pr-4 mt-auto mb-auto captcha-footer\">\n            We are eager to help your business. Please contact us directly via telephone or email, or submit an inquiry using the form below.\n          </p>\n        </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <form [formGroup]=\"contactUsForm\" novalidate (ngSubmit)=\"submit()\">\n      <div class=\"row justify-content-center mt-5\">\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-6\">\n          <div class=\"row\">\n            <div class=\"col-12 form-element-height\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"userName\" formControlName=\"userName\" placeholder=\"Name\" />\n                <div class=\"form-control-feedback validate-message\" *ngIf=\"contactUsForm.controls['userName'].invalid && contactUsForm.controls['userName'].touched\">\n                  <span>Name is required</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 form-element-height\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"email\" name=\"userEmail\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                <div class=\"form-control-feedback validate-message\" *ngIf=\"contactUsForm.controls['userEmail'].invalid && contactUsForm.controls['userEmail'].touched\">\n                  Invalid email address\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 form-element-height\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"userPhone\" formControlName=\"userPhone\" (keypress)=\"keyPress($event)\" placeholder=\"Phone number (optional)\" />\n                <div class=\"form-control-feedback validate-message\" *ngIf=\"contactUsForm.controls['userPhone'].invalid\">\n                    Invalid phone number\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-6\">\n          <div class=\"form-group\" class=\"form-text-block\">\n            <textarea class=\"form-control\" formControlName=\"message\" rows=\"7\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row contsct-us__submit-btn__block\">\n        <div class=\"col-12\">\n          <!--<a href=\"/\" type=\"button\" class=\"btn btn-warning btn-lg btn-block\">Submit</a> -->\n          <a class=\"contsct-us__submit-btn__stile text-center float-right\" routerLink=\"/\"> Submit <span class=\"sr-only\"> Submit </span></a>\n        </div>\n      </div>\n    </form>\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n        <div class=\"d-flex align-items-center justify-content-around custom-footer-link max-height\">\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n                </div>\n                <div class=\"col-8\">\n                  <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n                </div>\n                <div class=\"col-8\">\n                  <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-3\">\n                  <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n                </div>\n                <div class=\"col-9\">\n                  <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n                <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_contact_us_service__ = __webpack_require__("../../../../../src/app/services/contact-us.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactUsComponent = (function () {
    function ContactUsComponent(flashMessage, router, contactUsService, spinnerService) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.contactUsService = contactUsService;
        this.spinnerService = spinnerService;
        this.textValue = 'Message';
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.sizeWindow = window.innerWidth;
        this.contactUsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'userName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'userEmail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                // tslint:disable-next-line:max-line-length
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            'userPhone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](''),
            'message': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
        });
    }
    ContactUsComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
        // header img
        this.contactUsImg_1920 = 'assets/img/1920/contactUs/contact_us.jpg';
        this.contactUsImg_1200 = 'assets/img/1200/contactUs/contact_us.jpg';
        this.contactUsImg_992 = 'assets/img/992/contactUs/contact_us.jpg';
        this.contactUsImg_768 = 'assets/img/768/contactUs/contact_us.jpg';
        this.contactUsImg_576 = 'assets/img/576/contactUs/contact_us.jpg';
    };
    ContactUsComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\(\)\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ContactUsComponent.prototype.submit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            name: this.contactUsForm.value.userName,
            email: this.contactUsForm.value.userEmail,
            phone: this.contactUsForm.value.userPhone,
            message: this.contactUsForm.value.message
        };
        this.contactUsService.sendContactUsEmail(user).subscribe(function (data) {
            if (data.success) {
                _this.spinnerService.hide();
                // tslint:disable-next-line:max-line-length
                _this.flashMessage.show('Your message has been sent to the site administrator.', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/']);
            }
            else {
                _this.spinnerService.hide();
                _this.flashMessage.show('Something went wrong.', { cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContactUsComponent.prototype, "onResize", null);
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_contact_us_service__["a" /* ContactUsService */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/controller-item/controller-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }\r\n\r\n  .border-eh-raiting {\r\n    border: 1px solid;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .inner-padding-eh-rating {\r\n    padding-bottom: 1.3rem!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/controller-item/controller-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mr-3\" (window:resize)=\"onResize($event)\" *ngIf=\"controllerItem\">\n  <div class=\"d-flex justify-content-center pt-3\">\n    <h1>Controller <strong>{{ controllerItem.controlsEquipmentTagFirst || 'New Controller' }}</strong></h1>\n  </div>\n  <form (ngSubmit)=\"saveController(controllerItem._id, controllerForm.value)\" #controllerForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-12 col-xl-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"h4 text-center\">Controller info</p>\n            <hr>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-xl-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-4\">\n                  <div class=\"form-group\">\n                      <label for=\"itemNumber\">Item Number</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.itemNumber\" name=\"itemNumber\" disabled>\n                    </div>\n              </div>\n              <div class=\"col-12 col-sm-4\">\n                  <div class=\"form-group\">\n                      <label for=\"revision\">Revision</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.revision\" name=\"revision\">\n                    </div>\n              </div>\n              <div class=\"col-12 col-sm-4\">\n                  <div class=\"form-group\">\n                      <label for=\"dataAdded\">Date Added</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"date\" name=\"dataAdded\" disabled>\n                    </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"controlsEquipmentTagFirst\">Controls Equipment Tag1</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.controlsEquipmentTagFirst\" name=\"controlsEquipmentTagFirst\" placeholder=\"New Controller\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"controlsEquipmentTagSecond\">Controls Equipment Tag2</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.controlsEquipmentTagSecond\" name=\"controlsEquipmentTagSecond\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedControlsEquipmentParentTag\">Controls Equipment Parent Tag</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"controllerItem.controlsEquipmentParentTag.length == 0\"\n                      id=\"selectedControlsEquipmentParentTag\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedControlsEquipmentParentTag\"\n                      name=\"selectedControlsEquipmentParentTag\"\n                    >\n                      <option\n                        *ngFor=\"let currentEquipmentParentTag of controllerItem.controlsEquipmentParentTag\" \n                        [ngValue]=\"currentEquipmentParentTag\"\n                        [selected]=\"currentEquipmentParentTag==controllerItem.selectedControlsEquipmentParentTag\"\n                      >\n                        {{currentEquipmentParentTag}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"equipmentParentTagModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"equipmentParentTagModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"controllerItem.controlsEquipmentParentTag.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"equipmentTag\">New Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.newTag\" name=\"newTag\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedLocation\">Location</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"controllerItem.location.length == 0\"\n                      id=\"selectedLocation\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedLocation\"\n                      name=\"selectedLocation\"\n                    >\n                      <option\n                        *ngFor=\"let currentLocation of controllerItem.location\" \n                        [ngValue]=\"currentLocation\"\n                        [selected]=\"currentLocation==controllerItem.selectedLocation\"\n                      >\n                        {{currentLocation}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"locationModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"locationModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"controllerItem.location.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedDataSheetNumber\">Data Sheet Number</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"controllerItem.dataSheetNumber.length == 0\"\n                      id=\"selectedDataSheetNumber\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedDataSheetNumber\"\n                      name=\"selectedDataSheetNumber\"\n                    >\n                      <option\n                        *ngFor=\"let currentDataSheetNumber of controllerItem.dataSheetNumber\" \n                        [ngValue]=\"currentDataSheetNumber\"\n                        [selected]=\"currentDataSheetNumber==controllerItem.selectedDataSheetNumber\"\n                      >\n                        {{currentDataSheetNumber}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"dataSheetNumberModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"dataSheetNumberModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"controllerItem.dataSheetNumber.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedLayoutDraving\">Layout Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"controllerItem.layoutDrawing.length == 0\"\n                      id=\"selectedLayoutDraving\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedLayoutDraving\"\n                      name=\"selectedLayoutDraving\"\n                    >\n                      <option\n                        *ngFor=\"let currentLayoutDrawing of controllerItem.layoutDrawing\" \n                        [ngValue]=\"currentLayoutDrawing\"\n                        [selected]=\"currentLayoutDrawing==controllerItem.selectedLayoutDraving\"\n                      >\n                        {{currentLayoutDrawing}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"layoutDrawingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"layoutDrawingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"controllerItem.layoutDrawing.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedSchematicDraving\">Schematic Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"controllerItem.schematicDrawing.length == 0\"\n                      id=\"selectedSchematicDraving\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedSchematicDraving\"\n                      name=\"selectedSchematicDraving\"\n                    >\n                      <option\n                        *ngFor=\"let currentSchematicDrawing of controllerItem.schematicDrawing\" \n                        [ngValue]=\"currentSchematicDrawing\"\n                        [selected]=\"currentSchematicDrawing==controllerItem.selectedSchematicDraving\"\n                      >\n                        {{currentSchematicDrawing}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"schematicDravingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"schematicDravingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"controllerItem.schematicDrawing.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-xl-6\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedEquipmentType\">Equipment Type</label>\n                  <select \n                    id=\"selectedEquipmentType\"\n                    class=\"form-control selectForOpenModal\"\n                    [(ngModel)]=\"controllerItem.selectedEquipmentType\"\n                    (change)=\"controllerTypeChanged();\n                              controllerFunctionChanged();\n                              controllerManufactureChanged();\n                              changeControllerSeries();\n                              changeCloneEquipmentType();\n                              changeEquipmentModel();\n                              changeIpAdress();\n                              changeIOTag();\n                              changeIOType();\n                              changeIODEscription();\n                              changeRelayIODescription();\n                              changeRelayIOType();\n                              changeIODescriptionRelay();\n                              changeIOPerCard()\"\n                    name=\"selectedEquipmentType\"\n                  >\n                    <option\n                      *ngFor=\"let currentEquipmentType of controllerItem.equipmentType\" \n                      [ngValue]=\"currentEquipmentType\"\n                      [selected]=\"currentEquipmentType==controllerItem.selectedEquipmentType\"\n                    >\n                        {{currentEquipmentType}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"selectedControllerType\">Controller Type</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      id=\"selectedControllerType\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedControllerType.name\"\n                      name=\"selectedControllerType\"\n                    >\n                      <option\n                        *ngFor=\"let currentControllerType of changeControllerTypeAfterChangeEquipmentType\"\n                        [ngValue]=\"currentControllerType.name\"\n                        [selected]=\"currentControllerType.name == controllerItem.selectedControllerType.name\"\n                      >\n                        {{currentControllerType.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"controllerTypeModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"controllerTypeModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeControllerTypeAfterChangeEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"selectedControllerFunction\">Controller Function</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      id=\"selectedControllerFunction\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedControllerFunction.name\"\n                      name=\"selectedControllerFunction\"\n                    >\n                      <option\n                        *ngFor=\"let currentControllerFunction of changeControllerFunctionAfterChangeEquipmentType\"\n                        [ngValue]=\"currentControllerFunction.name\"\n                        [selected]=\"currentControllerFunction.name == controllerItem.selectedControllerFunction.name\"\n                      >\n                        {{currentControllerFunction.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"controllerFunctionModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"controllerFunctionModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeControllerFunctionAfterChangeEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"selectedControllerManufacturer\">Controller Manufacturer</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      id=\"selectedControllerManufacturer\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedControllerManufacturer.name\"\n                      name=\"selectedControllerManufacturer\"\n                    >\n                      <option\n                        *ngFor=\"let currentControllerManufacturer of changeControllerManufactureAfterChangeEquipmentType\"\n                        [ngValue]=\"currentControllerManufacturer.name\"\n                        [selected]=\"currentControllerManufacturer.name == controllerItem.selectedControllerManufacturer.name\"\n                      >\n                        {{currentControllerManufacturer.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"controllerManufacturerModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"controllerManufacturerModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeControllerManufactureAfterChangeEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"selectedControllerSeries\">Controller Series</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      id=\"selectedControllerSeries\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedControllerSeries.name\"\n                      name=\"selectedControllerSeries\"\n                    >\n                      <option\n                        *ngFor=\"let currentsControllerSeries of changeControllerSeriesAfterChangeEquipmentType\"\n                        [ngValue]=\"currentsControllerSeries.name\"\n                        [selected]=\"currentsControllerSeries.name == controllerItem.selectedControllerSeries.name\"\n                      >\n                        {{currentsControllerSeries.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"controllerSeriesModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"controllerSeriesModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeControllerSeriesAfterChangeEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedCloneEquipmentType\">Clone Equipment Type</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      id=\"selectedIOTag\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedCloneEquipmentType.name\"\n                      name=\"selectedCloneEquipmentType\"\n                      (change) = \"changeIOTag(controllerItem.selectedCloneEquipmentType.name);\n                                  changeIODEscription();\n                                  changeRelayIODescription();\n                                  changeRelayIOType();\n                                  changeIODescriptionRelay()\"\n                      [disabled]=\"changeCloneEquipmentTypeAfterChangeEquipmentType.length == 0\"\n                    >\n                      <option\n                        *ngFor=\"let currentCloneEquipmentType of changeCloneEquipmentTypeAfterChangeEquipmentType\" \n                        [ngValue]=\"currentCloneEquipmentType.name\"\n                        [selected]=\"currentCloneEquipmentType.name == controllerItem.selectedCloneEquipmentType.name\"\n                      >\n                        {{currentCloneEquipmentType.name}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedEquipmentModel\">Equipment Model</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"changeEquipmentModelAfterChangeEquipmentType.length == 0\"\n                      id=\"selectedEquipmentModel\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedEquipmentModel.name\"\n                      (change)=\"changeIOPerCard(controllerItem.selectedEquipmentModel.name)\"\n                      name=\"selectedEquipmentModel\"\n                    >\n                      <option\n                        *ngFor=\"let currentEquipmentModel of changeEquipmentModelAfterChangeEquipmentType\" \n                        [ngValue]=\"currentEquipmentModel.name\"\n                        [selected]=\"currentEquipmentModel.name == controllerItem.selectedEquipmentModel.name\"\n                      >\n                        {{currentEquipmentModel.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"equipmentModelModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"equipmentModelModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeEquipmentModelAfterChangeEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-2\">\n                <div class=\"form-group\">\n                  <label for=\"node\">Node</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.node\" name=\"node\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-2\">\n                <div class=\"form-group\">\n                  <label for=\"chassis\">Chassis</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.chassis\" name=\"chassis\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-2\">\n                <div class=\"form-group\">\n                  <label for=\"slot\">Slot</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.slot\" name=\"slot\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-2\">\n                <div class=\"form-group\">\n                  <label for=\"data\">Data</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.data\" name=\"data\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-4\">\n                <div class=\"form-group\">\n                  <label for=\"selectedIPAdress\">IP Address</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"changeIpAdressAfterChangeEquipmentType.length == 0\"\n                      id=\"selectedIPAdress\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedIPAdress.name\"\n                      name=\"selectedIPAdress\"\n                    >\n                      <option\n                        *ngFor=\"let currentIpAdress of changeIpAdressAfterChangeEquipmentType\" \n                        [ngValue]=\"currentIpAdress.name\"\n                        [selected]=\"currentIpAdress.name==controllerItem.selectedIPAdress.name\"\n                      >\n                        {{currentIpAdress.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"ipAdressModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"ipAdressModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeIpAdressAfterChangeEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"selectedIOPerCard\">I/O Per Card</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel.length == 0\"\n                      id=\"selectedIOPerCard\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedIOPerCard.name\"\n                      name=\"selectedIOPerCard\"\n                    >\n                      <option\n                        *ngFor=\"let currentIOPerCard of changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel\" \n                        [ngValue]=\"currentIOPerCard.name\"\n                        [selected]=\"currentIOPerCard.name == controllerItem.selectedIOPerCard.name\"\n                      >\n                        {{currentIOPerCard.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"ioPerCardModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"ioPerCardModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"relayQuantity\">Relay Quantity</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.relayQuantity\" name=\"relayQuantity\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"dcPower\">DC Power</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.dcPower\" name=\"dcPower\">\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6\">\n                <div class=\"form-group\">\n                  <label for=\"esdPower\">ESD Power</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"controllerItem.esdPower\" name=\"esdPower\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-xl-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"h4 text-center\">I/O info</p>\n            <hr>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"selectedIOTag\">I/O Tag</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel.length == 0\"\n                      id=\"selectedIOTag\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedIOTag.name\"\n                      name=\"selectedIOTag\"\n                    >\n                      <option\n                        *ngFor=\"let currentIOTag of changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel\" \n                        [ngValue]=\"currentIOTag.name\"\n                        [selected]=\"currentIOTag.name == controllerItem.selectedIOTag.name\"\n                      >\n                        {{currentIOTag.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"ioTagModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"ioTagModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"selectedIOType\">I/O Type</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"changeIOTypeAfterChangeEquipmentType.length == 0\"\n                      id=\"selectedIOType\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedIOType.name\"\n                      name=\"selectedIOType\"\n                    >\n                      <option\n                        *ngFor=\"let currentIOTag of changeIOTypeAfterChangeEquipmentType\" \n                        [ngValue]=\"currentIOTag.name\"\n                        [selected]=\"currentIOTag.name == controllerItem.selectedIOType.name\"\n                      >\n                        {{currentIOTag.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"ioTypeModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"ioTypeModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeIOTypeAfterChangeEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>          \n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedIODescription\">I/O Description</label>\n                  <div class=\"d-flex flex-row\">\n                    <select \n                      [disabled]=\"changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                      id=\"selectedIODescription\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"controllerItem.selectedIODescription.name\"\n                      name=\"selectedIODescription\"\n                    >\n                      <option\n                        *ngFor=\"let currentIODescription of changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType\" \n                        [ngValue]=\"currentIODescription.name\"\n                        [selected]=\"currentIODescription.name == controllerItem.selectedIODescription.name\"\n                      >\n                          {{currentIODescription.name}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"IODescriptionModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"IODescriptionModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n              <div class=\"row\">\n                <div class=\"col-12 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"selectedRelayIODescription\">Relay I/O Tag</label>\n                    <div class=\"d-flex flex-row\">\n                      <select \n                        [disabled]=\"changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                        id=\"selectedRelayIODescription\"\n                        class=\"form-control selectForOpenModal\"\n                        [(ngModel)]=\"controllerItem.selectedRelayIODescription.name\"\n                        name=\"selectedRelayIODescription\"\n                      >\n                        <option\n                          *ngFor=\"let currentRelayIODescription of changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType\" \n                          [ngValue]=\"currentRelayIODescription.name\"\n                          [selected]=\"currentRelayIODescription.name==controllerItem.selectedRelayIODescription.name\"\n                        >\n                          {{currentRelayIODescription.name}}\n                        </option>\n                      </select>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                        data-toggle=\"tooltip\"\n                        data-placement=\"top\"\n                        title=\"Add new item\"\n                        (click)=\"RelayIODescriptionModal.showAddModal()\"\n                      ></button>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                        data-toggle=\"tooltip\"\n                        data-placement=\"top\"\n                        title=\"Drop selected item\"\n                        (click)=\"RelayIODescriptionModal.showDropModal(dropElementFlag)\"\n                        [disabled]=\"changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                      ></button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 col-md-6\">\n                  <div class=\"form-group\">\n                    <label for=\"selectedRelayIOType\">Relay I/O Type</label>\n                    <div class=\"d-flex flex-row\">\n                      <select \n                        [disabled]=\"changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                        id=\"selectedRelayIOType\"\n                        class=\"form-control selectForOpenModal\"\n                        [(ngModel)]=\"controllerItem.selectedRelayIOType.name\"\n                        name=\"selectedRelayIOType\"\n                      >\n                        <option\n                          *ngFor=\"let currentRelayIOType of changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType\" \n                          [ngValue]=\"currentRelayIOType.name\"\n                          [selected]=\"currentRelayIOType.name == controllerItem.selectedRelayIOType.name\"\n                        >\n                          {{currentRelayIOType.name}}\n                        </option>\n                      </select>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                        data-toggle=\"tooltip\"\n                        data-placement=\"top\"\n                        title=\"Add new item\"\n                        (click)=\"relayIOTypeModal.showAddModal()\"\n                      ></button>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                        data-toggle=\"tooltip\"\n                        data-placement=\"top\"\n                        title=\"Drop selected item\"\n                        (click)=\"relayIOTypeModal.showDropModal(dropElementFlag)\"\n                        [disabled]=\"changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                      ></button>\n                    </div>\n                  </div>\n                </div>    \n              </div>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <div class=\"form-group\">\n                    <label for=\"selectedIOTag\">Relay I/O Description</label>\n                    <div class=\"d-flex flex-row\">\n                      <select \n                        [disabled]=\"changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                        id=\"selectedIODescriptionRelay\"\n                        class=\"form-control selectForOpenModal\"\n                        [(ngModel)]=\"controllerItem.selectedIODescriptionRelay.name\"\n                        name=\"selectedIODescriptionRelay\"\n                      >\n                        <option\n                          *ngFor=\"let currentRelayIODescription of changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType\" \n                          [ngValue]=\"currentRelayIODescription.name\"\n                          [selected]=\"currentRelayIODescription.name == controllerItem.selectedIODescriptionRelay.name\"\n                        >\n                            {{currentRelayIODescription.name}}\n                        </option>\n                      </select>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                        data-toggle=\"tooltip\"\n                        data-placement=\"top\"\n                        title=\"Add new item\"\n                        (click)=\"relayIODescriptionModal.showAddModal()\"\n                      ></button>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                        data-toggle=\"tooltip\"\n                        data-placement=\"top\"\n                        title=\"Drop selected item\"\n                        (click)=\"relayIODescriptionModal.showDropModal(dropElementFlag)\"\n                        [disabled]=\"changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType.length == 0\"\n                      ></button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"h4 text-center\">I/O Summary</p>\n            <hr>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"selectedControllerTag\">Controller Tag</label>\n              <div class=\"d-flex flex-row\">\n                <select \n                  disabled\n                  id=\"selectedControllerTag\"\n                  class=\"form-control selectForOpenModal\"\n                  [(ngModel)]=\"controllerItem.selectedControllerTag\"\n                  name=\"selectedControllerTag\"\n                >\n                  <option\n                    *ngFor=\"let currentControllerTag of controllerItem.controllerTag\" \n                    [ngValue]=\"currentControllerTag\"\n                    [selected]=\"currentControllerTag==controllerItem.selectedControllerTag\"\n                  >\n                    {{currentControllerTag}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"selectedRack\">Rack#</label>\n              <div class=\"d-flex flex-row\">\n                <select \n                  disabled\n                  id=\"selectedRack\"\n                  class=\"form-control selectForOpenModal\"\n                  [(ngModel)]=\"controllerItem.selectedRack\"\n                  name=\"selectedRack\"\n                >\n                  <option\n                    *ngFor=\"let currentRack of controllerItem.IOTag\" \n                    [ngValue]=\"currentRack\"\n                    [selected]=\"currentRack==controllerItem.selectedRack\"\n                  >\n                      {{currentRack}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <!--\n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th scope=\"col\"></th>\n                  <th scope=\"col\">DI</th>\n                  <th scope=\"col\">DO</th>\n                  <th scope=\"col\">AI</th>\n                  <th scope=\"col\">IAI</th>\n                  <th scope=\"col\">H-AI</th>\n                  <th scope=\"col\">AO</th>\n                  <th scope=\"col\">H-AO</th>\n                  <th scope=\"col\">RTD</th>\n                  <th scope=\"col\">T/C</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">Actual</th>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">I/O Per Card</th>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Card Count</th>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Total Rack I/O</th>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">% Spare I/O</th>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n              </tbody>\n            </table>\n          -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end\">\n      <div class=\"mr-auto p-2\">\n        <a routerLink=\"/project/{{projectId}}/controllers/\" class=\"btn btn-primary\">Back</a>\n      </div>\n      <div class=\"p-2 form-group\">\n        <span *ngIf=\"isCanChange\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!controllerForm.form.valid\">Update/Create</button>\n        </span>\n      </div>\n    </div>\n    <div class=\"ml-3 mr-3\" *ngIf=\"sizeWindow > 576; else werticalTable\">\n        <div class=\"row achievements-wrapper\">\n          <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>Rev.</th>\n              <th>Controls Equipment Tag</th>\n              <th>Controls Equipment Parent Tag</th>\n              <th>Controller Type</th>\n              <th>Controller Manufacturer</th>\n              <th>Controller Function</th>\n              <th>Controller Series</th>\n              <th>Equipment Type</th>\n              <th>Clone Equipment Type</th>\n              <th>Equipment Model</th>\n              <th>Node</th>\n              <th>Chassis</th>\n              <th>Slot</th>\n              <th>Data</th>\n              <th>IP Address</th>\n              <th>I/O Per Card</th>\n              <th>Dc Power</th>\n              <th>Relay Quantity</th>\n              <th>Esd Power</th>\n              <th>I/O Tag</th>\n              <th>I/O Type</th>\n              <th>I/O Description</th>\n              <th>Relay I/O Tag</th>\n              <th>Relay I/O Type</th>\n              <th>Relay I/O Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{controllerItem?.revision}}</td>                                      <!-- Rev. -->\n              <td>{{controllerItem?.controlsEquipmentTagFirst || 'New Controller'}}</td> <!-- Controls Equipment Tag -->\n              <td>{{controllerItem?.selectedControlsEquipmentParentTag || 'N/A'}}</td>   <!-- Controls Equipment Parent Tag -->\n              <td>{{controllerItem?.selectedControllerType?.name || 'N/A'}}</td>         <!-- Controller Type -->\n              <td>{{controllerItem?.selectedControllerManufacturer?.name || 'N/A'}}</td> <!-- Controller Manufacturer -->\n              <td>{{controllerItem?.selectedControllerFunction?.name || 'N/A'}}</td>     <!-- Controller Function -->\n              <td>{{controllerItem?.selectedControllerSeries?.name  || 'N/A'}}</td>      <!-- Controller Series -->\n              <td>{{controllerItem?.selectedEquipmentType || 'N/A'}}</td>                <!-- Equipment Type -->\n              <td>{{controllerItem?.selectedCloneEquipmentType?.name || 'N/A'}}</td>     <!-- Clone Equipment Type -->\n              <td>{{controllerItem?.selectedEquipmentModel?.name || 'N/A'}}</td>         <!-- Equipment Model -->\n              <td>{{controllerItem?.node || 'N/A'}}</td>                                 <!-- Node -->\n              <td>{{controllerItem?.chassis || 'N/A'}}</td>                              <!-- Chassis-->\n              <td>{{controllerItem?.slot || 'N/A'}}</td>                                 <!-- Slot -->\n              <td>{{controllerItem?.data || 'N/A'}}</td>                                 <!-- Data -->\n              <td>{{controllerItem?.selectedIPAdress?.name || 'N/A'}}</td>               <!-- IP Address -->\n              <td>{{controllerItem?.selectedIOPerCard?.name || 'N/A'}}</td>              <!-- I/O Per Card -->\n              <td>{{controllerItem?.dcPower || 'N/A'}}</td>                              <!-- Dc Power -->\n              <td>{{controllerItem?.relayQuantity || 'N/A'}}</td>                        <!-- Relay Quantity -->\n              <td>{{controllerItem?.esdPower || 'N/A'}}</td>                             <!-- Esd Power-->\n              <td>{{controllerItem?.selectedIOTag?.name || 'N/A'}}</td>                  <!-- I/O Tag -->\n              <td>{{controllerItem?.selectedIOType?.name || 'N/A'}}</td>                 <!-- I/O Type -->\n              <td>{{controllerItem?.selectedIODescription?.name || 'N/A'}}</td>          <!-- I/O Description -->\n              <td>{{controllerItem?.selectedRelayIODescription?.name || 'N/A'}}</td>     <!-- Relay I/O Tag -->\n              <td>{{controllerItem?.selectedRelayIOType?.name || 'N/A'}}</td>            <!-- Relay I/O Type -->\n              <td>{{controllerItem?.selectedIODescriptionRelay?.name || 'N/A'}}</td>     <!-- Relay I/O Description -->\n            </tr>\n          </tbody>\n          </table>\n      </div>\n      </div>\n      <ng-template #werticalTable>\n        <div class=\"row\">\n          <table class=\"table table-bordered\">\n            <tr>\n              <td><strong>Rev.</strong></td>\n              <td>{{controllerItem?.revision}}</td>\n            </tr>\n            <tr>\n              <td><strong>Controls Equipment Tag</strong></td>\n              <td>{{controllerItem?.controlsEquipmentTagFirst || 'New Controller'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Controls Equipment Parent Tag</strong></td>\n              <td>{{controllerItem?.selectedControlsEquipmentParentTag || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Controller Type</strong></td>\n              <td>{{controllerItem?.selectedControllerType?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Controller Manufacturer</strong></td>\n              <td>{{controllerItem?.selectedControllerManufacturer?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Controller Function</strong></td>\n              <td>{{controllerItem?.selectedControllerFunction?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Controller Series</strong></td>\n              <td>{{controllerItem?.selectedControllerSeries?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Equipment Type</strong></td>\n              <td>{{controllerItem?.selectedEquipmentType || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Clone Equipment Type</strong></td>\n              <td>{{controllerItem?.selectedCloneEquipmentType?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Equipment Model</strong></td>\n              <td>{{controllerItem?.selectedEquipmentModel?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Node</strong></td>\n              <td>{{controllerItem?.node || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Chassis</strong></td>\n              <td>{{controllerItem?.chassis || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Slot</strong></td>\n              <td>{{controllerItem?.slot || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Data</strong></td>\n              <td>{{controllerItem?.data || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>IP Address</strong></td>\n              <td>{{controllerItem?.selectedIPAdress?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>I/O Per Card</strong></td>\n              <td>{{controllerItem?.selectedIOPerCard?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Dc Power</strong></td>\n              <td>{{controllerItem?.dcPower || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Relay Quantity</strong></td>\n              <td>{{controllerItem?.relayQuantity || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Esd Power</strong></td>\n              <td>{{controllerItem?.esdPower || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>I/O Tag</strong></td>\n              <td>{{controllerItem?.selectedIOTag?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>I/O Type</strong></td>\n              <td>{{controllerItem?.selectedIOType?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>I/O Description</strong></td>\n              <td>{{controllerItem?.selectedIODescription?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Relay I/O Tag</strong></td>\n              <td>{{controllerItem?.selectedRelayIODescription?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Relay I/O Type</strong></td>\n              <td>{{controllerItem?.selectedRelayIOType?.name || 'N/A'}}</td>\n            </tr>\n            <tr>\n              <td><strong>Relay I/O Description</strong></td>\n              <td>{{controllerItem?.selectedIODescriptionRelay?.name || 'N/A'}}</td>\n            </tr>\n          </table>\n        </div>\n      </ng-template>\n  </form>\n  <div class=\"row ml-3 mb-3\">\n    <span *ngIf=\"isCanChange\">\n      <button class=\"btn btn-danger\" (click)=\"deleteController(controllerItem._id)\">Delete</button>\n    </span>\n  </div>\n</div>\n<div>\n  <!--START MODALS -->\n  <app-electricals-modal [dataValue]=\"controllerItem?.controlsEquipmentParentTag\" [selectedValue]=\"controllerItem?.selectedControlsEquipmentParentTag\" [title]=\"controlsEquipmentParentTag\" #equipmentParentTagModal></app-electricals-modal>\n  <app-electricals-modal [dataValue]=\"controllerItem?.location\" [selectedValue]=\"controllerItem?.selectedLocation\" [title]=\"location\" #locationModal></app-electricals-modal>\n  <app-electricals-modal [dataValue]=\"controllerItem?.dataSheetNumber\" [selectedValue]=\"controllerItem?.selectedDataSheetNumber\" [title]=\"dataSheetNumberTitle\" #dataSheetNumberModal></app-electricals-modal>\n  <app-electricals-modal [dataValue]=\"controllerItem?.layoutDrawing\" [selectedValue]=\"controllerItem?.selectedLayoutDraving\" [title]=\"layoutDrawing\" #layoutDrawingModal></app-electricals-modal>\n  <app-electricals-modal [dataValue]=\"controllerItem?.schematicDrawing\" [selectedValue]=\"controllerItem?.selectedSchematicDraving\" [title]=\"schematicDrawing\" #schematicDravingModal></app-electricals-modal>\n  <app-controller-modal [dataValue]=\"changeControllerTypeAfterChangeEquipmentType\" [selectedValue]=\"controllerItem?.selectedControllerType?.name\" [title]=\"controllerType\" #controllerTypeModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeControllerFunctionAfterChangeEquipmentType\" [selectedValue]=\"controllerItem?.selectedControllerFunction?.name\" [title]=\"controllerFunction\" #controllerFunctionModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeControllerManufactureAfterChangeEquipmentType\" [selectedValue]=\"controllerItem?.selectedControllerManufacturer?.name\" [title]=\"controllerManufacturer\" #controllerManufacturerModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeControllerSeriesAfterChangeEquipmentType\" [selectedValue]=\"controllerItem?.selectedControllerSeries?.name\" [title]=\"controllerSeries\" #controllerSeriesModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeEquipmentModelAfterChangeEquipmentType\" [selectedValue]=\"controllerItem?.selectedEquipmentModel?.name\" [title]=\"equipmentModel\" #equipmentModelModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeIpAdressAfterChangeEquipmentType\" [selectedValue]=\"controllerItem?.selectedIPAdress?.name\" [title]=\"ipAdress\" #ipAdressModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel\" [selectedValue]=\"controllerItem?.selectedIOPerCard?.name\" [title]=\"ioPerCard\" #ioPerCardModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel\" [selectedValue]=\"controllerItem?.selectedIOTag?.name\" [title]=\"ioTag\" #ioTagModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeIOTypeAfterChangeEquipmentType\" [selectedValue]=\"controllerItem?.selectedIOType?.name\" [title]=\"ioType\" #ioTypeModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType\" [selectedValue]=\"controllerItem?.selectedIODescription?.name\" [title]=\"IODescription\" #IODescriptionModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType\" [selectedValue]=\"controllerItem?.selectedRelayIODescription?.name\" [title]=\"relayIOTag\" #RelayIODescriptionModal></app-controller-modal>\n  <app-controller-modal [dataValue]=\"changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType\" [selectedValue]=\"controllerItem?.selectedRelayIOType?.name\" [title]=\"relayIOType\" #relayIOTypeModal></app-controller-modal>\n  <!-- IODescriptionRelay -->\n  <app-controller-modal [dataValue]=\"changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType\" [selectedValue]=\"controllerItem?.selectedIODescriptionRelay?.name\" [title]=\"relayIODescription\" #relayIODescriptionModal></app-controller-modal>\n  <!-- IODescriptionRelay -->\n  <!--END MODALS -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/controller-item/controller-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_controller_service__ = __webpack_require__("../../../../../src/app/services/controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//



var ControllerItemComponent = (function () {
    function ControllerItemComponent(router, route, controllerService, spinnerService, projectServise) {
        this.router = router;
        this.route = route;
        this.controllerService = controllerService;
        this.spinnerService = spinnerService;
        this.projectServise = projectServise;
        //
        this.dropElementFlag = true;
        this.controlsEquipmentParentTag = 'Controls Equipment Parent Tag';
        this.location = 'Location';
        this.dataSheetNumberTitle = 'Data Sheet Number';
        this.layoutDrawing = 'Layout Drawing';
        this.schematicDrawing = 'Schematic Drawing';
        this.controllerType = 'Controller Type';
        this.controllerFunction = 'Controller Function';
        this.controllerManufacturer = 'Controller Manufacturer';
        this.controllerSeries = 'Controller Series';
        this.equipmentModel = 'Clone Equipment Type';
        this.ipAdress = 'IP Address';
        this.ioPerCard = 'I/O Per Card';
        this.ioTag = 'I/O Tag';
        this.ioType = 'Type I/O';
        this.IODescription = 'I/O Description';
        this.relayIOTag = 'Relay I/O Tag';
        this.relayIOType = 'Relay I/O Type';
        this.relayIODescription = 'Relay I/O Description';
        //
        this.changeControllerTypeAfterChangeEquipmentType = [];
        this.changeControllerFunctionAfterChangeEquipmentType = [];
        this.changeControllerManufactureAfterChangeEquipmentType = [];
        this.changeControllerSeriesAfterChangeEquipmentType = [];
        this.changeCloneEquipmentTypeAfterChangeEquipmentType = [];
        this.changeEquipmentModelAfterChangeEquipmentType = [];
        this.changeIpAdressAfterChangeEquipmentType = [];
        this.changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel = [];
        this.changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel = [];
        this.changeIOTypeAfterChangeEquipmentType = [];
        this.changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = [];
        this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = [];
        this.changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType = [];
        this.changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType = [];
        //
        this.dataSheetNumber = [];
        this.projectId = this.route.snapshot.params['id'];
        this.controllerId = this.route.snapshot.params['controllerId'];
        this.sizeWindow = window.innerWidth;
    }
    ControllerItemComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    ControllerItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userGuid = u.guid;
            this.userEmail = u.email;
            //
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        //
        this.spinnerService.show();
        this.controllerService.getControllerItem(this.projectId, this.controllerId).subscribe(function (controllers) {
            _this.controllerItem = controllers.controller;
            _this.controller = controllers;
            _this.projectServise.getProjectById(_this.projectId).subscribe(function (itemProject) {
                _this.project = itemProject;
                if (itemProject.creator === _this.userGuid) {
                    _this.isCanChange = true;
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserChange(_this.project.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserView(_this.project.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                }
            });
            _this.date = (new Date(_this.controllerItem.dataAdded)).toLocaleDateString();
            _this.changeControllerTypeAfterChangeEquipmentType = controllers.controller.controllerType
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeControllerFunctionAfterChangeEquipmentType = controllers.controller.controllerFunction
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeControllerManufactureAfterChangeEquipmentType = controllers.controller.controllerManufacturer
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeControllerSeriesAfterChangeEquipmentType = controllers.controller.сontrollerSeries
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeCloneEquipmentTypeAfterChangeEquipmentType = controllers.controller.сloneEquipmentType
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeEquipmentModelAfterChangeEquipmentType = controllers.controller.equipmentModel
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeIpAdressAfterChangeEquipmentType = controllers.controller.ipAdress
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel = controllers.controller.ioPerCard
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType &&
                et.equipmentModel === controllers.controller.selectedEquipmentModel.name; });
            _this.changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel = controllers.controller.ioTag
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType &&
                et.cloneEquipmentTag === controllers.controller.selectedCloneEquipmentType.name; });
            _this.changeIOTypeAfterChangeEquipmentType = controllers.controller.ioType
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType; });
            _this.changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.ioDescription
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType &&
                et.cloneEquipmentTag === controllers.controller.selectedCloneEquipmentType.name; });
            _this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.relayIODescription
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType &&
                et.cloneEquipmentType === controllers.controller.selectedCloneEquipmentType.name; });
            _this.changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.relayIOType
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType &&
                et.cloneEquipmentType === controllers.controller.selectedCloneEquipmentType.name; });
            _this.changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType = controllers.controller.IODescriptionRelay
                .filter(function (et) { return et.equipmentElementType === controllers.controller.selectedEquipmentType &&
                et.cloneEquipmentType === controllers.controller.selectedCloneEquipmentType.name; });
        }, function (err) {
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    ControllerItemComponent.prototype.controllerTypeChanged = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeControllerTypeAfterChangeEquipmentType = this.controllerItem.controllerType
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
            this.controllerItem.selectedControllerType.name = '';
        }
    };
    ControllerItemComponent.prototype.controllerFunctionChanged = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeControllerFunctionAfterChangeEquipmentType = this.controllerItem.controllerFunction
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
            this.controllerItem.selectedControllerFunction.name = '';
        }
    };
    ControllerItemComponent.prototype.controllerManufactureChanged = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeControllerManufactureAfterChangeEquipmentType = this.controllerItem.controllerManufacturer
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
            this.controllerItem.selectedControllerManufacturer.name = '';
        }
    };
    ControllerItemComponent.prototype.changeControllerSeries = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeControllerSeriesAfterChangeEquipmentType = this.controllerItem.сontrollerSeries
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
            this.controllerItem.selectedControllerSeries.name = '';
        }
    };
    ControllerItemComponent.prototype.changeCloneEquipmentType = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeCloneEquipmentTypeAfterChangeEquipmentType = this.controllerItem.сloneEquipmentType
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
            this.controllerItem.selectedCloneEquipmentType.name = '';
        }
    };
    ControllerItemComponent.prototype.changeEquipmentModel = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeEquipmentModelAfterChangeEquipmentType = this.controllerItem.equipmentModel
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
        }
    };
    ControllerItemComponent.prototype.changeIpAdress = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeIpAdressAfterChangeEquipmentType = this.controllerItem.ipAdress
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
            this.controllerItem.selectedIPAdress.name = '';
        }
    };
    ControllerItemComponent.prototype.changeIOPerCard = function (equipmentType) {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel = this.controllerItem.ioPerCard
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType &&
                et.equipmentModel === equipmentType; });
        }
    };
    ControllerItemComponent.prototype.changeIOTag = function (equipmentType) {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel = this.controllerItem.ioTag
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType &&
                et.cloneEquipmentTag === equipmentType; });
        }
    };
    ControllerItemComponent.prototype.changeIOType = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeIOTypeAfterChangeEquipmentType = this.controllerItem.ioType
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType; });
            this.controllerItem.selectedIOType.name = '';
        }
    };
    ControllerItemComponent.prototype.changeIODEscription = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.ioDescription
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType &&
                et.cloneEquipmentTag === _this.controllerItem.selectedCloneEquipmentType.name; });
            this.controllerItem.selectedIODescription.name = '';
        }
    };
    ControllerItemComponent.prototype.changeRelayIODescription = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.relayIODescription
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType &&
                et.cloneEquipmentType === _this.controllerItem.selectedCloneEquipmentType.name; });
            this.controllerItem.selectedRelayIODescription.name = '';
        }
    };
    ControllerItemComponent.prototype.changeRelayIOType = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.relayIOType
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType &&
                et.cloneEquipmentType === _this.controllerItem.selectedCloneEquipmentType.name; });
            this.controllerItem.selectedRelayIOType.name = '';
        }
    };
    ControllerItemComponent.prototype.changeIODescriptionRelay = function () {
        var _this = this;
        if (!this.controllerItem) {
            return;
        }
        else {
            this.changeIODescriptionRelayAfterChangeEquimpentTypeAndCloneEquipmentType = this.controllerItem.IODescriptionRelay
                .filter(function (et) { return et.equipmentElementType === _this.controllerItem.selectedEquipmentType &&
                et.cloneEquipmentType === _this.controllerItem.selectedCloneEquipmentType.name; });
            this.controllerItem.selectedIODescriptionRelay.name = '';
        }
    };
    ControllerItemComponent.prototype.changeArrayObject = function (productsAfterChange, projectData) {
        var arayObjectsAfterFilter = projectData
            .filter(function (c) { return c.equipmentElementType !== productsAfterChange[0].equipmentElementType; });
        for (var i = 0; i < productsAfterChange.length; ++i) {
            var itemElement = productsAfterChange[i];
            arayObjectsAfterFilter.push(itemElement);
        }
        return arayObjectsAfterFilter;
    };
    ControllerItemComponent.prototype.changeСomplexArrayObject = function (productsAfterChange, projectData) {
        if (productsAfterChange.length === 0) {
            return;
        }
        else {
            var arayObjectsAfterFilter = projectData
                .filter(function (c) { return c.equipmentElementType !== productsAfterChange[0].equipmentElementType &&
                c.cloneEquipmentTag !== productsAfterChange[0].equipmentElementType; });
            for (var i = 0; i < productsAfterChange.length; ++i) {
                var itemElement = productsAfterChange[i];
                arayObjectsAfterFilter.push(itemElement);
            }
            return arayObjectsAfterFilter;
        }
    };
    ControllerItemComponent.prototype.changeArrayIoPerCard = function (productsAfterChange, projectData) {
        if (productsAfterChange.length === 0) {
            return;
        }
        else {
            var arayObjectsAfterFilter = projectData
                .filter(function (c) { return c.equipmentElementType !== productsAfterChange[0].equipmentElementType &&
                c.equipmentModel !== productsAfterChange[0].equipmentModel; });
            for (var i = 0; i < productsAfterChange.length; ++i) {
                var itemElement = productsAfterChange[i];
                arayObjectsAfterFilter.push(itemElement);
            }
            return arayObjectsAfterFilter;
        }
    };
    ControllerItemComponent.prototype.saveController = function (idController, data) {
        var _this = this;
        this.spinnerService.show();
        // missed Item Number - don`t have logic for thes element
        // missed Revision - get by default
        // missed Date Added - don`t change, get this data when create new element
        // missed Controls Equipment Tag1 - get by default
        // missed Controls Equipment Tag2 - get by default
        // Controls Equipment Parent Tag
        data.controlsEquipmentParentTag = this.controllerItem.controlsEquipmentParentTag;
        data.selectedControlsEquipmentParentTag = data.selectedControlsEquipmentParentTag;
        // missed New Tag - don`t have logic for thes element
        data.location = this.controllerItem.location;
        data.selectedLocation = data.selectedLocation;
        data.dataSheetNumber = this.controllerItem.dataSheetNumber;
        data.selectedDataSheetNumber = data.selectedDataSheetNumber;
        data.layoutDrawing = this.controllerItem.layoutDrawing;
        data.selectedLayoutDraving = data.selectedLayoutDraving;
        data.schematicDrawing = this.controllerItem.schematicDrawing;
        data.selectedSchematicDraving = data.selectedSchematicDraving;
        data.equipmentType = this.controllerItem.equipmentType;
        data.selectedEquipmentType = data.selectedEquipmentType;
        // Controller Type
        data.controllerType = this.changeArrayObject(this.changeControllerTypeAfterChangeEquipmentType, this.controllerItem.controllerType);
        data.selectedControllerType = {};
        data.selectedControllerType.name = this.controllerItem.selectedControllerType.name;
        data.selectedControllerType.equipmentElementType = data.selectedEquipmentType;
        // Controller Function
        // tslint:disable-next-line:max-line-length
        data.controllerFunction = this.changeArrayObject(this.changeControllerFunctionAfterChangeEquipmentType, this.controllerItem.controllerFunction);
        data.selectedControllerFunction = {};
        data.selectedControllerFunction.name = this.controllerItem.selectedControllerFunction.name;
        data.selectedControllerFunction.equipmentElementType = data.selectedEquipmentType;
        // Controller Manufacturer
        // tslint:disable-next-line:max-line-length
        data.controllerManufacturer = this.changeArrayObject(this.changeControllerManufactureAfterChangeEquipmentType, this.controllerItem.controllerManufacturer);
        data.selectedControllerManufacturer = {};
        data.selectedControllerManufacturer.name = this.controllerItem.selectedControllerManufacturer.name;
        data.selectedControllerManufacturer.equipmentElementType = data.selectedEquipmentType;
        // Controller Series
        // tslint:disable-next-line:max-line-length
        data.сontrollerSeries = this.changeArrayObject(this.changeControllerSeriesAfterChangeEquipmentType, this.controllerItem.сontrollerSeries);
        data.selectedControllerSeries = {};
        data.selectedControllerSeries.name = this.controllerItem.selectedControllerSeries.name;
        data.selectedControllerSeries.equipmentElementType = data.selectedEquipmentType;
        // Clone Equipment Type
        data.сloneEquipmentType = this.controllerItem.сloneEquipmentType;
        data.selectedCloneEquipmentType = {};
        data.selectedCloneEquipmentType.name = this.controllerItem.selectedCloneEquipmentType.name;
        data.selectedCloneEquipmentType.equipmentElementType = data.selectedEquipmentType;
        // Equipment Model
        data.equipmentModel = this.changeArrayObject(this.changeEquipmentModelAfterChangeEquipmentType, this.controllerItem.equipmentModel);
        data.selectedEquipmentModel = {};
        data.selectedEquipmentModel.name = this.controllerItem.selectedEquipmentModel.name;
        data.selectedEquipmentModel.equipmentElementType = data.selectedEquipmentType;
        // Node - Chassis - Slot - Data
        data.node = this.controllerItem.node;
        data.chassis = this.controllerItem.chassis;
        data.slot = this.controllerItem.slot;
        data.data = this.controllerItem.data;
        // IP Address
        data.ipAdress = this.changeArrayObject(this.changeIpAdressAfterChangeEquipmentType, this.controllerItem.ipAdress);
        data.selectedIPAdress = {};
        data.selectedIPAdress.name = this.controllerItem.selectedIPAdress.name;
        data.selectedIPAdress.equipmentElementType = data.selectedEquipmentType;
        // I/O Per Card - не добавляется если второй элемент не определен
        // tslint:disable-next-line:max-line-length
        data.ioPerCard = this.changeArrayIoPerCard(this.changeIOPerCardAfterChangeEquimpentTypeAndEquipmentModel, this.controllerItem.ioPerCard);
        data.selectedIOPerCard = {};
        data.selectedIOPerCard.name = this.controllerItem.selectedIOPerCard.name;
        data.selectedIOPerCard.equipmentElementType = data.selectedEquipmentType;
        data.selectedIOPerCard.equipmentModel = data.selectedEquipmentModel.name;
        // Relay Quantity - DC Power - ESD Power
        data.relayQuantity = this.controllerItem.relayQuantity;
        data.dcPower = this.controllerItem.dcPower;
        data.esdPower = this.controllerItem.esdPower;
        // I/O Tag
        data.ioTag = this.changeСomplexArrayObject(this.changeIOtagAfterChangeEquipmentElementTypeAndEquipmentModel, this.controllerItem.ioTag);
        data.selectedIOTag = {};
        data.selectedIOTag.name = this.controllerItem.selectedIOTag.name;
        data.selectedIOTag.equipmentElementType = data.selectedEquipmentType;
        data.selectedIOTag.cloneEquipmentTag = data.selectedCloneEquipmentType.name;
        // I/O Type
        data.ioType = this.changeArrayObject(this.changeIOTypeAfterChangeEquipmentType, this.controllerItem.ioType);
        data.selectedIOType = {};
        data.selectedIOType.name = this.controllerItem.selectedIOType.name;
        data.selectedIOType.equipmentElementType = data.selectedEquipmentType;
        // I/O Description
        // tslint:disable-next-line:max-line-length
        data.ioDescription = this.changeСomplexArrayObject(this.changeIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.ioDescription);
        data.selectedIODescription = {};
        data.selectedIODescription.name = this.controllerItem.selectedIODescription.name;
        data.selectedIODescription.equipmentElementType = data.selectedEquipmentType;
        data.selectedIODescription.cloneEquipmentTag = data.selectedCloneEquipmentType.name;
        // Relay I/O Tag
        // tslint:disable-next-line:max-line-length
        data.relayIODescription = this.changeСomplexArrayObject(this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.relayIODescription);
        data.selectedRelayIODescription = {};
        data.selectedRelayIODescription.name = this.controllerItem.selectedRelayIODescription.name;
        data.selectedRelayIODescription.equipmentElementType = data.selectedEquipmentType;
        data.selectedRelayIODescription.cloneEquipmentType = data.selectedCloneEquipmentType.name;
        // Relay I/O Type
        // tslint:disable-next-line:max-line-length
        data.relayIOType = this.changeСomplexArrayObject(this.changeRelayIOTypeAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.relayIOType);
        data.selectedRelayIOType = {};
        data.selectedRelayIOType.name = this.controllerItem.selectedRelayIOType.name;
        data.selectedRelayIOType.equipmentElementType = data.selectedEquipmentType;
        data.selectedRelayIOType.cloneEquipmentType = data.selectedCloneEquipmentType.name;
        // Relay I/O Description
        // tslint:disable-next-line:max-line-length
        data.IODescriptionRelay = this.changeСomplexArrayObject(this.changeRelayIODescriptionAfterChangeEquimpentTypeAndCloneEquipmentType, this.controllerItem.IODescriptionRelay);
        data.selectedIODescriptionRelay = {};
        data.selectedIODescriptionRelay.name = this.controllerItem.selectedRelayIODescription.name;
        data.selectedIODescriptionRelay.equipmentElementType = data.selectedEquipmentType;
        data.selectedIODescriptionRelay.cloneEquipmentType = data.selectedCloneEquipmentType.name;
        // data.selectedCloneEquipmentType.name
        this.controllerService.updateControllerItem(this.projectId, idController, data).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'controllers']);
        }, function (err) {
            console.log(err);
        });
    };
    ControllerItemComponent.prototype.deleteController = function (controllerId) {
        var _this = this;
        this.spinnerService.show();
        this.controllerService.deleteControllerItem(this.projectId, controllerId).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'controllers']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ControllerItemComponent.prototype, "onResize", null);
    ControllerItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-controller-item',
            template: __webpack_require__("../../../../../src/app/components/controller-item/controller-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/controller-item/controller-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_controller_service__["a" /* ControllerService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], ControllerItemComponent);
    return ControllerItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/controllers-list/controllers-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: \"Roboto-Light\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Roboto-Bolt\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n    font-weight: bold;\r\n  }\r\n  .table-text-style{\r\n    font-family: Roboto-Bolt!important;\r\n    color: #4c4c4c!important;\r\n  }\r\n  \r\n  thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  .disable-decoration {\r\n    text-decoration: none!important;\r\n  }\r\n  \r\n  .table-cursor {\r\n    cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/controllers-list/controllers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\" style=\"margin-left: 0px!important; margin-right: 0px!important\">\n    <div class=\"col-12\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\" style=\"background-color: white!important\">\n          <li *ngIf=\"isAdmin\" class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/superadmin']\">\n              <strong>Admin panel</strong>\n            </a>\n          </li>\n          <li *ngIf=\"!isAdmin\" class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project']\">\n              <strong>Projects List</strong>\n            </a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project', projectId]\">\n              <strong>Dashboard for Project {{projectName?.title}}</strong>\n            </a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Controllers List</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"pt-2 text-center\">\n    <h1>Controllers List\n      <span *ngIf=\"isCanChange\">\n        <a class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new controller\" (click)=\"saveController()\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        </a>\n      </span>\n    </h1>\n  </div>\n  <div class=\"row achievements-wrapper ml-3 mr-3\">\n    <table id=\"exportable\" class=\"table table-sm table-bordered table-hover table-text-style\">\n      <thead>\n        <tr>\n          <!--<th></th> -->                         <!-- 1 -->\n          <th>Rev.</th>                             <!-- 2 -->\n          <th>Controls Equipment Tag</th>           <!-- 3 -->\n          <th>Controls Equipment Parent Tag</th>    <!-- 4 -->\n          <th>Controller Type</th>                  <!-- 5 -->\n          <th>Controller Manufacturer</th>          <!-- 6 -->\n          <th>Controller Function</th>              <!-- 7 -->\n          <th>Controller Series</th>                <!-- 8 -->\n          <th>Equipment Type</th>                   <!-- 9 -->\n          <th>Clone Equipment Type</th>             <!-- 10 -->\n          <th>Equipment Model</th>                  <!-- 11 -->\n          <th>Node</th>                             <!-- 12 -->\n          <th>Chassis</th>                          <!-- 13 -->\n          <th>Slot</th>                             <!-- 14 -->\n          <th>Data</th>                             <!-- 15 -->\n          <th>IP Address</th>                       <!-- 16 -->\n          <th>I/O Per Card</th>                     <!-- 17 -->\n          <th>Dc Power</th>                         <!-- 18 -->\n          <th>Relay Quantity</th>                   <!-- 19 -->\n          <th>Esd Power</th>                        <!-- 20 -->\n          <th>I/O Tag</th>                          <!-- 21 -->\n          <th>I/O Type</th>                         <!-- 22 -->\n          <th>I/O Description</th>                  <!-- 23 -->\n          <th>Relay I/O Tag</th>                    <!-- 24 -->\n          <th>Relay I/O Type</th>                   <!-- 25 -->\n          <th>Relay I/O Description</th>            <!-- 26 -->\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let controller of controllers?.controllers\">\n          <!--<td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\"><a class=\"table-cursor\"></a></td> -->                                                              <!-- check dox -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.revision || 'N/A'}}<a class=\"table-cursor\"></a></td>                             <!-- Rev -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.controlsEquipmentTagFirst || 'New Controller'}}<a class=\"table-cursor\"></a></td> <!-- Controls Equipment Tag -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedControlsEquipmentParentTag || 'N/A'}}<a class=\"table-cursor\"></a></td>   <!-- Controls Equipment Parent Tag -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedControllerType?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>         <!-- Controller Type -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedControllerManufacturer?.name || 'N/A'}}<a class=\"table-cursor\"></a></td> <!-- Controller Manufacturer -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedControllerFunction?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>     <!-- Controller Function -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedControllerSeries?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>       <!-- Controller Series -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedEquipmentType || 'N/A'}}<a class=\"table-cursor\"></a></td>                <!-- Equipment Type -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedCloneEquipmentType?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>     <!-- Clone Equipment Type -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedEquipmentModel?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>         <!-- Equipment Model -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.node || 'N/A'}}<a class=\"table-cursor\"></a></td>                                 <!-- Node -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.chassis || 'N/A'}}<a class=\"table-cursor\"></a></td>                              <!-- Chassis -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.slot || 'N/A'}}<a class=\"table-cursor\"></a></td>                                 <!-- Slot -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.data || 'N/A'}}<a class=\"table-cursor\"></a></td>                                 <!-- Data -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedIPAdress?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>               <!-- IP Address -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedIOPerCard?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>                             <!-- 17 I/O Per Card -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.dcPower || 'N/A'}}<a class=\"table-cursor\"></a></td>                              <!-- 18 Dc Power -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.relayQuantity || 'N/A'}}<a class=\"table-cursor\"></a></td>                        <!-- 19 Relay Quantity -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.esdPower || 'N/A'}}<a class=\"table-cursor\"></a></td>                             <!-- 20 Esd Power -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedIOTag?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>                  <!-- 21 I/O Tag -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedIOType?.name}}<a class=\"table-cursor\"></a></td>                          <!-- 22 I/O Type -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedIODescription?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>          <!-- 23 I/O I/O Description -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedRelayIODescription?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>     <!-- 24 Relay I/O Tag -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedRelayIOType?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>            <!-- 25 Relay I/O Type -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/controllers/{{controller._id}}\">{{controller?.selectedRelayIODescription?.name || 'N/A'}}<a class=\"table-cursor\"></a></td>     <!-- 26 Relay I/O Description -->\n          <td>\n            <input type=\"checkbox\" [(ngModel)]=\"controller.isChecked\" (click)=\"pushToControllerArray(controller)\">\n          </td>\n        </tr>\n    </tbody>\n    </table>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"mt-1 ml-auto mr-3\">\n      <div class=\"form-group\">\n        <label for=\"isChecked\">Select All</label>\n        <input type=\"checkbox\" [(ngModel)]=\"isChecked\" (click)=\"changeFlag(isChecked)\">\n      </div>\n    </div>\n  </div>\n  <div class=\"d-flex\" >\n    <div class=\"ml-auto mr-3\">\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcell()\">Export Controller Shedule</button>\n    </div>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"mt-1 ml-auto mr-3\">\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcellUIData()\" [disabled]=\"controllersArrayList == 0\">Export Controllers UI Data</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/controllers-list/controllers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_controller_service__ = __webpack_require__("../../../../../src/app/services/controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_excel_service__ = __webpack_require__("../../../../../src/app/services/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//


var ControllersListComponent = (function () {
    function ControllersListComponent(controllerService, router, route, spinnerService, projectServise, excelService) {
        this.controllerService = controllerService;
        this.router = router;
        this.route = route;
        this.spinnerService = spinnerService;
        this.projectServise = projectServise;
        this.excelService = excelService;
        this.isChecked = false;
        this.projectId = this.route.snapshot.params['id'];
        this.controllersArrayList = [];
    }
    ControllersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userEmail = u.email;
            this.userGuid = u.guid;
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.controllerService.getControllersList(this.projectId).subscribe(function (controllerList) {
            _this.controllers = controllerList;
            if (controllerList.creator === _this.userGuid) {
                _this.isCanChange = true;
            }
            else {
                var canChange = __WEBPACK_IMPORTED_MODULE_7__shared_Availability__["a" /* Availability */].CanUserChange(_this.controllers.team_project, _this.userGuid);
                var canView = __WEBPACK_IMPORTED_MODULE_7__shared_Availability__["a" /* Availability */].CanUserView(_this.controllers.brows_team_project, _this.userGuid);
                _this.isCanChange = canChange || canView || _this.isAdmin;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.projectServise.getProjectNameById(this.projectId).subscribe(function (project) {
            _this.projectName = project;
        }, function (err) {
            _this.spinnerService.hide();
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    ControllersListComponent.prototype.pushToControllerArray = function (element) {
        if (!element.isChecked) {
            this.controllersArrayList.push(element._id);
        }
        else {
            this.controllersArrayList.pop();
        }
    };
    ControllersListComponent.prototype.changeFlag = function (isCheck) {
        if (isCheck) {
            this.isChecked = false;
            for (var i = 0; i < this.controllers.controllers.length; ++i) {
                this.controllers.controllers[i].isChecked = false;
                this.controllersArrayList = [];
            }
        }
        else {
            this.isChecked = true;
            for (var i = 0; i < this.controllers.controllers.length; ++i) {
                this.controllers.controllers[i].isChecked = true;
                this.controllersArrayList.push(this.controllers.controllers[i]._id);
            }
        }
    };
    ControllersListComponent.prototype.saveToExcell = function () {
        var wscols = [
            // A      // B        // C       // D      // E       // F       // G       // H       // I      // J         // K     // L
            { wch: 5 }, { wch: 25 }, { wch: 32 }, { wch: 17 }, { wch: 27 }, { wch: 22 }, { wch: 20 }, { wch: 17 }, { wch: 22 }, { wch: 18 }, { wch: 7 }, { wch: 7 },
            // M      // N      // O       // P       // Q       // R       // S       // T       // U       // V       // W       // X
            { wch: 7 }, { wch: 7 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 17 }, { wch: 14 }, { wch: 15 },
            // Y
            { wch: 22 }
        ];
        var projectArray = [];
        for (var i = 0; i < this.controllers.controllers.length; ++i) {
            projectArray.push(this.controllers.controllers[i]._id);
        }
        var queryString = 'controllers-item-list';
        var scheetName = ' Controllers List';
        var controllerName = 'Controllers';
        var fileName = 'CONTROLLER INDEX';
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    ControllersListComponent.prototype.saveToExcellUIData = function () {
        var wscols = [
            // A       // B       // C       // D       // E        // F      // G        // H      // I        // J      // K        // L
            { wch: 14 }, { wch: 10 }, { wch: 22 }, { wch: 28 }, { wch: 28 }, { wch: 32 }, { wch: 12 }, { wch: 18 }, { wch: 18 }, { wch: 21 }, { wch: 15 }, { wch: 17 },
            // M       // N       // O       // P       //Q        //R       //S       //T       //U       //V       //W
            { wch: 19 }, { wch: 27 }, { wch: 19 }, { wch: 22 }, { wch: 19 }, { wch: 8 }, { wch: 8 }, { wch: 7 }, { wch: 7 }, { wch: 13 }, { wch: 12 },
            // X       // Y       // Z       // AA     // AB      // AC      // AD      // AE      // AF      // AG      // AH
            { wch: 15 }, { wch: 13 }, { wch: 13 }, { wch: 9 }, { wch: 12 }, { wch: 16 }, { wch: 15 }, { wch: 15 }, { wch: 22 }, { wch: 16 }, { wch: 8 }
        ];
        var projectArray = [];
        for (var i = 0; i < this.controllers.controllers.length; ++i) {
            projectArray.push(this.controllers.controllers[i]._id);
        }
        var queryString = 'controllers-item';
        var scheetName = 'Controllers UI List';
        var controllerName = 'Controllers';
        var fileName = 'CONTROLLER REPORT';
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    ControllersListComponent.prototype.saveController = function () {
        var _this = this;
        this.controller = {};
        this.controller.length = 0;
        this.spinnerService.show();
        this.controllerService.createController(this.projectId, this.controller).subscribe(function (res) {
            var responseId = res[res.length - 1]['_id'];
            var routeToControllerItem = '/project/' + _this.route.snapshot.params['id'] + '/controllers/' + responseId;
            _this.router.navigate([routeToControllerItem]);
        }, function (err) {
            console.log(err);
        });
        this.spinnerService.hide();
    };
    ControllersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-controllers-list',
            template: __webpack_require__("../../../../../src/app/components/controllers-list/controllers-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/controllers-list/controllers-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_controller_service__["a" /* ControllerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4__services_excel_service__["a" /* ExcelService */]])
    ], ControllersListComponent);
    return ControllersListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/drop-down-dependent/drop-down-dependent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }\r\n\r\n  .border-eh-raiting {\r\n    border: 1px solid;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .inner-padding-eh-rating {\r\n    padding-bottom: 1.3rem!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/drop-down-dependent/drop-down-dependent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" *ngIf=\"itemType\">\n  <div class=\"d-flex flex-row\">\n    <select \n      [disabled]=\"itemType.length == 0\"\n      id=\"selectedItemType\"\n      class=\"form-control selectForOpenModal\"\n      [(ngModel)]=\"selectedItemType\"\n      (click)=\"change(selectedItemType)\"\n      name=\"selectedItemType\"\n    >\n      <option\n        *ngFor=\"let currentItem of itemType\" \n        [ngValue]=\"currentItem.name\"\n        [selected]=\"currentItem.name == selectedItemType\"\n      >\n        {{currentItem.name}}\n      </option>\n    </select>\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n      data-toggle=\"tooltip\"\n      data-placement=\"top\"\n      title=\"Add new item\"\n      (click)=\"equipmentTypeModal.showAddModal()\"\n    ></button>\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n      data-toggle=\"tooltip\"\n      data-placement=\"top\"\n      title=\"Drop selected item\"\n      (click)=\"equipmentTypeModal.showDropModal(dropElementFlag)\"\n      [disabled]=\"itemType.length == 0\"\n    ></button>\n  </div>\n  <!--\n  <p>selectedItemType</p>\n  <div *ngIf=\"selectedItemType\">selectedItemType - {{ selectedItemType}}</div>\n  <div *ngIf=\"itemType\">\n    <p>itemType</p>\n    <ul>\n      <li *ngFor=\"let item of itemType\">\n        {{ item.name }}\n        {{ item.powerSystemType }}\n      </li>\n    </ul>\n  </div>\n  -->\n</div>\n<app-simple-electrical-modal\n  [dataValue]=\"itemType\"\n  [selectedValue]=\"selectedItemType\"\n  [title]=\"dropDownName\"\n  (newOnChanged)=\"newChanged($event)\"\n  #equipmentTypeModal\n>\n</app-simple-electrical-modal>\n"

/***/ }),

/***/ "../../../../../src/app/components/drop-down-dependent/drop-down-dependent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownDependentComponent; });
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

var DropDownDependentComponent = (function () {
    function DropDownDependentComponent() {
        // tslint:disable-next-line:no-output-on-prefix
        this.onChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newOnChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropElementFlag = true;
        // sit: string = this.selectedItemType;
    }
    DropDownDependentComponent.prototype.change = function (selectedItemType) {
        console.log(selectedItemType);
        this.onChanged.emit(selectedItemType);
    };
    DropDownDependentComponent.prototype.newChanged = function (selectedItemType) {
        console.log(selectedItemType);
        this.newOnChanged.emit(selectedItemType);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DropDownDependentComponent.prototype, "itemType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DropDownDependentComponent.prototype, "selectedItemType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DropDownDependentComponent.prototype, "dropDownName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DropDownDependentComponent.prototype, "onChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DropDownDependentComponent.prototype, "newOnChanged", void 0);
    DropDownDependentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drop-down-dependent',
            template: __webpack_require__("../../../../../src/app/components/drop-down-dependent/drop-down-dependent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/drop-down-dependent/drop-down-dependent.component.css")]
        })
    ], DropDownDependentComponent);
    return DropDownDependentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/drop-down/drop-down.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }\r\n\r\n  .border-eh-raiting {\r\n    border: 1px solid;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .inner-padding-eh-rating {\r\n    padding-bottom: 1.3rem!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/drop-down/drop-down.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" *ngIf=\"equipmentType\">\n  <div class=\"d-flex flex-row\">\n    <select \n      [disabled]=\"equipmentType.length == 0\"\n      id=\"selectedEquipmentType\"\n      class=\"form-control selectForOpenModal\"\n      [(ngModel)]=\"selectedEquipmentType\"\n      (click)=\"change(selectedEquipmentType)\"\n      name=\"selectedEquipmentType\"\n    >\n      <option\n        *ngFor=\"let currentEquipmentType of equipmentType\" \n        [ngValue]=\"currentEquipmentType\"\n      >\n        {{currentEquipmentType}}\n      </option>\n    </select>\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n      data-toggle=\"tooltip\"\n      data-placement=\"top\"\n      title=\"Add new item\"\n      (click)=\"equipmentTypeModal.showAddModal()\"\n    ></button>\n    <button\n      type=\"button\"\n      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n      data-toggle=\"tooltip\"\n      data-placement=\"top\"\n      title=\"Drop selected item\"\n      (click)=\"equipmentTypeModal.showDropModal(dropElementFlag)\"\n      [disabled]=\"equipmentType.length == 0\"\n    ></button>\n  </div>\n</div>\n\n<app-simple-electrical-modal\n  [dataValue]=\"equipmentType\"\n  [selectedValue]=\"selectedEquipmentType\"\n  [title]=\"dropDownName\"\n  (newOnChanged)=\"newChanged($event)\"\n  #equipmentTypeModal\n>\n</app-simple-electrical-modal>"

/***/ }),

/***/ "../../../../../src/app/components/drop-down/drop-down.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownComponent; });
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

var DropDownComponent = (function () {
    function DropDownComponent() {
        // tslint:disable-next-line:no-output-on-prefix
        // @Output() itemWasSelected: EventEmitter<[string]>;
        // tslint:disable-next-line:no-output-on-prefix
        this.onChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newOnChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropElementFlag = true;
    }
    DropDownComponent.prototype.change = function (selectedEquipmentType) {
        this.onChanged.emit(selectedEquipmentType);
    };
    DropDownComponent.prototype.newChanged = function (selectedEquipmentType) {
        this.newOnChanged.emit(selectedEquipmentType);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DropDownComponent.prototype, "equipmentType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DropDownComponent.prototype, "selectedEquipmentType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DropDownComponent.prototype, "dropDownName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DropDownComponent.prototype, "onChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DropDownComponent.prototype, "newOnChanged", void 0);
    DropDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drop-down',
            template: __webpack_require__("../../../../../src/app/components/drop-down/drop-down.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/drop-down/drop-down.component.css")]
        })
    ], DropDownComponent);
    return DropDownComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }\r\n\r\n  .border-eh-raiting {\r\n    border: 1px solid;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .inner-padding-eh-rating {\r\n    padding-bottom: 1.3rem!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mr-3\" (window:resize)=\"onResize($event)\" *ngIf=\"electricalItem\">\r\n  <div class=\"d-flex justify-content-center pt-3\">\r\n    <h1>Electrical <strong>{{electricalItem?.equipmentTag || \"New Electrical\"}}</strong></h1>\r\n  </div>\r\n  <form (ngSubmit)=\"saveElectrical(electricalItem._id, electricalForm.value)\" #electricalForm=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-xl-6 align-self-start\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <span class=\"h4\">Electrical Equipment Entry</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\">\r\n            <div class=\"form-group\">\r\n              <label for=\"itemNumber\">Item number</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"itemNumber\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"dateCreate\">Date added</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                [ngModel]=\"electricalItem.dateCreate | date:'yyyy-MM-dd'\" \r\n                name=\"dateCreate\"\r\n                disabled\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"revision\">Revision</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.revision\" name=\"revision\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"quantity\">Quantity</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.quantity\" name=\"quantity\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"equipmentType\">Equipment Type</label>\r\n              <app-drop-down (onChanged)=\"onChanged($event, 'Equipment Type')\"\r\n                             (newOnChanged)=\"newOnChanged($event, 'Equipment Type')\"\r\n                             [dropDownName]=\"'Equipment Type'\"\r\n                             [equipmentType]='electricalItem.equipmentType'\r\n                             [selectedEquipmentType]='electricalItem.selectedEquipmentType'\r\n                             name=\"selectedEquipmentType\">\r\n              </app-drop-down>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedPidDrawing\">Pid Drawing</label>\r\n              <app-drop-down (onChanged)=\"onChanged($event, 'Pid Drawing')\"\r\n                             (newOnChanged)=\"newOnChanged($event, 'Pid Drawing')\"\r\n                             [dropDownName]=\"'Pid Drawing'\"\r\n                             [equipmentType]='electricalItem.pidDrawing'\r\n                             [selectedEquipmentType]='electricalItem.selectedPidDrawing'\r\n                             name=\"selectedPidDrawing\">\r\n              </app-drop-down>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"layoutDrawing\">Layout Drawing</label>\r\n              <app-drop-down (onChanged)=\"onChanged($event, 'Layout Drawing')\"\r\n                             (newOnChanged)=\"newOnChanged($event, 'Layout Drawing')\"\r\n                             [dropDownName]=\"'Layout Drawing'\"\r\n                             [equipmentType]='electricalItem.layoutDrawing'\r\n                             [selectedEquipmentType]='electricalItem.selectedLayoutDrawing'\r\n                             name=\"selectedLayoutDrawing\">\r\n              </app-drop-down>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sldDraving\">SLD Drawing</label>\r\n              <app-drop-down (onChanged)=\"onChanged($event, 'SLD Drawing')\"\r\n                             (newOnChanged)=\"newOnChanged($event, 'SLD Drawing')\"\r\n                             [dropDownName]=\"'SLD Drawing'\"\r\n                             [equipmentType]='electricalItem.sldDraving'\r\n                             [selectedEquipmentType]='electricalItem.selectedSldDraving'\r\n                             name=\"selectedSldDraving\">\r\n              </app-drop-down>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"equipmentTag\">Equipment Tag</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentTag\" name=\"equipmentTag\" placeholder=\"New Electrical\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"equipmentTag2\">Equipment Tag 2</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentTag2\" name=\"equipmentTag2\" placeholder=\"Equipment Tag 2\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"parentTag\">Parent Tag</label>\r\n              <select [disabled]=\"parentList?.length == 0\"\r\n                      id=\"selectedParentTag\"\r\n                      class=\"form-control selectForOpenModal\"\r\n                      [(ngModel)]=\"electricalItem.selectedParentTag\"\r\n                      name=\"selectedParentTag\">\r\n                <option *ngFor=\"let currentParentTag of parentList\"\r\n                        [ngValue]=\"currentParentTag\"\r\n                        [selected]=\"currentParentTag==electricalItem.selectedParentTag\">\r\n                  {{currentParentTag}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"equipmentNotes\">Equipment Notes</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.equipmentNotes\" name=\"equipmentNotes\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"locationArea\">Location/Area</label>\r\n              <app-drop-down (onChanged)=\"onChanged($event, 'Location/Area')\"\r\n                             (newOnChanged)=\"newOnChanged($event, 'Location/Area')\"\r\n                             [dropDownName]=\"'Location/Area'\"\r\n                             [equipmentType]='electricalItem.locationArea'\r\n                             [selectedEquipmentType]='electricalItem.selectedLocationArea'\r\n                             name=\"selectedLocationArea\">\r\n              </app-drop-down>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedEquipmentDescription\">Equipment Description</label>\r\n              <app-drop-down (onChanged)=\"onChanged($event, 'Equipment Description')\"\r\n                             (newOnChanged)=\"newOnChanged($event, 'Equipment Description')\"\r\n                             [dropDownName]=\"'Equipment Description'\"\r\n                             [equipmentType]='electricalItem.equipmentDescription'\r\n                             [selectedEquipmentType]='electricalItem.selectedEquipmentDescription'\r\n                             name=\"selectedEquipmentDescription\">\r\n              </app-drop-down>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"cloneTag\">Clone Tag</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.cloneTag\" name=\"cloneTag\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"newTag\">New Tag</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"electricalItem.newTag\" name=\"newTag\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                  <label for=\"length\">Length(mm)</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <label for=\"depth\">Depth(mm)</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <label for=\"height\">Height(mm)</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.length\" name=\"length\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.depth\" name=\"depth\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.height\" name=\"height\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                  <label for=\"coordForX\">X Coord(m)</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <label for=\"coordForY\">Y Coord(m)</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <label for=\"coordForZ\">Z Coord(m)</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"col\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForX\" name=\"coordForX\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForY\" name=\"coordForY\">\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.coordForZ\" name=\"coordForZ\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"scenarioFirstLoadFactor\">Scenario 1 Load Factor %</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.scenarioFirstLoadFactor\" name=\"scenarioFirstLoadFactor\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"heatDissipation\">Heat Dissipation (W)</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.heatDissipation\" name=\"heatDissipation\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-xl-6 align-self-start\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <span class=\"h4\">General Rating</span>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedPowerSystem\">Power System</label>\r\n              <select id=\"selectedPowerSystem\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"electricalItem.selectedPowerSystem\"\r\n                      (change)=\"typeChanged()\"\r\n                      name=\"selectedPowerSystem\">\r\n                <option *ngFor=\"let currentPowerSystem of electricalItem.powerSystem\"\r\n                        [ngValue]=\"currentPowerSystem\"\r\n                        [selected]=\"currentPowerSystem==electricalItem.selectedPowerSystem\">\r\n                  {{currentPowerSystem}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedVoltage\">Voltage</label>\r\n              <!--\r\n                                <app-drop-down-dependent\r\n                                  (onChanged)=\"onChanged($event, 'Voltage')\"\r\n                                  (newOnChanged)=\"newOnChanged($event, 'Voltage')\"\r\n                                  [dropDownName] = \"'Voltage'\"\r\n                                  [itemType] = 'productsAfterChangeEvent'\r\n                                  [selectedItemType] = 'electricalItem.selectedVoltage'\r\n                                  name=\"selectedVoltage\"\r\n                                >\r\n                                </app-drop-down-dependent>\r\n                                <p>electricalItem.selectedVoltage</p>\r\n                                <div>{{ electricalItem?.selectedVoltage?.name }}</div>\r\n                                <div>{{ electricalItem?.selectedVoltage?.powerSystemType }}</div>\r\n              -->\r\n              <div class=\"d-flex flex-row\">\r\n                <select id=\"selectedVoltage\"\r\n                        class=\"form-control selectForOpenModal\"\r\n                        [(ngModel)]=\"electricalItem.selectedVoltage.name\"\r\n                        name=\"selectedVoltage\"\r\n                        [disabled]=\"!electricalItem.selectedPowerSystem\">\r\n                  <option *ngFor=\"let currentVoltage of productsAfterChangeEvent\"\r\n                          [ngValue]=\"currentVoltage.name\"\r\n                          [selected]=\"currentVoltage.name == electricalItem.selectedVoltage.name\">\r\n                    {{currentVoltage.name}}\r\n                  </option>\r\n                </select>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                        data-toggle=\"tooltip\"\r\n                        data-placement=\"top\"\r\n                        title=\"Add new item\"\r\n                        (click)=\"voltageModal.showAddModal()\"\r\n                        [disabled]=\"!electricalItem.selectedPowerSystem\"></button>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                        data-toggle=\"tooltip\"\r\n                        data-placement=\"top\"\r\n                        title=\"Drop selected item\"\r\n                        (click)=\"voltageModal.showDropModal(true)\"\r\n                        [disabled]=\"productsAfterChangeEvent.length == 0\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"totalPF\">Total % P.F.</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.totalPF\" name=\"totalPF\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"totalEFF\">Total % EFF.</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.totalEFF\" name=\"totalEFF\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"nameplateRating\">Nameplate Rating</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.nameplateRating\" name=\"nameplateRating\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"units\">Units</label>\r\n              <select id=\"selectedUnits\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"electricalItem.selectedUnits\"\r\n                      name=\"selectedUnits\">\r\n                <option *ngFor=\"let currentUnit of electricalItem.units\"\r\n                        [ngValue]=\"currentUnit\"\r\n                        [selected]=\"currentUnit==electricalItem.selectedUnits\">\r\n                  {{currentUnit}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedMotorSF\">Motor S.F.</label>\r\n              <select id=\"selectedMotorSF\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"electricalItem.selectedMotorSF\"\r\n                      name=\"selectedMotorSF\">\r\n                <option *ngFor=\"let currentMotorSF of electricalItem.motorSF\"\r\n                        [ngValue]=\"currentMotorSF\"\r\n                        [selected]=\"currentMotorSF==electricalItem.selectedMotorSF\">\r\n                  {{currentMotorSF}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"motorCode\">Motor Code</label>\r\n              <select id=\"selectedMotorCode\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"electricalItem.selectedMotorCode\"\r\n                      name=\"selectedMotorCode\">\r\n                <option *ngFor=\"let currentMotorCode of electricalItem.motorCode\"\r\n                        [ngValue]=\"currentMotorCode\"\r\n                        [selected]=\"currentMotorCode==electricalItem.selectedMotorCode\">\r\n                  {{currentMotorCode}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedSccRating\">SCC Rating</label>\r\n              <select id=\"selectedSccRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"electricalItem.selectedSccRating\"\r\n                      name=\"selectedSccRating\">\r\n                <option *ngFor=\"let currentSccRating of electricalItem.sccRating\"\r\n                        [ngValue]=\"currentSccRating\"\r\n                        [selected]=\"currentSccRating==electricalItem.selectedSccRating\">\r\n                  {{currentSccRating}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedEnclosureRating\">Enclosure Rating</label>\r\n              <select id=\"selectedEnclosureRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"electricalItem.selectedEnclosureRating\"\r\n                      name=\"selectedEnclosureRating\">\r\n                <option *ngFor=\"let currentEnclosureRating of electricalItem.enclosureRating\"\r\n                        [ngValue]=\"currentEnclosureRating\"\r\n                        [selected]=\"currentEnclosureRating==electricalItem.selectedEnclosureRating\">\r\n                  {{currentEnclosureRating}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"loadFactor\">Load Factor (%)</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.loadFactor\" name=\"loadFactor\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-3 align-self-end\" *ngIf=\"electricalItem\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedLoadDuty\">Load Duty</label>\r\n              <select id=\"selectedLoadDuty\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"electricalItem.selectedLoadDuty\"\r\n                      name=\"selectedLoadDuty\">\r\n                <option *ngFor=\"let currentLoadDuty of electricalItem.loadDuty\"\r\n                        [ngValue]=\"currentLoadDuty\"\r\n                        [selected]=\"currentLoadDuty==electricalItem.selectedLoadDuty\">\r\n                  {{currentLoadDuty}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 align-self-end\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"ambientTemp\">Ambient Temp (°C)</label>\r\n                  <input id=\"ambientTemp\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.ambientTemp\" name=\"ambientTemp\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedTerminationTemp\">Termination Temp (°C)</label>\r\n                  <select id=\"selectedTerminationTemp\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"electricalItem.selectedTerminationTemp\"\r\n                          name=\"selectedTerminationTemp\">\r\n                    <option *ngFor=\"let currentTerminationTemp of electricalItem.terminationTemp\"\r\n                            [ngValue]=\"currentTerminationTemp\"\r\n                            [selected]=\"currentTerminationTemp==electricalItem.selectedTerminationTemp\">\r\n                      {{currentTerminationTemp}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"operationTempMin\">Operating T Min.(°C)</label>\r\n                  <input id=\"operationTempMin\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.operationTempMin\" name=\"operationTempMin\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"operationTempMax\">Operating T Max.(°C)</label>\r\n                  <input id=\"operationTempMax\" type=\"number\" class=\"form-control\" [(ngModel)]=\"electricalItem.operationTempMax\" name=\"operationTempMax\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedInsulDescription\">Insul. Designation</label>\r\n                  <select id=\"selectedInsulDescription\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"electricalItem.selectedInsulDescription\"\r\n                          name=\"selectedInsulDescription\">\r\n                    <option *ngFor=\"let currentInsulDescription of electricalItem.insulDescription\"\r\n                            [ngValue]=\"currentInsulDescription\"\r\n                            [selected]=\"currentInsulDescription==electricalItem.selectedInsulDescription\">\r\n                      {{currentInsulDescription}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 align-self-end border-eh-raiting\">\r\n            <div class=\"row d-flex justify-content-center inner-padding-eh-rating\">\r\n              <label><strong>Equipment Hazloc Rating</strong></label>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-3\">\r\n                <label><strong>{{electricalItem?.selectedHazlocClass}}</strong></label>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <label><strong>{{electricalItem?.selectedHazlocZone}}</strong></label>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <label><strong>{{electricalItem?.selectedHazlocGroup}}</strong></label>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <label><strong>{{electricalItem?.selectedHazlocTemperature}}</strong></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedHazlocClass\">Hazloc Class</label>\r\n                  <select id=\"selectedHazlocClass\"\r\n                          class=\"form-control selectForOpenModal\"\r\n                          [(ngModel)]=\"electricalItem.selectedHazlocClass\"\r\n                          (ngModelChange)=\"optionChanged($event)\"\r\n                          name=\"selectedHazlocClass\">\r\n                    <option *ngFor=\"let currentHazlocClass of electricalItem.hazlocClass\"\r\n                            [ngValue]=\"currentHazlocClass\"\r\n                            [selected]=\"currentHazlocClass==electricalItem.selectedHazlocClass\">\r\n                      {{currentHazlocClass}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedHazlocZone\">Hazloc Zone</label>\r\n                  <!--\r\n                  <app-drop-down\r\n                    (onChanged)=\"onChanged($event, 'Hazloc Zone')\"\r\n                    (newOnChanged)=\"newOnChanged($event, 'Hazloc Zone')\"\r\n                    [dropDownName] = \"'Hazloc Zone'\"\r\n                    [equipmentType] = 'electricalItem.hazlocZone'\r\n                    [selectedEquipmentType] = 'electricalItem.selectedHazlocZone'\r\n                    name=\"selectedHazlocZone\"\r\n                  ></app-drop-down>\r\n                  -->\r\n                  <div class=\"d-flex flex-row\">\r\n                    <select [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\r\n                            id=\"selectedHazlocZone\"\r\n                            class=\"form-control selectForOpenModal\"\r\n                            [(ngModel)]=\"electricalItem.selectedHazlocZone\"\r\n                            #selectedHazlocZone=\"ngModel\"\r\n                            name=\"selectedHazlocZone\">\r\n                      <option *ngFor=\"let currentHazlocZone of electricalItem.hazlocZone\"\r\n                              [ngValue]=\"currentHazlocZone\"\r\n                              [selected]=\"currentHazlocZone==electricalItem.selectedHazlocZone\">\r\n                        {{currentHazlocZone}}\r\n                      </option>\r\n                    </select>\r\n                    <button type=\"button\"\r\n                            class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                            data-toggle=\"tooltip\"\r\n                            data-placement=\"top\"\r\n                            title=\"Add new item\"\r\n                            [disabled]=\"!electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\r\n                            (click)=\"hazlocZoneModal.showAddModal()\"></button>\r\n                    <button type=\"button\"\r\n                            class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                            data-toggle=\"tooltip\"\r\n                            data-placement=\"top\"\r\n                            title=\"Drop selected item\"\r\n                            (click)=\"hazlocZoneModal.showDropModal(true)\"\r\n                            [disabled]=\"electricalItem.hazlocZone.length == 0 || !electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedHazlocGroup\">Hazloc Group</label>\r\n                  <select [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\r\n                          id=\"selectedHazlocGroup\"\r\n                          class=\"form-control selectForOpenModal\"\r\n                          [(ngModel)]=\"electricalItem.selectedHazlocGroup\"\r\n                          #selectedHazlocGroup=\"ngModel\"\r\n                          name=\"selectedHazlocGroup\"\r\n                  >\r\n                    <option *ngFor=\"let currentHazlocGroup of electricalItem.hazlocGroup\"\r\n                            [ngValue]=\"currentHazlocGroup\"\r\n                            [selected]=\"currentHazlocGroup==electricalItem.selectedHazlocGroup\"\r\n                    >\r\n                      {{currentHazlocGroup}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalItem\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"selectedHazlocTemperature\">Hazloc Temperature</label>\r\n                  <div class=\"d-flex flex-row\">\r\n                    <select [disabled]=\"electricalItem.selectedHazlocClass == electricalItem.hazlocClass[0] || !electricalItem.selectedHazlocClass\"\r\n                            id=\"selectedHazlocTemperature\"\r\n                            class=\"form-control selectForOpenModal\"\r\n                            [(ngModel)]=\"electricalItem.selectedHazlocTemperature\"\r\n                            #selectedHazlocTemperature=\"ngModel\"\r\n                            name=\"selectedHazlocTemperature\"\r\n                    >\r\n                      <option *ngFor=\"let currentHazlocTemperature of electricalItem.hazlocTemperature\"\r\n                              [ngValue]=\"currentHazlocTemperature\"\r\n                              [selected]=\"currentHazlocTemperature==electricalItem.selectedHazlocTemperature\"\r\n                      >\r\n                        {{currentHazlocTemperature}}\r\n                      </option>\r\n                    </select>\r\n                    <button type=\"button\"\r\n                            class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                            data-toggle=\"tooltip\"\r\n                            data-placement=\"top\"\r\n                            title=\"Add new item\"\r\n                            [disabled]=\"!electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\r\n                            (click)=\"hazlocTemperatureModal.showAddModal()\"\r\n                    >\r\n                    </button>\r\n                    <button type=\"button\"\r\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                          data-toggle=\"tooltip\"\r\n                          data-placement=\"top\"\r\n                          title=\"Drop selected item\"\r\n                          (click)=\"hazlocTemperatureModal.showDropModal(true)\"\r\n                          [disabled]=\"electricalItem.hazlocTemperature.length == 0 || !electricalItem.selectedHazlocClass || electricalItem.selectedHazlocClass == 'General'\"\r\n                    >\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end\">\r\n      <div class=\"mr-auto p-2\">\r\n        <a routerLink=\"/project/{{projectId}}/electricals/\" class=\"btn btn-primary\">Back</a>\r\n      </div>\r\n      <div class=\"p-2 form-group\">\r\n        <span *ngIf=\"isCanChange\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!electricalForm.form.valid\">Update/Create</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ml-3 mr-3\" *ngIf=\"sizeWindow > 576; else werticalTable\">\r\n      <div class=\"row achievements-wrapper\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Rev.</th>\r\n              <th>Equipment Tag</th>\r\n              <th>Equipment Description</th>\r\n              <th>Load Type</th>\r\n              <th>System Voltage</th>\r\n              <th>Power System</th>\r\n              <th>Nameplate Rating</th>\r\n              <th>Units</th>\r\n              <th>Total % PF</th>\r\n              <th>Total % EFF</th>\r\n              <th>Motor SF</th>\r\n              <th>Motor Code</th>\r\n              <th>Load Factor %</th>\r\n              <th>Load Duty</th>\r\n              <th>Total Connected FLA</th>\r\n              <th>Total Connected KW</th>\r\n              <th>Total Connected KVAR</th>\r\n              <th>Total Connected KVA</th>\r\n              <th>Total Demand FLA</th>\r\n              <th>Total Demand KW</th>\r\n              <th>Total Demand KVAR</th>\r\n              <th>Total Demand KVA</th>\r\n              <th>Total Scenario 1 Load Factor %</th>\r\n              <th>Total Scenario 1 FLA</th>\r\n              <th>Total Scenario 1 KW</th>\r\n              <th>Total Scenario 1 KVAR</th>\r\n              <th>Total Scenario 1 KVA</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>{{electricalItem?.revision}}</td>                         <!-- Rev. -->\r\n              <td>{{electricalItem?.equipmentTag}}</td>                     <!-- Equipment Tag -->\r\n              <td>{{electricalItem?.selectedEquipmentDescription}}</td>     <!-- Equipment Description -->\r\n              <td>{{electricalItem?.selectedEquipmentType}}</td>            <!-- Load Type -->\r\n              <td>{{electricalItem?.selectedVoltage?.name}}</td>             <!-- System Voltage -->\r\n              <td>{{electricalItem?.selectedPowerSystem}}</td>              <!-- Power System -->\r\n              <td>{{electricalItem?.nameplateRating}}</td>                  <!-- Nameplate Rating -->\r\n              <td>{{electricalItem?.selectedUnits}}</td>                    <!-- Units -->\r\n              <td>{{electricalItem?.totalPF}}</td>                          <!-- Total % PF -->\r\n              <td>{{electricalItem?.totalEFF}}</td>                         <!-- Total % EFF -->\r\n              <td>{{electricalItem?.selectedMotorSF}}</td>                  <!-- Motor SF -->\r\n              <td>{{electricalItem?.selectedMotorCode}}</td>                <!-- Motor Code -->\r\n              <td>{{electricalItem?.loadFactor}}</td>                       <!-- Load Factor % -->\r\n              <td>{{electricalItem?.selectedLoadDuty}}</td>                 <!-- Load Duty -->\r\n              <td>{{electricalItem?.totalConectedFla}}</td>                 <!-- Total Connected FLA -->\r\n              <td>{{electricalItem?.totalConectedKW}}</td>                  <!-- Total Connected KW -->\r\n              <td>{{electricalItem?.totalConnectedKVAR}}</td>               <!-- Total Connected KVAR -->\r\n              <td>{{electricalItem?.totalConnectedKVA}}</td>                <!-- Total Connected KVA -->\r\n              <td>{{electricalItem?.totalDemandFLA}}</td>                   <!-- Total Demand FLA -->\r\n              <td>{{electricalItem?.totalDemandKW}}</td>                    <!-- Total Demand KW -->\r\n              <td>{{electricalItem?.totalDemandKVAR}}</td>                  <!-- Total Demand KVAR -->\r\n              <td>{{electricalItem?.totalDemandKVA}}</td>                    <!-- Total Demand KVA -->\r\n              <td>{{electricalItem?.scenarioFirstLoadFactor}}</td>          <!-- Total Scenario 1 Load Factor % -->\r\n              <td>{{electricalItem?.scenarioFirstFLA}}</td>                  <!-- Total Scenario 1 FLA -->\r\n              <td>{{electricalItem?.scenarioFirstKW}}</td>                   <!-- Total Scenario 1 KW -->\r\n              <td>{{electricalItem?.scenarioFirstKVAR}}</td>                 <!-- Total Scenario 1 KVAR -->\r\n              <td>{{electricalItem?.scenarioFirstKVA}}</td>                  <!-- Total Scenario 1 KVA -->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <ng-template #werticalTable>\r\n      <div class=\"row\">\r\n        <table class=\"table table-bordered\">\r\n          <tr>\r\n            <td><strong>Rev.</strong></td>\r\n            <td>{{electricalItem?.revision}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Equipment Tag</strong></td>\r\n            <td>{{electricalItem?.equipmentTag}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Equipment Description</strong></td>\r\n            <td>{{electricalItem?.selectedEquipmentDescription}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Load Type</strong></td>\r\n            <td>{{electricalItem?.selectedEquipmentType}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>System Voltage</strong></td>\r\n            <td>{{electricalItem?.selectedVoltage?.name}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Power System</strong></td>\r\n            <td>{{electricalItem?.selectedPowerSystem}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Nameplate Rating</strong></td>\r\n            <td>{{electricalItem?.nameplateRating}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Units</strong></td>\r\n            <td>{{electricalItem?.selectedUnits}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total % PF</strong></td>\r\n            <td>{{electricalItem?.totalPF}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total % EFF</strong></td>\r\n            <td>{{electricalItem?.totalEFF}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Motor SF</strong></td>\r\n            <td>{{electricalItem?.selectedMotorSF}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Motor Code</strong></td>\r\n            <td>{{electricalItem?.selectedMotorCode}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Load Factor %</strong></td>\r\n            <td>{{electricalItem?.loadFactor}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Load Duty</strong></td>\r\n            <td>{{electricalItem?.selectedLoadDuty}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Connected FLA</strong></td>\r\n            <td>{{electricalItem?.totalConectedFla}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Connected KW</strong></td>\r\n            <td>{{electricalItem?.totalConectedKW}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Connected KVAR</strong></td>\r\n            <td>{{electricalItem?.totalConnectedKVAR}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Connected KVA</strong></td>\r\n            <td>{{electricalItem?.totalConnectedKVA}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Demand FLA</strong></td>\r\n            <td>{{electricalItem?.totalDemandFLA}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Demand KW</strong></td>\r\n            <td>{{electricalItem?.totalDemandKW}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Demand KVAR</strong></td>\r\n            <td>{{electricalItem?.totalDemandKVAR}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Demand KVA</strong></td>\r\n            <td>{{electricalItem?.totalDemandKVA}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Scenario 1 Load Factor %</strong></td>\r\n            <td>{{electricalItem?.scenarioFirstLoadFactor}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Scenario 1 FLA</strong></td>\r\n            <td>{{electricalItem?.scenarioFirstFLA}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Scenario 1 KW</strong></td>\r\n            <td>{{electricalItem?.scenarioFirstKW}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Scenario 1 KVAR</strong></td>\r\n            <td>{{electricalItem?.scenarioFirstKVAR}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Total Scenario 1 KVA</strong></td>\r\n            <td>{{electricalItem?.scenarioFirstKVA}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </ng-template>\r\n  </form>\r\n  <div class=\"row m-3\">\r\n    <span *ngIf=\"isCanChange\">\r\n      <button class=\"btn btn-danger\" (click)=\"deleteElectrical(electricalItem._id)\">Delete</button>\r\n    </span>\r\n  </div>\r\n  <!--START MODALS-->\r\n  <app-electricals-modal [dataValue]=\"productsAfterChangeEvent\" [selectedValue]=\"electricalItem?.selectedVoltage?.name\" [title]=\"'Voltage'\" #voltageModal></app-electricals-modal>\r\n  <app-electricals-modal [dataValue]=\"electricalItem?.hazlocZone\" [selectedValue]=\"electricalItem?.selectedHazlocZone\" [title]=\"'Hazloc Zone'\" #hazlocZoneModal></app-electricals-modal>\r\n  <app-electricals-modal [dataValue]=\"electricalItem?.hazlocTemperature\" [selectedValue]=\"electricalItem?.selectedHazlocTemperature\" [title]=\"'Hazloc Temperature'\" #hazlocTemperatureModal></app-electricals-modal>\r\n  <!-- END MODALS -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/electrical-item/electrical-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// core modules



// servises


// external packages

var ElectricalItemComponent = (function () {
    function ElectricalItemComponent(router, route, electricalService, projectServise, spinnerService) {
        this.router = router;
        this.route = route;
        this.electricalService = electricalService;
        this.projectServise = projectServise;
        this.spinnerService = spinnerService;
        this.productsAfterChangeEvent = [];
        this.today = Date.now();
        this.projectId = this.route.snapshot.params['id'];
        this.electricalId = this.route.snapshot.params['electricalid'];
        this.sizeWindow = window.innerWidth;
    }
    //
    ElectricalItemComponent.prototype.onResize = function (event) {
        this.sizeWindow = event.target.innerWidth;
    };
    ElectricalItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        if (window.localStorage) {
            this.isAdmin = __WEBPACK_IMPORTED_MODULE_0__shared_Availability__["a" /* Availability */].CheckIsAdmin(localStorage);
            this.userGuid = __WEBPACK_IMPORTED_MODULE_0__shared_Availability__["a" /* Availability */].GetUserGuid(localStorage);
            // this.isCreator = Availability.CheckIsCreator(localStorage, this.userGuid);
        }
        // get user list who can change or view elements
        this.projectServise.getCommunityData(this.projectId).subscribe(function (itemProject) {
            var projectElement = itemProject;
            if (projectElement.creator === _this.userGuid) {
                _this.isCanChange = true;
                console.log(_this.isCanChange);
            }
            else {
                var canChange = __WEBPACK_IMPORTED_MODULE_0__shared_Availability__["a" /* Availability */].CanUserChange(projectElement.team_project, _this.userGuid);
                var canView = __WEBPACK_IMPORTED_MODULE_0__shared_Availability__["a" /* Availability */].CanUserView(projectElement.brows_team_project, _this.userGuid);
                _this.isCanChange = canChange || canView || _this.isAdmin;
                console.log(_this.isCanChange);
            }
        });
        // get itemElectricalElement
        this.electricalService.getElectricalItem(this.projectId, this.electricalId).subscribe(function (electricals) {
            _this.electricalItem = electricals.electrical;
            debugger;
            console.log(_this.electricalItem.dateCreate);
            _this.date = (new Date(_this.electricalItem.dateCreate)).toLocaleDateString();
            debugger;
            if (_this.electricalItem.selectedPowerSystem) {
                _this.productsAfterChangeEvent = electricals.electrical.voltage.
                    filter(function (p) { return p.powerSystemType === electricals.electrical.selectedPowerSystem; });
            }
            else {
                return;
            }
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            _this.spinnerService.hide();
            return;
        });
        //
        this.electricalService.getElectricals(this.projectId).subscribe(function (electricalList) {
            _this.project = electricalList;
            // console.log(this.project);
            _this.parentList = [];
            for (var key in _this.project.electricals) {
                if (_this.project.electricals[key]._id === _this.electricalId) {
                }
                else {
                    _this.parentList.push(_this.project.electricals[key].equipmentTag);
                }
            }
        }, function (err) {
            console.log(err);
            _this.spinnerService.hide();
            return;
        });
        this.spinnerService.hide();
    };
    ElectricalItemComponent.prototype.onChanged = function (selectedElement, title) {
        var dropDownName = title;
        switch (dropDownName) {
            case 'Equipment Type': {
                this.electricalItem.selectedEquipmentType = selectedElement;
                break;
            }
            case 'Pid Drawing': {
                this.electricalItem.selectedPidDrawing = selectedElement;
                break;
            }
            case 'Layout Drawing': {
                this.electricalItem.selectedLayoutDrawing = selectedElement;
                break;
            }
            case 'SLD Drawing': {
                this.electricalItem.selectedSldDraving = selectedElement;
                break;
            }
            case 'Location/Area': {
                this.electricalItem.selectedLocationArea = selectedElement;
                break;
            }
            case 'Location/Area': {
                this.electricalItem.selectedLocationArea = selectedElement;
                break;
            }
            case 'Equipment Description': {
                this.electricalItem.selectedEquipmentDescription = selectedElement;
                break;
            }
            default: {
                console.log('Invalid choice');
                break;
            }
        }
    };
    /**
     *
     * @param selectedElement
     * @param title
     */
    ElectricalItemComponent.prototype.newOnChanged = function (selectedElement, title) {
        var dropDownName = title;
        switch (dropDownName) {
            case 'Equipment Type': {
                this.electricalItem.selectedEquipmentType = selectedElement;
                break;
            }
            case 'Pid Drawing': {
                this.electricalItem.selectedPidDrawing = selectedElement;
                break;
            }
            case 'Layout Drawing': {
                this.electricalItem.selectedLayoutDrawing = selectedElement;
                break;
            }
            case 'SLD Drawing': {
                this.electricalItem.selectedSldDraving = selectedElement;
                break;
            }
            case 'Location/Area': {
                this.electricalItem.selectedLocationArea = selectedElement;
                break;
            }
            case 'Equipment Description': {
                this.electricalItem.selectedEquipmentDescription = selectedElement;
                break;
            }
            default: {
                console.log('Invalid choice');
                break;
            }
        }
    };
    ElectricalItemComponent.prototype.onModelChange = function (event) {
        if (this.electricalItem.selectedEquipmentType !== event) {
        }
        this.electricalItem.selectedEquipmentType = event;
    };
    ElectricalItemComponent.prototype.ngDoCheck = function () {
        if (!this.electricalItem) {
            return;
        }
        else {
            this.recalculationDependentValues();
        }
    };
    ElectricalItemComponent.prototype.electricalChildList = function () {
        if (this.electricalItem.selectedParentTag) {
            if (this.presetParentTag === this.electricalItem.selectedParentTag) {
                return;
            }
            else {
                for (var i = 0; i < this.project.electricals.length; ++i) {
                    var tempElectricalItem = this.project.electricals[i];
                    for (var j = 0; j < tempElectricalItem.chiildList.length; ++j) {
                        var childElement = tempElectricalItem.chiildList[j];
                        if (childElement._id === this.electricalItem._id) {
                            tempElectricalItem.chiildList.splice(j, 1);
                            this.electricalService
                                .updateElectricalItem(this.projectId, tempElectricalItem._id, tempElectricalItem, this.userGuid)
                                .subscribe(function (res) {
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }
                    if (tempElectricalItem.equipmentTag === this.electricalItem.selectedParentTag) {
                        this.project.electricals[i].chiildList.push(this.electricalItem);
                        var temp = this.project.electricals[i];
                        this.electricalService
                            .updateElectricalItem(this.projectId, tempElectricalItem._id, temp, this.userGuid)
                            .subscribe(function (err) {
                            console.log(err);
                        });
                        return;
                    }
                }
            }
        }
        else {
            return;
        }
    };
    ElectricalItemComponent.prototype.optionChanged = function ($event) {
        this.selectedHazlocZone.reset(null);
        this.selectedHazlocTemperature.reset(null);
        this.selectedHazlocGroup.reset(null);
    };
    ElectricalItemComponent.prototype.typeChanged = function () {
        var _this = this;
        if (!this.electricalItem) {
            return;
        }
        else {
            this.productsAfterChangeEvent = this.electricalItem.voltage
                .filter(function (p) { return p.powerSystemType === _this.electricalItem.selectedPowerSystem; });
        }
    };
    ElectricalItemComponent.prototype.saveElectrical = function (idElectrical, data) {
        var _this = this;
        this.spinnerService.show();
        this.selectedItemVoltage = data.selectedVoltage;
        data.selectedVoltage = {};
        // ata.selectedVoltage.name = this.selectedItemVoltage;
        /*
        if (this.productsAfterChangeEvent.length === 0) {
          console.log('call this');
          data.voltage = this.electricalItem.voltage;
        } else {
          data.voltage = this.changeVoltageArrayObject(this.productsAfterChangeEvent, this.electricalItem.voltage);
        }
    */
        data.dateCreate = this.electricalItem.dateCreate;
        console.log(data.dateCreate);
        debugger;
        data.selectedVoltage.powerSystemType = data.selectedPowerSystem;
        // data.dateCreate = this.date;
        // console.log(data.dateCreate);
        data.equipmentType = this.electricalItem.equipmentType;
        data.selectedEquipmentType = this.electricalItem.selectedEquipmentType;
        data.pidDrawing = this.electricalItem.pidDrawing;
        data.selectedPidDrawing = this.electricalItem.selectedPidDrawing;
        data.layoutDrawing = this.electricalItem.layoutDrawing;
        data.selectedLayoutDrawing = this.electricalItem.selectedLayoutDrawing;
        data.sldDraving = this.electricalItem.sldDraving;
        data.selectedSldDraving = this.electricalItem.selectedSldDraving;
        data.locationArea = this.electricalItem.locationArea;
        data.selectedLocationArea = this.electricalItem.selectedLocationArea;
        data.equipmentDescription = this.electricalItem.equipmentDescription;
        data.selectedEquipmentDescription = this.electricalItem.selectedEquipmentDescription;
        data.hazlocZone = this.electricalItem.hazlocZone;
        data.hazlocTemperature = this.electricalItem.hazlocTemperature;
        //
        data.totalConectedFla = this.electricalItem.totalConectedFla || 0;
        data.totalConectedKW = this.electricalItem.totalConectedKW || 0;
        data.totalConnectedKVAR = this.electricalItem.totalConnectedKVAR || 0;
        data.totalConnectedKVA = this.electricalItem.totalConnectedKVA || 0;
        data.totalDemandFLA = this.electricalItem.totalDemandFLA || 0;
        data.totalDemandKW = this.electricalItem.totalDemandKW || 0;
        data.totalDemandKVAR = this.electricalItem.totalDemandKVAR || 0;
        data.totalDemandKVA = this.electricalItem.totalDemandKVA || 0;
        data.scenarioFirstFLA = this.electricalItem.scenarioFirstFLA || 0;
        data.scenarioFirstKW = this.electricalItem.scenarioFirstKW || 0;
        data.scenarioFirstKVAR = this.electricalItem.scenarioFirstKVAR || 0;
        data.scenarioFirstKVA = this.electricalItem.scenarioFirstKVA || 0;
        //
        this.electricalService.updateElectricalItem(this.projectId, idElectrical, data, this.project.creator).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'electricals']);
        }, function (err) {
            console.log(err);
            _this.spinnerService.hide();
        });
        this.electricalChildList();
    };
    ElectricalItemComponent.prototype.deleteElectrical = function (electricalItemId) {
        var _this = this;
        this.spinnerService.show();
        if (this.electricalItem.chiildList.length >= 1) {
            for (var i = 0; i < this.project.electricals.length; ++i) {
                var temporaryElectricalItem = this.project.electricals[i];
                if (temporaryElectricalItem.selectedParentTag === this.electricalItem.equipmentTag) {
                    temporaryElectricalItem.selectedParentTag = '';
                    this.electricalService
                        .updateElectricalItem(this.projectId, temporaryElectricalItem._id, temporaryElectricalItem, this.userGuid)
                        .subscribe(function (err) {
                        console.log(err);
                    });
                }
            }
        }
        for (var j = 0; j < this.project.electricals.length; ++j) {
            var electricalItemElment = this.project.electricals[j];
            for (var k = 0; k < electricalItemElment.chiildList.length; ++k) {
                var temporalChildElement = electricalItemElment.chiildList[k];
                if (temporalChildElement._id === this.electricalItem._id) {
                    electricalItemElment.chiildList.splice(j, 1);
                    this.electricalService
                        .updateElectricalItem(this.projectId, electricalItemElment._id, electricalItemElment, this.userGuid)
                        .subscribe(function (err) {
                        _this.spinnerService.hide();
                        console.log(err);
                    });
                }
            }
        }
        this.electricalService.deleteElectricalItem(this.projectId, electricalItemId).subscribe(function (res) {
            // this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'electricals']);
        }, function (err) {
            console.log(err);
            _this.spinnerService.hide();
        });
        this.spinnerService.hide();
    };
    ElectricalItemComponent.prototype.changeVoltageArrayObject = function (productsAfterChange, projectData) {
        var arayObjectsAfterFilter = projectData.filter(function (p) { return p.powerSystemType !== productsAfterChange[0].powerSystemType; });
        for (var i = 0; i < productsAfterChange.length; ++i) {
            var itemElement = productsAfterChange[i];
            arayObjectsAfterFilter.push(itemElement);
        }
        return arayObjectsAfterFilter;
    };
    // method for calculate dependencies
    ElectricalItemComponent.prototype.recalculationDependentValues = function () {
        this.electricalItem.totalConectedFla = 0;
        this.electricalItem.totalConectedKW = 0;
        this.electricalItem.totalConnectedKVA = 0;
        this.electricalItem.totalConnectedKVAR = 0;
        this.electricalItem.totalDemandFLA = 0;
        this.electricalItem.totalDemandKW = 0;
        this.electricalItem.totalDemandKVAR = 0;
        this.electricalItem.totalDemandKVA = 0;
        this.electricalItem.scenarioFirstFLA = 0;
        this.electricalItem.scenarioFirstKW = 0;
        this.electricalItem.scenarioFirstKVAR = 0;
        this.electricalItem.scenarioFirstKVA = 0;
        //
        var voltageValue = this.electricalItem.selectedVoltage.name;
        var toSimbol = voltageValue.search(' ');
        var voltageCalcValue = voltageValue.substring(0, toSimbol);
        // tslint:disable-next-line:radix
        var parsingValue = parseInt(voltageCalcValue);
        //
        if (this.electricalItem.selectedPowerSystem === this.electricalItem.powerSystem[0]) {
            if (!this.electricalItem.totalPF) {
                this.electricalItem.totalPF = 0;
            }
            if (!this.electricalItem.totalEFF) {
                this.electricalItem.totalEFF = 0;
            }
            switch (this.electricalItem.selectedUnits) {
                case this.electricalItem.units[0]:// A check+2
                    this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
                    break;
                case this.electricalItem.units[1]:// HP check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0 && this.electricalItem.totalEFF !== 0) {
                        // tslint:disable-next-line:max-line-length
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * 1.73 * this.electricalItem.totalPF * this.electricalItem.totalEFF) * 10000;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[2]:// KW check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0) {
                        // tslint:disable-next-line:max-line-length
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * 1.73 * this.electricalItem.totalPF / 100);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[3]:// KVA check+2
                    if (this.electricalItem.selectedVoltage.name) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * 1.73);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    break;
                default:
                    break;
            }
            var tempTotalConnectedKVA = this.electricalItem.totalConectedFla * parsingValue * 1.73 / 1000;
            this.electricalItem.totalConnectedKVA = Math.ceil(tempTotalConnectedKVA * 100) / 100;
            var tempTotalConectedKW = this.electricalItem.totalConnectedKVA * this.electricalItem.totalPF / 100;
            this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
            if (this.electricalItem.totalConectedKW === 0) {
                this.electricalItem.totalConnectedKVAR = 0;
            }
            else {
                // tslint:disable-next-line:max-line-length
                var tempTotalConnectedKVAR = Math.sqrt(Math.pow(this.electricalItem.totalConnectedKVA, 2) - Math.pow(this.electricalItem.totalConectedKW, 2));
                this.electricalItem.totalConnectedKVAR = Math.ceil(tempTotalConnectedKVAR * 100) / 100;
            }
        }
        else if (this.electricalItem.selectedPowerSystem === this.electricalItem.powerSystem[1]) {
            if (!this.electricalItem.totalPF) {
                this.electricalItem.totalPF = 0;
            }
            if (!this.electricalItem.totalEFF) {
                this.electricalItem.totalEFF = 0;
            }
            switch (this.electricalItem.selectedUnits) {
                case this.electricalItem.units[0]:// A check+2
                    this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
                    break;
                case this.electricalItem.units[1]:// HP check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0 && this.electricalItem.totalEFF !== 0) {
                        // tslint:disable-next-line:max-line-length
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * this.electricalItem.totalPF * this.electricalItem.totalEFF) * 10000;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[2]:// KW check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalPF !== 0) {
                        // tslint:disable-next-line:max-line-length
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue * this.electricalItem.totalPF / 100);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    break;
                case this.electricalItem.units[3]:// KVA check+2
                    if (this.electricalItem.selectedVoltage.name) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / (parsingValue);
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    break;
                default:
                    break;
            }
            var tempTotalConnectedKVA = this.electricalItem.totalConectedFla * parsingValue / 1000;
            this.electricalItem.totalConnectedKVA = Math.ceil(tempTotalConnectedKVA * 100) / 100;
            var tempTotalConectedKW = this.electricalItem.totalConnectedKVA * this.electricalItem.totalPF / 100;
            this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
            // tslint:disable-next-line:max-line-length
            var tempTotalConnectedKVAR = Math.sqrt(Math.pow(this.electricalItem.totalConnectedKVA, 2) - Math.pow(this.electricalItem.totalConectedKW, 2));
            this.electricalItem.totalConnectedKVAR = Math.ceil(tempTotalConnectedKVAR * 100) / 100;
        }
        else if (this.electricalItem.selectedPowerSystem === this.electricalItem.powerSystem[2]) {
            if (!this.electricalItem.totalEFF) {
                this.electricalItem.totalEFF = 0;
            }
            switch (this.electricalItem.selectedUnits) {
                case this.electricalItem.units[0]:// A check+2
                    this.electricalItem.totalConectedFla = parseFloat(this.electricalItem.nameplateRating);
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
                case this.electricalItem.units[1]:// HP check+2
                    if (this.electricalItem.selectedVoltage.name && this.electricalItem.totalEFF !== 0) {
                        // tslint:disable-next-line:max-line-length
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 746) / (parsingValue * this.electricalItem.totalEFF) * 100;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
                case this.electricalItem.units[2]:// KW check+2
                    if (this.electricalItem.selectedVoltage.name) {
                        var temporalTotalConectedFla = (parseFloat(this.electricalItem.nameplateRating) * 1000) / parsingValue;
                        this.electricalItem.totalConectedFla = Math.ceil(temporalTotalConectedFla * 100) / 100;
                    }
                    else {
                        this.electricalItem.totalConectedFla = 0;
                    }
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
                default:
                    this.electricalItem.totalConectedFla = 0;
                    this.electricalItem.totalConectedKW = 0;
                    this.electricalItem.totalConnectedKVA = 0;
                    this.electricalItem.totalConnectedKVAR = 0;
                    break;
            }
            var tempTotalConectedKW = this.electricalItem.totalConectedFla * parsingValue / 1000;
            this.electricalItem.totalConectedKW = Math.ceil(tempTotalConectedKW * 100) / 100;
        }
        var temporalTotalDemandFLA = (this.electricalItem.totalConectedFla * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandFLA = Math.ceil(temporalTotalDemandFLA * 100) / 100;
        var temporalTotalDemandKW = (this.electricalItem.totalConectedKW * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandKW = Math.ceil(temporalTotalDemandKW * 100) / 100;
        var temporalTotalDemandKVAR = (this.electricalItem.totalConnectedKVAR * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandKVAR = Math.ceil(temporalTotalDemandKVAR * 100) / 100;
        var temporalTotalDemandKVA = (this.electricalItem.totalConnectedKVA * this.electricalItem.loadFactor) / 100;
        this.electricalItem.totalDemandKVA = Math.ceil(temporalTotalDemandKVA * 100) / 100;
        var scenarioFirstLoadFactor = parseFloat(this.electricalItem.scenarioFirstLoadFactor);
        var temporalScenarioFirstFLA = (this.electricalItem.totalConectedFla * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstFLA = Math.ceil(temporalScenarioFirstFLA * 100) / 100;
        var temporalScenarioFirstKW = (this.electricalItem.totalConectedKW * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstKW = Math.ceil(temporalScenarioFirstKW * 100) / 100;
        var temporalScenarioFirstKVAR = (this.electricalItem.totalConnectedKVAR * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstKVAR = Math.ceil(temporalScenarioFirstKVAR * 100) / 100;
        var temporalScenarioFirstKVA = (this.electricalItem.totalConnectedKVA * scenarioFirstLoadFactor) / 100;
        this.electricalItem.scenarioFirstKVA = Math.ceil(temporalScenarioFirstKVA * 100) / 100;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('selectedHazlocZone'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocZone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('selectedHazlocTemperature'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocTemperature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('selectedHazlocGroup'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* NgModel */])
    ], ElectricalItemComponent.prototype, "selectedHazlocGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ElectricalItemComponent.prototype, "onResize", null);
    ElectricalItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-electrical-item',
            template: __webpack_require__("../../../../../src/app/components/electrical-item/electrical-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/electrical-item/electrical-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_electrical_service__["a" /* ElectricalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ElectricalItemComponent);
    return ElectricalItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n.table-text-style{\r\n  font-family: Roboto-Bolt!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\nthead th {\r\n  font-size: 0.6rem;\r\n}\r\ntbody tr td  {\r\n  font-size: 0.6rem;\r\n}\r\n.achievements-wrapper {\r\n  height: auto; \r\n  overflow: auto;\r\n}\r\n\r\n.disable-decoration {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.table-cursor {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\" style=\"margin-left: 0px!important; margin-right: 0px!important\">\r\n    <div class=\"col-12\">\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\" style=\"background-color: white!important\">\r\n          <li *ngIf=\"isAdmin\" class=\"breadcrumb-item\">\r\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/superadmin']\">\r\n              <strong>Admin panel</strong>\r\n            </a>\r\n          </li>\r\n          <li *ngIf=\"!isAdmin\" class=\"breadcrumb-item\">\r\n            <a \r\n              class=\"cursor-style disable-decoration text-style\" \r\n              style=\"color: black!important \" \r\n              [routerLink]=\"['/project']\"\r\n            >\r\n              <strong>Projects List</strong>\r\n            </a>\r\n          </li>\r\n          \r\n          <li class=\"breadcrumb-item\">\r\n            <a\r\n              class=\"cursor-style disable-decoration text-style\"\r\n              style=\"color: black!important \"\r\n              [routerLink]=\"['/project', projectId]\"\r\n            >\r\n              <strong>Dashboard for Project {{project?.title}}</strong>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Electricals List</li>\r\n        </ol>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"pt-2 text-center\">\r\n    <h1>\r\n      Electricals List\r\n      <span *ngIf=\"isCanChange\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createNewElectrical()\">\r\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </span>\r\n    </h1>\r\n  </div>\r\n  <div class=\"row achievements-wrapper ml-3 mr-3\">\r\n    <table id=\"exportable\" class=\"table table-sm table-bordered table-hover table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <!--<th></th> -->\r\n          <th>Rev.</th>\r\n          <th>Equipment Tag</th>\r\n          <th>Equipment Description</th>\r\n          <th>Load Type</th>\r\n          <th>System Voltage</th>\r\n          <th>Power System</th>\r\n          <th>Nameplate Rating</th>\r\n          <th>Units</th>\r\n          <th>Total % PF</th>\r\n          <th>Total % EFF</th>\r\n          <th>Motor Sf</th>\r\n          <th>Motor Code</th>\r\n          <th>Load Duty</th>\r\n          <th>Total Connected FLA</th>\r\n          <th>Total Connected KW</th>\r\n          <th>Total Connected KVAR</th>\r\n          <th>Total Connected KVA</th>\r\n          <th>Load Factor %</th>\r\n          <th>Total Demand FLA</th>\r\n          <th>Total Demand KW</th>\r\n          <th>Total Demand KVAR</th>\r\n          <th>Total Demand KVA</th>\r\n          <th>Total Scenario 1 LoadFactor %</th>\r\n          <th>Total Scenario 1 FLA</th>\r\n          <th>Total Scenario 1 KW</th>\r\n          <th>Total Scenario 1 KVAR</th>\r\n          <th>Total Scenario1 KVA</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let electrical of electricals?.electricals\">\r\n          <tr *ngIf=\"!electrical.selectedParentTag\">\r\n            <!--<td></td>-->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.revision || 'N/A'}}</a></td>                 <!-- Rev -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.equipmentTag || 'N/A'}}</a></td>            <!-- Equipment Tag -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{'N/A'}}</a></td>                                        <!-- Equipment Description -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedEquipmentType || 'N/A'}}</a></td>   <!-- Load Type -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedVoltage.name || 'N/A'}}</a></td>    <!-- System Voltage -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedPowerSystem || 'N/A'}}</a></td>     <!-- Power System -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.nameplateRating || 'N/A'}}</a></td>         <!-- Nameplate Rating -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedUnits || 'N/A'}}</a></td>           <!-- Units -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalPF || 'N/A'}}</a></td>                 <!-- Total % PF -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalEFF || 'N/A'}}</a></td>                <!-- Total % EFF -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedMotorSF || 'N/A'}}</a></td>         <!-- Motor Sf -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedMotorCode || 'N/A'}}</a></td>       <!-- Motor Code -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.selectedLoadDuty || 'N/A'}}</a></td>        <!-- Load Duty -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConectedFla || 'N/A'}}</a></td>        <!-- Total Connected FLA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConectedKW || 'N/A'}}</a></td>         <!-- Total Connected KW -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConnectedKVAR || 'N/A'}}</a></td>      <!-- Total Connected KVAR -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalConnectedKVA || 'N/A'}}</a></td>       <!-- Total Connected KVA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.loadFactor || 'N/A'}}</a></td>              <!-- Load Factor % -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandFLA || 'N/A'}}</a></td>          <!-- Total Demand FLA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandKW || 'N/A'}}</a></td>           <!-- Total Demand KW -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandKVAR || 'N/A'}}</a></td>         <!-- Total Demand KVAR -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.totalDemandKVA || 'N/A'}}</a></td>          <!-- Total Demand KVA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstLoadFactor || 'N/A'}}</a></td> <!-- Total Scenario 1 LoadFactor % -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstFLA || 'N/A'}}</a></td>        <!-- Total Scenario 1 FLA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstKW || 'N/A'}}</a></td>         <!-- Total Scenario 1 KW -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstKVAR || 'N/A'}}</a></td>       <!-- Total Scenario 1 KVAR -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electrical._id}}\"><a class=\"table-cursor\">{{electrical?.scenarioFirstKVA || 'N/A'}}</a></td>        <!-- Total Scenario1 KVA -->\r\n            <td>\r\n              <input type=\"checkbox\" [(ngModel)]=\"electrical.isChecked\" (click)=\"puchToElectricalArray(electrical)\">\r\n            </td>\r\n          </tr>\r\n          <tr class=\"childs\" bgcolor=\"#F5F5F5\" *ngFor=\"let electricalChilds of electrical.chiildList\">\r\n            <!--<td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{'N/A'}}</a></td> -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds?.revision || 'N/A'}}</a></td>               <!-- Rev -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds?.equipmentTag || 'N/A'}}</a></td>          <!-- Equipment Tag -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{'N/A'}}</a></td>                                            <!-- Equipment Description -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedEquipmentType || 'N/A'}}</a></td>  <!-- Load Type -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedVoltage.name || 'N/A'}}</a></td>   <!-- System Voltage -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedPowerSystem || 'N/A'}}</a></td>    <!-- Power System -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.nameplateRating || 'N/A'}}</a></td>        <!-- Nameplate Rating -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedUnits || 'N/A'}}</a></td>          <!-- Units -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalPF || 'N/A'}}</a></td>                <!-- Total % PF -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalEFF || 'N/A'}}</a></td>               <!-- Total % EFF -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedMotorSF || 'N/A'}}</a></td>        <!-- Motor Sf -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedMotorCode || 'N/A'}}</a></td>      <!-- Motor Code -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.selectedLoadDuty || 'N/A'}}</a></td>       <!-- Load Duty -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConectedFla || 'N/A'}}</a></td>       <!-- Total Connected FLA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConectedKW || 'N/A'}}</a></td>        <!-- Total Connected KW -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConnectedKVAR || 'N/A'}}</a></td>     <!-- Total Connected KVAR -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalConnectedKVA || 'N/A'}}</a></td>      <!-- Total Connected KVA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.loadFactor || 'N/A'}}</a></td>             <!-- Load Factor % -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandFLA || 'N/A'}}</a></td>         <!-- Total Demand FLA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandKW || 'N/A'}}</a></td>          <!-- Total Demand KW -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandKVAR || 'N/A'}}</a></td>        <!-- Total Demand KVAR -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.totalDemandKVA || 'N/A'}}</a></td>         <!-- Total Demand KVA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstLoadFactor || 'N/A'}}</a></td><!-- Total Scenario 1 LoadFactor % -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstFLA || 'N/A'}}</a></td>       <!-- Total Scenario 1 FLA -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstKW || 'N/A'}}</a></td>        <!-- Total Scenario 1 KW -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstKVAR || 'N/A'}}</a></td>      <!-- Total Scenario 1 KVAR -->\r\n            <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/electricals/{{electricalChilds._id}}\"><a class=\"table-cursor\">{{electricalChilds.scenarioFirstKVA || 'N/A'}}</a></td>       <!-- Total Scenario1 KVA -->\r\n            <td>\r\n              <input type=\"checkbox\" [(ngModel)]=\"electricalChilds.isChecked\" (click)=\"puchToElectricalArray(electricalChilds)\">\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"mt-1 ml-auto mr-3\">\r\n      <div class=\"form-group\">\r\n        <label for=\"isChecked\">Select All</label>\r\n        <input type=\"checkbox\" [(ngModel)]=\"isChecked\" (click)=\"changeFlag(isChecked)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"ml-auto mr-3\">\r\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcell()\">Export Electricals</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"mt-1 ml-auto mr-3\">\r\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcellUIData()\" [disabled]=\"electricalArrayList == 0\">Export Electricals UI Data</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/electrical-list/electrical-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_excel_service__ = __webpack_require__("../../../../../src/app/services/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Electrical__ = __webpack_require__("../../../../../src/app/models/Electrical.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//


var ElectricalListComponent = (function () {
    function ElectricalListComponent(electricalService, excelService, projectServise, router, route, spinnerService) {
        this.electricalService = electricalService;
        this.excelService = excelService;
        this.projectServise = projectServise;
        this.router = router;
        this.route = route;
        this.spinnerService = spinnerService;
        this.electrical = new __WEBPACK_IMPORTED_MODULE_8__models_Electrical__["a" /* Electrical */]();
        this.isChecked = false;
        this.teamWork = true;
        this.isCanChange = false;
        this.isViewOnly = false;
        this.projectId = this.route.snapshot.params['id'];
        this.electricalArrayList = [];
    }
    ElectricalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userEmail = u.email;
            this.userGuid = u.guid;
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.electricalService.getElectricals(this.projectId).subscribe(function (electricalList) {
            /*
            if (electricalList.electricals.length < 1) {
               this.spinnerService.hide();
              return;
             } else {
            */
            _this.projectServise.getCommunityData(_this.projectId).subscribe(function (itemProject) {
                var projectElement = itemProject;
                if (projectElement.creator === _this.userGuid) {
                    _this.isCanChange = true;
                    console.log(_this.isCanChange);
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_9__shared_Availability__["a" /* Availability */].CanUserChange(projectElement.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_9__shared_Availability__["a" /* Availability */].CanUserView(projectElement.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                    console.log(_this.isCanChange);
                }
            });
            /*
            this.projectServise.getProjectById(this.projectId).subscribe(itemProject => {
              this.project = itemProject;
              if (itemProject.creator === this.userGuid) {
                this.isCanChange = true;
              } else {
                const canChange = Availability.CanUserChange(this.project.team_project, this.userGuid);
                const canView = Availability.CanUserView(this.project.brows_team_project, this.userGuid);
                this.isCanChange = canChange || canView || this.isAdmin;
              }
            });
            */
            _this.electricals = electricalList;
            _this.recalculationParentValeu(electricalList);
            _this.spinnerService.hide();
            // }
        }, function (err) {
            console.log(err);
            _this.spinnerService.hide();
            return false;
        });
    };
    ElectricalListComponent.prototype.puchToElectricalArray = function (element) {
        if (!element.isChecked) {
            this.electricalArrayList.push(element._id);
        }
        else {
            this.electricalArrayList.pop();
        }
    };
    /**
     * Method to add all items to the list for export to Excell Electrical UI Data
     * @param isCheck boolean flag
     */
    ElectricalListComponent.prototype.changeFlag = function (isCheck) {
        if (isCheck) {
            this.isChecked = false;
            for (var i = 0; i < this.electricals.electricals.length; ++i) {
                this.electricals.electricals[i].isChecked = false;
                this.electricalArrayList = [];
            }
        }
        else {
            this.isChecked = true;
            for (var i = 0; i < this.electricals.electricals.length; ++i) {
                this.electricals.electricals[i].isChecked = true;
                this.electricalArrayList.push(this.electricals.electricals[i]._id);
            }
        }
    };
    ElectricalListComponent.prototype.saveToExcell = function () {
        var wscols = [
            // A       // B       // C       // D     // E       // F       // G       // H       // I       // J       // K       // L
            // tslint:disable-next-line:max-line-length
            { wch: 5 }, { wch: 16 }, { wch: 12 }, { wch: 7 }, { wch: 10 }, { wch: 13 }, { wch: 14 }, { wch: 14 }, { wch: 25 }, { wch: 12 }, { wch: 12 }, { wch: 10 },
            // M       // N       // O     // P
            { wch: 7 }, { wch: 11 }, { wch: 7 }, { wch: 27 }
        ];
        var ws = __WEBPACK_IMPORTED_MODULE_7_xlsx__["utils"].table_to_book(document.getElementById('exportable')).Sheets.Sheet1;
        ws['!cols'] = wscols;
        var wb = __WEBPACK_IMPORTED_MODULE_7_xlsx__["utils"].book_new();
        __WEBPACK_IMPORTED_MODULE_7_xlsx__["utils"].book_append_sheet(wb, ws, 'Electricals List');
        var wbout = __WEBPACK_IMPORTED_MODULE_7_xlsx__["write"](wb, {
            bookType: 'xlsx',
            type: 'binary',
            cellStyles: true
        });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            // tslint:disable-next-line:curly
            for (var i = 0; i !== s.length; ++i)
                // tslint:disable-next-line:no-bitwise
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        // tslint:disable-next-line:max-line-length
        Object(__WEBPACK_IMPORTED_MODULE_6_file_saver__["saveAs"])(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), 'Report from project electricals ' + Date.now() + '.xlsx');
    };
    ElectricalListComponent.prototype.saveToExcellUIData = function () {
        var projectArray = [];
        var wscols = [
            // A        // B       // C       // D       // E      // F       // G       // H        // I       // J      // K       // L
            // tslint:disable-next-line:max-line-length
            { wch: 13 }, { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 15 }, { wch: 12 }, { wch: 17 }, { wch: 13 }, { wch: 15 }, { wch: 17 }, { wch: 12 }, { wch: 17 },
            // M       // N       // O       // P       // Q       // R       // S       // T       // U       // V       // W       // X
            // tslint:disable-next-line:max-line-length
            { wch: 15 }, { wch: 22 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 25 }, { wch: 20 }, { wch: 15 },
            // Y       // Z       // AA      // AB      // AC      // AD      // AE      // AF      //AG       //AH       //AI       //AJ
            // tslint:disable-next-line:max-line-length
            { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 17 }, { wch: 10 }, { wch: 12 }, { wch: 13 }, { wch: 12 }, { wch: 17 }, { wch: 15 }, { wch: 12 }, { wch: 17 },
            // AK      // AL      // AM      // AN      // AO      // AP      // AQ      // AR
            { wch: 22 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 20 }
        ];
        for (var i = 0; i < this.electricals.electricals.length; ++i) {
            projectArray.push(this.electricals.electricals[i]._id);
        }
        var queryString = 'electrical-item';
        var scheetName = 'Electricals UI List';
        var controllerName = 'Electrical';
        var fileName = 'ELECTRICAL REPORT';
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    ElectricalListComponent.prototype.createNewElectrical = function () {
        var _this = this;
        this.spinnerService.show();
        var tempElectrical = this.electrical;
        // console.log(tempElectrical);
        // tempElectrical.isChecked = true;
        // this.electrical = {};
        this.electricalService.createElectrical(this.projectId, tempElectrical, this.userGuid).subscribe(function (electricalList) {
            var electricalLength = electricalList.electricals.length;
            var lastElectrical = electricalLength - 1;
            var responseId = electricalList.electricals[lastElectrical]['_id'];
            var routeToElectricalItem = '/project/' + _this.route.snapshot.params['id'] + '/electricals/' + responseId;
            _this.spinnerService.hide();
            _this.router.navigate([routeToElectricalItem]);
        }, function (err) {
            console.error(err);
        });
    };
    ElectricalListComponent.prototype.recalculationParentValeu = function (projects) {
        for (var i = 0; i < projects.electricals.length; ++i) {
            var electricalItem = projects.electricals[i];
            if (electricalItem.chiildList.length > 0) {
                electricalItem.totalPF = 0;
                electricalItem.totalEFF = 0;
                electricalItem.loadFactor = 0;
                electricalItem.scenarioFirstLoadFactor = 0;
                electricalItem.totalConnectedKVAR = 0;
                electricalItem.totalConnectedKVA = 0;
                electricalItem.totalDemandFLA = 0;
                electricalItem.totalDemandKW = 0;
                electricalItem.totalDemandKVAR = 0;
                electricalItem.totalDemandKVA = 0;
                electricalItem.scenarioFirstFLA = 0;
                electricalItem.scenarioFirstKW = 0;
                electricalItem.scenarioFirstKVAR = 0;
                electricalItem.scenarioFirstKVA = 0;
                for (var j = 0; j < electricalItem.chiildList.length; ++j) {
                    var childElement = electricalItem.chiildList[j];
                    electricalItem.totalConectedFla += childElement.totalConectedFla;
                    electricalItem.totalConectedKW += childElement.totalConectedKW;
                    electricalItem.totalConnectedKVAR += childElement.totalConnectedKVAR;
                    electricalItem.totalConnectedKVA += childElement.totalConnectedKVA;
                    //
                    electricalItem.totalPF += childElement.totalPF;
                    electricalItem.totalEFF += childElement.totalEFF;
                    electricalItem.loadFactor += childElement.loadFactor;
                    //
                    electricalItem.totalDemandFLA += childElement.totalDemandFLA;
                    electricalItem.totalDemandKW += childElement.totalDemandKW;
                    electricalItem.totalDemandKVAR += childElement.totalDemandKVAR;
                    electricalItem.totalDemandKVA += childElement.totalDemandKVA;
                    //
                    electricalItem.scenarioFirstLoadFactor += childElement.scenarioFirstLoadFactor;
                    //
                    electricalItem.scenarioFirstFLA += childElement.scenarioFirstFLA;
                    electricalItem.scenarioFirstKW += childElement.scenarioFirstKW;
                    electricalItem.scenarioFirstKVAR += childElement.scenarioFirstKVAR;
                    electricalItem.scenarioFirstKVA += childElement.scenarioFirstKVA;
                }
                electricalItem.totalConectedFla = Math.ceil(electricalItem.totalConectedFla * 100) / 100;
                electricalItem.totalConectedKW = Math.ceil(electricalItem.totalConectedKW * 100) / 100;
                electricalItem.totalConnectedKVAR = Math.ceil(electricalItem.totalConnectedKVAR * 100) / 100;
                electricalItem.totalConnectedKVA = Math.ceil(electricalItem.totalConnectedKVA * 100) / 100;
                electricalItem.totalDemandKW = Math.ceil(electricalItem.totalDemandKW * 100) / 100;
                electricalItem.totalDemandFLA = Math.ceil(electricalItem.totalDemandFLA * 100) / 100;
                electricalItem.totalDemandKVAR = Math.ceil(electricalItem.totalDemandKVAR * 100) / 100;
                electricalItem.totalDemandKVA = Math.ceil(electricalItem.totalDemandKVA * 100) / 100;
                electricalItem.scenarioFirstFLA = Math.ceil(electricalItem.scenarioFirstFLA * 100) / 100;
                electricalItem.scenarioFirstKW = Math.ceil(electricalItem.scenarioFirstKW * 100) / 100;
                electricalItem.scenarioFirstKVAR = Math.ceil(electricalItem.scenarioFirstKVAR * 100) / 100;
                electricalItem.scenarioFirstKVA = Math.ceil(electricalItem.scenarioFirstKVA * 100) / 100;
                electricalItem.totalPF = Math.ceil((electricalItem.totalPF / electricalItem.chiildList.length) * 100) / 100;
                electricalItem.totalEFF = Math.ceil((electricalItem.totalEFF / electricalItem.chiildList.length) * 100) / 100;
                electricalItem.loadFactor = Math.ceil((electricalItem.loadFactor / electricalItem.chiildList.length) * 100) / 100;
                // electricalItem.selectedMotorSF
                // tslint:disable-next-line:max-line-length
                electricalItem.scenarioFirstLoadFactor = Math.ceil((electricalItem.scenarioFirstLoadFactor / electricalItem.chiildList.length) * 100) / 100;
            }
        }
    };
    ElectricalListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-electrical-list',
            template: __webpack_require__("../../../../../src/app/components/electrical-list/electrical-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/electrical-list/electrical-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_electrical_service__["a" /* ElectricalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_excel_service__["a" /* ExcelService */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ElectricalListComponent);
    return ElectricalListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  span.home-page-text {\r\n    font-size: 13px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    font-size: 12px;\r\n    line-height: 10px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 2px;\r\n    width: 30px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -15px;\r\n  }\r\n  li.active {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n  li {\r\n    height: 5px;\r\n    width: 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767px) {\r\n  span.home-page-text {\r\n    font-size: 13px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    font-size: 22px;\r\n    line-height: 20px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 3px;\r\n    width: 40px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .carousel-caption-header-text{\r\n    font-size: 34px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 3px;\r\n    width: 60px;\r\n  }\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .carousel-caption-header-text{\r\n    font-size: 44px;\r\n  }\r\n  .custom-carousel-caption hr {\r\n    height: 4px;\r\n    width: 80px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1199px) {\r\n  span.home-page-text {\r\n    font-size: 14px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  span.home-page-text {\r\n    font-size: 20px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    font-size: 54px;\r\n  }\r\n\r\n  .custom-carousel-caption hr {\r\n    height: 5px;\r\n    width: 100px;\r\n  }\r\n  li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n  li {\r\n    height: 10px;\r\n    width: 10px;\r\n  }\r\n}\r\n\r\nspan.home-page-text {\r\n  font-family: Roboto-Light;\r\n  color: #4c4c4c;\r\n  text-align: justify;\r\n}\r\n\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\n\r\n.home-page-black-line{\r\n  margin-top: 25px; \r\n  background-color: black; \r\n  width: 97%; \r\n  height: 2px; \r\n  position: absolute;\r\n}\r\n\r\nspan.affiliations-text{\r\n  background-color: white; \r\n  padding-left: 5px; \r\n  padding-right: 5px; \r\n  z-index: 2;\r\n}\r\n\r\n.custom-carousel-caption{\r\n  right: 60%!important;\r\n  left: 10%!important;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  height: 100%;\r\n  bottom: 0px!important;\r\n}\r\n\r\n.carousel-caption-header-text{\r\n  color: rgba(255, 255, 255, 1);\r\n  font-weight: bold;\r\n  font-family: Roboto-Bolt;\r\n}\r\n\r\n.custom-carousel-caption hr {\r\n  background: #ffb248;\r\n  text-align: end;\r\n  border: 0;\r\n}\r\n\r\n.carousel-text-container {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.description-carousel-caption{\r\n  text-align: justify;\r\n  font-size: 1vw;\r\n}\r\nli.active {\r\n  background-color: #FFB248!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\nli {\r\n  margin: 5px!important;\r\n  background-color: white!important;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n.carousel-indicators-position {\r\n  right: 50%!important;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n.h-100{\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators carousel-indicators-position\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"engenieeringOptimization_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"engenieeringOptimization_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"engenieeringOptimization_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"engenieeringOptimization_768\">\n          <source [srcset]=\"engenieeringOptimization_576\">\n          <img class=\"d-block img-fluid\" [src]=\"engenieeringOptimization_1920\" alt=\"Engenieering Optimization\" sr-only=\"Engenieering Optimization\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <div class=\"mb-auto mt-auto\">\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Engineering</strong></p>\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Optimization</strong></p>\n            </div>\n            <hr class=\"ml-4 mb-auto mt-auto\">\n            <p class=\"pl-4 pr-2 mb-auto mt-auto description-carousel-caption\">Through our AMP X CORE technology and practical project delivery methods that enable thoughtful engineering, we help customers improve their bottom lines.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"trusted_Experts_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"trusted_Experts_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"trusted_Experts_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"trusted_Experts_768\">\n          <source [srcset]=\"trusted_Experts_576\">\n          <img class=\"d-block img-fluid\" [src]=\"trusted_Experts_1920\" alt=\"Lifecycle Solutions\" sr-only=\"Lifecycle Solutions\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption\">\n            <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n              <div class=\"mb-auto mt-auto\">\n                <p class=\"carousel-caption-header-text pl-4\"><strong>Lifecycle</strong></p>\n                <p class=\"carousel-caption-header-text pl-4\"><strong>Solutions</strong></p>\n              </div>\n              <hr class=\"ml-4 mb-auto mt-auto\">\n              <p class=\"pl-4 pr-2 mb-auto mt-auto description-carousel-caption\">Our comprehensive design packages and data solutions support other project stakeholders, operations, future projects and long-term asset management.</p>\n            </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"lifecycle_Solutionos_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"lifecycle_Solutionos_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"lifecycle_Solutionos_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"lifecycle_Solutionos_768\">\n          <source [srcset]=\"lifecycle_Solutionos_576\">\n          <img class=\"d-block img-fluid\" [src]=\"lifecycle_Solutionos_1920\" alt=\"Trusted Experts\" sr-only=\"Trusted Experts\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <div class=\"mb-auto mt-auto\">\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Trusted</strong></p>\n              <p class=\"carousel-caption-header-text pl-4\"><strong>Experts</strong></p>\n            </div>\n            <hr class=\"ml-4 mb-auto mt-auto\">\n            <p class=\"pl-4 pr-2 mb-auto mt-auto description-carousel-caption\">Our foundation includes subject matter expertise in engineering, regulations and codes, construction and inspection.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"container\">\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        <strong>AMP X Consulting Inc.</strong> (AMP X) is a company that’s <strong>20 years</strong> in the making. With multiple decades of experience and \n        lessons-learned acquired from the completion of more than 100 electrical, instrumentation and controls (E, I and C) \n        projects, we have developed a solution we feel can truly help our customers deliver their projects better. Through our \n        AMP X CORE technology and practical project delivery methods that enable thoughtful engineering, we help customers \n        improve their bottom lines.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        Using our AMP X CORE technology, paired with subject matter expertise that spans engineering, inspection and hands-on construction, \n        we go beyond end-to-end E, I and C services. The AMP X CORE technology is a powerful combination that includes a proprietary database \n        and design tools that are easy to use, inexpensive for our customers and promote the highest safety and quality.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n      An important feature of our project delivery model is that we are able to leave customers with not only a complete set of deliverables, \n      but also a comprehensive data package to support other project stakeholders, operations, future projects and long-term asset management… \n      <strong>For no additional cost.</strong>\n      </span>\n    </div>\n    <div class=\"d-flex mt-3\">\n      <span class=\"home-page-text\">\n        Customers who can benefit from our solutions include end-users such as oil & gas companies, as well as equipment vendors, other engineering service \n        providers and construction contractors.\n      </span>\n    </div>\n    <div class=\"d-flex mt-3 mb-3\">\n      <span class=\"home-page-text\">\n        Please refer to the <a class=\"text-warning\" routerLink=\"/about_us\">‘About Us’</a> page for more information, or <a class=\"text-warning\" routerLink=\"/contact_us\">contact us</a> directly.\n      </span>\n    </div>\n    <div class=\"d-flex justify-content-center position-relative\">\n      <div class=\"home-page-black-line\"></div>\n      <span class=\"h1 affiliations-text\">Affiliations</span>\n    </div>\n    <div class=\"d-flex justify-content-between align-items-center mt-3 mb-3\">\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.apega.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"apegaImg\" alt=\"apega\" sr-only=\"Association of Professional Engineers and Geoscientists of Alberta\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.aset.ab.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"asetImg\" alt=\"aset\" sr-only=\"The Association of Science & Engineering Technology Professionals of Alberta\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.safetycodes.ab.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"ccImg\" alt=\"sc\" sr-only=\"Safety Codes\">\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.ecaa.ab.ca\">\n        <img class=\"d-block img-fluid\" [src]=\"ecaaImg\" alt=\"ecaa\" sr-only=\"Electrical Contractors Association of Alberta\">\n      </a>\n    </div>\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n      <div class=\"d-flex align-items-center justify-content-around h-100\">\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n            <div class=\"col-8\">\n              <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n            <div class=\"col-8\">\n              <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-3\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n            <div class=\"col-9\">\n              <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n            <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\" >1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\" >info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
        this.sizeWindow = window.innerWidth;
    }
    HomeComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        this.year = this.today.getFullYear();
        // carousel images 1920
        this.engenieeringOptimization_1920 = 'assets/img/1920/home/Engenieering_Optimization_1920.jpg';
        this.trusted_Experts_1920 = 'assets/img/1920/home/Trusted_Experts_1920.jpg';
        this.lifecycle_Solutionos_1920 = 'assets/img/1920/home/Lifecycle_Solutionos_1920.jpg';
        // carousel images 1200
        this.engenieeringOptimization_1200 = 'assets/img/1200/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_1200 = 'assets/img/1200/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_1200 = 'assets/img/1200/home/Lifecycle_Solutionos.jpg';
        // carousel images 992
        this.engenieeringOptimization_992 = 'assets/img/992/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_992 = 'assets/img/992/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_992 = 'assets/img/992/home/Lifecycle_Solutionos.jpg';
        // carousel images 768
        this.engenieeringOptimization_768 = 'assets/img/768/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_768 = 'assets/img/768/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_768 = 'assets/img/768/home/Lifecycle_Solutionos.jpg';
        // carousel images 576
        this.engenieeringOptimization_576 = 'assets/img/576/home/Engenieering_Optimization.jpg';
        this.trusted_Experts_576 = 'assets/img/576/home/Trusted_Experts.jpg';
        this.lifecycle_Solutionos_576 = 'assets/img/576/home/Lifecycle_Solutionos.jpg';
        this.apegaImg = 'assets/img/1920/home/LogoLinks/apega.png';
        this.asetImg = 'assets/img/1920/home/LogoLinks/aset.png';
        this.ccImg = 'assets/img/1920/home/LogoLinks/cc.png';
        this.ecaaImg = 'assets/img/1920/home/LogoLinks/ecaa.png';
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/instrumentation-item/instrumentation-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  \r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  \r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n    \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n    \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n    \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }\r\n  \r\n  .cableTag {\r\n    padding-right: 5px!important;\r\n    padding-left: 5px!important;\r\n  }\r\n  \r\n  .customContainer {\r\n    padding-right: 5px!important;\r\n    padding-left: 5px!important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/instrumentation-item/instrumentation-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mr-3\" *ngIf=\"instrumentationItem\">\n  <div class=\"d-flex justify-content-center pt-3\">\n    <h1>Instrumentation Tag <strong>{{instrumentationItem?.instrumentationTag || 'New Instrumentation' }}</strong></h1>\n  </div>\n  <form (ngSubmit)=\"saveInstrumentation(instrumentationItem._id, instrumentationForm.value)\" #instrumentationForm=\"ngForm\">\n    <div class=\"row\"> \n      <div class=\"col-12\">\n        <p class=\"h4 text-center\">Instrumentation Item</p>\n        <hr>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6 col-xl-6 align-self-start\">\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"itemNumber\">Item</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.itemNumber\" name=\"itemNumber\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"instrumentationTag\">Instrumentation Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.instrumentationTag\" name=\"instrumentationTag\" placeholder=\"New Instrumentation\">\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <label>Instrument Hazloc Rating</label>\n                <div class=\"d-flex justify-content-center pt-3\">\n                  <p style=\"margin-top: -2px!important\"><strong>Class 1 Zone 0 Group IIA T1 415C </strong></p>\n                </div>\n              </div>\n              <div class=\"col-12 align-self-end\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-lg-6\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocClass\">Hazloc Class</label>\n                      <select\n                        [disabled]=\"instrumentationItem.hazlocClass.length == 0\"\n                        id=\"selectedHazlocClass\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"instrumentationItem.selectedHazlocClass\"\n                        (ngModelChange)=\"optionChanged($event)\"\n                        name=\"selectedHazlocClass\"\n                      >\n                        <option\n                          *ngFor=\"let currentHazlocClass of instrumentationItem.hazlocClass\" \n                          [ngValue]=\"currentHazlocClass\"\n                          [selected]=\"currentHazlocClass==instrumentationItem.selectedHazlocClass\">\n                            {{currentHazlocClass}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-lg-6\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocZone\">Hazloc Zone</label>\n                      <div class=\"d-flex flex-row\">\n                        <select\n                        [disabled]=\"instrumentationItem.selectedHazlocClass == instrumentationItem.hazlocClass[0] || !instrumentationItem.selectedHazlocClass\"\n                          id=\"selectedHazlocZone\"\n                          class=\"form-control selectForOpenModal\"\n                          [(ngModel)]=\"instrumentationItem.selectedHazlocZone\"\n                          #selectedHazlocZone=\"ngModel\"\n                          name=\"selectedHazlocZone\"\n                        >\n                          <option\n                            *ngFor=\"let currentHazlocZone of instrumentationItem.hazlocZone\" \n                            [ngValue]=\"currentHazlocZone\"\n                            [selected]=\"currentHazlocZone==instrumentationItem.selectedHazlocZone\">\n                              {{currentHazlocZone}}\n                          </option>\n                        </select>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Add new item\"\n                          [disabled]=\"!instrumentationItem.selectedHazlocClass || instrumentationItem.selectedHazlocClass == 'General'\"\n                          (click)=\"hazlocZoneModal.showAddModal()\"\n                        ></button>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Drop selected item\"\n                          (click)=\"hazlocZoneModal.showDropModal(dropElementFlag)\"\n                          [disabled]=\"instrumentationItem.hazlocZone.length == 0 || !instrumentationItem.selectedHazlocClass || instrumentationItem.selectedHazlocClass == 'General'\"\n                        ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 align-self-end\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-lg-6\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocGroup\">Hazloc Group</label>\n                      <select\n                        [disabled]=\"instrumentationItem.selectedHazlocClass == instrumentationItem.hazlocClass[0] || !instrumentationItem.selectedHazlocClass\"\n                        id=\"selectedHazlocGroup\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"instrumentationItem.selectedHazlocGroup\"\n                        #selectedHazlocGroup=\"ngModel\"\n                        name=\"selectedHazlocGroup\"\n                      >\n                        <option\n                          *ngFor=\"let currentHazlocGroup of instrumentationItem.hazlocGroup\" \n                          [ngValue]=\"currentHazlocGroup\"\n                          [selected]=\"currentHazlocGroup==instrumentationItem.selectedHazlocGroup\">\n                            {{currentHazlocGroup}}\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-lg-6\">\n                    <div class=\"form-group\">\n                      <label for=\"selectedHazlocTemperature\">Hazloc Temperature</label>\n                      <div class=\"d-flex flex-row\">\n                        <select\n                        [disabled]=\"instrumentationItem.selectedHazlocClass == instrumentationItem.hazlocClass[0] || !instrumentationItem.selectedHazlocClass\"\n                          id=\"selectedHazlocTemperature\"\n                          class=\"form-control selectForOpenModal\"\n                          [(ngModel)]=\"instrumentationItem.selectedHazlocTemperature\"\n                          #selectedHazlocTemperature=\"ngModel\"\n                          name=\"selectedHazlocTemperature\"\n                        >\n                          <option\n                            *ngFor=\"let currentHazlocTemperature of instrumentationItem.hazlocTemperature\" \n                            [ngValue]=\"currentHazlocTemperature\"\n                            [selected]=\"currentHazlocTemperature==instrumentationItem.selectedHazlocTemperature\">\n                              {{currentHazlocTemperature}}\n                          </option>\n                        </select>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Add new item\"\n                          [disabled]=\"!instrumentationItem.selectedHazlocClass || instrumentationItem.selectedHazlocClass == 'General'\"\n                          (click)=\"hazlocTemperatureModal.showAddModal()\"\n                        ></button>\n                        <button\n                          type=\"button\"\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                          data-toggle=\"tooltip\"\n                          data-placement=\"top\"\n                          title=\"Drop selected item\"\n                          (click)=\"hazlocTemperatureModal.showDropModal(dropElementFlag)\"\n                          [disabled]=\"instrumentationItem.hazlocTemperature.length == 0 || !instrumentationItem.selectedHazlocClass || instrumentationItem.selectedHazlocClass == 'General'\"\n                        ></button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedPidNumber\">Pid Number</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.pidNumber.length == 0\"\n                      id=\"selectedPidNumber\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedPidNumber\"\n                      name=\"selectedPidNumber\"\n                    >\n                      <option\n                        *ngFor=\"let currentPidNumber of instrumentationItem.pidNumber\" \n                        [ngValue]=\"currentPidNumber\"\n                        [selected]=\"currentPidNumber==instrumentationItem.selectedPidNumber\">\n                          {{currentPidNumber}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"pidNumberModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"pidNumberModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.pidNumber.length == 0\"\n                    ></button>\n                  </div>\n                </div>  \n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedServiceDescription\">Service Description</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.serviceDescription.length == 0\"\n                      id=\"selectedServiceDescription\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedServiceDescription\"\n                      name=\"selectedServiceDescription\"\n                    >\n                      <option\n                        *ngFor=\"let currentServiceDescription of instrumentationItem.serviceDescription\" \n                        [ngValue]=\"currentServiceDescription\"\n                        [selected]=\"currentServiceDescription==instrumentationItem.selectedServiceDescription\">\n                          {{currentServiceDescription}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"serviceDescriptionModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"serviceDescriptionModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.serviceDescription.length == 0\"\n                    ></button>\n                  </div>\n                </div>  \n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedLineEquipmentNumber\">Line Equipment Number</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.lineEquipmentNumber.length == 0\"\n                      id=\"selectedLineEquipmentNumber\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedLineEquipmentNumber\"\n                      name=\"selectedLineEquipmentNumber\"\n                    >\n                      <option\n                        *ngFor=\"let currentLineEquipmentNumber of instrumentationItem.lineEquipmentNumber\" \n                        [ngValue]=\"currentLineEquipmentNumber\"\n                        [selected]=\"currentLineEquipmentNumber==instrumentationItem.selectedLineEquipmentNumber\">\n                          {{currentLineEquipmentNumber}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"lineEquipmentNumberModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"lineEquipmentNumberModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.lineEquipmentNumber.length == 0\"\n                    ></button>\n                  </div>\n                </div>  \n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedFirstInstrumentType\">Instrument Type 1</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.firstInstrumentType.length == 0\"\n                      id=\"selectedFirstInstrumentType\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedFirstInstrumentType\"\n                      name=\"selectedFirstInstrumentType\"\n                    >\n                      <option\n                        *ngFor=\"let currentFirstInstrumentTypeModal of instrumentationItem.firstInstrumentType\" \n                        [ngValue]=\"currentFirstInstrumentTypeModal\"\n                        [selected]=\"currentFirstInstrumentTypeModal==instrumentationItem.selectedFirstInstrumentType\">\n                          {{currentFirstInstrumentTypeModal}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"firstInstrumentTypeModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"firstInstrumentTypeModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.firstInstrumentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>  \n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedManufacturer\">Manufacturer</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.manufacturer.length == 0\"\n                      id=\"selectedManufacturer\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedManufacturer\"\n                      name=\"selectedManufacturer\"\n                    >\n                      <option\n                        *ngFor=\"let currentManufacturer of instrumentationItem.manufacturer\" \n                        [ngValue]=\"currentManufacturer\"\n                        [selected]=\"currentManufacturer==instrumentationItem.selectedManufacturer\">\n                          {{currentManufacturer}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"manufacturerModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"manufacturerModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.manufacturer.length == 0\"\n                    ></button>\n                  </div>\n                </div>  \n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedModelNumber\">Model Number</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.modelNumber.length == 0\"\n                      id=\"selectedModelNumber\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedModelNumber\"\n                      name=\"selectedModelNumber\"\n                    >\n                      <option\n                        *ngFor=\"let currentModelNumber of instrumentationItem.modelNumber\" \n                        [ngValue]=\"currentModelNumber\"\n                        [selected]=\"currentModelNumber==instrumentationItem.selectedModelNumber\">\n                          {{currentModelNumber}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"modelNumberModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"modelNumberModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.modelNumber.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedDataSheetNumber\">Data Sheet Number</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.dataSheetNumber.length == 0\"\n                      id=\"selectedDataSheetNumber\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedDataSheetNumber\"\n                      name=\"selectedDataSheetNumber\"\n                    >\n                      <option\n                        *ngFor=\"let currentDataSheetNumber of instrumentationItem.dataSheetNumber\" \n                        [ngValue]=\"currentDataSheetNumber\"\n                        [selected]=\"currentDataSheetNumber==instrumentationItem.selectedDataSheetNumber\">\n                          {{currentDataSheetNumber}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"dataSheetNumberModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"dataSheetNumberModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.dataSheetNumber.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedMrPoNumber\">MR/PO Number</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.mrPoNumber.length == 0\"\n                      id=\"selectedMrPoNumber\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedMrPoNumber\"\n                      name=\"selectedMrPoNumber\"\n                    >\n                      <option\n                        *ngFor=\"let currentMrPoNumber of instrumentationItem.mrPoNumber\" \n                        [ngValue]=\"currentMrPoNumber\"\n                        [selected]=\"currentMrPoNumber==instrumentationItem.selectedMrPoNumber\">\n                          {{currentMrPoNumber}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"mrPoNumberModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"mrPoNumberModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.mrPoNumber.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedInstallationDetail\">Installation Detail</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.installationDetail.length == 0\"\n                      id=\"selectedInstallationDetail\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedInstallationDetail\"\n                      name=\"selectedInstallationDetail\"\n                    >\n                      <option\n                        *ngFor=\"let currentInstallationDetail of instrumentationItem.installationDetail\" \n                        [ngValue]=\"currentInstallationDetail\"\n                        [selected]=\"currentInstallationDetail==instrumentationItem.selectedInstallationDetail\">\n                          {{currentInstallationDetail}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"installationDetailModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"installationDetailModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.installationDetail.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedWiringDrawing\">Wiring Drawing</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.wiringDrawing.length == 0\"\n                      id=\"selectedWiringDrawing\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedWiringDrawing\"\n                      name=\"selectedWiringDrawing\"\n                    >\n                      <option\n                        *ngFor=\"let currentWiringDrawing of instrumentationItem.wiringDrawing\" \n                        [ngValue]=\"currentWiringDrawing\"\n                        [selected]=\"currentWiringDrawing==instrumentationItem.selectedWiringDrawing\">\n                          {{currentWiringDrawing}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"wiringDrawingModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"wiringDrawingModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.wiringDrawing.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedLocation\">Location</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.location.length == 0\"\n                      id=\"selectedLocation\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedLocation\"\n                      name=\"selectedLocation\"\n                    >\n                      <option\n                        *ngFor=\"let currentLocation of instrumentationItem.location\" \n                        [ngValue]=\"currentLocation\"\n                        [selected]=\"currentLocation==instrumentationItem.selectedLocation\">\n                          {{currentLocation}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"locationModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"locationModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.location.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedSystem\">System</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.system.length == 0\"\n                      id=\"selectedSystem\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedSystem\"\n                      name=\"selectedSystem\"\n                    >\n                      <option\n                        *ngFor=\"let currentSystem of instrumentationItem.system\" \n                        [ngValue]=\"currentSystem\"\n                        [selected]=\"currentSystem==instrumentationItem.selectedSystem\">\n                          {{currentSystem}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"systemModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"systemModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.system.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedSecondInstrumentType\">Instrument Type 2</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.secondInstrumentType.length == 0\"\n                      id=\"selectedSecondInstrumentType\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedSecondInstrumentType\"\n                      name=\"selectedSecondInstrumentType\"\n                    >\n                      <option\n                        *ngFor=\"let currentSecondInstrumentType of instrumentationItem.secondInstrumentType\" \n                        [ngValue]=\"currentSecondInstrumentType\"\n                        [selected]=\"currentSecondInstrumentType==instrumentationItem.selectedSecondInstrumentType\">\n                          {{currentSecondInstrumentType}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"secondInstrumentTypeModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"secondInstrumentTypeModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.secondInstrumentType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6 col-xl-6 align-self-start\">\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedStatus\">Status</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.status.length == 0\"\n                      id=\"selectedStatus\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedStatus\"\n                      name=\"selectedStatus\"\n                    >\n                      <option\n                        *ngFor=\"let currentStatus of instrumentationItem.status\" \n                        [ngValue]=\"currentStatus\"\n                        [selected]=\"currentStatus==instrumentationItem.selectedStatus\">\n                          {{currentStatus}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"statusModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"statusModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.status.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedVendor\">Vendor</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.vendor.length == 0\"\n                      id=\"selectedVendor\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedVendor\"\n                      name=\"selectedVendor\"\n                    >\n                      <option\n                        *ngFor=\"let currentVendor of instrumentationItem.vendor\" \n                        [ngValue]=\"currentVendor\"\n                        [selected]=\"currentVendor==instrumentationItem.selectedVendor\">\n                          {{currentVendor}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"vendorModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"vendorModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.vendor.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"cost\">Cost</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.cost\" name=\"cost\">\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedSuppliedBy\">Supplied By</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.suppliedBy.length == 0\"\n                      id=\"selectedSuppliedBy\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedSuppliedBy\"\n                      name=\"selectedSuppliedBy\"\n                    >\n                      <option\n                        *ngFor=\"let currentSuppliedBy of instrumentationItem.suppliedBy\" \n                        [ngValue]=\"currentSuppliedBy\"\n                        [selected]=\"currentSuppliedBy==instrumentationItem.selectedSuppliedBy\">\n                          {{currentSuppliedBy}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"suppliedByModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"suppliedByModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.suppliedBy.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedInstalledBy\">Installed By</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.installedBy.length == 0\"\n                      id=\"selectedInstalledBy\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedInstalledBy\"\n                      name=\"selectedInstalledBy\"\n                    >\n                      <option\n                        *ngFor=\"let currentInstalledBy of instrumentationItem.installedBy\" \n                        [ngValue]=\"currentInstalledBy\"\n                        [selected]=\"currentInstalledBy==instrumentationItem.selectedInstalledBy\">\n                          {{currentInstalledBy}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"installedByModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"installedByModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.installedBy.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedSignalLevel\">Signal Level</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.signalLevel.length == 0\"\n                      id=\"selectedSignalLevel\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedSignalLevel\"\n                      name=\"selectedSignalLevel\"\n                    >\n                      <option\n                        *ngFor=\"let currentSignalLevel of instrumentationItem.signalLevel\" \n                        [ngValue]=\"currentSignalLevel\"\n                        [selected]=\"currentSignalLevel==instrumentationItem.selectedSignalLevel\">\n                          {{currentSignalLevel}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"signalLevelModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"signalLevelModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.signalLevel.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedIOType\">I/O Type</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.ioType.length == 0\"\n                      id=\"selectedIOType\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedIOType\"\n                      name=\"selectedIOType\"\n                    >\n                      <option\n                        *ngFor=\"let currentIOType of instrumentationItem.ioType\" \n                        [ngValue]=\"currentIOType\"\n                        [selected]=\"currentIOType==instrumentationItem.selectedIOType\">\n                          {{currentIOType}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"ioTypeModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"ioTypeModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.ioType.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"dateInstrumentAdded\">Date Instrument Added</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"dateInstrumentAdded\" name=\"dateInstrumentAdded\" disabled>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"cloneTag\">Clone Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.cloneTag\" name=\"cloneTag\" disabled>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"coordForX\">X</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.coordForX\" name=\"coordForX\">\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"coordForY\">Y</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.coordForY\" name=\"coordForY\">\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"coordForZ\">Z</label>\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.coordForZ\" name=\"coordForZ\">\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedPowerSupply\">Power Supply</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.powerSupply.length == 0\"\n                      id=\"selectedPowerSupply\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedPowerSupply\"\n                      name=\"selectedPowerSupply\"\n                    >\n                      <option\n                        *ngFor=\"let currentPowerSupply of instrumentationItem.powerSupply\" \n                        [ngValue]=\"currentPowerSupply\"\n                        [selected]=\"currentPowerSupply==instrumentationItem.selectedPowerSupply\">\n                          {{currentPowerSupply}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"powerSupplyModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"powerSupplyModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.powerSupply.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedInstrumentFunction\">Instrument Function</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.instrumentFunction.length == 0\"\n                      id=\"selectedInstrumentFunction\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedInstrumentFunction\"\n                      name=\"selectedInstrumentFunction\"\n                    >\n                      <option\n                        *ngFor=\"let currentInstrumentFunction of instrumentationItem.instrumentFunction\" \n                        [ngValue]=\"currentInstrumentFunction\"\n                        [selected]=\"currentInstrumentFunction==instrumentationItem.selectedInstrumentFunction\">\n                          {{currentInstrumentFunction}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"instrumentFunctionModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"instrumentFunctionModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.instrumentFunction.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"instrumentationNotes\">Instrumentation Notes</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.instrumentationNotes\" name=\"instrumentationNotes\">\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"internalNotes\">Internal Notes</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.internalNotes\" name=\"internalNotes\">\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"selectedInstrumentDescription\">Instrument Description</label>\n                  <div class=\"d-flex flex-row\">\n                    <select\n                      [disabled]=\"instrumentationItem.instrumentDescription.length == 0\"\n                      id=\"selectedInstrumentDescription\"\n                      class=\"form-control selectForOpenModal\"\n                      [(ngModel)]=\"instrumentationItem.selectedInstrumentDescription\"\n                      name=\"selectedInstrumentDescription\"\n                    >\n                      <option\n                        *ngFor=\"let currentInstrumentDescription of instrumentationItem.instrumentDescription\" \n                        [ngValue]=\"currentInstrumentDescription\"\n                        [selected]=\"currentInstrumentDescription==instrumentationItem.selectedInstrumentDescription\">\n                          {{currentInstrumentDescription}}\n                      </option>\n                    </select>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Add new item\"\n                      (click)=\"instrumentDescriptionModal.showAddModal()\"\n                    ></button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\n                      data-toggle=\"tooltip\"\n                      data-placement=\"top\"\n                      title=\"Drop selected item\"\n                      (click)=\"instrumentDescriptionModal.showDropModal(dropElementFlag)\"\n                      [disabled]=\"instrumentationItem.instrumentDescription.length == 0\"\n                    ></button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"newTag\">New Tag</label>\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"instrumentationItem.newTag\" name=\"newTag\" disabled>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"d-flex justify-content-end\">\n          <div class=\"mr-auto p-2\">\n            <a routerLink=\"/project/{{projectId}}/instrumentations/\" class=\"btn btn-primary\">Back</a>\n          </div>\n          <div class=\"p-2 form-group\">\n            <span *ngIf=\"isCanChange\">\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!instrumentationForm.form.valid\">Update/Create</button>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"ml-3 mr-3\" *ngIf=\"sizeWindow > 576; else werticalTable\">\n          <div class=\"row achievements-wrapper\">\n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Item</th>                                                 <!-- 1 -->\n                  <th>Instrumentation Tag</th>                                  <!-- 2 -->\n                  <th>Instrument Description</th>                               <!-- 3 -->\n                  <th>PID Number</th>                                           <!-- 4 -->\n                  <th>Service Description</th>                                  <!-- 5 -->\n                  <th>Instrument Type 1</th>                                    <!-- 6 -->\n                  <th>Instrument Type 2</th>                                    <!-- 7 -->\n                  <th>Manufacturer</th>                                         <!-- 8 -->\n                  <th>Data Sheet Number</th>                                    <!-- 9 -->\n                  <th>MR/PO Number</th>                                         <!-- 10 -->\n                  <th>Model Number</th>                                         <!-- 11 -->\n                  <th>Status</th>                                               <!-- 12 -->\n                  <th>Location</th>                                             <!-- 13 -->\n                  <th>System</th>                                               <!-- 14 -->\n                  <th>I/O Type</th>                                             <!-- 15 -->\n                  <th>Signal Level</th>                                         <!-- 16 -->\n                  <th>Power Supply</th>                                         <!-- 17 -->\n                  <th>Instrument Function</th>                                  <!-- 18 -->\n                  <th>Instrument Description</th>                               <!-- 19 -->\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>{{instrumentationItem?.itemNumber || 'N/A'}}</td>     <!-- 1 Item -->\n                  <td>{{instrumentationItem?.instrumentationTag || 'N/A'}}</td>     <!-- 2 Instrumentation Tag -->\n                  <td>{{instrumentationItem?.selectedInstrumentDescription || 'N/A'}}</td>     <!-- 3 Instrument Description -->\n                  <td>{{instrumentationItem?.selectedPidNumber || 'N/A'}}</td>     <!-- 4 PID Number -->\n                  <td>{{instrumentationItem?.selectedServiceDescription || 'N/A'}}</td>     <!-- 5 Service Description -->\n                  <td>{{instrumentationItem?.selectedFirstInstrumentType || 'N/A'}}</td>     <!-- 6 Instrument Type 1 -->\n                  <td>{{instrumentationItem?.selectedSecondInstrumentType || 'N/A'}}</td>     <!-- 7 Instrument Type 2 -->\n                  <td>{{instrumentationItem?.selectedManufacturer || 'N/A'}}</td>     <!-- 8 Manufacturer -->\n                  <td>{{instrumentationItem?.selectedDataSheetNumber || 'N/A'}}</td>     <!-- 9 Data Sheet Number -->\n                  <td>{{instrumentationItem?.selectedMrPoNumber || 'N/A'}}</td>     <!-- 10 MR/PO Number -->\n                  <td>{{instrumentationItem?.selectedModelNumber || 'N/A'}}</td>     <!-- 11 Model Number -->\n                  <td>{{instrumentationItem?.selectedStatus || 'N/A'}}</td>     <!-- 12 Status -->\n                  <td>{{instrumentationItem?.selectedLocation || 'N/A'}}</td>     <!-- 13 Location -->\n                  <td>{{instrumentationItem?.selectedSystem || 'N/A'}}</td>     <!-- 14 System -->\n                  <td>{{instrumentationItem?.selectedIOType || 'N/A'}}</td>     <!-- 15 I/O Type -->\n                  <td>{{instrumentationItem?.selectedSignalLevel || 'N/A'}}</td>     <!-- 16 Signal Level -->\n                  <td>{{instrumentationItem?.selectedPowerSupply || 'N/A'}}</td>     <!-- 17 Power Supply -->\n                  <td>{{instrumentationItem?.selectedInstrumentFunction || 'N/A'}}</td>     <!-- 18 Instrument Function -->\n                  <td>{{instrumentationItem?.selectedInstrumentDescription || 'N/A'}}</td>     <!-- 19 Instrument Description -->\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n          <ng-template class=\"ml-3 mr-3\" #werticalTable>\n            <div class=\"row\">\n              <table class=\"table table-bordered\">\n                <tr>\n                  <td><strong>Item</strong></td>\n                  <td>{{instrumentationItem?.itemNumber || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Instrumentation Tag</strong></td>\n                  <td>{{instrumentationItem?.instrumentationTag || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Instrument Description</strong></td>\n                  <td>{{instrumentationItem?.selectedInstrumentDescription || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>PID Number</strong></td>\n                  <td>{{instrumentationItem?.selectedPidNumber || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Service Description</strong></td>\n                  <td>{{instrumentationItem?.selectedServiceDescription || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Instrument Type 1</strong></td>\n                  <td>{{instrumentationItem?.selectedFirstInstrumentType || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Instrument Type 2</strong></td>\n                  <td>{{instrumentationItem?.selectedSecondInstrumentType || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Manufacturer</strong></td>\n                  <td>{{instrumentationItem?.selectedManufacturer || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Data Sheet Number</strong></td>\n                  <td>{{instrumentationItem?.selectedDataSheetNumber || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>MR/PO Number</strong></td>\n                  <td>{{instrumentationItem?.selectedMrPoNumber || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Model Number</strong></td>\n                  <td>{{instrumentationItem?.selectedModelNumber || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Status</strong></td>\n                  <td>{{instrumentationItem?.selectedStatus || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Location</strong></td>\n                  <td>{{instrumentationItem?.selectedLocation || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>System</strong></td>\n                  <td>{{instrumentationItem?.selectedSystem || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>I/O Type</strong></td>\n                  <td>{{instrumentationItem?.selectedIOType || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Signal Level</strong></td>\n                  <td>{{instrumentationItem?.selectedSignalLevel || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Power Supply</strong></td>\n                  <td>{{instrumentationItem?.selectedPowerSupply || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Instrument Function</strong></td>\n                  <td>{{instrumentationItem?.selectedInstrumentFunction || 'N/A'}}</td>\n                </tr>\n                <tr>\n                  <td><strong>Instrument Description</strong></td>\n                  <td>{{instrumentationItem?.selectedInstrumentDescription || 'N/A'}}</td>\n                </tr>\n              </table>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </form>\n    <div class=\"row ml-3 mb-3\">\n      <span *ngIf=\"isCanChange\">\n        <button class=\"btn btn-danger\" (click)=\"deleteInstrumentation(instrumentationItem._id)\">Delete</button>\n      </span>\n    </div>\n  </div>\n  <div>\n  <!--START MODALS -->\n    <app-electricals-modal [dataValue]=\"instrumentationItem?.hazlocZone\" [selectedValue]=\"instrumentationItem?.selectedHazlocZone\" [title]=\"hazlocZoneTitle\" #hazlocZoneModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.hazlocTemperature\" [selectedValue]=\"instrumentationItem?.selectedHazlocTemperature\" [title]=\"hazlocTemperatureTitle\" #hazlocTemperatureModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.pidNumber\" [selectedValue]=\"instrumentationItem?.selectedPidNumber\" [title]=\"pidNumberTitle\" #pidNumberModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.serviceDescription\" [selectedValue]=\"instrumentationItem?.selectedServiceDescription\" [title]=\"serviceDescriptionTitle\" #serviceDescriptionModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.lineEquipmentNumber\" [selectedValue]=\"instrumentationItem?.selectedLineEquipmentNumber\" [title]=\"lineEquipmentNumberTitle\" #lineEquipmentNumberModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.firstInstrumentType\" [selectedValue]=\"instrumentationItem?.selectedFirstInstrumentType\" [title]=\"firstInstrumentTypeTitle\" #firstInstrumentTypeModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.manufacturer\" [selectedValue]=\"instrumentationItem?.selectedManufacturer\" [title]=\"manufacturerTitle\" #manufacturerModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.modelNumber\" [selectedValue]=\"instrumentationItem?.selectedModelNumber\" [title]=\"modelNumberTitle\" #modelNumberModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.dataSheetNumber\" [selectedValue]=\"instrumentationItem?.selectedDataSheetNumber\" [title]=\"dataSheetNumberTitle\" #dataSheetNumberModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.mrPoNumber\" [selectedValue]=\"instrumentationItem?.selectedMrPoNumber\" [title]=\"mrPoNumberTitle\" #mrPoNumberModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.installationDetail\" [selectedValue]=\"instrumentationItem?.selectedInstallationDetail\" [title]=\"installationDetailTitle\" #installationDetailModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.wiringDrawing\" [selectedValue]=\"instrumentationItem?.selectedWiringDrawing\" [title]=\"wiringDrawingTitle\" #wiringDrawingModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.location\" [selectedValue]=\"instrumentationItem?.selectedLocation\" [title]=\"locationTitle\" #locationModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.system\" [selectedValue]=\"instrumentationItem?.selectedSystem\" [title]=\"systemTitle\" #systemModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.secondInstrumentType\" [selectedValue]=\"instrumentationItem?.selectedSecondInstrumentType\" [title]=\"secondInstrumentTypeTitle\" #secondInstrumentTypeModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.status\" [selectedValue]=\"instrumentationItem?.selectedStatus\" [title]=\"statusTitle\" #statusModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.vendor\" [selectedValue]=\"instrumentationItem?.selectedVendor\" [title]=\"vendorTitle\" #vendorModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.suppliedBy\" [selectedValue]=\"instrumentationItem?.selectedSuppliedBy\" [title]=\"suppliedByTitle\" #suppliedByModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.installedBy\" [selectedValue]=\"instrumentationItem?.selectedInstalledBy\" [title]=\"installedByTitle\" #installedByModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.signalLevel\" [selectedValue]=\"instrumentationItem?.selectedSignalLevel\" [title]=\"signalLevelTitle\" #signalLevelModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.ioType\" [selectedValue]=\"instrumentationItem?.selectedIOType\" [title]=\"ioTypeTitle\" #ioTypeModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.powerSupply\" [selectedValue]=\"instrumentationItem?.selectedPowerSupply\" [title]=\"powerSupplyTitle\" #powerSupplyModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.instrumentFunction\" [selectedValue]=\"instrumentationItem?.selectedInstrumentFunction\" [title]=\"instrumentFunctionTitle\" #instrumentFunctionModal></app-electricals-modal>\n      <app-electricals-modal [dataValue]=\"instrumentationItem?.instrumentDescription\" [selectedValue]=\"instrumentationItem?.selectedInstrumentDescription\" [title]=\"instrumentDescriptionTitle\" #instrumentDescriptionModal></app-electricals-modal>\n      <!--  <app-electricals-modal [dataValue]=\"\" [selectedValue]=\"\" [title]=\"\" #></app-electricals-modal>\n      -->\n      <!--END MODALS -->\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/instrumentation-item/instrumentation-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentationItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_instrumentation_service__ = __webpack_require__("../../../../../src/app/services/instrumentation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {IMyDpOptions} from 'mydatepicker';



var InstrumentationItemComponent = (function () {
    function InstrumentationItemComponent(router, route, instrumentationService, spinnerService, projectServise) {
        this.router = router;
        this.route = route;
        this.instrumentationService = instrumentationService;
        this.spinnerService = spinnerService;
        this.projectServise = projectServise;
        //
        this.dropElementFlag = true;
        //
        this.hazlocZoneTitle = 'Hazloc Zone';
        this.hazlocTemperatureTitle = 'Hazloc Temperature';
        this.pidNumberTitle = 'Pid Number';
        this.serviceDescriptionTitle = 'Service Description';
        this.lineEquipmentNumberTitle = 'Line Equipment Number';
        this.firstInstrumentTypeTitle = 'Instrument Type 1';
        this.manufacturerTitle = 'Manufacturer';
        this.modelNumberTitle = 'Model Number';
        this.dataSheetNumberTitle = 'Data Sheet Number';
        this.mrPoNumberTitle = 'MR/PO Number';
        this.installationDetailTitle = 'Installation Detail';
        this.wiringDrawingTitle = 'Wiring Drawing';
        this.locationTitle = 'Location';
        this.systemTitle = 'System';
        this.secondInstrumentTypeTitle = 'Instrument Type 2';
        this.statusTitle = 'Status';
        this.vendorTitle = 'Vendor';
        this.suppliedByTitle = 'Supplied By';
        this.installedByTitle = 'Installed By';
        this.signalLevelTitle = 'Signal Level';
        this.ioTypeTitle = 'I/O Type';
        this.powerSupplyTitle = 'Power Supply';
        this.instrumentFunctionTitle = 'Instrument Function';
        this.instrumentDescriptionTitle = 'Instrument Description';
        this.projectId = this.route.snapshot.params['id'];
        this.instrumentationId = this.route.snapshot.params['instrumentationId'];
        this.sizeWindow = window.innerWidth;
    }
    InstrumentationItemComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    InstrumentationItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userGuid = u.guid;
            this.userEmail = u.email;
            //
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        //
        this.spinnerService.show();
        this.instrumentationService.getInstrumentationItem(this.projectId, this.instrumentationId).subscribe(function (instrupentations) {
            _this.instrumentationItem = instrupentations.instrumentation;
            _this.projectServise.getProjectById(_this.projectId).subscribe(function (itemProject) {
                _this.project = itemProject;
                if (itemProject.creator === _this.userGuid) {
                    _this.isCanChange = true;
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserChange(_this.project.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserView(_this.project.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                }
            });
            //
            _this.dateInstrumentAdded = (new Date(_this.instrumentationItem.dateInstrumentAdded)).toLocaleDateString();
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    InstrumentationItemComponent.prototype.optionChanged = function ($event) {
        this.selectedHazlocZone.reset(null);
        this.selectedHazlocTemperature.reset(null);
        this.selectedHazlocGroup.reset(null);
    };
    InstrumentationItemComponent.prototype.saveInstrumentation = function (idInstrumentationItem, data) {
        var _this = this;
        this.spinnerService.show();
        data.hazlocZone = this.instrumentationItem.hazlocZone;
        data.hazlocTemperature = this.instrumentationItem.hazlocTemperature;
        data.pidNumber = this.instrumentationItem.pidNumber;
        data.serviceDescription = this.instrumentationItem.serviceDescription;
        data.lineEquipmentNumber = this.instrumentationItem.lineEquipmentNumber;
        data.firstInstrumentType = this.instrumentationItem.firstInstrumentType;
        data.manufacturer = this.instrumentationItem.manufacturer;
        data.modelNumber = this.instrumentationItem.modelNumber;
        data.dataSheetNumber = this.instrumentationItem.dataSheetNumber;
        data.mrPoNumber = this.instrumentationItem.mrPoNumber;
        data.installationDetail = this.instrumentationItem.installationDetail;
        data.wiringDrawing = this.instrumentationItem.wiringDrawing;
        data.location = this.instrumentationItem.location;
        data.system = this.instrumentationItem.system;
        data.secondInstrumentType = this.instrumentationItem.secondInstrumentType;
        data.status = this.instrumentationItem.status;
        data.vendor = this.instrumentationItem.vendor;
        data.suppliedBy = this.instrumentationItem.suppliedBy;
        data.installedBy = this.instrumentationItem.installedBy;
        data.signalLevel = this.instrumentationItem.signalLevel;
        data.ioType = this.instrumentationItem.ioType;
        data.powerSupply = this.instrumentationItem.powerSupply;
        data.instrumentFunction = this.instrumentationItem.instrumentFunction;
        data.instrumentDescription = this.instrumentationItem.instrumentDescription;
        this.instrumentationService.updateInstrumentationItem(this.projectId, idInstrumentationItem, data).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'instrumentations']);
        }, function (err) {
            console.log(err);
            // this.spinnerService.hide();
        });
    };
    InstrumentationItemComponent.prototype.deleteInstrumentation = function (instrumentationId) {
        var _this = this;
        this.spinnerService.show();
        this.instrumentationService.deleteInstrumentationItem(this.projectId, instrumentationId).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'instrumentations']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocZone'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NgModel */])
    ], InstrumentationItemComponent.prototype, "selectedHazlocZone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocTemperature'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NgModel */])
    ], InstrumentationItemComponent.prototype, "selectedHazlocTemperature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectedHazlocGroup'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NgModel */])
    ], InstrumentationItemComponent.prototype, "selectedHazlocGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InstrumentationItemComponent.prototype, "onResize", null);
    InstrumentationItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-instrumentation-item',
            template: __webpack_require__("../../../../../src/app/components/instrumentation-item/instrumentation-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/instrumentation-item/instrumentation-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_instrumentation_service__["a" /* InstrumentationService */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__services_project_service__["a" /* ProjectService */]])
    ], InstrumentationItemComponent);
    return InstrumentationItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/instrumentation-list/instrumentation-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: \"Roboto-Light\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Roboto-Bolt\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n    font-weight: bold;\r\n  }\r\n  .table-text-style{\r\n    font-family: Roboto-Bolt!important;\r\n    color: #4c4c4c!important;\r\n  }\r\n  \r\n  .disable-decoration {\r\n    text-decoration: none!important;\r\n  }\r\n  \r\n  .table-cursor {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n\r\n  /*\r\n  a:hover {\r\n    color: gray!important; \r\n   }\r\n   */ ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/instrumentation-list/instrumentation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <!--class=\"container\"-->\n  <div class=\"row\"  style=\"margin-left: 0px!important; margin-right: 0px!important\">\n    <div class=\"col-12\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\" style=\"background-color: white!important\">\n          <li *ngIf=\"isAdmin\" class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/superadmin']\">\n              <strong>Admin panel</strong>\n            </a>\n          </li>\n          <li *ngIf=\"!isAdmin\" class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project']\">\n              <strong>Projects List</strong>\n            </a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project', projectId]\">\n              <strong>Dashboard for Project {{projectName?.title}}</strong>\n            </a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Instrumentations List</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"pt-2 text-center\">\n    <h1>Instrumentation List\n      <span *ngIf=\"isCanChange\">\n        <a class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new instrumentation\" (click)=\"saveInstrimentation()\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        </a>\n      </span>\n    </h1>\n  </div>\n  <div class=\"row achievements-wrapper ml-3 mr-3\">\n    <table id=\"exportable\" class=\"table table-sm table-bordered table-hover table-text-style\">\n      <thead>\n        <tr>\n          <!--<th></th> -->                                   <!-- 1 -->\n          <th>Item.</th>                              <!-- 2 -->\n          <th>Instrumentation Tag</th>                <!-- 3 -->\n          <th>Instrument Description</th>             <!-- 4 -->\n          <th>PID Number</th>                         <!-- 5 -->\n          <th>Service Description</th>                <!-- 6 -->\n          <th>Instrument Type 1</th>                  <!-- 7 -->\n          <th>Instrument Type 2</th>                  <!-- 8 -->\n          <th>Manufacturer</th>                       <!-- 9 -->\n          <th>Data Sheet Number</th>                  <!-- 10 -->\n          <th>PO Number</th>                          <!-- 11 -->\n          <th>Model Number</th>                       <!-- 12 -->\n          <th>Status</th>                             <!-- 13 -->\n          <th>Location</th>                           <!-- 14 -->\n          <th>System</th>                             <!-- 15 -->\n          <th>I/O Type</th>                           <!-- 16 -->\n          <th>Signal Level</th>                       <!-- 17 -->\n          <th>Power Supply</th>                       <!-- 18 -->\n          <th>Instrument Function</th>                <!-- 19 -->\n          <th>Instrument Description</th>             <!-- 20 -->\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let instrumentationItem of instrumentation\">\n          <!--<td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\"><a class=\"table-cursor\"></a></td> -->                                                                  <!-- 1 -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.itemNumber || 'N/A'}}<a class=\"table-cursor\"></a></td>                           <!-- 2 Item -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.instrumentationTag || 'New Instrumentation'}}<a class=\"table-cursor\"></a></td>   <!-- 3 Instrumentation Tag -->                                                                              <!-- 3 Cable Conduit Tag-->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedInstrumentDescription || 'N/A'}}<a class=\"table-cursor\"></a></td>        <!-- 4 Instrument Description -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedPidNumber || 'N/A'}}<a class=\"table-cursor\"></a></td>                    <!-- 5 PID Number -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedServiceDescription || 'N/A'}}<a class=\"table-cursor\"></a></td>           <!-- 6 Service Description -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedFirstInstrumentType || 'N/A'}}<a class=\"table-cursor\"></a></td>          <!-- 7 Instrument Type 1 -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedSecondInstrumentType || 'N/A'}}<a class=\"table-cursor\"></a></td>         <!-- 8 Instrument Type 2 -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedManufacturer || 'N/A'}}<a class=\"table-cursor\"></a></td>                 <!-- 9 Manufacturer -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedDataSheetNumber || 'N/A'}}<a class=\"table-cursor\"></a></td>              <!-- 10 Data Sheet Number-->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedMrPoNumber || 'N/A'}}<a class=\"table-cursor\"></a></td>                   <!-- 11 PO Number -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedModelNumber || 'N/A'}}<a class=\"table-cursor\"></a></td>                  <!-- 12 Model Number -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedStatus || 'N/A'}}<a class=\"table-cursor\"></a></td>                       <!-- 13 Status -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedLocation || 'N/A'}}<a class=\"table-cursor\"></a></td>                     <!-- 14 Location -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedSystem || 'N/A'}}<a class=\"table-cursor\"></a></td>                       <!-- 15 System -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedIOType || 'N/A'}}<a class=\"table-cursor\"></a></td>                       <!-- 16 I/O Type -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedSignalLevel || 'N/A'}}<a class=\"table-cursor\"></a></td>                  <!-- 17 Signal Level -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedPowerSupply || 'N/A'}}<a class=\"table-cursor\"></a></td>                  <!-- 18 Power Supply -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedInstrumentFunction || 'N/A'}}<a class=\"table-cursor\"></a></td>           <!-- 19 Instrument Function -->\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/instrumentations/{{instrumentationItem._id}}\">{{instrumentationItem?.selectedInstrumentDescription || 'N/A'}}<a class=\"table-cursor\"></a></td>        <!-- 20 Instrument Description -->\n          <td>\n            <input type=\"checkbox\" [(ngModel)]=\"instrumentationItem.isChecked\" (click)=\"puchToInstrumentationArray(instrumentationItem)\">\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"mt-1 ml-auto mr-3\">\n        <div class=\"form-group\">\n          <label for=\"isChecked\">Select All</label>\n          <input type=\"checkbox\" [(ngModel)]=\"isChecked\" (click)=\"changeFlag(isChecked)\">\n        </div>\n    </div>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"ml-auto mr-3\">\n        <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcell()\">Export Instrumentation Index</button>\n    </div>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"mt-1 ml-auto mr-3\">\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcellUIData()\" [disabled]=\"instrumentationArrayList == 0\">Export Instrumentation UI Data</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/instrumentation-list/instrumentation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_instrumentation_service__ = __webpack_require__("../../../../../src/app/services/instrumentation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_excel_service__ = __webpack_require__("../../../../../src/app/services/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InstrumentationListComponent = (function () {
    function InstrumentationListComponent(instrumentationService, projectServise, router, route, excelService, spinnerService) {
        this.instrumentationService = instrumentationService;
        this.projectServise = projectServise;
        this.router = router;
        this.route = route;
        this.excelService = excelService;
        this.spinnerService = spinnerService;
        this.isChecked = false;
        this.projectId = this.route.snapshot.params['id'];
        this.instrumentationArrayList = [];
        this.test = [];
    }
    InstrumentationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userEmail = u.email;
            this.userGuid = u.guid;
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.instrumentationService.getInstrumentationsList(this.projectId).subscribe(function (instrumentationList) {
            _this.instrumentation = instrumentationList.instrumentations;
            _this.projectServise.getProjectById(_this.projectId).subscribe(function (itemProject) {
                _this.project = itemProject;
                if (itemProject.creator === _this.userGuid) {
                    _this.isCanChange = true;
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserChange(_this.project.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserView(_this.project.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                }
            });
        }, function (err) {
            _this.spinnerService.hide();
            console.log(err);
            return false;
        });
        this.projectServise.getProjectNameById(this.projectId).subscribe(function (project) {
            _this.projectName = project;
        }, function (err) {
            _this.spinnerService.hide();
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    InstrumentationListComponent.prototype.saveToExcell = function () {
        var wscols = [
            // A      // B       // C       // D       // E       // F       // G       // H      // I       // J       // K       // L
            { wch: 7 }, { wch: 24 }, { wch: 25 }, { wch: 19 }, { wch: 22 }, { wch: 17 }, { wch: 18 }, { wch: 9 }, { wch: 9 }, { wch: 9 }, { wch: 10 }, { wch: 13 },
            // M       // N       // O       // P       //Q         //R
            { wch: 14 }, { wch: 14 }, { wch: 19 }, { wch: 15 }, { wch: 15 }, { wch: 17 }
        ];
        var projectArray = [];
        for (var i = 0; i < this.instrumentation.length; ++i) {
            projectArray.push(this.instrumentation[i]._id);
        }
        var queryString = 'instrumentations-item-list';
        var scheetName = 'Instrumentations List';
        var controllerName = 'Instrumentations';
        var fileName = 'INSTRUMENT INDEX';
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    InstrumentationListComponent.prototype.puchToInstrumentationArray = function (element) {
        if (!element.isChecked) {
            this.instrumentationArrayList.push(element._id);
        }
        else {
            this.instrumentationArrayList.pop();
        }
    };
    InstrumentationListComponent.prototype.changeFlag = function (isCheck) {
        if (isCheck) {
            this.isChecked = false;
            for (var i = 0; i < this.instrumentation.length; ++i) {
                this.instrumentation[i].isChecked = false;
                this.instrumentationArrayList = [];
            }
        }
        else {
            this.isChecked = true;
            for (var i = 0; i < this.instrumentation.length; ++i) {
                this.instrumentation[i].isChecked = true;
                this.instrumentationArrayList.push(this.instrumentation[i]._id);
            }
        }
    };
    InstrumentationListComponent.prototype.saveToExcellUIData = function () {
        var wscols = [
            // A       // B      // C       // D       // E       // F       // G       // H      // I       // J       // K       // L
            { wch: 7 }, { wch: 22 }, { wch: 25 }, { wch: 20 }, { wch: 22 }, { wch: 18 }, { wch: 18 }, { wch: 7 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 13 },
            // M       // N       // O       // P       // Q       // R       // S       // T       // U       // V       // W       // X
            { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 22 }, { wch: 17 }, { wch: 15 }, { wch: 15 }, { wch: 20 }, { wch: 17 }, { wch: 15 }, { wch: 13 }, { wch: 15 },
            // Y       // Z     // AA      // AB      // AC      // AD      // AE      // AF      // AG     // AH     // AI
            { wch: 20 }, { wch: 9 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 25 }, { wch: 20 }, { wch: 25 }, { wch: 7 }, { wch: 7 }, { wch: 7 }
        ];
        var projectArray = [];
        for (var i = 0; i < this.instrumentation.length; ++i) {
            if (this.instrumentation[i].isChecked === true) {
                projectArray.push(this.instrumentation[i]._id);
            }
        }
        var queryString = 'instrumentations-item';
        var scheetName = 'Instrumentations UI List';
        var controllerName = 'Instrumentations';
        var fileName = 'INSTRUMENT REPORT';
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    InstrumentationListComponent.prototype.saveInstrimentation = function () {
        var _this = this;
        this.instrumentation = {};
        this.instrumentation.length = 0;
        this.spinnerService.show();
        this.instrumentationService.createInstrumentstion(this.projectId, this.instrumentation).subscribe(function (res) {
            // let id = res['_id'];
            var responseId = res[res.length - 1]['_id'];
            var routeToInstrumentationItem = '/project/' + _this.route.snapshot.params['id'] + '/instrumentations/' + responseId;
            _this.router.navigate([routeToInstrumentationItem]);
        }, function (err) {
            console.log(err);
        });
        this.spinnerService.hide();
    };
    InstrumentationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-instrumentation-list',
            template: __webpack_require__("../../../../../src/app/components/instrumentation-list/instrumentation-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/instrumentation-list/instrumentation-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_instrumentation_service__["a" /* InstrumentationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_excel_service__["a" /* ExcelService */],
            __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], InstrumentationListComponent);
    return InstrumentationListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/io-assignment/io-assignment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/io-assignment/io-assignment.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"ioassignments\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <hr/>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <form (ngSubmit)=\"saveIOAssignment(ioAssignmentForm.value)\" #ioAssignmentForm=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <label for=\"itemNumber\">Tag</label>\n            <select\n              [disabled]=\"ioassignments.instrumentations.length == 0\"\n              id=\"selectedTag\"\n              class=\"form-control\"\n              [(ngModel)]=\"ioassignments.selectedTag\"\n              name=\"selectedTag\"\n            >\n              <option\n                *ngFor=\"let currentInstrumentations of ioassignments.instrumentations\" \n                [ngValue]=\"currentInstrumentations.instrumentationTag\"\n                [selected]=\"currentInstrumentations.instrumentationTag==selectedTag\"\n              >\n                {{currentInstrumentations.instrumentationTag}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-6\">\n            <label for=\"itemNumber\">Controller</label>\n            <select\n              [disabled]=\"ioassignments.controllers.length == 0\"\n              id=\"selectedController\"\n              class=\"form-control\"\n              [(ngModel)]=\"ioassignments.selectedController\"\n              name=\"selectedController\"\n              (change)=\"ioassignmentsControllerChange(ioassignments.selectedTag, ioassignments.selectedController)\"\n            >\n              <option\n                *ngFor=\"let currentController of ioassignments.controllers\" \n                [ngValue]=\"currentController.controlsEquipmentTagFirst\"\n                [selected]=\"currentController.controlsEquipmentTagFirst==selectedController\"\n              >\n                {{currentController.controlsEquipmentTagFirst}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <table class=\"table table-striped table-bordered\">\n              <thead>\n                <tr>\n                  <th colspan=\"4\">IoType</th>\n                  <th colspan=\"2\">IoTag</th>\n                  <th>I/O Description</th>\n                  <th>Chassis</th>\n                  <th>Slot</th>\n                  <th>Data</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"changeIOAssigmentTableAfterChangeTagAndController\">\n                <tr *ngFor=\"let field of changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription; let i = index\">\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"field.selectedIoTypeFirst\"\n                      name=\"{{field.selectedIoTypeFirst}}\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeFirst of field.ioTypeFirst\" \n                        [ngValue]=\"currentIoTypeFirst\"\n                        [selected]=\"currentIoTypeFirst==field.selectedIoTypeFirst\"\n                      >\n                        {{currentIoTypeFirst}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"field.selectedIoTypeSecond\"\n                      name=\"{{field.selectedIoTypeSecond}}\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeSecond of field.ioTypeSecond\" \n                        [ngValue]=\"currentIoTypeSecond\"\n                        [selected]=\"currentIoTypeSecond==field.selectedIoTypeSecon\"\n                      >\n                        {{currentIoTypeSecond}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"field.selectedIoTypeThird\"\n                      name=\"{{field.selectedIoTypeThird}}\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeThird of field.ioTypeThird\" \n                        [ngValue]=\"currentIoTypeThird\"\n                        [selected]=\"currentIoTypeThird==field.selectedIoTypeThird\"\n                      >\n                        {{currentIoTypeThird}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"field.selectedIoTypeFourth\"\n                      name=\"{{field.selectedIoTypeFourth}}\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeFourth of field.ioTypeFourth\" \n                        [ngValue]=\"currentIoTypeFourth\"\n                        [selected]=\"currentIoTypeThird==field.selectedIoTypeFourth\"\n                      >\n                        {{currentIoTypeFourth}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <input [(ngModel)]=\"field.ioTagFirst\" class=\"form-control\" type=\"text\" name=\"{{field.ioTagFirst}}\" />\n                  </td>\n                  <td>\n                    <input [(ngModel)]=\"field.ioTagSecond\" class=\"form-control\" type=\"text\" name=\"{{field.ioTagSecond}}\" />\n                  </td>\n                  <td>\n                    <input [(ngModel)]=\"field.ioDescription\" class=\"form-control\" type=\"text\" name=\"{{field.ioDescription}}\" />\n                  </td>\n                  <td>\n                    <input [(ngModel)]=\"field.chassis\" class=\"form-control\" type=\"text\" name=\"{{field.chassis}}\" />\n                  </td>\n                  <td>\n                    <input [(ngModel)]=\"field.slot\" class=\"form-control\" type=\"text\" name=\"{{field.slot}}\" />\n                  </td>\n                  <td>\n                    <input [(ngModel)]=\"field.data\" class=\"form-control\" type=\"text\" name=\"{{field.data}}\" />\n                  </td>\n                  <td>\n                    <button class=\"btn btn-default\"  type=\"button\" (click)=\"deleteFieldValue2(i)\">Delete</button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"newAttribute.selectedIoTypeFirst\"\n                      name=\"selectedIoTypeFirst\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeFirst of newAttribute.ioTypeFirst\" \n                        [ngValue]=\"currentIoTypeFirst\"\n                        [selected]=\"currentIoTypeFirst==selectedIoTypeFirst\"\n                      >\n                        {{currentIoTypeFirst}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"newAttribute.selectedIoTypeSecond\"\n                      name=\"selectedIoTypeSecond\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeSecond of newAttribute.ioTypeSecond\" \n                        [ngValue]=\"currentIoTypeSecond\"\n                        [selected]=\"currentIoTypeFirst==selectedIoTypeSecond\"\n                      >\n                        {{currentIoTypeSecond}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"newAttribute.selectedIoTypeThird\"\n                      name=\"selectedIoTypeThird\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeThird of newAttribute.ioTypeThird\" \n                        [ngValue]=\"currentIoTypeThird\"\n                        [selected]=\"currentIoTypeThird==selectedIoTypeThird\"\n                      >\n                        {{currentIoTypeThird}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <select\n                      class=\"form-control\"\n                      [(ngModel)]=\"newAttribute.selectedIoTypeFourth\"\n                      name=\"selectedIoTypeFourth\"\n                    >\n                      <option\n                        *ngFor=\"let currentIoTypeFourth of newAttribute.ioTypeFourth\" \n                        [ngValue]=\"currentIoTypeFourth\"\n                        [selected]=\"currentIoTypeThird==selectedIoTypeFourth\"\n                      >\n                        {{currentIoTypeFourth}}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <input class=\"form-control\" type=\"text\" id=\"ioTagFirst\" [(ngModel)]=\"newAttribute.ioTagFirst\" name=\"ioTagFirst\" />\n                  </td>\n                  <td>\n                    <input class=\"form-control\" type=\"text\" id=\"ioTagSecond\" [(ngModel)]=\"newAttribute.ioTagSecond\" name=\"ioTagSecond\" />\n                  </td>\n                  <td>\n                    <input class=\"form-control\" type=\"text\" id=\"ioDescription\" [(ngModel)]=\"newAttribute.ioDescription\" name=\"ioDescription\" />\n                  </td>\n                  <td>\n                    <input class=\"form-control\" type=\"text\" id=\"chassis\" [(ngModel)]=\"newAttribute.chassis\" name=\"chassis\" />\n                  </td>\n                  <td>\n                    <input class=\"form-control\" type=\"text\" id=\"slot\" [(ngModel)]=\"newAttribute.slot\" name=\"slot\" />\n                  </td>\n                  <td>\n                    <input class=\"form-control\" type=\"text\" id=\"data\" [(ngModel)]=\"newAttribute.data\" name=\"data\" />\n                  </td>\n                  <td>\n                    <button class=\"btn btn-default\" type=\"button\" (click)=\"addFieldValue2(i)\">Add</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-end\">\n          <div class=\"p-2 form-group\">\n            <button type=\"submit\" class=\"btn btn-success\">Update/Create</button>\n          </div>\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/io-assignment/io-assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IoAssignmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_io_assignment_service__ = __webpack_require__("../../../../../src/app/services/io-assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IoAssignmentComponent = (function () {
    function IoAssignmentComponent(fb, ioAssignmentService, spinnerService, router, route) {
        this.fb = fb;
        this.ioAssignmentService = ioAssignmentService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.route = route;
        this.newAttribute = {};
        this.fieldArray = [];
        this.changeIOAssigmentTableAfterChangeTagAndController = [];
        this.projectId = this.route.snapshot.params['id'];
        this.newAttribute = {};
        this.newAttribute.ioTypeFirst = ['DI', 'DO', 'AI', 'IAI', 'H-AI', 'AO', 'H-AO', 'RTD', 'TC'];
        this.newAttribute.selectedIoTypeFirst = '';
        this.newAttribute.ioTypeSecond = ['A', 'B', 'E', 'F', 'I', 'J', 'K', 'L', 'P', 'PD', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];
        this.newAttribute.selectedIoTypeSecond = '';
        this.newAttribute.ioTypeThird = ['I', 'R', 'S'];
        this.newAttribute.ioTypeFourth = ['E', 'H', 'HH', 'L', 'LL', 'S', 'T', 'Y'];
        this.newAttribute.selectedIoTypeFourth = '';
    }
    IoAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ioAssignmentService.getIoAssignmentList(this.projectId).subscribe(function (ioAssignmentList) {
            _this.ioassignments = ioAssignmentList;
            _this.changeIOAssigmentTableAfterChangeTagAndController.push(_this.newAttribute);
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    IoAssignmentComponent.prototype.ioassignmentsTagChange = function (info) {
        console.log(info);
    };
    IoAssignmentComponent.prototype.ioassignmentsControllerChange = function (selectedTag, selectedController) {
        var _this = this;
        if (selectedTag) {
            this.changeIOAssigmentTableAfterChangeTagAndController = this.ioassignments.ioAssignments
                .filter(function (et) { return et.selectedController === _this.ioassignments.selectedController; });
            if (this.changeIOAssigmentTableAfterChangeTagAndController.length === 0) {
                this.changeIOAssigmentTableAfterChangeTagAndController.push(this.newAttribute);
                return;
            }
            else {
                this.changeIOAssigmentTableAfterChangeTagAndController;
            }
        }
        else {
            return;
        }
    };
    IoAssignmentComponent.prototype.addFieldValue2 = function (index) {
        if (!this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription) {
            this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription = [];
            this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription.push(this.newAttribute);
        }
        else {
            this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription.push(this.newAttribute);
        }
        this.newAttribute = {};
        this.newAttribute.ioTypeFirst = ['DI', 'DO', 'AI', 'IAI', 'H-AI', 'AO', 'H-AO', 'RTD', 'TC'];
        this.newAttribute.selectedIoTypeFirst = '';
        this.newAttribute.ioTypeSecond = ['A', 'B', 'E', 'F', 'I', 'J', 'K', 'L', 'P', 'PD', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];
        this.newAttribute.selectedIoTypeSecond = '';
        this.newAttribute.ioTypeThird = ['I', 'R', 'S'];
        this.newAttribute.selectedIoTypeThird = '';
        this.newAttribute.ioTypeFourth = ['E', 'H', 'HH', 'L', 'LL', 'S', 'T', 'Y'];
        this.newAttribute.selectedIoTypeFourth = '';
    };
    IoAssignmentComponent.prototype.deleteFieldValue2 = function (index) {
        this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription.splice(index, 1);
    };
    IoAssignmentComponent.prototype.cleanStringify = function (object) {
        if (object && typeof object === 'object') {
            object = copyWithoutCircularReferences([object], object);
        }
        return JSON.stringify(object);
        function copyWithoutCircularReferences(references, object) {
            var cleanObject = {};
            Object.keys(object).forEach(function (key) {
                var value = object[key];
                if (value && typeof value === 'object') {
                    if (references.indexOf(value) < 0) {
                        references.push(value);
                        cleanObject[key] = copyWithoutCircularReferences(references, value);
                        references.pop();
                    }
                    else {
                        cleanObject[key] = '###_Circular_###';
                    }
                }
                else if (typeof value !== 'function') {
                    cleanObject[key] = value;
                }
            });
            return cleanObject;
        }
    };
    IoAssignmentComponent.prototype.saveIOAssignment = function (data) {
        var _this = this;
        this.formData = {};
        this.formData.selectedController = data.selectedController;
        this.formData.selectedTag = data.selectedTag;
        this.formData.fullDescription = [];
        var fullDescription = this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription;
        var temp = this.cleanStringify(this.changeIOAssigmentTableAfterChangeTagAndController[0].fullDescription);
        this.formData.fullDescription = temp;
        this.ioAssignmentService.updateIOAssignment(this.projectId, this.formData).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId]);
        }, function (err) {
            console.log(err);
        });
    };
    IoAssignmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-io-assignment',
            template: __webpack_require__("../../../../../src/app/components/io-assignment/io-assignment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/io-assignment/io-assignment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_io_assignment_service__["a" /* IoAssignmentService */],
            __WEBPACK_IMPORTED_MODULE_1_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], IoAssignmentComponent);
    return IoAssignmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Company name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyName\" name=\"companyName\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"  name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            companyName: this.companyName,
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['project']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['signin']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 540px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-2\">\n            <div class=\"form-group\">\n              <label>Tag</label>\n            </div>\n          </div>\n          <div class=\"col-3\">\n            <div class=\"form-group\">\n              <label>Northing</label>\n            </div>\n          </div>\n          <div class=\"col-3\">\n            <div class=\"form-group\">\n              <label>Easting</label>\n            </div>\n          </div>\n          <div class=\"col-3\">\n            <div class=\"form-group\">\n              <label>Elevation</label>\n            </div>  \n          </div>\n          <div class=\"col-1\">\n\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-2\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" disabled/>\n              </div>  \n            </div>\n            <div class=\"col-1\">\n  \n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-2\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" disabled/>\n                </div>  \n              </div>\n              <div class=\"col-1\">\n    \n              </div>\n            </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!--\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableDistanceModalComponent; });
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

var CableDistanceModalComponent = (function () {
    function CableDistanceModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    CableDistanceModalComponent.prototype.showModal = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    CableDistanceModalComponent.prototype.showDropModal = function (flag) {
        var _this = this;
        this.modalFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    CableDistanceModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    CableDistanceModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    /*
      public addItem(itenEl: string){
        if(typeof this.dataValue[0] == 'string' || typeof this.dataValue[0] == 'undefined' ){
          this.dataValue.push(itenEl);
          this.visible = false;
          setTimeout(() => this.visible = false, 300);
          this.itenElement = null;
        } else {
          let elementArrayObject = {};
          elementArrayObject['name'] = itenEl;
          elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
          this.dataValue.push(elementArrayObject);
          this.visible = false;
          setTimeout(() => this.visible = false, 300);
          this.itenElement = null;
        }
      }
    
      public deleteItem(itenEl: string){
        let elementIndex: number;
        for(let i=0; i<this.dataValue.length; ++i){
          let arrayElement = this.dataValue[i];
          if(itenEl === arrayElement){
            elementIndex = i;
          }
        }
        this.dataValue.splice(elementIndex, 1);
        this.visible = false;
        this.modalFlag = false;
      }
    */
    CableDistanceModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CableDistanceModalComponent.prototype, "firstElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CableDistanceModalComponent.prototype, "secondElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CableDistanceModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CableDistanceModalComponent.prototype, "title", void 0);
    CableDistanceModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cable-distance-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/cabels-modals/cable-distance-modal/cable-distance-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CableDistanceModalComponent);
    return CableDistanceModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/controller-modal/controller-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/controller-modal/controller-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"modalFlag\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{selectedValue}}</strong> item</p>\n          </div>\n        </div>\n        <div *ngIf=\"!modalFlag\" class=\"form-inline\">\n          <label class=\"pr-2\"><strong>Item name:</strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itenElement\" \n            [(ngModel)]=\"itenElement\" \n            placeholder='Input new name value'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new name value'\"\n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/controller-modal/controller-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerModalComponent; });
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

var ControllerModalComponent = (function () {
    function ControllerModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ControllerModalComponent.prototype.showAddModal = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ControllerModalComponent.prototype.showDropModal = function (flag) {
        var _this = this;
        this.modalFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ControllerModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    ControllerModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ControllerModalComponent.prototype.addItem = function (itenEl) {
        var _this = this;
        // console.log(this.selectedValue);
        // console.log(this.dataValue);
        /*
        if(typeof this.dataValue[0] == 'string' || typeof this.dataValue[0] == 'undefined' ){
          console.log(this.title + ' Simple element');
          console.log(this.dataValue);
          this.dataValue.push(itenEl);
          this.selectedValue = itenEl;
          console.log(this.selectedValue);
          console.log(this.dataValue);
          this.visible = false;
          setTimeout(() => this.visible = false, 300);
          this.itenElement = null;
          return itenEl;
        } else {
          */
        var elementArrayObject = {};
        //I/O TAG
        if (this.title == "I/O Tag") {
            console.log(this.title + 'I/O Tag');
            var firstValueParentElement = this.dataValue[0].equipmentElementType;
            var secondValueParent = this.dataValue[0].cloneEquipmentTag;
            console.log(firstValueParentElement);
            console.log(secondValueParent);
            if (firstValueParentElement == 'POWER SUPPLY' ||
                firstValueParentElement == 'CHASSIS' ||
                firstValueParentElement == 'PROCESSOR CARD' ||
                firstValueParentElement == 'ETHERNET CARD' ||
                firstValueParentElement == 'DIGITAL INPUT CARD' ||
                firstValueParentElement == 'ANALOG OUTPUT CARD' ||
                firstValueParentElement == 'SPARE CARD SLOT' ||
                firstValueParentElement == 'SPARE CARD SLOT 1' ||
                firstValueParentElement == 'SPARE CARD SLOT 2' ||
                firstValueParentElement == 'SPARE CARD SLOT 3' ||
                firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
                    secondValueParent == "") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' &&
                secondValueParent == "PRESSURE SWITCH") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "TEMPERATURE SWITCH") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "FLOW SWITCH") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "POSITION SWITCH CLOSED") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "POSITION SWITCH OPEN") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' && secondValueParent == "MOTOR RUN STATUS") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 1") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 2") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 3") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 4") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 5") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 6") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == "INTERPOSING RELAY 7") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' && secondValueParent == "INLET PRESSURE TRANSMITTER") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' && secondValueParent == "INLET TEMPERATURE TRANSMITTER") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' && secondValueParent == "FLOW TRANSMITTER") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG OUTPUT CARD' && secondValueParent == "CONTROL VALVE POSITION") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else {
                console.log('Я тут');
            }
        }
        else if (this.title == 'I/O Description') {
            console.log(this.title + 'I/O Description');
            var firstValueParentElement = this.dataValue[0].equipmentElementType;
            var secondValueParent = this.dataValue[0].cloneEquipmentTag;
            console.log(firstValueParentElement);
            console.log(secondValueParent);
            if (firstValueParentElement == '' &&
                secondValueParent == '') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'POWER SUPPLY' ||
                firstValueParentElement == 'CHASSIS' ||
                firstValueParentElement == 'PROCESSOR CARD' ||
                firstValueParentElement == 'ETHERNET CARD' ||
                firstValueParentElement == 'DIGITAL INPUT CARD' ||
                firstValueParentElement == 'DIGITAL OUTPUT CARD' ||
                firstValueParentElement == 'ANALOG INPUT CARD' ||
                firstValueParentElement == 'SPARE CARD SLOT' ||
                firstValueParentElement == 'SPARE CARD SLOT 1' ||
                firstValueParentElement == 'SPARE CARD SLOT 2' ||
                firstValueParentElement == 'SPARE CARD SLOT 3' &&
                    secondValueParent == '') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (secondValueParent == 'INTERPOSING RELAY' ||
                secondValueParent == 'INTERPOSING RELAY 1' ||
                secondValueParent == 'INTERPOSING RELAY 2' ||
                secondValueParent == 'INTERPOSING RELAY 3' ||
                secondValueParent == 'INTERPOSING RELAY 4' ||
                secondValueParent == 'INTERPOSING RELAY 5' ||
                secondValueParent == 'INTERPOSING RELAY 6' ||
                secondValueParent == 'INTERPOSING RELAY 7' &&
                    firstValueParentElement == 'DIGITAL OUTPUT CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' &&
                secondValueParent == 'INLET PRESSURE TRANSMITTER') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' &&
                secondValueParent == 'INLET TEMPERATURE TRANSMITTER') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' &&
                secondValueParent == 'FLOW TRANSMITTER') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else if (firstValueParentElement == 'NALOG OUTPUT CARD' &&
                secondValueParent == 'CONTROL VALVE POSITION') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentTag'] = secondValueParent;
            }
            else {
                return;
            } //Relay I/O Tag
        }
        else if (this.title == "Relay I/O Tag") {
            console.log(this.title + 'Relay I/O Type');
            var firstValueParentElement = this.dataValue[0].equipmentElementType;
            var secondValueParent = this.dataValue[0].cloneEquipmentType;
            if (firstValueParentElement == 'POWER SUPPLY' ||
                firstValueParentElement == 'CHASSIS' ||
                firstValueParentElement == 'PROCESSOR CARD' ||
                firstValueParentElement == 'ETHERNET CARD' ||
                firstValueParentElement == 'DIGITAL INPUT CARD' ||
                firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
                    secondValueParent == '') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentType'] = secondValueParent;
            }
            else if (secondValueParent == 'PRESSURE SWITCH' ||
                secondValueParent == 'TEMPERATURE SWITCH' ||
                secondValueParent == 'FLOW SWITCH' ||
                secondValueParent == 'POSITION SWITCH CLOSED' ||
                secondValueParent == 'POSITION SWITCH OPEN' ||
                secondValueParent == 'MOTOR RUN STATUS' &&
                    firstValueParentElement == 'DIGITAL INPUT CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentType'] = secondValueParent;
            }
            else if (secondValueParent == 'INTERPROSING RELAY' ||
                secondValueParent == 'INTERPROSING RELAY 1' ||
                secondValueParent == 'INTERPROSING RELAY 2' ||
                secondValueParent == 'INTERPROSING RELAY 3' ||
                secondValueParent == 'INTERPROSING RELAY 4' ||
                secondValueParent == 'INTERPROSING RELAY 5' ||
                secondValueParent == 'INTERPROSING RELAY 6' ||
                secondValueParent == 'INTERPROSING RELAY 7' &&
                    firstValueParentElement == 'DIGITAL OUTPUT CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentType'] = secondValueParent;
            }
            else {
                return;
            }
        }
        else if (this.title == 'Relay I/O Type') {
            console.log(this.title + 'Relay I/O Type');
            var firstValueParentElement = this.dataValue[0].equipmentElementType;
            var secondValueParent = this.dataValue[0].cloneEquipmentType;
            if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == '') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentType'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == 'INTERPROSING RELAY') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentType'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' && secondValueParent == 'INTERPROSING RELAY 1') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['cloneEquipmentType'] = secondValueParent;
            }
            else {
                return;
            }
        }
        else if (this.title == 'I/O Per Card') {
            console.log(this.title + 'I/O Per Card');
            var firstValueParentElement = this.dataValue[0].equipmentElementType;
            var secondValueParent = this.dataValue[0].equipmentModel;
            if (firstValueParentElement == '') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'POWER SUPPLY') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'CHASSIS') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'PROCESSOR CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ETHERNET CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' &&
                secondValueParent == "1756-IB16") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL INPUT CARD' &&
                secondValueParent == "1756-IB32") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
                secondValueParent == "1756-OB16") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'DIGITAL OUTPUT CARD' &&
                secondValueParent == "1756-OB32") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' &&
                secondValueParent == "1756-IF16") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG INPUT CARD' &&
                secondValueParent == "1756-IF16H") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement == 'ANALOG OUTPUT CARD' &&
                secondValueParent == "1756-OF8") {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else if (firstValueParentElement === 'SPARE CARD SLOT' ||
                firstValueParentElement === 'SPARE CARD SLOT 1' ||
                firstValueParentElement === 'SPARE CARD SLOT 2' ||
                firstValueParentElement === 'SPARE CARD SLOT 3') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = firstValueParentElement;
                elementArrayObject['equipmentModel'] = secondValueParent;
            }
            else {
                return;
            }
            //console.log('I/O Per Card');
        }
        else if (this.title == 'Type I/O') {
            console.log(this.title + 'Type I/O');
            var valueParentElement = this.dataValue[0].equipmentElementType;
            if (valueParentElement == '' ||
                valueParentElement == 'POWER SUPPLY' ||
                valueParentElement == 'CHASSIS' ||
                valueParentElement == 'PROCESSOR CARD' ||
                valueParentElement == 'ETHERNET CARD' ||
                valueParentElement == 'SPARE CARD SLOT' ||
                valueParentElement == 'SPARE CARD SLOT 1' ||
                valueParentElement == 'SPARE CARD SLOT 2' ||
                valueParentElement == 'SPARE CARD SLOT 3') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else if (valueParentElement == 'DIGITAL INPUT CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else if (valueParentElement == 'DIGITAL OUTPUT CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else if (valueParentElement == 'ANALOG INPUT CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else if (valueParentElement == 'ANALOG OUTPUT CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else {
                console.log('Somthing was wrong');
            }
        }
        else if (this.title == 'IP Address') {
            console.log(this.title);
            var valueParentElement = this.dataValue[0].equipmentElementType;
            if (valueParentElement == '' ||
                valueParentElement == 'POWER SUPPLY' ||
                valueParentElement == 'CHASSIS' ||
                valueParentElement == 'PROCESSOR CARD' ||
                valueParentElement == 'DIGITAL INPUT CARD' ||
                valueParentElement == 'DIGITAL OUTPUT CARD' ||
                valueParentElement == 'ANALOG INPUT CARD' ||
                valueParentElement == 'ANALOG OUTPUT CARD' ||
                valueParentElement == 'SPARE CARD SLOT' ||
                valueParentElement == 'SPARE CARD SLOT 1' ||
                valueParentElement == 'SPARE CARD SLOT 2' ||
                valueParentElement == 'SPARE CARD SLOT 3') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else if (valueParentElement == 'ETHERNET CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else {
                return;
            }
        }
        else {
            console.log(this.title + 'All other');
            // PART FOR CONTROLLER TYPE / CONTROLLER FUNCTION / CONTROLLER MANUFACTURE / CONTROLLERS SERIES / EQUIPMENT MODEL
            var valueParentElement = this.dataValue[0].equipmentElementType;
            console.log(valueParentElement);
            //let elementArrayObject = {};
            if (valueParentElement == '' ||
                valueParentElement == 'POWER SUPPLY' ||
                valueParentElement == 'CHASSIS' ||
                valueParentElement == 'ETHERNET CARD' ||
                valueParentElement == 'DIGITAL INPUT CARD' ||
                valueParentElement == 'DIGITAL OUTPUT CARD' ||
                valueParentElement == 'ANALOG INPUT CARD' ||
                valueParentElement == 'ANALOG OUTPUT CARD' ||
                valueParentElement == 'SPARE CARD SLOT' ||
                valueParentElement == 'SPARE CARD SLOT 1' ||
                valueParentElement == 'SPARE CARD SLOT 2' ||
                valueParentElement == 'SPARE CARD SLOT 3') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else if (valueParentElement == 'PROCESSOR CARD') {
                elementArrayObject['name'] = itenEl;
                elementArrayObject['equipmentElementType'] = valueParentElement;
            }
            else {
                console.log('Somthing was wrong');
            }
        }
        this.dataValue.push(elementArrayObject);
        //console.log(this.dataValue);
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.itenElement = null;
        //}
    };
    /*public deleteItem(itenEl: string){
      let elementIndex: number;
      for(let i=0; i<this.dataValue.length; ++i){
        let arrayElement = this.dataValue[i];
        if(itenEl === arrayElement){
          elementIndex = i;
        }
      }
      this.dataValue.splice(elementIndex, 1);
      this.visible = false;
      this.modalFlag = false;
    }*/
    ControllerModalComponent.prototype.deleteItem = function (itenEl) {
        var elementIndex;
        console.log(this.dataValue);
        //for object 
        for (var i = 0; i < this.dataValue.length; ++i) {
            var arrayElement = this.dataValue[i];
            //console.log(arrayElement);
            if (itenEl === arrayElement.name) {
                elementIndex = i;
            }
        }
        this.dataValue.splice(elementIndex, 1);
        console.log(this.dataValue);
        this.visible = false;
        this.modalFlag = false;
    };
    ControllerModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControllerModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControllerModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ControllerModalComponent.prototype, "title", void 0);
    ControllerModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-controller-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/controller-modal/controller-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/controller-modal/controller-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControllerModalComponent);
    return ControllerModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/copy-project-modal/copy-project-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/copy-project-modal/copy-project-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"modal-padding\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  [ngClass]=\"{'in': isAnimateVisible}\"\n  [ngStyle]=\"{'display': isVisible ? 'block' : 'none', 'opacity': isAnimateVisible ? 1 : 0}\">\n  <ng-container *ngIf=\"projectData\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4>{{title}}</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-inline\">\n            <label class=\"pr-2\"><strong>Name of selected project: </strong></label>\n            <input\n              class=\"form-control\"\n              [ngModel]='projectData.title'\n              disabled\n            />\n          </div>\n          <div class=\"form-inline\">\n            <label class=\"pr-2\"><strong>Name for the cloned project: </strong></label>\n            <input\n              class=\"form-control\"\n              [maxLength]=\"projectNameLength\"\n              [(ngModel)]='nameCopiedProject'\n            />\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"row\">\n            <div class=\"d-flex justify-content-end\">\n              <div class=\"pr-1\">\n                <button class=\"btn btn-success\" (click)=\"simpleCopyProject(nameCopiedProject)\" [disabled]=\"!nameCopiedProject\">Copy project</button>\n              </div>\n              <div class=\"pl-1 pr-2\">\n                <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n<!-- [disabled]=\"!nameCopiedProject\" -->"

/***/ }),

/***/ "../../../../../src/app/components/modals/copy-project-modal/copy-project-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyProjectModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CopyProjectModalComponent = (function () {
    function CopyProjectModalComponent(projectService) {
        this.projectService = projectService;
        this.projectNameLength = 40;
    }
    /**
     * Display a modal window for copying a user-created project.
     * @param itemProject
     */
    CopyProjectModalComponent.prototype.showSimpleCopyModal = function (copyProjectFlag, itemProject) {
        var _this = this;
        this.copyFlag = copyProjectFlag;
        this.isVisible = true;
        this.projectData = itemProject;
        setTimeout(function () { return _this.isAnimateVisible = true; }, 100);
    };
    /**
     * Method to copy the project selected by the user
     * @param nameForCopiedProject name for the copied project
     */
    CopyProjectModalComponent.prototype.simpleCopyProject = function (nameForCopiedProject) {
        var _this = this;
        var projectNameId = {
            _id: this.projectData._id,
            name: nameForCopiedProject,
            creator: this.projectData.creator,
            guid: this.guid
        };
        this.projectService.postCopiedProject(projectNameId).subscribe(function (data) {
            if (data.status === 'created') {
                _this.dataValue.push(data.project);
            }
            else {
                console.error(data.message);
            }
            _this.clearVariables();
        });
    };
    /**
     * Method to close the modal window
     */
    CopyProjectModalComponent.prototype.close = function () {
        this.clearVariables();
    };
    /**
    * Method to reset all local variables
    */
    CopyProjectModalComponent.prototype.clearVariables = function () {
        this.isVisible = false;
        this.isAnimateVisible = false;
        this.copyFlag = false;
        this.projectData = null;
        this.nameCopiedProject = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CopyProjectModalComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CopyProjectModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CopyProjectModalComponent.prototype, "guid", void 0);
    CopyProjectModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-copy-project-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/copy-project-modal/copy-project-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/copy-project-modal/copy-project-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], CopyProjectModalComponent);
    return CopyProjectModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"modalFlag\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{selectedValue}}</strong> item</p>\n          </div>\n        </div>\n        <div *ngIf=\"!modalFlag\" class=\"form-inline\">\n          <label class=\"pr-2\"><strong>Item name:</strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itenElement\" \n            [(ngModel)]=\"itenElement\" \n            placeholder='Input new name value'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new name value'\"\n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalsModalComponent; });
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

var ElectricalsModalComponent = (function () {
    function ElectricalsModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ElectricalsModalComponent.prototype.showAddModal = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ElectricalsModalComponent.prototype.showDropModal = function (flag) {
        var _this = this;
        this.modalFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ElectricalsModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    ElectricalsModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ElectricalsModalComponent.prototype.addItem = function (itenEl) {
        var _this = this;
        if (typeof this.dataValue[0] === 'string' || typeof this.dataValue[0] === 'undefined') {
            this.dataValue.push(itenEl);
            this.selectedValue = itenEl;
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
            return itenEl;
        }
        else {
            var elementArrayObject = {};
            elementArrayObject['name'] = itenEl;
            elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
            this.dataValue.push(elementArrayObject);
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
        }
    };
    ElectricalsModalComponent.prototype.deleteItem = function (itenEl) {
        var elementIndex;
        for (var i = 0; i < this.dataValue.length; ++i) {
            var arrayElement = this.dataValue[i];
            if (itenEl === arrayElement) {
                elementIndex = i;
            }
        }
        this.dataValue.splice(elementIndex, 1);
        this.visible = false;
        this.modalFlag = false;
    };
    ElectricalsModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElectricalsModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ElectricalsModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ElectricalsModalComponent.prototype, "title", void 0);
    ElectricalsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-electricals-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/electricals-modal/electricals-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElectricalsModalComponent);
    return ElectricalsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/multiple-modal/multiple-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/multiple-modal/multiple-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"modalFlag\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{selectedValue}}</strong> item</p>\n          </div>\n        </div>\n        <div *ngIf=\"!modalFlag\" class=\"form-inline\">\n          <label class=\"pr-2\"><strong>Item name:</strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itenElement\" \n            [(ngModel)]=\"itenElement\" \n            placeholder='Input new name value'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new name value'\"\n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement); newChanged(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/multiple-modal/multiple-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleModalComponent; });
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

var MultipleModalComponent = (function () {
    function MultipleModalComponent() {
        //
        this.newOnChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.visible = false;
        this.visibleAnimate = false;
    }
    MultipleModalComponent.prototype.showAddModal = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    MultipleModalComponent.prototype.showDropModal = function (flag) {
        var _this = this;
        this.modalFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    MultipleModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    MultipleModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    //
    MultipleModalComponent.prototype.newChanged = function (selectedEquipmentType) {
        if (!selectedEquipmentType) {
            return;
        }
        else {
            this.newOnChanged.emit(selectedEquipmentType);
        }
    };
    //
    MultipleModalComponent.prototype.addItem = function (itenEl) {
        var _this = this;
        console.log(this.selectedValue);
        if (typeof this.dataValue[0] === 'string' || typeof this.dataValue[0] === 'undefined') {
            this.dataValue.push(itenEl);
            this.selectedValue = itenEl;
            // console.log(this.selectedValue);
            // console.log(this.dataValue);
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
            //
            this.newChanged(this.selectedValue);
            //
            //  return itenEl;
        }
        else {
            var elementArrayObject = {};
            elementArrayObject['name'] = itenEl;
            elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
            this.dataValue.push(elementArrayObject);
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
        }
    };
    MultipleModalComponent.prototype.deleteItem = function (itenEl) {
        var elementIndex;
        for (var i = 0; i < this.dataValue.length; ++i) {
            var arrayElement = this.dataValue[i];
            if (itenEl === arrayElement) {
                elementIndex = i;
            }
        }
        this.dataValue.splice(elementIndex, 1);
        this.visible = false;
        this.modalFlag = false;
    };
    MultipleModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MultipleModalComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MultipleModalComponent.prototype, "newOnChanged", void 0);
    MultipleModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multiple-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/multiple-modal/multiple-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/multiple-modal/multiple-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultipleModalComponent);
    return MultipleModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/projects-modal/projects-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/projects-modal/projects-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  (click)=\"onContainerClicked($event)\" -->\n<div\n  class=\"modal-padding\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  [ngClass]=\"{'in': visibleAnimate}\"\n  [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <div *ngIf=\"changeFlag == true\">\n          <div *ngIf=\"project.title\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n        </div>\n        <div *ngIf=\"createFlag == true\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div *ngIf=\"dropFlag == true\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"dropFlag == true\">\n          <div>\n            <p>Are you sure you want to delete \n              <strong>{{project.title}}</strong> project\n            </p>\n          </div>\n        </div>\n        <div class=\"form-inline\" *ngIf=\"changeFlag == true\">\n          <label class=\"pr-2\"><strong>Project name: </strong></label>\n          <input\n            class=\"form-control\"\n            [maxLength]=\"projectNameLength\"\n            [(ngModel)]='projectName'\n          />\n        </div>\n        <div class=\"form-inline\" *ngIf=\"createFlag == true\">\n          <label class=\"pr-2\"><strong>Project name: </strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itemElement\" \n            [(ngModel)]=\"itemElement\" \n            placeholder='Input new project name'\n            [maxLength]=\"projectNameLength\"\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new project name'\"  \n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"dropFlag == true\" class=\"btn btn-danger\" (click)=\"deleteItem(project)\">Delete</button>\n              <button *ngIf=\"changeFlag == true\" class=\"btn btn-success\" (click)=\"changeItem(project, projectName)\" [disabled]=\"!projectName\">Change</button>\n              <button *ngIf=\"createFlag == true\" class=\"btn btn-success\" (click)=\"addNewProject(itemElement)\" [disabled]=\"!itemElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <div *ngIf=\"createFlag == true\">\n                <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n              </div>\n              <div *ngIf=\"changeFlag == true\">\n                <button class=\"btn btn-primary\" [disabled]=\"!project.title\" (click)=\"clearVariables()\">Close</button>\n              </div>\n              <div *ngIf=\"dropFlag == true\">\n                <button class=\"btn btn-primary\" (click)=\"clearVariables()\">Close</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modals/projects-modal/projects-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsModalComponent = (function () {
    function ProjectsModalComponent(projectService) {
        this.projectService = projectService;
        this.visible = false;
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
        this.visibleAnimate = false;
        this.projectNameLength = 40;
    }
    /**
     * Method for displaying ADD modal window to a user.
     * @param createElementFlag
     */
    ProjectsModalComponent.prototype.showAddModal = function (createElementFlag) {
        var _this = this;
        this.createFlag = createElementFlag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    /**
     * Method for displaying DELETE modal window to a user
     * @param deleteElementFlag
     * @param itemProject
     */
    ProjectsModalComponent.prototype.showDropModal = function (deleteElementFlag, itemProject) {
        var _this = this;
        this.dropFlag = deleteElementFlag;
        this.project = itemProject;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    /**
     * Method to display to the user a modal window for changing the project name.
     * @param chengeProject
     * @param itemProject
     */
    ProjectsModalComponent.prototype.showChangeProjectModal = function (chengeProject, itemProject) {
        var _this = this;
        this.changeFlag = chengeProject;
        this.project = itemProject;
        this.projectName = itemProject.title;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    /**
     * Add a new project for a previously registered user.
     * @param projectName Data received from the user using input
     * @returns Return data from project.service.ts
     */
    ProjectsModalComponent.prototype.addNewProject = function (projectName) {
        var _this = this;
        var userProject = {};
        userProject['title'] = projectName;
        userProject['date_create'] = new Date().getMilliseconds;
        userProject['updated_date'] = new Date().getMilliseconds;
        userProject['creator'] = this.userGuid;
        userProject['creatorEmail'] = this.creatorEmail;
        this.projectService.postProject(userProject).subscribe(function (data) {
            if (data.status === 'success') {
                _this.dataValue.push(userProject);
            }
            else {
                console.error(data.message);
            }
            _this.clearVariables();
        });
    };
    /**
     * Method to change the name of the project
     * @param project
     * @param projectTitle Data received from the user using input
     * @returns HTTP success status or error message from project.servise.ts
     */
    ProjectsModalComponent.prototype.changeItem = function (project, projectTitle) {
        var _this = this;
        for (var key in this.dataValue) {
            if (this.dataValue[key]._id === project._id) {
                this.dataValue[key].title = projectTitle;
                this.projectService.updateProject(project._id, this.dataValue[key]).subscribe(function (data) {
                    if (data.status !== 'success') {
                        console.error(data.message);
                    }
                    _this.clearVariables();
                });
            }
        }
    };
    /**
     * Method to delete a project
     * @param project
     * @returns HTTP success status or error message from project.servise.ts
     */
    ProjectsModalComponent.prototype.deleteItem = function (project) {
        var _this = this;
        var elementIndex = project._id;
        this.projectService.deleteProject(elementIndex).subscribe(function (data) {
            if (data.status === 'success') {
                _this.dataValue.splice(0, 1);
            }
            else {
                console.log(data.error);
            }
            _this.clearVariables();
        });
    };
    /**
     * Method for closing a modal window and cleaning a form
     */
    ProjectsModalComponent.prototype.close = function () {
        if (this.project) {
            this.project.title = this.projectName;
        }
        this.clearVariables();
    };
    /**
     * Method to reset all local variables
     */
    ProjectsModalComponent.prototype.clearVariables = function () {
        this.visible = false;
        this.dropFlag = false;
        this.changeFlag = false;
        this.createFlag = false;
        this.itemElement = null;
        this.project = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsModalComponent.prototype, "creatorEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsModalComponent.prototype, "userGuid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProjectsModalComponent.prototype, "title", void 0);
    ProjectsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/projects-modal/projects-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/projects-modal/projects-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], ProjectsModalComponent);
    return ProjectsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/simple-electrical-modal/simple-electrical-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    background: rgba(0,0,0,0.6);\r\n    padding-top: 3rem;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    max-width: 350px!important;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input:-ms-input-placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  input::placeholder {\r\n    color: gray;\r\n    font-style: italic;\r\n  }\r\n  .modal-padding {\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/simple-electrical-modal/simple-electrical-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-padding\"\n(click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{title}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"modalFlag\">\n          <div>\n            <p>Are you sure you want to delete <strong>{{selectedValue}}</strong> item</p>\n          </div>\n        </div>\n        <div *ngIf=\"!modalFlag\" class=\"form-inline\">\n          <label class=\"pr-2\"><strong>Item name:</strong></label>\n          <input \n            class=\"form-control\" \n            name=\"itenElement\" \n            [(ngModel)]=\"itenElement\" \n            placeholder='Input new name value'\n            onfocus=\"this.placeholder = ''\"\n            onblur=\"this.placeholder = 'Input new name value'\"\n          />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"form-group pr-1\">\n              <button *ngIf=\"modalFlag\" class=\"btn btn-danger\" (click)=\"deleteItem(selectedValue)\">Delete</button>\n              <button *ngIf=\"!modalFlag\" class=\"btn btn-success\" (click)=\"addItem(itenElement); newChanged(itenElement)\" [disabled]=\"!itenElement\">Add</button>\n            </div>\n            <div class=\"pl-1 pr-2\">\n              <button class=\"btn btn-primary\" (click)=\"close(); $event.preventDefault()\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/simple-electrical-modal/simple-electrical-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleElectricalModalComponent; });
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

var SimpleElectricalModalComponent = (function () {
    function SimpleElectricalModalComponent() {
        //
        this.newOnChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.visible = false;
        this.visibleAnimate = false;
    }
    SimpleElectricalModalComponent.prototype.showAddModal = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    SimpleElectricalModalComponent.prototype.showDropModal = function (flag) {
        var _this = this;
        this.modalFlag = flag;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    SimpleElectricalModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    SimpleElectricalModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    // TODO: Что здесь происходит???
    SimpleElectricalModalComponent.prototype.newChanged = function (selectedEquipmentType) {
        if (!selectedEquipmentType) {
            return;
        }
        else {
            this.newOnChanged.emit(selectedEquipmentType);
        }
    };
    //
    SimpleElectricalModalComponent.prototype.addItem = function (itenEl) {
        var _this = this;
        if (typeof this.dataValue[0] === 'string' || typeof this.dataValue[0] === 'undefined') {
            this.dataValue.push(itenEl);
            this.selectedValue = itenEl;
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
            this.newChanged(this.selectedValue);
        }
        else if (this.title === 'Equipment Type') {
            var elementArrayObject = {};
            elementArrayObject['name'] = itenEl;
            this.dataValue.push(elementArrayObject);
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
            this.newChanged(elementArrayObject);
            //
        }
        else {
            var elementArrayObject = {};
            elementArrayObject['name'] = itenEl;
            elementArrayObject['powerSystemType'] = this.dataValue[0].powerSystemType;
            this.dataValue.push(elementArrayObject);
            this.visible = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.itenElement = null;
            this.newChanged(elementArrayObject);
        }
    };
    SimpleElectricalModalComponent.prototype.deleteItem = function (itenEl) {
        var elementIndex;
        for (var i = 0; i < this.dataValue.length; ++i) {
            var arrayElement = this.dataValue[i];
            if (itenEl === arrayElement) {
                elementIndex = i;
            }
        }
        this.dataValue.splice(elementIndex, 1);
        this.visible = false;
        this.modalFlag = false;
    };
    SimpleElectricalModalComponent.prototype.close = function () {
        var _this = this;
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
        this.modalFlag = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SimpleElectricalModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SimpleElectricalModalComponent.prototype, "selectedValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SimpleElectricalModalComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SimpleElectricalModalComponent.prototype, "newOnChanged", void 0);
    SimpleElectricalModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simple-electrical-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/simple-electrical-modal/simple-electrical-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/simple-electrical-modal/simple-electrical-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleElectricalModalComponent);
    return SimpleElectricalModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modals/team-work-modal/team-work-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n  padding-top: 3rem;\r\n}\r\n  \r\n.modal-dialog {\r\n  max-width: 350px!important;\r\n}\r\ninput::-webkit-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\ninput:-ms-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\ninput::placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n.modal-padding {\r\n  padding-top: 10rem;\r\n}\r\n  \r\ninput:focus::-webkit-input-placeholder { color:transparent; }\r\ninput:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\ninput:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\ninput:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modals/team-work-modal/team-work-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n-->\r\n\r\n<div class=\"modal fade\"\r\n     (click)=\"onContainerClicked($event)\"\r\n     tabindex=\"-1\"\r\n     role=\"dialog\"\r\n     [ngClass]=\"{'in': visibleAnimate}\"\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" aria-labelledby=\"exampleModalLongTitle\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLongTitle\">{{title}}</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\" *ngIf=\"addUserInTeam\">\r\n        <div class=\"form-inline\">\r\n          <label class=\"pr-2\"><strong>User e-mail: </strong></label>\r\n          <input class=\"form-control\"\r\n                 type=\"email\"\r\n                 name=\"teamUserEmail\"\r\n                 [(ngModel)]=\"teamUserEmail\"\r\n                 placeholder='Input email for team work'\r\n                 onfocus=\"this.placeholder = ''\"\r\n                 onblur=\"this.placeholder = 'Input user email'\"\r\n                 required\r\n          />\r\n        </div>\r\n        <div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <div>\r\n              <span> Your team</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex\" *ngFor=\"let itemTeamUser of project.team_project\">\r\n            <div class=\"mr-auto p-2\">{{itemTeamUser.email}}</div>\r\n            <div class=\"p-2\">\r\n              <a class=\"btn btn-danger\"\r\n                 data-toggle=\"tooltip\"\r\n                 data-placement=\"top\"\r\n                 title=\"Delete project\"\r\n                 (click)=\"deleteUserFromFolowers(isTeam=true, itemTeamUser.guid)\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"p-2\">\r\n              <a class=\"btn btn-info\"\r\n                 data-toggle=\"tooltip\"\r\n                 data-placement=\"top\"\r\n                 title=\"Move user to browse group\"\r\n                 (click)=\"moveUserFromTeamToBrouse(itemTeamUser)\">\r\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\" *ngIf=\"addUserForBrowse\">\r\n        <div class=\"form-inline\">\r\n          <label class=\"pr-2\"><strong>User e-mail: </strong></label>\r\n          <input class=\"form-control\"\r\n                 name=\"browseUserEmail\"\r\n                 [(ngModel)]=\"browseUserEmail\"\r\n                 placeholder='Input email for browse'\r\n                 onfocus=\"this.placeholder = ''\"\r\n                 onblur=\"this.placeholder = 'Input user email'\" />\r\n        </div>\r\n        <div>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <div>\r\n              <span> Your folowers</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex\" *ngFor=\"let itemTeamUser of project.brows_team_project\">\r\n            <div class=\"mr-auto p-2\">{{itemTeamUser.email}}</div>\r\n            <div class=\"p-2\">\r\n              <a class=\"btn btn-danger\"\r\n                 data-toggle=\"tooltip\"\r\n                 data-placement=\"top\"\r\n                 title=\"Delete user\"\r\n                 (click)=\"deleteUserFromFolowers(isTeam=false, itemTeamUser.guid)\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"p-2\">\r\n              <a class=\"btn btn-info\"\r\n                 data-toggle=\"tooltip\"\r\n                 data-placement=\"top\"\r\n                 title=\"Move user to team group\"\r\n                 (click)=\"moveUserFromFoloversToTeam(itemTeamUser)\">\r\n                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div class=\"row\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <div *ngIf=\"addUserInTeam\" class=\"form-group pr-1\">\r\n              <button class=\"btn btn-success\" (click)=\"addUserToTeam(teamUserEmail)\">Add user to team</button>\r\n            </div>\r\n            <div *ngIf=\"addUserForBrowse\" class=\"form-group pr-1\">\r\n              <button class=\"btn btn-success\" (click)=\"addBrowseUser(browseUserEmail)\">Add folower</button>\r\n            </div>\r\n            <div class=\"pl-1 pr-2\">\r\n              <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/modals/team-work-modal/team-work-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamWorkModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamWorkModalComponent = (function () {
    function TeamWorkModalComponent(projectService, usersService, flashMessage) {
        this.projectService = projectService;
        this.usersService = usersService;
        this.flashMessage = flashMessage;
        this.visible = false;
        this.addUserInTeam = false;
        this.addUserForBrowse = false;
        this.visibleAnimate = false;
    }
    /**
       * Method to display a modal window with a form where the user
       * can specify the user's email with which he wants to continue working on his project
     * @param addTeamUser boolean flag for display to the user necessary part
     * @param itemProject item project fron project.component.ts
     */
    TeamWorkModalComponent.prototype.addTeamUser = function (addTeamUser, itemProject) {
        var _this = this;
        this.addUserInTeam = addTeamUser;
        this.project = itemProject;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    /**
     * The method of displaying a modal window with a form in which the user can specify
     * the email address of the user to whom he wants to provide
     * the ability to view data about the project without editing them
     * @param addTeamUser boolean flag to for display to the user the necessary part
     * @param itemProject
     */
    TeamWorkModalComponent.prototype.addViewerUser = function (addTeamUser, itemProject) {
        var _this = this;
        this.addUserForBrowse = addTeamUser;
        this.project = itemProject;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    /**
     * Method to remove a user from a project collaboration team
     * @param userguid unique user guid
     * @returns HTTP response code or error message
     */
    TeamWorkModalComponent.prototype.deleteUserFromTeam = function (userguid) {
        var projectId = this.project._id;
        var projectTeamData = this.project.team_project;
        var itemTeamUserGuid = userguid;
        for (var i = 0; i < projectTeamData.length; ++i) {
            var itemTeamPlayer = projectTeamData[i];
            if (itemTeamUserGuid === itemTeamPlayer.guid) {
                projectTeamData.splice(i, 1);
                this.project['updated_date'] = new Date().toLocaleDateString();
                this.updateProject(projectId, this.project);
                this.hide();
                return;
            }
        }
    };
    /**
     * Method of moving a user from an editing group to a project viewing group
     * @param teamUser user data email and guid
     */
    TeamWorkModalComponent.prototype.moveUserFromTeamToBrouse = function (teamUser) {
        var projectId = this.project._id;
        var projectTeamData = this.project.team_project;
        var projectBrowsData = this.project.brows_team_project;
        var teamUserData = teamUser;
        for (var i = 0; i < projectTeamData.length; ++i) {
            var itemTeamPlayer = projectTeamData[i];
            if (teamUserData.guid === itemTeamPlayer.guid) {
                for (var k = 0; k < projectBrowsData.length; ++k) {
                    var itemBrowsingProjectData = projectBrowsData[k];
                    if (itemBrowsingProjectData.guid === teamUser.guid) {
                        this.hide();
                        return;
                    }
                }
                projectTeamData.splice(i, 1);
                projectBrowsData.push(teamUserData);
                this.project['updated_date'] = new Date().toLocaleDateString();
                this.updateProject(projectId, this.project);
                this.hide();
                return;
            }
        }
    };
    /**
     * Method to remove a user from a collaborative group
     * @param isTeam boolean flag for separate team and view grop
     * @param userGuid unic user identifier
     */
    TeamWorkModalComponent.prototype.deleteUserFromFolowers = function (isTeam, userGuid) {
        var projectTeamData = null;
        var projectId = this.project._id;
        if (isTeam) {
            projectTeamData = this.project.team_project;
        }
        else {
            projectTeamData = this.project.brows_team_project;
        }
        for (var i = 0; i < projectTeamData.length; ++i) {
            var itemTeamData = projectTeamData[i];
            if (itemTeamData.guid === userGuid) {
                projectTeamData.splice(i, 1);
                this.project['updated_date'] = new Date().toLocaleDateString();
                this.updateProject(projectId, this.project);
                this.hide();
                return;
            }
        }
    };
    /**
     * Method for moving a user from a view group to a project editing group
     * @param itemViewerUser
     */
    TeamWorkModalComponent.prototype.moveUserFromFoloversToTeam = function (itemViewerUser) {
        var projectId = this.project._id;
        var projectTeamData = this.project.team_project;
        var projectBrowsData = this.project.brows_team_project;
        var viewerUserData = itemViewerUser;
        for (var i = 0; i < projectBrowsData.length; ++i) {
            var itemBrowsingUser = projectBrowsData[i];
            if (viewerUserData.guid === itemBrowsingUser.guid) {
                for (var k = 0; k < projectTeamData.length; ++k) {
                    var itemTeamProjectData = projectTeamData[k];
                    if (itemTeamProjectData.guid === itemViewerUser.guid) {
                        this.hide();
                        return;
                    }
                }
                projectBrowsData.splice(i, 1);
                projectTeamData.push(itemViewerUser);
                this.project['updated_date'] = new Date().toLocaleDateString();
                this.updateProject(projectId, this.project);
                this.hide();
                return;
            }
        }
    };
    /**
     * Method of adding a user to a group to collaborate on a project
     * @param teamUser
     */
    TeamWorkModalComponent.prototype.addUserToTeam = function (userEmail) {
        var _this = this;
        if (userEmail === this.project.creatorEmail) {
            this.flashMessage.show('You cannot add yourself to a group to collaborate on a project.', { cssClass: 'alert-danger', timeout: 3000 });
            this.hide();
            return;
        }
        var isUserInTeamGroup = this.isUserInItemGroup(this.project.brows_team_project, userEmail);
        if (isUserInTeamGroup) {
            this.hide();
            return;
        }
        var isUserInBrowsingTeam = this.isUserInItemGroup(this.project.team_project, userEmail);
        if (isUserInBrowsingTeam) {
            this.hide();
            return;
        }
        this.teamUserEmail = userEmail;
        this.usersService.getItemUserByEmail(this.teamUserEmail).subscribe(function (data) {
            if (data.guid) {
                var teamUserData = { guid: '', email: '' };
                teamUserData.guid = data.guid;
                teamUserData.email = userEmail;
                _this.project.team_project.push(teamUserData);
                _this.updateProject(_this.project._id, _this.project);
            }
            else {
                _this.flashMessage.show('We did not find a registered user with such email on our website.', { cssClass: 'alert-danger', timeout: 3000 });
                _this.hide();
            }
        });
    };
    /**
     * The method of adding a user to a group that can view the selected project without editing it.
     * @param browseEmail
     */
    TeamWorkModalComponent.prototype.addBrowseUser = function (browseEmail) {
        var _this = this;
        if (browseEmail === this.project.creatorEmail) {
            this.flashMessage.show('You can not add yourself to the list of users to view the project.', { cssClass: 'alert-danger', timeout: 3000 });
            this.hide();
            return;
        }
        var isUserInTeamGroup = this.isUserInItemGroup(this.project.brows_team_project, browseEmail);
        if (isUserInTeamGroup) {
            this.hide();
            return;
        }
        var isUserInBrowsingTeam = this.isUserInItemGroup(this.project.team_project, browseEmail);
        if (isUserInBrowsingTeam) {
            this.hide();
            return;
        }
        this.browseUserEmail = browseEmail;
        this.usersService.getItemUserByEmail(this.browseUserEmail).subscribe(function (data) {
            if (data.guid) {
                var viewerUserData = { guid: '', email: '' };
                viewerUserData.email = _this.browseUserEmail;
                viewerUserData.guid = data.guid;
                _this.project.brows_team_project.push(viewerUserData);
                _this.updateProject(_this.project._id, _this.project);
            }
            else {
                _this.flashMessage.show('We did not find a registered user with such email on our website.', { cssClass: 'alert-danger', timeout: 3000 });
                _this.hide();
            }
        });
    };
    /**
     * Method for checking the availability of the specified user in the group
     * @param groupUserList array userGroup {email; guid}
     * @param userEmail user email entered in text field
     */
    TeamWorkModalComponent.prototype.isUserInItemGroup = function (groupUserList, userEmail) {
        for (var i = 0; i < groupUserList.length; ++i) {
            var itemViewerUser = groupUserList[i];
            if (itemViewerUser.email === userEmail) {
                this.flashMessage.show('User is already on this list.', { cssClass: 'alert-danger', timeout: 3000 });
                return true;
            }
            return false;
        }
    };
    /**
     * Method of sending updated data to the Project Service
     * @param projectId
     * @param project
     */
    TeamWorkModalComponent.prototype.updateProject = function (projectId, project) {
        var _this = this;
        this.projectService.updateProject(projectId, project).subscribe(function (response) {
            if (response.status === 'success') {
                _this.flashMessage.show('Project has been updated.', { cssClass: 'alert-success', timeout: 3000 });
                _this.hide();
            }
            else {
                _this.flashMessage.show('Project has not been updated.', { cssClass: 'alert-danger', timeout: 3000 });
                _this.hide();
            }
        });
    };
    /**
     * The method of cleaning the form fields and hiding the modal window
     */
    TeamWorkModalComponent.prototype.hide = function () {
        this.browseUserEmail = null;
        this.itemElement = null;
        this.project = null;
        this.addUserInTeam = false;
        this.addUserForBrowse = false;
        this.teamUserEmail = null;
        this.visible = false;
    };
    /**
     * The method of tracking mouse clicks outside the modal window
     * @param event keeps track of the mouse
     */
    TeamWorkModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    /**
     * Method for closing a modal window and clearing all values in inputs
     */
    TeamWorkModalComponent.prototype.close = function () {
        this.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TeamWorkModalComponent.prototype, "dataValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TeamWorkModalComponent.prototype, "title", void 0);
    TeamWorkModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team-work-modal',
            template: __webpack_require__("../../../../../src/app/components/modals/team-work-modal/team-work-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modals/team-work-modal/team-work-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], TeamWorkModalComponent);
    return TeamWorkModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\na {\r\n  font-family: Roboto-Light;\r\n}\r\n\r\n.ampx-tools-button {\r\n  background: #ffb248;\r\n  color: #FFFFFF!important;\r\n  border-radius: 25px;\r\n  padding: 8px 20px;\r\n  width: 180px;\r\n  border: 0;\r\n}\r\n\r\n.text-center {\r\n  text-align:center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-white\">\r\n  <a class=\"navbar-brand d-block img-fluid\" routerLink=\"/\">\r\n    <picture>\r\n      <source media=\"(min-width: 1200px)\" [srcset]=\"companyLogo_1200\">\r\n      <source media=\"(min-width: 992px)\" [srcset]=\"companyLogo_768\">\r\n      <source [srcset]=\"companyLogo_768\">\r\n      <img class=\"d-block img-fluid\" [src]=\"companyLogo_1200\" alt=\"companyLogo\" sr-only=\"AMPX\">\r\n    </picture>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\r\n    <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" routerLink=\"/\">Home <span class=\"sr-only\"> Home </span></a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" routerLink=\"/about_us\"> About Us <span class=\"sr-only\"> About Us </span></a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" routerLink=\"/services\"> Services <span class=\"sr-only\"> Services </span></a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" routerLink=\"/contact_us\"> Contact Us <span class=\"sr-only\"> Contact Us </span></a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn() && !authService.masterLogedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" routerLink=\"/project\">Project <span class=\"sr-only\"> Project </span></a>\r\n        </div>\r\n      </li>\r\n      <!--\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link h3\" routerLink=\"/login\"> Login <span class=\"sr-only\"> Login </span></a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link h3\" routerLink=\"/register\"> Register <span class=\"sr-only\"> Register </span></a>\r\n        </li>\r\n      -->\r\n      <!-- -->\r\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4 ampx-tools-button text-center\" routerLink=\"/signin\"> AMP X CORE <span class=\"sr-only\"> AMP X CORE </span></a>\r\n        </div>\r\n      </li>\r\n      <!-- -->\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" (click)=\"onLogoutClick()\" href=\"#\"> Logout <span class=\"sr-only\"> Logout </span></a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" routerLink=\"/profile\"> Profile <span class=\"sr-only\"> Profile </span></a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn() && authService.masterLogedIn()\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <a class=\"nav-link h4\" routerLink=\"/superadmin\">Admin panel <span class=\"sr-only\"> Admin panel </span></a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.companyLogo_1200 = 'assets/img/1200/header/AMP-X-logo.png';
        this.companyLogo_768 = 'assets/img/768/header/AMP-X-logo.png';
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/'], { replaceUrl: true });
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.userName}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">User email address: {{user.email}}</li>\n    <li class=\"list-group-item\">User first name: {{user.firstName}}</li>\n    <li class=\"list-group-item\">User last name: {{user.lastName}}</li>\n    <li class=\"list-group-item\">User company name: {{user.companyName}}</li>\n    <li class=\"list-group-item\">User from city: {{user.city}}</li>\n    <li class=\"list-group-item\">User phone number: {{user.phone}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumb {\r\n  background-color: white !important;\r\n}\r\n\r\n.text-style{\r\n  font-family: Roboto-Bolt!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\n.temporary-text-style {\r\n  font-family: Roboto-Light!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\n.disable-decoration {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.cursor-style {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-style\" *ngIf=\"project\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\" style=\"background-color: white!important\">\n          <li *ngIf=\"isAdmin\" class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/superadmin']\">\n              <strong>Admin panel</strong>\n            </a>\n          </li>\n          <li *ngIf=\"!isAdmin\" class=\"breadcrumb-item\">\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project']\">\n              <strong>Projects List</strong>\n            </a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Dashboard for Project {{project.title}}</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-center pt-3\">\n    <h1>Project <strong>{{project.title}}</strong></h1>\n  </div>\n    <div class=\"d-flex justify-content-center pt-2\">\n      <h4>To start working</h4>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"p-2 h5\">\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'electricals']\">\n            <strong>\n              Electrical Load List\n            </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">Electrical Equipment List</div>\n        <div class=\"p-2 h5\">\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'cables']\">\n            <strong>\n              Cable Schedule\n            </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'sldshedules']\">\n            <strong>\n              Single Line Schedule\n            </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'controllers']\">\n            <strong>\n              Controllers Schedule\n            </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'instrumentations']\">\n            <strong>\n              Instrumentation Index\n            </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">\n          <!--[routerLink]=\"['/project', projectId, 'ioassignment']\" -->\n          <!--(click)=\"createIOAssignment()\"-->\n          <a class=\"cursor-style disable-decoration text-style\" [routerLink]=\"['/project', projectId, 'ioassignment']\">\n            <strong>\n              IO Assignment\n            </strong>\n          </a>\n        </div>\n        <div class=\"p-2 h5 temporary-text-style\">IO List</div>\n      </div>\n    </div>    \n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/project-dashboard/project-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_io_assignment_service__ = __webpack_require__("../../../../../src/app/services/io-assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDashboardComponent = (function () {
    function ProjectDashboardComponent(
        // private route: ActivatedRoute,
        projectService, ioAssignmentService, spinnerService, router, route) {
        this.projectService = projectService;
        this.ioAssignmentService = ioAssignmentService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.route = route;
        this.projectId = this.route.snapshot.params['id'];
    }
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var superAdminEmail = 'superAdmin@ampx.ca';
        var adminEmail = 'admin@ampx.ca';
        this.isAdmin = false;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userEmail = u.email;
            this.userGuid = u.guid;
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.projectService.getProjectById(this.projectId).subscribe(function (itemProject) {
            _this.project = itemProject;
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProjectDashboardComponent.prototype.createIOAssignment = function () {
        var _this = this;
        this.spinnerService.show();
        this.ioAssignment = {};
        this.ioAssignment.length = 0;
        this.ioAssignmentService.createIoAssignment(this.projectId, this.ioAssignment).subscribe(function (res) {
            // let id = res['_id'];
            // let responseId = res[res.length-1]['_id']
            var routeToIOAssignment = '/project/' + _this.route.snapshot.params['id'] + '/ioassignment/';
            _this.spinnerService.hide();
            _this.router.navigate([routeToIOAssignment]);
        }, function (err) {
            console.log(err);
        });
    };
    ProjectDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-dashboard',
            template: __webpack_require__("../../../../../src/app/components/project-dashboard/project-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-dashboard/project-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_io_assignment_service__["a" /* IoAssignmentService */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProjectDashboardComponent);
    return ProjectDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: \"Roboto-Light\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Roboto-Bolt\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n    font-weight: bold;\r\n  }\r\n\r\n  .table-text-style{\r\n    font-family: Roboto-Bolt!important;\r\n    color: #4c4c4c!important;\r\n  }\r\n\r\n  .disable-decoration {\r\n    text-decoration: none!important;\r\n  }\r\n  \r\n  .table-cursor {\r\n    cursor: pointer;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <h1>\r\n      List of projects\r\n      <a class=\"btn btn-primary\"\r\n         data-toggle=\"tooltip\"\r\n         data-placement=\"top\"\r\n         title=\"Add new project\"\r\n         (click)=\"addProjectModal.showAddModal(createProject)\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </h1>\r\n  </div>\r\n  <div *ngIf=\"project.length\">\r\n    <table class=\"table table-sm table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let itemProject of project\">\r\n          <td>\r\n            <a \r\n              class=\"table-link table-cursor disable-decoration table-text-style\"\r\n              [routerLink]=\"['/project', itemProject._id]\"\r\n            >\r\n              <strong>{{itemProject.title}}</strong>\r\n            </a>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-2\">\r\n                <a class=\"btn btn-success\"\r\n                  data-toggle=\"tooltip\"\r\n                  data-placement=\"top\"\r\n                  title=\"Change project\"\r\n                  (click)=\"addProjectModal.showChangeProjectModal(chengeProject, itemProject)\">\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <a class=\"btn btn-warning\"\r\n                  data-toggle=\"tooltip\"\r\n                  data-placement=\"top\"\r\n                  title=\"Copy project\"\r\n                  (click)=\"copyProjectModal.showSimpleCopyModal(copyProjectFlag, itemProject)\">\r\n                <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <a class=\"btn btn-danger\"\r\n                   data-toggle=\"tooltip\"\r\n                   data-placement=\"top\"\r\n                   title=\"Delete project\"\r\n                   (click)=\"addProjectModal.showDropModal(dropProject, itemProject)\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <a class=\"btn btn-primary\"\r\n                   data-toggle=\"tooltip\"\r\n                   data-placement=\"top\"\r\n                   title=\"Add team user\"\r\n                   (click)=\"addTeamWorkModal.addTeamUser(true, itemProject)\">\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <a class=\"btn btn-info\"\r\n                   data-toggle=\"tooltip\"\r\n                   data-placement=\"top\"\r\n                   title=\"Add user for view\"\r\n                   (click)=\"addTeamWorkModal.addViewerUser(true, itemProject)\">\r\n                  <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"teamProjects.length\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <h1>List of projects for teamwork</h1>\r\n    </div>\r\n    <table class=\"table table-sm table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Creator</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let teamItemProject of teamProjects\">\r\n          <td>\r\n            <a class=\"table-link table-cursor disable-decoration table-text-style\" [routerLink]=\"['/project', teamItemProject._id]\"><strong>{{teamItemProject.title}}</strong></a>\r\n          </td>\r\n          <td>\r\n            <strong>{{teamItemProject.creatorEmail}}</strong>\r\n          </td>\r\n          <td>\r\n            <a class=\"btn btn-warning\"\r\n              data-toggle=\"tooltip\"\r\n              data-placement=\"top\"\r\n              title=\"Copy project\"\r\n              (click)=\"copyProjectModal.showSimpleCopyModal(copyProjectFlag, teamItemProject)\">\r\n              <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"browsingProjects.length\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <h1>List of projects to view</h1>\r\n    </div>\r\n    <table class=\"table table-sm table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Creator</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let browsingItemProject of browsingProjects\">\r\n          <td>\r\n            <a class=\"table-link table-cursor disable-decoration table-text-style\" [routerLink]=\"['/project', browsingItemProject._id]\"><strong>{{browsingItemProject.title}}</strong></a>\r\n          </td>\r\n          <td>\r\n            <strong>{{browsingItemProject.creatorEmail}}</strong>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <!---\r\n    <div *ngIf=\"teamProjects\">\r\n      <table class=\"table table-sm table-text-style\">\r\n        <thead>\r\n          <tr>\r\n            <th>Title</th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let itemTeamProject of teamProjects\">\r\n            <td>\r\n              <a class=\"table-link table-cursor disable-decoration table-text-style\" [routerLink]=\"['/project', itemTeamProject._id]\">\r\n                <strong>{{itemTeamProject.title}}</strong>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n    </div>\r\n  -->\r\n  <app-projects-modal\r\n    [dataValue]=\"project\"\r\n    [userGuid]=\"userGuid\"\r\n    [creatorEmail]=\"creatorEmail\"\r\n    [title]=\"'Project functionality'\"\r\n    #addProjectModal\r\n  ></app-projects-modal>\r\n  <app-team-work-modal\r\n    [dataValue]=\"project\"\r\n    [title]=\"'Team work functionality'\"\r\n    #addTeamWorkModal\r\n  ></app-team-work-modal>\r\n  <app-team-work-modal\r\n    [dataValue]=\"project\"\r\n    [title]=\"'Team work functionality'\"\r\n    #addViewerUser\r\n  ></app-team-work-modal>\r\n  <app-copy-project-modal\r\n    #copyProjectModal\r\n    [guid]=\"userGuid\"\r\n    [dataValue]=\"project\"\r\n    [title]=\"'Clone project'\"\r\n  ></app-copy-project-modal>\r\n</div>\r\n<!--\r\n<div class=\"container\">\r\n  <div *ngIf=\"userProjectList\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <h1>Your list of projects\r\n        <a\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"tooltip\"\r\n          data-placement=\"top\"\r\n          title=\"Add new project\"\r\n        >\r\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"project\">\r\n    <table class=\"table table-sm table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let itemProject of project\">\r\n          <td>\r\n            <a class=\"table-link table-cursor disable-decoration table-text-style\" [routerLink]=\"['/project', itemProject._id]\">\r\n            <strong>{{itemProject.title}}</strong>\r\n            </a>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-3\">\r\n                <a\r\n                  class=\"btn btn-success\"\r\n                  data-toggle=\"tooltip\"\r\n                  data-placement=\"top\"\r\n                  title=\"Change project\"\r\n                >\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <a\r\n                  class=\"btn btn-danger\"\r\n                  data-toggle=\"tooltip\"\r\n                  data-placement=\"top\"\r\n                  title=\"Delete project\"\r\n                >\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <a\r\n                  class=\"btn btn-primary\"\r\n                  data-toggle=\"tooltip\"\r\n                  data-placement=\"top\"\r\n                  title=\"Add team user\"\r\n                >\r\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <a\r\n                  class=\"btn btn-info\"\r\n                  data-toggle=\"tooltip\"\r\n                  data-placement=\"top\"\r\n                  title=\"Add user for view\"\r\n                >\r\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n                </a>\r\n                </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <hr/>\r\n  <div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <h1>List of projects for teamwork</h1>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"teamProjectList\">\r\n    <table class=\"table table-sm table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Creator</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let teamItemProject of teamProjectList\">\r\n          <td>\r\n            <strong>{{teamItemProject.title}}</strong>\r\n          </td>\r\n          <td>\r\n            <strong>{{teamItemProject.creator}}</strong>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <h1>List of projects to view</h1>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"teamViewingProjectList\">\r\n    <table class=\"table table-sm table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Creator</th>\r\n          <th>Team</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let teamViewingItemProject of teamViewingProjectList\">\r\n          <td>\r\n            <strong>{{teamViewingItemProject.title}}</strong>\r\n          </td>\r\n          <td>\r\n            <strong>{{teamViewingItemProject.creator}}</strong>\r\n          </td>\r\n          <td>\r\n            <ul>\r\n              <li *ngFor=\"let teamUser of teamViewingItemProject.team\">\r\n                <strong>\r\n                  {{teamUser.email}}\r\n                </strong>\r\n              </li>\r\n            </ul>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = (function () {
    function ProjectComponent(projectService, router, spinnerService) {
        this.projectService = projectService;
        this.router = router;
        this.spinnerService = spinnerService;
        // value: any;
        this.createProject = true;
        this.dropProject = true;
        this.chengeProject = true;
        this.copyProjectFlag = true;
        this.addTeamUser = false;
        this.addViewerUser = false;
        this.project = [];
        this.teamProjects = [];
        this.browsingProjects = [];
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userGuid = u.guid;
            this.creatorEmail = u.email;
        }
        // this.spinnerService.show();
        this.projectService.getProject(this.userGuid).subscribe(function (projectList) {
            _this.project = projectList;
            _this.projectLenth = projectList.length || 0;
            // this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
        //
        // this.spinnerService.show();
        this.projectService.getTeamProject(this.userGuid).subscribe(function (teamProjectList) {
            _this.teamProjects = teamProjectList;
            // this.spinnerService.hide();
        }, function (err) {
            console.error('Somthing was wrong in service for team work');
            return false;
        });
        // this.spinnerService.show();
        this.projectService.getBrowsingProject(this.userGuid).subscribe(function (browsingProjectList) {
            _this.browsingProjects = browsingProjectList;
            // this.spinnerService.hide();
        }, function (err) {
            console.error('Somthing was wrong in servise for browsing project');
            return false;
        });
    };
    ProjectComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.project) {
            return;
        }
        else if (this.projectLenth < Object.keys(this.project).length || this.projectLenth > Object.keys(this.project).length) {
            this.projectService.getProject(this.userGuid).subscribe(function (projectList) {
                if (projectList) {
                    _this.project = projectList;
                    _this.projectLenth = projectList.length;
                }
                else {
                    console.error('Some problem with serwer-side or servise params for getting update project list');
                    return;
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        return;
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/components/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>User Name</label>\n    <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>First Name</label>\n    <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n      <label>Company Name</label>\n      <input type=\"text\" [(ngModel)]=\"companyName\" name=\"companyName\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>City</label>\n    <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Phone Number</label>\n    <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            userName: this.userName,
            firstName: this.firstName,
            lastName: this.lastName,
            companyName: this.companyName,
            city: this.city,
            phone: this.phone,
            password: this.password
        };
        // equired Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmeil(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/signin']);
            }
            else {
                _this.flashMessage.show('Something went wrong!!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:12px;\r\n  }\r\n  .smoll-subparagraph {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 16px;\r\n    color: #4c4c4c;\r\n  }\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 30px;\r\n    color: #4c4c4c;\r\n  }\r\n  .before-ul-textsize {\r\n    font-size: 16px;\r\n  }\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 15px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 10px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 5px;\r\n    width: 5px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n  ol li {\r\n    height: 5px;\r\n    width: 5px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n  .carousel-indicators {\r\n    bottom: -10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:14px;\r\n  }\r\n\r\n  .smoll-subparagraph {\r\n    font-size: 20px;\r\n    font-family: Roboto-Bolt;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 40px;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 25px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 16px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 992px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:16px;\r\n  }\r\n  \r\n  .smoll-subparagraph {\r\n    font-size: 20px;\r\n    font-family: Roboto-Bolt;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 40px;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 30px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 30px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:18px;\r\n  }\r\n  \r\n  .smoll-subparagraph {\r\n    font-size: 20px;\r\n    font-family: Roboto-Bolt;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 40px;\r\n    color: #4c4c4c;\r\n    line-height: 10px;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 40px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 40px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .general-text-size {\r\n    font-family: Roboto-Light;\r\n    font-size:20px;\r\n  }\r\n  \r\n  .smoll-subparagraph {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 30px;\r\n    color: #4c4c4c;\r\n  }\r\n\r\n  .big-subparagraf {\r\n    font-family: Roboto-Bolt;\r\n    font-size: 50px;\r\n    color: #4c4c4c;\r\n    line-height: 10px;\r\n  }\r\n\r\n  .carousel-caption-header-text{\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 80px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  .carousel-caption-header-long-text {\r\n    color: rgba(255, 255, 255, 1);\r\n    font-size: 55px;\r\n    font-family: Roboto-Bolt;\r\n  }\r\n\r\n  ol li.active {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: #FFB248!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  \r\n  ol li {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: white!important;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\r\n}\r\n\r\n.circle_style {\r\n  list-style-type: circle;\r\n}\r\n\r\n.inner-circle-style{\r\nlist-style-type: disc;\r\n}\r\n\r\n.li_color_style {\r\n  color: #ffb248;\r\n  list-style-type: disc;\r\n}\r\n\r\n.custom-carousel-caption{\r\n  right: 60%!important;\r\n  left: 10%!important;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  height: 100%;\r\n  bottom: 0px!important;\r\n}\r\n\r\n.carousel-indicators-position {\r\n  right: 50%!important;\r\n}\r\n\r\n.text-justify {\r\n  text-align:justify;\r\n}\r\n\r\n.text-color {\r\n  color: #4c4c4c;\r\n  font-family: Roboto-Light;\r\n}\r\n\r\nspan.industry-text{\r\n  background-color: white;\r\n  padding-left: 5px; \r\n  padding-right: 5px; \r\n  z-index: 2;\r\n}\r\n\r\n.black-line{\r\n  margin-top: 20px; \r\n  background-color: black; \r\n  width: 100%; \r\n  height: 2px; \r\n  position: absolute;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n\r\n.h-100{\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"carouselExampleIndicators3\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators carousel-indicators-position\">\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"2\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"3\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"4\"></li>\n      <li data-target=\"#carouselExampleIndicators3\" data-slide-to=\"5\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\">\n          <picture>\n            <source media=\"(min-width: 1200px)\" [srcset]=\"projectServices_1920\">\n            <source media=\"(min-width: 992px)\" [srcset]=\"projectServices_1200\">\n            <source media=\"(min-width: 768px)\" [srcset]=\"projectServices_992\">\n            <source media=\"(min-width: 576px)\" [srcset]=\"projectServices_768\">\n            <source [srcset]=\"projectServices_576\">\n            <img class=\"d-block img-fluid\" [src]=\"projectServices_1920\" alt=\"Project Services\" sr-only=\"Project Services\">\n          </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Project</strong></p>\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Services</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"engineeringAnalysis_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"engineeringAnalysis_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"engineeringAnalysis_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"engineeringAnalysis_768\">\n          <source [srcset]=\"engineeringAnalysis_576\">\n          <img class=\"d-block img-fluid\" [src]=\"engineeringAnalysis_1920\" alt=\"Engineering analysis and studies\" sr-only=\"Engineering analysis and studies\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-long-text pl-4\"><strong>Engineering</strong></p>\n            <p class=\"carousel-caption-header-long-text pl-4\"><strong>Analysis and</strong></p>\n            <p class=\"carousel-caption-header-long-text pl-4\"><strong>Studies</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"fieldServices_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"fieldServices_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"fieldServices_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"fieldServices_768\">\n          <source [srcset]=\"fieldServices_576\">\n          <img class=\"d-block img-fluid\" [src]=\"fieldServices_1920\" alt=\"Field services\" sr-only=\"Field services\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Field</strong></p>\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Services</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"oilAndGas_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"oilAndGas_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"oilAndGas_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"oilAndGas_768\">\n          <source [srcset]=\"oilAndGas_576\">\n          <img class=\"d-block img-fluid\" [src]=\"oilAndGas_1920\" alt=\"Oil & Gas\" sr-only=\"Oil & Gas\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Oil & Gas</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"powerSystem_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"powerSystem_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"powerSystem_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"powerSystem_768\">\n          <source [srcset]=\"powerSystem_576\">\n          <img class=\"d-block img-fluid\" [src]=\"powerSystem_1920\" alt=\"Power systems\" sr-only=\"Power systems\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Power</strong></p>\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Systems</strong></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"renewables_1920\">\n          <source media=\"(min-width: 992px)\" [srcset]=\"renewables_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"renewables_992\">\n          <source media=\"(min-width: 576px)\" [srcset]=\"renewables_768\">\n          <source [srcset]=\"renewables_576\">\n          <img class=\"d-block img-fluid\" [src]=\"renewables_1920\" alt=\"Renewables\" sr-only=\"Renewables\">\n        </picture>\n        <div class=\"carousel-caption custom-carousel-caption d-none d-block\">\n          <div class=\"d-flex align-items-start flex-column carousel-text-container\">\n            <p class=\"carousel-caption-header-text pl-4\"><strong>Renewables</strong></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators3\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"container pb-3\">\n    <div class=\"row justify-content-between\">\n      <div class=\"col-12 pt-4 text-justify general-text-size\">\n        <span>At AMP X, we provide electrical, instrumentation and controls (E, I and C) services for greenfield or brownfield projects ranging from studies, to small management of change (MOC) scopes, to capital projects. We also provide a wide range of field and project support services.\n        </span>\n      </div>\n    </div>\n    <div class=\"row justify-content-between\">\n      <div class=\"col-12 pt-4 text-justify general-text-size\">\n        <span>Our customers include end-users such as oil & gas companies, as well as equipment vendors, other engineering service providers and construction contractors. To support our customers’ varying project requirements, we are able to complete our engineering using multiple industry standards.\n        </span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <hr/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\" >\n        <p class=\"smoll-subparagraph\">Our</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"big-subparagraf\"><strong>Services</strong></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 mb-3 mt-3\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"gearIcon_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"gearIcon_768\">\n          <source [srcset]=\"gearIcon_576\">\n          <img class=\"d-block img-fluid\" [src]=\"gearIcon_1200\" alt=\"gear\" sr-only=\"gear\">\n        </picture>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"smoll-subparagraph\"><strong>Engineering Design and Project Services</strong></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6 text-color\">\n        <ul class=\"general-text-size\">\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Front end and detailed engineering phases</strong></span>\n          </li>\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Electrical engineering services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Specification development</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Area classification and fugitive emissions studies </span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Power distribution systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Grounding systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Electric heat trace systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Complete electrical design packages for new and existing facilities</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Installation details and layouts</span>\n              </li>\n            </ul>\n          </li>\n          <li class=\"circle_style\">\n            <span><strong class=\"text-color\">Instrumentation engineering services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Instrument selection and sizing</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Specification and data sheet development</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Burner management systems</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Installation details and layouts</span>\n              </li>\n            </ul>\n          </li>\n      </ul>\n      </div>\n      <div class=\"col-12 col-md-6 text-color\">\n        <ul class=\"general-text-size\">\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Control systems engineering services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Control room and I/O building designs</span>\n              </li>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Control narratives; logic diagrams; cause & effects</span>\n              </li>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Process control and safety system design and architectural layouts</span>\n              </li>\n              <li class=\"li_color_style\">\n                  <span class=\"text-color\">Programming services – vendor neutral; multiple systems and platforms supported</span>\n              </li>\n            </ul>\n          </li>\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Facilitation; design/model review and HAZOP support</strong></span>\n          </li>\n          <li class=\"circle_style\">\n            <span class=\"text-color\"><strong>Project services:</strong></span>\n            <ul>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Project management</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Procurement and contracts support </span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Project controls</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Capital cost estimating</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Project execution plan development – using Project</span>\n              </li>\n              <li class=\"li_color_style\">\n                <span class=\"text-color\">Management Institute (PMI) or company-specific frameworks</span>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"calculator_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"calculator_768\">\n                  <source [srcset]=\"calculator_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"calculator_1200\" alt=\"calculator\" sr-only=\"calculator\">\n                </picture>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <p class=\"smoll-subparagraph\"><strong>Engineering Analysis and Studies</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span class=\"text-color\"><strong>Feasibility studies and alternatives analysis</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span class=\"text-color\"><strong>Facility assessments and audits for safety, reliability, capacity, system performance and future expansion capabilities</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span class=\"text-color\"><strong>Power systems studies:</strong></span>\n                    <ul>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Fault and load flow</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Motor starting</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Protective relay settings and coordination</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Arc flash hazard analysis</span>\n                      </li>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Touch and step potential</span>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"tools_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"tools_768\">\n                  <source [srcset]=\"tools_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"tools_1200\" alt=\"tools\" sr-only=\"tools\">\n                </picture>\n              </div>\n              <div class=\"col-12 text-color\">\n                <p class=\"smoll-subparagraph\"><strong>Field Services</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Construction work package development</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Construction management/support</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Field inspections (certified safety codes officer)</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Pre-commissioning, commissioning and start-up support</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>As-building and asset management:</strong></span>\n                    <ul>\n                      <li class=\"li_color_style\">\n                        <span class=\"text-color\">Creating asset and design databases to as-built conditions for new and existing facilities</span>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <hr/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"smoll-subparagraph\">Our</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <p class=\"big-subparagraf\"><strong>Specialties</strong></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"pumpjack_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"pumpjack_768\">\n                  <source [srcset]=\"pumpjack_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"pumpjack_1200\" alt=\"pump jack\" sr-only=\"pump jack\">\n                </picture>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <p class=\"smoll-subparagraph\"><strong>Oil & Gas</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul  class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Gathering systems</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Gas processing plants</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>LNG Facilities</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Well sites and oil batteries</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Pipelines and midstream facilities: pump stations, terminals, compression</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Oil sands facilities: in-situ, mining, upgrading</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Tank farms</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Loading facilities</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Refineries</strong></span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"lighting_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"lighting_768\">\n                  <source [srcset]=\"lighting_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"lighting_1200\" alt=\"lighting\" sr-only=\"lighting\">\n                </picture>\n              </div>\n              <div class=\"col-12 text-color\">\n                <p class=\"smoll-subparagraph\"><strong>Power Systems</strong></p>\n              </div>\n              <div class=\"col-12 text-color\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Power generation and co-generation</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Substations and distribution</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Temporary power solutions</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Commercial: new services and service upgrades</strong></span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 mt-3 mb-3\">\n                <picture>\n                  <source media=\"(min-width: 1200px)\" [srcset]=\"solar_1200\">\n                  <source media=\"(min-width: 768px)\" [srcset]=\"solar_768\">\n                  <source [srcset]=\"solar_576\">\n                  <img class=\"d-block img-fluid\" [src]=\"solar_1200\" alt=\"solar\" sr-only=\"solar\">\n                </picture>\n              </div>\n              <div class=\"col-12 text-color\">\n                <p class=\"smoll-subparagraph\"><strong>Renewables</strong></p>\n              </div>\n              <div class=\"col-12\">\n                <ul class=\"general-text-size\">\n                  <li class=\"circle_style\">\n                    <span><strong>Solar</strong></span>\n                  </li>\n                  <li class=\"circle_style\">\n                    <span><strong>Wind</strong></span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-center position-relative\">\n      <div class=\"black-line\"></div>\n      <span class=\"h3 industry-text\">Industry Standards</span>\n    </div>\n    <div class=\"d-flex justify-content-between align-items-center mt-3 mb-3\">\n      <a class=\"nounderline ml-1 mr-1\" href=\"https://www.isa.org/\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"isa_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"isa_768\">\n          <source [srcset]=\"isa_576\">\n          <img class=\"d-block img-fluid\" [src]=\"isa_1200\" alt=\"isa\" sr-only=\"The International Society of Automation\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.csagroup.org/\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"csa_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"csa_768\">\n          <source [srcset]=\"csa_576\">\n          <img class=\"d-block img-fluid\" [src]=\"csa_1200\" alt=\"csa\" sr-only=\"CSA Group\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"https://www.ieee.org\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"ieee_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"ieee_768\">\n          <source [srcset]=\"ieee_576\">\n          <img class=\"d-block img-fluid\" [src]=\"ieee_1200\" alt=\"ieee\" sr-only=\"The Institute of Electrical and Electronics Engineers, Incorporated\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"https://www.nfpa.org/nec\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"nec_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"nec_768\">\n          <source [srcset]=\"nec_576\">\n          <img class=\"d-block img-fluid\" [src]=\"nec_1200\" alt=\"nec\" sr-only=\"National Electrical Code\">\n        </picture>\n      </a>\n      <a class=\"nounderline ml-1 mr-1\" href=\"http://www.iec.ch\">\n        <picture>\n          <source media=\"(min-width: 1200px)\" [srcset]=\"iec_1200\">\n          <source media=\"(min-width: 768px)\" [srcset]=\"iec_768\">\n          <source [srcset]=\"iec_576\">\n          <img class=\"d-block img-fluid\" [src]=\"iec_1200\" alt=\"iec\" sr-only=\"International Electrotechnical Commission\">\n        </picture>\n      </a>\n    </div>\n  </div>\n  <footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n      <div class=\"d-flex align-items-center justify-content-around h-100\">\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n            <div class=\"col-8\">\n              <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-4\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n            <div class=\"col-8\">\n              <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-3\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n            <div class=\"col-9\">\n              <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-1 bd-highlight\">\n            <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
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

var ServicesComponent = (function () {
    function ServicesComponent() {
        this.sizeWindow = window.innerWidth;
    }
    ServicesComponent.prototype.onResize = function (event) {
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    ServicesComponent.prototype.ngOnInit = function () {
        //date value
        this.today = new Date();
        this.year = this.today.getFullYear();
        //carousel images 1920
        this.projectServices_1920 = 'assets/img/1920/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_1920 = 'assets/img/1920/service/Slider/Engineering_Analysis.jpg';
        this.fieldServices_1920 = 'assets/img/1920/service/Slider/Field_Services.jpg';
        this.oilAndGas_1920 = 'assets/img/1920/service/Slider/Oil_And_Gas.jpg';
        this.powerSystem_1920 = 'assets/img/1920/service/Slider/Power_System.jpg';
        this.renewables_1920 = 'assets/img/1920/service/Slider/Renewables.jpg';
        //carousel images 1200
        this.projectServices_1200 = 'assets/img/1200/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_1200 = 'assets/img/1200/service/Slider/Engineering_Analysis.jpg';
        this.fieldServices_1200 = 'assets/img/1200/service/Slider/Field_Services.jpg';
        this.oilAndGas_1200 = 'assets/img/1200/service/Slider/Oil_And_Gas.jpg';
        this.powerSystem_1200 = 'assets/img/1200/service/Slider/Power_System.jpg';
        this.renewables_1200 = 'assets/img/1200/service/Slider/Renewables.jpg';
        //carousel images 992
        this.projectServices_992 = 'assets/img/992/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_992 = 'assets/img/992/service/Slider/Engineering_Analysis.jpg';
        this.fieldServices_992 = 'assets/img/992/service/Slider/Field_Services.jpg';
        this.oilAndGas_992 = 'assets/img/992/service/Slider/Oil_And_Gas.jpg';
        this.powerSystem_992 = 'assets/img/992/service/Slider/Power_System.jpg';
        this.renewables_992 = 'assets/img/992/service/Slider/Renewables.jpg';
        //carousel images 768
        this.projectServices_768 = 'assets/img/992/service/Slider/Project_Services.jpg';
        this.engineeringAnalysis_768 = 'assets/img/768/services/Slider/Engineering_Analysis.jpg';
        this.fieldServices_768 = 'assets/img/768/services/Slider/Field_Services.jpg';
        this.oilAndGas_768 = 'assets/img/768/services/Slider/Oil_And_Gas.jpg';
        this.powerSystem_768 = 'assets/img/768/services/Slider/Power_System.jpg';
        this.renewables_768 = 'assets/img/768/services/Slider/Renewables.jpg';
        //carousel images 576
        this.projectServices_576 = 'assets/img/576/services/Slider/Project_Services.jpg';
        this.engineeringAnalysis_576 = 'assets/img/576/services/Slider/Engineering_Analysis.jpg';
        this.fieldServices_576 = 'assets/img/576/services/Slider/Field_Services.jpg';
        this.oilAndGas_576 = 'assets/img/576/services/Slider/Oil_And_Gas.jpg';
        this.powerSystem_576 = 'assets/img/576/services/Slider/Power_System.jpg';
        this.renewables_576 = 'assets/img/576/services/Slider/Renewables.jpg';
        //companis logo > 1200
        this.csa_1200 = 'assets/img/1200/service/LogoLinks/csa.png';
        this.iec_1200 = 'assets/img/1200/service/LogoLinks/iec.png';
        this.ieee_1200 = 'assets/img/1200/service/LogoLinks/ieee.png';
        this.isa_1200 = 'assets/img/1200/service/LogoLinks/isa.png';
        this.nec_1200 = 'assets/img/1200/service/LogoLinks/nec.png';
        //companis 768 - 1200
        this.csa_768 = 'assets/img/768/services/LogoLinks/csa.png';
        this.iec_768 = 'assets/img/768/services/LogoLinks/iec.png';
        this.ieee_768 = 'assets/img/768/services/LogoLinks/ieee.png';
        this.isa_768 = 'assets/img/768/services/LogoLinks/isa.png';
        this.nec_768 = 'assets/img/768/services/LogoLinks/nec.png';
        //companis 576 - 768
        this.csa_576 = 'assets/img/576/services/LogoLinks/csa.png';
        this.iec_576 = 'assets/img/576/services/LogoLinks/iec.png';
        this.ieee_576 = 'assets/img/576/services/LogoLinks/ieee.png';
        this.isa_576 = 'assets/img/576/services/LogoLinks/isa.png';
        this.nec_576 = 'assets/img/576/services/LogoLinks/nec.png';
        //body icons > 1200
        this.gearIcon_1200 = 'assets/img/1200/service/icons/gear.png';
        this.calculator_1200 = 'assets/img/1200/service/icons/calculator.png';
        this.tools_1200 = 'assets/img/1200/service/icons/tools.png';
        this.pumpjack_1200 = 'assets/img/1200/service/icons/pumpjack.png';
        this.lighting_1200 = 'assets/img/1200/service/icons/lighting.png';
        this.solar_1200 = 'assets/img/1200/service/icons/solar.png';
        //body icons 768 - 1200
        this.gearIcon_768 = 'assets/img/768/services/icons/gear.png';
        this.calculator_768 = 'assets/img/768/services/icons/calculator.png';
        this.tools_768 = 'assets/img/768/services/icons/tools.png';
        this.pumpjack_768 = 'assets/img/768/services/icons/pumpjack.png';
        this.lighting_768 = 'assets/img/768/services/icons/lighting.png';
        this.solar_768 = 'assets/img/768/services/icons/solar.png';
        //body icons 0 - 768
        this.gearIcon_576 = 'assets/img/576/services/icons/gear.png';
        this.calculator_576 = 'assets/img/576/services/icons/calculator.png';
        this.tools_576 = 'assets/img/576/services/icons/tools.png';
        this.pumpjack_576 = 'assets/img/576/services/icons/pumpjack.png';
        this.lighting_576 = 'assets/img/576/services/icons/lighting.png';
        this.solar_576 = 'assets/img/576/services/icons/lighting.png';
        //footer images
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ServicesComponent.prototype, "onResize", null);
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/components/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signin/matchOtherValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchOtherValidator;
function matchOtherValidator(otherControlName) {
    var thisControl;
    var otherControl;
    return function matchOtherValidate(control) {
        if (!control.parent) {
            return null;
        }
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(function () {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true
            };
        }
        return null;
    };
}


/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input::-webkit-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input:-ms-input-placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input::placeholder {\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\r\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\r\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\r\n\r\n#cover {\r\n  background: url('https://i.imgur.com/1CNbOMG.jpg') center center no-repeat;\r\n  background-size: cover;\r\n  height: 750px;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {border:solid red 1px;}\r\ninput.ng-touched.ng-valid {border:solid green 1px;}\r\n#cover-caption {\r\n  width: 100%;\r\n}\r\n\r\n.form-element-height {\r\n  height:3.5rem;\r\n}\r\n\r\n.template-footer {\r\n  display:block;\r\n}\r\n\r\n.custom-footer {\r\n  height:210px;\r\n  background-color:#2f3032\r\n}\r\n\r\na.footer_href {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n}\r\n\r\nspan.footer-text {\r\n  color:white;\r\n}\r\n\r\n.footer-row {\r\n  margin-right:0px!important;\r\n  margin-left:0px!important\r\n}\r\n\r\n.max-height {\r\n  height: 100%;\r\n}\r\n.form-style {\r\n  background-color: white;\r\n  border-radius: 25px;\r\n}\r\n.rocket-style{\r\n  background-color: white;\r\n  padding: 10px;\r\n  border-radius: 75px;\r\n}\r\n.form-margin {\r\n  margin-top: -60px;\r\n}\r\n.error-color{\r\n  color:#d9534f;\r\n}\r\n.cursor-pointer{\r\n  cursor:pointer;\r\n}\r\n\r\n.form-switch {\r\n  padding: 10px 0px 10px;\r\n}\r\n\r\n.float-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-duration: 0.3s;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n}\r\n.float-shadow:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  top: 100%;\r\n  left: 5%;\r\n  height: 10px;\r\n  width: 90%;\r\n  opacity: 0;\r\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\r\n  transition-duration: 0.3s;\r\n  transition-property: opacity, -webkit-transform;\r\n  transition-property: transform, opacity;\r\n  transition-property: transform, opacity, -webkit-transform;\r\n}\r\n.float-shadow:hover, .float-shadow:focus, .float-shadow:active {\r\n  -webkit-transform: translateY(-5px);\r\n  transform: translateY(-5px);\r\n}\r\n.float-shadow:hover:before, .float-shadow:focus:before, .float-shadow:active:before {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(5px);\r\n  transform: translateY(5px);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <section id=\"cover\">\n    <div id=\"cover-caption\">\n      <div id=\"container\" class=\"container\">\n        <div [ngSwitch]=\"windowType\">\n          <!-- START ForgotPass Section -->\n          <div *ngSwitchCase=\"1\">\n              <div class=\"row justify-content-center\">\n                  <div class=\"col-11 col-md-6 col-lg-5 form-style\">\n                    <div class=\"position-relative form-margin\">\n                      <img  class=\"img-responsive rocket-style\" src=\"https://i.imgur.com/zl9teOq.png\">\n                      <p class=\"h5\">Customer Portal Forgot Password</p>\n                    </div>\n                    <form [formGroup]=\"forgotPassForm\" novalidate (ngSubmit)=\"submit()\">\n                      <div class=\"form-group form-element-height\">\n                        <input class=\"form-control\" type=\"text\" name=\"companyName\" formControlName=\"companyName\" placeholder=\"Company name\"/>\n                        <div class=\"form-control-feedback error-color\" *ngIf=\"forgotPassForm.controls['companyName'].invalid && forgotPassForm.controls['companyName'].touched\">\n                          Company name is required\n                        </div>\n                      </div>\n                      <div class=\"form-group form-element-height\">\n                        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                        <div class=\"form-control-feedback error-color\" *ngIf=\"forgotPassForm.controls['userEmail'].invalid && forgotPassForm.controls['userEmail'].touched\">\n                          Invalid email address\n                        </div>\n                      </div>\n                      <div>\n                        <button class=\"btn btn-warning form-control\" [disabled]=\"forgotPassForm.invalid\">\n                          Send\n                        </button>\n                      </div>\n                    </form>\n                    <div class=\"d-flex justify-content-around form-switch\">\n                      <a class=\"cursor-pointer float-shadow\" (click)=\"setMenuValue(0)\">Login</a>\n                    </div>\n                  </div>\n                </div>\n          </div>\n          <!-- END ForgotPass Section -->\n          <!-- START Register section -->\n          <div *ngSwitchCase=\"2\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-11 col-md-6 col-lg-5 form-style\">\n                  <div class=\"position-relative form-margin\">\n                    <img  class=\"img-responsive rocket-style\" src=\"https://i.imgur.com/zl9teOq.png\">\n                    <p class=\"h5\">Customer Portal Register</p>\n                  </div>\n                  <form [formGroup]=\"registerForm\" novalidate (ngSubmit)=\"onRegisterSubmit()\">\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userEmail'].errors && registerForm.controls['userEmail'].touched\">\n                            <div *ngIf=\"registerForm.controls['userEmail'].errors.required\">Email is required</div>\n                            <div *ngIf=\"!registerForm.controls['userEmail'].errors.required && registerForm.controls['userEmail'].errors.email\">Email is invalid</div>\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" formControlName=\"confirmUserEmail\" placeholder=\"Confirm Email\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['confirmUserEmail'].invalid && registerForm.controls['confirmUserEmail'].touched\">\n                            <div class=\"text-left pl-1\" *ngIf=\"!registerForm.controls['confirmUserEmail'].errors.required && registerForm.controls['confirmUserEmail'].errors.matchOther\">Email is not confirm</div>\n                            <div class=\"text-left pl-1\" *ngIf=\"registerForm.controls['confirmUserEmail'].errors.required\">Confirm email is required</div>\n                            <!--\n                            <div class=\"text-left pl-1\" *ngIf=\"!registerForm.controls['confirmUserEmail'].errors.required && registerForm.controls['confirmUserEmail'].errors.email\">Confirm email is invalid</div>\n                            -->\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"userName\" formControlName=\"userName\" placeholder=\"User name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userName'].invalid && registerForm.controls['userName'].touched\">\n                            User name is required\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"firstName\" formControlName=\"firstName\" placeholder=\"First name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['firstName'].invalid && registerForm.controls['firstName'].touched\">\n                            First Name is required\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"companyName\" formControlName=\"companyName\" placeholder=\"Company name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['companyName'].invalid && registerForm.controls['companyName'].touched\">\n                            Company name is required\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last name\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['lastName'].invalid && registerForm.controls['lastName'].touched\">\n                            Last name is required\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" name=\"city\" formControlName=\"city\" placeholder=\"City\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['city'].invalid && registerForm.controls['city'].touched\">\n                            City is required\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"text\" formControlName=\"phoneNumber\" (keypress)=\"keyPress($event)\" placeholder=\"Phone number\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['phoneNumber'].invalid && registerForm.controls['phoneNumber'].touched\">\n                            Invalid phone number\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"userPassword\" placeholder=\"Password\" />\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userPassword'].invalid && registerForm.controls['userPassword'].touched\">\n                            <div *ngIf=\"registerForm.controls['userPassword'].errors.required\">Password is required</div>\n                            <div *ngIf=\"!registerForm.controls['userPassword'].errors.required && registerForm.controls['userPassword'].errors.minlength\">Minimum 6 characters</div>\n                          </div>\n                        </div>\n                        <div class=\"col-6 form-element-height\">\n                          <input class=\"form-control\" type=\"password\" formControlName=\"userConfirmPassword\" placeholder=\"Confirm password\"/>\n                          <div class=\"form-control-feedback error-color\" *ngIf=\"registerForm.controls['userConfirmPassword'].invalid && registerForm.controls['userConfirmPassword'].touched\">\n                            <div *ngIf=\"!registerForm.controls['userConfirmPassword'].errors.required && registerForm.controls['userConfirmPassword'].errors.matchOther\">Password is not confirm</div>\n                            <div *ngIf=\"registerForm.controls['userConfirmPassword'].errors.required\">Password is required</div>\n                            <!--\n                            <div *ngIf=\"registerForm.controls['userConfirmPassword'].errors.minlength\">Minimum 6 characters</div>\n                            -->\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div>\n                      <button class=\"btn btn-warning form-control\" [disabled]=\"registerForm.invalid\">\n                        Send\n                      </button>\n                    </div>\n                  </form>\n                  <div class=\"d-flex justify-content-around form-switch\">\n                    <a class=\"cursor-pointer float-shadow\" (click)=\"setMenuValue(0)\">Login</a>\n                    <a class=\"cursor-pointer float-shadow\" (click)=\"setMenuValue(1)\">Forgot password?</a>\n                  </div>\n                </div>\n              </div>\n          </div>\n          <!-- END Register Section -->\n          <!-- START Login Section -->\n          <div *ngSwitchDefault>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-11 col-md-6 col-lg-5 form-style\">\n                <div class=\"position-relative form-margin\">\n                  <img  class=\"img-responsive rocket-style\" src=\"https://i.imgur.com/zl9teOq.png\">\n                  <p class=\"h5\">Customer Portal Login</p>\n                </div>\n                <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onLoginSubmit()\">\n                  <div class=\"form-group form-element-height\">\n                    <input class=\"form-control\" type=\"text\" name=\"companyName\" formControlName=\"companyName\" placeholder=\"Company name\"/>\n                    <div class=\"form-control-feedback error-color\" *ngIf=\"loginForm.controls['companyName'].invalid && loginForm.controls['companyName'].touched\">\n                      Company name is required\n                    </div>\n                  </div>\n                  <div class=\"form-group form-element-height\">\n                    <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"userEmail\" placeholder=\"Email\" />\n                    <div class=\"form-control-feedback error-color\" *ngIf=\"loginForm.controls['userEmail'].invalid && loginForm.controls['userEmail'].touched\">\n                      Invalid email address\n                    </div>\n                  </div>\n                  <div class=\"form-group form-element-height\">\n                    <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"userPassword\" placeholder=\"Password\" />\n                    <div class=\"form-control-feedback error-color\" *ngIf=\"loginForm.controls['userPassword'].invalid && loginForm.controls['userPassword'].touched\">\n                      <div *ngIf=\"loginForm.controls['userPassword'].errors.required\">Password is required</div>\n                      <div *ngIf=\"loginForm.controls['userPassword'].errors.minlength\">Password should be minimum 6 characters</div>\n                    </div>\n                  </div>\n                  <div>\n                    <button class=\"btn btn-warning form-control\" [disabled]=\"loginForm.invalid\">\n                      Send\n                    </button>\n                  </div>\n                </form>\n                <div class=\"d-flex justify-content-around form-switch\">\n                  <a class=\"cursor-pointer float-shadow\" (click)=\"setMenuValue(2)\">Register</a>\n                  <a class=\"cursor-pointer float-shadow\" (click)=\"setMenuValue(1)\">Forgot password?</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- END Login Section -->\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<footer *ngIf=\"sizeWindow > 992; else werticalFooter\">\n    <div class=\"custom-footer\">\n        <div class=\"d-flex align-items-center justify-content-around custom-footer-link max-height\">\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n                </div>\n                <div class=\"col-8\">\n                  <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                  <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n                </div>\n                <div class=\"col-8\">\n                  <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-3\">\n                  <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n                </div>\n                <div class=\"col-9\">\n                  <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-1 bd-highlight\">\n                <span class=\"footer-text\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n  </footer>\n  <ng-template class=\"template-footer\" #werticalFooter>\n    <div class=\"custom-footer\">\n      <div class=\"d-flex flex-column\">\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"phoneImg\" alt=\"phone:\" sr-only=\"phone number\">\n            </div>\n          </div>\n          <div class=\"col-6 mr-a\">\n            <span> <a href=\"tel:1.403.863.0893\" class=\"footer_href\">1.403.863.0893</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"emailImg\" alt=\"email address\" sr-only=\"email\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span><a class=\"footer_href\" href=\"mailto:info@ampx.ca\">info@ampx.ca</a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-6\">\n            <div class=\"float-right\">\n              <img class=\"d-block\" [src]=\"linkedInImg\" alt=\"linkedIn\" sr-only=\"linked in account\">\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <span class=\"footer-text\">Follow us on <a href=\"https://www.linkedin.com/company/amp-x-consulting-inc.?trk=top_nav_home\" target=\"_blank\" class=\"footer_href\"><strong>LinkedIn</strong></a></span>\n          </div>\n        </div>\n        <div class=\"row mt-2 footer-row\">\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-center\">\n              <span class=\"footer-text text-center\">AMP X Consulting Inc. &copy; {{year}} | All Rights Reserved</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchOtherValidator__ = __webpack_require__("../../../../../src/app/components/signin/matchOtherValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = (function () {
    function SigninComponent(flashMessage, router, authService, spinnerService) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.windowType = 0;
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.sizeWindow = window.innerWidth;
        // login form
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'companyName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'userEmail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email
            ]),
            'userPassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6)
            ])
        });
        // forgot pass form
        this.forgotPassForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'companyName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'userEmail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                // tslint:disable-next-line:max-line-length
                // tslint:disable-next-line:quotemark
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern("/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/")
            ]),
        });
        // register form
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'companyName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'userEmail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email
            ]),
            'confirmUserEmail': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email,
                Object(__WEBPACK_IMPORTED_MODULE_4__matchOtherValidator__["a" /* matchOtherValidator */])('userEmail')
            ]),
            'userName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6)
            ]),
            'userPassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6)
            ]),
            'userConfirmPassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6),
                Object(__WEBPACK_IMPORTED_MODULE_4__matchOtherValidator__["a" /* matchOtherValidator */])('userPassword')
            ])
        });
    }
    SigninComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.phoneImg = 'assets/img/1920/headerAndFooter/phone_1920.png';
        this.emailImg = 'assets/img/1920/headerAndFooter/email_1920.png';
        this.linkedInImg = 'assets/img/1920/headerAndFooter/linkedin_1920.png';
    };
    SigninComponent.prototype.setMenuValue = function (num) {
        this.windowType = num;
    };
    SigninComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\(\)\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    SigninComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.spinnerService.show();
        var user = {
            companyName: this.loginForm.value.companyName,
            email: this.loginForm.value.userEmail,
            password: this.loginForm.value.userPassword
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.spinnerService.hide();
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
                if (data.user.email === 'superAdmin@ampx.ca' || data.user.email === 'admin@ampx.ca') {
                    _this.router.navigate(['superadmin']);
                }
                else {
                    _this.router.navigate(['project']);
                }
            }
            else {
                _this.spinnerService.hide();
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['signin']);
            }
        });
    };
    SigninComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.registerForm.value.userEmail,
            userName: this.registerForm.value.userName,
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            companyName: this.registerForm.value.companyName,
            city: this.registerForm.value.city,
            phone: this.registerForm.value.phoneNumber,
            password: this.registerForm.value.userPassword
        };
        // Register user
        this.spinnerService.show();
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.spinnerService.hide();
                _this.flashMessage.show('You are now registered and can log in!', { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/']);
            }
            else {
                _this.spinnerService.hide();
                _this.flashMessage.show('Something went wrong!!', { cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true });
                _this.router.navigate(['/signin']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SigninComponent.prototype, "onResize", null);
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sld-schedule-item/sld-schedule-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead th {\r\n    font-size: 0.4rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.4rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }\r\n  \r\n  button.btnPlus {\r\n    border-radius: 0 0 0 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  button.btnMinus {\r\n    border-radius: 0 .25rem .25rem 0!important;\r\n    /*color: black;*/\r\n  }\r\n  \r\n  select.selectForOpenModal {\r\n    border-radius: .25rem 0 0 .25rem!important;\r\n  }\r\n\r\n  .border-eh-raiting {\r\n    border: 1px solid;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .inner-padding-eh-rating {\r\n    padding-bottom: 1.3rem!important;\r\n  }\r\n\r\n/**\r\n * toggle\r\n * --------------------------------------------------\r\n */\r\n .toggle {\r\n  height: 32px;\r\n}\r\n.toggle input[type=\"checkbox\"], .toggle input[type=\"radio\"] {\r\n  width: 0;\r\n  height: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  text-indent: -100000px;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n.toggle .handle {\r\n  position: relative;\r\n  top: -20px;\r\n  left: 0;\r\n\r\n  display: block;\r\n  width: 72px;\r\n  height: 32px;\r\n  background-color: white;\r\n          border-radius: 19px;\r\n  box-shadow: inset 0 0 0 1px #b8bfc8;\r\n\r\n  -webkit-border-radius: 19px;\r\n     -moz-border-radius: 19px;\r\n}\r\n.toggle .handle:before, .toggle .handle:after {\r\n  position: absolute;\r\n  top: 1px;\r\n  left: 1px;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n\r\n  content: \"\";\r\n  background-color: white;\r\n          border-radius: 30px;\r\n  box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\r\n  transition: all .25s ease-in-out;\r\n\r\n  -webkit-border-radius: 30px;\r\n     -moz-border-radius: 30px;\r\n}\r\n.toggle input[type=\"checkbox\"]:disabled + .handle, .toggle input[type=\"radio\"]:disabled + .handle, .toggle input[type=\"checkbox\"]:disabled + .handle:before, .toggle input[type=\"radio\"]:disabled + .handle:before, .toggle input[type=\"checkbox\"]:disabled + .handle:after, .toggle input[type=\"radio\"]:disabled + .handle:after {\r\n  background-color: #e6e9ed;\r\n  filter: alpha(opacity=60);\r\n\r\n  opacity: .6;\r\n}\r\n.toggle input[type=\"checkbox\"]:checked + .handle:before, .toggle input[type=\"radio\"]:checked + .handle:before {\r\n  width: 70px;\r\n  background-color: #a0d468;\r\n  content : \"Yes\";\r\n}\r\n.toggle input[type=\"checkbox\"]:checked + .handle:after, .toggle input[type=\"radio\"]:checked + .handle:after {\r\n  left: 40px;\r\n  content: \"\";\r\n  color: green;\r\n  box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sld-schedule-item/sld-schedule-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mr-3\" *ngIf=\"sldScheduleItem\">\r\n  <div class=\"d-flex justify-content-center pt-3\">\r\n    <h1>SLD Schedule <strong> {{sldScheduleItem?.majorEquipmentDeviceTag || 'New SLD Schedule'}}</strong></h1>\r\n  </div>\r\n  <form (ngSubmit)=\"saveSldShedule(sldScheduleItem._id, sldSheduleForm.value)\" #sldSheduleForm=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-xl-3 align-self-start\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 align-self-end\">\r\n            <div class=\"row\" style=\"border:1px solid black;border-radius:5px\">\r\n              <div class=\"col-12\">\r\n                <div class=\"d-flex justify-content-center\">\r\n                  <div><span>Equipment Info</span></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalList\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"selectedMajorEquipmentDevice\">Major Equipment Device</label>\r\n                      <select [disabled]=\"electricalList.length == 0\"\r\n                              id=\"selectedMajorEquipmentDevice\"\r\n                              class=\"form-control\"\r\n                              [(ngModel)]=\"sldScheduleItem.selectedMajorEquipmentDevice\"\r\n                              (change)=\"sldScheduleItem.selectedEquipmentDescriptionForMajorEquipmentDevice = setEquipmentDescription(electricalList, sldScheduleItem.selectedMajorEquipmentDevice);\r\n                        sldScheduleItem.selectedSystemVoltage = setSystemVoltage(electricalList, sldScheduleItem.selectedMajorEquipmentDevice)\"\r\n                              name=\"selectedMajorEquipmentDevice\">\r\n                        <option *ngFor=\"let currentEquipmentTag of electricalList\"\r\n                                [ngValue]=\"currentEquipmentTag.equipmentTag\"\r\n                                [selected]=\"currentEquipmentTag.equipmentTag==sldScheduleItem.selectedMajorEquipmentDevice\">\r\n                          {{currentEquipmentTag.equipmentTag}}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"selectedEquipmentDescriptionForMajorEquipmentDevice\">Equipment Description</label>\r\n                      <input id=\"selectedEquipmentDescriptionForMajorEquipmentDevice\"\r\n                             type=\"text\"\r\n                             class=\"form-control\"\r\n                             [(ngModel)]=\"sldScheduleItem.selectedEquipmentDescriptionForMajorEquipmentDevice\"\r\n                             name=\"selectedEquipmentDescriptionForMajorEquipmentDevice\"\r\n                             [readonly]=\"true\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- -->\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 align-self-end\" *ngIf=\"electricalList\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"selectedMajorEquipmentTag\">Major Equipment Tag</label>\r\n                      <select [disabled]=\"electricalList.length == 0\"\r\n                              id=\"selectedMajorEquipmentTag\"\r\n                              class=\"form-control\"\r\n                              [(ngModel)]=\"sldScheduleItem.selectedMajorEquipmentTag\"\r\n                              (change)=\"sldScheduleItem.selectedEquipmentDescriptionForMajorEquipmentTag = setEquipmentDescription(electricalList, sldScheduleItem.selectedMajorEquipmentTag)\"\r\n                              name=\"selectedMajorEquipmentTag\">\r\n                        <option *ngFor=\"let currentEquipmentTag of electricalList\"\r\n                                [ngValue]=\"currentEquipmentTag.equipmentTag\"\r\n                                [selected]=\"currentEquipmentTag.equipmentTag==sldScheduleItem.selectedMajorEquipmentTag\">\r\n                          {{currentEquipmentTag.equipmentTag}}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"selectedEquipmentDescriptionForMajorEquipmentTag\">Equipment Description</label>\r\n                      <input type=\"text\"\r\n                             class=\"form-control\"\r\n                             [(ngModel)]=\"sldScheduleItem.selectedEquipmentDescriptionForMajorEquipmentTag\"\r\n                             name=\"selectedEquipmentDescriptionForMajorEquipmentTag\"\r\n                             [readonly]=\"true\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"majorEquipmentDeviceTag\">Major Equipment Device Tag</label>\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sldScheduleItem.majorEquipmentDeviceTag\" name=\"majorEquipmentDeviceTag\" placeholder=\"New SLD Schedule\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"\">System Voltage</label>\r\n                      <input type=\"text\"\r\n                             class=\"form-control\"\r\n                             [(ngModel)]=\"sldScheduleItem.selectedSystemVoltage\"\r\n                             name=\"selectedSystemVoltage\"\r\n                             [readonly]=\"true\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"border:1px solid black;border-radius:5px\">\r\n              <div class=\"col-12\">\r\n                <div class=\"d-flex justify-content-center\">\r\n                  <div><span>Incoming Section</span></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"incomer\">Incomer</label>\r\n                      <label class=\"toggle col-sm-8\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.incomer\" name=\"incomer\" (click)=\"changeBooleanFlag(sldScheduleItem.incomer)\">\r\n                        <span class=\"handle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"lightningArrestor\">Lightning Arrestor</label>\r\n                      <label class=\"toggle col-sm-8\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.lightningArrestor\" name=\"lightningArrestor\" (click)=\"changeBooleanFlag(sldScheduleItem.lightningArrestor)\">\r\n                        <span class=\"handle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-sm-6 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"selectedFeederEntry\">Feeder Entry</label>\r\n                      <select id=\"selectedFeederEntry\"\r\n                              class=\"form-control\"\r\n                              [(ngModel)]=\"sldScheduleItem.selectedFeederEntry\"\r\n                              name=\"selectedFeederEntry\">\r\n                        <option *ngFor=\"let currentFeederEntry of sldScheduleItem.feederEntry\"\r\n                                [ngValue]=\"currentFeederEntry\"\r\n                                [selected]=\"currentFeederEntry==sldScheduleItem.selectedFeederEntry\">\r\n                          {{currentFeederEntry}}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-sm-6 align-self-end\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"surgeProtection\">Surge Protection</label>\r\n                      <label class=\"toggle col-sm-8\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.surgeProtection\" name=\"surgeProtection\" (click)=\"changeBooleanFlag(sldScheduleItem.surgeProtection)\">\r\n                        <span class=\"handle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-xl-6 align-self-start\" style=\"border:1px solid black;border-radius:5px\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedOCDevice\">O/C Device</label>\r\n              <select id=\"selectedOCDevice\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedOCDevice\"\r\n                      name=\"selectedOCDevice\">\r\n                <option *ngFor=\"let currentOCDevice of sldScheduleItem.ocDevice\"\r\n                        [ngValue]=\"currentOCDevice\"\r\n                        [selected]=\"currentOCDevice==sldScheduleItem.selectedOCDevice\">\r\n                  {{currentOCDevice}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedContactorType\">Contactor Type</label>\r\n              <select id=\"selectedContactorType\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedContactorType\"\r\n                      name=\"selectedContactorType\">\r\n                <option *ngFor=\"let currentContactorType of sldScheduleItem.contactorType\"\r\n                        [ngValue]=\"currentContactorType\"\r\n                        [selected]=\"currentContactorType==sldScheduleItem.selectedContactorType\">\r\n                  {{currentContactorType}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCPTQTY\">CPT QTY</label>\r\n              <select id=\"selectedCPTQTY\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedCPTQTY\"\r\n                      name=\"selectedCPTQTY\">\r\n                <option *ngFor=\"let currentsCPTQTY of sldScheduleItem.CPTQTY\"\r\n                        [ngValue]=\"currentsCPTQTY\"\r\n                        [selected]=\"currentsCPTQTY==sldScheduleItem.selectedCPTQTY\">\r\n                  {{currentsCPTQTY}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCTQTY\">CT QTY</label>\r\n              <select id=\"selectedCTQTY\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedCTQTY\"\r\n                      name=\"selectedCTQTY\">\r\n                <option *ngFor=\"let currentCTQTY of sldScheduleItem.CTQTY\"\r\n                        [ngValue]=\"currentCTQTY\"\r\n                        [selected]=\"currentCTQTY==sldScheduleItem.selectedCTQTY\">\r\n                  {{currentCTQTY}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"tripRating\">Trip Rating</label>\r\n              <input id=\"tripRating\" type=\"number\" class=\"form-control\" [(ngModel)]=\"sldScheduleItem.tripRating\" name=\"tripRating\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedContactorSize\">Contactor Size</label>\r\n              <select id=\"selectedContactorSize\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedContactorSize\"\r\n                      name=\"selectedContactorSize\">\r\n                <option *ngFor=\"let currentContactorSize of sldScheduleItem.contactorSize\"\r\n                        [ngValue]=\"currentContactorSize\"\r\n                        [selected]=\"currentContactorSize==sldScheduleItem.selectedContactorSize\">\r\n                  {{currentContactorSize}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCPTVoltage\">CPT Voltage</label>\r\n              <select id=\"selectedCPTVoltage\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedCPTVoltage\"\r\n                      name=\"selectedCPTVoltage\">\r\n                <option *ngFor=\"let currentCPTVoltage of sldScheduleItem.CPTVoltage\"\r\n                        [ngValue]=\"currentCPTVoltage\"\r\n                        [selected]=\"currentCPTVoltage==sldScheduleItem.selectedCPTVoltage\">\r\n                  {{currentCPTVoltage}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCTRatio\">CT Ratio</label>\r\n              <select id=\"selectedCTRatio\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedCTRatio\"\r\n                      name=\"selectedCTRatio\">\r\n                <option *ngFor=\"let currentCTRatio of sldScheduleItem.CTRatio\"\r\n                        [ngValue]=\"currentCTRatio\"\r\n                        [selected]=\"currentCTRatio==sldScheduleItem.selectedCTRatio\">\r\n                  {{currentCTRatio}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedFrameRating\">Frame Rating</label>\r\n              <select id=\"selectedFrameRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedFrameRating\"\r\n                      name=\"selectedFrameRating\">\r\n                <option *ngFor=\"let currentFrameRating of sldScheduleItem.frameRating\"\r\n                        [ngValue]=\"currentFrameRating\"\r\n                        [selected]=\"currentFrameRating==sldScheduleItem.selectedFrameRating\">\r\n                  {{currentFrameRating}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedOverloadType\">Overload Type</label>\r\n              <select id=\"selectedOverloadType\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedOverloadType\"\r\n                      name=\"selectedOverloadType\">\r\n                <option *ngFor=\"let currentOverloadType of sldScheduleItem.overloadType\"\r\n                        [ngValue]=\"currentOverloadType\"\r\n                        [selected]=\"currentOverloadType==sldScheduleItem.selectedOverloadType\">\r\n                  {{currentOverloadType}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCPTRating\">CPT Rating</label>\r\n              <select id=\"selectedCPTRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedCPTRating\"\r\n                      name=\"selectedCPTRating\">\r\n                <option *ngFor=\"let currentCPTRating of sldScheduleItem.CPTRating\"\r\n                        [ngValue]=\"currentCPTRating\"\r\n                        [selected]=\"currentCPTRating==sldScheduleItem.selectedCPTRating\">\r\n                  {{currentCPTRating}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedCTAccuracy\">CT Accuracy</label>\r\n              <select id=\"selectedCTAccuracy\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedCTAccuracy\"\r\n                      name=\"selectedCTAccuracy\">\r\n                <option *ngFor=\"let currentCTAccuracy of sldScheduleItem.CTAccuracy\"\r\n                        [ngValue]=\"currentCTAccuracy\"\r\n                        [selected]=\"currentCTAccuracy==sldScheduleItem.selectedCTAccuracy\">\r\n                  {{currentCTAccuracy}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedFuseRating\">Fuse Rating</label>\r\n              <select id=\"selectedFuseRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedFuseRating\"\r\n                      name=\"selectedFuseRating\">\r\n                <option *ngFor=\"let currentFuseRating of sldScheduleItem.fuseRating\"\r\n                        [ngValue]=\"currentFuseRating\"\r\n                        [selected]=\"currentFuseRating==sldScheduleItem.selectedFuseRating\">\r\n                  {{currentFuseRating}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"overloadSize\">Overload Size</label>\r\n              <input id=\"overloadSize\" type=\"number\" class=\"form-control\" [(ngModel)]=\"sldScheduleItem.overloadSize\" name=\"overloadSize\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedVTQTY\">VT QTY</label>\r\n              <select id=\"selectedVTQTY\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedVTQTY\"\r\n                      name=\"selectedVTQTY\">\r\n                <option *ngFor=\"let currentVTQTY of sldScheduleItem.VTQTY\"\r\n                        [ngValue]=\"currentVTQTY\"\r\n                        [selected]=\"currentVTQTY==sldScheduleItem.selectedVTQTY\">\r\n                  {{currentVTQTY}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedGFCTRatio\">GFCT Ratio</label>\r\n              <select id=\"selectedGFCTRatio\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedGFCTRatio\"\r\n                      name=\"selectedGFCTRatio\">\r\n                <option *ngFor=\"let currentGFCTRatio of sldScheduleItem.GFCTRatio\"\r\n                        [ngValue]=\"currentGFCTRatio\"\r\n                        [selected]=\"currentGFCTRatio==sldScheduleItem.selectedGFCTRatio\">\r\n                  {{currentGFCTRatio}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedSwitchRating\">Switch Rating</label>\r\n              <select id=\"selectedSwitchRating\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedSwitchRating\"\r\n                      name=\"selectedSwitchRating\">\r\n                <option *ngFor=\"let currentSwitchRating of sldScheduleItem.SwitchRating\"\r\n                        [ngValue]=\"currentSwitchRating\"\r\n                        [selected]=\"currentSwitchRating==sldScheduleItem.selectedSwitchRating\">\r\n                  {{currentGFCTRatio}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3 offset-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedVTVoltage\">VT Voltage</label>\r\n              <select id=\"selectedVTVoltage\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedVTVoltage\"\r\n                      name=\"selectedVTVoltage\">\r\n                <option *ngFor=\"let currentVTVoltage of sldScheduleItem.VTVoltage\"\r\n                        [ngValue]=\"currentVTVoltage\"\r\n                        [selected]=\"currentVTVoltage==sldScheduleItem.selectedVTVoltage\">\r\n                  {{currentVTVoltage}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedShuntCoil\">Shunt Coil</label>\r\n              <select id=\"selectedShuntCoil\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedShuntCoil\"\r\n                      name=\"selectedShuntCoil\">\r\n                <option *ngFor=\"let currentShuntCoil of sldScheduleItem.ShuntCoil\"\r\n                        [ngValue]=\"currentShuntCoil\"\r\n                        [selected]=\"currentShuntCoil==sldScheduleItem.selectedShuntCoil\">\r\n                  {{currentShuntCoil}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3 offset-xl-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedVTAccuracy\">VT Accuracy</label>\r\n              <select id=\"selectedVTAccuracy\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedVTAccuracy\"\r\n                      name=\"selectedVTAccuracy\">\r\n                <option *ngFor=\"let currentVTAccuracy of sldScheduleItem.VTAccuracy\"\r\n                        [ngValue]=\"currentVTAccuracy\"\r\n                        [selected]=\"currentVTAccuracy==sldScheduleItem.selectedVTAccuracy\">\r\n                  {{currentVTAccuracy}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedKirkKey\">Kirk Key</label>\r\n              <select id=\"selectedKirkKey\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedKirkKey\"\r\n                      name=\"selectedKirkKey\">\r\n                <option *ngFor=\"let currentKirkKey of sldScheduleItem.KirkKey\"\r\n                        [ngValue]=\"currentKirkKey\"\r\n                        [selected]=\"currentKirkKey==sldScheduleItem.selectedKirkKey\">\r\n                  {{currentKirkKey}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedGroundStud\">Ground Stud</label>\r\n              <select id=\"selectedGroundStud\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedGroundStud\"\r\n                      name=\"selectedGroundStud\">\r\n                <option *ngFor=\"let currentGroundStud of sldScheduleItem.GroundStud\"\r\n                        [ngValue]=\"currentGroundStud\"\r\n                        [selected]=\"currentGroundStud==sldScheduleItem.selectedGroundStud\">\r\n                  {{currentGroundStud}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <!-- ДОПИСАТЬ ЛОГИКУ для Switch -->\r\n              <label for=\"TransformerPR\">Transformer PR</label>\r\n              <label class=\"toggle col-sm-8\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.TransformerPR\" name=\"TransformerPR\" (click)=\"changeBooleanFlag(sldScheduleItem.TransformerPR)\">\r\n                <span class=\"handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedIndicatingLights\">Indicating Lights</label>\r\n              <select id=\"selectedIndicatingLights\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedIndicatingLights\"\r\n                      name=\"selectedIndicatingLights\">\r\n                <option *ngFor=\"let currentIndicatingLights of sldScheduleItem.IndicatingLights\"\r\n                        [ngValue]=\"currentIndicatingLights\"\r\n                        [selected]=\"currentIndicatingLights==sldScheduleItem.selectedIndicatingLights\">\r\n                  {{currentIndicatingLights}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedNOAuxContact\">N.O.Aux Contact</label>\r\n              <select id=\"selectedNOAuxContact\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedNOAuxContact\"\r\n                      name=\"selectedNOAuxContact\">\r\n                <option *ngFor=\"let currentNOAuxContact of sldScheduleItem.NOAuxContact\"\r\n                        [ngValue]=\"currentNOAuxContact\"\r\n                        [selected]=\"currentNOAuxContact==sldScheduleItem.selectedNOAuxContact\">\r\n                  {{currentNOAuxContact}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"PQM\">PQM</label>\r\n              <label class=\"toggle col-sm-8\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.PQM\" name=\"PQM\" (click)=\"changeBooleanFlag(sldScheduleItem.PQM)\">\r\n                <span class=\"handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"MotorPR\">Motor PR</label>\r\n              <label class=\"toggle col-sm-8\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.MotorPR\" name=\"MotorPR\" (click)=\"changeBooleanFlag(sldScheduleItem.MotorPR)\">\r\n                <span class=\"handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"SpaceHeater\">Space Heater</label>\r\n              <input id=\"SpaceHeater\" type=\"number\" class=\"form-control\" [(ngModel)]=\"sldScheduleItem.SpaceHeater\" name=\"SpaceHeater\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedNCAuxContact\">N.C.Aux Contact</label>\r\n              <select id=\"selectedNCAuxContact\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedNCAuxContact\"\r\n                      name=\"selectedNCAuxContact\">\r\n                <option *ngFor=\"let currentNCAuxContact of sldScheduleItem.NCAuxContact\"\r\n                        [ngValue]=\"currentNCAuxContact\"\r\n                        [selected]=\"currentNCAuxContact==sldScheduleItem.selectedNCAuxContact\">\r\n                  {{currentNCAuxContact}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"FeederPR\">Feeder PR</label>\r\n              <label class=\"toggle col-sm-8\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.FeederPR\" name=\"FeederPR\" (click)=\"changeBooleanFlag(sldScheduleItem.FeederPR)\">\r\n                <span class=\"handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"NGRRelay\">NGR Relay</label>\r\n              <label class=\"toggle col-sm-8\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.NGRRelay\" name=\"NGRRelay\" (click)=\"changeBooleanFlag(sldScheduleItem.NGRRelay)\">\r\n                <span class=\"handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"HeaterCircuit\">Heater Circuit</label>\r\n              <label class=\"toggle col-sm-8\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.HeaterCircuit\" name=\"HeaterCircuit\" (click)=\"changeBooleanFlag(sldScheduleItem.HeaterCircuit)\">\r\n                <span class=\"handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-xl-3\">\r\n            <div class=\"form-group\">\r\n              <label for=\"selectedInterposRelay\">Interpos. Relay</label>\r\n              <select id=\"selectedInterposRelay\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"sldScheduleItem.selectedInterposRelay\"\r\n                      name=\"selectedInterposRelay\">\r\n                <option *ngFor=\"let currentInterposRelay of sldScheduleItem.InterposRelay\"\r\n                        [ngValue]=\"currentInterposRelay\"\r\n                        [selected]=\"currentInterposRelay==sldScheduleItem.selectedInterposRelay\">\r\n                  {{currentInterposRelay}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-xl-3 align-self-start\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\" style=\"border:1px solid black;border-radius:5px\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 d-flex justify-content-center\">\r\n                <span>PDP Detail</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <span>Panel</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-xl-6\">\r\n                    <div class=\"form-group\">\r\n                      <app-drop-down (onChanged)=\"onChanged($event, 'PDP Panel First Value')\"\r\n                                     (newOnChanged)=\"newOnChanged($event, 'PDP Panel First Value')\"\r\n                                     [dropDownName]=\"'PDP Panel First Value'\"\r\n                                     [equipmentType]='sldScheduleItem.firstPanelValue'\r\n                                     [selectedEquipmentType]='sldScheduleItem.selectedFirstPanelValue'\r\n                                     name=\"selectedFirstPanelValue\">\r\n                      </app-drop-down>\r\n                      <!--\r\n                      <div class=\"d-flex flex-row\">\r\n                        <select [disabled]=\"sldScheduleItem.firstPanelValue.length == 0\"\r\n                          id=\"selectedFirstPanelValue\"\r\n                          class=\"form-control selectForOpenModal\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedFirstPanelValue\"\r\n                          name=\"selectedFirstPanelValue\"\r\n                        >\r\n                          <option\r\n                            *ngFor=\"let currentFirstPanelValue of sldScheduleItem.firstPanelValue\"\r\n                            [ngValue]=\"currentFirstPanelValue\"\r\n                            [selected]=\"currentFirstPanelValue==sldScheduleItem.selectedFirstPanelValue\">\r\n                              {{currentFirstPanelValue}}\r\n                          </option>\r\n                        </select>\r\n                          <button\r\n                            type=\"button\"\r\n                            class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                            data-toggle=\"tooltip\"\r\n                            data-placement=\"top\"\r\n                            title=\"Add new item\"\r\n                            (click)=\"firstPanelElementModal.showAddModal()\"\r\n                          ></button>\r\n                          <button\r\n                            type=\"button\"\r\n                            class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                            data-toggle=\"tooltip\"\r\n                            data-placement=\"top\"\r\n                            title=\"Drop selected item\"\r\n                            (click)=\"firstPanelElementModal.showDropModal(dropElementFlag)\"\r\n                            [disabled]=\"sldScheduleItem.firstPanelValue.length == 0\"\r\n                          ></button>\r\n                        </div>\r\n                        -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-xl-6\">\r\n                    <div class=\"form-group\">\r\n                      <app-drop-down (onChanged)=\"onChanged($event, 'PDP Panel Second Value')\"\r\n                                     (newOnChanged)=\"newOnChanged($event, 'PDP Panel Second Value')\"\r\n                                     [dropDownName]=\"'PDP Panel Second Value'\"\r\n                                     [equipmentType]='sldScheduleItem.secondPanelValue'\r\n                                     [selectedEquipmentType]='sldScheduleItem.selectedSecondPanelValue'\r\n                                     name=\"selectedSecondPanelValue\">\r\n                      </app-drop-down>\r\n                      <!--\r\n                      <div class=\"d-flex flex-row\">\r\n                        <select [disabled]=\"sldScheduleItem.secondPanelValue.length == 0\"\r\n                          id=\"selectedSecondPanelValue\"\r\n                          class=\"form-control selectForOpenModal\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedSecondPanelValue\"\r\n                          name=\"selectedSecondPanelValue\"\r\n                        >\r\n                          <option\r\n                            *ngFor=\"let currentSecondPanelValue of sldScheduleItem.secondPanelValue\"\r\n                            [ngValue]=\"currentSecondPanelValue\"\r\n                            [selected]=\"currentSecondPanelValue==sldScheduleItem.selectedSecondPanelValue\">\r\n                              {{currentSecondPanelValue}}\r\n                          </option>\r\n                        </select>\r\n                        <button\r\n                          type=\"button\"\r\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                          data-toggle=\"tooltip\"\r\n                          data-placement=\"top\"\r\n                          title=\"Add new item\"\r\n                          (click)=\"secondPanelElementModal.showAddModal()\"\r\n                        ></button>\r\n                        <button\r\n                          type=\"button\"\r\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                          data-toggle=\"tooltip\"\r\n                          data-placement=\"top\"\r\n                          title=\"Drop selected item\"\r\n                          (click)=\"secondPanelElementModal.showDropModal(dropElementFlag)\"\r\n                          [disabled]=\"sldScheduleItem.secondPanelValue.length == 0\"\r\n                        ></button>\r\n                      </div>\r\n                      -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-xl-6\">\r\n                    <div class=\"form-group\">\r\n                      <app-drop-down (onChanged)=\"onChanged($event, 'PDP Panel Third Value')\"\r\n                                     (newOnChanged)=\"newOnChanged($event, 'PDP Panel Third Value')\"\r\n                                     [dropDownName]=\"'PDP Panel Third Value'\"\r\n                                     [equipmentType]='sldScheduleItem.thirdPanelValue'\r\n                                     [selectedEquipmentType]='sldScheduleItem.selectedThirdPanelValue'\r\n                                     name=\"selectedSecondPanelValue\">\r\n                      </app-drop-down>\r\n                      <!--\r\n                      <div class=\"d-flex flex-row\">\r\n                        <select [disabled]=\"sldScheduleItem.thirdPanelValue.length == 0\"\r\n                          id=\"selectedThirdPanelValue\"\r\n                          class=\"form-control selectForOpenModal\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedThirdPanelValue\"\r\n                          name=\"selectedThirdPanelValue\"\r\n                        >\r\n                          <option\r\n                            *ngFor=\"let currentThirdPanelValue of sldScheduleItem.thirdPanelValue\"\r\n                            [ngValue]=\"currentThirdPanelValue\"\r\n                            [selected]=\"currentThirdPanelValue==sldScheduleItem.selectedThirdPanelValue\">\r\n                              {{currentThirdPanelValue}}\r\n                          </option>\r\n                        </select>\r\n                        <button\r\n                          type=\"button\"\r\n                          class=\"btn btn-outline-secondary btnPlus fa fa-plus\"\r\n                          data-toggle=\"tooltip\"\r\n                          data-placement=\"top\"\r\n                          title=\"Add new item\"\r\n                          (click)=\"thirdPanelElementModal.showAddModal()\"\r\n                        ></button>\r\n                        <button\r\n                          type=\"button\"\r\n                          class=\"btn btn-outline-secondary btnMinus fa fa-minus\"\r\n                          data-toggle=\"tooltip\"\r\n                          data-placement=\"top\"\r\n                          title=\"Drop selected item\"\r\n                          (click)=\"thirdPanelElementModal.showDropModal(dropElementFlag)\"\r\n                          [disabled]=\"sldScheduleItem.thirdPanelValue.length == 0\"\r\n                        ></button>\r\n                      </div>\r\n                      -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 col-xl-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"CircuitNumbers\">Circuit Numbers</label>\r\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"sldScheduleItem.CircuitNumbers\" name=\"CircuitNumbers\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12 col-xl-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"CFG\">CFG</label>\r\n                      <label class=\"toggle col-sm-8\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"sldScheduleItem.CFG\" name=\"CFG\" (click)=\"changeBooleanFlag(sldScheduleItem.CFG)\">\r\n                        <span class=\"handle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\" style=\"border:1px solid black;border-radius:5px\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <span>Local Switch/PB</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedFirstValueLocalSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedFirstValueLocalSwitchPB\"\r\n                          name=\"selectedFirstValueLocalSwitchPB\">\r\n                    <option *ngFor=\"let currentFirstValueLocalSwitchPB of sldScheduleItem.firstValueLocalSwitchPB\"\r\n                            [ngValue]=\"currentFirstValueLocalSwitchPB\"\r\n                            [selected]=\"currentFirstValueLocalSwitchPB==sldScheduleItem.selectedFirstValueLocalSwitchPB\">\r\n                      {{currentFirstValueLocalSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedSecondValueLocalSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedSecondValueLocalSwitchPB\"\r\n                          name=\"selectedSecondValueLocalSwitchPB\">\r\n                    <option *ngFor=\"let currentSecondValueLocalSwitchPB of sldScheduleItem.secondValueLocalSwitchPB\"\r\n                            [ngValue]=\"currentSecondValueLocalSwitchPB\"\r\n                            [selected]=\"currentSecondValueLocalSwitchPB==sldScheduleItem.selectedSecondValueLocalSwitchPB\">\r\n                      {{currentSecondValueLocalSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedThirdValueLocalSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedThirdValueLocalSwitchPB\"\r\n                          name=\"selectedThirdValueLocalSwitchPB\">\r\n                    <option *ngFor=\"let currentSelectedThirdValueLocalSwitchPB of sldScheduleItem.thirdValueLocalSwitchPB\"\r\n                            [ngValue]=\"currentSelectedThirdValueLocalSwitchPB\"\r\n                            [selected]=\"currentSelectedThirdValueLocalSwitchPB==sldScheduleItem.selectedThirdValueLocalSwitchPB\">\r\n                      {{currentSelectedThirdValueLocalSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedFourthValueLocalSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedFourthValueLocalSwitchPB\"\r\n                          name=\"selectedFourthValueLocalSwitchPB\">\r\n                    <option *ngFor=\"let currentFourthValueLocalSwitchPB of sldScheduleItem.fourthValueLocalSwitchPB\"\r\n                            [ngValue]=\"currentFourthValueLocalSwitchPB\"\r\n                            [selected]=\"currentFourthValueLocalSwitchPB==sldScheduleItem.selectedFourthValueLocalSwitchPB\">\r\n                      {{currentFourthValueLocalSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\" style=\"border:1px solid black;border-radius:5px\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <span>Field Switch/PB</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedFirstValueFieldSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedFirstValueFieldSwitchPB\"\r\n                          name=\"selectedFirstValueFieldSwitchPB\">\r\n                    <option *ngFor=\"let currentFirstValueFieldSwitchPB of sldScheduleItem.firstValueFieldSwitchPB\"\r\n                            [ngValue]=\"currentFirstValueFieldSwitchPB\"\r\n                            [selected]=\"currentFirstValueFieldSwitchPB==sldScheduleItem.selectedFirstValueFieldSwitchPB\">\r\n                      {{currentFirstValueFieldSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedSecondValueFieldSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedSecondValueFieldSwitchPB\"\r\n                          name=\"selectedSecondValueFieldSwitchPB\">\r\n                    <option *ngFor=\"let currentSecondValueFieldSwitchPB of sldScheduleItem.secondValueFieldSwitchPB\"\r\n                            [ngValue]=\"currentSecondValueFieldSwitchPB\"\r\n                            [selected]=\"currentSecondValueFieldSwitchPB==sldScheduleItem.selectedSecondValueFieldSwitchPB\">\r\n                      {{currentSecondValueFieldSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedThirdValueFieldSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedThirdValueFieldSwitchPB\"\r\n                          name=\"selectedThirdValueFieldSwitchPB\">\r\n                    <option *ngFor=\"let currentThirdValueFieldSwitchPB of sldScheduleItem.thirdValueFieldSwitchPB\"\r\n                            [ngValue]=\"currentThirdValueFieldSwitchPB\"\r\n                            [selected]=\"currentThirdValueFieldSwitchPB==sldScheduleItem.selectedThirdValueFieldSwitchPB\">\r\n                      {{currentThirdValueFieldSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-xl-6\">\r\n                <div class=\"form-group\">\r\n                  <select id=\"selectedFourthValueLocalFieldSwitchPB\"\r\n                          class=\"form-control\"\r\n                          [(ngModel)]=\"sldScheduleItem.selectedFourthValueLocalFieldSwitchPB\"\r\n                          name=\"selectedFourthValueLocalFieldSwitchPB\">\r\n                    <option *ngFor=\"let currentFourthValueLocalFieldSwitchPB of sldScheduleItem.fourthValueLocalFieldSwitchPB\"\r\n                            [ngValue]=\"currentFourthValueLocalFieldSwitchPB\"\r\n                            [selected]=\"currentFourthValueLocalFieldSwitchPB==sldScheduleItem.fourthValueLocalFieldSwitchPB\">\r\n                      {{currentFourthValueLocalFieldSwitchPB}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end\">\r\n      <div class=\"mr-auto p-2\">\r\n        <a routerLink=\"/project/{{projectId}}/sldshedules/\" class=\"btn btn-primary\">Back</a>\r\n      </div>\r\n      <div class=\"p-2 form-group\">\r\n        <span *ngIf=\"isCanChange\">\r\n          <button type=\"submit\" class=\"btn btn-success\">Update/Create</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ml-3 mr-3\" *ngIf=\"sizeWindow > 576; else werticalTable\">\r\n      <div class=\"row achievements-wrapper\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Rev.</th>\r\n              <th>Major Equipment Device Tag</th>\r\n              <th>Equipment Description</th>\r\n              <th>Device Type</th>\r\n              <th>Frame Rating</th>\r\n              <th>Trip Rating</th>\r\n              <th>Fuse Rating</th>\r\n              <th>Contactor Type</th>\r\n              <th>Contactor Size</th>\r\n              <th>Overload Type</th>\r\n              <th>Overload Size</th>\r\n              <th>Cpt Qty</th>\r\n              <th>Cpt Voltage</th>\r\n              <th>Cpt Rating</th>\r\n              <th>Vt Qty</th>\r\n              <th>Vt Voltage</th>\r\n              <th>Vt Accuracy</th>\r\n              <th>Ct Qty</th>\r\n              <th>Ct Ratio</th>\r\n              <th>GF CT Ratio</th>\r\n              <th>Shunt Coil</th>\r\n              <th>Kirk key Intrlck</th>\r\n              <th>Ground Stud</th>\r\n              <th>Pqm</th>\r\n              <th>Fdr Pr</th>\r\n              <th>Tx Pr</th>\r\n              <th>Mtr Pr</th>\r\n              <th>MNgr Pr</th>\r\n              <th>Ind. Lts.</th>\r\n              <th>Spc. Htr.</th>\r\n              <th>Htr. Circ.</th>\r\n              <th>N.O. Aux.</th>\r\n              <th>N.C. Aux.</th>\r\n              <th>Ipos. Rly.</th>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th> 1</th>\r\n              <th> 2</th>\r\n              <th> 3</th>\r\n              <th> 4</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td></td> <!-- Rev. -->\r\n              <td>{{sldScheduleItem?.majorEquipmentDeviceTag}}</td> <!-- Major Equipment Device Tag -->\r\n              <td></td> <!-- Equipment Description -->\r\n              <td>{{sldScheduleItem?.selectedOCDevice}}</td>                      <!-- Device Type -->\r\n              <td>{{sldScheduleItem?.selectedFrameRating}}</td>                   <!-- Frame Rating -->\r\n              <td>{{sldScheduleItem?.tripRating}}</td>                            <!-- Trip Rating -->\r\n              <td>{{sldScheduleItem?.selectedFuseRating}}</td>                    <!-- Fuse Rating -->\r\n              <td>{{sldScheduleItem?.selectedContactorType}}</td>                 <!-- Contactor Type -->\r\n              <td>{{sldScheduleItem?.selectedContactorSize}}</td>                 <!-- Contactor Size -->\r\n              <td>{{sldScheduleItem?.selectedOverloadType}}</td>                  <!-- Overload Type -->\r\n              <td>{{sldScheduleItem?.overloadSize}}</td>                          <!-- Overload Size -->\r\n              <td>{{sldScheduleItem?.selectedCPTQTY}}</td>                        <!-- Cpt Qty -->\r\n              <td>{{sldScheduleItem?.selectedCPTVoltage}}</td>                    <!-- Cpt Voltage -->\r\n              <td>{{sldScheduleItem?.selectedCPTRating}}</td>                     <!-- Cpt Rating -->\r\n              <td></td><!-- Vt Qty -->\r\n              <td>{{sldScheduleItem?.selectedVTVoltage}}</td>                     <!-- Vt Voltage -->\r\n              <td>{{sldScheduleItem?.selectedVTAccuracy}}</td>                    <!-- Vt Accuracy -->\r\n              <td>{{sldScheduleItem?.selectedCTQTY}}</td>                         <!-- Ct Qty -->\r\n              <td>{{sldScheduleItem?.selectedCTRatio}}</td>                       <!-- Ct Ratio -->\r\n              <td>{{sldScheduleItem?.selectedGFCTRatio}}</td>                     <!-- GFCT Ratio  -->\r\n              <td>{{sldScheduleItem?.selectedShuntCoil}}</td>                     <!-- Shunt Coil -->\r\n              <td>{{sldScheduleItem?.selectedKirkKey}}</td>                       <!-- Kirk key Intrlck -->\r\n              <td>{{sldScheduleItem?.selectedGroundStud}}</td>                    <!-- Ground Stud -->\r\n              <td>{{sldScheduleItem?.PQM}}</td>                                   <!-- Pqm-->\r\n              <td>{{sldScheduleItem?.FeederPR}}</td>                              <!-- Fdr Pr -->\r\n              <td>{{sldScheduleItem?.TransformerPR}}</td>                         <!-- Tx Pr -->\r\n              <td>{{sldScheduleItem?.MotorPR}}</td>                               <!-- Mtr Pr -->\r\n              <td>{{sldScheduleItem?.NGRRelay}}</td>                              <!-- Ngr Pr -->\r\n              <td>{{sldScheduleItem?.selectedIndicatingLights}}</td>              <!-- Ind. Lts.-->\r\n              <td>{{sldScheduleItem?.SpaceHeater}}</td>                           <!-- Spc. Htr.-->\r\n              <td></td> <!-- Htr. Circ. -->\r\n              <td>{{sldScheduleItem?.selectedNOAuxContact}}</td>                  <!-- N.O. Aux. -->\r\n              <td>{{sldScheduleItem?.selectedNCAuxContact}}</td>                  <!-- N.C. Aux.-->\r\n              <td>{{sldScheduleItem?.selectedInterposRelay}}</td>                 <!-- Ipos. Rly.-->\r\n              <td>{{sldScheduleItem.selectedFirstValueLocalSwitchPB}}</td>        <!-- Local Switch / Pushbutton 1 -->\r\n              <td>{{sldScheduleItem?.selectedSecondValueLocalSwitchPB}}</td>      <!-- Local Switch / Pushbutton 2 -->\r\n              <td>{{sldScheduleItem?.selectedThirdValueLocalSwitchPB}}</td>       <!-- Local Switch / Pushbutton 3 -->\r\n              <td>{{sldScheduleItem?.selectedFourthValueLocalSwitchPB}}</td>      <!-- Local Switch / Pushbutton 4 -->\r\n              <td>{{sldScheduleItem?.selectedFirstValueFieldSwitchPB}}</td>       <!-- Field Switch / Pushbutton 1 -->\r\n              <td>{{sldScheduleItem?.selectedSecondValueFieldSwitchPB}}</td>      <!-- Field Switch / Pushbutton 2 -->\r\n              <td>{{sldScheduleItem?.selectedThirdValueFieldSwitchPB}}</td>       <!-- Field Switch / Pushbutton 3 -->\r\n              <td>{{sldScheduleItem?.selectedFourthValueLocalFieldSwitchPB}}</td> <!-- Field Switch / Pushbutton 4 -->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <ng-template class=\"ml-3 mr-3\" #werticalTable>\r\n      <div class=\"row\">\r\n        <table class=\"table table-bordered\">\r\n          <tr>\r\n            <td><strong>Rev.</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Major Equipment Device Tag</strong></td>\r\n            <td>{{sldScheduleItem?.majorEquipmentDeviceTag}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Equipment Description</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Device Type</strong></td>\r\n            <td>{{sldScheduleItem?.selectedOCDevice}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Frame Rating</strong></td>\r\n            <td>{{sldScheduleItem?.selectedFrameRating}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Trip Rating</strong></td>\r\n            <td>{{sldScheduleItem?.tripRating}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Fuse Rating</strong></td>\r\n            <td>{{sldScheduleItem?.selectedFuseRating}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Contactor Type</strong></td>\r\n            <td>{{sldScheduleItem?.selectedContactorType}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Contactor Size</strong></td>\r\n            <td>{{sldScheduleItem?.selectedContactorSize}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Overload Type</strong></td>\r\n            <td>{{sldScheduleItem?.selectedOverloadType}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Overload Size</strong></td>\r\n            <td>{{sldScheduleItem?.overloadSize}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Cpt Qty</strong></td>\r\n            <td>{{sldScheduleItem?.selectedCPTQTY}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Cpt Voltage</strong></td>\r\n            <td>{{sldScheduleItem?.selectedCPTVoltage}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Cpt Rating</strong></td>\r\n            <td>{{sldScheduleItem?.selectedCPTRating}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Vt Qty</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Vt Voltage</strong></td>\r\n            <td>{{sldScheduleItem?.selectedVTVoltage}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Vt Accuracy</strong></td>\r\n            <td>{{sldScheduleItem?.selectedVTAccuracy}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Ct Qty</strong></td>\r\n            <td>{{sldScheduleItem?.selectedCTQTY}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Ct Ratio</strong></td>\r\n            <td>{{sldScheduleItem?.selectedCTRatio}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>GFCT Ratio</strong></td>\r\n            <td>{{sldScheduleItem?.selectedGFCTRatio}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Shunt Coil</strong></td>\r\n            <td>{{sldScheduleItem?.selectedShuntCoil}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Kirk key Intrlck</strong></td>\r\n            <td>{{sldScheduleItem?.selectedKirkKey}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Ground Stud</strong></td>\r\n            <td>{{sldScheduleItem?.selectedGroundStud}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Pqm</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Fdr Pr</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Tx Pr</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Mtr Pr</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>MNgr Pr</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Ind. Lts.</strong></td>\r\n            <td>{{sldScheduleItem?.selectedIndicatingLights}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Spc. Htr.</strong></td>\r\n            <td>{{sldScheduleItem?.SpaceHeater}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Htr. Circ.</strong></td>\r\n            <td></td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>N.O. Aux.</strong></td>\r\n            <td>{{sldScheduleItem?.selectedNOAuxContact}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>N.C. Aux.</strong></td>\r\n            <td>{{sldScheduleItem?.selectedNCAuxContact}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Ipos. Rly.</strong></td>\r\n            <td>{{sldScheduleItem?.selectedInterposRelay}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Local Switch / Pushbutton 1</strong></td>\r\n            <td>{{sldScheduleItem.selectedFirstValueLocalSwitchPB}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Local Switch / Pushbutton 2</strong></td>\r\n            <td>{{sldScheduleItem?.selectedSecondValueLocalSwitchPB}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Local Switch / Pushbutton 3</strong></td>\r\n            <td>{{sldScheduleItem?.selectedThirdValueLocalSwitchPB}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Local Switch / Pushbutton 4</strong></td>\r\n            <td>{{sldScheduleItem?.selectedFourthValueLocalSwitchPB}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Field Switch / Pushbutton 1</strong></td>\r\n            <td>{{sldScheduleItem?.selectedFirstValueFieldSwitchPB}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Field Switch / Pushbutton 2</strong></td>\r\n            <td>{{sldScheduleItem?.selectedSecondValueFieldSwitchPB}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Field Switch / Pushbutton 3</strong></td>\r\n            <td>{{sldScheduleItem?.selectedThirdValueFieldSwitchPB}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Field Switch / Pushbutton 4</strong></td>\r\n            <td>{{sldScheduleItem?.selectedFourthValueLocalFieldSwitchPB}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </ng-template>\r\n  </form>\r\n  <div class=\"row m-3\">\r\n    <span *ngIf=\"isCanChange\">\r\n      <button class=\"btn btn-danger\" (click)=\"deleteSldSchedule(sldScheduleItem._id)\">Delete</button>\r\n    </span>\r\n  </div>\r\n  <!--START MODALS -->\r\n  <app-electricals-modal [dataValue]=\"sldScheduleItem?.firstPanelValue\" [selectedValue]=\"sldScheduleItem?.selectedFirstPanelValue\" [title]=\"firstPanelElementDescription\" #firstPanelElementModal></app-electricals-modal>\r\n  <app-electricals-modal [dataValue]=\"sldScheduleItem?.secondPanelValue\" [selectedValue]=\"sldScheduleItem?.selectedSecondPanelValue\" [title]=\"secondPanelElementDescription\" #secondPanelElementModal></app-electricals-modal>\r\n  <app-electricals-modal [dataValue]=\"sldScheduleItem?.thirdPanelValue\" [selectedValue]=\"sldScheduleItem?.selectedThirdPanelValue\" [title]=\"thirdPanelElementDescription\" #thirdPanelElementModal></app-electricals-modal>\r\n  <!-- END MODALS -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sld-schedule-item/sld-schedule-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SldScheduleItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sldschedule_service__ = __webpack_require__("../../../../../src/app/services/sldschedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//



var SldScheduleItemComponent = (function () {
    function SldScheduleItemComponent(router, route, sldscheduleService, spinnerService, projectServise) {
        this.router = router;
        this.route = route;
        this.sldscheduleService = sldscheduleService;
        this.spinnerService = spinnerService;
        this.projectServise = projectServise;
        this.value = false;
        this.firstPanelElementDescription = 'First Panel Element Description';
        this.secondPanelElementDescription = 'Second Panel Element Description';
        this.thirdPanelElementDescription = 'Third Panel Element Description';
        this.dropElementFlag = true;
        //
        this.teamWork = true;
        this.projectId = this.route.snapshot.params['id'];
        this.sldSheduleId = this.route.snapshot.params['sldsheduleId'];
        this.sizeWindow = window.innerWidth;
    }
    SldScheduleItemComponent.prototype.onResize = function (event) {
        // tslint:disable-next-line:no-unused-expression
        event.target.innerWidth;
        this.sizeWindow = event.target.innerWidth;
    };
    SldScheduleItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userGuid = u.guid;
            this.userEmail = u.email;
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.sldscheduleService.getSldScheduleItem(this.projectId, this.sldSheduleId).subscribe(function (sldShedules) {
            _this.sldScheduleItem = sldShedules.sldschedule;
            _this.projectServise.getProjectById(_this.projectId).subscribe(function (itemProject) {
                _this.project = itemProject;
                if (itemProject.creator === _this.userGuid) {
                    _this.isCanChange = true;
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserChange(_this.project.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_6__shared_Availability__["a" /* Availability */].CanUserView(_this.project.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                }
            });
            //
            _this.spinnerService.hide();
        }, function (err) {
            console.log(err);
            return false;
        });
        this.sldscheduleService.getElectricalName(this.projectId).subscribe(function (electricals) {
            _this.electricalList = electricals.electricals;
        });
    };
    SldScheduleItemComponent.prototype.changeBooleanFlag = function (boolValue) {
        return boolValue = boolValue ? false : true;
    };
    SldScheduleItemComponent.prototype.onChanged = function (selectedElement, title) {
        var dropDownName = title;
        switch (dropDownName) {
            case 'PDP Panel First Value': {
                this.sldScheduleItem.selectedFirstPanelValue = selectedElement;
                break;
            }
            case 'PDP Panel Second Value': {
                this.sldScheduleItem.selectedSecondPanelValue = selectedElement;
                break;
            }
            case 'PDP Panel Third Value': {
                this.sldScheduleItem.selectedThirdPanelValue = selectedElement;
                break;
            }
            default: {
                console.log('Invalid choice');
                break;
            }
        }
    };
    SldScheduleItemComponent.prototype.newOnChanged = function (selectedElement, title) {
        var dropDownName = title;
        switch (dropDownName) {
            case 'PDP Panel First Value': {
                this.sldScheduleItem.selectedFirstPanelValue = selectedElement;
                break;
            }
            case 'PDP Panel Second Value': {
                this.sldScheduleItem.selectedSecondPanelValue = selectedElement;
                break;
            }
            case 'PDP Panel Third Value': {
                this.sldScheduleItem.selectedThirdPanelValue = selectedElement;
                break;
            }
            default: {
                console.log('Invalid choice');
                break;
            }
        }
    };
    SldScheduleItemComponent.prototype.setSystemVoltage = function (elecList, selectedMajorEquipmentElement) {
        var electList = elecList;
        for (var i = 0; i < electList.length; ++i) {
            var element = electList[i];
            return element.selectedVoltage.name;
        }
    };
    SldScheduleItemComponent.prototype.setEquipmentDescription = function (elecList, selectedMajorEquipmentElement) {
        var selectMajorElement = selectedMajorEquipmentElement;
        var electList = elecList;
        for (var i = 0; i < electList.length; ++i) {
            var element = electList[i];
            if (element.equipmentTag === selectMajorElement) {
                return element.selectedEquipmentDescription;
            }
        }
    };
    SldScheduleItemComponent.prototype.saveSldShedule = function (idSldScheduleItem, data) {
        var _this = this;
        this.spinnerService.show();
        data.firstPanelValue = this.sldScheduleItem.firstPanelValue;
        data.selectedFirstPanelValue = this.sldScheduleItem.selectedFirstPanelValue;
        //
        data.secondPanelValue = this.sldScheduleItem.secondPanelValue;
        data.selectedSecondPanelValue = this.sldScheduleItem.selectedSecondPanelValue;
        data.thirdPanelValue = this.sldScheduleItem.thirdPanelValue;
        data.selectedThirdPanelValue = this.sldScheduleItem.selectedThirdPanelValue;
        this.sldscheduleService.updateSldScheduleItem(this.projectId, idSldScheduleItem, data).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'sldshedules']);
        }, function (err) {
            console.log(err);
        });
    };
    SldScheduleItemComponent.prototype.deleteSldSchedule = function (sldScheduleId) {
        var _this = this;
        this.spinnerService.show();
        this.sldscheduleService.deleteSldScheduleItem(this.projectId, sldScheduleId).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.router.navigate(['project', _this.projectId, 'sldshedules']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SldScheduleItemComponent.prototype, "onResize", null);
    SldScheduleItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sld-schedule-item',
            template: __webpack_require__("../../../../../src/app/components/sld-schedule-item/sld-schedule-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sld-schedule-item/sld-schedule-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_sldschedule_service__["a" /* SldscheduleService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], SldScheduleItemComponent);
    return SldScheduleItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sld-schedule-list/sld-schedule-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n    font-family: \"Roboto-Light\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Roboto-Bolt\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n    font-weight: bold;\r\n  }\r\n  .table-text-style{\r\n    font-family: Roboto-Bolt!important;\r\n    color: #4c4c4c!important;\r\n  }\r\n  \r\n  .disable-decoration {\r\n    text-decoration: none!important;\r\n  }\r\n  \r\n  .table-cursor {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  thead th {\r\n    font-size: 0.6rem;\r\n  }\r\n  tbody tr td  {\r\n    font-size: 0.6rem;\r\n  }\r\n  .achievements-wrapper {\r\n    height: auto; \r\n    overflow: auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sld-schedule-list/sld-schedule-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--class=\"container\"-->\r\n  <div class=\"row\" style=\"margin-left: 0px!important; margin-right: 0px!important\">\r\n    <div class=\"col-12\">\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\" style=\"background-color: white!important\">\r\n          <li *ngIf=\"isAdmin\" class=\"breadcrumb-item\">\r\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/superadmin']\">\r\n              <strong>Admin panel</strong>\r\n            </a>\r\n          </li>\r\n          <li  *ngIf=\"!isAdmin\" class=\"breadcrumb-item\">\r\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project']\">\r\n              <strong>Projects List</strong>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\">\r\n            <a class=\"cursor-style disable-decoration text-style\" style=\"color: black!important \" [routerLink]=\"['/project', projectId]\">\r\n              <strong>Dashboard for Project {{projectName?.title}}</strong>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Sldschedules List</li>\r\n        </ol>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"pt-2 text-center\">\r\n    <h1>\r\n      SLD Schedule List\r\n      <span *ngIf=\"isCanChange\">\r\n        <button class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add new SLD Schedule\" (click)=\"saveSldShedule()\">\r\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n        </button>\r\n      </span>\r\n    </h1>\r\n  </div>\r\n  <div class=\"row achievements-wrapper ml-3 mr-3\">\r\n    <table id=\"exportable\" class=\"table table-sm table-bordered table-hover table-text-style\">\r\n      <thead>\r\n        <tr>\r\n          <!--<th></th> -->\r\n          <th>Rev.</th>                       <!-- 1 -->\r\n          <th>Major Equipment Device Tag</th> <!-- 2 -->\r\n          <th>Equipment Description</th>      <!-- 3 -->\r\n          <th>Device Type</th>                <!-- 4 -->\r\n          <th>Frame Rating</th>               <!-- 5 -->\r\n          <th>Trip Rating</th>                <!-- 6 -->\r\n          <th>Fuse Rating</th>                <!-- 7 -->\r\n          <th>Contactor Type</th>             <!-- 8 -->\r\n          <th>Contactor Size</th>             <!-- 9 -->\r\n          <th>Overload Type</th>              <!-- 10 -->\r\n          <th>Overload Size</th>              <!-- 11 -->\r\n          <th>Cpt Qty</th>                    <!-- 12 -->\r\n          <th>Cpt Voltage</th>                <!-- 13 -->\r\n          <th>Cpt Rating</th>                 <!-- 14 -->\r\n          <th>Vt Qty</th>                     <!-- 15 -->\r\n          <th>Vt Voltage</th>                 <!-- 16 -->\r\n          <th>Vt Accuracy</th>                <!-- 17 -->\r\n          <th>Ct Qty</th>                     <!-- 18 -->\r\n          <th>Ct Ratio</th>                   <!-- 19 -->\r\n          <th>GF CT Ratio</th>                <!-- 20 -->\r\n          <th>Shunt Coil</th>                 <!-- 21 -->\r\n          <th>Kirk key Intrlck</th>           <!-- 22 -->\r\n          <th>Ground Stud</th>                <!-- 23 -->\r\n          <th>Pqm</th>                        <!-- 24 -->\r\n          <th>Fdr Pr</th>                     <!-- 25 -->\r\n          <th>Tx Pr</th>                      <!-- 26 -->\r\n          <th>Mtr Pr</th>                     <!-- 27 -->\r\n          <th>Ngr Pr</th>                     <!-- 28 -->\r\n          <th>Ind. Lts.</th>                  <!-- 29 -->\r\n          <th>Spc. Htr.</th>                  <!-- 30 -->\r\n          <th>Htr. Circ.</th>                 <!-- 31 -->\r\n          <th>N.O. Aux.</th>                  <!-- 32 -->\r\n          <th>N.C. Aux.</th>                  <!-- 33 -->\r\n          <th>Ipos. Rly.</th>                 <!-- 34 -->\r\n          <th>Local Switch / Pushbutton 1</th><!-- 35 -->\r\n          <th>Local Switch / Pushbutton 2</th><!-- 36 -->\r\n          <th>Local Switch / Pushbutton 3</th><!-- 37 -->\r\n          <th>Local Switch / Pushbutton 4</th><!-- 38 -->\r\n          <th>Field Switch / Pushbutton 1</th><!-- 39 -->\r\n          <th>Field Switch / Pushbutton 2</th><!-- 40 -->\r\n          <th>Field Switch / Pushbutton 3</th><!-- 41 -->\r\n          <th>Field Switch / Pushbutton 4</th><!-- 42 -->\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let sldShedule of sldSchedules\">\r\n          <!-- <td></td> -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\"></a></td>                                        <!-- 1 false Rev -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.majorEquipmentDeviceTag}}</a></td> <!-- 2 true Major Equipment Device Tag -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\"></a></td>                                        <!-- 3 false Equipment Description -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedOCDevice}}</a></td>         <!-- 4 true Device Type /selectedOCDevice -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedFrameRating}}</a></td>     <!-- 5 true Frame Rating -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.tripRating}}</a></td>              <!-- 6 true Trip Rating -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedFuseRating}}</a></td>      <!-- 7 true Fuse Rating -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedContactorType}}</a></td>   <!-- 8 true Contactor Type -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedContactorSize}}</a></td>   <!-- 9 true Contactor Size -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedOverloadType}}</a></td>   <!-- 10 true Overload Type -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.overloadSize}}</a></td>           <!-- 11 true Overload Size -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedCPTQTY}}</a></td>         <!-- 12 true Cpt Qty -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedCPTVoltage}}</a></td>     <!-- 13 true Cpt Voltage -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedCPTRating}}</a></td>      <!-- 14 true Cpt Rating -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedVTQTY}}</a></td>          <!-- 15 true Vt Qty -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedVTVoltage}}</a></td>      <!-- 16 true Vt Voltage -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedVTAccuracy}}</a></td>     <!-- 17 true Vt Accuracy -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedCTQTY}}</a></td>          <!-- 18 true Ct Qty-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedCTRatio}}</a></td>        <!-- 19 true Ct Ratio -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedGFCTRatio}}</a></td>      <!-- 20 true GF CT Ratio -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedShuntCoil}}</a></td>      <!-- 21 true Shunt Coil -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedKirkKey}}</a></td>        <!-- 22 true Kirk key Intrlck -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedGroundStud}}</a></td>     <!-- 23 true Ground Stud -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.PQM}}</a></td>                    <!-- 24 true Pqm-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.FeederPR}}</a></td>               <!-- 25 true Fdr Pr -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.TransformerPR}}</a></td>          <!-- 26 true Tx Pr/TransformerPR-->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.MotorPR}}</a></td>                <!-- 27 true Mtr Pr/MotorPR -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.NGRRelay}}</a></td>               <!-- 28 true Ngr Pr/NGRRelay -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedIndicatingLights}}</a></td><!--29 true Ind. Lts. -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.SpaceHeater}}</a></td>            <!-- 30 true Spc. Htr/SpaceHeater -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.HeaterCircuit}}</a></td>          <!-- 31 true Htr. Circ/HeaterCircuit -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedNOAuxContact}}</a></td>          <!-- 32 true N.O. Aux. -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedNCAuxContact}}</a></td>          <!-- 33 true N.C. Aux. -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedInterposRelay}}</a></td>          <!-- 34 true Ipos. Rly. -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedFirstValueLocalSwitchPB}}</a></td> <!-- 35 true Local Switch / Pushbutton 1 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedSecondValueLocalSwitchPB}}</a></td> <!-- 36 true Local Switch / Pushbutton 2 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedThirdValueLocalSwitchPB}}</a></td> <!-- 37 true Local Switch / Pushbutton 3 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedFourthValueLocalSwitchPB}}</a></td> <!-- 38 true Local Switch / Pushbutton 4 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedFirstValueFieldSwitchPB}}</a></td> <!-- 39 trueField Switch / Pushbutton 1 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedSecondValueFieldSwitchPB}}</a></td> <!-- 40 true Field Switch / Pushbutton 2 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedThirdValueFieldSwitchPB}}</a></td> <!-- 41 trueField Switch / Pushbutton 3 -->\r\n          <td class=\"table-cursor\" routerLink=\"/project/{{projectId}}/sldshedules/{{sldShedule._id}}\"><a class=\"table-cursor\">{{sldShedule?.selectedFourthValueLocalFieldSwitchPB}}</a></td> <!-- 42 true Field Switch / Pushbutton 4 -->\r\n          <td>\r\n            <input type=\"checkbox\" [(ngModel)]=\"sldShedule.isChecked\" (click)=\"puchToSldSheduleArray(sldShedule)\">\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"mt-1 ml-auto mr-3\">\r\n      <div class=\"form-group\">\r\n        <label for=\"isChecked\">Select All</label>\r\n        <input type=\"checkbox\" [(ngModel)]=\"isChecked\" (click)=\"changeFlag(isChecked)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"ml-auto mr-3\">\r\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcell()\">Export SLD Shedule</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\">\r\n    <div class=\"mt-1 ml-auto mr-3\">\r\n      <button type=\"button\" class=\"btn btn-success\" style=\"width: 250px!important\" (click)=\"saveToExcellUIData()\" [disabled]=\"sldSheduleArrayList == 0\">Export SLD Shedule UI Data</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sld-schedule-list/sld-schedule-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SldScheduleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sldschedule_service__ = __webpack_require__("../../../../../src/app/services/sldschedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_excel_service__ = __webpack_require__("../../../../../src/app/services/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_Availability__ = __webpack_require__("../../../../../src/app/shared/Availability.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SldScheduleListComponent = (function () {
    function SldScheduleListComponent(sldscheduleService, router, route, projectServise, spinnerService, excelService) {
        this.sldscheduleService = sldscheduleService;
        this.router = router;
        this.route = route;
        this.projectServise = projectServise;
        this.spinnerService = spinnerService;
        this.excelService = excelService;
        this.isChecked = false;
        this.teamWork = false;
        this.projectId = this.route.snapshot.params['id'];
        this.sldSheduleArrayList = [];
    }
    SldScheduleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].admin;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userEmail = u.email;
            this.userGuid = u.guid;
            var isItAdmin = (this.userEmail === adminEmail);
            var isItSuperadmin = (this.userEmail === superAdminEmail);
            this.isAdmin = isItAdmin || isItSuperadmin;
        }
        this.spinnerService.show();
        this.sldscheduleService.getSldScheduleList(this.projectId).subscribe(function (sldSchedulesList) {
            _this.sldSchedules = sldSchedulesList.sldschedules;
            _this.projectServise.getProjectById(_this.projectId).subscribe(function (itemProject) {
                _this.project = itemProject;
                if (itemProject.creator === _this.userGuid) {
                    _this.isCanChange = true;
                }
                else {
                    var canChange = __WEBPACK_IMPORTED_MODULE_7__shared_Availability__["a" /* Availability */].CanUserChange(_this.project.team_project, _this.userGuid);
                    var canView = __WEBPACK_IMPORTED_MODULE_7__shared_Availability__["a" /* Availability */].CanUserView(_this.project.brows_team_project, _this.userGuid);
                    _this.isCanChange = canChange || canView || _this.isAdmin;
                }
                /*
                for (let i = 0; i < this.project.team_project.length; ++i) {
                  const teamWorker = this.project.team_project[i];
                  if (this.project.creator === this.userEmail || teamWorker === this.userEmail) {
                    this.teamWork = true;
                    break;
                  } else {
                    this.teamWork = false;
                  }
                }
                */
            });
        }, function (err) {
            _this.spinnerService.hide();
            console.log(err);
            return false;
        });
        this.projectServise.getProjectNameById(this.projectId).subscribe(function (project) {
            _this.projectName = project;
        }, function (err) {
            _this.spinnerService.hide();
            console.log(err);
            return false;
        });
        this.spinnerService.hide();
    };
    SldScheduleListComponent.prototype.puchToSldSheduleArray = function (element) {
        if (!element.isChecked) {
            this.sldSheduleArrayList.push(element._id);
        }
        else {
            this.sldSheduleArrayList.pop();
        }
    };
    SldScheduleListComponent.prototype.changeFlag = function (isCheck) {
        if (isCheck) {
            this.isChecked = false;
            for (var i = 0; i < this.sldSchedules.length; ++i) {
                this.sldSchedules[i].isChecked = false;
                this.sldSheduleArrayList = [];
            }
        }
        else {
            this.isChecked = true;
            for (var i = 0; i < this.sldSchedules.length; ++i) {
                this.sldSchedules[i].isChecked = true;
                this.sldSheduleArrayList.push(this.sldSchedules[i]._id);
            }
        }
    };
    SldScheduleListComponent.prototype.saveToExcell = function () {
        var wscols = [
            // tslint:disable-next-line:max-line-length
            // A     // B         // C       // D       // E       // F       // G       // H       // I       // J       // K       // L     // M       // N       // O       // P
            // tslint:disable-next-line:max-line-length
            { wch: 5 }, { wch: 29 }, { wch: 23 }, { wch: 11 }, { wch: 13 }, { wch: 11 }, { wch: 12 }, { wch: 17 }, { wch: 15 }, { wch: 17 }, { wch: 15 }, { wch: 8 }, { wch: 13 }, { wch: 12 }, { wch: 7 }, { wch: 12 },
            // Q       // R       // S       // T       // U       // V       // W        // X     // Y     // Z      // AA     // AB     // AC      // AD     //AE     // AF     // AG
            // tslint:disable-next-line:max-line-length
            { wch: 12 }, { wch: 7 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 5 }, { wch: 7 }, { wch: 5 }, { wch: 7 }, { wch: 7 }, { wch: 9 }, { wch: 9 }, { wch: 9 }, { wch: 9 }, { wch: 9 },
            // AH      // AI      // AJ      // AK     // AL      // AM      // AN      // AO      // AP
            { wch: 9 }, { wch: 29 }, { wch: 29 }, { wch: 29 }, { wch: 29 }, { wch: 27 }, { wch: 27 }, { wch: 27 }, { wch: 27 }
        ];
        var projectArray = [];
        for (var i = 0; i < this.sldSchedules.length; ++i) {
            projectArray.push(this.sldSchedules[i]._id);
        }
        var queryString = 'sldshedule-item-list';
        var scheetName = 'SLD Schedules List';
        var controllerName = 'Sldshadule';
        var fileName = 'SLD Schedule INDEX';
        // tslint:disable-next-line:max-line-length
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    SldScheduleListComponent.prototype.saveToExcellUIData = function () {
        var wscols = [
            // tslint:disable-next-line:max-line-length
            // A       // B        // C       // D     // E       // F       // G       // H       // I       // J       // K       // L     // M       // N       // O       // P
            { wch: 25 }, { wch: 25 }, { wch: 22 }, { wch: 29 }, { wch: 16 }, { wch: 10 }, { wch: 19 }, { wch: 15 }, { wch: 19 }, { wch: 13 }, { wch: 17 }, { wch: 8 }, { wch: 8 }, { wch: 12 }, { wch: 15 }, { wch: 12 },
            // tslint:disable-next-line:max-line-length
            // Q       // R       // S       // T       // U       // V       // W       // X       // Y       // Z       // AA     // AB      // AC        // AD    // AE      // AF      // AG
            // tslint:disable-next-line:max-line-length
            { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 12 }, { wch: 13 }, { wch: 12 }, { wch: 15 }, { wch: 8 }, { wch: 12 }, { wch: 16 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 16 }, { wch: 17 }, { wch: 17 },
            // AH      // AI      // AJ      // AK      // AL      // AM      // AN      // AO      // AP    // AQ      // AR      // AS      // AT      // AU      // AV      // AW
            // tslint:disable-next-line:max-line-length
            { wch: 17 }, { wch: 7 }, { wch: 10 }, { wch: 13 }, { wch: 15 }, { wch: 17 }, { wch: 13 }, { wch: 17 }, { wch: 16 }, { wch: 16 }, { wch: 14 }, { wch: 14 }, { wch: 18 }, { wch: 6 }, { wch: 22 }, { wch: 20 },
            // AX      // AY      // AZ      // BA      // BB      // BC
            { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }
        ];
        var projectArray = [];
        for (var i = 0; i < this.sldSchedules.length; ++i) {
            projectArray.push(this.sldSchedules[i]._id);
        }
        var queryString = 'sldshedule-item';
        var scheetName = 'SLD Shedules UI List';
        var controllerName = 'Sldshadule';
        var fileName = 'SLD Shedule REPORT';
        // tslint:disable-next-line:max-line-length
        this.excelService.exportToExcell(this.projectId, this.projectName.title, projectArray, queryString, scheetName, fileName, controllerName, wscols);
    };
    SldScheduleListComponent.prototype.saveSldShedule = function () {
        var _this = this;
        this.sldSchedule = {};
        this.sldSchedule.length = 0;
        this.spinnerService.show();
        this.sldscheduleService.createSldSchedule(this.projectId, this.sldSchedule).subscribe(function (res) {
            // let id = res['_id'];
            var responseId = res[res.length - 1]['_id'];
            var routeToCableItem = '/project/' + _this.route.snapshot.params['id'] + '/sldshedules/' + responseId;
            _this.router.navigate([routeToCableItem]);
        }, function (err) {
            console.log(err);
        });
        this.spinnerService.hide();
    };
    SldScheduleListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sld-schedule-list',
            template: __webpack_require__("../../../../../src/app/components/sld-schedule-list/sld-schedule-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sld-schedule-list/sld-schedule-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_sldschedule_service__["a" /* SldscheduleService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__services_excel_service__["a" /* ExcelService */]])
    ], SldScheduleListComponent);
    return SldScheduleListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/superadmin/superadmin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\r\n  font-family: \"Roboto-Light\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Light.ttf") + ");\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n  \r\n@font-face {\r\n  font-family: \"Roboto-Bolt\";\r\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/Roboto-Bold.ttf") + ");\r\n  font-weight: bold;\r\n}\r\n\r\n.table-text-style{\r\n  font-family: Roboto-Bolt!important;\r\n  color: #4c4c4c!important;\r\n}\r\n\r\n.disable-decoration {\r\n  text-decoration: none!important;\r\n}\r\n  \r\n.table-cursor {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/superadmin/superadmin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center\">\n    <p class=\"h5\"> Users list and their projects </p>\n  </div>\n  <div *ngIf=\"usersArr\">\n    <div *ngFor=\"let itemUser of usersArr; let i = index\">\n      <div class=\"d-flex flex-row\">\n        <div class=\"p-2\">{{itemUser.firstName}}</div>\n        <div class=\"p-2\">{{itemUser.lastName}}</div>\n        <div class=\"p-2\">{{itemUser.email}}</div>\n        <div class=\"p-2\">{{itemUser.companyName}}</div>\n        <div class=\"p-2\">{{itemUser.phone}}</div>\n        <div class=\"ml-auto p-2\" [hidden]=\"isAdmin\">\n          <a \n            class=\"btn btn-danger\"\n            data-toggle=\"tooltip\"\n            data-placement=\"top\"\n            title=\"Delete user\"\n            (click)=\"deleteUser(itemUser._id, i, itemUser.email)\"\n          >\n            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </div>\n      <div class=\"d-flex flex-row\" *ngFor=\"let itemProject of itemUser.projectList[0]\">\n        <div class=\"d-flex flex-column\">\n          <div class=\"p-2\">\n            <a class=\"table-link table-cursor disable-decoration table-text-style\" [routerLink]=\"['/project', itemProject._id]\">\n              <strong>\n                {{itemProject.title}}\n              </strong>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/superadmin/superadmin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperadminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuperadminComponent = (function () {
    function SuperadminComponent(usersService, projectService, router, spinnerService) {
        this.usersService = usersService;
        this.projectService = projectService;
        this.router = router;
        this.spinnerService = spinnerService;
    }
    SuperadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var superAdminEmail = 'superAdmin@ampx.ca';
        var adminEmail = 'admin@ampx.ca';
        this.isAdmin = false;
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            this.userEmail = u.email;
            this.userGuid = u.guid;
            this.isAdmin = (this.userEmail === adminEmail);
        }
        this.usersService.getUsers().subscribe(function (userList) {
            _this.users = userList;
            _this.usersArr = [];
            for (var i = 0; i < _this.users.length; ++i) {
                var itemUser = _this.users[i];
                if (itemUser.email === superAdminEmail || itemUser.email === adminEmail) {
                }
                else {
                    _this.usersArr.push(itemUser);
                }
            }
            var _loop_1 = function (i) {
                var userItem = _this.usersArr[i];
                userItem.projectList = [];
                _this.projectService.getProject(userItem.guid).subscribe(function (userProjectList) {
                    userItem.projectList.push(userProjectList);
                }, function (err) {
                    console.error(err);
                    return false;
                });
            };
            for (var i = 0; i < _this.usersArr.length; ++i) {
                _loop_1(i);
            }
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    SuperadminComponent.prototype.deleteUser = function (userId, userItemNumber, userGuid) {
        var _this = this;
        this.usersService.deleteUser(userId).subscribe(function (req) {
            if (req.success) {
                _this.usersArr.splice(userItemNumber, 1);
            }
        }, function (err) {
            console.error(err);
        });
        this.projectService.deleteProjectByUserGuid(userGuid).subscribe(function (req) {
            if (req.success) {
            }
        }, function (err) {
            console.error(err);
        });
    };
    SuperadminComponent.prototype.getProjectsList = function (userGuid) {
        var _this = this;
        this.projectService.getProject(userGuid).subscribe(function (userProjectList) {
            _this.projects = userProjectList;
            _this.projectArray.push(userProjectList);
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    SuperadminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-superadmin',
            template: __webpack_require__("../../../../../src/app/components/superadmin/superadmin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/superadmin/superadmin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_0__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], SuperadminComponent);
    return SuperadminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/signin']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/models/Electrical.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Electrical; });
var Electrical = (function () {
    function Electrical() {
    }
    return Electrical;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var params = new URLSearchParams();
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     * Method for registration new user
     * @param user Get data from user registration form, inherits IUser interface
     * @returns return HTTP status and message from server-side.
     */
    AuthService.prototype.registerUser = function (user) {
        var registerUrl = this.baseUrl + 'users/register';
        return this.http.post(registerUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for authenticate user
     * @param user Get data from user login form, inherits IUser interface
     * @returns return HTTP status and message from server-side.
     */
    AuthService.prototype.authenticateUser = function (user) {
        var authenticateUrl = this.baseUrl + 'users/authenticate';
        return this.http.post(authenticateUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * A method for obtaining data about a registered user profile.
     */
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        headers.append('Authorization', this.authToken);
        var profileUrl = this.baseUrl + 'users/profile';
        return this.http.get(profileUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Setting values to local storage
     * @param token
     * @param user
     */
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    /**
     * Loading id_token from local storage
     */
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    /**
     * id_token check method
     */
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    /**
     * Method to check if the user is an administrator or superadmin
     */
    AuthService.prototype.masterLogedIn = function () {
        if (window.localStorage) {
            var user = localStorage.getItem('user');
            var u = JSON.parse(user);
            var userEmail = u.email;
            if (userEmail === __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sadmin || userEmail === __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].admin) {
                return true;
            }
        }
        else {
            console.log(__WEBPACK_IMPORTED_MODULE_4_util__["error"]);
            return false;
        }
    };
    /**
     * Method to clear all fields (authToken and user)
     */
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cable.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var params = new URLSearchParams();
var CableService = (function () {
    function CableService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    CableService.prototype.getObjectsById = function (id, arrayList, queryString) {
        var _this = this;
        var observableBatch = [];
        var projectCableUrl = this.baseUrl + 'project/' + id + '/' + queryString + '/';
        arrayList.forEach(function (key) {
            observableBatch.push(_this.http.get(projectCableUrl + key).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(observableBatch);
    };
    CableService.prototype.getCabelExcelList = function (id, array, queryString) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.getObjectsById(id, array, queryString));
    };
    /**
     * Method to get the Cable list
     * @param id
     */
    CableService.prototype.getCables = function (id) {
        var cableUrl = this.baseUrl + 'project/' + id + '/cables';
        return this.http.get(cableUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     */
    CableService.prototype.getElectricalName = function (id) {
        var electricalUrl = this.baseUrl + 'project/' + id + '/electrical';
        return this.http.get(electricalUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     * @param cable
     */
    CableService.prototype.createCable = function (id, cable) {
        var createCableUrl = this.baseUrl + 'project/' + id + '/cable-create/';
        return this.http.post(createCableUrl, cable, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to get a specific Cable by ID
     * @param projectId
     * @param cableId
     */
    CableService.prototype.getCableItem = function (projectId, cableId) {
        var cableUrlById = this.baseUrl + 'project/' + projectId + '/cables/' + cableId;
        return this.http.get(cableUrlById, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to update Cable item by unique identifier
     * @param projectId
     * @param cabelId
     * @param cabelItem
     */
    CableService.prototype.updateCabelItem = function (projectId, cabelId, cabelItem) {
        var cableUpdateUrl = this.baseUrl + 'project/' + projectId + '/cable-update/' + cabelId;
        return this.http.patch(cableUpdateUrl, cabelItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for deleting an item by unique identifier
     * @param projectId
     * @param cableId
     */
    CableService.prototype.deleteCableItem = function (projectId, cableId) {
        var deleteCableUrl = this.baseUrl + 'project/' + projectId + '/cables/' + cableId;
        return this.http.delete(deleteCableUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CableService);
    return CableService;
}());



/***/ }),

/***/ "../../../../../src/app/services/contact-us.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var ContactUsService = (function () {
    function ContactUsService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     *
     * @param user
     */
    ContactUsService.prototype.sendContactUsEmail = function (user) {
        var sendMessageUrl = this.baseUrl + 'users/contacts';
        return this.http.post(sendMessageUrl, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactUsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ContactUsService);
    return ContactUsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/controller.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var ControllerService = (function () {
    function ControllerService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     *
     * @param projectId
     */
    ControllerService.prototype.getControllersList = function (projectId) {
        var getControllersListUrl = this.baseUrl + 'project/' + projectId + '/controllers-list';
        return this.http.get(getControllersListUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     */
    ControllerService.prototype.getControllers = function (projectId) {
        var getControllersUrl = this.baseUrl + 'project/' + projectId + '/controllers';
        return this.http.get(getControllersUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     * @param controller
     */
    ControllerService.prototype.createController = function (projectId, controller) {
        var createControllerUrl = this.baseUrl + 'project/' + projectId + '/controller-create';
        return this.http.post(createControllerUrl, controller, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     * @param controllerId
     */
    ControllerService.prototype.getControllerItem = function (projectId, controllerId) {
        var getControllerItemUrl = this.baseUrl + 'project/' + projectId + '/controllers/' + controllerId;
        return this.http.get(getControllerItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     * @param controllerId
     * @param controllerItem
     */
    ControllerService.prototype.updateControllerItem = function (projectId, controllerId, controllerItem) {
        var updateControllerItemUrl = this.baseUrl + 'project/' + projectId + '/controller-update/' + controllerId;
        return this.http.patch(updateControllerItemUrl, controllerItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     * @param controllerId
     */
    ControllerService.prototype.deleteControllerItem = function (projectId, controllerId) {
        var deleteControlletItemUrl = this.baseUrl + 'project/' + projectId + '/controllers/' + controllerId;
        return this.http.delete(deleteControlletItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ControllerService.prototype.getObjectsById = function (id, arrayList, queryString) {
        var _this = this;
        var observableBatch = [];
        arrayList.forEach(function (key) {
            // for dev
            /*
            observableBatch.push(this.http.get('http://localhost:3000/project/'+id+'/'+queryString+'/'+key).map((res) => res.json()));
            */
            // for deploy
            observableBatch.push(_this.http.get('project/' + id + '/' + queryString + '/' + key).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(observableBatch);
    };
    ControllerService.prototype.getControllersCheckList = function (id, array, queryString) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.getObjectsById(id, array, queryString));
    };
    ControllerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ControllerService);
    return ControllerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/electrical.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
var ElectricalService = (function () {
    function ElectricalService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    ElectricalService.prototype.getObjectsById = function (id, arrayList, queryString) {
        var _this = this;
        var observableBatch = [];
        arrayList.forEach(function (key) {
            var objectByIdUrl = _this.baseUrl + 'project/' + id + '/' + queryString + '/' + key;
            observableBatch.push(_this.http.get(objectByIdUrl).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(observableBatch);
    };
    ElectricalService.prototype.getElectricalExcelList = function (id, array, queryString) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.getObjectsById(id, array, queryString));
    };
    /**
     * Method to get the selected electrical item
     * @param projectId unique identifier for the project item
     */
    ElectricalService.prototype.getElectricals = function (projectId) {
        params.delete('guid');
        var electricalItemUrl = this.baseUrl + 'project/' + projectId + '/electricals';
        return this.http.get(electricalItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to create a new electrical item
     * @param projectId unique identifier for the project item
     * @param electrical updated electrical model
     * @param userGuid unique identifier assigned user during registration
     */
    ElectricalService.prototype.createElectrical = function (projectId, electrical, userGuid) {
        params.delete('guid');
        params.append('guid', userGuid);
        var createElectricalUrl = this.baseUrl + 'project/' + projectId + '/electrical-create';
        return this.http.post(createElectricalUrl, electrical, { headers: headers, params: params })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to get the selected electrical item
     * @param projectId unique identifier for the project item
     * @param electricalId unique identifier for the electrical item
     */
    ElectricalService.prototype.getElectricalItem = function (projectId, electricalId) {
        params.delete('guid');
        var getElectricalByIdUrl = this.baseUrl + 'project/' + projectId + '/electricals/' + electricalId;
        return this.http.get(getElectricalByIdUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for updating electric item element
     * @param projectId unique identifier for the project item
     * @param electricalId unique identifier for the electrical item
     * @param electricalItem updated electrical model
     * @param userGuid unique identifier assigned user during registration
     */
    ElectricalService.prototype.updateElectricalItem = function (projectId, electricalId, electricalItem, userGuid) {
        params.delete('guid');
        params.append('guid', userGuid);
        var updateElectricalByIdUrl = this.baseUrl + 'project/' + projectId + '/electrical-update/' + electricalId;
        return this.http.patch(updateElectricalByIdUrl, electricalItem, { headers: headers, params: params })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for removing item electric element
     * @param projectId unique identifier for the project item
     * @param electricalId unique identifier for the electrical item
     */
    ElectricalService.prototype.deleteElectricalItem = function (projectId, electricalId) {
        params.delete('guid');
        var deleteElectricalByIdUrl = this.baseUrl + 'project/' + projectId + '/electricals/' + electricalId;
        return this.http.delete(deleteElectricalByIdUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ElectricalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ElectricalService);
    return ElectricalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/excel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instrumentation_service__ = __webpack_require__("../../../../../src/app/services/instrumentation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controller_service__ = __webpack_require__("../../../../../src/app/services/controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sldschedule_service__ = __webpack_require__("../../../../../src/app/services/sldschedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cable_service__ = __webpack_require__("../../../../../src/app/services/cable.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__electrical_service__ = __webpack_require__("../../../../../src/app/services/electrical.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/mergeMap';







var ExcelService = (function () {
    function ExcelService(http, instrumentationService, controllerService, sldsheduleService, electricalService, cableService) {
        this.http = http;
        this.instrumentationService = instrumentationService;
        this.controllerService = controllerService;
        this.sldsheduleService = sldsheduleService;
        this.electricalService = electricalService;
        this.cableService = cableService;
    }
    ExcelService.prototype.xlsxSaver = function (tmp, sheetName, fileName, projectName, wscols) {
        var ws = __WEBPACK_IMPORTED_MODULE_9_xlsx__["utils"].json_to_sheet(tmp, { cellDates: true });
        ws['!cols'] = wscols;
        var wb = __WEBPACK_IMPORTED_MODULE_9_xlsx__["utils"].book_new();
        __WEBPACK_IMPORTED_MODULE_9_xlsx__["utils"].book_append_sheet(wb, ws, sheetName);
        var wbout = __WEBPACK_IMPORTED_MODULE_9_xlsx__["write"](wb, { bookType: 'xlsx', type: 'binary', cellStyles: true });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            // tslint:disable-next-line:curly
            for (var i = 0; i !== s.length; ++i)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        var options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        var dateNow = new Date();
        // tslint:disable-next-line:max-line-length
        Object(__WEBPACK_IMPORTED_MODULE_8_file_saver__["saveAs"])(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), fileName + " FROM PROJECT '" + projectName + "' - " + dateNow.toLocaleDateString('en-US', options) + '.xlsx');
    };
    ExcelService.prototype.exportToExcell = function (projectId, projectName, selectedArrayElements, queryString, sheetName, fileName, controllerName, wscols) {
        var _this = this;
        var arrayList = [];
        if (controllerName === 'Instrumentations') {
            // tslint:disable-next-line:max-line-length
            this.instrumentationService.getInstrumentationsCheckList2(projectId, selectedArrayElements, queryString).subscribe(function (instrupentations) {
                arrayList = instrupentations[0];
                var tmp = [];
                for (var index = 0; index < arrayList.length; ++index) {
                    tmp.push(arrayList[index].instrumentationItem);
                }
                _this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
            });
        }
        else if (controllerName === 'Controllers') {
            this.controllerService.getControllersCheckList(projectId, selectedArrayElements, queryString).subscribe(function (controllersItem) {
                arrayList = controllersItem[0];
                var tmp = [];
                for (var index = 0; index < arrayList.length; ++index) {
                    tmp.push(arrayList[index].controllerItem);
                }
                _this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
            });
        }
        else if (controllerName === 'Sldshadule') {
            this.sldsheduleService.getSldSheduleExcelList(projectId, selectedArrayElements, queryString).subscribe(function (sldsheduleItem) {
                arrayList = sldsheduleItem[0];
                var tmp = [];
                for (var index = 0; index < arrayList.length; ++index) {
                    tmp.push(arrayList[index].sldsheduleItem);
                }
                _this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
            });
        }
        else if (controllerName === 'Cabel') {
            this.cableService.getCabelExcelList(projectId, selectedArrayElements, queryString).subscribe(function (cableItem) {
                arrayList = cableItem[0];
                var tmp = [];
                for (var index = 0; index < arrayList.length; ++index) {
                    tmp.push(arrayList[index].cableItem);
                }
                _this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
            });
        }
        else if (controllerName === 'Electrical') {
            this.electricalService.getElectricalExcelList(projectId, selectedArrayElements, queryString).subscribe(function (electricalItem) {
                arrayList = electricalItem[0];
                var tmp = [];
                for (var index = 0; index < arrayList.length; ++index) {
                    tmp.push(arrayList[index].electricalItem);
                }
                _this.xlsxSaver(tmp, sheetName, fileName, projectName, wscols);
            });
        }
        else {
            console.log('Error');
            return;
        }
    };
    ExcelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__instrumentation_service__["a" /* InstrumentationService */],
            __WEBPACK_IMPORTED_MODULE_4__controller_service__["a" /* ControllerService */],
            __WEBPACK_IMPORTED_MODULE_5__sldschedule_service__["a" /* SldscheduleService */],
            __WEBPACK_IMPORTED_MODULE_7__electrical_service__["a" /* ElectricalService */],
            __WEBPACK_IMPORTED_MODULE_6__cable_service__["a" /* CableService */]])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "../../../../../src/app/services/instrumentation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var params = new URLSearchParams();
var InstrumentationService = (function () {
    function InstrumentationService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     * Method to get a short data of Instrumental list elements
     * @param id
     */
    InstrumentationService.prototype.getInstrumentationsList = function (id) {
        var getInstrumentationListUrl = this.baseUrl + 'project/' + id + '/instrumentations-list';
        return this.http.get(getInstrumentationListUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to get a full data of Instrumental list elements
     * @param id
     */
    InstrumentationService.prototype.getInstrumentations = function (id) {
        var getInstrumentationsListUrl = this.baseUrl + 'project/' + id + '/instrumentations';
        return this.http.get(getInstrumentationsListUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to create a new instrument element
     * @param id
     * @param instrumentation
     */
    InstrumentationService.prototype.createInstrumentstion = function (id, instrumentation) {
        var createInstrumentationUrl = this.baseUrl + 'project/' + id + '/instrumentation-create/';
        return this.http.post(createInstrumentationUrl, instrumentation, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for getting a specific Instrumental element by unique identifier.
     * @param projectId
     * @param instrumentationId
     */
    InstrumentationService.prototype.getInstrumentationItem = function (projectId, instrumentationId) {
        var getInstrumentationItemUrl = this.baseUrl + 'project/' + projectId + '/instrumentations/' + instrumentationId;
        return this.http.get(getInstrumentationItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     * @param arrayList
     * @param queryString
     */
    InstrumentationService.prototype.getObjectsById = function (id, arrayList, queryString) {
        var _this = this;
        var observableBatch = [];
        var getObjectsByIdUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl + 'project/' + id + '/' + queryString + '/';
        arrayList.forEach(function (key) {
            observableBatch.push(_this.http.get(getObjectsByIdUrl + key).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(observableBatch);
    };
    /**
     *
     * @param id
     * @param array
     * @param queryString
     */
    InstrumentationService.prototype.getInstrumentationsCheckList2 = function (id, array, queryString) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.getObjectsById(id, array, queryString));
    };
    /**
     * Method for updating a specific Instrumental element by unique identifier.
     * @param projectId
     * @param instrumentationId
     * @param instrumentationItem
     */
    InstrumentationService.prototype.updateInstrumentationItem = function (projectId, instrumentationId, instrumentationItem) {
        var updateInstrumentationItemUrl = this.baseUrl + 'project/' + projectId + '/instrumentation-update/' + instrumentationId;
        return this.http.patch(updateInstrumentationItemUrl, instrumentationItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for deleting a specific Instrumental element by unique identifier.
     * @param projectId
     * @param instrumentationId
     */
    InstrumentationService.prototype.deleteInstrumentationItem = function (projectId, instrumentationId) {
        var deleteInstrumentationItemUrl = this.baseUrl + 'project/' + projectId + '/instrumentations/' + instrumentationId;
        return this.http.delete(deleteInstrumentationItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    InstrumentationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], InstrumentationService);
    return InstrumentationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/io-assignment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IoAssignmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var params = new URLSearchParams();
var IoAssignmentService = (function () {
    function IoAssignmentService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     * Method to get the list of elements of the IO Assignment
     * @param projectId
     */
    IoAssignmentService.prototype.getIoAssignmentList = function (projectId) {
        var getIoAssignmentListUrl = this.baseUrl + 'project/' + projectId + '/ioassignments';
        return this.http.get(getIoAssignmentListUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for creating a specific element of the IO Assignment
     * @param projectId
     * @param ioAssignment
     */
    IoAssignmentService.prototype.createIoAssignment = function (projectId, ioAssignment) {
        var createIOAssignmentUrl = this.baseUrl + 'project/' + projectId + '/io_assignment-create';
        return this.http.post(createIOAssignmentUrl, ioAssignment, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for updating a specific element of the IO Assignment
     * @param projectId
     * @param data
     */
    IoAssignmentService.prototype.updateIOAssignment = function (projectId, data) {
        var updateIOAssignmentUrl = this.baseUrl + 'project/' + projectId + '/io_assignment-update/';
        return this.http.patch(updateIOAssignmentUrl, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IoAssignmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], IoAssignmentService);
    return IoAssignmentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     *
     * @param projectId
     */
    ProjectService.prototype.getCommunityData = function (projectId) {
        params.delete('guid');
        var projectCommunityUrl = this.baseUrl + 'project/' + projectId + '/project-community';
        var communityProjects = this.http.get(projectCommunityUrl, { headers: headers })
            .map(function (community) { return community.json(); });
        return communityProjects;
    };
    /**
     * GET method to get all projects created by a specific user.
     * @param userGuid Unique identifier assigned user during registration
     * @returns return an array of projects created by the user with a unique GUID identifier from server side
     */
    ProjectService.prototype.getProject = function (userGuid) {
        params.delete('guid');
        params.append('guid', userGuid);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, params: params });
        var prjectUrl = this.baseUrl + 'project';
        var allProjects = this.http.get(prjectUrl, options)
            .map(function (res) { return res.json(); });
        return allProjects;
    };
    /**
     * GET method to getting all the projects available for collaboration of this user with other users of the app
     * @param userGuid unique user id
     * @returns return an array of projects created other user, but editable by this user
     */
    ProjectService.prototype.getTeamProject = function (userGuid) {
        params.delete('guid');
        params.append('guid', userGuid);
        var teamPrjectUrl = this.baseUrl + 'project/team-project';
        return this.http.get(teamPrjectUrl, { headers: headers, params: params })
            .map(function (res) { return res.json(); });
    };
    /**
     * GET method to get all the projects created by another user, but available for viewing to the currently registered user
     * @param userGuid unique user id
     * @returns return an array of projects created other user, but editable by this user
     */
    ProjectService.prototype.getBrowsingProject = function (userGuid) {
        params.delete('guid');
        params.append('guid', userGuid);
        var browsingProjectUrl = this.baseUrl + 'project/browsing-project';
        return this.http.get(browsingProjectUrl, { headers: headers, params: params })
            .map(function (res) { return res.json(); });
    };
    /*
    getCreatedProjects(userGuid) {
      params.append('guid', userGuid);
      const options = new RequestOptions({ headers: headers, params: params });
      const createdProjectsUrl = this.baseUrl + 'project/creating-project';
      return this.http.get(createdProjectsUrl, options)
        .map(res => res.json());
    }
    */
    /**
     * POST method to create a new project by the current user
     * @param project Get data from user, inherits IProject interface
     * @returns return JSON with status and message from server-side.
     */
    ProjectService.prototype.postProject = function (project) {
        params.delete('guid');
        var postProjectsUrl = this.baseUrl + 'project/project-create';
        return this.http.post(postProjectsUrl, project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // TODO: move path to separate file
    /**
     * HTTP method for sending data to the server to save the copied project.
     * @param copiedProjectData
     */
    ProjectService.prototype.postCopiedProject = function (copiedProjectData) {
        params.delete('guid');
        var copiedProjectUrl = this.baseUrl + 'project/create-project-copy';
        return this.http.post(copiedProjectUrl, copiedProjectData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * PUT method for updating project name
     * @param id project identifier as a string variable
     * @param project updated project derived from the user interaction modal window
     * @returns return JSON with status and message from server-side.
     */
    ProjectService.prototype.updateProject = function (id, project) {
        params.delete('guid');
        var updateProjectUrl = this.baseUrl + 'project/' + id;
        return this.http.put(updateProjectUrl, project, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * DELETE method to delete a specific project
     * @param id project identifier as a string variable
     * @returns return JSON with status and message from server-side.
     */
    ProjectService.prototype.deleteProject = function (id) {
        params.delete('guid');
        var deleteProjectUrl = this.baseUrl + 'project/' + id;
        return this.http.delete(deleteProjectUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method of deleting a project from a specific user database
     * @param creatorGuid unique user id
     * @returns return JSON with status and message from server-side.
     */
    ProjectService.prototype.deleteProjectByUserGuid = function (creatorGuid) {
        params.delete('guid');
        var deleteProjectUrl = this.baseUrl + 'project/' + creatorGuid;
        return this.http.delete(deleteProjectUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     */
    ProjectService.prototype.getProjectById = function (id) {
        params.delete('guid');
        var projectByIdUrl = this.baseUrl + 'project/' + id;
        return this.http.get(projectByIdUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     */
    ProjectService.prototype.getProjectNameById = function (id) {
        params.delete('guid');
        var projectNameByIdUrl = this.baseUrl + 'project/project-name/' + id;
        return this.http.get(projectNameByIdUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sldschedule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SldscheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var params = new URLSearchParams();
var SldscheduleService = (function () {
    function SldscheduleService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     *
     * @param id
     * @param arrayList
     * @param queryString
     */
    SldscheduleService.prototype.getObjectsById = function (id, arrayList, queryString) {
        var _this = this;
        var observableBatch = [];
        var getObjectByIdUrl = this.baseUrl + 'project/' + id + '/' + queryString + '/';
        arrayList.forEach(function (key) {
            observableBatch.push(_this.http.get(getObjectByIdUrl + key).map(function (res) { return res.json(); }));
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(observableBatch);
    };
    /**
     *
     * @param id
     * @param array
     * @param queryString
     */
    SldscheduleService.prototype.getSldSheduleExcelList = function (id, array, queryString) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.getObjectsById(id, array, queryString));
    };
    /**
     *
     * @param id
     */
    SldscheduleService.prototype.getSldScheduleList = function (id) {
        var getSldShaduleListUrl = this.baseUrl + 'project/' + id + '/sld-schedules-list';
        return this.http.get(getSldShaduleListUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     */
    SldscheduleService.prototype.getSldSchedule = function (id) {
        var getSldShaduleUrl = this.baseUrl + 'project/' + id + '/sld-schedules';
        return this.http.get(getSldShaduleUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     * @param sldschedule
     */
    SldscheduleService.prototype.createSldSchedule = function (id, sldschedule) {
        var createSldShaduleUrl = this.baseUrl + 'project/' + id + '/sld-schedule-create/';
        return this.http.post(createSldShaduleUrl, sldschedule, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     * @param sldscheduleId
     */
    SldscheduleService.prototype.getSldScheduleItem = function (projectId, sldscheduleId) {
        var getSldShaduleItemUrl = this.baseUrl + 'project/' + projectId + '/sld-schedules/' + sldscheduleId;
        return this.http.get(getSldShaduleItemUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param id
     */
    SldscheduleService.prototype.getElectricalName = function (id) {
        var getElectricalNameUrl = this.baseUrl + 'project/' + id + '/electrical-for-sld';
        return this.http.get(getElectricalNameUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     * @param sldScheduleId
     * @param scheduleItem
     */
    SldscheduleService.prototype.updateSldScheduleItem = function (projectId, sldScheduleId, scheduleItem) {
        var updateSldShaduleItemUrl = this.baseUrl + 'project/' + projectId + '/sld-schedule-update/' + sldScheduleId;
        return this.http.patch(updateSldShaduleItemUrl, scheduleItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     *
     * @param projectId
     * @param sldScheduleId
     */
    SldscheduleService.prototype.deleteSldScheduleItem = function (projectId, sldScheduleId) {
        var deleteSldScheduleIdUrl = this.baseUrl + 'project/' + projectId + '/sld-schedules/' + sldScheduleId;
        return this.http.delete(deleteSldScheduleIdUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SldscheduleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SldscheduleService);
    return SldscheduleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
headers.append('Content-Type', 'application/json');
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    /**
     * Method for getting all users registered on the site
     */
    UsersService.prototype.getUsers = function () {
        var getUserUrl = this.baseUrl + 'users';
        return this.http.get(getUserUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method for obtaining a unique identifier using the mailing address specified by the user
     * @param email unique identifier assigned to the user during registration
     */
    UsersService.prototype.getItemUserByEmail = function (email) {
        var getUserByGuidUrl = this.baseUrl + 'users/team/' + email;
        return this.http.get(getUserByGuidUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Method to remove user from application
     * @param userId unique user id
     */
    UsersService.prototype.deleteUser = function (userId) {
        var deleteUserUrl = this.baseUrl + 'users/' + userId;
        return this.http.delete(deleteUserUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email === undefined || user.userName === undefined || user.firstName === undefined ||
            user.lastName === undefined || user.companyName === undefined || user.city === undefined ||
            user.phone === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmeil = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/Availability.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Availability; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var Availability = (function () {
    function Availability() {
    }
    Availability.CanUserChange = function (teamList, userGuid) {
        for (var i = 0; i < teamList.length; ++i) {
            var itemUser = teamList[i];
            if (itemUser.guid === userGuid) {
                return true;
            }
        }
        return false;
    };
    Availability.CanUserView = function (viewersList, userGuid) {
        for (var i = 0; i < viewersList.length; ++i) {
            var itemViewer = viewersList[i];
            if (itemViewer.guid === userGuid) {
                return false;
            }
        }
        return false;
    };
    Availability.CheckIsAdmin = function (localStorage) {
        var isAdmin = false;
        var superAdminEmail = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].sadmin;
        var adminEmail = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].admin;
        var user = localStorage.getItem('user');
        var u = JSON.parse(user);
        var userGuid = u.guid;
        var userEmail = u.email;
        var isItAdmin = (userGuid === adminEmail);
        var isItSuperadmin = (userEmail === superAdminEmail);
        isAdmin = isItAdmin || isItSuperadmin;
        return isAdmin;
    };
    Availability.GetUserGuid = function (localStorage) {
        var user = localStorage.getItem('user');
        var u = JSON.parse(user);
        return u.guid;
    };
    return Availability;
}());



/***/ }),

/***/ "../../../../../src/assets/fonts/Roboto-Bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Roboto-Bold.e31fcf1885e371e19f57.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/Roboto-Light.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Roboto-Light.46e48ce0628835f68a73.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// dev - 'http://localhost:3000/'
// prod - '/'
var environment = {
    production: false,
    baseUrl: '/',
    sadmin: 'superAdmin@ampx.ca',
    admin: 'admin@ampx.ca'
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map