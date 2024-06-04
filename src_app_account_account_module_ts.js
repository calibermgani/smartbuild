"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_account_account_module_ts"],{

/***/ 7185:
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountRoutingModule: () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [{
  path: 'auth',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 8945)).then(m => m.AuthModule)
}];
class AccountRoutingModule {
  static #_ = this.ɵfac = function AccountRoutingModule_Factory(t) {
    return new (t || AccountRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AccountRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 1995:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 7185);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.module */ 8945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class AccountModule {
  static #_ = this.ɵfac = function AccountModule_Factory(t) {
    return new (t || AccountModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AccountModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule]
  });
})();

/***/ }),

/***/ 1731:
/*!**********************************************!*\
  !*** ./src/app/account/auth/auth-routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 6951);
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login2/login2.component */ 7669);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 5511);
/* harmony import */ var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordreset/passwordreset.component */ 6053);
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register2/register2.component */ 662);
/* harmony import */ var _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recoverpwd2/recoverpwd2.component */ 5525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent
}, {
  path: 'signup-2',
  component: _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__.Register2Component
}, {
  path: 'reset-password',
  component: _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_3__.PasswordresetComponent
}, {
  path: 'recoverpwd-2',
  component: _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__.Recoverpwd2Component
}, {
  path: 'login-2',
  component: _login2_login2_component__WEBPACK_IMPORTED_MODULE_1__.Login2Component
}];
class AuthRoutingModule {
  static #_ = this.ɵfac = function AuthRoutingModule_Factory(t) {
    return new (t || AuthRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AuthRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 8945:
/*!*********************************************!*\
  !*** ./src/app/account/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/alert */ 1794);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 2540);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 6951);
/* harmony import */ var _login2_login2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login2/login2.component */ 7669);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 5511);
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register2/register2.component */ 662);
/* harmony import */ var _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recoverpwd2/recoverpwd2.component */ 5525);
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing */ 1731);
/* harmony import */ var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passwordreset/passwordreset.component */ 6053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);














class AuthModule {
  static #_ = this.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__.AlertModule.forRoot(), _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _auth_routing__WEBPACK_IMPORTED_MODULE_6__.AuthRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _login2_login2_component__WEBPACK_IMPORTED_MODULE_2__.Login2Component, _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_7__.PasswordresetComponent, _register2_register2_component__WEBPACK_IMPORTED_MODULE_4__.Register2Component, _recoverpwd2_recoverpwd2_component__WEBPACK_IMPORTED_MODULE_5__.Recoverpwd2Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__.AlertModule, _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _auth_routing__WEBPACK_IMPORTED_MODULE_6__.AuthRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule]
  });
})();

/***/ }),

/***/ 7669:
/*!*********************************************************!*\
  !*** ./src/app/account/auth/login2/login2.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Login2Component: () => (/* binding */ Login2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 304);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/authfake.service */ 9634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);









function Login2Component_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function Login2Component_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function Login2Component_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Login2Component_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Login2Component_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Login2Component_div_40_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Login2Component_div_40_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.email);
  }
}
function Login2Component_div_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Login2Component_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Login2Component_div_51_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
// import { environment } from '../../../../environments/environment';
/**
 * Login-2 component
 */
