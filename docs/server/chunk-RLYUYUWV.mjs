import './polyfills.server.mjs';
import{a as ge}from"./chunk-YUNXVSZ2.mjs";import{a as re,b as ne,c as ae,d as oe}from"./chunk-XEQW27GN.mjs";import{a as de}from"./chunk-SI7HMPQN.mjs";import{g as q,h as J,i as K,j as te,l as ie,o as se,r as ce,t as le,w as pe}from"./chunk-U2XXMLE4.mjs";import{a as z,b as G}from"./chunk-RRYMJGQ4.mjs";import{f as me,g as he}from"./chunk-DXJ2V2KH.mjs";import{a as I,b as A}from"./chunk-3VZGO4EY.mjs";import{N as Z,O as ee}from"./chunk-UC3MPAVP.mjs";import{l as U,m as E,n as H,r as Y,s as $,t as j}from"./chunk-2YZOW3Q2.mjs";import{Ba as B,Db as s,Eb as c,Fb as d,Gb as O,Hb as R,Jb as k,Nb as _,Ob as h,Tb as T,Ub as w,Vb as D,Xa as L,Xb as m,Yb as S,Zb as y,ab as o,ac as f,bb as g,bc as X,cc as P,fc as b,gc as N,hc as W,ic as Q,ja as u,sb as C,ta as x,ua as v,ub as p}from"./chunk-XUNJT35C.mjs";var fe=["miniChartWidget"],ue=(()=>{let a=class a{constructor(e){this.tradingviewService=e,this.width="100%",this.height=200,this.range="12M",this.theme="light"}ngAfterViewInit(){let e=this.tradingviewService.miniChartWidget(this.symbol,this.width,this.height,this.range,this.theme);this.miniChartWidget.nativeElement.appendChild(e)}};a.\u0275fac=function(t){return new(t||a)(g(A))},a.\u0275cmp=u({type:a,selectors:[["tv-mini-chart-widget"]],viewQuery:function(t,n){if(t&1&&T(fe,5),t&2){let l;w(l=D())&&(n.miniChartWidget=l.first)}},inputs:{symbol:"symbol",width:"width",height:"height",range:"range",theme:"theme"},standalone:!0,features:[f],decls:2,vars:0,consts:[["miniChartWidget",""]],template:function(t,n){t&1&&d(0,"div",null,0)},encapsulation:2});let r=a;return r})();var xe=["tickersWidget"],Ae=(()=>{let a=class a{constructor(e){this.tradingviewService=e,this.symbols=`[
    {
      "title": "S&P 500 Index",
      "proName": "FOREXCOM:SPXUSD"
    },
    {
      "title": "Nasdaq 100",
      "proName": "NASDAQ:NDX"
    },
    {
      "title": "Dow Jones Industrial",
      "proName": "DJI"
    },
    {
      "title": "Bitcoin",
      "proName": "BITSTAMP:BTCUSD"
    },
    {
      "title": "Ethereum",
      "proName": "BITSTAMP:ETHUSD"
    },
    {
      "title": "Dogecoin",
      "proName": "BINANCE:DOGEUSD"
    },
    {
      "title": "USD/RMB",
      "proName": "FX:USDCNH"
    },
    {
      "title": "USD/JPY",
      "proName": "FX:USDJPY"
    },
    {
      "title": "EUR/USD",
      "proName": "FX:EURUSD"
    }
  ]`,this.theme="light",this.displayMode="adaptive"}ngAfterViewInit(){let e=this.tradingviewService.tickersWidget(this.symbols,this.tape,this.displayMode,this.theme);this.tickersWidget.nativeElement.appendChild(e);try{let t=this.tickersWidget.nativeElement.children[1];this.tickersWidget.nativeElement.removeChild(t)}catch{}}};a.\u0275fac=function(t){return new(t||a)(g(A))},a.\u0275cmp=u({type:a,selectors:[["tv-tickers-widget"]],viewQuery:function(t,n){if(t&1&&T(xe,5),t&2){let l;w(l=D())&&(n.tickersWidget=l.first)}},inputs:{symbols:"symbols",tape:"tape",theme:"theme",displayMode:"displayMode"},standalone:!0,features:[f],decls:2,vars:0,consts:[["tickersWidget",""]],template:function(t,n){t&1&&d(0,"div",null,0)},encapsulation:2});let r=a;return r})();var _e=()=>({"padding-right":"1.25rem"}),F=r=>({color:r});function ye(r,a){if(r&1&&(s(0,"div",3)(1,"span"),m(2,"Regular Market "),c(),s(3,"mat-icon"),m(4,"schedule"),c(),s(5,"span",5),m(6),b(7,"currency"),c(),s(8,"span",5),m(9),b(10,"percent"),c()()),r&2){let i=h(2);o(5),p("ngStyle",P(9,F,i.getDayPriceChangeColor())),o(),y(" ",N(7,4,i.priceChange)," "),o(2),p("ngStyle",P(11,F,i.getDayPriceChangeColor())),o(),y(" (",W(10,6,i.priceChange/i.portfolioHoldings.portfolioMarketValue,".4"),") ")}}function ke(r,a){if(r&1&&(s(0,"div",3)(1,"span"),m(2),c(),s(3,"mat-icon"),m(4),c(),s(5,"span",5),m(6),b(7,"currency"),c(),s(8,"span",5),m(9),b(10,"percent"),c()()),r&2){let i=h(2);o(2),S(i.prePostHourText),o(2),S(i.prePostHourIcon),o(),p("ngStyle",P(11,F,i.getPrePostPriceChangeColor())),o(),y(" ",N(7,6,i.prePostMarketPriceChange)," "),o(2),p("ngStyle",P(13,F,i.getPrePostPriceChangeColor())),o(),y(" (",W(10,8,i.prePostMarketPriceChange/i.portfolioHoldings.portfolioMarketValue,".4"),") ")}}function Se(r,a){if(r&1){let i=k();s(0,"mat-slide-toggle",13),_("toggleChange",function(){x(i);let t=h(2);return v(t.changeChart())}),s(1,"span"),m(2,"Post Market Chart"),c()()}}function Me(r,a){if(r&1&&(d(0,"tv-mini-chart-widget",17)(1,"mat-divider",18),s(2,"span"),m(3),c(),s(4,"span"),m(5),c()),r&2){let i=a.model;p("symbol",i.name)("theme","dark"),o(3),y("Pre/Post: ",i.name," "),o(2),y("",i.value.toFixed(2),"%")}}function Pe(r,a){if(r&1&&(s(0,"div",3)(1,"div",14)(2,"ngx-charts-bar-vertical",15),C(3,Me,6,4,"ng-template",null,0,Q),c()(),s(5,"div",14),d(6,"ngx-charts-bar-vertical-stacked",16),c()()),r&2){let i=h(2);o(2),p("results",i.priceChangeChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("showDataLabel",!0)("yAxisLabel","Price Change %")("customColors",i.getPriceChangeChartColor),o(4),p("scheme",i.priceRangeColorScheme)("results",i.priceRangeChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("yAxisLabel","Market Day Price Range $")}}function be(r,a){if(r&1&&(s(0,"div",3)(1,"div",14),d(2,"ngx-charts-bar-vertical",19),c()()),r&2){let i=h(2);o(2),p("scheme",i.betaColorScheme)("schemeType",i.scaleType.Linear)("results",i.betaChartData)("xAxis",!0)("yAxis",!0)("showXAxisLabel",!0)("showYAxisLabel",!0)("rotateXAxisTicks",!0)("animations",!0)("yAxisLabel","Beta")}}function Te(r,a){if(r&1){let i=k();s(0,"section",2)(1,"div",3)(2,"div",4)(3,"span"),m(4,"Portfolio Value Change"),c()(),s(5,"mat-chip-listbox",5)(6,"mat-chip-option",6),_("click",function(){x(i);let t=h();return v(t.displayChart(1))}),m(7,"Today's Change"),c(),s(8,"mat-chip-option",7),_("click",function(){x(i);let t=h();return v(t.displayChart(2))}),m(9,"Beta"),c()()(),s(10,"div",8),C(11,ye,11,13,"div",9)(12,ke,11,15,"div",9)(13,Se,3,0,"mat-slide-toggle",10),c(),C(14,Pe,7,19,"div",9)(15,be,3,10,"div",9),s(16,"mat-expansion-panel",11)(17,"mat-expansion-panel-header")(18,"mat-panel-title")(19,"mat-icon"),m(20,"price_change"),c(),s(21,"span"),m(22,"Price Quotes"),c()()(),d(23,"tv-market-quotes-widget",12),c()()}if(r&2){let i=h();o(5),p("ngStyle",X(9,_e)),o(6),p("ngIf",!i.prefix.startsWith("pre")),o(),p("ngIf",!i.prefix.startsWith("regular")),o(),p("ngIf",!i.prefix.startsWith("pre")),o(),p("ngIf",i.selectedChart===1),o(),p("ngIf",i.selectedChart===2),o(),p("expanded",i.expandQuotes),o(7),p("stockNames",i.stockNames)("height",410)}}var Ze=(()=>{let a=class a{constructor(e,t){this.dataService=e,this.helper=t,this.showTickers=!0,this.priceChange=0,this.prePostMarketPriceChange=0,this.priceChangeChartData=[],this.priceRangeChartData=[],this.betaChartData=[],this.stockNames=[],this.priceRangeColorScheme={domain:["steelblue","skyblue"]},this.betaColorScheme={domain:["palevioletred"]},this.scaleType=se,this.selectedChart=1,this.toggleChecked=!1,this.getPriceChangeChartColor=n=>{let l="";return this.prefix.startsWith("pre")?l="preMarketChangePercent":l=this.toggleChecked?"postMarketChangePercent":"regularMarketChangePercent",this.portfolioData[n][l]>0?"teal":"chocolate"}}ngOnInit(){this.portfolioHoldings=this.dataService.portfolioHoldings,this.portfolioData=this.dataService.portfolioData,this.prefix=this.helper.getPriceKeyPrefix(),this.dataService.portfolioSymbols?.forEach(e=>{let t=this.portfolioHoldings[e],n=this.portfolioData[e];if(this.stockNames.push({name:n.symbol,displayName:`${n.longName} - ${n.symbol} `}),this.prefix.startsWith("pre")?n.preMarketChangePercent&&this.priceChangeChartData.push({name:n.symbol,value:n.preMarketChangePercent*100}):(this.priceChange+=n.regularMarketChange*t.sharesOwned,this.priceChangeChartData.push({name:n.symbol,value:n.regularMarketChangePercent*100})),!this.prefix.startsWith("regular")){let l=this.prefix+"Change";n[l]&&(this.prePostMarketPriceChange+=n[l]*t.sharesOwned,this.prePostHourIcon=this.prefix.startsWith("pre")?"light_mode":"dark_mode",this.prePostHourText=this.prefix.startsWith("pre")?"Pre Market ":"Post Market ")}this.priceChangeChartData.sort((l,M)=>l.value-M.value),this.priceRangeChartData.push({name:n.symbol,series:[{name:"Low Range",value:n.regularMarketPrice-n.regularMarketDayLow},{name:"High Range",value:n.regularMarketDayHigh-n.regularMarketPrice}]}),this.priceRangeChartData.sort((l,M)=>l.series[0].value+l.series[1].value-(M.series[0].value+M.series[1].value)),n.quoteType==="EQUITY"&&this.betaChartData.push({name:n.symbol,value:n.beta||0})}),this.stockNames.sort((e,t)=>{let n=this.portfolioData[e.name].regularMarketChangePercent,l=this.portfolioData[t.name].regularMarketChangePercent;return n-l}),this.betaChartData.sort((e,t)=>e.value-t.value)}getDayPriceChangeColor(){return this.priceChange>0?"teal":"chocolate"}getPrePostPriceChangeColor(){return this.prePostMarketPriceChange>0?"teal":"chocolate"}displayChart(e){this.selectedChart=e}changeChart(){this.toggleChecked=!this.toggleChecked;let t=(this.toggleChecked?this.prefix:"regularMarket")+"ChangePercent";this.priceChangeChartData=[],this.dataService.portfolioSymbols?.forEach(n=>{let l=this.portfolioData[n];l[t]&&this.priceChangeChartData.push({name:l.symbol,value:l[t]*100})}),this.priceChangeChartData.sort((n,l)=>n.value-l.value)}};a.\u0275fac=function(t){return new(t||a)(g(I),g(de))},a.\u0275cmp=u({type:a,selectors:[["stock-price-movement-charts"]],inputs:{showTickers:"showTickers",expandQuotes:"expandQuotes"},standalone:!0,features:[f],decls:1,vars:1,consts:[["tooltipTemplate",""],["class","add-border",4,"ngIf"],[1,"add-border"],[1,"add-flex"],[1,"title"],[3,"ngStyle"],["selected","",3,"click"],[3,"click"],[1,"return-wrapper"],["class","add-flex",4,"ngIf"],[3,"toggleChange",4,"ngIf"],[3,"expanded"],[3,"stockNames","height"],[3,"toggleChange"],[1,"chart-container"],[3,"results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","rotateXAxisTicks","animations","showDataLabel","yAxisLabel","customColors"],[3,"scheme","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","rotateXAxisTicks","animations","yAxisLabel"],[3,"symbol","theme"],[2,"margin","none","border-top-color","slategrey"],[3,"scheme","schemeType","results","xAxis","yAxis","showXAxisLabel","showYAxisLabel","rotateXAxisTicks","animations","yAxisLabel"]],template:function(t,n){t&1&&C(0,Te,24,10,"section",1),t&2&&p("ngIf",n.priceChangeChartData.length>0)},dependencies:[j,E,H,Y,$,K,J,q,G,z,oe,re,ne,ae,ee,Z,pe,ce,le,ue,ge,he,me],styles:[".return-wrapper[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;margin-left:1rem;font-size:1.25rem}.return-wrapper[_ngcontent-%COMP%]   .add-flex[_ngcontent-%COMP%]{margin-right:1rem}mat-icon[_ngcontent-%COMP%]{margin-left:.25rem}"]});let r=a;return r})();function we(r,a){if(r&1){let i=k();s(0,"button",3),_("click",function(){let t=x(i).$implicit,n=h();return v(n.emitSelectedTicker(t.symbol))}),d(1,"img",4),s(2,"div"),m(3),c()()}if(r&2){let i=a.$implicit,e=h();o(),p("src",e.getLogoSource(i),L),o(2),S(i.symbol)}}function De(r,a){if(r&1){let i=k();s(0,"button",3),_("click",function(){let t=x(i).$implicit,n=h(2);return v(n.emitSelectedTicker(t.symbol))}),d(1,"img",4),s(2,"div"),m(3),c()()}if(r&2){let i=a.$implicit,e=h(2);o(),p("src",e.getLogoSource(i),L),o(2),S(i.symbol)}}function Ee(r,a){if(r&1&&(O(0),C(1,De,4,2,"button",1),R()),r&2){let i=h();o(),p("ngForOf",i.sortedEtfs)}}var ct=(()=>{let a=class a{constructor(e){this.dataService=e,this.showETF=!0,this.selectedTicker=new B,this.sortedStocks=[],this.sortedEtfs=[]}ngOnInit(){this.sortedStocks=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="EQUITY").sort((e,t)=>e["52WeekChange"]-t["52WeekChange"]),this.sortedEtfs=Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="ETF").sort((e,t)=>e.ytdReturn-t.ytdReturn)}emitSelectedTicker(e){this.selectedTicker.emit(e)}getLogoSource(e){return`/assets/ticker-logos/${e.symbol}.png`}};a.\u0275fac=function(t){return new(t||a)(g(I))},a.\u0275cmp=u({type:a,selectors:[["stock-ticker-buttons"]],inputs:{showETF:"showETF"},outputs:{selectedTicker:"selectedTicker"},standalone:!0,features:[f],decls:3,vars:2,consts:[[1,"logos-container"],["mat-button","","class","ticker-button",3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],["mat-button","",1,"ticker-button",3,"click"],["alt","Logo","width","auto","height","35",3,"src"]],template:function(t,n){t&1&&(s(0,"div",0),C(1,we,4,2,"button",1)(2,Ee,2,1,"ng-container",2),c()),t&2&&(o(),p("ngForOf",n.sortedStocks),o(),p("ngIf",n.showETF))},dependencies:[U,E,ie,te],styles:[".logos-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 1rem 1rem}.ticker-button[_ngcontent-%COMP%]{align-items:center;height:5rem}.ticker-button[_ngcontent-%COMP%]:hover{border-left:.3rem solid slategrey}"]});let r=a;return r})();export{Ae as a,Ze as b,ct as c};
