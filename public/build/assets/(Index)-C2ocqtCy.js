import{_ as Yt}from"./NotifyBanner.vue_vue_type_script_setup_true_lang-CRmVhLp8.js";import{d as P,Q as C,S as rt,U as Ue,H as _e,I as ze,V as Se,W as $t,X as J,l as g,Y as Te,Z as Vt,$ as lt,a0 as te,a1 as ut,a2 as ce,a3 as xe,a4 as Wt,a5 as Ht,a6 as O,a7 as Ut,a8 as zt,a9 as Me,aa as be,J as Xt,f as de,ab as Kt,ac as Qt,o as k,h as N,c as L,E as xt,w as I,F as Z,j as he,a as f,O as Ce,v as Jt,u as _,t as Ae,g as ct,ad as dt,i as q,N as Ge,K as Fe,_ as Re,m as Q,y as Ct,ae as Zt,af as eo,D as to}from"./app-KzKIZbl4.js";var oo=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(oo||{});let At=Symbol("DisclosureContext");function Xe(e){let t=te(At,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Xe),n}return t}let It=Symbol("DisclosurePanelContext");function no(){return te(It,null)}let ao=P({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:n}){let a=C(e.defaultOpen?0:1),o=C(null),u=C(null),s={buttonId:C(`headlessui-disclosure-button-${rt()}`),panelId:C(`headlessui-disclosure-panel-${rt()}`),disclosureState:a,panel:o,button:u,toggleDisclosure(){a.value=ut(a.value,{0:1,1:0})},closeDisclosure(){a.value!==1&&(a.value=1)},close(l){s.closeDisclosure();let d=l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?J(l):J(s.button):J(s.button);d?.focus()}};return Te(At,s),Wt(g(()=>ut(a.value,{0:xe.Open,1:xe.Closed}))),()=>{let{defaultOpen:l,...d}=e,w={open:a.value===0,close:s.close};return Ue({theirProps:d,ourProps:{},slot:w,slots:t,attrs:n,name:"Disclosure"})}}}),io=P({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){let o=Xe("DisclosureButton"),u=no(),s=g(()=>u===null?!1:u.value===o.panelId.value);_e(()=>{s.value||e.id!==null&&(o.buttonId.value=e.id)}),ze(()=>{s.value||(o.buttonId.value=null)});let l=C(null);a({el:l,$el:l}),s.value||Se(()=>{o.button.value=l.value});let d=$t(g(()=>({as:e.as,type:t.type})),l);function w(){var i;e.disabled||(s.value?(o.toggleDisclosure(),(i=J(o.button))==null||i.focus()):o.toggleDisclosure())}function h(i){var p;if(!e.disabled)if(s.value)switch(i.key){case ce.Space:case ce.Enter:i.preventDefault(),i.stopPropagation(),o.toggleDisclosure(),(p=J(o.button))==null||p.focus();break}else switch(i.key){case ce.Space:case ce.Enter:i.preventDefault(),i.stopPropagation(),o.toggleDisclosure();break}}function v(i){i.key===ce.Space&&i.preventDefault()}return()=>{var i;let p={open:o.disclosureState.value===0},{id:S,...D}=e,De=s.value?{ref:l,type:d.value,onClick:w,onKeydown:h}:{id:(i=o.buttonId.value)!=null?i:S,ref:l,type:d.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||J(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:w,onKeydown:h,onKeyup:v};return Ue({ourProps:De,theirProps:D,slot:p,attrs:t,slots:n,name:"DisclosureButton"})}}}),so=P({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){let o=Xe("DisclosurePanel");_e(()=>{e.id!==null&&(o.panelId.value=e.id)}),ze(()=>{o.panelId.value=null}),a({el:o.panel,$el:o.panel}),Te(It,o.panelId);let u=Vt(),s=g(()=>u!==null?(u.value&xe.Open)===xe.Open:o.disclosureState.value===0);return()=>{var l;let d={open:o.disclosureState.value===0,close:o.close},{id:w,...h}=e,v={id:(l=o.panelId.value)!=null?l:w,ref:o.panel};return Ue({ourProps:v,theirProps:h,slot:d,attrs:t,slots:n,features:lt.RenderStrategy|lt.Static,visible:s.value,name:"DisclosurePanel"})}}});const je=["viewport","carousel"],Ie={"bottom-to-top":"btt","left-to-right":"ltr","right-to-left":"rtl","top-to-bottom":"ttb"},Ye=["ltr","left-to-right","rtl","right-to-left","ttb","top-to-bottom","btt","bottom-to-top"],ro={ariaGallery:"Gallery",ariaNavigateToPage:"Navigate to page {slideNumber}",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",iconArrowDown:"Arrow pointing downwards",iconArrowLeft:"Arrow pointing to the left",iconArrowRight:"Arrow pointing to the right",iconArrowUp:"Arrow pointing upwards",itemXofY:"Item {currentSlide} of {slidesCount}"},$e=["slide","fade"],Ve=["center","start","end","center-even","center-odd"],ht=10,we=.08,x={autoplay:0,breakpointMode:je[0],breakpoints:void 0,dir:Ye[0],enabled:!0,gap:0,height:"auto",i18n:ro,ignoreAnimations:!1,itemsToScroll:1,itemsToShow:1,modelValue:0,mouseDrag:!0,mouseWheel:!1,pauseAutoplayOnHover:!1,preventExcessiveDragging:!1,slideEffect:$e[0],snapAlign:Ve[0],touchDrag:!0,transition:300,transitionEasing:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",wrapAround:!1},ee=Symbol("carousel"),lo=e=>{const t=Me([]),n=a=>{a!==void 0?t.slice(a).forEach((o,u)=>{var s;(s=o.exposed)===null||s===void 0||s.setIndex(a+u)}):t.forEach((o,u)=>{var s;(s=o.exposed)===null||s===void 0||s.setIndex(u)})};return{cleanup:()=>{t.splice(0,t.length)},getSlides:()=>t,registerSlide:(a,o)=>{if(!a||a.props.isClone)return;const u=o??t.length;t.splice(u,0,a),n(u),e("slide-registered",{slide:a,index:u})},unregisterSlide:a=>{const o=t.indexOf(a);o!==-1&&(e("slide-unregistered",{slide:a,index:o}),t.splice(o,1),n(o))}}};function uo(e){if(e.length===0)return 0;const t=e.filter(a=>typeof a=="number"&&!isNaN(a)&&isFinite(a));return t.length===0?0:t.reduce((a,o)=>a+o,0)/t.length}function pt({slides:e,position:t,toShow:n}){const a=[],o=t==="before",u=o?-n:0,s=o?0:n;if(e.length<=0)return a;for(let l=u;l<s;l++){const w={index:o?l:l+e.length,isClone:!0,id:void 0,key:`clone-${t}-${l}`},h=e[(l%e.length+e.length)%e.length].vnode,v=Qt(h,w);v.el=null,a.push(v)}return a}const co='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';function mt(e){if(!e.el||!(e.el instanceof Element))return;const t=e.el.querySelectorAll(co);for(const n of t)n instanceof HTMLElement&&!n.hasAttribute("disabled")&&n.getAttribute("aria-hidden")!=="true"&&n.setAttribute("tabindex","-1")}function ho(e,t){return Object.keys(e).filter(n=>!t.includes(n)).reduce((n,a)=>(n[a]=e[a],n),{})}function po(e){const{isVertical:t,isReversed:n,dragged:a,effectiveSlideSize:o,threshold:u}=e,s=t?a.y:a.x;if(s===0)return 0;const l=s/o,d=Math.abs(l);if(d<u)return 0;const w=d<1?Math.sign(l):Math.round(l);return n?w:-w}function j({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,isNaN(n)?e:n),isNaN(t)?e:t)}const ke=new WeakMap;function mo(e){const t=ke.get(e);if(t)return t;const{transform:n}=window.getComputedStyle(e);if(!n||n==="none"){const o=[1,0,0,1,0,0];return ke.set(e,o),o}const a=n.split(/[(,)]/).slice(1,-1).map(o=>parseFloat(o));return a.length>0&&!a.some(isNaN)&&ke.set(e,a),a}function Be(e){e&&e.forEach(t=>ke.delete(t))}function fo(e){if(e.size===0)return{widthMultiplier:1,heightMultiplier:1};let t=1,n=1;return e.forEach(a=>{const o=mo(a);if(o.length===6){const u=o[0],s=o[3];u!==0&&(t/=u),s!==0&&(n/=s)}}),{widthMultiplier:t,heightMultiplier:n}}function go(e,t){switch(e){case"start":return 0;case"center":case"center-odd":return(t-1)/2;case"center-even":return(t-2)/2;case"end":return t-1;default:return 0}}function vo(e,t,n){switch(e){case"start":return 0;case"center":case"center-odd":return(n-t)/2;case"center-even":return n/2-t;case"end":return n-t;default:return 0}}function ft({slideSize:e,viewportSize:t,align:n,itemsToShow:a}){return a!==void 0?go(n,a):e!==void 0&&t!==void 0?vo(n,e,t):0}function bo(e="",t={}){return Object.entries(t).reduce((n,[a,o])=>n.replace(`{${a}}`,String(o)),e)}function wo({val:e,max:t,min:n=0}){const a=t-n+1;return((e-n)%a+a)%a+n}function We(e,t=0){let n=!1,a=null,o=null;function u(...s){n||(n=!0,t>16?a=setTimeout(()=>{e(...s),n=!1,a=null},t):o=requestAnimationFrame(()=>{e(...s),n=!1,o=null}))}return u.cancel=()=>{a!==null&&(clearTimeout(a),a=null),o!==null&&(cancelAnimationFrame(o),o=null),n=!1},u}function ye(e,t="px"){if(!(e==null||e===""))return typeof e=="number"||parseFloat(e).toString()===e?`${e}${t}`:e}const yo=P({name:"CarouselAria",setup(){const e=te(ee);return e?()=>O("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},bo(e.config.i18n.itemXofY,{currentSlide:e.currentSlide+1,slidesCount:e.slidesCount})):()=>""}});function So(e){let t=!1;const n={x:0,y:0},a=de({x:0,y:0}),o=C(!1),{isSliding:u}=e,s=g(()=>typeof u=="boolean"?u:u.value),l=h=>{var v;const i=h.target.tagName;if(["INPUT","TEXTAREA","SELECT"].includes(i)||s.value||(t=h.type==="touchstart",t&&h.touches.length>1))return;if(!t&&(h.preventDefault(),h.button!==0))return;n.x=t?h.touches[0].clientX:h.clientX,n.y=t?h.touches[0].clientY:h.clientY;const p=t?"touchmove":"mousemove",S=t?"touchend":"mouseup";document.addEventListener(p,d,{passive:t}),document.addEventListener(S,w,{passive:!0}),(v=e.onDragStart)===null||v===void 0||v.call(e)},d=We(h=>{var v;if(t&&h.touches.length>1)return;o.value=!0;const i=t?h.touches[0].clientX:h.clientX,p=t?h.touches[0].clientY:h.clientY;a.x=i-n.x,a.y=p-n.y,(v=e.onDrag)===null||v===void 0||v.call(e,{deltaX:a.x,deltaY:a.y,isTouch:t})}),w=()=>{var h;d.cancel();const v=Math.abs(a.x)+Math.abs(a.y);!t&&v>10&&window.addEventListener("click",S=>{S.preventDefault(),S.stopPropagation()},{once:!0,capture:!0}),(h=e.onDragEnd)===null||h===void 0||h.call(e),a.x=0,a.y=0,o.value=!1;const i=t?"touchmove":"mousemove",p=t?"touchend":"mouseup";document.removeEventListener(i,d),document.removeEventListener(p,w)};return{dragged:a,isDragging:o,handleDragStart:l}}function ko(){const e=C(!1);return{isHover:e,handleMouseEnter:()=>{e.value=!0},handleMouseLeave:()=>{e.value=!1}}}function xo(e){const{isVertical:t,isSliding:n,config:a}=e,o=g(()=>typeof t=="boolean"?t:t.value),u=g(()=>typeof n=="boolean"?n:n.value);return{handleScroll:l=>{var d,w;if(l.preventDefault(),!a.mouseWheel||u.value)return;const h=typeof a.mouseWheel=="object"&&(d=a.mouseWheel.threshold)!==null&&d!==void 0?d:ht,v=Math.abs(l.deltaY)>h?l.deltaY:0,i=Math.abs(l.deltaX)>h?l.deltaX:0;if(v===0&&i===0)return;const p=o.value?v:i,D=(p!==0?p:o.value?i:v)>0;(w=e.onWheel)===null||w===void 0||w.call(e,{deltaX:i,deltaY:v,isScrollingForward:D})}}}const Co={autoplay:{default:x.autoplay,type:Number},breakpoints:{default:x.breakpoints,type:Object},breakpointMode:{default:x.breakpointMode,validator(e){const t=je.includes(e);return t||console.warn(`[vue3-carousel]: Invalid breakpointMode "${e}". Allowed values: ${je.join(", ")}`),t}},clamp:{type:Boolean},dir:{type:String,default:x.dir,validator(e,t){if(!Ye.includes(e))return console.warn(`[vue3-carousel]: Invalid dir "${e}". Allowed values: ${Ye.join(", ")}`),!1;const n=e in Ie?Ie[e]:e;return["ttb","btt"].includes(n)&&(!t.height||t.height==="auto")&&console.warn(`[vue3-carousel]: The dir "${e}" is not supported with height "auto".`),!0}},enabled:{default:x.enabled,type:Boolean},gap:{default:x.gap,type:Number},height:{default:x.height,type:[Number,String]},i18n:{default:x.i18n,type:Object},ignoreAnimations:{default:!1,type:[Array,Boolean,String]},itemsToScroll:{default:x.itemsToScroll,type:Number},itemsToShow:{default:x.itemsToShow,type:[Number,String]},modelValue:{default:void 0,type:Number},mouseDrag:{default:x.mouseDrag,type:[Boolean,Object]},mouseWheel:{default:x.mouseWheel,type:[Boolean,Object]},mouseScrollThreshold:{default:x.mouseScrollThreshold,type:Number},pauseAutoplayOnHover:{default:x.pauseAutoplayOnHover,type:Boolean},preventExcessiveDragging:{default:!1,type:Boolean,validator(e,t){return e&&t.wrapAround&&console.warn('[vue3-carousel]: "preventExcessiveDragging" cannot be used with wrapAround. The setting will be ignored.'),!0}},slideEffect:{type:String,default:x.slideEffect,validator(e){const t=$e.includes(e);return t||console.warn(`[vue3-carousel]: Invalid slideEffect "${e}". Allowed values: ${$e.join(", ")}`),t}},snapAlign:{default:x.snapAlign,validator(e){const t=Ve.includes(e);return t||console.warn(`[vue3-carousel]: Invalid snapAlign "${e}". Allowed values: ${Ve.join(", ")}`),t}},touchDrag:{default:x.touchDrag,type:[Boolean,Object]},transition:{default:x.transition,type:Number},transitionEasing:{default:x.transitionEasing,type:String},wrapAround:{default:x.wrapAround,type:Boolean}},gt=P({name:"VueCarousel",props:Co,emits:["before-init","drag","init","loop","slide-end","slide-registered","slide-start","slide-unregistered","update:modelValue","wheel"],setup(e,{slots:t,emit:n,expose:a}){var o;const u=lo(n),s=u.getSlides(),l=g(()=>s.length),d=C(null),w=C(null),h=C(0),v=g(()=>Object.assign(Object.assign(Object.assign({},x),ho(e,["breakpoints","modelValue"])),{i18n:Object.assign(Object.assign({},x.i18n),e.i18n)})),i=Me(Object.assign({},v.value)),p=C((o=e.modelValue)!==null&&o!==void 0?o:0),S=C(p.value);be(p,r=>S.value=r);const D=C(0),De=g(()=>Math.ceil((l.value-1)/2)),oe=g(()=>l.value-1),ne=g(()=>0);let U=null,Le=null,ae=null;const pe=g(()=>h.value+i.gap),ie=g(()=>{const r=i.dir||"ltr";return r in Ie?Ie[r]:r}),Y=g(()=>["rtl","btt"].includes(ie.value)),R=g(()=>["ttb","btt"].includes(ie.value)),$=g(()=>i.itemsToShow==="auto"),T=g(()=>R.value?"height":"width");function se(){var r;if(!fe.value)return;const c=(v.value.breakpointMode==="carousel"?(r=d.value)===null||r===void 0?void 0:r.getBoundingClientRect().width:typeof window<"u"?window.innerWidth:0)||0,m=Object.keys(e.breakpoints||{}).map(b=>Number(b)).sort((b,A)=>+A-+b),y={};m.some(b=>c>=b?(Object.assign(y,e.breakpoints[b]),y.i18n&&Object.assign(y.i18n,v.value.i18n,e.breakpoints[b].i18n),!0):!1),Object.assign(i,v.value,y),$.value||(i.itemsToShow=j({val:Number(i.itemsToShow),max:e.clamp?l.value:1/0,min:1}))}const _t=We(()=>{se(),me(),V()}),re=Me(new Set),B=C([]);function Tt({widthMultiplier:r,heightMultiplier:c}){B.value=s.map(m=>{var y;const b=(y=m.exposed)===null||y===void 0?void 0:y.getBoundingRect();return{width:b.width*r,height:b.height*c}})}const le=C({width:0,height:0});function Dt({widthMultiplier:r,heightMultiplier:c}){var m;const y=((m=w.value)===null||m===void 0?void 0:m.getBoundingClientRect())||{width:0,height:0};le.value={width:y.width*r,height:y.height*c}}function V(){if(!w.value)return;const r=fo(re);if(Dt(r),Tt(r),$.value)h.value=uo(B.value.map(c=>c[T.value]));else{const c=Number(i.itemsToShow),m=(c-1)*i.gap;h.value=(le.value[T.value]-m)/c}}function me(){!i.wrapAround&&l.value>0&&(p.value=j({val:p.value,max:oe.value,min:ne.value}))}const Oe=g(()=>typeof e.ignoreAnimations=="string"?e.ignoreAnimations.split(","):Array.isArray(e.ignoreAnimations)?e.ignoreAnimations:e.ignoreAnimations?!1:[]);Se(()=>me()),Se(()=>{V()});let z;const Ke=r=>{const c=r.target;if(!(!c?.contains(d.value)||Array.isArray(Oe.value)&&Oe.value.includes(r.animationName))&&(re.add(c),Be(new Set([c])),!z)){const m=()=>{z=requestAnimationFrame(()=>{Be(re),V(),m()})};m()}},Qe=r=>{const c=r.target;c&&(re.delete(c),Be(new Set([c]))),z&&re.size===0&&(cancelAnimationFrame(z),V())},fe=C(!1);typeof document<"u"&&Se(()=>{fe.value&&Oe.value!==!1?(document.addEventListener("animationstart",Ke,{passive:!0}),document.addEventListener("animationend",Qe,{passive:!0})):(document.removeEventListener("animationstart",Ke),document.removeEventListener("animationend",Qe))}),_e(()=>{fe.value=!0,se(),tt(),d.value&&(ae=new ResizeObserver(_t),ae.observe(d.value)),n("init")}),Xt(()=>{fe.value=!1,u.cleanup(),Le&&clearTimeout(Le),z&&cancelAnimationFrame(z),U&&clearInterval(U),ae&&(ae.disconnect(),ae=null),typeof document<"u"&&et(),d.value&&(d.value.removeEventListener("transitionend",V),d.value.removeEventListener("animationiteration",V))});const{isHover:Je,handleMouseEnter:Lt,handleMouseLeave:Ot}=ko(),Ze=We(r=>{if(!r.ctrlKey)switch(r.key){case"ArrowLeft":case"ArrowUp":R.value===r.key.endsWith("Up")&&(Y.value?H(!0):X(!0));break;case"ArrowRight":case"ArrowDown":R.value===r.key.endsWith("Down")&&(Y.value?X(!0):H(!0));break}},200),et=()=>{document.removeEventListener("keydown",Ze)},Et=()=>{document.addEventListener("keydown",Ze)};function tt(){!i.autoplay||i.autoplay<=0||(U=setInterval(()=>{i.pauseAutoplayOnHover&&Je.value||H()},i.autoplay))}function Ee(){ot(),tt()}function ot(){U&&(clearInterval(U),U=null)}const W=C(!1),qt=({deltaX:r,deltaY:c,isTouch:m})=>{var y,b,A,M;n("drag",{deltaX:r,deltaY:c});const G=m?typeof i.touchDrag=="object"&&(b=(y=i.touchDrag)===null||y===void 0?void 0:y.threshold)!==null&&b!==void 0?b:we:typeof i.mouseDrag=="object"&&(M=(A=i.mouseDrag)===null||A===void 0?void 0:A.threshold)!==null&&M!==void 0?M:we,E=po({isVertical:R.value,isReversed:Y.value,dragged:{x:r,y:c},effectiveSlideSize:pe.value,threshold:G});E!==0&&(S.value=i.wrapAround?p.value+E:j({val:p.value+E,max:oe.value,min:ne.value}))},Nt=()=>K(S.value),{dragged:nt,isDragging:Pt,handleDragStart:at}=So({isSliding:W,onDrag:qt,onDragEnd:Nt}),Bt=({deltaX:r,deltaY:c,isScrollingForward:m})=>{n("wheel",{deltaX:r,deltaY:c}),m?Y.value?X():H():Y.value?H():X()},{handleScroll:Mt}=xo({isVertical:R,isSliding:W,config:i,onWheel:Bt});function H(r=!1){K(p.value+i.itemsToScroll,r)}function X(r=!1){K(p.value-i.itemsToScroll,r)}function K(r,c=!1){if(!c&&W.value)return;const m=(i.wrapAround?wo:j)({val:r,max:oe.value,min:ne.value});if(p.value===m)return;D.value=p.value,n("slide-start",{slidingToIndex:r,currentSlideIndex:p.value,prevSlideIndex:D.value,slidesCount:l.value}),ot(),W.value=!0,p.value=r,m!==r&&it.pause(),n("update:modelValue",m),Le=setTimeout(()=>{i.wrapAround&&m!==r&&(it.resume(),p.value=m,n("loop",{currentSlideIndex:p.value,slidingToIndex:r})),n("slide-end",{currentSlideIndex:p.value,prevSlideIndex:D.value,slidesCount:l.value}),W.value=!1,Ee()},i.transition)}function Gt(){se(),me(),V(),Ee()}be(()=>[v.value,e.breakpoints],()=>se(),{deep:!0}),be(()=>e.autoplay,()=>Ee());const it=be(()=>e.modelValue,r=>{r!==p.value&&K(Number(r),!0)});n("before-init");const ue=g(()=>{if(!i.wrapAround)return{before:0,after:0};if($.value)return{before:s.length,after:s.length};const r=Number(i.itemsToShow),c=Math.ceil(r+(i.itemsToScroll-1)),m=c-S.value,y=c-(l.value-(S.value+1));return{before:Math.max(0,m),after:Math.max(0,y)}}),qe=g(()=>ue.value.before?$.value?B.value.slice(-1*ue.value.before).reduce((r,c)=>r+c[T.value]+i.gap,0)*-1:ue.value.before*pe.value*-1:0),Ne=g(()=>{var r;if($.value){const c=(p.value%s.length+s.length)%s.length;return ft({slideSize:(r=B.value[c])===null||r===void 0?void 0:r[T.value],viewportSize:le.value[T.value],align:i.snapAlign})}return ft({align:i.snapAlign,itemsToShow:+i.itemsToShow})}),ge=g(()=>{let r=0;if($.value){if(p.value<0?r=B.value.slice(p.value).reduce((c,m)=>c+m[T.value]+i.gap,0)*-1:r=B.value.slice(0,p.value).reduce((c,m)=>c+m[T.value]+i.gap,0),r-=Ne.value,!i.wrapAround){const c=B.value.reduce((m,y)=>m+y[T.value]+i.gap,0)-le.value[T.value]-i.gap;r=j({val:r,max:c,min:0})}}else{let c=p.value-Ne.value;i.wrapAround||(c=j({val:c,max:l.value-+i.itemsToShow,min:0})),r=c*pe.value}return r*(Y.value?1:-1)}),Ft=g(()=>{var r,c;if(!$.value){const b=p.value-Ne.value;return i.wrapAround?{min:Math.floor(b),max:Math.ceil(b+Number(i.itemsToShow)-1)}:{min:Math.floor(j({val:b,max:l.value-Number(i.itemsToShow),min:0})),max:Math.ceil(j({val:b+Number(i.itemsToShow)-1,max:l.value-1,min:0}))}}let m=0;{let b=0,A=0-ue.value.before;const M=Math.abs(ge.value+qe.value);let G=0;const E=s.length*2;for(;b<=M&&G<E;){const F=(A%s.length+s.length)%s.length,ve=((r=B.value[F])===null||r===void 0?void 0:r[T.value])||0;if(ve<=0)break;b+=ve+i.gap,A++,G++}m=A-1}let y=0;{let b=m,A=0,M=0;const G=s.length*2;for(b<0?A=B.value.slice(0,b).reduce((E,F)=>E+F[T.value]+i.gap,0)-Math.abs(ge.value+qe.value):A=B.value.slice(0,b).reduce((E,F)=>E+F[T.value]+i.gap,0)-Math.abs(ge.value);A<le.value[T.value]&&M<G;){const E=(b%s.length+s.length)%s.length,F=((c=B.value[E])===null||c===void 0?void 0:c[T.value])||0;if(F<=0)break;A+=F+i.gap,b++,M++}y=b-1}return{min:Math.floor(m),max:Math.ceil(y)}}),Rt=g(()=>{if(i.slideEffect==="fade")return;const r=R.value?"Y":"X",c=R.value?nt.y:nt.x;let m=ge.value+c;if(!i.wrapAround&&i.preventExcessiveDragging){let y=0;$.value?y=B.value.reduce((M,G)=>M+G[T.value],0):y=(l.value-Number(i.itemsToShow))*pe.value;const b=Y.value?0:-1*y,A=Y.value?y:0;m=j({val:m,min:b,max:A})}return`translate${r}(${m}px)`}),jt=g(()=>({"--vc-carousel-height":ye(i.height),"--vc-cloned-offset":ye(qe.value),"--vc-slide-gap":ye(i.gap),"--vc-transition-duration":W.value?ye(i.transition,"ms"):void 0,"--vc-transition-easing":i.transitionEasing})),st=de({activeSlide:S,config:i,currentSlide:p,isSliding:W,isVertical:R,maxSlide:oe,minSlide:ne,nav:{slideTo:K,next:H,prev:X},normalizedDir:ie,slideRegistry:u,slideSize:h,slides:s,slidesCount:l,viewport:w,visibleRange:Ft});Te(ee,st);const Pe=de({config:i,currentSlide:p,maxSlide:oe,middleSlide:De,minSlide:ne,slideSize:h,slidesCount:l});return a(de(Object.assign({data:Pe,next:H,prev:X,restartCarousel:Gt,slideTo:K,updateBreakpointsConfig:se,updateSlideSize:V,updateSlidesData:me},Kt(st)))),()=>{var r;const c=t.default||t.slides,m=c?.(Pe)||[],{before:y,after:b}=ue.value,A=pt({slides:s,position:"before",toShow:y}),M=pt({slides:s,position:"after",toShow:b}),G=[...A,...m,...M];if(!i.enabled||!G.length)return O("section",{ref:d,class:["carousel","is-disabled"]},G);const E=((r=t.addons)===null||r===void 0?void 0:r.call(t,Pe))||[],F=O("ol",{class:"carousel__track",onMousedownCapture:i.mouseDrag?at:null,onTouchstartPassiveCapture:i.touchDrag?at:null,onWheel:i.mouseWheel?Mt:null,style:{transform:Rt.value}},G),ve=O("div",{class:"carousel__viewport",ref:w},F);return O("section",{ref:d,class:["carousel",`is-${ie.value}`,`is-effect-${i.slideEffect}`,{"is-dragging":Pt.value,"is-hover":Je.value,"is-sliding":W.value,"is-vertical":R.value}],dir:ie.value,style:jt.value,"aria-label":i.i18n.ariaGallery,tabindex:"0",onBlur:et,onFocus:Et,onMouseenter:Lt,onMouseleave:Ot},[ve,E,O(yo)])}}});var He;(function(e){e.arrowDown="arrowDown",e.arrowLeft="arrowLeft",e.arrowRight="arrowRight",e.arrowUp="arrowUp"})(He||(He={}));const vt=e=>`icon${e.charAt(0).toUpperCase()+e.slice(1)}`,Ao={arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"};function Io(e){return e in He}const bt=e=>e&&Io(e),wt=P({props:{name:{type:String,required:!0,validator:bt},title:{type:String,default:e=>e.name?x.i18n[vt(e.name)]:""}},setup(e){const t=te(ee,null);return()=>{const n=e.name;if(!n||!bt(n))return;const a=Ao[n],o=O("path",{d:a}),u=t?.config.i18n[vt(n)]||e.title,s=O("title",u);return O("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":u},[s,o])}}}),_o=P({name:"CarouselNavigation",inheritAttrs:!1,props:{carousel:{type:Object}},setup(e,{slots:t,attrs:n}){let a=te(ee,null);const{next:o,prev:u}=t,s=()=>({btt:"arrowDown",ltr:"arrowLeft",rtl:"arrowRight",ttb:"arrowUp"})[a.normalizedDir],l=()=>({btt:"arrowUp",ltr:"arrowRight",rtl:"arrowLeft",ttb:"arrowDown"})[a.normalizedDir],d=g(()=>!a.config.wrapAround&&a.currentSlide<=a.minSlide),w=g(()=>!a.config.wrapAround&&a.currentSlide>=a.maxSlide);return()=>{if(e.carousel&&(a=e.carousel),!a)return console.warn("[vue3-carousel]: A carousel component must be provided for the navigation component to display"),"";const{i18n:h}=a.config,v=O("button",Object.assign(Object.assign({type:"button",disabled:d.value,"aria-label":h.ariaPreviousSlide,title:h.ariaPreviousSlide,onClick:a.nav.prev},n),{class:["carousel__prev",{"carousel__prev--disabled":d.value},n.class]}),u?.()||O(wt,{name:s()})),i=O("button",Object.assign(Object.assign({type:"button",disabled:w.value,"aria-label":h.ariaNextSlide,title:h.ariaNextSlide,onClick:a.nav.next},n),{class:["carousel__next",{"carousel__next--disabled":w.value},n.class]}),o?.()||O(wt,{name:l()}));return[v,i]}}}),yt=P({name:"CarouselSlide",props:{id:{type:String,default:e=>e.isClone?void 0:Ut()},index:{type:Number,default:void 0},isClone:{type:Boolean,default:!1}},setup(e,{attrs:t,slots:n,expose:a}){const o=te(ee);if(Te(ee,void 0),!o)return()=>"";const u=C(e.index),s=S=>{u.value=S},l=zt(),d=()=>{const S=l.vnode.el;return S?S.getBoundingClientRect():{width:0,height:0}};a({id:e.id,setIndex:s,getBoundingRect:d});const w=g(()=>u.value===o.activeSlide),h=g(()=>u.value===o.activeSlide-1),v=g(()=>u.value===o.activeSlide+1),i=g(()=>u.value>=o.visibleRange.min&&u.value<=o.visibleRange.max),p=g(()=>{if(o.config.itemsToShow==="auto")return;const S=o.config.itemsToShow,D=o.config.gap>0&&S>1?`calc(${100/S}% - ${o.config.gap*(S-1)/S}px)`:`${100/S}%`;return o.isVertical?{height:D}:{width:D}});return o.slideRegistry.registerSlide(l,e.index),ze(()=>{o.slideRegistry.unregisterSlide(l)}),e.isClone&&(_e(()=>{mt(l.vnode)}),Ht(()=>{mt(l.vnode)})),()=>{var S,D;return o.config.enabled?O("li",{style:[t.style,Object.assign({},p.value)],class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":i.value,"carousel__slide--active":w.value,"carousel__slide--prev":h.value,"carousel__slide--next":v.value,"carousel__slide--sliding":o.isSliding},onFocusin:()=>{o.viewport&&(o.viewport.scrollLeft=0),o.nav.slideTo(u.value)},id:e.isClone?void 0:e.id,"aria-hidden":e.isClone||void 0,tabindex:e.isClone||!i.value?-1:void 0},(D=n.default)===null||D===void 0?void 0:D.call(n,{currentIndex:u.value,isActive:w.value,isClone:e.isClone,isPrev:h.value,isNext:v.value,isSliding:o.isSliding,isVisible:i.value})):(S=n.default)===null||S===void 0?void 0:S.call(n)}}}),To={key:0,class:"h-72 bg-brand-950 transition-all animate-pulse"},Do={class:Ce(["bg-brand-950 transition-all animate-pulse rounded-2xl h-32"])},St=P({__name:"CarouselCardLoader",props:{is_main:{type:Boolean}},setup(e){return(t,n)=>(k(),N("div",null,[e.is_main?(k(),N("div",To)):(k(),L(xt,{key:1,class:"flex justify-center"},{default:I(()=>[(k(),N(Z,null,he([1],(a,o)=>f("div",Do)),64))]),_:1}))]))}}),Lo={class:"absolute font-bold text-2xl bottom-0 bg-linear-to-t from-brand-950 to-transparent px-2 py-4 w-full text-center anek-latin"},Oo=["src"],Eo=["onClick"],qo=["src"],No=P({__name:"CarouselCard",setup(e){const t=Jt(),n=C(0),a=s=>n.value=s,o={itemsToShow:1,wrapAround:!0,slideEffect:"fade",mouseDrag:!1,touchDrag:!1,height:320,autoplay:4e3},u={height:80,itemsToShow:6,wrapAround:!0,touchDrag:!1,gap:10};return(s,l)=>(k(),N(Z,null,[_(t).config.loading?(k(),L(St,{key:0,is_main:""})):(k(),L(_(gt),dt({key:1,id:"gallery"},o,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=d=>n.value=d),class:"mb-2"}),{default:I(()=>[(k(!0),N(Z,null,he(_(t).posts,d=>(k(),L(_(yt),{key:d.link},{default:I(()=>[f("p",Lo,Ae(d.title),1),f("img",{src:_(ct)(d.content_html)[0]??d.author_image,alt:"Gallery Image",class:"object-cover w-full"},null,8,Oo)]),_:2},1024))),128))]),_:1},16,["modelValue"])),_(t).config.loading?(k(),L(St,{key:2})):(k(),L(_(gt),dt({key:3,id:"thumbnails"},u,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=d=>n.value=d)}),{addons:I(()=>[q(_(_o))]),default:I(()=>[(k(!0),N(Z,null,he(_(t).posts,d=>(k(),L(_(yt),{key:d.link},{default:I(({currentIndex:w,isActive:h})=>[f("div",{class:Ce([[],"rounded"]),onClick:v=>a(w)},[f("img",{src:_(ct)(d.content_html)[0]??d.author_image,alt:"Thumbnail Image",class:Ce([h?"opacity-75":"opacity-50","cursor-pointer rounded-2xl"])},null,10,qo)],8,Eo)]),_:2},1024))),128))]),_:1},16,["modelValue"]))],64))}}),Po={class:"text-base font-semibold leading-7"},Bo=["innerHTML"],Mo={key:0,class:"flex gap-2 mt-2 flex-wrap"},Go=P({__name:"CollapseSection",props:{question:{},answer:{},show_all:{type:Boolean},buttons:{}},setup(e){return(t,n)=>(k(),L(_(ao),{as:"div"},{default:I(({open:a})=>[f("dt",null,[q(_(io),{class:"flex w-full items-start justify-between text-left text-white cursor-pointer transition-all hover:bg-brand-950 px-4 py-2 rounded-2xl"},{default:I(()=>[f("span",Po,Ae(e.question),1),q(Ge,{class:"ml-6 flex h-7 items-center"},{default:I(()=>[a||e.show_all?(k(),L(_(Fe),{key:0,icon:"memory:minus",class:"size-6","aria-hidden":"true"})):(k(),L(_(Fe),{key:1,icon:"memory:menu-down",class:"size-6 flex-none","aria-hidden":"true"}))]),_:2},1024)]),_:2},1024)]),q(Ge,null,{default:I(()=>[q(_(so),{as:"dd",class:"mt-2 bg-brand-950 rounded-2xl py-2 px-4"},{default:I(()=>[f("div",{class:"text-base leading-7 text-gray-300",innerHTML:e.answer},null,8,Bo),e.buttons.length>0?(k(),N("div",Mo,[(k(!0),N(Z,null,he(e.buttons,o=>(k(),L(Re,{title:o.title,external_link:"",href:o.href,icon:o.icon},{default:I(()=>[Q(Ae(o.title),1)]),_:2},1032,["title","href","icon"]))),256))])):Ct("",!0)]),_:1})]),_:1})]),_:1}))}}),Fo={class:"flex justify-between"},Ro={class:"text-base font-semibold leading-7 text-light-001 truncate"},jo=["src"],Yo=["innerHTML"],$o={key:0,class:"mt-2 transition-all flex flex-col justify-between gap-2"},Vo=P({__name:"BasicCard",props:{icon:{},iconHtml:{},iconImg:{},title:{},size:{},enableSearch:{type:Boolean},count:{},collapse:{type:Boolean},color:{}},setup(e){const t=e,n=C(t.collapse??!1),a=g(()=>t.size==="sm"?"p-4 sm:w-96 w-full":"p-4 sm:min-w-full");return(o,u)=>(k(),L(Ge,null,{default:I(()=>[f("div",{class:Ce([a.value,(e.color=="white","bg-brand-950")," p-4 sm:rounded-2xl transition-all object-shadow border-y sm:border border-brand-900"])},[f("div",null,[f("div",Fo,[f("h3",Ro,[e.icon?(k(),L(_(Fe),{key:0,icon:e.icon,class:"text-sm text-light-001 h-4 w-4 inline mr-3 mb-[3px] align-middle"},null,8,["icon"])):e.iconImg?(k(),N("img",{key:1,src:e.iconImg,class:"inline mr-2 w-6 h-6 rounded shadow"},null,8,jo)):(k(),N("div",{key:2,class:"inline-block h-4 w-4 pt-0.5 text-light-001 mr-2",innerHTML:e.iconHtml},null,8,Yo)),f("span",null,Ae(e.title),1)])])]),n.value?Ct("",!0):(k(),N("div",$o,[Zt(o.$slots,"default",{},void 0,!0)]))],2)]),_:3}))}}),kt=eo(Vo,[["__scopeId","data-v-0e0d2677"]]),Wo={class:"p-6 flex flex-col gap-4 lg:grid grid-cols-3"},Ho={class:"lg:order-last flex flex-col gap-4"},Uo={class:"lg:col-span-2"},zo={class:"bg-brand-950 p-4 sm:rounded-2xl mb-4"},Jo=P({__name:"(Index)",setup(e){const t=de({search:""}),n=[{question:"Can I use the art I find here? How should I credit the artist?",answer:`<p>
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
                    </p>`,buttons:[]},{question:"Can I upload content by someone other than me? What about anonymous, public domain art?",answer:`<p>
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
                    </p>`,buttons:[]},{question:"Someone uploaded my art here without my permission. Can you take it down?",answer:`<p>Yes, but please keep in mind that if you released your content under any Creative Commons license that allows derivative works, and the work displays shows the correct license and is attributed to you, then it is legal for that content to be here. If the attribution or license are incorrect, we would prefer to correct them rather than take the content down. However, we will remove all art at the author's request regardless of license, provided we can reasonably verify that you're the real author.</p>
                    <br>
                    <p>If your art is on this site and you would like it taken down, please use the Removal Request form. Be sure to include the links to any art in question.</p>
                    <a href href="">
                        Submission Guidelines
                    </a>
                    <br>
                    <p>Note that there is one case in which take-down requests will not be honored: If your art is derived from a work that was a paid commission by OpenGameArt.org, we reserve the right to archive it here. Please understand that this right is a condition of the licenses (GPL 2&3, CC-BY-SA 3) that we release the exclusive commissions under.</p>`,buttons:[{title:"Submission Guidelines",href:"https://opengameart.org/content/art-submission-guidelines",icon:"memory:arrow-right-circle"}]},{question:"I'm a commercial (closed-source) game developer. Can I use this art?",answer:`<p>Short answer: Yes, you can use this art. Even in commercial projects.</p>
                    <br>
                    <p>Be sure to follow the terms of the license, though. The terms depend on the license(s) the art is released under. Please refer to the summary descriptions of each license below: What do the licenses mean?</p>`,buttons:[{title:"What do the license mean?",href:"https://opengameart.org/content/faq#q-proprietary",icon:"memory:arrow-right-circle"}]},{question:"What do the licenses mean?",answer:`<p>
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
                    </p>`,buttons:[{title:"CC0",href:"https://creativecommons.org/publicdomain/zero/1.0/",icon:"memory:arrow-right-circle"},{title:"CC-BY 3.0",href:"https://creativecommons.org/licenses/by/3.0/",icon:"memory:arrow-right-circle"},{title:"CC-BY 4.0",href:"https://creativecommons.org/licenses/by/4.0/",icon:"memory:arrow-right-circle"},{title:"GPL 2.0",href:"https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",icon:"memory:arrow-right-circle"},{title:"GPL 3.0",href:"https://www.gnu.org/licenses/gpl-3.0.html",icon:"memory:arrow-right-circle"}]},{question:"What kind of art can I submit?",answer:`<p>
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
                    </p>`,buttons:[]},{question:"I want to help, but I'm not an artist. What can I do?",answer:`<p>A couple of things:</p>
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
                    </ul>`,buttons:[{title:"Contact Us",href:"https://opengameart.org/contact",icon:"memory:arrow-right-circle"},{title:"Read More",href:"https://opengameart.org/content/donate-opengameartorg",icon:"memory:arrow-right-circle"}]},{question:"Can I use this art in my Free/Open Source game?",answer:`<p>Yes.</p>
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
                    </p>`,buttons:[{title:"Aren't CC-BY and CC-BY-SA incompatible with the GPL?",href:"https://opengameart.org/content/faq#arent-cc-and-cc-sa-incompatible-gpl",icon:"memory:arrow-right-circle"}]},{question:"Aren't CC-BY and CC-BY-SA incompatible with the GPL?",answer:`<p>
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
                    </p>`,buttons:[{title:"Free System Distribution Guidelines",href:"https://www.gnu.org/distros/free-system-distribution-guidelines.html",icon:"memory:arrow-right-circle"},{title:"Debian Approved",href:"https://wiki.debian.org/DFSGLicenses#CreativeCommonsShare-Alike.28CC-SA.29v3.0",icon:"memory:arrow-right-circle"}]},{question:"I have some content under the WTFPL. Can I submit it?",answer:`<p>
                        Yes!
                    </p>
                    <br />

                    <p>
                        The WTFPL (warning: strong language) is a highly permissive license, in that it allows you to do whatever you want with content, including re-licensing it.
                        Simply remove the WTFPL text file from the distribution and upload it as CC0. You may do the same thing with content released as "Public Domain",
                        provided you are doing so in a jurisdiction that recognizes a public domain.
                    </p>`,buttons:[]},{question:"There is an interesting feature in a preview, but I can't find that component in the download file. Can I use the preview instead?",answer:`<p>
                        Short answer: no.
                    </p>
                    <br />

                    <p>
                        A submission's preview images or preview audio clips may not fall under the same license as the submission's assets available for
                        download. Previews are for demonstration purposes and may contain works or logos not intended as freely licensed content.
                        Unless otherwise noted, assume the previews are 'All rights reserved'.
                    </p>`,buttons:[]},{question:"Can I use the art downloaded here in the Apple App Store or other similar stores?",answer:`<p>
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
                    </p>`,buttons:[]},{question:"Can I still sell art that I've contributed to OpenGameArt.org?",answer:`<p>
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
                    </p>`,buttons:[]},{question:"I'm a commercial artist. Can I use OpenGameArt.org to advertise my paid work?",answer:`<p>
                       Absolutely, in fact several artists are already doing precisely that.  All you need to do is pick a work of yours
                       that you think people would be interested in, and submit it to OGA under any of the license choices that we offer.
                       When you submit your art, be sure to include a link back to your web page or portfolio in the submission.  You may also
                       want to mention in the description that you work on commission.  If you release your art under CC-BY or CC-BY-SA, you can
                       mention in the description that people should link back to your website when they attribute you for your work.
                    </p>
                  `,buttons:[]},{question:"Does the GPL have an attribution requirement? How should I attribute GPLed works here on OGA?",answer:`<p>
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
                  `,buttons:[{title:"GPL",href:"http://www.gnu.org/licenses/gpl.html",icon:"memory:arrow-right-circle"}]},{question:"Some artists have multiple licenses listed. Does that mean you need apply the rules of all licenses or can we pick the one license we prefer?",answer:`<p>
                      You must follow only one of the licenses. However, when you re-distribute/edit, you are encouraged to include/use all of the licenses, so the license spectrum (and thus sum of people/projects who can use the art) doesn't shrink.
                    </p>
                   `,buttons:[]},{question:"Can an artist edit and change their license requirements? If so, what impact would that have on me and my project that already uses that asset?",answer:`<p>
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
                   `,buttons:[]},{question:"I made a 3D model (or song), but I'm not sure where I got my textures (or samples). Can I submit it?",answer:`<p>
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
                   `,buttons:[{title:"Burningwell.org",href:"https://www.burningwell.org/",icon:"memory:arrow-right-circle"},{title:"Musopen.org",href:"https://musopen.org/",icon:"memory:arrow-right-circle"},{title:"The OLPC Sound Sample Archive",href:"https://wiki.laptop.org/go/Free_sound_samples",icon:"memory:arrow-right-circle"},{title:"pdfsounds",href:"https://www.pdsounds.org/lander",icon:"memory:arrow-right-circle"}]},{question:"Aren't there other sites out there like this?",answer:`<p>
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
                   `,buttons:[{title:"Free Art Search",href:"http://search.freegamedev.net/",icon:"memory:arrow-right-circle"}]},{question:"What's the purpose of this site?",answer:`<p>
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

                   `,buttons:[]},{question:"IRC / Web Chat rules",answer:`<p>
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
                   `,buttons:[]},{question:"How can I put a Flattr icon on my art pages?",answer:`<p>
                     Edit your account by clicking on "My Account" above and then selecting the "Edit" tab.  Scroll down and enter your Flattr UserID.
                    </p>
                    <br />
                    <p>
                   That's all there is to it!
                    </p>

                   `,buttons:[]}],a=g(()=>{if(!t.search)return n;const u=t.search.toLowerCase();return n.filter(s=>s.question.toLowerCase().includes(u)||o(s.answer).toLowerCase().includes(u))}),o=u=>{const s=document.createElement("div");return s.innerHTML=u,s.textContent||s.innerText||""};return(u,s)=>(k(),N("div",null,[q(Yt),q(No),f("div",Wo,[f("div",Ho,[q(kt,{icon:"memory:alert-box",title:"Instruction"},{default:I(()=>[s[3]||(s[3]=f("p",{class:""},"If you have a question that you think should be here, contact us via the Contact form and let us know.",-1)),q(Re,{icon:"memory:chat",external_link:"",href:"https://opengameart.org/contact"},{default:I(()=>[...s[1]||(s[1]=[Q("Contact Form",-1)])]),_:1}),s[4]||(s[4]=f("p",{class:""},"Please read our content submission guidelines before posting art.",-1)),q(Re,{icon:"memory:chat",external_link:"",href:"https://opengameart.org/content/art-submission-guidelines"},{default:I(()=>[...s[2]||(s[2]=[Q(" Submission Guidelines ",-1)])]),_:1})]),_:1}),q(kt,{icon:"memory:alert-box",title:"Forum Rules"},{default:I(()=>[...s[5]||(s[5]=[f("p",null,[f("strong",null,"The basics:")],-1),f("ul",{class:"list-disc pl-6"},[f("li",null,"No discussion of religion."),f("li",null,"No discussion of politics, except relating directly to copyright, the Creative Commons, and/or FOSS."),f("li",null,"Don't be racist, homophobic, or otherwise hateful.")],-1),f("br",null,null,-1),f("p",null,[f("strong",null,"Conduct:")],-1),f("p",null," On some forums, it is okay to be snide.  That isn't acceptable here.  As a FOSS gaming community, we are ambassadors of FOSS in general, and as such it is not acceptable to be rude to people who are interested enough in what we do to take the time to ask questions.  Specifically, it is not okay to do the following: ",-1),f("ul",{class:"list-disc pl-6"},[f("li",null,'Say something along the lines of "READ TEH FAQ U IDIOT"'),f("li",null,"Reply to a question with a link to a google search"),f("li",null,'Say "SOMEONE ALREADY ASKED THIS READ TEH FORUM U IDIOT"'),f("li",null,"Talk down to anyone because of their choice of software or operating system")],-1),f("p",null,[Q(" On the other hand, it's quite possible that we'll get certain questions over and over, which is the reason FAQs exist in the first place.  It "),f("em",null,"is"),Q(" acceptable to reply with a link to a relevant FAQ question "),f("em",null,"provided you read their post carefully and make sure that it actually applies"),Q(".  Just try to understand that when someone asks a question in a forum, they're looking for a personalized answer, and it's better to provide one and encourage discussion than just send them off to a FAQ link. ")],-1)])]),_:1})]),f("div",Uo,[s[6]||(s[6]=f("h2",{class:"text-2xl font-bold leading-10 tracking-tight text-white mb-6"},"Frequently asked questions",-1)),f("div",zo,[q(to,{modelValue:t.search,"onUpdate:modelValue":s[0]||(s[0]=l=>t.search=l),name:"Search"},null,8,["modelValue"])]),q(xt,{class:"flex flex-col gap-4"},{default:I(()=>[(k(!0),N(Z,null,he(a.value,l=>(k(),L(Go,{question:l.question,answer:l.answer,show_all:t.search!="",buttons:l.buttons},null,8,["question","answer","show_all","buttons"]))),256))]),_:1}),s[7]||(s[7]=f("div",{class:"TEST"},null,-1))])])]))}});export{Jo as default};