class Login2Component {
  constructor(formBuilder, route, router, authenticationService, authFackservice) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.authFackservice = authFackservice;
    this.submitted = false;
    this.error = '';
    // set the currenr year
    this.year = new Date().getFullYear();
    this.carouselOption = {
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        680: {
          items: 1
        }
      }
    };
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@themesbrand.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      // if (environment.defaultauth === 'firebase') {
      //   this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
      //     this.router.navigate(['/dashboard']);
      //   })
      //     .catch(error => {
      //       this.error = error ? error : '';
      //     });
      // } else {
      this.authFackservice.login(this.f.email.value, this.f.password.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        this.error = error ? error : '';
      });
      // }
    }
  }
  static #_ = this.ɵfac = function Login2Component_Factory(t) {
    return new (t || Login2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: Login2Component,
    selectors: [["app-login2"]],
    decls: 82,
    vars: 11,
    consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "card-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "card-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "card-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "float-end"], ["routerLink", "/account/recoverpwd-2", 1, "text-muted"], ["for", "userpassword"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light"], [1, "mdi", "mdi-eye-outline"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["routerLink", "/account/signup-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "invalid-feedback"], [4, "ngIf"]],
    template: function Login2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, Login2Component_ng_template_18_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, Login2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 4)(23, "div", 19)(24, "div", 20)(25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 22)(27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 24)(29, "div")(30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Welcome Back !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Sign in to continue to Skote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 26)(35, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function Login2Component_Template_form_ngSubmit_35_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 11)(37, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, Login2Component_div_40_Template, 3, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 11)(42, "div", 31)(43, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, Login2Component_div_51_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 41)(57, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 43)(60, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ul", 45)(63, "li", 46)(64, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "li", 46)(67, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "li", 46)(70, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 53)(73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Don't have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Signup now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 55)(78, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6951:
/*!*******************************************************!*\
  !*** ./src/app/account/auth/login/login.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 304);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/authfake.service */ 9634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ 1794);








function LoginComponent_alert_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "alert", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function LoginComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_28_div_1_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
  }
}
function LoginComponent_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_36_span_1_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
// import { environment } from '../../../../environments/environment';
/**
 * Login component
 */
