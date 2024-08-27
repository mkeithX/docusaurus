"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8901],{61132:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(24246);r(27378);var o=r(40624);function c({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_pnkT",r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(24246),o=r(27378),c=r(40624),a=r(75527),s=r(3620),l=r(44479),i=r(62821),u=r(52196),d=r(53589);function p(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}var f=r(29088);function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function j(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function h({className:e,block:t,selectedValue:r,selectValue:o,tabValues:s}){let l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),u=e=>{let t=e.currentTarget,n=s[l.indexOf(t)].value;n!==r&&(i(t),o(n))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=l.indexOf(e.currentTarget)+1;n=null!==(t=l[r])&&void 0!==t?t:l[0];break}case"ArrowLeft":{let t=l.indexOf(e.currentTarget)-1;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},e),children:s.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",j(y({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},o),{className:(0,c.Z)("tabs__item","tabItem_AQgk",null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function m({lazy:e,children:t,selectedValue:r}){let a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=a.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,c.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function O(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,c=function(e){let{values:t,children:r}=e;return(0,o.useMemo)(()=>{let e=null!=t?t:p(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[a,f]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:c})),[y,j]=function({queryString:e=!1,groupId:t}){let r=(0,s.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(n),(0,o.useCallback)(e=>{var t,o;if(!n)return;let c=new URLSearchParams(r.location.search);c.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),o=o={search:c.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[h,m]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),O=(()=>{let e=null!=y?y:h;return b({value:e,tabValues:c})?e:null})();return(0,l.Z)(()=>{O&&f(O)},[O]),{selectedValue:a,selectValue:(0,o.useCallback)(e=>{if(!b({value:e,tabValues:c}))throw Error(`Can't select invalid tab value=${e}`);f(e),j(e),m(e)},[j,m,c]),tabValues:c}}(e);return(0,n.jsxs)("div",{className:(0,c.Z)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(h,y({},t,e)),(0,n.jsx)(m,y({},t,e))]})}function g(e){let t=(0,f.Z)();return(0,n.jsx)(O,j(y({},e),{children:p(e.children)}),String(t))}},94544:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(24246);r(27378);var o=r(29088);function c({children:e,fallback:t}){return(0,o.Z)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},87048:(e,t,r)=>{r.d(t,{CW:()=>y,FS:()=>v,Fr:()=>j,Hc:()=>x,I1:()=>b,SR:()=>f,UM:()=>g,Zl:()=>m,mC:()=>d,mq:()=>O,rv:()=>w});var n=r(24246),o=r(27378),c=r(56953),a=r(92053),s=r(36712),l=r(41428),i=r(38112);let u=o.createContext(null);function d({children:e}){let[t,r]=(0,o.useState)(null),c=(0,o.useRef)(!0);return(0,o.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]),(0,o.useEffect)(()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then(e=>e.json()).then(e=>{if(!c.current)return;let t=Object.keys(e.versions).at(-1),n=e.time[t];r({name:t,time:n})})},[]),(0,n.jsx)(u.Provider,{value:t,children:e})}function p(){var e,t;let r=null===(e=(0,c.J)("default").preferredVersion)||void 0===e?void 0:e.name,n=(0,a.gB)("default"),o=(null!==(t=n.find(e=>"current"!==e.name))&&void 0!==t?t:n[0]).name;return r&&"current"!==r?r:o}function b(){let e=(0,o.useContext)(u);return e?(0,n.jsx)("span",{children:(0,n.jsx)(s.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:(0,n.jsx)("b",{children:e.name})},children:"Current: {canaryVersionName}"})}):(0,n.jsx)("span",{children:(0,n.jsx)(s.Z,{description:"An example canary version tag when the actual version can't be fetched.",children:"Example: 0.0.0-4922"})})}function f(){let e=p();return(0,n.jsx)("span",{children:e})}function y(){return(0,n.jsx)("span",{children:3})}function j(){return(0,n.jsx)("span",{children:2})}function h({branch:e}){return(0,n.jsx)(l.Z,{to:`https://github.com/facebook/docusaurus/tree/${e}`,children:(0,n.jsx)("code",{children:e})})}function m(){return(0,n.jsx)(h,{branch:"docusaurus-v2"})}function O(){return(0,n.jsx)(h,{branch:"main"})}function g({children:e}){return(0,o.useContext)(u)?null:e}function v({children:e}){return(0,o.useContext)(u)?e:null}function x(){var e,t;let r=null!==(t=null===(e=(0,o.useContext)(u))||void 0===e?void 0:e.name)&&void 0!==t?t:"0.0.0-4922",c=p();return(0,n.jsx)(i.Z,{language:"diff",children:`-  "@docusaurus/core": "^${c}",
-  "@docusaurus/preset-classic": "^${c}",
+  "@docusaurus/core": "${r}",
+  "@docusaurus/preset-classic": "${r}",
`})}function w(){var e;let t=null===(e=(0,o.useContext)(u))||void 0===e?void 0:e.time;return t?(0,n.jsx)(s.Z,{values:{time:(0,n.jsx)("b",{children:new Date(t).toLocaleString()})},children:"The latest canary version that's available on npm is published at {time}."}):null}},38112:(e,t,r)=>{r.d(t,{Z:()=>es});var n,o,c,a={};r.r(a),r.d(a,{ButtonExample:()=>D});var s=r(24246),l=r(27378),i=r(40624),u=r(29088),d=r(32711),p=r(36712),b=r(4423),f=r(94544),y=r(30691),j=r(78844),h=r(73919);function m(){let{prism:e}=(0,h.L)(),{colorMode:t}=(0,j.I)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var O=r(88941);function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function v({children:e}){return(0,s.jsx)("div",{className:(0,i.Z)("playgroundHeader_Tvsk"),children:e})}function x(){return(0,s.jsx)("div",{children:"Loading..."})}function w(){return(0,s.jsx)(f.Z,{fallback:(0,s.jsx)(x,{}),children:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(O.Z,{fallback:e=>(0,s.jsx)(y.Ac,g({},e)),children:(0,s.jsx)(d.i5,{})}),(0,s.jsx)(d.IF,{})]})})}function P(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{children:(0,s.jsx)(p.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,s.jsx)("div",{className:"playgroundPreview_mApW",children:(0,s.jsx)(w,{})})]})}function k(){let e=(0,u.Z)();return(0,s.jsx)(d.uz,{className:"playgroundEditor_TySg"},String(e))}function S(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{children:(0,s.jsx)(p.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,s.jsx)(k,{})]})}let E=e=>`${e};`;function C(e){var t,r,n,o,{children:c,transformCode:a}=e,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","transformCode"]);let{siteConfig:{themeConfig:i}}=(0,b.Z)(),{liveCodeBlock:{playgroundPosition:u}}=i,p=m(),f=null!==(o=null===(n=l.metastring)||void 0===n?void 0:n.includes("noInline"))&&void 0!==o&&o;return(0,s.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,s.jsx)(d.nu,(t=g({code:null==c?void 0:c.replace(/\n$/,""),noInline:f,transformCode:null!=a?a:E,theme:p},l),r=r={children:"top"===u?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(P,{}),(0,s.jsx)(S,{})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{}),(0,s.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))})}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function D(e){var t,r;return(0,s.jsx)("button",(t=B({type:"button"},e),r=r={style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let N=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({React:l},l,a);var Z=r(89583),T=r(6324),I=r.n(T);let L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),_=RegExp("\\{(?<range>[\\d,-]+)\\}"),A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},$=(n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},A),o=o={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n),R=Object.keys(A);function F(e,t){let r=e.map(e=>{let{start:r,end:n}=$[e];return`(?:${r}\\s*(${t.flatMap(e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)}).join("|")})\\s*${n})`}).join("|");return RegExp(`^\\s*(?:${r})\\s*$`)}function M(e){var t,r,{as:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["as"]);let c=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach(([e,n])=>{let o=t[e];o&&"string"==typeof n&&(r[o]=n)}),r}(m());return(0,s.jsx)(n,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={style:c,className:(0,i.Z)(o.className,"codeBlockContainer_jDV4",Z.k.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let V={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function H({children:e,className:t}){return(0,s.jsx)(M,{as:"pre",tabIndex:0,className:(0,i.Z)(V.codeBlockStandalone,"thin-scrollbar",t),children:(0,s.jsx)("code",{className:V.codeBlockLines,children:e})})}var q=r(51114);let W={attributes:!0,characterData:!0,childList:!0,subtree:!0};var U=r(26101);let z={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function G({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:o}){var c,a;1===e.length&&"\n"===e[0].content&&(e[0].content="");let l=n({line:e,className:(0,i.Z)(t,r&&z.codeLine)}),u=e.map((e,t)=>(0,s.jsx)("span",Y({},o({token:e})),t));return(0,s.jsxs)("span",(c=Y({},l),a=a={children:[r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:z.codeLineNumber}),(0,s.jsx)("span",{className:z.codeLineContent,children:u})]}):u,(0,s.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))}),c))}var Q=r(34370);function X(e){var t,r;return(0,s.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,s.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}function J(e){var t,r;return(0,s.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:t}){let[r,n]=(0,l.useState)(!1),o=(0,l.useRef)(void 0),c=(0,l.useCallback)(()=>{(0,Q.Z)(e),n(!0),o.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,l.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,s.jsx)("button",{type:"button","aria-label":r?(0,p.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",t,K.copyButton,r&&K.copyButtonCopied),onClick:c,children:(0,s.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,s.jsx)(X,{className:K.copyButtonIcon}),(0,s.jsx)(J,{className:K.copyButtonSuccessIcon})]})})}function et(e){var t,r;return(0,s.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,s.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let er={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function en({className:e,onClick:t,isEnabled:r}){let n=(0,p.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,s.jsx)("button",{type:"button",onClick:t,className:(0,i.Z)("clean-btn",e,r&&er.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,s.jsx)(et,{className:er.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo({children:e,className:t="",metastring:r,title:n,showLineNumbers:o,language:c}){var a,u,d,p;let{prism:{defaultLanguage:b,magicComments:f}}=(0,h.L)(),y=null==(u=null!==(a=null!=c?c:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==a?a:b)?void 0:u.toLowerCase(),j=m(),O=function(){let[e,t]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),o=(0,l.useRef)(null),c=(0,l.useCallback)(()=>{let r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t(e=>!e)},[o,e]),a=(0,l.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=o.current;n(e>t||o.current.querySelector("code").hasAttribute("style"))},[o]);return!function(e,t){let[r,n]=(0,l.useState)(),o=(0,l.useCallback)(()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,n]);(0,l.useEffect)(()=>{o()},[o]),function(e,t,r=W){let n=(0,q.zX)(t),o=(0,q.Ql)(r);(0,l.useEffect)(()=>{let t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()},[e,n,o])}(r,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(o,a),(0,l.useEffect)(()=>{a()},[e,a]),(0,l.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:c}}(),g=(null!==(p=null==r?void 0:null===(d=r.match(L))||void 0===d?void 0:d.groups.title)&&void 0!==p?p:"")||n,{lineClassNames:v,code:x}=function(e,t){let r=e.replace(/\n$/,""),{language:n,magicComments:o,metastring:c}=t;if(c&&_.test(c)){let e=c.match(_).groups.range;if(0===o.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=o[0].className;return{lineClassNames:Object.fromEntries(I()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:r}}if(void 0===n)return{lineClassNames:{},code:r};let a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return F(["js","jsBlock"],t);case"jsx":case"tsx":return F(["js","jsBlock","jsx"],t);case"html":return F(["js","jsBlock","html"],t);case"python":case"py":case"bash":return F(["bash"],t);case"markdown":case"md":return F(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return F(["tex"],t);case"lua":case"haskell":case"sql":return F(["lua"],t);case"wasm":return F(["wasm"],t);case"vb":case"vba":case"visual-basic":return F(["vb","rem"],t);case"vbnet":return F(["vbnet","rem"],t);case"batch":return F(["rem"],t);case"basic":return F(["rem","f90"],t);case"fsharp":return F(["js","ml"],t);case"ocaml":case"sml":return F(["ml"],t);case"fortran":return F(["f90"],t);case"cobol":return F(["cobol"],t);default:return F(R,t)}}(n,o),s=r.split("\n"),l=Object.fromEntries(o.map(e=>[e.className,{start:0,range:""}])),i=Object.fromEntries(o.filter(e=>e.line).map(({className:e,line:t})=>[t,e])),u=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.start,e])),d=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.end,e]));for(let e=0;e<s.length;){let t=s[e].match(a);if(!t){e+=1;continue}let r=t.slice(1).find(e=>void 0!==e);i[r]?l[i[r]].range+=`${e},`:u[r]?l[u[r]].start=e:d[r]&&(l[d[r]].range+=`${l[d[r]].start}-${e-1},`),s.splice(e,1)}r=s.join("\n");let p={};return Object.entries(l).forEach(([e,{range:t}])=>{I()(t).forEach(t=>{var r;null!==(r=p[t])&&void 0!==r||(p[t]=[]),p[t].push(e)})}),{lineClassNames:p,code:r}}(e,{metastring:r,language:y,magicComments:f}),w=null!=o?o:!!(null==r?void 0:r.includes("showLineNumbers"));return(0,s.jsxs)(M,{as:"div",className:(0,i.Z)(t,y&&!t.includes(`language-${y}`)&&`language-${y}`),children:[g&&(0,s.jsx)("div",{className:V.codeBlockTitle,children:g}),(0,s.jsxs)("div",{className:V.codeBlockContent,children:[(0,s.jsx)(U.y$,{theme:j,code:x,language:null!=y?y:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>(0,s.jsx)("pre",{tabIndex:0,ref:O.codeBlockRef,className:(0,i.Z)(e,V.codeBlock,"thin-scrollbar"),style:t,children:(0,s.jsx)("code",{className:(0,i.Z)(V.codeBlockLines,w&&V.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,s.jsx)(G,{line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:w},t))})})}),(0,s.jsxs)("div",{className:V.buttonGroup,children:[(O.isEnabled||O.isCodeScrollable)&&(0,s.jsx)(en,{className:V.codeButton,onClick:()=>O.toggle(),isEnabled:O.isEnabled}),(0,s.jsx)(ee,{className:V.codeButton,code:x})]})]})]})}function ec(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let ea=(c=function(e){var t,r,{children:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]);let c=(0,u.Z)(),a=l.Children.toArray(n).some(e=>(0,l.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n,i="string"==typeof a?eo:H;return(0,s.jsx)(i,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={children:a},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),String(c))},function(e){return e.live?(0,s.jsx)(C,ec({scope:N},e)):(0,s.jsx)(c,ec({},e))});function es(e){return(0,s.jsx)(ea,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))}},95272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(24246),o=r(71670),c=r(97555),a=r(61132),s=r(87048);let l={},i="Canary releases",u={id:"canary",title:"Canary releases",description:"Docusaurus has a canary releases system.",source:"@site/community/4-canary.mdx",sourceDirName:".",slug:"/canary",permalink:"/community/canary",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/community/4-canary.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1724747241e3,sidebarPosition:4,frontMatter:{},sidebar:"community",previous:{title:"Contributing",permalink:"/community/contributing"},next:{title:"Release process",permalink:"/community/release-process"}},d={},p=[{value:"Canary npm dist tag",id:"canary-npm-dist-tag",level:2},{value:"Using a canary release",id:"using-a-canary-release",level:2}];function b(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"canary-releases",children:"Canary releases"})}),"\n","\n",(0,n.jsxs)(s.mC,{children:[(0,n.jsx)(t.p,{children:"Docusaurus has a canary releases system."}),(0,n.jsxs)(t.p,{children:["It permits you to ",(0,n.jsx)(t.strong,{children:"test new unreleased features"})," as soon as the pull requests are merged on the ",(0,n.jsx)(t.a,{href:"/community/release-process#next-version",children:"next version"})," of Docusaurus."]}),(0,n.jsxs)(t.p,{children:["It is a good way to ",(0,n.jsx)(t.strong,{children:"give feedback to maintainers"}),", ensuring the newly implemented feature works as intended."]}),(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Using a canary release in production might seem risky, but in practice, it's not."}),(0,n.jsx)(t.p,{children:"A canary release passes all automated tests and is used in production by the Docusaurus site itself."})]}),(0,n.jsx)(s.UM,{children:(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The canary version shown below ",(0,n.jsx)(t.strong,{children:"may not be up-to-date"}),". Please go to the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm page"})," to find the actual version name."]})})}),(0,n.jsx)(s.FS,{children:(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The canary version shown below is directly fetched from npm and ",(0,n.jsx)(t.strong,{children:"is up-to-date"}),". You can directly use these numbers in your package.json."]})})}),(0,n.jsx)(t.h2,{id:"canary-npm-dist-tag",children:"Canary npm dist tag"}),(0,n.jsxs)(t.p,{children:["For any code-related commit on ",(0,n.jsx)(t.code,{children:"main"}),", the continuous integration will publish a canary release under the ",(0,n.jsx)(t.code,{children:"@canary"})," npm dist tag. It generally takes up to 10 minutes."]}),(0,n.jsxs)(t.p,{children:["You can see on ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"npm"})," the current dist tags:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"latest"}),": stable releases (Current: ",(0,n.jsx)(s.SR,{}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"canary"}),": canary releases (",(0,n.jsx)(s.I1,{}),")"]}),"\n"]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Make sure to use the latest canary release and check the publication date (sometimes the publish process fails). ",(0,n.jsx)(s.rv,{})]})}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Canary versions follow the naming convention ",(0,n.jsx)(t.code,{children:"0.0.0-commitNumber"}),"."]})}),(0,n.jsx)(t.h2,{id:"using-a-canary-release",children:"Using a canary release"}),(0,n.jsxs)(t.p,{children:["Take the latest version published under the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@docusaurus/core?activeTab=versions",children:"canary npm dist tag"})," (",(0,n.jsx)(s.I1,{}),")."]}),(0,n.jsxs)(t.p,{children:["Use it for all the ",(0,n.jsx)(t.code,{children:"@docusaurus/*"})," dependencies in your ",(0,n.jsx)(t.code,{children:"package.json"}),":"]}),(0,n.jsx)(s.Hc,{}),(0,n.jsx)(t.p,{children:"Then, install the dependencies again and start your site:"}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(a.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install\nnpm start\n"})})}),(0,n.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn install\nyarn start\n"})})}),(0,n.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm install\npnpm start\n"})})})]}),(0,n.jsxs)(t.p,{children:["You can also upgrade the ",(0,n.jsx)(t.code,{children:"@docusaurus/*"})," packages with command line:"]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(a.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,n.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add --exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})}),(0,n.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-exact @docusaurus/core@canary @docusaurus/preset-classic@canary\n"})})})]}),(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["Make sure to include all the ",(0,n.jsx)(t.code,{children:"@docusaurus/*"})," packages."]}),(0,n.jsxs)(t.p,{children:["For canary releases, prefer using an exact version instead of a semver range (avoid the ",(0,n.jsx)(t.code,{children:"^"})," prefix)."]})]})]})]})}function f(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}}}]);