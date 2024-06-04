"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 8036);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout.component */ 2653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 1995)).then(m => m.AccountModule)
},
// tslint:disable-next-line: max-line-length
{
  path: '',
  component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 9238)).then(m => m.PagesModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  ngOnInit() {
    // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   createTranslateLoader: () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 1469);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3804);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 6140);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 1848);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/layouts.module */ 5922);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 614);
/* harmony import */ var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/helpers/error.interceptor */ 2121);
/* harmony import */ var _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/helpers/jwt.interceptor */ 5562);
/* harmony import */ var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/helpers/fake-backend */ 3709);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);



// import { environment } from '../environments/environment';





















// if (environment.defaultauth === 'firebase') {
//   initFirebaseBackend(environment.firebaseConfig);
// } else {
// tslint:disable-next-line: no-unused-expression
_core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_5__.FakeBackendInterceptor;
// }
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
      useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
      useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
      useClass: _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_5__.FakeBackendInterceptor,
      multi: true
    }
    // LoaderService,
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    ],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
      }
    }), _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_13__.AccordionModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__.TabsModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule.forRoot(), _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__.ScrollToModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_13__.AccordionModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__.TabsModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_16__.ScrollToModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule]
  });
})();

/***/ }),

/***/ 81:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFirebaseBackend: () => (/* binding */ getFirebaseBackend),
/* harmony export */   initFirebaseBackend: () => (/* binding */ initFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 1953);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ 7423);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ 6780);



class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    /**
     * Registers the user with given details
     */
    this.registerUser = (email, password) => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then(user => {
          var user = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
          resolve(user);
        }, error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * Login user with given details
     */
    this.loginUser = (email, password) => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then(user => {
          // eslint-disable-next-line no-redeclare
          var user = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
          resolve(user);
        }, error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * forget Password user with given details
     */
    this.forgetPassword = email => {
      return new Promise((resolve, reject) => {
        // tslint:disable-next-line: max-line-length
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().sendPasswordResetEmail(email, {
          url: window.location.protocol + '//' + window.location.host + '/login'
        }).then(() => {
          resolve(true);
        }).catch(error => {
          reject(this._handleError(error));
        });
      });
    };
    /**
     * Logout the user
     */
    this.logout = () => {
      return new Promise((resolve, reject) => {
        firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(() => {
          resolve(true);
        }).catch(error => {
          reject(this._handleError(error));
        });
      });
    };
    this.setLoggeedInUser = user => {
      sessionStorage.setItem('authUser', JSON.stringify(user));
    };
    /**
     * Returns the authenticated user
     */
    this.getAuthenticatedUser = () => {
      if (!sessionStorage.getItem('authUser')) {
        return null;
      }
      return JSON.parse(sessionStorage.getItem('authUser'));
    };
    if (firebaseConfig) {
      // Initialize Firebase
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged(user => {
        if (user) {
          sessionStorage.setItem('authUser', JSON.stringify(user));
        } else {
          sessionStorage.removeItem('authUser');
        }
      });
    }
  }
  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    // tslint:disable-next-line: prefer-const
    var errorMessage = error.message;
    return errorMessage;
  }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = config => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};


/***/ }),

/***/ 8036:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 304);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authfake.service */ 9634);




// import { environment } from '../../../environments/environment';
class AuthGuard {
  constructor(router, authenticationService, authFackservice, route) {
    this.router = router;
    this.authenticationService = authenticationService;
    this.authFackservice = authFackservice;
    this.route = route;
  }
  canActivate(route, state) {
    // if (environment.defaultauth === 'firebase') {
    //     const currentUser = this.authenticationService.currentUser();
    //     if (currentUser) {
    //         // logged in so return true
    //         return true;
    //     }
    // } else {
    const currentUser = this.authFackservice.currentUserValue;
    if (currentUser) {
      return true;
    }
    // else {
    //   this.router.navigate(['/account/auth/login']);
    // }
    // }
    // not logged in so redirect to login page with the return url  { queryParams: { returnUrl: state.url } }
    this.router.navigate(['/account/auth/login']);
    return false;
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2121:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 304);




class ErrorInterceptor {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload();
      }
      const error = err.error.message || err.statusText;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function ErrorInterceptor_Factory(t) {
    return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ErrorInterceptor,
    factory: ErrorInterceptor.ɵfac
  });
}

/***/ }),

/***/ 3709:
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FakeBackendInterceptor: () => (/* binding */ FakeBackendInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9593);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);




class FakeBackendInterceptor {
  constructor() {}
  intercept(request, next) {
    // array in local storage for registered users
    // tslint:disable-next-line: max-line-length
    const users = JSON.parse(localStorage.getItem('users')) || [{
      username: 'admin',
      email: 'admin@themesbrand.com',
      password: '123456'
    }];
    // wrap in delayed observable to simulate server api call
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        const filteredUsers = users.filter(user => {
          return user.email === request.body.email && user.password === request.body.password;
        });
        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const body = {
            id: user.id,
            email: user.email,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
          };
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200,
            body
          }));
        } else {
          // else return 400 bad request
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            error: {
              message: 'Username or password is incorrect'
            }
          });
        }
      }
      // get users
      if (request.url.endsWith('/users') && request.method === 'GET') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200,
            body: users
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // get user by id
      if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          // tslint:disable-next-line: radix
          const id = parseInt(urlParts[urlParts.length - 1]);
          // tslint:disable-next-line: no-shadowed-variable
          const matchedUsers = users.filter(user => user.id === id);
          const user = matchedUsers.length ? matchedUsers[0] : null;
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200,
            body: user
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // register user
      if (request.url.endsWith('/users/register') && request.method === 'POST') {
        // get new user object from post body
        const newUser = request.body;
        // validation
        const duplicateUser = users.filter(user => user.username === newUser.username).length;
        if (duplicateUser) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            error: {
              message: 'Username "' + newUser.username + '" is already taken'
            }
          });
        }
        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        // respond 200 OK
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
          status: 200
        }));
      }
      // delete user
      if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
        // tslint:disable-next-line: max-line-length
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          const urlParts = request.url.split('/');
          // tslint:disable-next-line: radix
          const id = parseInt(urlParts[urlParts.length - 1]);
          for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.id === id) {
              // delete user
              users.splice(i, 1);
              localStorage.setItem('users', JSON.stringify(users));
              break;
            }
          }
          // respond 200 OK
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
            status: 200
          }));
        } else {
          // return 401 not authorised if token is null or invalid
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({
            status: 401,
            error: {
              message: 'Unauthorised'
            }
          });
        }
      }
      // pass through any requests not handled above
      return next.handle(request);
    }))
    // tslint:disable-next-line: max-line-length
    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.materialize)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(500)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.dematerialize)());
  }
  static #_ = this.ɵfac = function FakeBackendInterceptor_Factory(t) {
    return new (t || FakeBackendInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: FakeBackendInterceptor,
    factory: FakeBackendInterceptor.ɵfac
  });
}

/***/ }),

/***/ 5562:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 304);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authfake.service */ 9634);



// import { environment } from '../../../environments/environment';
class JwtInterceptor {
  constructor(authenticationService, authfackservice) {
    this.authenticationService = authenticationService;
    this.authfackservice = authfackservice;
  }
  intercept(request, next) {
    // if (environment.defaultauth === 'firebase') {
    //     const currentUser = this.authenticationService.currentUser();
    //     if (currentUser && currentUser.token) {
    //         request = request.clone({
    //             setHeaders: {
    //                 Authorization: `Bearer ${currentUser.token}`
    //             }
    //         });
    //     }
    // } else {
    // add authorization header with jwt token if available
    const currentUser = this.authfackservice.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    // }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function JwtInterceptor_Factory(t) {
    return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: JwtInterceptor,
    factory: JwtInterceptor.ɵfac
  });
}

/***/ }),

/***/ 304:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 81);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AuthenticationService {
  constructor() {}
  /**
   * Returns the current user
   */
  currentUser() {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
  }
  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email, password) {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().loginUser(email, password).then(response => {
      const user = response;
      return user;
    });
  }
  /**
   * Performs the register
   * @param email email
   * @param password password
   */
  register(email, password) {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().registerUser(email, password).then(response => {
      const user = response;
      return user;
    });
  }
  /**
   * Reset password
   * @param email email
   */
  resetPassword(email) {
    return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().forgetPassword(email).then(response => {
      const message = response.data;
      return message;
    });
  }
  /**
   * Logout the user
   */
  logout() {
    // logout the user
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
  }
  static #_ = this.ɵfac = function AuthenticationService_Factory(t) {
    return new (t || AuthenticationService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthenticationService,
    factory: AuthenticationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9634:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthfakeauthenticationService: () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);





