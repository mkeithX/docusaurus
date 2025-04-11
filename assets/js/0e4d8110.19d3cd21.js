"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6940"],{72188:function(e,t,n){n.r(t),n.d(t,{frontMatter:()=>u,default:()=>f,contentTitle:()=>d,assets:()=>h,toc:()=>p,metadata:()=>r});var r=JSON.parse('{"id":"api/plugins/plugin-sitemap","title":"\uD83D\uDCE6 plugin-sitemap","description":"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately.","source":"@site/docs/api/plugins/plugin-sitemap.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-sitemap","permalink":"/docs/api/plugins/@docusaurus/plugin-sitemap","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-sitemap.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1744362344000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"slug":"/api/plugins/@docusaurus/plugin-sitemap"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-pwa","permalink":"/docs/api/plugins/@docusaurus/plugin-pwa"},"next":{"title":"\uD83D\uDCE6 plugin-vercel-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-vercel-analytics"}}'),s=n(85893),i=n(80980),l=n(15398),a=n(58636),o=n(32240),c=n(66359);let u={sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},d="\uD83D\uDCE6 plugin-sitemap",h={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>CreateSitemapItemsFn</code>",id:"CreateSitemapItemsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}];function m(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-plugin-sitemap",children:"\uD83D\uDCE6 plugin-sitemap"})}),"\n","\n",(0,s.jsx)(t.p,{children:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately."}),"\n",(0,s.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,s.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,s.jsx)(t.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(a.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-sitemap\n"})})}),(0,s.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-sitemap\n"})})}),(0,s.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-sitemap\n"})})}),(0,s.jsx)(a.Z,{value:"bun",label:"Bun",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bun add @docusaurus/plugin-sitemap\n"})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you use the preset ",(0,s.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,s.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(o.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lastmod"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'date' | 'datetime' | null"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"date"})," is YYYY-MM-DD. ",(0,s.jsx)(t.code,{children:"datetime"})," is a ISO 8601 datetime. ",(0,s.jsx)(t.code,{children:"null"})," is disabled. See ",(0,s.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"changefreq"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string | null"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'weekly'"})}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"priority"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number | null"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0.5"})}),(0,s.jsxs)(t.td,{children:["See ",(0,s.jsx)(t.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ignorePatterns"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string[]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[]"})}),(0,s.jsx)(t.td,{children:"A list of glob patterns; matching route paths will be filtered from the sitemap. Note that you may need to include the base URL in here."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filename"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sitemap.xml"})}),(0,s.jsx)(t.td,{children:"The path to the created sitemap file, relative to the output directory. Useful if you have two plugin instances outputting two files."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"createSitemapItems"})}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:[(0,s.jsx)(t.a,{href:"#CreateSitemapItemsFn",children:"CreateSitemapItemsFn"})," | undefined"]})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"undefined"})}),(0,s.jsx)(t.td,{children:"An optional function which can be used to transform and / or filter the items in the sitemap."})]})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,s.jsx)(t.h4,{id:"CreateSitemapItemsFn",children:(0,s.jsx)(t.code,{children:"CreateSitemapItemsFn"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"type CreateSitemapItemsFn = (params: {\n  siteConfig: DocusaurusConfig;\n  routes: RouteConfig[];\n  defaultCreateSitemapItems: CreateSitemapItemsFn;\n}) => Promise<SitemapItem[]>;\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"This plugin also respects some site config:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/api/docusaurus-config#noIndex",children:(0,s.jsx)(t.code,{children:"noIndex"})}),": results in no sitemap generated"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/api/docusaurus-config#trailingSlash",children:(0,s.jsx)(t.code,{children:"trailingSlash"})}),": determines if the URLs in the sitemap have trailing slashes"]}),"\n"]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["About ",(0,s.jsx)(t.code,{children:"lastmod"})]}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"lastmod"})," option will only output a sitemap ",(0,s.jsx)(t.code,{children:"<lastmod>"})," tag if plugins provide ",(0,s.jsx)(t.a,{href:"/docs/api/plugin-methods/lifecycle-apis#addRoute",children:"route metadata"})," attributes ",(0,s.jsx)(t.code,{children:"sourceFilePath"})," and/or ",(0,s.jsx)(t.code,{children:"lastUpdatedAt"}),"."]}),(0,s.jsxs)(t.p,{children:["All the official content plugins provide the metadata for routes backed by a content file (Markdown, MDX or React page components), but it is possible third-party plugin authors do not provide this information, and the plugin will not be able to output a ",(0,s.jsx)(t.code,{children:"<lastmod>"})," tag for their routes."]})]}),"\n",(0,s.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,s.jsx)(c.Z,{pluginName:"@docusaurus/plugin-sitemap",presetOptionName:"sitemap",code:"{\n  lastmod: 'date',\n  changefreq: 'weekly',\n  priority: 0.5,\n  ignorePatterns: ['/tags/**'],\n  filename: 'sitemap.xml',\n  createSitemapItems: async (params) => {\n    const {defaultCreateSitemapItems, ...rest} = params;\n    const items = await defaultCreateSitemapItems(rest);\n    return items.filter((item) => !item.url.includes('/page/'));\n  },\n}"}),"\n",(0,s.jsxs)(t.p,{children:["You can find your sitemap at ",(0,s.jsx)(t.code,{children:"/sitemap.xml"}),"."]})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},58636:function(e,t,n){n.d(t,{Z:()=>i});var r=n(85893);n(67294);var s=n(90496);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_pnkT",i),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>j});var r=n(85893),s=n(67294),i=n(90496),l=n(54947),a=n(3620),o=n(844),c=n(97486),u=n(32263),d=n(16971);function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n(71607);function f(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==s&&(u(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...l,className:(0,i.Z)("tabs__item","tabItem_AQgk",l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function g(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}),r=(0,u.lx)(e,(e,t)=>e.value===t.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,n])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[f,g]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[x,j]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,i]=(0,d.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),b=(()=>{let e=f??x;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{b&&m(b)},[b]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),j(e)},[g,j,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(f,{...t,...e}),(0,r.jsx)(g,{...t,...e})]})}function j(e){let t=(0,m.Z)();return(0,r.jsx)(x,{...e,children:h(e.children)},String(t))}},56497:function(e,t,n){n.d(t,{Z:()=>i});var r=n(85893);n(67294);var s=n(71607);function i(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},32240:function(e,t,n){n.d(t,{Z:()=>o});var r=n(85893),s=n(67294),i=n(96700),l=n(3620);let a=s.forwardRef(function(e,t){let{name:n,children:a}=e,o=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(a),c=n?`${n}-${o}`:o,u=`#${c}`,d=(0,l.k6)();return(0,i.Z)().collectAnchor(c),(0,r.jsx)("tr",{id:c,tabIndex:0,ref:d.location.hash===u?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&d.push(u)},onKeyDown:e=>{"Enter"===e.key&&d.push(u)},children:a.props.children})});function o(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[i,l]=s.Children.toArray(t.props.children),o=(0,s.useRef)(null);(0,s.useEffect)(()=>{o.current?.focus()},[o]);let c=s.Children.map(l.props.children,e=>(0,r.jsx)(a,{name:n,ref:o,children:e}));return(0,r.jsxs)("table",{className:"apiTable_e8hp",children:[i,(0,r.jsx)("tbody",{children:c})]})}},66359:function(e,t,n){n.d(t,{Z:()=>d});var r=n(85893);n(67294);var s=n(35363),i=n(90158),l=n(77827),a=n(15398),o=n(58636),c=n(27817);let u=void 0;function d(e){let{code:t,pluginName:n,presetOptionName:d}=e,h=(0,i.zu)(u).path;return(0,r.jsxs)(a.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(o.Z,{value:"preset",label:(0,l.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(s.Z,{to:`${h}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(l.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${d}: ${t.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,r.jsxs)(o.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(l.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${n}',
      // highlight-start
      ${t.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},27817:function(e,t,n){n.d(t,{Z:()=>ef});var r={};n.r(r),n.d(r,{ButtonExample:()=>ed});var s=n(85893),i=n(67294),l=n(71607),a=n(90496),o=n(45245),c=n(26378);function u(){let{prism:e}=(0,c.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var d=n(55951),h=n(6324),p=n.n(h),m=n(50923);let f=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,x={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},j={...x,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},b=Object.keys(x);function v(e,t){let n=e.map(e=>{let{start:n,end:r}=j[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let y=(0,i.createContext)(null);function w(e){let{metadata:t,wordWrap:n,children:r}=e,l=(0,i.useMemo)(()=>({metadata:t,wordWrap:n}),[t,n]);return(0,s.jsx)(y.Provider,{value:l,children:r})}function k(){let e=(0,i.useContext)(y);if(null===e)throw new m.i6("CodeBlockContextProvider");return e}function N(e){let{as:t,...n}=e,r=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,i=t[r];i&&"string"==typeof s&&(n[i]=s)}),n}(u());return(0,s.jsx)(t,{...n,style:r,className:(0,a.Z)(n.className,"codeBlockContainer_jDV4",d.k.common.codeBlock)})}let C={codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q"};function B(e){let{children:t,className:n}=e;return(0,s.jsx)(N,{as:"pre",tabIndex:0,className:(0,a.Z)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,s.jsx)("code",{className:C.codeBlockLines,children:t})})}let I={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e){let{children:t}=e;return t}var Z=n(7316);function S(e){let{line:t,token:n,...r}=e;return(0,s.jsx)("span",{...r})}let T={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function E(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:i,getTokenProps:l}=e,o=function(e){let t=1===e.length&&"\n"===e[0].content?e[0]:void 0;return t?[{...t,content:""}]:e}(t),c=i({line:o,className:(0,a.Z)(n,r&&T.codeLine)}),u=o.map((e,t)=>{let n=l({token:e});return(0,s.jsx)(S,{...n,line:o,token:e,children:n.children},t)});return(0,s.jsxs)("span",{...c,children:[r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:T.codeLineNumber}),(0,s.jsx)("span",{className:T.codeLineContent,children:u})]}):u,(0,s.jsx)("br",{})]})}let _=i.forwardRef((e,t)=>(0,s.jsx)("pre",{ref:t,tabIndex:0,...e,className:(0,a.Z)(e.className,C.codeBlock,"thin-scrollbar")}));function A(e){let{metadata:t}=k();return(0,s.jsx)("code",{...e,className:(0,a.Z)(e.className,C.codeBlockLines,void 0!==t.lineNumbersStart&&C.codeBlockLinesWithNumbering),style:{...e.style,counterReset:void 0===t.lineNumbersStart?void 0:`line-count ${t.lineNumbersStart-1}`}})}function $(e){let{className:t}=e,{metadata:n,wordWrap:r}=k(),i=u(),{code:l,language:o,lineNumbersStart:c,lineClassNames:d}=n;return(0,s.jsx)(Z.y$,{theme:i,code:l,language:o,children:e=>{let{className:n,style:i,tokens:l,getLineProps:o,getTokenProps:u}=e;return(0,s.jsx)(_,{ref:r.codeBlockRef,className:(0,a.Z)(t,n),style:i,children:(0,s.jsx)(A,{children:l.map((e,t)=>(0,s.jsx)(E,{line:e,getLineProps:o,getTokenProps:u,classNames:d[t],showLineNumbers:void 0!==c},t))})})}})}var D=n(56497),F=n(44771),M=n(77827);function R(e){let{className:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,a.Z)("clean-btn",t)})}function O(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function P(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let W={copyButtonCopied:"copyButtonCopied_wDuR",copyButtonIcons:"copyButtonIcons_gMWc",copyButtonIcon:"copyButtonIcon_GXfb",copyButtonSuccessIcon:"copyButtonSuccessIcon_ktUX"};function V(e){let{className:t}=e,{copyCode:n,isCopied:r}=function(){let{metadata:{code:e}}=k(),[t,n]=(0,i.useState)(!1),r=(0,i.useRef)(void 0),s=(0,i.useCallback)(()=>{(0,F.Z)(e),n(!0),r.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,i.useEffect)(()=>()=>window.clearTimeout(r.current),[]),{copyCode:s,isCopied:t}}();return(0,s.jsx)(R,{"aria-label":r?(0,M.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)(t,W.copyButton,r&&W.copyButtonCopied),onClick:n,children:(0,s.jsxs)("span",{className:W.copyButtonIcons,"aria-hidden":"true",children:[(0,s.jsx)(O,{className:W.copyButtonIcon}),(0,s.jsx)(P,{className:W.copyButtonSuccessIcon})]})})}function q(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let H={wordWrapButtonIcon:"wordWrapButtonIcon___5r",wordWrapButtonEnabled:"wordWrapButtonEnabled_nam_"};function U(e){let{className:t}=e,{wordWrap:n}=k();if(!(n.isEnabled||n.isCodeScrollable))return!1;let r=(0,M.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,s.jsx)(R,{onClick:()=>n.toggle(),className:(0,a.Z)(t,n.isEnabled&&H.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,s.jsx)(q,{className:H.wordWrapButtonIcon,"aria-hidden":"true"})})}function Y(e){let{className:t}=e;return(0,s.jsx)(D.Z,{children:()=>(0,s.jsxs)("div",{className:(0,a.Z)(t,"buttonGroup_KXnS"),children:[(0,s.jsx)(U,{}),(0,s.jsx)(V,{})]})})}let z={codeBlockContent:"codeBlockContent_cKMj",codeBlockTitle:"codeBlockTitle_U6Q0"};function X(e){let{className:t}=e,{metadata:n}=k();return(0,s.jsxs)(N,{as:"div",className:(0,a.Z)(t,n.className),children:[n.title&&(0,s.jsx)("div",{className:z.codeBlockTitle,children:(0,s.jsx)(L,{children:n.title})}),(0,s.jsxs)("div",{className:z.codeBlockContent,children:[(0,s.jsx)($,{}),(0,s.jsx)(Y,{})]})]})}function J(e){let t=function(e){let{prism:t}=(0,c.L)();return function(e){var t,n,r;let s=(n=(t={language:e.language,defaultLanguage:e.defaultLanguage,className:e.className}).language??function(e){if(!e)return;let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(t.className)??t.defaultLanguage,n?.toLowerCase()??"text"),{lineClassNames:i,code:l}=function(e,t){let n=e.replace(/\r?\n$/,"");return function(e,t){let{metastring:n,magicComments:r}=t;if(n&&g.test(n)){let t=n.match(g).groups.range;if(0===r.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${n}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let s=r[0].className;return{lineClassNames:Object.fromEntries(p()(t).filter(e=>e>0).map(e=>[e-1,[s]])),code:e}}return null}(n,{...t})??function(e,t){let{language:n,magicComments:r}=t;if(void 0===n)return{lineClassNames:{},code:e};let s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return v(["tex"],t);case"lua":case"haskell":return v(["lua"],t);case"sql":return v(["lua","jsBlock"],t);case"wasm":return v(["wasm"],t);case"vb":case"vba":case"visual-basic":return v(["vb","rem"],t);case"vbnet":return v(["vbnet","rem"],t);case"batch":return v(["rem"],t);case"basic":return v(["rem","f90"],t);case"fsharp":return v(["js","ml"],t);case"ocaml":case"sml":return v(["ml"],t);case"fortran":return v(["f90"],t);case"cobol":return v(["cobol"],t);default:return v(b,t)}}(n,r),i=e.split(/\r?\n/),l=Object.fromEntries(r.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(r.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),o=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),c=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<i.length;){let t=i[e].match(s);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);a[n]?l[a[n]].range+=`${e},`:o[n]?l[o[n]].start=e:c[n]&&(l[c[n]].range+=`${l[c[n]].start}-${e-1},`),i.splice(e,1)}let u={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;p()(n).forEach(e=>{u[e]??=[],u[e].push(t)})}),{code:i.join("\n"),lineClassNames:u}}(n,{...t})}(e.code,{metastring:e.metastring,magicComments:e.magicComments,language:s}),o=function(e){let{className:t,language:n}=e;return(0,a.Z)(t,n&&!t?.includes(`language-${n}`)&&`language-${n}`)}({className:e.className,language:s}),c=(r=e.metastring,(r?.match(f)?.groups.title??"")||e.title),u=function(e){let{showLineNumbers:t,metastring:n}=e;if("boolean"==typeof t)return t?1:void 0;if("number"==typeof t)return t;let r=n?.split(" ").find(e=>e.startsWith("showLineNumbers"));if(r)return r.startsWith("showLineNumbers=")?parseInt(r.replace("showLineNumbers=",""),10):1}({showLineNumbers:e.showLineNumbers,metastring:e.metastring});return{codeInput:e.code,code:l,className:o,language:s,title:c,lineNumbersStart:u,lineClassNames:i}}({code:e.children,className:e.className,metastring:e.metastring,magicComments:t.magicComments,defaultLanguage:t.defaultLanguage,language:e.language,title:e.title,showLineNumbers:e.showLineNumbers})}(e),n=function(){let[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),s=(0,i.useRef)(null),l=(0,i.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),a=(0,i.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;r(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]),[o,c]=(0,i.useState)(),u=(0,i.useCallback)(()=>{c(s.current?.closest("[role=tabpanel][hidden]"))},[s,c]);return(0,i.useEffect)(()=>{u()},[u]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I,r=(0,m.zX)(t),s=(0,m.Ql)(n);(0,i.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()},[e,r,s])}(o,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(a(),u())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1}),(0,i.useEffect)(()=>{a()},[e,a]),(0,i.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:l}}();return(0,s.jsx)(w,{metadata:t,wordWrap:n,children:(0,s.jsx)(X,{})})}function Q(e){let{children:t,...n}=e,r=(0,l.Z)(),a=i.Children.toArray(t).some(e=>(0,i.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,s.jsx)("string"==typeof a?J:B,{...n,children:a},String(r))}var K=n(10075);let G=e=>`${e};`;function ee(e){let{code:t,children:n,...r}=e,i=u(),l=r.metastring?.includes("noInline")??!1;return(0,s.jsx)(K.nu,{noInline:l,theme:i,...r,code:t?.replace(/\n$/,""),transformCode:r.transformCode??G,children:n})}function et(e){let{children:t}=e;return(0,s.jsx)("div",{className:"playgroundContainer_TDLX",children:t})}var en=n(85108),er=n(67490);function es(e){let{children:t}=e;return(0,s.jsx)("div",{className:(0,a.Z)("playgroundHeader_h_Hu"),children:t})}function ei(){return(0,s.jsx)("div",{children:"Loading..."})}function el(){return(0,s.jsx)(D.Z,{fallback:(0,s.jsx)(ei,{}),children:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(er.Z,{fallback:e=>(0,s.jsx)(en.Ac,{...e}),children:(0,s.jsx)(K.i5,{})}),(0,s.jsx)(K.IF,{})]})})}function ea(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(es,{children:(0,s.jsx)(M.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,s.jsx)("div",{className:"playgroundPreview_u2xE",children:(0,s.jsx)(el,{})})]})}function eo(){let e=(0,l.Z)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(es,{children:(0,s.jsx)(M.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,s.jsx)(K.uz,{className:"playgroundEditor_uqZ4"},String(e))]})}function ec(){let{playgroundPosition:e}=(0,c.L)().liveCodeBlock;return(0,s.jsx)(s.Fragment,{children:"top"===e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ea,{}),(0,s.jsx)(eo,{})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(eo,{}),(0,s.jsx)(ea,{})]})})}function eu(e){let{children:t,transformCode:n,...r}=e;return(0,s.jsx)(et,{children:(0,s.jsx)(ee,{code:t,...r,children:(0,s.jsx)(ec,{})})})}function ed(e){return(0,s.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let eh={React:i,...i,...r};function ep(e){return(0,s.jsx)(eu,{scope:eh,...e})}function em(e){return e.live?(0,s.jsx)(ep,{...e}):(0,s.jsx)(Q,{...e})}function ef(e){return(0,s.jsx)(em,{...e})}}}]);