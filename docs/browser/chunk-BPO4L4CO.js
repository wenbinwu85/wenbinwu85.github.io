import{a as S,b as T,c as D,d as I}from"./chunk-Q7LQDA4O.js";import{a as R,b as V,c as z,d as $}from"./chunk-W2B5J3D5.js";import{g as H}from"./chunk-4WAIG2OO.js";import{a as E,b as L,c as F}from"./chunk-3TVQXMIJ.js";import{b as w}from"./chunk-7XK5PBSE.js";import{h,oa as O,p as y,pa as N}from"./chunk-RNTJAAAV.js";import{$a as l,Bb as e,Cb as i,Db as M,Hb as P,Lb as g,Mb as f,Ub as C,Vb as s,Wb as d,_b as _,ab as b,ba as u,fa as v,ga as x,qb as k,sb as m}from"./chunk-FNNUKVD3.js";function j(o,t){if(o&1){let n=P();e(0,"a",5),g("click",function(){let c=v(n).$implicit,p=f();return x(p.activeLink=c)}),e(1,"mat-icon",1),s(2),i(),e(3,"span"),s(4),i()()}if(o&2){let n=t.$implicit,a=f();m("active",a.activeLink==n)("routerLink",n.route),l(2),d(n.icon),l(2),d(n.label)}}var ut=(()=>{let t=class t{constructor(a){this.router=a,this.navLinks=[{label:"Portfolio Summary",route:"summary",icon:"summarize"},{label:"Portfolio Holdings",route:"holdings",icon:"list_alt"},{label:"Price Insights",route:"price-insights",icon:"price_change"},{label:"Dividend Tracker",route:"dividend",icon:"paid"},{label:"Financial Metrics",route:"financials",icon:"query_stats"},{label:"Analysis",route:"analysis",icon:"calculate"},{label:"Events",route:"events",icon:"event"}],this.activeLink=this.navLinks[0]}ngOnInit(){this.router.navigate(["portfolio",this.navLinks[0].route])}};t.\u0275fac=function(r){return new(r||t)(b(L))},t.\u0275cmp=u({type:t,selectors:[["portfolio-details"]],standalone:!0,features:[_],decls:12,vars:3,consts:[[3,"expanded"],[1,""],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","end",3,"tabPanel"],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["tabPanel",""],["mat-tab-link","",3,"active","routerLink","click"]],template:function(r,c){if(r&1&&(e(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),s(4,"troubleshoot"),i(),e(5,"span"),s(6,"Portfolio Details"),i()()(),e(7,"nav",2),k(8,j,5,4,"a",3),i(),M(9,"mat-tab-nav-panel",null,4)(11,"router-outlet"),i()),r&2){let p=C(10);m("expanded",!0),l(7),m("tabPanel",p),l(),m("ngForOf",c.navLinks)}},dependencies:[y,h,w,I,S,T,D,N,O,$,R,z,V,H,F,E],styles:["mat-icon[_ngcontent-%COMP%]{font-size:1.25rem}"]});let o=t;return o})();export{ut as a};
