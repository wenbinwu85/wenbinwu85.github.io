import{a as F,b as D,c as I,d as O}from"./chunk-TGB6GHH5.js";import{a as R,b as V,c as $,d as j}from"./chunk-R5L7RB4E.js";import{g as H}from"./chunk-WHBCG3EK.js";import{a as L,b as y,c as T}from"./chunk-XKOVLCTL.js";import{b as N}from"./chunk-I23MAIEE.js";import{i as h,r as E,sa as S,ta as w}from"./chunk-F6RQLQRB.js";import{$a as m,Hb as l,Ib as o,Jb as k,Nb as M,Sb as C,Ub as d,ab as b,ac as P,ba as f,bc as s,dc as g,fa as u,ga as v,gc as _,wb as x,yb as a}from"./chunk-CL75VSQZ.js";function z(e,t){if(e&1){let n=M();l(0,"a",5),C("click",function(){let p=u(n).$implicit,c=d();return v(c.activeLink=p)}),s(1),o()}if(e&2){let n=t.$implicit,i=d();a("active",i.activeLink==n)("routerLink",n.route),m(),g(" ",n.label," ")}}var ut=(()=>{let t=class t{constructor(i){this.router=i,this.navLinks=[{label:"Holdings",route:"holdings"},{label:"Price Trends",route:"price-trends"},{label:"Dividend",route:"dividend"},{label:"Financials",route:"financials"},{label:"Analysis",route:"analysis"},{label:"Events",route:"events"}],this.activeLink=this.navLinks[0]}ngOnInit(){this.router.navigate(["portfolio","holdings"])}};t.\u0275fac=function(r){return new(r||t)(b(y))},t.\u0275cmp=f({type:t,selectors:[["portfolio-details"]],standalone:!0,features:[_],decls:12,vars:3,consts:[[3,"expanded"],[1,"add-margin"],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","end",3,"tabPanel"],["mat-tab-link","",3,"active","routerLink","click",4,"ngFor","ngForOf"],["tabPanel",""],["mat-tab-link","",3,"active","routerLink","click"]],template:function(r,p){if(r&1&&(l(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",1),s(4,"table_rows"),o(),l(5,"span"),s(6," Portfolio Details"),o()()(),l(7,"nav",2),x(8,z,2,3,"a",3),o(),k(9,"mat-tab-nav-panel",null,4)(11,"router-outlet"),o()),r&2){let c=P(10);a("expanded",!0),m(7),a("tabPanel",c),m(),a("ngForOf",p.navLinks)}},dependencies:[E,h,N,O,F,D,I,w,S,j,R,$,V,H,T,L],styles:["mat-icon[_ngcontent-%COMP%]{font-size:1.25rem}"]});let e=t;return e})();export{ut as a};