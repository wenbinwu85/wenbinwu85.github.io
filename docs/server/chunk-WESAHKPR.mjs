import './polyfills.server.mjs';
import{a as Tt}from"./chunk-RRGOAQAW.mjs";import{P as Dt,Q as yt,R as Ct,S as Mt,T as At,U as kt,V as It,W as xt,X as Pt,Y as Ot,Z as Y,ga as Et,k as wt,m as bt}from"./chunk-FCOPVCRT.mjs";import{B as _t,C as St,D as vt,s as ft,w as gt}from"./chunk-W4WGLCFH.mjs";import{Q as S,R as f,T as n,U as m,V as k,W as p,X as pt,Y as ut,n as dt,r as lt,s as ht,t as mt}from"./chunk-JMN56CJB.mjs";import{$ as K,$a as s,Eb as c,Ec as A,Fb as d,Gb as v,Kb as nt,Ob as y,Pb as I,Qb as at,Rb as st,Va as it,Yb as g,Zb as x,_ as U,_a as a,_b as P,ba as q,bc as C,dc as w,f as H,fa as W,ga as X,gc as M,h as G,hc as B,ia as D,ic as z,ja as J,ka as Q,ob as N,qa as Z,ra as R,sa as F,sb as rt,tb as V,ub as h,wb as j,xc as ct,ya as tt,z as $,za as et,zb as ot}from"./chunk-MKZXB7FZ.mjs";var Vt=["mat-sort-header",""],jt=["*"];function Bt(o,e){if(o&1){let l=nt();c(0,"div",2),y("@arrowPosition.start",function(){R(l);let i=I();return F(i._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){R(l);let i=I();return F(i._disableViewStateAnimation=!1)}),v(1,"div",3),c(2,"div",4),v(3,"div",5)(4,"div",6)(5,"div",7),d()()}if(o&2){let l=I();h("@arrowOpacity",l._getArrowViewState())("@arrowPosition",l._getArrowViewState())("@allowChildren",l._getArrowDirectionState()),a(2),h("@indicator",l._getArrowDirectionState()),a(),h("@leftPointer",l._getArrowDirectionState()),a(),h("@rightPointer",l._getArrowDirectionState())}}var Ht=new q("MAT_SORT_DEFAULT_OPTIONS"),zt=(()=>{let e=class e{get direction(){return this._direction}set direction(t){this._direction=t}constructor(t){this._defaultOptions=t,this._initializedStream=new G(1),this.sortables=new Map,this._stateChanges=new H,this.start="asc",this._direction="",this.disabled=!1,this.sortChange=new et,this.initialized=this._initializedStream}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let i=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=Yt(t.start||this.start,i),u=r.indexOf(this.direction)+1;return u>=r.length&&(u=0),r[u]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}};e.\u0275fac=function(i){return new(i||e)(s(Ht,8))},e.\u0275dir=Q({type:e,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",A],disabled:[2,"matSortDisabled","disabled",A]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],standalone:!0,features:[N,Z]});let o=e;return o})();function Yt(o,e){let l=["asc","desc"];return o=="desc"&&l.reverse(),e||l.push(""),l}var _=St.ENTERING+" "+_t.STANDARD_CURVE,b={indicator:S("indicator",[m("active-asc, asc",n({transform:"translateY(0px)"})),m("active-desc, desc",n({transform:"translateY(10px)"})),p("active-asc <=> active-desc",f(_))]),leftPointer:S("leftPointer",[m("active-asc, asc",n({transform:"rotate(-45deg)"})),m("active-desc, desc",n({transform:"rotate(45deg)"})),p("active-asc <=> active-desc",f(_))]),rightPointer:S("rightPointer",[m("active-asc, asc",n({transform:"rotate(45deg)"})),m("active-desc, desc",n({transform:"rotate(-45deg)"})),p("active-asc <=> active-desc",f(_))]),arrowOpacity:S("arrowOpacity",[m("desc-to-active, asc-to-active, active",n({opacity:1})),m("desc-to-hint, asc-to-hint, hint",n({opacity:.54})),m("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",n({opacity:0})),p("* => asc, * => desc, * => active, * => hint, * => void",f("0ms")),p("* <=> *",f(_))]),arrowPosition:S("arrowPosition",[p("* => desc-to-hint, * => desc-to-active",f(_,k([n({transform:"translateY(-25%)"}),n({transform:"translateY(0)"})]))),p("* => hint-to-desc, * => active-to-desc",f(_,k([n({transform:"translateY(0)"}),n({transform:"translateY(25%)"})]))),p("* => asc-to-hint, * => asc-to-active",f(_,k([n({transform:"translateY(25%)"}),n({transform:"translateY(0)"})]))),p("* => hint-to-asc, * => active-to-asc",f(_,k([n({transform:"translateY(0)"}),n({transform:"translateY(-25%)"})]))),m("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",n({transform:"translateY(0)"})),m("hint-to-desc, active-to-desc, desc",n({transform:"translateY(-25%)"})),m("hint-to-asc, active-to-asc, asc",n({transform:"translateY(25%)"}))]),allowChildren:S("allowChildren",[p("* <=> *",[ut("@*",pt(),{optional:!0})])])},O=(()=>{let e=class e{constructor(){this.changes=new H}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=U({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function Lt(o){return o||new O}var Gt={provide:O,deps:[[new W,new X,O]],useFactory:Lt},de=(()=>{let e=class e{get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}constructor(t,i,r,u,T,Rt,Ft,L){this._intl=t,this._changeDetectorRef=i,this._sort=r,this._columnDef=u,this._focusMonitor=T,this._elementRef=Rt,this._ariaDescriber=Ft,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this.disabled=!1,this._sortActionDescription="Sort",L?.arrowPosition&&(this.arrowPosition=L?.arrowPosition),this._handleStateChanges()}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=!!t;i!==this._showIndicatorHint&&(this._setIndicatorHintVisible(i),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_setIndicatorHintVisible(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._showIndicatorHint?this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"hint"}):this._setAnimationTransitionState({fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(t){this._viewState=t||{},this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}_toggleOnInteraction(){this._sort.sort(this),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(t){!this._isDisabled()&&(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){let t=this._viewState.fromState;return(t?`${t}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}_handleStateChanges(){this._rerenderSubscription=$(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&this._viewState.toState==="active"&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}};e.\u0275fac=function(i){return new(i||e)(s(O),s(ct),s(zt,8),s("MAT_SORT_HEADER_COLUMN_DEF",8),s(gt),s(tt),s(ft,8),s(Ht,8))},e.\u0275cmp=D({type:e,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(i,r){i&1&&y("click",function(){return r._handleClick()})("keydown",function(T){return r._handleKeydown(T)})("mouseenter",function(){return r._setIndicatorHintVisible(!0)})("mouseleave",function(){return r._setIndicatorHintVisible(!1)}),i&2&&(V("aria-sort",r._getAriaSortAttribute()),j("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",A],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",A]},exportAs:["matSortHeader"],standalone:!0,features:[N,C],attrs:Vt,ngContentSelectors:jt,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(i,r){i&1&&(at(),c(0,"div",0)(1,"div",1),st(2),d(),rt(3,Bt,6,6,"div",2),d()),i&2&&(j("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before"),V("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),a(3),ot(r._renderArrow()?3:-1))},styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[b.indicator,b.leftPointer,b.rightPointer,b.arrowOpacity,b.arrowPosition,b.allowChildren]},changeDetection:0});let o=e;return o})(),le=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=J({type:e}),e.\u0275inj=K({providers:[Gt],imports:[vt]});let o=e;return o})();var $t=o=>({"border-left":o}),E=o=>({color:o}),Me=(()=>{let e=class e{constructor(t,i){this.dialog=t,this.helperService=i,this.price=0,this.borderLeftStyle=""}ngOnInit(){let t=this.helperService.getPriceKeyPrefix();this.price=this.stock[t+"Price"],this.borderLeftStyle="0.3rem solid "+(this.stock.unrealizedGain>0?"teal":"chocolate")}getLogoSource(t){return`/assets/ticker-logos/${t.symbol}.png`}getColor(){return this.helperService.getStockPriceColor(this.stock.symbol)}openInfoSheet(){this.dialog.open(Ut,{height:"100%",minWidth:"100%",closeOnNavigation:!0,data:{symbol:this.stock.symbol}}).afterClosed().subscribe(i=>{console.log(`Dialog result: ${i}`)})}};e.\u0275fac=function(i){return new(i||e)(s(It),s(Tt))},e.\u0275cmp=D({type:e,selectors:[["stock-name-card"]],inputs:{stock:"stock"},standalone:!0,features:[C],decls:24,vars:32,consts:[[1,"container",3,"click","ngStyle"],["alt","Logo","width","auto","height","35",1,"stock-logo",3,"src"],[1,"symbol-container"],[1,"stock-symbol"],[1,"stock-price",3,"ngStyle"],[3,"ngStyle"],[1,"stock-name"],[1,"expand-section"]],template:function(i,r){i&1&&(c(0,"mat-card",0),y("click",function(){return r.openInfoSheet()}),v(1,"img",1),c(2,"div",2)(3,"mat-card-title",3)(4,"span")(5,"b"),g(6),d()(),c(7,"span",4),g(8),M(9,"currency"),d(),c(10,"mat-card-subtitle",5),g(11),M(12,"percent"),d()(),c(13,"mat-card-subtitle",6),g(14),d()(),c(15,"div",7)(16,"mat-card-subtitle"),g(17,"P/L:"),d(),c(18,"mat-card-subtitle",5),g(19),M(20,"currency"),d(),c(21,"mat-card-subtitle",5),g(22),M(23,"percent"),d()()()),i&2&&(h("ngStyle",w(22,$t,r.borderLeftStyle)),a(),h("src",r.getLogoSource(r.stock),it),a(5),x(r.stock==null?null:r.stock.symbol),a(),h("ngStyle",w(24,E,r.stock.regularMarketChange>0?"teal":"chocolate")),a(),x(B(9,12,r.price)),a(2),h("ngStyle",w(26,E,r.stock.regularMarketChange>0?"teal":"chocolate")),a(),P(" (",z(12,14,r.stock.regularMarketChangePercent,".2"),") "),a(3),x(r.stock==null?null:r.stock.shortName),a(4),h("ngStyle",w(28,E,r.stock.unrealizedGain>0?"teal":"chocolate")),a(),P(" ",B(20,17,r.stock.unrealizedGain)," "),a(2),h("ngStyle",w(30,E,r.stock.unrealizedGain>0?"teal":"chocolate")),a(),P(" ",z(23,19,r.stock.unrealizedGainPercent,".2")," "))},dependencies:[mt,dt,lt,ht,Mt,Dt,Ct,yt,Y],styles:[".container[_ngcontent-%COMP%]{z-index:999;display:flex;flex-direction:row;align-items:center;padding:.5rem;overflow:hidden;height:auto;transition:height 1s;-webkit-transition:height 1s}.container[_ngcontent-%COMP%]   .expand-section[_ngcontent-%COMP%]{width:0;height:0;visibility:hidden}.container[_ngcontent-%COMP%]:hover{height:max-content}.container[_ngcontent-%COMP%]:hover   .expand-section[_ngcontent-%COMP%]{width:max-content;height:max-content;visibility:visible}.symbol-container[_ngcontent-%COMP%]{padding-left:.5rem;align-items:center}.stock-logo[_ngcontent-%COMP%]{border-radius:50%;border:1px solid slategrey}.stock-symbol[_ngcontent-%COMP%]{display:flex;font-size:1.5rem;align-items:center}.stock-price[_ngcontent-%COMP%], .price-change[_ngcontent-%COMP%]{margin-left:.5rem}.stock-price[_ngcontent-%COMP%]{color:teal}.stock-name[_ngcontent-%COMP%]{float:left;color:#708090}.mat-mdc-card[_ngcontent-%COMP%]{box-shadow:none}.expand-section[_ngcontent-%COMP%]{margin-left:.5rem;padding:.5rem;display:flex;flex-direction:column;border-left:1px solid slategrey}"]});let o=e;return o})(),Ut=(()=>{let e=class e{constructor(t,i){this.data=t,this.dialogRef=i,this.dialogRef.updateSize("95%","90%")}};e.\u0275fac=function(i){return new(i||e)(s(kt),s(At))},e.\u0275cmp=D({type:e,selectors:[["info-sheet"]],standalone:!0,features:[C],decls:5,vars:1,consts:[["align","end"],["mat-button","","mat-dialog-close",""],[1,"mat-typography"],[3,"symbol"]],template:function(i,r){i&1&&(c(0,"mat-dialog-actions",0)(1,"button",1),g(2,"X"),d()(),c(3,"mat-dialog-content",2),v(4,"stock-data-sheet",3),d()),i&2&&(a(4),h("symbol",r.data.symbol))},dependencies:[Y,xt,Ot,Pt,bt,wt,Et],encapsulation:2});let o=e;return o})();export{zt as a,de as b,le as c,Me as d};
