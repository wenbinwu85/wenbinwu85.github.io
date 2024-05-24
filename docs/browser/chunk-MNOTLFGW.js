import{a as ne}from"./chunk-5IMIE7WL.js";import{a as h,b as ee,c as te,d as ie}from"./chunk-L4FTOQHC.js";import{I as x,J as B,K as N,M as j,N as L,P as U,Q as W,S as z,T as J,V as K,X,Y as Z}from"./chunk-NJBPMSJC.js";import{a as q,b as G}from"./chunk-M4F6S6BO.js";import{a as V}from"./chunk-63JH737O.js";import{h as k,i as A,j as H,o as Q}from"./chunk-2PPLE5KH.js";import{$a as w,Bb as m,Cb as d,Db as f,Eb as C,Fb as g,Hb as T,Lb as M,Mb as r,Rb as y,Sb as v,Tb as R,Ub as S,Vb as u,Wb as _,Xb as b,_a as l,_b as O,ac as Y,dc as I,ec as $,gc as F,ja as E,qb as p,sb as s,ta as P,ua as D}from"./chunk-GTWXBXVC.js";var oe=t=>({color:t});function re(t,o){if(t&1){let a=T();m(0,"th",12),M("click",function(){P(a);let e=r().index,n=r();return D(n.setChartData(e))}),u(1),d()}if(t&2){let a=r().index,i=r();l(),b(" ",i.headers[a]," ")}}function le(t,o){if(t&1&&(m(0,"div",15),f(1,"stock-name-card",16),d()),t&2){let a=r().$implicit;l(),s("stock",a)}}function se(t,o){if(t&1&&(m(0,"span",17),u(1),d()),t&2){let a=r().$implicit,i=r().index,e=r();s("ngStyle",Y(2,oe,e.getCellColor(i,a))),l(),_(e.cells[i](a))}}function ce(t,o){if(t&1&&(m(0,"td",13),p(1,le,2,1,"div",14)(2,se,2,4,"ng-template",null,0,F),d()),t&2){let a=S(3),i=r().index;l(),s("ngIf",i===0)("ngIfElse",a)}}function de(t,o){if(t&1&&(C(0,9),p(1,re,2,1,"th",10)(2,ce,4,2,"td",11),g()),t&2){let a=o.$implicit;s("matColumnDef",a)}}function me(t,o){t&1&&f(0,"tr",18)}function fe(t,o){t&1&&f(0,"tr",19)}function pe(t,o){if(t&1&&(m(0,"th",21)(1,"span"),u(2),d()()),t&2){let a=r().index,i=r();l(2),_(i.etfHeaders[a])}}function ue(t,o){if(t&1&&(m(0,"div",15),f(1,"stock-name-card",16),d()),t&2){let a=r().$implicit;l(),s("stock",a)}}function _e(t,o){if(t&1&&(m(0,"span"),u(1),d()),t&2){let a=r(2).$implicit,i=r().index,e=r();l(),_(e.etfCells[i](a))}}function xe(t,o){if(t&1&&(m(0,"span"),u(1),I(2,"currency"),d()),t&2){let a=r(2).$implicit,i=r().index,e=r();l(),_($(2,1,e.etfCells[i](a)))}}function he(t,o){if(t&1&&p(0,_e,2,1,"span",22)(1,xe,3,3,"span",22),t&2){let a=r(2).index;s("ngIf",a<13),l(),s("ngIf",a===13)}}function Ce(t,o){if(t&1&&(m(0,"td",13),p(1,ue,2,1,"div",14)(2,he,2,2,"ng-template",null,0,F),d()),t&2){let a=S(3),i=r().index;l(),s("ngIf",i===0)("ngIfElse",a)}}function ge(t,o){if(t&1&&(C(0,9),p(1,pe,3,1,"th",20)(2,Ce,4,2,"td",11),g()),t&2){let a=o.$implicit;s("matColumnDef",a)}}function ye(t,o){t&1&&f(0,"tr",18)}function ve(t,o){t&1&&f(0,"tr",19)}var Ye=(()=>{let o=class o{constructor(i){this.dataService=i,this.transactions="portfolio",this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.xAxisLabel="",this.dataSource=new Z,this.sortedEtfs=[],this.headers=["Symbol","Debt To Equity (MRQ)","Current Ratio (MRQ","Earnings Growth (YOY)","Quarterly Revenue Growth (YOY)","Profit Margins","Forward PE","Forward EPS","PEG Ratio","Total Cash / Share","Revenue / Share","FCF Yield","FCF / Share","Return On Assets","Return On Equity","EV / EBITDA","EV / Revenue"],this.columnDefs=["symbol","debtToEquity","currentRatio","earningsQuarterlyGrowth","revenueGrowth","profitMargins","forwardPE","forwardEps","pegRatio","totalCashPerShare","revenuePerShare","fcfYield","fcfPerShare","returnOnAssets","returnOnEquity","enterpriseToEbitda","enterpriseToRevenue"],this.etfHeaders=["Symbol","Expense Ratio","Nav Price","Trailing PE","Trailing EPS","YTD Return","1 Month Return","3 month Return","1 Year Return","3 Year Return","5 year Return","10 Year return","3Y Beta","Total Assets"],this.etfColumnDefs=["symbol","annualReportExpenseRatio","navPrice","trailingPE","epsTrailingTwelveMonths","ytdReturn","1monthReturn","3monthReturn","1YearReturn","threeYearReturn","fiveYearReturn","tenYearReturn","beta3Year","totalAssets"],this.cells=[e=>"",e=>`${e.debtToEquity?.toFixed(2)}%`||0,e=>e.currentRatio?.toFixed(2)||0,e=>e.earningsQuarterlyGrowth?`${(e.earningsQuarterlyGrowth*100).toFixed(2)}%`:"0%",e=>`${(e.revenueGrowth*100).toFixed(2)}%`||0,e=>`${(e.profitMargins*100).toFixed(2)}%`||0,e=>e.forwardPE.toFixed(2)||0,e=>e.forwardEps.toFixed(2)||0,e=>e.pegRatio||0,e=>`$${e.totalCashPerShare}`||0,e=>`$${e.revenuePerShare}`||0,e=>`${(e.fcfYield*100).toFixed(2)}%`||0,e=>`$${e.fcfPerShare.toFixed(2)}`||0,e=>`${(e.returnOnAssets*100).toFixed(2)}%`||0,e=>`${(e.returnOnEquity*100).toFixed(2)}%`||0,e=>e.enterpriseToEbitda||0,e=>e.enterpriseToRevenue||0],this.etfCells=[e=>"",e=>(e.profile.feesExpensesInvestment.annualReportExpenseRatio*100).toFixed(2)+"%",e=>`$${e.navPrice.toFixed(2)}`,e=>e.trailingPE.toFixed(2),e=>e.epsTrailingTwelveMonths?.toFixed(2)||"N/A",e=>(e.fundPerformance.trailingReturns.ytd*100).toFixed(2)+"%",e=>(e.fundPerformance.trailingReturns.oneMonth*100).toFixed(2)+"%",e=>(e.fundPerformance.trailingReturns.threeMonth*100).toFixed(2)+"%",e=>(e.fundPerformance.trailingReturns.oneYear*100).toFixed(2)+"%",e=>(e.fundPerformance.trailingReturns.threeYear*100).toFixed(2)+"%",e=>(e.fundPerformance.trailingReturns.fiveYear*100).toFixed(2)+"%",e=>(e.fundPerformance.trailingReturns.tenYear*100).toFixed(2)+"%",e=>e.beta3Year,e=>e.totalAssets]}ngOnInit(){let i=Object.values(this.dataService.portfolioData).filter(n=>n.quoteType==="EQUITY");this.dataSource.data=i.sort((n,c)=>n["52WeekChange"]-c["52WeekChange"]);let e=Object.values(this.dataService.portfolioData).filter(n=>n.quoteType==="ETF");this.sortedEtfs=e.sort((n,c)=>n.ytdReturn-c.ytdReturn),this.setChartData(1)}ngAfterViewInit(){this.dataSource.sort=this.sort}setChartData(i){let e={title:{text:""},legend:{data:[this.headers[i]]},tooltip:{},xAxis:{data:[],splitLine:{show:!0}},yAxis:{},series:[{name:this.headers[i],type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(c){return c*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(c){return c*5}};this.xAxisLabel=this.headers[i];let n=this.columnDefs[i];this.dataSource.data.sort((c,ae)=>c[n]-ae[n]).forEach(c=>{e.xAxis.data.push(c.symbol),e.series[0].data.push(c[n]||0)}),this.echartOptions=e}getCellColor(i,e){let n=this.cells[i](e);return n<0||n[0]==="-"||n[1]==="-"?"chocolate":""}};o.\u0275fac=function(e){return new(e||o)(w(V))},o.\u0275cmp=E({type:o,selectors:[["portfolio-financials"]],viewQuery:function(e,n){if(e&1&&(y(x,5),y(h,5)),e&2){let c;v(c=R())&&(n.table=c.first),v(c=R())&&(n.sort=c.first)}},inputs:{transactions:"transactions"},standalone:!0,features:[O],decls:14,vars:11,consts:[["elseBlock",""],[1,"add-border"],[1,"title"],[3,"options"],["mat-table","","matSort","","matSortActive","earningsQuarterlyGrowth","matSortDirection","asc",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-table","","matSort","","matSortActive","ytdReturn","matSortDirection","asc",3,"dataSource"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",3,"click",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header","",3,"click"],["mat-cell",""],["class","table-col-0",4,"ngIf","ngIfElse"],[1,"table-col-0"],[3,"stock"],[3,"ngStyle"],["mat-header-row",""],["mat-row",""],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf"]],template:function(e,n){e&1&&(m(0,"section",1)(1,"div",2)(2,"span"),u(3,"Financial Data"),d()(),f(4,"echarts-vertical-bar-chart",3),d(),m(5,"table",4),p(6,de,3,1,"ng-container",5)(7,me,1,0,"tr",6)(8,fe,1,0,"tr",7),d(),f(9,"mat-divider"),m(10,"table",8),p(11,ge,3,1,"ng-container",5)(12,ye,1,0,"tr",6)(13,ve,1,0,"tr",7),d()),e&2&&(l(4),s("options",n.echartOptions),l(),s("dataSource",n.dataSource),l(),s("ngForOf",n.columnDefs),l(),s("matHeaderRowDef",n.columnDefs)("matHeaderRowDefSticky",!0),l(),s("matRowDefColumns",n.columnDefs),l(2),s("dataSource",n.sortedEtfs),l(),s("ngForOf",n.etfColumnDefs),l(),s("matHeaderRowDef",n.etfColumnDefs)("matHeaderRowDefSticky",!0),l(),s("matRowDefColumns",n.etfColumnDefs))},dependencies:[Q,ne,G,q,te,h,ee,X,x,N,W,j,B,z,L,U,J,K,k,A,H,ie],styles:[".table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.mat-mdc-row[_ngcontent-%COMP%]{height:max-content}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}"]});let t=o;return t})();export{Ye as a};
