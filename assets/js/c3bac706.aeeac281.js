"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7059],{4441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(5893),o=n(1151);const i={sidebar_position:3,slug:"/catalog"},r="Catalog Management",s={id:"platform/catalog",title:"Catalog Management",description:"The product listings on marketplaces (e.g Amazon) can be messy, incorrect or incomplete.",source:"@site/help/platform/catalog.md",sourceDirName:"platform",slug:"/catalog",permalink:"/docs/catalog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/catalog"},sidebar:"helpSidebar",previous:{title:"Advanced Search Operators",permalink:"/docs/search-operators"},next:{title:"Guides",permalink:"/docs/guides"}},d={},l=[{value:"How to edit the catalog data?",id:"how-to-edit-the-catalog-data",level:4},{value:"<em>1. Select the Entity</em>",id:"1-select-the-entity",level:5},{value:"<em>2. Download CSV</em>",id:"2-download-csv",level:5},{value:"<em>3. Edit Details</em>",id:"3-edit-details",level:5},{value:"<em>4.\xa0Delete Unedited Rows</em>",id:"4delete-unedited-rows",level:5},{value:"<em>5. Upload the Edited CSV</em>",id:"5-upload-the-edited-csv",level:5},{value:"What properties of an entity should NOT be edited?",id:"what-properties-of-an-entity-should-not-be-edited",level:4},{value:"What properties of an entity can be edited?",id:"what-properties-of-an-entity-can-be-edited",level:4},{value:"How to change the &quot;Brand&quot; of an entity?",id:"how-to-change-the-brand-of-an-entity",level:4},{value:"How to change the &quot;Category&quot; of an entity?",id:"how-to-change-the-category-of-an-entity",level:4},{value:"How to add &quot;Alternate Name&quot; to an entity?",id:"how-to-add-alternate-name-to-an-entity",level:4},{value:"What are \u201cCatalog Labels\u201d? How to add these to an entity?",id:"what-are-catalog-labels-how-to-add-these-to-an-entity",level:4},{value:"How to change the specifications of an entity?",id:"how-to-change-the-specifications-of-an-entity",level:4},{value:"What are &quot;Search Terms&quot;? How to add searchable terms to an entity?",id:"what-are-search-terms-how-to-add-searchable-terms-to-an-entity",level:4},{value:"What are &quot;Cross Marketplace Ids&quot;? How to add these to an entity?",id:"what-are-cross-marketplace-ids-how-to-add-these-to-an-entity",level:4},{value:"What is \u201cUser Source\u201d? How to Change \u201cUser Source Names\u201d and \u201cUser Source Ids\u201d of an entity?",id:"what-is-user-source-how-to-change-user-source-names-and-user-source-ids-of-an-entity",level:4},{value:"How to remove an entity from the catalog?",id:"how-to-remove-an-entity-from-the-catalog",level:4},{value:"Can I upload another CSV while older tasks are in progress?",id:"can-i-upload-another-csv-while-older-tasks-are-in-progress",level:4}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"catalog-management",children:"Catalog Management"}),"\n",(0,a.jsx)(t.p,{children:"The product listings on marketplaces (e.g Amazon) can be messy, incorrect or incomplete."}),"\n",(0,a.jsx)(t.p,{children:'Since our crawlers rely heavily on the meta-data collected from the marketplace, the catalog here might reflect the inconsistencies of the marketplace. For example, a keyboard SKU could get listed under the "Mouse" category on Amazon.'}),"\n",(0,a.jsx)(t.p,{children:'The "Catalog Management" feature enables you to correct such errors by enabling you to edit various properties of each entity.'}),"\n",(0,a.jsx)(t.p,{children:"Answers to some commonly asked questions are below -"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-edit-the-catalog-data",children:"How to edit the catalog data?"}),"\n",(0,a.jsx)(t.h5,{id:"1-select-the-entity",children:(0,a.jsx)(t.em,{children:"1. Select the Entity"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This could be an individual product or a collection of products e.g Brand, Variant Aggregate, a custom Source, the entire Category or Super-Category."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"2-download-csv",children:(0,a.jsx)(t.em,{children:"2. Download CSV"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Click on the "Download CSV" button to download the details of the selected entity.'}),"\n",(0,a.jsx)(t.li,{children:"If the selected entity is an individual product, the CSV will have just 1 row with details of that product."}),"\n",(0,a.jsx)(t.li,{children:"If the selected entity is a Brand or Category, the CSV will have details of all products in that collection, with each row representing a single product."}),"\n",(0,a.jsx)(t.li,{children:"The download could take a few seconds."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"3-edit-details",children:(0,a.jsx)(t.em,{children:"3. Edit Details"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Edit the details of individual products. The list of editable and non-editable properties are described below."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"4delete-unedited-rows",children:(0,a.jsx)(t.em,{children:"4.\xa0Delete Unedited Rows"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Remove any rows that you did not edit."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"5-upload-the-edited-csv",children:(0,a.jsx)(t.em,{children:"5. Upload the Edited CSV"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Once you upload the edited CSV, a task will be created to check the differences and make the necessary changes. This can take a few minutes to hours, depending on the number of changes requested."}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-properties-of-an-entity-should-not-be-edited",children:"What properties of an entity should NOT be edited?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Entity Id"}),"\n",(0,a.jsx)(t.li,{children:"Source Id"}),"\n",(0,a.jsx)(t.li,{children:"URL"}),"\n",(0,a.jsx)(t.li,{children:"Entity Name"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"These properties have been provided only for the purposes of identifying the product."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-properties-of-an-entity-can-be-edited",children:"What properties of an entity can be edited?"}),"\n",(0,a.jsx)(t.p,{children:"The following properties can be edited."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Brand"}),"\n",(0,a.jsx)(t.li,{children:"Categories"}),"\n",(0,a.jsx)(t.li,{children:"Search Terms"}),"\n",(0,a.jsx)(t.li,{children:"Cross Marketplace Ids"}),"\n",(0,a.jsx)(t.li,{children:"Visibility"}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-change-the-brand-of-an-entity",children:'How to change the "Brand" of an entity?'}),"\n",(0,a.jsx)(t.p,{children:"The default brand is determined from the marketplace. You can change the brand by overriding the \u201cBrand\u201d column in the CSV."}),"\n",(0,a.jsx)(t.p,{children:"Ensure that you use the exact name of the brand as used in this platform."}),"\n",(0,a.jsx)(t.p,{children:"For example, if the entity name is \u201cLogitech (Brand) - All Marketplaces\u201d, the Brand is \u201cLogitech\u201d."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-change-the-category-of-an-entity",children:'How to change the "Category" of an entity?'}),"\n",(0,a.jsx)(t.p,{children:'The default category for an entity is determined from the marketplace. You can change the category by overriding the "Categories" column in the CSV.'}),"\n",(0,a.jsx)(t.p,{children:"Ensure that you use the exact name of the categories as used in this platform. To indicate a hierarchy in category, use comma separated values.\xa0"}),"\n",(0,a.jsxs)(t.p,{children:["For example, a SKU has the category hierarchy -\xa0\xa0",(0,a.jsx)(t.em,{children:"All, Input Devices, Keyboard."})]}),"\n",(0,a.jsxs)(t.p,{children:["To change the category from\xa0\xa0",(0,a.jsx)(t.em,{children:"Keyboard"}),"\xa0to\xa0",(0,a.jsx)(t.em,{children:"Mouse"}),", change\xa0",(0,a.jsx)(t.em,{children:"All, Input Devices, Keyboard"}),"\xa0to\xa0",(0,a.jsx)(t.em,{children:"All, Input Devices, Mouse"}),".\xa0"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-add-alternate-name-to-an-entity",children:'How to add "Alternate Name" to an entity?'}),"\n",(0,a.jsx)(t.p,{children:'The default product name is determined from the marketplace. This is available in the CSV under the "Name" column. You cannot change the primary name.'}),"\n",(0,a.jsx)(t.p,{children:'If you want to change the display name of the product, you can add the updated name in the "Alternate Name" column. This is currently used in certain shortlisted visualizations only, and will be extended to all graphs, tables and visualizations.'}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:'If you just want to add a searchable nickname, you can add it to "Search Terms".'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-are-catalog-labels-how-to-add-these-to-an-entity",children:"What are \u201cCatalog Labels\u201d? How to add these to an entity?"}),"\n",(0,a.jsx)(t.p,{children:"Catalog Labels are additional filters that you can define and add to a CSV file. They provide a way to categorize products based on specific criteria that may not be included in the original metadata.These filters are in the form of key-value pairs, where the key represents the filter name, and the value represents an option within that filter. They will be added as filters in the tool after the source is refreshed."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"How to Add \u201cCatalog Labels\u201d to a CSV File"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Download the CSV file you want to update."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Open the file using a spreadsheet application."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Add a edit the column named \u2018Catalog Labels\u2019."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"In the \u2018Catalog Label\u2019 column, enter key-value pairs for each product row you want to label."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You can add new fields using the ",(0,a.jsx)(t.strong,{children:"Catalog Labels"})," column. The value of this column, takes the following format:\n",(0,a.jsx)(t.code,{children:"<key1>: <value1>, <key2>: <value2>"})]}),"\n",(0,a.jsxs)(t.p,{children:["For example:\n",(0,a.jsx)(t.code,{children:"Priority Product: True, Product Line: AA22AB"})]}),"\n",(0,a.jsxs)(t.p,{children:["This will create two new fields for the entity - ",(0,a.jsx)(t.code,{children:"Priority Product"})," with the value ",(0,a.jsx)(t.code,{children:"True"})," and ",(0,a.jsx)(t.code,{children:"Product Line"})," with the value ",(0,a.jsx)(t.code,{children:"AA22AB"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You can add Catalog Labels to all products or only specific products of your choice."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"After adding the Catalog Labels, save the modified CSV file and upload it back."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Once uploaded and refreshed, the Catalog Labels will be available as filters within the tool."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-change-the-specifications-of-an-entity",children:"How to change the specifications of an entity?"}),"\n",(0,a.jsxs)(t.p,{children:["To update the product specifications in a CSV file, look for columns with the \u2018Spec:\u2019 prefix, such as \u2018Spec",":Price","\u2019 , \u2019Spec",":Country","\u2019, etc. These columns contain default data from the marketplace. To change the specifications, overwrite the existing entry with the new specification. Ensure the data format matches the platform\u2019s requirements."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-are-search-terms-how-to-add-searchable-terms-to-an-entity",children:'What are "Search Terms"? How to add searchable terms to an entity?'}),"\n",(0,a.jsx)(t.p,{children:"Search Terms are additional terms that can be added as meta-data for an entity. These terms can then be used for searching for that entity."}),"\n",(0,a.jsx)(t.p,{children:"For example, you can add an internal model number\xa0as a search term."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-are-cross-marketplace-ids-how-to-add-these-to-an-entity",children:'What are "Cross Marketplace Ids"? How to add these to an entity?'}),"\n",(0,a.jsx)(t.p,{children:'The Cross Marketplace Id is used to reconcile the same products across different marketplaces. If the "Cross Marketplace Ids" of a few products are exactly the same, they are treated as the same products from different marketplaces.'}),"\n",(0,a.jsx)(t.p,{children:'Note - the "Cross Marketplace Ids" can only contain alphabets, numbers, dashes ("-") or underscores ("_"). It should NOT include spaces.'}),"\n",(0,a.jsx)(t.p,{children:'You can change this reconciliation by editing the "Cross Marketplace Ids" column in the CSV.'}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-is-user-source-how-to-change-user-source-names-and-user-source-ids-of-an-entity",children:"What is \u201cUser Source\u201d? How to Change \u201cUser Source Names\u201d and \u201cUser Source Ids\u201d of an entity?"}),"\n",(0,a.jsx)(t.p,{children:"User Source refers to custom groups created by users to organize and classify entities."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"How to Change \u201cUser Source Names\u201d and \u201cUser Source Ids\u201d in the CSV"})}),"\n",(0,a.jsx)(t.p,{children:"\u201cUser Source Names\u201d represent groups created by the user, while \u201cUser Source Ids\u201d represent unique identifiers for those groups."}),"\n",(0,a.jsx)(t.p,{children:'"User Source Names" column can be used to combine multiple products to create a data source.'}),"\n",(0,a.jsx)(t.p,{children:'For example, if you want to create a data source with 5 products, simply add the same source name for all 5 products in the "Source Name" column.'}),"\n",(0,a.jsx)(t.p,{children:"To change a product's group id, overwrite the entry in the \u201cUser Source Ids\u201d column with the new group id."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:'You can add multiple comma separated source names to the "Source Names" column.'})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:'Source Names created using the catalog cannot be managed from the "Manage - Data Sources" page and can only be edited using the catalog.'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-remove-an-entity-from-the-catalog",children:"How to remove an entity from the catalog?"}),"\n",(0,a.jsx)(t.p,{children:"The default visibility of each entity is True. If the visibility is set to False, the entity will be removed from the catalog and it will no longer appear in search,\xa0reports, visualizations or be counted as a part of any group."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"can-i-upload-another-csv-while-older-tasks-are-in-progress",children:"Can I upload another CSV while older tasks are in progress?"}),"\n",(0,a.jsx)(t.p,{children:"Yes, you can. If there are conflicing changes, then the latest edits will be honoured."}),"\n",(0,a.jsx)(t.hr,{})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var a=n(7294);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);