class AuthfakeauthenticationService {
  // public PatientID = new BehaviorSubject<any>('');
  // PatientIDObservable = this.PatientID.asObservable();
  constructor(http) {
    this.http = http;
    this.apiUrls = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.apiUrl;
    this.currentMenu = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('sidemenu');
    this.currentSideMenu = this.currentMenu.asObservable();
    this.showGridDetailedView = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
    this.GridDetailedView_value = this.showGridDetailedView.asObservable();
    this.selectedTabTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('All Items');
    this.selectedTabTypeValue = this.selectedTabTypeSubject.asObservable();
    this.AllItemsGridPayload = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    this.AllItemsPayload = this.AllItemsGridPayload.asObservable();
    this.ReloadAllItemsGridData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.ReloadGrid = this.ReloadAllItemsGridData.asObservable();
    this.SearchItembyCategory = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    this.SearchItembyCategoryObservable = this.SearchItembyCategory.asObservable();
    this.ExportAstype = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    this.ExportAstypeObservable = this.ExportAstype.asObservable();
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  login(email, password) {
    return this.http.post(`/users/authenticate`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      console.log(user);
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  changeSideMenu(data) {
    this.currentMenu.next(data);
  }
  passingemail(data) {
    this.currentUserSubject.next(data);
  }
  changeViewType(data) {
    this.showGridDetailedView.next(data);
  }
  changeTabView_AllItems(data) {
    this.selectedTabTypeSubject.next(data);
  }
  PassAllItemsGridPayload(data) {
    this.AllItemsGridPayload.next(data);
  }
  ReloadAllItemsGrid(data) {
    this.ReloadAllItemsGridData.next(data);
  }
  SearchItemByCategory(categoryId, subcategoryId) {
    let x = [];
    x.push(categoryId);
    x.push(subcategoryId);
    this.SearchItembyCategory.next(x);
  }
  GridExportType(data) {
    this.ExportAstype.next(data);
  }
  static #_ = this.ɵfac = function AuthfakeauthenticationService_Factory(t) {
    return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthfakeauthenticationService,
    factory: AuthfakeauthenticationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2608:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventService: () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);



class EventService {
  constructor() {
    this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type, payload = {}) {
    this.handler.next({
      type,
      payload
    });
  }
  /**
   * Subscribe to event
   * @param type type of event
   * @param callback call back function
   */
  subscribe(type, callback) {
    return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => event.payload)).subscribe(callback);
  }
  static #_ = this.ɵfac = function EventService_Factory(t) {
    return new (t || EventService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: EventService,
    factory: EventService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2948:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 8859);



class LanguageService {
  constructor(translate, cookieService) {
    this.translate = translate;
    this.cookieService = cookieService;
    this.languages = ['en', 'es', 'de', 'it', 'ru'];
    let browserLang;
    this.translate.addLangs(this.languages);
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang');
    } else {
      this.setLanguage('en');
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
  }
  setLanguage(lang) {
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
  }
  static #_ = this.ɵfac = function LanguageService_Factory(t) {
    return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3096:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class LoaderService {
  constructor() {
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  }
  static #_ = this.ɵfac = function LoaderService_Factory(t) {
    return new (t || LoaderService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoaderService,
    factory: LoaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7584:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

/**
 * Footer component
 */
class FooterComponent {
  constructor() {
    // set the currenr year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 8,
    vars: 1,
    consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "text-sm-end", "d-none", "d-sm-block"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Design & Develop by CaliberFocus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " \u00A9 IRMS ");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2844:
/*!************************************************************!*\
  !*** ./src/app/layouts/horizontal/horizontal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalComponent: () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 5660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 2608);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 7584);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 5802);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../horizontaltopbar/horizontaltopbar.component */ 7636);







/**
 * Horizontal-layout component
 */
class HorizontalComponent {
  constructor(eventService) {
    this.eventService = eventService;
  }
  ngOnInit() {
    this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
    this.eventService.subscribe('changeTopbar', topbar => {
      this.topbar = topbar;
      this.changeTopbar(this.topbar);
    });
    document.body.setAttribute('data-layout', 'horizontal');
    document.body.removeAttribute('data-sidebar');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.removeAttribute('data-sidebar-small');
    this.changeTopbar(this.topbar);
  }
  ngAfterViewInit() {}
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }
  changeTopbar(topbar) {
    switch (topbar) {
      case "light":
        document.body.setAttribute("data-topbar", "light");
        break;
      case "dark":
        document.body.setAttribute("data-topbar", "dark");
        break;
      case "colored":
        document.body.setAttribute("data-topbar", "colored");
        break;
      default:
        document.body.setAttribute("data-topbar", "dark");
        break;
    }
  }
  static #_ = this.ɵfac = function HorizontalComponent_Factory(t) {
    return new (t || HorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HorizontalComponent,
    selectors: [["app-horizontal"]],
    decls: 7,
    vars: 0,
    consts: [["id", "layout-wrapper"], [1, "main-content"], [1, "page-content"]],
    template: function HorizontalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-horizontaltopbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-footer")(6, "app-rightsidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_3__.RightsidebarComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_4__.HorizontaltopbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7636:
/*!************************************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/horizontaltopbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontaltopbarComponent: () => (/* binding */ HorizontaltopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 2052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 2608);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ 304);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/authfake.service */ 9634);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/language.service */ 2948);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 8859);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 5939);














function HorizontaltopbarComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 56)(4, "div", 58)(5, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ul", 60)(9, "li")(10, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li")(22, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "li")(26, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "li")(30, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "li")(34, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 58)(38, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ul", 60)(42, "li")(43, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li")(47, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li")(51, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li")(55, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "li")(59, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "li")(63, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 58)(67, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "ul", 60)(71, "li")(72, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "li")(76, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "li")(80, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "li")(84, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "li")(88, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "li")(92, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "li")(96, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 62)(100, "div", 56)(101, "div", 63)(102, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "ul", 60)(106, "li")(107, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "li")(111, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "li")(115, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "li")(119, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](121, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "li")(123, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](125, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "li")(127, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](129, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "li")(131, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](133, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 64)(135, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 31, "HEADER.UI.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 33, "HEADER.UI.LIGHTBOX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 35, "HEADER.UI.RANGE_SLIDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 37, "HEADER.UI.SWEET_ALERT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 39, "HEADER.UI.RATING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 41, "HEADER.UI.FORMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 43, "HEADER.UI.TABLES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 45, "HEADER.UI.CHARTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 47, "HEADER.APPLICATIONS.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 49, "HEADER.APPLICATIONS.ECOMMERCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 51, "HEADER.APPLICATIONS.CALENDAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 53, "HEADER.APPLICATIONS.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 55, "HEADER.APPLICATIONS.PROJECTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 57, "HEADER.APPLICATIONS.TASKS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](65, 59, "HEADER.APPLICATIONS.CONTACTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 61, "HEADER.EXTRA_PAGES.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](74, 63, "HEADER.EXTRA_PAGES.LIGHT_SIDEBAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 65, "HEADER.EXTRA_PAGES.COMPACT_SIDEBAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](82, 67, "HEADER.EXTRA_PAGES.HORIZONTAL_LAYOUT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](86, 69, "HEADER.EXTRA_PAGES.MAINTENANCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](90, 71, "HEADER.EXTRA_PAGES.COMING SOON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](94, 73, "HEADER.EXTRA_PAGES.TIMELINE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](98, 75, "HEADER.EXTRA_PAGES.FAQ"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](104, 77, "HEADER.UI.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](109, 79, "HEADER.UI.LIGHTBOX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](113, 81, "HEADER.UI.RANGE_SLIDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](117, 83, "HEADER.UI.SWEET_ALERT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](121, 85, "HEADER.UI.RATING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](125, 87, "HEADER.UI.FORMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](129, 89, "HEADER.UI.TABLES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](133, 91, "HEADER.UI.CHARTS"));
  }
}
function HorizontaltopbarComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 66)(1, "form", 67)(2, "div", 68)(3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 71)(6, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
}
function HorizontaltopbarComponent_img_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 73);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r2.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function HorizontaltopbarComponent_img_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 73);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r3.valueset, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function HorizontaltopbarComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
function HorizontaltopbarComponent_div_39_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_div_39_a_1_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.setLanguage(item_r11.text, item_r11.lang, item_r11.flag));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r10.cookieValue === item_r11.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r11.flag, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r11.text);
  }
}
function HorizontaltopbarComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_div_39_a_1_Template, 4, 5, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.listLang);
  }
}
function HorizontaltopbarComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 80)(2, "div", 81)(3, "div", 82)(4, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 82)(9, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Bitbucket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 82)(14, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Dribbble");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 81)(19, "div", 82)(20, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Dropbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 82)(25, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Mail Chimp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 82)(30, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Slack");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
}
function HorizontaltopbarComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 90)(1, "div", 67)(2, "div", 91)(3, "div", 82)(4, "h6", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 92)(8, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ngx-simplebar", 94)(12, "a", 95)(13, "div", 96)(14, "div", 97)(15, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 100)(18, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 102)(22, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 95)(30, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 100)(33, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 102)(37, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "a", 95)(45, "div", 96)(46, "div", 97)(47, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 100)(50, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 102)(54, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "a", 95)(62, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 100)(65, "h6", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 102)(69, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 110)(77, "a", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 15, "HEADER.NOTIFICATIONS.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 17, "HEADER.NOTIFICATIONS.VIEW_ALL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 19, "HEADER.NOTIFICATIONS.FIRST.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 21, "HEADER.NOTIFICATIONS.FIRST.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 23, "HEADER.NOTIFICATIONS.FIRST.TIME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 25, "HEADER.NOTIFICATIONS.SECOND.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 27, "HEADER.NOTIFICATIONS.SECOND.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 29, "HEADER.NOTIFICATIONS.SECOND.TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 31, "HEADER.NOTIFICATIONS.THIRD.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 33, "HEADER.NOTIFICATIONS.THIRD.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](60, 35, "HEADER.NOTIFICATIONS.THIRD.TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 37, "HEADER.NOTIFICATIONS.FOUR.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](71, 39, "HEADER.NOTIFICATIONS.FOUR.TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](75, 41, "HEADER.NOTIFICATIONS.FOUR.TIME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](80, 43, "HEADER.NOTIFICATIONS.LOAD_MORE"), " ");
  }
}
function HorizontaltopbarComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 74)(1, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 116)(10, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_div_59_Template_a_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "HEADER.LOGIN.PROFILE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 7, "HEADER.LOGIN.MY_WALLET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 9, "HEADER.LOGIN.SETTINGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 11, "HEADER.LOGIN.LOCK_SCREEN"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 13, "HEADER.LOGIN.LOGOUT"), "");
  }
}
function HorizontaltopbarComponent_ng_container_68_a_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 129);
  }
}
function HorizontaltopbarComponent_ng_container_68_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_68_a_2_div_4_Template, 1, 0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", item_r16.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r16.icon, " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, item_r16.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r17.hasItems(item_r16));
  }
}
function HorizontaltopbarComponent_ng_container_68_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_68_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.onMenuClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r16.icon, " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, item_r16.label), " ");
  }
}
const _c1 = function () {
  return {
    exact: true
  };
};
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subitem_r27.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, subitem_r27.label), " ");
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "div", 138)(2, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 138)(6, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 138)(10, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const subitem_r27 = ctx_r34.$implicit;
    const i_r26 = ctx_r34.index;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subitem_r27.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, item_r16.subItems[i_r26].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", item_r16.subItems[i_r26 + 1] == null ? null : item_r16.subItems[i_r26 + 1].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 8, item_r16.subItems[i_r26 + 1] == null ? null : item_r16.subItems[i_r26 + 1].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", item_r16.subItems[i_r26 + 2] == null ? null : item_r16.subItems[i_r26 + 2].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 10, item_r16.subItems[i_r26 + 2] == null ? null : item_r16.subItems[i_r26 + 2].label));
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_1_div_1_Template, 13, 12, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 % 3 == 0);
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_2_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.onMenuClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subitem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, subitem_r27.label), " ");
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSubitem_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subSubitem_r41.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, subSubitem_r41.label));
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSubSubitem_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subSubSubitem_r46.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, subSubSubitem_r46.label));
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 141)(1, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_div_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.onMenuClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_div_1_ng_template_6_Template, 3, 4, "ng-template", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subSubitem_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, subSubitem_r41.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", subSubitem_r41.subItems);
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_a_0_Template, 3, 4, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_div_1_Template, 7, 4, "div", 135);
  }
  if (rf & 2) {
    const subSubitem_r41 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r40.hasItems(subSubitem_r41));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r40.hasItems(subSubitem_r41));
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 141)(1, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r50.onMenuClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_ng_template_6_Template, 2, 2, "ng-template", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subitem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, subitem_r27.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", subitem_r27.subItems);
  }
}
function HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_a_0_Template, 3, 6, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_1_Template, 2, 1, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_2_Template, 5, 3, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_div_3_Template, 7, 4, "div", 135);
  }
  if (rf & 2) {
    const subitem_r27 = ctx.$implicit;
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r16.subItems.length < 11 && !ctx_r25.hasItems(subitem_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r16.subItems.length > 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r16.subItems.length == 11 && !ctx_r25.hasItems(subitem_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r25.hasItems(subitem_r27));
  }
}
const _c2 = function (a0) {
  return {
    "dropdown-mega-menu-xl px-2": a0
  };
};
function HorizontaltopbarComponent_ng_container_68_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_68_div_4_ng_template_1_Template, 4, 4, "ng-template", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c2, item_r16.subItems.length > 11));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r16.subItems);
  }
}
function HorizontaltopbarComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_68_a_2_Template, 5, 8, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HorizontaltopbarComponent_ng_container_68_a_3_Template, 5, 6, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_68_div_4_Template, 2, 4, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r16.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r16.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r16));
  }
}
// import { environment } from '../../../environments/environment';
/**
 * Horizontal Topbar and navbar specified
 */
