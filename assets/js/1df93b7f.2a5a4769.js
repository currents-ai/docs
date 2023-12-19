"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3237],{9463:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});t(7294);var a=t(2263),c=t(7961);const i=JSON.parse('{"account":{"header":"Account","subheader":"Manage account, users, teams and understand permissions.","icon":"img/icons/users.svg"},"channels":{"header":"Channels & Sources","subheader":"Basics, setup and management.","icon":"img/icons/table-cells.svg"},"reports":{"header":"Reporting","subheader":"Charts and visualizations. Custom reports and templates.","icon":"img/icons/document-chart-bar.svg"},"metrics":{"header":"Metrics","subheader":"Definitions, explanations and intuition behind different metrics.","icon":"img/icons/beaker.svg"},"platform":{"header":"Platform","subheader":"Documentation on core platform features.","icon":"img/icons/cpu-chip.svg"}}');var n=t(5893);function r(){const{globalData:e}=(0,a.Z)(),s=function(e){const s=[...new Set(e.map((e=>e.id.split("/")[0])))],t=s.reduce(((e,s)=>(e[s]=0,e)),{});return e.forEach((e=>{const a=e.id.split("/")[0];s.includes(a)&&t[a]++})),s.map((e=>({id:e,header:e.charAt(0).toUpperCase()+e.slice(1),subheader:`Articles about ${e}`,path:`/docs/${e}`,count:t[e],...e in i&&i[e]})))}(e["docusaurus-plugin-content-docs"].default.versions[0].docs);return(0,n.jsx)("div",{className:"flex flex-wrap justify-center md:justify-start",children:s.map((e=>(0,n.jsx)("div",{className:"md:w-[47%] w-full m-2",children:(0,n.jsx)("a",{className:"pagination-nav__link h-full w-full",href:e.path,children:(0,n.jsxs)("div",{className:"flex h-full w-full items-center",children:[(0,n.jsx)("div",{className:"flex h-16 w-auto  mr-3",children:(0,n.jsx)("img",{src:e.icon||"img/icons/table-cells.svg",className:"h-full w-full object-cover",alt:"Logo"})}),(0,n.jsxs)("div",{className:"flex-1 truncate",children:[(0,n.jsx)("div",{className:"font-semibold text-black dark:text-white",children:e.header}),(0,n.jsx)("div",{className:"text-gray-700 dark:text-gray-300 truncate mt-1",children:e.subheader}),(0,n.jsxs)("div",{className:"text-gray-500 text-sm italic mt-1",children:[e.count," articles"]})]})]})})},e.id)))})}const l=t.p+"assets/images/texture-310b25f79194a20b73b1bc3efdd6c980.png",o=t.p+"assets/images/lights-20a008ec256f7b5d996978f57c2b2248.png",d=t.p+"assets/images/holy-d737dd3d60a05e449c4bf8751642182a.png";function u(){return(0,n.jsxs)("div",{className:"bg-gradient-to-r overflow-hidden from-zinc-950 to-stone-700 w-full h-[30vh] flex justify-center items-center my-4 lg:my-0 mx-auto  relative ",children:[(0,n.jsx)("img",{src:l,className:"w-full h-full absolute top-0 left-0 object-cover opacity-50"}),(0,n.jsx)("img",{src:o,className:"absolute -left-20 -top-12 "}),(0,n.jsx)("img",{src:d,className:"absolute -top-28 -right-28 opacity-50"}),(0,n.jsx)("div",{className:"text-center space-y-8 z-20",children:(0,n.jsx)("h1",{className:"text-white text-4xl lg:text-6xl font-semibold",children:"FreeText AI Help Center"})})]})}function m(){const{siteConfig:e}=(0,a.Z)();return(0,n.jsx)(c.Z,{title:"Docs",description:"FreeText AI Docs - Hub for privacy, help docs and other resources.",children:(0,n.jsx)("main",{children:(0,n.jsxs)("div",{className:"space-y-16",children:[(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:"max-w-6xl m-auto p-4",children:(0,n.jsx)(r,{})})]})})})}}}]);