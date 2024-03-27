import{a as ce}from"./chunk-6XOLXIVK.js";import{b as B,f as j,h as J}from"./chunk-MTIZ7YAR.js";import{a as g,b as z,c as G,d as se}from"./chunk-VPV63GPP.js";import{f as D,g as K,h as Z,j as ee,k as te,m as ie,n as ne,p as oe,q as ae,s as re,u as de,v as le}from"./chunk-JXCSR3FL.js";import{a as U,c as X}from"./chunk-4E2FNKWD.js";import{a as q}from"./chunk-4B5VZ53H.js";import{a as N,b as Q}from"./chunk-4SE5XUQI.js";import{Pa as L,Qa as k,Ra as W,h as H,i as Y}from"./chunk-UCUWC6TM.js";import{$a as F,Ab as d,Bb as s,C as O,Cb as h,Db as S,Eb as b,Gb as C,Kb as x,Lb as a,Qb as w,Rb as M,Sb as T,Tb as R,Ub as u,Vb as I,Zb as $,_a as l,fc as V,ja as E,pb as _,q as A,rb as c,ta as f,ua as v}from"./chunk-Z2OYXGZW.js";import{a as y}from"./chunk-MON7YFGF.js";function me(n,r){if(n&1&&(S(0),h(1,"info-card",9),b()),n&2){let i=r.$implicit;l(),c("icon",i.icon)("value",i.value)("valueType",i.valueType)("subtitle",i.subtitle)("color",i.color)("accentColor",i.color)}}function pe(n,r){if(n&1&&(d(0,"section",7),_(1,me,2,6,"ng-container",8),s()),n&2){let i=a();l(),c("ngForOf",i.infoCards)}}function fe(n,r){if(n&1){let i=C();d(0,"section",10)(1,"div",11)(2,"span",12),u(3,"Dividend History"),s(),d(4,"button",13),x("click",function(){f(i);let e=a();return v(e.refreshDividend(e.selectedSymbol,!1))}),d(5,"mat-icon"),u(6,"cloud_sync"),s(),d(7,"span"),u(8,"Refresh Dividend History"),s()()(),d(9,"div",14),h(10,"echarts-vertical-bar-chart",15),d(11,"div",16)(12,"ngx-charts-pie-chart",17),x("select",function(e){f(i);let o=a();return v(o.onSelect(e))})("activate",function(e){f(i);let o=a();return v(o.onActivate(e))})("deactivate",function(e){f(i);let o=a();return v(o.onDeactivate(e))}),s()()()()}if(n&2){let i=a();l(10),c("options",i.echartOptions),l(2),c("scheme","picnic")("results",i.pieChartData)("animations",!0)("explodeSlices",!0)("labels",!0)("legend",!0)("arcWidth",.75)}}function ve(n,r){if(n&1&&(d(0,"div",20),h(1,"ngx-charts-area-chart",21),s()),n&2){let i=a(2);l(),c("scheme",i.dividendChartColorScheme)("results",i.dividendLineChartData)("xAxisLabel",i.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("autoScale",!0)("animations",!0)("gradient",!0)("yScaleMin",0)}}function ue(n,r){if(n&1){let i=C();d(0,"section",10)(1,"div",11)(2,"span",12),u(3,"Dividend History"),s(),d(4,"button",13),x("click",function(){f(i);let e=a();return v(e.refreshDividend(e.selectedSymbol,!1))}),d(5,"mat-icon"),u(6,"cloud_sync"),s(),d(7,"span"),u(8,"Refresh Dividend History"),s()()(),d(9,"div",11),_(10,ve,2,12,"div",18),d(11,"div",16)(12,"ngx-charts-pie-chart",19),x("select",function(e){f(i);let o=a();return v(o.onSelect(e))})("activate",function(e){f(i);let o=a();return v(o.onActivate(e))})("deactivate",function(e){f(i);let o=a();return v(o.onDeactivate(e))}),s()()()()}if(n&2){let i=a();l(10),c("ngIf",i.dividendLineChartData),l(2),c("scheme","picnic")("results",i.pieChartData)("animations",!0)("explodeSlices",!0)("labels",!0)("legend",!0)("legendTitle","Tickers")("arcWidth",.75)}}function _e(n,r){if(n&1&&(d(0,"th",25),u(1),s()),n&2){let i=a().index,t=a();l(),I(t.headers[i])}}function he(n,r){if(n&1&&(d(0,"div",28),h(1,"stock-name-card",29),s()),n&2){let i=a().$implicit;l(),c("stock",i)}}function xe(n,r){if(n&1){let i=C();d(0,"span",30),x("click",function(){f(i);let e=a().$implicit,o=a(2);return v(o.refreshDividend(e.symbol,!0))}),u(1),s()}if(n&2){let i=a().$implicit,t=a().index,e=a();l(),I(e.cells[t](i))}}function Ce(n,r){if(n&1&&(d(0,"td",26),_(1,he,2,1,"div",27)(2,xe,2,1,"ng-template",null,0,V),s()),n&2){let i=R(3),t=a().index;l(),c("ngIf",t===0)("ngIfElse",i)}}function ge(n,r){if(n&1&&(S(0,22),_(1,_e,2,1,"th",23)(2,Ce,4,2,"td",24),b()),n&2){let i=r.$implicit;c("matColumnDef",i)}}function De(n,r){n&1&&h(0,"tr",31)}function ye(n,r){n&1&&h(0,"tr",32)}var Qe=(()=>{let r=class r{constructor(t){this.dataService=t,this.browser="",this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbol="SCHD",this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.dividendChartColorScheme={domain:["teal"]},this.pieChartData=[],this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new le,this.headers=["Symbol","Dividend Income","Yield on Cost","Dividend Rate","Dividend Rate (TTM)","Dividend Yield","Dividend Yield (TTM)","5Y Avg. Yield","Payout Ratio","FCF Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendIncome","yieldOnCost","dividendRate","trailingAnnualDividendRate","dividendYield","trailingAnnualDividendYield","fiveYearAvgDividendYield","payoutRatio","fcfPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[e=>"",e=>`$${e.dividendIncome.toFixed(2)}`,e=>`${(e.yieldOnCost*100).toFixed(2)}%`,e=>`$${e.dividendRate?.toFixed(2)}`,e=>`$${e.trailingAnnualDividendRate?.toFixed(2)||0}`,e=>`${(e.dividendYield*100||0).toFixed(2)}%`,e=>`${(e.trailingAnnualDividendYield*100||0).toFixed(2)}%`,e=>`${(e.fiveYearAvgDividendYield||0).toFixed(2)}%`,e=>`${(e.payoutRatio*100||0).toFixed(2)}%`,e=>e.quoteType==="EQUITY"&&e.fcfPayoutRatio!==0?`${(e.fcfPayoutRatio*100).toFixed(2)}%`:"N/A",e=>`$${e.lastDividendValue?.toFixed(2)||0}`,e=>e.calendarEvents?.exDividendDate?new Date(e.calendarEvents.exDividendDate).toDateString():"N/A",e=>e.calendarEvents?.dividendDate?new Date(e.calendarEvents.dividendDate).toDateString():"N/A"]}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.portfolioData=this.dataService.portfolioData,this.dataSource.data=Object.values(this.portfolioData).filter(t=>t.dividendYield>0).map(t=>y(y({},this.portfolioHoldings[t.symbol]),t)),this.dividendIncome=this.portfolioHoldings.portfolioDividendIncome,this.portfolioYieldOnCost=this.portfolioHoldings.portfolioYieldOnCost,this.browser=this.getBrowserName(),this.setInfoCards(),this.refreshDividend(this.selectedSymbol,!0),this.dataSource.data.forEach(t=>{this.pieChartData.push({name:t.symbol,value:t.dividendIncome})})}ngAfterViewInit(){this.dataSource.sort=this.sort}getBrowserName(){let t=window?.navigator.userAgent.toLowerCase();return t.indexOf("edge")>-1?"Microsoft Edge":t.indexOf("edg")>-1?"Chromium-based Edge":t.indexOf("opr")>-1?"Opera":t.indexOf("chrome")>-1?"Chrome":t.indexOf("trident")>-1?"Internet Explorer":t.indexOf("firefox")>-1?"Firefox":t.indexOf("safari")>-1?"Safari":"other"}setInfoCards(){this.infoCards=[{icon:"payments",value:this.dividendIncome.toFixed(4),valueType:"currency",subtitle:"Projected Annual Income",color:null},{icon:"payments",value:(this.dividendIncome/4).toFixed(4),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{icon:"payments",value:(this.dividendIncome/12).toFixed(4),valueType:"currency",subtitle:"Average Monthly Income",color:"teal"},{icon:"payments",value:(this.dividendIncome/365).toFixed(4),valueType:"currency",subtitle:"Average Daily Income",color:null},{icon:"payments",value:(this.dividendIncome/8765.81).toFixed(4),valueType:"currency",subtitle:"Average Hourly Income",color:null},{icon:"payments",value:(this.dividendIncome/525948.766).toFixed(4),valueType:"currency",subtitle:"Average Income Per Minute",color:null},{icon:"percent",value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"teal"}]}updateChart(t,e){let o={title:{text:""},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(p){return p*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(p){return p*5}},m=this.dataSource.data.filter(p=>p.symbol===t)[0],P={name:m.longName,series:[]};Object.entries(e).forEach(p=>{P.series.push({name:new Date(p[0].split("-").join(" ")),value:+p[1]}),o.xAxis.data.push(p[0].split("-").join(" ")),o.series[0].data.push(+p[1])}),this.echartOptions=o,this.dividendLineChartData=[P],this.selectedSymbol=m.symbol,this.selectedSymbolLabel=`${m.symbol} | ${m.longName} | ${m.profile?.sector||"ETF"}`,window.scroll({top:100,left:0,behavior:"smooth"})}refreshDividend(t,e){this.dataService.getDividendHistory(t,10,e).pipe(A(o=>{if(o.status===500)throw`Api Error: ${t} - ${o.status} - ${o.message}`;return o}),O(o=>(console.log(o),this.dataService.getDividendHistory(t,10,!1)))).subscribe(o=>{this.updateChart(t,o)})}onSelect(t){let e=t.name||t;this.refreshDividend(e,!0)}onActivate(t){console.log("Activate",JSON.parse(JSON.stringify(t)))}onDeactivate(t){console.log("Deactivate",JSON.parse(JSON.stringify(t)))}};r.\u0275fac=function(e){return new(e||r)(F(W))},r.\u0275cmp=E({type:r,selectors:[["portfolio-dividend"]],viewQuery:function(e,o){if(e&1&&(w(D,5),w(g,5)),e&2){let m;M(m=T())&&(o.table=m.first),M(m=T())&&(o.sort=m.first)}},standalone:!0,features:[$],decls:8,vars:8,consts:[["elseBlock",""],["class","dividend-cards-container",4,"ngIf"],["class","add-border",4,"ngIf"],["mat-table","","matSort","","matSortActive","yieldOnCost","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"dividend-cards-container"],[4,"ngFor","ngForOf"],[3,"icon","value","valueType","subtitle","color","accentColor"],[1,"add-border"],[1,"add-flex"],[1,"title"],["mat-button","","color","primary",1,"refresh-button",3,"click"],[1,"safari-charts-container"],[3,"options"],[1,"chart-container","dividend-pie"],[3,"select","activate","deactivate","scheme","results","animations","explodeSlices","labels","legend","arcWidth"],["class","chart-container dividend-chart",4,"ngIf"],[3,"select","activate","deactivate","scheme","results","animations","explodeSlices","labels","legend","legendTitle","arcWidth"],[1,"chart-container","dividend-chart"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","autoScale","animations","gradient","yScaleMin"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",4,"ngIf","ngIfElse"],[1,"table-col-0"],[3,"stock"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,o){e&1&&(_(0,pe,2,1,"section",1),h(1,"mat-divider"),_(2,fe,13,8,"section",2)(3,ue,13,9,"section",2),d(4,"table",3),_(5,ge,3,1,"ng-container",4)(6,De,1,0,"tr",5)(7,ye,1,0,"tr",6),s()),e&2&&(c("ngIf",o.infoCards),l(2),c("ngIf",o.browser==="Safari"),l(),c("ngIf",o.browser!=="Safari"),l(),c("dataSource",o.dataSource),l(),c("ngForOf",o.columnDefs),l(),c("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),l(),c("matRowDefColumns",o.columnDefs))},dependencies:[ce,q,X,U,Q,N,k,L,G,g,z,de,D,Z,ne,ee,K,oe,te,ie,ae,re,H,Y,J,B,j,se],styles:["echarts-vertical-bar-chart[_ngcontent-%COMP%]{width:100%}.safari-charts-container[_ngcontent-%COMP%]{display:flex;align-items:center}.dividend-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:1rem;margin-bottom:1rem}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.refresh-button[_ngcontent-%COMP%]{margin-right:1rem}.dividend-chart[_ngcontent-%COMP%]{width:60%}.dividend-pie[_ngcontent-%COMP%]{width:40%}"]});let n=r;return n})();export{Qe as a};