class HorizontaltopbarComponent {
  // tslint:disable-next-line: max-line-length
  constructor(document, router, eventService, authService, authFackservice, languageService,
  // tslint:disable-next-line: variable-name
  _cookiesService) {
    this.document = document;
    this.router = router;
    this.eventService = eventService;
    this.authService = authService;
    this.authFackservice = authFackservice;
    this.languageService = languageService;
    this._cookiesService = _cookiesService;
    this.menuItems = [];
    this.listLang = [{
      text: 'English',
      flag: 'assets/images/flags/us.jpg',
      lang: 'en'
    }, {
      text: 'Spanish',
      flag: 'assets/images/flags/spain.jpg',
      lang: 'es'
    }, {
      text: 'German',
      flag: 'assets/images/flags/germany.jpg',
      lang: 'de'
    }, {
      text: 'Italian',
      flag: 'assets/images/flags/italy.jpg',
      lang: 'it'
    }, {
      text: 'Russian',
      flag: 'assets/images/flags/russia.jpg',
      lang: 'ru'
    }];
    router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.activateMenu();
      }
    });
  }
  ngOnInit() {
    this.element = document.documentElement;
    this.initialize();
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.valueset = 'assets/images/flags/us.jpg';
      }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }
  setLanguage(text, lang, flag) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
  /**
   * Logout the user
   */
  logout() {
    // if (environment.defaultauth === 'firebase') {
    //   this.authService.logout();
    // } else {
    this.authFackservice.logout();
    // }
    this.router.navigate(['/account/login']);
  }
  /**
   * On menu click
   */
  onMenuClick(event) {
    const nextEl = event.target.nextElementSibling;
    if (nextEl) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove("show");
      }
      nextEl.classList.toggle("show");
    }
    return false;
  }
  ngAfterViewInit() {
    this.activateMenu();
  }
  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }
  /**
   * Togglemenu bar
   */
  toggleMenubar() {
    const element = document.getElementById('topnav-menu-content');
    element.classList.toggle('show');
  }
  /**
   * Activates the menu
   */
  activateMenu() {
    const resetParent = el => {
      const parent = el.parentElement;
      if (parent) {
        parent.classList.remove('active');
        const parent2 = parent.parentElement;
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        if (parent2) {
          parent2.classList.remove('active');
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove('active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.remove('active');
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove('active');
                const menuelement = document.getElementById("topnav-menu-content");
                if (menuelement !== null) {
                  if (menuelement.classList.contains('show')) document.getElementById("topnav-menu-content").classList.remove("show");
                }
              }
            }
          }
        }
      }
    };
    // activate menu item based on location
    const links = document.getElementsByClassName('side-nav-link-ref');
    let matchingMenuItem = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      if (location.pathname === links[i]['pathname']) {
        matchingMenuItem = links[i];
        break;
      }
    }
    if (matchingMenuItem) {
      const parent = matchingMenuItem.parentElement;
      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add('active');
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add('active');
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add('active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add('active');
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.add('active');
                const parent6 = parent5.parentElement;
                if (parent6) {
                  parent6.classList.add('active');
                }
              }
            }
          }
        }
      }
    }
  }
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }
  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (!document.fullscreenElement && !this.element.mozFullScreenElement && !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
  /**
   * Initialize
   */
  initialize() {
    this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU;
  }
  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
  static #_ = this.ɵfac = function HorizontaltopbarComponent_Factory(t) {
    return new (t || HorizontaltopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_3__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HorizontaltopbarComponent,
    selectors: [["app-horizontaltopbar"]],
    decls: 69,
    vars: 11,
    consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.svg", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19"], ["type", "button", 1, "btn", "btn-sm", "px-3", "font-size-16", "d-lg-none", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], [1, "app-search", "d-none", "d-xl-block"], [1, "position-relative"], ["type", "text", 1, "form-control", 3, "placeholder"], [1, "bx", "bx-search-alt"], ["dropdown", "", 1, "dropdown", "dropdown-mega", "d-none", "d-lg-block", "me-2"], ["type", "button", "dropdownToggle", "", 1, "btn", "header-item"], [1, "mdi", "mdi-chevron-down"], ["class", "dropdown-menu dropdown-megamenu", 4, "dropdownMenu"], ["dropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "me-2"], ["type", "button", "id", "page-header-search-dropdown", "dropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["class", "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0", 4, "dropdownMenu"], ["dropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "id", "page-header-user-dropdown", "dropdownToggle", "", 1, "btn", "header-item"], ["alt", "Header Language", "height", "16", 3, "src", 4, "ngIf"], [1, "ms-1"], ["class", "ms-1", 4, "ngIf"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], ["dropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "dropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-customize"], ["class", "dropdown-menu dropdown-menu-lg dropdown-menu-end", 4, "dropdownMenu"], [1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["type", "button", "id", "page-header-notifications-dropdown", "dropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "bg-danger", "rounded-pill"], ["class", "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0", "aria-labelledby", "page-header-notifications-dropdown", 4, "dropdownMenu"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ms-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], [1, "dropdown", "d-inline-block"], ["type", "button", 1, "btn", "header-item", "noti-icon", "right-bar-toggle", 3, "click"], [1, "bx", "bx-cog", "bx-spin"], [1, "topnav"], [1, "container-fluid"], [1, "navbar", "navbar-light", "navbar-expand-lg", "topnav-menu", "active"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse", "active"], [1, "navbar-nav"], [4, "ngFor", "ngForOf"], [1, "dropdown-menu", "dropdown-megamenu"], [1, "row"], [1, "col-sm-8"], [1, "col-md-4"], [1, "font-size-14", "mt-0"], [1, "list-unstyled", "megamenu-list"], ["href", "javascript:void(0);"], [1, "col-sm-4"], [1, "col-sm-6"], [1, "col-sm-5"], ["src", "assets/images/megamenu-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["alt", "Header Language", "height", "16", 3, "src"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "class", "dropdown-item notify-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "ngClass", "click"], ["alt", "user-image", "height", "12", 1, "ms-1", 3, "src"], [1, "align-middle"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], ["aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "row", "align-items-center"], [1, "col-auto"], ["href", "javascript: void(0);", 1, "small"], [2, "position", "relative", "height", "230px"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "media"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top", "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-14", "text-center"], [1, "mdi", "mdi-arrow-right-circle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "badge", "bg-success", "float-end"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "me-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"], [1, "nav-item", "dropdown"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "routerLink", 4, "ngIf"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "click", 4, "ngIf"], ["class", "dropdown-menu", "aria-labelledby", "topnav-dashboard", 3, "ngClass", 4, "ngIf"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "routerLink"], ["class", "arrow-down", 4, "ngIf"], [1, "arrow-down"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-dashboard", 1, "dropdown-menu", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "col dropdown-item side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["routerLinkActive", "active", 1, "col", "dropdown-item", "side-nav-link-ref", 3, "routerLink", "routerLinkActiveOptions"], ["class", "row", 4, "ngIf"], [1, "col-lg-4"], ["routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"], ["href", "javascript: void(0);", 1, "dropdown-item", "dropdown-toggle", 3, "click"], [1, "dropdown"], [1, "dropdown-menu"], ["class", "dropdown-item side-nav-link-ref", "href", "javascript: void(0);", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["href", "javascript: void(0);", "routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"]],
    template: function HorizontaltopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 9)(10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_14_listener() {
          return ctx.toggleMenubar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "form", 14)(17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18)(22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, HorizontaltopbarComponent_div_26_Template, 137, 93, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 2)(28, "div", 22)(29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, HorizontaltopbarComponent_div_31_Template, 8, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 26)(33, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, HorizontaltopbarComponent_img_34_Template, 1, 1, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, HorizontaltopbarComponent_img_37_Template, 1, 1, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, HorizontaltopbarComponent_span_38_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, HorizontaltopbarComponent_div_39_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 32)(41, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, HorizontaltopbarComponent_div_43_Template, 34, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 36)(45, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_45_listener() {
          return ctx.fullscreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 26)(48, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, HorizontaltopbarComponent_div_52_Template, 81, 45, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 26)(54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Henry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, HorizontaltopbarComponent_div_59_Template, 24, 15, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 46)(61, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_61_listener() {
          return ctx.onSettingsButtonClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 49)(64, "div", 50)(65, "nav", 51)(66, "div", 52)(67, "ul", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, HorizontaltopbarComponent_ng_container_68_Template, 5, 3, "ng-container", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 7, "HEADER.SEARCH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 9, "HEADER.MEGA_MENU"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__.BsDropdownDirective, simplebar_angular__WEBPACK_IMPORTED_MODULE_10__.SimplebarAngularComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2052:
/*!**************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/menu.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU: () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [{
  id: 1,
  label: 'MENUITEMS.DASHBOARDS.TEXT',
  icon: 'bx-home-circle',
  subItems: [{
    id: 2,
    label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
    link: '/',
    parentId: 1
  }, {
    id: 3,
    label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
    link: '/',
    parentId: 1
  }, {
    id: 4,
    label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
    link: '/',
    parentId: 1
  }, {
    id: 5,
    label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
    link: '/',
    parentId: 1
  }, {
    id: 6,
    label: 'MENUITEMS.DASHBOARDS.LIST.JOBS',
    link: '/',
    parentId: 1
  }]
}, {
  id: 7,
  label: 'MENUITEMS.UIELEMENTS.TEXT',
  icon: 'bx-tone',
  isUiElement: true,
  subItems: [{
    id: 8,
    label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
    link: '/',
    parentId: 7
  }, {
    id: 9,
    label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
    link: '/',
    parentId: 7
  }, {
    id: 10,
    label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
    link: '/',
    parentId: 7
  }, {
    id: 11,
    label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
    link: '/',
    parentId: 7
  }, {
    id: 12,
    label: 'MENUITEMS.UIELEMENTS.LIST.TOASTS',
    link: '/',
    parentId: 7
  }, {
    id: 13,
    label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
    link: '/',
    parentId: 7
  }, {
    id: 14,
    label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
    link: '/',
    parentId: 7
  }, {
    id: 15,
    label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
    link: '/',
    parentId: 7
  }, {
    id: 16,
    label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
    link: '/',
    parentId: 7
  }, {
    id: 17,
    label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
    link: '/',
    parentId: 7
  }, {
    id: 18,
    label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
    link: '/',
    parentId: 7
  }, {
    id: 19,
    label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
    link: '/',
    parentId: 7
  }, {
    id: 20,
    label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
    link: '/',
    parentId: 7
  }, {
    id: 21,
    label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
    link: '/',
    parentId: 7
  }, {
    id: 22,
    label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
    link: '/',
    parentId: 7
  }, {
    id: 23,
    label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
    link: '/',
    parentId: 7
  }, {
    id: 24,
    label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
    link: '/',
    parentId: 7
  }, {
    id: 25,
    label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
    link: '/',
    parentId: 7
  }, {
    id: 26,
    label: 'MENUITEMS.UIELEMENTS.LIST.NOTIFICATION',
    link: '/',
    parentId: 7
  }, {
    id: 27,
    label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
    link: '/',
    parentId: 7
  }, {
    id: 28,
    label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
    link: '/',
    parentId: 7
  }, {
    id: 29,
    label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
    link: '/',
    parentId: 7
  }]
}, {
  id: 30,
  label: 'MENUITEMS.APPS.TEXT',
  icon: 'bx-customize',
  subItems: [{
    id: 31,
    label: 'MENUITEMS.CALENDAR.TEXT',
    link: '/',
    parentId: 30
  }, {
    id: 32,
    label: 'MENUITEMS.CHAT.TEXT',
    link: '/',
    parentId: 30
  }, {
    id: 33,
    label: 'MENUITEMS.FILEMANAGER.TEXT',
    link: '/',
    parentId: 30
  }, {
    id: 34,
    label: 'MENUITEMS.EMAIL.TEXT',
    subItems: [{
      id: 35,
      label: 'MENUITEMS.EMAIL.LIST.INBOX',
      link: '/',
      parentId: 34
    }, {
      id: 36,
      label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
      link: '/',
      parentId: 34
    }, {
      id: 37,
      label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
      parentId: 34,
      subItems: [{
        id: 38,
        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
        link: '/',
        parentId: 37
      }, {
        id: 39,
        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
        link: '/',
        parentId: 37
      }, {
        id: 40,
        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
        link: '/',
        parentId: 37
      }]
    }]
  }, {
    id: 41,
    label: 'MENUITEMS.ECOMMERCE.TEXT',
    subItems: [{
      id: 42,
      label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
      link: '/',
      parentId: 41
    }, {
      id: 43,
      label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
      link: '/',
      parentId: 41
    }, {
      id: 44,
      label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
      link: '/',
      parentId: 41
    }, {
      id: 45,
      label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
      link: '/',
      parentId: 41
    }, {
      id: 46,
      label: 'MENUITEMS.ECOMMERCE.LIST.CART',
      link: '/',
      parentId: 41
    }, {
      id: 47,
      label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
      link: '/',
      parentId: 41
    }, {
      id: 48,
      label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
      link: '/',
      parentId: 41
    }, {
      id: 49,
      label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
      link: '/',
      parentId: 41
    }]
  }, {
    id: 50,
    label: 'MENUITEMS.CRYPTO.TEXT',
    icon: 'bx-bitcoin',
    subItems: [{
      id: 51,
      label: 'MENUITEMS.CRYPTO.LIST.WALLET',
      link: '/',
      parentId: 50
    }, {
      id: 52,
      label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
      link: '/',
      parentId: 50
    }, {
      id: 53,
      label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
      link: '/',
      parentId: 50
    }, {
      id: 54,
      label: 'MENUITEMS.CRYPTO.LIST.LENDING',
      link: '/',
      parentId: 50
    }, {
      id: 55,
      label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
      link: '/',
      parentId: 50
    }, {
      id: 56,
      label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
      link: '/',
      parentId: 50
    }, {
      id: 57,
      label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
      link: '/',
      parentd: 50
    }]
  }, {
    id: 58,
    label: 'MENUITEMS.PROJECTS.TEXT',
    subItems: [{
      id: 59,
      label: 'MENUITEMS.PROJECTS.LIST.GRID',
      link: '/',
      parentId: 58
    }, {
      id: 60,
      label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
      link: '/',
      parentId: 58
    }, {
      id: 61,
      label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
      link: '/',
      parentId: 58
    }, {
      id: 62,
      label: 'MENUITEMS.PROJECTS.LIST.CREATE',
      link: '/',
      parentId: 58
    }]
  }, {
    id: 63,
    label: 'MENUITEMS.TASKS.TEXT',
    subItems: [{
      id: 64,
      label: 'MENUITEMS.TASKS.LIST.TASKLIST',
      link: '/',
      parentId: 63
    }, {
      id: 65,
      label: 'MENUITEMS.TASKS.LIST.KANBAN',
      link: '/',
      parentId: 63
    }, {
      id: 66,
      label: 'MENUITEMS.TASKS.LIST.CREATETASK',
      link: '/',
      parentId: 63
    }]
  }, {
    id: 67,
    label: 'MENUITEMS.CONTACTS.TEXT',
    icon: 'bxs-user-detail',
    subItems: [{
      id: 68,
      label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
      link: '/',
      parentId: 67
    }, {
      id: 69,
      label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
      link: '/',
      parentId: 67
    }, {
      id: 70,
      label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
      link: '/',
      parentId: 67
    }]
  }, {
    id: 71,
    label: 'MENUITEMS.BLOG.TEXT',
    subItems: [{
      id: 72,
      label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
      link: '/',
      parentId: 71
    }, {
      id: 73,
      label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
      link: '/',
      parentId: 71
    }, {
      id: 74,
      label: 'MENUITEMS.BLOG.LIST.DETAIL',
      link: '/',
      parentId: 71
    }]
  }, {
    id: 75,
    label: 'MENUITEMS.JOBS.TEXT',
    icon: 'bx-briefcase-alt',
    badge: {
      variant: 'success',
      text: 'MENUITEMS.JOBS.BADGE'
    },
    subItems: [{
      id: 76,
      label: 'MENUITEMS.JOBS.LIST.JOBLIST',
      link: '/',
      parentId: 75
    }, {
      id: 77,
      label: 'MENUITEMS.JOBS.LIST.JOBGRID',
      link: '/',
      parentId: 75
    }, {
      id: 78,
      label: 'MENUITEMS.JOBS.LIST.APPLYJOB',
      link: '/',
      parentId: 75
    }, {
      id: 79,
      label: 'MENUITEMS.JOBS.LIST.JOBDETAILS',
      link: '/',
      parentId: 75
    }, {
      id: 80,
      label: 'MENUITEMS.JOBS.LIST.JOBCATEGORIES',
      link: '/',
      parentId: 75
    }, {
      id: 81,
      label: 'MENUITEMS.JOBS.LIST.CANDIDATE.TEXT',
      parentId: 75,
      subItems: [{
        id: 82,
        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.LIST',
        link: '/',
        parentId: 81
      }, {
        id: 83,
        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.OVERVIEW',
        link: '/',
        parentId: 81
      }]
    }]
  }]
}, {
  id: 84,
  icon: 'bx-collection',
  label: 'MENUITEMS.COMPONENTS.TEXT',
  subItems: [{
    id: 85,
    label: 'MENUITEMS.FORMS.TEXT',
    subItems: [{
      id: 86,
      label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
      link: '/',
      parentId: 85
    }, {
      id: 87,
      label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
      link: '/',
      parentId: 85
    }, {
      id: 88,
      label: 'MENUITEMS.FORMS.LIST.VALIDATION',
      link: '/',
      parentId: 85
    }, {
      id: 89,
      label: 'MENUITEMS.FORMS.LIST.ADVANCED',
      link: '/',
      parentId: 85
    }, {
      id: 90,
      label: 'MENUITEMS.FORMS.LIST.EDITOR',
      link: '/',
      parentId: 85
    }, {
      id: 91,
      label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
      link: '/',
      parentId: 85
    }, {
      id: 92,
      label: 'MENUITEMS.FORMS.LIST.REPEATER',
      link: '/',
      parentId: 85
    }, {
      id: 93,
      label: 'MENUITEMS.FORMS.LIST.WIZARD',
      link: '/',
      parentId: 85
    }, {
      id: 94,
      label: 'MENUITEMS.FORMS.LIST.MASK',
      link: '/',
      parentId: 85
    }]
  }, {
    id: 95,
    label: 'MENUITEMS.TABLES.TEXT',
    subItems: [{
      id: 96,
      label: 'MENUITEMS.TABLES.LIST.BASIC',
      link: '/',
      parentId: 95
    }, {
      id: 97,
      label: 'MENUITEMS.TABLES.LIST.DataTables',
      link: '/',
      parentId: 95
    }, {
      id: 98,
      label: 'MENUITEMS.TABLES.LIST.EditTableTables',
      link: '/',
      parentId: 95
    }]
  }, {
    id: 99,
    label: 'MENUITEMS.CHARTS.TEXT',
    subItems: [{
      id: 100,
      label: 'MENUITEMS.CHARTS.LIST.APEX',
      link: '/',
      parentId: 99
    }, {
      id: 101,
      label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
      link: '/',
      parentId: 99
    }, {
      id: 102,
      label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
      link: '/',
      parentId: 99
    }, {
      id: 103,
      label: 'MENUITEMS.CHARTS.LIST.ECHART',
      link: '/',
      parentId: 99
    }]
  }, {
    id: 104,
    label: 'MENUITEMS.ICONS.TEXT',
    subItems: [{
      id: 105,
      label: 'MENUITEMS.ICONS.LIST.BOXICONS',
      link: '/',
      parentId: 104
    }, {
      id: 106,
      label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
      link: '/',
      parentId: 104
    }, {
      id: 107,
      label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
      link: '/',
      parentId: 104
    }, {
      id: 108,
      label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
      link: '/',
      parentId: 104
    }]
  }, {
    id: 109,
    label: 'MENUITEMS.MAPS.TEXT',
    subItems: [
    // {
    //     id: 110,
    //     label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
    //     link: '/',
    //     parentId: 109
    // },
    {
      id: 111,
      label: 'MENUITEMS.MAPS.LIST.LEAFLETMAP',
      link: '/',
      parentId: 109
    }]
  }]
}, {
  id: 112,
  label: 'HEADER.EXTRA_PAGES.TITLE',
  icon: 'bx-file',
  subItems: [{
    id: 113,
    label: 'MENUITEMS.INVOICES.TEXT',
    subItems: [{
      id: 114,
      label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
      link: '/',
      parentId: 113
    }, {
      id: 115,
      label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
      link: '/',
      parentId: 113
    }]
  }, {
    id: 116,
    label: 'MENUITEMS.AUTHENTICATION.TEXT',
    subItems: [{
      id: 117,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
      link: '/',
      parentId: 116
    }, {
      id: 118,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
      link: '/',
      parentId: 116
    }, {
      id: 119,
      label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
      link: '/',
      parentId: 116
    }, {
      id: 120,
      label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
      link: '/',
      parentId: 116
    }, {
      id: 121,
      label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
      link: '/',
      parentId: 116
    }, {
      id: 122,
      label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
      link: '/',
      parentId: 116
    }, {
      id: 123,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
      link: '/',
      parentId: 116
    }, {
      id: 124,
      label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
      link: '/',
      parentId: 116
    }, {
      id: 125,
      label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
      link: '/',
      parentId: 116
    }, {
      id: 126,
      label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
      link: '/',
      parentId: 116
    }, {
      id: 127,
      label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
      link: '/',
      parentId: 116
    }, {
      id: 128,
      label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
      link: '/',
      parentId: 116
    }, {
      id: 129,
      label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
      link: '/',
      parentId: 116
    }, {
      id: 130,
      label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
      link: '/',
      parentId: 116
    }]
  }, {
    id: 131,
    label: 'MENUITEMS.UTILITY.TEXT',
    icon: 'bx-file',
    subItems: [{
      id: 132,
      label: 'MENUITEMS.UTILITY.LIST.STARTER',
      link: '/',
      parentId: 131
    }, {
      id: 133,
      label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
      link: '/',
      parentId: 131
    }, {
      id: 134,
      label: 'Coming Soon',
      link: '/',
      parentId: 131
    }, {
      id: 135,
      label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
      link: '/',
      parentId: 131
    }, {
      id: 136,
      label: 'MENUITEMS.UTILITY.LIST.FAQS',
      link: '/',
      parentId: 131
    }, {
      id: 137,
      label: 'MENUITEMS.UTILITY.LIST.PRICING',
      link: '/',
      parentId: 131
    }, {
      id: 138,
      label: 'MENUITEMS.UTILITY.LIST.ERROR404',
      link: '/',
      parentId: 131
    }, {
      id: 139,
      label: 'MENUITEMS.UTILITY.LIST.ERROR500',
      link: '/',
      parentId: 131
    }]
  }]
}];

/***/ }),

/***/ 2653:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.model */ 5660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/event.service */ 2608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 2844);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vertical/vertical.component */ 7324);






function LayoutComponent_app_vertical_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-vertical");
  }
}
function LayoutComponent_app_horizontal_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-horizontal");
  }
}
class LayoutComponent {
  constructor(eventService) {
    this.eventService = eventService;
  }
  ngOnInit() {
    // default settings
    this.layoutType = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
    this.layoutwidth = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
    this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
    this.mode = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_MODE;
    this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_TYPE;
    // document.body.setAttribute('data-bs-theme', this.mode);
    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeLayout', layout => {
      this.layoutType = layout;
    });
    this.LayoutWidth(this.layoutwidth);
    this.eventService.subscribe('changeWidth', width => {
      this.layoutwidth = width;
      this.LayoutWidth(this.layoutwidth);
    });
    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeSidebartype', layout => {
      this.sidebartype = layout;
      this.changeSidebar(this.sidebartype);
    });
    // Change Mode
    this.eventService.subscribe('changeMode', mode => {
      this.mode = mode;
      this.changeMode(this.mode);
    });
    this.changeSidebar(this.sidebartype);
    this.changeMode(this.mode);
  }
  // Theme Drk Light Mode
  changeMode(value) {
    switch (value) {
      case "light":
        document.body.setAttribute('data-bs-theme', 'light');
        break;
      case "dark":
        document.body.setAttribute('data-bs-theme', 'dark');
        break;
      default:
        document.body.setAttribute('data-bs-theme', 'light');
        break;
    }
  }
  changeSidebar(value) {
    switch (value) {
      case "light":
        document.body.setAttribute('data-sidebar', 'light');
        document.body.setAttribute('data-topbar', 'dark');
        document.body.removeAttribute('data-sidebar-size');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.classList.remove('vertical-collpsed');
        document.body.removeAttribute('data-layout-scrollable');
        break;
      case "compact":
        document.body.setAttribute('data-sidebar-size', 'small');
        document.body.setAttribute('data-sidebar', 'dark');
        document.body.removeAttribute('data-topbar');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.classList.remove('sidebar-enable');
        document.body.classList.remove('vertical-collpsed');
        document.body.removeAttribute('data-layout-scrollable');
        break;
      case "dark":
        document.body.setAttribute('data-sidebar', 'dark');
        document.body.removeAttribute('data-topbar');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.removeAttribute('data-sidebar-size');
        document.body.classList.remove('sidebar-enable');
        document.body.classList.remove('vertical-collpsed');
        document.body.removeAttribute('data-layout-scrollable');
        break;
      case "icon":
        document.body.classList.add('vertical-collpsed');
        document.body.setAttribute('data-sidebar', 'dark');
        document.body.removeAttribute('data-layout-size');
        document.body.setAttribute('data-keep-enlarged', "true");
        document.body.removeAttribute('data-topbar');
        document.body.removeAttribute('data-layout-scrollable');
        break;
      case "colored":
        document.body.classList.remove('sidebar-enable');
        document.body.classList.remove('vertical-collpsed');
        document.body.setAttribute('data-sidebar', 'colored');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.removeAttribute('data-topbar');
        document.body.removeAttribute('data-layout-scrollable');
        document.body.removeAttribute('data-sidebar-size');
        break;
      default:
        document.body.setAttribute('data-sidebar', 'dark');
        break;
    }
  }
  ngAfterViewInit() {}
  LayoutWidth(width) {
    switch (width) {
      case "fluid":
        document.body.setAttribute("data-layout-size", "fluid");
        document.body.classList.remove("vertical-collpsed");
        document.body.removeAttribute("data-layout-scrollable");
        break;
      case "boxed":
        document.body.setAttribute("data-layout-size", "boxed");
        document.body.classList.add("vertical-collpsed");
        document.body.removeAttribute("data-layout-scrollable");
        break;
      case "scrollable":
        document.body.removeAttribute("data-layout-size");
        document.body.setAttribute("data-layout-scrollable", "true");
        document.body.setAttribute("data-layout-size", "fluid");
        document.body.classList.remove("right-bar-enabled", "vertical-collpsed");
      default:
        document.body.setAttribute("data-layout-size", "fluid");
        break;
    }
  }
  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
  }
  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_HORIZONTAL;
  }
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["app-layout"]],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LayoutComponent_app_vertical_0_Template, 1, 0, "app-vertical", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LayoutComponent_app_horizontal_1_Template, 1, 0, "app-horizontal", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isVerticalLayoutRequested());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isHorizontalLayoutRequested());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_2__.HorizontalComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_3__.VerticalComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5660:
/*!******************************************!*\
  !*** ./src/app/layouts/layouts.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LAYOUT_HORIZONTAL: () => (/* binding */ LAYOUT_HORIZONTAL),
