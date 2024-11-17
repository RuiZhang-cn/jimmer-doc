"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(83117),r=a(67294),i=a(34334),o=a(72389),l=a(67392),p=a(7094),m=a(12466);const c="tabList__CuJ",s="tabItem_LNqP";function u(e){var t;const{lazy:a,block:o,defaultValue:u,values:d,groupId:k,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:f}=(0,p.U)(),[T,C]=(0,r.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,m.o5)();if(null!=k){const e=N[k];null!=e&&e!==T&&b.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,a=E.indexOf(t),n=b[a].value;n!==T&&(j(t),C(n),null!=k&&f(k,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},v)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:S,onClick:S},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},16402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>s});var n=a(83117),r=(a(67294),a(3905)),i=a(65488),o=a(85162);const l={sidebar_position:10,title:"\u8fdc\u7a0b\u5173\u8054"},p=void 0,m={unversionedId:"mapping/advanced/remote",id:"mapping/advanced/remote",title:"\u8fdc\u7a0b\u5173\u8054",description:"\u8fdc\u7a0b\u5173\u8054\u662fJimmer\u548c\u5fae\u670d\u52a1\u6280\u672f\u4f53\u7cfb\u76f8\u7ed3\u5408\u540e\u7684\u4ea7\u7269\uff0c\u4f1a\u5728Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/remote.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/remote",permalink:"/jimmer-doc/zh/docs/mapping/advanced/remote",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/remote.mdx",tags:[],version:"current",lastUpdatedAt:1731427770,formattedLastUpdatedAt:"2024\u5e7411\u670812\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"\u8fdc\u7a0b\u5173\u8054"},sidebar:"tutorialSidebar",previous:{title:"Key",permalink:"/jimmer-doc/zh/docs/mapping/advanced/key"},next:{title:"OnDissociate",permalink:"/jimmer-doc/zh/docs/mapping/advanced/on-dissociate"}},c={},s=[{value:"@Entity",id:"entity",level:2},{value:"@MappedSuperclass",id:"mappedsuperclass",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fdc\u7a0b\u5173\u8054\u662fJimmer\u548c\u5fae\u670d\u52a1\u6280\u672f\u4f53\u7cfb\u76f8\u7ed3\u5408\u540e\u7684\u4ea7\u7269\uff0c\u4f1a\u5728",(0,r.kt)("a",{parentName:"p",href:"../../spring/spring-cloud"},"Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054"),"\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u7684\u76ee\u7684\u5e76\u975e\u7cfb\u7edf\u6027\u8bb2\u89e3\u8fdc\u7a0b\u5173\u8054\uff0c\u4ec5\u4ec5\u4ecb\u7ecd\u8fdc\u7a0b\u5173\u8054\u6240\u9700\u6620\u5c04\u914d\u7f6e\u3002")),(0,r.kt)("h2",{id:"entity"},"@Entity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Entity"),"\u6ce8\u89e3\u5177\u5907\u53ef\u9009\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"microServiceName"),'\uff0c\u9ed8\u8ba4\u4e3a""\u3002'),(0,r.kt)("p",null,"\u5173\u8054\u5c5e\u6027\u6d89\u53ca\u4e24\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff0c\u56e0\u4e3a\u5173\u8054\u5fc5\u7136\u4ece\u6e90\u5934\u65b9\u6307\u5411\u76ee\u6807\u65b9 ",(0,r.kt)("em",{parentName:"p"},"(\u81ea\u5173\u8054\u5c5e\u6027\u6bd4\u8f83\u7279\u6b8a\uff0c\u6e90\u5934\u65b9\u548c\u76ee\u6807\u65b9\u91cd\u5408)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5173\u8054\u5c5e\u6027\u7684\u6e90\u5b9e\u4f53\u548c\u76ee\u6807\u5b9e\u4f53\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"microServiceName"),"\u76f8\u7b49\uff0c\u5219\u8be5\u5173\u8054\u4e3a\u672c\u5730\u5173\u8054 ",(0,r.kt)("em",{parentName:"p"},"\uff08\u672c\u6587\u4e4b\u524d\u6240\u6709\u4f8b\u5b50\u4e2d\u7684\u5b9e\u4f53\u90fd\u91c7\u7528\u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"em"},"microServiceName"),"\uff0c\u56e0\u6b64\u90fd\u662f\u672c\u5730\u5173\u8054\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5173\u8054\u5c5e\u6027\u7684\u6e90\u5b9e\u4f53\u548c\u76ee\u6807\u5b9e\u4f53\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"microServiceName"),"\u4e0d\u76f8\u7b49\uff0c\u5219\u8be5\u5173\u8054\u4e3a\u8fdc\u7a0b\u5173\u8054\u3002"))),(0,r.kt)("p",null,"\u4f8b\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3b\u52a8\u65b9 ",(0,r.kt)("em",{parentName:"p"},"(\u5fc5\u9700)"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'// highlight-next-line\n@Entity(microServiceName = "book-service")\npublic interface Book {\n\n    @ManyToMany\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.kt"',title:'"Book.kt"'},'// highlight-next-line\n@Entity(microServiceName = "book-service")\ninterface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ece\u52a8\u65b9 ",(0,r.kt)("em",{parentName:"p"},"(\u53ef\u9009)"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Author.authors")),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'// highlight-next-line\n@Entity(microServiceName = "author-service")\npublic interface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'// highlight-next-line\n@Entity(microServiceName = "author-service")\ninterface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u7684\u5fae\u670d\u52a1\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"book-service"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Author"),"\u7684\u5fae\u670d\u52a1\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"author-service"),"\u3002\u4e8c\u8005\u4e0d\u76f8\u7b49\uff0c\u56e0\u6b64",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books"),"\u90fd\u662f\u8fdc\u7a0b\u5173\u8054"),(0,r.kt)("h2",{id:"mappedsuperclass"},"@MappedSuperclass"),(0,r.kt)("p",null,"\u4f5c\u4e3a\u8d85\u7c7b\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MappedSuperclass"),"\u6709\u4e24\u79cd\u7528\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5305\u542b\u5173\u8054\u5c5e\u6027\uff0c\u4f46\u5fc5\u9700\u96b6\u5c5e\u4e8e\u540c\u4e00\u4e2a\u5fae\u670d\u52a1"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookServiceCommonEntity.java"',title:'"BookServiceCommonEntity.java"'},'// highlight-next-line\n@MappedSuperclass(microServiceName = "book-service")\npublic interface BookServiceCommonEntity {\n\n    LocalDateTime createdTime();\n\n    @ManyToOne\n    User createdBy();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    User modifiedBy();\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookServiceCommonEntity.kt"',title:'"BookServiceCommonEntity.kt"'},'// highlight-next-line\n@MappedSuperclass(microServiceName = "book-service")\ninterface BookServiceCommonEntity {\n\n    val createdTime: LocalDateTime\n\n    @ManyToOne\n    val createdBy: User\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    val modifiedBy: User\n}\n')))),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"BookServiceCommonEntity"),"\u5177\u5907\u5173\u8054\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"createdBy"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"modifiedBy"),'\uff0c\u4f46\u662f\u53ea\u6709\u540c\u5c5e\u4e8e\u5fae\u670d\u52a1"book-service"\u7684',(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"\u6216\u5176\u4ed6",(0,r.kt)("inlineCode",{parentName:"p"},"MappedSuperclass"),"\u624d\u53ef\u4ee5\u7ee7\u627f\u5b83\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8de8\u8d8a\u4efb\u4f55\u5fae\u670d\u52a1\uff0c\u4f46\u4e0d\u5f97\u5305\u542b\u5173\u8054\u5c5e\u6027"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CommonEntity.java"',title:'"CommonEntity.java"'},"// highlight-next-line\n@MappedSuperclass(acrossMicroServices = true)\npublic interface CommonEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CommonEntity.kt"',title:'"CommonEntity.kt"'},"// highlight-next-line\n@MappedSuperclass(acrossMicroServices = true)\ninterface CommonEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n}\n")))),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"CommonEntity"),"\u53ef\u4ee5\u8de8\u8d8a\u4efb\u4f55\u5fae\u670d\u52a1\uff0c\u4efb\u4f55\u5fae\u670d\u52a1\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"\u6216\u5176\u4ed6",(0,r.kt)("inlineCode",{parentName:"p"},"MappedSuperclass"),"\u90fd\u53ef\u4ee5\u7ee7\u627f\u5b83\uff0c\u4f46\u5176\u672c\u8eab\u4e0d\u7684\u5305\u542b\u4efb\u4f55\u5173\u8054\u5c5e\u6027\u3002"))))}d.isMDXComponent=!0}}]);