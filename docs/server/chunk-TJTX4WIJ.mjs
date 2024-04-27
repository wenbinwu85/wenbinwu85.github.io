import './polyfills.server.mjs';
import{a as se}from"./chunk-AZWSM5EA.mjs";import{a as g,b as Z,c as z,d as pe}from"./chunk-ENJXYE3D.mjs";import{B as ee,C as te,E as ie,F as ne,H as oe,I as ae,K as re,M as de,N as le,ga as me,j as k,l as Q,p as J,q as W,t as X,u as U,w as q,x as y,y as G,z as K}from"./chunk-F6RNN6DJ.mjs";import{a as H,b as N}from"./chunk-ALDPKOHJ.mjs";import{a as ce}from"./chunk-VB67HCTN.mjs";import{N as B,O as j}from"./chunk-5GGA53WE.mjs";import{l as L,m as Y}from"./chunk-K3N5MYY5.mjs";import{C as T,Db as a,Eb as c,Fb as u,Gb as S,Hb as w,Jb as C,Nb as x,Ob as r,Tb as A,Ub as M,Vb as P,Wb as F,Xb as f,Zb as I,ab as l,ac as V,bb as $,ic as R,ja as O,q as E,sb as _,ta as v,ua as h,ub as s}from"./chunk-WSZAJ4A6.mjs";import{a as b}from"./chunk-VVCT4QZE.mjs";function ve(o,d){if(o&1&&(S(0),u(1,"info-card",15),w()),o&2){let n=d.$implicit;l(),s("icon",n.icon)("value",n.value)("valueType",n.valueType)("subtitle",n.subtitle)("color",n.color)("accentColor",n.color)}}function he(o,d){if(o&1&&(a(0,"section",13),_(1,ve,2,6,"ng-container",14),c()),o&2){let n=r();l(),s("ngForOf",n.infoCards)}}function ue(o,d){if(o&1){let n=C();a(0,"section",2)(1,"div",3)(2,"div",4)(3,"span"),f(4,"Dividend History"),c()(),a(5,"button",16),x("click",function(){v(n);let e=r();return h(e.refreshDividend(e.selectedSymbol,!1))}),a(6,"mat-icon"),f(7,"cloud_sync"),c(),a(8,"span"),f(9,"Refresh Dividend History"),c()()(),a(10,"div",17),u(11,"echarts-vertical-bar-chart",18),a(12,"div",19)(13,"ngx-charts-pie-chart",20),x("select",function(e){v(n);let i=r();return h(i.onSelect(e))})("activate",function(e){v(n);let i=r();return h(i.onActivate(e))})("deactivate",function(e){v(n);let i=r();return h(i.onDeactivate(e))}),c()()()()}if(o&2){let n=r();l(11),s("options",n.echartOptions),l(2),s("scheme","picnic")("results",n.pieChartData)("animations",!0)("explodeSlices",!0)("labels",!0)("legend",!0)("arcWidth",.75)}}function fe(o,d){if(o&1&&(a(0,"div",23),u(1,"ngx-charts-area-chart",24),c()),o&2){let n=r(2);l(),s("scheme",n.dividendChartColorScheme)("results",n.dividendLineChartData)("xAxisLabel",n.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("autoScale",!0)("animations",!0)("gradient",!0)("yScaleMin",0)}}function _e(o,d){if(o&1){let n=C();a(0,"section",2)(1,"div",3)(2,"div",4)(3,"span"),f(4,"Dividend History"),c()(),a(5,"button",16),x("click",function(){v(n);let e=r();return h(e.refreshDividend(e.selectedSymbol,!1))}),a(6,"mat-icon"),f(7,"cloud_sync"),c(),a(8,"span"),f(9,"Refresh Dividend History"),c()()(),a(10,"div",3),_(11,fe,2,12,"div",21),a(12,"div",19)(13,"ngx-charts-pie-chart",22),x("select",function(e){v(n);let i=r();return h(i.onSelect(e))})("activate",function(e){v(n);let i=r();return h(i.onActivate(e))})("deactivate",function(e){v(n);let i=r();return h(i.onDeactivate(e))}),c()()()()}if(o&2){let n=r();l(11),s("ngIf",n.dividendLineChartData),l(2),s("scheme","picnic")("results",n.pieChartData)("animations",!0)("explodeSlices",!0)("labels",!0)("legend",!0)("legendTitle","Tickers")("arcWidth",.75)}}function xe(o,d){if(o&1&&(a(0,"th",28),f(1),c()),o&2){let n=r().index,t=r();l(),I(" ",t.headers[n]," ")}}function De(o,d){if(o&1&&(a(0,"div",31),u(1,"stock-name-card",32),c()),o&2){let n=r().$implicit;l(),s("stock",n)}}function Ce(o,d){if(o&1){let n=C();a(0,"span",33),x("click",function(){v(n);let e=r().$implicit,i=r(2);return h(i.refreshDividend(e.symbol,!0))}),f(1),c()}if(o&2){let n=r().$implicit,t=r().index,e=r();l(),I(" ",e.cells[t](n)," ")}}function ge(o,d){if(o&1&&(a(0,"td",29),_(1,De,2,1,"div",30)(2,Ce,2,1,"ng-template",null,0,R),c()),o&2){let n=F(3),t=r().index;l(),s("ngIf",t===0)("ngIfElse",n)}}function ye(o,d){if(o&1&&(S(0,25),_(1,xe,2,1,"th",26)(2,ge,4,2,"td",27),w()),o&2){let n=d.$implicit;s("matColumnDef",n)}}function be(o,d){o&1&&u(0,"tr",34)}function Se(o,d){o&1&&u(0,"tr",35)}var Qe=(()=>{let d=class d{constructor(t){this.dataService=t,this.monthStrings=["January","February","March","April","May","June","July","August","September","October","November","December"],this.dividendPayoutMonths={AAPL:[5,8,11,2],ABBV:[7,10,1,4],ARCC:[6,9,12,3],CVS:[7,10,1,4],DIS:[12,7],DLR:[6,9,12,3],DVN:[6,9,12,3],ENB:[5,8,11,2],EPD:[7,10,1,4],ET:[5,10,2,8],MO:[6,9,12,3],MSFT:[5,8,11,2],O:[5,6,7,8,9,10,11,12,1,2,3,4],PFE:[5,7,11,1],SBUX:[5,8,11,2],SCHD:[6,9,12,3],SPG:[9,12,3,6],TPVG:[12,3,6,9],VICI:[3,6,9,12],VYM:[6,9,12,3]},this.browser="",this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbol="O",this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.dividendChartColorScheme={domain:["teal"]},this.currentMonth=new Date().getMonth(),this.dividendIncomeChartData=Array.from({length:12},(e,i)=>({name:i,series:[]})),this.dividendProjectionChartData=Array.from({length:12},(e,i)=>({name:i,series:[]})),this.pieChartData=[],this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new le,this.headers=["Symbol","Dividend Income","Yield on Cost","Dividend Rate","Dividend Rate (TTM)","Dividend Yield","Dividend Yield (TTM)","5Y Avg. Yield","Payout Ratio","FCF Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendIncome","yieldOnCost","dividendRate","trailingAnnualDividendRate","dividendYield","trailingAnnualDividendYield","fiveYearAvgDividendYield","payoutRatio","fcfPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[e=>"",e=>`$${e.dividendIncome.toFixed(2)}`,e=>`${(e.yieldOnCost*100).toFixed(2)}%`,e=>`$${e.dividendRate?.toFixed(2)}`,e=>`$${e.trailingAnnualDividendRate?.toFixed(2)||0}`,e=>`${(e.dividendYield*100||0).toFixed(2)}%`,e=>`${(e.trailingAnnualDividendYield*100||0).toFixed(2)}%`,e=>`${(e.fiveYearAvgDividendYield||0).toFixed(2)}%`,e=>`${(e.payoutRatio*100||0).toFixed(2)}%`,e=>e.quoteType==="EQUITY"&&e.fcfPayoutRatio!==0?`${(e.fcfPayoutRatio*100).toFixed(2)}%`:"N/A",e=>`$${e.lastDividendValue?.toFixed(2)||0}`,e=>e.calendarEvents?.exDividendDate?new Date(e.calendarEvents.exDividendDate).toDateString():"N/A",e=>e.calendarEvents?.dividendDate?new Date(e.calendarEvents.dividendDate).toDateString():"N/A"]}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.portfolioData=this.dataService.portfolioData,this.dataSource.data=Object.values(this.portfolioData).filter(t=>t.dividendYield>0).map(t=>b(b({},this.portfolioHoldings[t.symbol]),t)),this.dataSource.data.forEach(t=>{if(this.pieChartData.push({name:t.symbol,value:t.dividendIncome}),t.calendarEvents?.dividendDate){let e=t.calendarEvents,i=new Date(e.dividendDate),m=i.getMonth();m>=new Date().getMonth()&&this.dividendIncomeChartData[m].series.push({name:`${t.symbol} | ${i.toDateString()}`,value:t.lastDividendValue*t.sharesOwned})}this.dividendPayoutMonths[t.symbol.toUpperCase()].forEach((e,i,m)=>{let D=e-1,p=t.dividendRate/m.length;this.dividendProjectionChartData[D].series.push({name:`${t.symbol} | ${t.shortName}`,value:t.sharesOwned*p})})}),this.dividendIncomeChartData.forEach((t,e)=>t.name=this.monthStrings[e]),this.dividendIncomeChartData=this.dividendIncomeChartData.filter(t=>t.series.length>0),this.dividendProjectionChartData.forEach((t,e)=>t.name=this.monthStrings[e]),this.dividendIncome=this.portfolioHoldings.portfolioDividendIncome,this.portfolioYieldOnCost=this.portfolioHoldings.portfolioYieldOnCost,this.browser=this.getBrowserName(),this.setInfoCards(),this.refreshDividend(this.selectedSymbol,!0)}ngAfterViewInit(){this.dataSource.sort=this.sort}getBrowserName(){let t=window?.navigator.userAgent.toLowerCase();return t.indexOf("edge")>-1?"Microsoft Edge":t.indexOf("edg")>-1?"Chromium-based Edge":t.indexOf("opr")>-1?"Opera":t.indexOf("chrome")>-1?"Chrome":t.indexOf("trident")>-1?"Internet Explorer":t.indexOf("firefox")>-1?"Firefox":t.indexOf("safari")>-1?"Safari":"other"}setInfoCards(){this.infoCards=[{icon:"payments",value:this.dividendIncome.toFixed(4),valueType:"currency",subtitle:"Projected Annual Income",color:null},{icon:"payments",value:(this.dividendIncome/4).toFixed(4),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{icon:"payments",value:(this.dividendIncome/12).toFixed(4),valueType:"currency",subtitle:"Average Monthly Income",color:"teal"},{icon:"payments",value:(this.dividendIncome/365).toFixed(4),valueType:"currency",subtitle:"Average Daily Income",color:null},{icon:"payments",value:(this.dividendIncome/8765.81).toFixed(4),valueType:"currency",subtitle:"Average Hourly Income",color:null},{icon:"payments",value:(this.dividendIncome/525948.766).toFixed(4),valueType:"currency",subtitle:"Average Income Per Minute",color:null},{icon:"percent",value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"teal"}]}updateChart(t,e){let i={title:{text:""},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(p){return p*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(p){return p*5}},m=this.dataSource.data.filter(p=>p.symbol===t)[0],D={name:`${m.symbol} | ${m.shortName}`,series:[]};Object.entries(e).forEach(p=>{D.series.push({name:new Date(p[0].split("-").join(" ")),value:+p[1]}),i.xAxis.data.push(p[0].split("-").join(" ")),i.series[0].data.push(+p[1])}),this.echartOptions=i,this.dividendLineChartData=[D],this.selectedSymbol=m.symbol,this.selectedSymbolLabel=`
      ${m.symbol} | 
      ${m.longName} | 
      ${m.profile?.sector||"ETF"} |
      ${m.profile?.industry||"ETF"}
    `,window.scroll({top:0,left:0,behavior:"smooth"})}refreshDividend(t,e){this.dataService.getDividendHistory(t,10,e).pipe(E(i=>{if(i.status===500)throw`Api Error: ${t} - ${i.status} - ${i.message}`;return i}),T(i=>(console.log(i),this.dataService.getDividendHistory(t,10,!1)))).subscribe(i=>{this.updateChart(t,i)})}onSelect(t){let e=t.name||t;this.refreshDividend(e,!0)}onActivate(t){console.log("Activate",JSON.parse(JSON.stringify(t)))}onDeactivate(t){console.log("Deactivate",JSON.parse(JSON.stringify(t)))}};d.\u0275fac=function(e){return new(e||d)($(ce))},d.\u0275cmp=O({type:d,selectors:[["portfolio-dividend"]],viewQuery:function(e,i){if(e&1&&(A(y,5),A(g,5)),e&2){let m;M(m=P())&&(i.table=m.first),M(m=P())&&(i.sort=m.first)}},standalone:!0,features:[V],decls:18,vars:28,consts:[["elseBlock",""],["class","dividend-cards-container",4,"ngIf"],[1,"add-border"],[1,"add-flex"],[1,"title"],[1,"chart-container","dividend-income"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel","noBarWhenZero","showDataLabel"],[1,"chart-container","projected-dividend-income"],["class","add-border",4,"ngIf"],["mat-table","","matSort","","matSortActive","yieldOnCost","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"dividend-cards-container"],[4,"ngFor","ngForOf"],[3,"icon","value","valueType","subtitle","color","accentColor"],["mat-button","","color","primary",1,"refresh-button",3,"click"],[1,"safari-charts-container"],[3,"options"],[1,"chart-container","dividend-pie"],[3,"select","activate","deactivate","scheme","results","animations","explodeSlices","labels","legend","arcWidth"],["class","chart-container dividend-chart",4,"ngIf"],[3,"select","activate","deactivate","scheme","results","animations","explodeSlices","labels","legend","legendTitle","arcWidth"],[1,"chart-container","dividend-chart"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","autoScale","animations","gradient","yScaleMin"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",4,"ngIf","ngIfElse"],[1,"table-col-0"],[3,"stock"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,i){e&1&&(_(0,he,2,1,"section",1),u(1,"mat-divider"),a(2,"section",2)(3,"div",3)(4,"div",4)(5,"span"),f(6,"Dividend Income Projection"),c()()(),a(7,"div",3)(8,"div",5),u(9,"ngx-charts-bar-vertical-stacked",6),c(),a(10,"div",7),u(11,"ngx-charts-bar-horizontal-stacked",6),c()()(),_(12,ue,14,8,"section",8)(13,_e,14,9,"section",8),a(14,"table",9),_(15,ye,3,1,"ng-container",10)(16,be,1,0,"tr",11)(17,Se,1,0,"tr",12),c()),e&2&&(s("ngIf",i.infoCards),l(9),s("scheme","natural")("results",i.dividendIncomeChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Scheduled Dividend Payments $")("noBarWhenZero",!0)("showDataLabel",!0),l(2),s("scheme","natural")("results",i.dividendProjectionChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Estimated Monthly Dividend Income $")("noBarWhenZero",!0)("showDataLabel",!0),l(),s("ngIf",i.browser==="Safari"),l(),s("ngIf",i.browser!=="Safari"),l(),s("dataSource",i.dataSource),l(),s("ngForOf",i.columnDefs),l(),s("matHeaderRowDef",i.columnDefs)("matHeaderRowDefSticky",!0),l(),s("matRowDefColumns",i.columnDefs))},dependencies:[se,me,Q,k,N,H,j,B,z,g,Z,de,y,K,ne,ee,G,oe,te,ie,ae,re,L,Y,q,J,W,X,U,pe],styles:["echarts-vertical-bar-chart[_ngcontent-%COMP%]{width:100%}.dividend-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:1rem;margin-bottom:1rem}.safari-charts-container[_ngcontent-%COMP%]{display:flex;align-items:center}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.refresh-button[_ngcontent-%COMP%]{margin-right:1rem}.dividend-income[_ngcontent-%COMP%]{max-width:10%}.dividend-chart[_ngcontent-%COMP%]{width:60%}.dividend-pie[_ngcontent-%COMP%]{width:40%}"]});let o=d;return o})();export{Qe as a};