/* harmony export */   LAYOUT_MODE: () => (/* binding */ LAYOUT_MODE),
/* harmony export */   LAYOUT_VERTICAL: () => (/* binding */ LAYOUT_VERTICAL),
/* harmony export */   LAYOUT_WIDTH: () => (/* binding */ LAYOUT_WIDTH),
/* harmony export */   SIDEBAR_TYPE: () => (/* binding */ SIDEBAR_TYPE),
/* harmony export */   TOPBAR: () => (/* binding */ TOPBAR)
/* harmony export */ });
// export layout related constants
const LAYOUT_VERTICAL = 'vertical';
const LAYOUT_HORIZONTAL = 'horizontal';
const LAYOUT_WIDTH = 'fluid';
const SIDEBAR_TYPE = 'dark';
const TOPBAR = 'dark';
const LAYOUT_MODE = 'light';

/***/ }),

/***/ 5922:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutsModule: () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ui/ui.module */ 2540);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ 2653);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 1281);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar/topbar.component */ 5407);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 7584);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rightsidebar/rightsidebar.component */ 5802);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 2844);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vertical/vertical.component */ 7324);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./horizontaltopbar/horizontaltopbar.component */ 7636);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/services/language.service */ 2948);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);


















class LayoutsModule {
  static #_ = this.ɵfac = function LayoutsModule_Factory(t) {
    return new (t || LayoutsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: LayoutsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [_core_services_language_service__WEBPACK_IMPORTED_MODULE_9__.LanguageService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__.BsDropdownModule.forRoot(), _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](LayoutsModule, {
    declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__.RightsidebarComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_7__.VerticalComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_8__.HorizontaltopbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_14__.BsDropdownModule, _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, simplebar_angular__WEBPACK_IMPORTED_MODULE_15__.SimplebarAngularModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule]
  });
})();

