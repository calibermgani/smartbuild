"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[801],{7801:(I,_,s)=>{s.r(_),s.d(_,{ProcedureModule:()=>G});var u=s(6814),p=s(4961),e=(s(3742),s(5879)),b=s(9862),x=s(6861),w=s(2425),C=s(9634),d=s(6223),h=s(9917),g=s(9193),v=s(3546),f=s(4518);const Z=["myGrid_1"],m=function(r){return{main_active:r}};function S(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"div",80),e.NdJ("click",function(){const n=e.CHM(o).$implicit,l=e.oxw();return e.KtG(l.Change_grid_data(n.value))}),e.TgZ(1,"h1",81),e._uU(2),e.qZA()()}if(2&r){const o=a.$implicit,t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,m,t.main_filter_value==o.value)),e.xp6(1),e.hij(" ",o.value,"")}}function T(r,a){if(1&r&&(e._UZ(0,"input",82),e._uU(1)),2&r){const o=a.item,t=a.item$;e.MGl("id","item-",a.index,""),e.Q6J("ngModel",t.selected),e.xp6(1),e.hij(" ",o," ")}}function P(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"img",86),e.NdJ("click",function(){e.CHM(o);const i=e.oxw().index,n=e.oxw();return e.KtG(n.DeleteSavedFiltervalues(i))}),e.qZA()}}function k(r,a){if(1&r&&(e.TgZ(0,"div",83)(1,"p",84),e._uU(2),e.YNc(3,P,1,0,"img",85),e.qZA()()),2&r){const o=a.$implicit,t=e.oxw();e.xp6(2),e.Oqu(o),e.xp6(1),e.Q6J("ngIf",t.enable_edit_feature)}}function A(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"div")(1,"button",87),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.resetSavedFilters())}),e._UZ(2,"i",88),e._uU(3,"Reset"),e.qZA()()}}function y(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"div")(1,"button",89),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.EnableEdit())}),e._uU(2,"Edit"),e.qZA()()}}function F(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"div")(1,"button",89),e.NdJ("click",function(){e.CHM(o);const i=e.oxw();return e.KtG(i.EnableEdit())}),e._uU(2,"Save as"),e.qZA()()}}function D(r,a){1&r&&(e.TgZ(0,"div")(1,"button",90),e._uU(2,"Save"),e.qZA()())}const R=function(){return{withTimepicker:!0,rangeInputFormat:"MMMM Do YYYY, h:mm:ss a",dateInputFormat:"MMMM Do YYYY, h:mm:ss a"}},U=function(r){return{show_filters:r}},O=function(r){return{reduce_grid_size:r}},E=[{path:"",component:(()=>{class r{constructor(o,t,i,n,l){this.router=o,this.http=t,this.allServices=i,this.toastr=n,this.authService=l,this.main_tabs_filters=[],this.main_filter_value="View all",this.SelectedRowData=[],this.enable_edit_feature=!1,this.enabled_saveas_button=!0,this.gridOptions1={defaultColDef:{filter:!1},overlayNoRowsTemplate:'<span class="ag-overlay-no-rows-center">No rows to show</span>',suppressMenuHide:!1,rowSelection:"multiple",suppressRowClickSelection:!0,rowHeight:35,suppressHorizontalScroll:!1,suppressMovableColumns:!0,pagination:!0,suppressDragLeaveHidesColumns:!0,suppressContextMenu:!0,getRowStyle:c=>"Emergency"===c.data.Priority?{background:"rgb(250 218 218) !important"}:null},this.defaultColDef={editable:!1,enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.columnDefs1=[],this.sideBar={toolPanels:[{id:"columns",labelDefault:"Columns Visibility",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressRowGroups:!0,suppressValues:!0,suppressPivots:!0,suppressPivotMode:!0,suppressColumnFilter:!1,suppressColumnSelectAll:!1}}],defaultToolPanel:null},this.selected_patient_type="in_patient",this.show_advanced_filtes=!1,this.reduce_size=!1,this.Saved_filter_options=["Saved filter 1","Saved filter 2","Saved filter 3","Saved filter 4","Saved filter 5"],this.sortBy_values=["Priority","In Patient","Speciality"]}ngOnInit(){this.http.get("assets/json/main_filters_Procedure_list.json").subscribe(o=>{this.main_tabs_filters=o}),this.http.get("assets/json/procedure_filters_value.json").subscribe(o=>{this.current_Procedure_filters=o[0].value})}navigate_to_WorkArea(){this.router.navigate(["/workarea"])}Change_grid_data(o){this.main_filter_value=o}changeSavedfilter(o){"Saved filter 1"==o&&(this.http.get("assets/json/saved_filter_1.json").subscribe(t=>{this.Current_Saved_filter_values=t[0].filter_values,console.log(this.Current_Saved_filter_values)}),this.enabled_edit_btn=!0,this.enabled_reset_btn=!0)}EnableEdit(){this.enable_edit_feature=!0,this.enabled_saveas_button=!1}resetSavedFilters(){this.enabled_reset_btn=!1,this.enabled_edit_btn=!1,this.enabled_saveas_button=!0,this.Current_Saved_filter_values=[],this.CurrentSavedFilter=""}DeleteSavedFiltervalues(o){this.Current_Saved_filter_values.splice(o,1)}onGridReady_1(o){this.gridApi_1=o.api,console.log("event",o),this.http.get("assets/json/Procedure_list.json").subscribe(t=>{console.log("Response Grid",t)}),this.allServices.GetAllPatientProcedureList().subscribe({next:t=>{if(console.log(t),"Success"==t.status&&t.patient_list.length>0){console.log("Response Grid",t);let i=[];i=this.gridOptions1.api?.getColumnDefs(),i.length=0;const n=Object.keys(t.patient_list[0]);console.log(n),n.forEach(l=>{if(console.log(l),"checkboxSelection"==l){console.log("IN");let c="";i.push({checkboxSelection:!0,headerCheckboxSelection:!0,width:50,cellRenderer:this.cellrendered.bind(this,l),headerName:c})}else"id"!=l&&i.push({field:l,cellRenderer:this.cellrendered.bind(this,l),onCellClicked:this.cellClicked.bind(this,l)})}),console.log("colDefs",i),this.gridOptions1.api?.setColumnDefs(i),this.gridOptions1.api?.setRowData(t.patient_list)}else this.gridOptions1.api?.setColumnDefs([]),this.gridOptions1.api?.setRowData([])},error:t=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}}),this.SelectedRowData=this.gridApi_1?.getSelectedRows()}cellClicked(o,t){if("Name"===o){let i=t.node.data;console.log(i),this.router.navigate(["/workarea"]),localStorage.setItem("PatientID",i.id),localStorage.setItem("Procedure",i["Procedure Name"]),localStorage.setItem("MRN_NO",i.MRN),localStorage.setItem("ExamStatus",i["Exam Status"]),localStorage.setItem("AccessionNo",i["Accession Number"])}}cellrendered(o,t){switch(o){case"Name":return t.value?t.value.charAt(0).toUpperCase()+t.value.slice(1):"-";case"MRN":case"Gender":case"Type":case"DOB":case"Age":case"Location":case"Exam Status":case"Study ID":return t.value?t.value:"-";case"Priority":switch(t.value){case"Emergency":return`<div class="d-flex flex-row align-items-center"><p style="color:#D62424 !important;font-weight:400 !important" class="mb-0">${t.value}<h5 style="font-weight:400 !important;color:\n            #855EDB !important;padding:0px 6px 0px 6px !important;background:#fff;border-radius:27px !important" class="mb-0 ms-2">Yet to start</h5></p></div>`;case"Routine":return`<p style="color:#17B927 !important;font-weight:400 !important">${t.value}</p>`;case"Other":return`<p style="color:#594585 !important;font-weight:400 !important">${t.value}</p>`}case"Procedure Status":if(t.value){const n=t.node.data.substatus;return n?`<div class="d-flex flex-row  align-items-center"><p class="mb-0">${t.value}</p><h5 class="ms-1 mb-0" style="font-weight:400 !important;color:#855EDB !important;background:#F3F4F8;padding : 0px 4px 0px 4px;border-radius:27px">${n}</h5></div>`:t.value}return"-";case"Study Date And Time":case"Accession Number":case"Requesting Physician":case"Speciality":case"Claim Note":return t.value?t.value:"-";case"Assigned To":{let i;i=t.value.substring(0,10);const l=t.node.data.Date;return console.log("sasasa",l),`${l??"UA"} | ${i}`}case"Language":case"Blood":case"Weight":case"Height":case"Procedure Name":return t.value?t.value:"-"}}PatientType(o){this.selected_patient_type=o}ShowAdvancedFilters(){this.show_advanced_filtes=!0,this.reduce_size=!0}HideAdvanceFilters(){this.show_advanced_filtes=!1,this.reduce_size=!1}selectedFileChange2(o){this.selectedFile=o.target.files[0],console.log(this.selectedFile),this.allServices.ImportPatientExcel(this.selectedFile).subscribe({next:t=>{console.log(t),"Success"==t.status&&(this.toastr.success(`${t.message}`,"Successful",{positionClass:"toast-top-center",timeOut:2e3}),this.allServices.GetAllPatientProcedureList().subscribe({next:i=>{if(console.log(i),"Success"==i.status){console.log("Response Grid",i);let n=[];n=this.gridOptions1.api?.getColumnDefs(),n.length=0;const l=Object.keys(i.patient_list[0]);console.log(l),l.forEach(c=>{if(console.log(c),"checkboxSelection"==c){console.log("IN");let B="";n.push({checkboxSelection:!0,headerCheckboxSelection:!0,width:50,cellRenderer:this.cellrendered.bind(this,c),headerName:B})}else"id"!=c&&n.push({field:c,cellRenderer:this.cellrendered.bind(this,c),onCellClicked:this.cellClicked.bind(this,c)})}),console.log("colDefs",n),this.gridOptions1.api?.setColumnDefs(n),this.gridOptions1.api?.setRowData(i.patient_list)}},error:i=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}}))},error:t=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}})}ReloadGrid(){this.allServices.GetAllPatientProcedureList().subscribe({next:o=>{if(console.log(o),"Success"==o.status){console.log("Response Grid",o);let t=[];t=this.gridOptions1.api?.getColumnDefs(),t.length=0;const i=Object.keys(o.patient_list[0]);console.log(i),i.forEach(n=>{if(console.log(n),"checkboxSelection"==n){console.log("IN");let l="";t.push({checkboxSelection:!0,headerCheckboxSelection:!0,width:50,cellRenderer:this.cellrendered.bind(this,n),headerName:l})}else("id"!=n||"town_city"!=n||"state"!=n||"patient_source_from"!=n)&&t.push({field:n,cellRenderer:this.cellrendered.bind(this,n),onCellClicked:this.cellClicked.bind(this,n)})}),console.log("colDefs",t),this.gridOptions1.api?.setColumnDefs(t),this.gridOptions1.api?.setRowData(o.patient_list)}},error:o=>{this.toastr.error("Something went wrong","UnSuccessful",{positionClass:"toast-top-center",timeOut:2e3})}})}static#e=this.\u0275fac=function(t){return new(t||r)(e.Y36(p.F0),e.Y36(b.eN),e.Y36(x.H),e.Y36(w._W),e.Y36(C.g))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-procedure"]],viewQuery:function(t,i){if(1&t&&e.Gf(Z,5),2&t){let n;e.iGM(n=e.CRH())&&(i.myGrid_1=n.first)}},decls:130,vars:35,consts:[[1,"cards"],[1,"row","p-1"],[1,"col-1"],[1,"header_name_bold","mt-1",2,"text-wrap","nowrap !important","word-break","normal !important"],[1,"col-7"],[1,"d-flex","justify-centent-between","align-items-center","ms-3",2,"border","1px solid #ECECEC","border-radius","6px","flex-wrap","wrap","width","fit-content"],["class","me-2","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"col-4"],[1,"d-flex","justify-content-between","align-items-center","float-end",2,"flex-wrap","wrap"],[1,"me-2"],[1,"btn-diasble"],[1,"tab_filter_img","me-2",3,"click"],["src","assets/images/reload.svg","width","20px","height","20px","tooltip","Reload","placement","bottom"],[1,"tab_filter_img","me-2"],["src","assets/images/print.svg","width","20px","height","20px","tooltip","Export","placement","bottom"],[2,"background","#F3F4F8","border-radius","8px"],[1,"row","py-2","mx-1","my-2",2,"border-bottom","2px solid #fff"],[1,"col-1","px-1",2,"display","flex","flex-wrap","wrap"],[1,"btn-new",2,"width","100px !important",3,"click"],["src","assets/images/filter_button_img.svg","width","24px","height","24px"],[1,"col-7","px-1"],[1,"d-flex","flex-wrap","justify-centent-between","align-items-center","ps-0"],[2,"width","28%"],["placeholder","Select the Saved Filter",3,"items","ngModel","change","ngModelChange"],[1,"ms-2",2,"width","28%"],["type","text","placeholder","Select Date","bsDaterangepicker","",1,"form-control",2,"height","35px","font-size","0.66rem !important",3,"bsConfig"],["placeholder","Select the Sub-status",3,"items"],[1,"ms-2"],[1,"form-check","form-switch","form-switch-md","d-flex","justify-centent-between","align-items-center","ps-0"],[2,"font-weight","500 !important","text-wrap","nowrap !important"],["type","checkbox",1,"form-check-input","ms-3"],[1,"col-4","px-1"],[1,"d-flex","justify-centent-between"],[2,"width","30%"],["bindLabel","name","bindValue","id",3,"items","multiple","closeOnSelect","placeholder"],["ng-option-tmp",""],[1,"ms-2",2,"width","100%"],["placeholder","Search by name, MRN, Patient ID, Batch No",1,"form-control"],[1,"row","py-2","mx-1","mt-4","mb-2"],[1,"col-8"],[1,"d-flex","align-items-center"],[2,"font-weight","500 !important"],["class","ms-2","style","padding: 5px 6px 5px 6px;background: #FFFFFF;border-radius: 12px;",4,"ngFor","ngForOf"],[1,"col-4","mb-2"],[1,"d-flex","justify-content-end","align-items-center"],[4,"ngIf"],[1,"row"],[1,"col-md-3",2,"display","none","height","auto",3,"ngClass"],[2,"border","1px solid #ECECEC","border-radius","12px"],[1,"d-flex","p-2",2,"border-bottom","1px solid #ECECEC","cursor","pointer",3,"click"],["src","assets/images/back_arrow.svg","width","24px","height","24px",1,"me-2"],[1,"header_name_bold"],[1,"row","mt-3","mx-1"],[1,"col-6"],[1,"mb-2",2,"font-weight","400"],[1,"d-flex","flex-wrap"],[1,"pointer",2,"font-weight","500 !important","padding","6px !important",3,"ngClass","click"],[1,"form-check","form-check-inline"],["type","radio","name","inlineRadioOptions","id","inlineRadio1","value","option1",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio2","value","option2",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],[1,"col-12"],[1,"d-flex","flex-wrap","justify-centent-between"],[1,"form-check","form-check-inline","me-4"],["type","checkbox","name","inlineRadioOptions","id","inlineRadio1","value","option1",1,"form-check-input"],["type","checkbox","name","inlineRadioOptions","id","inlineRadio2","value","option2",1,"form-check-input"],[1,"row","mt-3"],[1,"d-flex","flex-column","p-3"],[1,"mt-2",2,"width","100%"],[2,"width","auto"],["placeholder","Select",3,"items"],[1,"mt-3"],[1,"d-flex","flex-wrap",2,"border-top","1px solid #ECECEC","flex-direction","row-reverse","margin-top","33%"],[1,"mt-2"],[1,"btn-2"],[1,"btn-diasble","me-2"],[1,"col-md-9",3,"ngClass"],[1,"ag-theme-alpine",2,"width","100%","height","700px",3,"columnDefs","gridOptions","defaultColDef","sideBar","gridReady"],["myGrid_1",""],[1,"me-2",2,"cursor","pointer",3,"click"],[2,"font-weight","500 !important","padding","6px 16px 6px 16px !important",3,"ngClass"],["type","checkbox",3,"id","ngModel"],[1,"ms-2",2,"padding","5px 6px 5px 6px","background","#FFFFFF","border-radius","12px"],[1,"mb-0",2,"font-weight","400 !important"],["src","assets/images/delete_filter_value.svg","class","ms-1",3,"click",4,"ngIf"],["src","assets/images/delete_filter_value.svg",1,"ms-1",3,"click"],["type","button",1,"btn-2","me-4",3,"click"],[1,"mdi","mdi-reload","me-2"],["type","button",1,"btn-new","me-2",2,"width","auto !important",3,"click"],["type","button",1,"btn-diasble","me-2"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Procedure List"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5),e.YNc(7,S,3,4,"div",6),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8)(10,"div",9)(11,"button",10),e._uU(12,"Action"),e.qZA()(),e.TgZ(13,"div",11),e.NdJ("click",function(){return i.ReloadGrid()}),e._UZ(14,"img",12),e.qZA(),e.TgZ(15,"div",13),e._UZ(16,"img",14),e.qZA()()()(),e.TgZ(17,"div",15)(18,"div",16)(19,"div",17)(20,"button",18),e.NdJ("click",function(){return i.ShowAdvancedFilters()}),e._UZ(21,"img",19),e._uU(22,"Filter"),e.qZA()(),e.TgZ(23,"div",20)(24,"div",21)(25,"div",22)(26,"ng-select",23),e.NdJ("change",function(){return i.changeSavedfilter(i.CurrentSavedFilter)})("ngModelChange",function(l){return i.CurrentSavedFilter=l}),e.qZA()(),e.TgZ(27,"div",24),e._UZ(28,"input",25),e.qZA(),e.TgZ(29,"div",24),e._UZ(30,"ng-select",26),e.qZA(),e.TgZ(31,"div",27)(32,"div",28)(33,"h1",29),e._uU(34,"Auto rota"),e.qZA(),e._UZ(35,"input",30),e.qZA()()()(),e.TgZ(36,"div",31)(37,"div",32)(38,"div",33)(39,"ng-select",34),e.YNc(40,T,2,3,"ng-template",35),e.qZA()(),e.TgZ(41,"div",36),e._UZ(42,"input",37),e.qZA()()()(),e.TgZ(43,"div",38)(44,"div",39)(45,"div",40)(46,"div")(47,"h1",41),e._uU(48,"Active filters :"),e.qZA()(),e.YNc(49,k,4,2,"div",42),e.qZA()(),e.TgZ(50,"div",43)(51,"div",44),e.YNc(52,A,4,0,"div",45),e.YNc(53,y,3,0,"div",45),e.YNc(54,F,3,0,"div",45),e.YNc(55,D,3,0,"div",45),e.qZA()()()(),e.TgZ(56,"div",46)(57,"div",47)(58,"div",48)(59,"div",49),e.NdJ("click",function(){return i.HideAdvanceFilters()}),e._UZ(60,"img",50),e.TgZ(61,"h1",51),e._uU(62,"Filters"),e.qZA()(),e.TgZ(63,"div",52)(64,"div",53)(65,"p",54),e._uU(66,"Patient Type"),e.qZA(),e.TgZ(67,"div",55)(68,"p",56),e.NdJ("click",function(){return i.PatientType("in_patient")}),e._uU(69,"In Patient"),e.qZA(),e.TgZ(70,"p",56),e.NdJ("click",function(){return i.PatientType("out_patient")}),e._uU(71,"Out Patient"),e.qZA()()(),e.TgZ(72,"div",53)(73,"p",54),e._uU(74,"Gender"),e.qZA(),e.TgZ(75,"div",55)(76,"div",57),e._UZ(77,"input",58),e.TgZ(78,"label",59),e._uU(79,"Male"),e.qZA()(),e.TgZ(80,"div",57),e._UZ(81,"input",60),e.TgZ(82,"label",61),e._uU(83,"Female"),e.qZA()()()()(),e.TgZ(84,"div",52)(85,"div",62)(86,"p",54),e._uU(87,"Radiology"),e.qZA(),e.TgZ(88,"div",63)(89,"div",64),e._UZ(90,"input",65),e.TgZ(91,"label",59),e._uU(92,"Diagnostic Radiology"),e.qZA()(),e.TgZ(93,"div",57),e._UZ(94,"input",66),e.TgZ(95,"label",61),e._uU(96,"Interventional Radiology"),e.qZA()()()()(),e.TgZ(97,"div",67)(98,"div",62)(99,"div",68)(100,"div",69)(101,"p",54),e._uU(102,"Exam Status"),e.qZA(),e.TgZ(103,"div",70),e._UZ(104,"ng-select",71),e.qZA()(),e.TgZ(105,"div",72)(106,"p",54),e._uU(107,"Priority"),e.qZA(),e.TgZ(108,"div",70),e._UZ(109,"ng-select",71),e.qZA()(),e.TgZ(110,"div",72)(111,"p",54),e._uU(112,"Procedure Status"),e.qZA(),e.TgZ(113,"div",70),e._UZ(114,"ng-select",71),e.qZA()(),e.TgZ(115,"div",72)(116,"p",54),e._uU(117,"Study date/time"),e.qZA(),e.TgZ(118,"div",70),e._UZ(119,"ng-select",71),e.qZA()(),e.TgZ(120,"div",73)(121,"div",74)(122,"button",75),e._uU(123,"Cancel"),e.qZA()(),e.TgZ(124,"div",74)(125,"button",76),e._uU(126,"Apply"),e.qZA()()()()()()()(),e.TgZ(127,"div",77)(128,"ag-grid-angular",78,79),e.NdJ("gridReady",function(l){return i.onGridReady_1(l)}),e.qZA()()()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",i.main_tabs_filters),e.xp6(19),e.Q6J("items",i.Saved_filter_options)("ngModel",i.CurrentSavedFilter),e.xp6(2),e.Q6J("bsConfig",e.DdM(26,R)),e.xp6(2),e.Q6J("items",i.current_Procedure_filters),e.xp6(9),e.Q6J("items",i.sortBy_values)("multiple",!0)("closeOnSelect",!1)("placeholder","Sort by"),e.xp6(10),e.Q6J("ngForOf",i.Current_Saved_filter_values),e.xp6(3),e.Q6J("ngIf",i.enabled_reset_btn),e.xp6(1),e.Q6J("ngIf",i.enabled_edit_btn&&i.enabled_saveas_button),e.xp6(1),e.Q6J("ngIf",!i.enabled_saveas_button),e.xp6(1),e.Q6J("ngIf",!i.enabled_edit_btn),e.xp6(2),e.Q6J("ngClass",e.VKq(27,U,1==i.show_advanced_filtes)),e.xp6(11),e.Q6J("ngClass",e.VKq(29,m,"in_patient"==i.selected_patient_type)),e.xp6(2),e.Q6J("ngClass",e.VKq(31,m,"out_patient"==i.selected_patient_type)),e.xp6(34),e.Q6J("items",i.current_Procedure_filters),e.xp6(5),e.Q6J("items",i.current_Procedure_filters),e.xp6(5),e.Q6J("items",i.current_Procedure_filters),e.xp6(5),e.Q6J("items",i.current_Procedure_filters),e.xp6(8),e.Q6J("ngClass",e.VKq(33,O,0==i.reduce_size)),e.xp6(1),e.Q6J("columnDefs",i.columnDefs1)("gridOptions",i.gridOptions1)("defaultColDef",i.defaultColDef)("sideBar",i.sideBar))},dependencies:[u.mk,u.sg,u.O5,d.Wl,d.JJ,d.On,h.i9,g.w9,g.ir,v.N8,f.FR,f.TB],styles:[".main_active[_ngcontent-%COMP%]{background:#855EDB;border:1px solid #855EDB;color:#fff!important;border-radius:6px}.tab_filter_img[_ngcontent-%COMP%]{background:#F3F4F8;padding:8px;cursor:pointer}[_nghost-%COMP%]     .ng-dropdown-panel{background:#fff;height:110px;overflow-y:scroll}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#855edb!important;border-color:#855edb!important}.ag-theme-alpine[_ngcontent-%COMP%]{--ag-row-hover-color: none !important;--ag-header-background-color: #594585 !important;--ag-selected-row-background-color: transparent !important}  .ag-row{border-bottom:none!important}  .ag-row-selected:before{background-color:transparent!important}  .ag-row-odd{margin:10px 0!important;background:#F3F4F8!important;z-index:2;cursor:pointer!important}  .ag-row-even{margin:10px 0!important;background:none!important;cursor:pointer!important}  .ag-header-viewport{background:#594585}  .ag-header-cell-text{font-size:12px!important;font-weight:500!important;color:#fff!important}  .ag-cell-value{font-size:10px!important;font-weight:400!important}  .ag-checkbox-input-wrapper{width:15px!important;height:15px!important}  .ag-root-wrapper{border:1px solid #747474!important;font-family:poppins!important}  .ag-root-wrapper{border:1px solid #747474!important;border-radius:15px;font-family:poppins!important}  .ag-row-group-expanded{background:#8B8B8B!important}  .ag-row-group-expanded .ag-cell-value{color:#fff!important}  .ag-row-group-expanded .ag-icon-tree-open{color:#fff!important}  .ag-cell-value{border:none!important}.show_filters[_ngcontent-%COMP%]{display:block!important;height:100%!important}.reduce_grid_size[_ngcontent-%COMP%]{width:100%;position:relative;left:0%}[_nghost-%COMP%]     .ng-dropdown-panel-items{background:#fff;border:1px solid #BEBEBF!important}.import_images[_ngcontent-%COMP%]{padding-left:3px;background-image:url(/assets/images/Download.svg)!important;background-repeat:no-repeat!important;background-position:120px!important;background-size:20px!important}"]})}return r})(),canActivate:[s(8036).a]}];let J=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(E),p.Bz]})}return r})();var q=s(3552);let G=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[u.ez,d.u5,J,h.z8,g.A0,v.sF,d.UX,q.mr.forRoot(),f.kn.forRoot()]})}return r})()}}]);