import{t as m,u as h,v as w}from"./chunk-RAZSNZUC.js";import{C as d,N as g,_ as u,da as b,g as p,m as c,w as f}from"./chunk-VEGADB6U.js";import{a as n,b as r}from"./chunk-MON7YFGF.js";var y=(()=>{let a=class a{constructor(t){this.http=t,this.httpOptions={headers:new m().set("content-type","application/json").set("Access-Control-Allow-Origin","*")},this.backendDataPath="../../../backend/data/",this.backendUrl="http://127.0.0.1:5000",this.portfolioTechnicalInsights={},this.isLoadingData=new p(!1),this.updatePortfolioData(!1)}error(t){let s=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status} Message: ${t.message}`;return c({data:[],message:s,status:500})}wrapHttpCall(t,s=this.httpOptions){return this.http.get(t,s).pipe(g(2),d(this.error))}updatePortfolioData(t){this.isLoadingData.next(!0),f([this.getPortfolioData(t),this.getPortfolioHoldings()]).subscribe(([s,o])=>{this.portfolioData=s,this.portfolioHoldings=o,this.portfolioSymbols=Object.keys(this.portfolioData),t&&location.reload(),this.isLoadingData.next(!1),console.log("--- sanity check ---"),console.table(Object.entries(this.portfolioHoldings))})}updatePortfolioTechnicalInsights(){this.isLoadingData.next(!0),this.portfolioSymbols.forEach(t=>{this.getTechnicalInsights(t).subscribe(s=>{this.portfolioTechnicalInsights[t]=s,Object.keys(this.portfolioTechnicalInsights).length===this.portfolioSymbols.length&&this.isLoadingData.next(!1)})})}getPortfolioHoldings(){let t=`${this.backendUrl}/fetch/portfolio/holdings`;return this.wrapHttpCall(t)}getPortfolioSymbols(){let t=`${this.backendUrl}/fetch/portfolio/symbols`;return this.wrapHttpCall(t)}getPortfolioData(t){let s=`${this.backendUrl}/fetch/portfolio/data`;if(t!==null){let o=new h().set("update",String(t)),e=r(n({},this.httpOptions),{params:o});return this.wrapHttpCall(s,e)}return this.wrapHttpCall(s)}getStockData(t,s){let o=`${this.backendUrl}/fetch/stock/${t}`;if(s!==null){let e=new h().set("save",String(s)),i=r(n({},this.httpOptions),{params:e});return this.wrapHttpCall(o,i)}return this.wrapHttpCall(o)}getStocksData(t,s){let o=`${this.backendUrl}/fetch/stocks/`+t.join(":");if(s!==null){let e=new h().set("save",String(s)),i=r(n({},this.httpOptions),{params:e});return this.wrapHttpCall(o,i)}return this.wrapHttpCall(o)}loadStockDataFromDataFolder(t){let s=`${this.backendDataPath}${t.toLowerCase()}.json`,o=r(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,o)}getDividendHistory(t,s=10,o=!1){let e=`${this.backendUrl}/fetch/dividend-history/${t}`,i=new h;i=i.set("update",String(o)),i=i.set("years",s);let k=r(n({},this.httpOptions),{params:i});return this.wrapHttpCall(e,k)}getTechnicalInsights(t){let s=`${this.backendUrl}/fetch/technical-insights/${t}`;return this.wrapHttpCall(s)}loadTechnicalInsightsFromDataFolder(t){let s=`${this.backendDataPath}${t.toLowerCase()}-technical-insights.json`,o=r(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,o)}getCorporateEvents(t){let s=`${this.backendUrl}/fetch/events/${t}`;return this.wrapHttpCall(s)}getRecommendations(t){let s=`${this.backendUrl}/fetch/recommendations/${t}`;return this.wrapHttpCall(s)}};a.\u0275fac=function(s){return new(s||a)(b(w))},a.\u0275prov=u({token:a,factory:a.\u0275fac,providedIn:"root"});let l=a;return l})();export{y as a};