class LoginComponent {
  // tslint:disable-next-line: max-line-length
  constructor(formBuilder, route, router, authenticationService, authFackservice) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.authFackservice = authFackservice;
    this.submitted = false;
    this.error = '';
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['IR Doctor', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      // if (environment.defaultauth === 'firebase') {
      //   this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
      //     this.router.navigate(['/dashboards']);
      //   })
      //     .catch(error => {
      //       this.error = error ? error : '';
      //     });
      // }
      // else {
      // this.authFackservice.login(this.f.email.value, this.f.password.value)
      //   .pipe()
      //   .subscribe(
      //     data => {
      //       this.router.navigate(['/procedure']);
      //     },
      //     error => {
      //       this.error = error ? error : '';
      //     });
      // }
      let user = {
        email: "admin@themesbrand.com",
        token: "fake-jwt-token",
        username: "admin"
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      // this.currentUserSubject.next(user);
      this.authFackservice.passingemail(user);
      this.router.navigate(['/procedure']);
    }
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 48,
    vars: 10,
    consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "mb-3"], ["for", "email"], ["type", "text", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light", "ms-0"], [1, "mdi", "mdi-eye-outline"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mt-4", "text-center"], ["routerLink", "/account/reset-password", 1, "text-muted"], [1, "mdi", "mdi-lock", "mr-1"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sign in to IRMS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17)(22, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_22_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_alert_23_Template, 2, 2, "alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 20)(25, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20)(30, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, LoginComponent_div_36_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 32)(42, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 34)(45, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6053:
/*!***********************************************************************!*\
  !*** ./src/app/account/auth/passwordreset/passwordreset.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordresetComponent: () => (/* binding */ PasswordresetComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/alert */ 1794);







function PasswordresetComponent_alert_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "alert", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function PasswordresetComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PasswordresetComponent_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PasswordresetComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PasswordresetComponent_div_30_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordresetComponent_div_30_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
// import { environment } from '../../../../environments/environment';
/**
 * Reset-password component
 */
class PasswordresetComponent {
  // tslint:disable-next-line: max-line-length
  constructor(formBuilder, route, router, authenticationService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.submitted = false;
    this.error = '';
    this.success = '';
    this.loading = false;
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
  }
  ngAfterViewInit() {}
  // convenience getter for easy access to form fields
  get f() {
    return this.resetForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    // if (environment.defaultauth === 'firebase') {
    this.authenticationService.resetPassword(this.f.email.value).catch(error => {
      this.error = error ? error : '';
    });
    // }
  }
  static #_ = this.ɵfac = function PasswordresetComponent_Factory(t) {
    return new (t || PasswordresetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PasswordresetComponent,
    selectors: [["app-passwordreset"]],
    decls: 43,
    vars: 7,
    consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], ["role", "alert", 1, "alert", "alert-success", "text-center", "mb-4"], ["name", "resetForm", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "mb-3"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
    template: function PasswordresetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Reset Password with Skote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17)(22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Enter your Email and instructions will be sent to you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PasswordresetComponent_Template_form_ngSubmit_24_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PasswordresetComponent_alert_25_Template, 2, 2, "alert", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21)(27, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, PasswordresetComponent_div_30_Template, 3, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25)(32, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27)(35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Remember It ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Sign In here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5525:
/*!*******************************************************************!*\
  !*** ./src/app/account/auth/recoverpwd2/recoverpwd2.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Recoverpwd2Component: () => (/* binding */ Recoverpwd2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/alert */ 1794);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);








function Recoverpwd2Component_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function Recoverpwd2Component_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function Recoverpwd2Component_alert_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "alert", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.error);
  }
}
function Recoverpwd2Component_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function Recoverpwd2Component_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function Recoverpwd2Component_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Recoverpwd2Component_div_44_div_1_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Recoverpwd2Component_div_44_div_2_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.email);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
// import { environment } from '../../../../environments/environment';
class Recoverpwd2Component {
  constructor(formBuilder, route, router, authenticationService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    // set the currenr year
    this.year = new Date().getFullYear();
    this.submitted = false;
    this.error = '';
    this.success = '';
    this.loading = false;
    this.carouselOption = {
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        680: {
          items: 1
        }
      }
    };
  }
  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.resetForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    // if (environment.defaultauth === 'firebase') {
    this.authenticationService.resetPassword(this.f.email.value).catch(error => {
      this.error = error ? error : '';
    });
    // }
  }
  static #_ = this.ɵfac = function Recoverpwd2Component_Factory(t) {
    return new (t || Recoverpwd2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Recoverpwd2Component,
    selectors: [["app-recoverpwd2"]],
    decls: 58,
    vars: 8,
    consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], ["role", "alert", 1, "alert", "alert-success", "text-center", "mb-4"], [3, "formGroup", "ngSubmit"], ["type", "danger", 3, "dismissible", 4, "ngIf"], ["for", "useremail"], ["type", "email", "formControlName", "email", "id", "useremail", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/account/login-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
    template: function Recoverpwd2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, Recoverpwd2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, Recoverpwd2Component_ng_template_20_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17)(22, "div", 18)(23, "div", 4)(24, "div", 19)(25, "div", 20)(26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 22)(28, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 24)(30, "div")(31, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Reset Password with Skote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26)(36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Enter your Email and instructions will be sent to you! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function Recoverpwd2Component_Template_form_ngSubmit_38_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, Recoverpwd2Component_alert_39_Template, 2, 2, "alert", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11)(41, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, Recoverpwd2Component_div_44_Template, 3, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 33)(46, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 35)(49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Remember It ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Sign In here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 37)(54, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A9", ctx.year, " Skote. Crafted with ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 662:
/*!***************************************************************!*\
  !*** ./src/app/account/auth/register2/register2.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register2Component: () => (/* binding */ Register2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 304);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/user.service */ 3934);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ 1794);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);

// import { environment } from '../../../../environments/environment';









