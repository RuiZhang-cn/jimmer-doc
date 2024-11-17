"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(34334);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),i=a(67294),o=a(34334),r=a(72389),l=a(67392),s=a(7094),p=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:r,defaultValue:m,values:u,groupId:k,className:y}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,l.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[T,I]=(0,i.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==T&&h.some((t=>t.value===e))&&I(e)}const w=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==T&&(E(t),I(n),null!=k&&N(k,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},y)},h.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:w,onClick:w},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,i.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,r.Z)();return i.createElement(m,(0,n.Z)({key:String(t)},e))}},51873:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(83117),i=(a(67294),a(3905)),o=a(65488),r=a(85162);const l={toc:[]};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Initially, people used business fields directly as the primary key of tables. This is the most straightforward and easy to use approach, but it has the following problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unstable primary key"),(0,i.kt)("p",{parentName:"li"},"Since the primary key itself is a business field, it can be modified, which leads to an unstable primary key."),(0,i.kt)("p",{parentName:"li"},"Although the foreign keys that reference it in the database can use ",(0,i.kt)("inlineCode",{parentName:"p"},"on update cascade")," to keep consistency,\nan unstable primary key will cause many problems for systems outside the database, such as caches."),(0,i.kt)("p",{parentName:"li"},"Even if a unified solution to the primary key instability problem can be abstracted at the technical level, it is not recommended, because it makes the system difficult to understand.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High cost of multi-table joins"),(0,i.kt)("p",{parentName:"li"},"Since the primary key itself is a business field, its type is likely to be a relatively long string type rather than a numeric type,\nand it may even be a composite primary key composed of multiple columns, which leads to high cost of multi-table joins."))),(0,i.kt)("p",null,"To solve the above problems, people learned to use data without business meaning as the primary key, such as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Auto numbering by database"),(0,i.kt)("li",{parentName:"ul"},"Sequence value by database"),(0,i.kt)("li",{parentName:"ul"},"UUID"),(0,i.kt)("li",{parentName:"ul"},"Snowflake ID")),(0,i.kt)("p",null,"To enable idempotent saves for save commands, Jimmer introduces two concepts: Id and Key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@Id: Primary key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@Key: Business primary key"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If Id itself is a business attribute (not recommended), no need to specify Key, because Id itself already represents the uniqueness constraint at the business level.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If Id has no business meaning (recommended), then Key represents what the uniqueness constraint is at the business level."))))),(0,i.kt)("p",null,"See the following example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity  \npublic interface TreeNode {\n\n    @Id  \n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line \n    @Key  \n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n')))),(0,i.kt)("p",null,"Here, the Id of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TreeNode")," entity uses auto numbering and has no business meaning. Therefore, to better match save commands,\n",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is specified here, consisting of two properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"."),(0,i.kt)("p",null,"The corresponding DDL is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table TREE_NODE(\n    ID bigint not null,\n    NAME varchar(20) not null,\n    PARENT_ID bigint\n);\n\nalter table TREE_NODE\n    add constraint PK_TREE_NODE\n        primary key(ID);\n        \nalter table TREE_NODE\n    add constraint UQ_TREE_NODE\n        /* highlight-next-line */\n        unique(NAME, PARENT_ID); \n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parent")," properties of the entity type decorated with @Key correspond to the UNIQUE constraint ",(0,i.kt)("em",{parentName:"p"},"(or UNIQUE INDEX)")," composed of the ",(0,i.kt)("inlineCode",{parentName:"p"},"NAME")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PARENT_ID")," columns in the database."),(0,i.kt)("p",null,"This uniqueness constraint can be analogized to file systems. File systems allow directories or files with the same name, but do not allow the same name if the parent directory is specified."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Through this example, we see:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Key can consist of multiple properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Foreign keys can be part of Key")))),(0,i.kt)("p",null,"Let's take another look at another example where the properties that make up Key are all properties based on foreign keys:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  \n    long id();\n\n    // highlight-next-line\n    @Key   \n    @ManyToOne\n    Order order();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Product product();\n\n    int quantity();\n\n    // Snapshot of `product.price`\n    BigDecimal unitPrice(); \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val order: Order\n\n    // highlight-next-line\n    @Key \n    @ManyToOne\n    val product: Product\n\n    val quantity: Int\n\n    // Snapshot of `product.price`\n    val unitPrice: BigDecimal\n}\n")))))}s.isMDXComponent=!0},76544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(83117),i=(a(67294),a(3905)),o=a(65488),r=a(85162);a(51873);const l={sidebar_position:3,title:"Data Classification"},s=void 0,p={unversionedId:"mutation/save-command/data-classification",id:"mutation/save-command/data-classification",title:"Data Classification",description:"The save command is used to store data structures of any complexity. To facilitate discussion, we need to establish a basic classification of data structure shapes.",source:"@site/docs/mutation/save-command/data-classification.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/data-classification",permalink:"/jimmer-doc/docs/mutation/save-command/data-classification",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/data-classification.mdx",tags:[],version:"current",lastUpdatedAt:1731875555,formattedLastUpdatedAt:"Nov 17, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Data Classification"},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/jimmer-doc/docs/mutation/save-command/usage"},next:{title:"Save Mode of Aggregate-Root",permalink:"/jimmer-doc/docs/mutation/save-command/save-mode"}},d={},c=[{value:"Entity Definition",id:"entity-definition",level:2},{value:"Data Classification",id:"data-classification",level:2},{value:"1. Wild Objects",id:"1-wild-objects",level:3},{value:"2. Id-specified Objects",id:"2-id-specified-objects",level:3},{value:"3. Key-specified Objects",id:"3-key-specified-objects",level:3},{value:"4. Id-only Objects",id:"4-id-only-objects",level:3},{value:"5. Key-only Objects",id:"5-key-only-objects",level:3}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The save command is used to store data structures of any complexity. To facilitate discussion, we need to establish a basic classification of data structure shapes."),(0,i.kt)("h2",{id:"entity-definition"},"Entity Definition"),(0,i.kt)("p",null,"Jimmer entities support two types of property representation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@Id"),": A property that must be defined for any Jimmer entity type. It serves as a technical unique identifier, known in the industry as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Surrogate Id"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/key"},"@Key"),": Multiple properties that Jimmer recommends defining for entity types. They serve as business-level unique identifiers, known in the industry as ",(0,i.kt)("inlineCode",{parentName:"p"},"Natural Id"),"."))),(0,i.kt)("p",null,"In this series of articles, all entities have both ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," properties defined, with the Id property using the database's auto-increment strategy. Here's an example using ",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),":"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @Id \u2776\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \u2777\n    long id();\n\n    @Key \u2778\n    String name();\n    \n    @Key \u2778\n    int edition();\n\n    BigDecimal price();\n\n    ...other properties omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @Id \u2776\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \u2777\n    val id: Long\n\n    @Key \u2778\n    val name: String\n    \n    @Key \u2778\n    val edition: Int\n\n    val price: BigDecimal\n\n    ...other properties omitted...\n}\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2776 Id property, i.e., Surrogate Id"),(0,i.kt)("li",{parentName:"ul"},"\u2777 Id property uses database auto-numbering as the auto-increment strategy"),(0,i.kt)("li",{parentName:"ul"},"\u2778 Key property, i.e., Natural Id")),(0,i.kt)("h2",{id:"data-classification"},"Data Classification"),(0,i.kt)("h3",{id:"1-wild-objects"},"1. Wild Objects"),(0,i.kt)("p",null,"An object is called a wild object if neither its ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," property ",(0,i.kt)("em",{parentName:"p"},"(Book.id in this article)")," nor its ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," properties ",(0,i.kt)("em",{parentName:"p"},"(Book.name and Book.edition in this article)")," are specified. For example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setPrice(new BigDecimal("59.9"));\n});\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    price = BigDecimal("59.9")\n}\n')))),(0,i.kt)("p",null,"When we say ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," properties are not specified, this includes two situations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The entity type doesn't define any ",(0,i.kt)("inlineCode",{parentName:"li"},"@Key")," properties ",(0,i.kt)("em",{parentName:"li"},"(not discussed in this article)")),(0,i.kt)("li",{parentName:"ul"},"Although the entity type defines ",(0,i.kt)("inlineCode",{parentName:"li"},"@Key")," properties, these properties are not specified in the object")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Jimmer does not recommend wild objects. Although API parameters can be adjusted to save wild objects, this will ultimately compromise idempotency.")),(0,i.kt)("h3",{id:"2-id-specified-objects"},"2. Id-specified Objects"),(0,i.kt)("p",null,"An object is called an id-specified object if its ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," property ",(0,i.kt)("em",{parentName:"p"},"(Book.id in this article)")," is specified. For example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = Immutables.createBook(draft -> {\n    draft.setId(17L);\n    ...other settings omitted...\n});\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = Book {\n    id = 17L\n    ...other settings omitted...\n}\n")))),(0,i.kt)("p",null,"Jimmer supports ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," operations, where users don't explicitly specify ",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", letting Jimmer make the determination."),(0,i.kt)("p",null,"When saving an id-specified object in ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," mode, Jimmer uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," property to determine whether corresponding data already exists in the database, ultimately deciding whether to insert or update."),(0,i.kt)("h3",{id:"3-key-specified-objects"},"3. Key-specified Objects"),(0,i.kt)("p",null,"An object is called a key-specified object if its ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," property ",(0,i.kt)("em",{parentName:"p"},"(Book.id in this article)")," is not specified, but its ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," properties ",(0,i.kt)("em",{parentName:"p"},"(Book.name and Book.edition in this article)")," are specified. For example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("GraphQL in Action");\n    draft.setEdition(2);\n    ...setting other properties except id...\n});\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "GraphQL in Action"\n    edition = 1\n    ...setting other properties except id...\n}\n')))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the code above, the omitted parts do not include setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," property, because once the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," property is set, it should be an id-specified object, not a key-specified object.")),(0,i.kt)("p",null,"Jimmer supports ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," operations, where users don't explicitly specify ",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", letting Jimmer make the determination."),(0,i.kt)("p",null,"When saving a key-specified object in ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," mode, Jimmer uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Key")," properties to determine whether corresponding data already exists in the database, ultimately deciding whether to insert or update."),(0,i.kt)("h3",{id:"4-id-only-objects"},"4. Id-only Objects"),(0,i.kt)("p",null,"An id-specified object is called an id-only object if no properties other than id are specified. For example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = Immutables.createBook(draft -> {\n    draft.setId(17L);\n});\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = Book {\n    id = 17L\n}\n")))),(0,i.kt)("p",null,"In hierarchical data structures, any object can have deeper associated objects."),(0,i.kt)("p",null,"If an associated object is an id-only object, it indicates that only the association relationship is being modified, without further creating or modifying the associated object."),(0,i.kt)("h3",{id:"5-key-only-objects"},"5. Key-only Objects"),(0,i.kt)("p",null,"A key-specified object is called a key-only object if no properties other than key properties are specified. For example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("GraphQL in Action");\n    draft.setEdition(2);\n});\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "GraphQL in Action"\n    edition = 1\n}\n')))),(0,i.kt)("p",null,"In hierarchical data structures, any object can have deeper associated objects."),(0,i.kt)("p",null,"If an associated object is a key-only object, it indicates that only the association relationship is being modified, without further creating or modifying the associated object."))}u.isMDXComponent=!0}}]);