"use strict";(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[9654],{9654:(w,x,u)=>{u.r(x),u.d(x,{ion_accordion:()=>m,ion_accordion_group:()=>b});var c=u(5861),d=u(2361),v=u(8117),f=u(8686),l=u(206);const m=class{constructor(e){var n=this;(0,d.r)(this,e),this.updateListener=()=>this.updateState(!1),this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+E++,this.disabled=!1,this.readonly=!1,this.toggleIcon=v.i,this.toggleIconSlot="end",this.setItemDefaults=()=>{const t=this.getSlottedHeaderIonItem();!t||(t.button=!0,t.detail=!1,void 0===t.lines&&(t.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:t}=this;if(!t)return;const o=t.querySelector("slot");return o?o.assignedElements&&o.assignedElements().find(i=>"ION-ITEM"===i.tagName):void 0},this.setAria=(t=!1)=>{const o=this.getSlottedHeaderIonItem();if(!o)return;const i=(0,l.g)(o).querySelector("button");!i||i.setAttribute("aria-expanded",`${t}`)},this.slotToggleIcon=()=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const{toggleIconSlot:o,toggleIcon:a}=this;if(t.querySelector(".ion-accordion-toggle-icon"))return;const r=document.createElement("ion-icon");r.slot=o,r.lazy=!1,r.classList.add("ion-accordion-toggle-icon"),r.icon=a,r.setAttribute("aria-hidden","true"),t.appendChild(r)},this.expandAccordion=(t=!1)=>{if(t)return void(this.state=4);if(4===this.state)return;const{contentEl:o,contentElWrapper:a}=this;void 0===o||void 0===a||(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(0,l.r)(()=>{this.state=8,this.currentRaf=(0,l.r)((0,c.Z)(function*(){const i=a.offsetHeight,r=(0,l.t)(o,2e3);o.style.setProperty("max-height",`${i}px`),yield r,n.state=4,o.style.removeProperty("max-height")}))}):this.state=4)},this.collapseAccordion=(t=!1)=>{if(t)return void(this.state=1);if(1===this.state)return;const{contentEl:o}=this;void 0!==o&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=(0,l.r)((0,c.Z)(function*(){o.style.setProperty("max-height",`${o.offsetHeight}px`),(0,l.r)((0,c.Z)(function*(){const i=(0,l.t)(o,2e3);n.state=2,yield i,n.state=1,o.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>!("undefined"==typeof window||matchMedia("(prefers-reduced-motion: reduce)").matches||!f.c.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=(0,c.Z)(function*(t=!1){const o=n.accordionGroupEl,a=n.value;if(!o)return;const i=o.value;if(Array.isArray(i)?i.includes(a):i===a)n.expandAccordion(t),n.isNext=n.isPrevious=!1;else{n.collapseAccordion(t);const s=n.getNextSibling(),h=s&&s.value;void 0!==h&&(n.isPrevious=Array.isArray(i)?i.includes(h):i===h);const p=n.getPreviousSibling(),g=p&&p.value;void 0!==g&&(n.isNext=Array.isArray(i)?i.includes(g):i===g)}}),this.getNextSibling=()=>{if(!this.el)return;const t=this.el.nextElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const t=this.el.previousElementSibling;return"ION-ACCORDION"===(null==t?void 0:t.tagName)?t:void 0}}connectedCallback(){const e=this.accordionGroupEl=this.el&&this.el.closest("ion-accordion-group");e&&(this.updateState(!0),(0,l.a)(e,"ionChange",this.updateListener))}disconnectedCallback(){const e=this.accordionGroupEl;e&&(0,l.b)(e,"ionChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),(0,l.r)(()=>{this.setAria(4===this.state||8===this.state)})}toggleExpanded(){const{accordionGroupEl:e,value:n,state:t}=this;e&&e.requestAccordionToggle(n,1===t||2===t)}render(){const{disabled:e,readonly:n}=this,t=(0,f.b)(this),o=4===this.state||8===this.state,a=o?"header expanded":"header",i=o?"content expanded":"content";return this.setAria(o),(0,d.h)(d.H,{class:{[t]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":e,"accordion-readonly":n,"accordion-animated":f.c.getBoolean("animated",!0)}},(0,d.h)("div",{onClick:()=>this.toggleExpanded(),id:"header",part:a,"aria-controls":"content",ref:r=>this.headerEl=r},(0,d.h)("slot",{name:"header"})),(0,d.h)("div",{id:"content",part:i,role:"region","aria-labelledby":"header",ref:r=>this.contentEl=r},(0,d.h)("div",{id:"content-wrapper",ref:r=>this.contentElWrapper=r},(0,d.h)("slot",{name:"content"}))))}static get delegatesFocus(){return!0}get el(){return(0,d.i)(this)}};let E=0;m.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};const b=class{constructor(e){(0,d.r)(this,e),this.ionChange=(0,d.e)(this,"ionChange",7),this.animated=!0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:e,multiple:n}=this;!n&&Array.isArray(e)?this.value=e[0]:this.ionChange.emit({value:this.value})}disabledChanged(){var e=this;return(0,c.Z)(function*(){const{disabled:n}=e,t=yield e.getAccordions();for(const o of t)o.disabled=n})()}readonlyChanged(){var e=this;return(0,c.Z)(function*(){const{readonly:n}=e,t=yield e.getAccordions();for(const o of t)o.readonly=n})()}onKeydown(e){var n=this;return(0,c.Z)(function*(){const t=document.activeElement;if(!t)return;const o="ION-ACCORDION"===t.tagName?t:t.closest("ion-accordion");if(!o||o.closest("ion-accordion-group")!==n.el)return;const i=yield n.getAccordions(),r=i.findIndex(h=>h===o);if(-1===r)return;let s;"ArrowDown"===e.key?s=n.findNextAccordion(i,r):"ArrowUp"===e.key?s=n.findPreviousAccordion(i,r):"Home"===e.key?s=i[0]:"End"===e.key&&(s=i[i.length-1]),void 0!==s&&s!==t&&s.focus()})()}componentDidLoad(){var e=this;return(0,c.Z)(function*(){e.disabled&&e.disabledChanged(),e.readonly&&e.readonlyChanged()})()}requestAccordionToggle(e,n){var t=this;return(0,c.Z)(function*(){const{multiple:o,value:a,readonly:i,disabled:r}=t;if(!i&&!r)if(n)if(o){const s=a||[],h=Array.isArray(s)?s:[s];void 0===h.find(g=>g===e)&&void 0!==e&&(t.value=[...h,e])}else t.value=e;else if(o){const s=a||[],h=Array.isArray(s)?s:[s];t.value=h.filter(p=>p!==e)}else t.value=void 0})()}findNextAccordion(e,n){const t=e[n+1];return void 0===t?e[0]:t}findPreviousAccordion(e,n){const t=e[n-1];return void 0===t?e[e.length-1]:t}getAccordions(){var e=this;return(0,c.Z)(function*(){return Array.from(e.el.querySelectorAll(":scope > ion-accordion"))})()}render(){const{disabled:e,readonly:n,expand:t}=this,o=(0,f.b)(this);return(0,d.h)(d.H,{class:{[o]:!0,"accordion-group-disabled":e,"accordion-group-readonly":n,[`accordion-group-expand-${t}`]:!0},role:"presentation"},(0,d.h)("slot",null))}get el(){return(0,d.i)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};b.style={ios:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.accordion-group-expand-inset){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);