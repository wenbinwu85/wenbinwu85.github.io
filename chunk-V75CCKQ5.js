import{a as we,b as Ie}from"./chunk-X54QU2CK.js";import{b as ce}from"./chunk-AQ2V33WL.js";import{d as G}from"./chunk-RKJSTUSN.js";import{d as me}from"./chunk-MWXZZPC6.js";import{c as ae,d as re,h as le}from"./chunk-QIUXZJYT.js";import{d as he,e as ue,f as fe,h as _e,i as ge,k as ye,l as xe,n as Ce,o as ve,q as Se,s as Te,t as Pe}from"./chunk-J7S4JXNM.js";import{f as de,h as pe}from"./chunk-2AWJACLF.js";import{b as be}from"./chunk-EDAGWGAI.js";import{e as Z,f as ee,g as te,h as ie}from"./chunk-GMOHOF6E.js";import{a as ne,b as oe}from"./chunk-MKMVCXIB.js";import{a as se}from"./chunk-ESCOAAI3.js";import{Ka as J,La as K,h as j,i as W,j as U,n as N,o as z,p as H}from"./chunk-UH6MBXDX.js";import{$a as E,$b as P,Aa as k,Ab as r,Bb as o,C as O,Cb as h,Db as g,Eb as y,Gb as X,Kb as T,Lb as p,Qb as D,Rb as A,Sb as M,Ub as c,Va as V,Vb as f,Wb as x,Zb as L,_a as a,_b as u,ac as Q,bc as q,cc as _,dc as C,ec as F,fb as B,ja as I,pb as d,q as $,rb as m,ta as Y,ua as R}from"./chunk-VEGADB6U.js";var Ae=["startThumb"],Me=["endThumb"],Le=["line"];function Fe(e,n){e&1&&h(0,"div",7,1)}function We(e,n){e&1&&h(0,"div",7,2)}var ke=(()=>{let n=class n{constructor(s){this.renderer=s,this.showThumbs=!0,this.tooltip=""}ngOnInit(){this.tooltip=`Day range: $${this.lowThumbValue} - $${this.highThumbValue}`}ngAfterViewInit(){if(this.showThumbs){let s=(this.lowThumbValue-this.min)/(this.max-this.min)*this.line.nativeElement.offsetWidth;s=Math.round(s*100)/100,this.renderer.setStyle(this.startThumb.nativeElement,"left",`${s-8}px`);let i=(this.highThumbValue-this.min)/(this.max-this.min)*this.line.nativeElement.offsetWidth;i=Math.round(i*100)/100,this.renderer.setStyle(this.endThumb.nativeElement,"left",`${i-8}px`)}this.updateSliderGradient()}updateSliderGradient(){let s=(this.lowThumbValue-this.min)/(this.max-this.min)*100,i=(this.highThumbValue-this.min)/(this.max-this.min)*100,l=`linear-gradient(
      to right,
      slategrey 0% ${s}%,
      chocolate ${s}% ${i}%, 
      slategrey ${i}% 100%
    )`;this.renderer.setStyle(this.line.nativeElement,"background",l)}};n.\u0275fac=function(i){return new(i||n)(E(B))},n.\u0275cmp=I({type:n,selectors:[["stock-day-price-range"]],viewQuery:function(i,l){if(i&1&&(D(Ae,5,k),D(Me,5,k),D(Le,5,k)),i&2){let v;A(v=M())&&(l.startThumb=v.first),A(v=M())&&(l.endThumb=v.first),A(v=M())&&(l.line=v.first)}},inputs:{min:"min",max:"max",lowThumbValue:"lowThumbValue",highThumbValue:"highThumbValue",showThumbs:"showThumbs"},standalone:!0,features:[L],decls:11,vars:5,consts:[["line",""],["startThumb",""],["endThumb",""],[1,"line-container"],["matTooltipPosition","above",1,"line",3,"matTooltip"],["class","dot",4,"ngIf"],[1,"label-wrapper"],[1,"dot"]],template:function(i,l){i&1&&(r(0,"div")(1,"div",3),h(2,"div",4,0),d(4,Fe,2,0,"div",5)(5,We,2,0,"div",5),o(),r(6,"div",6)(7,"h3"),c(8),o(),r(9,"h3"),c(10),o()()()),i&2&&(a(2),m("matTooltip",l.tooltip),a(2),m("ngIf",l.showThumbs),a(),m("ngIf",l.showThumbs),a(3),x("$",l.min,""),a(2),x("$",l.max,""))},dependencies:[H,W,Ie,we],styles:[".line-container[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;height:1rem;align-items:center}.line[_ngcontent-%COMP%]{width:100%;height:1rem;border:none;border-radius:5%;background:navy}.dot[_ngcontent-%COMP%]{position:absolute;width:.5rem;height:1rem;background-color:teal;border-radius:10%;z-index:1}.label-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.light-color[_ngcontent-%COMP%]{color:#fff}"]});let e=n;return e})();var He=()=>({"padding-right":"1.25rem"}),b=e=>[e],S=()=>({color:"teal"}),w=()=>({color:"navy"}),$e=()=>["S&P 500"],Ye=()=>({name:"S&P 500",value:"gold"}),Re=(e,n)=>[e,n],Ve=()=>({name:"SCHD",value:"deepskyblue"}),Xe=()=>({name:"VYM",value:"maroon"}),Oe=()=>({name:"JEPI",value:"dodgerblue"}),Be=(e,n,t)=>[e,n,t];function Qe(e,n){if(e&1){let t=X();r(0,"button",15),T("click",function(){let i=Y(t).$implicit,l=p();return R(l.updateSelectedStock(i.symbol))}),h(1,"img",16),r(2,"div"),c(3),o()()}if(e&2){let t=n.$implicit,s=p();a(),m("src",s.getLogoSource(t),V),a(2),f(t.symbol)}}function qe(e,n){if(e&1){let t=X();r(0,"button",15),T("click",function(){let i=Y(t).$implicit,l=p();return R(l.updateSelectedStock(i.symbol))}),h(1,"img",16),r(2,"div"),c(3),o()()}if(e&2){let t=n.$implicit,s=p();a(),m("src",s.getLogoSource(t),V),a(2),f(t.symbol)}}function je(e,n){e&1&&(r(0,"th",36),c(1,"Symbol"),o())}function Ue(e,n){if(e&1&&(r(0,"td",37)(1,"span"),c(2),o(),r(3,"span",8),c(4),_(5,"currency"),o()()),e&2){let t=n.$implicit;a(2),f(t.symbol),a(),m("ngStyle",u(5,S)),a(),x(" ",C(5,3,t.currentPrice),"")}}function Ne(e,n){e&1&&(r(0,"th",36),c(1,"Support"),o())}function ze(e,n){if(e&1&&(r(0,"td",37),c(1),_(2,"currency"),o()),e&2){let t=p(2);a(),f(C(2,1,t.selectedStockTechnical.instrumentInfo.keyTechnicals.support))}}function Ge(e,n){e&1&&(r(0,"th",36),c(1,"Resistance"),o())}function Je(e,n){if(e&1&&(r(0,"td",37),c(1),_(2,"currency"),o()),e&2){let t=p(2);a(),f(C(2,1,t.selectedStockTechnical.instrumentInfo.keyTechnicals.resistance))}}function Ke(e,n){e&1&&(r(0,"th",36),c(1,"Stop Loss"),o())}function Ze(e,n){if(e&1&&(r(0,"td",37),c(1),_(2,"currency"),o()),e&2){let t=p(2);a(),f(C(2,1,t.selectedStockTechnical.instrumentInfo.keyTechnicals.stopLoss))}}function et(e,n){e&1&&(r(0,"th",36),c(1,"52 Week Low"),o())}function tt(e,n){if(e&1&&(r(0,"td",37),c(1),_(2,"currency"),o()),e&2){let t=n.$implicit;a(),f(C(2,1,t.fiftyTwoWeekLow))}}function it(e,n){e&1&&(r(0,"th",36),c(1,"Day Low"),o())}function nt(e,n){if(e&1&&(r(0,"td",37)(1,"span"),c(2),_(3,"currency"),o(),r(4,"span",8),c(5),o()()),e&2){let t=n.$implicit;a(2),f(C(3,3,t.dayLow)),a(2),m("ngStyle",u(5,S)),a(),x(" +",(t.dayLow-t.fiftyTwoWeekLow).toFixed(2),"")}}function ot(e,n){e&1&&(r(0,"th",36),c(1,"Day High"),o())}function at(e,n){if(e&1&&(r(0,"td",37)(1,"span"),c(2),_(3,"currency"),o(),r(4,"span",8),c(5),o()()),e&2){let t=n.$implicit;a(2),f(C(3,3,t.dayHigh)),a(2),m("ngStyle",u(5,S)),a(),x(" +",(t.dayHigh-t.dayLow).toFixed(2),"")}}function rt(e,n){e&1&&(r(0,"th",36),c(1,"52 Week High"),o())}function lt(e,n){if(e&1&&(r(0,"td",37)(1,"span"),c(2),_(3,"currency"),o(),r(4,"span",8),c(5),o()()),e&2){let t=n.$implicit;a(2),f(C(3,3,t.fiftyTwoWeekHigh)),a(2),m("ngStyle",u(5,S)),a(),x(" +",(t.fiftyTwoWeekHigh-t.dayHigh).toFixed(2),"")}}function st(e,n){e&1&&(r(0,"th",36),c(1,"Target Price Low"),o())}function ct(e,n){if(e&1&&(r(0,"span",8),c(1),_(2,"currency"),o()),e&2){let t=p().$implicit;m("ngStyle",u(4,S)),a(),x(" (",C(2,2,t.targetLowPrice),")")}}function mt(e,n){if(e&1&&(r(0,"td",37)(1,"span",8),c(2),_(3,"percent"),o(),d(4,ct,3,5,"span",38),o()),e&2){let t=n.$implicit,s=p(2);a(),m("ngStyle",u(6,w)),a(),f(F(3,3,(t.targetLowPrice-t.currentPrice)/t.currentPrice,".2")),a(2),m("ngIf",s.selectedStock.quoteType==="EQUITY")}}function dt(e,n){e&1&&(r(0,"th",36),c(1,"Target Price Median"),o())}function pt(e,n){if(e&1&&(r(0,"span",8),c(1),_(2,"currency"),o()),e&2){let t=p().$implicit;m("ngStyle",u(4,S)),a(),x(" ( ",C(2,2,t.targetMedianPrice)," )")}}function ht(e,n){if(e&1&&(r(0,"td",37)(1,"span",8),c(2),_(3,"percent"),o(),d(4,pt,3,5,"span",38),o()),e&2){let t=n.$implicit,s=p(2);a(),m("ngStyle",u(6,w)),a(),f(F(3,3,(t.targetMedianPrice-t.currentPrice)/t.currentPrice,".2")),a(2),m("ngIf",s.selectedStock.quoteType==="EQUITY")}}function ut(e,n){e&1&&(r(0,"th",36),c(1,"Target Price High"),o())}function ft(e,n){if(e&1&&(r(0,"span",8),c(1),_(2,"currency"),o()),e&2){let t=p().$implicit;m("ngStyle",u(4,S)),a(),x(" (",C(2,2,t.targetHighPrice),")")}}function _t(e,n){if(e&1&&(r(0,"td",37)(1,"span",8),c(2),_(3,"percent"),o(),d(4,ft,3,5,"span",38),o()),e&2){let t=n.$implicit,s=p(2);a(),m("ngStyle",u(6,w)),a(),f(F(3,3,(t.targetHighPrice-t.currentPrice)/t.currentPrice,".2")),a(2),m("ngIf",s.selectedStock.quoteType==="EQUITY")}}function gt(e,n){e&1&&(r(0,"th",36),c(1,"Argus Research Target"),o())}function yt(e,n){if(e&1&&(r(0,"span",8),c(1),o()),e&2){let t=p(3);m("ngStyle",u(2,w)),a(),x(" (",t.selectedStockTechnical==null||t.selectedStockTechnical.recommendation==null?null:t.selectedStockTechnical.recommendation.rating,")")}}function xt(e,n){if(e&1&&(r(0,"td",37)(1,"span"),c(2),_(3,"currency"),o(),d(4,yt,2,3,"span",38),o()),e&2){let t=p(2);a(2),f(C(3,2,t.selectedStockTechnical==null||t.selectedStockTechnical.recommendation==null?null:t.selectedStockTechnical.recommendation.targetPrice)),a(2),m("ngIf",t.selectedStock.quoteType==="EQUITY")}}function Ct(e,n){e&1&&(r(0,"th",36),c(1,"Trading Central Valuation"),o())}function vt(e,n){if(e&1&&(r(0,"span",8),c(1),o()),e&2){let t=p(3);m("ngStyle",u(2,w)),a(),x(" (",t.selectedStockTechnical==null||t.selectedStockTechnical.instrumentInfo==null?null:t.selectedStockTechnical.instrumentInfo.valuation.discount,")")}}function St(e,n){if(e&1&&(r(0,"td",37)(1,"span"),c(2),o(),d(3,vt,2,3,"span",38),o()),e&2){let t=p(2);a(2),f(t.selectedStockTechnical==null||t.selectedStockTechnical.instrumentInfo==null?null:t.selectedStockTechnical.instrumentInfo.valuation.description),a(),m("ngIf",t.selectedStock.quoteType==="EQUITY")}}function Tt(e,n){e&1&&h(0,"tr",39)}function Pt(e,n){e&1&&h(0,"tr",40)}function bt(e,n){if(e&1&&(r(0,"div",17)(1,"table",18),g(2,19),d(3,je,2,0,"th",20)(4,Ue,6,6,"td",21),y(),g(5,22),d(6,Ne,2,0,"th",20)(7,ze,3,3,"td",21),y(),g(8,23),d(9,Ge,2,0,"th",20)(10,Je,3,3,"td",21),y(),g(11,24),d(12,Ke,2,0,"th",20)(13,Ze,3,3,"td",21),y(),g(14,25),d(15,et,2,0,"th",20)(16,tt,3,3,"td",21),y(),g(17,26),d(18,it,2,0,"th",20)(19,nt,6,6,"td",21),y(),g(20,27),d(21,ot,2,0,"th",20)(22,at,6,6,"td",21),y(),g(23,28),d(24,rt,2,0,"th",20)(25,lt,6,6,"td",21),y(),g(26,29),d(27,st,2,0,"th",20)(28,mt,5,7,"td",21),y(),g(29,30),d(30,dt,2,0,"th",20)(31,ht,5,7,"td",21),y(),g(32,31),d(33,ut,2,0,"th",20)(34,_t,5,7,"td",21),y(),g(35,32),d(36,gt,2,0,"th",20)(37,xt,5,4,"td",21),y(),g(38,33),d(39,Ct,2,0,"th",20)(40,St,4,2,"td",21),y(),d(41,Tt,1,0,"tr",34)(42,Pt,1,0,"tr",35),o()()),e&2){let t=p();a(),m("dataSource",t.getTableDataSource()),a(40),m("matHeaderRowDef",t.tableColumns),a(),m("matRowDefColumns",t.tableColumns)}}function wt(e,n){if(e&1&&(r(0,"div",17)(1,"h3"),c(2),o(),h(3,"stock-day-price-range",41),o()),e&2){let t=p();a(2),x("",t.selectedStock.symbol," Day Range vs 52 Week Range"),a(),m("min",t.selectedStock.fiftyTwoWeekLow)("max",t.selectedStock.fiftyTwoWeekHigh)("lowThumbValue",t.selectedStock.dayLow)("highThumbValue",t.selectedStock.dayHigh)("showThumbs",!1)}}function It(e,n){if(e&1&&(r(0,"div",12),h(1,"ngx-charts-bar-vertical",42),o()),e&2){let t=p();a(),m("scheme",t.performanceChartColorScheme)("results",t.fiftyDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 50 Day MA %")("yScaleMin",t.fiftyDayMAChartData[0].value-5)("customColors",P(12,b,t.selectedSymbolColor))}}function kt(e,n){if(e&1&&(r(0,"div",12),h(1,"ngx-charts-bar-vertical",42),o()),e&2){let t=p();a(),m("scheme",t.performanceChartColorScheme)("results",t.twoHundredDayMAChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price vs 200 Day MA %")("yScaleMin",t.twoHundredDayMAChartData[0].value-5)("customColors",P(12,b,t.selectedSymbolColor))}}function Et(e,n){if(e&1&&(r(0,"div",12),h(1,"ngx-charts-bar-vertical",43),o()),e&2){let t=p();a(),m("scheme",t.performanceChartColorScheme)("results",t.fiftyTwoWeekChangeChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","52 Week Change %")("activeEntries",u(12,$e))("customColors",Q(14,Re,t.selectedSymbolColor,u(13,Ye)))}}function Dt(e,n){if(e&1&&(r(0,"div",12),h(1,"ngx-charts-bar-vertical-2d",44),o()),e&2){let t=p();a(),m("results",t.etfPerformanceChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("showDataLabel",!0)("rotateXAxisTicks",!0)("yAxisLabel","ETF Performance %")("customColors",q(14,Be,u(11,Ve),u(12,Xe),u(13,Oe)))}}var gi=(()=>{let n=class n{constructor(s){this.dataService=s,this.sortedStocks=[],this.sortedEtfs=[],this.sp500FiftyTwoWeekChange=0,this.fiftyTwoWeekChangeChartData=[],this.fiftyTwoWeekLowChartData=[],this.fiftyTwoWeekHighChartData=[],this.discountChartData=[],this.fiftyDayMAChartData=[],this.twoHundredDayMAChartData=[],this.etfPerformanceChartData=[],this.sp500="S&P 500",this.selectedPerformanceChart=1,this.selectedSymbol="SCHD",this.selectedSymbolColor={name:"SCHD",value:"teal"},this.performanceChartColorScheme={domain:["slategrey"]},this.fiftyTwoWeekChartColorScheme={domain:["slategrey"]},this.targetPriceChartColorScheme={domain:["slategrey"]},this.tableColumns=["symbol","support","resistance","stopLoss","fiftyTwoWeekLow","dayLow","dayHigh","fiftyTwoWeekHigh","targetLowPrice","targetMedianPrice","targetHighPrice","argusTarget","tradingCentral"]}ngOnInit(){this.getSelectedStockTechnicalInsights(),this.sortedStocks=Object.values(this.dataService.portfolioData).filter(i=>i.quoteType==="EQUITY").sort((i,l)=>i["52WeekChange"]-l["52WeekChange"]),this.sortedEtfs=Object.values(this.dataService.portfolioData).filter(i=>i.quoteType==="ETF").sort((i,l)=>i.ytdReturn-l.ytdReturn),this.sp500FiftyTwoWeekChange=this.sortedStocks[0].SandP52WeekChange,this.selectedStock=Object.values(this.dataService.portfolioData).filter(i=>i.symbol===this.selectedSymbol)[0],this.sortedStocks.forEach(i=>{this.fiftyTwoWeekChangeChartData.push({name:i.symbol,value:i["52WeekChange"]*100}),this.fiftyTwoWeekLowChartData.push({name:i.symbol,value:(i.regularMarketPrice-i.fiftyTwoWeekLow)/i.fiftyTwoWeekLow*100}),this.fiftyTwoWeekHighChartData.push({name:i.symbol,value:(i.regularMarketPrice-i.fiftyTwoWeekHigh)/i.fiftyTwoWeekHigh*100}),this.discountChartData.push({name:i.symbol,value:(i.regularMarketPrice-i.targetMeanPrice)/i.targetMeanPrice*100}),this.fiftyDayMAChartData.push({name:i.symbol,value:(i.regularMarketPrice-i.fiftyDayAverage)/i.fiftyDayAverage*100}),this.twoHundredDayMAChartData.push({name:i.symbol,value:(i.regularMarketPrice-i.twoHundredDayAverage)/i.twoHundredDayAverage*100})}),this.fiftyTwoWeekChangeChartData.push({name:this.sp500,value:this.sortedStocks[0].SandP52WeekChange*100}),this.fiftyTwoWeekChangeChartData.sort((i,l)=>i.value-l.value),this.fiftyDayMAChartData.sort((i,l)=>i.value-l.value),this.twoHundredDayMAChartData.sort((i,l)=>i.value-l.value),this.fiftyTwoWeekLowChartData.sort((i,l)=>i.value-l.value),this.fiftyTwoWeekHighChartData.sort((i,l)=>i.value-l.value),this.discountChartData.sort((i,l)=>i.value-l.value);let s={ytd:"Year to Date",oneMonth:"One Month",threeMonth:"Three Month",oneYear:"One Year",threeYear:"Three Year",fiveYear:"Five Year",tenYear:"Ten Year"};Object.keys(s).forEach(i=>{let l={name:s[i],series:[]};this.sortedEtfs.forEach(v=>{l.series.push({name:v.symbol,value:v.fundPerformance.trailingReturns[i]*100})}),this.etfPerformanceChartData.push(l)})}getSelectedStockTechnicalInsights(){this.dataService.getTechnicalInsights(this.selectedSymbol,!0).pipe($(s=>{if(s.status===500)throw`Api Error: ${this.selectedSymbol} - ${s.status} - ${s.message}`;return s}),O(s=>(console.log(s),this.dataService.getTechnicalInsights(this.selectedSymbol).pipe($(i=>i[this.selectedSymbol]))))).subscribe(s=>this.selectedStockTechnical=s)}refreshData(){this.dataService.updatePortfolioTechnicalInsights()}changePerformanceChart(s){this.selectedPerformanceChart=s}getLogoSource(s){return`/assets/ticker-logos/${s.symbol}.png`}updateSelectedStock(s){this.selectedSymbol=null,this.selectedStockTechnical=null,setTimeout(()=>{this.selectedSymbolColor={name:s,value:"chocolate"},console.log(this.selectedSymbolColor),this.selectedSymbol=s,this.selectedStock=Object.values(this.dataService.portfolioData).filter(i=>i.symbol===this.selectedSymbol)[0],this.getSelectedStockTechnicalInsights()},50)}getTableDataSource(){let s=new Pe;return s.data=[this.selectedStock],s}};n.\u0275fac=function(i){return new(i||n)(E(se))},n.\u0275cmp=I({type:n,selectors:[["portfolio-price-insights"]],standalone:!0,features:[L],decls:44,vars:50,consts:[[1,"add-border"],[1,"add-flex"],[1,"title"],["mat-button","","extended","","color","primary",1,"refresh-button",3,"click"],[1,"logos-container"],["mat-button","","class","ticker-button",3,"click",4,"ngFor","ngForOf"],["class","add-margin",4,"ngIf"],[1,"chart-header"],[3,"ngStyle"],["selected","",3,"click"],[3,"click"],["class","chart-container",4,"ngIf"],[1,"chart-container"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","customColors"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yScaleMin","yAxisLabel","customColors"],["mat-button","",1,"ticker-button",3,"click"],["alt","Logo","width","auto","height","35",3,"src"],[1,"add-margin"],["mat-table","",3,"dataSource"],["matColumnDef","symbol"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","support"],["matColumnDef","resistance"],["matColumnDef","stopLoss"],["matColumnDef","fiftyTwoWeekLow"],["matColumnDef","dayLow"],["matColumnDef","dayHigh"],["matColumnDef","fiftyTwoWeekHigh"],["matColumnDef","targetLowPrice"],["matColumnDef","targetMedianPrice"],["matColumnDef","targetHighPrice"],["matColumnDef","argusTarget"],["matColumnDef","tradingCentral"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[3,"ngStyle",4,"ngIf"],["mat-header-row",""],["mat-row",""],[3,"min","max","lowThumbValue","highThumbValue","showThumbs"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","yScaleMin","customColors"],[3,"scheme","results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","rotateXAxisTicks","yAxisLabel","activeEntries","customColors"],[3,"results","animations","xAxis","yAxis","showXAxisLabel","showYAxisLabel","legend","showDataLabel","rotateXAxisTicks","yAxisLabel","customColors"]],template:function(i,l){i&1&&(h(0,"stock-price-movement-charts"),r(1,"section",0)(2,"div",1)(3,"div",2),c(4,"Price Insights"),o(),r(5,"button",3),T("click",function(){return l.refreshData()}),r(6,"mat-icon"),c(7,"cloud_sync"),o(),r(8,"span"),c(9,"Refresh Technical Insights"),o()()(),r(10,"div",4),d(11,Qe,4,2,"button",5)(12,qe,4,2,"button",5),o(),h(13,"mat-divider"),d(14,bt,43,3,"div",6),h(15,"mat-divider"),d(16,wt,4,6,"div",6),o(),r(17,"section",0)(18,"div",7)(19,"div",2)(20,"span"),c(21,"Performance"),o()(),r(22,"mat-chip-listbox",8)(23,"mat-chip-option",9),T("click",function(){return l.changePerformanceChart(1)}),c(24,"Moving Averages"),o(),r(25,"mat-chip-option",10),T("click",function(){return l.changePerformanceChart(2)}),c(26,"ETFs Performance"),o()()(),r(27,"div",1),d(28,It,2,14,"div",11)(29,kt,2,14,"div",11)(30,Et,2,17,"div",11),o(),d(31,Dt,2,18,"div",11),o(),r(32,"section",0)(33,"div",7)(34,"div",2)(35,"span"),c(36,"Price vs 52 Week & Analyst Target"),o()()(),r(37,"div",1)(38,"div",12),h(39,"ngx-charts-bar-vertical",13),o(),r(40,"div",12),h(41,"ngx-charts-bar-vertical",13),o(),r(42,"div",12),h(43,"ngx-charts-bar-vertical",14),o()()()),i&2&&(a(11),m("ngForOf",l.sortedStocks),a(),m("ngForOf",l.sortedEtfs),a(2),m("ngIf",l.selectedSymbol&&l.selectedStockTechnical),a(2),m("ngIf",l.selectedSymbol),a(6),m("ngStyle",u(43,He)),a(6),m("ngIf",l.selectedPerformanceChart===1),a(),m("ngIf",l.selectedPerformanceChart===1),a(),m("ngIf",l.selectedPerformanceChart===1),a(),m("ngIf",l.selectedPerformanceChart===2),a(8),m("scheme",l.fiftyTwoWeekChartColorScheme)("results",l.fiftyTwoWeekLowChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % above 52 week low")("customColors",P(44,b,l.selectedSymbolColor)),a(2),m("scheme",l.fiftyTwoWeekChartColorScheme)("results",l.fiftyTwoWeekHighChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yAxisLabel","Price % below 52 week high")("customColors",P(46,b,l.selectedSymbolColor)),a(2),m("scheme",l.targetPriceChartColorScheme)("results",l.discountChartData)("animations",!0)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("legend",!1)("rotateXAxisTicks",!0)("yScaleMin",-5)("yAxisLabel","Price % vs mean target price")("customColors",P(48,b,l.selectedSymbolColor)))},dependencies:[H,j,W,U,N,z,pe,de,ie,te,ee,oe,ne,G,Z,K,J,be,Te,he,fe,xe,_e,ue,Ce,ge,ye,ve,Se,me,le,ae,re,ce,ke],styles:[".chart-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.logos-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 1rem 1rem}.ticker-button[_ngcontent-%COMP%]{align-items:center;height:5rem}.refresh-button[_ngcontent-%COMP%]{margin-right:1rem}"]});let e=n;return e})();export{gi as a};
