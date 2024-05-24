import './polyfills.server.mjs';
import{t as D}from"./chunk-JMN56CJB.mjs";import{$ as f,$a as n,Gb as F,T as v,W as y,a as u,ac as M,ba as b,bc as T,c as g,f as p,gb as w,h as o,i as m,ia as L,ja as z,ka as E,qa as C,ub as S,ya as O,za as l}from"./chunk-MKZXB7FZ.mjs";import{h}from"./chunk-NDYDZJSS.mjs";var d=class{constructor(){this.subject=new o(1),this.subscriptions=new u}doFilter(t){this.subject.next(t)}dispose(){this.subscriptions.unsubscribe()}notEmpty(t,a){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]){let i=e[t].currentValue;i!=null&&a(i)}}))}has(t,a){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]){let i=e[t].currentValue;a(i)}}))}notFirst(t,a){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]&&!e[t].isFirstChange()){let i=e[t].currentValue;a(i)}}))}notFirstAndEmpty(t,a){this.subscriptions.add(this.subject.subscribe(e=>{if(e[t]&&!e[t].isFirstChange()){let i=e[t].currentValue;i!=null&&a(i)}}))}},c=new b("NGX_ECHARTS_CONFIG"),R=(()=>{let t=class t{constructor(e,i,r){this.el=i,this.ngZone=r,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new l,this.optionsError=new l,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartHighlight=this.createLazyEvent("highlight"),this.chartDownplay=this.createLazyEvent("downplay"),this.chartSelectChanged=this.createLazyEvent("selectchanged"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendLegendSelectAll=this.createLazyEvent("legendselectall"),this.chartLegendLegendInverseSelect=this.createLazyEvent("legendinverseselect"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartGraphRoam=this.createLazyEvent("graphroam"),this.chartGeoRoam=this.createLazyEvent("georoam"),this.chartTreeRoam=this.createLazyEvent("treeroam"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartGeoSelectChanged=this.createLazyEvent("geoselectchanged"),this.chartGeoSelected=this.createLazyEvent("geoselected"),this.chartGeoUnselected=this.createLazyEvent("geounselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartGlobalCursorTaken=this.createLazyEvent("globalcursortaken"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.chart$=new o(1),this.resize$=new p,this.changeFilter=new d,this.resizeObFired=!1,this.echarts=e.echarts,this.theme=e.theme||null}ngOnChanges(e){this.changeFilter.doFilter(e)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(y(100,m,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(e=>{for(let i of e)i.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",e=>this.onOptionsChange(e)),this.changeFilter.notFirstAndEmpty("merge",e=>this.setOption(e)),this.changeFilter.has("loading",e=>this.toggleLoading(!!e)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(e){this.chart?e?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(i=>e?i.showLoading(this.loadingType,this.loadingOpts):i.hideLoading())}setOption(e,i){if(this.chart)try{this.chart.setOption(e,i)}catch(r){console.error(r),this.optionsError.emit(r)}}refreshChart(){return h(this,null,function*(){this.dispose(),yield this.initChart()})}createChart(){let e=this.el.nativeElement;if(window&&window.getComputedStyle){let i=window.getComputedStyle(e,null).getPropertyValue("height");(!i||i==="0px")&&(!e.style.height||e.style.height==="0px")&&(e.style.height="400px")}return this.ngZone.runOutsideAngular(()=>(typeof this.echarts=="function"?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:r})=>r(e,this.theme,this.initOpts)))}initChart(){return h(this,null,function*(){yield this.onOptionsChange(this.options),this.merge&&this.chart&&this.setOption(this.merge)})}onOptionsChange(e){return h(this,null,function*(){e&&(this.chart?this.setOption(this.options,!0):(this.chart=yield this.createChart(),this.chart$.next(this.chart),this.chartInit.emit(this.chart),this.setOption(this.options,!0)))})}createLazyEvent(e){return this.chartInit.pipe(v(i=>new g(r=>(i.on(e,I=>this.ngZone.run(()=>r.next(I))),()=>{this.chart&&(this.chart.isDisposed()||i.off(e))}))))}};t.\u0275fac=function(i){return new(i||t)(n(c),n(O),n(w))},t.\u0275dir=E({type:t,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],standalone:!0,features:[C]});let s=t;return s})();var j=s=>({provide:c,useValue:s}),G=(()=>{let t=class t{static forRoot(e){return{ngModule:t,providers:[j(e)]}}static forChild(){return{ngModule:t}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=z({type:t}),t.\u0275inj=f({});let s=t;return s})();var Q=(()=>{let t=class t{constructor(){this.renderType="svg",this.initOptions={renderer:this.renderType}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=L({type:t,selectors:[["echarts-vertical-bar-chart"]],inputs:{options:"options",updateOptions:"updateOptions",renderType:"renderType"},standalone:!0,features:[M([{provide:c,useFactory:()=>({echarts:()=>import("./chunk-HIQ3IYBF.mjs")})}]),T],decls:1,vars:3,consts:[["echarts","",3,"initOpts","options","merge"]],template:function(i,r){i&1&&F(0,"div",0),i&2&&S("initOpts",r.initOptions)("options",r.options)("merge",r.updateOptions)},dependencies:[D,G,R]});let s=t;return s})();export{Q as a};