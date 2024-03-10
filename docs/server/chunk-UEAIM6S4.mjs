import './polyfills.server.mjs';
import{e as m,f as E,ma as f,pa as u}from"./chunk-D5BORNAZ.mjs";var g=class{};function y(s){return s&&typeof s.connect=="function"&&!(s instanceof m)}var o=function(s){return s[s.REPLACED=0]="REPLACED",s[s.INSERTED=1]="INSERTED",s[s.MOVED=2]="MOVED",s[s.REMOVED=3]="REMOVED",s}(o||{}),M=new u("_ViewRepeater"),C=class{applyChanges(e,t,i,n,h){e.forEachOperation((r,d,_)=>{let c,l;if(r.previousIndex==null){let a=i(r,d,_);c=t.createEmbeddedView(a.templateRef,a.context,a.index),l=o.INSERTED}else _==null?(t.remove(d),l=o.REMOVED):(c=t.get(d),t.move(c,_),l=o.MOVED);h&&h({context:c?.context,operation:l,record:r})})}detach(){}};var p=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(e=!1,t,i=!0,n){this._multiple=e,this._emitChanges=i,this.compareWith=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new E,t&&t.length&&(e?t.forEach(h=>this._markSelected(h)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){this._verifyValueAssignment(e),e.forEach(i=>this._markSelected(i));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...e){this._verifyValueAssignment(e),e.forEach(i=>this._unmarkSelected(i));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...e){this._verifyValueAssignment(e);let t=this.selected,i=new Set(e);e.forEach(h=>this._markSelected(h)),t.filter(h=>!i.has(this._getConcreteValue(h,i))).forEach(h=>this._unmarkSelected(h));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let i of t)if(this.compareWith(e,i))return i;return e}else return e}};var k=(()=>{let e=class e{constructor(){this._listeners=[]}notify(i,n){for(let h of this._listeners)h(i,n)}listen(i){return this._listeners.push(i),()=>{this._listeners=this._listeners.filter(n=>i!==n)}}ngOnDestroy(){this._listeners=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{g as a,y as b,o as c,M as d,C as e,p as f,k as g};