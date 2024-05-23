"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4559],{91:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(5893),o=i(1151);const s={sidebar_position:2,slug:"/pivot-table",title:"How to use the Pivot Table Widget"},a="How to use the Pivot Table Widget",r={id:"guides/pivot-table",title:"How to use the Pivot Table Widget",description:"Introduction to Pivot Table",source:"@site/help/guides/pivot-table.md",sourceDirName:"guides",slug:"/pivot-table",permalink:"/docs/pivot-table",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/pivot-table",title:"How to use the Pivot Table Widget"},sidebar:"helpSidebar",previous:{title:"How to Compare Products and Brands",permalink:"/docs/compare"},next:{title:"Export Data",permalink:"/docs/export-data"}},l={},d=[{value:"Introduction to Pivot Table",id:"introduction-to-pivot-table",level:2},{value:"Building a Pivot Table on Freetext.AI",id:"building-a-pivot-table-on-freetextai",level:2},{value:"Dimensions",id:"dimensions",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Filters",id:"filters",level:3},{value:"Example",id:"example",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Design",id:"design",level:3},{value:"Download",id:"download",level:3}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-use-the-pivot-table-widget",children:"How to use the Pivot Table Widget"}),"\n",(0,n.jsx)(t.h2,{id:"introduction-to-pivot-table",children:"Introduction to Pivot Table"}),"\n",(0,n.jsx)(t.p,{children:"A pivot table summarizes large datasets into a compact tabular view, making it easier to analyze data and spot trends."}),"\n",(0,n.jsx)(t.p,{children:"To understand this  better, let's Look at an example. Suppose we have a dataset containing sales data for different products sold across multiple regions and years. The raw data might look something like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"raw-data",src:i(4436).Z+"",width:"1384",height:"416"})}),"\n",(0,n.jsx)(t.p,{children:"To create a pivot table from this data, add Region as Rows, Product as Column, Total sales as values. After these steps, the pivot table might look something like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"pivot-example",src:i(8149).Z+"",width:"1384",height:"234"})}),"\n",(0,n.jsx)(t.p,{children:"In this example, the pivot table summarizes the total sales for each product across different regions. You can quickly see that Product A had total sales of $18,700 in the East region, Product B had total sales of $15,500 in the West region, and Product C had total sales of $4,200 in the North region."}),"\n",(0,n.jsx)(t.h2,{id:"building-a-pivot-table-on-freetextai",children:"Building a Pivot Table on Freetext.AI"}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, in Freetext.ai, you can build pivot tables to summarize customer feedback. Start by selecting the data you want to analyze, then choose how to categorize it with Row and Column Dimensions and what information to highlight (metrics). For detailed instructions on how to add a pivot table to a new report, visit the ",(0,n.jsx)(t.a,{href:"/docs/widgets",children:"Create Widget"})," section of our documentation."]}),"\n",(0,n.jsx)(t.h3,{id:"dimensions",children:"Dimensions"}),"\n",(0,n.jsx)(t.p,{children:"Dimensions are characteristics that add context to your metrics. They help categorize and group data for analysis. Dimensions can be time, geographical location, product categories, customer segments, or marketing channels. Select dimensions to break down your metrics into categories."}),"\n",(0,n.jsx)(t.p,{children:"Row and column dimensions categorize and organize data hierarchically, based on selected categories, with the option to select up to six categories for each dimension. The row dimensions create groupings or partitions of the data, while column dimensions create sub groupings within those row groups."}),"\n",(0,n.jsx)(t.h3,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsx)(t.p,{children:"Metrics are numerical measurements that represent different aspects of business. They provide specific data points like Records Count, product ratings, customer satisfaction score, Impact Score, etc. Each cell presents the metric value corresponding to the specific combination of categories defined by the row and column dimensions. You can select up to 6 metrics."}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about each dimension and metric, go to ",(0,n.jsx)(t.a,{href:"/docs/metrics",children:"Metrics & Dimensions."})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"create-pivot",src:i(760).Z+"",width:"3698",height:"1690"})}),"\n",(0,n.jsx)(t.h3,{id:"filters",children:"Filters"}),"\n",(0,n.jsx)(t.p,{children:"You can use filters to focus on specific subsets of data within your pivot table. Eg. If Time is selected as either the row or column dimension, you can use the Time and Graph Filters to refine the data further."}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"To illustrate the usage of pivot tables in Freetext.ai, let's consider a scenario where we want to analyze the average review rating and review volume for different products of a brand across various sentiment polarities (positive, negative, or neutral)."}),"\n",(0,n.jsx)(t.p,{children:"Row Dimensions:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Entity"}),"\n",(0,n.jsx)(t.li,{children:"Sentiment"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Column Dimensions:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Time"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Metrics:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Records(Count)"}),"\n",(0,n.jsx)(t.li,{children:"Review Rating Value(Avg)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"With these dimensions and metrics, the pivot table would look like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"pivot-example-freetext",src:i(1730).Z+"",width:"3066",height:"942"})}),"\n",(0,n.jsx)(t.p,{children:"The intention behind creating this pivot table is to gain insights into the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Identify the products that are performing well or poorly in terms of customer satisfaction, as indicated by the average review rating value for positive, negative, and neutral sentiments."}),"\n",(0,n.jsx)(t.li,{children:"Understand the distribution of review volume (record count) across different sentiment polarities for each product."}),"\n",(0,n.jsx)(t.li,{children:"Analyze trends over time by looking at the year-over-year changes in average review ratings and review volume for each product and sentiment polarity."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"sorting",children:"Sorting"}),"\n",(0,n.jsx)(t.p,{children:"When the table has loaded, you can choose to sort it by a single column by clicking on the row/column name."}),"\n",(0,n.jsx)(t.h3,{id:"design",children:"Design"}),"\n",(0,n.jsx)(t.p,{children:'To customize the appearance of the pivot table, click on the "Design" tab located in the right-hand-side panel.'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Card:"})," To adjust the spacing around the edges of the pivot table, change the value of the card padding."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Table Controls:"})," Toggle to show/Hide Search bar."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Row:"}),' Select "Row Limit" value to control the number of displayed rows.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Column:"})," Adds visualizations to columns.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Show Volume Bar:"})," This option enables visualization of column values with horizontal bars. When selected, it adds volume bars alongside each item in the column."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Volume Bar Color:"}),' This option is enabled only when "Show Volume Bar" is checked. It lets you select the color for the volume bars.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Show Change:"})," This option displays the difference or percentage change between values in the selected column compared to a previous period."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Show Change Background:"})," This option, when enabled, applies conditional formatting to the background color of the cells based on the sign of the percentage change. Positive percentage changes (increases) typically display with a green background. Negative percentage changes (decreases) typically display with a red background."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"design",src:i(9565).Z+"",width:"2130",height:"746"})}),"\n",(0,n.jsx)(t.h3,{id:"download",children:"Download"}),"\n",(0,n.jsx)(t.p,{children:"Click on the download button to download as a CSV file."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"download",src:i(9527).Z+"",width:"1992",height:"936"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},760:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create-pivot-table-8b591e137c2375f60b5542ee926865f2.png"},9565:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/design-99e6a7eb02672aefee08369aefd3550b.png"},9527:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pivot-download-bf4a7edde7ebfe1e1ec8486abb724171.png"},1730:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pivot-example-freetext-643c09db1612963196ea28e7cc7a4836.png"},8149:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pivot-example-8de754ac3bb9e266d012b683f466beb0.png"},4436:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/raw-data-180c4c170f729bfb90d9d5346263886e.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var n=i(7294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);