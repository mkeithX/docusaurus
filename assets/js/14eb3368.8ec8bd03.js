"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["81983"],{20012:function(e,t,n){n.d(t,{Z:()=>v});var s=n(85893);n(67294);var r=n(90496),i=n(55951),a=n(85921),l=n(71208),c=n(35363),o=n(77827),d=n(83631);function u(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function h(){let e=(0,d.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(c.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(u,{className:"breadcrumbHomeIcon_uaSn"})})})}var m=n(53327),x=n(8156);function b(e){let t=function(e){let{breadcrumbs:t}=e,{siteConfig:n}=(0,x.Z)();return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:t.filter(e=>e.href).map((e,t)=>({"@type":"ListItem",position:t+1,name:e.label,item:`${n.url}${e.href}`}))}}({breadcrumbs:e.breadcrumbs});return(0,s.jsx)(m.Z,{children:(0,s.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}let p={breadcrumbsContainer:"breadcrumbsContainer_Wvrh"};function f(e){let{children:t,href:n,isLast:r}=e,i="breadcrumbs__link";return r?(0,s.jsx)("span",{className:i,children:t}):n?(0,s.jsx)(c.Z,{className:i,href:n,children:(0,s.jsx)("span",{children:t})}):(0,s.jsx)("span",{className:i,children:t})}function g(e){let{children:t,active:n}=e;return(0,s.jsx)("li",{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:t})}function v(){let e=(0,a.s1)(),t=(0,l.Ns)();return e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{breadcrumbs:e}),(0,s.jsx)("nav",{className:(0,r.Z)(i.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",children:[t&&(0,s.jsx)(h,{}),e.map((t,n)=>{let r=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(g,{active:r,children:(0,s.jsx)(f,{href:i,isLast:r,children:t.label})},n)})]})})]}):null}},86762:function(e,t,n){n.d(t,{Z:()=>v});var s=n(85893);n(67294);var r=n(90496),i=n(85921),a=n(35363),l=n(11660),c=n(82095),o=n(77827),d=n(57922);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){let{className:t,href:n,children:i}=e;return(0,s.jsx)(a.Z,{href:n,className:(0,r.Z)("card padding--lg",u.cardContainer,t),children:i})}function m(e){let{className:t,href:n,icon:i,title:a,description:l}=e;return(0,s.jsxs)(h,{href:n,className:t,children:[(0,s.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:a,children:[i," ",a]}),l&&(0,s.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:l,children:l})]})}function x(e){let{item:t}=e,n=(0,i.LM)(t),r=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,s.jsx)(m,{className:t.className,href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,i.xz)(t.docId??void 0);return(0,s.jsx)(m,{className:t.className,href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(b,{item:t});case"category":return(0,s.jsx)(x,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e,n=(0,i.Ok)();return(0,s.jsx)(v,{items:n,className:t})}function g(e){let{item:t}=e;return(0,s.jsx)("article",{className:(0,r.Z)("docCardListItem_hvcp","col col--6"),children:(0,s.jsx)(p,{item:t})})}function v(e){let{items:t,className:n}=e;if(!t)return(0,s.jsx)(f,{...e});let a=(0,i.MN)(t);return(0,s.jsx)("section",{className:(0,r.Z)("row",n),children:a.map((e,t)=>(0,s.jsx)(g,{item:e},t))})}},62742:function(e,t,n){n.d(t,{Z:()=>l});var s=n(85893);n(67294);var r=n(90496),i=n(77827),a=n(65773);function l(e){let{className:t,previous:n,next:l}=e;return(0,s.jsxs)("nav",{className:(0,r.Z)(t,"pagination-nav"),"aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,s.jsx)(a.Z,{...n,subLabel:(0,s.jsx)(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),l&&(0,s.jsx)(a.Z,{...l,subLabel:(0,s.jsx)(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4903:function(e,t,n){n.d(t,{Z:()=>c});var s=n(85893);n(67294);var r=n(90496),i=n(77827),a=n(55951),l=n(50223);function c(e){let{className:t}=e,n=(0,l.E)();return n.badge?(0,s.jsx)("span",{className:(0,r.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},18219:function(e,t,n){n.d(t,{Z:()=>p});var s=n(85893);n(67294);var r=n(90496),i=n(8156),a=n(35363),l=n(77827),c=n(90158),o=n(55951),d=n(99887),u=n(50223);let h={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){let t=h[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:r}=e;return(0,s.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(a.Z,{to:n,onClick:r,children:(0,s.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:a}}=(0,i.Z)(),{pluginId:l}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(l),{latestDocSuggestion:h,latestVersionSuggestion:b}=(0,c.Jo)(l),p=h??b.docs.find(e=>e.id===b.mainDocId);return(0,s.jsxs)("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(m,{siteTitle:a,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(x,{versionLabel:b.label,to:p.path,onClick:()=>u(b.name)})})]})}function p(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,s.jsx)(b,{className:t,versionMetadata:n}):null}},65773:function(e,t,n){n.d(t,{Z:()=>a});var s=n(85893);n(67294);var r=n(90496),i=n(35363);function a(e){let{permalink:t,title:n,subLabel:a,isNext:l}=e;return(0,s.jsxs)(i.Z,{className:(0,r.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}},11660:function(e,t,n){n.d(t,{c:()=>c});var s=n(67294),r=n(8156);let i=["zero","one","two","few","many","other"];function a(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,s.useMemo)(()=>{try{let t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let r=n.select(t);return s[Math.min(n.pluralForms.indexOf(r),s.length-1)]})(n,t,e)}}},67162:function(e,t,n){n.r(t),n.d(t,{default:()=>j});var s=n(85893);n(67294);var r=n(85921),i=n(35363),a=n(77827),l=n(57335),c=n(83631),o=n(86762),d=n(62742),u=n(18219),h=n(4903),m=n(20012),x=n(57922);let b={generatedIndexPage:"generatedIndexPage_hs4p",title:"title_tRie"};function p(e){let{categoryGeneratedIndex:t}=e;return(0,s.jsx)(l.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,c.ZP)(t.image)})}function f(e){let{categoryGeneratedIndex:t}=e,n=(0,r.jA)();return(0,s.jsxs)("div",{className:b.generatedIndexPage,children:[(0,s.jsx)(u.Z,{}),(0,s.jsx)(m.Z,{}),(0,s.jsx)(h.Z,{}),(0,s.jsxs)("header",{children:[(0,s.jsx)(x.Z,{as:"h1",className:b.title,children:t.title}),t.description&&(0,s.jsx)("p",{children:t.description})]}),(0,s.jsx)("article",{className:"margin-top--lg",children:(0,s.jsx)(o.Z,{items:n.items,className:b.list})}),(0,s.jsx)("footer",{className:"margin-top--md",children:(0,s.jsx)(d.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{...e}),(0,s.jsx)(f,{...e})]})}function v(){let e=(0,r.vY)("guides/docs/sidebar/items",void 0)?.path;return(0,s.jsx)("p",{className:"footerTip_UBUV",children:(0,s.jsx)(a.Z,{values:{guideLink:(0,s.jsx)(i.Z,{to:`${e}#category-link`,children:(0,s.jsx)(a.Z,{children:"the generated index page guide"})})},children:"Want to implement the same page? Read {guideLink} to find out!"})})}function j(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{...e}),(0,s.jsx)(v,{})]})}}}]);