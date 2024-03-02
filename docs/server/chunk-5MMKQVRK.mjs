import './polyfills.server.mjs';
import{a as it}from"./chunk-WXSGF5SB.mjs";import{a as N,b as x,c as B,d as j,e as h,f as L,g as U,i as W,j as z,l as J,m as K,o as X,p as Z,r as tt,t as et,u as nt}from"./chunk-TFX57R2K.mjs";import{a as q,b as G}from"./chunk-U4J4AU3V.mjs";import{a as V}from"./chunk-YCBEYMAB.mjs";import{l as $,m as A,n as H,t as Q}from"./chunk-PBYHKXXW.mjs";import{$b as S,Hb as d,Ib as c,Jb as f,Kb as C,Lb as g,Nb as M,Sb as b,Ub as r,Zb as y,_b as v,ac as R,ba as P,bb as l,bc as u,cb as T,cc as _,dc as E,fa as D,ga as w,gc as O,ic as k,lc as Y,mc as I,oc as F,wb as p,yb as s}from"./chunk-EVR6KDPA.mjs";function at(e,a){if(e&1){let o=M();d(0,"th",11),b("click",function(){D(o);let t=r().index,i=r();return w(i.setChartData(t))}),u(1),c()}if(e&2){let o=r().index,n=r();l(),E(" ",n.headers[o]," ")}}function rt(e,a){if(e&1&&(d(0,"div",15),f(1,"stock-static-ticker-card",16),c()),e&2){let o=r().$implicit;l(),s("stock",o)}}var lt=e=>({color:e});function st(e,a){if(e&1&&(d(0,"span",17),u(1),c()),e&2){let o=r().$implicit,n=r().index,t=r();s("ngStyle",k(2,lt,t.getColor(n,o))),l(),_(t.cells[n](o))}}function ct(e,a){if(e&1&&(d(0,"td",12),p(1,rt,2,1,"div",13)(2,st,2,4,"ng-template",null,14,F),c()),e&2){let o=R(3),n=r().index;l(),s("ngIf",n===0)("ngIfElse",o)}}function mt(e,a){if(e&1&&(C(0,8),p(1,at,2,1,"th",9)(2,ct,4,2,"td",10),g()),e&2){let o=a.$implicit;s("matColumnDef",o)}}function dt(e,a){e&1&&f(0,"tr",18)}function ft(e,a){e&1&&f(0,"tr",19)}function pt(e,a){if(e&1&&(d(0,"th",21),u(1),c()),e&2){let o=r().index,n=r();l(),E(" ",n.etfHeaders[o]," ")}}function ut(e,a){if(e&1&&(d(0,"div",15),f(1,"stock-static-ticker-card",16),c()),e&2){let o=r().$implicit;l(),s("stock",o)}}function _t(e,a){if(e&1&&(d(0,"span"),u(1),c()),e&2){let o=r(2).$implicit,n=r().index,t=r();l(),_(t.etfCells[n](o))}}function xt(e,a){if(e&1&&(d(0,"span"),u(1),Y(2,"currency"),c()),e&2){let o=r(2).$implicit,n=r().index,t=r();l(),_(I(2,1,t.etfCells[n](o)))}}function ht(e,a){if(e&1&&p(0,_t,2,1,"span",22)(1,xt,3,3,"span",22),e&2){let o=r(2).index;s("ngIf",o<13),l(),s("ngIf",o===13)}}function Ct(e,a){if(e&1&&(d(0,"td",12),p(1,ut,2,1,"div",13)(2,ht,2,2,"ng-template",null,14,F),c()),e&2){let o=R(3),n=r().index;l(),s("ngIf",n===0)("ngIfElse",o)}}function gt(e,a){if(e&1&&(C(0,8),p(1,pt,2,1,"th",20)(2,Ct,4,2,"td",10),g()),e&2){let o=a.$implicit;s("matColumnDef",o)}}function yt(e,a){e&1&&f(0,"tr",18)}function vt(e,a){e&1&&f(0,"tr",19)}var kt=(()=>{let a=class a{constructor(n){this.dataService=n,this.transactions="portfolio",this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.xAxisLabel="",this.dataSource=new nt,this.sortedEtfs=[],this.headers=["Symbol","Debt To Equity (MRQ)","Current Ratio","Earnings Growth (YOY)","Revenue Growth (YOY)","Profit Margins","Forward PE","Forward EPS","PEG Ratio","Total Cash / Share","Revenue / Share","FCF Yield","FCF / Share","Return On Assets","Return On Equity","EV / EBITDA","EV / Revenue"],this.columnDefs=["symbol","debtToEquity","currentRatio","earningsQuarterlyGrowth","revenueGrowth","profitMargins","forwardPE","forwardEps","pegRatio","totalCashPerShare","revenuePerShare","fcfYield","fcfPerShare","returnOnAssets","returnOnEquity","enterpriseToEbitda","enterpriseToRevenue"],this.etfHeaders=["Symbol","Expense Ratio","Nav Price","Trailing PE","Trailing EPS","YTD Return","1 Month Return","3 month Return","1 Year Return","3 Year Return","5 year Return","10 Year return","3Y Beta","Total Assets"],this.etfColumnDefs=["symbol","annualReportExpenseRatio","navPrice","trailingPE","epsTrailingTwelveMonths","ytdReturn","1monthReturn","3monthReturn","1YearReturn","threeYearReturn","fiveYearReturn","tenYearReturn","beta3Year","totalAssets"],this.cells=[t=>"",t=>`${t.debtToEquity?.toFixed(2)}%`||0,t=>t.currentRatio?.toFixed(2)||0,t=>t.earningsQuarterlyGrowth?`${(t.earningsQuarterlyGrowth*100).toFixed(2)}%`:"0%",t=>`${(t.revenueGrowth*100).toFixed(2)}%`||0,t=>`${(t.profitMargins*100).toFixed(2)}%`||0,t=>t.forwardPE.toFixed(2)||0,t=>t.forwardEps.toFixed(2)||0,t=>t.pegRatio||0,t=>`$${t.totalCashPerShare}`||0,t=>`$${t.revenuePerShare}`||0,t=>`${(t.fcfYield*100).toFixed(2)}%`||0,t=>`$${t.fcfPerShare.toFixed(2)}`||0,t=>`${(t.returnOnAssets*100).toFixed(2)}%`||0,t=>`${(t.returnOnEquity*100).toFixed(2)}%`||0,t=>t.enterpriseToEbitda||0,t=>t.enterpriseToRevenue||0],this.etfCells=[t=>"",t=>(t.profile.feesExpensesInvestment.annualReportExpenseRatio*100).toFixed(2)+"%",t=>`$${t.navPrice.toFixed(2)}`,t=>t.trailingPE.toFixed(2),t=>t.epsTrailingTwelveMonths?.toFixed(2)||"N/A",t=>(t.fundPerformance.trailingReturns.ytd*100).toFixed(2)+"%",t=>(t.fundPerformance.trailingReturns.oneMonth*100).toFixed(2)+"%",t=>(t.fundPerformance.trailingReturns.threeMonth*100).toFixed(2)+"%",t=>(t.fundPerformance.trailingReturns.oneYear*100).toFixed(2)+"%",t=>(t.fundPerformance.trailingReturns.threeYear*100).toFixed(2)+"%",t=>(t.fundPerformance.trailingReturns.fiveYear*100).toFixed(2)+"%",t=>(t.fundPerformance.trailingReturns.tenYear*100).toFixed(2)+"%",t=>t.beta3Year,t=>t.totalAssets]}ngOnInit(){let n=Object.values(this.dataService.portfolioData).filter(i=>i.quoteType==="EQUITY");this.dataSource.data=this.sortStocks(n);let t=Object.values(this.dataService.portfolioData).filter(i=>i.quoteType==="ETF");this.sortedEtfs=this.sortEtfs(t),this.setChartData(1)}ngAfterViewInit(){this.dataSource.sort=this.sort}sortStocks(n){return n.sort((t,i)=>t["52WeekChange"]-i["52WeekChange"])}sortEtfs(n){return n.sort((t,i)=>t.ytdReturn-i.ytdReturn)}setChartData(n){let t={title:{text:""},legend:{data:[this.headers[n]]},tooltip:{},xAxis:{data:[],splitLine:{show:!0}},yAxis:{},series:[{name:this.headers[n],type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(m){return m*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(m){return m*5}};this.xAxisLabel=this.headers[n];let i=this.columnDefs[n];this.dataSource.data.sort((m,ot)=>m[i]-ot[i]).forEach(m=>{t.xAxis.data.push(m.symbol),t.series[0].data.push(m[i]||0)}),this.echartOptions=t}getColor(n,t){let i=this.cells[n](t);return i<0||i[0]==="-"||i[1]==="-"?"tomato":"#000000DE"}};a.\u0275fac=function(t){return new(t||a)(T(V))},a.\u0275cmp=P({type:a,selectors:[["portfolio-financials"]],viewQuery:function(t,i){if(t&1&&(y(h,5),y(x,5)),t&2){let m;v(m=S())&&(i.table=m.first),v(m=S())&&(i.sort=m.first)}},inputs:{transactions:"transactions"},standalone:!0,features:[O],decls:14,vars:11,consts:[[1,"add-border"],[1,"title"],[3,"options"],["mat-table","","matSort","","matSortActive","earningsQuarterlyGrowth","matSortDirection","asc",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-table","","matSort","","matSortActive","ytdReturn","matSortDirection","asc",3,"dataSource"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",3,"click",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header","",3,"click"],["mat-cell",""],["class","table-col-0",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"table-col-0"],[3,"stock"],[3,"ngStyle"],["mat-header-row",""],["mat-row",""],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-cell","","mat-sort-header",""],[4,"ngIf"]],template:function(t,i){t&1&&(d(0,"section",0)(1,"div",1)(2,"span"),u(3,"Financial Data"),c()(),f(4,"app-echart",2),c(),d(5,"table",3),p(6,mt,3,1,"ng-container",4)(7,dt,1,0,"tr",5)(8,ft,1,0,"tr",6),c(),f(9,"mat-divider"),d(10,"table",7),p(11,gt,3,1,"ng-container",4)(12,yt,1,0,"tr",5)(13,vt,1,0,"tr",6),c()),t&2&&(l(4),s("options",i.echartOptions),l(),s("dataSource",i.dataSource),l(),s("ngForOf",i.columnDefs),l(),s("matHeaderRowDef",i.columnDefs)("matHeaderRowDefSticky",!0),l(),s("matRowDefColumns",i.columnDefs),l(2),s("dataSource",i.sortedEtfs),l(),s("ngForOf",i.etfColumnDefs),l(),s("matHeaderRowDef",i.etfColumnDefs)("matHeaderRowDefSticky",!0),l(),s("matRowDefColumns",i.etfColumnDefs))},dependencies:[Q,it,G,q,j,x,B,et,h,U,K,W,L,X,z,J,Z,tt,$,A,H,N],styles:[".table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.mat-mdc-row[_ngcontent-%COMP%]{height:max-content}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}"]});let e=a;return e})();export{kt as a};
