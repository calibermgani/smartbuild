"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[801],{7801:(y,u,l)=>{l.r(u),l.d(u,{ProcedureModule:()=>A});var g=l(6814),c=l(4961),t=l(5879),h=l(9862),p=l(6861),f=l(2425),v=l(9634);const b=["myGrid_1"],w=[{path:"",component:(()=>{class n{constructor(o,e,i,s,r){this.router=o,this.http=e,this.allServices=i,this.toastr=s,this.authService=r,this.main_tabs_filters=[],this.main_filter_value="View all",this.SelectedRowData=[],this.enable_edit_feature=!1,this.enabled_saveas_button=!0,this.gridOptions1={defaultColDef:{filter:!1},overlayNoRowsTemplate:'<span class="ag-overlay-no-rows-center">No rows to show</span>',suppressMenuHide:!1,rowSelection:"multiple",suppressRowClickSelection:!0,rowHeight:35,suppressHorizontalScroll:!1,suppressMovableColumns:!0,pagination:!0,suppressDragLeaveHidesColumns:!0,suppressContextMenu:!0,getRowStyle:a=>"Emergency"===a.data.Priority?{background:"rgb(250 218 218) !important"}:null},this.defaultColDef={editable:!1,enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0,floatingFilter:!0},this.columnDefs1=[],this.selected_patient_type="in_patient",this.show_advanced_filtes=!1,this.reduce_size=!1,this.Saved_filter_options=["Saved filter 1","Saved filter 2","Saved filter 3","Saved filter 4","Saved filter 5"],this.sortBy_values=["Priority","In Patient","Speciality"]}ngOnInit(){this.http.get("assets/json/main_filters_Procedure_list.json").subscribe(o=>{this.main_tabs_filters=o}),this.http.get("assets/json/procedure_filters_value.json").subscribe(o=>{this.current_Procedure_filters=o[0].value})}navigate_to_WorkArea(){this.router.navigate(["/workarea"])}Change_grid_data(o){this.main_filter_value=o}changeSavedfilter(o){"Saved filter 1"==o&&(this.http.get("assets/json/saved_filter_1.json").subscribe(e=>{this.Current_Saved_filter_values=e[0].filter_values,console.log(this.Current_Saved_filter_values)}),this.enabled_edit_btn=!0,this.enabled_reset_btn=!0)}EnableEdit(){this.enable_edit_feature=!0,this.enabled_saveas_button=!1}resetSavedFilters(){this.enabled_reset_btn=!1,this.enabled_edit_btn=!1,this.enabled_saveas_button=!0,this.Current_Saved_filter_values=[],this.CurrentSavedFilter=""}DeleteSavedFiltervalues(o){this.Current_Saved_filter_values.splice(o,1)}onGridReady_1(o){this.gridApi_1=o.api,console.log("event",o),this.http.get("assets/json/Procedure_list.json").subscribe(e=>{console.log("Response Grid",e)}),this.allServices.GetAllPatientProcedureList().subscribe({next:e=>{if(console.log(e),"Success"==e.status&&e.patient_list.length>0){console.log("Response Grid",e);let i=[];i=this.gridOptions1.api?.getColumnDefs(),i.length=0;const s=Object.keys(e.patient_list[0]);console.log(s),s.forEach(r=>{if(console.log(r),"checkboxSelection"==r){console.log("IN");let a="";i.push({checkboxSelection:!0,headerCheckboxSelection:!0,width:50,cellRenderer:this.cellrendered.bind(this,r),headerName:a,floatingFilter:!1})}else"id"!=r&&i.push({field:r,cellRenderer:this.cellrendered.bind(this,r),onCellClicked:this.cellClicked.bind(this,r)})}),console.log("colDefs",i),this.gridOptions1.api?.setColumnDefs(i),this.gridOptions1.api?.setRowData(e.patient_list)}else this.gridOptions1.api?.setColumnDefs([]),this.gridOptions1.api?.setRowData([])},error:e=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}}),this.SelectedRowData=this.gridApi_1?.getSelectedRows()}cellClicked(o,e){if("Name"===o){let i=e.node.data;console.log(i),this.router.navigate(["/workarea"]),localStorage.setItem("PatientID",i.id),localStorage.setItem("Procedure",i["Procedure Name"]),localStorage.setItem("MRN_NO",i.MRN),localStorage.setItem("ExamStatus",i["Exam Status"]),localStorage.setItem("AccessionNo",i["Accession Number"])}}cellrendered(o,e){switch(o){case"Name":return e.value?e.value.charAt(0).toUpperCase()+e.value.slice(1):"-";case"MRN":case"Gender":case"Type":case"DOB":case"Age":case"Location":case"Exam Status":case"Study ID":return e.value?e.value:"-";case"Priority":switch(e.value){case"Emergency":return`<div class="d-flex flex-row align-items-center"><p style="color:#D62424 !important;font-weight:400 !important" class="mb-0">${e.value}<h5 style="font-weight:400 !important;color:\n            #855EDB !important;padding:0px 6px 0px 6px !important;background:#fff;border-radius:27px !important" class="mb-0 ms-2">Yet to start</h5></p></div>`;case"Routine":return`<p style="color:#17B927 !important;font-weight:400 !important">${e.value}</p>`;case"Other":return`<p style="color:#594585 !important;font-weight:400 !important">${e.value}</p>`}case"Procedure Status":if(e.value){const s=e.node.data.substatus;return s?`<div class="d-flex flex-row  align-items-center"><p class="mb-0">${e.value}</p><h5 class="ms-1 mb-0" style="font-weight:400 !important;color:#855EDB !important;background:#F3F4F8;padding : 0px 4px 0px 4px;border-radius:27px">${s}</h5></div>`:e.value}return"-";case"Study Date And Time":case"Accession Number":case"Requesting Physician":case"Speciality":case"Claim Note":return e.value?e.value:"-";case"Assigned To":{let i;i=e.value.substring(0,10);const r=e.node.data.Date;return console.log("sasasa",r),`${r??"UA"} | ${i}`}case"Language":case"Blood":case"Weight":case"Height":case"Procedure Name":return e.value?e.value:"-"}}PatientType(o){this.selected_patient_type=o}ShowAdvancedFilters(){this.show_advanced_filtes=!0,this.reduce_size=!0}HideAdvanceFilters(){this.show_advanced_filtes=!1,this.reduce_size=!1}selectedFileChange2(o){this.selectedFile=o.target.files[0],console.log(this.selectedFile),this.allServices.ImportPatientExcel(this.selectedFile).subscribe({next:e=>{console.log(e),"Success"==e.status&&(this.toastr.success(`${e.message}`,"Successful",{positionClass:"toast-top-center",timeOut:2e3}),this.allServices.GetAllPatientProcedureList().subscribe({next:i=>{if(console.log(i),"Success"==i.status){console.log("Response Grid",i);let s=[];s=this.gridOptions1.api?.getColumnDefs(),s.length=0;const r=Object.keys(i.patient_list[0]);console.log(r),r.forEach(a=>{if(console.log(a),"checkboxSelection"==a){console.log("IN");let N="";s.push({checkboxSelection:!0,headerCheckboxSelection:!0,width:50,cellRenderer:this.cellrendered.bind(this,a),headerName:N})}else"id"!=a&&s.push({field:a,cellRenderer:this.cellrendered.bind(this,a),onCellClicked:this.cellClicked.bind(this,a)})}),console.log("colDefs",s),this.gridOptions1.api?.setColumnDefs(s),this.gridOptions1.api?.setRowData(i.patient_list)}},error:i=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}}))},error:e=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}})}ReloadGrid(){this.allServices.GetAllPatientProcedureList().subscribe({next:o=>{if(console.log(o),"Success"==o.status){console.log("Response Grid",o);let e=[];e=this.gridOptions1.api?.getColumnDefs(),e.length=0;const i=Object.keys(o.patient_list[0]);console.log(i),i.forEach(s=>{if(console.log(s),"checkboxSelection"==s){console.log("IN");let r="";e.push({checkboxSelection:!0,headerCheckboxSelection:!0,width:50,cellRenderer:this.cellrendered.bind(this,s),headerName:r})}else("id"!=s||"town_city"!=s||"state"!=s||"patient_source_from"!=s)&&e.push({field:s,cellRenderer:this.cellrendered.bind(this,s),onCellClicked:this.cellClicked.bind(this,s)})}),console.log("colDefs",e),this.gridOptions1.api?.setColumnDefs(e),this.gridOptions1.api?.setRowData(o.patient_list)}},error:o=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}})}static#e=this.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0),t.Y36(h.eN),t.Y36(p.H),t.Y36(f._W),t.Y36(v.g))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-procedure"]],viewQuery:function(e,i){if(1&e&&t.Gf(b,5),2&e){let s;t.iGM(s=t.CRH())&&(i.myGrid_1=s.first)}},decls:49,vars:0,consts:[[1,"row"],[1,"col-12"],[1,"d-flex",2,"float","right"],[1,"me-2"],[1,"btn-secondary"],["src","assets/New_Images/refresh.svg",2,"margin-right","8px"],["src","assets/New_Images/export.svg","alt","export",2,"margin-right","8px"],["role","tablist",1,"nav","nav-tabs","nav-tabs-custom","nav-justified"],["role","presentation",1,"nav-item"],["data-bs-toggle","tab","href","#all_procedures","role","tab","aria-selected","true",1,"nav-link","active"],[1,"d-none","d-sm-block","name","nav_tabs_texts"],["src","assets/New_Images/clinical_history.png","alt","clinical"],["data-bs-toggle","tab","href","#vetting","role","tab","aria-selected","false",1,"nav-link"],["src","assets/New_Images/labs.png","alt","clinical"],["data-bs-toggle","tab","href","#medication","role","tab","aria-selected","false",1,"nav-link"],["src","assets/New_Images/medication.png","alt","clinical"],["data-bs-toggle","tab","href","#care_team","role","tab","aria-selected","false",1,"nav-link"],["src","assets/New_Images/care_team.png","alt","clinical"],[1,"tab-content"],["id","clinical_items","role","tabpanel",1,"tab-pane","fade","show","active"],["id","labs","role","tabpanel",1,"tab-pane","fade"],["id","medication","role","tabpanel",1,"tab-pane","fade"],["id","care_team","role","tabpanel",1,"tab-pane","fade"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),t._UZ(5,"img",5),t._uU(6,"Refresh"),t.qZA()(),t.TgZ(7,"div",3)(8,"button",4),t._UZ(9,"img",6),t._uU(10,"Export"),t.qZA()()()()(),t.TgZ(11,"div",0)(12,"div",1)(13,"ul",7)(14,"li",8)(15,"a",9)(16,"h1",10),t._UZ(17,"img",11),t._uU(18,"All Procedures"),t.qZA()()(),t.TgZ(19,"li",8)(20,"a",12)(21,"h1",10),t._UZ(22,"img",13),t._uU(23,"Vetting "),t.qZA()()(),t.TgZ(24,"li",8)(25,"a",14)(26,"h1",10),t._UZ(27,"img",15),t._uU(28,"Protocoling"),t.qZA()()(),t.TgZ(29,"li",8)(30,"a",16)(31,"h1",10),t._UZ(32,"img",17),t._uU(33,"Reporting"),t.qZA()()(),t.TgZ(34,"li",8)(35,"a",16)(36,"h1",10),t._UZ(37,"img",17),t._uU(38,"Schedulling"),t.qZA()()(),t.TgZ(39,"li",8)(40,"a",16)(41,"h1",10),t._UZ(42,"img",17),t._uU(43,"Finalizing"),t.qZA()()()(),t.TgZ(44,"div",18),t._UZ(45,"div",19)(46,"div",20)(47,"div",21)(48,"div",22),t.qZA()()())},styles:[".main_active[_ngcontent-%COMP%]{background:#855EDB;border:1px solid #855EDB;color:#fff!important;border-radius:6px}.tab_filter_img[_ngcontent-%COMP%]{background:#F3F4F8;padding:8px;cursor:pointer}[_nghost-%COMP%]     .ng-dropdown-panel{background:#fff;height:110px;overflow-y:scroll}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#855edb!important;border-color:#855edb!important}.ag-theme-alpine[_ngcontent-%COMP%]{--ag-row-hover-color: none !important;--ag-header-background-color: #594585 !important;--ag-selected-row-background-color: transparent !important}  .ag-row{border-bottom:none!important}  .ag-row-selected:before{background-color:transparent!important}  .ag-row-odd{margin:10px 0!important;background:#F3F4F8!important;z-index:2;cursor:pointer!important}  .ag-row-even{margin:10px 0!important;background:none!important;cursor:pointer!important}  .ag-header-viewport{background:#594585}  .ag-header-cell-text{font-size:12px!important;font-weight:500!important;color:#fff!important}  .ag-cell-value{font-size:10px!important;font-weight:400!important}  .ag-checkbox-input-wrapper{width:15px!important;height:15px!important}  .ag-root-wrapper{border:1px solid #747474!important;font-family:poppins!important}  .ag-root-wrapper{border:1px solid #747474!important;border-radius:15px;font-family:poppins!important}  .ag-row-group-expanded{background:#8B8B8B!important}  .ag-row-group-expanded .ag-cell-value{color:#fff!important}  .ag-row-group-expanded .ag-icon-tree-open{color:#fff!important}  .ag-cell-value{border:none!important}.show_filters[_ngcontent-%COMP%]{display:block!important;height:100%!important}.reduce_grid_size[_ngcontent-%COMP%]{width:100%;position:relative;left:0%}[_nghost-%COMP%]     .ng-dropdown-panel-items{background:#fff;border:1px solid #BEBEBF!important}.import_images[_ngcontent-%COMP%]{padding-left:3px;background-image:url(/assets/images/Download.svg)!important;background-repeat:no-repeat!important;background-position:120px!important;background-size:20px!important}[_nghost-%COMP%]     .ag-floating-filter-button{color:#fff!important}"]})}return n})(),canActivate:[l(8036).a]}];let S=(()=>{class n{static#e=this.\u0275fac=function(e){return new(e||n)};static#t=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(w),c.Bz]})}return n})();var x=l(9917),C=l(3552),P=l(9193),D=l(4518),d=l(6223),R=l(5083),O=l(4647);let A=(()=>{class n{static#e=this.\u0275fac=function(e){return new(e||n)};static#t=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[g.ez,d.u5,S,x.z8,P.A0,R.sF,d.UX,C.mr.forRoot(),D.kn.forRoot(),O.P4.forRoot()]})}return n})()}}]);