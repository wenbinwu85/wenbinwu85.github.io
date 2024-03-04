import './polyfills.server.mjs';
import{a as w}from"./chunk-6NFK5ISD.mjs";import{b as O}from"./chunk-RTSQ3GE6.mjs";import{a as T}from"./chunk-KUHTMXSH.mjs";import{P}from"./chunk-MA3PBPVZ.mjs";import{m as S,n as b,s as I,v as F}from"./chunk-FCMVA44A.mjs";import{Ab as a,Jb as d,Kb as m,Lb as g,Mb as p,Nb as v,Wb as _,ba as D,bb as o,cb as M,dc as h,ec as E,ic as x,nc as y,pc as u,yb as l}from"./chunk-NLLPQ6HJ.mjs";function $(e,i){if(e&1&&(p(0),g(1,"info-card",5),v()),e&2){let t=i.$implicit;o(),a("icon",t.icon)("value",t.name)("subtitle",t.symbol)("additionalInfo",t.event)("fontSize","1rem")("color",t.color)}}function z(e,i){if(e&1&&(d(0,"div",2)(1,"div",3),h(2),y(3,"date"),m(),d(4,"div",4),l(5,$,2,6,"ng-container",0),m()()),e&2){let t=_().$implicit;o(2),E(u(3,2,t[0].date,"MMMM d, EEEE")),o(3),a("ngForOf",t)}}function Y(e,i){if(e&1&&(p(0),l(1,z,6,5,"div",1),v()),e&2){let t=i.$implicit;o(),a("ngIf",t.length>0)}}function j(e,i){if(e&1&&(p(0),g(1,"info-card",5),v()),e&2){let t=i.$implicit;o(),a("icon",t.icon)("value",t.name)("subtitle",t.symbol)("additionalInfo",t.event)("fontSize","1rem")("color",t.color)}}function A(e,i){if(e&1&&(d(0,"div",2)(1,"div",3),h(2),y(3,"date"),m(),d(4,"div",4),l(5,j,2,6,"ng-container",0),m()()),e&2){let t=_().$implicit;o(2),E(u(3,2,t[0].date,"MMMM d, EEEE")),o(3),a("ngForOf",t)}}function B(e,i){if(e&1&&(p(0),l(1,A,6,5,"div",1),v()),e&2){let t=i.$implicit;o(),a("ngIf",t.length>0)}}var Q=(()=>{let i=class i{constructor(s){this.dataService=s,this.events=[],this.m0CalendarEvents=[],this.m1CalendarEvents=[],this.m2CalendarEvents=[],this.year=new Date().getFullYear(),this.month=new Date().getMonth()%12,this.day=new Date().getDate()}ngOnInit(){let s=Object.values(this.dataService.portfolioData).filter(n=>n.calendarEvents);[...Array(32).keys()].forEach(n=>{this.m0CalendarEvents.push([]),this.m1CalendarEvents.push([])}),s.forEach(n=>{let r=n.calendarEvents;r&&(this.events.push({symbol:n.symbol,name:n.longName,date:r.exDividendDate,event:"Ex-Dividend",icon:"rule",color:"orangered"}),this.events.push({symbol:n.symbol,name:n.longName,date:r.dividendDate,event:"Dividend",icon:"attach_money",color:"seagreen"}),this.events.push({symbol:n.symbol,name:n.longName,date:r.earnings?.earningsDate[0]?.slice(0,-2)||"N/A",event:"Earnings",icon:"insights",color:"navy"}))}),this.events.forEach(n=>{let r=new Date(n.date),N=r.getFullYear(),C=r.getMonth()%12,f=r.getDate();N===this.year&&(C===this.month&&f>this.day?this.m0CalendarEvents[f].push(n):C===this.month+1&&this.m1CalendarEvents[f].push(n))})}};i.\u0275fac=function(c){return new(c||i)(M(T))},i.\u0275cmp=D({type:i,selectors:[["portfolio-events"]],standalone:!0,features:[x],decls:2,vars:2,consts:[[4,"ngFor","ngForOf"],["class","day-container",4,"ngIf"],[1,"day-container"],[1,"event-date"],[1,"event-container"],[3,"icon","value","subtitle","additionalInfo","fontSize","color"]],template:function(c,n){c&1&&l(0,Y,2,1,"ng-container",0)(1,B,2,1,"ng-container",0),c&2&&(a("ngForOf",n.m0CalendarEvents),o(),a("ngForOf",n.m1CalendarEvents))},dependencies:[F,S,b,I,O,P,w],styles:[".day-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.event-date[_ngcontent-%COMP%]{padding-bottom:10px}.event-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-bottom:10px}"]});let e=i;return e})();export{Q as a};