function Register2Component_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "h4", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function Register2Component_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "h4", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function Register2Component_alert_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "alert", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Registeration successfull. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
  }
}
function Register2Component_alert_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "alert", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.error);
  }
}
function Register2Component_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Userame is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Register2Component_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Register2Component_div_42_div_1_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.username.errors.required);
  }
}
function Register2Component_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Register2Component_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Register2Component_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Register2Component_div_47_div_1_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Register2Component_div_47_div_2_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.email);
  }
}
function Register2Component_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function Register2Component_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, Register2Component_div_52_div_1_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.f.password.errors.required);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class Register2Component {
  constructor(formBuilder, route, router, authenticationService, userService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.userService = userService;
    this.submitted = false;
    this.error = '';
    this.successmsg = false;
    // set the currenr year
    this.year = new Date().getFullYear();
    this.carouselOption = {
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      responsive: {
        680: {
          items: 1
        }
      }
    };
  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      // if (environment.defaultauth === 'firebase') {
      //   this.authenticationService.register(this.f.email.value, this.f.password.value).then((res: any) => {
      //     this.successmsg = true;
      //     if (this.successmsg) {
      //       this.router.navigate(['/dashboard']);
      //     }
      //   })
      //     .catch(error => {
      //       this.error = error ? error : '';
      //     });
      // } else {
      this.userService.register(this.signupForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(data => {
        this.successmsg = true;
        if (this.successmsg) {
          this.router.navigate(['/account/login']);
        }
      }, error => {
        this.error = error ? error : '';
      });
      // }
    }
  }
  static #_ = this.ɵfac = function Register2Component_Factory(t) {
    return new (t || Register2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserProfileService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: Register2Component,
    selectors: [["app-register2"]],
    decls: 84,
    vars: 17,
    consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [3, "formGroup", "ngSubmit"], ["type", "success", 3, "dismissible", 4, "ngIf"], ["type", "danger", 3, "dismissible", 4, "ngIf"], ["for", "username"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "useremail"], ["type", "email", "formControlName", "email", "id", "useremail", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["for", "userpassword"], ["type", "password", "formControlName", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control", 3, "ngClass"], [1, "mb-0"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mt-4", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["routerLink", "/account/login-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
    template: function Register2Component_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, Register2Component_ng_template_18_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, Register2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17)(21, "div", 18)(22, "div", 4)(23, "div", 19)(24, "div", 20)(25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 22)(27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 24)(29, "div")(30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Register account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Get your free Skote account now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 26)(35, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function Register2Component_Template_form_ngSubmit_35_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, Register2Component_alert_36_Template, 2, 1, "alert", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, Register2Component_alert_37_Template, 2, 2, "alert", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 11)(39, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, Register2Component_div_42_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 11)(44, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, Register2Component_div_47_Template, 3, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 11)(49, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, Register2Component_div_52_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div")(54, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "By registering you agree to the Skote ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 39)(59, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 41)(62, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Sign up using");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "ul", 43)(65, "li", 44)(66, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "li", 44)(69, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "li", 44)(72, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 51)(75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Already have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 53)(80, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5511:
/*!*********************************************************!*\
  !*** ./src/app/account/auth/signup/signup.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 304);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/user.service */ 3934);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ 1794);

// import { environment } from '../../../../environments/environment';








function SignupComponent_alert_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "alert", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Registeration successfull. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
  }
}
function SignupComponent_alert_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "alert", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function SignupComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Userame is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_div_29_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);
  }
}
function SignupComponent_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_div_34_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupComponent_div_34_div_2_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.email);
  }
}
function SignupComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_div_39_div_1_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class SignupComponent {
  // tslint:disable-next-line: max-line-length
  constructor(formBuilder, route, router, authenticationService, userService) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.authenticationService = authenticationService;
    this.userService = userService;
    this.submitted = false;
    this.error = '';
    this.successmsg = false;
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }
  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      // if (environment.defaultauth === 'firebase') {
      //   this.authenticationService.register(this.f.email.value, this.f.password.value).then((res: any) => {
      //     this.successmsg = true;
      //     if (this.successmsg) {
      //       this.router.navigate(['/dashboard']);
      //     }
      //   })
      //     .catch(error => {
      //       this.error = error ? error : '';
      //     });
      // } else {
      this.userService.register(this.signupForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(data => {
        this.successmsg = true;
        if (this.successmsg) {
          this.router.navigate(['/account/login']);
        }
      }, error => {
        this.error = error ? error : '';
      });
      // }
    }
  }
  static #_ = this.ɵfac = function SignupComponent_Factory(t) {
    return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserProfileService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SignupComponent,
    selectors: [["app-signup"]],
    decls: 70,
    vars: 16,
    consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary-subtle"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], ["name", "signupForm", "novalidate", "", 1, "needs-validation", 3, "formGroup", "ngSubmit"], ["type", "success", 3, "dismissible", 4, "ngIf"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "formControlName", "username", "id", "username", "placeholder", "Enter username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "form-label"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "mt-4", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mb-0"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "mt-5", "text-center"], ["routerLink", "/account/login", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"], ["type", "success", 3, "dismissible"], ["type", "danger", 3, "dismissible"], [1, "invalid-feedback"], [4, "ngIf"]],
    template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Free Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Get your free Skote account now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "div")(17, "a", 13)(18, "div", 14)(19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17)(22, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_22_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SignupComponent_alert_23_Template, 2, 1, "alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SignupComponent_alert_24_Template, 2, 2, "alert", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 21)(26, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SignupComponent_div_29_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21)(31, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, SignupComponent_div_34_Template, 3, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 21)(36, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, SignupComponent_div_39_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 29)(41, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 31)(44, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ul", 33)(47, "li", 34)(48, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 34)(51, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li", 34)(54, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 31)(57, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "By registering you agree to the Skote ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 43)(62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Already have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3934:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileService: () => (/* binding */ UserProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class UserProfileService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(`/api/login`);
  }
  register(user) {
    return this.http.post(`/users/register`, user);
  }
  static #_ = this.ɵfac = function UserProfileService_Factory(t) {
    return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UserProfileService,
    factory: UserProfileService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1794:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/fesm2020/ngx-bootstrap-alert.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertComponent: () => (/* binding */ AlertComponent),
/* harmony export */   AlertConfig: () => (/* binding */ AlertConfig),
/* harmony export */   AlertModule: () => (/* binding */ AlertModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/utils */ 6630);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);






