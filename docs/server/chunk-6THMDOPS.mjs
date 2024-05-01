import './polyfills.server.mjs';
import{a as Ht}from"./chunk-VBBMXISZ.mjs";import{O as yt,P as Ct,Q as At,R as It,S as Mt,T as kt,U as xt,V as Pt,W as Ot,X as Tt,Y,fa as Et,j as bt,l as Dt}from"./chunk-C6KK3QUB.mjs";import{B as St,C as vt,D as wt,s as gt,w as _t}from"./chunk-GXGFO2CR.mjs";import{R as v,S as f,U as n,V as h,W as k,X as p,Y as ut,Z as ft,n as lt,r as ht,s as mt,t as pt}from"./chunk-4JV5C6TU.mjs";import{$ as q,Aa as et,Ba as it,Db as c,Dc as M,Eb as d,Fb as w,Jb as at,Nb as y,Ob as x,Pb as st,Qb as ct,Xa as rt,Xb as _,Yb as P,Zb as O,_ as K,ab as a,ac as C,ba as W,bb as s,cc as A,f as H,fa as X,fc as I,ga as J,gc as B,h as $,hc as z,ia as g,ja as D,ka as Q,la as Z,ob as N,sa as tt,sb as ot,ta as R,tb as V,ua as F,ub as m,wb as j,wc as dt,z as U,zb as nt}from"./chunk-QFAGU64M.mjs";var jt=["mat-sort-header",""],Bt=["*"];function zt(o,e){if(o&1){let l=at();c(0,"div",2),y("@arrowPosition.start",function(){R(l);let i=x();return F(i._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){R(l);let i=x();return F(i._disableViewStateAnimation=!1)}),w(1,"div",3),c(2,"div",4),w(3,"div",5)(4,"div",6)(5,"div",7),d()()}if(o&2){let l=x();m("@arrowOpacity",l._getArrowViewState())("@arrowPosition",l._getArrowViewState())("@allowChildren",l._getArrowDirectionState()),a(2),m("@indicator",l._getArrowDirectionState()),a(),m("@leftPointer",l._getArrowDirectionState()),a(),m("@rightPointer",l._getArrowDirectionState())}}var Rt=new W("MAT_SORT_DEFAULT_OPTIONS"),Yt=(()=>{let e=class e{get direction(){return this._direction}set direction(t){this._direction=t}constructor(t){this._defaultOptions=t,this._initializedStream=new $(1),this.sortables=new Map,this._stateChanges=new H,this.start="asc",this._direction="",this.disabled=!1,this.sortChange=new it,this.initialized=this._initializedStream}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let i=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=Lt(t.start||this.start,i),u=r.indexOf(this.direction)+1;return u>=r.length&&(u=0),r[u]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}};e.\u0275fac=function(i){return new(i||e)(s(Rt,8))},e.\u0275dir=Z({type:e,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[g.None,"matSortActive","active"],start:[g.None,"matSortStart","start"],direction:[g.None,"matSortDirection","direction"],disableClear:[g.HasDecoratorInputTransform,"matSortDisableClear","disableClear",M],disabled:[g.HasDecoratorInputTransform,"matSortDisabled","disabled",M]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],standalone:!0,features:[N,tt]});let o=e;return o})();function Lt(o,e){let l=["asc","desc"];return o=="desc"&&l.reverse(),e||l.push(""),l}var S=vt.ENTERING+" "+St.STANDARD_CURVE,b={indicator:v("indicator",[h("active-asc, asc",n({transform:"translateY(0px)"})),h("active-desc, desc",n({transform:"translateY(10px)"})),p("active-asc <=> active-desc",f(S))]),leftPointer:v("leftPointer",[h("active-asc, asc",n({transform:"rotate(-45deg)"})),h("active-desc, desc",n({transform:"rotate(45deg)"})),p("active-asc <=> active-desc",f(S))]),rightPointer:v("rightPointer",[h("active-asc, asc",n({transform:"rotate(45deg)"})),h("active-desc, desc",n({transform:"rotate(-45deg)"})),p("active-asc <=> active-desc",f(S))]),arrowOpacity:v("arrowOpacity",[h("desc-to-active, asc-to-active, active",n({opacity:1})),h("desc-to-hint, asc-to-hint, hint",n({opacity:.54})),h("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",n({opacity:0})),p("* => asc, * => desc, * => active, * => hint, * => void",f("0ms")),p("* <=> *",f(S))]),arrowPosition:v("arrowPosition",[p("* => desc-to-hint, * => desc-to-active",f(S,k([n({transform:"translateY(-25%)"}),n({transform:"translateY(0)"})]))),p("* => hint-to-desc, * => active-to-desc",f(S,k([n({transform:"translateY(0)"}),n({transform:"translateY(25%)"})]))),p("* => asc-to-hint, * => asc-to-active",f(S,k([n({transform:"translateY(25%)"}),n({transform:"translateY(0)"})]))),p("* => hint-to-asc, * => active-to-asc",f(S,k([n({transform:"translateY(0)"}),n({transform:"translateY(-25%)"})]))),h("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",n({transform:"translateY(0)"})),h("hint-to-desc, active-to-desc, desc",n({transform:"translateY(-25%)"})),h("hint-to-asc, active-to-asc, asc",n({transform:"translateY(25%)"}))]),allowChildren:v("allowChildren",[p("* <=> *",[ft("@*",ut(),{optional:!0})])])},T=(()=>{let e=class e{constructor(){this.changes=new H}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function Gt(o){return o||new T}var $t={provide:T,deps:[[new X,new J,T]],useFactory:Gt},le=(()=>{let e=class e{get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}constructor(t,i,r,u,E,Ft,Nt,G){this._intl=t,this._changeDetectorRef=i,this._sort=r,this._columnDef=u,this._focusMonitor=E,this._elementRef=Ft,this._ariaDescriber=Nt,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this.disabled=!1,this._sortActionDescription="Sort",G?.arrowPosition&&(this.arrowPosition=G?.arrowPosition),this._handleStateChanges()}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=!!t;i!==this._showIndicatorHint&&(this._setIndicatorHintVisible(i),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_setIndicatorHintVisible(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._showIndicatorHint?this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"hint"}):this._setAnimationTransitionState({fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(t){this._viewState=t||{},this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}_toggleOnInteraction(){this._sort.sort(this),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(t){!this._isDisabled()&&(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){let t=this._viewState.fromState;return(t?`${t}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}_handleStateChanges(){this._rerenderSubscription=U(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&this._viewState.toState==="active"&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}};e.\u0275fac=function(i){return new(i||e)(s(T),s(dt),s(Yt,8),s("MAT_SORT_HEADER_COLUMN_DEF",8),s(_t),s(et),s(gt,8),s(Rt,8))},e.\u0275cmp=D({type:e,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(i,r){i&1&&y("click",function(){return r._handleClick()})("keydown",function(E){return r._handleKeydown(E)})("mouseenter",function(){return r._setIndicatorHintVisible(!0)})("mouseleave",function(){return r._setIndicatorHintVisible(!1)}),i&2&&(V("aria-sort",r._getAriaSortAttribute()),j("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[g.None,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[g.HasDecoratorInputTransform,"disabled","disabled",M],sortActionDescription:"sortActionDescription",disableClear:[g.HasDecoratorInputTransform,"disableClear","disableClear",M]},exportAs:["matSortHeader"],standalone:!0,features:[N,C],attrs:jt,ngContentSelectors:Bt,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(i,r){i&1&&(st(),c(0,"div",0)(1,"div",1),ct(2),d(),ot(3,zt,6,6,"div",2),d()),i&2&&(j("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before"),V("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),a(3),nt(3,r._renderArrow()?3:-1))},styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[b.indicator,b.leftPointer,b.rightPointer,b.arrowOpacity,b.arrowPosition,b.allowChildren]},changeDetection:0});let o=e;return o})(),he=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=q({providers:[$t],imports:[wt]});let o=e;return o})();var Ut=o=>({"border-left":o}),L=o=>({color:o}),Ie=(()=>{let e=class e{constructor(t,i){this.dialog=t,this.helperService=i,this.price=0,this.borderLeftStyle=""}ngOnInit(){let t=this.helperService.getPriceKeyPrefix();this.price=this.stock[t+"Price"],this.borderLeftStyle="0.3rem solid "+(this.stock.unrealizedGain>0?"teal":"chocolate")}getLogoSource(t){return`/assets/ticker-logos/${t.symbol}.png`}getColor(){return this.helperService.getStockPriceColor(this.stock.symbol)}openInfoSheet(){this.dialog.open(Kt,{height:"100%",minWidth:"100%",closeOnNavigation:!0,data:{symbol:this.stock.symbol}}).afterClosed().subscribe(i=>{console.log(`Dialog result: ${i}`)})}};e.\u0275fac=function(i){return new(i||e)(s(xt),s(Ht))},e.\u0275cmp=D({type:e,selectors:[["stock-name-card"]],inputs:{stock:"stock"},standalone:!0,features:[C],decls:24,vars:29,consts:[[1,"container",3,"click","ngStyle"],["alt","Logo","width","auto","height","35",1,"stock-logo",3,"src"],[1,"symbol-container"],[1,"stock-symbol"],[1,"stock-price"],[3,"ngStyle"],[1,"stock-name"],[1,"expand-section"]],template:function(i,r){i&1&&(c(0,"mat-card",0),y("click",function(){return r.openInfoSheet()}),w(1,"img",1),c(2,"div",2)(3,"mat-card-title",3)(4,"span")(5,"b"),_(6),d()(),c(7,"span",4),_(8),I(9,"currency"),d(),c(10,"mat-card-subtitle",5),_(11),I(12,"percent"),d()(),c(13,"mat-card-subtitle",6),_(14),d()(),c(15,"div",7)(16,"mat-card-subtitle"),_(17,"P/L:"),d(),c(18,"mat-card-subtitle",5),_(19),I(20,"currency"),d(),c(21,"mat-card-subtitle",5),_(22),I(23,"percent"),d()()()),i&2&&(m("ngStyle",A(21,Ut,r.borderLeftStyle)),a(),m("src",r.getLogoSource(r.stock),rt),a(5),P(r.stock==null?null:r.stock.symbol),a(2),P(B(9,11,r.price)),a(2),m("ngStyle",A(23,L,r.stock.regularMarketChange>0?"teal":"chocolate")),a(),O(" (",z(12,13,r.stock.regularMarketChangePercent,".2"),") "),a(3),P(r.stock==null?null:r.stock.shortName),a(4),m("ngStyle",A(25,L,r.stock.unrealizedGain>0?"teal":"chocolate")),a(),O(" ",B(20,16,r.stock.unrealizedGain)," "),a(2),m("ngStyle",A(27,L,r.stock.unrealizedGain>0?"teal":"chocolate")),a(),O(" ",z(23,18,r.stock.unrealizedGainPercent,".2")," "))},dependencies:[pt,lt,ht,mt,It,yt,At,Ct,Y],styles:[".container[_ngcontent-%COMP%]{z-index:999;display:flex;flex-direction:row;align-items:center;padding:.5rem;overflow:hidden;height:auto;transition:height 1s;-webkit-transition:height 1s}.container[_ngcontent-%COMP%]   .expand-section[_ngcontent-%COMP%]{width:0;height:0;visibility:hidden}.container[_ngcontent-%COMP%]:hover{height:max-content}.container[_ngcontent-%COMP%]:hover   .expand-section[_ngcontent-%COMP%]{width:max-content;height:max-content;visibility:visible}.symbol-container[_ngcontent-%COMP%]{padding-left:.5rem;align-items:center}.stock-logo[_ngcontent-%COMP%]{border-radius:50%;border:1px solid slategrey}.stock-symbol[_ngcontent-%COMP%]{display:flex;font-size:1.5rem;align-items:center}.stock-price[_ngcontent-%COMP%], .price-change[_ngcontent-%COMP%]{margin-left:.5rem}.stock-price[_ngcontent-%COMP%]{color:teal}.stock-name[_ngcontent-%COMP%]{float:left;color:#708090}.mat-mdc-card[_ngcontent-%COMP%]{box-shadow:none}.expand-section[_ngcontent-%COMP%]{margin-left:.5rem;padding:.5rem;display:flex;flex-direction:column;border-left:1px solid slategrey}"]});let o=e;return o})(),Kt=(()=>{let e=class e{constructor(t,i){this.data=t,this.dialogRef=i,this.dialogRef.updateSize("95%","90%")}};e.\u0275fac=function(i){return new(i||e)(s(kt),s(Mt))},e.\u0275cmp=D({type:e,selectors:[["info-sheet"]],standalone:!0,features:[C],decls:5,vars:1,consts:[["align","end"],["mat-button","","mat-dialog-close",""],[1,"mat-typography"],[3,"symbol"]],template:function(i,r){i&1&&(c(0,"mat-dialog-actions",0)(1,"button",1),_(2,"X"),d()(),c(3,"mat-dialog-content",2),w(4,"stock-data-sheet",3),d()),i&2&&(a(4),m("symbol",r.data.symbol))},dependencies:[Y,Pt,Tt,Ot,Dt,bt,Et],encapsulation:2});let o=e;return o})();export{Yt as a,le as b,he as c,Ie as d};
