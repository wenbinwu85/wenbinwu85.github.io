import{b as N}from"./chunk-2EEM2UOU.js";import{a as O,b as P,c as w,d as F}from"./chunk-NMF3L7ZG.js";import{ka as G}from"./chunk-6RQDYKFG.js";import{a as x,b as S}from"./chunk-Z3Q5TBNA.js";import{a as $}from"./chunk-Z6ROTX7E.js";import{Sa as I,Ta as T,h as _,n as M}from"./chunk-U5L5YZWS.js";import{$a as E,Bb as r,Cb as i,Db as c,Eb as u,Fb as h,Vb as m,Wb as C,_a as d,_b as y,dc as b,fc as D,ja as g,qb as f,sb as s}from"./chunk-HSDL35WG.js";function z(a,o){if(a&1&&(r(0,"div",10),c(1,"info-card",11),i()),a&2){let n=o.$implicit;d(),s("icon","article")("value",n.title)("subtitle",n.symbol)("date",n.displayTime)("fontSize","1rem")("color","steelblue")("accentColor","steelblue")("subtitleChip",!0)}}function Y(a,o){if(a&1&&(r(0,"div",10),c(1,"info-card",12),i()),a&2){let n=o.$implicit;d(),s("icon","thumbs_up_down")("value",n.fromGrade+" --> "+n.toGrade)("subtitle",n.symbol)("additionalInfo",n.firm)("date",n.date)("fontSize","1rem")("color",n.color)("accentColor",n.color)("subtitleChip",!0)}}function j(a,o){if(a&1&&(u(0),c(1,"info-card",15),h()),a&2){let n=o.$implicit;d(),s("icon",n.icon)("value",n.name)("subtitle",n.event)("additionalInfo",n.detail)("fontSize","1rem")("color",n.color)("accentColor",n.color)}}function H(a,o){if(a&1&&(u(0),r(1,"div",13),m(2),b(3,"date"),i(),r(4,"div",14),f(5,j,2,7,"ng-container",9),i(),h()),a&2){let n=o.$implicit;d(2),C(D(3,2,n[0],"MMMM d, EEEE")),d(3),s("ngForOf",n[1])}}var te=(()=>{let o=class o{constructor(e){this.dataService=e,this.events=[],this.eventDates=[],this.mappedEvents={},this.corporateEvents=[],this.gradingEvents=[]}ngOnInit(){Object.values(this.dataService.portfolioData).filter(e=>e.quoteType==="EQUITY").forEach(e=>{if(e.upgradeDowngradeHistory.map(t=>{this.gradingEvents.push({shortName:e.shortName,symbol:e.symbol,date:t.epochGradeDate,firm:t.firm,toGrade:t.toGrade,fromGrade:t.fromGrade,action:t.action,color:t.action==="up"?"teal":t.action==="down"?"chocolate":"steelblue"})}),e.calendarEvents){let t=e.calendarEvents,l=e.earnings.earningsChart,p=this.dataService.portfolioHoldings[e.symbol];if(t.exDividendDate){let v=(e.dividendYield*100).toFixed(2);this.events.push({symbol:e.symbol,name:e.shortName,date:new Date(t.exDividendDate).valueOf(),event:"Ex-Dividend",icon:"rule",color:"chocolate",detail:`Yield: ${v}%`})}if(t.dividendDate){let v=(e.lastDividendValue*p.sharesOwned).toFixed(2);this.events.push({symbol:e.symbol,name:e.shortName,date:new Date(t.dividendDate).valueOf(),event:"Dividend",icon:"attach_money",color:"teal",detail:`Income: $${v}`})}if(t.earnings.earningsDate[0]){let v=`${l.currentQuarterEstimateDate} estimate: ${l.currentQuarterEstimate}`;this.events.push({symbol:e.symbol,name:e.shortName,date:new Date(t.earnings?.earningsDate[0]?.slice(0,-2)).valueOf(),event:"Earnings",icon:"insights",color:"steelblue",detail:v})}}this.dataService.getCorporateEvents(e.symbol,!0).subscribe(t=>{this.corporateEvents.push(...t[e.symbol]),this.corporateEvents=this.corporateEvents.sort((l,p)=>p.time-l.time).slice(0,25)})}),this.gradingEvents=this.gradingEvents.sort((e,t)=>{let l=new Date(t.date).valueOf(),p=new Date(e.date).valueOf();return l-p}).slice(0,25),this.events=this.events.filter(e=>e.date>=new Date().valueOf()),this.events.sort((e,t)=>e.date-t.date),this.events.forEach(e=>this.eventDates.push(e.date)),this.eventDates=new Set(this.eventDates),this.eventDates=Array.from(this.eventDates),this.eventDates.forEach(e=>{this.mappedEvents[e]=this.events.filter(t=>t.date===e)}),this.mappedEvents=Object.entries(this.mappedEvents).slice(0,20)}};o.\u0275fac=function(t){return new(t||o)(E($))},o.\u0275cmp=g({type:o,selectors:[["app-portfolio-main"]],standalone:!0,features:[y],decls:31,vars:5,consts:[[3,"expanded"],[1,"add-border","main-section"],[1,"corp-events-container"],[1,"title"],["class","add-margin",4,"ngFor","ngForOf"],["vertical",""],[1,"grading-events-container"],[1,"calendar-events-container"],[1,"add-margin","day-container"],[4,"ngFor","ngForOf"],[1,"add-margin"],[3,"icon","value","subtitle","date","fontSize","color","accentColor","subtitleChip"],[3,"icon","value","subtitle","additionalInfo","date","fontSize","color","accentColor","subtitleChip"],[1,"event-date"],[1,"event-container"],[3,"icon","value","subtitle","additionalInfo","fontSize","color","accentColor"]],template:function(t,l){t&1&&(r(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),m(4,"auto_graph"),i(),r(5,"span"),m(6,"Price Change"),i()()(),c(7,"stock-price-movement-charts"),i(),r(8,"mat-expansion-panel",0)(9,"mat-expansion-panel-header")(10,"mat-panel-title")(11,"mat-icon"),m(12,"event"),i(),r(13,"span"),m(14,"Events"),i()()(),r(15,"section",1)(16,"div",2)(17,"div",3),m(18,"Corporate"),i(),f(19,z,2,8,"div",4),i(),c(20,"mat-divider",5),r(21,"div",6)(22,"div",3),m(23,"Gradings"),i(),f(24,Y,2,9,"div",4),i(),c(25,"mat-divider",5),r(26,"div",7)(27,"div",3),m(28,"Calendar"),i(),r(29,"div",8),f(30,H,6,5,"ng-container",9),i()()()()),t&2&&(s("expanded",!0),d(8),s("expanded",!0),d(11),s("ngForOf",l.corporateEvents),d(5),s("ngForOf",l.gradingEvents),d(6),s("ngForOf",l.mappedEvents))},dependencies:[M,G,S,x,F,O,P,w,T,I,_,N],styles:[".main-section[_ngcontent-%COMP%]{display:flex}.day-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.event-date[_ngcontent-%COMP%]{margin-top:1rem;padding-bottom:.5rem}.event-date[_ngcontent-%COMP%]:first-of-type{margin-top:0}.event-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-bottom:10px}.corp-events-container[_ngcontent-%COMP%], .grading-events-container[_ngcontent-%COMP%], .calendar-events-container[_ngcontent-%COMP%]{margin-top:.5rem}.grading-events-container[_ngcontent-%COMP%], .calendar-events-container[_ngcontent-%COMP%]{min-width:max-content}"]});let a=o;return a})();export{te as a};
