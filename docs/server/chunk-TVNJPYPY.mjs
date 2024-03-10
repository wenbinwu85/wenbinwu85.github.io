import './polyfills.server.mjs';
import{a as me,b as le,c as ce,d as de}from"./chunk-3NIUMIQF.mjs";import{a as ge}from"./chunk-2JPYQC5S.mjs";import{a as K,d as ee}from"./chunk-7TRCHQA6.mjs";import{a as oe,c as se}from"./chunk-7ZMFGXXX.mjs";import{b as re,e as te,f as ne}from"./chunk-GK32ZI56.mjs";import{b as ae}from"./chunk-M6KIDLHG.mjs";import{a as pe}from"./chunk-YOX5ETXS.mjs";import{D as ie,M as _,N as v}from"./chunk-UY3DO3X5.mjs";import{E as G,F as U,G as $,L as Q,O as J,l as Y,m as Z}from"./chunk-6YJCKQYO.mjs";import{Da as B,Db as a,Eb as o,Ec as M,Fb as l,Gc as W,Jb as V,Nb as k,Ob as w,Wb as j,Xb as s,Y as S,Zb as h,aa as y,ac as p,ba as c,bb as m,ca as T,cb as d,fa as I,ga as D,ja as O,kb as F,na as A,ob as L,pa as R,sb as x,ta as X,tb as z,ub as u,vb as C,wb as N,wc as q,xb as H}from"./chunk-D5BORNAZ.mjs";var fe=(()=>{let r=class r{constructor(){this.date=new Date().toLocaleString()}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=c({type:r,selectors:[["app-footer"]],standalone:!0,features:[p],decls:20,vars:1,consts:[[1,"footer-container"],[1,"footer-text"],["href","https://angular.dev","target","_blank"],["href","https://python.org","target","_blank"],["href","https://github.com/dpguthrie/yahooquery","target","_blank"],["href","https://github.com/pallets/quart","target","_blank"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"mat-icon"),s(2,"info"),o(),a(3,"div",1)(4,"span"),s(5,"Built with: "),o(),a(6,"a",2),s(7,"Angular"),o(),s(8," | "),a(9,"a",3),s(10,"Python"),o(),s(11," | "),a(12,"a",4),s(13,"Yahooquery"),o(),s(14," | "),a(15,"a",5),s(16,"Quart"),o(),s(17," | "),a(18,"span"),s(19),o()()()),n&2&&(m(19),h("Last updated: ",i.date,""))},dependencies:[ae,v,_],styles:[".footer-container[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center;align-content:center;margin:1.5rem;padding-bottom:1.5rem}.footer-text[_ngcontent-%COMP%]{font-size:1rem;color:navy}a[_ngcontent-%COMP%]{text-decoration:none}"]});let e=r;return e})();var we=new R("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var be=(()=>{let r=class r{constructor(t,n,i,f,b){this._elementRef=t,this._ngZone=n,this._changeDetectorRef=i,this._animationMode=f,this._isNoopAnimation=!1,this._defaultColor="primary",this._value=0,this._bufferValue=0,this.animationEnd=new S,this._mode="determinate",this._transitionendHandler=P=>{this.animationEnd.observers.length===0||!P.target||!P.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation=f==="NoopAnimations",b&&(b.color&&(this.color=this._defaultColor=b.color),this.mode=b.mode||this.mode)}get color(){return this._color||this._defaultColor}set color(t){this._color=t}get value(){return this._value}set value(t){this._value=ue(t||0),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=ue(t||0),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}};r.\u0275fac=function(n){return new(n||r)(d(O),d(F),d(q),d(X,8),d(we,8))},r.\u0275cmp=c({type:r,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,i){n&2&&(z("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),H("mat-"+i.color),N("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[y.HasDecoratorInputTransform,"value","value",M],bufferValue:[y.HasDecoratorInputTransform,"bufferValue","bufferValue",M],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],standalone:!0,features:[L,p],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,i){n&1&&(a(0,"div",0),l(1,"div",1)(2,"div",2),o(),a(3,"div",3),l(4,"span",4),o(),a(5,"div",5),l(6,"span",4),o()),n&2&&(m(),C("flex-basis",i._getBufferBarFlexBasis()),m(2),C("transform",i._getPrimaryBarTransform()))},styles:[`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}.mdc-linear-progress__buffer-dots{background-color:var(--mdc-linear-progress-track-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E")}}.mdc-linear-progress__buffer-bar{background-color:var(--mdc-linear-progress-track-color)}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{display:block;text-align:start;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}`],encapsulation:2,changeDetection:0});let e=r;return e})();function ue(e,r=0,g=100){return Math.max(r,Math.min(g,e))}var he=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=T({type:r}),r.\u0275inj=A({imports:[ie]});let e=r;return e})();function Ee(e,r){e&1&&(a(0,"div",5)(1,"h1",6),s(2,"Loading new data..."),o(),l(3,"mat-progress-bar",7),o())}function Pe(e,r){if(e&1){let g=V();a(0,"a",8),k("click",function(){let i=I(g).$implicit,f=w();return D(f.activeLink=i)}),s(1),o()}if(e&2){let g=r.$implicit,t=w();u("active",t.activeLink==g)("routerLink",g.route),m(),h(" ",g.label," ")}}var _e=(()=>{let r=class r{constructor(t){this.dataService=t,this.navLinks=[{label:"Home",route:""},{label:"Portfolio Details",route:"/portfolio"},{label:"Chart Wall",route:"/chart-wall"},{label:"Watchlists",route:"/watchlists"},{label:"Toolbox",route:"/toolbox"}],this.activeLink=this.navLinks[0],this.showProgressBar=!1}ngOnInit(){this.dataService.isLoadingData.subscribe(t=>{this.showProgressBar=t})}refreshData(){this.dataService.updatePortfolioData(!0)}};r.\u0275fac=function(n){return new(n||r)(d(pe))},r.\u0275cmp=c({type:r,selectors:[["app-header"]],standalone:!0,features:[p],decls:9,vars:3,consts:[["class","progress-bar-container",4,"ngIf"],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-button","","extended","","color","primary",1,"refresh-button",3,"click"],["tabPanel",""],[1,"progress-bar-container"],[1,"progress-bar-message"],["color","warn","mode","query"],["mat-tab-link","",3,"active","routerLink","click"]],template:function(n,i){if(n&1&&(x(0,Ee,4,0,"div",0),a(1,"nav",1),x(2,Pe,2,3,"a",2),a(3,"button",3),k("click",function(){return i.refreshData()}),a(4,"mat-icon"),s(5,"cloud_sync"),o(),s(6," Refresh Data "),o()(),l(7,"mat-tab-nav-panel",null,4)),n&2){let f=j(8);u("ngIf",i.showProgressBar),m(),u("tabPanel",f),m(),u("ngForOf",i.navLinks)}},dependencies:[se,oe,v,_,he,be,de,me,ce,le,Y,Z,te],styles:[".mat-mdc-tab-links{align-items:center}.refresh-button[_ngcontent-%COMP%]{margin-right:1.5rem}.progress-bar-container[_ngcontent-%COMP%]{margin:1.5rem;border:1px solid navy;border-left:.5rem solid navy;border-radius:.5rem;max-width:99vw}.progress-bar-message[_ngcontent-%COMP%]{margin:1rem}mat-progress-bar[_ngcontent-%COMP%]{margin:1rem;max-width:90vw}"]});let e=r;return e})();var ve=(()=>{let r=class r{constructor(){this.title="portfolio-tracker"}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=c({type:r,selectors:[["app-root"]],standalone:!0,features:[p],decls:9,vars:1,consts:[[1,"main-title-container"],[1,"header-title"],[1,"version"],[3,"tape"]],template:function(n,i){n&1&&(a(0,"section",0)(1,"h1",1),s(2,"Ben's Portfolio Tracker "),a(3,"span",2),s(4,"v2"),o()(),l(5,"tv-tickers-widget",3),o(),l(6,"app-header")(7,"router-outlet")(8,"app-footer")),n&2&&(m(5),u("tape",!0))},dependencies:[fe,_e,re,ge],styles:[".main-title-container[_ngcontent-%COMP%]{display:flex;align-items:center}.header-title[_ngcontent-%COMP%]{font-size:2rem;text-wrap:nowrap;padding:1.5rem 1rem 0;width:min-content}.version[_ngcontent-%COMP%]{font-size:1.5rem;color:navy}tv-tickers-widget[_ngcontent-%COMP%]{width:100%}"]});let e=r;return e})();var ye=[{path:"",loadComponent:()=>import("./chunk-WEZBSWFO.mjs").then(e=>e.PortfolioMainComponent)},{path:"portfolio",loadChildren:()=>import("./chunk-DIZBMHLD.mjs").then(e=>e.PortfolioDetailsModule)},{path:"chart-wall",loadComponent:()=>import("./chunk-CNFEUHR3.mjs").then(e=>e.ChartWallComponent)},{path:"watchlists",loadComponent:()=>import("./chunk-XKCEWMOF.mjs").then(e=>e.WatchlistsComponent)},{path:"toolbox",loadComponent:()=>import("./chunk-DUWMLO3K.mjs").then(e=>e.ToolboxComponent)},{path:"stock/:symbol",loadComponent:()=>import("./chunk-7N6CWAP7.mjs").then(e=>e.StockDataSheetComponent)},{path:"**",loadComponent:()=>import("./chunk-53KKQE6D.mjs").then(e=>e.NotFoundComponent)}];var xe={providers:[B($),K(),J(),G(U()),ne(ye)]};var Se={providers:[ee()]},Ce=W(xe,Se);var Te=()=>Q(ve,Ce),Tr=Te;export{Tr as a};