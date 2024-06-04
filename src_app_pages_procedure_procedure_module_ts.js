"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_procedure_procedure_module_ts"],{

/***/ 6070:
/*!*************************************************************!*\
  !*** ./src/app/pages/procedure/procedure-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureRoutingModule: () => (/* binding */ ProcedureRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procedure/procedure.component */ 8976);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 8036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_0__.ProcedureComponent,
  canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class ProcedureRoutingModule {
  static #_ = this.ɵfac = function ProcedureRoutingModule_Factory(t) {
    return new (t || ProcedureRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ProcedureRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProcedureRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 3616:
/*!*****************************************************!*\
  !*** ./src/app/pages/procedure/procedure.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureModule: () => (/* binding */ ProcedureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _procedure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procedure-routing.module */ 6070);
/* harmony import */ var _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./procedure/procedure.component */ 8976);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3804);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 6380);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2195);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);












class ProcedureModule {
  static #_ = this.ɵfac = function ProcedureModule_Factory(t) {
    return new (t || ProcedureModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ProcedureModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _procedure_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcedureRoutingModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownModule.forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProcedureModule, {
    declarations: [_procedure_procedure_component__WEBPACK_IMPORTED_MODULE_1__.ProcedureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _procedure_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcedureRoutingModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__.BsDropdownModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule]
  });
})();

/***/ }),

/***/ 8976:
/*!******************************************************************!*\
  !*** ./src/app/pages/procedure/procedure/procedure.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcedureComponent: () => (/* binding */ ProcedureComponent)
/* harmony export */ });
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-enterprise */ 6471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/authfake.service */ 9634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3804);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2195);