/***/ }),

/***/ 5802:
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightsidebarComponent: () => (/* binding */ RightsidebarComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 5660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 2608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplebar-angular */ 7551);





function RightsidebarComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sidebar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 18)(5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.changeSidebartype("light"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 18)(9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.changeSidebartype("dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 18)(13, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.changeSidebartype("compact"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 18)(17, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.changeSidebartype("icon"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 18)(21, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.changeSidebartype("colored"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "colored");
  }
}
function RightsidebarComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Topbar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10)(5, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_41_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.changeTopbar("light"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10)(9, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_41_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.changeTopbar("dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_div_41_Template_input_change_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.changeTopbar("colored"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.topbar === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.topbar === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.topbar === "colored");
  }
}
/**
 * Rightsidebar component
 */
class RightsidebarComponent {
  constructor(eventService) {
    this.eventService = eventService;
  }
  ngOnInit() {
    this.width = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
    this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_TYPE;
    this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
    this.mode = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_MODE;
    /**
     * horizontal-vertical layput set
     */
    this.attribute = document.body.getAttribute('data-layout');
    const vertical = document.getElementById('is-layout');
    if (vertical != null) {
      vertical.setAttribute('checked', 'true');
    }
    if (this.attribute == 'horizontal') {
      vertical.removeAttribute('checked');
    }
  }
  /**
   * Hide the sidebar
   */
  hide() {
    document.body.classList.remove('right-bar-enabled');
  }
  /**
   * Change Topbar
   */
  changeTopbar(topbar) {
    this.topbar = topbar;
    this.eventService.broadcast('changeTopbar', topbar);
  }
  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(layout) {
    if (layout.target.checked == true) this.eventService.broadcast('changeLayout', 'vertical');else this.eventService.broadcast('changeLayout', 'horizontal');
  }
  changeWidth(width) {
    this.width = width;
    this.eventService.broadcast('changeWidth', width);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }
  changeSidebartype(sidebar) {
    this.sidebartype = sidebar;
    this.eventService.broadcast('changeSidebartype', sidebar);
  }
  changeMode(themeMode) {
    this.mode = themeMode;
    this.eventService.broadcast('changeMode', themeMode);
  }
  static #_ = this.ɵfac = function RightsidebarComponent_Factory(t) {
    return new (t || RightsidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RightsidebarComponent,
    selectors: [["app-rightsidebar"]],
    decls: 55,
    vars: 8,
    consts: [[1, "right-bar"], [1, "h-100"], [1, "rightbar-title", "px-3", "py-4"], ["href", "javascript:void(0);", 1, "right-bar-toggle", "float-end", 3, "click"], [1, "mdi", "mdi-close", "noti-icon"], [1, "m-0"], [1, "mt-4", "mb-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "is-layout", 1, "form-check-input", 3, "click"], ["for", "is-layout", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "layout-width", "id", "layout-width-fuild", "value", "fluid", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-fuild", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-boxed", "value", "boxed", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-boxed", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-scrollable", "value", "scrollable", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-scrollable", 1, "form-check-label"], [4, "ngIf"], [1, "form-check", "sidebar-setting"], ["type", "radio", "name", "theme-color", "id", "theme-color-light", 1, "form-check-input", 3, "checked", "change"], ["for", "theme-color-light", 1, "form-check-label"], ["type", "radio", "name", "theme-color", "id", "theme-color-dark", 1, "form-check-input", 3, "checked", "change"], ["for", "theme-color-dark", 1, "form-check-label"], [1, "text-center", "mb-0", "mt-4"], [1, "p-4"], [1, "mb-2"], ["href", "//skote-v-light.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-1.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-dark.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-2.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-rtl.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-3.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], [1, "rightbar-overlay"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-light", "value", "light", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-light", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-dark", "value", "dark", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-brand", "value", "compact", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-brand", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-icon", "value", "icon", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-icon", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color", "value", "colored", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-light", "value", "light", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-light", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-dark", "value", "dark", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-colored", "value", "colored", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-colored", 1, "form-check-label"]],
    template: function RightsidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ngx-simplebar", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RightsidebarComponent_Template_a_click_3_listener() {
          return ctx.hide();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RightsidebarComponent_Template_input_click_11_listener($event) {
          return ctx.changeLayout($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_18_listener() {
          return ctx.changeWidth("fluid");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_22_listener() {
          return ctx.changeWidth("boxed");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_26_listener() {
          return ctx.changeWidth("scrollable");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Scrolable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, RightsidebarComponent_div_29_Template, 24, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Theme Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18)(34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_34_listener() {
          return ctx.changeMode("light");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 18)(38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_38_listener() {
          return ctx.changeMode("dark");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, RightsidebarComponent_div_41_Template, 16, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Choose Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 24)(45, "div", 25)(46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 25)(49, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 25)(52, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 32);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.attribute == "vertical" ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.width === "fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.width === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.width === "scrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.attribute == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.mode === "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.mode === "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.attribute !== "vertical");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, simplebar_angular__WEBPACK_IMPORTED_MODULE_4__.SimplebarAngularComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1280:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/sidebar/material-management-sidemenu.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MATERIALMANAGEMENTMENU: () => (/* binding */ MATERIALMANAGEMENTMENU)
/* harmony export */ });
const MATERIALMANAGEMENTMENU = [{
  id: 1,
  label: 'MENUITEMS.MENU.TEXT',
  isTitle: true
}, {
  id: 2,
  label: 'HOME',
  icon: 'mdi mdi-home',
  link: 'home'
}, {
  id: 3,
  isLayout: true
}, {
  id: 4,
  label: 'DASHBOARD',
  icon: 'mdi mdi-view-dashboard-outline',
  link: 'material-management/dashboard'
}, {
  id: 5,
  label: 'All-ITEMS',
  icon: 'mdi mdi-view-split-vertical',
  link: 'material-management/all-item'
}];

/***/ }),

/***/ 9188:
/*!**********************************************!*\
  !*** ./src/app/layouts/sidebar/side-menu.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SIDEMENU: () => (/* binding */ SIDEMENU)
/* harmony export */ });
const SIDEMENU = [{
  id: 1,
  label: 'MENUITEMS.MENU.TEXT',
  isTitle: true
}, {
  id: 2,
  label: 'WHITEBOARD',
  icon: 'mdi mdi-clipboard-edit-outline',
  link: 'whiteboard'
}, {
  id: 3,
  isLayout: true
}, {
  id: 4,
  label: 'PROCEDURE',
  icon: 'mdi mdi-account-circle',
  link: 'procedure'
},
// {
//   id: 5,
//   label: 'CALENDER',
//   icon: 'mdi mdi-calendar',
//   link: 'calender',
// },
// {
//   id: 6,
//   label: 'CHAT',
//   icon: 'mdi mdi-send',
//   link: 'chat',
// },
// {
//   id: 7,
//   label: 'CHECKLIST',
//   icon: 'mdi mdi-format-list-checkbox',
//   link: 'checklist',
// },
{
  id: 8,
  label: 'STAFF',
  icon: 'mdi mdi-account-multiple',
  link: 'staff-management'
}, {
  id: 9,
  label: 'MATERIAL',
  icon: 'mdi mdi-archive-outline',
  link: 'material-management/dashboard'
}, {
  id: 10,
  label: 'SETTINGS',
  icon: 'mdi mdi-cog-outline',
  link: 'settings'
}, {
  id: 10,
  label: 'PATIENT',
  icon: 'mdi mdi-human-child',
  link: 'patient-registration/patient_list'
}];

/***/ }),

