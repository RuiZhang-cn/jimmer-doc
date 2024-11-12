"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),p=n(7094),m=n(12466);const u="tabList__CuJ",s="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:c,groupId:k,className:N}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,p.U)(),[T,j]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=k){const e=f[k];null!=e&&e!==T&&g.some((t=>t.value===e))&&j(e)}const I=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==T&&(x(t),j(a),null!=k&&y(k,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},N)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},57966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:6,title:"\u53ef\u89c1\u6027"},p=void 0,m={unversionedId:"object/visibility",id:"object/visibility",title:"\u53ef\u89c1\u6027",description:"\u4e4b\u524d\u6587\u6863\u5df2\u7ecf\u8be6\u7ec6\u8ba8\u8bba\u4e86Jimmer\u5c5e\u6027\u7684\u52a8\u6001\u6027\u548c\u4e0d\u53ef\u53d8\u6027(./immutable)\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u65b0\u7684\u7279\u6027\uff1a\u53ef\u89c1\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/object/visibility.mdx",sourceDirName:"object",slug:"/object/visibility",permalink:"/jimmer-doc/zh/docs/object/visibility",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/object/visibility.mdx",tags:[],version:"current",lastUpdatedAt:1731341376,formattedLastUpdatedAt:"2024\u5e7411\u670811\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u53ef\u89c1\u6027"},sidebar:"tutorialSidebar",previous:{title:"MapStruct",permalink:"/jimmer-doc/zh/docs/object/view/mapstruct"},next:{title:"\u5de5\u5177\u65b9\u6cd5",permalink:"/jimmer-doc/zh/docs/object/tool"}},u={},s=[{value:"\u7ea0\u7f20\u5c5e\u6027",id:"\u7ea0\u7f20\u5c5e\u6027",level:2},{value:"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027",id:"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027",level:2},{value:"\u5c5e\u6027\u53ef\u89c1\u6027",id:"\u5c5e\u6027\u53ef\u89c1\u6027",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e4b\u524d\u6587\u6863\u5df2\u7ecf\u8be6\u7ec6\u8ba8\u8bba\u4e86Jimmer\u5c5e\u6027\u7684",(0,r.kt)("a",{parentName:"p",href:"./dynamic"},"\u52a8\u6001\u6027"),"\u548c\u4e0d\u53ef\u53d8\u6027(./immutable)\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u65b0\u7684\u7279\u6027\uff1a\u53ef\u89c1\u6027\u3002"),(0,r.kt)("h2",{id:"\u7ea0\u7f20\u5c5e\u6027"},"\u7ea0\u7f20\u5c5e\u6027"),(0,r.kt)("p",null,"\u5bf9\u4e8eJimmer\u5b9e\u4f53\u800c\u8a00\uff0c\u867d\u7136\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u5c5e\u6027\u4e4b\u95f4\u662f\u5f7c\u6b64\u72ec\u7acb\u7684\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u60c5\u51b5\uff0c\u591a\u4e2a\u5c5e\u6027\u4f1a\u5171\u4eab\u540c\u4e00\u4efd\u79c1\u6709\u6570\u636e\uff0c\u4ece\u800c\u5bfc\u81f4\u5f7c\u6b64\u5f71\u54cd\u3002\u6211\u4eec\u79f0\u591a\u4e2a\u5c5e\u6027\u4e4b\u95f4\u4ea7\u751f\u4e86\u7ea0\u7f20\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u60c5\u51b5\u5305\u62ec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8eJava/Kotlin\u7684\u8ba1\u7b97\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"../mapping/advanced/calculated/formula#%E5%9F%BA%E4%BA%8Ejavakotlin%E7%9A%84%E8%AE%A1%E7%AE%97"},"\u56de\u987e\u6240\u6709\u7ec6\u8282"),")")),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    String firstName();\n\n    String lastName();\n\n    // highlight-next-line\n    @Formula(dependencies = {"firstName", "lastName"})\n    default String fullName() {\n        return firstName() + \' \' + lastName();\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    val firstName: String\n\n    val lastName: String\n\n    // highlight-next-line\n    @Formula(dependencies = ["firstName", "lastName"])\n    val fullName: String\n        get() = "$firstName $lastName"\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Author.fullName"),"\u5c5e\u6027\u53ea\u662f\u4e00\u4e2a\u8ba1\u7b97\u89c4\u5219\uff0c\u5e76\u6ca1\u6709\u81ea\u5df1\u7684\u79c1\u6709\u6570\u636e\u3002\u5b83\u4f9d\u8d56\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Author.firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author.lastName"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u867d\u7136",(0,r.kt)("inlineCode",{parentName:"p"},"Author.fullName"),"\u8fd9\u79cd\u57fa\u4e8eJava/Kotlin\u8ba1\u7b97\u89c4\u5219\u7684\u5c5e\u6027\u88ab\u5b9a\u4e49\u4e3a\u8ba1\u7b97\u5c5e\u6027\uff0c\u4f46\u662f\u6362\u4e00\u4e2a\u601d\u8003\u89d2\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u8ba4\u4e3a\u5b83\u662f\u89c6\u56fe\u5c5e\u6027\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"Author.firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author.lastName"),"\u7684\u89c6\u4e3a\u539f\u59cb\u5c5e\u6027\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Author.fullName"),"\u662f\u57fa\u4e8e\u5b83\u4eec\u7684\u89c6\u56fe\u5c5e\u6027\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"@IdView\u89c6\u56fe\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"../mapping/advanced/view/id-view"},"\u56de\u987e\u6240\u6709\u7ec6\u8282"),")")),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    Long storeId();\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    List<Long> authorIds();\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    val storeId: Long?\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    val authorIds: List<Long>\n}\n')))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u662f\u539f\u59cb\u5c5e\u6027\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Book.storeId"),"\u662f\u57fa\u4e8e\u5b83\u4eec\u7684\u89c6\u56fe\u5c5e\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u662f\u539f\u59cb\u5c5e\u6027\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),"\u662f\u57fa\u4e8e\u5b83\u4eec\u7684\u89c6\u56fe\u5c5e\u6027")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"@ManyToManyView\u89c6\u56fe\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"../mapping/advanced/view/many-to-many-view"},"\u56de\u987e\u6240\u6709\u7ec6\u8282"),")")),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Student.java"',title:'"Student.java"'},'@Entity\npublic interface Student {\n\n    // \u7b2c\u4e00\u6b65\u4e2d\uff0c\u5df2\u7ecf\u58f0\u660e\u4e86\u4e00\u5bf9\u591a\u5173\u8054`learningLinks`\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"\n    )\n    \n    List<Course> courses();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Student.kt"',title:'"Student.kt"'},'@Entity\ninterface Student {\n\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"\n    )\n    val courses: List<Course>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Student.learningLinks"),"\u662f\u539f\u59cb\u5c5e\u6027\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Student.courses"),"\u662f\u57fa\u4e8e\u5b83\u7684\u89c6\u56fe\u5c5e\u6027\u3002"))),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u8fd9\u7c7b\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u603b\u7ed3\u51fa\u5171\u540c\u7279\u70b9\uff0c\u5b58\u5728\u539f\u59cb\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u539f\u59cb\u5c5e\u6027\u5177\u5907\u81ea\u5df1\u7684\u79c1\u6709\u6570\u636e\uff0c\u800c\u89c6\u56fe\u5c5e\u6027\u6ca1\u6709\uff0c\u5b83\u53ea\u662f\u6362\u7528\u53e6\u5916\u4e00\u4e2a\u89c6\u89d2\u89c2\u5bdf\u539f\u59cb\u5c5e\u6027\u7684\u503c\u800c\u5df2\u3002"),(0,r.kt)("p",null,"\u4ece\u5185\u90e8\u5b9e\u73b0\u673a\u5236\u7684\u5c42\u9762\u8bb2\uff0c\u89c6\u56fe\u5c5e\u6027\u5176\u5b9e\u548c\u539f\u59cb\u5c5e\u6027\u5171\u4eab\u540c\u4e00\u4efd\u79c1\u6709\u6570\u636e\u3002\u8fd9\u8868\u793a\uff0c\u77e5\u9053\u5176\u4e2d\u4e00\u4e2a\u7684\u503c\uff0c\u5fc5\u7136\u77e5\u9053\u53e6\u5916\u4e00\u4e2a\u503c\u7684\u90e8\u5206\u4fe1\u606f\uff0c\u56e0\u6b64\uff0c\u53ef\u4ee5\u5f62\u8c61\u5730\u79f0\u5b83\u4eec\u4e3a\u7ea0\u7f20\u5c5e\u6027\u3002"),(0,r.kt)("h2",{id:"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027"},"\u5bf9\u8c61\u6293\u53d6\u5668\u548c\u7ea0\u7f20\u5c5e\u6027"),(0,r.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u7ea0\u7f20\u5c5e\u6027\uff0c\u6709\u539f\u59cb\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u3002\u771f\u6b63\u7684\u6570\u636e\u88ab\u539f\u59cb\u6570\u636e\u6301\u6709\uff0c\u89c6\u56fe\u5c5e\u6027\u53ea\u6709\u4e00\u4e2a\u89c2\u5bdf\u8005\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u5229\u7528",(0,r.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u6293\u53d6\u89c6\u56fe\u5c5e\u6027\uff0c\u5176\u5185\u90e8\u903b\u8f91\u4f1a\u5c06\u4e4b\u6362\u8f6c\u5316\u4e3a\u5bf9\u539f\u59cb\u5c5e\u6027\u7684\u6293\u53d6\uff0c\u4f8b\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Author.fullName"),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Author.firstName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Author.lastName"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Book.storeId"),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Student.courses"),"\uff0c\u5185\u90e8\u903b\u8f91\u89c6\u4e3a\u6293\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Student.learningLinks")))),(0,r.kt)("p",null,"\u6211\u4eec\u4ece\u4e2d\u9009\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\uff0c\u6765\u5c55\u793a",(0,r.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u5bf9\u539f\u59cb\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7684\u5904\u7406\u6709\u4f55\u4e0d\u540c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6293\u53d6\u539f\u59cb\u5c5e\u6027"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authors(), // \u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\n    1L\n);\nSystem.out.println(book);\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authors() // \u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\n    },\n    1L\n)\nprintln(book)\n")))),(0,r.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u6293\u53d6\u5668\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"authors()"),"\u6ca1\u6709\u4efb\u4f55\u53c2\u6570\uff0c\u8868\u793a\u662f\u6293\u53d6\u53ea\u6709id\u5c5e\u6027\u7684author\u5bf9\u8c61\u7684\u96c6\u5408\uff0c\u7ed3\u679c\u5982\u4e0b ",(0,r.kt)("em",{parentName:"p"},"(\u4e3a\u63d0\u9ad8\u672c\u7a33\u5b9a\u53ef\u8bfb\u6027\uff0c\u4eba\u4e3a\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50,\n    "authors":[\n        // highlight-next-line\n        { "id":2 },\n        // highlight-next-line\n        { "id":1 }\n    ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6293\u53d6\u89c6\u56fe\u5c5e\u6027"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authorIds(), // \u5173\u8054id\uff0c\u4e0d\u662f\u5bf9\u8c61\n    1L\n);\nSystem.out.println(book);\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authorIds() // \u5173\u8054id\uff0c\u4e0d\u662f\u5bf9\u8c61\n    },\n    1L\n)\nprintln(book)\n")))),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u6b21\u7ed3\u679c\u4e3a ",(0,r.kt)("em",{parentName:"p"},"(\u4e3a\u63d0\u9ad8\u672c\u7a33\u5b9a\u53ef\u8bfb\u6027\uff0c\u4eba\u4e3a\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50,\n    "authorIds":[\n        // highlight-next-line\n        2, 1\n    ]\n}\n')))),(0,r.kt)("p",null,"\u867d\u7136\u4e24\u6b21\u67e5\u8be2\u996d\u56de\u7684\u6570\u636e\u662f\u7b49\u4ef7\u7684\uff0c\u4f46\u683c\u5f0f\u5b8c\u5168\u4e0d\u540c\u3002"),(0,r.kt)("p",null,"\u524d\u9762\u8bf4\u8fc7\uff0c",(0,r.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u6293\u53d6\u89c6\u56fe\u5c5e\u6027\uff0c\u5176\u5185\u90e8\u903b\u8f91\u4f1a\u5c06\u4e4b\u6362\u8f6c\u5316\u4e3a\u5bf9\u539f\u59cb\u5c5e\u6027\u7684\u6293\u53d6\u3002"),(0,r.kt)("p",null,"\u65e2\u7136\u5982\u6b64\uff0c\u4e8c\u8005\u5e95\u5c42\u903b\u8f91\u5e94\u8be5\u5b8c\u5168\u4e00\u6837\uff0c\u8fd9\u79cd\u5dee\u5f02\u4ece\u4f55\u800c\u6765\uff1f"),(0,r.kt)("h2",{id:"\u5c5e\u6027\u53ef\u89c1\u6027"},"\u5c5e\u6027\u53ef\u89c1\u6027"),(0,r.kt)("p",null,"\u524d\u9762\u63d0\u51fa\u4e00\u4e2a\u4e00\u4e2a\u95ee\u9898\uff0c\u5e95\u5c42\u903b\u8f91\u5b8c\u5168\u4e00\u6837\u7684\u4e24\u6b21\u67e5\u8be2\uff0c\u4e3a\u4ec0\u4e48\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f\u6709\u5dee\u5f02\u3002"),(0,r.kt)("p",null,"Jimmer\u53ef\u4ee5\u63a7\u5236\u6bcf\u4e2a\u5c5e\u6027\u7684\u53ef\u89c1\u6027\uff0c\u8ba9\u5176\u663e\u793a\u6216\u9690\u85cf\u3002"),(0,r.kt)("p",null,"\u548c",(0,r.kt)("a",{parentName:"p",href:"./dynamic"},"\u52a8\u6001\u6027"),"\u4e2d\u63d0\u53ca\u7684\u5c5e\u6027\u53ef\u4ee5\u5177\u5907\u5df2\u52a0\u8f7d\u548c\u672a\u52a0\u8f7d\u4e24\u79cd\u72b6\u6001\u4e0d\u540c\uff0c\u53ef\u89c1\u6027\u662f\u53e6\u5916\u4e00\u4e2a\u7eac\u5ea6\u7684\u7279\u6027\uff0c\u548c\u52a8\u6001\u6027\u6beb\u65e0\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u53ef\u89c1\u6027\u4ec5\u4ec5\u5f71\u54cd\u5bf9\u8c61\u7684",(0,r.kt)("a",{parentName:"p",href:"./jackson"},"Jackson\u5e8f\u5217\u5316")," ",(0,r.kt)("em",{parentName:"p"},"(\u5305\u62ec\u5bf9\u8c61\u81ea\u5df1\u7684toString\u884c\u4e3a)"),"\uff0c\u51b3\u5b9a\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u5426\u88ab\u5e8f\u5217\u5316\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5bf9\u8c61\u7684\u5176\u4ed6\u4efb\u4f55\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u4e4b\u524d\u4f8b\u5b50\u5c31\u5f88\u5bb9\u6613\u89e3\u91ca\u4e86"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u6b21\u67e5\u8be2\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u88ab\u663e\u793a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),"\u88ab\u9690\u85cf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u6b21\u67e5\u8be2\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u88ab\u9690\u85cf\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),"\u88ab\u663e\u793a"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u53ea\u6709\u4e0b\u9762\u4e24\u4e2a\u6761\u4ef6\u540c\u65f6\u6ee1\u8db3\u65f6\uff0c\u5c5e\u6027\u624d\u4f1a\u53c2\u4e0eJackson\u5e8f\u5217\u5316"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u6027\uff1a\u5c5e\u6027\u88ab\u8bbe\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u89c1\u6027\uff1a\u5c5e\u6027\u88ab\u663e\u793a")),(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./tool"},"\u5de5\u5177\u65b9\u6cd5"),"\uff0c\u4e86\u89e3\u5982\u4f55\u81ea\u5df1\u63a7\u5236Jimmer\u5bf9\u8c61\u5c5e\u6027\u7684\u53ef\u89c1\u6027")))}c.isMDXComponent=!0}}]);