"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9803],{70057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>I,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(74848),i=t(28453),r=t(11470),o=t(19365);const s={sidebar_position:3,title:"\u4e00\u5bf9\u591a"},l=void 0,c={id:"mapping/base/association/one-to-many",title:"\u4e00\u5bf9\u591a",description:"\u548cJPA\u4e0d\u540c\uff0cJimmer\u4e0d\u652f\u6301\u5355\u5411\u4e00\u5bf9\u591a\u5173\u8054\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u53ea\u80fd\u4f5c\u4e3a\u591a\u5bf9\u4e00\u5173\u8054\u955c\u50cf\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u5fc5\u7136\u610f\u5473\u7740\u53cc\u5411\u5173\u8054\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/association/one-to-many.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/one-to-many",permalink:"/jimmer-doc/zh/docs/mapping/base/association/one-to-many",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/association/one-to-many.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4e00\u5bf9\u591a"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u5bf9\u4e00",permalink:"/jimmer-doc/zh/docs/mapping/base/association/many-to-one"},next:{title:"\u591a\u5bf9\u591a",permalink:"/jimmer-doc/zh/docs/mapping/base/association/many-to-many"}},u={},d=[];function m(e){const n={a:"a",code:"code",div:"div",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u548cJPA\u4e0d\u540c\uff0cJimmer\u4e0d\u652f\u6301\u5355\u5411\u4e00\u5bf9\u591a\u5173\u8054\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u53ea\u80fd\u4f5c\u4e3a\u591a\u5bf9\u4e00\u5173\u8054\u955c\u50cf\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u5fc5\u7136\u610f\u5473\u7740\u53cc\u5411\u5173\u8054\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5de6\u4fa7\uff1a\u5728",(0,a.jsx)(n.a,{href:"./many-to-one",children:"\u591a\u5bf9\u4e00"}),"\u4e00\u6587\u4e2d\u6211\u4eec\u8ba8\u8bba\u8fc7\u7684",(0,a.jsx)(n.code,{children:"Book.store"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u53f3\u4fa7\uff1a\u672c\u6587\u8981\u8ba8\u8bba\u7684\u4e00\u5bf9\u591a\u5173\u8054",(0,a.jsx)(n.code,{children:"BookStore.books"}),"\uff0c\u5b83\u662f",(0,a.jsx)(n.code,{children:"Book.store"}),"\u7684\u955c\u50cf"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)("div",{style:{display:"flex",alignItems:"start"},children:[(0,a.jsx)("div",{children:(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @ManyToOne\n    @JoinColumn(name = "STORE_ID")\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToOne\n    @JoinColumn(name = "STORE_ID")\n    val store: BookStore\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]})}),(0,a.jsx)("div",{children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"mirror",src:t(34439).A+"",width:"130",height:"239"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="BookStore.java"',children:'@Entity\npublic interface BookStore {\n\n    // `mappedBy`\u8868\u793a`BookStore.books\n    // `\u662f`Book.store`\u7684\u955c\u50cf\n    // highlight-next-line\n    @OneToMany(mappedBy = "store")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStore.kt"',children:'@Entity\ninterface BookStore {\n\n    // `mappedBy`\u8868\u793a`BookStore.books`\n    // \u662f`Book.store`\u7684\u955c\u50cf\n    // highlight-next-line\n    @OneToMany(mappedBy = "store")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]})})]}),"\n",(0,a.jsx)(n.div,{children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@OneToMany"}),"\u5173\u8054\u4ec5\u4ec5\u662f",(0,a.jsx)(n.code,{children:"@ManyToOne"}),"\u5173\u8054\u7684\u955c\u50cf\uff0c\u4e0d\u5f97\u4f7f\u7528",(0,a.jsx)(n.code,{children:"@JoinColumn"}),"\u548c",(0,a.jsx)(n.code,{children:"@JoinTable"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@OneToMany"}),"\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u975enull\uff0c\u5982\u679c\u67e5\u8be2\u7236\u5bf9\u8c61\u5e76\u8981\u6c42\u6293\u53d6\u5176\u4e00\u5bf9\u591a\u5173\u8054\u5c5e\u6027\uff0c\u90a3\u4e48\u5bf9\u4e8e\u6ca1\u6709\u5bf9\u5e94\u5b50\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61\u800c\u8a00\uff0c\u8be5\u5c5e\u6027\u7684\u503c\u662f\u4e00\u4e2a\u957f\u5ea6\u4e3a0\u7684\u96c6\u5408\uff0c\u800c\u975enull"]}),"\n"]}),"\n"]})})]})}function I(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>Z});var a=t(96540),i=t(18215),r=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function I(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!I({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:t,groupId:i}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,u.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),j=(()=>{const e=c??h;return I({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!I({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=s[t].value;i!==a&&(c(n),o(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function M(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=h(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(M,{...n,...e})]})}function Z(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},34439:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);