/***/ 1281:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs */ 1677);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _material_management_sidemenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-management-sidemenu */ 1280);
/* harmony import */ var _side_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-menu */ 9188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/event.service */ 2608);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/services/authfake.service */ 9634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! simplebar-angular */ 7551);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3804);













const _c0 = ["componentRef"];
const _c1 = ["sideMenu"];
function SidebarComponent_ng_template_0_ng_container_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r7.label));
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](item_r7.icon);
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill float-end bg-", item_r7.badge.variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r7.badge.text));
  }
}
const _c2 = function (a0, a1) {
  return {
    "has-arrow": a0,
    "has-dropdown": a1
  };
};
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_2_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](3, _c2, !item_r7.badge, item_r7.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.badge);
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](item_r7.icon);
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", item_r7.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r7.badge.text));
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.navigateBack(item_r7.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_2_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_3_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r7.link, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, item_r7.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.badge);
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", subitem_r28.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, subitem_r28.badge.text));
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_span_3_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", subitem_r28.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subitem_r28.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, subitem_r28.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subitem_r28.badge);
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subitem_r28.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, subitem_r28.label), " ");
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subSubitem_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", subSubitem_r37.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subSubitem_r37.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, subSubitem_r37.label), " ");
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template, 4, 5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", subitem_r28.subItems);
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template, 4, 6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template, 3, 4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r27.hasItems(subitem_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.hasItems(subitem_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.hasItems(subitem_r28));
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template, 4, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r7.subItems);
  }
}
function SidebarComponent_ng_template_0_ng_container_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template, 3, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template, 4, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template, 2, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r7));
  }
}
function SidebarComponent_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_1_Template, 3, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_Template, 4, 3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r7.isTitle && !item_r7.isLayout);
  }
}
function SidebarComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "ul", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
  }
}
function SidebarComponent_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function SidebarComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_div_5_ng_container_1_Template, 1, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}
function SidebarComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function SidebarComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_div_6_ng_container_1_Template, 1, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0);
  }
}
/**
 * Sidebar component
 */
