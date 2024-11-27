import{r as p,M as W,j as w,u as $,P as J,a as F,L as Y,i as S,b as X,s as T,R as v,c as s,m as k,T as ee,d as oe,t as te,e as ne,f as se,g as _,p as ae,D as re,h as ie,k as le,B as me,C as ce,l as ue}from"./index-BA4iz2ay.js";var de=function(e){p.useEffect(e,[])};class pe extends p.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function fe({children:e,isPresent:t}){const n=p.useId(),o=p.useRef(null),a=p.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=p.useContext(W);return p.useInsertionEffect(()=>{const{width:c,height:r,top:m,left:u}=a.current;if(t||!o.current||!c||!r)return;o.current.dataset.motionPopId=n;const d=document.createElement("style");return i&&(d.nonce=i),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${r}px !important;
            top: ${m}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),w.jsx(pe,{isPresent:t,childRef:o,sizeRef:a,children:p.cloneElement(e,{ref:o})})}const ke=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:a,presenceAffectsLayout:i,mode:c})=>{const r=$(he),m=p.useId(),u=p.useCallback(l=>{r.set(l,!0);for(const h of r.values())if(!h)return;o&&o()},[r,o]),d=p.useMemo(()=>({id:m,initial:t,isPresent:n,custom:a,onExitComplete:u,register:l=>(r.set(l,!1),()=>r.delete(l))}),i?[Math.random(),u]:[n,u]);return p.useMemo(()=>{r.forEach((l,h)=>r.set(h,!1))},[n]),p.useEffect(()=>{!n&&!r.size&&o&&o()},[n]),c==="popLayout"&&(e=w.jsx(fe,{isPresent:n,children:e})),w.jsx(J.Provider,{value:d,children:e})};function he(){return new Map}const E=e=>e.key||"";function M(e){const t=[];return p.Children.forEach(e,n=>{p.isValidElement(n)&&t.push(n)}),t}const C=({children:e,exitBeforeEnter:t,custom:n,initial:o=!0,onExitComplete:a,presenceAffectsLayout:i=!0,mode:c="sync"})=>{S(!t,"Replace exitBeforeEnter with mode='wait'");const r=p.useMemo(()=>M(e),[e]),m=r.map(E),u=p.useRef(!0),d=p.useRef(r),l=$(()=>new Map),[h,b]=p.useState(r),[N,y]=p.useState(r);F(()=>{u.current=!1,d.current=r;for(let x=0;x<N.length;x++){const f=E(N[x]);m.includes(f)?l.delete(f):l.get(f)!==!0&&l.set(f,!1)}},[N,m.length,m.join("-")]);const P=[];if(r!==h){let x=[...r];for(let f=0;f<N.length;f++){const g=N[f],O=E(g);m.includes(O)||(x.splice(f,0,g),P.push(g))}c==="wait"&&P.length&&(x=P),y(M(x)),b(r);return}c==="wait"&&N.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);const{forceRender:z}=p.useContext(Y);return w.jsx(w.Fragment,{children:N.map(x=>{const f=E(x),g=r===N||m.includes(f),O=()=>{if(l.has(f))l.set(f,!0);else return;let R=!0;l.forEach(G=>{G||(R=!1)}),R&&(z==null||z(),y(d.current),a&&a())};return w.jsx(ke,{isPresent:g,initial:!u.current||o?void 0:!1,custom:g?void 0:n,presenceAffectsLayout:i,mode:c,onExitComplete:g?void 0:O,children:x},f)})})};function be(e){e.values.forEach(t=>t.stop())}function A(e,t){[...t].reverse().forEach(o=>{const a=e.getVariant(o);a&&T(e,a),e.variantChildren&&e.variantChildren.forEach(i=>{A(i,t)})})}function Ne(e,t){if(Array.isArray(t))return A(e,t);if(typeof t=="string")return A(e,[t]);T(e,t)}function xe(){let e=!1;const t=new Set,n={subscribe(o){return t.add(o),()=>void t.delete(o)},start(o,a){S(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const i=[];return t.forEach(c=>{i.push(X(c,o,{transitionOverride:a}))}),Promise.all(i)},set(o){return S(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(a=>{Ne(a,o)})},stop(){t.forEach(o=>{be(o)})},mount(){return e=!0,()=>{e=!1,n.stop()}}};return n}function ge(){const e=$(xe);return F(e.mount,[]),e}const ve=ge,L={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}}},Z={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.3,staggerChildren:.5}}},U={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.2}},exit:{opacity:0,y:20,transition:{duration:.2}}};var q={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I=v.createContext&&v.createContext(q),Ve=["attr","size","title"];function we(e,t){if(e==null)return{};var n=ye(e,t),o,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function ye(e,t){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j.apply(this,arguments)}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(o){Ee(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ee(e,t,n){return t=je(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function je(e){var t=De(e,"string");return typeof t=="symbol"?t:t+""}function De(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function H(e){return e&&e.map((t,n)=>v.createElement(t.tag,D({key:n},t.attr),H(t.child)))}function V(e){return t=>v.createElement(Ce,j({attr:D({},e.attr)},t),H(e.child))}function Ce(e){var t=n=>{var{attr:o,size:a,title:i}=e,c=we(e,Ve),r=a||n.size||"1em",m;return n.className&&(m=n.className),e.className&&(m=(m?m+" ":"")+e.className),v.createElement("svg",j({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,c,{className:m,style:D(D({color:e.color||n.color},n.style),e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),i&&v.createElement("title",null,i),e.children)};return I!==void 0?v.createElement(I.Consumer,null,n=>t(n)):t(q)}function Le(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7.04813 13.4061L10.5831 16.9421L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L7.04813 13.4061ZM2.99907 3L6.54506 3.00335L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L3.00181 6.53118L2.99907 3ZM17.4563 3.0001L20.9991 3.00335L21.001 6.52648L16.9481 10.5781L13.4121 7.0431L17.4563 3.0001Z"},child:[]}]})(e)}function Pe(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"},child:[]}]})(e)}function ze({abilities:e,isNavigating:t,finishNavigation:n}){return s.jsxDEV("section",{className:"my-4",children:s.jsxDEV(C,{mode:"wait",onExitComplete:n,children:!t&&s.jsxDEV(s.Fragment,{children:[s.jsxDEV(k.h2,{initial:"hidden",animate:e&&"visible",exit:"hidden",variants:L,className:"text-slate-600 dark:text-slate-500 mb-1",children:"Abilities"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/abilities/abilities.tsx",lineNumber:19,columnNumber:13},this),s.jsxDEV(k.ul,{variants:Z,initial:"hidden",animate:e&&"visible",exit:"hidden",className:"flex gap-3 w-[370px] sm:w-full flex-wrap","aria-label":"List of Pokemon Abilities",children:e==null?void 0:e.map(o=>s.jsxDEV(k.li,{variants:U,className:"capitalize flex gap-2 items-center py-1 px-3 text-indigo-700 bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 rounded-full font-semibold",children:[s.jsxDEV(Pe,{className:"size-5"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/abilities/abilities.tsx",lineNumber:43,columnNumber:19},this),o==null?void 0:o.replace(/-/g," ")]},o,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/abilities/abilities.tsx",lineNumber:38,columnNumber:17},this))},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/abilities/abilities.tsx",lineNumber:29,columnNumber:13},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/abilities/abilities.tsx",lineNumber:18,columnNumber:11},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/abilities/abilities.tsx",lineNumber:16,columnNumber:7},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/abilities/abilities.tsx",lineNumber:15,columnNumber:5},this)}function Oe({animationControls:e,imageSrc:t,pokemonColor:n,name:o}){return s.jsxDEV(k.div,{layoutId:`image-wrapper-${o}`,animate:e,className:"inner-glow group relative overflow-hidden border border-slate-800 bg-slate-900 dark:bg-opacity-70 p-5 h-[500px] grid place-content-center rounded-3xl",children:[s.jsxDEV("div",{className:"h-24 absolute rounded-full m-auto w-full -bottom-28 blur-3xl opacity-40",style:{background:n}},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/image-card/image-card.tsx",lineNumber:19,columnNumber:7},this),s.jsxDEV(ee,{parralexEffect:!1,glareEnable:!1,scale:1.1,children:[s.jsxDEV("img",{src:t,alt:"Pokemon image backdrop",className:"absolute blur-3xl z-0 opacity-50 group-hover:opacity-80 transition-opacity"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/image-card/image-card.tsx",lineNumber:24,columnNumber:9},this),s.jsxDEV(k.img,{layoutId:`${o} image pokemon`,className:"w-96 relative",src:t,alt:`Pokemon ${o} image`},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/image-card/image-card.tsx",lineNumber:29,columnNumber:9},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/image-card/image-card.tsx",lineNumber:23,columnNumber:7},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/image-card/image-card.tsx",lineNumber:14,columnNumber:5},this)}function Se({types:e,isNavigating:t,finishNavigation:n}){return s.jsxDEV("section",{children:s.jsxDEV(C,{mode:"wait",onExitComplete:n,children:!t&&s.jsxDEV(s.Fragment,{children:[s.jsxDEV(k.h2,{initial:"hidden",animate:"visible",exit:"hidden",variants:L,className:"text-slate-600 dark:text-slate-500 mb-1",children:"Types"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:18,columnNumber:13},this),s.jsxDEV(k.ul,{variants:Z,initial:"hidden",animate:"visible",exit:"hidden",className:"flex gap-3",children:e==null?void 0:e.map(o=>{var a;return s.jsxDEV(k.li,{variants:U,className:"inline-flex justify-center items-center gap-3 p-1 rounded-full",style:{background:`color-mix(in oklab, #000000 0%, ${o.color} 14.2%)`},children:[s.jsxDEV("div",{style:{background:o.color,boxShadow:`0 4px 20px -2px ${o.color}`},className:"rounded-full p-1",children:s.jsxDEV("img",{src:o.icon,alt:`${o.name} type icon`,className:"size-5"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:45,columnNumber:21},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:41,columnNumber:19},this),s.jsxDEV("span",{className:"capitalize font-semibold mr-3 dark:text-slate-100",children:(a=o.name)==null?void 0:a.replace(/-/g," ")},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:47,columnNumber:19},this)]},o==null?void 0:o.name,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:35,columnNumber:17},this)})},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:27,columnNumber:13},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:17,columnNumber:11},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:15,columnNumber:7},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/pokemon-types/pokemon-types.tsx",lineNumber:14,columnNumber:5},this)}const Ae={hidden:{opacity:0,width:"200px"},visible:{opacity:1,width:"100%",transition:{delay:.2,staggerChildren:.2}},exit:{opacity:0,transition:{duration:.2}}},$e={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{duration:.2}},exit:{opacity:0,y:20,transition:{duration:.2}}};function Re(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z"},child:[]}]})(e)}function Me(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M224,192a16,16,0,1,0,16,16A16,16,0,0,0,224,192ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.09,48.09,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68ZM384,256H371.88c-28.51,0-42.79,34.47-22.63,54.63l8.58,8.57a16,16,0,1,1-22.63,22.63l-8.57-8.58C306.47,313.09,272,327.37,272,355.88V368a16,16,0,0,1-32,0V355.88c0-28.51-34.47-42.79-54.63-22.63l-8.57,8.58a16,16,0,0,1-22.63-22.63l8.58-8.57c20.16-20.16,5.88-54.63-22.63-54.63H128a16,16,0,0,1,0-32h12.12c28.51,0,42.79-34.47,22.63-54.63l-8.58-8.57a16,16,0,0,1,22.63-22.63l8.57,8.58c20.16,20.16,54.63,5.88,54.63-22.63V112a16,16,0,0,1,32,0v12.12c0,28.51,34.47,42.79,54.63,22.63l8.57-8.58a16,16,0,0,1,22.63,22.63l-8.58,8.57C329.09,189.53,343.37,224,371.88,224H384a16,16,0,0,1,0,32Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,288,256Z"},child:[]}]})(e)}function Ie(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"},child:[]}]})(e)}function Be(e){return V({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16c-52.5 252.632-210 277.845 0 454.688C466 293.845 308.5 268.63 256 16zM124.75 167.407C98.5 243.197 46 294.117 46 369.907S151 496 229.75 496c-157.5-126.317-105-202.278-105-328.593zm262.5 0c0 126.317 52.5 202.278-105 328.593C361 496 466 445.696 466 369.907c0-75.79-52.5-126.71-78.75-202.5z"},child:[]}]})(e)}function Fe(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z"},child:[]}]})(e)}function Te({name:e,style:t}){switch(e){case"hp":return s.jsxDEV(Fe,{className:"size-6",style:t},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/states-icon/stats-icon.tsx",lineNumber:17,columnNumber:14},this);case"attack":return s.jsxDEV(Le,{className:"size-6",style:t},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/states-icon/stats-icon.tsx",lineNumber:19,columnNumber:14},this);case"defense":return s.jsxDEV(Ie,{className:"size-6",style:t},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/states-icon/stats-icon.tsx",lineNumber:21,columnNumber:14},this);case"special-attack":return s.jsxDEV(Be,{className:"size-6",style:t},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/states-icon/stats-icon.tsx",lineNumber:23,columnNumber:14},this);case"special-defense":return s.jsxDEV(Me,{className:"size-6",style:t},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/states-icon/stats-icon.tsx",lineNumber:25,columnNumber:14},this);case"speed":return s.jsxDEV(Re,{className:"size-6",style:t},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/states-icon/stats-icon.tsx",lineNumber:27,columnNumber:14},this);default:return null}}function _e({value:e=0,name:t,percent:n,color:o}){const i=oe(te)==="dark",c=i?"rgb(15 23 42 / 1)":"rgb(241 245 249 / 1)",r=i?"rgb(2 6 23 / 1)":"rgb(203, 216, 228)",m=t==null?void 0:t.replace(/-/g," ");return s.jsxDEV("div",{className:"inline-flex justify-center flex-col items-center min-w-24",children:[s.jsxDEV("figure",{className:"size-14 rounded-full bg-slate-400 bg-opacity-60 dark:bg-slate-900 grid place-content-center relative",children:[s.jsxDEV("div",{role:"img","aria-label":`${m}: ${n}%`,style:{background:`conic-gradient(from 213deg at 50% 50%, ${o} 0%, ${o} ${n}%, ${r} ${n}%, ${r} 83%, ${c} 83%, ${c} 100%)`},className:"size-14 rounded-full"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/stat-pie/stat-pie.tsx",lineNumber:24,columnNumber:9},this),s.jsxDEV("div",{style:{color:o},className:"size-11 rounded-full bg-slate-100 dark:bg-slate-900 absolute inset-0 m-auto grid place-content-center",children:s.jsxDEV(Te,{name:t,style:{filter:`drop-shadow(0 2px 7px color-mix(in srgb, ${o} 70%, transparent))`}},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/stat-pie/stat-pie.tsx",lineNumber:37,columnNumber:11},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/stat-pie/stat-pie.tsx",lineNumber:33,columnNumber:9},this),s.jsxDEV("span",{"aria-label":"Pokemon stat name","aria-live":"polite",className:"absolute m-auto right-0 left-0 size-4 -bottom-2 text-xs text-slate-600 dark:text-slate-400",children:e},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/stat-pie/stat-pie.tsx",lineNumber:45,columnNumber:9},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/stat-pie/stat-pie.tsx",lineNumber:23,columnNumber:7},this),s.jsxDEV("figcaption",{className:"text-sm text-center text-slate-600 dark:text-slate-400 capitalize mt-3 font-semibold",children:m},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/stat-pie/stat-pie.tsx",lineNumber:55,columnNumber:7},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/stat-pie/stat-pie.tsx",lineNumber:22,columnNumber:5},this)}function Ze({baseStats:e,isNavigating:t,finishNavigation:n}){return s.jsxDEV("section",{children:s.jsxDEV(C,{mode:"wait",onExitComplete:n,children:!t&&s.jsxDEV(s.Fragment,{children:[s.jsxDEV(k.h2,{initial:"hidden",animate:e&&"visible",exit:"hidden",variants:L,className:"text-slate-600 dark:text-slate-500 mb-1",children:"Stats"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/stats-card/stats-card.tsx",lineNumber:20,columnNumber:13},this),s.jsxDEV(k.ul,{initial:"hidden",animate:e&&"visible",exit:"exit",variants:Ae,className:"grid grid-cols-3 gap-y-6 gap-x-4 border dark:border-slate-800 bg-slate-100 bg-opacity-70 dark:bg-slate-900 p-4 rounded-xl","aria-label":"List of Pokemon Base Stats",children:e==null?void 0:e.map(o=>s.jsxDEV(k.li,{variants:$e,children:s.jsxDEV(_e,{value:o.value,name:o.name,color:o.color,percent:o.value/o.max*100},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/stats-card/stats-card.tsx",lineNumber:39,columnNumber:19},this)},o.name,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/stats-card/stats-card.tsx",lineNumber:38,columnNumber:17},this))},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/stats-card/stats-card.tsx",lineNumber:29,columnNumber:13},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/stats-card/stats-card.tsx",lineNumber:19,columnNumber:11},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/stats-card/stats-card.tsx",lineNumber:17,columnNumber:7},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/components/pokemon/stats-card/stats-card.tsx",lineNumber:16,columnNumber:5},this)}function Ue(){const e=ne(),[t,n]=p.useState(!1),[o,a]=p.useState(null);return{isNavigating:t,navigate:(r,{replace:m=!1}={})=>{n(!0),a({to:r,replace:m})},finishNavigation:()=>{if(o){const{to:r,replace:m}=o;e.navigate({to:r,replace:m,search:u=>({...u})}),n(!1),a(null)}}}}const K=function e(t){function n(a,i,c){var r,m={};if(Array.isArray(a))return a.concat(i);for(r in a)m[c?r.toLowerCase():r]=a[r];for(r in i){var u=c?r.toLowerCase():r,d=i[r];m[u]=u in m&&typeof d=="object"?n(m[u],d,u=="headers"):d}return m}function o(a,i,c,r,m){var u=typeof a!="string"?(i=a).url:a,d={config:i},l=n(t,i),h={};r=r||l.data,(l.transformRequest||[]).map(function(b){r=b(r,l.headers)||r}),l.auth&&(h.authorization=l.auth),r&&typeof r=="object"&&typeof r.append!="function"&&typeof r.text!="function"&&(r=JSON.stringify(r),h["content-type"]="application/json");try{h[l.xsrfHeaderName]=decodeURIComponent(document.cookie.match(RegExp("(^|; )"+l.xsrfCookieName+"=([^;]*)"))[2])}catch{}return l.baseURL&&(u=u.replace(/^(?!.*\/\/)\/?/,l.baseURL+"/")),l.params&&(u+=(~u.indexOf("?")?"&":"?")+(l.paramsSerializer?l.paramsSerializer(l.params):new URLSearchParams(l.params))),(l.fetch||fetch)(u,{method:(c||l.method||"get").toUpperCase(),body:r,headers:n(l.headers,h,!0),credentials:l.withCredentials?"include":m}).then(function(b){for(var N in b)typeof b[N]!="function"&&(d[N]=b[N]);return l.responseType=="stream"?(d.data=b.body,d):b[l.responseType||"text"]().then(function(y){d.data=y,d.data=JSON.parse(y)}).catch(Object).then(function(){return(l.validateStatus?l.validateStatus(b.status):b.ok)?d:Promise.reject(d)})})}return t=t||{},o.request=o,o.get=function(a,i){return o(a,i,"get")},o.delete=function(a,i){return o(a,i,"delete")},o.head=function(a,i){return o(a,i,"head")},o.options=function(a,i){return o(a,i,"options")},o.post=function(a,i,c){return o(a,c,"post",i)},o.put=function(a,i,c){return o(a,c,"put",i)},o.patch=function(a,i,c){return o(a,c,"patch",i)},o.all=Promise.all.bind(Promise),o.spread=function(a){return a.apply.bind(a,a)},o.CancelToken=typeof AbortController=="function"?AbortController:Object,o.defaults=t,o.create=e,o}(),Q="https://pokeapi.co/api/v2",qe=async e=>K.get(`${Q}/pokemon/${e}`).then(t=>t.data),He=async e=>K.get(`${Q}/pokemon-species/${e}`).then(t=>t.data),Ke=(e,t)=>{const n=se(),{data:o,isLoading:a,isError:i,error:c}=_({queryKey:["pokemon",e],queryFn:()=>qe(e),initialData:()=>{const r=n.getQueriesData({queryKey:["pokemon"]});return ae(e,r)},select:t});return{data:o,isLoading:a,isError:i,error:c}},Qe=e=>{const{data:t,isLoading:n,isError:o,error:a}=_({queryKey:["pokemon-color",e],queryFn:()=>He(e),staleTime:re});return{pokemonColor:t==null?void 0:t.color.name,isLoading:n,isPokemonSpeciesError:o,pokemonSpeciesError:a}};function Ge(){return s.jsxDEV("section",{"aria-label":"Loading skeleton",className:"p-2 mt-8 container mx-auto m-auto inset-0 z-10 animate-pulse",children:s.jsxDEV("div",{className:"flex justify-center gap-14","aria-hidden":"true",children:[s.jsxDEV("div",{children:[s.jsxDEV("div",{className:"h-11 rounded-full  bg-slate-400 dark:bg-slate-800 w-[92px] mb-3"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:9,columnNumber:11},this),s.jsxDEV("div",{className:"h-[500px] w-[426px] bg-slate-400 dark:bg-slate-800 rounded-3xl"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:11,columnNumber:11},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:8,columnNumber:9},this),s.jsxDEV("div",{className:"mt-9",children:[s.jsxDEV("div",{className:"bg-slate-400 dark:bg-slate-800 mb-5 mt-3 h-8 w-36 rounded-xl"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:15,columnNumber:11},this),s.jsxDEV("div",{className:"flex mb-5 mt-12 gap-3",children:[s.jsxDEV("div",{className:"bg-slate-400 dark:bg-slate-800 h-9 w-28 rounded-full"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:18,columnNumber:13},this),s.jsxDEV("div",{className:"bg-slate-400 dark:bg-slate-800 h-9 w-28 rounded-full"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:19,columnNumber:13},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:17,columnNumber:11},this),s.jsxDEV("div",{className:"flex mb-5 mt-12 gap-3",children:[s.jsxDEV("div",{className:"bg-slate-400 dark:bg-slate-800 h-8 w-28 rounded-full"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:23,columnNumber:13},this),s.jsxDEV("div",{className:"bg-slate-400 dark:bg-slate-800 h-8 w-28 rounded-full"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:24,columnNumber:13},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:22,columnNumber:11},this),s.jsxDEV("div",{className:"grid grid-cols-3 gap-y-6 place-content-center gap-x-4 mb-5 mt-11 gap-3 w-[370px] bg-slate-300 dark:bg-slate-700 rounded-xl p-4",children:Array.from({length:6}).map((e,t)=>s.jsxDEV("div",{className:"inline-flex justify-center flex-col items-center min-w-24",children:[s.jsxDEV("div",{className:"bg-slate-400 dark:bg-slate-800 size-14 rounded-full"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:33,columnNumber:17},this),s.jsxDEV("div",{className:"bg-slate-400 dark:bg-slate-800 h-4 w-11 mt-4 rounded-lg"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:34,columnNumber:17},this)]},`loading item ${t}`,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:29,columnNumber:15},this))},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:27,columnNumber:11},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:14,columnNumber:9},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:7,columnNumber:7},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details-loader.tsx",lineNumber:3,columnNumber:5},this)}function We(){const{name:e}=ie({from:"/pokemon-explorer/pokemon-details/$name"}),{data:t,isLoading:n,isError:o,error:a}=Ke(e,p.useCallback(le,[e])),{pokemonColor:i,isPokemonSpeciesError:c,pokemonSpeciesError:r}=Qe(e),m=ve(),{isNavigating:u,navigate:d,finishNavigation:l}=Ue();de(()=>{window.scrollTo({top:0,behavior:"smooth"})});const h=()=>{m.start({scale:.7,transition:{duration:.2}}),d("/pokemon-explorer")};return n?s.jsxDEV(Ge,{},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:46,columnNumber:25},this):o||c?s.jsxDEV("div",{children:[s.jsxDEV("h2",{children:"Error occurred:"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:51,columnNumber:9},this),s.jsxDEV("p",{children:(a==null?void 0:a.message)||(r==null?void 0:r.message)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:52,columnNumber:9},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:50,columnNumber:7},this):s.jsxDEV(s.Fragment,{children:s.jsxDEV("div",{className:"p-2 mt-8 sm:mt-10 md:mt-10 container mx-auto",children:s.jsxDEV("div",{className:"flex justify-center gap-14 sm:flex-col md:flex-col md:gap-0 sm:gap-0",children:[s.jsxDEV("div",{children:[s.jsxDEV(C,{children:!u&&s.jsxDEV(k.div,{className:"sm:fixed md:fixed md:top-[21px] xs:top-[2px] sm:left-4 sm:ml-3 z-50",initial:"hidden",animate:"visible",exit:"hidden",variants:L,children:s.jsxDEV(me,{onClick:h,className:"mb-3",rounded:!0,children:[s.jsxDEV(ce,{},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:72,columnNumber:21},this)," Back"]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:71,columnNumber:19},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:64,columnNumber:17},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:62,columnNumber:13},this),s.jsxDEV(Oe,{name:e,animationControls:m,imageSrc:t.image,pokemonColor:i},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:78,columnNumber:13},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:61,columnNumber:11},this),s.jsxDEV("div",{className:"mt-9",children:[s.jsxDEV(k.h2,{layoutId:`pokemon-name-${e}`,className:"capitalize text-3xl my-3 font-bold text-slate-950 dark:text-slate-100 mb-5",children:e},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:87,columnNumber:13},this),s.jsxDEV(Se,{types:t.types,isNavigating:u,finishNavigation:l},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:94,columnNumber:13},this),s.jsxDEV(ze,{abilities:t.abilities,isNavigating:u,finishNavigation:l},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:100,columnNumber:13},this),s.jsxDEV(Ze,{baseStats:t.baseStats,isNavigating:u,finishNavigation:l},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:106,columnNumber:13},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:86,columnNumber:11},this)]},void 0,!0,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:60,columnNumber:9},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:59,columnNumber:7},this)},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/pages/pokemon-details/pokemon-details.tsx",lineNumber:58,columnNumber:5},this)}const Ye=ue("/pokemon-explorer/pokemon-details/$name")({component:We,notFoundComponent:()=>s.jsxDEV("div",{children:"Not Found"},void 0,!1,{fileName:"/Volumes/workspace/pokemon-frontend/src/routes/pokemon-explorer/pokemon-details.$name.lazy.tsx",lineNumber:7,columnNumber:28},void 0)});export{Ye as Route};
