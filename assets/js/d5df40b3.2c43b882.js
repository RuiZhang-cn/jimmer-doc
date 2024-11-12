"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=l,b=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(b,r(r({ref:t},c),{},{components:n})):a.createElement(b,r({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(34334);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(83117),l=n(67294),o=n(34334),r=n(72389),i=n(67392),d=n(7094),s=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:p,groupId:b,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:y}=(0,d.U)(),[k,x]=(0,l.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=b){const e=T[b];null!=e&&e!==k&&f.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=j.indexOf(t),a=f[n].value;a!==k&&(w(t),x(a),null!=b&&y(b,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>j.push(e),onKeyDown:I,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,l.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},60181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(83117),l=(n(67294),n(3905)),o=n(65488),r=n(85162);const i={toc:[]};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"First define an immutable tree node"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"record TreeNode(\n    String name,\n    List<TreeNode> childNodes\n) {}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"data class TreeNode(\n    val name: String,\n    val childNodes: List<TreeNode>  \n)\n")))),(0,l.kt)("p",null,"Prepare an old object"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"var oldTreeNode = ...blabla... \n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val oldTreeNode = ...blabla...\n")))),(0,l.kt)("p",null,"Let's implement three data change operations in order from simple to complex to create a brand new object"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change the name property of the root node"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    // highlight-next-line \n    "Hello", // Set root node name  \n    oldTreeNode.childNodes()\n);\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    // highlight-next-line\n    name = "Hello" // Set root node name\n);\n')))),(0,l.kt)("p",{parentName:"li"},"This case is very simple, and the problems of Java/Kotlin are not obvious yet.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change the name property of the first level child node"),(0,l.kt)("p",{parentName:"li"},"Breadcrumb conditions:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Position of first level child node: pos1")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                // highlight-next-line\n                "Hello", // Set name of first level child node  \n                oldChild1.childNodes()\n            );\n        })\n        .toList()\n);\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    // highlight-next-line\n                    name = "Hello" // Set name of first level child node   \n                )\n            } else {\n                child1\n            }\n        }\n)\n'))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change the name property of the second level child node"),(0,l.kt)("p",{parentName:"li"},"Breadcrumb conditions:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Position of first level child node: pos1"),(0,l.kt)("li",{parentName:"ul"},"Position of second level child node: pos2")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                oldChild1.name(),\n                IntStream\n                    .range(0, oldChild1.childNodes().size())\n                    .mapToObj(index2 -> {\n                        TreeNode oldChild2 = oldChild1.childNodes().get(index2);\n                        if (index2 != pos2) {\n                            return oldChild2;\n                        } else {\n                            return new TreeNode(\n                                // highlight-next-line\n                                "Hello", // Set name of second level child node\n                                oldChild2.childNodes()\n                            );\n                        }\n                    })\n                    .toList()\n            );\n        })\n        .toList()\n);\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    childNodes = child1\n                        .childNodes\n                        .mapIndexed { index2, child2 ->\n                            if (index2 == pos2) {\n                                child2.copy(\n                                    // highlight-next-line\n                                    name = "Hello" // Set name of second level child node\n                                )\n                            } else {\n                                child2\n                            }\n                        }\n                )\n            } else {\n                child1\n            }\n        }\n)\n')))))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},'It can be seen that as long as the object tree has some depth, creating a new immutable object based on another immutable object (i.e. secondary "modification") will be a nightmare.')))}d.isMDXComponent=!0;const s={sidebar_position:2,title:"Current Situation"},c=void 0,u={unversionedId:"object/immutable/current-situation",id:"object/immutable/current-situation",title:"Current Situation",description:"Java has supported immutable record types since Java 14, and Kotlin's data classes can easily implement immutable classes, even supporting copy functions. However, they are designed for simple immutable objects, and have problems dealing with complex deep data structure.",source:"@site/docs/object/immutable/current-situation.mdx",sourceDirName:"object/immutable",slug:"/object/immutable/current-situation",permalink:"/jimmer-doc/docs/object/immutable/current-situation",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/immutable/current-situation.mdx",tags:[],version:"current",lastUpdatedAt:1704015848,formattedLastUpdatedAt:"Dec 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Current Situation"},sidebar:"tutorialSidebar",previous:{title:"Reason",permalink:"/jimmer-doc/docs/object/immutable/reason"},next:{title:"Solution",permalink:"/jimmer-doc/docs/object/immutable/solution"}},m={},p=[],b={toc:p};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Java has supported immutable record types since Java 14, and Kotlin's data classes can easily implement immutable classes, even supporting copy functions. However, they are designed for simple immutable objects, and have problems dealing with complex deep data structure."),(0,l.kt)("p",null,"The reason why deep, complex immutable objects are difficult to handle is not how to create a brand new data structure from scratch, which is very simple for any programming language. The real difficulty is wanting to make some local adjustments to an existing data structure and build a new data structure. This is very difficult for current Java and Kotlin, please see"),(0,l.kt)(d,{mdxType:"ImmutableProblem"}))}h.isMDXComponent=!0}}]);