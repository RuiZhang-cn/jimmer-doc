"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6298],{32233:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(74848),l=r(28453),s=r(11470),a=r(19365);const i={sidebar_position:10,title:"Native\u8868\u8fbe\u5f0f"},o=void 0,c={id:"query/native-sql",title:"Native\u8868\u8fbe\u5f0f",description:"NativeSQL\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6570\u636e\u5e93\u4ea7\u54c1\u603b\u4f1a\u6709\u7279\u6709\u7684\u529f\u80fd\uff0c\u9700\u8981\u628a\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\u53d1\u6325\u51fa\u6765\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/native-sql.mdx",sourceDirName:"query",slug:"/query/native-sql",permalink:"/jimmer-doc/zh/docs/query/native-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/native-sql.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Native\u8868\u8fbe\u5f0f"},sidebar:"tutorialSidebar",previous:{title:"DSL\u8868\u8fbe\u5f0f",permalink:"/jimmer-doc/zh/docs/query/expression"},next:{title:"\u5168\u5c40\u8fc7\u6ee4\u5668",permalink:"/jimmer-doc/zh/docs/query/global-filter/"}},u={},d=[{value:"\u4f8b\u5b50\u4e00\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",id:"\u4f8b\u5b50\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",level:2},{value:"\u4f8b\u5b50\u4e8c\uff1a\u5206\u6790\u51fd\u6570",id:"\u4f8b\u5b50\u4e8c\u5206\u6790\u51fd\u6570",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"NativeSQL\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u529f\u80fd\uff0c\u6570\u636e\u5e93\u4ea7\u54c1\u603b\u4f1a\u6709\u7279\u6709\u7684\u529f\u80fd\uff0c\u9700\u8981\u628a\u6570\u636e\u5e93\u4ea7\u54c1\u7279\u6709\u7684\u80fd\u529b\u53d1\u6325\u51fa\u6765\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f8b\u5b50\u4e00\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d",children:"\u4f8b\u5b50\u4e00\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6f14\u793a\u5982\u4f55\u4f7f\u7528Oracle\u548cHSQLDB\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u3002"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'AuthorTable table = Tables.AUTHOR_TABLE;\n\nList<Author> authors = sqlClient\n    .createQuery(table)\n    .where(\n        Predicate.sql(\n            "regexp_like(%e, %v)",\n            it -> it\n                .expression(table.firstName())\n                .value("^Ste(v|ph)en$")\n        )\n    )\n    .select(table)\n    .execute();\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val authors = sqlClient\n    .createQuery(Author::class) {\n        where(\n            // highlight-next-line\n            sql(Boolean::class, "regexp_like(%e, %v)") {\n                expression(table.firstName)\n                value("^Ste(v|ph)en$")\n            }\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["\u5728Java\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u8c03\u7528\u4e86",(0,t.jsx)(n.code,{children:"Predicate.sql"}),"\u521b\u5efa\u57fa\u4e8e\u672c\u5730SQL\u7684\u67e5\u8be2\u6761\u4ef6\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5176\u5b83\u8868\u8fbe\u5f0f\u7c7b\u578b\u4e5f\u652f\u6301NativeSQL\u8868\u8fbe\u5f0f\uff0c",(0,t.jsx)(n.code,{children:"sql"}),"\u51fd\u6570\u5171\u67095\u4e2a"]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Predicate.sql(...)"}),"\n",(0,t.jsx)(n.li,{children:"Expression.string().sql(...)"}),"\n",(0,t.jsx)(n.li,{children:"Expression.numeric().sql(...)"}),"\n",(0,t.jsx)(n.li,{children:"Expression.comparable().sql(...)"}),"\n",(0,t.jsx)(n.li,{children:"Expression.any().sql(...)"}),"\n"]}),(0,t.jsx)(n.p,{children:"kotlin\u6ca1\u6709\u8fd9\u4e2a\u95ee\u9898\uff0c\u5176API\u662f\u7edf\u4e00\u7684"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sql(...)"}),"\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662fSQL\u5b57\u7b26\u4e32\u6a21\u677f\uff0c\u53ef\u4ee5\u5305\u542b\u7279\u6b8a\u7b26\u53f7",(0,t.jsx)(n.code,{children:"%e"}),"\u548c",(0,t.jsx)(n.code,{children:"%v"}),"\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"%e"}),": \u5373Expression\uff0c\u690d\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"%v"}),": \u5373Value\uff0c\u690d\u5165\u4e00\u4e2a\u503c"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sql(...)"}),"\u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u53ef\u9009\u7684\uff0c\u662f\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\uff0clambda\u8868\u8fbe\u5f0f\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u652f\u6301\u4e24\u4e2a\u65b9\u6cd5\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expression(Expresion<?>)"}),': \u690d\u5165\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u548cSQL\u6a21\u677f\u4e2d\u7684"%e"\u5339\u914d\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"value(Object)"}),': \u690d\u5165\u4e00\u4e2a\u503c\uff0c\u548cSQL\u6a21\u677f\u4e2d\u7684"%v"\u5339\u914d\u3002']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u662f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.FIRST_NAME, \n    tb_1_.LAST_NAME, \n    tb_1_.GENDER \nfrom AUTHOR as tb_1_ \nwhere\n    /* highlight-next-line */\n    regexp_like(tb_1_.FIRST_NAME, ?)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f8b\u5b50\u4e8c\u5206\u6790\u51fd\u6570",children:"\u4f8b\u5b50\u4e8c\uff1a\u5206\u6790\u51fd\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4f7f\u7528\u5206\u6790\u51fd\u6570"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(a.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'List<Tuple3<Book, Integer, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .select(\n        table,\n        Expression.numeric().sql(\n            Integer.class,\n            // highlight-next-line\n            "rank() over(order by %e desc)",\n            table.price()\n        ),\n        Expression.numeric().sql(\n            Integer.class,\n            // highlight-next-line\n            "rank() over(partition by %e order by %e desc)",\n            new Expression[] { table.storeId(), table.price() }\n        )\n    )\n    .execute();\n'})})}),(0,t.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val tuples = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table,\n            // highlight-next-line\n            sql(Int::class, "rank() over(order by %e desc)") {\n                expression(table.price)\n            },\n            // highlight-next-line\n            sql("rank() over(partition by %e order by %e desc)") {\n                expression(table.store.id)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u67e5\u8be2\u4e86\u4e09\u5217"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7b2c\u4e00\u5217\uff1aBook\u5bf9\u8c61"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7b2c\u4e8c\u5217\uff1a\u4e66\u7c4d\u7684\u4ef7\u683c\u5728\u6240\u6709\u4e66\u7c4d\u4e2d\u7684\u540d\u6b21"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7b2c\u4e8c\u5217\uff1a\u4e66\u7c4d\u7684\u4ef7\u683c\u5728\u6240\u5c5e\u4e66\u5e97\u7684\u4e2d\u7684\u540d\u6b21"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID,\n    /* highlight-next-line */\n    rank() over(\n        order by tb_1_.PRICE desc\n    ),\n    /* highlight-next-line */\n    rank() over(\n        partition by tb_1_.STORE_ID \n        order by tb_1_.PRICE desc\n    )\nfrom BOOK tb_1_\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(18215);const l={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),l=r(18215),s=r(23104),a=r(56347),i=r(205),o=r(57485),c=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const l=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,s=h(e),[a,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=b({queryString:r,groupId:l}),[x,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,u.Dv)(r);return[l,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:l}),m=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),l=i[r].value;l!==t&&(c(n),a(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,l.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function _(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,j.jsx)(_,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const l={},s=t.createContext(l);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);