class SidebarComponent {
  constructor(eventService, router, translate, http, authfakeauthenticationService, activatedRoute) {
    this.eventService = eventService;
    this.router = router;
    this.translate = translate;
    this.http = http;
    this.authfakeauthenticationService = authfakeauthenticationService;
    this.activatedRoute = activatedRoute;
    this.isCondensed = false;
    this.menuItems = [];
    router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        setTimeout(() => {
          this._activateMenuDropdown();
          this._scrollElement();
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.authfakeauthenticationService.currentSideMenu.subscribe(res => {
      this.initialize(res);
    });
    this._scrollElement();
  }
  ngAfterViewInit() {
    this.menu = new metismenujs__WEBPACK_IMPORTED_MODULE_0__["default"](this.sideMenu.nativeElement);
    setTimeout(() => {
      this._activateMenuDropdown();
    }, 100);
  }
  toggleMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }
  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        this.menu = new metismenujs__WEBPACK_IMPORTED_MODULE_0__["default"](this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  _scrollElement() {
    setTimeout(() => {
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
        if (currentPosition > 500) if (this.scrollRef.SimpleBar !== null) this.scrollRef.SimpleBar.getScrollElement().scrollTop = currentPosition + 300;
      }
    }, 300);
  }
  /**
   * remove active and mm-active class
   */
  _removeAllClass(className) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }
  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    // localStorage.clear();
    let links = [];
    links = document.getElementsByClassName('side-nav-link-ref');
    // console.log('Links',links);
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    const paths = [];
    for (let i = 0; i < links.length; i++) {
      // console.log(links[i]['pathname']);
      const pathname = new URL(links[i]).hash;
      const cleanedPath = pathname.startsWith('#') ? pathname.substring(1) : pathname;
      paths.push(cleanedPath);
    }
    console.log('paths', paths);
    let x = this.router.url;
    if (x == '/material-management/viewfullgrid' || x == '/workarea') {
      var itemIndex = 1;
    } else if (x == '/patient-registration/register') {
      var itemIndex = 5;
    } else {
      var itemIndex = paths.indexOf(window.location.hash.substring(1));
    }
    // console.log('itemindex',itemIndex);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
      // console.log('menuItemEl',menuItemEl);
    }

    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      // console.log('parentEL',parentEl);
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) {
              childAnchor.classList.add('mm-active');
            }
            if (childDropdown) {
              childDropdown.classList.add('mm-active');
            }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') {
                  childanchor.classList.add('mm-active');
                }
              }
            }
          }
        }
      }
    }
  }
  /**
   * Initialize
   */
  initialize(data) {
    // this.menuItems = MENU;
    switch (data) {
      case 'sidemenu':
        {
          this.menuItems = _side_menu__WEBPACK_IMPORTED_MODULE_2__.SIDEMENU;
          break;
        }
      case 'material-management':
        {
          this.menuItems = _material_management_sidemenu__WEBPACK_IMPORTED_MODULE_1__.MATERIALMANAGEMENTMENU;
          break;
        }
    }
  }
  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
  navigateBack(data) {
    if (data == 'home') {
      this.authfakeauthenticationService.changeSideMenu('sidemenu');
      this.router.navigate(['/procedure']);
    }
  }
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    viewQuery: function SidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
      }
    },
    inputs: {
      isCondensed: "isCondensed"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 2,
    consts: [["contentTemplate", ""], [1, "vertical-menu"], [1, "h-100"], ["componentRef", ""], [4, "ngIf"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], ["sideMenu", ""], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], [1, "menu-title"], ["href", "javascript:void(0);", "class", "is-parent", 3, "ngClass", 4, "ngIf"], ["class", "side-nav-link-ref", "routerLinkActive", "active", "placement", "top", 3, "routerLink", "tooltip", "click", 4, "ngIf"], ["class", "sub-menu", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "is-parent", 3, "ngClass"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", "placement", "top", 1, "side-nav-link-ref", 3, "routerLink", "tooltip", "click"], ["aria-expanded", "false", 1, "sub-menu"], ["class", "side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "side-nav-link-a-ref has-arrow", "href", "javascript:void(0);", 4, "ngIf"], ["class", "sub-menu mm-collapse", "aria-expanded", "false", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], ["href", "javascript:void(0);", 1, "side-nav-link-a-ref", "has-arrow"], ["aria-expanded", "false", 1, "sub-menu", "mm-collapse"], [4, "ngTemplateOutlet"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SidebarComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "ngx-simplebar", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SidebarComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCondensed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCondensed);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, simplebar_angular__WEBPACK_IMPORTED_MODULE_10__.SimplebarAngularComponent, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["[_nghost-%COMP%]     .tooltip-inner {\n  width: 70px !important;\n  padding: 2px !important;\n  color: #000 !important;\n  background-color: #fff !important;\n  font-size: 9px !important;\n}\n\n[_nghost-%COMP%]     .tooltip {\n  --bs-tooltip-bg:#fff !important;\n  left: -14px !important;\n  transform: translate3d(14px, -12px, 0px) !important;\n}\n\n[_nghost-%COMP%]     .bs-tooltip-bottom {\n  opacity: 1 !important;\n}\n\n[_nghost-%COMP%]     .ng-select-container {\n  background: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbURBQUE7QUFBRjs7QUFHQTtFQUVFLHFCQUFBO0FBREY7O0FBR0M7RUFDQywyQkFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC50b29sdGlwLWlubmVyXHJcbntcclxuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudG9vbHRpcHtcclxuICAtLWJzLXRvb2x0aXAtYmc6I2ZmZiAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6LTE0cHggIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGUzZCgxNHB4LCAtMTJweCwgMHB4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJzLXRvb2x0aXAtYm90dG9tXHJcbntcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuIDpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5407:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopbarComponent: () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 304);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/authfake.service */ 9634);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/language.service */ 2948);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 5939);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 8859);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);










function TopbarComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 28)(10, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopbarComponent_div_29_Template_a_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, "HEADER.LOGIN.PROFILE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, "HEADER.LOGIN.MY_WALLET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 9, "HEADER.LOGIN.SETTINGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 11, "HEADER.LOGIN.LOCK_SCREEN"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 13, "HEADER.LOGIN.LOGOUT"), "");
  }
}
/**
 * Topbar component
 */
