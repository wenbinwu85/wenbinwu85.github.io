import{a as S,b as T,c as D,d as I}from"./chunk-NMF3L7ZG.js";import{a as H,b as R,c as V,d as z}from"./chunk-BOXZS2F7.js";import{a as y,b as L,c as E,ga as w}from"./chunk-J6LFPZMV.js";import{b as F}from"./chunk-Z3Q5TBNA.js";import{Sa as O,Ta as N,h,q as C}from"./chunk-U5L5YZWS.js";import{$a as b,Bb as e,Cb as i,Db as k,Hb as M,Lb as P,Mb as p,Ub as g,Vb as s,Wb as f,_a as l,_b as _,ja as d,qb as x,sb as m,ta as u,ua as v}from"./chunk-HSDL35WG.js";function j(o,t){if(o&1){let n=M();e(0,"a",5),P("click",function(){let r=u(n).$implicit,c=p();return v(c.activeLink=r)}),e(1,"mat-icon",2),s(2),i(),e(3,"span"),s(4),i()()}if(o&2){let n=t.$implicit,a=p();m("active",a.activeLink==n)("routerLink",n.route),l(2),f(n.icon),l(2),f(n.label)}}var ft=(()=>{let t=class t{constructor(a){this.router=a,this.navLinks=[{label:"Portfolio Summary",route:"summary",icon:"summarize"},{label:"Portfolio Holdings",route:"holdings",icon:"list_alt"},{label:"Price Insights",route:"price-insights",icon:"price_change"},{label:"Dividend Tracker",route:"dividend",icon:"paid"},{label:"Financial Metrics",route:"financials",icon:"query_stats"},{label:"Analysis",route:"analysis",icon:"calculate"}],this.activeLink=this.navLinks[0]}ngOnInit(){this.router.navigate(["portfolio",this.navLinks[0].route])}};t.\u0275fac=function(r){return new(r||t)(b(L))},t.\u0275cmp=d({type:t,selectors:[["portfolio-details"]],standalone:!0,features:[_],decls:12,vars:3,consts:[["tabPanel",""],[3,"expanded"],[1,""],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","end",3,"tabPanel"],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["mat-tab-link","",3,"click","active","routerLink"]],template:function(r,c){if(r&1&&(e(0,"mat-expansion-panel",1)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",2),s(4,"troubleshoot"),i(),e(5,"span"),s(6,"Portfolio Details"),i()()(),e(7,"nav",3),x(8,j,5,4,"a",4),i(),k(9,"mat-tab-nav-panel",null,0)(11,"router-outlet"),i()),r&2){let $=g(10);m("expanded",!0),l(7),m("tabPanel",$),l(),m("ngForOf",c.navLinks)}},dependencies:[C,h,F,I,S,T,D,N,O,z,H,V,R,w,E,y],styles:["mat-icon[_ngcontent-%COMP%]{font-size:1.25rem}"]});let o=t;return o})();export{ft as a};
