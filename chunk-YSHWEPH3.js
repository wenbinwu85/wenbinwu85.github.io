import{b as R,c as N}from"./chunk-3Q6ZSZGB.js";import{d as M}from"./chunk-CUEZWQW2.js";import{d as Q}from"./chunk-2LLVLK25.js";import{$ as H,da as O,ea as j,ia as B,l as _,q as E,s as W,t as F,u as X}from"./chunk-NJBPMSJC.js";import{a as k,b as P}from"./chunk-M4F6S6BO.js";import{g as I}from"./chunk-6GHMPJNO.js";import{a as Y}from"./chunk-63JH737O.js";import{Sa as L,i as w,j as D,p as T}from"./chunk-2PPLE5KH.js";import{$a as g,$b as h,Bb as l,Cb as r,Db as m,Lb as C,Mb as f,Vb as p,_a as n,_b as b,ac as u,bc as A,cc as S,ja as v,qb as x,sb as o}from"./chunk-GTWXBXVC.js";var q=()=>({"padding-right":"1.25rem"}),y=a=>[a],J=()=>["S&P 500"],U=()=>({name:"S&P 500",value:"gold"}),z=(a,s)=>[a,s],G=()=>({name:"SCHD",value:"deepskyblue"}),K=()=>({name:"VYM",value:"maroon"}),Z=()=>({name:"JEPI",value:"dodgerblue"}),$=(a,s,t)=>[a,s,t];function ee(a,s){if(a&1&&(l(0,"div"),m(1,"stock-price-insight",12),r()),a&2){let t=f();n(),o("symbol",t.selectedSymbol)}}function te(a,s){if(a&1&&(l(0,"div",2)(1,"div",13),m(2,"ngx-charts-bar-vertical",14),r(),l(3,"div",13),m(4,"ngx-charts-bar-vertical",14),r(),l(5,"div",13),m(6,"ngx-charts-bar-vertical",15),r()()),a&2){let t=f();n(2),o("scheme",t.performanceChartColorScheme)("results",t.fiftyDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 50 Day MA %")("yScaleMin",t.fiftyDayMAChartData[0].value-5)("customColors",u(36,y,t.selectedSymbolColor)),n(2),o("scheme",t.performanceChartColorScheme)("results",t.twoHundredDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 200 Day MA %")("yScaleMin",t.twoHundredDayMAChartData[0].value-5)("customColors",u(38,y,t.selectedSymbolColor)),n(2),o("scheme",t.performanceChartColorScheme)("results",t.fiftyTwoWeekChangeChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","52 Week Change %")("activeEntries",h(40,J))("customColors",A(42,z,t.selectedSymbolColor,h(41,U)))}}function ie(a,s){if(a&1&&(l(0,"div",13),m(1,"ngx-charts-bar-vertical-2d",16),r()),a&2){let t=f();n(),o("results",t.etfPerformanceChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("showDataLabel",!0)("rotateXAxisTicks",!0)("yAxisLabel","ETF Performance %")("customColors",S(14,$,h(11,G),h(12,K),h(13,Z)))}}function ae(a,s){if(a&1&&(l(0,"div",2)(1,"div",13),m(2,"ngx-charts-bar-vertical",17),r(),l(3,"div",13),m(4,"ngx-charts-bar-vertical",17),r(),l(5,"div",13),m(6,"ngx-charts-bar-vertical",18),r()()),a&2){let t=f();n(2),o("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekLowChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % above 52 week low")("customColors",u(34,y,t.selectedSymbolColor)),n(2),o("scheme",t.fiftyTwoWeekChartColorScheme)("results",t.fiftyTwoWeekHighChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % below 52 week high")("customColors",u(36,y,t.selectedSymbolColor)),n(2),o("scheme",t.targetPriceChartColorScheme)("results",t.discountChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yScaleMin",-5)("yAxisLabel","Price % vs mean target price")("customColors",u(38,y,t.selectedSymbolColor))}}var We=(()=>{let s=class s{constructor(c){this.dataService=c,this.sortedStocks=[],this.sortedEtfs=[],this.sp500FiftyTwoWeekChange=0,this.fiftyTwoWeekChangeChartData=[],this.fiftyTwoWeekLowChartData=[],this.fiftyTwoWeekHighChartData=[],this.discountChartData=[],this.fiftyDayMAChartData=[],this.twoHundredDayMAChartData=[],this.etfPerformanceChartData=[],this.sp500="S&P 500",this.selectedPerformanceChart=1,this.selectedSymbol="SCHD",this.selectedSymbolColor={name:"SCHD",value:"teal"},this.performanceChartColorScheme={domain:["slategrey"]},this.fiftyTwoWeekChartColorScheme={domain:["slategrey"]},this.targetPriceChartColorScheme={domain:["slategrey"]}}ngOnInit(){this.sortedStocks=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="EQUITY").sort((e,i)=>e["52WeekChange"]-i["52WeekChange"]),this.sortedEtfs=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="ETF").sort((e,i)=>e.ytdReturn-i.ytdReturn),this.sp500FiftyTwoWeekChange=this.sortedStocks[0].SandP52WeekChange,this.selectedStock=Object.values(this.dataService.portfolioData).filter(e=>e.symbol===this.selectedSymbol)[0],this.sortedStocks.forEach(e=>{this.fiftyTwoWeekChangeChartData.push({name:e.symbol,value:e["52WeekChange"]*100}),this.fiftyTwoWeekLowChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyTwoWeekLow)/e.fiftyTwoWeekLow*100}),this.fiftyTwoWeekHighChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyTwoWeekHigh)/e.fiftyTwoWeekHigh*100}),e.targetMeanPrice&&this.discountChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.targetMeanPrice)/e.targetMeanPrice*100}),this.fiftyDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.fiftyDayAverage)/e.fiftyDayAverage*100}),this.twoHundredDayMAChartData.push({name:e.symbol,value:(e.regularMarketPrice-e.twoHundredDayAverage)/e.twoHundredDayAverage*100})}),this.fiftyTwoWeekChangeChartData.push({name:this.sp500,value:this.sortedStocks[0].SandP52WeekChange*100}),this.fiftyTwoWeekChangeChartData.sort((e,i)=>e.value-i.value),this.fiftyDayMAChartData.sort((e,i)=>e.value-i.value),this.twoHundredDayMAChartData.sort((e,i)=>e.value-i.value),this.fiftyTwoWeekLowChartData.sort((e,i)=>e.value-i.value),this.fiftyTwoWeekHighChartData.sort((e,i)=>e.value-i.value),this.discountChartData.sort((e,i)=>e.value-i.value);let c={ytd:"Year to Date",oneMonth:"One Month",threeMonth:"Three Month",oneYear:"One Year",threeYear:"Three Year",fiveYear:"Five Year",tenYear:"Ten Year"};Object.keys(c).forEach(e=>{let i={name:c[e],series:[]};this.sortedEtfs.forEach(d=>{i.series.push({name:d.symbol,value:d.fundPerformance.trailingReturns[e]*100})}),this.etfPerformanceChartData.push(i)})}changePerformanceChart(c){this.selectedPerformanceChart=c}updateSelectedStock(c){this.selectedSymbol=null,setTimeout(()=>{this.selectedSymbolColor={name:c,value:"chocolate"},this.selectedSymbol=c,this.selectedStock=Object.values(this.dataService.portfolioData).filter(e=>e.symbol===this.selectedSymbol)[0]})}};s.\u0275fac=function(e){return new(e||s)(g(Y))},s.\u0275cmp=v({type:s,selectors:[["portfolio-price-insights"]],standalone:!0,features:[b],decls:22,vars:7,consts:[[3,"expandQuotes"],[1,"add-border"],[1,"add-flex"],[1,"title"],[3,"selectedTicker"],[4,"ngIf"],[1,"chart-header"],[3,"ngStyle"],["selected","",3,"click"],[3,"click"],["class","add-flex",4,"ngIf"],["class","chart-container",4,"ngIf"],[3,"symbol"],[1,"chart-container"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","yScaleMin","customColors"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","activeEntries","customColors"],[3,"results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","showDataLabel","rotateXAxisTicks","yAxisLabel","customColors"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","customColors"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yScaleMin","yAxisLabel","customColors"]],template:function(e,i){e&1&&(m(0,"stock-price-movement-charts",0),l(1,"section",1)(2,"div",2)(3,"div",3)(4,"span"),p(5,"Price Insights"),r()()(),l(6,"stock-ticker-buttons",4),C("selectedTicker",function(V){return i.updateSelectedStock(V)}),r(),m(7,"mat-divider"),x(8,ee,2,1,"div",5),r(),l(9,"section",1)(10,"div",6)(11,"div",3)(12,"span"),p(13,"Performance Charts"),r()(),l(14,"mat-chip-listbox",7)(15,"mat-chip-option",8),C("click",function(){return i.changePerformanceChart(1)}),p(16,"Stocks"),r(),l(17,"mat-chip-option",9),C("click",function(){return i.changePerformanceChart(2)}),p(18,"ETFs"),r()()(),x(19,te,7,45,"div",10)(20,ie,2,18,"div",11)(21,ae,7,40,"div",10),r()),e&2&&(o("expandQuotes",!1),n(8),o("ngIf",i.selectedSymbol),n(6),o("ngStyle",h(6,q)),n(5),o("ngIf",i.selectedPerformanceChart===1),n(),o("ngIf",i.selectedPerformanceChart===2),n(),o("ngIf",i.selectedPerformanceChart===1))},dependencies:[T,w,D,_,X,F,W,P,k,M,E,L,I,Q,B,O,j,H,R,N],styles:[".chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]});let a=s;return a})();export{We as a};