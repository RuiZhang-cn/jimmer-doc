"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1341],{63645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(74848),i=t(28453),r=t(11470),l=t(19365);const s={sidebar_position:2,title:"MappedSuperclass"},o=void 0,c={id:"mapping/advanced/mapped-super-class",title:"MappedSuperclass",description:"Basic Usage",source:"@site/docs/mapping/advanced/mapped-super-class.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/mapped-super-class",permalink:"/jimmer-doc/docs/mapping/advanced/mapped-super-class",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/mapped-super-class.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"MappedSuperclass"},sidebar:"tutorialSidebar",previous:{title:"Embedded Properties",permalink:"/jimmer-doc/docs/mapping/advanced/embedded"},next:{title:"Logical Deletion",permalink:"/jimmer-doc/docs/mapping/advanced/logical-deleted/"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Multiple Inheritance",id:"multiple-inheritance",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.sql.MappedSuperclass"})," is used to provide abstract super types that can be inherited by entities."]}),"\n",(0,a.jsx)(n.p,{children:"The super type itself is not an entity, but can be inherited by multiple entity types to avoid duplicate declaration of the same properties in multiple entities."}),"\n",(0,a.jsx)(n.p,{children:"Let's look at an example. First define the super type:"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="BaseEntity.java" ',children:"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    @ManyToOne\n    User createdBy();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    User modifiedBy();\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="BaseEntity.kt"',children:"// highlight-next-line  \n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    @ManyToOne\n    val createdBy: User\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    val modifiedBy: User\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Other entities can inherit it:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"BookStore"})}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="BookStore.java"',children:"@Entity\n// highlight-next-line\npublic interface BookStore extends BaseEntity {\n\n    ...Omit other code...\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStore.kt"',children:"@Entity\n// highlight-next-line\ninterface BookStore : BaseEntity {\n\n    ...Omit other code...\n}\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Book"})}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\n// highlight-next-line \npublic interface Book extends BaseEntity {\n\n    ...Omit other code...\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\n// highlight-next-line\ninterface Book : BaseEntity {\n\n    ...Omit other code...\n}\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Author"})}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:"@Entity\n// highlight-next-line\npublic interface Author extends BaseEntity {\n\n    ...Omit other code...\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt" ',children:"@Entity\n// highlight-next-line\ninterface Author : BaseEntity {\n\n    ...Omit other code...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"multiple-inheritance",children:"Multiple Inheritance"}),"\n",(0,a.jsxs)(n.p,{children:["Types decorated with ",(0,a.jsx)(n.code,{children:"MappedSuperclass"})," support multiple inheritance. Other types can inherit from multiple ",(0,a.jsx)(n.code,{children:"MappedSuperclass"})," super types."]}),"\n",(0,a.jsxs)(n.p,{children:["Add a new abstract interface ",(0,a.jsx)(n.code,{children:"TenantAware"})," to be inherited by all multi-tenant entities:"]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="TenantAware.java"',children:"// highlight-next-line\n@MappedSuperclass  \npublic interface TenantAware {\n\n    String tenant();\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="TenantAware.kt"',children:"// highlight-next-line\ninterface TenantAware {\n\n    val tenant: String\n}\n"})})})]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\n// highlight-next-line\npublic interface Book extends BaseEntity, TenantAware {\n\n    ...Omit other code...\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"  ',children:"@Entity\n// highlight-next-line\ninterface Book : BaseEntity, TenantAware {\n\n    ...Omit other code...\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Modify ",(0,a.jsx)(n.code,{children:"Book"})," to inherit not only ",(0,a.jsx)(n.code,{children:"BaseEntty"})," but also ",(0,a.jsx)(n.code,{children:"TenantAware"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["The role of ",(0,a.jsx)(n.code,{children:"@MapperSuperclass"})," is not just to reduce duplicate code, it can also cooperate with two other functions:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../query/global-filter",children:"Global Filters"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"../../mutation/draft-interceptor",children:"Interceptors"})}),"\n"]}),(0,a.jsx)(n.p,{children:"When used in cooperation with them, multiple inheritance can provide good flexibility."})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(96540),i=t(18215),r=t(23104),l=t(56347),s=t(205),o=t(57485),c=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=m({queryString:t,groupId:i}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),j=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=s[t].value;i!==a&&(c(n),l(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);