"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_checklist_checklist_module_ts"],{

/***/ 3048:
/*!*************************************************************!*\
  !*** ./src/app/pages/checklist/checklist-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecklistRoutingModule: () => (/* binding */ ChecklistRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist/checklist.component */ 1305);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_0__.ChecklistComponent,
  canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class ChecklistRoutingModule {
  static #_ = this.ɵfac = function ChecklistRoutingModule_Factory(t) {
    return new (t || ChecklistRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ChecklistRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChecklistRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8301:
/*!*****************************************************!*\
  !*** ./src/app/pages/checklist/checklist.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecklistModule: () => (/* binding */ ChecklistModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _checklist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist-routing.module */ 3048);
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist/checklist.component */ 1305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class ChecklistModule {
  static #_ = this.ɵfac = function ChecklistModule_Factory(t) {
    return new (t || ChecklistModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ChecklistModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _checklist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChecklistRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChecklistModule, {
    declarations: [_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_1__.ChecklistComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _checklist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChecklistRoutingModule]
  });
})();

/***/ }),

/***/ 1305:
/*!******************************************************************!*\
  !*** ./src/app/pages/checklist/checklist/checklist.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecklistComponent: () => (/* binding */ ChecklistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ChecklistComponent {
  static #_ = this.ɵfac = function ChecklistComponent_Factory(t) {
    return new (t || ChecklistComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChecklistComponent,
    selectors: [["app-checklist"]],
    decls: 2,
    vars: 0,
    template: function ChecklistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "checklist works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_checklist_checklist_module_ts.js.map