function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AlertComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("alert alert-" + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dismissible);
  }
}
const _c0 = ["*"];
class AlertConfig {
  constructor() {
    /** default alert type */
    this.type = 'warning';
    /** is alerts are dismissible by default */
    this.dismissible = false;
    /** default time before alert will dismiss */
    this.dismissOnTimeout = undefined;
  }
}
AlertConfig.ɵfac = function AlertConfig_Factory(t) {
  return new (t || AlertConfig)();
};
AlertConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AlertConfig,
  factory: AlertConfig.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class AlertComponent {
  constructor(_config, changeDetection) {
    this.changeDetection = changeDetection;
    /** Alert type.
     * Provides one of four bootstrap supported contextual classes:
     * `success`, `info`, `warning` and `danger`
     */
    this.type = 'warning';
    /** If set, displays an inline "Close" button */
    this.dismissible = false;
    /** Is alert visible */
    this.isOpen = true;
    /** This event fires immediately after close instance method is called,
     * $event is an instance of Alert component.
     */
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** This event fires when alert closed, $event is an instance of Alert component */
    this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.classes = '';
    this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    Object.assign(this, _config);
    this.dismissibleChange.subscribe(( /*dismissible: boolean*/
    ) => {
      this.classes = this.dismissible ? 'alert-dismissible' : '';
      this.changeDetection.markForCheck();
    });
  }
  ngOnInit() {
    if (this.dismissOnTimeout) {
      // if dismissOnTimeout used as attr without binding, it will be a string
      setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
    }
  }
  // todo: animation ` If the .fade and .in classes are present on the element,
  // the alert will fade out before it is removed`
  /**
   * Closes an alert by removing it from the DOM.
   */
  close() {
    if (!this.isOpen) {
      return;
    }
    this.onClose.emit(this);
    this.isOpen = false;
    this.changeDetection.markForCheck();
    this.onClosed.emit(this);
  }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
AlertComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["alert"], ["bs-alert"]],
  inputs: {
    type: "type",
    dismissible: "dismissible",
    dismissOnTimeout: "dismissOnTimeout",
    isOpen: "isOpen"
  },
  outputs: {
    onClose: "onClose",
    onClosed: "onClosed"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 1,
  consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", "btn-close", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "sr-only", "visually-hidden"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__.OnChange)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], AlertComponent.prototype, "dismissible", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'alert,bs-alert',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close btn-close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n        <span class=\"sr-only visually-hidden\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: AlertConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dismissOnTimeout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClosed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class AlertModule {
  static forRoot() {
    return {
      ngModule: AlertModule,
      providers: []
    };
  }
}
AlertModule.ɵfac = function AlertModule_Factory(t) {
  return new (t || AlertModule)();
};
AlertModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AlertModule
});
AlertModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [AlertComponent],
      exports: [AlertComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map