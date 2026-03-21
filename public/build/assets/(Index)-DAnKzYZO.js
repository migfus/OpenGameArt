import{$ as e,A as t,B as n,Ct as r,D as i,F as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,O as p,P as m,R as h,St as g,T as _,Tt as v,W as ee,X as y,Y as te,Z as b,bt as ne,d as x,f as S,gt as re,ht as C,i as w,it as T,j as E,k as D,l as O,nt as ie,pt as ae,q as k,rt as oe,u as A}from"./utils-DTVDdLMG.js";import"./dist-DheK3WGR.js";import"./index.esm-CVQ9ohcb.js";import{a as j,d as M,f as N,n as P,o as se,r as F,s as ce,t as I,u as L}from"./keyboard-Dcsxp-mV.js";import{l as le,r as R,t as ue,u as de}from"./app-eJeUw4ev.js";import{t as z}from"./NotifyBanner-CxxirRFJ.js";var fe=(e=>(e[e.Open=0]=`Open`,e[e.Closed=1]=`Closed`,e))(fe||{}),pe=Symbol(`DisclosureContext`);function me(e){let t=n(pe,null);if(t===null){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,me),t}return t}var he=Symbol(`DisclosurePanelContext`);function ge(){return n(he,null)}var _e=c({name:`Disclosure`,props:{as:{type:[Object,String],default:`template`},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:n}){let r=C(e.defaultOpen?0:1),i=C(null),a=C(null),o={buttonId:C(`headlessui-disclosure-button-${N()}`),panelId:C(`headlessui-disclosure-panel-${N()}`),disclosureState:r,panel:i,button:a,toggleDisclosure(){r.value=L(r.value,{0:1,1:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(e){o.closeDisclosure(),(e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?M(e):M(o.button):M(o.button))?.focus()}};return te(pe,o),j(p(()=>L(r.value,{0:P.Open,1:P.Closed}))),()=>{let{defaultOpen:i,...a}=e;return se({theirProps:a,ourProps:{},slot:{open:r.value===0,close:o.close},slots:t,attrs:n,name:`Disclosure`})}}}),ve=c({name:`DisclosureButton`,props:{as:{type:[Object,String],default:`button`},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:r}){let i=me(`DisclosureButton`),a=ge(),s=p(()=>a===null?!1:a.value===i.panelId.value);o(()=>{s.value||e.id!==null&&(i.buttonId.value=e.id)}),u(()=>{s.value||(i.buttonId.value=null)});let c=C(null);r({el:c,$el:c}),s.value||oe(()=>{i.button.value=c.value});let l=le(p(()=>({as:e.as,type:t.type})),c);function d(){var t;e.disabled||(s.value?(i.toggleDisclosure(),(t=M(i.button))==null||t.focus()):i.toggleDisclosure())}function f(t){var n;if(!e.disabled)if(s.value)switch(t.key){case I.Space:case I.Enter:t.preventDefault(),t.stopPropagation(),i.toggleDisclosure(),(n=M(i.button))==null||n.focus();break}else switch(t.key){case I.Space:case I.Enter:t.preventDefault(),t.stopPropagation(),i.toggleDisclosure();break}}function m(e){switch(e.key){case I.Space:e.preventDefault();break}}return()=>{let r={open:i.disclosureState.value===0},{id:a,...o}=e;return se({ourProps:s.value?{ref:c,type:l.value,onClick:d,onKeydown:f}:{id:i.buttonId.value??a,ref:c,type:l.value,"aria-expanded":i.disclosureState.value===0,"aria-controls":i.disclosureState.value===0||M(i.panel)?i.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:d,onKeydown:f,onKeyup:m},theirProps:o,slot:r,attrs:t,slots:n,name:`DisclosureButton`})}}}),ye=c({name:`DisclosurePanel`,props:{as:{type:[Object,String],default:`div`},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:r}){let i=me(`DisclosurePanel`);o(()=>{e.id!==null&&(i.panelId.value=e.id)}),u(()=>{i.panelId.value=null}),r({el:i.panel,$el:i.panel}),te(he,i.panelId);let a=F(),s=p(()=>a===null?i.disclosureState.value===0:(a.value&P.Open)===P.Open);return()=>{let r={open:i.disclosureState.value===0,close:i.close},{id:a,...o}=e;return se({ourProps:{id:i.panelId.value??a,ref:i.panel},theirProps:o,slot:r,attrs:t,slots:n,features:ce.RenderStrategy|ce.Static,visible:s.value,name:`DisclosurePanel`})}}}),B=[`viewport`,`carousel`],V={"bottom-to-top":`btt`,"left-to-right":`ltr`,"right-to-left":`rtl`,"top-to-bottom":`ttb`},H=[`ltr`,`left-to-right`,`rtl`,`right-to-left`,`ttb`,`top-to-bottom`,`btt`,`bottom-to-top`],be={ariaGallery:`Gallery`,ariaNavigateToPage:`Navigate to page {slideNumber}`,ariaNavigateToSlide:`Navigate to slide {slideNumber}`,ariaNextSlide:`Navigate to next slide`,ariaPreviousSlide:`Navigate to previous slide`,iconArrowDown:`Arrow pointing downwards`,iconArrowLeft:`Arrow pointing to the left`,iconArrowRight:`Arrow pointing to the right`,iconArrowUp:`Arrow pointing upwards`,itemXofY:`Item {currentSlide} of {slidesCount}`};Object.values(V);var xe=[`slide`,`fade`],U=[`center`,`start`,`end`,`center-even`,`center-odd`],Se=.08,W={autoplay:0,breakpointMode:B[0],breakpoints:void 0,dir:H[0],enabled:!0,gap:0,height:`auto`,i18n:be,ignoreAnimations:!1,itemsToScroll:1,itemsToShow:1,modelValue:0,mouseDrag:!0,mouseWheel:!1,pauseAutoplayOnHover:!1,preventExcessiveDragging:!1,slideEffect:xe[0],snapAlign:U[0],touchDrag:!0,transition:300,transitionEasing:`cubic-bezier(0.25, 0.46, 0.45, 0.94)`,wrapAround:!1},G=Symbol(`carousel`),Ce=e=>{let t=re([]),n=e=>{e===void 0?t.forEach((e,t)=>{var n;(n=e.exposed)==null||n.setIndex(t)}):t.slice(e).forEach((t,n)=>{var r;(r=t.exposed)==null||r.setIndex(e+n)})};return{cleanup:()=>{t.splice(0,t.length)},getSlides:()=>t,registerSlide:(r,i)=>{if(!r||r.props.isClone)return;let a=i??t.length;t.splice(a,0,r),n(a),e(`slide-registered`,{slide:r,index:a})},unregisterSlide:r=>{let i=t.indexOf(r);i!==-1&&(e(`slide-unregistered`,{slide:r,index:i}),t.splice(i,1),n(i))}}};function we(e){if(e.length===0)return 0;let t=e.filter(e=>typeof e==`number`&&!isNaN(e)&&isFinite(e));return t.length===0?0:t.reduce((e,t)=>e+t,0)/t.length}function Te({slides:e,position:t,toShow:n}){let r=[],a=t===`before`,o=a?-n:0,s=a?0:n;if(e.length<=0)return r;for(let n=o;n<s;n++){let o={index:a?n:n+e.length,isClone:!0,id:void 0,key:`clone-${t}-${n}`},s=e[(n%e.length+e.length)%e.length].vnode,c=i(s,o);c.el=null,r.push(c)}return r}var Ee=`a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])`;function K(e){if(!e.el||!(e.el instanceof Element))return;let t=e.el.querySelectorAll(Ee);for(let e of t)e instanceof HTMLElement&&!e.hasAttribute(`disabled`)&&e.getAttribute(`aria-hidden`)!==`true`&&e.setAttribute(`tabindex`,`-1`)}function De(e,t){return Object.keys(e).filter(e=>!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{})}function Oe(e){let{isVertical:t,isReversed:n,dragged:r,effectiveSlideSize:i,threshold:a}=e,o=t?r.y:r.x;if(o===0)return 0;let s=o/i,c=Math.abs(s);if(c<a)return 0;let l=c<1?Math.sign(s):Math.round(s);return n?l:-l}function q({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,isNaN(n)?e:n),isNaN(t)?e:t)}var J=new WeakMap;function Y(e){let t=J.get(e);if(t)return t;let{transform:n}=window.getComputedStyle(e);if(!n||n===`none`){let t=[1,0,0,1,0,0];return J.set(e,t),t}let r=n.split(/[(,)]/).slice(1,-1).map(e=>parseFloat(e));return r.length>0&&!r.some(isNaN)&&J.set(e,r),r}function ke(e){e&&e.forEach(e=>J.delete(e))}function Ae(e){if(e.size===0)return{widthMultiplier:1,heightMultiplier:1};let t=1,n=1;return e.forEach(e=>{let r=Y(e);if(r.length===6){let e=r[0],i=r[3];e!==0&&(t/=e),i!==0&&(n/=i)}}),{widthMultiplier:t,heightMultiplier:n}}function je(e,t){switch(e){case`start`:return 0;case`center`:case`center-odd`:return(t-1)/2;case`center-even`:return(t-2)/2;case`end`:return t-1;default:return 0}}function Me(e,t,n){switch(e){case`start`:return 0;case`center`:case`center-odd`:return(n-t)/2;case`center-even`:return n/2-t;case`end`:return n-t;default:return 0}}function Ne({slideSize:e,viewportSize:t,align:n,itemsToShow:r}){return r===void 0?e!==void 0&&t!==void 0?Me(n,e,t):0:je(n,r)}function X(e=``,t={}){return Object.entries(t).reduce((e,[t,n])=>e.replace(`{${t}}`,String(n)),e)}function Pe({val:e,max:t,min:n=0}){let r=t-n+1;return((e-n)%r+r)%r+n}function Fe(e,t=0){let n=!1,r=null,i=null;function a(...a){n||(n=!0,t>16?r=setTimeout(()=>{e(...a),n=!1,r=null},t):i=requestAnimationFrame(()=>{e(...a),n=!1,i=null}))}return a.cancel=()=>{r!==null&&(clearTimeout(r),r=null),i!==null&&(cancelAnimationFrame(i),i=null),n=!1},a}function Ie(e,t=`px`){if(!(e==null||e===``))return typeof e==`number`||parseFloat(e).toString()===e?`${e}${t}`:e}var Le=c({name:`CarouselAria`,setup(){let e=n(G);return e?()=>h(`div`,{class:[`carousel__liveregion`,`carousel__sr-only`],"aria-live":`polite`,"aria-atomic":`true`},X(e.config.i18n.itemXofY,{currentSlide:e.currentSlide+1,slidesCount:e.slidesCount})):()=>``}});function Re(e){let t=!1,n={x:0,y:0},r=ae({x:0,y:0}),i=C(!1),{isSliding:a}=e,o=p(()=>typeof a==`boolean`?a:a.value),s=r=>{var i;let a=r.target.tagName;if([`INPUT`,`TEXTAREA`,`SELECT`].includes(a)||o.value||(t=r.type===`touchstart`,t&&r.touches.length>1)||!t&&(r.preventDefault(),r.button!==0))return;n.x=t?r.touches[0].clientX:r.clientX,n.y=t?r.touches[0].clientY:r.clientY;let s=t?`touchmove`:`mousemove`,u=t?`touchend`:`mouseup`;document.addEventListener(s,c,{passive:t}),document.addEventListener(u,l,{passive:!0}),(i=e.onDragStart)==null||i.call(e)},c=Fe(a=>{var o;if(t&&a.touches.length>1)return;i.value=!0;let s=t?a.touches[0].clientX:a.clientX,c=t?a.touches[0].clientY:a.clientY;r.x=s-n.x,r.y=c-n.y,(o=e.onDrag)==null||o.call(e,{deltaX:r.x,deltaY:r.y,isTouch:t})}),l=()=>{var n;c.cancel();let a=Math.abs(r.x)+Math.abs(r.y);!t&&a>10&&window.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation()},{once:!0,capture:!0}),(n=e.onDragEnd)==null||n.call(e),r.x=0,r.y=0,i.value=!1;let o=t?`touchmove`:`mousemove`,s=t?`touchend`:`mouseup`;document.removeEventListener(o,c),document.removeEventListener(s,l)};return{dragged:r,isDragging:i,handleDragStart:s}}function ze(){let e=C(!1);return{isHover:e,handleMouseEnter:()=>{e.value=!0},handleMouseLeave:()=>{e.value=!1}}}function Be(e){let{isVertical:t,isSliding:n,config:r}=e,i=p(()=>typeof t==`boolean`?t:t.value),a=p(()=>typeof n==`boolean`?n:n.value);return{handleScroll:t=>{var n;if(t.preventDefault(),!r.mouseWheel||a.value)return;let o=typeof r.mouseWheel==`object`?r.mouseWheel.threshold??10:10,s=Math.abs(t.deltaY)>o?t.deltaY:0,c=Math.abs(t.deltaX)>o?t.deltaX:0;if(s===0&&c===0)return;let l=i.value?s:c,u=(l===0?i.value?c:s:l)>0;(n=e.onWheel)==null||n.call(e,{deltaX:c,deltaY:s,isScrollingForward:u})}}}var Z=c({name:`VueCarousel`,props:{autoplay:{default:W.autoplay,type:Number},breakpoints:{default:W.breakpoints,type:Object},breakpointMode:{default:W.breakpointMode,validator(e){let t=B.includes(e);return t||console.warn(`[vue3-carousel]: Invalid breakpointMode "${e}". Allowed values: ${B.join(`, `)}`),t}},clamp:{type:Boolean},dir:{type:String,default:W.dir,validator(e,t){if(!H.includes(e))return console.warn(`[vue3-carousel]: Invalid dir "${e}". Allowed values: ${H.join(`, `)}`),!1;let n=e in V?V[e]:e;return[`ttb`,`btt`].includes(n)&&(!t.height||t.height===`auto`)&&console.warn(`[vue3-carousel]: The dir "${e}" is not supported with height "auto".`),!0}},enabled:{default:W.enabled,type:Boolean},gap:{default:W.gap,type:Number},height:{default:W.height,type:[Number,String]},i18n:{default:W.i18n,type:Object},ignoreAnimations:{default:!1,type:[Array,Boolean,String]},itemsToScroll:{default:W.itemsToScroll,type:Number},itemsToShow:{default:W.itemsToShow,type:[Number,String]},modelValue:{default:void 0,type:Number},mouseDrag:{default:W.mouseDrag,type:[Boolean,Object]},mouseWheel:{default:W.mouseWheel,type:[Boolean,Object]},mouseScrollThreshold:{default:W.mouseScrollThreshold,type:Number},pauseAutoplayOnHover:{default:W.pauseAutoplayOnHover,type:Boolean},preventExcessiveDragging:{default:!1,type:Boolean,validator(e,t){return e&&t.wrapAround&&console.warn(`[vue3-carousel]: "preventExcessiveDragging" cannot be used with wrapAround. The setting will be ignored.`),!0}},slideEffect:{type:String,default:W.slideEffect,validator(e){let t=xe.includes(e);return t||console.warn(`[vue3-carousel]: Invalid slideEffect "${e}". Allowed values: ${xe.join(`, `)}`),t}},snapAlign:{default:W.snapAlign,validator(e){let t=U.includes(e);return t||console.warn(`[vue3-carousel]: Invalid snapAlign "${e}". Allowed values: ${U.join(`, `)}`),t}},touchDrag:{default:W.touchDrag,type:[Boolean,Object]},transition:{default:W.transition,type:Number},transitionEasing:{default:W.transitionEasing,type:String},wrapAround:{default:W.wrapAround,type:Boolean}},emits:[`before-init`,`drag`,`init`,`loop`,`slide-end`,`slide-registered`,`slide-start`,`slide-unregistered`,`update:modelValue`,`wheel`],setup(e,{slots:t,emit:n,expose:r}){let i=Ce(n),a=i.getSlides(),s=p(()=>a.length),c=C(null),l=C(null),u=C(0),d=p(()=>Object.assign(Object.assign(Object.assign({},W),De(e,[`breakpoints`,`modelValue`])),{i18n:Object.assign(Object.assign({},W.i18n),e.i18n)})),f=re(Object.assign({},d.value)),m=C(e.modelValue??0),g=C(m.value);ie(m,e=>g.value=e);let _=C(0),v=p(()=>Math.ceil((s.value-1)/2)),y=p(()=>s.value-1),b=p(()=>0),x=null,S=null,w=null,T=p(()=>u.value+f.gap),E=p(()=>{let e=f.dir||`ltr`;return e in V?V[e]:e}),D=p(()=>[`rtl`,`btt`].includes(E.value)),O=p(()=>[`ttb`,`btt`].includes(E.value)),k=p(()=>f.itemsToShow===`auto`),A=p(()=>O.value?`height`:`width`);function j(){if(!z.value)return;let t=(d.value.breakpointMode===`carousel`?c.value?.getBoundingClientRect().width:typeof window<`u`?window.innerWidth:0)||0,n=Object.keys(e.breakpoints||{}).map(e=>Number(e)).sort((e,t)=>t-+e),r={};n.some(n=>t>=n?(Object.assign(r,e.breakpoints[n]),r.i18n&&Object.assign(r.i18n,d.value.i18n,e.breakpoints[n].i18n),!0):!1),Object.assign(f,d.value,r),k.value||(f.itemsToShow=q({val:Number(f.itemsToShow),max:e.clamp?s.value:1/0,min:1}))}let M=Fe(()=>{j(),L(),I()}),N=re(new Set),P=C([]);function se({widthMultiplier:e,heightMultiplier:t}){P.value=a.map(n=>{let r=n.exposed?.getBoundingRect();return{width:r.width*e,height:r.height*t}})}let F=C({width:0,height:0});function ce({widthMultiplier:e,heightMultiplier:t}){let n=l.value?.getBoundingClientRect()||{width:0,height:0};F.value={width:n.width*e,height:n.height*t}}function I(){if(!l.value)return;let e=Ae(N);if(ce(e),se(e),k.value)u.value=we(P.value.map(e=>e[A.value]));else{let e=Number(f.itemsToShow),t=(e-1)*f.gap;u.value=(F.value[A.value]-t)/e}}function L(){!f.wrapAround&&s.value>0&&(m.value=q({val:m.value,max:y.value,min:b.value}))}let le=p(()=>typeof e.ignoreAnimations==`string`?e.ignoreAnimations.split(`,`):Array.isArray(e.ignoreAnimations)?e.ignoreAnimations:e.ignoreAnimations?!1:[]);oe(()=>L()),oe(()=>{I()});let R,ue=e=>{let t=e.target;if(!(!t?.contains(c.value)||Array.isArray(le.value)&&le.value.includes(e.animationName))&&(N.add(t),ke(new Set([t])),!R)){let e=()=>{R=requestAnimationFrame(()=>{ke(N),I(),e()})};e()}},de=e=>{let t=e.target;t&&(N.delete(t),ke(new Set([t]))),R&&N.size===0&&(cancelAnimationFrame(R),I())},z=C(!1);typeof document<`u`&&oe(()=>{z.value&&le.value!==!1?(document.addEventListener(`animationstart`,ue,{passive:!0}),document.addEventListener(`animationend`,de,{passive:!0})):(document.removeEventListener(`animationstart`,ue),document.removeEventListener(`animationend`,de))}),o(()=>{z.value=!0,j(),ve(),c.value&&(w=new ResizeObserver(M),w.observe(c.value)),n(`init`)}),ee(()=>{z.value=!1,i.cleanup(),S&&clearTimeout(S),R&&cancelAnimationFrame(R),x&&clearInterval(x),w&&=(w.disconnect(),null),typeof document<`u`&&ge(),c.value&&(c.value.removeEventListener(`transitionend`,I),c.value.removeEventListener(`animationiteration`,I))});let{isHover:fe,handleMouseEnter:pe,handleMouseLeave:me}=ze(),he=Fe(e=>{if(!e.ctrlKey)switch(e.key){case`ArrowLeft`:case`ArrowUp`:O.value===e.key.endsWith(`Up`)&&(D.value?K(!0):J(!0));break;case`ArrowRight`:case`ArrowDown`:O.value===e.key.endsWith(`Down`)&&(D.value?J(!0):K(!0));break}},200),ge=()=>{document.removeEventListener(`keydown`,he)},_e=()=>{document.addEventListener(`keydown`,he)};function ve(){!f.autoplay||f.autoplay<=0||(x=setInterval(()=>{f.pauseAutoplayOnHover&&fe.value||K()},f.autoplay))}function ye(){B(),ve()}function B(){x&&=(clearInterval(x),null)}let H=C(!1),{dragged:be,isDragging:xe,handleDragStart:U}=Re({isSliding:H,onDrag:({deltaX:e,deltaY:t,isTouch:r})=>{n(`drag`,{deltaX:e,deltaY:t});let i=r?typeof f.touchDrag==`object`?f.touchDrag?.threshold??Se:Se:typeof f.mouseDrag==`object`?f.mouseDrag?.threshold??Se:Se,a=Oe({isVertical:O.value,isReversed:D.value,dragged:{x:e,y:t},effectiveSlideSize:T.value,threshold:i});a!==0&&(g.value=f.wrapAround?m.value+a:q({val:m.value+a,max:y.value,min:b.value}))},onDragEnd:()=>Y(g.value)}),{handleScroll:Ee}=Be({isVertical:O,isSliding:H,config:f,onWheel:({deltaX:e,deltaY:t,isScrollingForward:r})=>{n(`wheel`,{deltaX:e,deltaY:t}),r?D.value?J():K():D.value?K():J()}});function K(e=!1){Y(m.value+f.itemsToScroll,e)}function J(e=!1){Y(m.value-f.itemsToScroll,e)}function Y(e,t=!1){if(!t&&H.value)return;let r=(f.wrapAround?Pe:q)({val:e,max:y.value,min:b.value});m.value!==r&&(_.value=m.value,n(`slide-start`,{slidingToIndex:e,currentSlideIndex:m.value,prevSlideIndex:_.value,slidesCount:s.value}),B(),H.value=!0,m.value=e,r!==e&&Me.pause(),n(`update:modelValue`,r),S=setTimeout(()=>{f.wrapAround&&r!==e&&(Me.resume(),m.value=r,n(`loop`,{currentSlideIndex:m.value,slidingToIndex:e})),n(`slide-end`,{currentSlideIndex:m.value,prevSlideIndex:_.value,slidesCount:s.value}),H.value=!1,ye()},f.transition))}function je(){j(),L(),I(),ye()}ie(()=>[d.value,e.breakpoints],()=>j(),{deep:!0}),ie(()=>e.autoplay,()=>ye());let Me=ie(()=>e.modelValue,e=>{e!==m.value&&Y(Number(e),!0)});n(`before-init`);let X=p(()=>{if(!f.wrapAround)return{before:0,after:0};if(k.value)return{before:a.length,after:a.length};let e=Number(f.itemsToShow),t=Math.ceil(e+(f.itemsToScroll-1)),n=t-g.value,r=t-(s.value-(g.value+1));return{before:Math.max(0,n),after:Math.max(0,r)}}),Z=p(()=>X.value.before?k.value?P.value.slice(-1*X.value.before).reduce((e,t)=>e+t[A.value]+f.gap,0)*-1:X.value.before*T.value*-1:0),Q=p(()=>{if(k.value){let e=(m.value%a.length+a.length)%a.length;return Ne({slideSize:P.value[e]?.[A.value],viewportSize:F.value[A.value],align:f.snapAlign})}return Ne({align:f.snapAlign,itemsToShow:+f.itemsToShow})}),$=p(()=>{let e=0;if(k.value){if(e=m.value<0?P.value.slice(m.value).reduce((e,t)=>e+t[A.value]+f.gap,0)*-1:P.value.slice(0,m.value).reduce((e,t)=>e+t[A.value]+f.gap,0),e-=Q.value,!f.wrapAround){let t=P.value.reduce((e,t)=>e+t[A.value]+f.gap,0)-F.value[A.value]-f.gap;e=q({val:e,max:t,min:0})}}else{let t=m.value-Q.value;f.wrapAround||(t=q({val:t,max:s.value-+f.itemsToShow,min:0})),e=t*T.value}return e*(D.value?1:-1)}),Ve=p(()=>{if(!k.value){let e=m.value-Q.value;return f.wrapAround?{min:Math.floor(e),max:Math.ceil(e+Number(f.itemsToShow)-1)}:{min:Math.floor(q({val:e,max:s.value-Number(f.itemsToShow),min:0})),max:Math.ceil(q({val:e+Number(f.itemsToShow)-1,max:s.value-1,min:0}))}}let e=0;{let t=0,n=0-X.value.before,r=Math.abs($.value+Z.value),i=0,o=a.length*2;for(;t<=r&&i<o;){let e=(n%a.length+a.length)%a.length,r=P.value[e]?.[A.value]||0;if(r<=0)break;t+=r+f.gap,n++,i++}e=n-1}let t=0;{let n=e,r=0,i=0,o=a.length*2;for(r=n<0?P.value.slice(0,n).reduce((e,t)=>e+t[A.value]+f.gap,0)-Math.abs($.value+Z.value):P.value.slice(0,n).reduce((e,t)=>e+t[A.value]+f.gap,0)-Math.abs($.value);r<F.value[A.value]&&i<o;){let e=(n%a.length+a.length)%a.length,t=P.value[e]?.[A.value]||0;if(t<=0)break;r+=t+f.gap,n++,i++}t=n-1}return{min:Math.floor(e),max:Math.ceil(t)}}),He=p(()=>{if(f.slideEffect===`fade`)return;let e=O.value?`Y`:`X`,t=O.value?be.y:be.x,n=$.value+t;if(!f.wrapAround&&f.preventExcessiveDragging){let e=0;e=k.value?P.value.reduce((e,t)=>e+t[A.value],0):(s.value-Number(f.itemsToShow))*T.value;let t=D.value?0:-1*e,r=D.value?e:0;n=q({val:n,min:t,max:r})}return`translate${e}(${n}px)`}),Ue=p(()=>({"--vc-carousel-height":Ie(f.height),"--vc-cloned-offset":Ie(Z.value),"--vc-slide-gap":Ie(f.gap),"--vc-transition-duration":H.value?Ie(f.transition,`ms`):void 0,"--vc-transition-easing":f.transitionEasing})),We=ae({activeSlide:g,config:f,currentSlide:m,isSliding:H,isVertical:O,maxSlide:y,minSlide:b,nav:{slideTo:Y,next:K,prev:J},normalizedDir:E,slideRegistry:i,slideSize:u,slides:a,slidesCount:s,viewport:l,visibleRange:Ve});te(G,We);let Ge=ae({config:f,currentSlide:m,maxSlide:y,middleSlide:v,minSlide:b,slideSize:u,slidesCount:s});return r(ae(Object.assign({data:Ge,next:K,prev:J,restartCarousel:je,slideTo:Y,updateBreakpointsConfig:j,updateSlideSize:I,updateSlidesData:L},ne(We)))),()=>{let e=(t.default||t.slides)?.(Ge)||[],{before:n,after:r}=X.value,i=Te({slides:a,position:`before`,toShow:n}),o=Te({slides:a,position:`after`,toShow:r}),s=[...i,...e,...o];if(!f.enabled||!s.length)return h(`section`,{ref:c,class:[`carousel`,`is-disabled`]},s);let u=t.addons?.call(t,Ge)||[],d=h(`ol`,{class:`carousel__track`,onMousedownCapture:f.mouseDrag?U:null,onTouchstartPassiveCapture:f.touchDrag?U:null,onWheel:f.mouseWheel?Ee:null,style:{transform:He.value}},s),p=h(`div`,{class:`carousel__viewport`,ref:l},d);return h(`section`,{ref:c,class:[`carousel`,`is-${E.value}`,`is-effect-${f.slideEffect}`,{"is-dragging":xe.value,"is-hover":fe.value,"is-sliding":H.value,"is-vertical":O.value}],dir:E.value,style:Ue.value,"aria-label":f.i18n.ariaGallery,tabindex:`0`,onBlur:ge,onFocus:_e,onMouseenter:pe,onMouseleave:me},[p,u,h(Le)])}}}),Q;(function(e){e.arrowDown=`arrowDown`,e.arrowLeft=`arrowLeft`,e.arrowRight=`arrowRight`,e.arrowUp=`arrowUp`})(Q||={});var $=e=>`icon${e.charAt(0).toUpperCase()+e.slice(1)}`,Ve={arrowDown:`M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z`,arrowLeft:`M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z`,arrowRight:`M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z`,arrowUp:`M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z`};function He(e){return e in Q}var Ue=e=>e&&He(e),We=c({props:{name:{type:String,required:!0,validator:Ue},title:{type:String,default:e=>e.name?W.i18n[$(e.name)]:``}},setup(e){let t=n(G,null);return()=>{let n=e.name;if(!n||!Ue(n))return;let r=Ve[n],i=h(`path`,{d:r}),a=t?.config.i18n[$(n)]||e.title,o=h(`title`,a);return h(`svg`,{class:`carousel__icon`,viewBox:`0 0 24 24`,role:`img`,"aria-label":a},[o,i])}}}),Ge=c({name:`CarouselNavigation`,inheritAttrs:!1,props:{carousel:{type:Object}},setup(e,{slots:t,attrs:r}){let i=n(G,null),{next:a,prev:o}=t,s=()=>({btt:`arrowDown`,ltr:`arrowLeft`,rtl:`arrowRight`,ttb:`arrowUp`})[i.normalizedDir],c=()=>({btt:`arrowUp`,ltr:`arrowRight`,rtl:`arrowLeft`,ttb:`arrowDown`})[i.normalizedDir],l=p(()=>!i.config.wrapAround&&i.currentSlide<=i.minSlide),u=p(()=>!i.config.wrapAround&&i.currentSlide>=i.maxSlide);return()=>{if(e.carousel&&(i=e.carousel),!i)return console.warn(`[vue3-carousel]: A carousel component must be provided for the navigation component to display`),``;let{i18n:t}=i.config;return[h(`button`,Object.assign(Object.assign({type:`button`,disabled:l.value,"aria-label":t.ariaPreviousSlide,title:t.ariaPreviousSlide,onClick:i.nav.prev},r),{class:[`carousel__prev`,{"carousel__prev--disabled":l.value},r.class]}),o?.()||h(We,{name:s()})),h(`button`,Object.assign(Object.assign({type:`button`,disabled:u.value,"aria-label":t.ariaNextSlide,title:t.ariaNextSlide,onClick:i.nav.next},r),{class:[`carousel__next`,{"carousel__next--disabled":u.value},r.class]}),a?.()||h(We,{name:c()}))]}}});c({name:`CarouselPagination`,props:{disableOnClick:{type:Boolean},paginateByItemsToShow:{type:Boolean},carousel:{type:Object}},setup(e){let t=n(G,null),r=p(()=>t.config.itemsToShow),i=p(()=>Ne({align:t.config.snapAlign,itemsToShow:r.value})),a=p(()=>e.paginateByItemsToShow&&r.value>1),o=p(()=>Math.ceil((t.activeSlide-i.value)/r.value)),s=p(()=>Math.ceil(t.slidesCount/r.value)),c=e=>Pe(a.value?{val:o.value,max:s.value-1,min:0}:{val:t.activeSlide,max:t.maxSlide,min:t.minSlide})===e;return()=>{if(e.carousel&&(t=e.carousel),!t)return console.warn(`[vue3-carousel]: A carousel component must be provided for the pagination component to display`),``;let n=[];for(let r=a.value?0:t.minSlide;r<=(a.value?s.value-1:t.maxSlide);r++){let o=X(t.config.i18n[a.value?`ariaNavigateToPage`:`ariaNavigateToSlide`],{slideNumber:r+1}),s=c(r),l=h(`button`,{type:`button`,class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s},"aria-label":o,"aria-pressed":s,"aria-controls":t.slides[r]?.exposed?.id,title:o,disabled:e.disableOnClick,onClick:()=>t.nav.slideTo(a.value?Math.floor(r*+t.config.itemsToShow+i.value):r)}),u=h(`li`,{class:`carousel__pagination-item`,key:r},l);n.push(u)}return h(`ol`,{class:`carousel__pagination`},n)}}});var Ke=c({name:`CarouselSlide`,props:{id:{type:String,default:t=>t.isClone?void 0:e()},index:{type:Number,default:void 0},isClone:{type:Boolean,default:!1}},setup(e,{attrs:t,slots:r,expose:i}){let a=n(G);if(te(G,void 0),!a)return()=>``;let s=C(e.index),c=e=>{s.value=e},l=d();i({id:e.id,setIndex:c,getBoundingRect:()=>{let e=l.vnode.el;return e?e.getBoundingClientRect():{width:0,height:0}}});let f=p(()=>s.value===a.activeSlide),m=p(()=>s.value===a.activeSlide-1),g=p(()=>s.value===a.activeSlide+1),_=p(()=>s.value>=a.visibleRange.min&&s.value<=a.visibleRange.max),v=p(()=>{if(a.config.itemsToShow===`auto`)return;let e=a.config.itemsToShow,t=a.config.gap>0&&e>1?`calc(${100/e}% - ${a.config.gap*(e-1)/e}px)`:`${100/e}%`;return a.isVertical?{height:t}:{width:t}});return a.slideRegistry.registerSlide(l,e.index),u(()=>{a.slideRegistry.unregisterSlide(l)}),e.isClone&&(o(()=>{K(l.vnode)}),k(()=>{K(l.vnode)})),()=>a.config.enabled?h(`li`,{style:[t.style,Object.assign({},v.value)],class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":_.value,"carousel__slide--active":f.value,"carousel__slide--prev":m.value,"carousel__slide--next":g.value,"carousel__slide--sliding":a.isSliding},onFocusin:()=>{a.viewport&&(a.viewport.scrollLeft=0),a.nav.slideTo(s.value)},id:e.isClone?void 0:e.id,"aria-hidden":e.isClone||void 0,tabindex:e.isClone||!_.value?-1:void 0},r.default?.call(r,{currentIndex:s.value,isActive:f.value,isClone:e.isClone,isPrev:m.value,isNext:g.value,isSliding:a.isSliding,isVisible:_.value})):r.default?.call(r)}}),qe={key:0,class:`h-72 bg-brand-950 transition-all animate-pulse`},Je={class:r([`bg-brand-950 transition-all animate-pulse rounded-2xl h-32`])},Ye=c({__name:`CarouselCardLoader`,props:{is_main:{type:Boolean}},setup(e){return(n,r)=>(l(),f(`div`,null,[e.is_main?(l(),f(`div`,qe)):(l(),t(O,{key:1,class:`flex justify-center`},{default:T(()=>[(l(),f(_,null,y([1],(e,t)=>D(`div`,Je)),64))]),_:1}))]))}}),Xe={class:`absolute font-bold text-2xl bottom-0 bg-linear-to-t from-brand-950 to-transparent px-2 py-4 w-full text-center anek-latin`},Ze=[`src`],Qe=[`onClick`],$e=[`src`],et=c({__name:`CarouselCard`,setup(e){let n=de(),i=C(0),o=e=>i.value=e,c={itemsToShow:1,wrapAround:!0,slideEffect:`fade`,mouseDrag:!1,touchDrag:!1,height:320,autoplay:4e3},u={height:80,itemsToShow:6,wrapAround:!0,touchDrag:!1,gap:10};return(e,d)=>(l(),f(_,null,[g(n).config.loading?(l(),t(Ye,{key:0,is_main:``})):(l(),t(g(Z),s({key:1,id:`gallery`},c,{modelValue:i.value,"onUpdate:modelValue":d[0]||=e=>i.value=e,class:`mb-2`}),{default:T(()=>[(l(!0),f(_,null,y(g(n).posts,e=>(l(),t(g(Ke),{key:e.link},{default:T(()=>[D(`p`,Xe,v(e.title),1),D(`img`,{src:g(w)(e.content_html)[0]??e.author_image,alt:`Gallery Image`,class:`object-cover w-full`},null,8,Ze)]),_:2},1024))),128))]),_:1},16,[`modelValue`])),g(n).config.loading?(l(),t(Ye,{key:2})):(l(),t(g(Z),s({key:3,id:`thumbnails`},u,{modelValue:i.value,"onUpdate:modelValue":d[1]||=e=>i.value=e}),{addons:T(()=>[a(g(Ge))]),default:T(()=>[(l(!0),f(_,null,y(g(n).posts,e=>(l(),t(g(Ke),{key:e.link},{default:T(({currentIndex:t,isActive:n})=>[D(`div`,{class:r([[],`rounded`]),onClick:e=>o(t)},[D(`img`,{src:g(w)(e.content_html)[0]??e.author_image,alt:`Thumbnail Image`,class:r([n?`opacity-75`:`opacity-50`,`cursor-pointer rounded-2xl`])},null,10,$e)],8,Qe)]),_:2},1024))),128))]),_:1},16,[`modelValue`]))],64))}}),tt={class:`text-base font-semibold leading-7`},nt=[`innerHTML`],rt={key:0,class:`flex gap-2 mt-2 flex-wrap`},it=c({__name:`CollapseSection`,props:{question:{},answer:{},show_all:{type:Boolean},buttons:{}},setup(e){return(n,r)=>(l(),t(g(_e),{as:`div`},{default:T(({open:n})=>[D(`dt`,null,[a(g(ve),{class:`flex w-full items-start justify-between text-left text-white cursor-pointer transition-all hover:bg-brand-950 px-4 py-2 rounded-2xl`},{default:T(()=>[D(`span`,tt,v(e.question),1),a(A,{class:`ml-6 flex h-7 items-center`},{default:T(()=>[n||e.show_all?(l(),t(g(S),{key:0,icon:`memory:minus`,class:`size-6`,"aria-hidden":`true`})):(l(),t(g(S),{key:1,icon:`memory:menu-down`,class:`size-6 flex-none`,"aria-hidden":`true`}))]),_:2},1024)]),_:2},1024)]),a(A,null,{default:T(()=>[a(g(ye),{as:`dd`,class:`mt-2 bg-brand-950 rounded-2xl py-2 px-4`},{default:T(()=>[D(`div`,{class:`text-base leading-7 text-gray-300`,innerHTML:e.answer},null,8,nt),e.buttons.length>0?(l(),f(`div`,rt,[(l(!0),f(_,null,y(e.buttons,e=>(l(),t(R,{title:e.title,external_link:``,href:e.href,icon:e.icon},{default:T(()=>[m(v(e.title),1)]),_:2},1032,[`title`,`href`,`icon`]))),256))])):E(``,!0)]),_:1})]),_:1})]),_:1}))}}),at={class:`flex justify-between`},ot={class:`text-base font-semibold leading-7 text-light-001 truncate`},st=[`src`],ct=[`innerHTML`],lt={key:0,class:`mt-2 transition-all flex flex-col justify-between gap-2`},ut=x(c({__name:`BasicCard`,props:{icon:{},iconHtml:{},iconImg:{},title:{},size:{},enableSearch:{type:Boolean},count:{},collapse:{type:Boolean},color:{}},setup(e){let n=e,i=C(n.collapse??!1),a=p(()=>{switch(n.size){case`sm`:return`p-4 sm:w-96 w-full`;default:return`p-4 sm:min-w-full`}});return(n,o)=>(l(),t(A,null,{default:T(()=>[D(`div`,{class:r([a.value,(e.color,`bg-brand-950`),` p-4 sm:rounded-2xl transition-all object-shadow border-y sm:border border-brand-900`])},[D(`div`,null,[D(`div`,at,[D(`h3`,ot,[e.icon?(l(),t(g(S),{key:0,icon:e.icon,class:`text-sm text-light-001 h-4 w-4 inline mr-3 mb-[3px] align-middle`},null,8,[`icon`])):e.iconImg?(l(),f(`img`,{key:1,src:e.iconImg,class:`inline mr-2 w-6 h-6 rounded shadow`},null,8,st)):(l(),f(`div`,{key:2,class:`inline-block h-4 w-4 pt-0.5 text-light-001 mr-2`,innerHTML:e.iconHtml},null,8,ct)),D(`span`,null,v(e.title),1)])])]),i.value?E(``,!0):(l(),f(`div`,lt,[b(n.$slots,`default`,{},void 0,!0)]))],2)]),_:3}))}}),[[`__scopeId`,`data-v-0e0d2677`]]),dt={class:`p-6 flex flex-col gap-4 lg:grid grid-cols-3`},ft={class:`lg:order-last flex flex-col gap-4`},pt={class:`lg:col-span-2`},mt={class:`bg-brand-950 p-4 sm:rounded-2xl mb-4`},ht=c({__name:`(Index)`,setup(e){let n=ae({search:``}),r=[{question:`Can I use the art I find here? How should I credit the artist?`,answer:`<p>
                        Yes, you can use any of the art submitted to this site. Even in commercial projects. Just be sure to adhere to the license terms.
                        Artists often indicate how they would like to be credited in the "Copyright/Attribution Notice:" section of the submission. You can find
                        this between the submission's description and the list of downloadable files. If no Copyright/Attribution Notice instructions are given,
                        a good way to credit an author for any asset is to put the following text in your game's credits file and on your game's credits screen:
                    </p>
                    <br />
                    <p>"[asset name]" by [author name] licensed [license(s)]: [asset url]</p>
                    <br />
                    <p>For example:</p>
                    <br />
                    <p>
                        "Whispers of Avalon: Grassland Tileset" by Leonard Pabin licensed CC-BY 3.0, GPL 2.0, or GPL 3.0:
                        <a href="https://opengameart.org/node/300">https://opengameart.org/node/3009</a>
                    </p>`,buttons:[]},{question:`Can I upload content by someone other than me? What about anonymous, public domain art?`,answer:`<p>
                        Yes, but only under specific circumstances. To upload content created by someone other than yourself, you must first make absolutely
                        certain that the content has been released under one of the allowed licenses. Furthermore, you must attribute their work to them in the
                        Author field. Failing to do so is plagiarism, and will result in the work being removed along with a possible suspension of your
                        account. Finally, regardless of the license the art is released under, if the artist has specifically requested that their work not be
                        distributed from other websites, Open Game Art honors those requests and will not accept submissions of their art.
                    </p>
                    <br />
                    <p>
                        In the case of Public Domain (or CC0) art that you didn't create yourself, we appreciate if you include a link back to the source of the
                        content. We make an effort to verify that PD content is actually in the public domain before we approve it for the archive, and it
                        speeds things up a lot if we know where you got it. If you're the author of the work and you want to remain anonymous, just mention that
                        in the description.
                    </p>
                    <br />
                    <p>
                        Finally, some licensed works may have specific attribution requirements that go above and beyond just listing the author of the work. If
                        so, please list those requirements in the description.
                    </p>
                    <br />
                    <p>
                        Finally, as a courtesy to the artist, we appreciate if you include a link back to their portfolio (or the page you obtained it from)
                        even if it's not required by the license. If this information isn't readily available and it's not required, don't worry about it.
                    </p>`,buttons:[]},{question:`Someone uploaded my art here without my permission. Can you take it down?`,answer:`<p>Yes, but please keep in mind that if you released your content under any Creative Commons license that allows derivative works, and the work displays shows the correct license and is attributed to you, then it is legal for that content to be here. If the attribution or license are incorrect, we would prefer to correct them rather than take the content down. However, we will remove all art at the author's request regardless of license, provided we can reasonably verify that you're the real author.</p>
                    <br>
                    <p>If your art is on this site and you would like it taken down, please use the Removal Request form. Be sure to include the links to any art in question.</p>
                    <a href href="">
                        Submission Guidelines
                    </a>
                    <br>
                    <p>Note that there is one case in which take-down requests will not be honored: If your art is derived from a work that was a paid commission by OpenGameArt.org, we reserve the right to archive it here. Please understand that this right is a condition of the licenses (GPL 2&3, CC-BY-SA 3) that we release the exclusive commissions under.</p>`,buttons:[{title:`Submission Guidelines`,href:`https://opengameart.org/content/art-submission-guidelines`,icon:`memory:arrow-right-circle`}]},{question:`I'm a commercial (closed-source) game developer. Can I use this art?`,answer:`<p>Short answer: Yes, you can use this art. Even in commercial projects.</p>
                    <br>
                    <p>Be sure to follow the terms of the license, though. The terms depend on the license(s) the art is released under. Please refer to the summary descriptions of each license below: What do the licenses mean?</p>`,buttons:[{title:`What do the license mean?`,href:`https://opengameart.org/content/faq#q-proprietary`,icon:`memory:arrow-right-circle`}]},{question:`What do the licenses mean?`,answer:`<p>
                        Below are summary descriptions of the licenses supported by OGA. These are provided to help artists and developers familiarize
                        themselves with the broad outlines of each license. Nothing written here is guaranteed to be correct or intended to be used as legal
                        advice. Please read the complete text of each license before using it for a submission or using a work submitted under that license. The
                        full license text can be found at the link in the respective license abbreviations below:
                    </p>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-cc0" name="q-license-cc0"></a><strong>Creative Commons 0</strong> "(<a
                                href="https://creativecommons.org/publicdomain/zero/1.0/"
                                target="_blank"
                            >
                                CC0 </a
                            >)"
                        </dt>
                        <dd>
                            This license is the creative commons team's equivalent of public domain. Works released under this license may be copied, modified,
                            distributed, performed or otherwise used in anyway without asking, crediting or notifying the creating artist.
                        </dd>
                        <dd><strong>If you are using art</strong>, this license means commercial use is ok.</dd>
                        <dd><strong>If you are submitting art</strong>, this license means you are giving the work to the Public Domain.</dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ccby" name="q-license-ccby"></a><strong>Creative Commons Attribution</strong> ("<a
                                href="http://creativecommons.org/licenses/by/3.0/"
                                target="_blank"
                                >CC-BY 3.0</a
                            >" and "<a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a>")
                        </dt>
                        <dd>
                            Works released under these licenses may be copied, modified, distributed, performed or otherwise used in anyway without asking,
                            subject to following restrictions:
                            <ol>
                                <li>
                                    You must state that you have used the work and credit the original artist. Appropriate credit includes providing the title
                                    of the work, the name of the creator and attribution parties, a copyright notice, a license notice, a disclaimer notice, and
                                    a link to the material.
                                </li>
                                <li>You must indicate if you have made changes to the work</li>
                                <li>
                                    You may not impose any additional restrictions on the redistribution of the work. In practice, this means the work may not
                                    be not used on distribution networks that use some form of Digital Rights Management (DRM).
                                </li>
                            </ol>
                        </dd>
                        <dd>
                            <strong>If you are using art</strong>, these licenses mean commercial use is ok, so long as you provide appropriate credit and
                            distribute the work in a way that does not include DRM.
                        </dd>
                        <dd>
                            <strong>If you are submitting art</strong>, these licenses mean people are free to use your work but must credit you as its author
                            and can not use it on platforms that include some form of DRM.
                        </dd>
                        <dd>
                            Note that many game distribution networks do use DRM (ie. Apple iOS, Xbox Live, Sony PSN) and others may or may not use DRM
                            depending on how a developer chooses to package a particular game (ex. Steam, Google Android).
                        </dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ccbysa" name="q-license-ccbysa"></a><strong>Creative Commons Attribution-Share Alike</strong> ("<a
                                href="http://creativecommons.org/licenses/by-sa/3.0/"
                                target="_blank"
                                >CC-BY-SA 3.0</a
                            >" and "<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC-BY-SA 4.0</a>")
                        </dt>
                        <dd>
                            These licenses are extensions of the CC-BY licenses (<a href="#q-license-ccby">enumerated above</a>) which include provisions
                            stating that derivative works must also be distributed under the same license. Works released under this license may be copied,
                            modified, distributed, performed or otherwise used in anyway without asking, subject to following restrictions:
                            <ol>
                                <li>
                                    You must obey all of the restrictions of the corresponding CC-BY license (<a href="#q-license-ccby">enumerated above</a>)
                                </li>
                                <li>If you make derivative works, you must distribute them under the same license (CC-BY-SA 3.0/CC-BY-SA 4.0)</li>
                            </ol>
                        </dd>
                        <dd>
                            <strong>If you are using art</strong>, these licenses mean commercial use is ok, so long as you provide appropriate credit, don't
                            distribute the work in a way that includes DRM, and are prepared (and able) to release your derivatives of the art under the same
                            license.
                        </dd>
                        <dd>
                            <strong>If you are submitting art</strong>, these licenses mean people are free to use your work but must credit you as its author,
                            people can not use it on platforms that include some form of DRM, and must distribute any changes or otherwise derivative works they
                            make under the same license.
                        </dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ogaby" name="q-license-ogaby"></a><strong>OpenGameArt.org Attribution</strong> ("<a
                                href="http://opengameart.org/content/oga-by-30-faq"
                                target="_blank"
                                >OGA-BY 3.0</a
                            >" and "<a href="http://opengameart.org/content/oga-by-40-faq" target="_blank">OGA-BY 4.0</a>")
                        </dt>
                        <dd>
                            These licenses are derivatives of the CC-BY licenses (<a href="#q-license-ccby">enumerated above</a>) which removes the restriction
                            against technical measures that prevent redistribution of a work. (eg. DRM) It was created to provide an option for artists wishing
                            to be credited for their work but not wanting to restrict its distribution on DRM-using platforms. Works released under this license
                            may be copied, modified, distributed, performed or otherwise used in anyway without asking, subject to following restrictions:
                            <ol>
                                <li>
                                    You must state that you have used the work and credit the original artist. Appropriate credit includes providing the title
                                    of the work, the name of the creator and attribution parties, a copyright notice, a license notice, a disclaimer notice, and
                                    a link to the material.
                                </li>
                                <li>You must indicate if you have made changes to the work.</li>
                            </ol>
                        </dd>
                        <dd><strong>If you are using art</strong>, these licenses mean commercial use is ok, so long as you provide appropriate credit.</dd>
                        <dd>
                            <strong>If you are submitting art</strong>, these licenses mean people are free to use your work but must credit you as its author.
                        </dd>
                    </dl>
                    <br />
                    <dl>
                        <dt>
                            <a id="q-license-ogaby" name="q-license-gpl"></a><strong>GNU General Public License</strong> ("<a
                                href="http://www.gnu.org/licenses/gpl-2.0.html"
                                target="_blank"
                            >
                                GPL 2.0
                            </a>
                            " and "<a href="http://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GPL 3.0</a>")
                        </dt>
                        <dd>
                            These licenses were written with source code in mind, and are included on OGA for compatibility with projects that use GPL licenses.
                            GNU has provided some guidance for how these licenses may apply to art or other 'non-source-code' items
                            <a href="http://www.gnu.org/licenses/gpl-faq.en.html#GPLOtherThanSoftware" target="_blank">here</a>. However, they have yet to
                            provide specific guidance for how the licenses apply in most common video game art use scenarios (eg. using a sprite sheet licensed
                            as GPL 2.0).
                        </dd>
                        <dd>
                            <strong>If you are using art</strong>, use with GPL licensed projects is ok. Those working on non-GPL licensed projects (eg. closed
                            source, commercial or non-GPL open source development) are encouraged to fully understand GNU GPL and how art work licensed as such
                            may affect their projects.
                        </dd>
                        <dd>
                            <strong>If you are submitting art</strong>, you should use these licenses only if it is already part of a project that uses a GPL
                            license and/or you have read the full license and know what you are doing.
                        </dd>
                    </dl>
                    <br />
                    <p>
                        Just to reiterate, these notes are based on our understanding of these licenses, and should be taken with a grain of salt. If you notice
                        anything incorrect here, please contact us.
                    </p>`,buttons:[{title:`CC0`,href:`https://creativecommons.org/publicdomain/zero/1.0/`,icon:`memory:arrow-right-circle`},{title:`CC-BY 3.0`,href:`https://creativecommons.org/licenses/by/3.0/`,icon:`memory:arrow-right-circle`},{title:`CC-BY 4.0`,href:`https://creativecommons.org/licenses/by/4.0/`,icon:`memory:arrow-right-circle`},{title:`GPL 2.0`,href:`https://www.gnu.org/licenses/old-licenses/gpl-2.0.html`,icon:`memory:arrow-right-circle`},{title:`GPL 3.0`,href:`https://www.gnu.org/licenses/gpl-3.0.html`,icon:`memory:arrow-right-circle`}]},{question:`What kind of art can I submit?`,answer:`<p>
                        You can submit any art that could be used as game art, provided that it's your original work. The following kinds of art do not qualify:
                    </p>
                    <br />
                    <ul class="list-disc pl-6">
                        <li>Modifications of existing commercial game art</li>
                        <li>Art that's your work, but is clearly non-free IP (for instance, a sprite of Gordon Freeman from Half Life)</li>
                        <li>Art that wouldn't be useful in a game</li>
                    </ul>
                    <br>
                    <p>
                        If you wish to submit modifications of freely-licensed artwork created by someone else, you may do so, provided that you submit it with
                        the original license and credit the original artist(s) in whatever way the license requires. If the artwork you're altering doesn't use
                        one of the licenses that <strong>Open Game Art</strong> accepts, then it is <em>not&nbsp;</em>okay to submit it.
                    </p>`,buttons:[]},{question:`I want to help, but I'm not an artist. What can I do?`,answer:`<p>A couple of things:</p>
                    <br />
                    <ul class="list-disc pl-6">
                        <li>
                            <a class="views-processed" href="/contact">Contact us</a> if you want to be a site maintainer or have interesting things to blog
                            about that relate to open source game development and art.
                        </li>
                        <li>
                            From time to time, we commission artists to create free art. If you're interested in donating money to the cause, you can donate to
                            our PayPal account. All donations will go directly toward art commissions (as opposed to, say, hosting costs).
                        </li>
                    </ul>`,buttons:[{title:`Contact Us`,href:`https://opengameart.org/contact`,icon:`memory:arrow-right-circle`},{title:`Read More`,href:`https://opengameart.org/content/donate-opengameartorg`,icon:`memory:arrow-right-circle`}]},{question:`Can I use this art in my Free/Open Source game?`,answer:`<p>Yes.</p>
                    <br />
                    <p>
                        More specifically, the licenses that can be selected on this site are meant to be GPL-compatible. Thus, if you're releasing your project
                        under the GPL, it is safe to use any and all of the art on this site. Note that there is a common misconception with using CC-licensed
                        media with GPLed code, which I address here.
                    </p>
                    <br />
                    <p>
                        If you are releasing your project under some other Free and/or Open Source license (or not releasing your source code at all), it's
                        likely that there could be licensing conflicts depending on what license the art is released under. It is your responsibilityto verify
                        the compatibility of the art license with the license you are using.
                    </p>`,buttons:[{title:`Aren't CC-BY and CC-BY-SA incompatible with the GPL?`,href:`https://opengameart.org/content/faq#arent-cc-and-cc-sa-incompatible-gpl`,icon:`memory:arrow-right-circle`}]},{question:`Aren't CC-BY and CC-BY-SA incompatible with the GPL?`,answer:`<p>
                        That depends on what you mean by "compatible". They are incompatible in the sense that you can't take someone else's CC-BY or CC-BY-SA
                        content and slap the GPL on them, and you can't write code licensed under one of those licenses and mingle it with GPLed code. However,
                        for the intent of creating and distributing games, the Free Software Foundation has clarified that the game code and game media are
                        separate entities and do not need to be released under the same license, provided those licenses allow you to copy and redistribute the
                        work for both commercial and non-commercial purposes. Here's what the FSF has to say about this:
                    </p>
                    <br />
                    <blockquote>
                        <p><strong>Non-functional Data</strong></p>
                        <p>
                            Data that has an aesthetic purpose, rather than a functional one, may be included in a free system distribution as long as its
                            license gives you permission to copy and redistribute, both for commercial and non-commercial purposes. For example, there are some
                            game engines that have been released under the GNU GPL, and have accompanying game information -- a world map, game graphics, and so
                            on -- released under such a verbatim distribution license. This kind of data can be part of a free system distribution.
                        </p>
                        <p>
                            <em
                                >Source:
                                <a href="http://www.gnu.org/philosophy/free-system-distribution-guidelines.html"
                                    >http://www.gnu.org/philosophy/free-system-distribution-guidelines.html</a
                                ></em
                            >
                        </p>
                    </blockquote>
                    <br />
                    <p>
                        What this means for you as a developer is that the game data should be clearly marked as such, along with the licensing information for
                        that data.
                    </p>
                    <br />
                    <p>
                        It is also worth noting that CC-BY-SA 3.0 is
                        <a class="ext views-processed" href="https://wiki.debian.org/DFSGLicenses#CreativeCommonsShare-Alike.28CC-SA.29v3.0">Debian approved</a
                        >.
                    </p>`,buttons:[{title:`Free System Distribution Guidelines`,href:`https://www.gnu.org/distros/free-system-distribution-guidelines.html`,icon:`memory:arrow-right-circle`},{title:`Debian Approved`,href:`https://wiki.debian.org/DFSGLicenses#CreativeCommonsShare-Alike.28CC-SA.29v3.0`,icon:`memory:arrow-right-circle`}]},{question:`I have some content under the WTFPL. Can I submit it?`,answer:`<p>
                        Yes!
                    </p>
                    <br />

                    <p>
                        The WTFPL (warning: strong language) is a highly permissive license, in that it allows you to do whatever you want with content, including re-licensing it.
                        Simply remove the WTFPL text file from the distribution and upload it as CC0. You may do the same thing with content released as "Public Domain",
                        provided you are doing so in a jurisdiction that recognizes a public domain.
                    </p>`,buttons:[]},{question:`There is an interesting feature in a preview, but I can't find that component in the download file. Can I use the preview instead?`,answer:`<p>
                        Short answer: no.
                    </p>
                    <br />

                    <p>
                        A submission's preview images or preview audio clips may not fall under the same license as the submission's assets available for
                        download. Previews are for demonstration purposes and may contain works or logos not intended as freely licensed content.
                        Unless otherwise noted, assume the previews are 'All rights reserved'.
                    </p>`,buttons:[]},{question:`Can I use the art downloaded here in the Apple App Store or other similar stores?`,answer:`<p>
                        Not necessarily.
                    </p>
                    <br />

                    <p>
                       Apple's App Store in particular has been found to have usage terms that conflict
                       with the terms of the GNU GPL, the GNU LGPL, CC-BY-SA, and CC-BY. However, many
                       artists releasing works under these licences are fine with their works being used
                       in the app store if you get their permission.
                    </p>
                    <p>
                       Note that OpenGameArt.org cannot grant you this permission, you must ask the artist directly.
                       If the art you want to use is a derivative work of another piece of art, or is by multiple authors,
                       you must get permission from all of the authors.
                    </p>`,buttons:[]},{question:`Can I still sell art that I've contributed to OpenGameArt.org?`,answer:`<p>
                       Short answer: yes.
                    </p>
                    <br />

                    <p>
                       The long answer is that, even if OGA explicitly paid you money to create art, we do not (nor will we ever)
                       take possession of the copyright to that art.  This means that you can still license your artwork however
                       you want, to whomever you want.
                    </p>
                    <p>
                       Let's say, for example, that you create a set of game graphics and release them here on OGA under the CC-BY-SA license.
                       If someone would like to use and alter your art without sharing it, they are free to contact you and obtain a license
                       to do so.  You are free to charge them for this license.
                    </p>
                    <p>
                       Now, there are a couple of catches.  While we will take down any artwork of yours that you request we take down
                       (provided you can provide reasonable proof that you're the author of that work, and that we didn't conpensate you for it),
                       that work is already perpetually licensed CC-BY-SA, and anyone who has already downloaded it has the right to continue using
                       and distributing it under that same license.  They do not, however, have the right to license your work to third parties under
                       different terms.
                    </p>
                    <p>
                       Furthermore, if you have plans to sell your contributed art to third parties, it is highly recommended that you select either CC-BY-SA,
                       the GPL, or some combination of the two, as there is little motivation for a commercial interest to pay you for the privilege of using
                       your art if you've already granted that privilege without requiring them to share.
                    </p>`,buttons:[]},{question:`I'm a commercial artist. Can I use OpenGameArt.org to advertise my paid work?`,answer:`<p>
                       Absolutely, in fact several artists are already doing precisely that.  All you need to do is pick a work of yours
                       that you think people would be interested in, and submit it to OGA under any of the license choices that we offer.
                       When you submit your art, be sure to include a link back to your web page or portfolio in the submission.  You may also
                       want to mention in the description that you work on commission.  If you release your art under CC-BY or CC-BY-SA, you can
                       mention in the description that people should link back to your website when they attribute you for your work.
                    </p>
                  `,buttons:[]},{question:`Does the GPL have an attribution requirement? How should I attribute GPLed works here on OGA?`,answer:`<p>
                       Attribution is an optional part of the GPL, however you should assume that all work contained on
                       OpenGameArt requires it unless otherwise specified by the author of the work.  Attribution requirements
                       are specifically allowed under section 7, part B of the GPL.
                    </p>
                    <br />
                    <p>
                       b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it
                    </p>
                    <br />
                    <p>
                       The full text of the GPL can be found here:
                    </p>
                    <br />
                    <p>
                       http://www.gnu.org/licenses/gpl.html
                    </p>
                    <br />
                    <p>
                       Please note that this doesn't allow the author to place additional restrictions on a GPLed work, unless they are specifically listed in section 7.
                    </p>
                  `,buttons:[{title:`GPL`,href:`http://www.gnu.org/licenses/gpl.html`,icon:`memory:arrow-right-circle`}]},{question:`Some artists have multiple licenses listed. Does that mean you need apply the rules of all licenses or can we pick the one license we prefer?`,answer:`<p>
                      You must follow only one of the licenses. However, when you re-distribute/edit, you are encouraged to include/use all of the licenses, so the license spectrum (and thus sum of people/projects who can use the art) doesn't shrink.
                    </p>
                   `,buttons:[]},{question:`Can an artist edit and change their license requirements? If so, what impact would that have on me and my project that already uses that asset?`,answer:`<p>
                      These questions go together but are best answered separately:
                    </p>
                    <br />
                    <p>
                     Can an artist edit and change their license requirements?
                    </p>
                    <br />
                    <p>
                     Yes, an artist may change their license requirements, at any time, however...
                    </p>
                           <br />
                    <p>
                     If so, what impact would that have on me and my project that already uses that asset?
                    </p>
                           <br />
                    <p>
                    We encourage you to respect the wishes of the artist if they decide to change the license on their work, however you are under absolutely no
                    obligation to do so, because the license you obtained it under is irrevocable.  In practice, very few (if any) artists on OGA ever remove
                    licensing options, although occasionally some add more.
                    </p>
                   `,buttons:[]},{question:`I made a 3D model (or song), but I'm not sure where I got my textures (or samples). Can I submit it?`,answer:`<p>
                      Short answer: no.
                    </p>
                    <br />
                    <p>
                     Unfortunately, a lot of texture and sample websites have "not for commercial use" or other odd restrctions that made their content completely incompatible with the licenses we have here.
                    </p>
                    <br />
                    <p>
                     Please note that we would still love for you to submit your 3D model or song.  Please remove the textures or samples that you can't track down, and, if possible, replace them with something
                     that you can verify is under a free license.  If you know where to find the person who made the textures or samples, try contacting them first, as many people are open to changing the license on
                     their work.
                    </p>
                           <br />
                    <p>
                     Worst case scenario, if you can't find any replacement textures, just submit the model with no texture.  In the case of music, replace the sample with a placeholder and upload a midi file along with it so that people can fill it in later.
                    </p>
                           <br />
                   <p><strong>There are some popular sites that we cannot accept material from:</strong></p>
                    <ul class="list-disc pl-6">
                        <li>
                            <strong
                                >freesound.org (which uses the CC Sampling Plus license, which is not compatible with Debian's license guidelines).&nbsp; If the
                                author of the sound agrees to a different license, you can still post it here, so ask them first.<br
                            /></strong>
                        </li>
                        <li><strong>cgtextures.com (which uses a custom license that's not compatible with Debian's license guidelines)</strong></li>
                    </ul>
                    <p><strong>You should consider instead looking at these archives:</strong></p>
                    <ul class="list-disc pl-6">
                        <li>
                            <strong
                                ><a class="ext views-processed" href="http://www.burningwell.org/">Burningwell.org</a>'s all public domain
                                <a class="ext views-processed" href="http://www.burningwell.org/gallery2/v/textures">texture gallery</a></strong
                            >
                        </li>
                        <li>
                            <strong><a class="ext views-processed" href="http://www.musopen.com/music.php">Musopen</a>(for public domain music)</strong>
                        </li>
                        <li>
                            <strong><a class="ext views-processed" href="http://wiki.laptop.org/go/Sound_samples">The OLPC Sound Sample Archive</a></strong>
                        </li>
                        <li>
                            <strong><a class="ext views-processed" href="http://www.pdsounds.org/">pdsounds</a></strong>
                        </li>
                        <li><strong>Right here on OGA</strong></li>
                    </ul>
                   `,buttons:[{title:`Burningwell.org`,href:`https://www.burningwell.org/`,icon:`memory:arrow-right-circle`},{title:`Musopen.org`,href:`https://musopen.org/`,icon:`memory:arrow-right-circle`},{title:`The OLPC Sound Sample Archive`,href:`https://wiki.laptop.org/go/Free_sound_samples`,icon:`memory:arrow-right-circle`},{title:`pdfsounds`,href:`https://www.pdsounds.org/lander`,icon:`memory:arrow-right-circle`}]},{question:`Aren't there other sites out there like this?`,answer:`<p>
                      Yes and no.
                    </p>
                    <br />
                    <p>
                     There are plenty of other sites out there, but they aren't necessarily conducive to finding good game art that
                     can be used legally in open source games. To be a good source for this kind of content, a site should be:
                    </p>
                    <br />
<ul class="list-disc pl-6">
                        <li>Human-edited for quality</li>
                        <li>Clear about licensing, so that you're sure any art on the site can legally be used in a Free/Open Source game or other program</li>
                        <li>Have firm ground rules about what can be submitted</li>
                    </ul>
                    <p>
                        Some art sites serve as places where artists can post their work and get critiques. While some of these artists are willing to license
                        their work out in a way that's compatible with free/open source software, it can be very difficult to find art that's appropriately
                        licensed.
                    </p>
                    <p>
                        Other sites provide sprites for use, but they allow people to contribute sprites that have been "ripped" from games, and are therefore
                        in violation of copyright.
                    </p>
                    <p>
                        Finally, it should be noted that <a class="ext views-processed" href="http://search.freegamedev.net/">Free Art Search</a> provides a
                        massive index of a lot of art that already exists in Free/Open Source projects and is a great place to go if you're searching for open
                        art.
                    </p>
                   `,buttons:[{title:`Free Art Search`,href:`http://search.freegamedev.net/`,icon:`memory:arrow-right-circle`}]},{question:`What's the purpose of this site?`,answer:`<p>
                      If you've ever browsed Free/Open Source game sites (such as The Linux Game Tome, you'll notice that a fairly significant number of the games available suffer from what's lovingly referred to
                      as 'programmer art'. There are, of course, some notable exceptions to this, but it's clear that, for an open source game to produce good art, it has to become large and popular enough to attract artists.
                    </p>
                    <br />
                    <p>
                     Unfortunately, many fun and well-designed games never reach this point and are thus stuck with placeholder art, which ultimately detracts from their appeal and popularity. Furthermore,
                     it's not unheard of for open source projects to rip their placeholder art from commercial games, which is illegal and could conceivably result in a lawsuit.
                    </p>
                    <br />

                    <p>
                        The purpose of this site is to provide a solid (and hopefully ever-expanding) variety of high quality, freely licensed art, so that free/open source game developers can use it in their games.
                    </p>

                   `,buttons:[]},{question:`IRC / Web Chat rules`,answer:`<p>
                     Just a quick summary of rules for IRC and Web Chat:
                    </p>
                    <br />
                    <p>
                     Unfortunately, many fun and well-designed games never reach this point and are thus stuck with placeholder art, which ultimately detracts from their appeal and popularity. Furthermore,
                     it's not unheard of for open source projects to rip their placeholder art from commercial games, which is illegal and could conceivably result in a lawsuit.
                    </p>
                    <br />

                    <p>
                        The purpose of this site is to provide a solid (and hopefully ever-expanding) variety of high quality, freely licensed art, so that free/open source game developers can use it in their games.
                    </p>
<ul class="list-disc pl-6">
                        <li>
                            If you're not already aware, our IRC channel is
                            <a class="ext views-processed" href="http://webchat.freenode.net/?channels=opengameart">#opengameart</a>
                        </li>
                        <li>
                            This should go without saying, but hateful comments of any sort will get you immediately kicked and banned.&nbsp; No exceptions.
                        </li>
                        <li>Try to keep foul language to a minimum.</li>
                        <li>
                            No religion or politics.&nbsp; If you want to discuss those and aren't offended by opposing viewpoints, we have an offtopic,
                            anything-goes channel called
                            <a class="ext views-processed" href="http://webchat.freenode.net/?channels=opengameart-blah">#opengameart-blah</a> for that sort of
                            thing.&nbsp; The only rule in #opengameart-blah is that you treat other people with respect.
                        </li>
                        <li>Politics directly related to games, art, and copyright are an exception to the above rule, and are frequently discussed.</li>
                    </ul>
                    <p>
                        If you're looking for Bart (the site founder), he can often be found as <strong>BartK</strong>.&nbsp; Sometimes he goes by
                        <strong>Legend&nbsp;</strong>or <strong>Lendrick</strong>, depending on what computer he's on.
                    </p>
                    <p>
                        If there's a problem with the site, generally it's sufficient just to mention it in the channel.&nbsp; However, you can also message
                        Bart (using the above nicks), or any of these other people:
                    </p>
                    <p>Admins</p>
                    <ul class="list-disc pl-6">
                        <li><a href="/users/medicinestorm">MedicineStorm</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/ceninan">ceninan</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/qubodup">qubodup</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/clint-bellanger">Clint Bellanger</a></li>
                        <li><a href="/users/redshrike">Redshrike</a></li>
                        <li><a class="views-processed" title="View user profile." href="/users/p0ss">p0ss</a></li>
                    </ul>
                    <p>Editors</p>
                    <ul class="list-disc pl-6">
                        <li><a class="views-processed" title="View user profile." href="/users/verbalshadow">verbalshadow</a></li>
                        <li><a href="/users/sharm">Sharm</a></li>
                    </ul>
                   `,buttons:[]},{question:`How can I put a Flattr icon on my art pages?`,answer:`<p>
                     Edit your account by clicking on "My Account" above and then selecting the "Edit" tab.  Scroll down and enter your Flattr UserID.
                    </p>
                    <br />
                    <p>
                   That's all there is to it!
                    </p>

                   `,buttons:[]}],i=p(()=>{if(!n.search)return r;let e=n.search.toLowerCase();return r.filter(t=>t.question.toLowerCase().includes(e)||o(t.answer).toLowerCase().includes(e))}),o=e=>{let t=document.createElement(`div`);return t.innerHTML=e,t.textContent||t.innerText||``};return(e,r)=>(l(),f(`div`,null,[a(z),a(et),D(`div`,dt,[D(`div`,ft,[a(ut,{icon:`memory:alert-box`,title:`Instruction`},{default:T(()=>[r[3]||=D(`p`,{class:``},`If you have a question that you think should be here, contact us via the Contact form and let us know.`,-1),a(R,{icon:`memory:chat`,external_link:``,href:`https://opengameart.org/contact`},{default:T(()=>[...r[1]||=[m(`Contact Form`,-1)]]),_:1}),r[4]||=D(`p`,{class:``},`Please read our content submission guidelines before posting art.`,-1),a(R,{icon:`memory:chat`,external_link:``,href:`https://opengameart.org/content/art-submission-guidelines`},{default:T(()=>[...r[2]||=[m(` Submission Guidelines `,-1)]]),_:1})]),_:1}),a(ut,{icon:`memory:alert-box`,title:`Forum Rules`},{default:T(()=>[...r[5]||=[D(`p`,null,[D(`strong`,null,`The basics:`)],-1),D(`ul`,{class:`list-disc pl-6`},[D(`li`,null,`No discussion of religion.`),D(`li`,null,`No discussion of politics, except relating directly to copyright, the Creative Commons, and/or FOSS.`),D(`li`,null,`Don't be racist, homophobic, or otherwise hateful.`)],-1),D(`br`,null,null,-1),D(`p`,null,[D(`strong`,null,`Conduct:`)],-1),D(`p`,null,` On some forums, it is okay to be snide.\xA0 That isn't acceptable here.\xA0 As a FOSS gaming community, we are ambassadors of FOSS in general, and as such it is not acceptable to be rude to people who are interested enough in what we do to take the time to ask questions.\xA0 Specifically, it is not okay to do the following: `,-1),D(`ul`,{class:`list-disc pl-6`},[D(`li`,null,`Say something along the lines of "READ TEH FAQ U IDIOT"`),D(`li`,null,`Reply to a question with a link to a google search`),D(`li`,null,`Say "SOMEONE ALREADY ASKED THIS READ TEH FORUM U IDIOT"`),D(`li`,null,`Talk down to anyone because of their choice of software or operating system`)],-1),D(`p`,null,[m(` On the other hand, it's quite possible that we'll get certain questions over and over, which is the reason FAQs exist in the first place.\xA0 It `),D(`em`,null,`is`),m(` acceptable to reply with a link to a relevant FAQ question `),D(`em`,null,`provided you read their post carefully and make sure that it actually applies`),m(`.\xA0 Just try to understand that when someone asks a question in a forum, they're looking for a personalized answer, and it's better to provide one and encourage discussion than just send them off to a FAQ link. `)],-1)]]),_:1})]),D(`div`,pt,[r[6]||=D(`h2`,{class:`text-2xl font-bold leading-10 tracking-tight text-white mb-6`},`Frequently asked questions`,-1),D(`div`,mt,[a(ue,{modelValue:n.search,"onUpdate:modelValue":r[0]||=e=>n.search=e,name:`Search`},null,8,[`modelValue`])]),a(O,{class:`flex flex-col gap-4`},{default:T(()=>[(l(!0),f(_,null,y(i.value,e=>(l(),t(it,{question:e.question,answer:e.answer,show_all:n.search!=``,buttons:e.buttons},null,8,[`question`,`answer`,`show_all`,`buttons`]))),256))]),_:1}),r[7]||=D(`div`,{class:`TEST`},null,-1)])])]))}});export{ht as default};