const _c0 = ["myGrid_1"];
const _c1 = function (a0) {
  return {
    "main_active": a0
  };
};
function ProcedureComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_div_7_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const x_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.Change_grid_data(x_r8.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, ctx_r0.main_filter_value == x_r8.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", x_r8.value, "");
  }
}
function ProcedureComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const item_r11 = ctx.item;
    const item$_r12 = ctx.item$;
    const index_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "item-", index_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item$_r12.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r11, " ");
  }
}
function ProcedureComponent_div_49_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_div_49_img_3_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.DeleteSavedFiltervalues(i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProcedureComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 83)(1, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProcedureComponent_div_49_img_3_Template, 1, 0, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.enable_edit_feature);
  }
}
function ProcedureComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_div_52_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.resetSavedFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProcedureComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_div_53_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.EnableEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProcedureComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_div_54_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.EnableEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save as");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProcedureComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c2 = function () {
  return {
    withTimepicker: true,
    rangeInputFormat: "MMMM Do YYYY, h:mm:ss a",
    dateInputFormat: "MMMM Do YYYY, h:mm:ss a"
  };
};
const _c3 = function (a0) {
  return {
    "show_filters": a0
  };
};
const _c4 = function (a0) {
  return {
    "reduce_grid_size": a0
  };
};
class ProcedureComponent {
  constructor(router, http, allServices, toastr, authService) {
    this.router = router;
    this.http = http;
    this.allServices = allServices;
    this.toastr = toastr;
    this.authService = authService;
    this.main_tabs_filters = [];
    this.main_filter_value = 'View all';
    this.SelectedRowData = [];
    this.enable_edit_feature = false;
    this.enabled_saveas_button = true;
    this.gridOptions1 = {
      defaultColDef: {
        filter: false
      },
      overlayNoRowsTemplate: '<span class="ag-overlay-no-rows-center">No rows to show</span>',
      suppressMenuHide: false,
      rowSelection: 'multiple',
      suppressRowClickSelection: true,
      rowHeight: 35,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      pagination: true,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: true,
      getRowStyle: params => {
        if (params.data.Priority === 'Emergency') {
          return {
            background: 'rgb(250 218 218) !important'
          };
        }
        return null;
      }
    };
    this.defaultColDef = {
      editable: false,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true
    };
    this.columnDefs1 = [];
    this.sideBar = {
      toolPanels: [{
        id: 'columns',
        labelDefault: 'Columns Visibility',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivots: true,
          suppressPivotMode: true,
          suppressColumnFilter: false,
          suppressColumnSelectAll: false
        }
      }],
      defaultToolPanel: null
    };
    this.selected_patient_type = 'in_patient';
    this.show_advanced_filtes = false;
    this.reduce_size = false;
    this.Saved_filter_options = ['Saved filter 1', 'Saved filter 2', 'Saved filter 3', 'Saved filter 4', 'Saved filter 5'];
    this.sortBy_values = ['Priority', 'In Patient', 'Speciality'];
  }
  ngOnInit() {
    this.http.get('assets/json/main_filters_Procedure_list.json').subscribe(res => {
      this.main_tabs_filters = res;
    });
    this.http.get('assets/json/procedure_filters_value.json').subscribe(res => {
      this.current_Procedure_filters = res[0].value;
    });
  }
  navigate_to_WorkArea() {
    this.router.navigate(['/workarea']);
  }
  Change_grid_data(data) {
    this.main_filter_value = data;
  }
  changeSavedfilter(data) {
    if (data == 'Saved filter 1') {
      this.http.get('assets/json/saved_filter_1.json').subscribe(res => {
        this.Current_Saved_filter_values = res[0].filter_values;
        console.log(this.Current_Saved_filter_values);
      });
      this.enabled_edit_btn = true;
      this.enabled_reset_btn = true;
    }
  }
  EnableEdit() {
    this.enable_edit_feature = true;
    this.enabled_saveas_button = false;
  }
  resetSavedFilters() {
    this.enabled_reset_btn = false;
    this.enabled_edit_btn = false;
    this.enabled_saveas_button = true;
    this.Current_Saved_filter_values = [];
    this.CurrentSavedFilter = '';
  }
  DeleteSavedFiltervalues(index) {
    this.Current_Saved_filter_values.splice(index, 1);
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
    console.log('event', params);
    this.http.get('assets/json/Procedure_list.json').subscribe(res => {
      console.log('Response Grid', res);
      // let colDefs: ColDef[] = [];
      // colDefs = this.gridOptions1.api?.getColumnDefs();
      // colDefs.length = 0;
      // const keys: any = Object.keys(res[0])
      // keys.forEach((key: any) => {
      //   if (key == 'checkboxSelection') {
      //     let headerName = '';
      //     colDefs.push({ checkboxSelection: true, headerCheckboxSelection: true, width: 50, cellRenderer: this.cellrendered.bind(this, key), headerName: headerName, })
      //   }
      //   else if(key != 'substatus') {
      //     colDefs.push({ field: key, cellRenderer: this.cellrendered.bind(this, key),onCellClicked:this.cellClicked.bind(this,key) })
      //   }
      // });
      // console.log('colDefs', colDefs);
      // this.gridOptions1.api?.setColumnDefs(colDefs);
      // this.gridOptions1.api?.setRowData(res);
    });

    this.allServices.GetAllPatientProcedureList().subscribe({
      next: res => {
        console.log(res);
        if (res.status == 'Success' && res.patient_list.length > 0) {
          console.log('Response Grid', res);
          let colDefs = [];
          colDefs = this.gridOptions1.api?.getColumnDefs();
          colDefs.length = 0;
          const keys = Object.keys(res.patient_list[0]);
          console.log(keys);
          keys.forEach(key => {
            console.log(key);
            if (key == 'checkboxSelection') {
              console.log('IN');
              let headerName = '';
              colDefs.push({
                checkboxSelection: true,
                headerCheckboxSelection: true,
                width: 50,
                cellRenderer: this.cellrendered.bind(this, key),
                headerName: headerName
              });
            } else if (key != 'id') {
              colDefs.push({
                field: key,
                cellRenderer: this.cellrendered.bind(this, key),
                onCellClicked: this.cellClicked.bind(this, key)
              });
            }
          });
          console.log('colDefs', colDefs);
          this.gridOptions1.api?.setColumnDefs(colDefs);
          this.gridOptions1.api?.setRowData(res.patient_list);
        } else {
          this.gridOptions1.api?.setColumnDefs([]);
          this.gridOptions1.api?.setRowData([]);
        }
      },
      error: res => {
        this.toastr.error('Something went wrong', 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
    this.SelectedRowData = this.gridApi_1?.getSelectedRows();
  }
  cellClicked(headername, params) {
    switch (headername) {
      case 'Name':
        {
          let rowData = params.node.data;
          console.log(rowData);
          this.router.navigate(['/workarea']);
          // this.authService.PassingPatientID(rowData.id);
          localStorage.setItem('PatientID', rowData["id"]);
          localStorage.setItem('Procedure', rowData["Procedure Name"]);
          localStorage.setItem('MRN_NO', rowData["MRN"]);
          localStorage.setItem('ExamStatus', rowData["Exam Status"]);
          localStorage.setItem('AccessionNo', rowData["Accession Number"]);
        }
    }
  }
  cellrendered(headerName, params) {
    switch (headerName) {
      case 'Name':
        {
          if (params.value) {
            const capitalizedStr = params.value.charAt(0).toUpperCase() + params.value.slice(1);
            return capitalizedStr;
          } else return '-';
        }
      case 'MRN':
        {
          if (params.value) {
            return params.value;
          } else return '-';
        }
      case 'Gender':
        {
          if (params.value) {
            return params.value;
          } else {
            return '-';
          }
        }
      case 'Type':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'DOB':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Age':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Location':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Exam Status':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Study ID':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Priority':
        {
          switch (params.value) {
            case 'Emergency':
              {
                return `<div class="d-flex flex-row align-items-center"><p style="color:#D62424 !important;font-weight:400 !important" class="mb-0">${params.value}<h5 style="font-weight:400 !important;color:
            #855EDB !important;padding:0px 6px 0px 6px !important;background:#fff;border-radius:27px !important" class="mb-0 ms-2">Yet to start</h5></p></div>`;
              }
            case 'Routine':
              {
                return `<p style="color:#17B927 !important;font-weight:400 !important">${params.value}</p>`;
              }
            case 'Other':
              {
                return `<p style="color:#594585 !important;font-weight:400 !important">${params.value}</p>`;
              }
          }
        }
      case 'Procedure Status':
        {
          if (params.value) {
            let rowData = params.node.data;
            const substatus = rowData.substatus;
            if (substatus) {
              return `<div class="d-flex flex-row  align-items-center"><p class="mb-0">${params.value}</p><h5 class="ms-1 mb-0" style="font-weight:400 !important;color:#855EDB !important;background:#F3F4F8;padding : 0px 4px 0px 4px;border-radius:27px">${substatus}</h5></div>`;
            } else {
              return params.value;
            }
          } else return '-';
        }
      case 'Study Date And Time':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Accession Number':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Requesting Physician':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Speciality':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Claim Note':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Assigned To':
        {
          let x;
          x = params.value.substring(0, 10);
          x != null ? x : 'UA';
          const rowData = params.node.data;
          const assignedTo = rowData.Date;
          console.log('sasasa', assignedTo);
          return `${assignedTo == null ? 'UA' : assignedTo} | ${x}`;
        }
      case 'Language':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Blood':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Weight':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Height':
        {
          if (params.value) return params.value;else return '-';
        }
      case 'Procedure Name':
        {
          if (params.value) return params.value;else return '-';
        }
    }
  }
  PatientType(type) {
    this.selected_patient_type = type;
  }
  ShowAdvancedFilters() {
    this.show_advanced_filtes = true;
    this.reduce_size = true;
  }
  HideAdvanceFilters() {
    this.show_advanced_filtes = false;
    this.reduce_size = false;
  }
  selectedFileChange2(e) {
    this.selectedFile = e.target.files[0];
    console.log(this.selectedFile);
    this.allServices.ImportPatientExcel(this.selectedFile).subscribe({
      next: res => {
        console.log(res);
        if (res.status == 'Success') {
          this.toastr.success(`${res.message}`, 'Successful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
          this.allServices.GetAllPatientProcedureList().subscribe({
            next: res => {
              console.log(res);
              if (res.status == 'Success') {
                console.log('Response Grid', res);
                let colDefs = [];
                colDefs = this.gridOptions1.api?.getColumnDefs();
                colDefs.length = 0;
                const keys = Object.keys(res.patient_list[0]);
                console.log(keys);
                keys.forEach(key => {
                  console.log(key);
                  if (key == 'checkboxSelection') {
                    console.log('IN');
                    let headerName = '';
                    colDefs.push({
                      checkboxSelection: true,
                      headerCheckboxSelection: true,
                      width: 50,
                      cellRenderer: this.cellrendered.bind(this, key),
                      headerName: headerName
                    });
                  } else if (key != 'id') {
                    colDefs.push({
                      field: key,
                      cellRenderer: this.cellrendered.bind(this, key),
                      onCellClicked: this.cellClicked.bind(this, key)
                    });
                  }
                });
                console.log('colDefs', colDefs);
                this.gridOptions1.api?.setColumnDefs(colDefs);
                this.gridOptions1.api?.setRowData(res.patient_list);
              }
            },
            error: res => {
              this.toastr.error('Something went wrong', 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
        }
      },
      error: res => {
        this.toastr.error('Something went wrong', 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  ReloadGrid() {
    this.allServices.GetAllPatientProcedureList().subscribe({
      next: res => {
        console.log(res);
        if (res.status == 'Success') {
          console.log('Response Grid', res);
          let colDefs = [];
          colDefs = this.gridOptions1.api?.getColumnDefs();
          colDefs.length = 0;
          const keys = Object.keys(res.patient_list[0]);
          console.log(keys);
          keys.forEach(key => {
            console.log(key);
            if (key == 'checkboxSelection') {
              console.log('IN');
              let headerName = '';
              colDefs.push({
                checkboxSelection: true,
                headerCheckboxSelection: true,
                width: 50,
                cellRenderer: this.cellrendered.bind(this, key),
                headerName: headerName
              });
            } else if (key != 'id' || key != 'town_city' || key != 'state' || key != 'patient_source_from') {
              colDefs.push({
                field: key,
                cellRenderer: this.cellrendered.bind(this, key),
                onCellClicked: this.cellClicked.bind(this, key)
              });
            }
          });
          console.log('colDefs', colDefs);
          this.gridOptions1.api?.setColumnDefs(colDefs);
          this.gridOptions1.api?.setRowData(res.patient_list);
        }
      },
      error: res => {
        this.toastr.error('Something went wrong', 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  static #_ = this.ɵfac = function ProcedureComponent_Factory(t) {
    return new (t || ProcedureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProcedureComponent,
    selectors: [["app-procedure"]],
    viewQuery: function ProcedureComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myGrid_1 = _t.first);
      }
    },
    decls: 130,
    vars: 34,
    consts: [[1, "cards"], [1, "row", "p-1"], [1, "col-1"], [1, "header_name_bold", "mt-1", 2, "text-wrap", "nowrap !important", "word-break", "normal !important"], [1, "col-7"], [1, "d-flex", "justify-centent-between", "align-items-center", "ms-3", 2, "border", "1px solid #ECECEC", "border-radius", "6px", "flex-wrap", "wrap", "width", "fit-content"], ["class", "me-2", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "d-flex", "justify-content-between", "align-items-center", "float-end", 2, "flex-wrap", "wrap"], [1, "me-2"], [1, "btn-diasble"], [1, "tab_filter_img", "me-2", 3, "click"], ["src", "assets/images/reload.svg", "width", "20px", "height", "20px", "tooltip", "Reload", "placement", "bottom"], [1, "tab_filter_img", "me-2"], ["src", "assets/images/print.svg", "width", "20px", "height", "20px", "tooltip", "Export", "placement", "bottom"], [2, "background", "#F3F4F8", "border-radius", "8px"], [1, "row", "py-2", "mx-1", "my-2", 2, "border-bottom", "2px solid #fff"], [1, "col-1", "px-1", 2, "display", "flex", "flex-wrap", "wrap"], [1, "btn-new", 2, "width", "100px !important", 3, "click"], ["src", "assets/images/filter_button_img.svg", "width", "24px", "height", "24px"], [1, "col-7", "px-1"], [1, "d-flex", "flex-wrap", "justify-centent-between", "align-items-center", "ps-0"], [2, "width", "28%"], ["placeholder", "Select the Saved Filter", 3, "items", "ngModel", "change", "ngModelChange"], [1, "ms-2", 2, "width", "28%"], ["type", "text", "placeholder", "Select Date", "bsDaterangepicker", "", 1, "form-control", 2, "height", "35px", "font-size", "0.66rem !important", 3, "bsConfig"], ["placeholder", "Select the Sub-status", 3, "items"], [1, "ms-2"], [1, "form-check", "form-switch", "form-switch-md", "d-flex", "justify-centent-between", "align-items-center", "ps-0"], [2, "font-weight", "500 !important", "text-wrap", "nowrap !important"], ["type", "checkbox", 1, "form-check-input", "ms-3", "mt-0"], [1, "col-4", "px-1"], [1, "d-flex", "justify-centent-between"], [2, "width", "30%"], ["bindLabel", "name", "bindValue", "id", 3, "items", "multiple", "closeOnSelect", "placeholder"], ["ng-option-tmp", ""], [1, "ms-2", 2, "width", "100%"], ["placeholder", "Search by name, MRN, Patient ID, Batch No", 1, "form-control"], [1, "row", "py-2", "mx-1", "mt-4", "mb-2"], [1, "col-8"], [1, "d-flex", "align-items-center"], [2, "font-weight", "500 !important"], ["class", "ms-2", "style", "padding: 5px 6px 5px 6px;background: #FFFFFF;border-radius: 12px;", 4, "ngFor", "ngForOf"], [1, "col-4", "mb-2"], [1, "d-flex", "justify-content-end", "align-items-center"], [4, "ngIf"], [1, "row"], [1, "col-md-3", 2, "display", "none", "height", "auto", 3, "ngClass"], [2, "border", "1px solid #ECECEC", "border-radius", "12px"], [1, "d-flex", "p-2", 2, "border-bottom", "1px solid #ECECEC", "cursor", "pointer", 3, "click"], ["src", "assets/images/back_arrow.svg", "width", "24px", "height", "24px", 1, "me-2"], [1, "header_name_bold"], [1, "row", "mt-3", "mx-1"], [1, "col-6"], [1, "mb-2", 2, "font-weight", "400"], [1, "d-flex", "flex-wrap"], [1, "pointer", 2, "font-weight", "500 !important", "padding", "6px !important", 3, "ngClass", "click"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "col-12"], [1, "d-flex", "flex-wrap", "justify-centent-between"], [1, "form-check", "form-check-inline", "me-4"], ["type", "checkbox", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input"], ["type", "checkbox", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input"], [1, "row", "mt-3"], [1, "d-flex", "flex-column", "p-3"], [1, "mt-2", 2, "width", "100%"], [2, "width", "auto"], ["placeholder", "Select", 3, "items"], [1, "mt-3"], [1, "d-flex", "flex-wrap", 2, "border-top", "1px solid #ECECEC", "flex-direction", "row-reverse", "margin-top", "33%"], [1, "mt-2"], [1, "btn-2"], [1, "btn-diasble", "me-2"], [1, "col-md-9", 3, "ngClass"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "700px", 3, "columnDefs", "gridOptions", "defaultColDef", "gridReady"], ["myGrid_1", ""], [1, "me-2", 2, "cursor", "pointer", 3, "click"], [2, "font-weight", "500 !important", "padding", "6px 16px 6px 16px !important", 3, "ngClass"], ["type", "checkbox", 3, "id", "ngModel"], [1, "ms-2", 2, "padding", "5px 6px 5px 6px", "background", "#FFFFFF", "border-radius", "12px"], [1, "mb-0", 2, "font-weight", "400 !important"], ["src", "assets/images/delete_filter_value.svg", "class", "ms-1", 3, "click", 4, "ngIf"], ["src", "assets/images/delete_filter_value.svg", 1, "ms-1", 3, "click"], ["type", "button", 1, "btn-2", "me-4", 3, "click"], [1, "mdi", "mdi-reload", "me-2"], ["type", "button", 1, "btn-new", "me-2", 2, "width", "auto !important", 3, "click"], ["type", "button", 1, "btn-diasble", "me-2"]],
    template: function ProcedureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Procedure List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProcedureComponent_div_7_Template, 3, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_Template_div_click_13_listener() {
          return ctx.ReloadGrid();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_Template_button_click_20_listener() {
          return ctx.ShowAdvancedFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 20)(24, "div", 21)(25, "div", 22)(26, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcedureComponent_Template_ng_select_change_26_listener() {
          return ctx.changeSavedfilter(ctx.CurrentSavedFilter);
        })("ngModelChange", function ProcedureComponent_Template_ng_select_ngModelChange_26_listener($event) {
          return ctx.CurrentSavedFilter = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 27)(32, "div", 28)(33, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Auto rota");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 31)(37, "div", 32)(38, "div", 33)(39, "ng-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ProcedureComponent_ng_template_40_Template, 2, 3, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 38)(44, "div", 39)(45, "div", 40)(46, "div")(47, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Active filters :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ProcedureComponent_div_49_Template, 4, 2, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 43)(51, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ProcedureComponent_div_52_Template, 4, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, ProcedureComponent_div_53_Template, 3, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, ProcedureComponent_div_54_Template, 3, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ProcedureComponent_div_55_Template, 3, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 46)(57, "div", 47)(58, "div", 48)(59, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_Template_div_click_59_listener() {
          return ctx.HideAdvanceFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "h1", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 52)(64, "div", 53)(65, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Patient Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 55)(68, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_Template_p_click_68_listener() {
          return ctx.PatientType("in_patient");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "In Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcedureComponent_Template_p_click_70_listener() {
          return ctx.PatientType("out_patient");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Out Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 53)(73, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 55)(76, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 52)(85, "div", 62)(86, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Radiology");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 63)(89, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Diagnostic Radiology");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Interventional Radiology");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 67)(98, "div", 62)(99, "div", 68)(100, "div", 69)(101, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Exam Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "ng-select", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 72)(106, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "ng-select", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 72)(111, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Procedure Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "ng-select", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 72)(116, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Study date/time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "ng-select", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 73)(121, "div", 74)(122, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 74)(125, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 77)(128, "ag-grid-angular", 78, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("gridReady", function ProcedureComponent_Template_ag_grid_angular_gridReady_128_listener($event) {
          return ctx.onGridReady_1($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.main_tabs_filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.Saved_filter_options)("ngModel", ctx.CurrentSavedFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.current_Procedure_filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.sortBy_values)("multiple", true)("closeOnSelect", false)("placeholder", "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Current_Saved_filter_values);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.enabled_reset_btn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.enabled_edit_btn && ctx.enabled_saveas_button);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.enabled_saveas_button);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.enabled_edit_btn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c3, ctx.show_advanced_filtes == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c1, ctx.selected_patient_type == "in_patient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c1, ctx.selected_patient_type == "out_patient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.current_Procedure_filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.current_Procedure_filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.current_Procedure_filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.current_Procedure_filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c4, ctx.reduce_size == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columnDefs", ctx.columnDefs1)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgOptionTemplateDirective, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDaterangepickerInputDirective],
    styles: [".main_active[_ngcontent-%COMP%] {\n  background: #855EDB;\n  border: 1px solid #855EDB;\n  color: #fff !important;\n  border-radius: 6px;\n}\n\n.tab_filter_img[_ngcontent-%COMP%] {\n  background: #F3F4F8;\n  padding: 8px;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     .ng-dropdown-panel {\n  background: #fff;\n  height: 110px;\n  overflow-y: scroll;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #855EDB !important;\n  border-color: #855EDB !important;\n}\n\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  --ag-row-hover-color: none !important;\n  --ag-header-background-color: #594585 !important;\n  --ag-selected-row-background-color: transparent !important ;\n}\n\n  .ag-row {\n  border-bottom: none !important;\n}\n\n  .ag-row-selected::before {\n  background-color: transparent !important;\n}\n\n  .ag-row-odd {\n  margin: 10px 0px !important;\n  background: #F3F4F8 !important;\n  z-index: 2;\n  cursor: pointer !important;\n}\n\n  .ag-row-even {\n  margin: 10px 0px !important;\n  background: none !important;\n  cursor: pointer !important;\n}\n\n  .ag-header-viewport {\n  background: #594585;\n}\n\n  .ag-header-cell-text {\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  font-size: 10px !important;\n  font-weight: 400 !important;\n}\n\n  .ag-checkbox-input-wrapper {\n  width: 15px !important;\n  height: 15px !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  font-family: poppins !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  border-radius: 15px;\n  font-family: poppins !important;\n}\n\n  .ag-row-group-expanded {\n  background: #8B8B8B !important;\n}\n  .ag-row-group-expanded .ag-cell-value {\n  color: #fff !important;\n}\n  .ag-row-group-expanded .ag-icon-tree-open {\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  border: none !important;\n}\n\n.show_filters[_ngcontent-%COMP%] {\n  display: block !important;\n  height: 100% !important;\n}\n\n.reduce_grid_size[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  left: 0%;\n}\n\n[_nghost-%COMP%]     .ng-dropdown-panel-items {\n  background: #fff;\n  border: 1px solid #BEBEBF !important;\n}\n\n.import_images[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  background-image: url(\"/assets/images/Download.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-position: 120px !important;\n  background-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvY2VkdXJlL3Byb2NlZHVyZS9wcm9jZWR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBRUUsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUVFLG9DQUFBO0VBQ0UsZ0NBQUE7QUFBSjs7QUFpQkE7RUFFRSxxQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkRBQUE7QUFmRjs7QUFpQkE7RUFDRSw4QkFBQTtBQWRGOztBQXFCQTtFQUVFLHdDQUFBO0FBbkJGOztBQXNCQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBbkJGOztBQXdCQTtFQUVFLG1CQUFBO0FBdEJGOztBQTBCQTtFQUVFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQXhCRjs7QUEyQkE7RUFFRSwwQkFBQTtFQUNBLDJCQUFBO0FBekJGOztBQTRCQTtFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7QUExQkY7O0FBNkJBO0VBRUUsb0NBQUE7RUFDQSwrQkFBQTtBQTNCRjs7QUE4QkE7RUFFRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUE1QkY7O0FBOEJBO0VBRUUsOEJBQUE7QUE1QkY7QUE4QkE7RUFDRSxzQkFBQTtBQTVCRjtBQThCQTtFQUNFLHNCQUFBO0FBNUJGOztBQWdDQTtFQUNFLHVCQUFBO0FBN0JGOztBQWlDQTtFQUVFLHlCQUFBO0VBQ0EsdUJBQUE7QUEvQkY7O0FBaUNBO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQS9CRjs7QUFrQ0E7RUFFRSxnQkFBQTtFQUNBLG9DQUFBO0FBaENGOztBQWtDQTtFQUNFLGlCQUFBO0VBQ0EsK0RBQUE7RUFDQSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7QUEvQkYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzg1NUVEQjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODU1RURCO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi50YWJfZmlsdGVyX2ltZ1xyXG57XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGODtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsXHJcbntcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWRcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTVFREIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzg1NUVEQiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLmFnLXJvb3QgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbi8vICAgd2lkdGg6IDJlbTtcclxuLy8gICBoZWlnaHQ6IDJlbVxyXG4vLyB9XHJcbi8vIDo6bmctZGVlcCAuYWctcm9vdCA6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbi8vICAgYmFja2dyb3VuZDogI2NjY1xyXG4vLyB9XHJcbi8vIDo6bmctZGVlcCAuYWctcm9vdCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRUNFQ0VDXHJcbi8vIH1cclxuLy8gOjpuZy1kZWVwICAuYWctcm9vdCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjNzQ3NDc0XHJcbi8vIH1cclxuXHJcbi5hZy10aGVtZS1hbHBpbmVcclxue1xyXG4gIC0tYWctcm93LWhvdmVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLS1hZy1oZWFkZXItYmFja2dyb3VuZC1jb2xvciA6ICM1OTQ1ODUgIWltcG9ydGFudDtcclxuICAtLWFnLXNlbGVjdGVkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcbjo6bmctZGVlcCAuYWctcm93e1xyXG4gIGJvcmRlci1ib3R0b20gOiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5hZy1yb3cgOmhvdmVye1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuOjpuZy1kZWVwIC5hZy1yb3ctc2VsZWN0ZWQ6OmJlZm9yZVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvdy1vZGR7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6I0YzRjRGOCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDIgO1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvdy1ldmVue1xyXG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuOjpuZy1kZWVwIC5hZy1oZWFkZXItdmlld3BvcnRcclxue1xyXG4gIGJhY2tncm91bmQ6ICM1OTQ1ODU7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0M5QzlDOTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1oZWFkZXItY2VsbC10ZXh0XHJcbntcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1jZWxsLXZhbHVlXHJcbntcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctY2hlY2tib3gtaW5wdXQtd3JhcHBlclxyXG57XHJcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1yb290LXdyYXBwZXJcclxue1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NDc0NzQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogcG9wcGlucyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvb3Qtd3JhcHBlclxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHBvcHBpbnMgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFnLXJvdy1ncm91cC1leHBhbmRlZFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzhCOEI4QiAhaW1wb3J0YW50O1xyXG5cclxuLmFnLWNlbGwtdmFsdWV7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWctaWNvbi10cmVlLW9wZW57XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWNlbGwtdmFsdWV7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uc2hvd19maWx0ZXJzXHJcbntcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5yZWR1Y2VfZ3JpZF9zaXplXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXNcclxue1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjQkVCRUJGICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltcG9ydF9pbWFnZXN7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7IC8vIEFkanVzdCB0aGlzIHZhbHVlIHRvIG1hdGNoIHRoZSB3aWR0aCBvZiB5b3VyIGljb25cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0Rvd25sb2FkLnN2ZycpICFpbXBvcnRhbnQ7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGljb24ncyBVUkxcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIwcHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaWNvblxyXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_procedure_procedure_module_ts.js.map