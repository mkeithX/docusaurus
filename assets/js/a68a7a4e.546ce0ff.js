"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80776],{30675:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var n=t(24246),o=t(71670);let a={title:"Towards Docusaurus 2",authors:"endiliey",tags:["new","adoption"]},r=void 0,i={permalink:"/blog/2018/09/11/Towards-Docusaurus-2",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2018/09-11-Towards-Docusaurus-2.mdx",source:"@site/blog/2018/09-11-Towards-Docusaurus-2.mdx",title:"Towards Docusaurus 2",description:"Docusaurus was officially announced over nine months ago as a way to easily build open source documentation websites. Since then, it has amassed over 8,600 GitHub Stars, and is used by many popular open source projects such as React Native, Babel, Jest, Reason and Prettier.",date:"2018-09-11T00:00:00.000Z",tags:[{inline:!1,label:"New",permalink:"/blog/tags/new"},{inline:!1,label:"Adoption",permalink:"/blog/tags/adoption"}],readingTime:9.25,hasTruncateMarker:!0,authors:[{name:"Endilie Yacop Sucipto",title:"Maintainer of Docusaurus",url:"https://github.com/endiliey",imageURL:"https://github.com/endiliey.png",key:"endiliey",page:null}],frontMatter:{title:"Towards Docusaurus 2",authors:"endiliey",tags:["new","adoption"]},unlisted:!1,lastUpdatedAt:1724747241e3,lastUpdatedBy:"dependabot[bot]",prevItem:{title:"Happy 1st Birthday Slash!",permalink:"/blog/2018/12/14/Happy-First-Birthday-Slash"},nextItem:{title:"How I Converted Profilo to Docusaurus in Under 2 Hours",permalink:"/blog/2018/04/30/How-I-Converted-Profilo-To-Docusaurus"}},l={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"Infrastructure",id:"infrastructure",level:2},{value:"Content",id:"content",level:3},{value:"Versioning",id:"versioning",level:3},{value:"Translation",id:"translation",level:3},{value:"Customizability",id:"customizability",level:2},{value:"Layout",id:"layout",level:3},{value:"Markdown",id:"markdown",level:3},{value:"Search",id:"search",level:3},{value:"Stability",id:"stability",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Will there be any breaking changes?",id:"will-there-be-any-breaking-changes",level:3},{value:"When is the release of Docusaurus 2?",id:"when-is-the-release-of-docusaurus-2",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2}];function u(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Docusaurus was ",(0,n.jsx)(s.a,{href:"https://v1.docusaurus.io/blog/2017/12/14/introducing-docusaurus",children:"officially announced"})," over nine months ago as a way to easily build open source documentation websites. Since then, it has amassed over 8,600 GitHub Stars, and is used by many popular open source projects such as ",(0,n.jsx)(s.a,{href:"https://facebook.github.io/react-native/",children:"React Native"}),", ",(0,n.jsx)(s.a,{href:"https://babeljs.io/",children:"Babel"}),", ",(0,n.jsx)(s.a,{href:"https://jestjs.io/",children:"Jest"}),", ",(0,n.jsx)(s.a,{href:"https://reasonml.github.io/",children:"Reason"})," and ",(0,n.jsx)(s.a,{href:"https://prettier.io/",children:"Prettier"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"There is a saying that the very best software is constantly evolving, and the very worst is not. In case you are not aware, we have been planning and working on the next version of Docusaurus \u{1F389}."}),"\n",(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(s.p,{children:["It all started with this ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/789",children:"RFC issue"})," opened by ",(0,n.jsx)(s.a,{href:"https://github.com/yangshun",children:"Yangshun"})," towards the end of June 2018."]}),"\n",(0,n.jsxs)("blockquote",{children:[(0,n.jsx)("h4",{children:(0,n.jsx)("a",{href:"https://github.com/facebook/docusaurus/issues/789",children:"[RFC] Docusaurus v2 \xb7 Issue #789 \xb7 facebook/docusaurus"})}),(0,n.jsx)(s.p,{children:"These are some of the problems I'm seeing in Docusaurus now and also how we can\naddress them in v2. A number of the ideas here were inspired by VuePress and other\nstatic site generators. In the current static site generators ecosystem, t..."})]}),"\n",(0,n.jsx)(s.p,{children:"Most of the suggested improvements are mentioned in the issue; I will provide details on some of issues in Docusaurus 1 and how we are going to address them in Docusaurus 2."}),"\n",(0,n.jsx)(s.h2,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,n.jsx)(s.h3,{id:"content",children:"Content"}),"\n",(0,n.jsxs)(s.p,{children:["A Docusaurus 1 website is, in fact, built into a bunch of static HTML pages. Despite using React, we were not fully utilizing the features React offered, such as component state, which allows for dynamic and interactive pages. React was only used as a templating engine for static content and interactivity has to be added through script tags and ",(0,n.jsx)(s.code,{children:"dangerouslySetInnerHTML"})," \u{1F631}."]}),"\n",(0,n.jsx)(s.p,{children:"In addition, there is not an easy way to change how Docusaurus loads content. For example, adding CSS preprocessors such as Sass and Less was not supported natively and involved many user hacks of adding custom scripts."}),"\n",(0,n.jsxs)(s.p,{children:["For Docusaurus 2, we will be using ",(0,n.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," as a module bundler and we are changing the way we serve content. Adding CSS preprocessors will be as easy as adding a webpack loader. Instead of a pure static HTML, ",(0,n.jsx)(s.strong,{children:"during build time we will create a server-rendered version of the app"})," and render the corresponding HTML. A Docusaurus site will be essentially an isomorphic/universal application. This approach is heavily inspired by ",(0,n.jsx)(s.a,{href:"https://github.com/gatsbyjs/gatsby",children:"Gatsby"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"versioning",children:"Versioning"}),"\n",(0,n.jsxs)(s.p,{children:["If you have been using Docusaurus for a while, you might notice that Docusaurus creates versioned docs ",(0,n.jsx)(s.strong,{children:"if and only if"})," the docs content are ",(0,n.jsx)(s.strong,{children:"different"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, if we have ",(0,n.jsx)(s.code,{children:"docs/hello.md"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"---\nid: hello\ntitle: hello\n---\nHello world !\n"})}),"\n",(0,n.jsxs)(s.p,{children:["And ",(0,n.jsx)(s.strong,{children:"we cut version 1.0.0,"})," Docusaurus will create ",(0,n.jsx)(s.code,{children:"versioned_docs/version-1.0.0/hello.md"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"---\nid: version-1.0.0-hello\ntitle: hello\noriginal_id: hello\n---\nHello world !\n"})}),"\n",(0,n.jsxs)(s.p,{children:["However, if there are no changes to ",(0,n.jsx)(s.code,{children:"hello.md"})," when cutting v2.0.0, Docusaurus will not create any versioned docs for that document. In other words, ",(0,n.jsx)(s.code,{children:"versioned_docs/version-2.0.0/hello.md"})," will not exist."]}),"\n",(0,n.jsxs)(s.p,{children:["This can be very confusing for users; if they want to edit the v2.0.0 docs, they have to edit ",(0,n.jsx)(s.code,{children:"versioned_docs/version-1.0.0/hello.md"})," or manually add ",(0,n.jsx)(s.code,{children:"versioned_docs/version-2.0.0/hello.md"}),". This could potentially lead to unwanted bugs. Here is a ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/jest/pull/6758#issuecomment-408274413",children:"real scenario in Jest"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["In addition, this adds complexity within the codebase as we require a mechanism for version fallbacks. And during build time, Docusaurus has to replace the linking to the correct version. This is also the cause of a bug where ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/845",children:"renaming docs breaks links in old versions"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["For Docusaurus 2, ",(0,n.jsx)(s.strong,{children:"every time we cut a new version, we will instead take a snapshot of all the docs"}),". We will not require the content of a document to have changed. This is a space complexity trade-off for a better developer and user experience. We will use more space for better separation of concerns and guaranteed correctness."]}),"\n",(0,n.jsx)(s.h3,{id:"translation",children:"Translation"}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus allows for easy translation functionality by using ",(0,n.jsx)(s.a,{href:"https://crowdin.com/",children:"Crowdin"}),". Documentation files written in English are uploaded to Crowdin for translation by users within a community. We always assumed that ",(0,n.jsx)(s.strong,{children:"English"})," is the default language, but this might not be the case for all users. We have seen plenty of non-English open source projects using Docusaurus."]}),"\n",(0,n.jsxs)(s.p,{children:["For Docusaurus 2, ",(0,n.jsx)(s.strong,{children:"we will not assume English is the default language"}),". When a user enables internationalization, they have to set a default language in ",(0,n.jsx)(s.code,{children:"siteConfig.js"}),". We will then assume that all the files in ",(0,n.jsx)(s.code,{children:"docs"})," are written in that language."]}),"\n",(0,n.jsx)(s.p,{children:"In addition, after working on the MVP of Docusaurus 2, I realized that it is possible not to use Crowdin for translations. Thus, we might need to add an additional workflow to enable that scenario. However, we will still strongly recommend people use Crowdin for easier integration."}),"\n",(0,n.jsx)(s.h2,{id:"customizability",children:"Customizability"}),"\n",(0,n.jsx)(s.h3,{id:"layout",children:"Layout"}),"\n",(0,n.jsx)(s.p,{children:"The current state of Docusaurus is that it is in charge of the entire layout and styling, unintentionally making it very hard for users to customize their site's appearance to their wishes."}),"\n",(0,n.jsxs)(s.p,{children:["For Docusaurus 2, ",(0,n.jsx)(s.strong,{children:"layout and styling should be controlled by the user"}),". Docusaurus will handle the content generation, routing, translation, and versioning. Inspired by ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/create-react-app",children:"create-react-app"})," and ",(0,n.jsx)(s.a,{href:"https://vuepress.vuejs.org/",children:"VuePress"}),", Docusaurus will still provide a default theme, which the user can eject from, for further layout and styling customization. This means that it is very possible for the user to even change the HTML meta by using ",(0,n.jsx)(s.a,{href:"https://github.com/nfl/react-helmet",children:"React Helmet"}),". Community-based themes are also very possible. This approach of allowing users to be in charge of layout and styling is taken by most static site generators."]}),"\n",(0,n.jsx)(s.h3,{id:"markdown",children:"Markdown"}),"\n",(0,n.jsxs)(s.p,{children:["Our Markdown parsing is currently powered by ",(0,n.jsx)(s.a,{href:"https://github.com/jonschlinkert/remarkable",children:"Remarkable"}),". What if the user wants to use ",(0,n.jsx)(s.a,{href:"https://github.com/Markdown-it/Markdown-it",children:"Markdown-it"})," or even ",(0,n.jsx)(s.a,{href:"https://github.com/mdx-js/mdx",children:"MDX"}),"? And then there is an issue of which syntax highlighter to use, (e.g: ",(0,n.jsx)(s.a,{href:"https://prismjs.com/",children:"Prism"})," vs ",(0,n.jsx)(s.a,{href:"https://highlightjs.org/",children:"Highlight.js"}),"). We should leave these choices open to the user."]}),"\n",(0,n.jsxs)(s.p,{children:["For Docusaurus 2, ",(0,n.jsx)(s.strong,{children:"users can eject and choose their own Markdown parser"}),". It does not matter if they want to use another Markdown parser such as ",(0,n.jsx)(s.a,{href:"https://github.com/remarkjs/remark",children:"Remark"}),", or even their own in-house Markdown parser. As a rule of thumb, the user has to provide a React component, in which we will provide a children props containing the ",(0,n.jsx)(s.em,{children:"RAW string of Markdown"}),". By default, we will use Remarkable for the Markdown parser and Highlight.js for the syntax highlighting. The default parser could still change in the future as we're still experimenting with different Markdown parsers."]}),"\n",(0,n.jsx)(s.h3,{id:"search",children:"Search"}),"\n",(0,n.jsxs)(s.p,{children:["Our core search functionality is based on ",(0,n.jsx)(s.a,{href:"https://www.algolia.com/",children:"Algolia"}),". There are requests by users to be able to use different search offerings, such as ",(0,n.jsx)(s.code,{children:"lunrjs"})," for offline search."]}),"\n",(0,n.jsxs)(s.p,{children:["I personally like Algolia and we have a great experience working with them. They are very responsive; we can easily submit a pull request to Algolia since their ",(0,n.jsx)(s.code,{children:"DocSearch"})," is open source. For example, I recently submitted ",(0,n.jsx)(s.a,{href:"https://github.com/algolia/docsearch-scraper/pull/387",children:"this PR that enables DocSearch to scrape alternate languages in sitemap"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["For Docusaurus 2, ",(0,n.jsx)(s.strong,{children:"we will allow users to customize the search box"}),". Users simply need to eject from the default theme and modify the Search UI (a React component). However, we will still use Algolia in the default theme."]}),"\n",(0,n.jsx)(s.h2,{id:"stability",children:"Stability"}),"\n",(0,n.jsx)(s.p,{children:"Software is never going to be perfect, but we want Docusaurus to not break as we add new features. When Docusaurus was first released, it did not have any strong automated test suites. As a result, there were a lot of regressions not caught early. Although we have recently added a lot of tests, the test coverage is still relatively low."}),"\n",(0,n.jsxs)(s.p,{children:["For Docusaurus 2, ",(0,n.jsx)(s.strong,{children:"we are adding tests as we develop"})," since we are going for a fresh rewrite. Hence, I believe that it should be more stable than ever and it should be harder to break things compared to Docusaurus 1."]}),"\n",(0,n.jsx)(s.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,n.jsx)(s.h3,{id:"will-there-be-any-breaking-changes",children:"Will there be any breaking changes?"}),"\n",(0,n.jsxs)(s.p,{children:["If you've read the post up until to this point, you should be able to notice that there will be breaking changes. While we will try to ",(0,n.jsx)(s.strong,{children:"minimize the number of breaking changes"})," and make it backward compatible as much as possible, we believe that some breaking changes are required. This is mostly due to Docusaurus 2 being a ",(0,n.jsx)(s.strong,{children:"major rewrite and re-architecting"})," of the codebase."]}),"\n",(0,n.jsxs)(s.p,{children:["The exact list of breaking changes is not totally known yet as development is not 100% finalized. However, one thing that I will highlight is that we will deprecate a lot of options in ",(0,n.jsx)(s.code,{children:"siteConfig.js"})," and we plan to keep it as lean as possible. For example, the ",(0,n.jsx)(s.code,{children:"cleanUrl"})," siteConfig will be deprecated as all the URL for Docusaurus 2 sites will be without the ",(0,n.jsx)(s.code,{children:".html"})," suffix."]}),"\n",(0,n.jsxs)(s.p,{children:["Our goal is that most sites should be able to upgrade to Docusaurus 2 without a lot of pain. We will also include a migration guide when we release Docusaurus 2. When the times come, feel free to ping us on ",(0,n.jsx)(s.a,{href:"https://discord.gg/docusaurus",children:"Discord"})," or ",(0,n.jsx)(s.a,{href:"https://twitter.com/docusaurus",children:"Twitter"})," for questions and help."]}),"\n",(0,n.jsx)(s.h3,{id:"when-is-the-release-of-docusaurus-2",children:"When is the release of Docusaurus 2?"}),"\n",(0,n.jsx)(s.p,{children:"As of now, we do not have an exact date planned for the release. I personally estimate that we might be able to release an alpha version in the next one to two months, but this is, of course, just an estimate."}),"\n",(0,n.jsxs)(s.p,{children:["One thing that I would like to share is that while Docusaurus is part of ",(0,n.jsx)(s.a,{href:"https://opensource.fb.com/",children:"Facebook Open Source"})," and most of the team are Facebook employees, the maintenance and development work is mostly done outside of normal working hours. I am currently a final year undergraduate student at ",(0,n.jsx)(s.a,{href:"https://twitter.com/NTUsg",children:"NTU Singapore"}),", so I had to juggle between doing my coursework, my final year project and maintaining/developing Docusaurus. However, that does not mean that we do not want to make Docusaurus better. In fact, ",(0,n.jsx)(s.strong,{children:"we want to make it as awesome as possible"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["For now, the actual Docusaurus 2 work is still hosted in a private repository. In the near future, we will move them into the ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus",children:"public repository"}),". When that time arrives, I encourage everyone to look into it and hopefully contribute in some way. Before then, please stay tuned \u{1F609}!"]}),"\n",(0,n.jsx)(s.h2,{id:"final-thoughts",children:"Final Thoughts"}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus has had a large impact on the open source community as seen from the ",(0,n.jsx)(s.a,{href:"https://v1.docusaurus.io/en/users",children:"many popular projects"})," which use Docusaurus for documentation. In order to move faster in the future, we are taking the opportunity to fix some core problems with Docusaurus 1 and striving to make Docusaurus better for everyone. In fact, it is safe to say that Docusaurus 2 is not just a plan any longer; the work on it has started and, hopefully, we will be able to see it materialize in the near future."]}),"\n",(0,n.jsx)(s.p,{children:"Docusaurus' mission has always been to make it really easy for you to get a website with documentation up and running out of the box. That mission does not change with Docusaurus 2."}),"\n",(0,n.jsxs)(s.p,{children:["We also want to let people know that ",(0,n.jsx)(s.strong,{children:"due to work on Docusaurus 2, we will be less likely to accept new features/major changes on Docusaurus 1."})]}),"\n",(0,n.jsxs)(s.p,{children:["If you are using Docusaurus, you are part of our community; keep letting us know how we can make Docusaurus better for you. If you appreciate the work we're doing, you can support ",(0,n.jsx)(s.a,{href:"https://opencollective.com/Docusaurus",children:"Docusaurus on Open Collective"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["If you are sponsoring our work on ",(0,n.jsx)(s.a,{href:"https://opencollective.com/Docusaurus",children:"Open Collective"}),", we'll personally offer you a helping hand for maintenance and upgrading of Docusaurus website."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Lastly, if you haven't done so already, click the ",(0,n.jsx)(s.strong,{children:"star"})," and ",(0,n.jsx)(s.strong,{children:"watch"})," button on ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus",children:"GitHub"}),", and follow us on ",(0,n.jsx)(s.a,{href:"https://twitter.com/docusaurus",children:"Twitter"}),"."]})]})}function c(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},71670:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>r});var n=t(27378);let o={},a=n.createContext(o);function r(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);