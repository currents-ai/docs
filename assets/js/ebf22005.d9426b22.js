"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8652],{1791:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>h,toc:()=>a});var r=s(5893),t=s(1151);const o={sidebar_position:2,slug:"/search-operators"},i="Advanced Search Operators",h={id:"platform/search-operators",title:"Advanced Search Operators",description:"Text Query Operators",source:"@site/help/platform/search-operators.md",sourceDirName:"platform",slug:"/search-operators",permalink:"/docs/search-operators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/search-operators"},sidebar:"helpSidebar",previous:{title:"Export Data",permalink:"/docs/data-export"},next:{title:"Catalog Management",permalink:"/docs/catalog"}},c={},a=[{value:"Text Query Operators",id:"text-query-operators",level:2},{value:"Note on Exact Matches\xa0",id:"note-on-exact-matches",level:2},{value:"Example Queries",id:"example-queries",level:2}];function l(e){const n={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"advanced-search-operators",children:"Advanced Search Operators"}),"\n",(0,r.jsx)(n.h2,{id:"text-query-operators",children:"Text Query Operators"}),"\n",(0,r.jsx)(n.p,{children:"The following are the query operators supported right now:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AND"}),"\xa0- matches when sentence contains both the terms**.** Generally, there is no need to use this operator as the query bright light is equivalent to bright ",(0,r.jsx)(n.strong,{children:"AND"})," light"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OR -"})," matches when sentence contains either of the terms. For eg. bright ",(0,r.jsx)(n.strong,{children:"OR"}),'\xa0light matches sentences containing either of "bright" or "light"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:'"..."'})," -\xa0quotes are used for exact match of phrases within the quotes eg. ",(0,r.jsxs)(n.strong,{children:['"',(0,r.jsx)(n.strong,{children:"light brown"}),'"']})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"(...)"})," - the brackets are used in order to override precendence. eg. ",(0,r.jsxs)(n.strong,{children:["(",(0,r.jsx)(n.strong,{children:"bright OR light"}),")"]})," person\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NOT (...)"})," - NOT is used to negate a term. eg. bight ",(0,r.jsx)(n.strong,{children:"NOT"})," light matches records containing bright and not containing light"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:'aspects:"..."'}),"\xa0\xa0- This can be used to use System Defined Topics in any search query eg. to search for the system defined topic Battery with the text query phone the query will be -\xa0phone ",(0,r.jsx)(n.strong,{children:'aspects:"battery"'})]}),"\n",(0,r.jsx)(n.li,{children:"Using these basic building blocks, we can specify logic for matching that is as complex as the needs demand."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"note-on-exact-matches",children:"Note on Exact Matches\xa0"}),"\n",(0,r.jsx)(n.p,{children:"All the queries are run on the stemmed words, except when it's mentioned in quotes. For eg:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"light"})," matches ",(0,r.jsx)(n.strong,{children:"light"}),", ",(0,r.jsx)(n.strong,{children:"lights"}),", ",(0,r.jsx)(n.strong,{children:"lighting"}),", ",(0,r.jsx)(n.strong,{children:"lighter"}),".\xa0"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:'"light"'})," matches only ",(0,r.jsx)(n.strong,{children:"light"})]}),"\n",(0,r.jsx)(n.h2,{id:"example-queries",children:"Example Queries"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Query: ",(0,r.jsx)(n.strong,{children:"(happy OR sad) person"}),"\xa0"]}),"\n",(0,r.jsx)(n.p,{children:'The presence of "happy" or "sad" and presence of "person". The order is not enforced.'}),"\n",(0,r.jsxs)(n.p,{children:["Matches ",(0,r.jsx)(n.strong,{children:"happy"}),"\xa0",(0,r.jsx)(n.strong,{children:"person,"}),"\xa0\xa0",(0,r.jsx)(n.strong,{children:"sad\xa0person,\xa0 person happy,\xa0 person sad."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Query: ",(0,r.jsx)(n.strong,{children:"((happy OR sad) OR (no emotion)) person"})]}),"\n",(0,r.jsx)(n.p,{children:'The term\xa0(no emotion)\xa0is an implicit and of "no" and "emotion". No ordering is enforced.'}),"\n",(0,r.jsxs)(n.p,{children:["Matches ",(0,r.jsx)(n.strong,{children:"happy person"}),", ",(0,r.jsx)(n.strong,{children:"sad person"}),", ",(0,r.jsx)(n.strong,{children:"no emotion person, emotion person no"}),". Does not match ",(0,r.jsx)(n.strong,{children:"emotion person"}),", ",(0,r.jsx)(n.strong,{children:"no person."}),"\xa0"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Query:\xa0 ",(0,r.jsx)(n.strong,{children:'(happy OR sad OR "no emotion") person'})]}),"\n",(0,r.jsxs)(n.p,{children:["Like above, except matches the exact phrase ",(0,r.jsx)(n.strong,{children:'"no emotion"'})]}),"\n",(0,r.jsxs)(n.p,{children:["Matches\xa0 ",(0,r.jsx)(n.strong,{children:"happy person"}),",\xa0",(0,r.jsx)(n.strong,{children:"sad person"}),",\xa0",(0,r.jsx)(n.strong,{children:"no emotion person"}),". Does not match ",(0,r.jsx)(n.strong,{children:"emotion person no, emotion person, no person."}),"\xa0\xa0"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Query: ",(0,r.jsx)(n.strong,{children:"battery NOT charge"})]}),"\n",(0,r.jsxs)(n.p,{children:["Looks for the term battery ",(0,r.jsx)(n.strong,{children:'without the term "charge" in the same record'}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>h,a:()=>i});var r=s(7294);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);