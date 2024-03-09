import './polyfills.server.mjs';
import{A as b,B as l,C as w}from"./chunk-6YJCKQYO.mjs";import{C as f,N as g,g as h,m as c,ma as u,w as d,wa as m}from"./chunk-D5BORNAZ.mjs";import{a as r,b as n}from"./chunk-VVCT4QZE.mjs";var y=(()=>{let e=class e{constructor(t){this.http=t,this.httpOptions={headers:new b().set("content-type","application/json").set("Access-Control-Allow-Origin","*")},this.backendDataPath="../../../backend/data/",this.backendUrl="http://127.0.0.1:5000",this.isLoadingData=new h(!1),this.updatePortfolioData(!1)}error(t){let s=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status} Message: ${t.message}`;return c({data:[],message:s,status:500})}wrapHttpCall(t,s=this.httpOptions){return this.http.get(t,s).pipe(g(2),f(this.error))}updatePortfolioData(t){this.isLoadingData.next(!0),console.log("loading true..."),d([this.getPortfolioData(t),this.getPortfolioHoldings()]).subscribe(([s,o])=>{this.portfolioData=s,this.portfolioHoldings=o,this.portfolioSymbols=Object.keys(this.portfolioData),this.isLoadingData.next(!1),t&&location.reload(),console.log("--- sanity check ---"),console.table(Object.entries(this.portfolioHoldings))})}getPortfolioHoldings(){let t=`${this.backendUrl}/fetch/portfolio/holdings`;return this.wrapHttpCall(t)}getPortfolioSymbols(){let t=`${this.backendUrl}/fetch/portfolio/symbols`;return this.wrapHttpCall(t)}getPortfolioData(t){let s=`${this.backendUrl}/fetch/portfolio/data`;if(t!==null){let o=new l().set("update",String(t)),i=n(r({},this.httpOptions),{params:o});return this.wrapHttpCall(s,i)}return this.wrapHttpCall(s)}getStockData(t,s){let o=`${this.backendUrl}/fetch/stock/${t}`;if(s!==null){let i=new l().set("save",String(s)),a=n(r({},this.httpOptions),{params:i});return this.wrapHttpCall(o,a)}return this.wrapHttpCall(o)}getStocksData(t,s){let o=`${this.backendUrl}/fetch/stocks/`+t.join(":");if(s!==null){let i=new l().set("save",String(s)),a=n(r({},this.httpOptions),{params:i});return this.wrapHttpCall(o,a)}return this.wrapHttpCall(o)}loadStockDataFromDataFolder(t){let s=`${this.backendDataPath}${t.toLowerCase()}.json`,o=n(r({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,o)}getDividendHistory(t,s=10,o=!1){let i=`${this.backendUrl}/fetch/dividend-history/${t}`,a=new l;a=a.set("update",String(o)),a=a.set("years",s);let H=n(r({},this.httpOptions),{params:a});return this.wrapHttpCall(i,H)}getTechnicalInsights(t){let s=`${this.backendUrl}/fetch/technical-insights/${t}`;return this.wrapHttpCall(s)}loadTechnicalInsightsFromDataFolder(t){let s=`${this.backendDataPath}${t.toLowerCase()}-technical-insights.json`,o=n(r({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,o)}getRecommendations(t){let s=`${this.backendUrl}/fetch/recommendations/${t}`;return this.wrapHttpCall(s)}getCorporateEvents(t){let s=`${this.backendUrl}/fetch/events/${t}`;return this.wrapHttpCall(s)}};e.\u0275fac=function(s){return new(s||e)(m(w))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let p=e;return p})();export{y as a};
