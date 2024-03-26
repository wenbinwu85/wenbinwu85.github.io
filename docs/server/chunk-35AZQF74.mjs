import './polyfills.server.mjs';
import{D as ue,Q as fe,U as xe,V as be,aa as k,p as me,w as ge}from"./chunk-PGBDV42O.mjs";import{S as U,T as K,V as y,W as w,Y as X,c as he}from"./chunk-M4BOR6LG.mjs";import{$ as C,$b as q,A as u,Aa as ee,Ba as l,Cb as g,Db as b,Dc as v,Eb as se,Ec as ce,G,Ha as N,Ib as re,Mb as z,Nb as de,Ob as Q,Pb as p,Rb as le,S as W,Sb as pe,Tb as L,Ub as B,_b as P,a as A,ab as E,ba as h,bb as o,db as te,f as S,ia as m,j as Y,ja as H,ka as D,la as f,lb as ie,mb as ne,nb as x,rb as R,sa as F,sb as V,ta as j,tb as T,ua as O,ub as ae,va as Z,vb as M,wc as _,xa as J,yb as oe,z as $}from"./chunk-3SQ4IWRA.mjs";var _e=new h("CdkAccordion");var Se=0,ve=(()=>{let t=class t{get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(e,i,n){this.accordion=e,this._changeDetectorRef=i,this._expansionDispatcher=n,this._openCloseAllSubscription=A.EMPTY,this.closed=new l,this.opened=new l,this.destroyed=new l,this.expandedChange=new l,this.id=`cdk-accordion-child-${Se++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen((s,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==s&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}};t.\u0275fac=function(i){return new(i||t)(o(_e,12),o(_),o(k))},t.\u0275dir=f({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[m.HasDecoratorInputTransform,"expanded","expanded",v],disabled:[m.HasDecoratorInputTransform,"disabled","disabled",v]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[P([{provide:_e,useValue:void 0}]),x]});let a=t;return a})(),ye=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=D({type:t}),t.\u0275inj=C({});let a=t;return a})();var je=["body"],Oe=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Ne=["mat-expansion-panel-header","*","mat-action-row"];function Re(a,t){}var Ve=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ze=["mat-panel-title","mat-panel-description","*"];function Qe(a,t){if(a&1&&(g(0,"span",1),Z(),g(1,"svg",2),se(2,"path",3),b()()),a&2){let Te=de();T("@indicatorRotate",Te._getExpandedState())}}var we=new h("MAT_ACCORDION"),Ie="225ms cubic-bezier(0.4,0.0,0.2,1)",Ce={indicatorRotate:U("indicatorRotate",[w("collapsed, void",y({transform:"rotate(0deg)"})),w("expanded",y({transform:"rotate(180deg)"})),X("expanded <=> collapsed, void => collapsed",K(Ie))]),bodyExpansion:U("bodyExpansion",[w("collapsed, void",y({height:"0px",visibility:"hidden"})),w("expanded",y({height:"*",visibility:""})),X("expanded <=> collapsed, void => collapsed",K(Ie))])},De=new h("MAT_EXPANSION_PANEL"),Le=(()=>{let t=class t{constructor(e,i){this._template=e,this._expansionPanel=i}};t.\u0275fac=function(i){return new(i||t)(o(te),o(De,8))},t.\u0275dir=f({type:t,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0});let a=t;return a})(),Be=0,Ee=new h("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),qe=(()=>{let t=class t extends ve{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,i,n,s,r,d,I){super(e,i,n),this._viewContainerRef=s,this._animationMode=d,this._hideToggle=!1,this.afterExpand=new l,this.afterCollapse=new l,this._inputChanges=new S,this._headerId=`mat-expansion-panel-header-${Be++}`,this.accordion=e,this._document=r,this._animationsDisabled=d==="NoopAnimations",I&&(this.hideToggle=I.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(W(null),u(()=>this.expanded&&!this._portal),G(1)).subscribe(()=>{this._portal=new fe(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_animationStarted(e){!Ae(e)&&!this._animationsDisabled&&this._body&&this._body?.nativeElement.setAttribute("inert","")}_animationDone(e){Ae(e)||(e.toState==="expanded"?this.afterExpand.emit():e.toState==="collapsed"&&this.afterCollapse.emit(),!this._animationsDisabled&&this._body&&this._body.nativeElement.removeAttribute("inert"))}};t.\u0275fac=function(i){return new(i||t)(o(we,12),o(_),o(k),o(ie),o(he),o(N,8),o(Ee,8))},t.\u0275cmp=H({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,n,s){if(i&1&&le(s,Le,5),i&2){let r;L(r=B())&&(n._lazyContent=r.first)}},viewQuery:function(i,n){if(i&1&&pe(je,5),i&2){let s;L(s=B())&&(n._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(i,n){i&2&&M("mat-expanded",n.expanded)("_mat-animation-noopable",n._animationsDisabled)("mat-expansion-panel-spacing",n._hasSpacing())},inputs:{hideToggle:[m.HasDecoratorInputTransform,"hideToggle","hideToggle",v],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[P([{provide:we,useValue:void 0},{provide:De,useExisting:t}]),x,ne,F,q],ngContentSelectors:Ne,decls:7,vars:4,consts:[["body",""],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,n){if(i&1){let s=re();Q(Oe),p(0),g(1,"div",1,0),z("@bodyExpansion.start",function(d){return j(s),O(n._animationStarted(d))})("@bodyExpansion.done",function(d){return j(s),O(n._animationDone(d))}),g(3,"div",2),p(4,1),R(5,Re,0,0,"ng-template",3),b(),p(6,2),b()}i&2&&(E(),T("@bodyExpansion",n._getExpandedState())("id",n.id),V("aria-labelledby",n._headerId),E(4),T("cdkPortalOutlet",n._portal))},dependencies:[xe],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[Ce.bodyExpansion]},changeDetection:0});let a=t;return a})();function Ae(a){return a.fromState==="void"}var Mt=(()=>{let t=class t{constructor(e,i,n,s,r,d,I){this.panel=e,this._element=i,this._focusMonitor=n,this._changeDetectorRef=s,this._animationMode=d,this._parentChangeSubscription=A.EMPTY,this.tabIndex=0;let Me=e.accordion?e.accordion._stateChanges.pipe(u(c=>!!(c.hideToggle||c.togglePosition))):Y;this.tabIndex=parseInt(I||"")||0,this._parentChangeSubscription=$(e.opened,e.closed,Me,e._inputChanges.pipe(u(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(u(()=>e._containsFocus())).subscribe(()=>n.focusVia(i,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:me(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};t.\u0275fac=function(i){return new(i||t)(o(qe,1),o(ee),o(ge),o(_),o(Ee,8),o(N,8),J("tabindex"))},t.\u0275cmp=H({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(i,n){i&1&&z("click",function(){return n._toggle()})("keydown",function(r){return n._keydown(r)}),i&2&&(V("id",n.panel._headerId)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n._getPanelId())("aria-expanded",n._isExpanded())("aria-disabled",n.panel.disabled),ae("height",n._getHeaderHeight()),M("mat-expanded",n._isExpanded())("mat-expansion-toggle-indicator-after",n._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",n._getTogglePosition()==="before")("_mat-animation-noopable",n._animationMode==="NoopAnimations"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[m.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:ce(e)]},standalone:!0,features:[x,q],ngContentSelectors:ze,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,n){i&1&&(Q(Ve),g(0,"span",0),p(1),p(2,1),p(3,2),b(),R(4,Qe,3,1,"span",1)),i&2&&(M("mat-content-hide-toggle",!n._showToggle()),E(4),oe(4,n._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[Ce.indicatorRotate]},changeDetection:0});let a=t;return a})();var Pt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=f({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0});let a=t;return a})();var kt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=D({type:t}),t.\u0275inj=C({imports:[ue,ye,be]});let a=t;return a})();export{qe as a,Mt as b,Pt as c,kt as d};
