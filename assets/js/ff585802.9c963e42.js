"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[325],{18319:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=t(74848),a=t(28453),l=t(11470),s=t(19365);const r={sidebar_position:9,title:"Join Table Filter"},o=void 0,c={id:"mapping/advanced/join-table-filter",title:"Join Table Filter",description:"Two Scenarios",source:"@site/docs/mapping/advanced/join-table-filter.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-table-filter",permalink:"/jimmer-doc/docs/mapping/advanced/join-table-filter",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/join-table-filter.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Join Table Filter"},sidebar:"tutorialSidebar",previous:{title:"Non-Structural Mapping",permalink:"/jimmer-doc/docs/mapping/advanced/join-sql"},next:{title:"Key",permalink:"/jimmer-doc/docs/mapping/advanced/key"}},d={},h=[{value:"Two Scenarios",id:"two-scenarios",level:2},{value:"1. Multiple associations between same entity types",id:"1-multiple-associations-between-same-entity-types",level:3},{value:"2. Multiple associations between different entity types",id:"2-multiple-associations-between-different-entity-types",level:3},{value:"Mixing One-to-Many and Many-to-Many",id:"mixing-one-to-many-and-many-to-many",level:2},{value:"Define Associations",id:"define-associations",level:3},{value:"Conditional Indexes",id:"conditional-indexes",level:3}];function u(n){const e={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"two-scenarios",children:"Two Scenarios"}),"\n",(0,i.jsx)(e.p,{children:"Jimmer supports join table filters, with two usage scenarios:"}),"\n",(0,i.jsx)(e.h3,{id:"1-multiple-associations-between-same-entity-types",children:"1. Multiple associations between same entity types"}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Shop {\n\n    @Id\n    long id();\n\n    String name();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    List<Customer> customers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    List<Customer> vipCustomers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    List<Customer> ordinaryCustomers();\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Shop {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    val customers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    val vipCustomers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    val ordinaryCustomers: List<Customer>\n}\n'})})})]}),"\n",(0,i.jsxs)(e.p,{children:["In this example, ",(0,i.jsx)(e.code,{children:"Shop.customers"}),", ",(0,i.jsx)(e.code,{children:"Shop.vipCustomers"}),", and ",(0,i.jsx)(e.code,{children:"Shop.ordinaryCustomers"})," share the same join table"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"create table SHOP_CUSTOMER_MAPPING(\n    SHOP_ID bigint not null,\n    CUSTOMER_ID bigint not null,\n    MAPPING_TYPE varchar(8) not null\n);\n\n// Whether the primary key of the join table contains \n// the filter column depends on the specific case.  \n// In this example, a mapping between a `Shop` and `Customer`\n// cannot be both \"VIP\" and \"ORDINARY\" at the same time.\n// So the primary key does not contain `MAPPING_TYPE`.\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SHOP_ID, CUSTOMER_ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__SHOP\n        foreign key(SHOP_ID)\n            references SHOP(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__CUSTOMER\n        foreign key(CUSTOMER_ID)\n            references CUSTOMER(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('VIP', 'ORDINARY'));\n"})}),"\n",(0,i.jsx)(e.p,{children:"The table stores data like below:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"SHOP_ID"}),(0,i.jsx)(e.th,{children:"CUSTOMER_ID"}),(0,i.jsx)(e.th,{children:"MAPPING_TYPE"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"21"}),(0,i.jsx)(e.td,{children:"3176"}),(0,i.jsx)(e.td,{children:"VIP"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"21"}),(0,i.jsx)(e.td,{children:"1087"}),(0,i.jsx)(e.td,{children:"ORDINARY"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"21"}),(0,i.jsx)(e.td,{children:"9155"}),(0,i.jsx)(e.td,{children:"ORDINARY"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"40"}),(0,i.jsx)(e.td,{children:"8347"}),(0,i.jsx)(e.td,{children:"VIP"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"40"}),(0,i.jsx)(e.td,{children:"4365"}),(0,i.jsx)(e.td,{children:"ORDINARY"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"40"}),(0,i.jsx)(e.td,{children:"3478"}),(0,i.jsx)(e.td,{children:"ORDINARY"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["Where ",(0,i.jsx)(e.code,{children:"Shop.vipCustomers"})," corresponds to two rows, ",(0,i.jsx)(e.code,{children:"Shop.ordinaryCustomers"})," to four rows, and ",(0,i.jsx)(e.code,{children:"Shop.customers"})," can see all rows:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Shop.customers = Shop.vipCustomers + Shop.ordinaryCustomers \n"})}),"\n",(0,i.jsxs)(e.p,{children:["We can see that ",(0,i.jsx)(e.code,{children:"Shop.customers"})," is not a base association, but the union of other associations. Let's call it a union association."]}),"\n",(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsxs)(e.p,{children:["Union associations cannot be directly modified, so ",(0,i.jsx)(e.code,{children:"readonly = true"})," must be declared."]})}),"\n",(0,i.jsxs)(e.p,{children:["Actually, the union association ",(0,i.jsx)(e.code,{children:"Shop.customers"})," has an equivalent alternative syntax:"]}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...other params omitted..., \n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class, \n        // highlight-next-line\n        values = {"VIP", "ORDINARY"}\n    )\n)\nList<Customer> customers();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...other params omitted...,\n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class, \n        // highlight-next-line \n        values = {"VIP", "ORDINARY"}\n    )  \n)\nval customers: List<Customer>\n'})})})]}),"\n",(0,i.jsx)(e.p,{children:"Finally, let's look at the difference in JOIN behavior between these three associations:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"Shop.customers"})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table) \n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .customers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(  \n            table\n                .asTableEx()\n                // highlight-next-line\n                .customers\n                .name eq "Smith"\n        )\n        select(table.id()) \n    }\n    .distinct()\n    .execute();\n'})})})]}),"\n",(0,i.jsx)(e.p,{children:"The generated SQL is:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select distinct tb_1_.ID, tb_1_.NAME \nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_\n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID \ninner join CUSTOMER tb_3_\n    on tb_2_.CUSTOMER_ID = tb_3_.ID \nwhere tb_3_.NAME = ? /* Smith */\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"Shop.vipCustomers"})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx() \n            // highlight-next-line\n            .vipCustomers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct() \n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line  \n                .vipCustomers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n'})})})]}),"\n",(0,i.jsx)(e.p,{children:"The generated SQL is:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_\n    /* highlight-next-line */  \n    on tb_1_.ID = tb_2_.SHOP_ID\n    /* highlight-next-line */\n    and tb_2_.MAPPING_TYPE = ? /* VIP */ \nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_\n    on tb_2_.CUSTOMER_ID = tb_3_.ID \nwhere tb_3_.NAME = ? /* Smith */\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"Shop.ordinaryCustomers"})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient \n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .ordinaryCustomers()\n            .name().eq("Smith")\n    ) \n    .select(table.id())\n    .distinct()\n    .execute();\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()  \n                // highlight-next-line\n                .ordinaryCustomers\n                .name eq "Smith"\n        )\n        select(table.id()) \n    }\n    .distinct()\n    .execute();\n'})})})]}),"\n",(0,i.jsx)(e.p,{children:"The generated SQL is:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_\n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID \n    /* highlight-next-line */  \n    and tb_2_.MAPPING_TYPE = ? /* ORDINARY */\nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_\n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-multiple-associations-between-different-entity-types",children:"2. Multiple associations between different entity types"}),"\n",(0,i.jsxs)(e.p,{children:["A common case is when a project has many kinds of data, and each kind of data can be tagged with multiple ",(0,i.jsx)(e.code,{children:"Tag"}),"s."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"Tag"})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"@Entity\npublic interface Tag {\n\n    @Id  \n    long id();\n\n    String name();\n\n    ...other properties omitted...\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:"@Entity\ninterface Tag {\n\n    @Id\n    val id: Long  \n\n    val name: String\n\n    ...other properties omitted...\n}\n"})})})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"BookStore"})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING", \n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE", \n        )\n    )\n    List<Tag> tags();\n    \n    ...other properties omitted...\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'@Entity  \ninterface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID", \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...other properties omitted...\n}\n'})})})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"Book"})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",  \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK",\n        )\n    ) \n    List<Tag> tags();\n    \n    ...other properties omitted...\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class, \n            values = "BOOK",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...other properties omitted...\n}\n'})})})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"Author"})}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",  \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR", \n        )\n    )\n    List<Tag> tags();\n    \n    ...other properties omitted...\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID", \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR",\n        ) \n    )\n    val tags: List<Tag>\n    \n    ...other properties omitted...\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["For the join table ",(0,i.jsx)(e.code,{children:"SOURCE_TAG_MAPPING"}),", although the foreign key ",(0,i.jsx)(e.code,{children:"TAG_ID"})," references the ",(0,i.jsx)(e.code,{children:"TAG"})," table,\nthe other foreign key ",(0,i.jsx)(e.code,{children:"SOURCE_ID"})," does not have a fixed target - it could reference ",(0,i.jsx)(e.code,{children:"BOOK_STORE"}),", ",(0,i.jsx)(e.code,{children:"BOOK"})," or ",(0,i.jsx)(e.code,{children:"AUTHOR"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Therefore we cannot add a foreign key constraint on ",(0,i.jsx)(e.code,{children:"SOURCE_ID"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"create table SOURCE_TAG_MAPPING(\n    SOURCE_ID bigint not null,\n    TAG_ID bigint not null,\n    SOURCE_TYPE varchar(10) not null  \n);\n\n// Whether the primary key contains the filter column \n// depends on the specific case.\n// In this example, `SOURCE_ID` of different types could be equal, \n// so the primary key constraint needs to contain `SOURCE_TYPE`.\nalter table SOURCE_TAG_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SOURCE_ID, TAG_ID, SOURCE_TYPE);  \n\n// highlight-next-line\n// `SOURCE_ID` could reference `BOOK_STORE`, `BOOK` or `AUTHOR`,\n// highlight-next-line \n// so we cannot add a foreign key constraint\n\nalter table SOURCE_TAG_MAPPING\n    add constraint fk_SOURCE_TAG_MAPPING__TAG\n        primary key(TAG_ID)\n            references TAG(ID);\n\nalter table SOURCE_TAG_MAPPING\n    add constraint ck_SOURCE_TAG_MAPPING__SOURCE_TYPE\n        check(SOURCE_TYPE in ('BOOK_STORE', 'BOOK', 'AUTHOR')); \n"})}),"\n",(0,i.jsxs)(e.p,{children:["Since ",(0,i.jsx)(e.code,{children:"SOURCE_ID"})," cannot have a foreign key constraint, it is a ",(0,i.jsx)(e.a,{href:"../base/foreignkey",children:"fake foreign key"}),".\nThat's why in the code above:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@JoinTable(\n    joinColumns = @joinColumn(\n        name = "SOURCE_ID",\n        // highlight-next-line  \n        foreignKeyType = ForeignKeyType.FAKE\n    ), \n    ...other params omitted...\n)\n'})}),"\n",(0,i.jsx)(e.p,{children:"Sample data could look like:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"SOURCE_ID"}),(0,i.jsx)(e.th,{children:"TARGET_ID"}),(0,i.jsx)(e.th,{children:"SOURCE_TYPE"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"9"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"BOOK_STORE"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"9"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"BOOK_STORE"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"86"}),(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"BOOK"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"86"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"BOOK"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"781"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"AUTHOR"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"781"}),(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"AUTHOR"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"mixing-one-to-many-and-many-to-many",children:"Mixing One-to-Many and Many-to-Many"}),"\n",(0,i.jsx)(e.p,{children:"Both one-to-many and many-to-many can use join tables, so we can merge their join tables into one table. But please note:"}),"\n",(0,i.jsxs)(e.admonition,{type:"caution",children:[(0,i.jsx)(e.mdxAdmonitionTitle,{}),(0,i.jsx)(e.p,{children:"It is strongly recommended to only use this pattern when the database supports conditional indexes."}),(0,i.jsx)(e.p,{children:"That is, do not use this pattern on databases without conditional index support like MySQL."})]}),"\n",(0,i.jsx)(e.h3,{id:"define-associations",children:"Define Associations"}),"\n",(0,i.jsxs)(l.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID", \n        readonly = true\n    )\n    List<Author> authors();\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        )\n    )  \n    Author primaryAuthor();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class, \n            values = "SECONDARY"\n        )\n    )\n    List<Author> secondaryAuthors();\n\n    ...other properties omitted...  \n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-kotlin",children:'@Entity  \ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        readonly = true\n    )\n    val authors: List<Author>\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        ) \n    )\n    val primaryAuthor: Author?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "SECONDARY"  \n        )\n    )\n    val secondaryAuthors: List<Author>\n\n    ...other properties omitted...\n}\n'})})})]}),"\n",(0,i.jsx)(e.p,{children:"Clearly:"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"authors"})," ",(0,i.jsx)(e.em,{children:"(many-to-many)"})," = ",(0,i.jsx)(e.code,{children:"primaryAuthor"})," ",(0,i.jsx)(e.em,{children:"(many-to-one)"})," + ",(0,i.jsx)(e.code,{children:"secondaryAuthors"})," ",(0,i.jsx)(e.em,{children:"(many-to-many)"})]}),"\n",(0,i.jsx)(e.h3,{id:"conditional-indexes",children:"Conditional Indexes"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"create table BOOK_AUTHOR_MAPPING(\n    BOOK_ID bigint not null,\n    AUTHOR_ID bigint not null,\n    MAPPING_TYPE varchar(9) not null  \n);\n\n// Whether the primary key contains the filter column depends on the specific case.\n// In this example, a mapping between an `Author` and a `Book`  \n// cannot be both \"PRIMARY\" and \"SECONDARY\" at the same time.\n// So the primary key constraint does not contain `MAPPING_TYPE`.\nalter table BOOK_AUTHOR_MAPPING\n    add constraint pk_BOOK_AUTHOR_MAPPING\n        primary key(BOOK_ID, AUTHOR_ID);  \n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(AUTHOR_ID)\n            references AUTHOR(ID); \n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint ck_BOOK_AUTHOR_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('PRIMARY', 'SECONDARY'));  \n\n// highlight-start\n// Syntax for conditional indexes may differ slightly between databases,  \n// here is an example in Postgres\ncreate unique index BOOK_AUTHOR_MAPPING__PRIMARY_INDEX\n    on BOOK_AUTHOR_MAPPING(AUTHOR_ID) \n    when MAPPING_TYPE = 'PRIMARY'; \n// highlight-end\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"when"})," clause is very important, indicating this is a conditional index."]}),"\n",(0,i.jsxs)(e.p,{children:["Syntax for conditional indexes may differ slightly between databases, here is an example in Postgres. See ",(0,i.jsx)(e.a,{href:"https://www.postgresql.org/docs/current/indexes-partial.html",children:"https://www.postgresql.org/docs/current/indexes-partial.html"})," for more details."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["When ",(0,i.jsx)(e.code,{children:"MAPPING_TYPE"}),' is "PRIMARY", a unique index is added on the ',(0,i.jsx)(e.code,{children:"AUTHOR_ID"})," foreign key to ensure each ",(0,i.jsx)(e.code,{children:"Book"})," has maximum one primary ",(0,i.jsx)(e.code,{children:"Author"}),".",(0,i.jsx)(e.br,{}),"\n","That is, to ensure ",(0,i.jsx)(e.code,{children:"Book.primaryAuthor"})," is a many-to-one association."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Otherwise, there is no uniqueness constraint, so each ",(0,i.jsx)(e.code,{children:"Book"})," can have any number of secondary ",(0,i.jsx)(e.code,{children:"Author"}),"s.",(0,i.jsx)(e.br,{}),"\n","That is, ",(0,i.jsx)(e.code,{children:"Book.secondaryAuthors"})," remains a many-to-many association."]}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},19365:(n,e,t)=>{t.d(e,{A:()=>s});t(96540);var i=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(n){let{children:e,hidden:t,className:s}=n;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,s),hidden:t,children:e})}},11470:(n,e,t)=>{t.d(e,{A:()=>A});var i=t(96540),a=t(18215),l=t(23104),s=t(56347),r=t(205),o=t(57485),c=t(31682),d=t(70679);function h(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:t}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return h(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:a}}=n;return{value:e,label:t,attributes:i,default:a}}))}(t);return function(n){const e=(0,c.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function m(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function x(n){let{queryString:e=!1,groupId:t}=n;const a=(0,s.W6)(),l=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(l),(0,i.useCallback)((n=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,n),a.replace({...a.location,search:e.toString()})}),[l,a])]}function p(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,l=u(n),[s,o]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=t.find((n=>n.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:l}))),[c,h]=x({queryString:t,groupId:a}),[p,j]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,l]=(0,d.Dv)(t);return[a,(0,i.useCallback)((n=>{t&&l.set(n)}),[t,l])]}({groupId:a}),_=(()=>{const n=c??p;return m({value:n,tabValues:l})?n:null})();(0,r.A)((()=>{_&&o(_)}),[_]);return{selectedValue:s,selectValue:(0,i.useCallback)((n=>{if(!m({value:n,tabValues:l}))throw new Error(`Can't select invalid tab value=${n}`);o(n),h(n),j(n)}),[h,j,l]),tabValues:l}}var j=t(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function T(n){let{className:e,block:t,selectedValue:i,selectValue:s,tabValues:r}=n;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=n=>{const e=n.currentTarget,t=o.indexOf(e),a=r[t].value;a!==i&&(c(e),s(a))},h=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=o.indexOf(n.currentTarget)+1;e=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(n.currentTarget)-1;e=o[t]??o[o.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:r.map((n=>{let{value:e,label:t,attributes:l}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>o.push(n),onKeyDown:h,onClick:d,...l,className:(0,a.A)("tabs__item",_.tabItem,l?.className,{"tabs__item--active":i===e}),children:t??e},e)}))})}function g(n){let{lazy:e,children:t,selectedValue:a}=n;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===a));return n?(0,i.cloneElement)(n,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==a})))})}function O(n){const e=p(n);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",_.tabList),children:[(0,b.jsx)(T,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function A(n){const e=(0,j.A)();return(0,b.jsx)(O,{...n,children:h(n.children)},String(e))}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var i=t(96540);const a={},l=i.createContext(a);function s(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);