class TopbarComponent {
  constructor(document, router, authService, authFackservice, languageService, translate, _cookiesService) {
    this.document = document;
    this.router = router;
    this.authService = authService;
    this.authFackservice = authFackservice;
    this.languageService = languageService;
    this.translate = translate;
    this._cookiesService = _cookiesService;
    this.listLang = [{
      text: 'English',
      flag: 'assets/images/flags/us.jpg',
      lang: 'en'
    }, {
      text: 'Spanish',
      flag: 'assets/images/flags/spain.jpg',
      lang: 'es'
    }, {
      text: 'German',
      flag: 'assets/images/flags/germany.jpg',
      lang: 'de'
    }, {
      text: 'Italian',
      flag: 'assets/images/flags/italy.jpg',
      lang: 'it'
    }, {
      text: 'Russian',
      flag: 'assets/images/flags/russia.jpg',
      lang: 'ru'
    }];
    this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngOnInit() {
    this.openMobileMenu = false;
    this.element = document.documentElement;
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.valueset = 'assets/images/flags/us.jpg';
      }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }
  setLanguage(text, lang, flag) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }
  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }
  /**
   * Logout the user
   */
  logout() {
    // if (environment.defaultauth === 'firebase') {
    //   this.authService.logout();
    // } else {
    this.authFackservice.logout();
    // }
    this.router.navigate(['/account/login']);
  }
  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (!document.fullscreenElement && !this.element.mozFullScreenElement && !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
  static #_ = this.ɵfac = function TopbarComponent_Factory(t) {
    return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TopbarComponent,
    selectors: [["app-topbar"]],
    outputs: {
      settingsButtonClicked: "settingsButtonClicked",
      mobileMenuButtonClicked: "mobileMenuButtonClicked"
    },
    decls: 30,
    vars: 0,
    consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.png", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo.png", "alt", "", "height", "40", "width", "40"], [1, "d-flex", "flex-row", "align-items-center", "px-3"], [1, "font-size-16", "mb-0", 2, "font-weight", "600", "color", "#000", "line-height", "24px"], [1, "text-muted", "ps-3", "font-size-12"], [1, "d-flex", "me-3"], [1, "dropdown", "d-inline-block"], ["type", "button", 1, "btn", "header-item", "noti-icon"], ["src", " assets/images/topbar/Fullscreen.svg", 3, "click"], ["src", "assets/images/topbar/Bell.svg"], ["dropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "dropdownToggle", "", 1, "btn", "header-item", "noti-icon"], ["src", "assets/images/topbar/User.svg"], ["class", "dropdown-menu dropdown-menu-end", 4, "dropdownMenu"], [1, "dropdown-menu", "dropdown-menu-end"], ["routerLink", "/contacts/profile", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "badge", "bg-success", "float-end"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "me-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"]],
    template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 9)(10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Hi,Dr.Partic Markes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "24,October 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "button", 16)(22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TopbarComponent_Template_img_click_22_listener() {
          return ctx.fullscreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15)(24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19)(27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, TopbarComponent_div_29_Template, 24, 15, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7324:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerticalComponent: () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/event.service */ 2608);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 1281);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topbar/topbar.component */ 5407);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 7584);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 5802);








/**
 * Vertical component
 */
class VerticalComponent {
  // sidebartype: string;
  constructor(router, eventService) {
    this.router = router;
    this.eventService = eventService;
    this.isCondensed = false;
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        document.body.classList.remove('sidebar-enable');
      }
    });
  }
  ngOnInit() {
    document.body.setAttribute('data-layout', 'vertical');
    this.onToggleMobileMenu();
  }
  isMobile() {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
  }
  ngAfterViewInit() {}
  /**
   * on settings button clicked from topbar
   */
  onSettingsButtonClicked() {
    document.body.classList.toggle('right-bar-enabled');
  }
  /**
   * On mobile toggle button clicked
   */
  onToggleMobileMenu() {
    // this.isCondensed = !this.isCondensed;
    // if (window.screen.width <= 768) {
    //   // document.body.classList.remove('vertical-collpsed');
    // }
    document.body.classList.toggle('sidebar-enable');
    document.body.classList.toggle('vertical-collpsed');
  }
  static #_ = this.ɵfac = function VerticalComponent_Factory(t) {
    return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_0__.EventService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: VerticalComponent,
    selectors: [["app-vertical"]],
    decls: 8,
    vars: 0,
    consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [1, "main-content"], [1, "page-content"]],
    template: function VerticalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() {
          return ctx.onSettingsButtonClicked();
        })("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() {
          return ctx.onToggleMobileMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-rightsidebar");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_4__.RightsidebarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8336:
/*!******************************************************!*\
  !*** ./src/app/shared/ui/loader/loader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/loader.service */ 3096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4)(4, "div", 4)(5, "div", 4)(6, "div", 4)(7, "div", 4)(8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LoaderComponent {
  constructor(loaderService) {
    this.loaderService = loaderService;
    this.loading = true;
    this.loaderService.isLoading.subscribe(v => {
      setTimeout(() => {
        this.loading = v;
      }, 1500);
    });
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 1,
    vars: 1,
    consts: [["id", "preloader", 4, "ngIf"], ["id", "preloader"], ["id", "status"], [1, "spinner-chase"], [1, "chase-dot"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 9, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2260:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagetitleComponent: () => (/* binding */ PagetitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function PagetitleComponent_ng_container_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
  }
}
function PagetitleComponent_ng_container_7_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.label, " ");
  }
}
function PagetitleComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagetitleComponent_ng_container_7_li_1_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagetitleComponent_ng_container_7_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.active);
  }
}
class PagetitleComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PagetitleComponent_Factory(t) {
    return new (t || PagetitleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PagetitleComponent,
    selectors: [["app-page-title"]],
    inputs: {
      breadcrumbItems: "breadcrumbItems",
      title: "title"
    },
    decls: 8,
    vars: 2,
    consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"]],
    template: function PagetitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagetitleComponent_ng_container_7_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2540:
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIModule: () => (/* binding */ UIModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ 8483);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2195);
/* harmony import */ var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagetitle/pagetitle.component */ 2260);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ 8336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);











class UIModule {
  static #_ = this.ɵfac = function UIModule_Factory(t) {
    return new (t || UIModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: UIModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__.BsDatepickerModule.forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_6__.TimepickerModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UIModule, {
    declarations: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__.BsDatepickerModule, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_6__.TimepickerModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownModule],
    exports: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment_new: () => (/* binding */ environment_new)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment_new = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api',
  imageUrl: 'http://127.0.0.1:8000',
  // apiUrl: 'http://34.29.13.215/smartbuild_api/public/index.php/api',
  // imageUrl:'http://34.29.13.215/smartbuild_api/public',
  clinicalDiagnosis: '/procedures/ch_pre_diagnosis_index',
  patientLabDelete: '/procedures/patient_lab_delete',
  saveDataLab: '/procedures/patient_lab_store',
  getLabDetails: '/procedures/patient_lab_index',
  deletePostDiagnol: '/procedures/ch_post_diagnosis_delete',
  saveDatapostDiagnosis: '/procedures/ch_post_diagnosis_store',
  clinicalPostDiagnosis: '/procedures/ch_post_diagnosis_index',
  deleteIndicationData: '/procedures/ch_indication_delete',
  saveDataIndication: '/procedures/ch_indication_store',
  clinicalHistoryIndication: '/procedures/ch_indication_index',
  deletePreDiagnosis: '/procedures/ch_pre_diagnosis_delete',
  saveData: '/procedures/ch_pre_diagnosis_store',
  getMediationDetails: '/procedures/patient_mediation_index',
  saveMediationData: '/procedures/patient_mediation_store',
  deleteMediationData: '/procedures/patient_mediation_delete',
  AllProcedureStatusData: '/procedures/procedure_sub_status',
  getCheckListData: '/procedures/check_list_index',
  kiziCheckBoxesData: '/procedures/kizin_tasks',
  kiziCheckBoxesTimeLine: '/procedures/kizin_timelines',
  materialdashboard: '/items/procedure_item_dashboard'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);



// import { environment } from './environments/environment';

if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment_new.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map