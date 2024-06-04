"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_procedure_procedure-work-area_procedure-work-area_module_ts"],{

/***/ 4256:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/add-quantity/add-quantity.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddQuantityComponent: () => (/* binding */ AddQuantityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/authfake.service */ 9634);



class AddQuantityComponent {
  constructor(toastr, authService) {
    this.toastr = toastr;
    this.authService = authService;
    this.Qty_Value = 0;
  }
  agInit(params) {
    // this.displayValue = new Array(params.value!).fill('#').join('');
    console.log(params);
    this.TotalQytValue = params.data.total_no_of_qty;
    return this.Qty_Value;
  }
  DecreaseQty() {
    if (this.Qty_Value > 0) {
      this.Qty_Value = this.Qty_Value - 1;
      // localStorage.setItem('Quantity',this.Qty_Value.toString());
    }
  }

  IncreaseQty() {
    if (this.Qty_Value < this.TotalQytValue) {
      this.Qty_Value = this.Qty_Value + 1;
      // localStorage.setItem('Quantity',this.Qty_Value.toString());
    } else {
      this.toastr.warning('You cannot add a quantity that exceeds the total available quantity.', 'Note', {
        positionClass: 'toast-top-center',
        timeOut: 2000
      });
    }
  }
  refresh(params) {
    console.log(params);
  }
  static #_ = this.ɵfac = function AddQuantityComponent_Factory(t) {
    return new (t || AddQuantityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_0__.AuthfakeauthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AddQuantityComponent,
    selectors: [["app-add-quantity"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 1,
    consts: [[1, "d-flex", "flex-row", "align-items-center"], [1, "btn-new", "minus_qty", 2, "padding", "2px !important", "width", "16px!important", "height", "19px !important", "padding-right", "20px !important", 3, "click"], [1, "mb-2"], ["readonly", "", 1, "mx-1", "value", 2, "width", "30% !important", "background", "#fff !important"], [1, "btn-new", "plus_qty", 2, "padding", "2px !important", "width", "16px!important", "height", "19px !important", "padding-right", "20px !important", 3, "click"]],
    template: function AddQuantityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddQuantityComponent_Template_button_click_2_listener() {
          return ctx.DecreaseQty();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddQuantityComponent_Template_button_click_7_listener() {
          return ctx.IncreaseQty();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Qty_Value);
      }
    },
    styles: [".minus_qty[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/minus-img.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 4px !important;\n  background-size: 15px 15px !important;\n  z-index: 1 !important;\n}\n\n.plus_qty[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/add-img.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 4px !important;\n  background-size: 15px 15px !important;\n  z-index: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvYWRkLXF1YW50aXR5L2FkZC1xdWFudGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdFQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhEQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5taW51c19xdHl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9taW51cy1pbWcuc3ZnJykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wbHVzX3F0eXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2FkZC1pbWcuc3ZnJykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 276:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/all-procedures/all-procedures.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllProceduresComponent: () => (/* binding */ AllProceduresComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var angular_ng_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-ng-stepper */ 9226);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/stepper */ 3507);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var _procedure_details_procedure_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../procedure-details/procedure-details.component */ 1197);
/* harmony import */ var _procedure_details_booking_procedure_details_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../procedure-details-booking/procedure-details-booking.component */ 2133);
/* harmony import */ var _procedure_details_pre_procedure_procedure_details_pre_procedure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../procedure-details-pre-procedure/procedure-details-pre-procedure.component */ 4174);
/* harmony import */ var _procedure_details_intra_procedure_procedure_details_intra_procedure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../procedure-details-intra-procedure/procedure-details-intra-procedure.component */ 9681);
/* harmony import */ var _procedure_details_post_procedure_procedure_details_post_procedure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../procedure-details-post-procedure/procedure-details-post-procedure.component */ 2430);
















const _c0 = ["StoreItem_Grid"];
const _c1 = ["stepOne"];
const _c2 = ["cdkStepper"];
function AllProceduresComponent_ng_stepper_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Start Procedure");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_ng_stepper_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Procedure End");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_ng_stepper_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-stepper", 96, 97)(2, "cdk-step", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllProceduresComponent_ng_stepper_1_ng_template_3_Template, 4, 0, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-procedure-details", null, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "cdk-step", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AllProceduresComponent_ng_stepper_1_ng_template_7_Template, 4, 0, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-procedure-details", null, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("linear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", _r15.stepOneForm)("optional", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", _r17.stepTwoForm)("optional", true);
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Requesting");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "cdk-step", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllProceduresComponent_ng_stepper_2_cdk_step_2_ng_template_1_Template, 4, 0, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-procedure-details", 106, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("save", function AllProceduresComponent_ng_stepper_2_cdk_step_2_Template_app_procedure_details_save_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.onSaveStepOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", _r25.stepOneForm)("optional", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("SelectedIndex", ctx_r19.SelectedComponent);
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Scheduling");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "cdk-step", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllProceduresComponent_ng_stepper_2_cdk_step_3_ng_template_1_Template, 4, 0, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-procedure-details-booking", 106, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("save", function AllProceduresComponent_ng_stepper_2_cdk_step_3_Template_app_procedure_details_booking_save_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.onSaveStepOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", _r29.stepTwoForm)("optional", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("SelectedIndex", ctx_r20.SelectedComponent);
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Pre-procedure");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "cdk-step", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllProceduresComponent_ng_stepper_2_cdk_step_4_ng_template_1_Template, 4, 0, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-procedure-details-pre-procedure", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("save", function AllProceduresComponent_ng_stepper_2_cdk_step_4_Template_app_procedure_details_pre_procedure_save_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.onSaveStepOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", _r33.stepThreeForm)("optional", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("SelectedIndex", ctx_r21.SelectedComponent);
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Intra-procedure");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "cdk-step", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllProceduresComponent_ng_stepper_2_cdk_step_5_ng_template_1_Template, 4, 0, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-procedure-details-intra-procedure", 106, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("save", function AllProceduresComponent_ng_stepper_2_cdk_step_5_Template_app_procedure_details_intra_procedure_save_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r38.onSaveStepOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", _r37.stepFourForm)("optional", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("SelectedIndex", ctx_r22.SelectedComponent);
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Post-procedure");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_ng_stepper_2_cdk_step_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "cdk-step", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllProceduresComponent_ng_stepper_2_cdk_step_6_ng_template_1_Template, 4, 0, "ng-template", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-procedure-details-post-procedure", 106, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("save", function AllProceduresComponent_ng_stepper_2_cdk_step_6_Template_app_procedure_details_post_procedure_save_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r42.onSaveStepOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", _r41.stepFiveForm)("optional", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("SelectedIndex", ctx_r23.SelectedComponent);
  }
}
function AllProceduresComponent_ng_stepper_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-stepper", 104, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function AllProceduresComponent_ng_stepper_2_Template_ng_stepper_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r44.onStepSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllProceduresComponent_ng_stepper_2_cdk_step_2_Template, 4, 3, "cdk-step", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AllProceduresComponent_ng_stepper_2_cdk_step_3_Template, 4, 3, "cdk-step", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllProceduresComponent_ng_stepper_2_cdk_step_4_Template, 4, 3, "cdk-step", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AllProceduresComponent_ng_stepper_2_cdk_step_5_Template, 4, 3, "cdk-step", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AllProceduresComponent_ng_stepper_2_cdk_step_6_Template, 4, 3, "cdk-step", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("linear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.VettingCondition == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.BookingCondition == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.PreProcedureCondition == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.IntraProcedureCondition == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.PostProcedureCondition == true);
  }
}
function AllProceduresComponent_ng_container_32_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", status_r47.procedure_sub_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](status_r47 == null ? null : status_r47.procedure_sub_status);
  }
}
function AllProceduresComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllProceduresComponent_ng_container_32_option_1_Template, 2, 2, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.procedureSubStatusData);
  }
}
function AllProceduresComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AllProceduresComponent_div_54_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", x_r49.value, " ");
  }
}
function AllProceduresComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 113)(1, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Procedure Alert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AllProceduresComponent_div_54_a_4_Template, 2, 1, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.procedureAlertsData);
  }
}
function AllProceduresComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 118)(1, "a", 119)(2, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function AllProceduresComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 121)(1, "div", 122)(2, "div")(3, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 124)(8, "div", 125)(9, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllProceduresComponent_div_108_Template_img_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53);
      const i_r51 = restoredCtx.index;
      const x_r50 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r52.AddToFavourite(i_r51, x_r50.fav));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h4", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h4", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 83)(17, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](x_r50.Item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", x_r50.fav ? "assets/images/favourite_fill.svg" : "assets/images/Fav_stroke.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No :", x_r50.no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No :", x_r50.size, "");
  }
}
class AllProceduresComponent {
  constructor(http, allService) {
    this.http = http;
    this.allService = allService;
    this.VettingCondition = false;
    this.BookingCondition = false;
    this.PreProcedureCondition = false;
    this.IntraProcedureCondition = false;
    this.PostProcedureCondition = false;
    this.SelectedComponent = 0;
    this.myCartData = [];
    this.selectedStatus = 'Select Status';
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.apiUrl;
    this.AllProcedureStatusData = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.AllProcedureStatusData;
    this.StoreItemGridData = [{
      "item_no": "85327",
      "item_name": "Nunc volutpat kit - 12Fr x12 cm",
      "qty": "50",
      "action": true
    }, {
      "item_no": "85327",
      "item_name": "Nunc volutpat kit - 12Fr x12 cm",
      "qty": "50",
      "action": true
    }, {
      "item_no": "85327",
      "item_name": "Nunc volutpat kit - 12Fr x12 cm",
      "qty": "50",
      "action": true
    }, {
      "item_no": "85327",
      "item_name": "Nunc volutpat kit - 12Fr x12 cm",
      "qty": "50",
      "action": true
    }];
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: false,
      filter: true
      // floatingFilter: true,
    };

    this.gridOptions1 = {
      defaultColDef: {
        filter: false
      },
      overlayNoRowsTemplate: '<span class="ag-overlay-no-rows-center">Please Go back to Material Dashboard Page</span>',
      suppressMenuHide: false,
      rowSelection: 'multiple',
      rowHeight: 35,
      pagination: false,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: false
    };
    this.columnDefs1 = [{
      field: '',
      checkboxSelection: true,
      resizable: false,
      headerCheckboxSelection: true,
      width: 10
    }, {
      field: 'item_no',
      headerName: 'Item No',
      width: 100,
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'item_no')
    }, {
      field: 'item_name',
      headerName: 'Item Name',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'item_name')
    }, {
      field: 'qty',
      headerName: 'Qty',
      width: 100,
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'qty')
    }, {
      field: 'action',
      headerName: 'Action',
      width: 100,
      pinned: "right",
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'action'),
      onCellClicked: this.cellClicked.bind(this, 'action')
    }];
  }
  onStepSelectionChange(event) {
    console.log('Event', event);
    // Identify the selected step and call the corresponding API
    switch (event.selectedIndex) {
      case 0:
        this.SelectedComponent = 0;
        localStorage.setItem('Stage Type', 'Requesting');
        // Call API for step 0
        this.loadProcedureSubStatus('Requesting');
        break;
      case 1:
        this.SelectedComponent = 1;
        localStorage.setItem('Stage Type', 'Schedulling');
        // Call API for step 1
        this.loadProcedureSubStatus('Schedulling');
        break;
      case 2:
        this.SelectedComponent = 2;
        localStorage.setItem('Stage Type', 'Pre-procedure');
        // Call API for step 2
        this.loadProcedureSubStatus('Pre-procedure');
        break;
      case 3:
        this.SelectedComponent = 3;
        localStorage.setItem('Stage Type', 'Intra-procedure');
        // Call API for step 3
        this.loadProcedureSubStatus('Intra-procedure');
        break;
      case 4:
        console.log('ijnn');
        this.SelectedComponent = 4;
        localStorage.setItem('Stage Type', 'Post-procedure');
        // Call API for step 4
        this.loadProcedureSubStatus('Post-procedure');
        break;
    }
  }
  ngOnInit() {
    this.http.get('assets/json/procedure-stage.json').subscribe(res => {
      this.stepperData = res;
      console.log(this.stepperData);
      this.stepperData.forEach(element => {
        if (element.title == 'Vetting') {
          this.VettingCondition = true;
        } else if (element.title == 'Booking') {
          this.BookingCondition = true;
        } else if (element.title == 'Pre-procedure') {
          this.PreProcedureCondition = true;
        } else if (element.title == 'Intra-procedure') {
          this.IntraProcedureCondition = true;
        } else if (element.title == 'Post-procedure') {
          this.PostProcedureCondition = true;
        }
      });
    });
    this.http.get('assets/json/procedure-alerts.json').subscribe(res => {
      this.procedureAlertsData = res;
    });
    this.http.get('assets/json/mycart-data.json').subscribe(res => {
      this.myCartData = res;
    });
    this.getUnderStatusDetails();
    this.loadProcedureSubStatus('Requesting');
  }
  cellRendered(headerName, params) {
    switch (headerName) {
      case 'item_no':
        {
          return params.value;
        }
      case 'item_name':
        {
          return params.value;
        }
      case 'qty':
        {
          return params.value;
        }
      case 'action':
        {
          if (params.value) {
            return `<img src="assets/images/storeItem.svg" style="width:16px;height:16px">`;
          }
        }
    }
  }
  cellClicked(headerName, params) {
    switch (headerName) {
      case 'action':
        {}
    }
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
  }
  AddToFavourite(index, value) {
    this.myCartData[index].fav = !value;
  }
  getUnderStatusDetails() {
    let PatientID = localStorage.getItem('PatientID');
    if (PatientID) {
      this.allService.GetSpecificPatientProcedureDetails(PatientID).subscribe({
        next: res => {
          if (res.status == 'Success') {
            this.CurrentPatientUnderStatusDetails = res.patient;
          }
          return 0;
        },
        error: res => {
          this.toastr.error(`Something went wrong`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
    }
  }
  loadProcedureSubStatus(stageType) {
    let payloads = {
      token: '1a32e71a46317b9cc6feb7388238c95d',
      stage_type: stageType
    };
    this.http.post(`${this.apiUrl}${this.AllProcedureStatusData}`, payloads).subscribe(response => {
      if (response.status === "Success") {
        this.procedureSubStatusData = response.data;
      } else {
        console.error('Error fetching procedure sub status:', response.message);
      }
    }, error => {
      console.error('Error fetching procedure sub status:', error);
    });
  }
  onSaveStepOne(data) {
    console.log('Step one saved', data);
    if (data) {
      this.cdkStepper.next();
    }
  }
  static #_ = this.ɵfac = function AllProceduresComponent_Factory(t) {
    return new (t || AllProceduresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__.AllServicesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AllProceduresComponent,
    selectors: [["app-all-procedures"]],
    viewQuery: function AllProceduresComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.stepOne = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.cdkStepper = _t.first);
      }
    },
    decls: 303,
    vars: 13,
    consts: [[2, "width", "100% !important", "height", "730px"], ["style", "width: 100% !important;", 3, "linear", 4, "ngIf"], ["style", "width: 100% !important;", 3, "linear", "selectionChange", 4, "ngIf"], [1, "cards", "me-2", 2, "position", "absolute", "bottom", "79% !important", "border", "1px solid #F9F7FD", "background", "#F9F7FD", "left", "0.6rem", "width", "95%", "left", "3% !important", "right", "0% !important", "height", "79px !important", "border-radius", "10 !important", "padding", "10px 0px !important"], [1, "d-flex", "flex-row", "justify-content-around", "align-items-center", "p-2"], [1, "me-1"], [1, "mb-2"], [1, "mb-1"], ["src", "assets/images/edit_svg.svg", 1, "ms-1"], [1, "form-selects", 2, "font-size", "9px !important", 3, "ngModel", "ngModelChange"], ["value", "Select Status", "selected", ""], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "form-selects", 2, "font-size", "9px !important"], ["value", "requested"], ["value", "in-vetting"], ["value", "vetted"], ["value", "in-protocoling"], ["dropdown", "", 1, "dropdown", "float-end"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", 2, "background", "none !important", "padding", "0px !important", "border", "none !important"], ["src", "assets/images/procedure_alert.gif", "width", "30px", "height", "30px"], ["class", "dropdown-menu dropdown-menu-end", "style", "padding: 0px 0px 10px 0px;border-radius: 8px 8px 0px 0px;", 4, "dropdownMenu"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "bx", "bx-chevron-down", "align-middle", "me-1"], ["class", "dropdown-menu dropdown-menu-end", "style", "text-align: center !important;", 4, "dropdownMenu"], ["bsModal", "", "role", "dialog", "aria-labelledby", "dialog-nested-name2", 1, "modal", "fade"], ["addnote", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "450px !important"], [1, "modal-content"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "my-3", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [1, "d=flex", "flex-column", "px-3", "py-3"], [1, "d-flex", "flex-row", "mb-4", 2, "width", "100%"], [2, "width", "50%"], ["for", "items_category", 1, "modal-label", "mb-1"], [1, ""], [1, "d-flex", "flex-column", "mb-2", "mt-1", 2, "width", "100%"], ["for", "items_category", 1, "modal-label-edit", "mb-1"], [1, "ms-1", 2, "color", "red !important"], ["placeholder", "Type your comment", 1, "form-control-new"], [1, "d-flex", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", 2, "width", "auto !important"], ["addnewtem", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "900px !important"], [1, "modal-content", "p-2"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "mt-3", "mb-2", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "m-2", "Outer-border"], [1, "d-flex", "flex-wrap", "align-item-center", "p-2", "Outer-border-header"], [1, "mb-0", 2, "font-weight", "500 !important"], [1, "ms-2"], [1, "row", "mx-2"], [1, "col-5", "my-2", "mycart-body"], ["class", "d-flex flex-column flex-wrap my-3", 4, "ngFor", "ngForOf"], [1, "col-7", "mycart-body-2"], [1, "d-flex", "flex-wrap", "flex-row", "my-2"], [1, "me-2"], ["type", "text", "placeholder", "scan or type", 1, "form-control-new-sm", "barcode_img"], ["placeholder", "Select Category", 1, "form-selects"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important"], [1, "mt-2", 2, "width", "100%"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "295px", 3, "columnDefs", "gridOptions", "defaultColDef", "rowData", "gridReady"], ["StoreItem_Grid", ""], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", 2, "background", "#F3F4F8", "width", "100%", "position", "relative", "bottom", "46px", "border-radius", "0px 0px 10px 13px", "border", "1px solid"], [1, "mb-0"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade"], ["viewitem", "bs-modal"], [2, "overflow-y", "scroll !important", "height", "500px"], [1, "row", "mx-2", "mt-3", 2, "flex-wrap", "nowrap !important"], [1, "col-3", "px-2"], [1, "d-flex", "flex-column", "justify-centent-between"], [1, "mb-3"], ["for", "items_category", 1, "modal-label"], ["src", "assets/images/item_image_sample.svg", "width", "207px", "height", "104px"], [1, "col-9", 2, "padding", "0px 0px 0px 84px"], [1, "d-flex", "flex-row", "justify-centent-between", "align-items-center", "mb-3"], [1, "mb-3", "mt-1", 2, "width", "100%"], [1, "", 2, "width", "100%", "margin-bottom", "2.3rem"], ["src", "assets/images/barcode_view.svg", "width", "100px", "height", "45px", 2, "display", "inline-flex"], [1, "row", "mx-2", "mb-3"], [1, "col-4"], [1, "d-flex", "flex-column"], [1, "col-8"], [1, "d-flex"], [1, "col-12"], [1, "d-flex", "flex-row", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", "me-2", 2, "width", "auto !important", 3, "click"], [1, "d-flex", "flex-row"], [1, "previousitem"], ["src", "assets/images/go_previous_patient.svg", "width", "30px", "height", "30px"], [1, "nextitem"], ["src", "assets/images/go_next_patient.svg", "width", "30px", "height", "30px"], ["viewnote", "bs-modal"], [1, "", 2, "font-weight", "500 !important"], [2, "font-weight", "500 !important"], ["type", "button", 1, "btn-new", 2, "width", "auto !important", 3, "click"], [2, "width", "100% !important", 3, "linear"], ["cdkStepper", ""], [3, "stepControl", "optional"], ["cdkStepLabel", ""], ["stepOne", ""], ["stepTwo", ""], [1, "step-bullet"], [1, "step-title"], [2, "width", "100% !important", 3, "linear", "selectionChange"], [3, "stepControl", "optional", 4, "ngIf"], [3, "SelectedIndex", "save"], ["stepThree", ""], ["stepFour", ""], ["stepFive", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["disabled", ""], [1, "dropdown-menu", "dropdown-menu-end", 2, "padding", "0px 0px 10px 0px", "border-radius", "8px 8px 0px 0px"], ["href", "javascript: void(0);", 1, "dropdown-item", 2, "background", "#D62424", "color", "#fff", "border-radius", "6px 6px 0px 0px !important", "margin-bottom", "10px"], ["src", "assets/images/Procedure_notification_alert.svg"], ["class", "dropdown-item", "href", "javascript: void(0);", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "dropdown-menu", "dropdown-menu-end", 2, "text-align", "center !important"], ["href", "javascript: void(0);", 1, "dropdown-item", 2, "padding", "2px 2px"], [1, "btn", 2, "background", "#D62424", "color", "#fff"], [1, "d-flex", "flex-column", "flex-wrap", "my-3"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center", "mb-1"], [1, "mdi", "mdi-trash-can-outline", "pointer"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "pointer", "me-2", 3, "src", "click"], [1, "mx-2", "mb-0"], [1, "btn-new", "plus-count"], [1, "mdi", "mdi-minus", 2, "color", "#000 !important", "font-size", "12px"], [1, "mx-2", 2, "background", "#fff !important"], [1, "btn-new", "minus-count"], [1, "mdi", "mdi-plus", 2, "color", "#fff !important", "font-size", "12px"]],
    template: function AllProceduresComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AllProceduresComponent_ng_stepper_1_Template, 10, 5, "ng-stepper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AllProceduresComponent_ng_stepper_2_Template, 7, 6, "ng-stepper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Accession No");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 5)(11, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Procedure Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 5)(16, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Modality Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "CT-Oncology");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 5)(21, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Procedure Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 5)(26, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Procedure Sub Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AllProceduresComponent_Template_select_ngModelChange_29_listener($event) {
          return ctx.selectedStatus = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, AllProceduresComponent_ng_container_32_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, AllProceduresComponent_ng_template_33_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 5)(36, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Priority Scoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "select", 13)(40, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Requested");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "In-Vetting");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Vetted");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "In-Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 5)(51, "div", 18)(52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, AllProceduresComponent_div_54_Template, 5, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 5)(56, "div", 18)(57, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, AllProceduresComponent_div_60_Template, 4, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 25, 26)(63, "div", 27)(64, "div", 28)(65, "div", 29)(66, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "View Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllProceduresComponent_Template_img_click_68_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](276);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12 == null ? null : _r12.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 32)(70, "div", 33)(71, "div", 34)(72, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "ORS Juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 34)(77, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Item No");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "42254");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 37)(82, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Minimum 50 letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 41)(88, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 25, 43)(92, "div", 44)(93, "div", 45)(94, "div", 46)(95, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Add new item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllProceduresComponent_Template_img_click_97_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](91);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r8 == null ? null : _r8.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 47)(99, "div", 48)(100, "div", 34)(101, "h1", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 50)(104, "h1", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Store Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 51)(107, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, AllProceduresComponent_div_108_Template, 23, 4, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 54)(110, "div", 55)(111, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 56)(114, "select", 58)(115, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Large select");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, "Small select");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 56)(122, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 60)(125, "ag-grid-angular", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("gridReady", function AllProceduresComponent_Template_ag_grid_angular_gridReady_125_listener($event) {
          return ctx.onGridReady_1($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 63)(128, "div")(129, "h4", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "2 Items selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "div")(132, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 65, 66)(136, "div", 44)(137, "div", 28)(138, "div", 29)(139, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, "View Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllProceduresComponent_Template_img_click_141_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](135);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r11 == null ? null : _r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "div", 67)(143, "div", 68)(144, "div", 69)(145, "div", 70)(146, "div", 71)(147, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, "Item:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](149, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 74)(151, "div", 75)(152, "div", 76)(153, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, "Item number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, "Neurology");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "div", 76)(158, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "Item name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161, "ORS juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 75)(163, "div", 77)(164, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "Item category");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](167, "ORS Juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "div", 76)(169, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](170, "Barcodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](172, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "div", 79)(174, "div", 80)(175, "div", 81)(176, "div", 71)(177, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178, "Procedure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180, "Cardiology");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "div", 71)(182, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185, "100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "div", 71)(187, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](190, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "div", 71)(192, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](193, "Min level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](195, "52934");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "div", 80)(197, "div", 81)(198, "div", 71)(199, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](200, "Item Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](202, "In Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](203, "div", 71)(204, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](206, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](207, "300ml");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](208, "div", 71)(209, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](210, "Cabinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](211, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](212, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](213, "div", 71)(214, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](215, "Cat No");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](216, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](217, "56954");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](218, "div", 80)(219, "div", 81)(220, "div", 71)(221, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](222, "Vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](223, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](224, "Flores Junita");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](225, "div", 71)(226, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](227, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](228, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](229, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](230, "div", 71)(231, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](232, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](233, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](234, "14-10-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](235, "div", 71)(236, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](237, "Lot No");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](238, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](239, "14454");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](240, "div", 79)(241, "div", 82)(242, "div", 83)(243, "div", 71)(244, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](245, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](246, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](247, "#energy #ORS #energy #ORS #energy #ORS #energy #ORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](248, "div", 80)(249, "div", 71)(250, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](251, "Unit No");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](252, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](253, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](254, "div", 79)(255, "div", 84)(256, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](257, "Item description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](258, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](259, "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](260, "div", 79)(261, "div", 84)(262, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](263, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](264, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](265, "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](266, "div", 85)(267, "div")(268, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllProceduresComponent_Template_button_click_268_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](135);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r11 == null ? null : _r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](269, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](270, "div", 87)(271, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](272, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](273, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](274, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](275, "div", 25, 92)(277, "div", 27)(278, "div", 28)(279, "div", 29)(280, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](281, "View Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](282, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllProceduresComponent_Template_img_click_282_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](276);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12 == null ? null : _r12.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](283, "div", 32)(284, "div", 33)(285, "div", 34)(286, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](287, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](288, "h1", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](289, "ORS Juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](290, "div", 34)(291, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](292, "Item No");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](293, "h1", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](294, "42254");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](295, "div", 37)(296, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](297, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](298, "h1", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](299, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](300, "div", 41)(301, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllProceduresComponent_Template_button_click_301_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](276);
          return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r12 == null ? null : _r12.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](302, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.stepperData == null ? null : ctx.stepperData.length) <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.stepperData == null ? null : ctx.stepperData.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx.CurrentPatientUnderStatusDetails == null ? null : ctx.CurrentPatientUnderStatusDetails.accession_no) ? ctx.CurrentPatientUnderStatusDetails.accession_no : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx.CurrentPatientUnderStatusDetails == null ? null : ctx.CurrentPatientUnderStatusDetails.procedure) ? ctx.CurrentPatientUnderStatusDetails.procedure : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx.CurrentPatientUnderStatusDetails == null ? null : ctx.CurrentPatientUnderStatusDetails.procedure_status) ? ctx.CurrentPatientUnderStatusDetails.procedure_status : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.procedureSubStatusData && ctx.procedureSubStatusData.length > 0)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.myCartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("rowData", ctx.StoreItemGridData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownDirective, angular_ng_stepper__WEBPACK_IMPORTED_MODULE_11__.NgStepperComponent, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStep, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_12__.CdkStepLabel, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__.ModalDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__.AgGridAngular, _procedure_details_procedure_details_component__WEBPACK_IMPORTED_MODULE_2__.ProcedureDetailsComponent, _procedure_details_booking_procedure_details_booking_component__WEBPACK_IMPORTED_MODULE_3__.ProcedureDetailsBookingComponent, _procedure_details_pre_procedure_procedure_details_pre_procedure_component__WEBPACK_IMPORTED_MODULE_4__.ProcedureDetailsPreProcedureComponent, _procedure_details_intra_procedure_procedure_details_intra_procedure_component__WEBPACK_IMPORTED_MODULE_5__.ProcedureDetailsIntraProcedureComponent, _procedure_details_post_procedure_procedure_details_post_procedure_component__WEBPACK_IMPORTED_MODULE_6__.ProcedureDetailsPostProcedureComponent],
    styles: [".start-0[_ngcontent-%COMP%] {\n  left: 0% !important;\n}\n\n.start-20[_ngcontent-%COMP%] {\n  left: 20% !important;\n}\n\n.start-40[_ngcontent-%COMP%] {\n  left: 40% !important;\n}\n\n.start-60[_ngcontent-%COMP%] {\n  left: 60% !important;\n}\n\n.start-80[_ngcontent-%COMP%] {\n  left: 80% !important;\n}\n\n  .step.active .step-bullet {\n  z-index: 1 !important;\n  color: #E45112 !important;\n  border: 0.2rem solid #E45112 !important;\n}\n\n  .step.active {\n  background-color: #fff !important;\n}\n\n  .step.completed .step-bullet {\n  border: 0.2rem solid #594585 !important;\n  z-index: 1 !important;\n  color: #594585 !important;\n}\n\n.step-bullet[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n\n  .stepper-header {\n  margin: 0px -30px 0px 30px !important;\n  padding-top: 14px !important;\n}\n\n  .step {\n  width: 50.33% !important;\n  left: 0% !important;\n  right: 0% !important;\n  padding: 0px !important;\n}\n\n  .step:after {\n  z-index: auto !important;\n}\n\n  .stepper-body {\n  margin: 112px 0px 0px 0px !important;\n  padding: 12px 0px 0px 0px !important;\n}\n  .stepper-body .content {\n  transform: none !important;\n}\n\n  .step.completed + .step::after {\n  background-color: #594585 !important;\n}\n\n  ol {\n  padding: 0px !important;\n}\n\n  .main-content .content {\n  padding: 0px !important;\n  margin-top: 0px !important;\n}\n\noption[_ngcontent-%COMP%] {\n  font-size: 9px !important;\n}\n\n.step-bullet[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border: 1px solid #000 !important;\n  color: #000 !important;\n  height: 20px !important;\n  width: 20px !important;\n  padding-bottom: 12px !important;\n}\n\n  .stepper-header .steps {\n  width: 100% !important;\n  list-style: none !important;\n  display: inline-flex !important;\n  margin: 0 auto !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n}\n\n.Outer-border[_ngcontent-%COMP%] {\n  border: 0.5px solid #594585;\n  border-radius: 10px;\n}\n\n.Outer-border-header[_ngcontent-%COMP%] {\n  background: #F3F4F8;\n  border-radius: 10px 10px 0px 0px;\n  height: 30px;\n  border-bottom: 0.5px solid #594585;\n}\n\n.mycart-body[_ngcontent-%COMP%] {\n  border-right: 0.5px solid #594585;\n  height: 350px;\n  overflow-y: scroll;\n}\n\n.mycart-body-2[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.plus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #ECECEC !important;\n}\n\n.minus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #855EDB !important;\n}\n\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  --ag-row-hover-color: transparent !important;\n  --ag-header-background-color: #594585 !important;\n  --ag-selected-row-background-color: transparent !important;\n}\n\n  .ag-row {\n  border-bottom: none !important;\n}\n\n  .ag-row-selected::before {\n  background-color: transparent !important;\n}\n\n  .ag-row-odd {\n  margin: 10px 0px !important;\n  background: #F3F4F8 !important;\n  z-index: 2;\n}\n\n  .ag-row-even {\n  margin: 10px 0px !important;\n  background: none !important;\n}\n\n  .ag-header-viewport {\n  background: #594585 !important;\n  border: none !important;\n}\n\n  .ag-header-viewport:hover {\n  background: #594585 !important;\n}\n\n  .ag-header {\n  border-bottom: none !important;\n}\n\n  .ag-header-cell-text {\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  font-size: 10px !important;\n  font-weight: 400 !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  border-radius: 15px;\n  font-family: poppins !important;\n}\n\n  .ag-row-group-expanded {\n  background: #8B8B8B !important;\n}\n  .ag-row-group-expanded .ag-cell-value {\n  color: #fff !important;\n}\n  .ag-row-group-expanded .ag-icon-tree-open {\n  color: #fff !important;\n}\n\n  .ag-theme-alpine .ag-group-contracted .ag-icon:hover {\n  color: #181d1f !important;\n}\n\n  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within {\n  border: none !important;\n}\n\n  .ag-icon-menu {\n  color: #fff !important;\n}\n\n  .ag-details-grid .ag-theme-alpine {\n  --ag-row-hover-color: transparent !important;\n}\n\n  .ag-ltr .ag-cell-range-single-cell {\n  border: none !important;\n  background: transparent !important;\n  --ag-row-hover-color: transparent !important;\n}\n\n.barcode_img[_ngcontent-%COMP%] {\n  padding-right: 40px !important;\n  background-image: url(\"/assets/images/barcode_input_type.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 134px !important;\n  background-size: 16px 16px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvYWxsLXByb2NlZHVyZXMvYWxsLXByb2NlZHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtQkFBQTtBQUNBOztBQUNBO0VBQ0Usb0JBQUE7QUFFRjs7QUFBQTtFQUNFLG9CQUFBO0FBR0Y7O0FBREE7RUFDRSxvQkFBQTtBQUlGOztBQUZBO0VBQ0Usb0JBQUE7QUFLRjs7QUFEQTtFQUVFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtBQUdGOztBQUFBO0VBQ0UsaUNBQUE7QUFHRjs7QUFBQTtFQUdFLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUVFLHFDQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7RUFDQSxvQ0FBQTtBQUFGO0FBQ0U7RUFDRSwwQkFBQTtBQUNKOztBQUdBO0VBQ0Usb0NBQUE7QUFBRjs7QUFHQTtFQUNFLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FBQUY7O0FBR0E7RUFFRSx5QkFBQTtBQURGOztBQUlBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBREE7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFLQTtFQUVFLDJCQUFBO0VBQTRCLG1CQUFBO0FBRjlCOztBQUlBO0VBQ0UsbUJBQUE7RUFBb0IsZ0NBQUE7RUFBaUMsWUFBQTtFQUFhLGtDQUFBO0FBRXBFOztBQUFBO0VBQ0UsaUNBQUE7RUFBa0MsYUFBQTtFQUFjLGtCQUFBO0FBS2xEOztBQUhBO0VBRUUsYUFBQTtBQUtGOztBQUZBO0VBQ0UsdUJBQUE7RUFBd0Isc0JBQUE7RUFBdUIsdUJBQUE7RUFBd0IsOEJBQUE7QUFRekU7O0FBTkE7RUFDRSx1QkFBQTtFQUF3QixzQkFBQTtFQUF1Qix1QkFBQTtFQUF3Qiw4QkFBQTtBQVl6RTs7QUFQQTtFQUVFLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwwREFBQTtBQVNGOztBQVBBO0VBQ0UsOEJBQUE7QUFVRjs7QUFKQTtFQUVFLHdDQUFBO0FBTUY7O0FBSkE7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUpBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtBQU9GOztBQUpBO0VBRUUsOEJBQUE7RUFDQSx1QkFBQTtBQU1GOztBQUhBO0VBQ0UsOEJBQUE7QUFNRjs7QUFIQTtFQUNBLDhCQUFBO0FBTUE7O0FBSEE7RUFFRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFLRjs7QUFGQTtFQUVFLDBCQUFBO0VBQ0EsMkJBQUE7QUFJRjs7QUFEQTtFQUVFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURBO0VBRUUsOEJBQUE7QUFHRjtBQURBO0VBQ0Usc0JBQUE7QUFHRjtBQURBO0VBQ0Usc0JBQUE7QUFHRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFFRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUVFLDRDQUFBO0FBQUY7O0FBTUE7RUFFRSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7QUFKRjs7QUFPQTtFQUNFLDhCQUFBO0VBQ0EseUVBQUE7RUFDQSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7QUFKRiIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC0wIHtcclxubGVmdDogMCUgIWltcG9ydGFudDtcclxufVxyXG4uc3RhcnQtMjB7XHJcbiAgbGVmdDogMjAlICFpbXBvcnRhbnRcclxufVxyXG4uc3RhcnQtNDB7XHJcbiAgbGVmdDogNDAlICFpbXBvcnRhbnRcclxufVxyXG4uc3RhcnQtNjB7XHJcbiAgbGVmdDogNjAlICFpbXBvcnRhbnRcclxufVxyXG4uc3RhcnQtODB7XHJcbiAgbGVmdDogODAlICFpbXBvcnRhbnRcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuc3RlcC5hY3RpdmUgLnN0ZXAtYnVsbGV0e1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNFNDUxMTIgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6I0U0NTExMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjowLjJyZW0gc29saWQgI0U0NTExMiAhaW1wb3J0YW50XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3RlcC5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnN0ZXAuY29tcGxldGVkIC5zdGVwLWJ1bGxldHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZjk0ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjowLjJyZW0gc29saWQgIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuICBjb2xvcjojNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGVwLWJ1bGxldHtcclxuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3RlcHBlci1oZWFkZXJ7XHJcbiAgLy8gbWFyZ2luOiAgMHB4IC0yNTZweCAwcHggLTI1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAgMHB4IC0zMHB4IDBweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdGVwe1xyXG4gIHdpZHRoOiA1MC4zMyUgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnN0ZXA6YWZ0ZXJ7XHJcbiAgei1pbmRleDogYXV0byAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6ICNFNDUxMTIgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLnN0ZXBwZXItYm9keXtcclxuICBtYXJnaW46IDExMnB4IDBweCAwcHggMHB4ICAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEycHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAuY29udGVudHtcclxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdGVwLmNvbXBsZXRlZCArIC5zdGVwOjphZnRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBvbHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYWluLWNvbnRlbnQgLmNvbnRlbnR7XHJcbiAgcGFkZGluZzowcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxub3B0aW9uXHJcbntcclxuICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RlcC1idWxsZXR7XHJcbmJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuYm9yZGVyOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xyXG5jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG5oZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxud2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxucGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdGVwcGVyLWhlYWRlciAuc3RlcHN7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBsaXN0LXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5PdXRlci1ib3JkZXJcclxue1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzU5NDU4NTtib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5PdXRlci1ib3JkZXItaGVhZGVye1xyXG4gIGJhY2tncm91bmQ6ICNGM0Y0Rjg7Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7aGVpZ2h0OiAzMHB4O2JvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM1OTQ1ODU7XHJcbn1cclxuLm15Y2FydC1ib2R5e1xyXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgIzU5NDU4NTtoZWlnaHQ6IDM1MHB4O292ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4ubXljYXJ0LWJvZHktMlxyXG57XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLnBsdXMtY291bnR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7d2lkdGg6IDIycHggIWltcG9ydGFudDtoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtiYWNrZ3JvdW5kOiAjRUNFQ0VDICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1pbnVzLWNvdW50e1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O3dpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogIzg1NUVEQiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi5hZy10aGVtZS1hbHBpbmVcclxue1xyXG4gIC0tYWctcm93LWhvdmVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYWctaGVhZGVyLWJhY2tncm91bmQtY29sb3IgOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbiAgLS1hZy1zZWxlY3RlZC1yb3ctYmFja2dyb3VuZC1jb2xvciA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3d7XHJcbiAgYm9yZGVyLWJvdHRvbSA6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLmFnLXJvdyA6aG92ZXJ7XHJcbi8vICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6bmctZGVlcCAuYWctcm93LXNlbGVjdGVkOjpiZWZvcmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3ctb2Rke1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiNGM0Y0RjggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyIDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1yb3ctZXZlbntcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVye1xyXG5ib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVyLWNlbGwtdGV4dFxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctY2VsbC12YWx1ZVxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvb3Qtd3JhcHBlclxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXJvdy1ncm91cC1leHBhbmRlZFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzhCOEI4QiAhaW1wb3J0YW50O1xyXG5cclxuLmFnLWNlbGwtdmFsdWV7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWctaWNvbi10cmVlLW9wZW57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctZ3JvdXAtY29udHJhY3RlZCAuYWctaWNvbjpob3ZlcntcclxuICBjb2xvcjogIzE4MWQxZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1mb2N1czpub3QoLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQpOmZvY3VzLXdpdGhpblxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaWNvbi1tZW51e1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctZGV0YWlscy1ncmlkIC5hZy10aGVtZS1hbHBpbmV7XHJcbi8vICAuYWctcm9vdC13cmFwcGVyIC5hZy1sYXlvdXQtbm9ybWFsIC5hZy1sdHIgLmFnLXRoZW1lLWFscGluZXtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAvLyAuYWctcm93IDpob3ZlcntcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1yYW5nZS1zaW5nbGUtY2VsbFxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhcmNvZGVfaW1ne1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgdG8gbGVhdmUgc3BhY2UgZm9yIHRoZSBpbWFnZVxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFyY29kZV9pbnB1dF90eXBlLnN2ZycpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEzNHB4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGUgcG9zaXRpb24gYXMgbmVlZGVkXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpbWFnZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 769:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/drop-down-button/drop-down-button.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownButtonComponent: () => (/* binding */ DropDownButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



class DropDownButtonComponent {
  constructor() {
    this.SelectedValue = 'Used';
  }
  agInit(params) {
    console.log(params);
    return this.SelectedValue.value;
    // this.displayValue = new Array(params.value!).fill('#').join('')
  }
  static #_ = this.ɵfac = function DropDownButtonComponent_Factory(t) {
    return new (t || DropDownButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DropDownButtonComponent,
    selectors: [["app-drop-down-button"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 1,
    consts: [["placeholder", "Select Category", 1, "form-selects", "action", 2, "width", "100% !important", "background", "#F3F4F8 !important", 3, "ngModel", "ngModelChange"]],
    template: function DropDownButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DropDownButtonComponent_Template_select_ngModelChange_0_listener($event) {
          return ctx.SelectedValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Damaged");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Returned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wasted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.SelectedValue);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2133:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/procedure-details-booking/procedure-details-booking.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureDetailsBookingComponent: () => (/* binding */ ProcedureDetailsBookingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-info/view-info.component */ 3648);












const _c0 = ["StoreItem_Grid"];
const _c1 = ["cdkStepper"];
function ProcedureDetailsBookingComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_img_9_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.ShowViewOnlyArea());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsBookingComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 81)(1, "a", 82)(2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("nav-link " + x_r22.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r22.template, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", x_r22.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r22.tabs);
  }
}
function ProcedureDetailsBookingComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 81)(1, "a", 82)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("navs-link " + x_r23.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r23.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r23.subtabs);
  }
}
function ProcedureDetailsBookingComponent_div_41_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx_r24.category);
  }
}
function ProcedureDetailsBookingComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 88)(1, "div", 89)(2, "div", 90)(3, "div", 91)(4, "h1", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Store Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_div_41_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](37);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r3 == null ? null : _r3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 94)(8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProcedureDetailsBookingComponent_div_41_div_10_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 43)(12, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 95)(15, "ag-grid-angular", 96, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function ProcedureDetailsBookingComponent_div_41_Template_ag_grid_angular_gridReady_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.onGridReady_1($event));
    })("selectionChanged", function ProcedureDetailsBookingComponent_div_41_Template_ag_grid_angular_selectionChanged_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.OnGridSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 97)(18, "div", 98)(19, "h4", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 98)(22, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_div_41_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.AddToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx_r4.columnDefs1)("gridOptions", ctx_r4.gridOptions1)("defaultColDef", ctx_r4.defaultColDef)("rowData", ctx_r4.StoreItemGridData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.SelectedRowData.length, " items selected");
  }
}
function ProcedureDetailsBookingComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103)(1, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Store Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProcedureDetailsBookingComponent_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 106)(2, "div")(3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_div_51_div_1_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const x_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.Deleteitem(x_r31.item_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 109)(8, "div", 110)(9, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_div_51_div_1_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const i_r32 = ctx_r38.index;
      const x_r31 = ctx_r38.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.AddToFavourite(i_r32, x_r31.item_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h4", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 113)(17, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_div_51_div_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r39.DecreaseItemCount(ctx_r39.fields == null ? null : ctx_r39.fields[i_r32]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_div_51_div_1_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const i_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.IncreseItemCount(ctx_r41.fields == null ? null : ctx_r41.fields[i_r32]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const x_r31 = ctx_r43.$implicit;
    const i_r32 = ctx_r43.index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r31.item_details ? x_r31.item_details.item_name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", x_r31.item_id ? "assets/images/favourite_fill.svg" : "assets/images/Fav_stroke.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No :", x_r31.item_details ? x_r31.item_details.item_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Size :", x_r31.item_details ? x_r31.item_details.size : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", ctx_r33.fields == null ? null : ctx_r33.fields[i_r32])("name", ctx_r33.fields == null ? null : ctx_r33.fields[i_r32]);
  }
}
function ProcedureDetailsBookingComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProcedureDetailsBookingComponent_div_51_div_1_Template, 22, 6, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", x_r31.item_details);
  }
}
function ProcedureDetailsBookingComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx_r7.category);
  }
}
function ProcedureDetailsBookingComponent_li_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 81)(1, "a", 119)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r44.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r44.subtabs);
  }
}
function ProcedureDetailsBookingComponent_li_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 81)(1, "a", 82)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("navs-link " + x_r45.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r45.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r45.subtabs);
  }
}
function ProcedureDetailsBookingComponent_li_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 81)(1, "a", 120)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r46.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r46.subtabs);
  }
}
function ProcedureDetailsBookingComponent_ng_template_130_Template(rf, ctx) {}
function ProcedureDetailsBookingComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " 2Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsBookingComponent_ng_template_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " 3Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsBookingComponent_ng_template_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " 4Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function (a0) {
  return {
    "hideViewOnlyArea": a0
  };
};
const _c3 = function (a0) {
  return {
    "expandWorkArea": a0
  };
};
const _c4 = function (a0) {
  return {
    "TabsAlign": a0
  };
};
const _c5 = function (a0) {
  return {
    "ChangeMainTab": a0
  };
};
const _c6 = function (a0) {
  return {
    "VisibleStorebutton": a0
  };
};
const _c7 = function (a0) {
  return {
    "ShowfullCart": a0
  };
};
const _c8 = function (a0) {
  return {
    "hideStoreItem": a0
  };
};
class ProcedureDetailsBookingComponent {
  constructor(http, allService, toastr, formbuilder) {
    this.http = http;
    this.allService = allService;
    this.toastr = toastr;
    this.formbuilder = formbuilder;
    this.mainTabsValue = [];
    this.subTabs = [];
    this.header_viewOnlymode = [];
    this.myCartData = [];
    this.CurrentPatientDetails = [];
    this.category = [];
    this.Addtofavourite_bool = false;
    this.hideViewOnlyMode = true;
    this.StoreItemGridData = [];
    this.isFirstOpen = false;
    this.ItemCount = 0;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: false,
      filter: true
      // floatingFilter: true,
    };

    this.gridOptions1 = {
      defaultColDef: {
        filter: false
      },
      overlayNoRowsTemplate: '<span class="ag-overlay-no-rows-center">Please Go back to Material Dashboard Page</span>',
      suppressMenuHide: false,
      rowSelection: 'multiple',
      rowHeight: 35,
      pagination: false,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      suppressRowClickSelection: true,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: false
    };
    this.columnDefs1 = [{
      field: '',
      checkboxSelection: true,
      resizable: false,
      headerCheckboxSelection: true,
      width: 10
    }, {
      field: 'item_number',
      headerName: 'Item No',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'item_number')
    }, {
      field: 'item_name',
      headerName: 'Item Name',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'item_name')
    }, {
      field: 'store_qty',
      headerName: 'Qty',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'store_qty')
    }, {
      field: 'action',
      headerName: '',
      width: 40,
      pinned: "right",
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'action'),
      onCellClicked: this.cellClicked.bind(this, 'action')
    }];
    this.SelectedRowData = [];
    this.IncreaseItemCount_ID = [];
    this.fields = [];
    this.VettingandProtocolingDetails = [];
  }
  ngOnInit() {
    this.http.get('assets/json/main-tabs2.json').subscribe(res => {
      this.mainTabsValue = res;
      // this.mainTabsValue.forEach((element,index) => {
      //   this.subTabs.push(element[index].subtabs);
      // });
      for (let i = 0; i < res.length; i++) {
        if (res[i].subtabs) {
          this.subTabs.push(res[i].subtabs);
        }
      }
    });
    this.http.get('assets/json/viewOnlyMode.json').subscribe(res => {
      this.header_viewOnlymode = res;
    });
    // this.http.get('assets/json/mycart-data.json').subscribe((res:any)=>{
    //   this.myCartData = res;
    // })
  }

  cellRendered(headerName, params) {
    switch (headerName) {
      case 'item_number':
        {
          return params.value;
        }
      case 'item_name':
        {
          return params.value;
        }
      case 'store_qty':
        {
          return params.value;
        }
      case 'action':
        {
          return `<div class="pointer" style="position:relative;right:8px"><img src="assets/images/storeItem.svg" style="width:16px;height:16px"></div>`;
        }
    }
  }
  cellClicked(headerName, params) {
    switch (headerName) {
      case 'action':
        {
          let SelectedRow = params.data;
          let item_details = {};
          console.log(this.StoreItemGridData);
          console.log(SelectedRow);
          let flag = true;
          this.myCartData.forEach((cartItemId, index) => {
            if (SelectedRow.id == cartItemId.id) {
              flag = false;
            }
          });
          if (flag == true) {
            item_details = {
              'item_id': SelectedRow.id,
              'item_details': SelectedRow
            };
            console.log(item_details);
          }
          console.log(item_details);
          console.log('CartData', this.myCartData);
          if (Object.keys(item_details).length > 0) {
            this.myCartData.push(item_details);
            console.log(this.myCartData);
            this.CreateGroup();
          }
          this.StoreItem_Grid.api?.deselectAll();
        }
    }
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
  }
  OnGridSelection(event) {
    this.SelectedRowData = this.gridApi_1.getSelectedRows();
    console.log(this.SelectedRowData);
  }
  AddToCart() {
    let item_details = {};
    this.SelectedRowData.forEach((element, index) => {
      console.log(element, index);
      let flag = true;
      this.myCartData.forEach((CartItemid, index) => {
        if (element.id == CartItemid.id) {
          flag = false;
        }
      });
      if (flag == true) {
        item_details = {
          'item_id': element.id,
          'item_details': element
        };
        this.myCartData.push(item_details);
      }
      // this.StoreItemGridData.splice(index,1);
    });

    console.log(this.myCartData);
    this.StoreItem_Grid.api?.setRowData(this.StoreItemGridData);
    this.CreateGroup();
    this.StoreItem_Grid.api?.deselectAll();
  }
  Deleteitem(item) {
    console.log(item);
    console.log(this.myCartData);
    this.myCartData.forEach((element, index) => {
      if (element.item_id == item.id) {
        this.myCartData.splice(index, 1);
      }
    });
    console.log(this.myCartData);
  }
  CheckOutSchedulling(formData) {
    // this.onSaveCheckBoxes();
    console.log(formData.value);
    let ItemId = [];
    let Quantity = [];
    this.myCartData.forEach((element, index) => {
      ItemId.push(element.item_id);
      Quantity.push(this.MyCartform.get('increasefield' + index).value);
    });
    console.log(ItemId);
    console.log(Quantity);
    let PatientID = localStorage.getItem('PatientID');
    let procedurename = localStorage.getItem('Procedure');
    let MRN_NO = localStorage.getItem('MRN_NO');
    this.allService.StoreShoppingCartSchedulling(PatientID, MRN_NO, procedurename, ItemId, Quantity, 'Schedulling').subscribe({
      next: res => {
        if (res.status == 'Success') {
          console.log(res);
          this.toastr.success(`${res.message}`, 'Successful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
        this.myCartData.forEach((element, index) => {
          this.MyCartform.get('increasefield' + index).setValue(0);
        });
        // this.stepper.next();
      },

      error: res => {
        this.toastr.error('Something went wrong', 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  AddToFavourite(index, value) {
    this.myCartData[index].fav = !value;
  }
  HideViewOnlyArea() {
    this.hideViewOnlyMode = true;
  }
  ShowViewOnlyArea() {
    this.hideViewOnlyMode = false;
  }
  DecreaseItemCount(fieldName) {
    let x = this.MyCartform.get(fieldName).value;
    if (x > 0) {
      this.MyCartform.get(fieldName).setValue(x - 1);
    }
  }
  IncreseItemCount(fieldName) {
    let x = this.MyCartform.get(fieldName).value;
    if (x >= 0) {
      this.MyCartform.get(fieldName).setValue(x + 1);
    }
  }
  ngOnChanges(changes) {
    console.log('Schedulling Changes', changes.SelectedIndex.currentValue);
    if (changes.SelectedIndex.currentValue == 1) {
      this.hideViewOnlyMode = true;
      let PatientID = localStorage.getItem('PatientID');
      let procedurename = localStorage.getItem('Procedure');
      let MRN_NO = localStorage.getItem('MRN_NO');
      this.allService.GetMyCartDetails(procedurename).subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log(res);
            res.my_cart.procedure_item.forEach(data => {
              if (data.item_details != null) {
                this.myCartData.push(data);
              }
            });
            console.log('My Cart Data', this.myCartData);
            this.CreateGroup();
          }
        },
        error: res => {
          this.toastr.error('Something went wrong', 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
      this.allService.GetItemUniqueList().subscribe({
        next: res => {
          this.StoreItemGridData = res.data;
          this.StoreItem_Grid.api?.setRowData(this.StoreItemGridData);
          console.log(this.StoreItemGridData);
          // this.tempGridData = this.all_Items_gridData;
          return;
        },
        error: res => {
          this.toastr.error('Something went wrong', 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
      this.StoreItem_Grid.api?.sizeColumnsToFit();
      this.allService.ItemCategoryOptions().subscribe({
        next: res => {
          if (res.status == 'Success') {
            res.categories.forEach(element => {
              this.category.push(element.categories);
            });
            console.log(this.category);
          }
        }
      });
    }
  }
  ngAfterViewInit() {
    // console.log('SelectedIndex',this.SelectedIndex);
    // if(this.SelectedIndex == 1){
    // }
  }
  CreateGroup() {
    this.createObject = {};
    this.fields = [];
    this.myCartData.forEach((element, index) => {
      if (element) {
        this.createObject['increasefield' + index] = '';
      }
    });
    console.log('CreateObject', this.createObject);
    Object.keys(this.createObject).forEach((field, index) => {
      if (field == 'increasefield' + index) {
        this.createObject[field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
      }
      // this.createObject[field] = new FormControl("",[Validators.minLength(0)]);
      this.fields.push(field);
    });
    console.log('Fields', this.fields);
    this.MyCartform = this.formbuilder.group(this.createObject);
    console.log(this.MyCartform);
    this.myCartData.forEach((element, index) => {
      this.MyCartform?.get('increasefield' + index).setValue(0);
    });
  }
  OnClickingViewOnlyMode(type, condition) {
    switch (type) {
      case 'VETTING & PROTOCOLING':
        {
          console.log('cdtnn', condition);
          if (condition == true) {
            //&& this.VettingandProtocolingDetails.length == 0
            let MRN = localStorage.getItem('MRN_NO');
            let PatientID = localStorage.getItem('PatientID');
            this.allService.GetVettingandProtocolingData(PatientID, MRN).subscribe({
              next: res => {
                if (res.status == 'Success') {
                  console.log('Vetting and Protocol Data', res.data);
                  this.VettingandProtocolingDetails = res.data;
                }
              },
              error: res => {
                this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                  positionClass: 'toast-top-center',
                  timeOut: 2000
                });
              }
            });
            break;
          }
        }
    }
  }
  onSaveCheckBoxes() {
    if (!this.allService.areAllChecked()) {
      this.toastr.error('Please select all checkboxes before saving.', 'UnSuccessful', {
        positionClass: 'toast-top-center',
        timeOut: 5000
      });
    } else {
      this.save.emit(true);
      this.allService.clearCheckBoxes();
    }
  }
  static #_ = this.ɵfac = function ProcedureDetailsBookingComponent_Factory(t) {
    return new (t || ProcedureDetailsBookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProcedureDetailsBookingComponent,
    selectors: [["app-procedure-details-booking"]],
    viewQuery: function ProcedureDetailsBookingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
      }
    },
    inputs: {
      SelectedIndex: "SelectedIndex",
      StageValue: "StageValue"
    },
    outputs: {
      save: "save"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 138,
    vars: 39,
    consts: [[1, "cards", 2, "border-radius", "10px !important", "border", "1px solid #8B8B8B", "padding", "0px !important", "height", "589px"], [1, "row"], [1, "col-3", "pe-0", 2, "border-right", "1px solid #594585", 3, "ngClass"], [1, "viewonlymode_header", "mb-0"], ["src", "assets/images/ViewOnlyModeleft.svg", 1, "leftexpand", 2, "position", "relative", "top", "43%", "left", "95%", "bottom", "50%", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], [1, "accords", "px-1", 2, "overflow-x", "scroll", "height", "507px"], [1, "col-9", 2, "padding", "0px 0px !important", 3, "ngClass"], ["src", "assets/images/ViewOnlyModeright.svg", "style", "position: relative;top: 280px;left: 13px;cursor: pointer;width: 20px;height: 20px;z-index: 1;", 3, "click", 4, "ngIf"], ["role", "tabpanel", 1, "tab-pane", 3, "ngClass"], ["role", "tablist", 1, "nav", "line-tab", "nav-pills", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "margin-right", "0.66rem", 3, "ngClass"], ["class", "nav-items", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-content", "mt-1", "text-muted"], ["id", "TabContentB1", "role", "tabpanel", 1, "tab-pane", "active"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", "scroll-container", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "overflow-y", "scroll", "border-right", "1px solid #8B8B8B!important", "height", "33px !important"], [1, "tab-content", "px-2", "text-muted"], ["id", "b1-1", "role", "tabpanel", 1, "tab-pane"], ["id", "b1-2", "role", "tabpanel", 1, "tab-pane"], ["id", "b1-3", "role", "tabpanel", 1, "tab-pane"], ["id", "b1-4", "role", "tabpanel", 1, "tab-pane"], ["id", "b1-5", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "p-0"], [1, "col-12"], [1, "d-flex", "flex-row", "justify-content-between", "align-item-center", "mx-2", "p-2", "me-4", 2, "background", "#F3F4F8", "border-radius", "6px"], [1, "mb-0"], ["dropdown", "", 1, "dropdown", "d-inline-block", "pointer", "storeItem", 3, "insideClick", "ngClass", "isDisabled", "click"], ["dropdown", "bs-dropdown"], ["dropdownToggle", "", 1, "mb-0"], ["src", "assets/images/storeItem.svg", 1, "me-2"], ["class", "dropdown-menu dropdown-menu-end mb-0", 4, "dropdownMenu"], [1, "ms-1", "me-3", "mt-2", "Outer-border"], [1, "d-flex", "flex-wrap", "align-item-center", "p-2", "Outer-border-header"], [2, "width", "43%"], [1, "mb-0", 2, "font-weight", "500 !important"], ["class", "ms-2", 4, "ngIf"], [1, "row", "mx-2"], [1, "col-5", "pe-2", "ps-0", "mycart-body", 3, "ngClass"], [2, "height", "278px", 3, "formGroup"], ["class", "d-flex flex-column flex-wrap my-3", 4, "ngFor", "ngForOf"], [1, "p-2", 2, "border-top", "1px solid"], [1, "ms-auto", 2, "width", "min-content", 3, "click"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important"], [1, "col-7", "mycart-body-2", 3, "ngClass"], [1, "d-flex", "flex-wrap", "flex-row", "my-2"], [1, "me-2"], ["type", "text", "placeholder", "scan or type", 1, "form-control-new-sm", "barcode_img"], ["class", "me-2", "style", "width: 30%;", 4, "ngIf"], [1, "btn-new", 2, "height", "26px !important", "width", "103px !important", "padding", "4px !important"], [1, "mt-2", 2, "width", "100%", "height", "309px !important"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "295px", 3, "columnDefs", "gridOptions", "defaultColDef", "rowData", "gridReady", "selectionChanged"], ["StoreItem_Grid", ""], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", 2, "background", "#F3F4F8", "width", "100%", "position", "relative", "bottom", "46px", "border-radius", "0px 0px 10px 13px", "border", "1px solid", "z-index", "9"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important", 3, "click"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "p-2", "me-4", "my-2", 2, "background", "#F3F0FC"], [1, ""], [1, "ms-auto"], [1, "btn-new", 2, "height", "30px !important", "width", "max-content !important", 3, "click"], ["id", "b1-6", "role", "tabpanel", 1, "tab-pane"], ["id", "b1-7", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentB2", "role", "tabpanel", 1, "tab-pane"], ["role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", "scroll-container", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "overflow-y", "scroll", "border-right", "1px solid #8B8B8B!important", "height", "24px !important"], [1, "tab-content", "ms-2", "mt-2", "text-muted", "mt-2"], ["id", "b2-1", "role", "tabpanel", 1, "tab-pane"], ["id", "b2-2", "role", "tabpanel", 1, "tab-pane"], ["id", "b2-3", "role", "tabpanel", 1, "tab-pane"], ["id", "b2-4", "role", "tabpanel", 1, "tab-pane"], ["id", "b2-5", "role", "tabpanel", 1, "tab-pane"], ["id", "b2-6", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentB3", "role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "border-right", "1px solid #8B8B8B!important", "height", "24px !important"], [1, "tab-content", "ms-2", "mt-2", "text-muted"], ["id", "b3-1", "role", "tabpanel", 1, "tab-pane"], ["id", "b3-2", "role", "tabpanel", 1, "tab-pane"], ["id", "b3-3", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentB4", "role", "tabpanel", 1, "tab-pane"], ["id", "b4-1", "role", "tabpanel", 1, "tab-pane"], ["TabContent1", ""], ["TabContent2", ""], ["TabContent3", ""], ["TabContenb4", ""], ["src", "assets/images/ViewOnlyModeright.svg", 2, "position", "relative", "top", "280px", "left", "13px", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], ["role", "presentation", 1, "nav-items"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 3, "href"], [1, "d-flex", "align-items-center"], ["width", "16px", "height", "16px", 1, "me-2", 3, "src"], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "name", "mb-0", 2, "color", "#747474", "font-size", "10px !important"], [1, "dropdown-menu", "dropdown-menu-end", "mb-0"], [1, "row", "m-2"], [1, "col-12", "p-0"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [1, "d-flex", "align-items-center", "flex-wrap", "flex-row", "my-2"], [1, "mt-2"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "233px", 3, "columnDefs", "gridOptions", "defaultColDef", "rowData", "gridReady", "selectionChanged"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "p-2", 2, "background-color", "#594585", "border-radius", "0px 0px 4px 4px", "position", "relative", "top", "18px"], [1, "ms-3"], [1, "mb-0", 2, "color", "#fff !important"], [1, "btn-white", 3, "click"], [1, "me-2", 2, "width", "30%"], ["placeholder", "Select Category", 3, "items"], [1, "ms-2"], [1, "d-flex", "flex-column", "flex-wrap", "my-3"], [4, "ngIf"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center", "mb-1"], [3, "click"], [1, "mdi", "mdi-trash-can-outline", "pointer"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "pointer", "me-2", 3, "src", "click"], [1, "mx-2", "mb-0"], [1, "d-flex"], [1, "btn-new", "plus-count", 3, "click"], [1, "mdi", "mdi-minus", 2, "color", "#000 !important", "font-size", "12px"], ["type", "number", "readonly", "", 1, "form-control-new", 2, "width", "37px !important", "padding", "0px 0px 0px 0px !important", "text-align", "right !important", "font-size", "0.5rem !important", "border", "none !important", "background", "#fff !important", 3, "formControlName", "name"], [1, "btn-new", "minus-count", 3, "click"], [1, "mdi", "mdi-plus", 2, "color", "#fff !important", "font-size", "12px"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", "me-2", 3, "href"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", 3, "href"], [1, "p-3", "mb-0"]],
    template: function ProcedureDetailsBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "View Other User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_Template_img_click_5_listener() {
          return ctx.HideViewOnlyArea();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-view-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProcedureDetailsBookingComponent_img_9_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProcedureDetailsBookingComponent_li_12_Template, 6, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProcedureDetailsBookingComponent_li_16_Template, 6, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 19)(29, "div", 20)(30, "div", 1)(31, "div", 21)(32, "div", 22)(33, "div")(34, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_Template_div_click_36_listener() {
          return ctx.ngAfterViewInit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Store Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ProcedureDetailsBookingComponent_div_41_Template, 24, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 29)(43, "div", 30)(44, "div", 31)(45, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ProcedureDetailsBookingComponent_div_47_Template, 3, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 34)(49, "div", 35)(50, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ProcedureDetailsBookingComponent_div_51_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 38)(53, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_Template_div_click_53_listener() {
          return ctx.CheckOutSchedulling(ctx.MyCartform);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 41)(57, "div", 42)(58, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, ProcedureDetailsBookingComponent_div_60_Template, 2, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 43)(62, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 47)(65, "ag-grid-angular", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function ProcedureDetailsBookingComponent_Template_ag_grid_angular_gridReady_65_listener($event) {
          return ctx.onGridReady_1($event);
        })("selectionChanged", function ProcedureDetailsBookingComponent_Template_ag_grid_angular_selectionChanged_65_listener($event) {
          return ctx.OnGridSelection($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 50)(68, "div")(69, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div")(72, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_Template_button_click_72_listener() {
          return ctx.AddToCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 52)(75, "div", 53)(76, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 54)(79, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsBookingComponent_Template_button_click_79_listener() {
          return ctx.onSaveCheckBoxes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Save and Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 56)(82, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 57)(85, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Radiation dose info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 58)(88, "div", 59)(89, "ul", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, ProcedureDetailsBookingComponent_li_90_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 61)(92, "div", 62)(93, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 63)(96, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 64)(99, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 65)(102, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Vetting & Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 66)(105, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 67)(108, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 68)(111, "div", 59)(112, "ul", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](113, ProcedureDetailsBookingComponent_li_113_Template, 6, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 70)(115, "div", 71)(116, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 72)(119, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 74)(123, "div", 59)(124, "ul", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, ProcedureDetailsBookingComponent_li_125_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 70)(127, "div", 75)(128, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, ProcedureDetailsBookingComponent_ng_template_130_Template, 0, 0, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, ProcedureDetailsBookingComponent_ng_template_132_Template, 2, 0, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](134, ProcedureDetailsBookingComponent_ng_template_134_Template, 2, 0, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](136, ProcedureDetailsBookingComponent_ng_template_136_Template, 2, 0, "ng-template", null, 79, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c2, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c3, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideViewOnlyMode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c4, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c5, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.mainTabsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("insideClick", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c6, ctx.hideViewOnlyMode == false))("isDisabled", ctx.hideViewOnlyMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideViewOnlyMode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c7, ctx.hideViewOnlyMode == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.MyCartform);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.myCartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c8, ctx.hideViewOnlyMode == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.category.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("rowData", ctx.StoreItemGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.SelectedRowData.length, " Items selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total selected item : ", ctx.myCartData.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[3]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridAngular, _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_1__.ViewInfoComponent],
    styles: [".nav-pills .nav-link.active {\n  color: #fff !important;\n  background-color: #855EDB !important;\n  border: none !important;\n  border-radius: 0px 0px 0px 0px !important;\n  height: 32px !important;\n  padding: 5px 30px !important;\n  opacity: 1;\n  width: 100% !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 0px solid !important;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background: #594585 !important;\n  height: 34px !important;\n  border-radius: 0px 10px 0px 0px;\n  text-align: center !important;\n  display: flex !important;\n  flex-wrap: nowrap !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  transition: none !important;\n  transform: none !important;\n  padding: 6px 30px !important;\n  opacity: 1;\n}\n\n  .nav-justified .nav-item {\n  flex-grow: 0 !important;\n}\n\n  .card-header {\n  padding: 3px 10px 3px 10px !important;\n  background: #ECECEC !important;\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 10px 0px;\n}\n\n.navs-link[_ngcontent-%COMP%] {\n  background: none;\n  display: block;\n  transition: none !important;\n  transform: none !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 0.6;\n  width: 125px !important;\n  font-weight: normal !important;\n  white-space: nowrap;\n}\n\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .navs-link[_ngcontent-%COMP%] {\n  border: none;\n}\n\n  .navs-link.active {\n  color: #fff !important;\n  background-color: #747474 !important;\n  border: 1px solid #747474 !important;\n  border-radius: 6px !important;\n  height: 22px !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 1;\n  width: 125px !important;\n  font-weight: bolder !important;\n}\n  .navs-link.active .name {\n  color: #fff !important;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 0;\n  text-align: center;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 4px !important;\n  cursor: pointer !important; \n\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px !important;\n  background: #8B8B8B !important;\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important; \n\n  cursor: pointer !important;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important;\n  border-radius: 10px !important;\n  cursor: pointer !important;\n}\n\n.Outer-border[_ngcontent-%COMP%] {\n  border: 0.5px solid #594585;\n  border-radius: 10px;\n}\n\n.Outer-border-header[_ngcontent-%COMP%] {\n  background: #F3F4F8;\n  border-radius: 10px 10px 0px 0px;\n  height: 30px;\n  border-bottom: 0.5px solid #594585;\n}\n\n.mycart-body[_ngcontent-%COMP%] {\n  border-right: 0.5px solid #594585;\n  height: 350px;\n  overflow-y: scroll;\n}\n\n.mycart-body-2[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.plus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #ECECEC !important;\n}\n\n.minus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #855EDB !important;\n}\n\n.barcode_img[_ngcontent-%COMP%] {\n  padding-right: 3px !important;\n  background-image: url(\"/assets/images/barcode_input_type.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 124px !important;\n  background-size: 16px 16px !important;\n}\n\n.drop[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  min-height: 30px !important;\n}\n\n  .ng-select-container {\n  height: 20px !important;\n  min-height: 27px !important;\n  font-size: 12px !important;\n}\n\n  .ng-dropdown-panel.ng-select-bottom {\n  background: #fff !important;\n  opacity: 1;\n  font-size: 12px !important;\n  margin-top: 6px !important;\n}\n\n.viewonlymode_header[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: #594585;\n  width: auto;\n  height: 32px;\n  border-radius: 10px 0px 0px 0px;\n  padding: 8px 9px;\n}\n\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  --ag-row-hover-color: transparent !important;\n  --ag-header-background-color: #594585 !important;\n  --ag-selected-row-background-color: transparent !important;\n}\n\n  .ag-row {\n  border-bottom: none !important;\n}\n\n  .ag-row-selected::before {\n  background-color: transparent !important;\n}\n\n  .ag-row-odd {\n  margin: 10px 0px !important;\n  background: #F3F4F8 !important;\n  z-index: 2;\n}\n\n  .ag-row-even {\n  margin: 10px 0px !important;\n  background: none !important;\n}\n\n  .ag-header-viewport {\n  background: #594585 !important;\n  border: none !important;\n}\n\n  .ag-header-viewport:hover {\n  background: #594585 !important;\n}\n\n  .ag-header {\n  border-bottom: none !important;\n}\n\n  .ag-header-cell-text {\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  font-size: 10px !important;\n  font-weight: 400 !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  border-radius: 15px;\n  font-family: poppins !important;\n}\n\n  .ag-row-group-expanded {\n  background: #8B8B8B !important;\n}\n  .ag-row-group-expanded .ag-cell-value {\n  color: #fff !important;\n}\n  .ag-row-group-expanded .ag-icon-tree-open {\n  color: #fff !important;\n}\n\n  .ag-theme-alpine .ag-group-contracted .ag-icon:hover {\n  color: #181d1f !important;\n}\n\n  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within {\n  border: none !important;\n}\n\n  .ag-icon-menu {\n  color: #fff !important;\n}\n\n  .ag-details-grid .ag-theme-alpine {\n  --ag-row-hover-color: transparent !important;\n}\n\n  .ag-ltr .ag-cell-range-single-cell {\n  border: none !important;\n  background: transparent !important;\n  --ag-row-hover-color: transparent !important;\n}\n\n.hideViewOnlyArea[_ngcontent-%COMP%] {\n  display: none;\n  width: 1%;\n}\n\n.expandWorkArea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.showExpandImg[_ngcontent-%COMP%] {\n  padding-right: 40px !important;\n  background-image: url(\"/assets/images/ViewOnlyModeright.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 0px !important;\n  background-size: 16px 16px !important;\n  z-index: 1 !important;\n}\n\n.TabsAlign[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 22px;\n  border-left: 1px solid;\n  margin-left: 1.4rem !important;\n  height: 588px !important;\n}\n\n.ChangeMainTab[_ngcontent-%COMP%] {\n  margin-left: 0.66rem !important;\n  margin-right: 0.66rem !important;\n  border-radius: 10px 10px 0px 0px !important;\n}\n.ChangeMainTab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px !important;\n}\n\n.ShowfullCart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.storeItem[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n\n.VisibleStorebutton[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.hideStoreItem[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvcHJvY2VkdXJlLWRldGFpbHMtYm9va2luZy9wcm9jZWR1cmUtZGV0YWlscy1ib29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBV0E7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUVFLHVCQUFBO0FBVEY7O0FBYUE7RUFDRSxxQ0FBQTtFQUNBLDhCQUFBO0FBVkY7O0FBYUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0FBVkY7O0FBYUE7RUFFRSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQVhGO0FBYUU7RUFDRSxzQkFBQTtBQVhKOztBQWVBO0VBRUUsYUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWdCQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQSxFQUFBLG1DQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBLEVBQUEsaURBQUE7RUFDQSwwQkFBQTtBQWJGOztBQWdCQTtFQUNFLG9EQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQWJGOztBQWdCQTtFQUVFLDJCQUFBO0VBQTRCLG1CQUFBO0FBYjlCOztBQWVBO0VBQ0UsbUJBQUE7RUFBb0IsZ0NBQUE7RUFBaUMsWUFBQTtFQUFhLGtDQUFBO0FBVHBFOztBQVdBO0VBQ0UsaUNBQUE7RUFBa0MsYUFBQTtFQUFjLGtCQUFBO0FBTmxEOztBQVFBO0VBRUUsYUFBQTtBQU5GOztBQVFBO0VBQ0UsdUJBQUE7RUFBd0Isc0JBQUE7RUFBdUIsdUJBQUE7RUFBd0IsOEJBQUE7QUFGekU7O0FBSUE7RUFDRSx1QkFBQTtFQUF3QixzQkFBQTtFQUF1Qix1QkFBQTtFQUF3Qiw4QkFBQTtBQUV6RTs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EseUVBQUE7RUFDQSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7QUFHRjs7QUFDRTtFQUVFLDJCQUFBO0FBQ0o7O0FBR0E7RUFDRSx1QkFBQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFFQTtFQUVFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFJQTtFQUVFLHNCQUFBO0VBQXVCLG1CQUFBO0VBQW9CLFdBQUE7RUFBWSxZQUFBO0VBQWEsK0JBQUE7RUFBZ0MsZ0JBQUE7QUFHdEc7O0FBQUE7RUFFRSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsMERBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0FBR0Y7O0FBR0E7RUFFRSx3Q0FBQTtBQURGOztBQUdBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUVFLDhCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0FBREY7O0FBSUE7RUFDQSw4QkFBQTtBQURBOztBQUlBO0VBRUUsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFFRSwwQkFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBTUE7RUFFRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFKRjs7QUFNQTtFQUVFLDhCQUFBO0FBSkY7QUFNQTtFQUNFLHNCQUFBO0FBSkY7QUFNQTtFQUNFLHNCQUFBO0FBSkY7O0FBUUE7RUFDRSx5QkFBQTtBQUxGOztBQVFBO0VBRUUsdUJBQUE7QUFORjs7QUFTQTtFQUNFLHNCQUFBO0FBTkY7O0FBU0E7RUFFRSw0Q0FBQTtBQVBGOztBQWFBO0VBRUUsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0FBWEY7O0FBY0E7RUFFRSxhQUFBO0VBQ0EsU0FBQTtBQVpGOztBQWdCQTtFQUVFLFdBQUE7QUFkRjs7QUFpQkE7RUFDRSw4QkFBQTtFQUNBLHdFQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7QUFkRjs7QUFnQkE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7QUFiRjtBQWNFO0VBQ0UsMkNBQUE7QUFaSjs7QUFnQkE7RUFDRSxXQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFiRjs7QUFnQkE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWJBOztBQWdCQTtFQUNFLGFBQUE7QUFiRjs7QUFnQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQWJGIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZVxyXG57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzg1NUVEQiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZ7XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vLyAubmF2LWxpbms6aG92ZXJ7XHJcbi8vICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNnB4IDMwcHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5hdi1qdXN0aWZpZWQgLm5hdi1pdGVtXHJcbntcclxuICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuY2FyZC1oZWFkZXJ7XHJcbiAgcGFkZGluZzogM3B4IDEwcHggM3B4IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taXRlbXtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHggMHB4IDtcclxufVxyXG5cclxuLm5hdnMtbGlua3tcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA0cHggNnB4IDRweCA2cHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgd2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5uYXYtdGFicy1jdXN0b20gLm5hdi1pdGVtIC5uYXZzLWxpbmt7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgIC5uYXZzLWxpbmsuYWN0aXZlXHJcbntcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjNzQ3NDc0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6NHB4IDZweCA0cHggNnB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMTI1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtaXRlbXNcclxue1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM4QjhCOEIgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggI0VDRUNFQyAhaW1wb3J0YW50OyAvKiBTZXQgdGhlIGJvcmRlci1yYWRpdXMgb2YgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCAjRUNFQ0VDICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uT3V0ZXItYm9yZGVyXHJcbntcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICM1OTQ1ODU7Ym9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uT3V0ZXItYm9yZGVyLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiAjRjNGNEY4O2JvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O2hlaWdodDogMzBweDtib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjNTk0NTg1O1xyXG59XHJcbi5teWNhcnQtYm9keXtcclxuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICM1OTQ1ODU7aGVpZ2h0OiAzNTBweDtvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLm15Y2FydC1ib2R5LTJcclxue1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn1cclxuLnBsdXMtY291bnR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7d2lkdGg6IDIycHggIWltcG9ydGFudDtoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtiYWNrZ3JvdW5kOiAjRUNFQ0VDICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1pbnVzLWNvdW50e1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O3dpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogIzg1NUVEQiAhaW1wb3J0YW50O1xyXG59XHJcbi5iYXJjb2RlX2ltZ3tcclxuICBwYWRkaW5nLXJpZ2h0OiAzcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgdG8gbGVhdmUgc3BhY2UgZm9yIHRoZSBpbWFnZVxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFyY29kZV9pbnB1dF90eXBlLnN2ZycpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEyNHB4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGUgcG9zaXRpb24gYXMgbmVlZGVkXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpbWFnZVxyXG59XHJcbi5kcm9wXHJcbntcclxuICAubmctc2VsZWN0LWNvbnRhaW5lclxyXG4gIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctc2VsZWN0LWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbVxyXG57XHJcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udmlld29ubHltb2RlX2hlYWRlclxyXG57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtiYWNrZ3JvdW5kOiAjNTk0NTg1O3dpZHRoOiBhdXRvO2hlaWdodDogMzJweDtib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMHB4O3BhZGRpbmc6IDhweCA5cHg7XHJcbn1cclxuXHJcbi5hZy10aGVtZS1hbHBpbmVcclxue1xyXG4gIC0tYWctcm93LWhvdmVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYWctaGVhZGVyLWJhY2tncm91bmQtY29sb3IgOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbiAgLS1hZy1zZWxlY3RlZC1yb3ctYmFja2dyb3VuZC1jb2xvciA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3d7XHJcbiAgYm9yZGVyLWJvdHRvbSA6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLmFnLXJvdyA6aG92ZXJ7XHJcbi8vICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6bmctZGVlcCAuYWctcm93LXNlbGVjdGVkOjpiZWZvcmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3ctb2Rke1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiNGM0Y0RjggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyIDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1yb3ctZXZlbntcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVye1xyXG5ib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVyLWNlbGwtdGV4dFxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctY2VsbC12YWx1ZVxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvb3Qtd3JhcHBlclxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXJvdy1ncm91cC1leHBhbmRlZFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzhCOEI4QiAhaW1wb3J0YW50O1xyXG5cclxuLmFnLWNlbGwtdmFsdWV7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWctaWNvbi10cmVlLW9wZW57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctZ3JvdXAtY29udHJhY3RlZCAuYWctaWNvbjpob3ZlcntcclxuICBjb2xvcjogIzE4MWQxZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1mb2N1czpub3QoLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQpOmZvY3VzLXdpdGhpblxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaWNvbi1tZW51e1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctZGV0YWlscy1ncmlkIC5hZy10aGVtZS1hbHBpbmV7XHJcbi8vICAuYWctcm9vdC13cmFwcGVyIC5hZy1sYXlvdXQtbm9ybWFsIC5hZy1sdHIgLmFnLXRoZW1lLWFscGluZXtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAvLyAuYWctcm93IDpob3ZlcntcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1yYW5nZS1zaW5nbGUtY2VsbFxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpZGVWaWV3T25seUFyZWFcclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcblxyXG5cclxuLmV4cGFuZFdvcmtBcmVhXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNob3dFeHBhbmRJbWd7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBsZWF2ZSBzcGFjZSBmb3IgdGhlIGltYWdlXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9WaWV3T25seU1vZGVyaWdodC5zdmcnKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBhcyBuZWVkZWRcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGltYWdlXHJcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uVGFic0FsaWdue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDIycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICBtYXJnaW4tbGVmdDogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1ODhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5DaGFuZ2VNYWluVGFie1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5TaG93ZnVsbENhcnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdG9yZUl0ZW17XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcclxuICBwb2ludGVyLWV2ZW50czphbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlZpc2libGVTdG9yZWJ1dHRvbntcclxub3BhY2l0eTogMTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGlkZVN0b3JlSXRlbXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9681:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/procedure-details-intra-procedure/procedure-details-intra-procedure.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureDetailsIntraProcedureComponent: () => (/* binding */ ProcedureDetailsIntraProcedureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _add_quantity_add_quantity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-quantity/add-quantity.component */ 4256);
/* harmony import */ var _drop_down_button_drop_down_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drop-down-button/drop-down-button.component */ 769);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-info/view-info.component */ 3648);












const _c0 = ["StoreItem_Grid"];
const _c1 = ["addnewtem"];
const _c2 = ["addnote"];
const _c3 = ["viewitem"];
function ProcedureDetailsIntraProcedureComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_img_9_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.ShowViewOnlyArea());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsIntraProcedureComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 122)(1, "a", 123)(2, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("nav-link " + x_r14.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", x_r14.template, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", x_r14.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r14.tabs);
  }
}
function ProcedureDetailsIntraProcedureComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 122)(1, "a", 126)(2, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", x_r15.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r15.subtabs);
  }
}
function ProcedureDetailsIntraProcedureComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 122)(1, "a", 130)(2, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", x_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r16.subtabs);
  }
}
function ProcedureDetailsIntraProcedureComponent_li_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 122)(1, "a", 123)(2, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("navs-link " + x_r17.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", x_r17.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r17.subtabs);
  }
}
function ProcedureDetailsIntraProcedureComponent_li_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 122)(1, "a", 126)(2, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", x_r18.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r18.subtabs);
  }
}
function ProcedureDetailsIntraProcedureComponent_div_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 131)(1, "div", 132)(2, "div")(3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 134)(8, "div", 135)(9, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_div_171_Template_img_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const i_r20 = restoredCtx.index;
      const x_r19 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.AddToFavourite(i_r20, x_r19.fav));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h4", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 113)(17, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r19.Item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", x_r19.fav ? "assets/images/favourite_fill.svg" : "assets/images/Fav_stroke.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No :", x_r19.no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("No :", x_r19.size, "");
  }
}
const _c4 = function (a0) {
  return {
    "hideViewOnlyArea": a0
  };
};
const _c5 = function (a0) {
  return {
    "expandWorkArea": a0
  };
};
const _c6 = function (a0) {
  return {
    "TabsAlign": a0
  };
};
const _c7 = function (a0) {
  return {
    "ChangeMainTab": a0
  };
};
const _c8 = function () {
  return {
    ignoreBackdropClick: true
  };
};
class ProcedureDetailsIntraProcedureComponent {
  constructor(http, allService, toastr, formbilder) {
    this.http = http;
    this.allService = allService;
    this.toastr = toastr;
    this.formbilder = formbilder;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.mainTabsValue = [];
    this.subTabs = [];
    this.header_viewOnlymode = [];
    this.myCartData = [];
    this.CurrentPatientDetails = [];
    this.hideViewOnlyMode = true;
    this.StoreItemGridData = [];
    this.isFirstOpen = false;
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: false,
      filter: true
      // floatingFilter: true,
    };

    this.gridOptions1 = {
      defaultColDef: {
        filter: false
      },
      suppressRowClickSelection: true,
      overlayNoRowsTemplate: '<span class="ag-overlay-no-rows-center">Please Wait</span>',
      suppressMenuHide: false,
      rowSelection: 'multiple',
      rowHeight: 35,
      pagination: false,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: false
    };
    this.columnDefs1 = [{
      field: '',
      checkboxSelection: true,
      resizable: false,
      headerCheckboxSelection: true,
      width: 10
    }, {
      field: 'intra_procedure_items.item_number',
      headerName: 'Item No',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'intra_procedure_items.item_number')
    }, {
      field: 'intra_procedure_items.item_name',
      headerName: 'Item Name',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'intra_procedure_items.item_name'),
      onCellClicked: this.cellClicked.bind(this, 'intra_procedure_items.item_name')
    }, {
      field: 'qty',
      headerName: 'Qty',
      cellRenderer: _add_quantity_add_quantity_component__WEBPACK_IMPORTED_MODULE_0__.AddQuantityComponent
    }, {
      field: 'total_no_of_qty',
      headerName: 'Total Qty',
      cellStyle: params => {
        return {
          'text-align': 'center'
        };
      },
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'total_no_of_qty')
    }, {
      field: 'action',
      headerName: 'Action',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: _drop_down_button_drop_down_button_component__WEBPACK_IMPORTED_MODULE_1__.DropDownButtonComponent
    }, {
      field: 'note',
      headerName: 'Note',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'note'),
      onCellClicked: this.cellClicked.bind(this, 'note')
    }];
    this.SelectedItemDetals = [];
    this.Id = [];
    this.Notes_Array = [];
  }
  ngOnInit() {
    this.http.get('assets/json/main-tabs4.json').subscribe(res => {
      this.mainTabsValue = res;
      for (let i = 0; i < res.length; i++) {
        if (res[i].subtabs) {
          this.subTabs.push(res[i].subtabs);
        }
      }
    });
    this.http.get('assets/json/viewOnlyMode.json').subscribe(res => {
      this.header_viewOnlymode = res;
    });
    this.http.get('assets/json/mycart-data.json').subscribe(res => {
      this.myCartData = res;
    });
    this.Addnoteform = this.formbilder.group({
      itemName: [],
      itemNo: [],
      Notes: []
    });
    // if(this.SelectedIndex == 2){
    //   let PatientID = localStorage.getItem('PatientID');
    //   this.allService.GetSpecificPatientDetails(PatientID).subscribe({
    //     next:((res:any)=>{
    //       console.log(res);
    //       if(res.status == 'Success'){
    //        this.CurrentPatientDetails = res.patient;
    //        this.allService.GetIntraProcedureList(PatientID,this.CurrentPatientDetails).subscribe({
    //         next:((res:any)=>{
    //           if(res){
    //             console.log('IntraProcedure',res);
    //           this.StoreItemGridData = res.intra_procedure_index;
    //           this.StoreItem_Grid.api.sizeColumnsToFit();
    //           }
    //         }),
    //         error:((res:any)=>{
    //           this.toastr.error(`Something went wrong`,'UnSuccessful',{
    //             positionClass: 'toast-top-center',
    //             timeOut:2000,
    //           });
    //         })
    //       })
    //       }
    //     }),
    //     error:((res:any)=>{
    //         this.toastr.error(`Something went wrong`,'UnSuccessful',{
    //         positionClass: 'toast-top-center',
    //         timeOut:2000,
    //       });
    //     })
    //   });
    // }
  }

  cellRendered(headerName, params) {
    switch (headerName) {
      case 'intra_procedure_items.item_number':
        {
          return params.value;
        }
      case 'intra_procedure_items.item_name':
        {
          return params.value;
        }
      case 'total_no_of_qty':
        {
          return params.value;
        }
      case 'note':
        {
          return `<img src="assets/images/add-new-item.svg" style="width:16px;height:16px" class="pointer">`;
        }
    }
  }
  cellClicked(headerName, params) {
    switch (headerName) {
      case 'intra_procedure_items.item_name':
        {
          this.viewitem?.show();
          break;
        }
      case 'note':
        {
          console.log(params.data);
          this.SelectedItemDetals = params.data.intra_procedure_items;
          if (this.Id.length > 0) {
            let flag = true;
            this.Id.forEach((element, index) => {
              if (element == params.data?.intra_procedure_items?.id) {
                this.Notes = this.Notes_Array[index];
              }
            });
            this.addnote?.show();
          } else {
            this.addnote.show();
          }
          break;
        }
    }
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
  }
  ngOnChanges(changes) {
    console.log('Intra Changes', changes.SelectedIndex.currentValue);
    if (changes.SelectedIndex.currentValue == 3) {
      this.hideViewOnlyMode = true;
      let PatientID = localStorage.getItem('PatientID');
      let procedurename = localStorage.getItem('Procedure');
      let MRN_NO = localStorage.getItem('MRN_NO');
      setTimeout(() => {
        this.allService.GetIntraProcedureList(PatientID, MRN_NO, procedurename).subscribe({
          next: res => {
            if (res) {
              console.log('IntraProcedure', res);
              this.StoreItemGridData = res.intra_procedure_index;
              this.StoreItem_Grid.api.sizeColumnsToFit();
            }
          },
          error: res => {
            this.toastr.error(`Something went wrong`, 'UnSuccessful', {
              positionClass: 'toast-top-center',
              timeOut: 2000
            });
          }
        });
      }, 1000);
    }
  }
  onSelectionChanged(params) {
    console.log(this.StoreItem_Grid.api?.getSelectedNodes());
    const selectedNodes = this.StoreItem_Grid.api?.getSelectedNodes();
    const selectedData = selectedNodes.map(node => {
      const rowIndex = node.rowIndex;
      const actionCellRendererInstances = this.StoreItem_Grid.api.getCellRendererInstances({
        rowNodes: [node],
        columns: ['action', 'qty']
      });
      // console.log(this.StoreItem_Grid.api.get());
      console.log(typeof actionCellRendererInstances);
      console.log(actionCellRendererInstances);
      //   console.log(actionCellRendererInstances.forEach((value, key) => {
      //     const values = actionCellRendererInstances.entries();
      //     console.log(`${key}: ${values}`);
      //     console.log('KEY',key);
      //     console.log('VALUES',value);
      //   })
      // );
      actionCellRendererInstances.forEach((value, key) => {
        console.log(value);
        console.log(key);
      });
      let actionValue = null;
      // if (actionCellRendererInstances && actionCellRendererInstances.length > 0) {
      //   const actionCellRendererInstance = actionCellRendererInstances[0];
      //   actionValue = actionCellRendererInstance.getValue();
      // }
      const rowData = node.data;
      return {
        ...rowData,
        action: actionValue
      };
    });
    console.log(selectedData);
  }
  AddToFavourite(index, value) {
    this.myCartData[index].fav = !value;
  }
  HideViewOnlyArea() {
    this.hideViewOnlyMode = true;
  }
  ShowViewOnlyArea() {
    this.hideViewOnlyMode = false;
  }
  OpenAddNewItemModal() {
    this.addnewtem?.show();
  }
  // getCellRendererInstances() {
  //   const instances = [];
  //   this.gridApi_1.forEachNode((node) => {
  //     const renderers = this.gridApi_1.getCellRendererInstances({
  //     });
  //     instances.push(renderers[0]);
  //     console.log(renderers);
  //   });
  //   console.log('Cell Renderer Instances:', instances);
  // }
  StoreIntraProcedureCheckOut() {
    let QtyValue = localStorage.getItem('Quantity');
    console.log(parseInt(QtyValue));
    this.onSaveCheckBoxes();
    let itemId = [];
    let Qty = [];
    let action = [];
    const selectedNodes = this.StoreItem_Grid.api?.getRenderedNodes();
    console.log(selectedNodes);
    selectedNodes.map(node => {
      itemId.push(node.data.item_id);
    });
    let actionCellRendererInstances = [];
    const selectedData = selectedNodes.map(node => {
      const rowIndex = node.rowIndex;
      actionCellRendererInstances.push(this.StoreItem_Grid.api.getCellRendererInstances({
        rowNodes: [node],
        columns: ['action', 'qty']
      }));
      //   console.log(actionCellRendererInstances.forEach((value, key) => {
      //     const values = actionCellRendererInstances.entries();
      //     console.log(`${key}: ${values}`);
      //     console.log('KEY',key);
      //     console.log('VALUES',value);
      //   })
      // );
      // actionCellRendererInstances.forEach((value, key) => {
      //   console.log(value);
      //   console.log(key);
      // })
      // let actionValue = null;
      // if (actionCellRendererInstances && actionCellRendererInstances.length > 0) {
      //   const actionCellRendererInstance = actionCellRendererInstances[0];
      //   actionValue = actionCellRendererInstance.getValue();
      // }
      // const rowData = node.data;
      // return {
      //   ...rowData,
      //   action: actionValue
      // };
    });

    console.log(actionCellRendererInstances);
    console.log(typeof actionCellRendererInstances[0]);
    console.log(typeof actionCellRendererInstances[1]);
    Object.keys(actionCellRendererInstances).forEach((value, index) => {
      console.log(value);
      Object.keys(actionCellRendererInstances[index]).forEach((node, index1) => {
        console.log(actionCellRendererInstances[index][node]);
        if (actionCellRendererInstances[index][node].Qty_Value != undefined) {
          Qty.push(actionCellRendererInstances[index][node].Qty_Value);
        }
        if (actionCellRendererInstances[index][node].SelectedValue) {
          action.push(actionCellRendererInstances[index][node].SelectedValue);
        }
      });
    });
    console.log('Item Id', itemId);
    console.log('Qty', Qty);
    console.log('Action', action);
    //Logic for Notes..
    console.log('Notes ID', this.Id);
    console.log('Notes', this.Notes_Array);
    let NewArray = [];
    itemId.forEach(element => {
      NewArray.push('');
    });
    this.Id.forEach((notesid, notesIndex) => {
      let flag = true;
      let Currentindex;
      itemId.map((itemid, itemIndex) => {
        if (notesid == itemid) {
          console.log('itemIndex', itemIndex);
          NewArray.splice(itemIndex, 1, this.Notes_Array[notesIndex]);
        }
      });
    });
    console.log('New Array', NewArray);
    let PatientID = localStorage.getItem('PatientID');
    let procedurename = localStorage.getItem('Procedure');
    let MRN_NO = localStorage.getItem('MRN_NO');
    let AccessionNo = localStorage.getItem('AccessionNo');
    this.allService.StoreIntraProcedure(itemId, Qty, action, NewArray, PatientID, procedurename, MRN_NO, AccessionNo).subscribe({
      next: res => {
        if (res.status == 'Success') {
          console.log(res);
          this.toastr.success(res.message, 'Success', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      },
      error: res => {
        this.toastr.error(`Something went wrong`, 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  SaveNotes(id, notes) {
    console.log(id);
    console.log(notes);
    if (this.Id.length > 0) {
      let flag = true;
      this.Id.forEach((element, index) => {
        if (element == id) {
          flag = false;
          this.Notes_Array.splice(index, 1);
          this.Notes_Array.splice(index, 0, notes);
        }
      });
      if (flag == true) {
        this.Id.push(id);
        this.Notes_Array.push(notes);
      }
    } else {
      this.Id.push(id);
      this.Notes_Array.push(notes);
    }
    console.log('ID', this.Id);
    console.log('Notes', this.Notes_Array);
    this.CloseModal('note');
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.StoreItem_Grid.api.sizeColumnsToFit();
      // this.getCellRendererInstances();
    }, 1000);
  }
  CloseModal(type) {
    switch (type) {
      case 'note':
        {
          this.Notes = '';
          this.addnote?.hide();
          break;
        }
    }
  }
  onSaveCheckBoxes() {
    if (!this.allService.areAllChecked()) {
      this.toastr.error('Please select all checkboxes before saving.', 'UnSuccessful', {
        positionClass: 'toast-top-center',
        timeOut: 5000
      });
    } else {
      this.save.emit(true);
      this.allService.clearCheckBoxes();
    }
  }
  static #_ = this.ɵfac = function ProcedureDetailsIntraProcedureComponent_Factory(t) {
    return new (t || ProcedureDetailsIntraProcedureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_2__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProcedureDetailsIntraProcedureComponent,
    selectors: [["app-procedure-details-intra-procedure"]],
    viewQuery: function ProcedureDetailsIntraProcedureComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addnewtem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addnote = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewitem = _t.first);
      }
    },
    inputs: {
      StageValue: "StageValue",
      SelectedIndex: "SelectedIndex"
    },
    outputs: {
      save: "save"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 338,
    vars: 37,
    consts: [[1, "cards", 2, "border-radius", "10px !important", "border", "1px solid #8B8B8B", "padding", "0px !important", "height", "589px"], [1, "row"], [1, "col-3", "pe-0", 2, "border-right", "1px solid #594585", 3, "ngClass"], [1, "viewonlymode_header", "mb-0"], ["src", "assets/images/ViewOnlyModeleft.svg", 1, "leftexpand", 2, "position", "relative", "top", "43%", "left", "95%", "bottom", "50%", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], [1, "accords", "px-1", 2, "overflow-x", "scroll", "height", "507px"], [1, "col-9", 2, "padding", "0px 0px !important", 3, "ngClass"], ["src", "assets/images/ViewOnlyModeright.svg", "style", "position: relative;top: 280px;left: 13px;cursor: pointer;width: 20px;height: 20px;z-index: 1;", 3, "click", 4, "ngIf"], ["role", "tabpanel", 1, "tab-pane", 3, "ngClass"], ["role", "tablist", 1, "nav", "line-tab", "nav-pills", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "margin-right", "0.66rem", 3, "ngClass"], ["class", "nav-items", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-content", "mt-1", "text-muted"], ["id", "TabContentD1", "role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", "scroll-container", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "overflow-y", "scroll", "border-right", "1px solid #8B8B8B!important", "height", "24px !important"], [1, "tab-content", "px-2", "text-muted"], ["id", "d1-1", "role", "tabpanel", 1, "tab-pane"], ["id", "d1-2", "role", "tabpanel", 1, "tab-pane"], ["id", "d1-3", "role", "tabpanel", 1, "tab-pane"], ["id", "d1-4", "role", "tabpanel", 1, "tab-pane"], ["id", "d1-5", "role", "tabpanel", 1, "tab-pane"], ["id", "d1-6", "role", "tabpanel", 1, "tab-pane"], ["id", "d1-7", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentD2", "role", "tabpanel", 1, "tab-pane"], ["role", "tabpanel", 1, "tab-pane"], [1, "tab-content", "ms-2", "mt-2", "text-muted", "mt-2"], ["id", "2-1", "role", "tabpanel", 1, "tab-pane"], ["id", "2-2", "role", "tabpanel", 1, "tab-pane"], ["id", "2-3", "role", "tabpanel", 1, "tab-pane"], ["id", "2-4", "role", "tabpanel", 1, "tab-pane"], ["id", "2-5", "role", "tabpanel", 1, "tab-pane"], ["id", "2-6", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentD3", "role", "tabpanel", 1, "tab-pane", "active"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "border-right", "1px solid #8B8B8B!important", "height", "24px !important"], [1, "tab-content", "ms-2", "mt-2", "text-muted"], ["id", "d3-1", "role", "tabpanel", 1, "tab-pane"], ["id", "d3-2", "role", "tabpanel", 1, "tab-pane"], ["id", "d3-3", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "p-0"], [1, "col-12"], [1, "ms-1", "me-3", "mt-2", "Outer-border"], [1, "d-flex", "justify-content-between", "flex-wrap", "align-item-center", "p-2", "Outer-border-header"], [1, "mb-0", 2, "font-weight", "500 !important"], [1, "me-2", "pointer", 3, "click"], ["src", "assets/images/add-new-item.svg", 1, "me-2"], [1, "d-flex", "flex-wrap", "align-items-center", "m-2", "px-2", 2, "width", "100%"], [1, "me-2", 2, "width", "25%"], ["type", "text", "placeholder", "scan or type", 1, "form-control-new-sm", 3, "ngClass"], ["placeholder", "Select Category", 1, "form-selects", 2, "width", "100% !important"], [1, "me-2", "ms-auto"], [1, "btn-new", 2, "width", "120px !important", "height", "28px !important", "padding", "1px !important"], [1, "m-2"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "325px", 3, "columnDefs", "gridOptions", "defaultColDef", "rowData", "gridReady", "selectionChanged"], ["StoreItem_Grid", ""], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "p-2", "me-4", "my-2", 2, "background", "#F3F0FC"], [1, ""], [1, "mb-0"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important", 3, "click"], ["id", "TabContentD4", "role", "tabpanel", 1, "tab-pane"], ["id", "d4-1", "role", "tabpanel", 1, "tab-pane"], ["bsModal", "", "role", "dialog", "aria-labelledby", "dialog-nested-name2", 1, "modal", "fade", 3, "config"], ["addnote", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "450px !important"], [1, "modal-content"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "my-3", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [1, "d=flex", "flex-column", "px-3", "py-3"], [1, "d-flex", "flex-row", "mb-4", 2, "width", "100%"], [2, "width", "50%"], ["for", "items_category", 1, "modal-label", "mb-1"], [1, "d-flex", "flex-column", "mb-2", "mt-1", 2, "width", "100%"], ["for", "items_category", 1, "modal-label-edit", "mb-1"], [1, "ms-1", 2, "color", "red !important"], ["placeholder", "Type your comment", 1, "form-control-new", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", 2, "width", "auto !important", 3, "click"], ["addnewtem", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "900px !important"], [1, "modal-content", "p-2"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "mt-3", "mb-2", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "m-2", "Outer-border"], [1, "d-flex", "flex-wrap", "align-item-center", "p-2", "Outer-border-header"], [1, "ms-2"], [1, "row", "mx-2"], [1, "col-5", "my-2", "mycart-body"], ["class", "d-flex flex-column flex-wrap my-3", 4, "ngFor", "ngForOf"], [1, "col-7", "mycart-body-2"], [1, "d-flex", "flex-wrap", "flex-row", "my-2"], [1, "me-2"], ["type", "text", "placeholder", "scan or type", 1, "form-control-new-sm", "barcode_img_1", 2, "width", "30%"], ["placeholder", "Select Category", 1, "form-selects", 2, "width", "30%"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important"], [1, "mt-2", 2, "width", "100%"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "295px", 3, "columnDefs", "gridOptions", "defaultColDef", "rowData", "gridReady"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", 2, "background", "#F3F4F8", "width", "100%", "position", "relative", "bottom", "46px", "border-radius", "0px 0px 10px 13px", "border", "1px solid"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade", 3, "config"], ["viewitem", "bs-modal"], [2, "overflow-y", "scroll !important", "height", "500px"], [1, "row", "mx-2", "mt-3", 2, "flex-wrap", "nowrap !important"], [1, "col-3", "px-2"], [1, "d-flex", "flex-column", "justify-centent-between"], [1, "mb-3"], ["for", "items_category", 1, "modal-label"], ["src", "assets/images/item_image_sample.svg", "width", "207px", "height", "104px"], [1, "col-9", 2, "padding", "0px 0px 0px 84px"], [1, "d-flex", "flex-row", "justify-centent-between", "align-items-center", "mb-3"], [1, "mb-3", "mt-1", 2, "width", "100%"], [1, "", 2, "width", "100%", "margin-bottom", "2.3rem"], ["src", "assets/images/barcode_view.svg", "width", "100px", "height", "45px", 2, "display", "inline-flex"], [1, "row", "mx-2", "mb-3"], [1, "col-4"], [1, "d-flex", "flex-column"], [1, "col-8"], [1, "d-flex"], [1, "d-flex", "flex-row", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", "me-2", 2, "width", "auto !important", 3, "click"], [1, "d-flex", "flex-row"], [1, "previousitem"], ["src", "assets/images/go_previous_patient.svg", "width", "30px", "height", "30px"], [1, "nextitem"], ["src", "assets/images/go_next_patient.svg", "width", "30px", "height", "30px"], ["src", "assets/images/ViewOnlyModeright.svg", 2, "position", "relative", "top", "280px", "left", "13px", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], ["role", "presentation", 1, "nav-items"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 3, "href"], [1, "d-flex", "align-items-center"], ["width", "16px", "height", "16px", 1, "me-2", 3, "src"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", 3, "href"], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "name", "mb-0", 2, "color", "#747474", "font-size", "10px !important"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", "me-2", 3, "href"], [1, "d-flex", "flex-column", "flex-wrap", "my-3"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center", "mb-1"], [1, "mdi", "mdi-trash-can-outline", "pointer"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "pointer", "me-2", 3, "src", "click"], [1, "mx-2", "mb-0"], [1, "btn-new", "plus-count"], [1, "mdi", "mdi-minus", 2, "color", "#000 !important", "font-size", "12px"], [1, "mx-2", 2, "background", "#fff !important"], [1, "btn-new", "minus-count"], [1, "mdi", "mdi-plus", 2, "color", "#fff !important", "font-size", "12px"]],
    template: function ProcedureDetailsIntraProcedureComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "View Other User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_img_click_5_listener() {
          return ctx.HideViewOnlyArea();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-view-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProcedureDetailsIntraProcedureComponent_img_9_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProcedureDetailsIntraProcedureComponent_li_12_Template, 6, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ProcedureDetailsIntraProcedureComponent_li_16_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16)(22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 17)(25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 18)(28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Vetting & Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20)(32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 21)(35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Radiation dose info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 22)(38, "div", 23)(39, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ProcedureDetailsIntraProcedureComponent_li_40_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 26)(46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 27)(49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 28)(52, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Vetting & Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 29)(55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 30)(58, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 31)(61, "div", 23)(62, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ProcedureDetailsIntraProcedureComponent_li_63_Template, 6, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 33)(65, "div", 34)(66, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 35)(69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 36)(72, "div", 37)(73, "div", 1)(74, "div", 38)(75, "div", 39)(76, "div", 40)(77, "div")(78, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_div_click_80_listener() {
          return ctx.OpenAddNewItemModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "h4", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Add new Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 44)(85, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 45)(88, "select", 47)(89, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Large select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Small select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 45)(96, "select", 47)(97, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Large select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Small select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 48)(104, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 50)(107, "ag-grid-angular", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("gridReady", function ProcedureDetailsIntraProcedureComponent_Template_ag_grid_angular_gridReady_107_listener($event) {
          return ctx.onGridReady_1($event);
        })("selectionChanged", function ProcedureDetailsIntraProcedureComponent_Template_ag_grid_angular_selectionChanged_107_listener($event) {
          return ctx.onSelectionChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 53)(110, "div", 54)(111, "h4", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Total selected item : 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 54)(114, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_button_click_114_listener() {
          return ctx.StoreIntraProcedureCheckOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 57)(117, "div", 23)(118, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, ProcedureDetailsIntraProcedureComponent_li_119_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 33)(121, "div", 58)(122, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 59, 60)(126, "div", 61)(127, "div", 62)(128, "div", 63)(129, "h1", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "View Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_img_click_131_listener() {
          return ctx.CloseModal("note");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 66)(133, "div", 67)(134, "div", 68)(135, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 68)(140, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Item No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "div", 70)(145, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Minimum 50 letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "textarea", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProcedureDetailsIntraProcedureComponent_Template_textarea_ngModelChange_149_listener($event) {
          return ctx.Notes = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 74)(151, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_button_click_151_listener() {
          return ctx.SaveNotes(ctx.SelectedItemDetals.id, ctx.Notes);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "div", 59, 76)(155, "div", 77)(156, "div", 78)(157, "div", 79)(158, "h1", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Add new item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_img_click_160_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](154);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r8 == null ? null : _r8.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 80)(162, "div", 81)(163, "div", 68)(164, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "div", 82)(167, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Store Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "div", 83)(170, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](171, ProcedureDetailsIntraProcedureComponent_div_171_Template, 23, 4, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "div", 86)(173, "div", 87)(174, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](175, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 88)(177, "select", 90)(178, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "Large select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "Small select");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "div", 88)(185, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "div", 92)(188, "ag-grid-angular", 93, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("gridReady", function ProcedureDetailsIntraProcedureComponent_Template_ag_grid_angular_gridReady_188_listener($event) {
          return ctx.onGridReady_1($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div", 94)(191, "div")(192, "h4", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "2 Items selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "div")(195, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div", 95, 96)(199, "div", 77)(200, "div", 62)(201, "div", 63)(202, "h1", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](203, "View Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_img_click_204_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](198);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r11 == null ? null : _r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "div", 97)(206, "div", 98)(207, "div", 99)(208, "div", 100)(209, "div", 101)(210, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, "Item:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](212, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "div", 104)(214, "div", 105)(215, "div", 106)(216, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "Item number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "Neurology");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "div", 106)(221, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, "Item name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "ORS juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "div", 105)(226, "div", 107)(227, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228, "Item category");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](230, "ORS Juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "div", 106)(232, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](233, "Barcodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "div", 109)(237, "div", 110)(238, "div", 111)(239, "div", 101)(240, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241, "Procedure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "Cardiology");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "div", 101)(245, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](246, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](248, "100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "div", 101)(250, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "div", 101)(255, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "Min level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258, "52934");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "div", 110)(260, "div", 111)(261, "div", 101)(262, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, "Item Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "In Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "div", 101)(267, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](268, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, "300ml");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "div", 101)(272, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, "Cabinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "div", 101)(277, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](278, "Cat No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, "56954");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "div", 110)(282, "div", 111)(283, "div", 101)(284, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](285, "Vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287, "Flores Junita");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "div", 101)(289, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](290, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "div", 101)(294, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](295, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](297, "14-10-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](298, "div", 101)(299, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, "Lot No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302, "14454");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "div", 109)(304, "div", 112)(305, "div", 113)(306, "div", 101)(307, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](308, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](309, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](310, "#energy #ORS #energy #ORS #energy #ORS #energy #ORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "div", 110)(312, "div", 101)(313, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](314, "Unit No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](316, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "div", 109)(318, "div", 38)(319, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320, "Item description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](322, "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](323, "div", 109)(324, "div", 38)(325, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](326, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "h1", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "div", 114)(330, "div")(331, "button", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcedureDetailsIntraProcedureComponent_Template_button_click_331_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](198);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r11 == null ? null : _r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](332, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "div", 116)(334, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](335, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](336, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](337, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c4, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c5, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hideViewOnlyMode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c6, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c7, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.mainTabsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subTabs[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subTabs[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subTabs[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.hideViewOnlyMode == true ? "barcode_img_lg" : "barcode_img_md");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("rowData", ctx.StoreItemGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subTabs[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.SelectedItemDetals.item_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.SelectedItemDetals.item_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.Notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.myCartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("rowData", ctx.StoreItemGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c8));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridAngular, _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_3__.ViewInfoComponent],
    styles: [".nav-pills .nav-link.active {\n  color: #fff !important;\n  background-color: #855EDB !important;\n  border: none !important;\n  border-radius: 0px 0px 0px 0px !important;\n  height: 32px !important;\n  padding: 5px 30px !important;\n  opacity: 1;\n  width: 100% !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 0px solid !important;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background: #594585 !important;\n  height: 34px !important;\n  border-radius: 0px 10px 0px 0px;\n  text-align: center !important;\n  display: flex !important;\n  flex-wrap: nowrap !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  transition: none !important;\n  transform: none !important;\n  padding: 6px 30px !important;\n  opacity: 1;\n}\n\n  .nav-justified .nav-item {\n  flex-grow: 0 !important;\n}\n\n  .card-header {\n  padding: 3px 10px 3px 10px !important;\n  background: #ECECEC !important;\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 10px 0px;\n}\n\n.navs-link[_ngcontent-%COMP%] {\n  background: none;\n  display: block;\n  transition: none !important;\n  transform: none !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 0.6;\n  width: 125px !important;\n  font-weight: normal !important;\n  white-space: nowrap;\n}\n\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .navs-link[_ngcontent-%COMP%] {\n  border: none;\n}\n\n  .navs-link.active {\n  color: #fff !important;\n  background-color: #747474 !important;\n  border: 1px solid #747474 !important;\n  border-radius: 6px !important;\n  height: 22px !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 1;\n  width: 125px !important;\n  font-weight: bolder !important;\n}\n  .navs-link.active .name {\n  color: #fff !important;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 0;\n  text-align: center;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 4px !important;\n  cursor: pointer !important; \n\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px !important;\n  background: #8B8B8B !important;\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important; \n\n  cursor: pointer !important;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important;\n  border-radius: 10px !important;\n  cursor: pointer !important;\n}\n\n.Outer-border[_ngcontent-%COMP%] {\n  border: 0.5px solid #594585;\n  border-radius: 10px;\n}\n\n.Outer-border-header[_ngcontent-%COMP%] {\n  background: #F3F4F8;\n  border-radius: 10px 10px 0px 0px;\n  height: 30px;\n  border-bottom: 0.5px solid #594585;\n}\n\n.mycart-body[_ngcontent-%COMP%] {\n  border-right: 0.5px solid #594585;\n  height: 350px;\n  overflow-y: scroll;\n}\n\n.mycart-body-2[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.plus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #ECECEC !important;\n}\n\n.minus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #855EDB !important;\n}\n\n.barcode_img_md[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n  background-image: url(\"/assets/images/barcode_input_type.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 160px !important;\n  background-size: 16px 16px !important;\n}\n\n.barcode_img_lg[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n  background-image: url(\"/assets/images/barcode_input_type.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 220px !important;\n  background-size: 16px 16px !important;\n}\n\n.drop[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  min-height: 30px !important;\n}\n\n.viewonlymode_header[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: #594585;\n  width: auto;\n  height: 32px;\n  border-radius: 10px 0px 0px 0px;\n  padding: 8px 9px;\n}\n\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  --ag-row-hover-color: transparent !important;\n  --ag-header-background-color: #594585 !important;\n  --ag-selected-row-background-color: transparent !important;\n}\n\n  .ag-row {\n  border-bottom: none !important;\n}\n\n  .ag-row-selected::before {\n  background-color: transparent !important;\n}\n\n  .ag-row-odd {\n  margin: 10px 0px !important;\n  background: #F3F4F8 !important;\n  z-index: 2;\n}\n\n  .ag-row-even {\n  margin: 10px 0px !important;\n  background: none !important;\n}\n\n  .ag-header-viewport {\n  background: #594585 !important;\n  border: none !important;\n}\n\n  .ag-header-viewport:hover {\n  background: #594585 !important;\n}\n\n  .ag-header {\n  border-bottom: none !important;\n}\n\n  .ag-header-cell-text {\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  font-size: 10px !important;\n  font-weight: 400 !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  border-radius: 15px;\n  font-family: poppins !important;\n}\n\n  .ag-row-group-expanded {\n  background: #8B8B8B !important;\n}\n  .ag-row-group-expanded .ag-cell-value {\n  color: #fff !important;\n}\n  .ag-row-group-expanded .ag-icon-tree-open {\n  color: #fff !important;\n}\n\n  .ag-theme-alpine .ag-group-contracted .ag-icon:hover {\n  color: #181d1f !important;\n}\n\n  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within {\n  border: none !important;\n}\n\n  .ag-icon-menu {\n  color: #fff !important;\n}\n\n  .ag-details-grid .ag-theme-alpine {\n  --ag-row-hover-color: transparent !important;\n}\n\n  .ag-ltr .ag-cell-range-single-cell {\n  border: none !important;\n  background: transparent !important;\n  --ag-row-hover-color: transparent !important;\n}\n\n.hideViewOnlyArea[_ngcontent-%COMP%] {\n  display: none;\n  width: 1%;\n}\n\n.expandWorkArea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.showExpandImg[_ngcontent-%COMP%] {\n  padding-right: 40px !important;\n  background-image: url(\"/assets/images/ViewOnlyModeright.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 0px !important;\n  background-size: 16px 16px !important;\n  z-index: 1 !important;\n}\n\n.TabsAlign[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 22px;\n  border-left: 1px solid;\n  margin-left: 1.4rem !important;\n  height: 588px !important;\n}\n\n.ChangeMainTab[_ngcontent-%COMP%] {\n  margin-left: 0.66rem !important;\n  margin-right: 0.66rem !important;\n  border-radius: 10px 10px 0px 0px !important;\n}\n.ChangeMainTab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px !important;\n}\n\n.ShowfullCart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.storeItem[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n\n.VisibleStorebutton[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.hideStoreItem[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  width: 600px;\n  height: auto;\n}\n\n.barcode_img_1[_ngcontent-%COMP%] {\n  padding-right: 10px !important;\n  background-image: url(/assets/images/barcode_input_type.svg) !important;\n  background-repeat: no-repeat !important;\n  background-position: 130px !important;\n  background-size: 16px 16px !important;\n}\n\n[_nghost-%COMP%]     .ag-body-horizontal-scroll {\n  position: relative !important;\n  bottom: 45px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvcHJvY2VkdXJlLWRldGFpbHMtaW50cmEtcHJvY2VkdXJlL3Byb2NlZHVyZS1kZXRhaWxzLWludHJhLXByb2NlZHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUFGOztBQVdBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBUkY7O0FBV0E7RUFFRSx1QkFBQTtBQVRGOztBQWFBO0VBQ0UscUNBQUE7RUFDQSw4QkFBQTtBQVZGOztBQWFBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWFBO0VBQ0UsWUFBQTtBQVZGOztBQWFBO0VBRUUsc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUFYRjtBQWFFO0VBQ0Usc0JBQUE7QUFYSjs7QUFlQTtFQUVFLGFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFiSjs7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUEsRUFBQSxtQ0FBQTtBQWJGOztBQWdCQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvREFBQSxFQUFBLGlEQUFBO0VBQ0EsMEJBQUE7QUFiRjs7QUFnQkE7RUFDRSxvREFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUFiRjs7QUFnQkE7RUFFRSwyQkFBQTtFQUE0QixtQkFBQTtBQWI5Qjs7QUFlQTtFQUNFLG1CQUFBO0VBQW9CLGdDQUFBO0VBQWlDLFlBQUE7RUFBYSxrQ0FBQTtBQVRwRTs7QUFXQTtFQUNFLGlDQUFBO0VBQWtDLGFBQUE7RUFBYyxrQkFBQTtBQU5sRDs7QUFRQTtFQUVFLGFBQUE7QUFORjs7QUFRQTtFQUNFLHVCQUFBO0VBQXdCLHNCQUFBO0VBQXVCLHVCQUFBO0VBQXdCLDhCQUFBO0FBRnpFOztBQUlBO0VBQ0UsdUJBQUE7RUFBd0Isc0JBQUE7RUFBdUIsdUJBQUE7RUFBd0IsOEJBQUE7QUFFekU7O0FBQUE7RUFDRSw4QkFBQTtFQUNBLHlFQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0FBR0Y7O0FBREE7RUFDRSw4QkFBQTtFQUNBLHlFQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0FBSUY7O0FBQUU7RUFFRSwyQkFBQTtBQUVKOztBQUVBO0VBRUUsc0JBQUE7RUFBdUIsbUJBQUE7RUFBb0IsV0FBQTtFQUFZLFlBQUE7RUFBYSwrQkFBQTtFQUFnQyxnQkFBQTtBQUt0Rzs7QUFGQTtFQUVFLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwwREFBQTtBQUlGOztBQUZBO0VBQ0UsOEJBQUE7QUFLRjs7QUFDQTtFQUVFLHdDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtBQUVGOztBQUNBO0VBRUUsOEJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNBLDhCQUFBO0FBQ0E7O0FBRUE7RUFFRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUVFLDBCQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUVFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUZGOztBQUlBO0VBRUUsOEJBQUE7QUFGRjtBQUlBO0VBQ0Usc0JBQUE7QUFGRjtBQUlBO0VBQ0Usc0JBQUE7QUFGRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFFRSx1QkFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFPQTtFQUVFLDRDQUFBO0FBTEY7O0FBV0E7RUFFRSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7QUFURjs7QUFZQTtFQUVFLGFBQUE7RUFDQSxTQUFBO0FBVkY7O0FBY0E7RUFFRSxXQUFBO0FBWkY7O0FBZUE7RUFDRSw4QkFBQTtFQUNBLHdFQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7QUFaRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQVpGOztBQWNBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0FBWEY7QUFZRTtFQUNFLDJDQUFBO0FBVko7O0FBY0E7RUFDRSxXQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVhGOztBQWNBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFYQTs7QUFjQTtFQUNFLGFBQUE7QUFYRjs7QUFjQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSw4QkFBQTtFQUNBLHVFQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0FBWEY7O0FBY0E7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0FBWEYiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlXHJcbntcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4IDMwcHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbmt7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdntcclxuICBiYWNrZ3JvdW5kOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8vIC5uYXYtbGluazpob3ZlcntcclxuLy8gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5uYXYtbGlua3tcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA2cHggMzBweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmF2LWp1c3RpZmllZCAubmF2LWl0ZW1cclxue1xyXG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5jYXJkLWhlYWRlcntcclxuICBwYWRkaW5nOiAzcHggMTBweCAzcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNFQ0VDRUMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi1pdGVte1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweCAwcHggO1xyXG59XHJcblxyXG4ubmF2cy1saW5re1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDRweCA2cHggNHB4IDZweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICB3aWR0aDogMTI1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm5hdi10YWJzLWN1c3RvbSAubmF2LWl0ZW0gLm5hdnMtbGlua3tcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLm5hdnMtbGluay5hY3RpdmVcclxue1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICM3NDc0NzQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzQ3NDc0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzo0cHggNnB4IDRweCA2cHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAxMjVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcclxuXHJcbiAgLm5hbWV7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdi1pdGVtc1xyXG57XHJcbiAgZmxleC1iYXNpczogMDtcclxuICAgIGZsZXgtZ3JvdzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cclxufVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogIzhCOEI4QiAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCAjRUNFQ0VDICFpbXBvcnRhbnQ7IC8qIFNldCB0aGUgYm9yZGVyLXJhZGl1cyBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iICovXHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICNFQ0VDRUMgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5PdXRlci1ib3JkZXJcclxue1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzU5NDU4NTtib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5PdXRlci1ib3JkZXItaGVhZGVye1xyXG4gIGJhY2tncm91bmQ6ICNGM0Y0Rjg7Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7aGVpZ2h0OiAzMHB4O2JvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM1OTQ1ODU7XHJcbn1cclxuLm15Y2FydC1ib2R5e1xyXG4gIGJvcmRlci1yaWdodDogMC41cHggc29saWQgIzU5NDU4NTtoZWlnaHQ6IDM1MHB4O292ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4ubXljYXJ0LWJvZHktMlxyXG57XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4ucGx1cy1jb3VudHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDt3aWR0aDogMjJweCAhaW1wb3J0YW50O2hlaWdodDogMThweCAhaW1wb3J0YW50O2JhY2tncm91bmQ6ICNFQ0VDRUMgIWltcG9ydGFudDtcclxufVxyXG4ubWludXMtY291bnR7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7d2lkdGg6IDIycHggIWltcG9ydGFudDtoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtiYWNrZ3JvdW5kOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhcmNvZGVfaW1nX21ke1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgdG8gbGVhdmUgc3BhY2UgZm9yIHRoZSBpbWFnZVxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFyY29kZV9pbnB1dF90eXBlLnN2ZycpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE2MHB4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGUgcG9zaXRpb24gYXMgbmVlZGVkXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpbWFnZVxyXG59XHJcbi5iYXJjb2RlX2ltZ19sZ3tcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGlzIHZhbHVlIHRvIGxlYXZlIHNwYWNlIGZvciB0aGUgaW1hZ2VcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhcmNvZGVfaW5wdXRfdHlwZS5zdmcnKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMjBweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhlIHBvc2l0aW9uIGFzIG5lZWRlZFxyXG4gIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2VcclxufVxyXG4uZHJvcFxyXG57XHJcbiAgLm5nLXNlbGVjdC1jb250YWluZXJcclxuICB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udmlld29ubHltb2RlX2hlYWRlclxyXG57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtiYWNrZ3JvdW5kOiAjNTk0NTg1O3dpZHRoOiBhdXRvO2hlaWdodDogMzJweDtib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMHB4O3BhZGRpbmc6IDhweCA5cHg7XHJcbn1cclxuXHJcbi5hZy10aGVtZS1hbHBpbmVcclxue1xyXG4gIC0tYWctcm93LWhvdmVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYWctaGVhZGVyLWJhY2tncm91bmQtY29sb3IgOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbiAgLS1hZy1zZWxlY3RlZC1yb3ctYmFja2dyb3VuZC1jb2xvciA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3d7XHJcbiAgYm9yZGVyLWJvdHRvbSA6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLmFnLXJvdyA6aG92ZXJ7XHJcbi8vICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6bmctZGVlcCAuYWctcm93LXNlbGVjdGVkOjpiZWZvcmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3ctb2Rke1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiNGM0Y0RjggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyIDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1yb3ctZXZlbntcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVye1xyXG5ib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVyLWNlbGwtdGV4dFxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctY2VsbC12YWx1ZVxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvb3Qtd3JhcHBlclxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXJvdy1ncm91cC1leHBhbmRlZFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzhCOEI4QiAhaW1wb3J0YW50O1xyXG5cclxuLmFnLWNlbGwtdmFsdWV7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWctaWNvbi10cmVlLW9wZW57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctZ3JvdXAtY29udHJhY3RlZCAuYWctaWNvbjpob3ZlcntcclxuICBjb2xvcjogIzE4MWQxZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1mb2N1czpub3QoLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQpOmZvY3VzLXdpdGhpblxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaWNvbi1tZW51e1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctZGV0YWlscy1ncmlkIC5hZy10aGVtZS1hbHBpbmV7XHJcbi8vICAuYWctcm9vdC13cmFwcGVyIC5hZy1sYXlvdXQtbm9ybWFsIC5hZy1sdHIgLmFnLXRoZW1lLWFscGluZXtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAvLyAuYWctcm93IDpob3ZlcntcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1yYW5nZS1zaW5nbGUtY2VsbFxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpZGVWaWV3T25seUFyZWFcclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcblxyXG5cclxuLmV4cGFuZFdvcmtBcmVhXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNob3dFeHBhbmRJbWd7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBsZWF2ZSBzcGFjZSBmb3IgdGhlIGltYWdlXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9WaWV3T25seU1vZGVyaWdodC5zdmcnKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBhcyBuZWVkZWRcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGltYWdlXHJcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uVGFic0FsaWdue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDIycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICBtYXJnaW4tbGVmdDogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1ODhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5DaGFuZ2VNYWluVGFie1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5TaG93ZnVsbENhcnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdG9yZUl0ZW17XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcclxuICBwb2ludGVyLWV2ZW50czphbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlZpc2libGVTdG9yZWJ1dHRvbntcclxub3BhY2l0eTogMTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGlkZVN0b3JlSXRlbXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYmFyY29kZV9pbWdfMXtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JhcmNvZGVfaW5wdXRfdHlwZS5zdmcpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hZy1ib2R5LWhvcml6b250YWwtc2Nyb2xse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIGJvdHRvbTogNDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2430:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/procedure-details-post-procedure/procedure-details-post-procedure.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureDetailsPostProcedureComponent: () => (/* binding */ ProcedureDetailsPostProcedureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-info/view-info.component */ 3648);









const _c0 = ["StoreItem_Grid_1"];
const _c1 = ["StoreItem_Grid_2"];
const _c2 = ["StoreItem_Grid_3"];
const _c3 = ["StoreItem_Grid_4"];
const _c4 = ["viewnote"];
const _c5 = ["viewitem"];
function ProcedureDetailsPostProcedureComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_img_9_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.ShowViewOnlyArea());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsPostProcedureComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 121)(1, "a", 122)(2, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("nav-link " + x_r14.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r14.template, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", x_r14.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r14.tabs);
  }
}
function ProcedureDetailsPostProcedureComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 121)(1, "a", 125)(2, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r15.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r15.subtabs);
  }
}
function ProcedureDetailsPostProcedureComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 121)(1, "a", 129)(2, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r16.subtabs);
  }
}
function ProcedureDetailsPostProcedureComponent_li_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 121)(1, "a", 122)(2, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("navs-link " + x_r17.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r17.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r17.subtabs);
  }
}
function ProcedureDetailsPostProcedureComponent_li_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 121)(1, "a", 125)(2, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r18.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r18.subtabs);
  }
}
const _c6 = function (a0) {
  return {
    "hideViewOnlyArea": a0
  };
};
const _c7 = function (a0) {
  return {
    "expandWorkArea": a0
  };
};
const _c8 = function (a0) {
  return {
    "TabsAlign": a0
  };
};
const _c9 = function (a0) {
  return {
    "ChangeMainTab": a0
  };
};
const _c10 = function () {
  return {
    ignoreBackdropClick: true
  };
};
class ProcedureDetailsPostProcedureComponent {
  constructor(http, allService, toastr) {
    this.http = http;
    this.allService = allService;
    this.toastr = toastr;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.mainTabsValue = [];
    this.subTabs = [];
    this.header_viewOnlymode = [];
    this.myCartData = [];
    this.hideViewOnlyMode = true;
    this.StoreItemGridData = [];
    this.isFirstOpen = false;
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: false,
      filter: true
      // floatingFilter: true,
    };

    this.gridOptions1 = {
      defaultColDef: {
        filter: false
      },
      overlayNoRowsTemplate: '<span class="ag-overlay-no-rows-center">No rows to show</span>',
      suppressMenuHide: false,
      rowSelection: 'multiple',
      rowHeight: 35,
      pagination: false,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: false
    };
    this.columnDefs1 = [];
    this.SelectedItem = [];
  }
  ngOnInit() {
    this.http.get('assets/json/main-tabs5.json').subscribe(res => {
      this.mainTabsValue = res;
      for (let i = 0; i < res.length; i++) {
        if (res[i].subtabs) {
          this.subTabs.push(res[i].subtabs);
        }
      }
    });
    this.http.get('assets/json/viewOnlyMode.json').subscribe(res => {
      this.header_viewOnlymode = res;
    });
  }
  cellRendered(headerName, params) {
    switch (headerName) {
      case 'item.item_number':
        {
          return params.value;
        }
      case 'item.item_name':
        {
          return params.value;
        }
      case 'item.size':
        {
          return params.value;
        }
      case 'no_of_qty':
        {
          return params.value;
        }
      case 'notes':
        {
          return `<button class="btn-new" style="width: 70px !important;
        height: 26px !important;
        padding: 4px 8px 5px 8px !important;">View Note</button>`;
        }
    }
  }
  cellClicked(headerName, params) {
    switch (headerName) {
      case 'item.item_name':
        {
          this.viewitem?.show();
          this.OpenModal('');
          break;
        }
      case 'notes':
        {
          console.log(params.data);
          this.SelectedItem = params.data;
          this.OpenModal('Notes');
          break;
        }
    }
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
  }
  onSelectionChanged(params) {}
  AddToFavourite(index, value) {
    this.myCartData[index].fav = !value;
  }
  HideViewOnlyArea() {
    this.hideViewOnlyMode = true;
  }
  ShowViewOnlyArea() {
    this.hideViewOnlyMode = false;
  }
  ngOnChanges(changes) {
    console.log('Post Changes', changes.SelectedIndex.currentValue);
    if (changes.SelectedIndex.currentValue == 4) {
      console.log('ininini');
      this.SwitchTab('Used');
      this.hideViewOnlyMode = true;
    }
  }
  SwitchTab(type) {
    let PatientID = localStorage.getItem('PatientID');
    let procedurename = localStorage.getItem('Procedure');
    switch (type) {
      case 'Used':
        {
          this.columnDefs1 = [{
            field: 'item.item_number',
            headerName: 'Item No',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_number')
          }, {
            field: 'item.item_name',
            headerName: 'Item Name',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_name'),
            onCellClicked: this.cellClicked.bind(this, 'item.item_name')
          }, {
            field: 'item.size',
            headerName: 'Size',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.size')
          }, {
            field: 'no_of_qty',
            headerName: 'Quantity',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'no_of_qty')
          }, {
            field: 'notes',
            headerName: 'Note',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'notes'),
            onCellClicked: this.cellClicked.bind(this, 'notes')
          }];
          this.allService.GetPreProcedureUsedGridData(PatientID, procedurename).subscribe({
            next: res => {
              if (res.status == 'Success') {
                console.log(res);
                this.StoreItem_Grid_1.api?.setRowData(res.used_data);
                this.StoreItem_Grid_1.api?.sizeColumnsToFit();
              }
            },
            error: res => {
              this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          break;
        }
      case 'Returned':
        {
          this.columnDefs1 = [{
            field: 'item.item_number',
            headerName: 'Item No',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_number')
          }, {
            field: 'item.item_name',
            headerName: 'Item Name',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_name'),
            onCellClicked: this.cellClicked.bind(this, 'item.item_name')
          }, {
            field: 'item.size',
            headerName: 'Size',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.size')
          }, {
            field: 'no_of_qty',
            headerName: 'Quantity',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'no_of_qty')
          }, {
            field: 'notes',
            headerName: 'Note',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'notes'),
            onCellClicked: this.cellClicked.bind(this, 'notes')
          }];
          this.allService.GetProcedureReturnedGridData(PatientID, procedurename).subscribe({
            next: res => {
              if (res.status == 'Success') {
                console.log(res);
                this.StoreItem_Grid_2.api?.setRowData(res.returned_data);
                this.StoreItem_Grid_2.api?.sizeColumnsToFit();
              }
            },
            error: res => {
              this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          break;
        }
      case 'Damaged':
        {
          this.columnDefs1 = [{
            field: 'item.item_number',
            headerName: 'Item No',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_number')
          }, {
            field: 'item.item_name',
            headerName: 'Item Name',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_name'),
            onCellClicked: this.cellClicked.bind(this, 'item.item_name')
          }, {
            field: 'item.size',
            headerName: 'Size',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.size')
          }, {
            field: 'no_of_qty',
            headerName: 'Quantity',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'no_of_qty')
          }, {
            field: 'notes',
            headerName: 'Note',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'notes'),
            onCellClicked: this.cellClicked.bind(this, 'notes')
          }];
          this.allService.GetProcedureDamagedGridData(PatientID, procedurename).subscribe({
            next: res => {
              if (res.status == 'Success') {
                console.log(res);
                this.StoreItem_Grid_3.api?.setRowData(res.damaged_data);
                this.StoreItem_Grid_3.api?.sizeColumnsToFit();
              }
            },
            error: res => {
              this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          break;
        }
      case 'Waste':
        {
          this.columnDefs1 = [{
            field: 'item.item_number',
            headerName: 'Item No',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_number')
          }, {
            field: 'item.item_name',
            headerName: 'Item Name',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.item_name'),
            onCellClicked: this.cellClicked.bind(this, 'item.item_name')
          }, {
            field: 'item.size',
            headerName: 'Size',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'item.size')
          }, {
            field: 'no_of_qty',
            headerName: 'Quantity',
            width: 100,
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'no_of_qty')
          }, {
            field: 'notes',
            headerName: 'Note',
            filter: "agTextColumnFilter",
            suppressMenu: false,
            cellRenderer: this.cellRendered.bind(this, 'notes'),
            onCellClicked: this.cellClicked.bind(this, 'notes')
          }];
          this.allService.GetProcedureWastedGridData(PatientID, procedurename).subscribe({
            next: res => {
              if (res.status == 'Success') {
                console.log(res);
                this.StoreItem_Grid_4.api?.setRowData(res.wasted_data);
                this.StoreItem_Grid_4.api?.sizeColumnsToFit();
              }
            },
            error: res => {
              this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          break;
        }
    }
  }
  OpenModal(type) {
    switch (type) {
      case 'Notes':
        {
          this.viewnote?.show();
          break;
        }
      case 'viewItem':
        {
          this.viewitem?.show();
          break;
        }
    }
  }
  CloseModal(type) {
    switch (type) {
      case 'Notes':
        {
          this.viewnote?.hide();
          break;
        }
      case 'viewItem':
        {
          this.viewitem?.hide();
          break;
        }
    }
  }
  ngAfterViewInit() {}
  onSaveCheckBoxes() {
    if (!this.allService.areAllChecked()) {
      this.toastr.error('Please select all checkboxes before saving.', 'UnSuccessful', {
        positionClass: 'toast-top-center',
        timeOut: 5000
      });
    } else {
      this.save.emit(true);
      this.allService.clearCheckBoxes();
    }
  }
  static #_ = this.ɵfac = function ProcedureDetailsPostProcedureComponent_Factory(t) {
    return new (t || ProcedureDetailsPostProcedureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProcedureDetailsPostProcedureComponent,
    selectors: [["app-procedure-details-post-procedure"]],
    viewQuery: function ProcedureDetailsPostProcedureComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid_1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid_2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid_3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid_4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.viewnote = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.viewitem = _t.first);
      }
    },
    inputs: {
      StageValue: "StageValue",
      SelectedIndex: "SelectedIndex"
    },
    outputs: {
      save: "save"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 340,
    vars: 37,
    consts: [[1, "cards", 2, "border-radius", "10px !important", "border", "1px solid #8B8B8B", "padding", "0px !important", "height", "589px"], [1, "row"], [1, "col-3", "pe-0", 2, "border-right", "1px solid #594585", 3, "ngClass"], [1, "viewonlymode_header", "mb-0"], ["src", "assets/images/ViewOnlyModeleft.svg", 1, "leftexpand", 2, "position", "relative", "top", "43%", "left", "95%", "bottom", "50%", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], [1, "accords", "px-1", 2, "overflow-x", "scroll", "height", "507px"], [1, "col-9", 2, "padding", "0px 0px !important", 3, "ngClass"], ["src", "assets/images/ViewOnlyModeright.svg", "style", "position: relative;top: 280px;left: 13px;cursor: pointer;width: 20px;height: 20px;z-index: 1;", 3, "click", 4, "ngIf"], ["role", "tabpanel", 1, "tab-pane", 3, "ngClass"], ["role", "tablist", 1, "nav", "line-tab", "nav-pills", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "margin-right", "0.66rem", 3, "ngClass"], ["class", "nav-items", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-content", "mt-1", "text-muted"], ["id", "TabContentE1", "role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", "scroll-container", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "overflow-y", "scroll", "border-right", "1px solid #8B8B8B!important"], [1, "tab-content", "px-2", "text-muted"], ["id", "e1-1", "role", "tabpanel", 1, "tab-pane"], ["id", "e1-2", "role", "tabpanel", 1, "tab-pane"], ["id", "e1-3", "role", "tabpanel", 1, "tab-pane"], ["id", "e1-4", "role", "tabpanel", 1, "tab-pane"], ["id", "e1-5", "role", "tabpanel", 1, "tab-pane"], ["id", "e1-6", "role", "tabpanel", 1, "tab-pane"], ["id", "e1-7", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentE2", "role", "tabpanel", 1, "tab-pane"], ["role", "tabpanel", 1, "tab-pane"], [1, "tab-content", "ms-2", "mt-2", "text-muted", "mt-2"], ["id", "e2-1", "role", "tabpanel", 1, "tab-pane"], ["id", "e2-2", "role", "tabpanel", 1, "tab-pane"], ["id", "e2-3", "role", "tabpanel", 1, "tab-pane"], ["id", "e2-4", "role", "tabpanel", 1, "tab-pane"], ["id", "e2-5", "role", "tabpanel", 1, "tab-pane"], ["id", "e2-6", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentE3", "role", "tabpanel", 1, "tab-pane", "active"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "border-right", "1px solid #8B8B8B!important", "height", "24px !important"], [1, "tab-content", "ms-2", "mt-2", "text-muted"], ["id", "e3-1", "role", "tabpanel", 1, "tab-pane"], ["id", "e3-2", "role", "tabpanel", 1, "tab-pane"], ["id", "e3-3", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "p-0"], [1, "col-12"], [1, "ms-1", "me-3", "mt-2", "Outer-border"], [1, "d-flex", "justify-content-between", "flex-wrap", "align-item-center", "p-2", "Outer-border-header"], [1, "mb-0", 2, "font-weight", "500 !important"], ["role", "tabpanel", 1, "tab-pane", "active", "show"], ["role", "tabpanel", 1, "tab-pane", 2, "width", "100% !important"], ["role", "tablist", 1, "nav", "line-tab", "px-1", "nav-tabs", "nav-tabs-custom", "nav-justified", "m-1", "mt-2", 2, "background", "#F3F4F8 !important", "width", "360px !important", "height", "25px !important", "white-space", "nowrap", "border", "1px solid #F3F4F8", "border-radius", "12px !important", "align-items", "center", "padding", "0px 5px !important", "height", "auto !important"], ["role", "presentation", 1, "nav-item", 2, "height", "20px !important", 3, "click"], ["data-bs-toggle", "tab", "href", "#used", "role", "tab", "aria-selected", "true", 1, "navs-links", "active", 2, "white-space", "nowrap"], [1, "d-flex", "flex-row"], [1, "d-none", "d-sm-block", "mb-0", "details_tab", 2, "color", "#747474"], ["data-bs-toggle", "tab", "href", "#returned", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "navs-links", 2, "white-space", "nowrap"], ["data-bs-toggle", "tab", "href", "#damaged", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "navs-links", 2, "white-space", "nowrap"], ["role", "presentation", 1, "nav-item", 3, "click"], ["data-bs-toggle", "tab", "href", "#waste", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "navs-links", 2, "white-space", "nowrap"], [1, "tab-content", "p-1", "text-muted"], ["id", "used", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "my-2", "p-1", 2, "background-color", "#F3F4F8"], [1, "modal-label-edit"], [1, "d-flex", "justify-content-start"], [1, ""], ["type", "text", "placeholder", "scan or type", 1, "form-control-new-sm", "barcode_img"], [1, "ms-2"], [1, "btn-new", 2, "padding", "4px !important", "width", "65px !important", "height", "26px !important"], [1, "m-2"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "252px", "position", "relative !important", 3, "columnDefs", "gridOptions", "defaultColDef", "gridReady", "selectionChanged"], ["StoreItem_Grid_1", ""], ["id", "returned", "role", "tabpanel", 1, "tab-pane"], ["StoreItem_Grid_2", ""], ["id", "damaged", "role", "tabpanel", 1, "tab-pane"], ["StoreItem_Grid_3", ""], ["id", "waste", "role", "tabpanel", 1, "tab-pane"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "252px", "position", "relative !important", 3, "columnDefs", "gridOptions", "defaultColDef"], ["StoreItem_Grid_4", ""], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "p-2", "me-4", "my-2", 2, "background", "#F3F0FC"], [1, "mb-0"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important", 3, "click"], ["id", "TabContentE4", "role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "border-right", "1px solid #8B8B8B!important"], ["id", "e4-1", "role", "tabpanel", 1, "tab-pane"], ["bsModal", "", "role", "dialog", "aria-labelledby", "dialog-nested-name2", 1, "modal", "fade", 3, "config"], ["viewnote", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "450px !important"], [1, "modal-content"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "my-3", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [1, "d=flex", "flex-column", "px-3", "py-3"], [1, "d-flex", "flex-row", "mb-4", 2, "width", "100%"], [2, "width", "50%"], ["for", "items_category", 1, "modal-label", "mb-1"], [1, "", 2, "font-weight", "500 !important"], [1, "d-flex", "flex-column", "mb-2", "mt-1", 2, "width", "100%"], [2, "font-weight", "500 !important"], [1, "d-flex", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", 2, "width", "auto !important", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade", 3, "config"], ["viewitem", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "900px !important"], [2, "overflow-y", "scroll !important", "height", "500px"], [1, "row", "mx-2", "mt-3", 2, "flex-wrap", "nowrap !important"], [1, "col-3", "px-2"], [1, "d-flex", "flex-column", "justify-centent-between"], [1, "mb-3"], ["for", "items_category", 1, "modal-label"], ["src", "assets/images/item_image_sample.svg", "width", "207px", "height", "104px"], [1, "col-9", 2, "padding", "0px 0px 0px 84px"], [1, "d-flex", "flex-row", "justify-centent-between", "align-items-center", "mb-3"], [1, "mb-3", "mt-1", 2, "width", "100%"], [1, "", 2, "width", "100%", "margin-bottom", "2.3rem"], ["src", "assets/images/barcode_view.svg", "width", "100px", "height", "45px", 2, "display", "inline-flex"], [1, "row", "mx-2", "mb-3"], [1, "col-4"], [1, "d-flex", "flex-column"], [1, "col-8"], [1, "d-flex"], [1, "d-flex", "flex-row", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", "me-2", 2, "width", "auto !important", 3, "click"], [1, "previousitem"], ["src", "assets/images/go_previous_patient.svg", "width", "30px", "height", "30px"], [1, "nextitem"], ["src", "assets/images/go_next_patient.svg", "width", "30px", "height", "30px"], ["src", "assets/images/ViewOnlyModeright.svg", 2, "position", "relative", "top", "280px", "left", "13px", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], ["role", "presentation", 1, "nav-items"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 3, "href"], [1, "d-flex", "align-items-center"], ["width", "16px", "height", "16px", 1, "me-2", 3, "src"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", 3, "href"], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "name", "mb-0", 2, "color", "#747474", "font-size", "10px !important"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", "me-2", 3, "href"]],
    template: function ProcedureDetailsPostProcedureComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "View Other User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_img_click_5_listener() {
          return ctx.HideViewOnlyArea();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-view-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProcedureDetailsPostProcedureComponent_img_9_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProcedureDetailsPostProcedureComponent_li_12_Template, 6, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProcedureDetailsPostProcedureComponent_li_16_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18)(28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Vetting & Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20)(32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21)(35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Radiation dose info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 22)(38, "div", 23)(39, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProcedureDetailsPostProcedureComponent_li_40_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 26)(46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 27)(49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 28)(52, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Vetting & Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 29)(55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 30)(58, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 31)(61, "div", 23)(62, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ProcedureDetailsPostProcedureComponent_li_63_Template, 6, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 33)(65, "div", 34)(66, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 35)(69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 36)(72, "div", 37)(73, "div", 1)(74, "div", 38)(75, "div", 39)(76, "div", 40)(77, "div")(78, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 42)(81, "div", 43)(82, "ul", 44)(83, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_li_click_83_listener() {
          return ctx.SwitchTab("Used");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 46)(85, "div", 47)(86, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_li_click_88_listener() {
          return ctx.SwitchTab("Returned");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "a", 49)(90, "div", 47)(91, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Returned");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_li_click_93_listener() {
          return ctx.SwitchTab("Damaged");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "a", 50)(95, "div", 47)(96, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Damaged");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_li_click_98_listener() {
          return ctx.SwitchTab("Waste");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "a", 52)(100, "div", 47)(101, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Waste");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 53)(104, "div", 54)(105, "div", 55)(106, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 57)(109, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 60)(112, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 62)(115, "ag-grid-angular", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function ProcedureDetailsPostProcedureComponent_Template_ag_grid_angular_gridReady_115_listener($event) {
          return ctx.onGridReady_1($event);
        })("selectionChanged", function ProcedureDetailsPostProcedureComponent_Template_ag_grid_angular_selectionChanged_115_listener($event) {
          return ctx.onSelectionChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 65)(118, "div", 55)(119, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 57)(122, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 60)(125, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 62)(128, "ag-grid-angular", 63, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function ProcedureDetailsPostProcedureComponent_Template_ag_grid_angular_gridReady_128_listener($event) {
          return ctx.onGridReady_1($event);
        })("selectionChanged", function ProcedureDetailsPostProcedureComponent_Template_ag_grid_angular_selectionChanged_128_listener($event) {
          return ctx.onSelectionChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 67)(131, "div", 55)(132, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 57)(135, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 60)(138, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 62)(141, "ag-grid-angular", 63, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function ProcedureDetailsPostProcedureComponent_Template_ag_grid_angular_gridReady_141_listener($event) {
          return ctx.onGridReady_1($event);
        })("selectionChanged", function ProcedureDetailsPostProcedureComponent_Template_ag_grid_angular_selectionChanged_141_listener($event) {
          return ctx.onSelectionChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 69)(144, "div", 55)(145, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 57)(148, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 60)(151, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "ag-grid-angular", 70, 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 72)(157, "div", 58)(158, "h4", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Total selected item : 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 58)(161, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_button_click_161_listener() {
          return ctx.onSaveCheckBoxes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "Check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 75)(164, "div", 23)(165, "ul", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](166, ProcedureDetailsPostProcedureComponent_li_166_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 33)(168, "div", 77)(169, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 78, 79)(173, "div", 80)(174, "div", 81)(175, "div", 82)(176, "h1", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "View Note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_img_click_178_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
          const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](172);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r10 == null ? null : _r10.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 85)(180, "div", 86)(181, "div", 87)(182, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "h1", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 87)(187, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Item No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "h1", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 90)(192, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "h1", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 92)(197, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_button_click_197_listener() {
          return ctx.CloseModal("Notes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 94, 95)(201, "div", 96)(202, "div", 81)(203, "div", 82)(204, "h1", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "View Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_img_click_206_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](200);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r11 == null ? null : _r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 97)(208, "div", 98)(209, "div", 99)(210, "div", 100)(211, "div", 101)(212, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "Item:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 104)(216, "div", 105)(217, "div", 106)(218, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Item number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Neurology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 106)(223, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Item name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "ORS juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 105)(228, "div", 107)(229, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Item category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "ORS Juice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "div", 106)(234, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "Barcodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 109)(239, "div", 110)(240, "div", 111)(241, "div", 101)(242, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "Procedure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Cardiology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "div", 101)(247, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "div", 101)(252, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 101)(257, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Min level ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "52934");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 110)(262, "div", 111)(263, "div", 101)(264, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "Item Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "In Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 101)(269, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "300ml");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 101)(274, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "Cabinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](277, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "div", 101)(279, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, "Cat No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "56954");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 110)(284, "div", 111)(285, "div", 101)(286, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "Vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Flores Junita");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 101)(291, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](293, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "div", 101)(296, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, "14-10-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "div", 101)(301, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "Lot No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, "14454");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "div", 109)(306, "div", 112)(307, "div", 113)(308, "div", 101)(309, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](312, "#energy #ORS #energy #ORS #energy #ORS #energy #ORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 110)(314, "div", 101)(315, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "Unit No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "div", 109)(320, "div", 38)(321, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "Item description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 109)(326, "div", 38)(327, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "h1", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "div", 114)(332, "div")(333, "button", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPostProcedureComponent_Template_button_click_333_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](200);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r11 == null ? null : _r11.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "div", 47)(336, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](337, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](339, "img", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c6, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c7, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideViewOnlyMode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c8, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c9, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.mainTabsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.SelectedItem.item == null ? null : ctx.SelectedItem.item.item_name) ? ctx.SelectedItem.item == null ? null : ctx.SelectedItem.item.item_name : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.SelectedItem.item == null ? null : ctx.SelectedItem.item.item_number) ? ctx.SelectedItem.item == null ? null : ctx.SelectedItem.item.item_number : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.SelectedItem.notes ? ctx.SelectedItem.notes : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c10));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalDirective, ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridAngular, _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_1__.ViewInfoComponent],
    styles: [".nav-pills .nav-link.active {\n  color: #fff !important;\n  background-color: #855EDB !important;\n  border: none !important;\n  border-radius: 0px 0px 0px 0px !important;\n  height: 32px !important;\n  padding: 5px 30px !important;\n  opacity: 1;\n  width: 100% !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 0px solid !important;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background: #594585 !important;\n  height: 34px !important;\n  border-radius: 0px 10px 0px 0px;\n  text-align: center !important;\n  display: flex !important;\n  flex-wrap: nowrap !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  transition: none !important;\n  transform: none !important;\n  padding: 6px 30px !important;\n  opacity: 1;\n}\n\n  .nav-justified .nav-item {\n  flex-grow: 0 !important;\n}\n\n  .card-header {\n  padding: 3px 10px 3px 10px !important;\n  background: #ECECEC !important;\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 10px 0px;\n}\n\n.navs-link[_ngcontent-%COMP%] {\n  background: none;\n  display: block;\n  transition: none !important;\n  transform: none !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 0.6;\n  width: 125px !important;\n  font-weight: normal !important;\n  white-space: nowrap;\n}\n\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .navs-link[_ngcontent-%COMP%] {\n  border: none;\n}\n\n  .navs-link.active {\n  color: #fff !important;\n  background-color: #747474 !important;\n  border: 1px solid #747474 !important;\n  border-radius: 6px !important;\n  height: 22px !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 1;\n  width: 125px !important;\n  font-weight: bolder !important;\n}\n  .navs-link.active .name {\n  color: #fff !important;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 0;\n  text-align: center;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 4px !important;\n  cursor: pointer !important; \n\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px !important;\n  background: #8B8B8B !important;\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important; \n\n  cursor: pointer !important;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important;\n  border-radius: 10px !important;\n  cursor: pointer !important;\n}\n\n.Outer-border[_ngcontent-%COMP%] {\n  border: 0.5px solid #594585;\n  border-radius: 10px;\n}\n\n.Outer-border-header[_ngcontent-%COMP%] {\n  background: #F3F4F8;\n  border-radius: 10px 10px 0px 0px;\n  height: 30px;\n  border-bottom: 0.5px solid #594585;\n}\n\n.mycart-body[_ngcontent-%COMP%] {\n  border-right: 0.5px solid #594585;\n  height: 350px;\n  overflow-y: scroll;\n}\n\n.mycart-body-2[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.plus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #ECECEC !important;\n}\n\n.minus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #855EDB !important;\n}\n\n.barcode_img[_ngcontent-%COMP%] {\n  padding-right: 40px !important;\n  background-image: url(\"/assets/images/barcode_input_type.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 160px !important;\n  background-size: 16px 16px !important;\n}\n\n.drop[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  min-height: 30px !important;\n}\n\n.viewonlymode_header[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: #594585;\n  width: auto;\n  height: 32px;\n  border-radius: 10px 0px 0px 0px;\n  padding: 8px 9px;\n}\n\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  --ag-row-hover-color: transparent !important;\n  --ag-header-background-color: #594585 !important;\n  --ag-selected-row-background-color: transparent !important;\n  position: absolute !important;\n  top: 3px !important;\n  --ag-line-height:20px !important ;\n}\n\n  .ag-row {\n  border-bottom: none !important;\n}\n\n  .ag-row-selected::before {\n  background-color: transparent !important;\n}\n\n  .ag-row-odd {\n  margin: 10px 0px !important;\n  background: #F3F4F8 !important;\n  z-index: 2;\n  padding: 1px 4px;\n}\n\n  .ag-row-even {\n  margin: 10px 0px !important;\n  background: none !important;\n  padding: 1px 4px;\n}\n\n  .ag-header-viewport {\n  background: #594585 !important;\n  border: none !important;\n}\n\n  .ag-header-viewport:hover {\n  background: #594585 !important;\n}\n\n  .ag-header {\n  border-bottom: none !important;\n}\n\n  .ag-header-cell-text {\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  font-size: 10px !important;\n  font-weight: 400 !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  border-radius: 15px;\n  font-family: poppins !important;\n}\n\n  .ag-row-group-expanded {\n  background: #8B8B8B !important;\n}\n  .ag-row-group-expanded .ag-cell-value {\n  color: #fff !important;\n}\n  .ag-row-group-expanded .ag-icon-tree-open {\n  color: #fff !important;\n}\n\n  .ag-theme-alpine .ag-group-contracted .ag-icon:hover {\n  color: #181d1f !important;\n}\n\n  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within {\n  border: none !important;\n}\n\n  .ag-icon-menu {\n  color: #fff !important;\n}\n\n  .ag-details-grid .ag-theme-alpine {\n  --ag-row-hover-color: transparent !important;\n}\n\n  .ag-ltr .ag-cell-range-single-cell {\n  border: none !important;\n  background: transparent !important;\n  --ag-row-hover-color: transparent !important;\n}\n\n.hideViewOnlyArea[_ngcontent-%COMP%] {\n  display: none;\n  width: 1%;\n}\n\n.expandWorkArea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.showExpandImg[_ngcontent-%COMP%] {\n  padding-right: 40px !important;\n  background-image: url(\"/assets/images/ViewOnlyModeright.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 0px !important;\n  background-size: 16px 16px !important;\n  z-index: 1 !important;\n}\n\n.TabsAlign[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 22px;\n  border-left: 1px solid;\n  margin-left: 1.4rem !important;\n  height: 588px !important;\n}\n\n.ChangeMainTab[_ngcontent-%COMP%] {\n  margin-left: 0.66rem !important;\n  margin-right: 0.66rem !important;\n  border-radius: 10px 10px 0px 0px !important;\n}\n.ChangeMainTab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px !important;\n}\n\n.ShowfullCart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.storeItem[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n\n.VisibleStorebutton[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.hideStoreItem[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  width: 600px;\n  height: auto;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background: #654e98 !important;\n  height: 34px !important;\n  border-radius: 0px 0px 0px 0px !important;\n  text-align: center !important;\n  display: flex !important;\n  flex-wrap: nowrap !important;\n}\n\n.navs-links[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff !important;\n  transition: none !important;\n  transform: none !important;\n  padding: 5px 30px !important;\n  opacity: 1;\n}\n\n.navs-links.active[_ngcontent-%COMP%] {\n  background: #855EDB;\n  border-radius: 12px !important;\n}\n.navs-links.active[_ngcontent-%COMP%]   .details_tab[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvcHJvY2VkdXJlLWRldGFpbHMtcG9zdC1wcm9jZWR1cmUvcHJvY2VkdXJlLWRldGFpbHMtcG9zdC1wcm9jZWR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFXQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQVJGOztBQVdBO0VBRUUsdUJBQUE7QUFURjs7QUFhQTtFQUNFLHFDQUFBO0VBQ0EsOEJBQUE7QUFWRjs7QUFhQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFhQTtFQUNFLFlBQUE7QUFWRjs7QUFhQTtFQUVFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBWEY7QUFhRTtFQUNFLHNCQUFBO0FBWEo7O0FBZUE7RUFFRSxhQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBLEVBQUEsbUNBQUE7QUFiRjs7QUFnQkE7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0RBQUEsRUFBQSxpREFBQTtFQUNBLDBCQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usb0RBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBYkY7O0FBZ0JBO0VBRUUsMkJBQUE7RUFBNEIsbUJBQUE7QUFiOUI7O0FBZUE7RUFDRSxtQkFBQTtFQUFvQixnQ0FBQTtFQUFpQyxZQUFBO0VBQWEsa0NBQUE7QUFUcEU7O0FBV0E7RUFDRSxpQ0FBQTtFQUFrQyxhQUFBO0VBQWMsa0JBQUE7QUFObEQ7O0FBUUE7RUFFRSxhQUFBO0FBTkY7O0FBUUE7RUFDRSx1QkFBQTtFQUF3QixzQkFBQTtFQUF1Qix1QkFBQTtFQUF3Qiw4QkFBQTtBQUZ6RTs7QUFJQTtFQUNFLHVCQUFBO0VBQXdCLHNCQUFBO0VBQXVCLHVCQUFBO0VBQXdCLDhCQUFBO0FBRXpFOztBQUFBO0VBQ0UsOEJBQUE7RUFDQSx5RUFBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtBQUdGOztBQUNFO0VBRUUsMkJBQUE7QUFDSjs7QUFHQTtFQUVFLHNCQUFBO0VBQXVCLG1CQUFBO0VBQW9CLFdBQUE7RUFBWSxZQUFBO0VBQWEsK0JBQUE7RUFBZ0MsZ0JBQUE7QUFJdEc7O0FBQUE7RUFFRSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsMERBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0FBR0Y7O0FBR0E7RUFFRSx3Q0FBQTtBQURGOztBQUdBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFFRSw4QkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtBQURGOztBQUlBO0VBQ0EsOEJBQUE7QUFEQTs7QUFJQTtFQUVFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBRUUsMEJBQUE7RUFDQSwyQkFBQTtBQUhGOztBQU1BO0VBRUUsb0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBSkY7O0FBTUE7RUFFRSw4QkFBQTtBQUpGO0FBTUE7RUFDRSxzQkFBQTtBQUpGO0FBTUE7RUFDRSxzQkFBQTtBQUpGOztBQVFBO0VBQ0UseUJBQUE7QUFMRjs7QUFRQTtFQUVFLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSxzQkFBQTtBQU5GOztBQVNBO0VBRUUsNENBQUE7QUFQRjs7QUFhQTtFQUVFLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtBQVhGOztBQWNBO0VBRUUsYUFBQTtFQUNBLFNBQUE7QUFaRjs7QUFnQkE7RUFFRSxXQUFBO0FBZEY7O0FBaUJBO0VBQ0UsOEJBQUE7RUFDQSx3RUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FBZEY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0FBYkY7QUFjRTtFQUNFLDJDQUFBO0FBWko7O0FBZ0JBO0VBQ0UsV0FBQTtBQWJGOztBQWdCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBYkY7O0FBZ0JBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFiQTs7QUFnQkE7RUFDRSxhQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkE7RUFFRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFkRjs7QUFvQkE7RUFFRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBbEJGOztBQXFCQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFsQkE7QUFtQkU7RUFDRSxzQkFBQTtBQWpCSiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmVcclxue1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICM4NTVFREIgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggMzBweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGlua3tcclxuICBib3JkZXI6IDBweCBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2e1xyXG4gIGJhY2tncm91bmQ6ICM1OTQ1ODUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAwcHggMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy8gLm5hdi1saW5rOmhvdmVye1xyXG4vLyAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuLy8gICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLm5hdi1saW5re1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDZweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uYXYtanVzdGlmaWVkIC5uYXYtaXRlbVxyXG57XHJcbiAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmNhcmQtaGVhZGVye1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI0VDRUNFQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWl0ZW17XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCA7XHJcbn1cclxuXHJcbi5uYXZzLWxpbmt7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNHB4IDZweCA0cHggNnB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHdpZHRoOiAxMjVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2LXRhYnMtY3VzdG9tIC5uYXYtaXRlbSAubmF2cy1saW5re1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwICAubmF2cy1saW5rLmFjdGl2ZVxyXG57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NDc0NzQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOjRweCA2cHggNHB4IDZweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG5cclxuICAubmFtZXtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWl0ZW1zXHJcbntcclxuICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjOEI4QjhCICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICNFQ0VDRUMgIWltcG9ydGFudDsgLyogU2V0IHRoZSBib3JkZXItcmFkaXVzIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggI0VDRUNFQyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLk91dGVyLWJvcmRlclxyXG57XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTk0NTg1O2JvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLk91dGVyLWJvcmRlci1oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGODtib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtoZWlnaHQ6IDMwcHg7Ym9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzU5NDU4NTtcclxufVxyXG4ubXljYXJ0LWJvZHl7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjNTk0NTg1O2hlaWdodDogMzUwcHg7b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5teWNhcnQtYm9keS0yXHJcbntcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbi5wbHVzLWNvdW50e1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O3dpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogI0VDRUNFQyAhaW1wb3J0YW50O1xyXG59XHJcbi5taW51cy1jb3VudHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDt3aWR0aDogMjJweCAhaW1wb3J0YW50O2hlaWdodDogMThweCAhaW1wb3J0YW50O2JhY2tncm91bmQ6ICM4NTVFREIgIWltcG9ydGFudDtcclxufVxyXG4uYmFyY29kZV9pbWd7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBsZWF2ZSBzcGFjZSBmb3IgdGhlIGltYWdlXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYXJjb2RlX2lucHV0X3R5cGUuc3ZnJykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTYwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBhcyBuZWVkZWRcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGltYWdlXHJcbn1cclxuLmRyb3Bcclxue1xyXG4gIC5uZy1zZWxlY3QtY29udGFpbmVyXHJcbiAge1xyXG4gICAgbWluLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnZpZXdvbmx5bW9kZV9oZWFkZXJcclxue1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogIzU5NDU4NTt3aWR0aDogYXV0bztoZWlnaHQ6IDMycHg7Ym9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDBweDtwYWRkaW5nOiA4cHggOXB4O1xyXG59XHJcblxyXG5cclxuLmFnLXRoZW1lLWFscGluZVxyXG57XHJcbiAgLS1hZy1yb3ctaG92ZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1hZy1oZWFkZXItYmFja2dyb3VuZC1jb2xvciA6ICM1OTQ1ODUgIWltcG9ydGFudDtcclxuICAtLWFnLXNlbGVjdGVkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gIC0tYWctbGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3d7XHJcbiAgYm9yZGVyLWJvdHRvbSA6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLmFnLXJvdyA6aG92ZXJ7XHJcbi8vICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6bmctZGVlcCAuYWctcm93LXNlbGVjdGVkOjpiZWZvcmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3ctb2Rke1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiNGM0Y0RjggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyIDtcclxuICBwYWRkaW5nOjFweCA0cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctcm93LWV2ZW57XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxcHggNHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVye1xyXG5ib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaGVhZGVyLWNlbGwtdGV4dFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctY2VsbC12YWx1ZVxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvb3Qtd3JhcHBlclxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXJvdy1ncm91cC1leHBhbmRlZFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzhCOEI4QiAhaW1wb3J0YW50O1xyXG5cclxuLmFnLWNlbGwtdmFsdWV7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWctaWNvbi10cmVlLW9wZW57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXRoZW1lLWFscGluZSAuYWctZ3JvdXAtY29udHJhY3RlZCAuYWctaWNvbjpob3ZlcntcclxuICBjb2xvcjogIzE4MWQxZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1mb2N1czpub3QoLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQpOmZvY3VzLXdpdGhpblxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaWNvbi1tZW51e1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctZGV0YWlscy1ncmlkIC5hZy10aGVtZS1hbHBpbmV7XHJcbi8vICAuYWctcm9vdC13cmFwcGVyIC5hZy1sYXlvdXQtbm9ybWFsIC5hZy1sdHIgLmFnLXRoZW1lLWFscGluZXtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAvLyAuYWctcm93IDpob3ZlcntcclxuICAvLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWx0ciAuYWctY2VsbC1yYW5nZS1zaW5nbGUtY2VsbFxyXG57XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpZGVWaWV3T25seUFyZWFcclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDElO1xyXG59XHJcblxyXG5cclxuLmV4cGFuZFdvcmtBcmVhXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNob3dFeHBhbmRJbWd7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBsZWF2ZSBzcGFjZSBmb3IgdGhlIGltYWdlXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9WaWV3T25seU1vZGVyaWdodC5zdmcnKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBhcyBuZWVkZWRcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGltYWdlXHJcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uVGFic0FsaWdue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDIycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICBtYXJnaW4tbGVmdDogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1ODhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5DaGFuZ2VNYWluVGFie1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5TaG93ZnVsbENhcnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdG9yZUl0ZW17XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcclxuICBwb2ludGVyLWV2ZW50czphbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlZpc2libGVTdG9yZWJ1dHRvbntcclxub3BhY2l0eTogMTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGlkZVN0b3JlSXRlbXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudXtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2XHJcbntcclxuICBiYWNrZ3JvdW5kOiM2NTRlOTggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAvLyBwYWRkaW5nOiAzcHggM3B4O1xyXG59XHJcblxyXG5cclxuLm5hdnMtbGlua3Ncclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5hdnMtbGlua3MuYWN0aXZle1xyXG5iYWNrZ3JvdW5kOiAjODU1RURCO1xyXG5ib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgLmRldGFpbHNfdGFie1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4174:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/procedure-details-pre-procedure/procedure-details-pre-procedure.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureDetailsPreProcedureComponent: () => (/* binding */ ProcedureDetailsPreProcedureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-info/view-info.component */ 3648);












const _c0 = ["StoreItem_Grid"];
function ProcedureDetailsPreProcedureComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_img_9_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.ShowViewOnlyArea());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsPreProcedureComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 77)(1, "a", 78)(2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("nav-link " + x_r14.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r14.template, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", x_r14.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r14.tabs);
  }
}
function ProcedureDetailsPreProcedureComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 77)(1, "a", 78)(2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("navs-link " + x_r15.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r15.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r15.subtabs);
  }
}
function ProcedureDetailsPreProcedureComponent_div_43_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx_r16.category);
  }
}
function ProcedureDetailsPreProcedureComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "h1", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Store Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_div_43_Template_img_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r3 == null ? null : _r3.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 90)(8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProcedureDetailsPreProcedureComponent_div_43_div_10_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 43)(12, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 91)(15, "ag-grid-angular", 92, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function ProcedureDetailsPreProcedureComponent_div_43_Template_ag_grid_angular_gridReady_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.onGridReady_1($event));
    })("selectionChanged", function ProcedureDetailsPreProcedureComponent_div_43_Template_ag_grid_angular_selectionChanged_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.OnGridSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 93)(18, "div", 94)(19, "h4", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 94)(22, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_div_43_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.AddToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx_r4.columnDefs1)("gridOptions", ctx_r4.gridOptions1)("defaultColDef", ctx_r4.defaultColDef)("rowData", ctx_r4.StoreItemGridData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.SelectedRowData.length, " items selected");
  }
}
function ProcedureDetailsPreProcedureComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 99)(1, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Store Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ProcedureDetailsPreProcedureComponent_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 102)(2, "div")(3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_div_53_div_1_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const x_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.Deleteitem(x_r23.item_details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 105)(8, "div", 106)(9, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_div_53_div_1_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const i_r24 = ctx_r30.index;
      const x_r23 = ctx_r30.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.AddToFavourite(i_r24, x_r23.item_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h4", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 109)(17, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_div_53_div_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.DecreaseItemCount(ctx_r31.fields == null ? null : ctx_r31.fields[i_r24]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_div_53_div_1_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.IncreseItemCount(ctx_r33.fields == null ? null : ctx_r33.fields[i_r24]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const x_r23 = ctx_r35.$implicit;
    const i_r24 = ctx_r35.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r23.item_details ? x_r23.item_details.item_name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", x_r23.item_id ? "assets/images/favourite_fill.svg" : "assets/images/Fav_stroke.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No :", x_r23.item_details ? x_r23.item_details.item_number : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Size :", x_r23.item_details ? x_r23.item_details.size : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", ctx_r25.fields == null ? null : ctx_r25.fields[i_r24])("name", ctx_r25.fields == null ? null : ctx_r25.fields[i_r24]);
  }
}
function ProcedureDetailsPreProcedureComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProcedureDetailsPreProcedureComponent_div_53_div_1_Template, 22, 6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", x_r23.item_details);
  }
}
function ProcedureDetailsPreProcedureComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ng-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx_r7.category);
  }
}
function ProcedureDetailsPreProcedureComponent_li_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 77)(1, "a", 115)(2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r36.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r36.subtabs);
  }
}
function ProcedureDetailsPreProcedureComponent_li_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 77)(1, "a", 78)(2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("navs-link " + x_r37.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r37.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r37.subtabs);
  }
}
function ProcedureDetailsPreProcedureComponent_li_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 77)(1, "a", 116)(2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", x_r38.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r38.subtabs);
  }
}
const _c1 = function (a0) {
  return {
    "hideViewOnlyArea": a0
  };
};
const _c2 = function (a0) {
  return {
    "expandWorkArea": a0
  };
};
const _c3 = function (a0) {
  return {
    "TabsAlign": a0
  };
};
const _c4 = function (a0) {
  return {
    "ChangeMainTab": a0
  };
};
const _c5 = function (a0) {
  return {
    "VisibleStorebutton": a0
  };
};
const _c6 = function (a0) {
  return {
    "ShowfullCart": a0
  };
};
const _c7 = function (a0) {
  return {
    "hideStoreItem": a0
  };
};
class ProcedureDetailsPreProcedureComponent {
  constructor(http, allService, toastr, formbuilder) {
    this.http = http;
    this.allService = allService;
    this.toastr = toastr;
    this.formbuilder = formbuilder;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.mainTabsValue = [];
    this.subTabs = [];
    this.header_viewOnlymode = [];
    this.myCartData = [];
    this.CurrentPatientDetails = [];
    this.category = [];
    this.Addtofavourite_bool = false;
    this.hideViewOnlyMode = true;
    this.StoreItemGridData = [];
    this.isFirstOpen = false;
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: false,
      filter: true
      // floatingFilter: true,
    };

    this.gridOptions1 = {
      defaultColDef: {
        filter: false
      },
      overlayNoRowsTemplate: '<span class="ag-overlay-no-rows-center">Please Go back to Material Dashboard Page</span>',
      suppressMenuHide: false,
      rowSelection: 'multiple',
      suppressRowClickSelection: true,
      rowHeight: 35,
      pagination: false,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: false
    };
    this.columnDefs1 = [{
      field: '',
      checkboxSelection: true,
      resizable: false,
      headerCheckboxSelection: true,
      width: 10
    }, {
      field: 'item_number',
      headerName: 'Item No',
      width: 110,
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'item_number')
    }, {
      field: 'item_name',
      headerName: 'Item Name',
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'item_name')
    }, {
      field: 'store_qty',
      headerName: 'Qty',
      width: 100,
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'store_qty')
    }, {
      field: 'action',
      headerName: '',
      width: 100,
      pinned: "right",
      filter: "agTextColumnFilter",
      suppressMenu: false,
      cellRenderer: this.cellRendered.bind(this, 'action'),
      onCellClicked: this.cellClicked.bind(this, 'action')
    }];
    this.SelectedRowData = [];
    this.fields = [];
  }
  ngOnInit() {
    this.http.get('assets/json/main-tabs3.json').subscribe(res => {
      this.mainTabsValue = res;
      // this.mainTabsValue.forEach((element,index) => {
      //   this.subTabs.push(element[index].subtabs);
      // });
      for (let i = 0; i < res.length; i++) {
        if (res[i].subtabs) {
          this.subTabs.push(res[i].subtabs);
        }
      }
    });
    this.http.get('assets/json/viewOnlyMode.json').subscribe(res => {
      this.header_viewOnlymode = res;
    });
    // this.http.get('assets/json/mycart-data.json').subscribe((res:any)=>{
    //   this.myCartData = res;
    // })
  }

  cellRendered(headerName, params) {
    switch (headerName) {
      case 'item_number':
        {
          return params.value;
        }
      case 'item_name':
        {
          return params.value;
        }
      case 'store_qty':
        {
          return params.value;
        }
      case 'action':
        {
          return `<div class="pointer" style="position:relative;right:8px"><img src="assets/images/storeItem.svg" style="width:16px;height:16px"></div>`;
        }
    }
  }
  cellClicked(headerName, params) {
    switch (headerName) {
      case 'action':
        {
          let SelectedRow = params.data;
          let item_details = {};
          console.log(this.StoreItemGridData);
          console.log(SelectedRow);
          let flag = true;
          this.myCartData.forEach((cartItemId, index) => {
            if (SelectedRow.id == cartItemId.id) {
              flag = false;
            }
          });
          if (flag == true) {
            item_details = {
              'item_id': SelectedRow.id,
              'item_details': SelectedRow
            };
            console.log(item_details);
          }
          console.log(item_details);
          console.log('CartData', this.myCartData);
          if (Object.keys(item_details).length > 0) {
            this.myCartData.push(item_details);
            console.log(this.myCartData);
            this.CreateGroup();
          }
          this.StoreItem_Grid.api?.deselectAll();
        }
    }
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
    // this.http.get('assets/json/damaged_grid.json').subscribe((res:any)=>{
    //   this.StoreItemGridData = res;
    // })
  }

  OnGridSelection(event) {
    this.SelectedRowData = this.gridApi_1.getSelectedRows();
    console.log(this.SelectedRowData);
  }
  AddToCart() {
    let item_details = {};
    this.SelectedRowData.forEach((element, index) => {
      console.log(element, index);
      let flag = true;
      this.myCartData.forEach((CartItemid, index) => {
        if (element.id == CartItemid.id) {
          flag = false;
        }
      });
      if (flag == true) {
        item_details = {
          'item_id': element.id,
          'item_details': element
        };
        this.myCartData.push(item_details);
      }
      // this.StoreItemGridData.splice(index,1);
    });

    console.log(this.myCartData);
    this.StoreItem_Grid.api?.setRowData(this.StoreItemGridData);
    this.CreateGroup();
    this.StoreItem_Grid.api?.deselectAll();
  }
  Deleteitem(item) {
    console.log(item);
    console.log(this.myCartData);
    this.myCartData.forEach((element, index) => {
      if (element.item_id == item.id) {
        this.myCartData.splice(index, 1);
      }
    });
    console.log(this.myCartData);
  }
  CheckOutSchedulling(formData) {
    // this.onSaveCheckBoxes();
    console.log(formData.value);
    let ItemId = [];
    let Quantity = [];
    this.myCartData.forEach((element, index) => {
      ItemId.push(element.item_id);
      Quantity.push(this.MyCartform.get('increasefield' + index).value);
    });
    console.log(ItemId);
    console.log(Quantity);
    let PatientID = localStorage.getItem('PatientID');
    let procedurename = localStorage.getItem('Procedure');
    let MRN_NO = localStorage.getItem('MRN_NO');
    this.allService.StoreShoppingCartSchedulling(PatientID, MRN_NO, procedurename, ItemId, Quantity, 'Pre-procedure').subscribe({
      next: res => {
        if (res.status == 'Success') {
          console.log(res);
          this.toastr.success(`${res.message}`, 'Successful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
        this.myCartData.forEach((element, index) => {
          this.MyCartform.get('increasefield' + index).setValue(0);
        });
        // this.stepper.next();
      },

      error: res => {
        this.toastr.error('Something went wrong', 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  AddToFavourite(index, value) {
    this.myCartData[index].fav = !value;
  }
  HideViewOnlyArea() {
    this.hideViewOnlyMode = true;
  }
  ShowViewOnlyArea() {
    this.hideViewOnlyMode = false;
  }
  DecreaseItemCount(fieldName) {
    let x = this.MyCartform.get(fieldName).value;
    if (x > 0) {
      this.MyCartform.get(fieldName).setValue(x - 1);
    }
  }
  IncreseItemCount(fieldName) {
    let x = this.MyCartform.get(fieldName).value;
    if (x >= 0) {
      this.MyCartform.get(fieldName).setValue(x + 1);
    }
  }
  CreateGroup() {
    this.createObject = {};
    this.fields = [];
    this.myCartData.forEach((element, index) => {
      if (element) {
        this.createObject['increasefield' + index] = '';
      }
    });
    console.log('CreateObject', this.createObject);
    Object.keys(this.createObject).forEach((field, index) => {
      if (field == 'increasefield' + index) {
        this.createObject[field] = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
      }
      // this.createObject[field] = new FormControl("",[Validators.minLength(0)]);
      this.fields.push(field);
    });
    console.log('Fields', this.fields);
    this.MyCartform = this.formbuilder.group(this.createObject);
    console.log(this.MyCartform);
    this.myCartData.forEach((element, index) => {
      this.MyCartform?.get('increasefield' + index).setValue(0);
    });
  }
  ngOnChanges(changes) {
    console.log('Pre Changes', changes.SelectedIndex.currentValue);
    if (changes.SelectedIndex.currentValue == 2) {
      this.hideViewOnlyMode = true;
      let PatientID = localStorage.getItem('PatientID');
      let procedurename = localStorage.getItem('Procedure');
      this.allService.GetMyCartDetails(procedurename).subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log(res);
            this.myCartData = res.my_cart.procedure_item;
            this.CreateGroup();
          }
        },
        error: res => {
          this.toastr.error('Something went wrong', 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
      this.allService.GetItemUniqueList().subscribe({
        next: res => {
          this.StoreItemGridData = res.data;
          this.StoreItem_Grid.api?.setRowData(this.StoreItemGridData);
          console.log(this.StoreItemGridData);
          // this.tempGridData = this.all_Items_gridData;
          return;
        },
        error: res => {
          this.toastr.error('Something went wrong', 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
      this.StoreItem_Grid.api?.sizeColumnsToFit();
      this.allService.ItemCategoryOptions().subscribe({
        next: res => {
          if (res.status == 'Success') {
            res.categories.forEach(element => {
              this.category.push(element.categories);
            });
            console.log(this.category);
          }
        }
      });
    }
  }
  onSaveCheckBoxes() {
    if (!this.allService.areAllChecked()) {
      this.toastr.error('Please select all checkboxes before saving.', 'UnSuccessful', {
        positionClass: 'toast-top-center',
        timeOut: 5000
      });
    } else {
      this.save.emit(true);
      this.allService.clearCheckBoxes();
    }
  }
  static #_ = this.ɵfac = function ProcedureDetailsPreProcedureComponent_Factory(t) {
    return new (t || ProcedureDetailsPreProcedureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProcedureDetailsPreProcedureComponent,
    selectors: [["app-procedure-details-pre-procedure"]],
    viewQuery: function ProcedureDetailsPreProcedureComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.StoreItem_Grid = _t.first);
      }
    },
    inputs: {
      StageValue: "StageValue",
      SelectedIndex: "SelectedIndex"
    },
    outputs: {
      save: "save"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 132,
    vars: 39,
    consts: [[1, "cards", 2, "border-radius", "10px !important", "border", "1px solid #8B8B8B", "padding", "0px !important", "height", "589px"], [1, "row"], [1, "col-3", "pe-0", 2, "border-right", "1px solid #594585", 3, "ngClass"], [1, "viewonlymode_header", "mb-0"], ["src", "assets/images/ViewOnlyModeleft.svg", 1, "leftexpand", 2, "position", "relative", "top", "43%", "left", "95%", "bottom", "50%", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], [1, "accords", "px-1", 2, "overflow-x", "scroll", "height", "507px"], [1, "col-9", 2, "padding", "0px 0px !important", 3, "ngClass"], ["src", "assets/images/ViewOnlyModeright.svg", "style", "position: relative;top: 280px;left: 13px;cursor: pointer;width: 20px;height: 20px;z-index: 1;", 3, "click", 4, "ngIf"], ["role", "tabpanel", 1, "tab-pane", 3, "ngClass"], ["role", "tablist", 1, "nav", "line-tab", "nav-pills", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "margin-right", "0.66rem", 3, "ngClass"], ["class", "nav-items", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-content", "mt-1", "text-muted"], ["id", "TabContentC1", "role", "tabpanel", 1, "tab-pane", "active"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", "scroll-container", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "overflow-y", "scroll", "border-right", "1px solid #8B8B8B!important", "height", "33px !important"], [1, "tab-content", "px-2", "text-muted"], ["id", "c1-1", "role", "tabpanel", 1, "tab-pane"], ["id", "c1-2", "role", "tabpanel", 1, "tab-pane"], ["id", "c1-3", "role", "tabpanel", 1, "tab-pane"], ["id", "c1-4", "role", "tabpanel", 1, "tab-pane"], ["id", "c1-5", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "p-0"], [1, "col-12"], [1, "d-flex", "flex-row", "justify-content-between", "align-item-center", "mx-2", "p-2", "me-4", 2, "background", "#F3F4F8", "border-radius", "6px"], [1, "mb-0"], ["dropdown", "", 1, "dropdown", "d-inline-block", "pointer", "storeItem", 3, "insideClick", "ngClass", "isDisabled"], ["dropdown", "bs-dropdown"], ["dropdownToggle", "", 1, "mb-0"], ["src", "assets/images/storeItem.svg", 1, "me-2"], ["class", "dropdown-menu dropdown-menu-end mb-0", 4, "dropdownMenu"], [1, "ms-1", "me-3", "mt-2", "Outer-border"], [1, "d-flex", "flex-wrap", "align-item-center", "p-2", "Outer-border-header"], [2, "width", "50%"], [1, "mb-0", 2, "font-weight", "500 !important"], ["class", "ms-2", 4, "ngIf"], [1, "row", "mx-2"], [1, "col-5", "pe-2", "ps-0", "mycart-body", 3, "ngClass"], [2, "height", "278px", 3, "formGroup"], ["class", "d-flex flex-column flex-wrap my-3", 4, "ngFor", "ngForOf"], [1, "p-2", 2, "border-top", "1px solid"], [1, "ms-auto", 2, "width", "min-content", 3, "click"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important"], [1, "col-7", "mycart-body-2", 3, "ngClass"], [1, "d-flex", "flex-wrap", "flex-row", "my-2"], [1, "me-2"], ["type", "text", "placeholder", "scan or type", 1, "form-control-new-sm", "barcode_img"], ["class", "me-2", "style", "width: 30%;", 4, "ngIf"], [1, "btn-new", 2, "height", "26px !important", "width", "103px !important", "padding", "4px !important"], [1, "mt-2", 2, "width", "100%", "height", "309px !important"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "295px", 3, "columnDefs", "gridOptions", "defaultColDef", "rowData", "gridReady", "selectionChanged"], ["StoreItem_Grid", ""], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", 2, "background", "#F3F4F8", "width", "100%", "position", "relative", "bottom", "46px", "border-radius", "0px 0px 10px 13px", "border", "1px solid", "z-index", "9"], [1, "btn-new", 2, "height", "30px !important", "width", "120px !important", 3, "click"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "p-2", "me-4", "my-2", 2, "background", "#F3F0FC", "z-index", "9"], [1, ""], [1, "ms-auto"], [1, "btn-new", 2, "height", "30px !important", "width", "max-content !important", 3, "click"], ["id", "c1-6", "role", "tabpanel", 1, "tab-pane"], ["id", "c1-7", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentC2", "role", "tabpanel", 1, "tab-pane"], ["role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", "scroll-container", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "overflow-y", "scroll", "border-right", "1px solid #8B8B8B!important", "height", "24px !important"], [1, "tab-content", "ms-2", "mt-2", "text-muted", "mt-2"], ["id", "c2-1", "role", "tabpanel", 1, "tab-pane"], ["id", "c2-2", "role", "tabpanel", 1, "tab-pane"], ["id", "c2-3", "role", "tabpanel", 1, "tab-pane"], ["id", "c2-4", "role", "tabpanel", 1, "tab-pane"], ["id", "c2-5", "role", "tabpanel", 1, "tab-pane"], ["id", "c2-6", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentC3", "role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "border-right", "1px solid #8B8B8B!important", "height", "24px !important"], [1, "tab-content", "ms-2", "mt-2", "text-muted"], ["id", "c3-1", "role", "tabpanel", 1, "tab-pane"], ["id", "c3-2", "role", "tabpanel", 1, "tab-pane"], ["id", "c3-e", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentC4", "role", "tabpanel", 1, "tab-pane"], ["id", "c4-1", "role", "tabpanel", 1, "tab-pane"], ["src", "assets/images/ViewOnlyModeright.svg", 2, "position", "relative", "top", "280px", "left", "13px", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], ["role", "presentation", 1, "nav-items"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 3, "href"], [1, "d-flex", "align-items-center"], ["width", "16px", "height", "16px", 1, "me-2", 3, "src"], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "name", "mb-0", 2, "color", "#747474", "font-size", "10px !important"], [1, "dropdown-menu", "dropdown-menu-end", "mb-0"], [1, "row", "m-2"], [1, "col-12", "p-0"], [1, "d-flex", "align-items-center", "p-2", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "flex-row", "my-2"], [1, "mt-2"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "233px", 3, "columnDefs", "gridOptions", "defaultColDef", "rowData", "gridReady", "selectionChanged"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "p-2", 2, "background-color", "#594585", "border-radius", "0px 0px 4px 4px", "position", "relative", "top", "18px"], [1, "ms-3"], [1, "mb-0", 2, "color", "#fff !important"], [1, "btn-white", 3, "click"], [1, "me-2", 2, "width", "30%"], ["placeholder", "Select Category", 3, "items"], [1, "ms-2"], [1, "d-flex", "flex-column", "flex-wrap", "my-3"], [4, "ngIf"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center", "mb-1"], [3, "click"], [1, "mdi", "mdi-trash-can-outline", "pointer"], [1, "d-flex", "flex-row", "flex-wrap", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "pointer", "me-2", 3, "src", "click"], [1, "mx-2", "mb-0"], [1, "d-flex"], [1, "btn-new", "plus-count", 3, "click"], [1, "mdi", "mdi-minus", 2, "color", "#000 !important", "font-size", "12px"], ["type", "number", "readonly", "", 1, "form-control-new", 2, "width", "37px !important", "padding", "0px 0px 0px 0px !important", "text-align", "right !important", "font-size", "0.5rem !important", "border", "none !important", "background", "#fff !important", 3, "formControlName", "name"], [1, "btn-new", "minus-count", 3, "click"], [1, "mdi", "mdi-plus", 2, "color", "#fff !important", "font-size", "12px"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", "me-2", 3, "href"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", 3, "href"]],
    template: function ProcedureDetailsPreProcedureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "View Other User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_Template_img_click_5_listener() {
          return ctx.HideViewOnlyArea();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-view-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProcedureDetailsPreProcedureComponent_img_9_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProcedureDetailsPreProcedureComponent_li_12_Template, 6, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProcedureDetailsPreProcedureComponent_li_16_Template, 6, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18)(28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Vetting & Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19)(31, "div", 20)(32, "div", 1)(33, "div", 21)(34, "div", 22)(35, "div")(36, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 24, 25)(40, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Store Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ProcedureDetailsPreProcedureComponent_div_43_Template, 24, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 29)(45, "div", 30)(46, "div", 31)(47, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ProcedureDetailsPreProcedureComponent_div_49_Template, 3, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 34)(51, "div", 35)(52, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ProcedureDetailsPreProcedureComponent_div_53_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 38)(55, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_Template_div_click_55_listener() {
          return ctx.CheckOutSchedulling(ctx.MyCartform);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 41)(59, "div", 42)(60, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, ProcedureDetailsPreProcedureComponent_div_62_Template, 2, 1, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 43)(64, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 47)(67, "ag-grid-angular", 48, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function ProcedureDetailsPreProcedureComponent_Template_ag_grid_angular_gridReady_67_listener($event) {
          return ctx.onGridReady_1($event);
        })("selectionChanged", function ProcedureDetailsPreProcedureComponent_Template_ag_grid_angular_selectionChanged_67_listener($event) {
          return ctx.OnGridSelection($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 50)(70, "div")(71, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div")(74, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_Template_button_click_74_listener() {
          return ctx.AddToCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 52)(77, "div", 53)(78, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 54)(81, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsPreProcedureComponent_Template_button_click_81_listener() {
          return ctx.onSaveCheckBoxes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Save and Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 56)(84, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 57)(87, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Radiation dose info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 58)(90, "div", 59)(91, "ul", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, ProcedureDetailsPreProcedureComponent_li_92_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 61)(94, "div", 62)(95, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 63)(98, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 64)(101, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 65)(104, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Vetting & Protocoling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 66)(107, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 67)(110, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "IV accusses & closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 68)(113, "div", 59)(114, "ul", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, ProcedureDetailsPreProcedureComponent_li_115_Template, 6, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 70)(117, "div", 71)(118, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 72)(121, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Admission Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 74)(125, "div", 59)(126, "ul", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](127, ProcedureDetailsPreProcedureComponent_li_127_Template, 6, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 70)(129, "div", 75)(130, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Request Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c1, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c2, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideViewOnlyMode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c3, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c4, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.mainTabsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("insideClick", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c5, ctx.hideViewOnlyMode == false))("isDisabled", ctx.hideViewOnlyMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideViewOnlyMode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c6, ctx.hideViewOnlyMode == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.MyCartform);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.myCartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c7, ctx.hideViewOnlyMode == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.category.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef)("rowData", ctx.StoreItemGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.SelectedRowData.length, " Items selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total selected item : ", ctx.SelectedRowData.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subTabs[3]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__.BsDropdownDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridAngular, _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_1__.ViewInfoComponent],
    styles: [".nav-pills .nav-link.active {\n  color: #fff !important;\n  background-color: #855EDB !important;\n  border: none !important;\n  border-radius: 0px 0px 0px 0px !important;\n  height: 32px !important;\n  padding: 5px 30px !important;\n  opacity: 1;\n  width: 100% !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 0px solid !important;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background: #594585 !important;\n  height: 34px !important;\n  border-radius: 0px 10px 0px 0px;\n  text-align: center !important;\n  display: flex !important;\n  flex-wrap: nowrap !important;\n}\n\n  .ng-select-container {\n  height: 20px !important;\n  min-height: 27px !important;\n  font-size: 12px !important;\n}\n\n  .ng-dropdown-panel.ng-select-bottom {\n  background: #fff !important;\n  opacity: 1;\n  font-size: 12px !important;\n  margin-top: 6px !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  transition: none !important;\n  transform: none !important;\n  padding: 6px 30px !important;\n  opacity: 1;\n}\n\n  .nav-justified .nav-item {\n  flex-grow: 0 !important;\n}\n\n  .card-header {\n  padding: 3px 10px 3px 10px !important;\n  background: #ECECEC !important;\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 10px 0px;\n}\n\n.navs-link[_ngcontent-%COMP%] {\n  background: none;\n  display: block;\n  transition: none !important;\n  transform: none !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 0.6;\n  width: 125px !important;\n  font-weight: normal !important;\n  white-space: nowrap;\n}\n\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .navs-link[_ngcontent-%COMP%] {\n  border: none;\n}\n\n  .navs-link.active {\n  color: #fff !important;\n  background-color: #747474 !important;\n  border: 1px solid #747474 !important;\n  border-radius: 6px !important;\n  height: 22px !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 1;\n  width: 125px !important;\n  font-weight: bolder !important;\n}\n  .navs-link.active .name {\n  color: #fff !important;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 0;\n  text-align: center;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 4px !important;\n  cursor: pointer !important; \n\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px !important;\n  background: #8B8B8B !important;\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important; \n\n  cursor: pointer !important;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important;\n  border-radius: 10px !important;\n  cursor: pointer !important;\n}\n\n.Outer-border[_ngcontent-%COMP%] {\n  border: 0.5px solid #594585;\n  border-radius: 10px;\n}\n\n.Outer-border-header[_ngcontent-%COMP%] {\n  background: #F3F4F8;\n  border-radius: 10px 10px 0px 0px;\n  height: 30px;\n  border-bottom: 0.5px solid #594585;\n}\n\n.mycart-body[_ngcontent-%COMP%] {\n  border-right: 0.5px solid #594585;\n  height: 350px;\n  overflow-y: scroll;\n}\n\n.mycart-body-2[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.plus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #ECECEC !important;\n}\n\n.minus-count[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  width: 22px !important;\n  height: 18px !important;\n  background: #855EDB !important;\n}\n\n.barcode_img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/barcode_input_type.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 111px !important;\n  background-size: 16px 16px !important;\n}\n\n.drop[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  min-height: 30px !important;\n}\n\n.viewonlymode_header[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: #594585;\n  width: auto;\n  height: 32px;\n  border-radius: 10px 0px 0px 0px;\n  padding: 8px 9px;\n}\n\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  --ag-row-hover-color: transparent !important;\n  --ag-header-background-color: #594585 !important;\n  --ag-selected-row-background-color: transparent !important;\n}\n\n  .ag-row {\n  border-bottom: none !important;\n}\n\n  .ag-row-selected::before {\n  background-color: transparent !important;\n}\n\n  .ag-row-odd {\n  margin: 10px 0px !important;\n  background: #F3F4F8 !important;\n  z-index: 2;\n}\n\n  .ag-row-even {\n  margin: 10px 0px !important;\n  background: none !important;\n}\n\n  .ag-header-viewport {\n  background: #594585 !important;\n  border: none !important;\n}\n\n  .ag-header-viewport:hover {\n  background: #594585 !important;\n}\n\n  .ag-header {\n  border-bottom: none !important;\n}\n\n  .ag-header-cell-text {\n  font-size: 10px !important;\n  font-weight: 500 !important;\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  font-size: 10px !important;\n  font-weight: 400 !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  border-radius: 15px;\n  font-family: poppins !important;\n}\n\n  .ag-row-group-expanded {\n  background: #8B8B8B !important;\n}\n  .ag-row-group-expanded .ag-cell-value {\n  color: #fff !important;\n}\n  .ag-row-group-expanded .ag-icon-tree-open {\n  color: #fff !important;\n}\n\n  .ag-theme-alpine .ag-group-contracted .ag-icon:hover {\n  color: #181d1f !important;\n}\n\n  .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within {\n  border: none !important;\n}\n\n  .ag-icon-menu {\n  color: #fff !important;\n}\n\n  .ag-details-grid .ag-theme-alpine {\n  --ag-row-hover-color: transparent !important;\n}\n\n  .ag-ltr .ag-cell-range-single-cell {\n  border: none !important;\n  background: transparent !important;\n  --ag-row-hover-color: transparent !important;\n}\n\n.hideViewOnlyArea[_ngcontent-%COMP%] {\n  display: none;\n  width: 1%;\n}\n\n.expandWorkArea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.showExpandImg[_ngcontent-%COMP%] {\n  padding-right: 40px !important;\n  background-image: url(\"/assets/images/ViewOnlyModeright.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 0px !important;\n  background-size: 16px 16px !important;\n  z-index: 1 !important;\n}\n\n.TabsAlign[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 22px;\n  border-left: 1px solid;\n  margin-left: 1.4rem !important;\n  height: 588px !important;\n}\n\n.ChangeMainTab[_ngcontent-%COMP%] {\n  margin-left: 0.66rem !important;\n  margin-right: 0.66rem !important;\n  border-radius: 10px 10px 0px 0px !important;\n}\n.ChangeMainTab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px !important;\n}\n\n.ShowfullCart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.storeItem[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n\n.VisibleStorebutton[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.hideStoreItem[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvcHJvY2VkdXJlLWRldGFpbHMtcHJlLXByb2NlZHVyZS9wcm9jZWR1cmUtZGV0YWlscy1wcmUtcHJvY2VkdXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFFQTtFQUVFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFVQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVVBO0VBRUUsdUJBQUE7QUFSRjs7QUFZQTtFQUNFLHFDQUFBO0VBQ0EsOEJBQUE7QUFURjs7QUFZQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7QUFURjs7QUFZQTtFQUVFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBVkY7QUFZRTtFQUNFLHNCQUFBO0FBVko7O0FBY0E7RUFFRSxhQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBWko7O0FBZUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUEsRUFBQSxtQ0FBQTtBQVpGOztBQWVBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBLEVBQUEsaURBQUE7RUFDQSwwQkFBQTtBQVpGOztBQWVBO0VBQ0Usb0RBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBWkY7O0FBZUE7RUFFRSwyQkFBQTtFQUE0QixtQkFBQTtBQVo5Qjs7QUFjQTtFQUNFLG1CQUFBO0VBQW9CLGdDQUFBO0VBQWlDLFlBQUE7RUFBYSxrQ0FBQTtBQVJwRTs7QUFVQTtFQUNFLGlDQUFBO0VBQWtDLGFBQUE7RUFBYyxrQkFBQTtBQUxsRDs7QUFPQTtFQUVFLGFBQUE7QUFMRjs7QUFPQTtFQUNFLHVCQUFBO0VBQXdCLHNCQUFBO0VBQXVCLHVCQUFBO0VBQXdCLDhCQUFBO0FBRHpFOztBQUdBO0VBQ0UsdUJBQUE7RUFBd0Isc0JBQUE7RUFBdUIsdUJBQUE7RUFBd0IsOEJBQUE7QUFHekU7O0FBREE7RUFFRSx5RUFBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtBQUdGOztBQUNFO0VBRUUsMkJBQUE7QUFDSjs7QUFHQTtFQUVFLHNCQUFBO0VBQXVCLG1CQUFBO0VBQW9CLFdBQUE7RUFBWSxZQUFBO0VBQWEsK0JBQUE7RUFBZ0MsZ0JBQUE7QUFJdEc7O0FBREE7RUFFRSw0Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsMERBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0FBSUY7O0FBRUE7RUFFRSx3Q0FBQTtBQUFGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUVFLDhCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0FBQUY7O0FBR0E7RUFDQSw4QkFBQTtBQUFBOztBQUdBO0VBRUUsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFFRSwwQkFBQTtFQUNBLDJCQUFBO0FBRkY7O0FBS0E7RUFFRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFIRjs7QUFLQTtFQUVFLDhCQUFBO0FBSEY7QUFLQTtFQUNFLHNCQUFBO0FBSEY7QUFLQTtFQUNFLHNCQUFBO0FBSEY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBRUUsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0FBTEY7O0FBUUE7RUFFRSw0Q0FBQTtBQU5GOztBQVlBO0VBRUUsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0FBVkY7O0FBYUE7RUFFRSxhQUFBO0VBQ0EsU0FBQTtBQVhGOztBQWVBO0VBRUUsV0FBQTtBQWJGOztBQWdCQTtFQUNFLDhCQUFBO0VBQ0Esd0VBQUE7RUFDQSx1Q0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtBQWJGOztBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQWJGOztBQWVBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0FBWkY7QUFhRTtFQUNFLDJDQUFBO0FBWEo7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVpGOztBQWVBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFaQTs7QUFlQTtFQUNFLGFBQUE7QUFaRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBWkYiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlXHJcbntcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4IDMwcHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbmt7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdntcclxuICBiYWNrZ3JvdW5kOiAjNTk0NTg1ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZy1zZWxlY3QtY29udGFpbmVye1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMjdweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tXHJcbntcclxuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLm5hdi1saW5rOmhvdmVye1xyXG4vLyAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuLy8gICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLm5hdi1saW5re1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDZweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uYXYtanVzdGlmaWVkIC5uYXYtaXRlbVxyXG57XHJcbiAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmNhcmQtaGVhZGVye1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI0VDRUNFQyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWl0ZW17XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCA7XHJcbn1cclxuXHJcbi5uYXZzLWxpbmt7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNHB4IDZweCA0cHggNnB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHdpZHRoOiAxMjVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2LXRhYnMtY3VzdG9tIC5uYXYtaXRlbSAubmF2cy1saW5re1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwICAubmF2cy1saW5rLmFjdGl2ZVxyXG57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NDc0NzQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOjRweCA2cHggNHB4IDZweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG5cclxuICAubmFtZXtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWl0ZW1zXHJcbntcclxuICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjOEI4QjhCICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4ICNFQ0VDRUMgIWltcG9ydGFudDsgLyogU2V0IHRoZSBib3JkZXItcmFkaXVzIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggI0VDRUNFQyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLk91dGVyLWJvcmRlclxyXG57XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTk0NTg1O2JvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLk91dGVyLWJvcmRlci1oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGODtib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtoZWlnaHQ6IDMwcHg7Ym9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzU5NDU4NTtcclxufVxyXG4ubXljYXJ0LWJvZHl7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjNTk0NTg1O2hlaWdodDogMzUwcHg7b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5teWNhcnQtYm9keS0yXHJcbntcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbi5wbHVzLWNvdW50e1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O3dpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogI0VDRUNFQyAhaW1wb3J0YW50O1xyXG59XHJcbi5taW51cy1jb3VudHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDt3aWR0aDogMjJweCAhaW1wb3J0YW50O2hlaWdodDogMThweCAhaW1wb3J0YW50O2JhY2tncm91bmQ6ICM4NTVFREIgIWltcG9ydGFudDtcclxufVxyXG4uYmFyY29kZV9pbWd7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogNDBweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBsZWF2ZSBzcGFjZSBmb3IgdGhlIGltYWdlXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYXJjb2RlX2lucHV0X3R5cGUuc3ZnJykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTExcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBhcyBuZWVkZWRcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweCAhaW1wb3J0YW50OyAvLyBBZGp1c3QgdGhlIHNpemUgb2YgdGhlIGltYWdlXHJcbn1cclxuLmRyb3Bcclxue1xyXG4gIC5uZy1zZWxlY3QtY29udGFpbmVyXHJcbiAge1xyXG4gICAgbWluLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnZpZXdvbmx5bW9kZV9oZWFkZXJcclxue1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7YmFja2dyb3VuZDogIzU5NDU4NTt3aWR0aDogYXV0bztoZWlnaHQ6IDMycHg7Ym9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDBweDtwYWRkaW5nOiA4cHggOXB4O1xyXG59XHJcblxyXG4uYWctdGhlbWUtYWxwaW5lXHJcbntcclxuICAtLWFnLXJvdy1ob3Zlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWFnLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yIDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIC0tYWctc2VsZWN0ZWQtcm93LWJhY2tncm91bmQtY29sb3IgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuYWctcm93e1xyXG4gIGJvcmRlci1ib3R0b20gOiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5hZy1yb3cgOmhvdmVye1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG46Om5nLWRlZXAgLmFnLXJvdy1zZWxlY3RlZDo6YmVmb3JlXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuYWctcm93LW9kZHtcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDojRjNGNEY4ICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMiA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctcm93LWV2ZW57XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1oZWFkZXItdmlld3BvcnRcclxue1xyXG4gIGJhY2tncm91bmQ6ICM1OTQ1ODUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1oZWFkZXItdmlld3BvcnQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlcntcclxuYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci1jZWxsLXRleHRcclxue1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWNlbGwtdmFsdWVcclxue1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1yb290LXdyYXBwZXJcclxue1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NDc0NzQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3ctZ3JvdXAtZXhwYW5kZWRcclxue1xyXG4gIGJhY2tncm91bmQ6ICM4QjhCOEIgIWltcG9ydGFudDtcclxuXHJcbi5hZy1jZWxsLXZhbHVle1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFnLWljb24tdHJlZS1vcGVue1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy10aGVtZS1hbHBpbmUgLmFnLWdyb3VwLWNvbnRyYWN0ZWQgLmFnLWljb246aG92ZXJ7XHJcbiAgY29sb3I6ICMxODFkMWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1sdHIgLmFnLWNlbGwtZm9jdXM6bm90KC5hZy1jZWxsLXJhbmdlLXNlbGVjdGVkKTpmb2N1cy13aXRoaW5cclxue1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWljb24tbWVudXtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWRldGFpbHMtZ3JpZCAuYWctdGhlbWUtYWxwaW5le1xyXG4vLyAgLmFnLXJvb3Qtd3JhcHBlciAuYWctbGF5b3V0LW5vcm1hbCAuYWctbHRyIC5hZy10aGVtZS1hbHBpbmV7XHJcbiAgLS1hZy1yb3ctaG92ZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLy8gLmFnLXJvdyA6aG92ZXJ7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1sdHIgLmFnLWNlbGwtcmFuZ2Utc2luZ2xlLWNlbGxcclxue1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1hZy1yb3ctaG92ZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWRlVmlld09ubHlBcmVhXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxJTtcclxufVxyXG5cclxuXHJcbi5leHBhbmRXb3JrQXJlYVxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaG93RXhwYW5kSW1ne1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgdG8gbGVhdmUgc3BhY2UgZm9yIHRoZSBpbWFnZVxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvVmlld09ubHlNb2RlcmlnaHQuc3ZnJykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGUgcG9zaXRpb24gYXMgbmVlZGVkXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpbWFnZVxyXG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlRhYnNBbGlnbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTg4cHggIWltcG9ydGFudDtcclxufVxyXG4uQ2hhbmdlTWFpblRhYntcclxuICBtYXJnaW4tbGVmdDogMC42NnJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMC42NnJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uU2hvd2Z1bGxDYXJ0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RvcmVJdGVte1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6bm90LWFsbG93ZWQ7XHJcbiAgcG9pbnRlci1ldmVudHM6YWxsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5WaXNpYmxlU3RvcmVidXR0b257XHJcbm9wYWNpdHk6IDE7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhpZGVTdG9yZUl0ZW17XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1197:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/procedure-details/procedure-details.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureDetailsComponent: () => (/* binding */ ProcedureDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/authfake.service */ 9634);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-info/view-info.component */ 3648);













const _c0 = ["Reject"];
function ProcedureDetailsComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_img_9_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.ShowViewOnlyArea());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 37)(1, "a", 38)(2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("nav-link " + x_r16.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", x_r16.template, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", x_r16.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r16.tabs);
  }
}
function ProcedureDetailsComponent_div_13_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 37)(1, "a", 38)(2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("navs-link " + x_r24.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", x_r24.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r24.subtabs);
  }
}
const _c1 = function (a0) {
  return {
    "SelectedVetting": a0
  };
};
function ProcedureDetailsComponent_div_13_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_13_div_32_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const x_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.SelectedVettingStatus(x_r25.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r25 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, ctx_r18.SelectedvettingType == x_r25.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r25.name);
  }
}
function ProcedureDetailsComponent_div_13_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsComponent_div_13_div_34_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsComponent_div_13_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div")(3, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "PROTOCOLING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 39)(7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_13_div_34_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.AddNotes_Protocol());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "AddNotes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_13_div_34_Template_div_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.SaveProtocolingRequest(ctx_r31.ProtocoingRequestForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "form", 24)(18, "div", 87)(19, "div", 88)(20, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Select Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ng-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 88)(24, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Protocol Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 88)(28, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Add your Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ProcedureDetailsComponent_div_13_div_34_div_31_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r20.ProtocoingRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r20.ProtocolTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r20.enableNotes_Protocoling);
  }
}
function ProcedureDetailsComponent_div_13_li_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 37)(1, "a", 94)(2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", x_r32.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r32.subtabs);
  }
}
function ProcedureDetailsComponent_div_13_li_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 37)(1, "a", 95)(2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", x_r33.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r33.subtabs);
  }
}
function ProcedureDetailsComponent_div_13_li_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 37)(1, "a", 95)(2, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", x_r34.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r34.subtabs);
  }
}
function ProcedureDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 41)(2, "div", 42)(3, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProcedureDetailsComponent_div_13_li_4_Template, 6, 4, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 44)(6, "div", 45)(7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Request Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 46)(10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Admission Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 47)(13, "div", 48)(14, "div", 49)(15, "div")(16, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "VETTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div")(19, "div", 39)(20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_13_Template_div_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.AddNotes_Vetting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "AddNotes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_13_Template_div_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.SaveVettingRequest(ctx_r37.VettingRequestForm));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "form", 24)(31, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ProcedureDetailsComponent_div_13_div_32_Template, 3, 4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ProcedureDetailsComponent_div_13_div_33_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ProcedureDetailsComponent_div_13_div_34_Template, 32, 3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 61)(36, "div", 62)(37, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_13_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.onSaveCheckBoxes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Save and Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 64)(40, "div", 65)(41, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, ProcedureDetailsComponent_div_13_li_42_Template, 6, 2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 66)(44, "div", 67)(45, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Request Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 68)(48, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Admission Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 69)(51, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 70)(54, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Vetting & Protocoling");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 71)(57, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Materials");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 72)(60, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "IV accusses & closure");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 73)(63, "div", 65)(64, "ul", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, ProcedureDetailsComponent_div_13_li_65_Template, 6, 2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 75)(67, "div", 76)(68, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Request Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 77)(71, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Admission Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 78)(74, "div", 65)(75, "ul", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ProcedureDetailsComponent_div_13_li_76_Template, 6, 2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 75)(78, "div", 79)(79, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Request Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.subTabs[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.VettingRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.VettingTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.enableNotes_Vetting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.ProtocolTypes.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.subTabs[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.subTabs[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.subTabs[3]);
  }
}
function ProcedureDetailsComponent_div_14_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 110)(5, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", x_r40.reason_type ? x_r40.reason_type : "", " - ", x_r40.reason_note ? x_r40.reason_note : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Kathryn Murphy ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 3, x_r40.created_at, "mm-dd-yyyy HH:MM"), "");
  }
}
function ProcedureDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 96)(1, "div", 97)(2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 98)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 98)(8, "h4", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Confirmation of Patient Admission or Rejection Before Initiating Treatment Procedure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 101)(11, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_14_Template_div_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.OpenModal("Reject"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_div_14_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.SendPatientRequest("Accepted"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ProcedureDetailsComponent_div_14_div_18_Template, 10, 6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.CurrentPatientDetails.patient_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.CurrentPatientDetails.patient_requests);
  }
}
function ProcedureDetailsComponent_ng_template_15_Template(rf, ctx) {}
function ProcedureDetailsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " 2Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " 3Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " 4Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Reason should not be more than 50 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureDetailsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcedureDetailsComponent_div_43_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r13.ReasonForm.controls.reason2.dirty || ctx_r13.ReasonForm.controls.reason2.touched) && (ctx_r13.ReasonForm.controls.reason2.errors == null ? null : ctx_r13.ReasonForm.controls.reason2.errors.maxlength));
  }
}
const _c2 = function (a0) {
  return {
    "hideViewOnlyArea": a0
  };
};
const _c3 = function (a0) {
  return {
    "expandWorkArea": a0
  };
};
const _c4 = function (a0) {
  return {
    "TabsAlign": a0
  };
};
const _c5 = function () {
  return ["Others", "No History"];
};
class ProcedureDetailsComponent {
  constructor(http, allService, authService, toastr, formbuilder, router) {
    this.http = http;
    this.allService = allService;
    this.authService = authService;
    this.toastr = toastr;
    this.formbuilder = formbuilder;
    this.router = router;
    this.mainTabsValue = [];
    this.subTabs = [];
    this.header_viewOnlymode = [];
    this.isFirstOpen = false;
    this.hideViewOnlyMode = true;
    this.CurrentPatientSelection = false;
    this.CurrentPatientDetails = [];
    this.VettingTypes = [];
    this.DuplicateProtocolingTypes = [];
    this.DuplicateAddProtocolingTypes = [];
    this.ProtocolTypes = [];
    this.AddProtocolList = [];
    this.enableNotes_Vetting = false;
    this.enableNotes_Protocoling = false;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.VettingRequestForm = this.formbuilder.group({
      VettingNotes: ['']
    });
    this.ProtocoingRequestForm = this.formbuilder.group({
      SelectProtocol: [],
      ProtocolDetails: [],
      AddedProtocol: [],
      ProtocolNotes: ['']
    });
    this.ReasonForm = this.formbuilder.group({
      reason1: [],
      reason2: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]]
    });
  }
  ngOnInit() {
    this.http.get('assets/json/main-tabs.json').subscribe(res => {
      this.mainTabsValue = res;
      for (let i = 0; i < res.length; i++) {
        if (res[i].subtabs) {
          this.subTabs.push(res[i].subtabs);
        }
      }
    });
    this.http.get('assets/json/viewOnlyMode.json').subscribe(res => {
      this.header_viewOnlymode = res;
    });
  }
  CloseViewOnlyMode() {
    this.hideViewOnlyMode = true;
  }
  ShowViewOnlyArea() {
    this.hideViewOnlyMode = false;
  }
  open() {
    window.alert('Hi You have opened the testing modal');
  }
  SendPatientRequest(type) {
    this.allService.SendPatientRequest(this.CurrentPatientDetails, type, this.ReasonForm.value).subscribe({
      next: res => {
        if (res.status == 'Success' && type == 'Accepted') {
          localStorage.setItem('ExamStatus', 'Accepted');
          this.CurrentPatientSelection = true;
          //  this.hideViewOnlyMode = false;
          //  VettingTypes
          this.allService.GetVettingTypes().subscribe({
            next: res => {
              if (res.status == 'Success') {
                console.log(res);
                this.VettingTypes = res.vetting_types;
              }
            },
            error: res => {
              this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          //  Protocol Types
          this.allService.GetProtocolTypes().subscribe({
            next: res => {
              if (res.status == 'Success') {
                console.log(res);
                res.protocol_types.forEach(element => {
                  this.ProtocolTypes.push(element.name);
                  this.DuplicateProtocolingTypes.push(element);
                });
                console.log(this.ProtocolTypes);
              }
            },
            error: res => {
              this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          // this.allService.GetAddProtocolList().subscribe({
          //   next:((res:any)=>{
          //     if(res.status == 'Success'){
          //       console.log(res);
          //      res.add_protocol_types.forEach(element => {
          //       this.AddProtocolList.push(element.name);
          //       this.DuplicateAddProtocolingTypes.push(element);
          //      });
          //      console.log(this.AddProtocolList);
          //     }
          //   }),
          //   error:((res:any)=>{
          //       this.toastr.error(`Something went wrong`,'UnSuccessful',{
          //       positionClass: 'toast-top-center',
          //       timeOut:2000,
          //     });
          //   })
          // })
          return 0;
        } else if (res.status == 'Success' && type == 'Rejected') {
          localStorage.setItem('ExamStatus', 'Rejected');
          this.CloseModal('Reject');
          this.toastr.success(`${res.message}`, 'Successful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
          this.router.navigateByUrl('/procedure');
        }
      },
      error: res => {
        this.toastr.error(`Something went wrong`, 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  SelectedVettingStatus(vettingtype) {
    this.SelectedvettingType = vettingtype;
  }
  AddNotes_Vetting() {
    this.enableNotes_Vetting = !this.enableNotes_Vetting;
  }
  AddNotes_Protocol() {
    this.enableNotes_Protocoling = !this.enableNotes_Protocoling;
  }
  SaveVettingRequest(data) {
    console.log(data.value);
    console.log(this.SelectedvettingType);
    let VettingID;
    this.VettingTypes.forEach(element => {
      if (element.name == this.SelectedvettingType) {
        VettingID = element.id;
      }
    });
    this.allService.SendVettingRequest(this.CurrentPatientDetails, data.value, VettingID).subscribe({
      next: res => {
        if (res.status == 'Success') {
          this.toastr.success(`${res.message}`, 'Successful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
          this.SelectedvettingType = '';
          this.enableNotes_Vetting = false;
        }
      },
      error: res => {
        this.toastr.error(`Something went wrong`, 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
    let MRN = localStorage.getItem('MRN_NO');
    let PatientID = localStorage.getItem('PatientID');
    this.allService.GetVettingandProtocolingData(PatientID, MRN).subscribe({
      next: res => {
        if (res.status == 'Success') {
          console.log('Vetting and Protocol Data', res);
          this.enableNotes_Vetting = true;
          this.VettingRequestForm.patchValue({
            VettingNotes: res.data.vetting.vetting_notes
          });
          this.SelectedvettingType = res.data?.vetting?.vetting_types?.name;
          //  this.enableNotes_Protocoling = true;
          //  this.ProtocoingRequestForm.patchValue({
          //   SelectProtocol:res.data.protocol.protocolling_types.name,
          //   ProtocolDetails:res.data.protocol.protocol_details,
          //   AddedProtocol:res.data.protocol.add_your_protocol,
          //   ProtocolNotes:res.data.protocol.protocol_notes
          //  })
        }
      },

      error: res => {
        this.toastr.error(`Something went wrong`, 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  SaveProtocolingRequest(data) {
    console.log(data.value);
    console.log(this.DuplicateProtocolingTypes);
    let ProtocolID = '';
    let value = this.ProtocoingRequestForm.get('SelectProtocol').value;
    this.DuplicateProtocolingTypes.forEach(element => {
      if (element.name == value) {
        ProtocolID = element.id;
      }
    });
    console.log(ProtocolID);
    let AddProtocolID = '';
    console.log(AddProtocolID);
    this.allService.SendProtocolRequest(this.CurrentPatientDetails, data.value, ProtocolID).subscribe({
      next: res => {
        if (res.status == 'Success') {
          this.toastr.success(`${res.message}`, 'Successful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
          this.ProtocoingRequestForm.reset();
          this.enableNotes_Protocoling = false;
        }
      },
      error: res => {
        this.toastr.error(`Something went wrong`, 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
    let MRN = localStorage.getItem('MRN_NO');
    let PatientID = localStorage.getItem('PatientID');
    this.allService.GetVettingandProtocolingData(PatientID, MRN).subscribe({
      next: res => {
        if (res.status == 'Success') {
          //  console.log('Vetting and Protocol Data',res);
          //  this.enableNotes_Vetting = true;
          //  this.VettingRequestForm.patchValue({
          //   VettingNotes:res.data.vetting.vetting_notes
          //  });
          //  this.SelectedvettingType = res.data.vetting.vetting_types.name;
          this.enableNotes_Protocoling = true;
          this.ProtocoingRequestForm.patchValue({
            SelectProtocol: res.data?.protocol?.protocolling_types?.name,
            ProtocolDetails: res.data?.protocol?.protocol_details,
            AddedProtocol: res.data?.protocol?.add_your_protocol,
            ProtocolNotes: res.data?.protocol?.protocol_notes
          });
        }
      },
      error: res => {
        this.toastr.error(`Something went wrong`, 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  ngOnChanges(changes) {
    console.log('Requesting Changes', changes.SelectedIndex.currentValue);
    if (changes.SelectedIndex.currentValue == 0) {
      this.hideViewOnlyMode = true;
    }
  }
  ngAfterViewInit() {
    console.log('Selected Index', this.SelectedIndex);
    this.CurrentPatientDetails = [];
    let PatientID = localStorage.getItem('PatientID');
    if (this.SelectedIndex == 0) {
      if (PatientID) {
        this.allService.GetSpecificPatientProcedureDetails(PatientID).subscribe({
          next: res => {
            if (res.status == 'Success') {
              this.CurrentPatientDetails = res.patient;
            }
            return 0;
          },
          error: res => {
            this.toastr.error(`Something went wrong`, 'UnSuccessful', {
              positionClass: 'toast-top-center',
              timeOut: 2000
            });
          }
        });
      }
    }
    let ExamStatus = localStorage.getItem('ExamStatus');
    console.log(ExamStatus);
    if (ExamStatus == 'Accepted') {
      this.CurrentPatientSelection = true;
      //  VettingTypes
      this.allService.GetVettingTypes().subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log(res);
            this.VettingTypes = res.vetting_types;
          }
        },
        error: res => {
          this.toastr.error(`Something went wrong`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
      //  Protocol Types
      this.allService.GetProtocolTypes().subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log(res);
            res.protocol_types.forEach(element => {
              this.ProtocolTypes.push(element.name);
              this.DuplicateProtocolingTypes.push(element);
            });
            console.log(this.ProtocolTypes);
          }
        },
        error: res => {
          this.toastr.error(`Something went wrong`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
      //Vetting and Protocol Data
      let MRN = localStorage.getItem('MRN_NO');
      this.allService.GetVettingandProtocolingData(PatientID, MRN).subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log('Vetting and Protocol Data', res);
            this.enableNotes_Vetting = true;
            this.VettingRequestForm.patchValue({
              VettingNotes: res.data?.vetting?.vetting_notes
            });
            this.SelectedvettingType = res.data?.vetting?.vetting_types?.name;
            this.enableNotes_Protocoling = true;
            this.ProtocoingRequestForm.patchValue({
              SelectProtocol: res.data?.protocol?.protocolling_types?.name,
              ProtocolDetails: res.data?.protocol?.protocol_details,
              AddedProtocol: res.data?.protocol?.add_your_protocol,
              ProtocolNotes: res.data?.protocol?.protocol_notes
            });
          }
        },
        error: res => {
          this.toastr.error(`Something went wrong`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
    } else if (ExamStatus != 'Rejected') {
      this.CurrentPatientSelection = false;
    }
  }
  CloseModal(type) {
    switch (type) {
      case 'Reject':
        {
          this.Reject?.hide();
          break;
        }
    }
  }
  OpenModal(type) {
    switch (type) {
      case 'Reject':
        {
          this.Reject?.show();
          break;
        }
    }
  }
  onSaveCheckBoxes() {
    if (!this.allService.areAllChecked()) {
      this.toastr.error('Please select all checkboxes before saving.', 'UnSuccessful', {
        positionClass: 'toast-top-center',
        timeOut: 5000
      });
    } else {
      this.save.emit(true);
      this.allService.clearCheckBoxes();
    }
  }
  static #_ = this.ɵfac = function ProcedureDetailsComponent_Factory(t) {
    return new (t || ProcedureDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_1__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProcedureDetailsComponent,
    selectors: [["app-procedure-details"]],
    viewQuery: function ProcedureDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.Reject = _t.first);
      }
    },
    inputs: {
      StageValue: "StageValue",
      SelectedIndex: "SelectedIndex"
    },
    outputs: {
      save: "save"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 49,
    vars: 17,
    consts: [[1, "cards", 2, "border-radius", "10px !important", "border", "1px solid #8B8B8B", "padding", "0px !important", "height", "589px"], [1, "row", 2, "width", "100%", "margin-left", "-1px"], [1, "col-3", "px-0", 2, "border-right", "1px solid #594585", 3, "ngClass"], [1, "viewonlymode_header", "mb-0"], ["src", "assets/images/ViewOnlyModeleft.svg", 1, "leftexpand", 2, "position", "relative", "top", "43%", "left", "95%", "bottom", "50%", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], [1, "accords", "px-1", 2, "overflow-x", "scroll", "height", "507px"], [1, "col-9", 2, "padding", "0px 0px !important", 3, "ngClass"], ["src", "assets/images/ViewOnlyModeright.svg", "style", "position: relative;top: 280px;left: 13px;cursor: pointer;width: 20px;height: 20px;z-index: 1;", 3, "click", 4, "ngIf"], ["role", "tabpanel", 1, "tab-pane", 3, "ngClass"], ["role", "tablist", 1, "nav", "line-tab", "nav-pills", "nav-tabs", "nav-tabs-custom", "nav-justified"], ["class", "nav-items", "role", "presentation", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "mx-2", "style", "width: 300px;position: relative;top: 90px;margin: auto !important;", 4, "ngIf"], ["TabContent1", ""], ["TabContent2", ""], ["TabContent3", ""], ["TabContent4", ""], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name5", 1, "modal", "fade"], ["Reject", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "450px !important"], [1, "modal-content"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "my-3", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", "ms-2", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [3, "formGroup"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-between", "m-4"], [1, "mb-4", "mx-4", 2, "width", "100%"], [1, "mb-1", 2, "color", "#1B1B1B !important"], ["placeholder", "Select Reason", "appPreventSpaces", "", "formControlName", "reason1", 3, "items"], [1, "mb-2", "mx-4", 2, "width", "100%"], [1, "ms-1", 2, "font-size", "8px", "font-weight", "400", "color", "#D62424"], ["type", "text", "formControlName", "reason2", 1, "form-control-new"], ["class", "invalid-feedback", 4, "ngIf"], [1, "d-flex", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", "me-2", 2, "background", "#F3F4F8 !important", "color", "#000 !important", "width", "auto !important", 3, "click"], ["type", "button", 1, "btn-new", 2, "width", "auto !important", 3, "click"], ["src", "assets/images/ViewOnlyModeright.svg", 2, "position", "relative", "top", "280px", "left", "13px", "cursor", "pointer", "width", "20px", "height", "20px", "z-index", "1", 3, "click"], ["role", "presentation", 1, "nav-items"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 3, "href"], [1, "d-flex", "align-items-center"], ["width", "16px", "height", "16px", 1, "me-2", 3, "src"], [1, "tab-content", "mt-1", "text-muted"], ["id", "TabContentA1", "role", "tabpanel", 1, "tab-pane", "active"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", "scroll-container", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "overflow-y", "scroll", "border-right", "1px solid #8B8B8B!important"], [1, "tab-content", "ms-2", "mt-2", "me-2", "text-muted"], ["id", "a1-1", "role", "tabpanel", 1, "tab-pane"], ["id", "a1-2", "role", "tabpanel", 1, "tab-pane"], ["id", "a1-4", "role", "tabpanel", 1, "tab-pane", "active", "show"], [2, "width", "100%", "border", "0.5px solid #8B8B8B", "border-radius", "6px", "margin-top", "10px"], [1, "d-flex", "justify-content-between", "align-items-center", "p-1", 2, "background-color", "#F3F4F8", "border-radius", "6px"], [1, "mb-0", 2, "color", "#594585 !important"], [1, "me-2", "pointer", 3, "click"], ["src", "assets/images/add_notes_procedure.svg", 2, "width", "20px", "height", "20px"], [1, "ms-1", 2, "color", "#1B1B1B !important", "font-size", "9px !important", "font-weight", "400 !important"], ["src", "assets/images/Save_vetting.svg", 2, "width", "20px", "height", "20px"], [1, "form-check", "form-switch", "form-switch-md", "align-items-center", "ps-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "ms-3", 2, "width", "32px !important", "height", "16px !important"], [1, "d-flex", "flex-row", "align-items-center", "m-3", "pointer", 2, "background", "#F3F4F8", "width", "max-content", "border-radius", "6px"], ["class", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "m-3", "style", "height: 50px;", 4, "ngIf"], ["style", "width:100%;border:0.5px solid #8B8B8B;border-radius:6px;margin-top: 10px;", 4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "p-2", "me-4", "my-2", 2, "background", "#F3F0FC", "position", "absolute", "bottom", "0px", "width", "99%"], [1, "ms-auto"], [1, "btn-new", 2, "height", "30px !important", "width", "max-content !important", 3, "click"], ["id", "TabContentA2", "role", "tabpanel", 1, "tab-pane"], ["role", "tabpanel", 1, "tab-pane"], [1, "tab-content", "ms-2", "mt-2", "text-muted", "mt-2"], ["id", "a2-1", "role", "tabpanel", 1, "tab-pane"], ["id", "a2-2", "role", "tabpanel", 1, "tab-pane"], ["id", "a2-3", "role", "tabpanel", 1, "tab-pane"], ["id", "a2-4", "role", "tabpanel", 1, "tab-pane"], ["id", "a2-5", "role", "tabpanel", 1, "tab-pane"], ["id", "a2-6", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentA3", "role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "border-radius", "0px !important", "border", "1px solid rgb(255, 255, 255) !important", "background", "none !important", "color", "#000 !important", "border-right", "1px solid #8B8B8B!important"], [1, "tab-content", "ms-2", "mt-2", "text-muted"], ["id", "a3-1", "role", "tabpanel", 1, "tab-pane"], ["id", "a3-2", "role", "tabpanel", 1, "tab-pane"], ["id", "TabContentA4", "role", "tabpanel", 1, "tab-pane"], ["id", "a4-1", "role", "tabpanel", 1, "tab-pane"], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "name", "mb-0", 2, "color", "#747474", "font-size", "10px !important"], [1, "", 3, "ngClass", "click"], [1, "mb-0", 2, "padding", "10px"], [1, "m-3", 2, "height", "50px"], ["type", "text", "placeholder", "Add Notes", "formControlName", "VettingNotes", 1, "form-control-new", 2, "padding", "4px !important", "height", "50px !important"], [1, "d-flex", "justify-content-start", "mx-2", "my-2", 2, "width", "100%"], [1, "me-2", 2, "width", "30%"], [1, "modal-label-edit"], ["formControlName", "SelectProtocol", 3, "items"], ["type", "text", "formControlName", "ProtocolDetails", 1, "form-control", "protocol_details"], ["type", "text", "formControlName", "AddedProtocol", 1, "form-control"], ["type", "text", "placeholder", "Add Notes", "formControlName", "ProtocolNotes", 1, "form-control-new", 2, "padding", "4px !important", "height", "50px !important"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", "me-2", 3, "href"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 1, "navs-link", 3, "href"], [1, "mx-2", 2, "width", "300px", "position", "relative", "top", "90px", "margin", "auto !important"], [1, "d-flex", "flex-column", "align-items-center", "pb-4", 2, "border-bottom", "1px solid #CACACA !important"], [1, "mb-3"], ["src", "assets/images/Patient_Selection.svg", 2, "width", "100px", "height", "100px"], [2, "text-align", "center"], [1, "d-flex", "flex-row", "justify-content-around", 2, "width", "100%"], [3, "click"], [1, "btn-red"], [1, "btn-new", 2, "width", "100px !important"], [2, "margin", "15px 0px", "overflow-x", "hidden !important", "height", "112px", "overflow-y", "scroll !important"], ["class", "d-flex flex-column mb-2", "style", "background: #F3F4F8;padding: 8px 16px 8px 16px;border-radius: 6px;", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "mb-2", 2, "background", "#F3F4F8", "padding", "8px 16px 8px 16px", "border-radius", "6px"], [1, ""], [1, "mb-1", 2, "color", "#1B1B1B !important", "font-weight", "550 !important"], [1, "d-flex", "flex-row", "align-items-center"], [1, "mb-0", 2, "color", "#1B1B1B !important", "font-weight", "550 !important"], [1, "mb-0", "ms-1", 2, "color", "#747474 !important", "margin-top", "0.16rem !important"], [1, "p-3", "mb-0"], [1, "invalid-feedback"]],
    template: function ProcedureDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "View Other User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_Template_img_click_5_listener() {
          return ctx.CloseViewOnlyMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-view-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProcedureDetailsComponent_img_9_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProcedureDetailsComponent_li_12_Template, 6, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ProcedureDetailsComponent_div_13_Template, 81, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ProcedureDetailsComponent_div_14_Template, 19, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ProcedureDetailsComponent_ng_template_15_Template, 0, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ProcedureDetailsComponent_ng_template_17_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ProcedureDetailsComponent_ng_template_19_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ProcedureDetailsComponent_ng_template_21_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17, 18)(25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Reason ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_Template_img_click_30_listener() {
          return ctx.CloseModal("Reject");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "form", 24)(32, "div", 25)(33, "div", 26)(34, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Choose Reason ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "ng-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 29)(38, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Enter Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Maximum 50 letters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ProcedureDetailsComponent_div_43_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 33)(45, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_Template_button_click_45_listener() {
          return ctx.CloseModal("Reject");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureDetailsComponent_Template_button_click_47_listener() {
          return ctx.SendPatientRequest("Rejected");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Add Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c2, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c3, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideViewOnlyMode == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, ctx.hideViewOnlyMode == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.mainTabsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.CurrentPatientSelection == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.CurrentPatientSelection == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.ReasonForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ReasonForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_2__.ViewInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
    styles: [".nav-pills .nav-link.active {\n  color: #fff !important;\n  background-color: #855EDB !important;\n  border: none !important;\n  border-radius: 0px 0px 0px 0px !important;\n  height: 32px !important;\n  padding: 5px 30px !important;\n  opacity: 1;\n  width: 100% !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 0px solid !important;\n}\n\n.nav[_ngcontent-%COMP%] {\n  background: #594585 !important;\n  height: 34px !important;\n  border-radius: 0px 10px 0px 0px !important;\n  text-align: center !important;\n  display: flex !important;\n  flex-wrap: nowrap !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  transition: none !important;\n  transform: none !important;\n  padding: 6px 30px !important;\n  opacity: 1;\n}\n\n  .nav-justified .nav-item {\n  flex-grow: 0 !important;\n}\n\n  .card-header {\n  padding: 3px 10px 3px 10px !important;\n  background: #ECECEC !important;\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 10px 0px;\n}\n\n.navs-link[_ngcontent-%COMP%] {\n  background: none;\n  display: block;\n  transition: none !important;\n  transform: none !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 0.6;\n  width: 125px !important;\n  font-weight: normal !important;\n  white-space: nowrap;\n}\n\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .navs-link[_ngcontent-%COMP%] {\n  border: none;\n}\n\n  .navs-link.active {\n  color: #fff !important;\n  background-color: #747474 !important;\n  border: 1px solid #747474 !important;\n  border-radius: 6px !important;\n  height: 22px !important;\n  padding: 4px 6px 4px 6px !important;\n  opacity: 1;\n  width: 125px !important;\n  font-weight: bolder !important;\n}\n  .navs-link.active .name {\n  color: #fff !important;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 0;\n  text-align: center;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  height: 4px !important;\n  cursor: pointer !important; \n\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px !important;\n  background: #8B8B8B !important;\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important; \n\n  cursor: pointer !important;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px #ECECEC !important;\n  border-radius: 10px !important;\n  cursor: pointer !important;\n}\n\n.hideViewOnlyArea[_ngcontent-%COMP%] {\n  display: none;\n  width: 1%;\n}\n\n.viewonlymode_header[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: #594585;\n  width: auto;\n  height: 32px;\n  border-radius: 10px 0px 0px 0px;\n  padding: 8px 9px;\n}\n\n.expandWorkArea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.TabsAlign[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 22px;\n  border-left: 1px solid;\n  margin-left: 1.4rem !important;\n  height: 588px !important;\n}\n\n.ChangeMainTab[_ngcontent-%COMP%] {\n  margin-left: 0.66rem !important;\n  margin-right: 0.66rem !important;\n  border-radius: 10px 10px 0px 0px !important;\n}\n.ChangeMainTab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px !important;\n}\n\n.SelectedVetting[_ngcontent-%COMP%] {\n  background-color: #855EDB !important;\n  border-radius: 6px !important;\n}\n.SelectedVetting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.protocol_details[_ngcontent-%COMP%] {\n  padding-right: 3px !important;\n  background-image: url(\"/assets/images/procedure_details.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 270px !important;\n  background-size: 16px 16px !important;\n  z-index: 1 !important;\n}\n\n[_nghost-%COMP%]     .ng-dropdown-panel-items {\n  background: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvcHJvY2VkdXJlLWRldGFpbHMvcHJvY2VkdXJlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFXQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQVJGOztBQVdBO0VBRUUsdUJBQUE7QUFURjs7QUFpQkE7RUFDRSxxQ0FBQTtFQUNBLDhCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWlCQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFkRjs7QUFpQkE7RUFDRSxZQUFBO0FBZEY7O0FBaUJBO0VBRUUsc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUFmRjtBQWlCRTtFQUNFLHNCQUFBO0FBZko7O0FBbUJBO0VBRUUsYUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQWpCSjs7QUFrREE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUEsRUFBQSxtQ0FBQTtBQS9DRjs7QUFrREE7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0RBQUEsRUFBQSxpREFBQTtFQUNBLDBCQUFBO0FBL0NGOztBQWtEQTtFQUNFLG9EQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQS9DRjs7QUFrREE7RUFFRSxhQUFBO0VBQ0EsU0FBQTtBQWhERjs7QUFtREE7RUFFRSxzQkFBQTtFQUF1QixtQkFBQTtFQUFvQixXQUFBO0VBQVksWUFBQTtFQUFhLCtCQUFBO0VBQWdDLGdCQUFBO0FBNUN0Rzs7QUErQ0E7RUFFRSxXQUFBO0FBN0NGOztBQWdEQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQTdDRjs7QUFnREE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7QUE3Q0Y7QUE4Q0U7RUFDRSwyQ0FBQTtBQTVDSjs7QUFnREE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0FBN0NGO0FBOENFO0VBQ0Usc0JBQUE7QUE1Q0o7O0FBZ0RBO0VBQ0UsNkJBQUE7RUFDQSx3RUFBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FBN0NGOztBQWdEQTtFQUVFLDJCQUFBO0FBOUNGIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZVxyXG57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzg1NUVEQiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZ7XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8vIC5uYXYtbGluazpob3ZlcntcclxuLy8gICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5uYXYtbGlua3tcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA2cHggMzBweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmF2LWp1c3RpZmllZCAubmF2LWl0ZW1cclxue1xyXG4gIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAuY29sLTlcclxuLy8ge1xyXG4vLyAgIHdpZHRoOiA3NCU7XHJcbi8vIH1cclxuXHJcbjo6bmctZGVlcCAuY2FyZC1oZWFkZXJ7XHJcbiAgcGFkZGluZzogM3B4IDEwcHggM3B4IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taXRlbXtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHggMHB4IDtcclxufVxyXG5cclxuLm5hdnMtbGlua3tcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA0cHggNnB4IDRweCA2cHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgd2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5uYXYtdGFicy1jdXN0b20gLm5hdi1pdGVtIC5uYXZzLWxpbmt7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgIC5uYXZzLWxpbmsuYWN0aXZlXHJcbntcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjNzQ3NDc0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6NHB4IDZweCA0cHggNnB4ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICB3aWR0aDogMTI1cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtaXRlbXNcclxue1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLy8gLnNjcm9sbC1jb250YWluZXIge1xyXG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkIHNpbHZlcjtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuLy8gICAmLmhpZGUtc2Nyb2xsYmFyIHtcclxuLy8gICAgIG92ZXJmbG93OiBhdXRvO1xyXG4vLyAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgJi5zaG93LXNjcm9sbCB7XHJcbi8vICAgICBvdmVyZmxvdzogYXV0bztcclxuLy8gICB9XHJcblxyXG4vLyAgIHVsIHtcclxuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZiAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWFyZ2luOiAuMXJlbTtcclxuLy8gICAgIHBhZGRpbmc6IC4ycmVtIC43cmVtO1xyXG4vLyAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM4QjhCOEIgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggI0VDRUNFQyAhaW1wb3J0YW50OyAvKiBTZXQgdGhlIGJvcmRlci1yYWRpdXMgb2YgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCAjRUNFQ0VDICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlkZVZpZXdPbmx5QXJlYVxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMSU7XHJcbn1cclxuXHJcbi52aWV3b25seW1vZGVfaGVhZGVyXHJcbntcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O2JhY2tncm91bmQ6ICM1OTQ1ODU7d2lkdGg6IGF1dG87aGVpZ2h0OiAzMnB4O2JvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAwcHg7cGFkZGluZzogOHB4IDlweDtcclxufVxyXG5cclxuLmV4cGFuZFdvcmtBcmVhXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLlRhYnNBbGlnbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDo1ODhweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5DaGFuZ2VNYWluVGFie1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjY2cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5TZWxlY3RlZFZldHRpbmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1NUVEQiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gIHB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnByb3RvY29sX2RldGFpbHN7XHJcbiAgcGFkZGluZy1yaWdodDogM3B4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGlzIHZhbHVlIHRvIGxlYXZlIHNwYWNlIGZvciB0aGUgaW1hZ2VcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3Byb2NlZHVyZV9kZXRhaWxzLnN2ZycpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDI3MHB4ICFpbXBvcnRhbnQ7IC8vIEFkanVzdCB0aGUgcG9zaXRpb24gYXMgbmVlZGVkXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpbWFnZVxyXG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtc1xyXG57XHJcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6037:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/procedure-work-area-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureWorkAreaRoutingModule: () => (/* binding */ ProcedureWorkAreaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _work_area_work_area_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-area/work-area.component */ 2279);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _work_area_work_area_component__WEBPACK_IMPORTED_MODULE_0__.WorkAreaComponent,
  canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class ProcedureWorkAreaRoutingModule {
  static #_ = this.ɵfac = function ProcedureWorkAreaRoutingModule_Factory(t) {
    return new (t || ProcedureWorkAreaRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ProcedureWorkAreaRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProcedureWorkAreaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 1371:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/procedure-work-area.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureWorkAreaModule: () => (/* binding */ ProcedureWorkAreaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _procedure_work_area_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procedure-work-area-routing.module */ 6037);
/* harmony import */ var _work_area_work_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-area/work-area.component */ 2279);
/* harmony import */ var _procedure_details_procedure_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./procedure-details/procedure-details.component */ 1197);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2195);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var _all_procedures_all_procedures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-procedures/all-procedures.component */ 276);
/* harmony import */ var _vetting_vetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vetting/vetting.component */ 3712);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/stepper */ 3507);
/* harmony import */ var angular_ng_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-ng-stepper */ 9226);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 6140);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 9825);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 1469);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3804);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 8460);
/* harmony import */ var ngx_slider_v2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-slider-v2 */ 9566);
/* harmony import */ var _procedure_details_booking_procedure_details_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./procedure-details-booking/procedure-details-booking.component */ 2133);
/* harmony import */ var _procedure_details_pre_procedure_procedure_details_pre_procedure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./procedure-details-pre-procedure/procedure-details-pre-procedure.component */ 4174);
/* harmony import */ var _procedure_details_intra_procedure_procedure_details_intra_procedure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./procedure-details-intra-procedure/procedure-details-intra-procedure.component */ 9681);
/* harmony import */ var _procedure_details_post_procedure_procedure_details_post_procedure_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./procedure-details-post-procedure/procedure-details-post-procedure.component */ 2430);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-info/view-info.component */ 3648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);



































class ProcedureWorkAreaModule {
  static #_ = this.ɵfac = function ProcedureWorkAreaModule_Factory(t) {
    return new (t || ProcedureWorkAreaModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: ProcedureWorkAreaModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _procedure_work_area_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcedureWorkAreaRoutingModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownModule.forRoot(), angular_ng_stepper__WEBPACK_IMPORTED_MODULE_14__.NgStepperModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__.CdkStepperModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__.AccordionModule.forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__.CollapseModule.forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_19__.TabsModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__.TooltipModule.forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__.ModalModule.forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_22__.CarouselModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, ngx_slider_v2__WEBPACK_IMPORTED_MODULE_24__.NgxSliderModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgSelectModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__.AgGridModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ProcedureWorkAreaModule, {
    declarations: [_work_area_work_area_component__WEBPACK_IMPORTED_MODULE_1__.WorkAreaComponent, _procedure_details_procedure_details_component__WEBPACK_IMPORTED_MODULE_2__.ProcedureDetailsComponent, _all_procedures_all_procedures_component__WEBPACK_IMPORTED_MODULE_3__.AllProceduresComponent, _vetting_vetting_component__WEBPACK_IMPORTED_MODULE_4__.VettingComponent, _procedure_details_booking_procedure_details_booking_component__WEBPACK_IMPORTED_MODULE_5__.ProcedureDetailsBookingComponent, _procedure_details_pre_procedure_procedure_details_pre_procedure_component__WEBPACK_IMPORTED_MODULE_6__.ProcedureDetailsPreProcedureComponent, _procedure_details_intra_procedure_procedure_details_intra_procedure_component__WEBPACK_IMPORTED_MODULE_7__.ProcedureDetailsIntraProcedureComponent, _procedure_details_post_procedure_procedure_details_post_procedure_component__WEBPACK_IMPORTED_MODULE_8__.ProcedureDetailsPostProcedureComponent, _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_9__.ViewInfoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _procedure_work_area_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcedureWorkAreaRoutingModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownModule, angular_ng_stepper__WEBPACK_IMPORTED_MODULE_14__.NgStepperModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_15__.CdkStepperModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_17__.AccordionModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_18__.CollapseModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_19__.TabsModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_20__.TooltipModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__.ModalModule, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_22__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, ngx_slider_v2__WEBPACK_IMPORTED_MODULE_24__.NgxSliderModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgSelectModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__.AgGridModule]
  });
})();

/***/ }),

/***/ 3712:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/vetting/vetting.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VettingComponent: () => (/* binding */ VettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class VettingComponent {
  static #_ = this.ɵfac = function VettingComponent_Factory(t) {
    return new (t || VettingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VettingComponent,
    selectors: [["app-vetting"]],
    decls: 2,
    vars: 0,
    template: function VettingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vetting works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3648:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/view-info/view-info.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewInfoComponent: () => (/* binding */ ViewInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 6140);







function ViewInfoComponent_accordion_group_1_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Protocoling Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.VettingandProtocolingDetails == null ? null : ctx_r4.VettingandProtocolingDetails.protocol == null ? null : ctx_r4.VettingandProtocolingDetails.protocol.protocol_notes);
  }
}
function ViewInfoComponent_accordion_group_1_div_8_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Vetting Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.VettingandProtocolingDetails == null ? null : ctx_r5.VettingandProtocolingDetails.vetting == null ? null : ctx_r5.VettingandProtocolingDetails.vetting.vetting_notes);
  }
}
function ViewInfoComponent_accordion_group_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12)(8, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Protocol Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12)(13, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Your Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ViewInfoComponent_accordion_group_1_div_8_div_17_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16)(19, "div", 12)(20, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Vetting Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ViewInfoComponent_accordion_group_1_div_8_div_24_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.protocol == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.protocolling_types == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.protocolling_types.name) ? ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.protocol == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.protocolling_types == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.protocolling_types.name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.protocol == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.protocol_details) ? ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.protocol == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.protocol_details : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.protocol == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.add_your_protocol) ? ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.protocol == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.add_your_protocol : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.protocol == null ? null : ctx_r3.VettingandProtocolingDetails.protocol.protocol_notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.vetting == null ? null : ctx_r3.VettingandProtocolingDetails.vetting.vetting_types == null ? null : ctx_r3.VettingandProtocolingDetails.vetting.vetting_types.name) ? ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.vetting == null ? null : ctx_r3.VettingandProtocolingDetails.vetting.vetting_types == null ? null : ctx_r3.VettingandProtocolingDetails.vetting.vetting_types.name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.VettingandProtocolingDetails == null ? null : ctx_r3.VettingandProtocolingDetails.vetting == null ? null : ctx_r3.VettingandProtocolingDetails.vetting.vetting_notes);
  }
}
function ViewInfoComponent_accordion_group_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "accordion-group", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("isOpenChange", function ViewInfoComponent_accordion_group_1_Template_accordion_group_isOpenChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const x_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.OnClickingViewOnlyMode(x_r1.headername, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4)(3, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 7)(7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewInfoComponent_accordion_group_1_div_8_Template, 25, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOpen", ctx_r0.isFirstOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", x_r1.headername, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !(_r2 == null ? null : _r2.isOpen) ? "mdi mdi-chevron-down accor-plus-icon" : "mdi mdi-chevron-up accor-plus-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", x_r1.headername == "VETTING & PROTOCOLING");
  }
}
class ViewInfoComponent {
  constructor(http, allService, toastr, formbuilder) {
    this.http = http;
    this.allService = allService;
    this.toastr = toastr;
    this.formbuilder = formbuilder;
    // @ViewChildren('group') accordionGroups : QueryList;
    this.header_viewOnlymode = [];
    this.VettingandProtocolingDetails = [];
  }
  ngOnInit() {
    this.http.get('assets/json/viewOnlyMode.json').subscribe(res => {
      this.header_viewOnlymode = res;
    });
  }
  OnClickingViewOnlyMode(type, condition) {
    switch (type) {
      case 'VETTING & PROTOCOLING':
        {
          if (condition == true) {
            //&& this.VettingandProtocolingDetails.length == 0
            let MRN = localStorage.getItem('MRN_NO');
            let PatientID = localStorage.getItem('PatientID');
            this.allService.GetVettingandProtocolingData(PatientID, MRN).subscribe({
              next: res => {
                if (res.status == 'Success') {
                  console.log('Vetting and Protocol Data', res.data);
                  this.VettingandProtocolingDetails = res.data;
                }
              },
              error: res => {
                this.toastr.error(`Something went wrong`, 'UnSuccessful', {
                  positionClass: 'toast-top-center',
                  timeOut: 2000
                });
              }
            });
            break;
          }
        }
      case 'PROCEDURE TEAM':
        {
          break;
        }
    }
  }
  static #_ = this.ɵfac = function ViewInfoComponent_Factory(t) {
    return new (t || ViewInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_0__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ViewInfoComponent,
    selectors: [["app-view-info"]],
    decls: 2,
    vars: 3,
    consts: [[1, "accordion", 3, "closeOthers", "isAnimated"], ["class", "accordion-item", 3, "isOpen", "isOpenChange", 4, "ngFor", "ngForOf"], [1, "accordion-item", 3, "isOpen", "isOpenChange"], ["group", ""], ["accordion-heading", "", 1, "d-flex"], [1, "p-2", "flex-grow-1", "mb-0", 2, "font-weight", "bold !important", "color", "#000 !important"], [1, "float-end"], ["src", "assets/images/detailed_view.svg", "alt", "detailed_view", "width", "10px", "height", "10px", 1, "mb-1", "me-2"], [1, "mdi", 2, "font-size", "17px", 3, "ngClass"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], [1, "py-2", 2, "border-bottom", "0.5px solid #8B8B8B !important"], [1, "d-flex", "flex-column", "mb-3"], [1, "mb-1"], [1, "mb-0", 2, "font-weight", "400 !important"], ["class", "d-flex flex-column mb-2", 4, "ngIf"], [1, "py-2"], [1, "d-flex", "flex-column", "mb-2"]],
    template: function ViewInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewInfoComponent_accordion_group_1_Template, 10, 4, "accordion-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.header_viewOnlymode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionPanelComponent],
    styles: [".accordion-item[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvdmlldy1pbmZvL3ZpZXctaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24taXRlbXtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHggMHB4IDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2279:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-work-area/work-area/work-area.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkAreaComponent: () => (/* binding */ WorkAreaComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/authfake.service */ 9634);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2195);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 6140);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3804);
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ 8460);
/* harmony import */ var ngx_slider_v2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-slider-v2 */ 9566);
/* harmony import */ var _all_procedures_all_procedures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-procedures/all-procedures.component */ 276);

















const _c0 = ["delete_modal"];
const _c1 = ["delete_indication_modal"];
const _c2 = ["delete_post_modal"];
const _c3 = ["delete_lab_modal"];
const _c4 = ["delete_mediation_modal"];
const _c5 = ["centerDataModal"];
const _c6 = ["addNotesModal"];
function WorkAreaComponent_div_44_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 150)(1, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_li_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44);
      const i_r42 = restoredCtx.index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.toggleTabIcon(i_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](x_r41.active == true ? "nav-link active" : "nav-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", x_r41.template, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", x_r41.active == true ? x_r41.activeimg : x_r41.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r41.tabs);
  }
}
function WorkAreaComponent_div_44_ul_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 155)(1, "li", 156)(2, "div", 157)(3, "div", 158)(4, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_22_Template_input_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const i_r46 = restoredCtx.index;
      const y_r45 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r47.updateCheckboxStates(i_r46, $event.target.checked, ctx_r47.check_list_data.length, "Requesting", y_r45.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 160)(6, "div", 161)(7, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h4", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_22_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.AddNotes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const y_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", y_r45.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r45.check_list_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r45.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r45.created_at);
  }
}
function WorkAreaComponent_div_44_ul_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 155)(1, "li", 156)(2, "div", 157)(3, "div", 158)(4, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_33_Template_input_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const i_r51 = restoredCtx.index;
      const y_r50 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r52.updateCheckboxStates(i_r51, $event.target.checked, ctx_r52.check_list_data1.length, "Scheduling", y_r50.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 160)(6, "div", 161)(7, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h4", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_33_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.AddNotes(ctx_r54.x.stage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const y_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", y_r50.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r50.check_list_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r50.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r50.created_at);
  }
}
function WorkAreaComponent_div_44_ul_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 155)(1, "li", 156)(2, "div", 157)(3, "div", 158)(4, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_44_Template_input_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58);
      const i_r56 = restoredCtx.index;
      const y_r55 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r57.updateCheckboxStates(i_r56, $event.target.checked, ctx_r57.check_list_data2.length, "Pre-Procedure", y_r55.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 160)(6, "div", 161)(7, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h4", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_44_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r59.AddNotes(ctx_r59.x.stage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const y_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", y_r55.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r55.check_list_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r55.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r55.created_at);
  }
}
function WorkAreaComponent_div_44_ul_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 155)(1, "li", 156)(2, "div", 157)(3, "div", 158)(4, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_55_Template_input_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63);
      const i_r61 = restoredCtx.index;
      const y_r60 = restoredCtx.$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r62.updateCheckboxStates(i_r61, $event.target.checked, ctx_r62.check_list_data3.length, "Intra-Procedure", y_r60.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 160)(6, "div", 161)(7, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h4", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_55_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r64.AddNotes(ctx_r64.x.stage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const y_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", y_r60.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r60.check_list_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r60.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r60.created_at);
  }
}
function WorkAreaComponent_div_44_ul_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 155)(1, "li", 156)(2, "div", 157)(3, "div", 158)(4, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_66_Template_input_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68);
      const i_r66 = restoredCtx.index;
      const y_r65 = restoredCtx.$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r67.updateCheckboxStates(i_r66, $event.target.checked, ctx_r67.check_list_data4.length, "Post-Procedure", y_r65.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 160)(6, "div", 161)(7, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h4", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_44_ul_66_Template_div_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r69.AddNotes(ctx_r69.x.stage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const y_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r65.check_list_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r65.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r65.created_at);
  }
}
function WorkAreaComponent_div_44_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "h4", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 170)(7, "h4", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h4", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", x_r70.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r70.created_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", x_r70.stage_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", x_r70.procedure, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", x_r70.added_by, "-", x_r70.created_by, "");
  }
}
function WorkAreaComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 126)(1, "div", 127)(2, "div", 128)(3, "h1", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "KIZIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 130)(6, "ul", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WorkAreaComponent_div_44_li_7_Template, 6, 5, "li", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 133)(9, "div", 134)(10, "div", 135)(11, "accordion", 136)(12, "accordion-group", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isOpenChange", function WorkAreaComponent_div_44_Template_accordion_group_isOpenChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r71.onAccordionOpen("Requesting", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h4", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Requesting");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 142)(19, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Yet to start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, WorkAreaComponent_div_44_ul_22_Template, 16, 4, "ul", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "accordion-group", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isOpenChange", function WorkAreaComponent_div_44_Template_accordion_group_isOpenChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r73.onAccordionOpen("Scheduling", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h4", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Scheduling");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 142)(30, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Yet to start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, WorkAreaComponent_div_44_ul_33_Template, 16, 4, "ul", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "accordion-group", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isOpenChange", function WorkAreaComponent_div_44_Template_accordion_group_isOpenChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r74.onAccordionOpen("Pre-Procedure", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h4", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Pre-Procedure");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 142)(41, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Yet to start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, WorkAreaComponent_div_44_ul_44_Template, 16, 4, "ul", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "accordion-group", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isOpenChange", function WorkAreaComponent_div_44_Template_accordion_group_isOpenChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r75.onAccordionOpen("Intra-Procedure", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "h4", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " Intra-Procedure");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 142)(52, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Yet to start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, WorkAreaComponent_div_44_ul_55_Template, 16, 4, "ul", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "accordion-group", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("isOpenChange", function WorkAreaComponent_div_44_Template_accordion_group_isOpenChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r72);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r76.onAccordionOpen("Post-Procedure", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h4", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " Post-Proceudre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 142)(63, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Yet to start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, WorkAreaComponent_div_44_ul_66_Template, 16, 3, "ul", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 146)(68, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 147)(71, "div", 130)(72, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, WorkAreaComponent_div_44_div_73_Template, 13, 6, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.kizintabValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOthers", false)("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", !(_r30 == null ? null : _r30.isOpen) ? "mdi mdi-chevron-down accor-plus-icon" : "mdi mdi-chevron-up accor-plus-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.check_list_data);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", !(_r30 == null ? null : _r30.isOpen) ? "mdi mdi-chevron-down accor-plus-icon" : "mdi mdi-chevron-up accor-plus-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.check_list_data1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", !(_r30 == null ? null : _r30.isOpen) ? "mdi mdi-chevron-down accor-plus-icon" : "mdi mdi-chevron-up accor-plus-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.check_list_data2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", !(_r30 == null ? null : _r30.isOpen) ? "mdi mdi-chevron-down accor-plus-icon" : "mdi mdi-chevron-up accor-plus-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.check_list_data3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", !(_r30 == null ? null : _r30.isOpen) ? "mdi mdi-chevron-down accor-plus-icon" : "mdi mdi-chevron-up accor-plus-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.check_list_data4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.kizinData);
  }
}
function WorkAreaComponent_div_45_slide_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const slide_r94 = ctx.$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", slide_r94.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("ngClass", ctx_r77.Alert_name == slide_r94.name ? "alert_images_dull" : "alert_images")("tooltip", slide_r94.tooltip);
  }
}
function WorkAreaComponent_div_45_div_73_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", x_r97.value, " ");
  }
}
function WorkAreaComponent_div_45_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 237)(1, "div", 238)(2, "div", 239)(3, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Select all");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, WorkAreaComponent_div_45_div_73_div_8_Template, 4, 1, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r78.Alert_dropdown_values);
  }
}
function WorkAreaComponent_div_45_img_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 50);
  }
}
function WorkAreaComponent_div_45_img_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 53);
  }
}
function WorkAreaComponent_div_45_img_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 55);
  }
}
function WorkAreaComponent_div_45_img_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 57);
  }
}
function WorkAreaComponent_div_45_tr_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r98.diagnosis);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r98.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r98.date);
  }
}
function WorkAreaComponent_div_45_td_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_div_45_tr_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_indication_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_indication_r99.diagnosis);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_indication_r99.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_indication_r99.date);
  }
}
function WorkAreaComponent_div_45_td_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_div_45_tr_198_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const itempostdiagonis_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itempostdiagonis_r100.diagnosis);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itempostdiagonis_r100.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itempostdiagonis_r100.date);
  }
}
function WorkAreaComponent_div_45_td_200_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_div_45_tr_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const itemlab_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemlab_r101.test_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemlab_r101.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemlab_r101.date);
  }
}
function WorkAreaComponent_div_45_td_222_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_div_45_tr_242_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const itemMediation_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemMediation_r102.test_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemMediation_r102.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itemMediation_r102.date);
  }
}
function WorkAreaComponent_div_45_td_244_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c7 = function (a0, a1, a2) {
  return {
    "mrp": a0,
    "house": a1,
    "escort": a2
  };
};
function WorkAreaComponent_div_45_div_251_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 247)(1, "p", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 206)(7, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r103.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r103.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](x_r103.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](5, _c7, x_r103.role === "MRP Doctor", x_r103.role === "House keeping", x_r103.role === "Patient Escor"));
  }
}
const _c8 = function () {
  return [];
};
function WorkAreaComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 126)(1, "div", 127)(2, "div", 174)(3, "div", 175)(4, "img", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_img_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r104.go_back_to_Kizin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Patient Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 179)(9, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 181)(11, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h4", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 185)(16, "h1", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 187)(21, "div", 188)(22, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 188)(27, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "DOB");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 188)(32, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Patient Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 188)(37, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 190)(42, "div", 188)(43, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 188)(48, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Blood");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 188)(53, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 188)(58, "h4", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 191)(63, "div", 192)(64, "carousel", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, WorkAreaComponent_div_45_slide_65_Template, 2, 3, "slide", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 194)(67, "div", 195)(68, "div", 196)(69, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "i", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, WorkAreaComponent_div_45_div_73_Template, 9, 1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "img", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_img_click_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](300);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r19.show());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 202)(76, "p", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Vitals");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "h4", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "11/2/2023 15.25 by Leslie Alexander");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 208)(85, "div", 45)(86, "ul", 209)(87, "li", 210)(88, "a", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_a_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r107.setActiveTab(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, WorkAreaComponent_div_45_img_90_Template, 1, 0, "img", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Clinical History");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "li", 210)(94, "a", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_a_click_94_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r108.setActiveTab(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](96, WorkAreaComponent_div_45_img_96_Template, 1, 0, "img", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Lab");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "li", 210)(100, "a", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_a_click_100_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r109.setActiveTab(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, WorkAreaComponent_div_45_img_102_Template, 1, 0, "img", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Mediation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "li", 210)(106, "a", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_a_click_106_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r110.setActiveTab(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, WorkAreaComponent_div_45_img_108_Template, 1, 0, "img", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Care Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "li", 210)(112, "a", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_a_click_112_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r111.showModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "img", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 58)(116, "div", 222)(117, "div", 45)(118, "ul", 60)(119, "li", 210)(120, "a", 223)(121, "div", 49)(122, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Pre Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "li", 210)(125, "a", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_a_click_125_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r112.ClinicalHistorySubTab("indication"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 49)(127, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Indication");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "li", 210)(130, "a", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_a_click_130_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r113.ClinicalHistorySubTab("post_diagnosis"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 49)(132, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Post Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 64)(135, "div", 226)(136, "div", 227)(137, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Patient's medical background");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_div_click_139_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r114.showEditableModal("pre_diagnosis"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "Pre Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "div", 68)(144, "table", 70)(145, "thead", 71)(146, "tr")(147, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](154, WorkAreaComponent_div_45_tr_154_Template, 7, 3, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](156, WorkAreaComponent_div_45_td_156_Template, 2, 0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 229)(158, "div", 227)(159, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "Patient's medical background");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_div_click_161_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r115.showEditableModal("indication"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](162, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "Indication");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 68)(166, "table", 70)(167, "thead", 71)(168, "tr")(169, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](176, WorkAreaComponent_div_45_tr_176_Template, 7, 3, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](178, WorkAreaComponent_div_45_td_178_Template, 2, 0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "div", 230)(180, "div", 227)(181, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "Patient's medical background");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_div_click_183_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r116.showEditableModal("post_diagnosis"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](184, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Post Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "div", 68)(188, "table", 70)(189, "thead", 71)(190, "tr")(191, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](198, WorkAreaComponent_div_45_tr_198_Template, 7, 3, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](200, WorkAreaComponent_div_45_td_200_Template, 2, 0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "div", 231)(202, "div", 84)(203, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "EST X-RAY,PA AND LATERAL (701020)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, "case provide");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_div_click_207_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r117.showEditableModal("lab"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](208, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "div", 86)(210, "table", 70)(211, "thead", 71)(212, "tr")(213, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "Test Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](216, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](220, WorkAreaComponent_div_45_tr_220_Template, 7, 3, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](222, WorkAreaComponent_div_45_td_222_Template, 2, 0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "div", 232)(224, "div", 84)(225, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "The previous/current medication of the");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](227, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228, "patients are listed below.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_45_Template_div_click_229_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r118.showEditableModal("medication"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](230, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "div", 86)(232, "table", 70)(233, "thead", 71)(234, "tr")(235, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, "Test Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](240, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](242, WorkAreaComponent_div_45_tr_242_Template, 7, 3, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](244, WorkAreaComponent_div_45_td_244_Template, 2, 0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "div", 233)(246, "div", 84)(247, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](248, "Contact care team member is here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](250, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](251, WorkAreaComponent_div_45_div_251_Template, 9, 9, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails == null ? null : ctx_r1.CurrentPatientDetails.patient_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.CurrentPatientDetails == null ? null : ctx_r1.CurrentPatientDetails.patient_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("MRN : ", ctx_r1.CurrentPatientDetails == null ? null : ctx_r1.CurrentPatientDetails.mrn_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.gender ? ctx_r1.CurrentPatientDetails.gender : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.dob ? ctx_r1.CurrentPatientDetails.dob : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.patient_type ? ctx_r1.CurrentPatientDetails.patient_type : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.language ? ctx_r1.CurrentPatientDetails.language : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.age ? ctx_r1.CurrentPatientDetails.age : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.blood_group ? ctx_r1.CurrentPatientDetails.blood_group : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.height ? ctx_r1.CurrentPatientDetails.height : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.CurrentPatientDetails.weight ? ctx_r1.CurrentPatientDetails.weight : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsPerSlide", ctx_r1.itemsPerSlide)("singleSlideOffset", ctx_r1.singleSlideOffset)("startFromIndex", 0)("interval", 0)("showIndicators", false)("noWrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.activeTab === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.activeTab === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.activeTab === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.activeTab === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.clinical_history ? ctx_r1.clinical_history : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](41, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.clinical_history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.clinical_history_indication_data ? ctx_r1.clinical_history_indication_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](42, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.clinical_history_indication_data.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.clinical_history_postdiagonis_data ? ctx_r1.clinical_history_postdiagonis_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.clinical_history_postdiagonis_data.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.lab_data ? ctx_r1.lab_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](44, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.lab_data.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.mediation_data ? ctx_r1.mediation_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](45, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.mediation_data.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.careteam_data);
  }
}
function WorkAreaComponent_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 252)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_129_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r122);
      const i_r120 = restoredCtx.index;
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r121.deleteRow(i_r120));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r120 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx_r3.currentDateTime);
  }
}
function WorkAreaComponent_tr_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_132_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r125);
      const item_r123 = restoredCtx.$implicit;
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r124.deletePreDiagoanis(item_r123.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r123.diagnosis);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r123.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r123.date);
  }
}
function WorkAreaComponent_td_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_tr_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 252)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_163_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r129);
      const i_r127 = restoredCtx.index;
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r128.deleteRowIndication(i_r127));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r127 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx_r6.currentDateTime);
  }
}
function WorkAreaComponent_tr_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_166_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const item_r130 = restoredCtx.$implicit;
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r131.deleteIndication(item_r130.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r130.diagnosis);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r130.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r130.date);
  }
}
function WorkAreaComponent_td_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_tr_197_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 252)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_197_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r136);
      const i_r134 = restoredCtx.index;
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r135.deleteRowPostDiagonis(i_r134));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r134 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx_r9.currentDateTime);
  }
}
function WorkAreaComponent_tr_200_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_200_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r139);
      const itempostdiagonispopup_r137 = restoredCtx.$implicit;
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r138.deletePostdiagonis(itempostdiagonispopup_r137.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const itempostdiagonispopup_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itempostdiagonispopup_r137.diagnosis);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itempostdiagonispopup_r137.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](itempostdiagonispopup_r137.date);
  }
}
function WorkAreaComponent_td_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_tr_234_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 252)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_234_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r143);
      const i_r141 = restoredCtx.index;
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r142.deleteRowLab(i_r141));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r141 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx_r12.currentDateTime);
  }
}
function WorkAreaComponent_tr_237_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_237_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r146);
      const item_r144 = restoredCtx.$implicit;
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r145.deleteLab(item_r144.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r144 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r144.test_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r144.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r144.date);
  }
}
function WorkAreaComponent_td_239_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_tr_271_Template(rf, ctx) {
  if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 252)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_271_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r150);
      const i_r148 = restoredCtx.index;
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r149.deleteRowMediation(i_r148));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r148 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx_r15.currentDateTime);
  }
}
function WorkAreaComponent_tr_274_Template(rf, ctx) {
  if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_tr_274_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r153);
      const item_r151 = restoredCtx.$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r152.deleteMediation(item_r151.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r151 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r151.test_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r151.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r151.date);
  }
}
function WorkAreaComponent_td_276_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_div_292_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r154.owner);
  }
}
function WorkAreaComponent_div_292_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkAreaComponent_div_292_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r163);
      const x_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](x_r154.owner = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", x_r154.owner);
  }
}
function WorkAreaComponent_div_292_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", x_r154.role, " ");
  }
}
function WorkAreaComponent_div_292_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkAreaComponent_div_292_input_4_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r168);
      const x_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](x_r154.role = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", x_r154.role);
  }
}
function WorkAreaComponent_div_292_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkAreaComponent_div_292_p_1_Template, 2, 1, "p", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkAreaComponent_div_292_input_2_Template, 1, 1, "input", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WorkAreaComponent_div_292_p_3_Template, 2, 1, "p", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WorkAreaComponent_div_292_input_4_Template, 1, 1, "input", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 206)(7, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r154 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r18.careteam_editable_field);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.careteam_editable_field);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r18.careteam_editable_field);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.careteam_editable_field);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](x_r154.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](7, _c7, x_r154.role === "MRP Doctor", x_r154.role === "House keeping", x_r154.role === "Patient Escor"));
  }
}
function WorkAreaComponent_div_312_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 279)(1, "ngx-slider", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkAreaComponent_div_312_div_11_Template_ngx_slider_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r174);
      const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r173.edit_alert_range_value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r172.options)("value", x_r170.input_value)("ngModel", ctx_r172.edit_alert_range_value);
  }
}
const _c9 = function (a0) {
  return {
    "bg-active": a0
  };
};
function WorkAreaComponent_div_312_Template(rf, ctx) {
  if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 271)(1, "div", 272)(2, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 194)(7, "input", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkAreaComponent_div_312_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r177);
      const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r176.edit_alert_range_value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 194)(9, "div", 276)(10, "input", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_312_Template_input_click_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r177);
      const x_r170 = restoredCtx.$implicit;
      const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r178.enableAlert(x_r170.alert_name, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, WorkAreaComponent_div_312_div_11_Template, 2, 3, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r170 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c9, ctx_r20.Alert_name == x_r170.alert_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", x_r170.path_img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", x_r170.alert_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", x_r170.input_value)("ngModel", ctx_r20.edit_alert_range_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r20.Alert_name == x_r170.alert_name);
  }
}
function WorkAreaComponent_div_332_div_11_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r184.owner);
  }
}
function WorkAreaComponent_div_332_div_11_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 300)(1, "a", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "View attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function WorkAreaComponent_div_332_div_11_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 303)(1, "div", 44)(2, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 305)(5, "p", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const y_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r184.Notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", y_r184.Author, " - ", y_r184.roles, "");
  }
}
function WorkAreaComponent_div_332_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 289)(1, "div", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WorkAreaComponent_div_332_div_11_div_1_span_5_Template, 2, 1, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 294)(7, "h1", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WorkAreaComponent_div_332_div_11_div_1_div_9_Template, 4, 0, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_div_332_div_11_div_1_Template_div_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r192);
      const j_r185 = restoredCtx.index;
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r191.reply_notes(j_r185));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, WorkAreaComponent_div_332_div_11_div_1_div_13_Template, 11, 3, "div", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r184 = ctx.$implicit;
    const j_r185 = ctx.index;
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", y_r184.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r184.Author);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", y_r184.owner == "You");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](y_r184.Notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", y_r184.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r183.reply_id == j_r185);
  }
}
function WorkAreaComponent_div_332_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkAreaComponent_div_332_div_11_div_1_Template, 14, 6, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r181.comments_for_tasklist);
  }
}
function WorkAreaComponent_div_332_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WorkAreaComponent_div_332_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 281)(1, "div", 282)(2, "div", 283)(3, "h1", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h1", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Order info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h1", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, WorkAreaComponent_div_332_div_11_Template, 2, 1, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WorkAreaComponent_div_332_div_12_Template, 2, 0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r179 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", x_r179.Procedure_Stage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("By, ", x_r179.order_by, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r22.comments_for_tasklist.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r22.comments_for_tasklist.length == 0);
  }
}
function WorkAreaComponent_div_334_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c10 = function () {
  return {
    withTimepicker: true,
    rangeInputFormat: "MMMM Do YYYY, h:mm:ss a",
    dateInputFormat: "MMMM Do YYYY, h:mm:ss a",
    showWeekNumbers: false
  };
};
const _c11 = function (a1) {
  return {
    "nav-link": true,
    "active": a1
  };
};
const _c12 = function (a1) {
  return {
    "tab-pane": true,
    "active show": a1
  };
};
const _c13 = function (a1) {
  return {
    "navs-links": true,
    "active": a1
  };
};
const _c14 = function (a1) {
  return {
    "tab-pane": true,
    " active show": a1
  };
};
class WorkAreaComponent {
  constructor(http, modalService, router, allService, authService, toastr, formBuilder, datePipe) {
    this.http = http;
    this.modalService = modalService;
    this.router = router;
    this.allService = allService;
    this.authService = authService;
    this.toastr = toastr;
    this.formBuilder = formBuilder;
    this.datePipe = datePipe;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.apiUrl;
    this.clinicalDiagnosis = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.clinicalDiagnosis;
    this.patientLabDelete = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.patientLabDelete;
    this.saveDataLab1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.saveDataLab;
    this.getLabDetails1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.getLabDetails;
    this.deletePostDiagnol1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.deletePostDiagnol;
    this.saveDatapostDiagnosis1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.saveDatapostDiagnosis;
    this.clinicalPostDiagnosis = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.clinicalPostDiagnosis;
    this.deleteIndicationData = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.deleteIndicationData;
    this.saveDataIndication1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.saveDataIndication;
    this.clinicalHistoryIndication = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.clinicalHistoryIndication;
    this.deletePreDiagnosis = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.deletePreDiagnosis;
    this.saveData1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.saveData;
    this.getMediationDetails = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.getMediationDetails;
    this.saveMediationData1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.saveMediationData;
    this.deleteMediationData = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.deleteMediationData;
    this.checkLists = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.getCheckListData;
    this.CurrentPatientDetails = [];
    this.kizintabValues = [];
    this.taskList = [];
    this.procedureStagelist = [];
    this.timeline_data = [];
    this.clinical_history = [];
    this.clinical_history_indication_data = [];
    this.clinical_history_postdiagonis_data = [];
    this.check_list_data = [{
      checked: false
    }];
    this.check_list_data1 = [{
      checked: false
    }];
    this.check_list_data2 = [{
      checked: false
    }];
    this.check_list_data3 = [{
      checked: false
    }];
    this.check_list_data4 = [{
      checked: false
    }];
    this.lab_data = [];
    this.mediation_data = [];
    this.careteam_data = [];
    this.Alert_data = [];
    this.Alert_dropdown_values = [];
    this.tasklist_notes = [];
    this.comments_for_tasklist = [];
    this.isFirstOpen = true;
    this.show_patient_details = false;
    this.fall_alert = '';
    this.isolation_alert = '';
    this.pregnant_alert = '';
    this.covid_alert = '';
    this.getCheckBoxesData1 = [];
    this.getCheckBoxesData2 = [];
    this.getCheckBoxesData3 = [];
    this.getCheckBoxesData4 = [];
    this.getCheckBoxesData5 = [];
    this.kizinData = [];
    // Editable Field
    this.pre_diagnosis_editable_field = false;
    this.indication_editable_field = false;
    this.post_diagnosis_editable_field = false;
    this.lab_editable_field = false;
    this.medication_editable_field = false;
    this.careteam_editable_field = false;
    // Main Tabs
    this.active_tabs_clinical_history = false;
    this.active_tabs_lab = false;
    this.active_tabs_medication = false;
    this.active_tabs_care_team = false;
    // Sub Tabs
    this.active_tabs_pre_diagnosis = false;
    this.active_tabs_indication = false;
    this.active_tabs_post_diagnosis = false;
    this.active_status = 'clinical_histroy';
    this.active_sub_status = 'pre_diagnosis';
    this.activeTab = 1;
    this.activeTab_Modal = 1;
    this.itemsPerSlide = 4;
    this.singleSlideOffset = true;
    this.patient_id = localStorage.getItem('PatientID');
    this.mrn_number = localStorage.getItem('MRN_NO');
    this.procedure_id = localStorage.getItem('Procedure');
    this.slides = [{
      "image": 'assets/images/fall_fill.svg',
      "name": 'Fall',
      "tooltip": 'Fall 19-25'
    }, {
      "image": 'assets/images/isolation_fill.svg',
      "name": 'Isolation',
      "tooltip": 'Isolation 14-23'
    }, {
      "image": 'assets/images/pregnant_fill.svg',
      "name": 'Pregnant',
      "tooltip": 'Pregnant 10-20'
    }, {
      "image": 'assets/images/covid_fill.svg',
      "name": 'Covid',
      "tooltip": 'Covid 16-25'
    }];
    //slider variables
    this.edit_alert_range_value = 0;
    this.options = {
      floor: 0,
      ceil: 100,
      showSelectionBar: true,
      getPointerColor: value => {
        return '#855EDB';
      }
    };
    this.hide_comment_field = true;
  }
  ngOnInit() {
    this.addNotesModal?.show();
    this.tableForm = this.formBuilder.group({
      rows: this.formBuilder.array([])
    });
    this.tableFormIndication = this.formBuilder.group({
      rows: this.formBuilder.array([])
    });
    this.tableFormPostdiagonis = this.formBuilder.group({
      rows: this.formBuilder.array([])
    });
    this.tablelab = this.formBuilder.group({
      rows: this.formBuilder.array([])
    });
    this.tableMedication = this.formBuilder.group({
      rows: this.formBuilder.array([])
    });
    this.currentDateTime = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm');
    this.http.get('assets/json/mini-list.json').subscribe(res => {
      // this.miniList_details = res;
    });
    this.http.get('assets/json/procedure-alerts.json').subscribe(res => {
      this.procedureAlertsData = res;
    });
    this.http.get('assets/json/kizin-main-tabs.json').subscribe(res => {
      this.kizintabValues = res;
    });
    this.http.get('assets/json/procedure-stage-list.json').subscribe(res => {
      this.procedureStagelist = res;
      for (let i = 0; i < res.length; i++) {
        if (res[i].list) {
          this.taskList.push(res[i].list);
        }
      }
    });
    this.allService.GetAllCheckList().subscribe({
      next: res => {
        console.log(res);
      },
      error: res => {
        console.log(res);
      }
    });
    // this.http.get<timeline>('assets/json/timeline.json').subscribe((res: any) => {
    //   this.timeline_data = res;
    // });
    /** Patient Clinical History Table Stat API By Gani */
    this.Clinical_history().subscribe(response => {
      this.clinical_history = response.data;
      //console.log('Clinical History Response : ',this.clinical_history);
    });
    /** Patient Clinical History Table End API By Gani */
    /*  this.http.get<TabData>('assets/json/lab_data.json').subscribe((res: any) => {
       this.lab_data = res;
     }); */
    this.http.get('assets/json/care_team_member.json').subscribe(res => {
      this.careteam_data = res;
    });
    this.http.get('assets/json/Alert_data.json').subscribe(res => {
      this.Alert_data = res;
    });
    this.http.get('assets/json/Alerts_dropdown.json').subscribe(res => {
      this.Alert_dropdown_values = res;
    });
    this.http.get('assets/json/task_notes.json').subscribe(res => {
      this.tasklist_notes = res;
      this.comments_for_tasklist = res[0].comments;
    });
    let PatientID = localStorage.getItem('PatientID');
    if (PatientID) {
      this.allService.GetSpecificPatientProcedureDetails(PatientID).subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log(res);
            this.CurrentPatientDetails = res.patient;
          }
          return 0;
        },
        error: res => {
          this.toastr.error(`Something went wrong`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
    }
    this.fetchCheckListData('Requesting', 'check_list_data');
    this.kizinTimeLineData();
  }
  toggleTabIcon(index) {
    console.log('index', index);
    this.kizintabValues[index].active = !this.kizintabValues[index].active;
    for (let i = 0; i < 3; i++) {
      if (i != index) {
        this.kizintabValues[i].active = false;
      }
    }
  }
  onPatientDetailsButtonClicked() {
    this.show_patient_details = true;
  }
  go_back_to_Kizin() {
    this.show_patient_details = false;
  }
  changeAlerts(data) {
    switch (data) {
      case 'fall':
        {
          this.fall_alert = data;
        }
      case 'allergies':
        {
          this.isolation_alert = data;
        }
      case 'pregnant':
        {
          this.pregnant_alert = data;
        }
      case 'covid':
        {
          this.covid_alert = data;
        }
    }
  }
  setActiveTab(index) {
    this.activeTab = index;
    console.log('Main Tab', index);
    if (index === 2) {
      this.GetLab();
    } else if (index === 3) this.GetMediation();
  }
  setActiveTabModal(index) {
    this.activeTab_Modal = index;
  }
  edit_field(data) {
    switch (data) {
      case 'pre_diagnosis':
        {
          this.pre_diagnosis_editable_field = true;
          break;
        }
      case 'indication':
        {
          this.indication_editable_field = true;
          break;
        }
      case 'post_diagnosis':
        {
          this.post_diagnosis_editable_field = true;
          break;
        }
      case 'lab':
        {
          this.lab_editable_field = true;
          break;
        }
      case 'medication':
        {
          this.medication_editable_field = true;
          break;
        }
      case 'care_team':
        {
          this.careteam_editable_field = true;
          break;
        }
    }
  }
  showModal() {
    this.tab_active('clinical_history');
    this.tab_Subactive('pre_diagnosis');
    //Fields
    this.pre_diagnosis_editable_field = false;
    this.indication_editable_field = false;
    this.post_diagnosis_editable_field = false;
    this.lab_editable_field = false;
    this.medication_editable_field = false;
    this.careteam_editable_field = false;
    this.centerDataModal?.show();
  }
  closeModal() {
    //Fields
    this.pre_diagnosis_editable_field = false;
    this.indication_editable_field = false;
    this.post_diagnosis_editable_field = false;
    this.lab_editable_field = false;
    this.medication_editable_field = false;
    this.careteam_editable_field = false;
    this.centerDataModal?.hide();
  }
  showEditableModal(data) {
    switch (data) {
      case 'pre_diagnosis':
        {
          this.tab_active('clinical_history');
          this.tab_Subactive(data);
          this.pre_diagnosis_editable_field = true;
          this.centerDataModal?.show();
          break;
        }
      case 'indication':
        {
          this.tab_active('clinical_history');
          this.tab_Subactive(data);
          this.indication_editable_field = true;
          this.centerDataModal?.show();
          break;
        }
      case 'post_diagnosis':
        {
          this.tab_active('clinical_history');
          this.tab_Subactive(data);
          this.post_diagnosis_editable_field = true;
          this.centerDataModal?.show();
          break;
        }
      case 'lab':
        {
          this.active_status = 'lab';
          this.lab_editable_field = true;
          this.tab_active(data);
          this.active_tabs_lab = true;
          this.centerDataModal?.show();
          break;
        }
      case 'medication':
        {
          this.active_status = 'medication';
          this.medication_editable_field = true;
          this.tab_active(data);
          this.active_tabs_medication = true;
          this.centerDataModal?.show();
          break;
        }
      case 'care_team':
        {
          this.tab_active(data);
          this.careteam_editable_field = true;
          this.active_status = 'care_team';
          this.centerDataModal?.show();
          break;
        }
    }
  }
  tab_active(data) {
    this.active_status = data;
    switch (data) {
      case 'lab':
        {
          this.GetLab();
          console.log('Popup Datas', data);
        }
      case 'medication':
        {
          this.GetMediation();
          console.log('Popup Datas', data);
        }
    }
  }
  tab_Subactive(data) {
    switch (data) {
      case 'indication':
        {
          if (this.clinical_history_indication_data.length == 0) {
            this.GetClinicalIndication();
          }
        }
      case 'post_diagnosis':
        {
          if (this.clinical_history_postdiagonis_data.length == 0) {
            this.GetClinicalPostdiagonis();
          }
        }
    }
    this.active_sub_status = data;
  }
  ClinicalHistorySubTab(tabsactive) {
    switch (tabsactive) {
      case 'indication':
        {
          if (this.clinical_history_indication_data.length == 0) {
            this.GetClinicalIndication();
          }
        }
      case 'post_diagnosis':
        {
          if (this.clinical_history_postdiagonis_data.length == 0) {
            this.GetClinicalPostdiagonis();
          }
        }
      /*  case 'allergies': {
         this.isolation_alert = data;
       }
       case 'pregnant': {
         this.pregnant_alert = data;
       }
       case 'covid': {
         this.covid_alert = data;
       } */
    }
  }

  customHeaderClick(event) {
    event.stopPropagation();
  }
  enableAlert(name, event) {
    if (event.target.checked) {
      this.Alert_name = name;
    } else {
      this.Alert_name = '';
    }
  }
  AddNotes(stage) {
    this.addNotesModal?.show();
  }
  reply_notes(id) {
    this.reply_id = id;
    this.hide_comment_field = false;
  }
  SaveNotes() {
    this.reply_id = null;
    this.hide_comment_field = true;
  }
  GoBackToProcedureList() {
    localStorage.removeItem('PatientID');
    localStorage.removeItem('Procedure');
    localStorage.removeItem('MRN_NO');
    localStorage.removeItem('ExamStatus');
    localStorage.removeItem('Stage Type');
    localStorage.removeItem('AccessionNo');
    this.router.navigateByUrl('/procedure');
  }
  Clinical_history() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    let patient_id = localStorage.getItem('PatientID');
    let mrn_number = localStorage.getItem('MRN_NO');
    payload["mrn_number"] = mrn_number;
    payload["patient_id"] = patient_id;
    payload["procedure"] = this.procedure_id;
    // return null;
    console.log('Call Clinical History API');
    return this.http.post(`${this.apiUrl}${this.clinicalDiagnosis}`, payload);
  }
  /* Clinical History Pre-diagonis add row code by Gani */
  get rowControls() {
    return this.tableForm.get('rows').controls;
  }
  addRow() {
    const newRow = this.formBuilder.group({
      diagnosis: '',
      code: '',
      date: ''
    });
    // (this.tableForm.get('rows') as FormArray).push(newRow);
    this.tableForm.get('rows').insert(0, newRow);
  }
  deleteRow(index) {
    this.tableForm.get('rows').removeAt(index);
  }
  saveData() {
    const rowData = this.tableForm.value.rows;
    let patient_id = localStorage.getItem('PatientID');
    let mrn_number = localStorage.getItem('MRN_NO');
    console.log('MRN Number', mrn_number);
    console.log(rowData); // Save the data as needed
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = localStorage.getItem('MRN_NO');
    payload["patient_id"] = localStorage.getItem('PatientID');
    payload['diagones_data'] = rowData;
    payload['created_by'] = 1;
    payload['added_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.saveData1}`, payload).subscribe(response => {
      console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 1000
      });
      this.GetClinicalHistory();
      this.tableForm.reset();
      this.tableForm.get('rows').clear();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  /* Clinical History Pre-diagonis add row code by Gani */
  /** Delete Diagonis Details */
  deletePreDiagoanis(id) {
    this.delete_pre_diagonis_id = id;
    this.delete_modal?.show();
  }
  CloseModal(modalname) {
    this.delete_modal?.hide();
  }
  DeletePrediagonis() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["id"] = this.delete_pre_diagonis_id;
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload['deleted_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.deletePreDiagnosis}`, payload).subscribe(response => {
      console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 2000
      });
      this.delete_modal?.hide();
      this.GetClinicalHistory();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  /** Fetch The Clinical History Pre-diagonis tab */
  GetClinicalHistory() {
    this.Clinical_history().subscribe(response => {
      this.clinical_history = response.data;
      //console.log('Clinical History Response : ',this.clinical_history);
    });
  }
  /** Clinical History Indication Sub Tab */
  GetClinicalIndication() {
    this.Clinical_history_indication().subscribe(response => {
      this.clinical_history_indication_data = response.data;
      //console.log('Clinical History Indication Response : ',response.data);
    });
  }

  Clinical_history_indication() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload["procedure"] = this.procedure_id;
    // return null;
    //console.log('Call Clinical History Indication API');
    return this.http.post(`${this.apiUrl}${this.clinicalHistoryIndication}`, payload);
  }
  get rowControls1() {
    return this.tableFormIndication.get('rows').controls;
  }
  addRowIndication() {
    const newRow = this.formBuilder.group({
      diagnosis: '',
      code: '',
      date: ''
    });
    // (this.tableForm.get('rows') as FormArray).push(newRow);
    this.tableFormIndication.get('rows').insert(0, newRow);
  }
  deleteRowIndication(index) {
    this.tableFormIndication.get('rows').removeAt(index);
  }
  saveDataIndication() {
    const rowData = this.tableFormIndication.value.rows;
    let patient_id = localStorage.getItem('PatientID');
    let mrn_number = localStorage.getItem('MRN_NO');
    console.log('MRN Number', mrn_number);
    console.log(rowData); // Save the data as needed
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = localStorage.getItem('MRN_NO');
    payload["patient_id"] = localStorage.getItem('PatientID');
    payload['indication_data'] = rowData;
    payload['created_by'] = 1;
    payload['added_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.saveDataIndication1}`, payload).subscribe(response => {
      console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 1000
      });
      this.GetClinicalIndication();
      this.tableFormIndication.reset();
      this.tableFormIndication.get('rows').clear();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  deleteIndication(id) {
    this.delete_indication_id = id;
    this.delete_indication_modal?.show();
  }
  CloseModaldeleteIndication(modalname) {
    this.delete_indication_modal?.hide();
  }
  DeleteIndicationData() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["id"] = this.delete_indication_id;
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload['deleted_by'] = 1;
    payload["procedure"] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.deleteIndicationData}`, payload).subscribe(response => {
      console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 2000
      });
      this.delete_indication_modal?.hide();
      this.GetClinicalIndication();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  /** Clinical History Indication Sub Tab End */
  /** Clinical History POST Diagonis Tab Start */
  GetClinicalPostdiagonis() {
    this.Clinical_history_postdiagonis().subscribe(response => {
      this.clinical_history_postdiagonis_data = response.data;
      //console.log('Clinical History Indication Response : ',response.data);
    });
  }

  Clinical_history_postdiagonis() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload["procedure"] = this.procedure_id;
    // return null;
    //console.log('Call Clinical History Indication API');
    return this.http.post(`${this.apiUrl}${this.clinicalPostDiagnosis}`, payload);
  }
  get rowControls2() {
    return this.tableFormPostdiagonis.get('rows').controls;
  }
  addRowPostDiagonis() {
    const newRow = this.formBuilder.group({
      diagnosis: '',
      code: '',
      date: ''
    });
    // (this.tableForm.get('rows') as FormArray).push(newRow);
    this.tableFormPostdiagonis.get('rows').insert(0, newRow);
  }
  deleteRowPostDiagonis(index) {
    this.tableFormPostdiagonis.get('rows').removeAt(index);
  }
  saveDataPostDiagonis() {
    const rowData = this.tableFormPostdiagonis.value.rows;
    let patient_id = localStorage.getItem('PatientID');
    let mrn_number = localStorage.getItem('MRN_NO');
    console.log('MRN Number', mrn_number);
    console.log(rowData); // Save the data as needed
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = localStorage.getItem('MRN_NO');
    payload["patient_id"] = localStorage.getItem('PatientID');
    payload['post_diagnosis_data'] = rowData;
    payload['created_by'] = 1;
    payload['added_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.saveDatapostDiagnosis1}`, payload).subscribe(response => {
      console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 1000
      });
      this.GetClinicalPostdiagonis();
      this.tableFormPostdiagonis.reset();
      this.tableFormPostdiagonis.get('rows').clear();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  deletePostdiagonis(id) {
    this.delete_postdiagonis_id = id;
    this.delete_post_modal?.show();
  }
  CloseModaldeletePostdiagonis(modalname) {
    this.delete_post_modal?.hide();
  }
  DeletePostDiagonis() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["id"] = this.delete_postdiagonis_id;
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload['deleted_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.deletePostDiagnol1}`, payload).subscribe(response => {
      console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 2000
      });
      this.delete_post_modal?.hide();
      this.GetClinicalPostdiagonis();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  /** Clinical History POST Diagonis Tab End */
  /** Lab Details Tab Start */
  GetLab() {
    this.GetLabDetails().subscribe(response => {
      this.lab_data = response.data;
      //console.log('Clinical History Indication Response : ',response.data);
    });
  }

  GetLabDetails() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload['procedure'] = this.procedure_id;
    // return null;
    //console.log('Call Clinical History Indication API');
    return this.http.post(`${this.apiUrl}${this.getLabDetails1}`, payload);
  }
  get rowControlslab() {
    return this.tablelab.get('rows').controls;
  }
  addRowLab() {
    const newRow = this.formBuilder.group({
      test_name: '',
      result: '',
      date: ''
    });
    // (this.tableForm.get('rows') as FormArray).push(newRow);
    this.tablelab.get('rows').insert(0, newRow);
  }
  deleteRowLab(index) {
    this.tablelab.get('rows').removeAt(index);
  }
  saveDataLab() {
    const rowData = this.tablelab.value.rows;
    let patient_id = localStorage.getItem('PatientID');
    let mrn_number = localStorage.getItem('MRN_NO');
    console.log('MRN Number', mrn_number);
    console.log(rowData); // Save the data as needed
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = localStorage.getItem('MRN_NO');
    payload["patient_id"] = localStorage.getItem('PatientID');
    payload['patient_lab_data'] = rowData;
    payload['created_by'] = 1;
    payload['added_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.saveDataLab1}`, payload).subscribe(response => {
      console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 1000
      });
      this.GetLab();
      this.tablelab.reset();
      this.tablelab.get('rows').clear();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  deleteLab(id) {
    this.delete_lab_id = id;
    this.delete_lab_modal?.show();
  }
  CloseModaldeleteLab(modalname) {
    this.delete_lab_modal?.hide();
  }
  DeleteLabData() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["id"] = this.delete_lab_id;
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload['deleted_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.patientLabDelete}`, payload).subscribe(response => {
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 2000
      });
      this.delete_lab_modal?.hide();
      this.GetLab();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  /** Lab Details Tab End */
  /** Mediation Tab Start (ADAI) */
  GetMediation() {
    this.GetMediationDetails().subscribe(response => {
      this.mediation_data = response.data;
      //console.log('Mediation Response : ',response.data);
    });
  }

  GetMediationDetails() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload["procedure"] = this.procedure_id;
    // return null;
    //console.log('Call Mediation API');
    return this.http.post(`${this.apiUrl}${this.getMediationDetails}`, payload);
  }
  get rowMediationlab() {
    return this.tableMedication.get('rows').controls;
  }
  addRowMediation() {
    const newRowOfMediation = this.formBuilder.group({
      test_name: '',
      result: '',
      date: ''
    });
    // (this.tableForm.get('rows') as FormArray).push(newRow);
    this.tableMedication.get('rows').insert(0, newRowOfMediation);
  }
  deleteRowMediation(index) {
    this.tableMedication.get('rows').removeAt(index);
  }
  saveMediationData() {
    const rowData = this.tableMedication.value.rows;
    let patient_id = localStorage.getItem('PatientID');
    let mrn_number = localStorage.getItem('MRN_NO');
    console.log('MRN Number', mrn_number);
    console.log(rowData); // Save the data as needed
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["stage_type"] = 'Requesting';
    payload["mrn_number"] = localStorage.getItem('MRN_NO');
    payload["patient_id"] = localStorage.getItem('PatientID');
    payload["procedure"] = this.procedure_id;
    payload['patient_mediation_data'] = rowData;
    payload['created_by'] = 1;
    payload['added_by'] = 1;
    this.http.post(`${this.apiUrl}${this.saveMediationData1}`, payload).subscribe(response => {
      // console.log('Data saved successfully:', response);
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 1000
      });
      this.GetMediation();
      this.tableMedication.reset();
      this.tableMedication.get('rows').clear();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  deleteMediation(id) {
    this.delete_mediation_id = id;
    this.delete_mediation_modal?.show();
  }
  CloseModaldeleteMediation(modalname) {
    this.delete_mediation_modal?.hide();
  }
  DeleteLabDataMediation() {
    let payload = {};
    payload["token"] = '1a32e71a46317b9cc6feb7388238c95d';
    payload["id"] = this.delete_mediation_id;
    payload["mrn_number"] = this.mrn_number;
    payload["patient_id"] = this.patient_id;
    payload['deleted_by'] = 1;
    payload['procedure'] = this.procedure_id;
    this.http.post(`${this.apiUrl}${this.deleteMediationData}`, payload).subscribe(response => {
      this.toastr.success(`${response.message}`, 'Successfull', {
        positionClass: 'toast-top-center',
        timeOut: 2000
      });
      this.delete_mediation_modal?.hide();
      this.GetMediation();
    }, error => {
      console.error('Error saving data:', error);
    });
  }
  /** Mediation Tab End (ADAI) */
  onAccordionOpen(stage, isOpen) {
    console.log(stage, 'stage', isOpen, 'isOpen');
    if (isOpen) {
      switch (stage) {
        case 'Requesting':
          this.fetchCheckListData('Requesting', 'check_list_data');
          break;
        case 'Scheduling':
          this.fetchCheckListData('Scheduling', 'check_list_data1');
          break;
        case 'Pre-Procedure':
          this.fetchCheckListData('Pre-Procedure', 'check_list_data2');
          break;
        case 'Intra-Procedure':
          this.fetchCheckListData('Intra-Procedure', 'check_list_data3');
          break;
        case 'Post-Procedure':
          this.fetchCheckListData('Post-Procedure', 'check_list_data4');
          break;
      }
    }
  }
  fetchCheckListData(stage, target) {
    this.allService.GetCheckListData(stage).subscribe(response => {
      if (response.status === 'Success') {
        this[target] = response.check_list;
        response.check_list.forEach((element, index) => {
          this.allService.updateCheckboxState(index, element.checked, response.check_list.length);
        });
      } else {
        console.error('Error fetching data:', response.message);
      }
    }, error => {
      console.error("API Error:", error);
    });
  }
  updateCheckboxStates(index, state, length, stage, checkListId) {
    const lengthofState = length;
    let patient_id = localStorage.getItem('PatientID');
    let mrn_number = localStorage.getItem('MRN_NO');
    let procedure_id = localStorage.getItem('Procedure');
    let stageType = stage;
    let added_by = 1;
    let created_by = 1;
    let checkListIds = checkListId;
    if (stage === 'Requesting') {
      this.allService.updateCheckboxState(index, state, lengthofState);
      this.check_list_data[index].checked = state;
      let checkedOrNOT = this.check_list_data[index].checked;
      this.allService.kizinCheckBoxesData(stageType, patient_id, mrn_number, checkedOrNOT, procedure_id, checkListIds, added_by, created_by).subscribe(response => {
        if (response.status === 'Success') {
          this.getCheckBoxesData1 = response;
          this.kizinTimeLineData();
        }
      });
    } else if (stage === 'Scheduling') {
      this.allService.updateCheckboxState(index, state, lengthofState);
      this.check_list_data1[index].checked = state;
      let checkedOrNOT = this.check_list_data1[index].checked;
      this.allService.kizinCheckBoxesData(stageType, patient_id, mrn_number, checkedOrNOT, procedure_id, checkListIds, added_by, created_by).subscribe(response => {
        if (response.status === 'Success') {
          this.getCheckBoxesData2 = response;
        }
      });
    } else if (stage === 'Pre-Procedure') {
      this.allService.updateCheckboxState(index, state, lengthofState);
      this.check_list_data2[index].checked = state;
      let checkedOrNOT = this.check_list_data2[index].checked;
      this.allService.kizinCheckBoxesData(stageType, patient_id, mrn_number, checkedOrNOT, procedure_id, checkListIds, added_by, created_by).subscribe(response => {
        if (response.status === 'Success') {
          this.getCheckBoxesData3 = response;
          this.kizinTimeLineData();
        }
      });
    } else if (stage === 'Intra-Procedure') {
      this.allService.updateCheckboxState(index, state, lengthofState);
      this.check_list_data3[index].checked = state;
      let checkedOrNOT = this.check_list_data3[index].checked;
      this.allService.kizinCheckBoxesData(stageType, patient_id, mrn_number, checkedOrNOT, procedure_id, checkListIds, added_by, created_by).subscribe(response => {
        if (response.status === 'Success') {
          this.getCheckBoxesData4 = response;
          this.kizinTimeLineData();
        }
      });
    } else if (stage === 'Post-Procedure') {
      this.allService.updateCheckboxState(index, state, lengthofState);
      this.check_list_data4[index].checked = state;
      let checkedOrNOT = this.check_list_data4[index].checked;
      this.allService.kizinCheckBoxesData(stageType, patient_id, mrn_number, checkedOrNOT, procedure_id, checkListIds, added_by, created_by).subscribe(response => {
        if (response.status === 'Success') {
          this.getCheckBoxesData5 = response;
          this.kizinTimeLineData();
        }
      });
    }
  }
  kizinTimeLineData() {
    this.allService.kizinTimeLineData().subscribe(res => {
      this.kizinData = res.data;
      if (this.kizinData) {
        this.kizinData = this.kizinData.map(dateTime => {
          let date = new Date(dateTime.created_at);
          dateTime.created_at = this.allService.formattedDate(date);
          dateTime.created_time = this.allService.formatTime(date);
          return dateTime;
        });
      }
      return res;
    });
  }
  static #_ = this.ɵfac = function WorkAreaComponent_Factory(t) {
    return new (t || WorkAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: WorkAreaComponent,
    selectors: [["app-work-area"]],
    viewQuery: function WorkAreaComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c6, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.delete_modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.delete_indication_modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.delete_post_modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.delete_lab_modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.delete_mediation_modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.centerDataModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addNotesModal = _t.first);
      }
    },
    decls: 437,
    vars: 75,
    consts: [[1, "row"], [1, "col-lg-2", "mb-2", 2, "padding", "0px 4px !important", "height", "765px !important"], [1, "cards", 2, "height", "765px", "overflow-y", "hidden", "overflow-x", "hidden"], [1, "d-flex", "justify-content-start", "align-items-center", "mb-3", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/back_arrow.svg", 1, "me-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "me-2", 2, "width", "50%"], ["id", "idType", "aria-label", "Default select example", 1, "form-select", 2, "height", "29px !important", "width", "-webkit-fill-available !important", "background-position", "95px !important"], ["value", "all"], ["value", "Freelance"], ["value", "Full Time"], ["value", "Part Time"], ["value", "Internship"], [1, "", 2, "width", "50%"], ["type", "text", "placeholder", "Select Date", "bsDaterangepicker", "", 1, "form-control-new", 2, "height", "31px", "font-size", "0.66rem !important", 3, "bsConfig"], [1, "search-box", "mb-3"], ["type", "text", "placeholder", "Search...", 1, "form-control-new", "rounded", "bg-light", "border-light"], [2, "height", "555px", "overflow-y", "scroll", "overflow-x", "hidden"], [1, "d-flex", "mb-2", 2, "position", "relative", "top", "250px", "justify-content", "center"], [1, ""], [1, "mt-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "me-2", 2, "width", "50% !important"], ["type", "button", 1, "btn-new", "me-2", 2, "background", "#F3F4F8 !important", "color", "#1B1B1B !important", "width", "100% !important", "font-weight", "600"], [1, "", 2, "width", "50% !important"], ["type", "button", 1, "btn-diasble", 2, "width", "100% !important"], [1, "col-lg-7", "mb-2", 2, "padding", "0px 8px 0px 8px !important", "height", "765px !important"], [1, "cards", 2, "height", "765px", "overflow-y", "scroll", "overflow-x", "hidden", "padding", "10px 10px 0px 10px !important"], ["class", "col-lg-3", "style", "padding: 0px 8px 0px 8px !important;", 4, "ngIf"], [1, "patient_details"], [1, "btn-new", 2, "padding", "8px 10px 8px 10px !important", "position", "absolute", "left", "96%", "z-index", "1", "transform", "rotate(90deg)", "top", "14%", "width", "100px !important", "height", "auto !important", 3, "click"], [1, "mb-0"], ["src", "assets/images/notification_bell_pd.svg", "width", "14px", "height", "14px"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade"], ["centerDataModal", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "678px !important"], [1, "modal-content"], [1, "modal-header"], [1, "d-flex", "justify-content-between", "align-items-center", 2, "width", "100%", "background", "#F3F4F8", "border-radius", "6px"], [1, "ms-2"], [2, "font-size", "16px !important", "color", "#1B1B1B !important"], [1, "btn", 3, "click"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px"], [1, "modal-body"], [1, "d-flex"], ["role", "tabpanel", 1, "tab-pane", 2, "width", "100% !important"], ["role", "tablist", 1, "nav", "line-tab", "px-1", "nav-tabs", "nav-tabs-custom", "nav-justified", "mt-2", 2, "background", "#fff !important", "width", "100% !important", "white-space", "nowrap"], ["role", "presentation", 1, "nav-item", 3, "click"], ["data-bs-toggle", "tab", "href", "#clinical_histroy", "role", "tab", "aria-selected", "true", 2, "white-space", "nowrap", "padding", "7px 7px 0px 7px !important", 3, "ngClass"], [1, "d-flex", "flex-row"], ["src", "assets/images/clinical_history.svg", "width", "16px", "height", "16px", 1, "me-1"], [1, "d-none", "d-sm-block", "mb-0", "details_tab", 2, "color", "#747474"], ["data-bs-toggle", "tab", "href", "#lab", "role", "tab", "aria-selected", "false", "tabindex", "-1", 2, "white-space", "nowrap", 3, "ngClass"], ["src", "assets/images/lab.svg", "width", "16px", "height", "16px", 1, "me-1"], ["data-bs-toggle", "tab", "href", "#medication", "role", "tab", "aria-selected", "false", "tabindex", "-1", 2, "white-space", "nowrap", 3, "ngClass"], ["src", "assets/images/medication.svg", "width", "16px", "height", "16px", 1, "me-1"], ["data-bs-toggle", "tab", "href", "#care_team", "role", "tab", "aria-selected", "false", "tabindex", "-1", 2, "white-space", "nowrap", 3, "ngClass"], ["src", "assets/images/care_team.svg", "width", "16px", "height", "16px", 1, "me-1"], [1, "tab-content", "text-muted", 2, "padding", "10px 5px !important"], ["id", "clinical_histroy", "role", "tabpanel", 3, "ngClass"], ["role", "tablist", 1, "nav", "line-tab", "px-1", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "background", "#F3F4F8 !important", "width", "360px !important", "white-space", "nowrap", "border", "1px solid #F3F4F8", "border-radius", "12px !important", "align-items", "center", "padding", "0px 5px !important", "height", "auto !important"], ["data-bs-toggle", "tab", "href", "#pre_diagnosis_view", "role", "tab", "aria-selected", "true", 2, "white-space", "nowrap", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#indication_view", "role", "tab", "aria-selected", "false", "tabindex", "-1", 2, "white-space", "nowrap", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#post_diagnosis_view", "role", "tab", "aria-selected", "false", "tabindex", "-1", 2, "white-space", "nowrap", 3, "ngClass"], [1, "tab-content", "p-3", "text-muted"], ["id", "pre_diagnosis_view", "role", "tabpanel", 3, "ngClass"], [1, "btn", "me-2", 2, "float", "right", 3, "click"], [1, "mdi", "mdi-plus", 2, "color", "blue !important", "font-size", "15px"], [1, "table-responsive", 2, "border", "1px solid #F3F4F8", "border-radius", "4px !important"], [3, "formGroup"], [1, "table", "mb-0"], [1, "table-light"], [2, "font-weight", "400 !important", "color", "#1B1B1B !important"], ["formArrayName", "rows"], ["style", "border-color: #fff !important;font-size: 12px;font-weight: 400;", 3, "formGroupName", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["colspan", "3", 4, "ngIf"], [1, "modal_footer", "my-4", "mx-2"], [1, "d-flex", "justify-content-end"], [1, "btn", "me-2", 3, "click"], [1, "btn-new", "mx-3", 3, "click"], ["id", "indication_view", "role", "tabpanel", 3, "ngClass"], ["id", "post_diagnosis_view", "role", "tabpanel", 3, "ngClass"], ["id", "lab", "role", "tabpanel", 3, "ngClass"], [1, "d-flex", "justify-content-between", "mt-2", "mx-2"], [2, "color", "#747474 !important"], [1, "table-responsive", "mt-2", 2, "border", "1px solid #F3F4F8", "border-radius", "4px !important"], ["id", "medication", "role", "tabpanel", 3, "ngClass"], ["id", "care_team", "role", "tabpanel", 3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2", "mx-2"], [1, "mb-0", 2, "color", "#747474 !important"], [1, "d-flex", "align-items-center", 2, "cursor", "pointer"], [3, "click"], [1, "mdi", "mdi-pencil-outline", "me-2", 2, "font-size", "15px", "color", "#594585"], [1, "bx", "bx-plus", 2, "font-size", "19px", "color", "#594585"], ["class", "d-flex my-2 mx-2 align-items-center", 4, "ngFor", "ngForOf"], [1, "modal_footer", "my-4", "mx-2", 2, "display", "none"], [1, "btn-new", "mx-3"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name2", 1, "modal", "fade"], ["editModalAlerts", "bs-modal"], [1, "d-flex", "justify-content-between", "align-items-center", 2, "background", "#F3F4F8", "width", "100%"], [1, "edit_alerts_body"], ["class", "p-3", "style", "margin: 10px 5px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn-new", "me-2", 2, "background", "#F3F4F8 !important", "color", "#000 !important", "width", "auto !important"], ["type", "button", 1, "btn-new", "me-2", 2, "color", "#fff !important", "width", "auto !important"], ["addNotesModal", "bs-modal"], ["class", "modal-body", "style", "height: 450px !important;overflow-y: scroll;overflow-x: hidden;", 4, "ngFor", "ngForOf"], ["class", "mt-3 ms-1", "style", "width: 100% !important;", 4, "ngIf"], ["type", "button", 1, "btn-new", "me-2", 2, "color", "#fff !important", "width", "auto !important", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name5", 1, "modal", "fade"], ["delete_modal", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "400px !important"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "my-3", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", "ms-2", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-between", "mt-4"], [1, "mb-2"], ["src", "assets/images/delete_modal_img.svg", 2, "width", "40px", "height", "40px"], [1, "d-flex", "justify-content-evenly", "p-3"], ["type", "button", 1, "btn-new", "me-2", 2, "background", "#F3F4F8 !important", "color", "#000 !important", "width", "auto !important", 3, "click"], ["type", "button", 1, "btn-new", 2, "width", "auto !important", 3, "click"], ["delete_indication_modal", "bs-modal"], ["delete_post_modal", "bs-modal"], ["delete_lab_modal", "bs-modal"], ["delete_mediation_modal", "bs-modal"], [1, "col-lg-3", 2, "padding", "0px 8px 0px 8px !important"], [1, "cards", 2, "height", "765px", "overflow-y", "scroll", "overflow-x", "hidden", "padding", "0px !important"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", 2, "background", "#594585", "height", "55px", "border-radius", "12px 12px 0px 0px"], [1, "ms-4", 2, "font-size", "16px !important", "color", "#fff !important"], ["role", "tabpanel", 1, "tab-pane"], ["role", "tablist", 1, "nav", "line-tab", "nav-pills", "nav-tabs", "nav-tabs-custom", "nav-justified"], ["class", "nav-items", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-content", "mt-1", "text-muted"], ["id", "tabContent1", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "accords", 2, "overflow-x", "scroll !important", "height", "670px", "display", "block !important", "overflow-y", "auto !important"], [1, "accordion", 3, "closeOthers", "isAnimated"], [1, "accordion-item", 3, "isOpen", "isOpenChange"], ["group", ""], ["accordion-heading", "", 1, "d-flex"], [1, "mdi", 2, "font-size", "17px", 3, "ngClass"], [1, "p-2", "flex-grow-1", "mb-0", 2, "font-weight", "bold !important", "color", "#000 !important"], [1, "float-end"], [1, "mb-0", "my-2", 2, "color", "#D62424"], [1, "text-muted"], ["class", "verti-timeline list-unstyled", 4, "ngFor", "ngForOf"], ["id", "tabContent2", "role", "tabpanel", 1, "tab-pane"], ["id", "tabContent3", "role", "tabpanel", 1, "tab-pane"], [1, "d-flex", "flex-column", 2, "margin", "15px 0px", "overflow-x", "scroll !important", "height", "645px", "display", "block !important", "overflow-y", "auto !important"], ["class", "d-flex", 4, "ngFor", "ngForOf"], ["role", "presentation", 1, "nav-items"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "true", 3, "href", "click"], [1, "d-flex", "align-items-center"], ["width", "16px", "height", "16px", 1, "me-2", 3, "src"], [2, "color", "#fff"], [1, "verti-timeline", "list-unstyled"], [1, "event-list"], [1, "event-timeline-dot"], [1, "form-check", "font-size-16"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "click"], [1, "d-flex", "flex-column", "w-100"], [1, "d-flex", "flex-row", "align-items-center"], [1, "mb-0", 2, "font-weight", "500 !important"], [1, "ms-2", "mb-0"], [1, "ms-2", "mb-0", 2, "color", "#D62424"], [1, "ms-auto", 3, "click"], ["src", "assets/images/edit_task_list.svg", "width", "12px", "height", "12px", 2, "cursor", "pointer !important"], ["type", "checkbox", 1, "form-check-input", 3, "click"], [1, "mb-0", 2, "border-right", "1px solid #000", "padding", "20px 20px 20px 80px"], ["src", "assets/images/timeline_dot.svg", "width", "12px", "height", "12px", 2, "position", "relative", "right", "1.5%", "margin-top", "20px"], [1, "d-flex", "flex-column", 2, "padding", "9px 5px 20px 10px"], [1, "mb-1", 2, "color", "#1B1B1B"], [1, "mb-1", 2, "color", "#1B1B1B", "line-height", "14.5px"], [2, "color", "#747474"], [1, "d-flex", "flex-row", "mx-2", "my-2"], [1, "flex-grow-1"], ["src", "assets/images/go_back_kizin.svg", "width", "9px", "height", "9px", 1, "me-2", 2, "cursor", "pointer", 3, "click"], [1, "mb-0", 2, "width", "auto !important", "font-size", "10px !important", "font-weight", "600 !important", "color", "#1B1B1B !important"], [1, "flex-shrink-0"], ["src", "assets/images/go_previous_patient.svg", "width", "16px", "height", "16px", 1, "mx-3"], ["src", "assets/images/go_next_patient.svg", "width", "16px", "height", "16px", 1, "mx-3"], [1, "d-flex", "flex-row", "mt-4", "mx-3", "align-items-center"], [1, "flex-shrink-0", "align-items-center"], ["src", "assets/images/patient_details_img.svg", "alt", "100x100", 1, "rounded-circle", "avatar-xl", 2, "width", "60px !important", "height", "60px !important"], [2, "border", "1px solid #F0EAFF", "background", "#F0EAFF", "padding", "1px 6px 1px 6px !important", "border-radius", "38px", "position", "absolute", "top", "6.2rem"], [1, "flex-grow-1", "ms-3", "mt-2", "align-items-center"], [1, "mb-1", 2, "font-size", "14px !important", "font-weight", "500 !important", "color", "#1B1B1B !important"], [1, "row", "mx-2", "mt-4"], [1, "col-3"], [2, "color", "#1B1B1B"], [1, "row", "mx-2", "mt-1"], [1, "row", "mx-3", "mt-2", 2, "border", "1px solid #594585", "background", "#594585", "height", "41px", "width", "auto", "border-radius", "5px"], [1, "col-8"], [3, "itemsPerSlide", "singleSlideOffset", "startFromIndex", "interval", "showIndicators", "noWrap"], [1, "col-4"], [1, "d-flex", "justify-content-between", "mx-1", "mt-1", 2, "border-left", "1px solid #fff"], ["dropdown", ""], ["type", "button", "id", "page-header-notifications-dropdown", "dropdownToggle", "", 1, "btn", "header-item", "noti-icon", 2, "height", "40px !important", "position", "relative"], [1, "bx", "bxs-bell", 2, "color", "#fff !important", "font-size", "23px !important"], [1, "badge", "bg-danger", "rounded-pill", 2, "position", "absolute !important", "top", "3px !important", "right", "6px !important"], ["class", "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0", "aria-labelledby", "page-header-notifications-dropdown", 4, "dropdownMenu"], ["src", "assets/images/edit_alerts.svg", "width", "32px", "height", "32px", 2, "cursor", "pointer", 3, "click"], [1, "d-flex", "mx-4", "mt-3", "align-items-center"], [1, "mb-0", "me-2", 2, "color", "#1B1B1B !important"], [1, "btn", "me-1", 2, "padding", "0px !important"], [1, "mdi", "mdi-refresh"], [1, "ms-auto", 2, "cursor", "pointer"], [1, "mdi", "mdi-pencil-outline", 2, "font-size", "12px", "color", "#594585"], [1, "d-flex", "mt-4"], ["role", "tablist", 1, "nav", "line-tab", "px-1", "nav-tabs", "nav-tabs-custom", "nav-justified", 2, "background", "#fff !important", "width", "100% !important", "white-space", "nowrap"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "href", "#clinical_history_view", "role", "tab", "aria-selected", "true", 1, "nav-link", "active", 2, "white-space", "nowrap", "padding", "7px 7px 0px 7px !important", 3, "click"], ["src", "assets/images/clinical_history.svg", "width", "16px", "height", "16px", "class", "me-1", 4, "ngIf"], ["data-bs-toggle", "tab", "href", "#lab_view", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "nav-link", 2, "white-space", "nowrap", 3, "click"], ["src", "assets/images/lab.svg", "width", "16px", "height", "16px", "class", "me-1", 4, "ngIf"], ["data-bs-toggle", "tab", "href", "#medication_view", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "nav-link", 2, "white-space", "nowrap", 3, "click"], ["src", "assets/images/medication.svg", "width", "16px", "height", "16px", "class", "me-1", 4, "ngIf"], ["data-bs-toggle", "tab", "href", "#care_team_view", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "nav-link", 2, "white-space", "nowrap", 3, "click"], ["src", "assets/images/care_team.svg", "width", "16px", "height", "16px", "class", "me-1", 4, "ngIf"], ["data-bs-toggle", "tab", "role", "tab", "aria-selected", "false", "tabindex", "-1", "data-bs-toggle", "modal", "data-bs-target", ".bs-example-modal-center", 1, "", 2, "white-space", "nowrap", "padding", "0px !important", 3, "click"], [1, "d-flex", "flex-row", "mt-1"], ["src", "assets/images/patient_details_viewOnly.svg", "width", "16px", "height", "16px"], ["id", "clinical_history_view", "role", "tabpanel", 1, "tab-pane", "active", "show"], ["data-bs-toggle", "tab", "href", "#pre_diagnosis", "role", "tab", "aria-selected", "true", 1, "navs-links", "active", 2, "white-space", "nowrap"], ["data-bs-toggle", "tab", "href", "#indication", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "navs-links", 2, "white-space", "nowrap", 3, "click"], ["data-bs-toggle", "tab", "href", "#post_diagnosis", "role", "tab", "aria-selected", "false", "tabindex", "-1", 1, "navs-links", 2, "white-space", "nowrap", 3, "click"], ["id", "pre_diagnosis", "role", "tabpanel", 1, "tab-pane", "active", "show"], [1, "d-flex", "justify-content-between"], [2, "cursor", "pointer", 3, "click"], ["id", "indication", "role", "tabpanel", 1, "tab-pane"], ["id", "post_diagnosis", "role", "tabpanel", 1, "tab-pane"], ["id", "lab_view", "role", "tabpanel", 1, "tab-pane"], ["id", "medication_view", "role", "tabpanel", 1, "tab-pane"], ["id", "care_team_view", "role", "tabpanel", 1, "tab-pane"], [2, "cursor", "pointer"], [1, "bx", "bx-plus", 2, "font-size", "16px", "color", "#594585"], ["alt", "image slide", "triggers", "click", "placement", "bottom", "containerClass", "tooltipClass", 2, "width", "32px", "height", "32px", 3, "src", "ngClass", "tooltip"], ["aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "d-flex", "flex-column", "m-2"], [1, "d-flex", "justify-content-between", "mb-3", "p-3", 2, "border-bottom", "1px solid #747474 !important"], [2, "font-size", "12px !important"], [1, "my-1", "mx-2", 2, "height", "200px", "overflow", "hidden", "overflow-y", "scroll"], ["class", "form-check m-3", 4, "ngFor", "ngForOf"], [1, "form-check", "m-3"], ["type", "checkbox", "id", "formCheck1", 1, "form-check-input"], ["for", "formCheck1", 1, "form-check-label"], ["colspan", "3"], [1, "d-flex", "my-2", "mx-2", "align-items-center"], [1, "me-2", "mb-0"], [1, "mb-0", "me-1", 2, "font-weight", "400 !important"], [3, "ngStyle"], [1, "btn-new", "care_btn", 2, "padding", "4px 10px !important", "background", "#fff !important", "color", "#1B1B1B !important"], [2, "border-color", "#fff !important", "font-size", "12px", "font-weight", "400", 3, "formGroupName"], ["type", "text", "formControlName", "diagnosis", 1, "form-control-new", "ng-pristine", "ng-invalid", "ng-touched"], ["type", "text", "formControlName", "code", 1, "form-control-new", "ng-pristine", "ng-invalid", "ng-touched", 2, "width", "100px"], ["matInput", "", "type", "datetime-local", "min", "2017-06-01T08:30", "placeholder", "start date", "formControlName", "date", 1, "form-control-new", "ng-pristine", "ng-invalid", "ng-touched", 3, "max"], ["type", "button", 3, "click"], [1, "mdi", "mdi-trash-can-outline", 2, "color", "red", "font-size", "16px"], [2, "width", "210px"], [2, "width", "100px", "text-align", "center"], [2, "width", "250px", "text-align", "center"], ["type", "text", "formControlName", "diagnosis"], ["type", "text", "formControlName", "code", 2, "width", "100px"], ["matInput", "", "type", "datetime-local", "min", "2017-06-01T08:30", "placeholder", "start date", "formControlName", "date", 3, "max"], ["type", "text", "formControlName", "test_name"], ["type", "text", "formControlName", "result", 2, "width", "100px"], ["class", "me-2 mb-0", 4, "ngIf"], ["class", "form-control-new form-control-new-sm", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["style", "font-weight: 400 !important;", "class", "mb-0 me-1", 4, "ngIf"], [1, "ms-1", 3, "ngStyle"], ["type", "text", 1, "form-control-new", "form-control-new-sm", 3, "ngModel", "ngModelChange"], [1, "p-3", 2, "margin", "10px 5px", 3, "ngClass"], [1, "row", 2, "align-items", "center"], [1, "alert_images", 2, "width", "32px", "height", "32px", 3, "src"], [1, "p-2", "flex-grow-0", "mb-0", 2, "font-weight", "600 !important", "color", "#000 !important", "font-size", "9px !important"], ["type", "text", "id", "example-text-input", 1, "form-control-new", "form-control-new-sm", 2, "width", "150px !important", 3, "value", "ngModel", "ngModelChange"], [1, "form-check", "form-switch", "form-switch-md", "mb-0", "float-end"], ["type", "checkbox", "id", "SwitchCheckSizemd", 1, "form-check-input", 3, "click"], ["class", "text-muted mx-3 mt-4", 4, "ngIf"], [1, "text-muted", "mx-3", "mt-4"], [3, "options", "value", "ngModel", "ngModelChange"], [1, "modal-body", 2, "height", "450px !important", "overflow-y", "scroll", "overflow-x", "hidden"], [1, "d-flex", "flex-column", "pb-4", 2, "border-bottom", "1px solid #D9D9D9 !important"], [1, "mb-3"], [2, "font-size", "15px !important", "font-weight", "500 !important", "color", "#1B1B1B"], ["src", "assets/images/green_tick.svg", "width", "16px", "height", "16px", 1, "me-1"], [1, "header_name", "me-2"], [4, "ngIf"], ["class", "d-flex flex-column pb-1", "style", "border-bottom: 1px solid #D9D9D9 !important;", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "pb-1", 2, "border-bottom", "1px solid #D9D9D9 !important"], [1, "d-flex", "align-items-center", "mt-3"], ["width", "24px", "height", "24px", 3, "src"], [1, "header_name", "ms-2"], ["class", "ms-1", "style", "background: #855EDB;padding: 0px 8px 0px 8px !important;border: 1px solid #855EDB;border-radius: 24px;color: #fff;", 4, "ngIf"], [1, "mt-3", "ms-1"], [2, "font-weight", "400 !important", "white-space", "break-spaces !important"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3", "ms-1", 2, "cursor", "pointer", 3, "click"], ["class", "mt-2 ms-1 px-2 py-2", "style", "background: #F3F4F8;border-radius: 6px;", 4, "ngIf"], [1, "ms-1", 2, "background", "#855EDB", "padding", "0px 8px 0px 8px !important", "border", "1px solid #855EDB", "border-radius", "24px", "color", "#fff"], [1, "mt-3"], [2, "background", "#F3EDFF", "border", "1px solid #F3EDFF", "border-radius", "12px !important", "padding", "4px 8px 4px 8px !important", "color", "#1B1B1B !important"], ["src", "assets/images/attachment.svg", "width", "15px", "height", "15px", 1, "me-2"], [1, "mt-2", "ms-1", "px-2", "py-2", 2, "background", "#F3F4F8", "border-radius", "6px"], ["src", "assets/images/reply_tick.svg", "width", "17px", "height", "10px"], [1, "flex-grow-1", "ms-1", "mt-1"], [1, "mb-2", 2, "font-weight", "400 !important"], ["type", "text", 1, "form-control-new", 2, "background", "#fff !important"], ["src", "assets/images/post_comment_img.svg", 2, "margin", "20px 150px", "width", "324px", "height", "256px"], [1, "mt-3", "ms-1", 2, "width", "100% !important"], ["type", "text", 1, "form-control-new", 2, "height", "65px !important"]],
    template: function WorkAreaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_div_click_3_listener() {
          return ctx.GoBackToProcedureList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "select", 7)(10, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Vetting");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Pre Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Intra Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Post Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "No Patients to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19)(32, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Patient Seleced: 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 21)(35, "div", 22)(36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 24)(39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 26)(42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "app-all-procedures");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, WorkAreaComponent_div_44_Template, 74, 19, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, WorkAreaComponent_div_45_Template, 252, 46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 29)(47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_47_listener() {
          return ctx.onPatientDetailsButtonClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "patient details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 33, 34)(53, "div", 35)(54, "div", 36)(55, "div", 37)(56, "div", 38)(57, "div", 39)(58, "h1", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Patient results");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_60_listener() {
          return ctx.closeModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 43)(63, "div", 44)(64, "div", 45)(65, "ul", 46)(66, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_li_click_66_listener() {
          return ctx.tab_active("clinical_history");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "a", 48)(68, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Clinical History");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_li_click_72_listener() {
          return ctx.tab_active("lab");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "a", 52)(74, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_li_click_78_listener() {
          return ctx.tab_active("medication");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "a", 54)(80, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Mediation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_li_click_84_listener() {
          return ctx.tab_active("care_team");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "a", 56)(86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Care Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 58)(91, "div", 59)(92, "ul", 60)(93, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_li_click_93_listener() {
          return ctx.tab_Subactive("pre_diagnosis");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "a", 61)(95, "div", 49)(96, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Pre Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_li_click_98_listener() {
          return ctx.tab_Subactive("indication");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "a", 62)(100, "div", 49)(101, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Indication");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_li_click_103_listener() {
          return ctx.tab_Subactive("post_diagnosis");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "a", 63)(105, "div", 49)(106, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Post Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 64)(109, "div", 65)(110, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_a_click_110_listener() {
          return ctx.addRow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](111, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 68)(113, "form", 69)(114, "table", 70)(115, "thead", 71)(116, "tr")(117, "td")(118, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "td")(121, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "td")(124, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "tbody", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](129, WorkAreaComponent_tr_129_Template, 10, 2, "tr", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "table", 70)(131, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](132, WorkAreaComponent_tr_132_Template, 10, 3, "tr", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](134, WorkAreaComponent_td_134_Template, 2, 0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 77)(136, "div", 78)(137, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_137_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](52);
          ctx.closeModal();
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2 == null ? null : _r2.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_139_listener() {
          return ctx.saveData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "div", 81)(142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "Indication");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_a_click_144_listener() {
          return ctx.addRowIndication();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 68)(147, "form", 69)(148, "table", 70)(149, "thead", 71)(150, "tr")(151, "td")(152, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "td")(155, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "td")(158, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](161, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "tbody", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](163, WorkAreaComponent_tr_163_Template, 10, 2, "tr", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "table", 70)(165, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](166, WorkAreaComponent_tr_166_Template, 10, 3, "tr", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](168, WorkAreaComponent_td_168_Template, 2, 0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "div", 77)(170, "div", 78)(171, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_171_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](52);
          ctx.closeModal();
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2 == null ? null : _r2.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_173_listener() {
          return ctx.saveDataIndication();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "div", 82)(176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "Post Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_a_click_178_listener() {
          return ctx.addRowPostDiagonis();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](179, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "div", 68)(181, "form", 69)(182, "table", 70)(183, "thead", 71)(184, "tr")(185, "td")(186, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "td")(189, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "td")(192, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](195, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "tbody", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](197, WorkAreaComponent_tr_197_Template, 10, 2, "tr", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "table", 70)(199, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](200, WorkAreaComponent_tr_200_Template, 10, 3, "tr", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](202, WorkAreaComponent_td_202_Template, 2, 0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "div", 77)(204, "div", 78)(205, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_205_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](52);
          ctx.closeModal();
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2 == null ? null : _r2.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_207_listener() {
          return ctx.saveDataPostDiagonis();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "div", 83)(210, "div", 84)(211, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "EST X-RAY,PA AND LATERAL (701020) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "case provide POPUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_a_click_215_listener() {
          return ctx.addRowLab();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](216, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "div", 86)(218, "form", 69)(219, "table", 70)(220, "thead", 71)(221, "tr")(222, "td")(223, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "td")(226, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](227, "Rsult");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "td")(229, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](230, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](232, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "tbody", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](234, WorkAreaComponent_tr_234_Template, 10, 2, "tr", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "table", 70)(236, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](237, WorkAreaComponent_tr_237_Template, 10, 3, "tr", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](239, WorkAreaComponent_td_239_Template, 2, 0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "div", 77)(241, "div", 78)(242, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_242_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](52);
          ctx.closeModal();
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2 == null ? null : _r2.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_244_listener() {
          return ctx.saveDataLab();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "div", 87)(247, "div", 84)(248, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](249, "The previous/current medication of the");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](250, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, "patients are listed below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_a_click_252_listener() {
          return ctx.addRowMediation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](253, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "div", 86)(255, "form", 69)(256, "table", 70)(257, "thead", 71)(258, "tr")(259, "td")(260, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "td")(263, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, "Rsult");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "td")(266, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](267, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](269, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "tbody", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](271, WorkAreaComponent_tr_271_Template, 10, 2, "tr", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "table", 70)(273, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](274, WorkAreaComponent_tr_274_Template, 10, 3, "tr", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](276, WorkAreaComponent_td_276_Template, 2, 0, "td", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](277, "div", 77)(278, "div", 78)(279, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_279_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](52);
          ctx.closeModal();
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2 == null ? null : _r2.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](280, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_281_listener() {
          return ctx.saveMediationData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](282, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "div", 88)(284, "div", 89)(285, "h4", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](286, "Contact care team member is here");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "div", 91)(288, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_div_click_288_listener() {
          return ctx.edit_field("care_team");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](289, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](291, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](292, WorkAreaComponent_div_292_Template, 9, 11, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "div", 96)(294, "div", 78)(295, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_295_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](52);
          ctx.closeModal();
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2 == null ? null : _r2.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](298, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "div", 98, 99)(301, "div", 35)(302, "div", 36)(303, "div", 37)(304, "div", 100)(305, "div", 39)(306, "h1", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307, "Edit field");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_308_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](300);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r19 == null ? null : _r19.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](309, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "div", 43)(311, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](312, WorkAreaComponent_div_312_Template, 12, 8, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](313, "div", 103)(314, "div", 78)(315, "div")(316, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](317, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](318, "div")(319, "button", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "div", 98, 106)(323, "div", 35)(324, "div", 36)(325, "div", 37)(326, "div", 100)(327, "div", 39)(328, "h1", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](329, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_330_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r193);
          const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](322);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r21 == null ? null : _r21.hide());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](331, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](332, WorkAreaComponent_div_332_Template, 13, 4, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](334, WorkAreaComponent_div_334_Template, 2, 0, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "div", 78)(336, "div")(337, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](338, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "div")(340, "button", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_340_listener() {
          return ctx.SaveNotes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](341, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "div", 110, 111)(344, "div", 112)(345, "div", 36)(346, "div", 113)(347, "h1", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](348, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_img_click_349_listener() {
          return ctx.CloseModal("delete_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](350, "div", 116)(351, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](352, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](353, "div", 117)(354, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](355, "Do you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "div", 119)(357, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_357_listener() {
          return ctx.CloseModal("delete_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](358, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](359, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_359_listener() {
          return ctx.DeletePrediagonis();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](360, "Yes,continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "div", 110, 122)(363, "div", 112)(364, "div", 36)(365, "div", 113)(366, "h1", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](367, "Delete Indication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_img_click_368_listener() {
          return ctx.CloseModaldeleteIndication("delete_indication_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "div", 116)(370, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](371, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](372, "div", 117)(373, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](374, "Do you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "div", 119)(376, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_376_listener() {
          return ctx.CloseModaldeleteIndication("delete_indication_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](377, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](378, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_378_listener() {
          return ctx.DeleteIndicationData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](379, "Yes,continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "div", 110, 123)(382, "div", 112)(383, "div", 36)(384, "div", 113)(385, "h1", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](386, "Delete Post Diagonis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_img_click_387_listener() {
          return ctx.CloseModaldeletePostdiagonis("delete_post_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](388, "div", 116)(389, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](390, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](391, "div", 117)(392, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](393, "Do you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "div", 119)(395, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_395_listener() {
          return ctx.CloseModaldeletePostdiagonis("delete_post_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](396, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](397, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_397_listener() {
          return ctx.DeletePostDiagonis();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](398, "Yes,continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](399, "div", 110, 124)(401, "div", 112)(402, "div", 36)(403, "div", 113)(404, "h1", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](405, "Delete Lab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_img_click_406_listener() {
          return ctx.CloseModaldeleteLab("delete_lab_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](407, "div", 116)(408, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](409, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](410, "div", 117)(411, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](412, "Do you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](413, "div", 119)(414, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_414_listener() {
          return ctx.CloseModaldeleteLab("delete_lab_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](415, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](416, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_416_listener() {
          return ctx.DeleteLabData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](417, "Yes,continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](418, "div", 110, 125)(420, "div", 112)(421, "div", 36)(422, "div", 113)(423, "h1", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](424, "Delete Mediation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](425, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_img_click_425_listener() {
          return ctx.CloseModaldeleteMediation("delete_mediation_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "div", 116)(427, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](428, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](429, "div", 117)(430, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](431, "Do you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](432, "div", 119)(433, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_433_listener() {
          return ctx.CloseModaldeleteMediation("delete_mediation_modal");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](434, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkAreaComponent_Template_button_click_435_listener() {
          return ctx.DeleteLabDataMediation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](436, "Yes,continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](41, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.show_patient_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.show_patient_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](42, _c11, ctx.active_status == "clinical_history"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](44, _c11, ctx.active_status == "lab"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](46, _c11, ctx.active_status == "medication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](48, _c11, ctx.active_status == "care_team"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](50, _c12, ctx.active_status == "clinical_history"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](52, _c13, ctx.active_sub_status == "pre_diagnosis"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](54, _c13, ctx.active_sub_status == "indication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](56, _c13, ctx.active_sub_status == "post_diagnosis"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](58, _c12, ctx.active_sub_status == "pre_diagnosis"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.tableForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rowControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.clinical_history ? ctx.clinical_history : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](60, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.clinical_history.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](61, _c14, ctx.active_sub_status == "indication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.tableFormIndication);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rowControls1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.clinical_history_indication_data ? ctx.clinical_history_indication_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](63, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.clinical_history_indication_data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](64, _c14, ctx.active_sub_status == "post_diagnosis"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.tableFormPostdiagonis);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rowControls2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.clinical_history_postdiagonis_data ? ctx.clinical_history_postdiagonis_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](66, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.clinical_history_postdiagonis_data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](67, _c12, ctx.active_status == "lab"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.tablelab);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rowControlslab);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lab_data ? ctx.lab_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](69, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.lab_data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](70, _c12, ctx.active_status == "medication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.tableMedication);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rowMediationlab);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.mediation_data ? ctx.mediation_data : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](72, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mediation_data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](73, _c12, ctx.active_status == "care_team"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.careteam_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Alert_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tasklist_notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hide_comment_field);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDaterangepickerInputDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__.BsDropdownDirective, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_13__.AccordionComponent, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_13__.AccordionPanelComponent, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__.TooltipDirective, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalDirective, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__.SlideComponent, ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__.CarouselComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, ngx_slider_v2__WEBPACK_IMPORTED_MODULE_16__.SliderComponent, _all_procedures_all_procedures_component__WEBPACK_IMPORTED_MODULE_3__.AllProceduresComponent],
    styles: [".searchs-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 13px;\n  top: 8px;\n  line-height: 38px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #ECECEC;\n  position: relative;\n  top: 47%;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .nav[_ngcontent-%COMP%] {\n  background: #654e98 !important;\n  height: 34px !important;\n  border-radius: 0px 0px 0px 0px !important;\n  text-align: center !important;\n  display: flex !important;\n  flex-wrap: nowrap !important;\n  padding: 3px 3px;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 10px 10px 0px 0px !important;\n  padding: 7px 20px !important;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000 !important;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .details_tab[_ngcontent-%COMP%] {\n  color: #1B1B1B !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  border: none !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.accordion-item[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 10px 0px;\n}\n\n  .card-header {\n  padding: 3px 10px 5px 10px !important;\n  background: #F3F4F8 !important;\n}\n\n  .card-block {\n  overflow: hidden !important;\n}\n\n.verti-timeline[_ngcontent-%COMP%] {\n  border-left: 1px solid #8B8B8B !important;\n  margin: 0 -1px !important;\n  height: 50px;\n}\n\n  .verti-timeline .event-list {\n  padding: 7px 0px 0px 20px !important;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #27AF2C !important;\n  border-color: #27AF2C !important;\n}\n\n.form-check-inputs[_ngcontent-%COMP%]:checked {\n  background-color: #855EDB !important;\n  border-color: #855EDB !important;\n}\n\n.verti-timeline[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]   .event-timeline-dot[_ngcontent-%COMP%] {\n  left: -9px !important;\n  top: 10px !important;\n}\n\n.alert_images[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0px 8px;\n}\n\n.alert_images_dull[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0px 8px;\n  opacity: 0.2;\n}\n\n.tooltipClass[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  background: #fff !important;\n  border: 1px solid #343434 !important;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: none !important;\n  border-radius: 0px !important;\n  margin-top: 0rem 0rem !important;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border-radius: 10px 10px 0px 0px !important;\n}\n.nav-link.active[_ngcontent-%COMP%]   .details_tab[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n  font-weight: 600 !important;\n  color: #1B1B1B !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  padding: 5px 15px !important;\n}\n\n.navs-links[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff !important;\n  transition: none !important;\n  transform: none !important;\n  padding: 5px 30px !important;\n  opacity: 1;\n}\n\n.navs-links.active[_ngcontent-%COMP%] {\n  background: #855EDB;\n  border-radius: 12px !important;\n}\n.navs-links.active[_ngcontent-%COMP%]   .details_tab[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F3F4F8 !important;\n  border-color: none !important;\n}\n\n.table-light[_ngcontent-%COMP%] {\n  border-color: #fff !important;\n}\n\n.care_btn[_ngcontent-%COMP%]:hover {\n  border: 1px solid #1B1B1B !important;\n  background: #fff !important;\n  padding: 4px 10px !important;\n}\n\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  bottom: -5px !important;\n  background: #654e98 !important;\n}\n\n.mrp[_ngcontent-%COMP%] {\n  color: #F6AA36 !important;\n  font-size: 7px !important;\n}\n\n.house[_ngcontent-%COMP%] {\n  color: #22C833 !important;\n  font-size: 7px !important;\n}\n\n.escort[_ngcontent-%COMP%] {\n  color: #747474 !important;\n  font-size: 7px !important;\n}\n\n  .carousel-control-prev {\n  left: -9px !important;\n  height: 36px !important;\n  width: 17px !important;\n}\n\n  .carousel-control-next {\n  right: -28px !important;\n  width: 17px !important;\n  height: 37px !important;\n}\n\n .carousel-inner {\n  margin-left: 1rem !important;\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n  .card-header {\n  padding: 3px 10px 3px 10px !important;\n  background: #F3F4F8 !important;\n}\n\n  .ngx-slider .ngx-slider-selection {\n  background: #855EDB !important;\n  border-radius: 2px !important;\n}\n\n  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after {\n  background-color: #855EDB !important;\n}\n\n  .ngx-slider .ngx-slider-bubble {\n  font-size: 10px !important;\n}\n\n  .ngx-slider .ngx-slider-pointer {\n  cursor: pointer;\n  width: 15px !important;\n  height: 15px !important;\n  top: -6px !important;\n  background-color: #0db9f0;\n  z-index: 3;\n  border-radius: 16px;\n}\n\n  .ngx-slider .ngx-slider-pointer:after {\n  display: none !important;\n}\n\n.editAlertData[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.bg-active[_ngcontent-%COMP%] {\n  background: #F3F4F8 !important;\n  border-radius: 6px !important;\n  margin: 10px 5px;\n}\n\n[_nghost-%COMP%]     .bs-datepicker-head {\n  background-color: #594585;\n}\n\n[_nghost-%COMP%]     .previous {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .current {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS13b3JrLWFyZWEvd29yay1hcmVhL3dvcmstYXJlYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBRUUsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFFRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFFQSxnQkFBQTtBQURGOztBQUlBO0VBRUUsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0FBRkY7QUFHRTtFQUVFLHNCQUFBO0FBRko7QUFJRTtFQUVFLHlCQUFBO0FBSEo7O0FBTUE7RUFDRSx1QkFBQTtBQUhGOztBQU1BO0VBRUUsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFDQUFBO0VBQ0EsOEJBQUE7QUFKRjs7QUFPQTtFQUVFLDJCQUFBO0FBTEY7O0FBUUE7RUFFRSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVNBO0VBQ0Usb0NBQUE7QUFORjs7QUFTQTtFQUVFLG9DQUFBO0VBQ0EsZ0NBQUE7QUFQRjs7QUFVQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7QUFQRjs7QUFVQTtFQUVFLHFCQUFBO0VBQ0Esb0JBQUE7QUFSRjs7QUFVQTtFQUVFLGVBQUE7RUFDQSxlQUFBO0FBUkY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUVFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQVJGOztBQVlBO0VBRUUsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBVkY7O0FBYUE7RUFFRSwyQkFBQTtFQUNBLDJDQUFBO0FBWEY7QUFhRTtFQUVFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQVpKOztBQWdCQTtFQUVFLDRCQUFBO0FBZEY7O0FBaUJBO0VBRUUsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQWZGOztBQWtCQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFmQTtBQWdCRTtFQUNFLHNCQUFBO0FBZEo7O0FBa0JBO0VBRUEsOEJBQUE7RUFDQSw2QkFBQTtBQWhCQTs7QUFrQkE7RUFDRSw2QkFBQTtBQWZGOztBQWtCQTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQWZGOztBQW1CQTtFQUVFLHVCQUFBO0VBQ0EsOEJBQUE7QUFqQkY7O0FBbUJBO0VBRUUseUJBQUE7RUFDQSx5QkFBQTtBQWpCRjs7QUFtQkE7RUFFRSx5QkFBQTtFQUNBLHlCQUFBO0FBakJGOztBQW1CQTtFQUVFLHlCQUFBO0VBQ0EseUJBQUE7QUFqQkY7O0FBb0JBO0VBRUEscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBbEJBOztBQXFCQTtFQUVBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQW5CQTs7QUFzQkE7RUFFRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFwQkY7O0FBdUJBO0VBRUUscUNBQUE7RUFDRSw4QkFBQTtBQXJCSjs7QUF3QkE7RUFHRSw4QkFBQTtFQUNBLDZCQUFBO0FBdkJGOztBQTBCQTtFQUVFLG9DQUFBO0FBeEJGOztBQTBCQTtFQUVFLDBCQUFBO0FBeEJGOztBQTJCQTtFQUVFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQXpCRjs7QUEyQkE7RUFFRSx3QkFBQTtBQXpCRjs7QUE0QkE7RUFFRSxrQkFBQTtBQTFCRjs7QUE2QkE7RUFFRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUEzQkY7O0FBK0JBO0VBRUUseUJBQUE7QUE3QkY7O0FBZ0NBO0VBRUksc0JBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksc0JBQUE7QUE5QkoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNocy1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTNweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbn1cclxuLmNhcmQtZm9vdGVyXHJcbntcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VDRUNFQztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0NyU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IC5uYXZcclxue1xyXG4gIGJhY2tncm91bmQ6IzY1NGU5OCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDNweCAzcHg7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZVxyXG57XHJcbiAgYmFja2dyb3VuZDojZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA3cHggMjBweCAhaW1wb3J0YW50O1xyXG4gIHNwYW5cclxuICB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGV0YWlsc190YWJcclxuICB7XHJcbiAgICBjb2xvcjogIzFCMUIxQiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4ubmF2LXRhYnMgLm5hdi1saW5rOmZvY3Vze1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5rXHJcbntcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi1pdGVte1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweCAwcHggO1xyXG59XHJcblxyXG46Om5nLWRlZXAgIC5jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogM3B4IDEwcHggNXB4IDEwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjRjNGNEY4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2FyZC1ibG9ja1xyXG57XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVydGktdGltZWxpbmVcclxue1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzhCOEI4QiAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAtMXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4IDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC52ZXJ0aS10aW1lbGluZSAuZXZlbnQtbGlzdHtcclxuICBwYWRkaW5nOiA3cHggMHB4IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN0FGMkMgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMyN0FGMkMgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0czpjaGVja2Vke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTVFREIgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICM4NTVFREIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlcnRpLXRpbWVsaW5lIC5ldmVudC1saXN0IC5ldmVudC10aW1lbGluZS1kb3Rcclxue1xyXG4gIGxlZnQ6IC05cHggIWltcG9ydGFudDtcclxuICB0b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uYWxlcnRfaW1hZ2VzXHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwcHggOHB4O1xyXG59XHJcbi5hbGVydF9pbWFnZXNfZHVsbHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwcHggOHB4O1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG5cclxuLnRvb2x0aXBDbGFzc1xyXG57XHJcbiAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjMzQzNDM0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubmF2LWxpbms6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwcmVtIDByZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZVxyXG57XHJcbiAgYmFja2dyb3VuZDojZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAvLyBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAuZGV0YWlsc190YWJcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMUIxQjFCICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWxpbmtcclxue1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZzLWxpbmtzXHJcbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggMzBweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5uYXZzLWxpbmtzLmFjdGl2ZXtcclxuYmFja2dyb3VuZDogIzg1NUVEQjtcclxuYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gIC5kZXRhaWxzX3RhYntcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUgdGhcclxue1xyXG5iYWNrZ3JvdW5kOiNGM0Y0RjggIWltcG9ydGFudDtcclxuYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRhYmxlLWxpZ2h0e1xyXG4gIGJvcmRlci1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJlX2J0bjpob3ZlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMUIxQjFCICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubmF2LXRhYnMtY3VzdG9tIC5uYXYtaXRlbSAubmF2LWxpbms6OmFmdGVyXHJcbntcclxuICBib3R0b206IC01cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjNjU0ZTk4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1ycFxyXG57XHJcbiAgY29sb3I6ICNGNkFBMzYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcbi5ob3VzZVxyXG57XHJcbiAgY29sb3I6ICMyMkM4MzMgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcbi5lc2NvcnRcclxue1xyXG4gIGNvbG9yOiAjNzQ3NDc0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZcclxue1xyXG5sZWZ0OiAtOXB4ICFpbXBvcnRhbnQ7XHJcbmhlaWdodDogMzZweCAhaW1wb3J0YW50O1xyXG53aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dFxyXG57XHJcbnJpZ2h0OiAtMjhweCAhaW1wb3J0YW50O1xyXG53aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG5oZWlnaHQ6IDM3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLmNhcm91c2VsLWlubmVyXHJcbntcclxuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2FyZC1oZWFkZXJcclxue1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4IDNweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGNEY4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1zZWxlY3Rpb25cclxue1xyXG4gIC8vIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyLm5neC1zbGlkZXItYWN0aXZlOmFmdGVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJ1YmJsZVxyXG57XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyXHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICB0b3A6IC02cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiOWYwO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG46Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItcG9pbnRlcjphZnRlclxyXG57XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWRpdEFsZXJ0RGF0YVxyXG57XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDtcclxufVxyXG5cclxuLmJnLWFjdGl2ZVxyXG57XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGOCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTBweCA1cHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItaGVhZFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NDU4NTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wcmV2aW91c3tcclxuXHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmN1cnJlbnQge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_procedure_procedure-work-area_procedure-work-area_module_ts.js.map