import{a as le}from"./chunk-5IMIE7WL.js";import{a as y,b as re,c as de,d as se}from"./chunk-L4FTOQHC.js";import{I as g,J as Q,K as W,M as X,N as k,P as U,Q as q,S as J,T as Z,V as z,X as G,Y as K,ba as ee,ca as te,fa as ie,ga as ne,ia as ae,l as N,la as oe}from"./chunk-NJBPMSJC.js";import{a as Y,b as H}from"./chunk-M4F6S6BO.js";import{a as j}from"./chunk-63JH737O.js";import{Sa as B,h as R,i as V}from"./chunk-2PPLE5KH.js";import{$a as O,Bb as c,Cb as m,Db as v,Eb as w,Fb as A,Hb as C,Lb as D,Mb as l,Rb as M,Sb as P,Tb as I,Ub as F,Vb as _,Xb as T,_a as r,_b as $,gc as L,ja as E,qb as f,sb as d,ta as h,ua as u}from"./chunk-GTWXBXVC.js";import{a as S}from"./chunk-MON7YFGF.js";function ce(a,o){if(a&1&&(w(0),v(1,"info-card",15),A()),a&2){let i=o.$implicit;r(),d("icon",i.icon)("value",i.value)("valueType",i.valueType)("subtitle",i.subtitle)("color",i.color)("accentColor",i.color)}}function me(a,o){if(a&1&&(c(0,"section",13),f(1,ce,2,6,"ng-container",14),m()),a&2){let i=l();r(),d("ngForOf",i.infoCards)}}function pe(a,o){if(a&1){let i=C();c(0,"section",2)(1,"div",3)(2,"div",4)(3,"span"),_(4,"Dividend History"),m()()(),c(5,"div",16),v(6,"echarts-vertical-bar-chart",17),c(7,"div",18)(8,"ngx-charts-pie-chart",19),D("select",function(e){h(i);let n=l();return u(n.onSelect(e))})("activate",function(e){h(i);let n=l();return u(n.onActivate(e))})("deactivate",function(e){h(i);let n=l();return u(n.onDeactivate(e))}),m()()()()}if(a&2){let i=l();r(6),d("options",i.echartOptions),r(2),d("scheme","picnic")("results",i.pieChartData)("animations",!0)("explodeSlices",!0)("labels",!0)("legend",!0)("arcWidth",.75)}}function ve(a,o){if(a&1&&(c(0,"div",22),v(1,"ngx-charts-area-chart",23),m()),a&2){let i=l(2);r(),d("scheme",i.dividendChartColorScheme)("results",i.dividendLineChartData)("xAxisLabel",i.selectedSymbolLabel)("yAxisLabel","Dividend Rate")("showXAxisLabel",!0)("showYAxisLabel",!0)("xAxis",!0)("yAxis",!0)("autoScale",!0)("animations",!0)("gradient",!0)("yScaleMin",0)}}function he(a,o){if(a&1){let i=C();c(0,"section",2)(1,"div",3)(2,"div",4)(3,"span"),_(4,"Dividend History"),m()()(),c(5,"div",3),f(6,ve,2,12,"div",20),c(7,"div",18)(8,"ngx-charts-pie-chart",21),D("select",function(e){h(i);let n=l();return u(n.onSelect(e))})("activate",function(e){h(i);let n=l();return u(n.onActivate(e))})("deactivate",function(e){h(i);let n=l();return u(n.onDeactivate(e))}),m()()()()}if(a&2){let i=l();r(6),d("ngIf",i.dividendLineChartData),r(2),d("scheme","picnic")("results",i.pieChartData)("animations",!0)("explodeSlices",!0)("labels",!0)("legend",!0)("legendTitle","Tickers")("arcWidth",.75)}}function ue(a,o){if(a&1&&(c(0,"th",27),_(1),m()),a&2){let i=l().index,t=l();r(),T(" ",t.headers[i]," ")}}function fe(a,o){if(a&1&&(c(0,"div",30),v(1,"stock-name-card",31),m()),a&2){let i=l().$implicit;r(),d("stock",i)}}function _e(a,o){if(a&1){let i=C();c(0,"span",32),D("click",function(){h(i);let e=l().$implicit,n=l(2);return u(n.updateChart(e.symbol))}),_(1),m()}if(a&2){let i=l().$implicit,t=l().index,e=l();r(),T(" ",e.cells[t](i)," ")}}function xe(a,o){if(a&1&&(c(0,"td",28),f(1,fe,2,1,"div",29)(2,_e,2,1,"ng-template",null,0,L),m()),a&2){let i=F(3),t=l().index;r(),d("ngIf",t===0)("ngIfElse",i)}}function Ce(a,o){if(a&1&&(w(0,24),f(1,ue,2,1,"th",25)(2,xe,4,2,"td",26),A()),a&2){let i=o.$implicit;d("matColumnDef",i)}}function De(a,o){a&1&&v(0,"tr",33)}function ge(a,o){a&1&&v(0,"tr",34)}var Ye=(()=>{let o=class o{constructor(t){this.dataService=t,this.monthStrings=["January","February","March","April","May","June","July","August","September","October","November","December"],this.dividendPayoutMonths={AAPL:[5,8,11,2],ABBV:[7,10,1,4],ARCC:[6,9,12,3],CVS:[7,10,1,4],DIS:[12,7],DLR:[6,9,12,3],DVN:[6,9,12,3],ENB:[5,8,11,2],EPD:[7,10,1,4],ET:[5,10,2,8],MO:[6,9,12,3],MSFT:[5,8,11,2],O:[5,6,7,8,9,10,11,12,1,2,3,4],PFE:[5,7,11,1],SBUX:[5,8,11,2],SCHD:[6,9,12,3],SPG:[9,12,3,6],TPVG:[12,3,6,9],VICI:[3,6,9,12],VYM:[6,9,12,3]},this.browser="",this.dividendIncome=0,this.portfolioYieldOnCost=0,this.selectedSymbol="O",this.selectedSymbolLabel="",this.infoCards=[],this.dividendLineChartData=[],this.dividendChartColorScheme={domain:["teal"]},this.currentMonth=new Date().getMonth(),this.dividendIncomeChartData=Array.from({length:12},(e,n)=>({name:n,series:[]})),this.dividendProjectionChartData=Array.from({length:12},(e,n)=>({name:n,series:[]})),this.pieChartData=[],this.echartUpdateOptions={yAxis:{},xAxis:{data:[]},series:[{data:[]}]},this.dataSource=new K,this.headers=["Symbol","Dividend Income","Yield on Cost","Dividend Rate","Dividend Rate (TTM)","Dividend Yield","Dividend Yield (TTM)","5Y Avg. Yield","Payout Ratio","FCF Payout Ratio","Last Dividend Paid","Ex-dividend Date","Dividend Date"],this.columnDefs=["symbol","dividendIncome","yieldOnCost","dividendRate","trailingAnnualDividendRate","dividendYield","trailingAnnualDividendYield","fiveYearAvgDividendYield","payoutRatio","fcfPayoutRatio","lastDividendValue","exDividendDate","dividendDate"],this.cells=[e=>"",e=>`$${e.dividendIncome.toFixed(2)}`,e=>`${(e.yieldOnCost*100).toFixed(2)}%`,e=>`$${e.dividendRate?.toFixed(2)}`,e=>`$${e.trailingAnnualDividendRate?.toFixed(2)||0}`,e=>`${(e.dividendYield*100||0).toFixed(2)}%`,e=>`${(e.trailingAnnualDividendYield*100||0).toFixed(2)}%`,e=>`${(e.fiveYearAvgDividendYield||0).toFixed(2)}%`,e=>`${(e.payoutRatio*100||0).toFixed(2)}%`,e=>e.quoteType==="EQUITY"&&e.fcfPayoutRatio!==0?`${(e.fcfPayoutRatio*100).toFixed(2)}%`:"N/A",e=>`$${e.lastDividendValue?.toFixed(2)||0}`,e=>e.calendarEvents?.exDividendDate?new Date(e.calendarEvents.exDividendDate).toDateString():"N/A",e=>e.calendarEvents?.dividendDate?new Date(e.calendarEvents.dividendDate).toDateString():"N/A"]}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.portfolioData=this.dataService.portfolioData,this.dataSource.data=Object.values(this.portfolioData).filter(t=>t.dividendYield>0).map(t=>S(S({},this.portfolioHoldings[t.symbol]),t)),this.dataSource.data.forEach(t=>{if(this.pieChartData.push({name:t.symbol,value:t.dividendIncome}),t.calendarEvents?.dividendDate){let e=t.calendarEvents,n=new Date(e.dividendDate),s=n.getMonth();s>=new Date().getMonth()&&this.dividendIncomeChartData[s].series.push({name:`${t.symbol} | ${n.toDateString()}`,value:t.lastDividendValue*t.sharesOwned})}this.dividendPayoutMonths[t.symbol.toUpperCase()].forEach((e,n,s)=>{let x=e-1,b=t.dividendRate/s.length;this.dividendProjectionChartData[x].series.push({name:`${t.symbol} | ${t.shortName}`,value:t.sharesOwned*b})})}),this.dividendIncomeChartData.forEach((t,e)=>t.name=this.monthStrings[e]),this.dividendIncomeChartData=this.dividendIncomeChartData.filter(t=>t.series.length>0),this.dividendProjectionChartData.forEach((t,e)=>t.name=this.monthStrings[e]),this.dividendIncome=this.portfolioHoldings.portfolioDividendIncome,this.portfolioYieldOnCost=this.portfolioHoldings.portfolioYieldOnCost,this.browser=this.getBrowserName(),this.setInfoCards(),this.updateChart(this.selectedSymbol,!1)}ngAfterViewInit(){this.dataSource.sort=this.sort}getBrowserName(){let t=window?.navigator.userAgent.toLowerCase();return t.indexOf("edge")>-1?"Microsoft Edge":t.indexOf("edg")>-1?"Chromium-based Edge":t.indexOf("opr")>-1?"Opera":t.indexOf("chrome")>-1?"Chrome":t.indexOf("trident")>-1?"Internet Explorer":t.indexOf("firefox")>-1?"Firefox":t.indexOf("safari")>-1?"Safari":"other"}setInfoCards(){this.infoCards=[{icon:"payments",value:this.dividendIncome.toFixed(4),valueType:"currency",subtitle:"Projected Annual Income",color:null},{icon:"payments",value:(this.dividendIncome/4).toFixed(4),valueType:"currency",subtitle:"Average Quarterly Income",color:null},{icon:"payments",value:(this.dividendIncome/12).toFixed(4),valueType:"currency",subtitle:"Average Monthly Income",color:"teal"},{icon:"payments",value:(this.dividendIncome/365).toFixed(4),valueType:"currency",subtitle:"Average Daily Income",color:null},{icon:"payments",value:(this.dividendIncome/8765.81).toFixed(4),valueType:"currency",subtitle:"Average Hourly Income",color:null},{icon:"payments",value:(this.dividendIncome/525948.766).toFixed(4),valueType:"currency",subtitle:"Average Income Per Minute",color:null},{icon:"percent",value:this.portfolioYieldOnCost.toFixed(4),valueType:"percentage",subtitle:"Portfolio YOC",color:"teal"}]}updateChart(t,e=!0){let n={title:{text:""},legend:{data:["Dividend $"]},tooltip:{},xAxis:{data:[],splitLine:{show:!1}},yAxis:{},series:[{name:"Dividend $",type:"bar",data:[],emphasis:{focus:"series"},animationDelay:function(p){return p*10}}],animationEasing:"elasticOut",animationDelayUpdate:function(p){return p*5}},s=this.dataSource.data.filter(p=>p.symbol===t)[0],x={name:`${s.symbol} | ${s.shortName}`,series:[]},b=this.dataService.portfolioDividendHistory[t];Object.entries(b).forEach(p=>{x.series.push({name:new Date(p[0].split("-").join(" ")),value:+p[1]}),n.xAxis.data.push(p[0].split("-").join(" ")),n.series[0].data.push(+p[1])}),this.echartOptions=n,this.dividendLineChartData=[x],this.selectedSymbol=s.symbol,this.selectedSymbolLabel=`
      ${s.symbol} | 
      ${s.longName} | 
      ${s.profile?.sector||"ETF"} |
      ${s.profile?.industry||"ETF"}
    `,e&&window.scroll({top:800,left:0,behavior:"smooth"})}onSelect(t){let e=t.name||t;this.updateChart(e)}onActivate(t){}onDeactivate(t){}};o.\u0275fac=function(e){return new(e||o)(O(j))},o.\u0275cmp=E({type:o,selectors:[["portfolio-dividend"]],viewQuery:function(e,n){if(e&1&&(M(g,5),M(y,5)),e&2){let s;P(s=I())&&(n.table=s.first),P(s=I())&&(n.sort=s.first)}},standalone:!0,features:[$],decls:18,vars:28,consts:[["elseBlock",""],["class","dividend-cards-container",4,"ngIf"],[1,"add-border"],[1,"add-flex"],[1,"title"],[1,"chart-container","dividend-income"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","yAxisLabel","noBarWhenZero","showDataLabel"],[1,"chart-container","projected-dividend-income"],["class","add-border",4,"ngIf"],["mat-table","","matSort","","matSortActive","yieldOnCost","matSortDirection","desc",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"dividend-cards-container"],[4,"ngFor","ngForOf"],[3,"icon","value","valueType","subtitle","color","accentColor"],[1,"safari-charts-container"],[3,"options"],[1,"chart-container","dividend-pie"],[3,"select","activate","deactivate","scheme","results","animations","explodeSlices","labels","legend","arcWidth"],["class","chart-container dividend-chart",4,"ngIf"],[3,"select","activate","deactivate","scheme","results","animations","explodeSlices","labels","legend","legendTitle","arcWidth"],[1,"chart-container","dividend-chart"],[3,"scheme","results","xAxisLabel","yAxisLabel","showXAxisLabel","showYAxisLabel","xAxis","yAxis","autoScale","animations","gradient","yScaleMin"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",4,"ngIf","ngIfElse"],[1,"table-col-0"],[3,"stock"],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){e&1&&(f(0,me,2,1,"section",1),v(1,"mat-divider"),c(2,"section",2)(3,"div",3)(4,"div",4)(5,"span"),_(6,"Dividend Income Projection"),m()()(),c(7,"div",3)(8,"div",5),v(9,"ngx-charts-bar-vertical-stacked",6),m(),c(10,"div",7),v(11,"ngx-charts-bar-horizontal-stacked",6),m()()(),f(12,pe,9,8,"section",8)(13,he,9,9,"section",8),c(14,"table",9),f(15,Ce,3,1,"ng-container",10)(16,De,1,0,"tr",11)(17,ge,1,0,"tr",12),m()),e&2&&(d("ngIf",n.infoCards),r(9),d("scheme","natural")("results",n.dividendIncomeChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Scheduled Dividend Payments $")("noBarWhenZero",!0)("showDataLabel",!0),r(2),d("scheme","natural")("results",n.dividendProjectionChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("yAxisLabel","Estimated Monthly Dividend Income $")("noBarWhenZero",!0)("showDataLabel",!0),r(),d("ngIf",n.browser==="Safari"),r(),d("ngIf",n.browser!=="Safari"),r(),d("dataSource",n.dataSource),r(),d("ngForOf",n.columnDefs),r(),d("matHeaderRowDef",n.columnDefs)("matHeaderRowDefSticky",!0),r(),d("matRowDefColumns",n.columnDefs))},dependencies:[le,oe,N,H,Y,B,de,y,re,G,g,W,q,X,Q,J,k,U,Z,z,R,V,ae,ee,te,ie,ne,se],styles:["echarts-vertical-bar-chart[_ngcontent-%COMP%]{width:100%}.dividend-cards-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-top:1rem;margin-bottom:1rem}.safari-charts-container[_ngcontent-%COMP%]{display:flex;align-items:center}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}td.mat-mdc-cell[_ngcontent-%COMP%]:first-of-type   td.mat-mdc-footer-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}.mdc-data-table__header-cell[_ngcontent-%COMP%], .mdc-data-table__cell[_ngcontent-%COMP%]{padding:0}.refresh-button[_ngcontent-%COMP%]{margin-right:1rem}.dividend-income[_ngcontent-%COMP%]{max-width:10%}.dividend-chart[_ngcontent-%COMP%]{width:60%}.dividend-pie[_ngcontent-%COMP%]{width:40%}"]});let a=o;return a})();export{Ye as a};