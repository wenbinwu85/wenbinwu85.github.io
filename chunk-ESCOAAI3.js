import{t as w,u as P,v as y}from"./chunk-UH6MBXDX.js";import{C as d,N as b,_ as u,da as k,g as p,m as g,w as f}from"./chunk-VEGADB6U.js";import{a as n,b as l}from"./chunk-MON7YFGF.js";var m=(()=>{let a=class a{constructor(t){this.http=t,this.httpOptions={headers:new w().set("content-type","application/json").set("Access-Control-Allow-Origin","*")},this.backendDataPath="../../../backend/data",this.backendUrl="http://127.0.0.1:5000",this.portfolioHoldings={},this.portfolioSymbols=[],this.portfolioData={},this.portfolioTechnicalInsights={},this.isLoadingData=new p(!1),this.updatePortfolioData(!0)}error(t){let o=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status} Message: ${t.message}`;return g({data:[],message:o,status:500})}wrapHttpCall(t,o=this.httpOptions){return this.http.get(t,o).pipe(b(2),d(this.error))}updatePortfolioData(t){this.isLoadingData.next(!0),f([this.getPortfolioData(t),this.getPortfolioHoldings()]).subscribe(([o,e])=>{if(this.portfolioData=o,this.portfolioHoldings=e,this.portfolioSymbols=Object.keys(this.portfolioData),t){this.isLoadingData.next(!1),console.log("%c ----- Sanity Check -----","background: teal; color: white");let s=Object.keys(this.portfolioData).length===this.portfolioSymbols.length;console.log("data.length equal symbols.length:",s),console.table(Object.entries(this.portfolioHoldings)),console.log("%c ------------------------","background: teal; color: white")}else{let s=Object.values(this.portfolioData).filter(r=>r.quoteType==="EQUITY"),i=0;s.forEach(r=>{this.getCorporateEvents(r.symbol).subscribe(()=>{if(i++,i===s.length){this.isLoadingData.next(!1),console.log("%c ----- Sanity Check -----","background: teal; color: white");let c=i===s.length;console.log("counter equal stocks.length:",c),console.log("%c ------------------------","background: teal; color: white"),location.reload()}})})}})}updatePortfolioTechnicalInsights(){this.isLoadingData.next(!0),this.portfolioSymbols.forEach(t=>{this.getTechnicalInsights(t).subscribe(o=>{if(this.portfolioTechnicalInsights[t]=o,Object.keys(this.portfolioTechnicalInsights).length===this.portfolioSymbols.length){this.isLoadingData.next(!1),console.log("%c ----- Sanity Check -----","background: teal; color: white");let e=Object.keys(this.portfolioTechnicalInsights).length===this.portfolioSymbols.length;console.log("technicalInsights.length equal symbols.length:",e),console.table(Object.entries(this.portfolioTechnicalInsights)),console.log("%c ------------------------","background: teal; color: white")}})})}getPortfolioHoldings(){let t=`${this.backendUrl}/fetch/portfolio/holdings`;return this.wrapHttpCall(t)}getPortfolioSymbols(){let t=`${this.backendUrl}/fetch/portfolio/symbols`;return this.wrapHttpCall(t)}getPortfolioData(t=!1){if(t){let e=`${this.backendDataPath}/portfolio.json`,s=l(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(e,s)}let o=`${this.backendUrl}/fetch/portfolio/data`;return this.wrapHttpCall(o)}getStockData(t,o=!1){if(o){let s=`${this.backendDataPath}/${t.toLowerCase()}.json`,i=l(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,i)}let e=`${this.backendUrl}/fetch/stock/${t.toLowerCase()}`;return this.wrapHttpCall(e)}getDividendHistory(t,o=10,e=!1){if(e){let c=`${this.backendDataPath}/${t.toLowerCase()}-dividend.json`,C=l(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(c,C)}let s=`${this.backendUrl}/fetch/dividend-history/${t}`,i=new P().set("years",o),r=l(n({},this.httpOptions),{params:i});return this.wrapHttpCall(s,r)}getTechnicalInsights(t,o=!1){if(o){let s=`${this.backendDataPath}/${t.toLowerCase()}-technical-insights.json`,i=l(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,i)}let e=`${this.backendUrl}/fetch/technical-insights/${t}`;return this.wrapHttpCall(e)}getCorporateEvents(t,o=!1){if(o){let s=`${this.backendDataPath}/${t.toLowerCase()}-events.json`,i=l(n({},this.httpOptions),{responseType:"json"});return this.wrapHttpCall(s,i)}let e=`${this.backendUrl}/fetch/events/${t}`;return this.wrapHttpCall(e)}};a.\u0275fac=function(o){return new(o||a)(k(y))},a.\u0275prov=u({token:a,factory:a.\u0275fac,providedIn:"root"});let h=a;return h})();export{m as a};