"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_whiteboard_whiteboard_module_ts"],{

/***/ 4562:
/*!***************************************************************!*\
  !*** ./src/app/pages/whiteboard/whiteboard-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhiteboardRoutingModule: () => (/* binding */ WhiteboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whiteboard/whiteboard.component */ 2626);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_0__.WhiteboardComponent,
  canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class WhiteboardRoutingModule {
  static #_ = this.ɵfac = function WhiteboardRoutingModule_Factory(t) {
    return new (t || WhiteboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: WhiteboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WhiteboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8689:
/*!*******************************************************!*\
  !*** ./src/app/pages/whiteboard/whiteboard.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhiteboardModule: () => (/* binding */ WhiteboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _whiteboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whiteboard-routing.module */ 4562);
/* harmony import */ var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whiteboard/whiteboard.component */ 2626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class WhiteboardModule {
  static #_ = this.ɵfac = function WhiteboardModule_Factory(t) {
    return new (t || WhiteboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: WhiteboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _whiteboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.WhiteboardRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WhiteboardModule, {
    declarations: [_whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_1__.WhiteboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _whiteboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.WhiteboardRoutingModule]
  });
})();

/***/ }),

/***/ 2626:
/*!*********************************************************************!*\
  !*** ./src/app/pages/whiteboard/whiteboard/whiteboard.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhiteboardComponent: () => (/* binding */ WhiteboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class WhiteboardComponent {
  static #_ = this.ɵfac = function WhiteboardComponent_Factory(t) {
    return new (t || WhiteboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WhiteboardComponent,
    selectors: [["app-whiteboard"]],
    decls: 2,
    vars: 0,
    template: function WhiteboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "whiteboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_whiteboard_whiteboard_module_ts.js.map