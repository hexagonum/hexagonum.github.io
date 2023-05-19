(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(6892)}])},3991:function(e,t){"use strict";var o,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{PrefetchKind:function(){return o},ACTION_REFRESH:function(){return r},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return s}});let r="refresh",l="navigate",u="restore",a="server-patch",c="prefetch",i="fast-refresh",s="server-action";(n=o||(o={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=o(8754),r=n._(o(7294)),l=o(4532),u=o(3353),a=o(1410),c=o(9064),i=o(370),s=o(9955),f=o(4224),d=o(508),m=o(1516),p=o(4266),h=o(3991),v=new Set;function w(e,t,o,n,r,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(v.has(l))return;v.add(l)}let a=l?e.prefetch(t,r):e.prefetch(t,o,n);Promise.resolve(a).catch(e=>{})}function g(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let b=r.default.forwardRef(function(e,t){let o,n;let{href:a,as:v,children:b,prefetch:y=null,passHref:_,replace:x,shallow:E,scroll:j,locale:C,onClick:O,onMouseEnter:M,onTouchStart:P,legacyBehavior:L=!1,...k}=e;o=b,L&&("string"==typeof o||"number"==typeof o)&&(o=r.default.createElement("a",null,o));let R=!1!==y,T=null===y?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,A=r.default.useContext(s.RouterContext),D=r.default.useContext(f.AppRouterContext),N=null!=A?A:D,I=!A,{href:S,as:U}=r.default.useMemo(()=>{if(!A){let e=g(a);return{href:e,as:v?g(v):e}}let[e,t]=(0,l.resolveHref)(A,a,!0);return{href:e,as:v?(0,l.resolveHref)(A,v):t||e}},[A,a,v]),F=r.default.useRef(S),H=r.default.useRef(U);L&&(n=r.default.Children.only(o));let B=L?n&&"object"==typeof n&&n.ref:t,[K,q,z]=(0,d.useIntersection)({rootMargin:"200px"}),V=r.default.useCallback(e=>{(H.current!==U||F.current!==S)&&(z(),H.current=U,F.current=S),K(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[U,B,S,z,K]);r.default.useEffect(()=>{N&&q&&R&&w(N,S,U,{locale:C},{kind:T},I)},[U,S,q,C,R,null==A?void 0:A.locale,N,I,T]);let W={ref:V,onClick(e){L||"function"!=typeof O||O(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,o,n,l,a,c,i,s,f){let{nodeName:d}=e.currentTarget,m="A"===d.toUpperCase();if(m&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,u.isLocalURL)(o)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](o,n,{shallow:a,locale:i,scroll:c}):t[l?"replace":"push"](n||o,{forceOptimisticNavigation:!f})};s?r.default.startTransition(p):p()}(e,N,S,U,x,E,j,C,I,R)},onMouseEnter(e){L||"function"!=typeof M||M(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(R||!I)&&w(N,S,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:T},I)},onTouchStart(e){L||"function"!=typeof P||P(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(R||!I)&&w(N,S,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:T},I)}};if((0,c.isAbsoluteUrl)(U))W.href=U;else if(!L||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,m.getDomainLocale)(U,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);W.href=t||(0,p.addBasePath)((0,i.addLocale)(U,e,null==A?void 0:A.defaultLocale))}return L?r.default.cloneElement(n,W):r.default.createElement("a",{...k,...W},o)}),y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=o(7294),r=o(29),l="function"==typeof IntersectionObserver,u=new Map,a=[];function c(e){let{rootRef:t,rootMargin:o,disabled:c}=e,i=c||!l,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),m=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(i||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!s){let e=(0,r.requestIdleCallback)(()=>f(!0));return()=>(0,r.cancelIdleCallback)(e)}},[i,o,t,s,d.current]);let p=(0,n.useCallback)(()=>{f(!1)},[]);return[m,s,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6892:function(e,t,o){"use strict";o.r(t),o.d(t,{HomePage:function(){return d},default:function(){return m}});var n=o(5893);let r=()=>(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"128",height:"112",viewBox:"0 0 128 110.85125168440814",style:{pointerEvents:"none"},children:(0,n.jsx)("path",{stroke:"#ffffff",strokeWidth:"5",d:"M0 55.42562584220407L32 0L96 0L128 55.42562584220407L96 110.85125168440814L32 110.85125168440814Z",style:{pointerEvents:"none"}})});var l=o(7294);let u=()=>{let[e,t]=(0,l.useState)({width:0,height:0}),o=()=>{t({width:(null==window?void 0:window.innerWidth)||0,height:(null==window?void 0:window.innerHeight)||0})};return(0,l.useEffect)(()=>(window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)),[]),e};var a=o(1664),c=o.n(a),i=o(1163);let s=["theme-0"],f=[{emoji:"☕",name:"cafesang",url:"https://hexagonum.github.io/cafesang/"},{emoji:"\uD83C\uDFA8",name:"colors",url:"https://hexagonum.github.io/colors/"},{emoji:"\uD83E\uDDE0",name:"psychology",url:"https://hexagonum.github.io/hofstede/"},{emoji:"\uD83D\uDDFA️",name:"maps.svg",url:"https://hexagonum.github.io/maps.svg/"},{emoji:"⚽",name:"liverpool",url:"https://hexagonum.github.io/liverpool/"},{emoji:"\uD83D\uDCBB",name:"forex",url:"https://hexagonum.github.io/techstack/"},{emoji:"\uD83D\uDCC8",name:"trends",url:"https://hexagonum.github.io/trends/"},{emoji:"☁️",name:"weather",url:"https://hexagonum.github.io/weather/"},{emoji:"\uD83D\uDC1D",name:"bumblebee",url:"#"}],d=()=>{let e=(0,i.useRouter)(),{visible:t}=e.query,{width:o,height:a}=u(),[d,m]=(0,l.useState)(s[0]),[{maxRows:p,maxColumns:h},v]=(0,l.useState)({maxColumns:Math.floor(o/128)+10,maxRows:2*Math.floor(a/112)+10});(0,l.useEffect)(()=>{v({maxColumns:Math.floor(o/128)+5,maxRows:2*Math.floor(a/112)+5})},[o,a]);let w=[...Array(h+1).keys()].map(e=>e),g=[...Array(p+1).keys()].map(()=>w);return(0,n.jsx)("div",{className:d,children:(0,n.jsx)("main",{className:"w-screen h-screen overflow-hidden",children:(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("div",{className:"absolute top-0 right-0 left-0 bottom-0 mx-auto",children:(0,n.jsx)("div",{className:"relative",children:g.map((e,o)=>{let l=f.filter((e,t)=>t%2==o%2);return e.map(e=>{let u=(e+o)%l.length,a=l[u];return(0,n.jsxs)("button",{type:"button",id:"hexagon-".concat(o,"-").concat(e),"data-row":o,"data-column":e,onClick:()=>{let e=s.indexOf(d),t=e+1===s.length?0:e+1,o=s[t];console.log(o),m(o)},onMouseLeave:()=>{[".level-1",".level-2",".level-3"].forEach(e=>{let t=document.querySelectorAll(e);t.forEach(t=>{t.classList.remove(e.replace(".",""))})})},onMouseOver:e=>{let t=parseInt(e.target.dataset.row,10),o=parseInt(e.target.dataset.column,10),n=t%2==0?0:-1,r=t%2==0?1:0,l=[{row:t-2,column:o},{row:t-1,column:o+n},{row:t-1,column:o+r},{row:t+1,column:o+n},{row:t+1,column:o+r},{row:t+2,column:o}].map(e=>{let{row:t,column:o}=e;return"hexagon-".concat(t,"-").concat(o)});l.forEach(e=>{var t;null===(t=document.getElementById(e))||void 0===t||t.classList.add("level-1")});let u=t%2?0:1,a=t%2?-1:0,c=[{row:t-4,column:o},{row:t-3,column:o+a},{row:t-3,column:o+u},{row:t-2,column:o+1},{row:t-2,column:o+-1},{row:t,column:o+-1},{row:t,column:o+1},{row:t+2,column:o+1},{row:t+2,column:o+-1},{row:t+3,column:o+a},{row:t+3,column:o+u},{row:t+4,column:o}].map(e=>{let{row:t,column:o}=e;return"hexagon-".concat(t,"-").concat(o)});c.forEach(e=>{var t;null===(t=document.getElementById(e))||void 0===t||t.classList.add("level-2")});let i=[{row:t-6,column:o},{row:t-5,column:o+a},{row:t-5,column:o+u},{row:t-4,column:o-1},{row:t-4,column:o+1},{row:t-3,column:o+a-1},{row:t-3,column:o+u+1},{row:t-1,column:o+a-1},{row:t-1,column:o+u+1},{row:t+1,column:o+a-1},{row:t+1,column:o+u+1},{row:t+3,column:o+a-1},{row:t+3,column:o+u+1},{row:t+4,column:o-1},{row:t+4,column:o+1},{row:t+5,column:o+a},{row:t+5,column:o+u},{row:t+6,column:o}].map(e=>{let{row:t,column:o}=e;return"hexagon-".concat(t,"-").concat(o)});i.forEach(e=>{var t;null===(t=document.getElementById(e))||void 0===t||t.classList.add("level-3")})},className:"relative",children:[(0,n.jsx)("div",{className:"".concat("true"===t?"flex":"project"," absolute w-full h-full items-center justify-center text-6xl"),children:(0,n.jsx)(c(),{id:a.name,href:a.url,target:"_blank",children:a.emoji})}),(0,n.jsx)(r,{})]},"hexagon-row-".concat(e))})})})})})})})};var m=d},1664:function(e,t,o){e.exports=o(5569)},1163:function(e,t,o){e.exports=o(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);