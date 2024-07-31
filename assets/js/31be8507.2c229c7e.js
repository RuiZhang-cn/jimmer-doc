"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1958],{27930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(74848),o=t(28453),i=t(11470),r=t(19365);const s={sidebar_position:2,title:"Many To One"},l=void 0,c={id:"mapping/base/association/many-to-one",title:"Many To One",description:"This chapter introduces how to use the @org.babyfish.jimmer.sql.ManyToOne annotation to declare many-to-one association properties.",source:"@site/docs/mapping/base/association/many-to-one.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/many-to-one",permalink:"/jimmer-doc/docs/mapping/base/association/many-to-one",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/association/many-to-one.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Many To One"},sidebar:"tutorialSidebar",previous:{title:"One To One",permalink:"/jimmer-doc/docs/mapping/base/association/one-to-one"},next:{title:"One To Many",permalink:"/jimmer-doc/docs/mapping/base/association/one-to-many"}},d={},u=[{value:"1. Based on Foreign Key",id:"1-based-on-foreign-key",level:2},{value:"2. Based on Join Table",id:"2-based-on-join-table",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This chapter introduces how to use the ",(0,a.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.ManyToOne"})," annotation to declare many-to-one association properties."]}),"\n",(0,a.jsx)(n.p,{children:"There are two ways to implement many-to-one associations: based on foreign key and based on join table."}),"\n",(0,a.jsx)(n.h2,{id:"1-based-on-foreign-key",children:"1. Based on Foreign Key"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line \n    @ManyToOne  \n    BookStore store();\n\n    ...Omit other code...\n}\n"})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt" ',children:"@Entity\ninterface Book {\n\n    // highlight-next-line\n    @ManyToOne\n    val store: BookStore\n\n    ...Omit other code...\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here ",(0,a.jsx)(n.code,{children:"@JoinColumn"})," is not used together to explicitly specify the foreign key column name. Jimmer will deduce the column name corresponding to the ",(0,a.jsx)(n.code,{children:"store"})," property based on the ",(0,a.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If the default ",(0,a.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"})," is not overridden by the user, the foreign key column name of the ",(0,a.jsx)(n.code,{children:"store"})," property is ",(0,a.jsx)(n.code,{children:"STORE_ID"}),". So the previous code is equivalent to:"]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(name = "STORE_ID")\n    BookStore store();\n\n    ...Omit other code... \n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(name = "STORE_ID")\n    val store: BookStore\n\n    ...Omit other code...\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The foreign key can be real or fake. Fake foreign keys are discussed in subsequent documents. Here we assume the foreign key is real, so the corresponding constraint in the database is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"// If foreign key pointing to associated entity is real, \n// create foreign key constraint\nalter table BOOK  \n    add constraint FK_BOOK__BOOK_STORE\n        /* highlight-next-line */\n        foreign key(STORE_ID)\n            references BOOK_STORE(ID); \n"})}),"\n",(0,a.jsx)(n.h2,{id:"2-based-on-join-table",children:"2. Based on Join Table"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity  \npublic interface Book {\n\n    @Nullable\n    @ManyToOne\n    @JoinTable  \n    BookStore store();\n\n    ...\n}\n"})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"  ',children:"@Entity\ninterface Book {\n\n    @Nullable\n    @ManyToOne\n    @JoinTable\n    val store: BookStore?\n\n    ...\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, no properties are specified for ",(0,a.jsx)(n.code,{children:"@JoinTable"}),". Jimmer will deduce the column names corresponding to the ",(0,a.jsx)(n.code,{children:"store"})," property based on the ",(0,a.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If the default ",(0,a.jsx)(n.a,{href:"../naming-strategy",children:"naming strategy"})," is not overridden by the user, the deduced join table information is:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Join table name: BOOK_BOOK_STORE_MAPPING"}),"\n",(0,a.jsx)(n.li,{children:"Join table foreign key column pointing to current entity: BOOK_ID"}),"\n",(0,a.jsx)(n.li,{children:"Join table foreign key column pointing to associated entity: STORE_ID"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"So the previous code is equivalent to:"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java" ',children:'@Entity\npublic interface Book {\n\n    @Null\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_BOOK_STORE_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "STORE_ID"\n    )\n    BookStore store();\n\n    ...\n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_BOOK_STORE_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "STORE_ID"\n    )\n    val store: BookStore?\n\n    ...\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The join table ",(0,a.jsx)(n.code,{children:"BOOK_BOOK_STORE_MAPPING"})," is defined as:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create table BOOK_BOOK_STORE_MAPPING(\n    BOOK_ID bigint not null,\n    STORE_ID bigint not null\n);\n\nalter table BOOK_STORE_MAPPING\n    add constraint PK_BOOK_STORE_MAPPING\n        primary(BOOK_ID, STORE_ID);\n\n// If foreign key pointing to current entity is real, \n// create foreign key constraint\nalter table BOOK_BOOK_STORE_MAPPING  \n    add constraint FK_BOOK_BOOK_STORE_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\n// If foreign key pointing to associated entity is real, \n// create foreign key constraint \nalter table BOOK_BOOK_STORE_MAPPING\n    add constraint FK_BOOK_BOOK_STORE_MAPPING__STORE\n        foreign key(STORE_ID)\n            references BOOK_STORE(ID);\n\n// This constraint is very important.\n// Otherwise this join table expresses a many-to-many association \n// rather than a many-to-one association\nalter table BOOK_BOOK_STORE_MAPPING\n    add constraint UQ_BOOK_BOOK_STORE_MAPPING__BOOK_ID\n        unique(BOOK_ID);\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The join table has only two foreign keys, both non-null. The join table maintains the association by inserting and deleting data, never storing null data itself."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The join table has no corresponding ORM entity and does not need an independent primary key. The two foreign keys combined can serve as the primary key."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["By default, the join table represents a many-to-many association. To degrade it to a many-to-one association, a unique constraint must be specified for the foreign key ",(0,a.jsx)(n.code,{children:"BOOK_ID"})," pointing to the current entity."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Unless for compatibility with existing database design, many-to-one associations are recommended to use foreign keys directly instead of join tables."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Once a many-to-one association is mapped using a join table, the Jimmer association property must be nullable, because the database cannot guarantee that any entity must have corresponding data in the join table."}),"\n"]}),"\n"]})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(18215);const o={tabItem:"tabItem_Ymn6"};var i=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),o=t(18215),i=t(23104),r=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=h(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:t,groupId:o}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,d.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),f=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var O=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==a&&(c(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,O.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,O.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,O.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function x(e){const n=g(e);return(0,O.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,O.jsx)(y,{...n,...e}),(0,O.jsx)(j,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,O.jsx)(x,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);