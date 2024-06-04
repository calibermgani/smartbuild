"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_patient-registration_patient-registration_module_ts"],{

/***/ 4894:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/patient-registration/patient-list/patient-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientListComponent: () => (/* binding */ PatientListComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);








const _c0 = ["patientListGrid"];
const _c1 = ["viewitem"];
const _c2 = function () {
  return {
    ignoreBackdropClick: true
  };
};
class PatientListComponent {
  constructor(allService, toastr, router) {
    this.allService = allService;
    this.toastr = toastr;
    this.router = router;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.imageUrl;
    this.patient_list = [];
    this.defaultColDef = {
      editable: false,
      sortable: true,
      resizable: true,
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
      pagination: true,
      paginationPageSize: 15,
      suppressRowClickSelection: true,
      suppressHorizontalScroll: false,
      suppressMovableColumns: true,
      suppressDragLeaveHidesColumns: true,
      suppressContextMenu: false,
      getRowId: params => {
        return params.data.id;
      }
    };
    this.SelectedPatient = [];
    this.ViewPatientData = [];
    this.columnMainDefs = [{
      field: 'first_name',
      headerName: 'First name',
      cellRenderer: this.cellrendered.bind(this, 'first_name'),
      onCellClicked: this.CellClicked.bind(this, 'first_name')
      // cellRenderer: 'agGroupCellRenderer',
      // cellRendererParams:(params:any)=>{
      //   if(params.data.item_entry_status == 'clone'){
      //     return { innerRenderer: (params: any) => `<div class="d-flex justify-content-center align-items-center">
      //     <div class="me-2">${params.data.item_number}</div>
      //     <div style="padding: 2px 4px 2px 4px;
      //     background: #000;
      //     color: #fff;
      //     border-radius: 5px;
      //     height: 17px;
      //     line-height:12px !important;text-align:center;
      //     width: 50px;}">
      //     New</div>
      //     </div>` };
      //   }
      // }
    }, {
      field: 'middle_name',
      headerName: 'Middle name',
      cellRenderer: this.cellrendered.bind(this, 'middle_name')
    }, {
      field: 'surname',
      headerName: 'Surname',
      cellRenderer: this.cellrendered.bind(this, 'surname')
    }, {
      field: 'name_of_children',
      headerName: 'Name of Children',
      cellRenderer: this.cellrendered.bind(this, 'name_of_children')
    }, {
      field: 'name_of_partner',
      headerName: 'Name of Partner',
      cellRenderer: this.cellrendered.bind(this, 'name_of_partner')
    }, {
      field: 'occupation',
      headerName: 'Occupation',
      cellRenderer: this.cellrendered.bind(this, 'occupation')
    }, {
      field: 'dob',
      headerName: 'DOB',
      cellRenderer: this.cellrendered.bind(this, 'dob')
    }, {
      field: 'age',
      headerName: 'Age',
      cellRenderer: this.cellrendered.bind(this, 'age')
    }, {
      field: 'gender',
      headerName: 'Gender',
      cellRenderer: this.cellrendered.bind(this, 'gender')
    }, {
      field: 'marital_status',
      headerName: 'Martial Status',
      cellRenderer: this.cellrendered.bind(this, 'marital_status')
    }, {
      field: 'language',
      headerName: 'Language',
      cellRenderer: this.cellrendered.bind(this, 'language')
    }, {
      field: 'referred_by',
      headerName: 'Referred by',
      cellRenderer: this.cellrendered.bind(this, 'referred_by')
    }, {
      field: 'telephone',
      headerName: 'Primary telephone',
      cellRenderer: this.cellrendered.bind(this, 'telephone')
    }, {
      field: 'primary_email',
      headerName: 'Primary email',
      cellRenderer: this.cellrendered.bind(this, 'primary_email')
    }, {
      field: 'address_type',
      headerName: 'Type',
      cellRenderer: this.cellrendered.bind(this, 'address_type')
    }, {
      field: 'flat_unit_no',
      headerName: 'Flat unit no',
      cellRenderer: this.cellrendered.bind(this, 'flat_unit_no')
    }, {
      field: 'street_no',
      headerName: 'Street no',
      cellRenderer: this.cellrendered.bind(this, 'street_no')
    }, {
      field: 'street_name',
      headerName: 'Street Name',
      cellRenderer: this.cellrendered.bind(this, 'street_name')
    }, {
      field: 'suburb',
      headerName: 'Subrub',
      cellRenderer: this.cellrendered.bind(this, 'suburb')
    }, {
      field: 'town_city',
      headerName: 'Town city',
      cellRenderer: this.cellrendered.bind(this, 'town_city')
    }, {
      field: 'state',
      headerName: 'State',
      cellRenderer: this.cellrendered.bind(this, 'state')
    }, {
      field: 'post_code',
      headerName: 'Post Code',
      cellRenderer: this.cellrendered.bind(this, 'post_code')
    }, {
      field: 'blood_group',
      headerName: 'Blood group',
      cellRenderer: this.cellrendered.bind(this, 'blood_group')
    }, {
      field: 'height',
      headerName: 'Height',
      cellRenderer: this.cellrendered.bind(this, 'height')
    }, {
      field: 'weight',
      headerName: 'Weight',
      cellRenderer: this.cellrendered.bind(this, 'weight')
    }, {
      field: 'blood_pressure',
      headerName: 'Blood Pressure',
      cellRenderer: this.cellrendered.bind(this, 'blood_pressure')
    }, {
      field: 'heart_beat',
      headerName: 'Heart beat',
      cellRenderer: this.cellrendered.bind(this, 'heart_beat')
    }, {
      field: 'temperature',
      headerName: 'Temperature',
      cellRenderer: this.cellrendered.bind(this, 'temperature')
    }, {
      field: 'spo2',
      headerName: 'SPO2',
      cellRenderer: this.cellrendered.bind(this, 'spo2')
    }, {
      field: 'respiratory_rate',
      headerName: 'Respiratory rate',
      cellRenderer: this.cellrendered.bind(this, 'respiratory_rate')
    }, {
      field: 'specialty',
      headerName: 'Speciality',
      cellRenderer: this.cellrendered.bind(this, 'specialty')
    }, {
      field: 'priority',
      headerName: 'Priority',
      cellRenderer: this.cellrendered.bind(this, 'priority')
    }, {
      field: 'view',
      width: 10,
      resizable: false,
      filter: false,
      pinned: "right",
      cellRenderer: this.cellrendered.bind(this, 'view'),
      onCellClicked: this.CellClicked.bind(this, 'view')
    }, {
      field: 'edit',
      width: 10,
      filter: false,
      resizable: false,
      pinned: "right",
      cellRenderer: this.cellrendered.bind(this, 'edit'),
      onCellClicked: this.CellClicked.bind(this, 'edit')
    }, {
      field: 'delete',
      width: 20,
      resizable: false,
      filter: false,
      pinned: "right",
      cellRenderer: this.cellrendered.bind(this, 'delete'),
      onCellClicked: this.CellClicked.bind(this, 'delete')
    }
    // {
    //   field: 'note',
    //   width:130,
    //   resizable:false,
    //   filter:false,
    //   pinned:"right",
    //   cellRenderer: this.cellrendered.bind(this, 'note'),
    //   onCellClicked: this.CellClicked.bind(this, 'note')
    // },
    ];
  }

  ngOnInit() {}
  cellrendered(headerName, params) {
    switch (headerName) {
      case 'first_name':
        {
          return params.value ? params.value : '-';
        }
      case 'middle_name':
        {
          return params.value ? params.value : '-';
        }
      case 'surname':
        {
          return params.value ? params.value : '-';
        }
      case 'name_of_children':
        {
          return params.value ? params.value : '-';
        }
      case 'name_of_partner':
        {
          return params.value ? params.value : '-';
        }
      case 'occupation':
        {
          // let newArray :any = [];
          // params.value.forEach(element => {
          //   newArray.push(element.procedure_name);
          // });
          // if(newArray.length>0){return `${newArray}`;}
          // else{return '-';}
          return params.value ? params.value : '-';
        }
      case 'dob':
        {
          return params.value ? params.value : '-';
        }
      case 'age':
        {
          return params.value ? params.value : '-';
        }
      case 'gender':
        {
          return params.value ? params.value : '-';
        }
      case 'marital_status':
        {
          return params.value ? params.value : '-';
        }
      case 'language':
        {
          return params.value ? params.value : '-';
        }
      case 'referred_by':
        {
          return params.value ? params.value : '-';
        }
      case 'telephone':
        {
          return params.value ? params.value : '-';
        }
      case 'primary_email':
        {
          return params.value ? params.value : '-';
        }
      case 'address_type':
        {
          return params.value ? params.value : '-';
        }
      case 'flat_unit_no':
        {
          return params.value ? params.value : '-';
        }
      case 'street_no':
        {
          return params.value ? params.value : '-';
        }
      case 'street_name':
        {
          return params.value ? params.value : '-';
        }
      case 'suburb':
        {
          return params.value ? params.value : '-';
        }
      case 'town_city':
        {
          return params.value ? params.value : '-';
        }
      case 'state':
        {
          return params.value ? params.value : '-';
        }
      case 'post_code':
        {
          return params.value ? params.value : '-';
        }
      case 'blood_group':
        {
          return params.value ? params.value : '-';
        }
      case 'height':
        {
          return params.value ? params.value : '-';
        }
      case 'weight':
        {
          return params.value ? params.value : '-';
        }
      case 'blood_pressure':
        {
          return params.value ? params.value : '-';
        }
      case 'heart_beat':
        {
          return params.value ? params.value : '-';
        }
      case 'temperature':
        {
          return params.value ? params.value : '-';
        }
      case 'spo2':
        {
          return params.value ? params.value : '-';
        }
      case 'respiratory_rate':
        {
          return params.value ? params.value : '-';
        }
      case 'specialty':
        {
          return params.value ? params.value : '-';
        }
      case 'priority':
        {
          return params.value ? params.value : '-';
        }
      case 'view':
        {
          return `<div class="d-flex justify-content-center">
        <div><i class="mdi mdi-eye-outline" style="color:#855EDB;font-size:18px"></i></div></div>`;
        }
      case 'edit':
        {
          return `<div class="d-flex justify-content-center"><div><i class="mdi mdi-pencil-outline" style="color:#000;font-size:18px"></i></div></div>`;
        }
      case 'delete':
        {
          return `<div class="d-flex justify-content-center"><div><i class="mdi mdi-trash-can-outline" style="color:red;font-size:18px"></i></div></div>`;
        }
      // case 'note':{
      //   return `<div style="width:100% !important;height:100% important;"><button class="btn-new" style="width:83px !important;padding:0px 0px 3px 0px !important;height:31px !important">view note</button></div>`
      // }
    }
  }

  CellClicked(headerName, params) {
    switch (headerName) {
      case 'first_name':
        {
          this.allService.SendPatientProcedureRequest(params.data.id).subscribe({
            next: res => {
              this.toastr.success(`${res.message}`, 'Successful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            },
            error: res => {
              this.toastr.error(`${res.message}`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          break;
        }
      case 'view':
        {
          console.log(params.data);
          this.SelectedPatient = params.data;
          this.allService.GetSpecificPatientDetails(this.SelectedPatient.id).subscribe({
            next: res => {
              if (res.status == 'Success') {
                this.ViewPatientData = res.patient;
                this.OpenModal('viewitem');
              }
            },
            error: res => {
              this.toastr.error(`${res.message}`, 'UnSuccessful', {
                positionClass: 'toast-top-center',
                timeOut: 2000
              });
            }
          });
          break;
        }
      case 'edit':
        {
          this.SelectedPatient = params.data;
          localStorage.setItem('Patient_ID', params.data.id);
          this.router.navigateByUrl('/patient-registration/register');
          break;
        }
      case 'delete':
        {
          break;
        }
      case 'note':
        {
          break;
        }
    }
  }
  onSelectionChanged(event) {
    const selectedNodes = event.api.getSelectedRows();
  }
  onGridReady_1(params) {
    this.gridApi_1 = params.api;
    this.allService.GetPatientList().subscribe({
      next: res => {
        if (res.status == 'Success') {
          console.log(res);
          this.patient_list = res.patient_list;
          this.patientListGrid?.api?.setRowData(this.patient_list);
        }
      },
      error: res => {
        this.toastr.error(`${res.message}`, 'UnSuccessful', {
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
      }
    });
  }
  GoToRegisterPage() {
    this.router.navigateByUrl('patient-registration/register');
  }
  CloseModal(modalName) {
    switch (modalName) {
      case 'viewitem':
        {
          this.viewitem?.hide();
          break;
        }
    }
  }
  OpenModal(modalName) {
    switch (modalName) {
      case 'viewitem':
        {
          this.viewitem?.show();
          break;
        }
    }
  }
  GoToProcedureWorkArea() {}
  ReloadPatientList() {
    this.SearchPatientList = '';
    this.patientListGrid.api?.setQuickFilter(this.SearchPatientList);
  }
  SelectedFilePatientList(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.allService.ImportPatientExcel(this.selectedFile).subscribe({
      next: res => {
        console.log(res);
        if (res.status == 'Success') {
          this.toastr.success(`${res.message}`, 'Successful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
          this.allService.GetPatientList().subscribe({
            next: res => {
              if (res.status == 'Success') {
                console.log(res);
                this.patient_list = res.patient_list;
                this.patientListGrid?.api?.setRowData(this.patient_list);
              }
            },
            error: res => {
              this.toastr.error(`${res.message}`, 'UnSuccessful', {
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
  OnSearchpatientList(data) {
    this.patientListGrid.api?.setQuickFilter(this.SearchPatientList);
  }
  static #_ = this.ɵfac = function PatientListComponent_Factory(t) {
    return new (t || PatientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PatientListComponent,
    selectors: [["app-patient-list"]],
    viewQuery: function PatientListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.patientListGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.viewitem = _t.first);
      }
    },
    decls: 267,
    vars: 41,
    consts: [[1, "cards"], [1, "row"], [1, "col-12"], [1, "d-flex", "align-items-center", 2, "background", "#F1EBFF", "padding", "15px", "border-radius", "6px"], [1, "header_name_bold"], [1, "d-flex", "ms-auto"], [1, "me-0"], [1, "btn-new", "add_patient_img", 2, "padding", "6px 12px 6px 22px !important", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "float-end", "ms-2", "pointer", 2, "flex-wrap", "wrap"], [1, "tab_filter_img", "me-2", 3, "click"], ["src", "assets/images/reload.svg", "width", "20px", "height", "20px", "tooltip", "Reload", "placement", "bottom"], [1, "tab_filter_img", "me-2"], [2, "border", "1px dotted #855EDB", "width", "20px", "height", "20px"], [1, "position-relative", "d-inline-block"], [1, "position-absolute", "bottom-0", "end-0", 2, "left", "-6px", "top", "-19px"], ["for", "project-image-input", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Select Image", 1, "mb-0"], [1, "avatar-xs"], [1, "avatar-title", "bg-light", "border", "rounded-circle", "text-muted", "cursor-pointer", "shadow", "font-size-16"], ["src", "assets/images/Download.svg", "width", "20px", "height", "20px", "tooltip", "Import", "placement", "bottom"], ["value", "", "id", "project-image-input", "type", "file", "accept", ".xlsx , .csv", 1, "form-control", "d-none", 3, "change"], ["src", "assets/images/print.svg", "width", "20px", "height", "20px", "tooltip", "Export", "placement", "bottom"], [1, "mt-3", 2, "padding", "13px", "border-radius", "6px", "background-color", "#F3F4F8"], [1, "ms-auto", 2, "width", "20%"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], [1, "mt-2"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "576px", 3, "columnDefs", "gridOptions", "defaultColDef", "gridReady", "selectionChanged"], ["patientListGrid", ""], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade", 3, "config"], ["viewitem", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "900px !important"], [1, "modal-content"], [1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mx-2", "my-3", 2, "background", "#F3F4F8", "border-radius", "8px"], [1, "flex-grow-1", 2, "font-size", "14px !important", "color", "#1B1B1B !important"], ["src", "assets/images/Close_icon.svg", "width", "24px", "height", "24px", 2, "cursor", "pointer", 3, "click"], [1, "p-3", "mx-3", 2, "height", "auto", "background-color", "#594585", "border-radius", "6px"], [1, "d-flex", "flex-row"], [2, "width", "185px", "height", "146px", 3, "src"], [1, "d-flex", "flex-column", "mx-3", 2, "width", "100%"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", 2, "width", "100%", "height", "69px"], [2, "width", "30%"], ["for", "items_category", 1, "modal-label-white", "mb-1", 2, "color", "#E8E5F5 !important"], [1, "", 2, "color", "#fff !important", "font-weight", "500 !important"], [2, "overflow-y", "scroll !important", "height", "500px", "padding", "15px"], [1, "header_name", "ms-3", 2, "font-weight", "550 !important"], [1, "row", "m-3"], [1, "col-3", "ps-0"], [1, "mb-2"], ["for", "items_category", 1, "modal-label", "mb-1"], [1, "viewItem_data"], [1, "col-12", "ps-0"], [1, "d-flex", "flex-row", "justify-content-end", "p-3"], ["type", "button", 1, "btn-new", "me-4", 2, "background", "#F3F4F8 !important", "color", "#000 !important", "width", "auto !important", 3, "click"], ["type", "button", 1, "btn-new", "me-2", 2, "width", "auto !important", 3, "click"]],
    template: function PatientListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Patient List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientListComponent_Template_button_click_8_listener() {
          return ctx.GoToRegisterPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Add New patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientListComponent_Template_div_click_11_listener() {
          return ctx.ReloadPatientList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "label", 15)(18, "div", 16)(19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PatientListComponent_Template_input_change_21_listener($event) {
          return ctx.SelectedFilePatientList($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21)(25, "div", 22)(26, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function PatientListComponent_Template_input_keyup_26_listener() {
          return ctx.OnSearchpatientList(ctx.SearchPatientList);
        })("ngModelChange", function PatientListComponent_Template_input_ngModelChange_26_listener($event) {
          return ctx.SearchPatientList = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 24)(28, "ag-grid-angular", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function PatientListComponent_Template_ag_grid_angular_gridReady_28_listener($event) {
          return ctx.onGridReady_1($event);
        })("selectionChanged", function PatientListComponent_Template_ag_grid_angular_selectionChanged_28_listener($event) {
          return ctx.onSelectionChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 27, 28)(32, "div", 29)(33, "div", 30)(34, "div", 31)(35, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "View Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientListComponent_Template_img_click_37_listener() {
          return ctx.CloseModal("viewitem");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 34)(39, "div", 35)(40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 37)(43, "div", 38)(44, "div", 39)(45, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 39)(50, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Middle name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 39)(55, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 38)(60, "div", 39)(61, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 39)(66, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 39)(71, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 42)(76, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Health Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 44)(79, "div", 45)(80, "div", 46)(81, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Blood group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 45)(86, "div", 46)(87, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 45)(92, "div", 46)(93, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 45)(98, "div", 46)(99, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Blood pressure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 44)(104, "div", 45)(105, "div", 46)(106, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Heart beat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 45)(111, "div", 46)(112, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 45)(117, "div", 46)(118, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "SpO2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 45)(123, "div", 46)(124, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Respiratory rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 44)(129, "div", 49)(130, "div", 46)(131, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Speciality");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 44)(136, "div", 49)(137, "div", 46)(138, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Critical information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 44)(143, "div", 49)(144, "div", 46)(145, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Personal details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 44)(152, "div", 45)(153, "div", 46)(154, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "DOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 45)(159, "div", 46)(160, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Name of children");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 45)(165, "div", 46)(166, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Name of partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 45)(171, "div", 46)(172, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Occupation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 44)(177, "div", 45)(178, "div", 46)(179, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Marital status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 45)(184, "div", 46)(185, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Referred by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 45)(190, "div", 46)(191, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "h1", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Contact details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 44)(198, "div", 45)(199, "div", 46)(200, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Primary telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 45)(205, "div", 46)(206, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Primary email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 45)(211, "div", 46)(212, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 45)(217, "div", 46)(218, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Flat unit no");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 44)(223, "div", 45)(224, "div", 46)(225, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "Street no");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 45)(230, "div", 46)(231, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Street name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 45)(236, "div", 46)(237, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Suburb");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "div", 45)(242, "div", 46)(243, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Town city");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 44)(248, "div", 45)(249, "div", 46)(250, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "div", 45)(255, "div", 46)(256, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](257, "Post code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 50)(261, "div")(262, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientListComponent_Template_button_click_262_listener() {
          return ctx.CloseModal("viewitem");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div")(265, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientListComponent_Template_button_click_265_listener() {
          return ctx.GoToProcedureWorkArea();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "View Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.SearchPatientList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDefs", ctx.columnMainDefs)("gridOptions", ctx.gridOptions1)("defaultColDef", ctx.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.apiUrl + ctx.ViewPatientData.image != ctx.apiUrl + "null" ? ctx.apiUrl + ctx.ViewPatientData.image : "assets/images/Item_default_img.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.first_name ? ctx.ViewPatientData.first_name : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.middle_name ? ctx.ViewPatientData.middle_name : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.surname ? ctx.ViewPatientData.surname : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.priority ? ctx.ViewPatientData.priority : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.age ? ctx.ViewPatientData.age : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.gender ? ctx.ViewPatientData.gender : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.blood_group ? ctx.ViewPatientData.blood_group : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.height ? ctx.ViewPatientData.height : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.weight ? ctx.ViewPatientData.weight : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.blood_pressure ? ctx.ViewPatientData.blood_pressure : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.heart_beat ? ctx.ViewPatientData.heart_beat : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.temperature ? ctx.ViewPatientData.temperature : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.spo2 ? ctx.ViewPatientData.spo2 : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.respiratory_rate ? ctx.ViewPatientData.respiratory_rate : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.specialty ? ctx.ViewPatientData.specialty : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.critical_information ? ctx.ViewPatientData.critical_information : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.notes ? ctx.ViewPatientData.notes : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.dob ? ctx.ViewPatientData.dob : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.name_of_children ? ctx.ViewPatientData.name_of_children : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.name_of_partner ? ctx.ViewPatientData.name_of_partner : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.occupation ? ctx.ViewPatientData.occupation : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.marital_status ? ctx.ViewPatientData.marital_status : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.referred_by ? ctx.ViewPatientData.referred_by : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.language ? ctx.ViewPatientData.language : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.telephone ? ctx.ViewPatientData.telephone : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.ViewPatientData.primary_email ? ctx.ViewPatientData.primary_email : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.address_type ? ctx.ViewPatientData.address_type : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.flat_unit_no ? ctx.ViewPatientData.flat_unit_no : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.street_no ? ctx.ViewPatientData.street_no : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.ViewPatientData.street_name ? ctx.ViewPatientData.street_name : "-", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.suburb ? ctx.ViewPatientData.suburb : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.town_city ? ctx.ViewPatientData.town_city : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ViewPatientData.state ? ctx.ViewPatientData.state : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.ViewPatientData.post_code ? ctx.ViewPatientData.post_code : "-", " ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__.AgGridAngular, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.ModalDirective],
    styles: [".tab_filter_img[_ngcontent-%COMP%] {\n  background: #F3F4F8;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.add_patient_img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/add_patient_img.svg\") !important;\n  background-repeat: no-repeat !important;\n  background-size: 18px !important;\n  background-position: 4px 9px !important;\n}\n\n.ag-theme-alpine[_ngcontent-%COMP%] {\n  --ag-row-hover-color: none !important;\n  --ag-header-background-color: #594585 !important;\n  --ag-selected-row-background-color: transparent !important ;\n}\n\n  .ag-row {\n  border-bottom: none !important;\n}\n\n  .ag-row-selected::before {\n  background-color: transparent !important;\n}\n\n  .ag-row-odd {\n  margin: 10px 0px !important;\n  background: #F3F4F8 !important;\n  z-index: 2;\n  cursor: pointer !important;\n}\n\n  .ag-row-even {\n  margin: 10px 0px !important;\n  background: none !important;\n  cursor: pointer !important;\n}\n\n  .ag-header-viewport {\n  background: #594585;\n}\n\n  .ag-header-cell-text {\n  font-size: 12px !important;\n  font-weight: 500 !important;\n  color: #fff !important;\n}\n\n  .ag-cell-value {\n  font-size: 10px !important;\n  font-weight: 400 !important;\n}\n\n  .ag-checkbox-input-wrapper {\n  width: 15px !important;\n  height: 15px !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  font-family: poppins !important;\n}\n\n  .ag-root-wrapper {\n  border: 1px solid #747474 !important;\n  border-radius: 15px;\n  font-family: poppins !important;\n}\n\n  .ag-row-group-expanded {\n  background: #8B8B8B !important;\n}\n  .ag-row-group-expanded .ag-cell-value {\n  color: #fff !important;\n}\n  .ag-row-group-expanded .ag-icon-tree-open {\n  color: #fff !important;\n}\n\n  .ag-icon-menu {\n  color: #fff !important;\n}\n\n.viewItem_data[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n\n.dis_procedure[_ngcontent-%COMP%] {\n  padding: 3px 8px 3px 9px;\n  border-radius: 12px;\n  background: #664E9A;\n  color: #fff !important;\n  font-size: 9px !important;\n  font-weight: 500 !important;\n  margin: 0px 9px 4px 0px !important;\n  height: 18px !important;\n}\n\n  .ag-cell-value {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGF0aWVudC1yZWdpc3RyYXRpb24vcGF0aWVudC1saXN0L3BhdGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFJQTtFQUNFLHNFQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0FBREY7O0FBTUE7RUFFRSxxQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkRBQUE7QUFKRjs7QUFNQTtFQUNFLDhCQUFBO0FBSEY7O0FBVUE7RUFFRSx3Q0FBQTtBQVJGOztBQVdBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQVJGOztBQVdBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBUkY7O0FBYUE7RUFFRSxtQkFBQTtBQVhGOztBQWVBO0VBRUUsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBYkY7O0FBZ0JBO0VBRUUsMEJBQUE7RUFDQSwyQkFBQTtBQWRGOztBQWlCQTtFQUVFLHNCQUFBO0VBQ0EsdUJBQUE7QUFmRjs7QUFrQkE7RUFFRSxvQ0FBQTtFQUNBLCtCQUFBO0FBaEJGOztBQW1CQTtFQUVFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQWpCRjs7QUFtQkE7RUFFRSw4QkFBQTtBQWpCRjtBQW1CQTtFQUNFLHNCQUFBO0FBakJGO0FBbUJBO0VBQ0Usc0JBQUE7QUFqQkY7O0FBcUJBO0VBQ0Usc0JBQUE7QUFsQkY7O0FBcUJBO0VBRUUsMkJBQUE7QUFuQkY7O0FBcUJBO0VBR0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSx1QkFBQTtBQXBCRiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJfZmlsdGVyX2ltZ1xyXG57XHJcbiAgYmFja2dyb3VuZDogI0YzRjRGODtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmFkZF9wYXRpZW50X2ltZ3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2FkZF9wYXRpZW50X2ltZy5zdmcnKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0cHggOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmFnLXRoZW1lLWFscGluZVxyXG57XHJcbiAgLS1hZy1yb3ctaG92ZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICAtLWFnLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yIDogIzU5NDU4NSAhaW1wb3J0YW50O1xyXG4gIC0tYWctc2VsZWN0ZWQtcm93LWJhY2tncm91bmQtY29sb3IgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuOjpuZy1kZWVwIC5hZy1yb3d7XHJcbiAgYm9yZGVyLWJvdHRvbSA6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLmFnLXJvdyA6aG92ZXJ7XHJcbi8vICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvdy1zZWxlY3RlZDo6YmVmb3JlXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctcm93LW9kZHtcclxuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDojRjNGNEY4ICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMiA7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctcm93LWV2ZW57XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci12aWV3cG9ydFxyXG57XHJcbiAgYmFja2dyb3VuZDogIzU5NDU4NTtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQzlDOUM5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWhlYWRlci1jZWxsLXRleHRcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLWNlbGwtdmFsdWVcclxue1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hZy1jaGVja2JveC1pbnB1dC13cmFwcGVyXHJcbntcclxuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFnLXJvb3Qtd3JhcHBlclxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc0NzQ3NCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctcm9vdC13cmFwcGVyXHJcbntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzQ3NDc0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LWZhbWlseTogcG9wcGlucyAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuYWctcm93LWdyb3VwLWV4cGFuZGVkXHJcbntcclxuICBiYWNrZ3JvdW5kOiAjOEI4QjhCICFpbXBvcnRhbnQ7XHJcblxyXG4uYWctY2VsbC12YWx1ZXtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hZy1pY29uLXRyZWUtb3BlbntcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctaWNvbi1tZW51e1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aWV3SXRlbV9kYXRhXHJcbntcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpc19wcm9jZWR1cmV7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmc6IDNweCA4cHggM3B4IDlweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICM2NjRFOUE7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46MHB4IDlweCA0cHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYWctY2VsbC12YWx1ZXtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5617:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/patient-registration/patient-registration-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientRegistrationRoutingModule: () => (/* binding */ PatientRegistrationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-page/registration-page.component */ 6705);
/* harmony import */ var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-list/patient-list.component */ 4894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'register',
  component: _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageComponent
}, {
  path: 'patient_list',
  component: _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_1__.PatientListComponent
}];
class PatientRegistrationRoutingModule {
  static #_ = this.ɵfac = function PatientRegistrationRoutingModule_Factory(t) {
    return new (t || PatientRegistrationRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PatientRegistrationRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PatientRegistrationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 182:
/*!***************************************************************************!*\
  !*** ./src/app/pages/patient-registration/patient-registration.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientRegistrationModule: () => (/* binding */ PatientRegistrationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _patient_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient-registration-routing.module */ 5617);
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-page/registration-page.component */ 6705);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ 3507);
/* harmony import */ var angular_ng_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-stepper */ 9226);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2195);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-list/patient-list.component */ 4894);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 1435);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ 7269);
/* harmony import */ var _material_management_material_management_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material-management/material-management.module */ 3287);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
















class PatientRegistrationModule {
  static #_ = this.ɵfac = function PatientRegistrationModule_Factory(t) {
    return new (t || PatientRegistrationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PatientRegistrationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _patient_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatientRegistrationRoutingModule, angular_ng_stepper__WEBPACK_IMPORTED_MODULE_7__.NgStepperModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__.CdkStepperModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__.ModalModule.forRoot(), _material_management_material_management_module__WEBPACK_IMPORTED_MODULE_3__.MaterialManagementModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PatientRegistrationModule, {
    declarations: [_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationPageComponent, _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_2__.PatientListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _patient_registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatientRegistrationRoutingModule, angular_ng_stepper__WEBPACK_IMPORTED_MODULE_7__.NgStepperModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__.CdkStepperModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__.ModalModule, _material_management_material_management_module__WEBPACK_IMPORTED_MODULE_3__.MaterialManagementModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 6705:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/patient-registration/registration-page/registration-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationPageComponent: () => (/* binding */ RegistrationPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/all-services.service */ 6861);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var angular_ng_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-ng-stepper */ 9226);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ 3507);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 2195);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 1788);
/* harmony import */ var _prevent_spaces_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../prevent-spaces.directive */ 615);













const _c0 = ["cdkStepper"];
function RegistrationPageComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Step 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 94)(5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function RegistrationPageComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 96);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.ProfileImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function RegistrationPageComponent_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_48_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " First Name should be in alphabets.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_48_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " First Name should not be more than 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_48_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegistrationPageComponent_div_48_div_2_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RegistrationPageComponent_div_48_div_3_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r4.personaldetailsform.controls.first_name.dirty || ctx_r4.personaldetailsform.controls.first_name.touched) && (ctx_r4.personaldetailsform.controls.first_name.errors == null ? null : ctx_r4.personaldetailsform.controls.first_name.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r4.personaldetailsform.controls.first_name.dirty || ctx_r4.personaldetailsform.controls.first_name.touched) && (ctx_r4.personaldetailsform.controls.first_name.errors == null ? null : ctx_r4.personaldetailsform.controls.first_name.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r4.personaldetailsform.controls.first_name.dirty || ctx_r4.personaldetailsform.controls.first_name.touched) && (ctx_r4.personaldetailsform.controls.first_name.errors == null ? null : ctx_r4.personaldetailsform.controls.first_name.errors.maxlength));
  }
}
function RegistrationPageComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " First Name should be in alphabets.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " First Name should not be more than 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_59_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegistrationPageComponent_div_59_div_2_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RegistrationPageComponent_div_59_div_3_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r5.personaldetailsform.controls.last_name.dirty || ctx_r5.personaldetailsform.controls.last_name.touched) && (ctx_r5.personaldetailsform.controls.last_name.errors == null ? null : ctx_r5.personaldetailsform.controls.last_name.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r5.personaldetailsform.controls.last_name.dirty || ctx_r5.personaldetailsform.controls.last_name.touched) && (ctx_r5.personaldetailsform.controls.last_name.errors == null ? null : ctx_r5.personaldetailsform.controls.last_name.errors.pattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r5.personaldetailsform.controls.last_name.dirty || ctx_r5.personaldetailsform.controls.last_name.touched) && (ctx_r5.personaldetailsform.controls.last_name.errors == null ? null : ctx_r5.personaldetailsform.controls.last_name.errors.maxlength));
  }
}
function RegistrationPageComponent_div_75_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_75_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r6.personaldetailsform.controls.occupation.dirty || ctx_r6.personaldetailsform.controls.occupation.touched) && (ctx_r6.personaldetailsform.controls.occupation.errors == null ? null : ctx_r6.personaldetailsform.controls.occupation.errors.required));
  }
}
function RegistrationPageComponent_div_85_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_85_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r7.personaldetailsform.controls.dob.dirty || ctx_r7.personaldetailsform.controls.dob.touched) && (ctx_r7.personaldetailsform.controls.dob.errors == null ? null : ctx_r7.personaldetailsform.controls.dob.errors.required));
  }
}
function RegistrationPageComponent_div_92_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_92_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r8.personaldetailsform.controls.age.dirty || ctx_r8.personaldetailsform.controls.age.touched) && (ctx_r8.personaldetailsform.controls.age.errors == null ? null : ctx_r8.personaldetailsform.controls.age.errors.required));
  }
}
function RegistrationPageComponent_div_118_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please select atleast one gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_118_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r9.personaldetailsform.controls.gender.dirty || ctx_r9.personaldetailsform.controls.gender.touched) && (ctx_r9.personaldetailsform.controls.gender.errors == null ? null : ctx_r9.personaldetailsform.controls.gender.errors.required));
  }
}
function RegistrationPageComponent_div_125_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_125_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r10.personaldetailsform.controls.martial_status.dirty || ctx_r10.personaldetailsform.controls.martial_status.touched) && (ctx_r10.personaldetailsform.controls.martial_status.errors == null ? null : ctx_r10.personaldetailsform.controls.martial_status.errors.required));
  }
}
function RegistrationPageComponent_ng_template_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Step 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 94)(5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function RegistrationPageComponent_div_149_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_149_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Telephone Number should not be in alphabets.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_149_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegistrationPageComponent_div_149_div_2_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r13.contactDetailsform.controls.telephone_number.dirty || ctx_r13.contactDetailsform.controls.telephone_number.touched) && (ctx_r13.contactDetailsform.controls.telephone_number.errors == null ? null : ctx_r13.contactDetailsform.controls.telephone_number.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r13.contactDetailsform.controls.telephone_number.dirty || ctx_r13.contactDetailsform.controls.telephone_number.touched) && (ctx_r13.contactDetailsform.controls.telephone_number.errors == null ? null : ctx_r13.contactDetailsform.controls.telephone_number.errors.pattern));
  }
}
function RegistrationPageComponent_div_156_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_156_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_156_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegistrationPageComponent_div_156_div_2_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r14.contactDetailsform.controls.email.dirty || ctx_r14.contactDetailsform.controls.email.touched) && (ctx_r14.contactDetailsform.controls.email.errors == null ? null : ctx_r14.contactDetailsform.controls.email.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r14.contactDetailsform.controls.email.dirty || ctx_r14.contactDetailsform.controls.email.touched) && (ctx_r14.contactDetailsform.controls.email.errors == null ? null : ctx_r14.contactDetailsform.controls.email.errors.email));
  }
}
function RegistrationPageComponent_ng_template_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Step 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 94)(5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function RegistrationPageComponent_div_180_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Select the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_180_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r17.addressform.controls.addresstype.dirty || ctx_r17.addressform.controls.addresstype.touched) && (ctx_r17.addressform.controls.addresstype.errors == null ? null : ctx_r17.addressform.controls.addresstype.errors.required));
  }
}
function RegistrationPageComponent_div_196_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_196_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r18.addressform.controls.StreetName.dirty || ctx_r18.addressform.controls.StreetName.touched) && (ctx_r18.addressform.controls.StreetName.errors == null ? null : ctx_r18.addressform.controls.StreetName.errors.required));
  }
}
function RegistrationPageComponent_div_216_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_216_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_216_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r19.addressform.controls.postcode.dirty || ctx_r19.addressform.controls.postcode.touched) && (ctx_r19.addressform.controls.postcode.errors == null ? null : ctx_r19.addressform.controls.postcode.errors.required));
  }
}
function RegistrationPageComponent_ng_template_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Health Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Step 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 94)(5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function RegistrationPageComponent_div_240_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_240_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_240_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r22.healthdetailsform.controls.bloodgroup.dirty || ctx_r22.healthdetailsform.controls.bloodgroup.touched) && (ctx_r22.healthdetailsform.controls.bloodgroup.errors == null ? null : ctx_r22.healthdetailsform.controls.bloodgroup.errors.required));
  }
}
function RegistrationPageComponent_div_250_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_250_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Height should be in numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_250_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_250_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegistrationPageComponent_div_250_div_2_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r23.healthdetailsform.controls.height.dirty || ctx_r23.healthdetailsform.controls.height.touched) && (ctx_r23.healthdetailsform.controls.height.errors == null ? null : ctx_r23.healthdetailsform.controls.height.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r23.healthdetailsform.controls.height.dirty || ctx_r23.healthdetailsform.controls.height.touched) && (ctx_r23.healthdetailsform.controls.height.errors == null ? null : ctx_r23.healthdetailsform.controls.height.errors.pattern));
  }
}
function RegistrationPageComponent_div_260_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_260_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Weight should be in numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_260_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RegistrationPageComponent_div_260_div_2_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r24.healthdetailsform.controls.weight.dirty || ctx_r24.healthdetailsform.controls.weight.touched) && (ctx_r24.healthdetailsform.controls.weight.errors == null ? null : ctx_r24.healthdetailsform.controls.weight.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r24.healthdetailsform.controls.weight.dirty || ctx_r24.healthdetailsform.controls.weight.touched) && (ctx_r24.healthdetailsform.controls.weight.errors == null ? null : ctx_r24.healthdetailsform.controls.weight.errors.pattern));
  }
}
function RegistrationPageComponent_div_294_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_294_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_294_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r25.healthdetailsform.controls.Priority.dirty || ctx_r25.healthdetailsform.controls.Priority.touched) && (ctx_r25.healthdetailsform.controls.Priority.errors == null ? null : ctx_r25.healthdetailsform.controls.Priority.errors.required));
  }
}
function RegistrationPageComponent_div_301_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please fill the field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RegistrationPageComponent_div_301_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegistrationPageComponent_div_301_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r26.healthdetailsform.controls.Procedure.dirty || ctx_r26.healthdetailsform.controls.Procedure.touched) && (ctx_r26.healthdetailsform.controls.Procedure.errors == null ? null : ctx_r26.healthdetailsform.controls.Procedure.errors.required));
  }
}
function RegistrationPageComponent_ng_template_310_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Other Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Step 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 94)(5, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    adaptivePosition: true,
    dateInputFormat: "YYYY-MM-DD",
    dateOutputFormat: "YYYY-MM-DD"
  };
};
const _c2 = function () {
  return ["English", "Arabic"];
};
const _c3 = function () {
  return ["Married", "Unmarried", "Divorced"];
};
const _c4 = function () {
  return ["Permanent", "Temproary"];
};
const _c5 = function () {
  return ["Abu Dhabi", "Dubai", "Sharjah", "Umm Al Qaiwain", "Fujairah", "Ajman", "Ras Al Khaimah"];
};
const _c6 = function () {
  return ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
};
const _c7 = function () {
  return ["Emergency", "Routine", "Other"];
};
class RegistrationPageComponent {
  constructor(formbuilder, allService, toastr, router) {
    this.formbuilder = formbuilder;
    this.allService = allService;
    this.toastr = toastr;
    this.router = router;
    this.showImage = false;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment_new.imageUrl;
    this.Procedure = [];
    this.ProcedureOption_Index = [];
    this.personaldetailsform = this.formbuilder.group({
      title: ['Mr'],
      first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]],
      middle_name: [''],
      last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(50)]],
      partner_name: [],
      children_name: [],
      occupation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      dob: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      language: [],
      referred_by: [],
      gender: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      martial_status: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    this.contactDetailsform = this.formbuilder.group({
      telephone_number: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('\\d*')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]]
    });
    this.addressform = this.formbuilder.group({
      addresstype: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      flatNo: [],
      StreetNo: [],
      StreetName: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      suburb: [],
      town: [],
      state: [],
      postcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    this.healthdetailsform = this.formbuilder.group({
      bloodgroup: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      height: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('\\d*')]],
      weight: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('\\d*')]],
      bloodPressure: [],
      heartBeat: [],
      temperature: [],
      spo2: [],
      respiratoryRate: [],
      Speciality: [],
      Priority: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      Procedure: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    this.otherdetailsform = this.formbuilder.group({
      clientInformation: [],
      notes: []
    });
  }
  ngOnInit() {
    let patientId = localStorage.getItem('Patient_ID');
    if (patientId) {
      this.allService.GetSpecificPatientDetails(patientId).subscribe({
        next: res => {
          if (res.status == 'Success') {
            let languagesArray = null;
            this.showImage = true;
            this.ProfileImage = this.apiUrl + res.patient.image;
            if (res.patient.language) {
              let languagesString = res.patient.language;
              languagesArray = languagesString.split(",");
            }
            console.log(res);
            this.personaldetailsform.patchValue({
              title: res.patient.title != 'null' ? res.patient.title : '',
              first_name: res.patient.first_name != 'null' ? res.patient.first_name : '',
              middle_name: res.patient.middle_name != 'null' ? res.patient.middle_name : '',
              last_name: res.patient.surname != 'null' ? res.patient.surname : '',
              partner_name: res.patient.name_of_partner != 'null' ? res.patient.name_of_partner : '',
              children_name: res.patient.name_of_children != 'null' ? res.patient.name_of_children : '',
              occupation: res.patient.occupation != 'null' ? res.patient.occupation : '',
              dob: res.patient.dob != 'null' ? res.patient.dob : '',
              age: res.patient.age != 'null' ? res.patient.age : '',
              language: res.patient.language != 'null' ? languagesArray : null,
              referred_by: res.patient.referred_by != 'null' ? res.patient.referred_by : '',
              gender: res.patient.gender != 'null' ? res.patient.gender : '',
              martial_status: res.patient.marital_status != 'null' ? res.patient.marital_status : ''
            });
            this.contactDetailsform.patchValue({
              telephone_number: res.patient.telephone != 'null' ? res.patient.telephone : '',
              email: res.patient.primary_email != 'null' ? res.patient.primary_email : ''
            });
            this.addressform.patchValue({
              addresstype: res.patient.address_type != 'null' ? res.patient.address_type : null,
              flatNo: res.patient.flat_unit_no != 'null' ? res.patient.flat_unit_no : '',
              StreetNo: res.patient.street_no != 'null' ? res.patient.street_no : '',
              StreetName: res.patient.street_name != 'null' ? res.patient.street_name : '',
              suburb: res.patient.suburb != 'null' ? res.patient.suburb : '',
              town: res.patient.town_city != 'null' ? res.patient.town_city : '',
              state: res.patient.state != 'null' ? res.patient.state : null,
              postcode: res.patient.post_code != 'null' ? res.patient.post_code : ''
            });
            this.healthdetailsform.patchValue({
              bloodgroup: res.patient.blood_group != 'null' ? res.patient.blood_group : null,
              height: res.patient.height != 'null' ? res.patient.height : '',
              weight: res.patient.weight != 'null' ? res.patient.weight : '',
              bloodPressure: res.patient.blood_pressure != 'null' ? res.patient.blood_pressure : '',
              heartBeat: res.patient.heart_beat != 'null' ? res.patient.heart_beat : '',
              temperature: res.patient.temperature != 'null' ? res.patient.temperature : '',
              spo2: res.patient.spo2 != 'null' ? res.patient.spo2 : '',
              respiratoryRate: res.patient.respiratory_rate != 'null' ? res.patient.respiratory_rate : '',
              Speciality: res.patient.specialty != 'null' ? res.patient.specialty : '',
              Priority: res.patient.priority != 'null' ? res.patient.priority : null,
              Procedure: res.patient.procedure != 'null' ? res.patient.procedure : null
            });
            this.otherdetailsform.patchValue({
              clientInformation: res.patient.critical_information != 'null' ? res.patient.critical_information : '',
              notes: res.patient.notes != 'null' ? res.patient.notes : ''
            });
          }
        },
        error: res => {
          this.toastr.error(`${res.message}`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
    }
    this.getProcedures();
  }
  getProcedures() {
    this.allService.ProcedureOptions().subscribe({
      next: res => {
        this.Procedure = [];
        this.ProcedureOption_Index = res.data;
        if (res.data.length > 0) {
          res.data.forEach(element => {
            this.Procedure.push(element.procedure_name);
          });
        } else {
          this.Procedure = [];
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
  onStepSelectionChange(event) {}
  BackToPatientList() {
    this.router.navigateByUrl('/patient-registration/patient_list');
    localStorage.removeItem('Patient_ID');
    this.showImage = false;
    this.personaldetailsform.reset();
    this.contactDetailsform.reset();
    this.addressform.reset();
    this.healthdetailsform.reset();
    this.otherdetailsform.reset();
  }
  AddPersonalDetails(FormValue) {
    console.log(FormValue);
  }
  AddContactDetails(FormValue) {
    console.log(FormValue);
  }
  AddAdressForm(FormValue) {
    console.log(FormValue);
  }
  AddHealthDetailsForm(FormValue) {
    console.log(FormValue);
  }
  RegisterPatient(PersonalDetails, ContactDetails, Address, healthDetails, Otherdetails) {
    let procedure_value = this.healthdetailsform.value.Procedure;
    let newArray = [];
    if (procedure_value) {
      if (this.ProcedureOption_Index) {
        this.ProcedureOption_Index.forEach(element => {
          if (procedure_value == element.procedure_name) {
            newArray.push(element.id);
            let procedureStrings = newArray.map(num => num.toString());
            console.log(procedureStrings);
            this.healthdetailsform.patchValue({
              Procedure: procedureStrings?.[0]
            });
          }
        });
      }
    } else {
      this.healthdetailsform.patchValue({
        Procedure: null
      });
    }
    console.log(this.healthdetailsform.value);
    let patientId = localStorage.getItem('Patient_ID');
    if (patientId) {
      console.log(PersonalDetails);
      console.log(ContactDetails);
      console.log(Address);
      console.log(this.healthdetailsform.value);
      console.log(Otherdetails);
      console.log(this.Patient_img);
      console.log(patientId);
      this.allService.UpdateRegisteredPatient(PersonalDetails, ContactDetails, Address, this.healthdetailsform.value, Otherdetails, this.Patient_img ? this.Patient_img : this.ProfileImage, patientId).subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log(res);
            this.personaldetailsform.reset();
            this.contactDetailsform.reset();
            this.addressform.reset();
            this.healthdetailsform.reset();
            this.otherdetailsform.reset();
            this.cdkStepper.reset();
            this.ProfileImage = '';
          }
        },
        error: res => {
          this.toastr.error(`${res}`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
    } else {
      console.log(PersonalDetails);
      console.log(ContactDetails);
      console.log(Address);
      console.log(this.healthdetailsform.value);
      console.log(Otherdetails);
      console.log(this.Patient_img);
      console.log(patientId);
      this.allService.Registerpatient(PersonalDetails, ContactDetails, Address, this.healthdetailsform.value, Otherdetails, this.Patient_img).subscribe({
        next: res => {
          if (res.status == 'Success') {
            console.log(res);
            this.personaldetailsform.reset();
            this.contactDetailsform.reset();
            this.addressform.reset();
            this.healthdetailsform.reset();
            this.otherdetailsform.reset();
            this.cdkStepper.reset();
            this.ProfileImage = '';
          }
        },
        error: res => {
          this.toastr.error(`${res}`, 'UnSuccessful', {
            positionClass: 'toast-top-center',
            timeOut: 2000
          });
        }
      });
    }
  }
  AddImage(event) {
    console.log('sdd', event.target.files[0]);
    this.Patient_img = event.target.files[0];
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = event2 => {
        this.ProfileImage = reader.result;
      };
      this.showImage = true;
    }
  }
  static #_ = this.ɵfac = function RegistrationPageComponent_Factory(t) {
    return new (t || RegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_all_services_service__WEBPACK_IMPORTED_MODULE_1__.AllServicesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RegistrationPageComponent,
    selectors: [["app-registration-page"]],
    viewQuery: function RegistrationPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cdkStepper = _t.first);
      }
    },
    decls: 335,
    vars: 56,
    consts: [[1, "cards"], [2, "width", "100% !important", "height", "730px"], [2, "position", "relative", "left", "1px", "top", "27px", "border-bottom", "1px solid #747474", "padding-bottom", "44px", "width", "100%", "z-index", "1 !important"], [1, "header-title"], [2, "width", "100% !important", "position", "relative", "top", "-85px !important", 3, "linear", "selectionChange"], ["cdkStepper", ""], [3, "stepControl", "optional"], ["cdkStepLabel", ""], ["stepOne", ""], [3, "formGroup"], [1, "d-flex"], [1, "header_name_bold"], [1, "mt-2", 2, "height", "455px", "overflow-y", "scroll", "overflow-x", "hidden"], [1, "row"], [1, "col-12", "pt-3"], ["for", "items_category", 1, "register-label"], [2, "border", "1px solid #c0c0c0", "width", "101px", "height", "101px", "border-radius", "50% !important"], [1, "position-relative", "d-inline-block"], [1, "position-absolute", 2, "left", "63px !important", "bottom", "-8px !important"], ["for", "project-image-input", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Select Image", 1, "mb-0"], [1, "avatar-xs"], [1, "avatar-title", "bg-light", "border", "rounded-circle", "text-muted", "cursor-pointer", "shadow", "font-size-16"], [1, "bx", "bxs-image-alt"], ["value", "", "id", "project-image-input", "type", "file", "accept", "image/png, image/gif, image/jpeg", 1, "form-control", "d-none", 3, "change"], [1, "avatar-lg", 2, "height", "6rem !important", "width", "6rem !important", "border-radius", "50% !important"], [1, "avatar-title", 2, "width", "100px", "height", "100px", "background", "transparent", "border-radius", "50% !important"], ["id", "projectlogo-img", "class", "avatar-md h-auto", "style", "height: 98px !important;width: 98px;border-radius: 50% !important;", 3, "src", 4, "ngIf"], [1, "row", "mt-4"], [1, "col-4"], [2, "color", "red"], [2, "border", "0.5px solid #BEBEBF", "border-radius", "6px 0px 0px 6px", "border-right", "none !important"], ["id", "autoSizingInputGroup", "formControlName", "title", "appPreventSpaces", "", 1, "form-select", 2, "background-color", "transparent !important", "height", "35px !important", "padding", "0.47rem 0.75rem !important", "width", "min-content !important", "color", "#000 !important", "font-size", "0.8rem !important"], ["value", "Mr"], ["value", "Ms"], ["value", "Mrs"], [2, "width", "100%"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "first_name", "appPreventSpaces", "", 1, "form-control", 2, "border-radius", "0px 6px 6px 0px !important"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Enter Middle Name", "formControlName", "middle_name", "appPreventSpaces", "", 1, "form-control"], ["type", "text", "placeholder", "Enter Surname", "formControlName", "last_name", "appPreventSpaces", "", 1, "form-control"], ["type", "text", "placeholder", "Enter text", "formControlName", "partner_name", 1, "form-control"], ["type", "text", "placeholder", "Enter text", "formControlName", "children_name", 1, "form-control"], ["type", "text", "placeholder", "Enter Occupation", "formControlName", "occupation", 1, "form-control"], [1, "me-2", 2, "width", "50%"], ["type", "text", "placeholder", "Select Date", "bsDatepicker", "", "formControlName", "dob", "appPreventSpaces", "", 1, "form-control", 3, "bsConfig"], [2, "width", "50%"], ["type", "number", "placeholder", "Enter your age", "appPreventSpaces", "", "formControlName", "age", 1, "form-control"], ["placeholder", "Select the Language", "formControlName", "language", "multiple", "true", "appPreventSpaces", "", 3, "items"], ["type", "text", "placeholder", "Enter text", "formControlName", "referred_by", 1, "form-control"], [1, "d-flex", "flex-wrap"], [1, "form-check", "form-check-inline", 2, "display", "flex", "align-items", "center"], ["type", "radio", "id", "inlineRadio1", "value", "Male", "formControlName", "gender", 1, "form-check-input", 2, "width", "1.5em !important", "height", "1.5em !important"], ["for", "inlineRadio1", 1, "form-check-label", "ms-2"], ["type", "radio", "id", "inlineRadio2", "value", "Female", "formControlName", "gender", 1, "form-check-input", 2, "width", "1.5em !important", "height", "1.5em !important"], ["for", "inlineRadio2", 1, "form-check-label", "ms-2"], ["formControlName", "martial_status", "placeholder", "Select Status", "appPreventSpaces", "", 3, "items"], [1, "d-flex", "footer_button", "float-end"], [1, "btn-red", "me-2", 3, "click"], ["cdkStepperNext", "", 1, "btn-new", "me-2", 2, "width", "100px !important", 3, "disabled", "click"], ["stepTwo", ""], ["type", "text", "placeholder", "Enter Telephone Number", "formControlName", "telephone_number", "appPreventSpaces", "", 1, "form-control"], ["type", "text", "placeholder", "Enter email", "formControlName", "email", 1, "form-control"], ["cdkStepperPrevious", "", 1, "btn-red", "me-2"], ["stepThree", ""], ["placeholder", "Select Patient type", "formControlName", "addresstype", "appPreventSpaces", "", 3, "items"], ["type", "text", "placeholder", "Enter Flat No", "formControlName", "flatNo", 1, "form-control"], ["type", "text", "placeholder", "Enter Street No", "formControlName", "StreetNo", 1, "form-control"], ["type", "text", "placeholder", "Enter Street Name", "formControlName", "StreetName", 1, "form-control"], ["type", "text", "placeholder", "Enter Suburb", "formControlName", "suburb", 1, "form-control"], ["type", "text", "placeholder", "Enter city", "formControlName", "town", 1, "form-control"], ["placeholder", "Select the State", "formControlName", "state", 3, "items"], ["type", "text", "placeholder", "Enter text", "formControlName", "postcode", 1, "form-control"], ["stepFour", ""], ["placeholder", "Select the Blood Group", "formControlName", "bloodgroup", 3, "items", "dropdownPosition"], [2, "position", "relative"], ["type", "text", "placeholder", "Enter your height", "formControlName", "height", 1, "form-control"], [2, "position", "absolute", "right", "6px", "bottom", "8px"], ["type", "text", "placeholder", "Enter your weight", "formControlName", "weight", 1, "form-control"], ["type", "text", "placeholder", "Enter your blood pressure", "formControlName", "bloodPressure", 1, "form-control"], ["type", "text", "placeholder", "Enter your heart beat", "formControlName", "heartBeat", 1, "form-control"], ["type", "text", "placeholder", "Enter your temperature", "formControlName", "temperature", 1, "form-control"], ["type", "text", "placeholder", "Enter your SPO2 rate", "formControlName", "spo2", 1, "form-control"], ["type", "text", "placeholder", "Enter your respiratory rate", "formControlName", "respiratoryRate", 1, "form-control"], ["type", "text", "placeholder", "Enter text", "formControlName", "Speciality", 1, "form-control"], ["placeholder", "Select Value", "formControlName", "Priority", 3, "items", "dropdownPosition"], ["placeholder", "Select Procedure", "formControlName", "Procedure", 3, "items", "dropdownPosition"], ["stepFive", ""], [1, "mt-3", 2, "height", "455px", "overflow-y", "scroll", "overflow-x", "hidden"], [1, "col-12"], ["type", "text", "placeholder", "Enter text", "formControlName", "clientInformation", 1, "form-control", 2, "width", "90%", "height", "100px"], ["type", "text", "placeholder", "Enter text", "formControlName", "notes", 1, "form-control", 2, "width", "90%", "height", "100px"], [1, "btn-new", "me-2", 2, "width", "100px !important", 3, "click"], [1, "step-title", "new", "mb-2"], [1, "step-title1", "mb-2"], [1, "step-bullet"], [1, "dot", 2, "position", "absolute", "font-size", "5rem !important", "top", "-68px"], ["id", "projectlogo-img", 1, "avatar-md", "h-auto", 2, "height", "98px !important", "width", "98px", "border-radius", "50% !important", 3, "src"], [1, "invalid-feedback"], [4, "ngIf"]],
    template: function RegistrationPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "New Patient registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ng-stepper", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function RegistrationPageComponent_Template_ng_stepper_selectionChange_5_listener($event) {
          return ctx.onStepSelectionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "cdk-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RegistrationPageComponent_ng_template_8_Template, 7, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", null, 8)(11, "form", 9)(12, "div", 10)(13, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Personal details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 18)(23, "label", 19)(24, "div", 20)(25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RegistrationPageComponent_Template_input_change_27_listener($event) {
          return ctx.AddImage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 24)(29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RegistrationPageComponent_img_30_Template, 1, 1, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 27)(32, "div", 28)(33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 10)(38, "div", 30)(39, "select", 31)(40, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Mr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Mrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, RegistrationPageComponent_div_48_Template, 4, 3, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 28)(50, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Middle name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 28)(54, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Surname: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, RegistrationPageComponent_div_59_Template, 4, 3, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 27)(61, "div", 28)(62, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Name of Partner:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 28)(66, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Name of children:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 28)(70, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Occupation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, RegistrationPageComponent_div_75_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 27)(77, "div", 28)(78, "div", 10)(79, "div", 43)(80, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "DOB: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, RegistrationPageComponent_div_85_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 45)(87, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Age: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, RegistrationPageComponent_div_92_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 28)(94, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Language:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "ng-select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 28)(98, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Referred by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 27)(102, "div", 28)(103, "div", 10)(104, "div", 45)(105, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Gender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 49)(110, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, RegistrationPageComponent_div_118_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 45)(120, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Martial Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "ng-select", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](125, RegistrationPageComponent_div_125_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 56)(127, "div")(128, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_128_listener() {
          return ctx.BackToPatientList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div")(131, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_131_listener() {
          return ctx.AddPersonalDetails(ctx.personaldetailsform.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "cdk-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](134, RegistrationPageComponent_ng_template_134_Template, 7, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", null, 59)(137, "form", 9)(138, "div", 10)(139, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 12)(142, "div", 27)(143, "div", 28)(144, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Primary Telephone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](149, RegistrationPageComponent_div_149_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 28)(151, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Primary Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](156, RegistrationPageComponent_div_156_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 56)(158, "div")(159, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div")(162, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_162_listener() {
          return ctx.AddContactDetails(ctx.contactDetailsform.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "cdk-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](165, RegistrationPageComponent_ng_template_165_Template, 7, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", null, 63)(168, "form", 9)(169, "div", 10)(170, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 12)(173, "div", 27)(174, "div", 28)(175, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "ng-select", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](180, RegistrationPageComponent_div_180_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 28)(182, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "Flat Unit No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 28)(186, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Street No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 27)(190, "div", 28)(191, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "Street Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](196, RegistrationPageComponent_div_196_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 28)(198, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "Suburb:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](200, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 28)(202, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Town city:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 27)(206, "div", 28)(207, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "State:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "ng-select", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 28)(211, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Post Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](216, RegistrationPageComponent_div_216_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 56)(218, "div")(219, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div")(222, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_222_listener() {
          return ctx.AddAdressForm(ctx.addressform.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "cdk-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](225, RegistrationPageComponent_ng_template_225_Template, 7, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", null, 72)(228, "form", 9)(229, "div", 10)(230, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "Health Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 12)(233, "div", 27)(234, "div", 28)(235, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Blood Group:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "ng-select", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](240, RegistrationPageComponent_div_240_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "div", 28)(242, "div", 74)(243, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Height:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](250, RegistrationPageComponent_div_250_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 28)(252, "div", 74)(253, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Weight:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](257, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](259, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](260, RegistrationPageComponent_div_260_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 27)(262, "div", 28)(263, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Blood Pressure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](265, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 28)(267, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Heart beat:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "div", 28)(271, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Temperature:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](273, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "div", 27)(275, "div", 28)(276, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "SPO2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](278, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "div", 28)(280, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "Respiratory rate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](282, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "div", 28)(284, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "Speciality:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](286, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "div", 27)(288, "div", 28)(289, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "Priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](293, "ng-select", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](294, RegistrationPageComponent_div_294_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 28)(296, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, "Procedure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "ng-select", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](301, RegistrationPageComponent_div_301_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "div", 56)(303, "div")(304, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "div")(307, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_307_listener() {
          return ctx.AddHealthDetailsForm(ctx.healthdetailsform.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "cdk-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](310, RegistrationPageComponent_ng_template_310_Template, 7, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "div", null, 86)(313, "form", 9)(314, "div", 10)(315, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, "Other Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "div", 87)(318, "div", 27)(319, "div", 88)(320, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](321, "Client Information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](322, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 27)(324, "div", 88)(325, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "Notes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](327, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "div", 56)(329, "div")(330, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "div")(333, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_333_listener() {
          return ctx.RegisterPatient(ctx.personaldetailsform.value, ctx.contactDetailsform.value, ctx.addressform.value, ctx.healthdetailsform.value, ctx.otherdetailsform.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](136);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](167);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](227);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](312);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", _r2.personaldetailsform)("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.personaldetailsform);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showImage == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](49, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](50, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](51, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.personaldetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", _r12.contactDetailsform)("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.contactDetailsform);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactDetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contactDetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.contactDetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", _r16.addressform)("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addressform);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](52, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addressform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addressform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](53, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addressform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.addressform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", _r21.healthdetailsform)("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.healthdetailsform);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](54, _c6))("dropdownPosition", "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthdetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthdetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthdetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](55, _c7))("dropdownPosition", "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthdetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.Procedure)("dropdownPosition", "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.healthdetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.healthdetailsform.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", _r28.otherdetailsform)("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.otherdetailsform);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, angular_ng_stepper__WEBPACK_IMPORTED_MODULE_8__.NgStepperComponent, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__.CdkStep, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__.CdkStepLabel, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__.CdkStepperNext, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__.CdkStepperPrevious, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _prevent_spaces_directive__WEBPACK_IMPORTED_MODULE_2__.PreventSpacesDirective],
    styles: [".start-0[_ngcontent-%COMP%] {\n  left: 0% !important;\n}\n\n.start-20[_ngcontent-%COMP%] {\n  left: 20% !important;\n}\n\n.start-40[_ngcontent-%COMP%] {\n  left: 40% !important;\n}\n\n.start-60[_ngcontent-%COMP%] {\n  left: 60% !important;\n}\n\n.start-80[_ngcontent-%COMP%] {\n  left: 80% !important;\n}\n\n[_nghost-%COMP%]     .step.active .step-bullet {\n  z-index: 1 !important;\n  color: #855EDB !important;\n  border: 0.2rem solid #855EDB !important;\n  height: 32px !important;\n  width: 32px !important;\n  padding: 0px !important;\n}\n[_nghost-%COMP%]     .step.active .step-bullet .dot {\n  top: -70px !important;\n}\n\n[_nghost-%COMP%]     .stepper-header .steps .step .step-bullet {\n  height: 32px !important;\n  width: 32px !important;\n  z-index: 1 !important;\n  padding: 0px !important;\n}\n[_nghost-%COMP%]     .stepper-header .steps .step .step-bullet .dot {\n  top: -70px;\n}\n\n[_nghost-%COMP%]     .step.active .new {\n  color: #855EDB !important;\n}\n[_nghost-%COMP%]     .step.active .step-title1 {\n  color: #855EDB !important;\n}\n\n[_nghost-%COMP%]     .step.completed .new {\n  color: #855EDB !important;\n}\n[_nghost-%COMP%]     .step.completed .step-title1 {\n  color: #855EDB !important;\n}\n\n[_nghost-%COMP%]     .step.completed .step-bullet {\n  border: 0.2rem solid #855EDB !important;\n  z-index: 1 !important;\n  color: #855EDB !important;\n  background-color: #855EDB !important;\n}\n[_nghost-%COMP%]     .step.completed .step-bullet .dot {\n  top: -70px !important;\n  background-image: url(\"/assets/images/tick_icon.svg\") !important;\n  background-size: 16px !important;\n  background-position: 0px 76px !important;\n  background-repeat: no-repeat;\n  color: transparent !important;\n}\n\n[_nghost-%COMP%]     .step.completed.new {\n  color: #855EDB !important;\n}\n\n[_nghost-%COMP%]     .step.completed.step-title1 {\n  color: #855EDB !important;\n}\n\n.step-bullet[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n\n[_nghost-%COMP%]     .stepper-header {\n  padding-top: 50px !important;\n  width: 55% !important;\n  margin-left: 300px !important;\n  margin-top: -3px !important;\n  position: relative;\n}\n\n[_nghost-%COMP%]     .step {\n  width: 50.33% !important;\n  left: 0% !important;\n  right: 0% !important;\n  padding: 0px !important;\n}\n\n[_nghost-%COMP%]     .step:after {\n  z-index: auto !important;\n  top: 45% !important;\n}\n\n[_nghost-%COMP%]     .stepper-body {\n  margin: 41px 0px 0px 0px !important;\n  height: 595px !important;\n}\n[_nghost-%COMP%]     .stepper-body .content {\n  transform: none !important;\n}\n\n[_nghost-%COMP%]     .step.completed + .step::after {\n  background-color: #855EDB !important;\n}\n\n[_nghost-%COMP%]     ol {\n  padding: 0px !important;\n}\n\n[_nghost-%COMP%]     .main-content .content {\n  padding: 0px !important;\n  margin-top: 0px !important;\n}\n\noption[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.step-bullet[_ngcontent-%COMP%] {\n  background: #fff !important;\n  border: 1px solid #000 !important;\n  color: #000 !important;\n  height: 20px !important;\n  width: 20px !important;\n  padding-bottom: 12px !important;\n}\n\n[_nghost-%COMP%]     .stepper-header .steps {\n  width: 100% !important;\n  list-style: none !important;\n  display: inline-flex !important;\n  margin: 0 auto !important;\n  justify-content: space-between !important;\n  align-items: center !important;\n}\n\n.step-title[_ngcontent-%COMP%] {\n  position: absolute !important;\n  right: 0 !important;\n  bottom: 89px !important;\n  left: 80px !important;\n  margin: 0px 0px 0px 7px !important;\n  height: 0 !important;\n  text-align: left !important;\n  width: max-content !important;\n  color: #ABABAB !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n\n.step-title1[_ngcontent-%COMP%] {\n  position: absolute !important;\n  right: 0 !important;\n  bottom: 59px !important;\n  left: 80px !important;\n  margin: 0px 0px 0px 7px !important;\n  height: 0 !important;\n  width: max-content !important;\n  text-align: left !important;\n  color: #ABABAB !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n\n[_nghost-%COMP%]     .step.completed + .step::after .new {\n  color: #855EDB !important;\n}\n[_nghost-%COMP%]     .step.completed + .step::after .step-title1 {\n  color: #855EDB !important;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  font-weight: 600 !important;\n  color: #1b1b1b !important;\n  width: 217px !important;\n  position: relative;\n  left: 12px;\n}\n\n[_nghost-%COMP%]     .ng-select-container {\n  background: #fff;\n  border: 1px solid #BEBEBF !important;\n}\n\n[_nghost-%COMP%]     .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  background-color: #fff !important;\n}\n\n[_nghost-%COMP%]     .content {\n  margin-top: 1px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGF0aWVudC1yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNFO0VBQ0Usb0JBQUE7QUFFSjs7QUFBRTtFQUNFLG9CQUFBO0FBR0o7O0FBREU7RUFDRSxvQkFBQTtBQUlKOztBQUZFO0VBQ0Usb0JBQUE7QUFLSjs7QUFERTtFQUVFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUdKO0FBREk7RUFDRSxxQkFBQTtBQUdOOztBQUNFO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUFJO0VBQ0UsVUFBQTtBQUVOOztBQUlJO0VBQ0UseUJBQUE7QUFETjtBQUdJO0VBQ0UseUJBQUE7QUFETjs7QUFNSTtFQUNFLHlCQUFBO0FBSE47QUFLSTtFQUNFLHlCQUFBO0FBSE47O0FBU0U7RUFDRSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQU5KO0FBUUk7RUFDRSxxQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFOTjs7QUFVRTtFQUNJLHlCQUFBO0FBUE47O0FBU0U7RUFDRSx5QkFBQTtBQU5KOztBQVNFO0VBQ0UscUJBQUE7QUFOSjs7QUFTRTtFQUdFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXRTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBUko7O0FBV0U7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0U7RUFDRSxtQ0FBQTtFQUNBLHdCQUFBO0FBUko7QUFVSTtFQUNFLDBCQUFBO0FBUk47O0FBWUU7RUFDRSxvQ0FBQTtBQVRKOztBQVlFO0VBQ0UsdUJBQUE7QUFUSjs7QUFZRTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUFUSjs7QUFZRTtFQUVFLDBCQUFBO0FBVko7O0FBYUU7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFWRjs7QUFhRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSw4QkFBQTtBQVZKOztBQWNFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQVhKOztBQWNFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQVhKOztBQWVJO0VBQ0UseUJBQUE7QUFaTjtBQWNJO0VBQ0UseUJBQUE7QUFaTjs7QUFnQkU7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWJKOztBQWVFO0VBRUUsZ0JBQUE7RUFDQSxvQ0FBQTtBQWJKOztBQXVCRTtFQUNFLGlDQUFBO0FBcEJKOztBQXVCRTtFQUNFLDBCQUFBO0FBcEJKIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LTAge1xyXG4gIGxlZnQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zdGFydC0yMHtcclxuICAgIGxlZnQ6IDIwJSAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIC5zdGFydC00MHtcclxuICAgIGxlZnQ6IDQwJSAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIC5zdGFydC02MHtcclxuICAgIGxlZnQ6IDYwJSAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIC5zdGFydC04MHtcclxuICAgIGxlZnQ6IDgwJSAhaW1wb3J0YW50XHJcbiAgfVxyXG5cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zdGVwLmFjdGl2ZSAuc3RlcC1idWxsZXR7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ1MTEyICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6MC4ycmVtIHNvbGlkICM4NTVFREIgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgIC5kb3R7XHJcbiAgICAgIHRvcDogLTcwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAuc3RlcHBlci1oZWFkZXIgLnN0ZXBzIC5zdGVwIC5zdGVwLWJ1bGxldHtcclxuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgIC5kb3R7XHJcbiAgICAgIHRvcDogLTcwcHggO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zdGVwLmFjdGl2ZXtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIC5uZXd7XHJcbiAgICAgIGNvbG9yOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3RlcC10aXRsZTF7XHJcbiAgICAgIGNvbG9yOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgLnN0ZXAuY29tcGxldGVke1xyXG4gICAgLm5ld3tcclxuICAgICAgY29sb3I6ICM4NTVFREIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zdGVwLXRpdGxlMXtcclxuICAgICAgY29sb3I6ICM4NTVFREIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zdGVwLmNvbXBsZXRlZCAuc3RlcC1idWxsZXR7XHJcbiAgICBib3JkZXI6MC4ycmVtIHNvbGlkICM4NTVFREIgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiM4NTVFREIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTVFREIgIWltcG9ydGFudDtcclxuXHJcbiAgICAuZG90e1xyXG4gICAgICB0b3A6IC03MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvdGlja19pY29uLnN2ZycpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggNzZweCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBjb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zdGVwLmNvbXBsZXRlZC5uZXd7XHJcbiAgICAgIGNvbG9yOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAuc3RlcC5jb21wbGV0ZWQuc3RlcC10aXRsZTF7XHJcbiAgICBjb2xvcjogIzg1NUVEQiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtYnVsbGV0e1xyXG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zdGVwcGVyLWhlYWRlcntcclxuICAgIC8vIG1hcmdpbjogIDBweCAtMjU2cHggMHB4IC0yNTZweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luOiAgMHB4IC0zMHB4IDBweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgLnN0ZXB7XHJcbiAgICB3aWR0aDogNTAuMzMlICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAuc3RlcDphZnRlcntcclxuICAgIHotaW5kZXg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRvcDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRTQ1MTEyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAuc3RlcHBlci1ib2R5e1xyXG4gICAgbWFyZ2luOiA0MXB4IDBweCAwcHggMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1OTVweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZzogMTJweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOmhvc3QgIDo6bmctZGVlcCAuc3RlcC5jb21wbGV0ZWQgKyAuc3RlcDo6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgb2x7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAubWFpbi1jb250ZW50IC5jb250ZW50e1xyXG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgb3B0aW9uXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc3RlcC1idWxsZXR7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAuc3RlcHBlci1oZWFkZXIgLnN0ZXBze1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtdGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3R0b206IDg5cHggIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNBQkFCQUIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtdGl0bGUxe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiA1OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNBQkFCQUIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zdGVwLmNvbXBsZXRlZCArIC5zdGVwOjphZnRlcntcclxuICAgIC5uZXd7XHJcbiAgICAgIGNvbG9yOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3RlcC10aXRsZTF7XHJcbiAgICAgIGNvbG9yOiAjODU1RURCICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzFiMWIxYiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLm5nLXNlbGVjdC1jb250YWluZXJcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjQkVCRUJGICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8vIDo6bmctZGVlcCAuc3RlcHBlci1oZWFkZXIgLnN0ZXBzIC5zdGVwIC5zdGVwLWJ1bGxldHtcclxuICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltYWdlcy9zdGVwcGVyX3JlZ2lzdHJhdGlvbl9pbWcuc3ZnJykgIWltcG9ydGFudDtcclxuICAvLyAgIHBhZGRpbmctbGVmdDogM3B4OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBtYXRjaCB0aGUgd2lkdGggb2YgeW91ciBpY29uXHJcbiAgLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHggIWltcG9ydGFudDsgLy8gQWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgaWNvblxyXG4gIC8vICAgYmFja2dyb3VuZC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_patient-registration_patient-registration_module_ts.js.map