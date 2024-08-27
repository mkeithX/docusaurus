"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96677],{70072:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(24246),t=o(71670);let r={mdx:{format:"md"},date:"2019-11-04T20:00"},i="2.0.0-alpha.32",a={permalink:"/changelog/2.0.0-alpha.32",source:"@site/changelog/source/2.0.0-alpha.32.md",title:"2.0.0-alpha.32",description:"Features",date:"2019-11-04T20:00:00.000Z",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{mdx:{format:"md"},date:"2019-11-04T20:00"},unlisted:!1,prevItem:{title:"2.0.0-alpha.33",permalink:"/changelog/2.0.0-alpha.33"},nextItem:{title:"2.0.0-alpha.31",permalink:"/changelog/2.0.0-alpha.31"},listPageLink:"/changelog/page/5"},c={authorsImageUrls:[]},l=[{value:"Features",id:"features",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Performance Improvement",id:"performance-improvement",level:2},{value:"Others",id:"others",level:2}];function d(e){let s={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Add ",(0,n.jsx)(s.code,{children:"<Redirect>"})," component for client side redirect. Example Usage:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"import React from 'react';\nimport {Redirect} from '@docusaurus/router';\n\nfunction Home() {\n  return <Redirect to=\"/docs/test\" />;\n}\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Allow user to add custom HTML to footer items. ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/1905",children:"#1905"})]}),"\n",(0,n.jsxs)(s.li,{children:["Added code block line highlighting feature (thanks @lex111)! If you have previously swizzled the ",(0,n.jsx)(s.code,{children:"CodeBlock"})," theme component, it is recommended to update your source code to have this feature. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1860",children:"#1860"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Fix ",(0,n.jsx)(s.code,{children:"@theme/Tabs"})," component to be able to create tabs with only one item."]}),"\n",(0,n.jsxs)(s.li,{children:["Fix MDX ",(0,n.jsx)(s.code,{children:"@theme/Heading"})," component. If there is no id, it should not create anchor link."]}),"\n",(0,n.jsxs)(s.li,{children:["Fixed a bug in which if ",(0,n.jsx)(s.code,{children:"themeConfig.algolia"})," is not defined, the custom searchbar won't appear. If you've swizzled Algolia ",(0,n.jsx)(s.code,{children:"SearchBar"})," component before, please update your source code otherwise CSS might break. See ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/1909/files",children:"#1909"})," for reference."]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:'- <Fragment>\n+ <div className="navbar__search" key="search-box">\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Slightly adjust search icon position to be more aligned on small width device. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1893",children:"#1893"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Fix algolia styling bug, previously search suggestion result is sometimes hidden. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1915",children:"#1915"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Changed the way we read the ",(0,n.jsx)(s.code,{children:"USE_SSH"})," env variable during deployment to be the same as in v1."]}),"\n",(0,n.jsxs)(s.li,{children:["Fix accessing ",(0,n.jsx)(s.code,{children:"docs/"})," or ",(0,n.jsx)(s.code,{children:"/docs/xxxx"})," that does not match any existing doc page should return 404 (Not found) page, not blank page. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1903",children:"#1903"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Prioritize ",(0,n.jsx)(s.code,{children:"@docusaurus/core"})," dependencies/ node_modules over user's node_modules. This fix a bug whereby if user has core-js@3 on its own node_modules but docusaurus depends on core-js@2, we previously encounter ",(0,n.jsx)(s.code,{children:"Module not found: core-js/modules/xxxx"})," (because core-js@3 doesn't have that)."]}),"\n",(0,n.jsxs)(s.li,{children:["Fix a bug where docs plugin add ",(0,n.jsx)(s.code,{children:"/docs"})," route even if docs folder is empty. We also improved docs plugin test coverage to 100% for stability before working on docs versioning. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1912",children:"#1912"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"performance-improvement",children:"Performance Improvement"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Reduce memory usage consumption. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1900",children:"#1900"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Significantly reduce main bundle size and initial HTML payload on production build. Generated files from webpack is also shorter in name. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1898",children:"#1898"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Simplify blog metadata. Previously, accessing ",(0,n.jsx)(s.code,{children:"/blog/post-xxx"})," will request for next and prev blog post metadata too aside from target post metadata. We should only request target post metadata. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1908",children:"#1908"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"others",children:"Others"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Convert sitemap plugin to TypeScript. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1894",children:"#1894"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["Refactor dark mode toggle into a hook. (",(0,n.jsx)(s.a,{href:"https://github.com/facebook/Docusaurus/issues/1899",children:"#1899"}),")"]}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},71670:(e,s,o)=>{o.d(s,{Z:()=>a,a:()=>i});var n=o(27378);let t={},r=n.createContext(t);function i(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);