import{Ra as g}from"./chunk-UCUWC6TM.js";import{$a as l,Ab as h,Bb as d,Cb as c,Zb as m,ja as r}from"./chunk-Z2OYXGZW.js";import{a as o}from"./chunk-MON7YFGF.js";var u=(()=>{let e=class e{constructor(t){this.dataService=t,this.showWatchlist=!1,this.widgetParams={symbol:this.symbol,height:"800",width:"auto",autosize:!1,timezone:"America/New_York",style:"1",range:"12M",theme:"light",locale:"en",details:!0,toolbar_bg:"#f1f3f6",withdateranges:!0,hide_side_toolbar:!1,allow_symbol_change:!0,watchlist:[],studies:["STD;Bollinger_Bands","STD;MACD","STD;RSI"],show_popup_button:!0,popup_width:"1000",popup_height:"800",container_id:"tradingview_ecabe"}}ngOnInit(){let t={};this.showWatchlist?this.watchlist?t=this.getWidgetParams(this.symbol,this.watchlist):t=this.getWidgetParams(this.symbol,["AAPL","AMZN","GOOG","META","MSFT","NFLX","NVDA","TSLA"]):t=this.getWidgetParams(this.symbol,["AAPL","AMZN","GOOG","META","MSFT","NFLX","NVDA","TSLA"]),new TradingView.widget(t)}getWidgetParams(t,i,n="light"){let a=o({},this.widgetParams);return a.symbol=t,a.watchlist=i,a.theme=n,a}};e.\u0275fac=function(i){return new(i||e)(l(g))},e.\u0275cmp=r({type:e,selectors:[["tv-advanced-chart-widget"]],inputs:{symbol:"symbol",showWatchlist:"showWatchlist",watchlist:"watchlist",theme:"theme"},standalone:!0,features:[m],decls:3,vars:0,consts:[["advancedChartWidget",""],[1,"tradingview-widget-container"],["id","tradingview_ecabe"]],template:function(i,n){i&1&&(h(0,"div",1,0),c(2,"div",2),d())},styles:[".tradingview-widget-container[_ngcontent-%COMP%]{padding-bottom:20px}"]});let s=e;return s})();export{u as a};
