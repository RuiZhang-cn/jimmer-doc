"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5045],{17984:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=n(74848),i=n(28453),a=n(11470),d=n(19365);const s={sidebar_position:1,title:"Entity Table"},r=void 0,c={id:"mapping/advanced/logical-deleted/entity",title:"Entity Table",description:"To enable logical deletion support for an entity, add a flag property annotated with org.babyfish.jimmer.sql.LogicalDeleted to indicate whether the data is normal or already deleted.",source:"@site/docs/mapping/advanced/logical-deleted/entity.mdx",sourceDirName:"mapping/advanced/logical-deleted",slug:"/mapping/advanced/logical-deleted/entity",permalink:"/jimmer-doc/docs/mapping/advanced/logical-deleted/entity",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/logical-deleted/entity.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Entity Table"},sidebar:"tutorialSidebar",previous:{title:"Logical Deletion",permalink:"/jimmer-doc/docs/mapping/advanced/logical-deleted/"},next:{title:"Join Table",permalink:"/jimmer-doc/docs/mapping/advanced/logical-deleted/join-table"}},o={},h=[{value:"Usage",id:"usage",level:2},{value:"Multi-Version Data",id:"multi-version-data",level:2},{value:"Effects on Middle Tables",id:"effects-on-middle-tables",level:2}];function u(e){const l={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.p,{children:["To enable logical deletion support for an entity, add a flag property annotated with ",(0,t.jsx)(l.code,{children:"org.babyfish.jimmer.sql.LogicalDeleted"})," to indicate whether the data is normal or already deleted."]}),"\n",(0,t.jsx)(l.p,{children:"Once a logical deletion property is configured for an entity:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["By default, when developers call APIs to delete an entity object, Jimmer will NOT actually delete the data with SQL ",(0,t.jsx)(l.code,{children:"delete"})," statements. Instead, it will use ",(0,t.jsx)(l.code,{children:"update"}),' statements to set the logical deletion property of the entity to "already deleted".']}),"\n",(0,t.jsx)(l.p,{children:"Other cases: Even if an entity has a logical deletion property, Jimmer also provides APIs for developers to forcibly truly delete objects by passing additional parameters."}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["By default, all SQL queries against the entity will be automatically appended with a ",(0,t.jsx)(l.code,{children:"where logicalDeleteFlag <> already deleted"})," condition to create the illusion that some data has been deleted."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.admonition,{type:"info",children:(0,t.jsxs)(l.p,{children:["This doc only covers the mapping configuration of the logical deletion flag field. For how to use the logical deletion functionality, see ",(0,t.jsx)(l.a,{href:"../../../query/global-filter/logical-deleted",children:"Global Filters / Logical Deletion"}),"."]})}),"\n",(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(l.p,{children:"The logical deletion flag property can be one of the following types:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:"boolean: must be non-null"}),"\n",(0,t.jsx)(l.li,{children:"int: must be non-null"}),"\n",(0,t.jsx)(l.li,{children:"enum: must be non-null"}),"\n",(0,t.jsx)(l.li,{children:"long/Long\uff1aeither null or non-null"}),"\n",(0,t.jsx)(l.li,{children:"UUID: either null or non-null"}),"\n",(0,t.jsx)(l.li,{children:"date: must be nullable"}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Type"}),(0,t.jsx)("th",{children:"Code"}),(0,t.jsx)("th",{children:"Deleted State"}),(0,t.jsx)("th",{children:"Initialized State"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"boolean"}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:'@LogicalDeleted("true")\nboolean deleted();\n'})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:'@LogicalDeleted("true")\nval deleted: Boolean\n'})})})]})}),(0,t.jsx)("td",{children:"true"}),(0,t.jsx)("td",{children:"false"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:'@LogicalDeleted("false")\nval active: Boolean;\n'})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:'@LogicalDeleted("false")\nval active: Boolean\n'})})})]})}),(0,t.jsx)("td",{children:"false"}),(0,t.jsx)("td",{children:"true"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"int"}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:'@Default("0")\n@LogicalDeleted("1")\nint state();\n'})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:'@Default("0")\n@LogicalDeleted("1")\nval state: Int\n'})})})]})}),(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"0"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Enum"}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:'@Default("INITIALIZED")\n@LogicalDeleted("DELETED")\nState state();\n'})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:'@Default("INITIALIZED")\n@LogicalDeleted("DELETED")\nval state: State\n'})})})]})}),(0,t.jsx)("td",{children:"DELETED"}),(0,t.jsx)("td",{children:"INITIALIZED"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(l.p,{children:"\u2729"}),(0,t.jsx)(l.p,{children:"long"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:"@LogicalDeleted\nlong deletedMillis();\n"})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedMillis: Long\n"})})})]})}),(0,t.jsx)("td",{children:"Current milliseconds"}),(0,t.jsx)("td",{children:"0L"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(l.p,{children:"\u2729"}),(0,t.jsx)(l.p,{children:"Nullable Long"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:"@LogicalDeleted\nLong deletedMillis();\n"})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedMillis: Long?\n"})})})]})}),(0,t.jsx)("td",{children:"Current milliseconds"}),(0,t.jsx)("td",{children:"null"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(l.p,{children:"\u2729"}),(0,t.jsx)(l.p,{children:"UUID"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:"@LogicalDeleted\nUUID deletedData();\n"})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedData: UUID\n"})})})]})}),(0,t.jsx)("td",{children:"Random UUID"}),(0,t.jsx)("td",{children:"UUID with all bytes as 0"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)(l.p,{children:"\u2729"}),(0,t.jsx)(l.p,{children:"Nullable UUID"})]}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:"@Nullable\n@LogicalDeleted\nUUID deletedData();\n"})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:"@LogicalDeleted\nval deletedData: UUID?\n"})})})]})}),(0,t.jsx)("td",{children:"Random UUID"}),(0,t.jsx)("td",{children:"null"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:(0,t.jsx)(l.p,{children:"Nullable LocalDateTime"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(l.p,{children:"\u2729"}),(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:'@Nullable\n@LogicalDeleted("now")\nUUID deletedTime();\n'})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:'@LogicalDeleted("now")\nval deletedTime: LocalDateTime?\n'})})})]})]}),(0,t.jsx)("td",{children:"Current time"}),(0,t.jsx)("td",{children:"null"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:'@Nullable\n@LogicalDeleted("null")\nUUID createdTime();\n'})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:'@LogicalDeleted("null")\nval createdTime: LocalDateTime?\n'})})})]})}),(0,t.jsx)("td",{children:"null"}),(0,t.jsx)("td",{children:"Current time"})]})]})]}),"\n",(0,t.jsx)(l.p,{children:"Where"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"\u2729 in the first or second column indicates that the current configuration method supports multi-version data to be discussed in the next section."}),"\n",(0,t.jsxs)(l.admonition,{type:"info",children:[(0,t.jsx)(l.mdxAdmonitionTitle,{}),(0,t.jsx)(l.p,{children:"Supporting logical deletion but not considering multi-version data issues is a less mature consideration. Therefore, it is recommended to use the logical deletion configuration that supports multi-version data."})]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"Current milliseconds"}),", the default behavior is ",(0,t.jsx)(l.code,{children:"System.currentMillis()"}),", which is the behavior of the default ",(0,t.jsx)(l.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedLongGenerator"}),"."]}),"\n",(0,t.jsxs)(l.p,{children:["If this behavior is unsatisfactory, a custom class can be implemented that implements the ",(0,t.jsx)(l.code,{children:"LogicalDeletedValueGenerator<Long>"})," interface, and configured with:"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.code,{children:"@LogicalDeleted(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"@LogicalDeleted(generatedRef = YourGenerator.class)"}),", where ",(0,t.jsx)(l.code,{children:"generatorRef"})," indicates the name of the object in the IOC container management framework"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"Random UUID"}),", the default behavior is ",(0,t.jsx)(l.code,{children:"UUID.randomUUID()"}),", which is the behavior of the default ",(0,t.jsx)(l.code,{children:"org.babyfish.jimmer.sql.meta.LogicalDeletedUUIDGenerator"}),"."]}),"\n",(0,t.jsxs)(l.p,{children:["If this behavior is unsatisfactory, a custom class can be implemented that implements the ",(0,t.jsx)(l.code,{children:"LogicalDeletedValueGenerator<UUID>"})," interface, and configured with:"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.code,{children:"@LogicalDeleted(generatedType = YourGenerator.class)"})}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"@LogicalDeleted(generatedRef = YourGenerator.class)"}),", where ",(0,t.jsx)(l.code,{children:"generatorRef"})," indicates the name of the object in the IOC container management framework"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"multi-version-data",children:"Multi-Version Data"}),"\n",(0,t.jsxs)(l.p,{children:["Logical deletion does not actually delete data, it only hides the data. This means that data appears in multiple versions. This issue is also described in ",(0,t.jsx)(l.a,{href:"../key#multi-version-support",children:"Key / Multi-version Support"}),"."]}),"\n",(0,t.jsx)(l.p,{children:"Take the example of long type logical deletion that supports multiple versions"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(d.A,{value:"java",label:"Java",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-java",children:"@Entity  \npublic interface Book {   \n    \n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)  \n    long id();  \n\n    @Key\n    String name();   \n\n    @Key \n    int edition();\n\n    // highlight-next-line\n    @LogicalDeleted    \n    long deletedMillis();\n\n    BigDecimal price();  \n\n    @ManyToOne\n    BookStore store();\n}\n"})})}),(0,t.jsx)(d.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-kotlin",children:"@Entity\ninterface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long  \n\n    @Key \n    val name: String   \n\n    @Key\n    val edition: String \n\n    // highlight-next-line\n    @LogicalDeleted\n    val deletedMillis: Long  \n\n    val price: BigDecimal\n\n    @ManyToOne\n    val store: BookStore \n}\n"})})})]}),"\n",(0,t.jsxs)(l.p,{children:["Although the Key of the ",(0,t.jsx)(l.code,{children:"Book"})," object is ",(0,t.jsx)(l.code,{children:"name"})," and ",(0,t.jsx)(l.code,{children:"edition"}),", because the ",(0,t.jsx)(l.code,{children:"deletedMillis"})," property is the logical deletion flag, the non-primary key ",(0,t.jsx)(l.code,{children:"UNIQUE"})," constraint at the database level should be:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-sql",children:"alter table BOOK\n    add constraint uq_key_BOOK\n        unique(NAME, EDITION, DELETED_MILLIS);  \n"})}),"\n",(0,t.jsx)(l.p,{children:"If the table input is as follows:"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"ID"}),(0,t.jsx)(l.th,{children:"NAME"}),(0,t.jsx)(l.th,{children:"EDITION"}),(0,t.jsx)(l.th,{children:"PRICE"}),(0,t.jsx)(l.th,{children:"STORE_ID"}),(0,t.jsx)(l.th,{children:"DELETED_MILLIS"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"1027"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"1"}),(0,t.jsx)(l.td,{children:"49.99"}),(0,t.jsx)(l.td,{children:"23"}),(0,t.jsx)(l.td,{children:"0"})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"1026"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"1"}),(0,t.jsx)(l.td,{children:"55.99"}),(0,t.jsx)(l.td,{children:"22"}),(0,t.jsx)(l.td,{children:"1708796420956"})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"1025"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"1"}),(0,t.jsx)(l.td,{children:"47.99"}),(0,t.jsx)(l.td,{children:"23"}),(0,t.jsx)(l.td,{children:"1708234681901"})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"3131"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"2"}),(0,t.jsx)(l.td,{children:"59.99"}),(0,t.jsx)(l.td,{children:"23"}),(0,t.jsx)(l.td,{children:"0"})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"3130"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"2"}),(0,t.jsx)(l.td,{children:"53.99"}),(0,t.jsx)(l.td,{children:"22"}),(0,t.jsx)(l.td,{children:"1708722582793"})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"3129"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"2"}),(0,t.jsx)(l.td,{children:"58.99"}),(0,t.jsx)(l.td,{children:"23"}),(0,t.jsx)(l.td,{children:"1708664484823"})]})]})]}),"\n",(0,t.jsx)(l.p,{children:"There are 4 associated data records hidden, leaving only two valid data records:"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"ID"}),(0,t.jsx)(l.th,{children:"NAME"}),(0,t.jsx)(l.th,{children:"EDITION"}),(0,t.jsx)(l.th,{children:"PRICE"}),(0,t.jsx)(l.th,{children:"STORE_ID"}),(0,t.jsx)(l.th,{children:"DELETED_MILLIS"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"1027"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"1"}),(0,t.jsx)(l.td,{children:"49.99"}),(0,t.jsx)(l.td,{children:"23"}),(0,t.jsx)(l.td,{children:"0"})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"3131"}),(0,t.jsx)(l.td,{children:"SQL in Action"}),(0,t.jsx)(l.td,{children:"2"}),(0,t.jsx)(l.td,{children:"59.99"}),(0,t.jsx)(l.td,{children:"23"}),(0,t.jsx)(l.td,{children:"0"})]})]})]}),"\n",(0,t.jsx)(l.h2,{id:"effects-on-middle-tables",children:"Effects on Middle Tables"}),"\n",(0,t.jsxs)(l.p,{children:["If an entity is logically deleted, what effect does it have on associations based on middle tables ",(0,t.jsxs)(l.em,{children:["(using the ",(0,t.jsx)(l.code,{children:"@JoinTable"})," annotation)"]}),"?"]}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["If the middle table also supports logical deletion, that is, the ",(0,t.jsx)(l.code,{children:"logicalDeletedFilter"})," of the ",(0,t.jsx)(l.code,{children:"@JoinTable"})," annotation is specified, the middle table records related to the logically deleted entity will also be logically deleted."]}),"\n",(0,t.jsx)(l.p,{children:"In [the next document] (./join-table), we will discuss in detail the logical deletion of middle tables."}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["If the ",(0,t.jsx)(l.code,{children:"deletedWhenEndpointIsLogicallyDeleted"})," of the ",(0,t.jsx)(l.code,{children:"@JoinTable"})," annotation is set to true, the middle table records related to the logically deleted entity will be physically deleted."]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"If neither of the above two conditions is met, the middle table records related to the logically deleted entity will not be processed at all."}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:l}={...(0,i.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,l,n)=>{n.d(l,{A:()=>d});n(96540);var t=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function d(e){let{children:l,hidden:n,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,d),hidden:n,children:l})}},11470:(e,l,n)=>{n.d(l,{A:()=>D});var t=n(96540),i=n(18215),a=n(23104),d=n(56347),s=n(205),r=n(57485),c=n(31682),o=n(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:l,children:n}=e;return(0,t.useMemo)((()=>{const e=l??function(e){return h(e).map((e=>{let{props:{value:l,label:n,attributes:t,default:i}}=e;return{value:l,label:n,attributes:t,default:i}}))}(n);return function(e){const l=(0,c.X)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,n])}function j(e){let{value:l,tabValues:n}=e;return n.some((e=>e.value===l))}function x(e){let{queryString:l=!1,groupId:n}=e;const i=(0,d.W6)(),a=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:l,groupId:n});return[(0,r.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const l=new URLSearchParams(i.location.search);l.set(a,e),i.replace({...i.location,search:l.toString()})}),[a,i])]}function g(e){const{defaultValue:l,queryString:n=!1,groupId:i}=e,a=u(e),[d,r]=(0,t.useState)((()=>function(e){let{defaultValue:l,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!j({value:l,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:a}))),[c,h]=x({queryString:n,groupId:i}),[g,p]=function(e){let{groupId:l}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(l),[i,a]=(0,o.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),m=(()=>{const e=c??g;return j({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{m&&r(m)}),[m]);return{selectedValue:d,selectValue:(0,t.useCallback)((e=>{if(!j({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function f(e){let{className:l,block:n,selectedValue:t,selectValue:d,tabValues:s}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const l=e.currentTarget,n=r.indexOf(l),i=s[n].value;i!==t&&(c(l),d(i))},h=e=>{let l=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=r.indexOf(e.currentTarget)+1;l=r[n]??r[0];break}case"ArrowLeft":{const n=r.indexOf(e.currentTarget)-1;l=r[n]??r[r.length-1];break}}l?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},l),children:s.map((e=>{let{value:l,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===l?0:-1,"aria-selected":t===l,ref:e=>r.push(e),onKeyDown:h,onClick:o,...a,className:(0,i.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===l}),children:n??l},l)}))})}function v(e){let{lazy:l,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,l)=>(0,t.cloneElement)(e,{key:l,hidden:e.props.value!==i})))})}function y(e){const l=g(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...l,...e}),(0,b.jsx)(v,{...l,...e})]})}function D(e){const l=(0,p.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(l))}},28453:(e,l,n)=>{n.d(l,{R:()=>d,x:()=>s});var t=n(96540);const i={},a=t.createContext(i);function d(e){const l=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(a.Provider,{value:l},e.children)}}}]);