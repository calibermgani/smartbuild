"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[291],{5291:(dt,F,a)=>{a.r(F),a.d(F,{ProcedureWorkAreaModule:()=>lt});var p=a(6814),O=a(4961),e=a(5879),j=a(9862),T=a(4518),y=a(3552);let k;try{k=typeof Intl<"u"&&Intl.v8BreakIterator}catch{k=!1}var E=a(8645),V=a(7394);function x(n,...s){return s.length?s.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var he=a(9397),pe=a(6321),me=a(9360),_e=a(8251),ge=a(2181),ve=a(7398);class Ee{constructor(s){this._items=s,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new E.x,this._typeaheadSubscription=V.w0.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=t=>t.disabled,this._pressedLetters=[],this.tabOut=new E.x,this.change=new E.x,s instanceof e.n_E&&(this._itemChangesSubscription=s.changes.subscribe(t=>{if(this._activeItem){const o=t.toArray().indexOf(this._activeItem);o>-1&&o!==this._activeItemIndex&&(this._activeItemIndex=o)}}))}skipPredicate(s){return this._skipPredicateFn=s,this}withWrap(s=!0){return this._wrap=s,this}withVerticalOrientation(s=!0){return this._vertical=s,this}withHorizontalOrientation(s){return this._horizontal=s,this}withAllowedModifierKeys(s){return this._allowedModifierKeys=s,this}withTypeAhead(s=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe((0,he.b)(t=>this._pressedLetters.push(t)),function fe(n,s=pe.z){return(0,me.e)((t,i)=>{let o=null,r=null,c=null;const d=()=>{if(o){o.unsubscribe(),o=null;const u=r;r=null,i.next(u)}};function f(){const u=c+n,B=s.now();if(B<u)return o=this.schedule(void 0,u-B),void i.add(o);d()}t.subscribe((0,_e.x)(i,u=>{r=u,c=s.now(),o||(o=s.schedule(f,n),i.add(o))},()=>{d(),i.complete()},void 0,()=>{r=o=null}))})}(s),(0,ge.h)(()=>this._pressedLetters.length>0),(0,ve.U)(()=>this._pressedLetters.join(""))).subscribe(t=>{const i=this._getItemsArray();for(let o=1;o<i.length+1;o++){const r=(this._activeItemIndex+o)%i.length,c=i[r];if(!this._skipPredicateFn(c)&&0===c.getLabel().toUpperCase().trim().indexOf(t)){this.setActiveItem(r);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(s=!0){return this._homeAndEnd=s,this}withPageUpDown(s=!0,t=10){return this._pageUpAndDown={enabled:s,delta:t},this}setActiveItem(s){const t=this._activeItem;this.updateActiveItem(s),this._activeItem!==t&&this.change.next(this._activeItemIndex)}onKeydown(s){const t=s.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!s[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:return void this.tabOut.next();case 40:if(this._vertical&&o){this.setNextItemActive();break}return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}return;case 39:if(this._horizontal&&o){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case 37:if(this._horizontal&&o){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}return;case 33:if(this._pageUpAndDown.enabled&&o){const r=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}return;case 34:if(this._pageUpAndDown.enabled&&o){const r=this._activeItemIndex+this._pageUpAndDown.delta,c=this._getItemsArray().length;this._setActiveItemByIndex(r<c?r:c-1,-1);break}return;default:return void((o||x(s,"shiftKey"))&&(s.key&&1===s.key.length?this._letterKeyStream.next(s.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))))}this._pressedLetters=[],s.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(s){const t=this._getItemsArray(),i="number"==typeof s?s:t.indexOf(s);this._activeItem=t[i]??null,this._activeItemIndex=i}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(s){this._wrap?this._setActiveInWrapMode(s):this._setActiveInDefaultMode(s)}_setActiveInWrapMode(s){const t=this._getItemsArray();for(let i=1;i<=t.length;i++){const o=(this._activeItemIndex+s*i+t.length)%t.length;if(!this._skipPredicateFn(t[o]))return void this.setActiveItem(o)}}_setActiveInDefaultMode(s){this._setActiveItemByIndex(this._activeItemIndex+s,s)}_setActiveItemByIndex(s,t){const i=this._getItemsArray();if(i[s]){for(;this._skipPredicateFn(i[s]);)if(!i[s+=t])return;this.setActiveItem(s)}}_getItemsArray(){return this._items instanceof e.n_E?this._items.toArray():this._items}}class Te extends Ee{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(s){return this._origin=s,this}setActiveItem(s){super.setActiveItem(s),this.activeItem&&this.activeItem.focus(this._origin)}}const ke=new e.OlP("cdk-dir-doc",{providedIn:"root",factory:function Se(){return(0,e.f3M)(p.K0)}}),De=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let we=(()=>{class n{constructor(t){this.value="ltr",this.change=new e.vpe,t&&(this.value=function xe(n){const s=n?.toLowerCase()||"";return"auto"===s&&typeof navigator<"u"&&navigator?.language?De.test(navigator.language)?"rtl":"ltr":"rtl"===s?"rtl":"ltr"}((t.body?t.body.dir:null)||(t.documentElement?t.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#e=this.\u0275fac=function(i){return new(i||n)(e.LFG(ke,8))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ne=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({})}return n})();function v(n){return null!=n&&"false"!=`${n}`}var Pe=a(2096),A=a(7921),C=a(9773);function Ze(n,s){1&n&&e.Hsn(0)}const Ue=["*"];let Be=(()=>{class n{constructor(t){this._elementRef=t}focus(){this._elementRef.nativeElement.focus()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),R=(()=>{class n{constructor(t){this.template=t}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(e.Rgc))};static#t=this.\u0275dir=e.lG2({type:n,selectors:[["","cdkStepLabel",""]]})}return n})(),je=0;const P=new e.OlP("STEPPER_GLOBAL_OPTIONS");let Z=(()=>{class n{get editable(){return this._editable}set editable(t){this._editable=v(t)}get optional(){return this._optional}set optional(t){this._optional=v(t)}get completed(){return null==this._completedOverride?this._getDefaultCompleted():this._completedOverride}set completed(t){this._completedOverride=v(t)}_getDefaultCompleted(){return this.stepControl?this.stepControl.valid&&this.interacted:this.interacted}get hasError(){return null==this._customError?this._getDefaultError():this._customError}set hasError(t){this._customError=v(t)}_getDefaultError(){return this.stepControl&&this.stepControl.invalid&&this.interacted}constructor(t,i){this._stepper=t,this.interacted=!1,this.interactedStream=new e.vpe,this._editable=!0,this._optional=!1,this._completedOverride=null,this._customError=null,this._stepperOptions=i||{},this._displayDefaultIndicatorType=!1!==this._stepperOptions.displayDefaultIndicatorType}select(){this._stepper.selected=this}reset(){this.interacted=!1,null!=this._completedOverride&&(this._completedOverride=!1),null!=this._customError&&(this._customError=!1),this.stepControl&&this.stepControl.reset()}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this.interacted||(this.interacted=!0,this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??null!=this._customError}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36((0,e.Gpc)(()=>M)),e.Y36(P,8))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["cdk-step"]],contentQueries:function(i,o,r){if(1&i&&e.Suo(r,R,5),2&i){let c;e.iGM(c=e.CRH())&&(o.stepLabel=c.first)}},viewQuery:function(i,o){if(1&i&&e.Gf(e.Rgc,7),2&i){let r;e.iGM(r=e.CRH())&&(o.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],state:"state",editable:"editable",optional:"optional",completed:"completed",hasError:"hasError"},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[e.TTD],ngContentSelectors:Ue,decls:1,vars:0,template:function(i,o){1&i&&(e.F$t(),e.YNc(0,Ze,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),M=(()=>{class n{get linear(){return this._linear}set linear(t){this._linear=v(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){const i=function Le(n,s=0){return function Re(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}(n)?Number(n):s}(t);this.steps&&this._steps?(this._isValidIndex(i),this.selected?._markAsInteracted(),this._selectedIndex!==i&&!this._anyControlsInvalidOrPending(i)&&(i>=this._selectedIndex||this.steps.toArray()[i].editable)&&this._updateSelectedItemIndex(i)):this._selectedIndex=i}get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(t){this.selectedIndex=t&&this.steps?this.steps.toArray().indexOf(t):-1}get orientation(){return this._orientation}set orientation(t){this._orientation=t,this._keyManager&&this._keyManager.withVerticalOrientation("vertical"===t)}constructor(t,i,o){this._dir=t,this._changeDetectorRef=i,this._elementRef=o,this._destroyed=new E.x,this.steps=new e.n_E,this._sortedHeaders=new e.n_E,this._linear=!1,this._selectedIndex=0,this.selectionChange=new e.vpe,this.selectedIndexChange=new e.vpe,this._orientation="horizontal",this._groupId=je++}ngAfterContentInit(){this._steps.changes.pipe((0,A.O)(this._steps),(0,C.R)(this._destroyed)).subscribe(t=>{this.steps.reset(t.filter(i=>i._stepper===this)),this.steps.notifyOnChanges()})}ngAfterViewInit(){this._stepHeader.changes.pipe((0,A.O)(this._stepHeader),(0,C.R)(this._destroyed)).subscribe(t=>{this._sortedHeaders.reset(t.toArray().sort((i,o)=>i._elementRef.nativeElement.compareDocumentPosition(o._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Te(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation("vertical"===this._orientation),(this._dir?this._dir.change:(0,Pe.of)()).pipe((0,A.O)(this._layoutDirection()),(0,C.R)(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t)),this._keyManager.updateActiveItem(this._selectedIndex),this.steps.changes.subscribe(()=>{this.selected||(this._selectedIndex=Math.max(this._selectedIndex-1,0))}),this._isValidIndex(this._selectedIndex)||(this._selectedIndex=0)}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(t=>t.reset()),this._stateChanged()}_getStepLabelId(t){return`cdk-step-label-${this._groupId}-${t}`}_getStepContentId(t){return`cdk-step-content-${this._groupId}-${t}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(t){const i=t-this._selectedIndex;return i<0?"rtl"===this._layoutDirection()?"next":"previous":i>0?"rtl"===this._layoutDirection()?"previous":"next":"current"}_getIndicatorType(t,i="number"){const o=this.steps.toArray()[t],r=this._isCurrentStep(t);return o._displayDefaultIndicatorType?this._getDefaultIndicatorLogic(o,r):this._getGuidelineLogic(o,r,i)}_getDefaultIndicatorLogic(t,i){return t._showError()&&t.hasError&&!i?"error":!t.completed||i?"number":t.editable?"edit":"done"}_getGuidelineLogic(t,i,o="number"){return t._showError()&&t.hasError&&!i?"error":t.completed&&!i?"done":t.completed&&i?o:t.editable&&i?"edit":o}_isCurrentStep(t){return this._selectedIndex===t}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex}_updateSelectedItemIndex(t){const i=this.steps.toArray();this.selectionChange.emit({selectedIndex:t,previouslySelectedIndex:this._selectedIndex,selectedStep:i[t],previouslySelectedStep:i[this._selectedIndex]}),this._containsFocus()?this._keyManager.setActiveItem(t):this._keyManager.updateActiveItem(t),this._selectedIndex=t,this.selectedIndexChange.emit(this._selectedIndex),this._stateChanged()}_onKeydown(t){const i=x(t),o=t.keyCode,r=this._keyManager;null==r.activeItemIndex||i||32!==o&&13!==o?r.setFocusOrigin("keyboard").onKeydown(t):(this.selectedIndex=r.activeItemIndex,t.preventDefault())}_anyControlsInvalidOrPending(t){return!!(this._linear&&t>=0)&&this.steps.toArray().slice(0,t).some(i=>{const o=i.stepControl;return(o?o.invalid||o.pending||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride})}_layoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_containsFocus(){const t=this._elementRef.nativeElement,i=function q(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){const s=n.shadowRoot.activeElement;if(s===n)break;n=s}return n}();return t===i||t.contains(i)}_isValidIndex(t){return t>-1&&(!this.steps||t<this.steps.length)}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(we,8),e.Y36(e.sBO),e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(i,o,r){if(1&i&&(e.Suo(r,Z,5),e.Suo(r,Be,5)),2&i){let c;e.iGM(c=e.CRH())&&(o._steps=c),e.iGM(c=e.CRH())&&(o._stepHeader=c)}},inputs:{linear:"linear",selectedIndex:"selectedIndex",selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),U=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[Ne]})}return n})();var l=a(6825);const He=function(n,s,t){return{active:n,completed:s,done:t}};function Ke(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",6),e.NdJ("click",function(){const r=e.CHM(t).index,c=e.oxw();return e.KtG(c.selectedIndex=r)}),e.ynx(2,7),e.Hsn(3),e.Hsn(4,1),e.BQk(),e.qZA(),e.BQk()}if(2&n){const t=s.$implicit,i=s.index,o=e.oxw();e.xp6(1),e.Q6J("ngClass",e.kEZ(2,He,o.selectedIndex===i,t.completed&&i<o.selectedIndex,"done"===t.state&&i===o.selectedIndex)),e.xp6(1),e.Q6J("ngTemplateOutlet",t.stepLabel.template)}}function qe(n,s){if(1&n&&(e.TgZ(0,"div",8),e.GkF(1,7),e.qZA()),2&n){const t=s.$implicit,i=s.index,o=e.oxw();e.ekj("active",o.selectedIndex===i),e.Q6J("@stepTransition",o._getAnimationDirection(i)),e.xp6(1),e.Q6J("ngTemplateOutlet",t.content)}}const Ve=[[["",8,"step-bullet"]],[["",8,"step-title"]]],We=[".step-bullet",".step-title"];let Ye=(()=>{class n extends M{ngOnInit(){}}return n.\u0275fac=function(){let s;return function(i){return(s||(s=e.n5z(n)))(i||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-stepper"]],features:[e._Bn([{provide:M,useExisting:n},{provide:P,useValue:{displayDefaultIndicatorType:!1}}]),e.qOj],ngContentSelectors:We,decls:6,vars:2,consts:[[1,"stepper"],[1,"stepper-header"],[1,"steps"],[4,"ngFor","ngForOf"],[1,"stepper-body"],["class","content",3,"active",4,"ngFor","ngForOf"],[1,"step",3,"ngClass","click"],[3,"ngTemplateOutlet"],[1,"content"]],template:function(t,i){1&t&&(e.F$t(Ve),e.TgZ(0,"div",0)(1,"div",1)(2,"ol",2),e.YNc(3,Ke,5,6,"ng-container",3),e.qZA()(),e.TgZ(4,"div",4),e.YNc(5,qe,2,4,"div",5),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngForOf",i.steps),e.xp6(2),e.Q6J("ngForOf",i._steps))},dependencies:[p.mk,p.sg,p.tP],styles:['[_nghost-%COMP%]{display:block;overflow:hidden}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]{width:100%;list-style:none;display:inline-flex;align-items:center;margin:0 auto}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{text-align:center;font-size:1em}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step .step-bullet{position:relative;display:inline-flex;justify-content:center;align-items:center;height:40px;width:40px;background-color:#b3babe;border-radius:50%;color:#fff;font-size:1.3rem;text-align:center;text-decoration:none;cursor:pointer}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step .step-title{position:absolute;right:0;bottom:-5px;left:0;margin:auto 0;height:0}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step.active .step-bullet{background-color:#306bff}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step.completed .step-bullet{background-color:#32e67f}.stepper-header[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]     .step.done .step-bullet{background-color:#32e67f}.stepper-body[_ngcontent-%COMP%]{margin:25px auto;padding:1rem}.stepper-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:not(.active){height:0;overflow:hidden}.step[_ngcontent-%COMP%]{position:relative;width:33.33%}.step[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;height:3px;background-color:#b3babe;top:50%;left:-50%;z-index:-1}.step[_ngcontent-%COMP%]:first-child:after{content:none}.step.completed[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]:after{background-color:#32e67f}'],data:{animation:[(0,l.X$)("stepTransition",[(0,l.SB)("previous",(0,l.oB)({transform:"translateX(-100%)",opacity:0})),(0,l.SB)("current",(0,l.oB)({transform:"translateX(0)",opacity:1})),(0,l.SB)("next",(0,l.oB)({transform:"translateX(100%)",opacity:0})),(0,l.eR)(":enter",(0,l.jt)(0)),(0,l.eR)("previous => current",(0,l.jt)("500ms cubic-bezier(0.35, 0, 0.25, 1)")),(0,l.eR)("next => current",(0,l.jt)("500ms cubic-bezier(0.35, 0, 0.25, 1)"))])]}}),n})(),Ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,U]}),n})(),$e=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-procedure-details"]],decls:2,vars:0,template:function(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1,"procedure-details works!"),e.qZA())}})}return n})();function ze(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1,"."),e.qZA(),e.TgZ(2,"p",29),e._uU(3,"Vetting"),e.qZA())}function Qe(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1,"."),e.qZA(),e.TgZ(2,"p",29),e._uU(3,"Booking"),e.qZA())}function Xe(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1,"."),e.qZA(),e.TgZ(2,"p",29),e._uU(3,"Pre-procedure"),e.qZA())}function Je(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1,"."),e.qZA(),e.TgZ(2,"p",29),e._uU(3,"Intra-procedure"),e.qZA())}function et(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1,"."),e.qZA(),e.TgZ(2,"p",29),e._uU(3,"Post-procedure"),e.qZA())}function tt(n,s){1&n&&(e.TgZ(0,"div",30)(1,"a",31),e._uU(2,"Action"),e.qZA(),e.TgZ(3,"a",31),e._uU(4,"Another action"),e.qZA(),e.TgZ(5,"a",31),e._uU(6,"Something else"),e.qZA()())}function nt(n,s){1&n&&(e.TgZ(0,"div",30)(1,"a",31),e._uU(2,"Action"),e.qZA(),e.TgZ(3,"a",31),e._uU(4,"Another action"),e.qZA(),e.TgZ(5,"a",31),e._uU(6,"Something else"),e.qZA()())}let it=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-all-procedures"]],decls:86,vars:13,consts:[[3,"linear"],["cdkStepper",""],[3,"stepControl","optional"],["cdkStepLabel",""],["stepOne",""],["stepTwo",""],["stepThree",""],[3,"stepControl","optional","state"],["stepFour",""],["stepFive",""],[1,"cards","me-2",2,"position","relative","bottom","19% !important","border","1px solid #F9F7FD","background","#F9F7FD","left","0.6rem","width","100%","left","0% !important","right","0% !important","height","79px !important","border-radius","10 !important","padding","10px 0px !important"],[1,"d-flex","flex-row","justify-content-around","align-items-center","p-2"],[1,"me-1"],[1,"mb-2"],[1,"mb-1"],["src","assets/images/edit_svg.svg",1,"ms-1"],[1,"form-selects",2,"font-size","9px !important"],["value","Select Status","selected",""],["value","requested"],["value","in-vetting"],["value","vetted"],["value","in-protocoling"],["dropdown","",1,"dropdown","float-end"],["type","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false","dropdownToggle","",1,"btn","btn-primary","dropdown-toggle",2,"background","none !important","padding","0px !important","border","none !important"],["src","assets/images/procedure_alert.svg"],["class","dropdown-menu dropdown-menu-end",4,"dropdownMenu"],["type","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false","dropdownToggle","",1,"btn","btn-primary","dropdown-toggle"],[1,"bx","bxs-cog","align-middle","me-1"],[1,"step-bullet"],[1,"step-title"],[1,"dropdown-menu","dropdown-menu-end"],["href","javascript: void(0);",1,"dropdown-item"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div")(1,"ng-stepper",0,1)(3,"cdk-step",2),e.YNc(4,ze,4,0,"ng-template",3),e._UZ(5,"app-procedure-details",null,4),e.qZA(),e.TgZ(7,"cdk-step",2),e.YNc(8,Qe,4,0,"ng-template",3),e._UZ(9,"app-procedure-details",null,5),e.qZA(),e.TgZ(11,"cdk-step",2),e.YNc(12,Xe,4,0,"ng-template",3),e._UZ(13,"app-procedure-details",null,6),e.qZA(),e.TgZ(15,"cdk-step",7),e.YNc(16,Je,4,0,"ng-template",3),e._UZ(17,"app-procedure-details",null,8),e.qZA(),e.TgZ(19,"cdk-step",7),e.YNc(20,et,4,0,"ng-template",3),e._UZ(21,"app-procedure-details",null,9),e.qZA()()(),e.TgZ(23,"div",10)(24,"div",11)(25,"div",12)(26,"h4",13),e._uU(27,"Accession No"),e.qZA(),e.TgZ(28,"p",14),e._uU(29,"NGH123456"),e.qZA()(),e.TgZ(30,"div",12)(31,"h4",13),e._uU(32,"Procedure Code"),e.qZA(),e.TgZ(33,"p",14),e._uU(34,"CT-Brain"),e.qZA()(),e.TgZ(35,"div",12)(36,"h4",13),e._uU(37,"Modality Code"),e.qZA(),e.TgZ(38,"p",14),e._uU(39,"CT-Oncology"),e.qZA()(),e.TgZ(40,"div",12)(41,"h4",13),e._uU(42,"Procedure Status"),e.qZA(),e.TgZ(43,"p",14),e._uU(44,"Requested"),e.qZA()(),e.TgZ(45,"div",12)(46,"h4",13),e._uU(47,"Procedure Sub Status"),e._UZ(48,"img",15),e.qZA(),e.TgZ(49,"select",16)(50,"option",17),e._uU(51,"Select Status"),e.qZA(),e.TgZ(52,"option",18),e._uU(53,"Requested"),e.qZA(),e.TgZ(54,"option",19),e._uU(55,"In-Vetting"),e.qZA(),e.TgZ(56,"option",20),e._uU(57,"Vetted"),e.qZA(),e.TgZ(58,"option",21),e._uU(59,"In-Protocoling"),e.qZA()()(),e.TgZ(60,"div",12)(61,"h4",13),e._uU(62,"Priority Scoring"),e._UZ(63,"img",15),e.qZA(),e.TgZ(64,"select",16)(65,"option",17),e._uU(66,"Select Status"),e.qZA(),e.TgZ(67,"option",18),e._uU(68,"Requested"),e.qZA(),e.TgZ(69,"option",19),e._uU(70,"In-Vetting"),e.qZA(),e.TgZ(71,"option",20),e._uU(72,"Vetted"),e.qZA(),e.TgZ(73,"option",21),e._uU(74,"In-Protocoling"),e.qZA()()(),e.TgZ(75,"div",12)(76,"div",22)(77,"button",23),e._UZ(78,"img",24),e.qZA(),e.YNc(79,tt,7,0,"div",25),e.qZA()(),e.TgZ(80,"div",12)(81,"div",22)(82,"button",26),e._UZ(83,"i",27),e._uU(84," Setting "),e.qZA(),e.YNc(85,nt,7,0,"div",25),e.qZA()()()()),2&i){const r=e.MAs(6),c=e.MAs(10),d=e.MAs(14),f=e.MAs(18),u=e.MAs(22);e.xp6(1),e.Q6J("linear",!0),e.xp6(2),e.Q6J("stepControl",r.stepOneForm)("optional",!1),e.xp6(4),e.Q6J("stepControl",c.stepTwoForm)("optional",!0),e.xp6(4),e.Q6J("stepControl",d.stepThreeForm)("optional",!1),e.xp6(4),e.Q6J("stepControl",f.stepFourForm)("optional",!0)("state",f.state),e.xp6(4),e.Q6J("stepControl",u.stepFiveForm)("optional",!0)("state",u.state)}},dependencies:[y.Hz,y.Mq,y.TO,Ye,Z,R,$e],styles:[".start-0[_ngcontent-%COMP%]{left:0%!important}.start-20[_ngcontent-%COMP%]{left:20%!important}.start-40[_ngcontent-%COMP%]{left:40%!important}.start-60[_ngcontent-%COMP%]{left:60%!important}.start-80[_ngcontent-%COMP%]{left:80%!important}  .step.active .step-bullet{z-index:1!important;color:#e45112!important;border:.2rem solid #E45112!important}  .step.active{background-color:#fff!important}  .step.completed .step-bullet{border:.2rem solid #594585!important;z-index:1!important;color:#594585!important}.step-bullet[_ngcontent-%COMP%]{z-index:1!important}  .stepper-header{padding-top:20px}  .step{width:20.33%!important;left:0%!important;padding:0!important}  .step:after{z-index:auto!important}  .stepper-body{margin:110px 0 0!important}  .step.completed+.step:after{background-color:#594585!important}  ol{padding:0!important}  .main-content .content{padding:0!important;margin-top:0!important}option[_ngcontent-%COMP%]{font-size:9px!important}.step-bullet[_ngcontent-%COMP%]{background:#fff!important;border:1px solid #000!important;color:#000!important;height:20px!important;width:20px!important;padding-bottom:12px!important}"]})}return n})(),st=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-procedure-status"]],decls:1,vars:0,template:function(i,o){1&i&&e._UZ(0,"app-all-procedures")},dependencies:[it]})}return n})();function ot(n,s){if(1&n&&(e.TgZ(0,"div",28)(1,"div",29)(2,"div",30),e._UZ(3,"input",31),e.TgZ(4,"label",32),e._uU(5,"\xa0"),e.qZA()()(),e.TgZ(6,"div",33)(7,"div",34)(8,"p",35),e._uU(9),e.qZA()(),e.TgZ(10,"div",36)(11,"h4",37),e._uU(12),e.qZA(),e.TgZ(13,"h4",37),e._uU(14),e.qZA(),e.TgZ(15,"h4",37),e._uU(16),e.qZA(),e.TgZ(17,"h4",38),e._uU(18),e.qZA()()()()),2&n){const t=s.$implicit;e.xp6(9),e.Oqu(t.procedue_name),e.xp6(3),e.hij("MRN:",t.id," |"),e.xp6(2),e.hij("",t.gender," |"),e.xp6(2),e.hij("",t.patient_type," |"),e.xp6(2),e.Oqu(t.procedue_status)}}const rt=function(){return{withTimepicker:!0,rangeInputFormat:"MMMM Do YYYY, h:mm:ss a",dateInputFormat:"MMMM Do YYYY, h:mm:ss a"}},ct=[{path:"",component:(()=>{class n{constructor(t){this.http=t}ngOnInit(){this.http.get("assets/json/mini-list.json").subscribe(t=>{this.miniList_details=t})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(j.eN))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-work-area"]],decls:43,vars:3,consts:[[1,"row"],[1,"col-lg-3","mb-2",2,"padding","0px 4px !important","width","316px !important","height","765px !important"],[1,"cards",2,"height","765px","overflow-y","scroll","overflow-x","hidden","width","316px"],[1,"d-flex","justify-content-start","align-items-center","mb-3"],["src","assets/images/back_arrow.svg",1,"me-2"],[1,"d-flex","align-items-center","mb-3"],[1,"position-relative"],["id","idType","aria-label","Default select example",1,"form-select",2,"width","134px !important","height","29px !important"],["value","all"],["value","Freelance"],["value","Full Time"],["value","Part Time"],["value","Internship"],[1,""],["type","text","placeholder","Select Date","bsDaterangepicker","",1,"form-control","ms-2",2,"width","142px !important",3,"bsConfig"],[1,"search-box","mb-3"],["src","assets/images/magnifying_glass.svg",1,"searchs-icon"],["type","text","placeholder","Search...",1,"form-control","rounded","bg-light","border-light"],["class","d-flex mb-2",4,"ngFor","ngForOf"],[1,"card-footer"],[1,"mt-2"],[1,"d-flex","justify-content-between"],["type","button",1,"btn-new","me-2",2,"background","#F3F4F8 !important","color","#000 !important"],["type","button",1,"btn-new"],[1,"col-lg-6","mb-2",2,"padding","0px 12px 0px 15px !important","width","65% !important","height","765px !important"],[1,"cards",2,"height","765px","overflow-y","scroll","overflow-x","hidden"],[1,"col-lg-3",2,"width","316px !important"],[1,"cards"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","align-self-center"],[1,"form-check","font-size-16"],["id","customCheck","type","checkbox",1,"form-check-input"],["for","customCheck",1,"form-check-label"],[1,"flex-grow-1","align-self-center"],[1,"text-muted"],[1,"mb-2"],[1,"d-flex","flex-row"],[1,"me-2"],[1,"me-2",2,"color","#855EDB"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.TgZ(5,"h1"),e._uU(6,"Back"),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6)(9,"select",7)(10,"option",8),e._uU(11,"Select Status"),e.qZA(),e.TgZ(12,"option",9),e._uU(13,"Vetting"),e.qZA(),e.TgZ(14,"option",10),e._uU(15,"Booking"),e.qZA(),e.TgZ(16,"option",11),e._uU(17,"Pre Procedure"),e.qZA(),e.TgZ(18,"option",12),e._uU(19,"Intra Procedure"),e.qZA(),e.TgZ(20,"option",12),e._uU(21,"Post Procedure"),e.qZA()()(),e.TgZ(22,"div",13),e._UZ(23,"input",14),e.qZA()(),e.TgZ(24,"div",15)(25,"div",6),e._UZ(26,"img",16)(27,"input",17),e.qZA()(),e.YNc(28,ot,19,5,"div",18),e.TgZ(29,"div",19)(30,"h4",20),e._uU(31,"Patient Seleced: 0"),e.qZA(),e.TgZ(32,"div",21)(33,"button",22),e._uU(34,"Cancel"),e.qZA(),e.TgZ(35,"button",23),e._uU(36,"Group"),e.qZA()()()()(),e.TgZ(37,"div",24)(38,"div",25),e._UZ(39,"app-procedure-status"),e.qZA()(),e.TgZ(40,"div",26)(41,"div",27),e._uU(42,"Hi"),e.qZA()()()),2&i&&(e.xp6(23),e.Q6J("bsConfig",e.DdM(2,rt)),e.xp6(5),e.Q6J("ngForOf",o.miniList_details))},dependencies:[p.sg,T.FR,T.TB,st],styles:[".searchs-icon[_ngcontent-%COMP%]{position:absolute;left:13px;top:8px;line-height:38px}.card-footer[_ngcontent-%COMP%]{border-top:1px solid #ECECEC;position:absolute;bottom:10px}"]})}return n})()}];let at=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[O.Bz.forChild(ct),O.Bz]})}return n})(),lt=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.ez,at,T.kn.forRoot(),y.mr.forRoot(),Ge,U]})}return n})()}}]);