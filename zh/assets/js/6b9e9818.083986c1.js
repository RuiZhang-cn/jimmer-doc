"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4284],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>p});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),d=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=t,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return a?r.createElement(h,l(l({ref:n},c),{},{components:a})):r.createElement(h,l({ref:n},c))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>l});var r=a(67294),t=a(34334);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(i,l),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>p});var r=a(83117),t=a(67294),i=a(34334),l=a(72389),o=a(67392),s=a(7094),d=a(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var n;const{lazy:a,block:l,defaultValue:m,values:p,groupId:h,className:N}=e,v=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??v.map((e=>{let{props:{value:n,label:a,attributes:r}}=e;return{value:n,label:a,attributes:r}})),f=(0,o.l)(b,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[T,k]=(0,t.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:V}=(0,d.o5)();if(null!=h){const e=w[h];null!=e&&e!==T&&b.some((n=>n.value===e))&&k(e)}const O=e=>{const n=e.currentTarget,a=x.indexOf(n),r=b[a].value;r!==T&&(V(n),k(r),null!=h&&y(h,String(r)))},R=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;a=x[n]??x[x.length-1];break}}null==(n=a)||n.focus()};return t.createElement("div",{className:(0,i.Z)("tabs-container",c)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},N)},b.map((e=>{let{value:n,label:a,attributes:l}=e;return t.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>x.push(e),onKeyDown:R,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===n})}),a??n)}))),a?(0,t.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function p(e){const n=(0,l.Z)();return t.createElement(m,(0,r.Z)({key:String(n)},e))}},2020:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=a(83117),t=(a(67294),a(3905)),i=a(65488),l=a(85162);const o={sidebar_position:1,title:"3.1 \u57fa\u672c\u7528\u6cd5"},s=void 0,d={unversionedId:"showcase/recursive-query/usage",id:"showcase/recursive-query/usage",title:"3.1 \u57fa\u672c\u7528\u6cd5",description:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/usage.mdx",sourceDirName:"showcase/recursive-query",slug:"/showcase/recursive-query/usage",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/usage.mdx",tags:[],version:"current",lastUpdatedAt:1708691860,formattedLastUpdatedAt:"2024\u5e742\u670823\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"3.1 \u57fa\u672c\u7528\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"3. \u9012\u5f52\u67e5\u8be2",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/"},next:{title:"3.2 \u9650\u5236\u6df1\u5ea6",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/depth"}},c={},u=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}],m={toc:u};function p(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"},"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"),(0,t.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                // highlight-next-line\n                .recursiveChildNodes()\n        )\n    )\n    .execute();\n"))),(0,t.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                `childNodes*`()\n            }\n        )\n    }\n    .execute()\n")))),(0,t.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7684\u6570\u636e"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    {\n                        "id":3,\n                        "name":"Drinks",\n                        "childNodes":[\n                            {\n                                "id":4,\n                                "name":"Coca Cola",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":5,\n                                "name":"Fanta",\n                                "childNodes":[]\n                            }\n                        ]\n                    },\n                    {\n                        "id":6,\n                        "name":"Bread",\n                        "childNodes":[\n                            {\n                                "id":7,\n                                "name":"Baguette",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":8,\n                                "name":"Ciabatta",\n                                "childNodes":[]\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                "id":9,\n                "name":"Clothing",\n                "childNodes":[\n                    {\n                        "id":10,\n                        "name":"Woman",\n                        "childNodes":[\n                            {\n                                "id":11,\n                                "name":"Casual wear",\n                                "childNodes":[\n                                    {\n                                        "id":12,\n                                        "name":"Dress",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":13,\n                                        "name":"Miniskirt",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":14,\n                                        "name":"Jeans",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            },\n                            {\n                                "id":15,\n                                "name":"Formal wear",\n                                "childNodes":[\n                                    {\n                                        "id":16,\n                                        "name":"Suit",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":17,\n                                        "name":"Shirt",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            }\n                        ]\n                    },\n                    {\n                        "id":18,\n                        "name":"Man",\n                        "childNodes":[\n                            {\n                                "id":19,\n                                "name":"Casual wear",\n                                "childNodes":[\n                                    {\n                                        "id":20,\n                                        "name":"Jacket",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":21,\n                                        "name":"Jeans",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            },\n                            {\n                                "id":22,\n                                "name":"Formal wear",\n                                "childNodes":[\n                                    {\n                                        "id":23,\n                                        "name":"Suit",\n                                        "childNodes":[]\n                                    },\n                                    {\n                                        "id":24,\n                                        "name":"Shirt",\n                                        "childNodes":[]\n                                    }\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n]\n')),(0,t.kt)("h2",{id:"\u67e5\u8be2\u9759\u6001dto"},"\u67e5\u8be2\u9759\u6001DTO"),(0,t.kt)("p",null,"\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4efb\u4f55\u4e00\u4e2a\u6269\u5c55\u540d\u4e3adto\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u4ee3\u7801\u5982\u4e0b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.TreeNode\n    -> package com.yourcompany.yourproject.model.dto\n\nRecursiveTreeNodeView {\n    #allScalars(this)\n    #highlight-next-line\n    childNodes*\n}\n")),(0,t.kt)("p",null,"\u7f16\u8bd1\u9879\u76ee\uff0c\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,t.kt)("inlineCode",{parentName:"p"},"RecursiveTreeNodeView")),(0,t.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nList<RecursiveTreeNodeView> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        // highlight-next-line\n        table.fetch(RecursiveTreeNodeView.class)\n    )\n    .execute();\n"))),(0,t.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            // highlight-next-line\n            table.fetch(RecursiveTreeNodeView::class)\n        )\n    }\n    .execute()\n")))),(0,t.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},"[\n    RecursiveTreeNodeView(\n        id=1, \n        name=Home, \n        childNodes=[\n            RecursiveTreeNodeView(\n                id=2, \n                name=Food, \n                childNodes=[\n                    RecursiveTreeNodeView(\n                        id=3, \n                        name=Drinks, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=4, \n                                name=Coca Cola, \n                                childNodes=[]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=5, \n                                name=Fanta, \n                                childNodes=[]\n                            )\n                        ]\n                    ), \n                    RecursiveTreeNodeView(\n                        id=6, \n                        name=Bread, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=7, \n                                name=Baguette, \n                                childNodes=[]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=8, \n                                name=Ciabatta, \n                                childNodes=[]\n                            )\n                        ]\n                    )\n                ]\n            ), \n            RecursiveTreeNodeView(\n                id=9, \n                name=Clothing, \n                childNodes=[\n                    RecursiveTreeNodeView(\n                        id=10, \n                        name=Woman, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=11, \n                                name=Casual wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=12, \n                                        name=Dress, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=13, \n                                        name=Miniskirt, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=14, \n                                        name=Jeans, \n                                        childNodes=[]\n                                    )\n                                ]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=15, \n                                name=Formal wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=16, \n                                        name=Suit, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=17, \n                                        name=Shirt, \n                                        childNodes=[]\n                                    )\n                                ]\n                            )\n                        ]\n                    ), \n                    RecursiveTreeNodeView(\n                        id=18, \n                        name=Man, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=19, \n                                name=Casual wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=20, \n                                        name=Jacket, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=21, \n                                        name=Jeans, \n                                        childNodes=[]\n                                    )\n                                ]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=22, \n                                name=Formal wear, \n                                childNodes=[\n                                    RecursiveTreeNodeView(\n                                        id=23, \n                                        name=Suit, \n                                        childNodes=[]\n                                    ), \n                                    RecursiveTreeNodeView(\n                                        id=24, \n                                        name=Shirt, \n                                        childNodes=[]\n                                    )\n                                ]\n                            )\n                        ]\n                    )\n                ]\n            )\n        ]\n    )\n]\n")))}p.isMDXComponent=!0}}]);