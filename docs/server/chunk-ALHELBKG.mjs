import './polyfills.server.mjs';
import{N as kt,O as It,P as At,Q as Pt,R as xt,S as Ot,T as Tt,U as Et,V as Ht,W as Rt,X as K,ea as Nt,j as Ct,l as Mt}from"./chunk-XEXA2XN5.mjs";import{a as Ft}from"./chunk-GNV4Q6YA.mjs";import{B as bt,C as Dt,D as yt,s as vt,w as wt}from"./chunk-5JBXQGGX.mjs";import{S as w,T as g,V as n,W as h,X as P,Y as f,Z as _t,_ as St,n as pt,s as ut,t as ft,u as gt}from"./chunk-C6RPCFR6.mjs";import{$ as X,Aa as ot,Ba as nt,Db as c,Eb as d,Ec as A,Fb as b,Jb as dt,Nb as C,Ob as O,Pb as lt,Qb as ht,Xa as at,Xb as S,Yb as T,Zb as E,_ as x,ab as a,ac as M,ba as J,bb as s,cc as k,da as Q,f as N,fa as Z,fc as I,ga as tt,gc as Y,h as q,hc as G,ia as _,ja as y,ka as et,la as it,ob as B,sa as rt,sb as st,ta as j,tb as L,ua as V,ub as p,wb as z,xc as mt,z as W,zb as ct}from"./chunk-LIQVIPVH.mjs";var zt=["mat-sort-header",""],Yt=["*"];function Gt(r,e){if(r&1){let l=dt();c(0,"div",2),C("@arrowPosition.start",function(){j(l);let i=O();return V(i._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){j(l);let i=O();return V(i._disableViewStateAnimation=!1)}),b(1,"div",3),c(2,"div",4),b(3,"div",5)(4,"div",6)(5,"div",7),d()()}if(r&2){let l=O();p("@arrowOpacity",l._getArrowViewState())("@arrowPosition",l._getArrowViewState())("@allowChildren",l._getArrowDirectionState()),a(2),p("@indicator",l._getArrowDirectionState()),a(),p("@leftPointer",l._getArrowDirectionState()),a(),p("@rightPointer",l._getArrowDirectionState())}}var Vt=new J("MAT_SORT_DEFAULT_OPTIONS"),Kt=(()=>{let e=class e{get direction(){return this._direction}set direction(t){this._direction=t}constructor(t){this._defaultOptions=t,this._initializedStream=new q(1),this.sortables=new Map,this._stateChanges=new N,this.start="asc",this._direction="",this.disabled=!1,this.sortChange=new nt,this.initialized=this._initializedStream}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let i=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,o=$t(t.start||this.start,i),m=o.indexOf(this.direction)+1;return m>=o.length&&(m=0),o[m]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}};e.\u0275fac=function(i){return new(i||e)(s(Vt,8))},e.\u0275dir=it({type:e,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[_.None,"matSortActive","active"],start:[_.None,"matSortStart","start"],direction:[_.None,"matSortDirection","direction"],disableClear:[_.HasDecoratorInputTransform,"matSortDisableClear","disableClear",A],disabled:[_.HasDecoratorInputTransform,"matSortDisabled","disabled",A]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],standalone:!0,features:[B,rt]});let r=e;return r})();function $t(r,e){let l=["asc","desc"];return r=="desc"&&l.reverse(),e||l.push(""),l}var v=Dt.ENTERING+" "+bt.STANDARD_CURVE,D={indicator:w("indicator",[h("active-asc, asc",n({transform:"translateY(0px)"})),h("active-desc, desc",n({transform:"translateY(10px)"})),f("active-asc <=> active-desc",g(v))]),leftPointer:w("leftPointer",[h("active-asc, asc",n({transform:"rotate(-45deg)"})),h("active-desc, desc",n({transform:"rotate(45deg)"})),f("active-asc <=> active-desc",g(v))]),rightPointer:w("rightPointer",[h("active-asc, asc",n({transform:"rotate(45deg)"})),h("active-desc, desc",n({transform:"rotate(-45deg)"})),f("active-asc <=> active-desc",g(v))]),arrowOpacity:w("arrowOpacity",[h("desc-to-active, asc-to-active, active",n({opacity:1})),h("desc-to-hint, asc-to-hint, hint",n({opacity:.54})),h("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",n({opacity:0})),f("* => asc, * => desc, * => active, * => hint, * => void",g("0ms")),f("* <=> *",g(v))]),arrowPosition:w("arrowPosition",[f("* => desc-to-hint, * => desc-to-active",g(v,P([n({transform:"translateY(-25%)"}),n({transform:"translateY(0)"})]))),f("* => hint-to-desc, * => active-to-desc",g(v,P([n({transform:"translateY(0)"}),n({transform:"translateY(25%)"})]))),f("* => asc-to-hint, * => asc-to-active",g(v,P([n({transform:"translateY(25%)"}),n({transform:"translateY(0)"})]))),f("* => hint-to-asc, * => active-to-asc",g(v,P([n({transform:"translateY(0)"}),n({transform:"translateY(-25%)"})]))),h("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",n({transform:"translateY(0)"})),h("hint-to-desc, active-to-desc, desc",n({transform:"translateY(-25%)"})),h("hint-to-asc, active-to-asc, asc",n({transform:"translateY(25%)"}))]),allowChildren:w("allowChildren",[f("* <=> *",[St("@*",_t(),{optional:!0})])])},H=(()=>{let e=class e{constructor(){this.changes=new N}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function Ut(r){return r||new H}var qt={provide:H,deps:[[new Z,new tt,H]],useFactory:Ut},ue=(()=>{let e=class e{get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}constructor(t,i,o,m,u,F,Lt,U){this._intl=t,this._changeDetectorRef=i,this._sort=o,this._columnDef=m,this._focusMonitor=u,this._elementRef=F,this._ariaDescriber=Lt,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this.disabled=!1,this._sortActionDescription="Sort",U?.arrowPosition&&(this.arrowPosition=U?.arrowPosition),this._handleStateChanges()}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=!!t;i!==this._showIndicatorHint&&(this._setIndicatorHintVisible(i),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_setIndicatorHintVisible(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._showIndicatorHint?this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"hint"}):this._setAnimationTransitionState({fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(t){this._viewState=t||{},this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}_toggleOnInteraction(){this._sort.sort(this),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(t){!this._isDisabled()&&(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){let t=this._viewState.fromState;return(t?`${t}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}_handleStateChanges(){this._rerenderSubscription=W(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&this._viewState.toState==="active"&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}};e.\u0275fac=function(i){return new(i||e)(s(H),s(mt),s(Kt,8),s("MAT_SORT_HEADER_COLUMN_DEF",8),s(wt),s(ot),s(vt,8),s(Vt,8))},e.\u0275cmp=y({type:e,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(i,o){i&1&&C("click",function(){return o._handleClick()})("keydown",function(u){return o._handleKeydown(u)})("mouseenter",function(){return o._setIndicatorHintVisible(!0)})("mouseleave",function(){return o._setIndicatorHintVisible(!1)}),i&2&&(L("aria-sort",o._getAriaSortAttribute()),z("mat-sort-header-disabled",o._isDisabled()))},inputs:{id:[_.None,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[_.HasDecoratorInputTransform,"disabled","disabled",A],sortActionDescription:"sortActionDescription",disableClear:[_.HasDecoratorInputTransform,"disableClear","disableClear",A]},exportAs:["matSortHeader"],standalone:!0,features:[B,M],attrs:zt,ngContentSelectors:Yt,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(i,o){i&1&&(lt(),c(0,"div",0)(1,"div",1),ht(2),d(),st(3,Gt,6,6,"div",2),d()),i&2&&(z("mat-sort-header-sorted",o._isSorted())("mat-sort-header-position-before",o.arrowPosition==="before"),L("tabindex",o._isDisabled()?null:0)("role",o._isDisabled()?null:"button"),a(3),ct(3,o._renderArrow()?3:-1))},styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[D.indicator,D.leftPointer,D.rightPointer,D.arrowOpacity,D.arrowPosition,D.allowChildren]},changeDetection:0});let r=e;return r})(),fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=et({type:e}),e.\u0275inj=X({providers:[qt],imports:[yt]});let r=e;return r})();var R=function(r){return r.Gain="teal",r.Lost="chocolate",r}(R||{});var Bt=(()=>{let e=class e{constructor(t){this.dataService=t,this.portfolioData=this.dataService.portfolioData}getPriceKeyPrefix(){let t=new Date().setHours(4,0,0),i=new Date().setHours(9,30,0),o=new Date().setHours(16,0,0),m=new Date().setHours(20,0,0),u=new Date().getTime();console.log("%c ----- Sanity Check -----","background: teal; color: white");let F=new Date(u).toLocaleTimeString();return console.log("time now:",F),console.log("%c ------------------------","background: teal; color: white"),t<u&&u<i?(console.log("currently in pre-market time"),"preMarket"):u>i&&u<o?(console.log("currently in regular market time"),"regularMarket"):u>o&&u<m?(console.log("currently in post market time"),"postMarket"):(console.log("currently in ghost hours"),"postMarket")}getStockPriceColor(t){let i=this.getPriceKeyPrefix();return this.portfolioData[t][i+"Price"]>0?R.Gain:R.Lost}};e.\u0275fac=function(i){return new(i||e)(Q(Ft))},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var Xt=r=>({"border-left":r}),$=r=>({color:r}),Te=(()=>{let e=class e{constructor(t,i){this.dialog=t,this.helperService=i,this.price=0,this.borderLeftStyle=""}ngOnInit(){console.log(Object.keys(this.stock));let t=this.helperService.getPriceKeyPrefix();this.price=this.stock[t+"Price"],this.borderLeftStyle="0.3rem solid "+(this.stock.unrealizedGain>0?"teal":"chocolate")}getLogoSource(t){return`/assets/ticker-logos/${t.symbol}.png`}getColor(){return this.helperService.getStockPriceColor(this.stock.symbol)}openInfoSheet(){this.dialog.open(Jt,{height:"100%",minWidth:"100%",closeOnNavigation:!0,data:{symbol:this.stock.symbol}}).afterClosed().subscribe(i=>{console.log(`Dialog result: ${i}`)})}};e.\u0275fac=function(i){return new(i||e)(s(Tt),s(Bt))},e.\u0275cmp=y({type:e,selectors:[["stock-name-card"]],inputs:{stock:"stock"},standalone:!0,features:[M],decls:24,vars:29,consts:[[1,"container",3,"click","ngStyle"],["alt","Logo","width","auto","height","35",1,"stock-logo",3,"src"],[1,"symbol-container"],[1,"stock-symbol"],[1,"stock-price"],[3,"ngStyle"],[1,"stock-name"],[1,"expand-section"]],template:function(i,o){i&1&&(c(0,"mat-card",0),C("click",function(){return o.openInfoSheet()}),b(1,"img",1),c(2,"div",2)(3,"mat-card-title",3)(4,"span")(5,"b"),S(6),d()(),c(7,"span",4),S(8),I(9,"currency"),d(),c(10,"mat-card-subtitle",5),S(11),I(12,"percent"),d()(),c(13,"mat-card-subtitle",6),S(14),d()(),c(15,"div",7)(16,"mat-card-subtitle"),S(17,"P/L:"),d(),c(18,"mat-card-subtitle",5),S(19),I(20,"currency"),d(),c(21,"mat-card-subtitle",5),S(22),I(23,"percent"),d()()()),i&2&&(p("ngStyle",k(21,Xt,o.borderLeftStyle)),a(),p("src",o.getLogoSource(o.stock),at),a(5),T(o.stock==null?null:o.stock.symbol),a(2),T(Y(9,11,o.price)),a(2),p("ngStyle",k(23,$,o.stock.regularMarketChange>0?"teal":"chocolate")),a(),E(" (",G(12,13,o.stock.regularMarketChangePercent,".2"),") "),a(3),T(o.stock==null?null:o.stock.shortName),a(4),p("ngStyle",k(25,$,o.stock.unrealizedGain>0?"teal":"chocolate")),a(),E(" ",Y(20,16,o.stock.unrealizedGain)," "),a(2),p("ngStyle",k(27,$,o.stock.unrealizedGain>0?"teal":"chocolate")),a(),E(" ",G(23,18,o.stock.unrealizedGainPercent,".2")," "))},dependencies:[gt,pt,ut,ft,Pt,kt,At,It,K],styles:[".container[_ngcontent-%COMP%]{z-index:999;display:flex;flex-direction:row;align-items:center;padding:.5rem;overflow:hidden;height:auto;transition:height 1s;-webkit-transition:height 1s}.container[_ngcontent-%COMP%]   .expand-section[_ngcontent-%COMP%]{width:0;height:0;visibility:hidden}.container[_ngcontent-%COMP%]:hover{height:max-content}.container[_ngcontent-%COMP%]:hover   .expand-section[_ngcontent-%COMP%]{width:max-content;height:max-content;visibility:visible}.symbol-container[_ngcontent-%COMP%]{padding-left:.5rem;align-items:center}.stock-logo[_ngcontent-%COMP%]{border-radius:50%;border:1px solid slategrey}.stock-symbol[_ngcontent-%COMP%]{display:flex;font-size:1.5rem;align-items:center}.stock-price[_ngcontent-%COMP%], .price-change[_ngcontent-%COMP%]{margin-left:.5rem}.stock-price[_ngcontent-%COMP%]{color:teal}.stock-name[_ngcontent-%COMP%]{float:left;color:#708090}.mat-mdc-card[_ngcontent-%COMP%]{box-shadow:none}.expand-section[_ngcontent-%COMP%]{padding:.5rem;display:flex;flex-direction:column}"]});let r=e;return r})(),Jt=(()=>{let e=class e{constructor(t,i){this.data=t,this.dialogRef=i,this.dialogRef.updateSize("95%","90%")}};e.\u0275fac=function(i){return new(i||e)(s(Ot),s(xt))},e.\u0275cmp=y({type:e,selectors:[["info-sheet"]],standalone:!0,features:[M],decls:5,vars:1,consts:[["align","end"],["mat-button","","mat-dialog-close",""],[1,"mat-typography"],[3,"symbol"]],template:function(i,o){i&1&&(c(0,"mat-dialog-actions",0)(1,"button",1),S(2,"X"),d()(),c(3,"mat-dialog-content",2),b(4,"stock-data-sheet",3),d()),i&2&&(a(4),p("symbol",o.data.symbol))},dependencies:[K,Et,Rt,Ht,Mt,Ct,Nt],encapsulation:2});let r=e;return r})();export{Kt as a,ue as b,fe as c,Te as d};
