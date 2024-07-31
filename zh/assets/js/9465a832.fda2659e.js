"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2951],{88266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),s=t(11470),l=t(19365);const o={sidebar_position:4,title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61"},i=void 0,c={id:"mutation/save-command/incomplete",title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61",description:"\u4fdd\u5b58\u6307\u4ee4\u7684\u53c2\u6570\u662f\u52a8\u6001\u5bf9\u8c61\uff0c\u5982\u679c\u52a8\u6001\u53ea\u6709\u90e8\u5206\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86\uff0c\u90a3\u4e48\u8be5\u5bf9\u8c61\u5c31\u662f\u4e00\u4e2a\u4e0d\u5b8c\u6574\u5bf9\u8c61\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/incomplete.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/incomplete",permalink:"/jimmer-doc/zh/docs/mutation/save-command/incomplete",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/incomplete.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61"},sidebar:"tutorialSidebar",previous:{title:"\u5173\u8054\u5bf9\u8c61\u4fdd\u5b58\u6a21\u5f0f",permalink:"/jimmer-doc/zh/docs/mutation/save-command/associated-save-mode"},next:{title:"\u4fdd\u5b58\u5173\u8054",permalink:"/jimmer-doc/zh/docs/mutation/save-command/association"}},u={},d=[{value:"JPA\u793a\u8303",id:"jpa\u793a\u8303",level:2},{value:"Jimmer\u793a\u8303",id:"jimmer\u793a\u8303",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u4fdd\u5b58\u6307\u4ee4\u7684\u53c2\u6570\u662f\u52a8\u6001\u5bf9\u8c61\uff0c\u5982\u679c\u52a8\u6001\u53ea\u6709\u90e8\u5206\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86\uff0c\u90a3\u4e48\u8be5\u5bf9\u8c61\u5c31\u662f\u4e00\u4e2a\u4e0d\u5b8c\u6574\u5bf9\u8c61\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u8bf4\u660e\u4e0d\u5b8c\u6574\u5bf9\u8c61\u7684\u4ef7\u503c\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\uff0c\u5c06id\u4e3a8\u7684",(0,r.jsx)(n.code,{children:"Book"}),"\u7684",(0,r.jsx)(n.code,{children:"store"}),"\u4fee\u6539\u4e3anull\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u770b\u8d77\u6765\uff0c\u4f3c\u4e4e\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7",(0,r.jsx)(n.a,{href:"../update-statement",children:"\u4fee\u6539\u8bed\u53e5"}),"\u6267\u884c\u4e00\u6761UPDATE\u8bed\u53e5"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f97\u5230\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"Book"}),"\u5bf9\u8c61\uff0c\u4fee\u6539\u5176null\u5c5e\u6027\uff0c\u5e76\u4fdd\u5b58\u5b83"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5927\u90e8\u5206\u5f00\u53d1\u4eba\u5458\u90fd\u6bd4\u8f83\u504f\u597d\u7b2c\u4e8c\u79cd\u65b9\u6cd5\uff0c\u56e0\u6b64\uff0c\u672c\u6587\u8ba8\u8bba\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"jpa\u793a\u8303",children:"JPA\u793a\u8303"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4ecb\u7ecdJimmer\u4fdd\u5b58\u4e0d\u5b8c\u6574\u5bf9\u8c61\u7684\u529f\u80fd\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u6765\u770b\u770b\u5982\u4f55\u4f7f\u7528JPA\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="JPA\u793a\u8303"',children:"EntityManager entityManager = ...\u4ece\u5f53\u524d\u4e8b\u52a1\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6JPA\u4f1a\u8bdd\u5bf9\u8c61\uff0c\u7565...\nBook book = entityManager.find(Book.class, 8L);\n\nbook.setStore(null); // JPA\u4e2d\u5b9e\u4f53\u662f\u53ef\u53d8\u7684\uff0c\u5c06\u5173\u8054\u4fee\u6539\u4e3anull\n\n// \u8fd9\u91cc\u8c03\u7528merge\u4ec5\u4e3a\u4e86\u6e05\u6670\uff0c\u53ef\u4ee5\u4e0d\u8c03\uff0c\u56e0\u4e3a\u4e8b\u52a1\u63d0\u4ea4\u65f6JPA\u5fc5\u7136\u4fee\u6539\u6570\u636e\u5e93\nentityManager.merge(book);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9664\u4e86\u8981\u5c06",(0,r.jsx)(n.code,{children:"store"}),"\u4fee\u6539\u4e3anull\u5916\uff0c\u6211\u4eec\u5e76\u4e0d\u77e5\u9053\u5176\u4ed6\u5c5e\u6027\u7684\u73b0\u6709\u503c\u3002\u5728JPA\u4e2d\uff0c\u82e6\u4e8e\u57fa\u4e8e\u7b80\u5355\u7684POJO\u7684\u5b9e\u4f53\u662f\u5f62\u72b6\u56fa\u5b9a\u9759\u6001\u7c7b\u578b\uff0c\u6211\u4eec\u4e0d\u5f97\u4e0d\u67e5\u8be2\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\uff0c\u4fee\u6539",(0,r.jsx)(n.code,{children:"store"}),"\u5c5e\u6027 ",(0,r.jsx)(n.em,{children:"(\u5176\u4ed6\u5c5e\u6027\u4fdd\u6301\u4e0d\u53d8)"}),"\uff0c\u518d\u6b21\u4fdd\u5b58\u8fd9\u4e2a\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u54ea\u6015\u5bf9\u8c61\u6709\u4e0a\u767e\u4e2a\u5c5e\u6027\uff0c\u6211\u4eec\u4e5f\u4e0d\u5f97\u4e0d\u8fd9\u6837\u505a\uff0c\u8fd9\u5f62\u6210\u4e86\u975e\u5e38\u660e\u663e\u7684\u6d6a\u8d39\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"jimmer\u793a\u8303",children:"Jimmer\u793a\u8303"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"sqlClient.update(\n    Objects.createBook(draft -> {\n        draft.setId(8L);\n        draft.setStore(null);\n    })\n);\n"})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"sqlClient.update(\n    new(Book::class).by {\n        id = 8L\n        store = null\n    }\n);\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u660e\u786e\u4f7f\u7528",(0,r.jsx)(n.code,{children:"update"})," ",(0,r.jsxs)(n.em,{children:["(\u6216",(0,r.jsx)(n.code,{children:"save(book, SaveMode.UPDATE_ONLY)"}),")"]})," \u660e\u786e\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u66f4\u65b0\u64cd\u4f5c\uff0c\u907f\u514d",(0,r.jsx)(n.code,{children:"UPSERT"}),"\u6a21\u5f0f\u5e26\u6765\u7684\u8bd5\u63a2\u6027\u67e5\u8be2\uff0c\u7b80\u5316\u8ba8\u8bba\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u51ed\u7a7a\u634f\u9020"}),"\u4e00\u4e2aBook\u5bf9\u8c61\uff0c\u53ea\u5bf9\u5176",(0,r.jsx)(n.code,{children:"id"}),"\u5c5e\u6027\u548c",(0,r.jsx)(n.code,{children:"store"}),"\u5c5e\u6027\u8d4b\u503c\uff0c\u800c\u5176\u4ed6\u6240\u6709\u5c5e\u6027\u90fd\u5904\u4e8e\u672a\u77e5\u72b6\u6001\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4e0d\u5b8c\u6574\u5bf9\u8c61\u544a\u8bc9Jimmer\uff0c\u9664",(0,r.jsx)(n.code,{children:"store"}),"\u5c5e\u6027\u5916\uff0c\u4e0d\u4fee\u6539\u5176\u4ed6\u4efb\u4f55\u5c5e\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Jimmer\u5c06\u76f4\u63a5\u751f\u6210\u5982\u4e0bSQL"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    STORE_ID = ? /* <null: long> */\nwhere\n    ID = ? /* 8 */\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u8bf7\u5fd8\u8bb0\u4ee5\u524d\u90a3\u79cd\u4f4e\u6548\u7684\u6a21\u5f0f\uff1a\u67e5\u8be2->\u4fee\u6539->\u4fdd\u5b58"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),s=t(23104),l=t(56347),o=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),j=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);