"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2900],{22915:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=i(74848),r=i(28453),a=i(11470),s=i(19365);const l={sidebar_position:6,title:"Visibility"},o=void 0,c={id:"object/visibility",title:"Visibility",description:"Previous documents have discussed in detail the dynamic and immutable properties of Jimmer entities. This introduces a new feature: visibility.",source:"@site/docs/object/visibility.mdx",sourceDirName:"object",slug:"/object/visibility",permalink:"/jimmer-doc/docs/object/visibility",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/visibility.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Visibility"},sidebar:"tutorialSidebar",previous:{title:"MapStruct",permalink:"/jimmer-doc/docs/object/view/mapstruct"},next:{title:"Tool Methods",permalink:"/jimmer-doc/docs/object/tool"}},d={},h=[{value:"Entangled Properties",id:"entangled-properties",level:2},{value:"Object Fetchers and Entangled Properties",id:"object-fetchers-and-entangled-properties",level:2},{value:"Property Visibility",id:"property-visibility",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Previous documents have discussed in detail the ",(0,t.jsx)(n.a,{href:"./dynamic",children:"dynamic"})," and immutable properties of Jimmer entities. This introduces a new feature: visibility."]}),"\n",(0,t.jsx)(n.h2,{id:"entangled-properties",children:"Entangled Properties"}),"\n",(0,t.jsx)(n.p,{children:"For Jimmer entities, although properties are mostly independent, in some cases multiple properties share private data and thus affect each other. We call this entanglement between properties."}),"\n",(0,t.jsx)(n.p,{children:"These cases include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Java/Kotlin-based calculated properties ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.a,{href:"../mapping/advanced/calculated/formula#based-on-java-kotlin",children:"review details"}),")"]})]}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"  ',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    String firstName();\n\n    String lastName();\n\n    // highlight-next-line\n    @Formula(dependencies = {"firstName", "lastName"})\n    default String fullName() {\n        return firstName() + \' \' + lastName();\n    }\n\n    ...Omit other properties...\n}\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    val firstName: String\n\n    val lastName: String\n\n    // highlight-next-line\n    @Formula(dependencies = ["firstName", "lastName"])\n    val fullName: String\n        get() = "$firstName $lastName"\n\n    ...Omit other properties...\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Author.fullName"})," has no private data, it depends on ",(0,t.jsx)(n.code,{children:"Author.firstName"})," and ",(0,t.jsx)(n.code,{children:"Author.lastName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Although ",(0,t.jsx)(n.code,{children:"Author.fullName"})," is defined as a calculated property, it can also be considered a view property from another perspective."]}),"\n",(0,t.jsxs)(n.p,{children:["If treating ",(0,t.jsx)(n.code,{children:"Author.firstName"})," and ",(0,t.jsx)(n.code,{children:"Author.lastName"})," as original properties, then ",(0,t.jsx)(n.code,{children:"Author.fullName"})," can be considered a view property based on them."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["@IdView view properties ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.a,{href:"../mapping/advanced/view/id-view",children:"review details"}),")"]})]}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...Omit other properties...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // View of associated object store\'s id  \n    Long storeId();\n\n    // View of ids of all objects in associated collection authors\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n}\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...Omit other properties...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Auhtor>\n\n    // highlight-next-line\n    @IdView // View of associated object store\'s id\n    val storeId: Long?\n\n    // View of ids of all objects in associated collection authors\n    // highlight-next-line\n    @IdView("authors")\n    val authorIds: List<Long>\n}\n'})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Book.store"})," is the original property, ",(0,t.jsx)(n.code,{children:"Book.storeId"})," is the view property based on it"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Book.authors"})," is the original property, ",(0,t.jsx)(n.code,{children:"Book.authorIds"})," is the view property based on it"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["@ManyToManyView view properties ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.a,{href:"../mapping/advanced/view/many-to-many-view",children:"review details"}),")"]})]}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Student.java"',children:'@Entity\npublic interface Student {\n\n    // In step 1, already declared one-to-many association `learningLinks`\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"  \n    )\n    \n    List<Course> courses();\n\n    ...Omit other code...\n}\n'})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Student.kt"',children:'@Entity\ninterface Student {\n\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"\n    )\n    val courses: List<Course>\n\n    ...Omit other code...\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Student.learningLinks"})," is the original property, ",(0,t.jsx)(n.code,{children:"Student.courses"})," is the view property based on it."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The commonality in the examples above is that there are original properties and view properties."}),"\n",(0,t.jsx)(n.p,{children:"The original properties have their own private data, while the view properties have none. The view properties just observe the values of the original properties from a different perspective."}),"\n",(0,t.jsx)(n.p,{children:"From an internal implementation perspective, a view property actually shares private data with the original property. This means knowing one value necessarily reveals partial information about the other's value. Hence they can be metaphorically described as entangled properties."}),"\n",(0,t.jsx)(n.h2,{id:"object-fetchers-and-entangled-properties",children:"Object Fetchers and Entangled Properties"}),"\n",(0,t.jsx)(n.p,{children:"We introduced entangled properties, with original properties and view properties. The real data is held by the original properties, while the view properties only observe."}),"\n",(0,t.jsxs)(n.p,{children:["When using an ",(0,t.jsx)(n.a,{href:"../query/object-fetcher",children:"object fetcher"})," to fetch a view property, the internal logic will translate it into fetching the original property, for example:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fetching ",(0,t.jsx)(n.code,{children:"Author.fullName"})," is translated internally into fetching ",(0,t.jsx)(n.code,{children:"Author.firstName"})," and ",(0,t.jsx)(n.code,{children:"Author.lastName"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fetching ",(0,t.jsx)(n.code,{children:"Book.storeId"})," is translated internally into fetching ",(0,t.jsx)(n.code,{children:"Book.store"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fetching ",(0,t.jsx)(n.code,{children:"Book.authorIds"})," is translated internally into fetching ",(0,t.jsx)(n.code,{children:"Book.authors"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fetching ",(0,t.jsx)(n.code,{children:"Student.courses"})," is translated internally into fetching ",(0,t.jsx)(n.code,{children:"Student.learningLinks"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Let's take ",(0,t.jsx)(n.code,{children:"Book.authorIds"})," and ",(0,t.jsx)(n.code,{children:"Book.authors"})," to demonstrate how object fetchers handle original properties and view properties differently:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch the original property"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authors(), // Associated objects with only id  \n    1L\n);\nSystem.out.println(book);\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authors() // Associated objects with only id\n    },\n    1L  \n)\nprintln(book)\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"authors()"})," in the fetcher has no arguments, indicating it fetches a collection of author objects with only id properties. The result is ",(0,t.jsx)(n.em,{children:"(manually formatted for readability)"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id":1, \n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50,\n    "authors":[\n        // highlight-next-line\n        { "id":2 },\n        // highlight-next-line \n        { "id":1 }  \n    ]\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fetch the view property"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(s.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authorIds(), // Associated ids, not objects\n    1L\n);\nSystem.out.println(book);\n"})})}),(0,t.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authorIds() // Associated ids, not objects\n    },\n    1L\n)\nprintln(book)\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["This time the result is ",(0,t.jsx)(n.em,{children:"(manually formatted for readability)"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50, \n    "authorIds":[\n        // highlight-next-line\n        2, 1\n    ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Although the returned data is equivalent, the formats are completely different."}),"\n",(0,t.jsx)(n.p,{children:"We said earlier that when an object fetcher fetches a view property, it translates internally into fetching the original property."}),"\n",(0,t.jsx)(n.p,{children:"Since this is the case, the underlying logic should be exactly the same. Where does this difference come from?"}),"\n",(0,t.jsx)(n.h2,{id:"property-visibility",children:"Property Visibility"}),"\n",(0,t.jsx)(n.p,{children:"The question above is, with identical underlying logic, why do two queries with the same logic return data in different formats?"}),"\n",(0,t.jsx)(n.p,{children:"Jimmer can control the visibility of each property, making it shown or hidden."}),"\n",(0,t.jsxs)(n.p,{children:["Unlike ",(0,t.jsx)(n.a,{href:"./dynamic",children:"dynamic"})," where a property can be loaded or unloaded, visibility is an orthogonal feature, completely unrelated to dynamism."]}),"\n",(0,t.jsxs)(n.p,{children:["Visibility only affects ",(0,t.jsx)(n.a,{href:"./jackson",children:"Jackson serialization"})," of objects ",(0,t.jsxs)(n.em,{children:["(including their own ",(0,t.jsx)(n.code,{children:"toString"})," behavior)"]}),", deciding whether a property is serialized. Other than that, it does not impact any other behavior of the object."]}),"\n",(0,t.jsx)(n.p,{children:"So the previous examples can be easily explained:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["First query: ",(0,t.jsx)(n.code,{children:"Book.authors"})," is shown, ",(0,t.jsx)(n.code,{children:"Book.authorIds"})," is hidden"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Second query: ",(0,t.jsx)(n.code,{children:"Book.authors"})," is hidden, ",(0,t.jsx)(n.code,{children:"Book.authorIds"})," is shown"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Only when both conditions below are met will a property participate in Jackson serialization"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dynamism: the property is set"}),"\n",(0,t.jsx)(n.li,{children:"Visibility: the property is shown"}),"\n"]}),(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"./tool",children:"tool methods"})," for how to control visibility of Jimmer object properties yourself"]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(18215);const r={tabItem:"tabItem_Ymn6"};var a=i(74848);function s(e){let{children:n,hidden:i,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>w});var t=i(96540),r=i(18215),a=i(23104),s=i(56347),l=i(205),o=i(57485),c=i(31682),d=i(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,a=u(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:i,groupId:r}),[j,g]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(i);return[r,(0,t.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:r}),x=(()=>{const e=c??j;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=i(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(74848);function f(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,i=o.indexOf(n),r=l[i].value;r!==t&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:r}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);