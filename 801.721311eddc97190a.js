"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[801],{7801:(R,m,a)=>{a.r(m),a.d(m,{ProcedureModule:()=>E});var c=a(6814),u=a(4961),e=(a(3742),a(5879)),h=a(9862),d=a(6223),f=a(9917),p=a(9193),v=a(3546),g=a(4518);const b=["myGrid_1"],_=function(r){return{main_active:r}};function x(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"div",80),e.NdJ("click",function(){const o=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.Change_grid_data(o.value))}),e.TgZ(1,"h1",81),e._uU(2),e.qZA()()}if(2&r){const n=s.$implicit,t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,_,t.main_filter_value==n.value)),e.xp6(1),e.hij(" ",n.value,"")}}function w(r,s){if(1&r&&(e._UZ(0,"input",82),e._uU(1)),2&r){const n=s.item,t=s.item$;e.MGl("id","item-",s.index,""),e.Q6J("ngModel",t.selected),e.xp6(1),e.hij(" ",n," ")}}function Z(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"img",86),e.NdJ("click",function(){e.CHM(n);const i=e.oxw().index,o=e.oxw();return e.KtG(o.DeleteSavedFiltervalues(i))}),e.qZA()}}function C(r,s){if(1&r&&(e.TgZ(0,"div",83)(1,"p",84),e._uU(2),e.YNc(3,Z,1,0,"img",85),e.qZA()()),2&r){const n=s.$implicit,t=e.oxw();e.xp6(2),e.Oqu(n),e.xp6(1),e.Q6J("ngIf",t.enable_edit_feature)}}function T(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"div")(1,"button",87),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.resetSavedFilters())}),e._UZ(2,"i",88),e._uU(3,"Reset"),e.qZA()()}}function k(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"div")(1,"button",89),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.EnableEdit())}),e._uU(2,"Edit"),e.qZA()()}}function y(r,s){if(1&r){const n=e.EpF();e.TgZ(0,"div")(1,"button",89),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.EnableEdit())}),e._uU(2,"Save as"),e.qZA()()}}function P(r,s){1&r&&(e.TgZ(0,"div")(1,"button",90),e._uU(2,"Save"),e.qZA()())}const A=function(){return{withTimepicker:!0,rangeInputFormat:"MMMM Do YYYY, h:mm:ss a",dateInputFormat:"MMMM Do YYYY, h:mm:ss a"}},F=function(r){return{show_filters:r}},S=function(r){return{reduce_grid_size:r}},M=[{path:"",component:(()=>{class r{constructor(n,t){this.router=n,this.http=t,this.main_tabs_filters=[],this.main_filter_value="View all",this.enable_edit_feature=!1,this.enabled_saveas_button=!0,this.gridOptions1={defaultColDef:{filter:!1},suppressMenuHide:!1,rowSelection:"multiple",suppressRowClickSelection:!0,rowHeight:35,suppressHorizontalScroll:!1,suppressMovableColumns:!0,pagination:!0,suppressDragLeaveHidesColumns:!0,suppressContextMenu:!0,getRowStyle:i=>"Emergency"===i.data.Priority?{background:"rgb(250 218 218) !important"}:null},this.defaultColDef={editable:!1,enableRowGroup:!0,enablePivot:!0,enableValue:!0,sortable:!0,resizable:!0,filter:!0},this.columnDefs1=[],this.sideBar={toolPanels:[{id:"columns",labelDefault:"Columns Visibility",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",toolPanelParams:{suppressRowGroups:!0,suppressValues:!0,suppressPivots:!0,suppressPivotMode:!0,suppressColumnFilter:!1,suppressColumnSelectAll:!1}}],defaultToolPanel:null},this.selected_patient_type="in_patient",this.show_advanced_filtes=!1,this.reduce_size=!1,this.Saved_filter_options=["Saved filter 1","Saved filter 2","Saved filter 3","Saved filter 4","Saved filter 5"],this.sortBy_values=["Priority","In Patient","Speciality"]}ngOnInit(){this.http.get("assets/json/main_filters_Procedure_list.json").subscribe(n=>{this.main_tabs_filters=n}),this.http.get("assets/json/procedure_filters_value.json").subscribe(n=>{this.current_Procedure_filters=n[0].value})}navigate_to_WorkArea(){this.router.navigate(["/workarea"])}Change_grid_data(n){this.main_filter_value=n}changeSavedfilter(n){"Saved filter 1"==n&&(this.http.get("assets/json/saved_filter_1.json").subscribe(t=>{this.Current_Saved_filter_values=t[0].filter_values,console.log(this.Current_Saved_filter_values)}),this.enabled_edit_btn=!0,this.enabled_reset_btn=!0)}EnableEdit(){this.enable_edit_feature=!0,this.enabled_saveas_button=!1}resetSavedFilters(){this.enabled_reset_btn=!1,this.enabled_edit_btn=!1,this.enabled_saveas_button=!0,this.Current_Saved_filter_values=[],this.CurrentSavedFilter=""}DeleteSavedFiltervalues(n){this.Current_Saved_filter_values.splice(n,1)}onGridReady_1(n){this.gridApi_1=n.api,console.log("event",n),this.http.get("assets/json/Procedure_list.json").subscribe(t=>{console.log("Response Grid",t);let i=[];i=this.gridOptions1.api?.getColumnDefs(),i.length=0,Object.keys(t[0]).forEach(l=>{if("checkboxSelection"==l){let J="";i.push({checkboxSelection:!0,headerCheckboxSelection:!0,width:50,cellRenderer:this.cellrendered.bind(this,l),headerName:J})}else"substatus"!=l&&i.push({field:l,cellRenderer:this.cellrendered.bind(this,l),onCellClicked:this.cellClicked.bind(this,l)})}),console.log("colDefs",i),this.gridOptions1.api?.setColumnDefs(i),this.gridOptions1.api?.setRowData(t)})}cellClicked(n){"Name"===n&&this.router.navigate(["/workarea"])}cellrendered(n,t){switch(n){case"Name":case"MRN":case"Gender":case"Type":case"DOB":case"Age":case"Location":case"Exam Status":case"Study Id":return t.value?t.value:"-Nil-";case"Priority":switch(t.value){case"Emergency":return`<div class="d-flex flex-row align-items-center"><p style="color:#D62424 !important;font-weight:400 !important" class="mb-0">${t.value}<h5 style="font-weight:400 !important;color:\n            #855EDB !important;padding:0px 6px 0px 6px !important;background:#fff;border-radius:27px !important" class="mb-0 ms-2">Yet to start</h5></p></div>`;case"Routine":return`<p style="color:#17B927 !important;font-weight:400 !important">${t.value}</p>`;case"Other":return`<p style="color:#594585 !important;font-weight:400 !important">${t.value}</p>`}case"Procedure Status":if(t.value){const o=t.node.data.substatus;return console.log(o),o?`<div class="d-flex flex-row  align-items-center"><p class="mb-0">${t.value}</p><h5 class="ms-1 mb-0" style="font-weight:400 !important;color:#855EDB !important;background:#F3F4F8;padding : 0px 4px 0px 4px;border-radius:27px">${o}</h5></div>`:t.value}return"-Nil-";case"Study Data and Time":case"Accession Number":case"Requesting Physician":case"Speciality":case"Claim Note":return t.value?t.value:"-Nil-";case"Assigned To":{let i;i=t.value.substring(0,10);const l=t.node.data.Date;return console.log("sasasa",l),`${l??"UA"} | ${i}`}}}PatientType(n){this.selected_patient_type=n}ShowAdvancedFilters(){this.show_advanced_filtes=!0,this.reduce_size=!0}HideAdvanceFilters(){this.show_advanced_filtes=!1,this.reduce_size=!1}static#e=this.\u0275fac=function(t){return new(t||r)(e.Y36(u.F0),e.Y36(h.eN))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-procedure"]],viewQuery:function(t,i){if(1&t&&e.Gf(b,5),2&t){let o;e.iGM(o=e.CRH())&&(i.myGrid_1=o.first)}},decls:132,vars:35,consts:[[1,"cards"],[1,"row","p-1"],[1,"col-1"],[1,"header_name_bold","mt-1",2,"text-wrap","nowrap !important","word-break","normal !important"],[1,"col-7"],[1,"d-flex","justify-centent-between","align-items-center","ms-3",2,"border","1px solid #ECECEC","border-radius","6px","flex-wrap","wrap","width","fit-content"],["class","me-2","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"col-4"],[1,"d-flex","justify-centent-between","align-items-center","float-end",2,"flex-wrap","wrap"],[1,"me-2"],[1,"btn-diasble"],[1,"tab_filter_img","me-2"],["src","assets/images/reload.svg","width","20px","height","20px","tooltip","Reload","placement","bottom"],["src","assets/images/Download.svg","width","20px","height","20px","tooltip","Download","placement","bottom"],["src","assets/images/print.svg","width","20px","height","20px","tooltip","Print","placement","bottom"],[2,"background","#F3F4F8","border-radius","8px"],[1,"row","py-2","mx-1","my-2",2,"border-bottom","2px solid #fff"],[1,"col-1","px-1",2,"display","flex","flex-wrap","wrap"],[1,"btn-new",2,"width","100px !important",3,"click"],["src","assets/images/filter_button_img.svg","width","24px","height","24px"],[1,"col-7","px-1"],[1,"d-flex","flex-wrap","justify-centent-between","align-items-center","ps-0"],[2,"width","28%"],["placeholder","Select the Saved Filter",3,"items","ngModel","change","ngModelChange"],[1,"ms-2",2,"width","28%"],["type","text","placeholder","Select Date","bsDaterangepicker","",1,"form-control",2,"height","35px","font-size","0.66rem !important",3,"bsConfig"],["placeholder","Select the Sub-status",3,"items"],[1,"ms-2"],[1,"form-check","form-switch","form-switch-md","d-flex","justify-centent-between","align-items-center","ps-0"],[2,"font-weight","500 !important","text-wrap","nowrap !important"],["type","checkbox",1,"form-check-input","ms-3"],[1,"col-4","px-1"],[1,"d-flex","justify-centent-between"],[2,"width","30%"],["bindLabel","name","bindValue","id",3,"items","multiple","closeOnSelect","placeholder"],["ng-option-tmp",""],[1,"ms-2",2,"width","100%"],["placeholder","Search by name, MRN, Patient ID, Batch No",1,"form-control"],[1,"row","py-2","mx-1","mt-4","mb-2"],[1,"col-8"],[1,"d-flex","align-items-center"],[2,"font-weight","500 !important"],["class","ms-2","style","padding: 5px 6px 5px 6px;background: #FFFFFF;border-radius: 12px;",4,"ngFor","ngForOf"],[1,"col-4","mb-2"],[1,"d-flex","justify-content-end","align-items-center"],[4,"ngIf"],[1,"row"],[1,"col-md-3",2,"display","none","height","auto",3,"ngClass"],[2,"border","1px solid #ECECEC","border-radius","12px"],[1,"d-flex","p-2",2,"border-bottom","1px solid #ECECEC","cursor","pointer",3,"click"],["src","assets/images/back_arrow.svg","width","24px","height","24px",1,"me-2"],[1,"header_name_bold"],[1,"row","mt-3","mx-1"],[1,"col-6"],[1,"mb-2",2,"font-weight","400"],[1,"d-flex","flex-wrap"],[1,"pointer",2,"font-weight","500 !important","padding","6px !important",3,"ngClass","click"],[1,"form-check","form-check-inline"],["type","radio","name","inlineRadioOptions","id","inlineRadio1","value","option1",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio2","value","option2",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],[1,"col-12"],[1,"d-flex","flex-wrap","justify-centent-between"],[1,"form-check","form-check-inline","me-4"],["type","checkbox","name","inlineRadioOptions","id","inlineRadio1","value","option1",1,"form-check-input"],["type","checkbox","name","inlineRadioOptions","id","inlineRadio2","value","option2",1,"form-check-input"],[1,"row","mt-3"],[1,"d-flex","flex-column","p-3"],[1,"mt-2",2,"width","100%"],[2,"width","auto"],["placeholder","Select",3,"items"],[1,"mt-3"],[1,"d-flex","flex-wrap",2,"border-top","1px solid #ECECEC","flex-direction","row-reverse","margin-top","32%"],[1,"mt-2"],[1,"btn-2"],[1,"btn-diasble","me-2"],[1,"col-md-9",3,"ngClass"],[1,"ag-theme-alpine",2,"width","100%","height","700px",3,"columnDefs","gridOptions","defaultColDef","sideBar","gridReady"],["myGrid_1",""],[1,"me-2",2,"cursor","pointer",3,"click"],[2,"font-weight","500 !important","padding","6px 16px 6px 16px !important",3,"ngClass"],["type","checkbox",3,"id","ngModel"],[1,"ms-2",2,"padding","5px 6px 5px 6px","background","#FFFFFF","border-radius","12px"],[1,"mb-0",2,"font-weight","400 !important"],["src","assets/images/delete_filter_value.svg","class","ms-1",3,"click",4,"ngIf"],["src","assets/images/delete_filter_value.svg",1,"ms-1",3,"click"],["type","button",1,"btn-2","me-4",3,"click"],[1,"mdi","mdi-reload","me-2"],["type","button",1,"btn-new","me-2",2,"width","auto !important",3,"click"],["type","button",1,"btn-diasble","me-2"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Procedure List"),e.qZA()(),e.TgZ(5,"div",4)(6,"div",5),e.YNc(7,x,3,4,"div",6),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8)(10,"div",9)(11,"button",10),e._uU(12,"Action"),e.qZA()(),e.TgZ(13,"div",11),e._UZ(14,"img",12),e.qZA(),e.TgZ(15,"div",11),e._UZ(16,"img",13),e.qZA(),e.TgZ(17,"div",11),e._UZ(18,"img",14),e.qZA()()()(),e.TgZ(19,"div",15)(20,"div",16)(21,"div",17)(22,"button",18),e.NdJ("click",function(){return i.ShowAdvancedFilters()}),e._UZ(23,"img",19),e._uU(24,"Filter"),e.qZA()(),e.TgZ(25,"div",20)(26,"div",21)(27,"div",22)(28,"ng-select",23),e.NdJ("change",function(){return i.changeSavedfilter(i.CurrentSavedFilter)})("ngModelChange",function(l){return i.CurrentSavedFilter=l}),e.qZA()(),e.TgZ(29,"div",24),e._UZ(30,"input",25),e.qZA(),e.TgZ(31,"div",24),e._UZ(32,"ng-select",26),e.qZA(),e.TgZ(33,"div",27)(34,"div",28)(35,"h1",29),e._uU(36,"Auto rota"),e.qZA(),e._UZ(37,"input",30),e.qZA()()()(),e.TgZ(38,"div",31)(39,"div",32)(40,"div",33)(41,"ng-select",34),e.YNc(42,w,2,3,"ng-template",35),e.qZA()(),e.TgZ(43,"div",36),e._UZ(44,"input",37),e.qZA()()()(),e.TgZ(45,"div",38)(46,"div",39)(47,"div",40)(48,"div")(49,"h1",41),e._uU(50,"Active filters :"),e.qZA()(),e.YNc(51,C,4,2,"div",42),e.qZA()(),e.TgZ(52,"div",43)(53,"div",44),e.YNc(54,T,4,0,"div",45),e.YNc(55,k,3,0,"div",45),e.YNc(56,y,3,0,"div",45),e.YNc(57,P,3,0,"div",45),e.qZA()()()(),e.TgZ(58,"div",46)(59,"div",47)(60,"div",48)(61,"div",49),e.NdJ("click",function(){return i.HideAdvanceFilters()}),e._UZ(62,"img",50),e.TgZ(63,"h1",51),e._uU(64,"Filters"),e.qZA()(),e.TgZ(65,"div",52)(66,"div",53)(67,"p",54),e._uU(68,"Patient Type"),e.qZA(),e.TgZ(69,"div",55)(70,"p",56),e.NdJ("click",function(){return i.PatientType("in_patient")}),e._uU(71,"In Patient"),e.qZA(),e.TgZ(72,"p",56),e.NdJ("click",function(){return i.PatientType("out_patient")}),e._uU(73,"Out Patient"),e.qZA()()(),e.TgZ(74,"div",53)(75,"p",54),e._uU(76,"Gender"),e.qZA(),e.TgZ(77,"div",55)(78,"div",57),e._UZ(79,"input",58),e.TgZ(80,"label",59),e._uU(81,"Male"),e.qZA()(),e.TgZ(82,"div",57),e._UZ(83,"input",60),e.TgZ(84,"label",61),e._uU(85,"Female"),e.qZA()()()()(),e.TgZ(86,"div",52)(87,"div",62)(88,"p",54),e._uU(89,"Radiology"),e.qZA(),e.TgZ(90,"div",63)(91,"div",64),e._UZ(92,"input",65),e.TgZ(93,"label",59),e._uU(94,"Diagnostic Radiology"),e.qZA()(),e.TgZ(95,"div",57),e._UZ(96,"input",66),e.TgZ(97,"label",61),e._uU(98,"Interventional Radiology"),e.qZA()()()()(),e.TgZ(99,"div",67)(100,"div",62)(101,"div",68)(102,"div",69)(103,"p",54),e._uU(104,"Exam Status"),e.qZA(),e.TgZ(105,"div",70),e._UZ(106,"ng-select",71),e.qZA()(),e.TgZ(107,"div",72)(108,"p",54),e._uU(109,"Priority"),e.qZA(),e.TgZ(110,"div",70),e._UZ(111,"ng-select",71),e.qZA()(),e.TgZ(112,"div",72)(113,"p",54),e._uU(114,"Procedure Status"),e.qZA(),e.TgZ(115,"div",70),e._UZ(116,"ng-select",71),e.qZA()(),e.TgZ(117,"div",72)(118,"p",54),e._uU(119,"Study date/time"),e.qZA(),e.TgZ(120,"div",70),e._UZ(121,"ng-select",71),e.qZA()(),e.TgZ(122,"div",73)(123,"div",74)(124,"button",75),e._uU(125,"Cancel"),e.qZA()(),e.TgZ(126,"div",74)(127,"button",76),e._uU(128,"Apply"),e.qZA()()()()()()()(),e.TgZ(129,"div",77)(130,"ag-grid-angular",78,79),e.NdJ("gridReady",function(l){return i.onGridReady_1(l)}),e.qZA()()()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",i.main_tabs_filters),e.xp6(21),e.Q6J("items",i.Saved_filter_options)("ngModel",i.CurrentSavedFilter),e.xp6(2),e.Q6J("bsConfig",e.DdM(26,A)),e.xp6(2),e.Q6J("items",i.current_Procedure_filters),e.xp6(9),e.Q6J("items",i.sortBy_values)("multiple",!0)("closeOnSelect",!1)("placeholder","Sort by"),e.xp6(10),e.Q6J("ngForOf",i.Current_Saved_filter_values),e.xp6(3),e.Q6J("ngIf",i.enabled_reset_btn),e.xp6(1),e.Q6J("ngIf",i.enabled_edit_btn&&i.enabled_saveas_button),e.xp6(1),e.Q6J("ngIf",!i.enabled_saveas_button),e.xp6(1),e.Q6J("ngIf",!i.enabled_edit_btn),e.xp6(2),e.Q6J("ngClass",e.VKq(27,F,1==i.show_advanced_filtes)),e.xp6(11),e.Q6J("ngClass",e.VKq(29,_,"in_patient"==i.selected_patient_type)),e.xp6(2),e.Q6J("ngClass",e.VKq(31,_,"out_patient"==i.selected_patient_type)),e.xp6(34),e.Q6J("items",i.current_Procedure_filters),e.xp6(5),e.Q6J("items",i.current_Procedure_filters),e.xp6(5),e.Q6J("items",i.current_Procedure_filters),e.xp6(5),e.Q6J("items",i.current_Procedure_filters),e.xp6(8),e.Q6J("ngClass",e.VKq(33,S,0==i.reduce_size)),e.xp6(1),e.Q6J("columnDefs",i.columnDefs1)("gridOptions",i.gridOptions1)("defaultColDef",i.defaultColDef)("sideBar",i.sideBar))},dependencies:[c.mk,c.sg,c.O5,d.Wl,d.JJ,d.On,f.i9,p.w9,p.ir,v.N8,g.FR,g.TB],styles:[".main_active[_ngcontent-%COMP%]{background:#855EDB;border:1px solid #855EDB;color:#fff!important;border-radius:6px}.tab_filter_img[_ngcontent-%COMP%]{background:#F3F4F8;padding:8px;cursor:pointer}[_nghost-%COMP%]     .ng-dropdown-panel{background:#fff;height:110px;overflow-y:scroll}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#855edb!important;border-color:#855edb!important}  .ag-root ::-webkit-scrollbar{width:2em;height:2em}  .ag-root ::-webkit-scrollbar-button{background:#ccc}  .ag-root ::-webkit-scrollbar-track-piece{background:#ECECEC}  .ag-root ::-webkit-scrollbar-thumb{background:#747474}.ag-theme-alpine[_ngcontent-%COMP%]{--ag-row-hover-color: none !important;--ag-header-background-color: #594585 !important;--ag-selected-row-background-color: transparent !important}  .ag-row{border-bottom:none!important}  .ag-row-selected:before{background-color:transparent!important}  .ag-row-odd{margin:10px 0!important;background:#F3F4F8!important;z-index:2;cursor:pointer!important}  .ag-row-even{margin:10px 0!important;background:none!important;cursor:pointer!important}  .ag-header-viewport{background:#594585}  .ag-header-cell-text{font-size:12px!important;font-weight:500!important;color:#fff!important}  .ag-cell-value{font-size:10px!important;font-weight:400!important}  .ag-checkbox-input-wrapper{width:15px!important;height:15px!important}  .ag-root-wrapper{border:1px solid #747474!important;font-family:poppins!important}  .ag-root-wrapper{border:1px solid #747474!important;border-radius:15px;font-family:poppins!important}  .ag-row-group-expanded{background:#8B8B8B!important}  .ag-row-group-expanded .ag-cell-value{color:#fff!important}  .ag-row-group-expanded .ag-icon-tree-open{color:#fff!important}.show_filters[_ngcontent-%COMP%]{display:block!important;height:100%!important}.reduce_grid_size[_ngcontent-%COMP%]{width:100%;position:relative;left:0%}[_nghost-%COMP%]     .ng-select-container{background:#fff;border:1px solid #BEBEBF!important}"]})}return r})(),canActivate:[a(8036).a]}];let q=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(M),u.Bz]})}return r})();var D=a(3552);let E=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[c.ez,d.u5,q,f.z8,p.A0,v.sF,d.UX,D.mr.forRoot(),g.kn.forRoot()]})}return r})()}}]);