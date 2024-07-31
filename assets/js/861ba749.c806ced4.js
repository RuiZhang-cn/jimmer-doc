"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6861],{72442:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=a(74848),l=a(28453),i=a(11470),r=a(19365);const s={sidebar_position:1,title:"Formula"},o=void 0,c={id:"mapping/advanced/calculated/formula",title:"Formula",description:"Simple formula properties are properties declared with @org.babyfish.jimmer.sql.Formula. There are two usages:",source:"@site/docs/mapping/advanced/calculated/formula.mdx",sourceDirName:"mapping/advanced/calculated",slug:"/mapping/advanced/calculated/formula",permalink:"/jimmer-doc/docs/mapping/advanced/calculated/formula",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/calculated/formula.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Formula"},sidebar:"tutorialSidebar",previous:{title:"Calculated Properties",permalink:"/jimmer-doc/docs/mapping/advanced/calculated/"},next:{title:"Complex Calculation",permalink:"/jimmer-doc/docs/mapping/advanced/calculated/transient"}},d={},u=[{value:"1. Java/Kotlin-based Calculation",id:"1-javakotlin-based-calculation",level:2},{value:"Depending on simple properties",id:"depending-on-simple-properties",level:3},{value:"Depending on embedded object",id:"depending-on-embedded-object",level:3},{value:"Depending on association properties",id:"depending-on-association-properties",level:3},{value:"2. SQL-based Calculation",id:"2-sql-based-calculation",level:2},{value:"Comparison",id:"comparison",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Simple formula properties are properties declared with ",(0,t.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.Formula"}),". There are two usages:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Formula properties based on Java/Kotlin calculation"}),"\n",(0,t.jsx)(n.li,{children:"Formula properties based on SQL calculation"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Simple formula properties are designed for simple and fast calculations. For complex calculations, use ",(0,t.jsx)(n.a,{href:"./transient",children:"Complex Formula Properties"})," instead."]})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"/jimmer-doc/docs/quick-view/get-started/define-entity",children:"Define Entity"}),", we defined two fields for ",(0,t.jsx)(n.code,{children:"Author"}),": ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Next, let's add a new property ",(0,t.jsx)(n.code,{children:"fullName"})," to ",(0,t.jsx)(n.code,{children:"Author"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"fullName = firstName + ' ' + lastName\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then we use two different ways, Java/Kotlin-based calculation and SQL-based calculation, to implement ",(0,t.jsx)(n.code,{children:"Author.fullName"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"1-javakotlin-based-calculation",children:"1. Java/Kotlin-based Calculation"}),"\n",(0,t.jsx)(n.h3,{id:"depending-on-simple-properties",children:"Depending on simple properties"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    @Formula(dependencies = {"firstName", "lastName"})\n    default String fullName() {\n        return firstName() + \' \' + lastName(); \n    }\n\n    ...Omit other properties...\n}\n'})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"  ',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    @Formula(dependencies = ["firstName", "lastName"])\n    val fullName: String\n        get() = "$firstName $lastName"\n\n    ...Omit other properties...\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"It is easy to see that Java/Kotlin-based simple formula properties have the following characteristics:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The property is not abstract (requires ",(0,t.jsx)(n.code,{children:"default"})," keyword in Java) and directly provides calculation logic implementation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@Formula"}),"'s ",(0,t.jsx)(n.code,{children:"dependencies"})," is specified, indicating that this property depends on ",(0,t.jsx)(n.code,{children:"Author.firstName"})," and ",(0,t.jsx)(n.code,{children:"Author.lastName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["That is, the dynamic entity must ensure the presence of both ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"})," properties to calculate ",(0,t.jsx)(n.code,{children:"fullName"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The usage is:"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Author author = authorRepository.findNullable(\n    1L,\n    Fetchers.AUTHOR_FETCHER\n        // Query id (implicit + forced) and fullName  \n        // highlight-next-line\n        .fullName()\n);\nSystem.out.println(author);\n"})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val author = authorRepository.findNullable(\n    1L,\n    newFetcher(Author::class).by {\n        // Query id (implicit + forced) and fullName\n        // highlight-next-line\n        fullName()\n    }\n);\nprintln(author)\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The executed SQL is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    /* highlight-start */  \n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME\n    /* highlight-end */\nfrom AUTHOR as tb_1_\nwhere tb_1_.ID = ?  \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"fullName"})," is a formula property without corresponding field in the database, but depends on ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"}),".\nSo this SQL queries ",(0,t.jsx)(n.code,{children:"FIRST_NAME"})," and ",(0,t.jsx)(n.code,{children:"LAST_NAME"})," to make its dependent properties present."]}),"\n",(0,t.jsx)(n.p,{children:"Next, let's see what is printed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"id":1,"fullName":"Eve Procello"}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We can see that after Jackson serialization (the ",(0,t.jsx)(n.code,{children:"toString"})," method of entity objects is a shortcut for serialization), there is only ",(0,t.jsx)(n.code,{children:"fullName"})," but no ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This is because the object fetcher causes ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"})," to be indirectly fetched due to fetching ",(0,t.jsx)(n.code,{children:"fullName"}),", but they are not directly fetched."]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, although the dynamic object has ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"}),", they are marked as invisible to Jackson and will not appear in the Jackson serialization result."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If the object fetcher directly fetches ",(0,t.jsx)(n.code,{children:"firstName"})," and ",(0,t.jsx)(n.code,{children:"lastName"}),", they will definitely appear in the serialization result. Readers can try it themselves, no need to repeat here."]})}),"\n",(0,t.jsx)(n.h3,{id:"depending-on-embedded-object",children:"Depending on embedded object"}),"\n",(0,t.jsx)(n.p,{children:"Suppose there is an Embeddable type"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="NameInfo.java"',children:"@Embeddable\npublic interface NameInfo {\n    String firstName();\n    String lastName();\n}\n"})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="NameInfo.kt"',children:"@Embeddable\ninterface NameInfo {\n    val firstName: String\n    val lastName: String\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"If an entity uses this Embeddable type, then the entity properties can depend on its internal properties, for example"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:'@Entity\npublic interface Author {\n\n    NameInfo nameInfo();\n\n    // highlight-next-line\n    @Formula(dependencies = {"nameInfo.firstName", "nameInfo.lastName"})\n    // or it can be written as: @Formula(dependencies = "nameInfo")\n    default String fullName() {\n        return nameInfo().firstName() + \' \' + nameInfo().lastName();\n    }\n\n    ...other properties omitted...\n}\n'})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:'@Entity\ninterface Author {\n\n    val nameInfo: NameInfo\n\n    // highlight-next-line\n    @Formula(dependencies = ["nameInfo.firstName", "nameInfo.lastName"])\n    // or it can be written as: @Formula(dependencies = ["nameInfo"])\n    ...other properties omitted...\n    val fullName: String\n        get() = "${nameInfo.firstName} ${nameInfo.lastName}"\n}\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The usage and execution effect are completely the same as above, no need to repeat."})}),"\n",(0,t.jsx)(n.h3,{id:"depending-on-association-properties",children:"Depending on association properties"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    List<Author> authors();\n\n    // highlight-next-line\n    @Formula(dependencies = "authors")\n    default int authorCount() {\n        return authors().size();\n    }\n\n    // highlight-next-line\n    @Formula(dependencies = {"authors.firstName", "authors.lastName"})\n    default List<String> authorNames() {\n        return authors()\n            .stream()\n            .map(author -> author.firstName() + \' \' + author.lastName())\n            .collect(Collectors.toList());\n    }\n\n    ...other properties omitted...\n}\n'})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @Formula(dependencies = "authors")\n    val authorCount: Int\n        get() = authors.size\n\n    // highlight-next-line\n    @Formula(dependencies = ["authors.firstName", "authors.lastName"])\n    val authorNames: List<String>\n        get() = authors.map { "${it.firstName} ${it.lastName}" }\n\n    ...other properties omitted...\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Execute the following code"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .name()\n                .edition()\n                // highlight-next-line\n                .authorCount()\n                // highlight-next-line\n                .authorNames()\n        )\n    )\n    .execute();\n'})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "Learning GraphQL")\n        orderBy(table.edition().desc())\n        select(\n            table.fetchBy {\n                name()\n                edition()\n                // highlight-next-line\n                authorCount()\n                // highlight-next-line\n                authorNames()\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Execute, generating two SQL statements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\nfrom BOOK tb_1_\nwhere\n    tb_1_.NAME = ? /* Learning GraphQL */\norder by\n    tb_1_.EDITION desc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_2_.BOOK_ID,\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME\nfrom AUTHOR tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.AUTHOR_ID\nwhere\n    tb_2_.BOOK_ID in (\n        ? /* 3 */, ? /* 2 */, ? /* 1 */\n    )\norder by\n    tb_1_.FIRST_NAME asc,\n    tb_1_.LAST_NAME asc\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The obtained data is as follows"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        // highlight-next-line\n        "authorCount":2,\n        // highlight-next-line\n        "authorNames":["Alex Banks","Eve Procello"]\n    }, \n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        // highlight-next-line\n        "authorCount":2,\n        // highlight-next-line\n        "authorNames":["Alex Banks","Eve Procello"]\n    }, \n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        // highlight-next-line\n        "authorCount":2,\n        // highlight-next-line\n        "authorNames":["Alex Banks","Eve Procello"]\n    }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2-sql-based-calculation",children:"2. SQL-based Calculation"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Author.java"',children:"package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    @Formula(sql = \"concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)\")\n    String fullName();\n\n    ...Omit other properties...\n} \n"})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Author.kt"',children:"package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    @Formula(sql = \"concat(%alias.FIRST_NAME, ' ', %alias.LAST_NAME)\")\n    val fullName: String\n\n    ...Omit other properties...\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"It is easy to see that SQL-based simple formula properties have the following characteristics:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The property is abstract."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@Formula"}),"'s ",(0,t.jsx)(n.code,{children:"sql"})," is specified as an SQL expression with a special token ",(0,t.jsx)(n.code,{children:"%alias"})]}),"\n",(0,t.jsxs)(n.p,{children:["Users cannot know the alias of the current table in the final SQL in advance, so Jimmer stipulates here that ",(0,t.jsx)(n.code,{children:"%alias"})," represents the actual table column name."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The usage is:"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Author author = authorRepository.findNullable(  \n    1L,\n    Fetchers.AUTHOR_FETCHER\n        // Query id (implicit + forced) and fullName\n        // highlight-next-line\n        .fullName()\n);\nSystem.out.println(author);\n"})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val author = authorRepository.findNullable(\n    1L,\n    newFetcher(Author::class).by {\n        // Query id (implicit + forced) and fullName\n        // highlight-next-line\n        fullName()\n    }\n);\nprintln(author)\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    /* Here, `%alias` in @Formula.sql is replaced with `tb_1_` */ \n    /* highlight-next-line */\n    concat(tb_1_.FIRST_NAME, ' ', tb_1_.LAST_NAME)\nfrom AUTHOR as tb_1_\nwhere tb_1_.ID = ?\n"})}),"\n",(0,t.jsx)(n.p,{children:"The final printed result is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"id":1,"fullName":"Eve Procello"}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"comparison",children:"Comparison"}),"\n",(0,t.jsx)(n.p,{children:"Compared with Java/Kotlin-based simple formula, SQL-based simple formula has one disadvantage and one advantage:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Disadvantage: If the object fetcher fetches ",(0,t.jsx)(n.code,{children:"firstName"}),", ",(0,t.jsx)(n.code,{children:"lastName"})," and ",(0,t.jsx)(n.code,{children:"fullName"})," at the same time, it will cause the final SQL to query three columns:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tb_1_.FIRST_NAME"}),", ",(0,t.jsx)(n.code,{children:"tb_1_.LAST_NAME"})," and ",(0,t.jsx)(n.code,{children:"concat(tb_1_.FIRST_NAME, ' ', tb_1_.LAST_NAME)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Obviously, the returned data contains redundancy and is wasteful."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Advantage: Java/Kotlin-based formula properties can only be used as fields to be fetched by object fetchers, and cannot be used by SQL DSL."}),"\n",(0,t.jsx)(n.p,{children:"SQL-based formula properties will be generated into the strongly typed SQL DSL API by the code generator, available for SQL DSL, such as:"}),"\n",(0,t.jsxs)(n.p,{children:["Java's ",(0,t.jsx)(n.code,{children:'where(table.fullName().eq("Eve Procello"))'})," or Kotlin's ",(0,t.jsx)(n.code,{children:'where(table.fullName eq "Eve Procello")'})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Among all formula properties, only SQL-based simple formula properties can be used by SQL DSL."}),(0,t.jsx)(n.p,{children:"It is recommended to use databases that support function indexes and use them in combination with function indexes."})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Therefore, it is recommended to carefully consider whether @Formula formula properties should be based on Java/Kotlin calculation or SQL calculation."})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>r});a(96540);var t=a(18215);const l={tabItem:"tabItem_Ymn6"};var i=a(74848);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,r),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),l=a(18215),i=a(23104),r=a(56347),s=a(205),o=a(57485),c=a(31682),d=a(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const l=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,i=h(e),[r,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:a,groupId:l}),[x,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,d.Dv)(a);return[l,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:l}),j=(()=>{const e=c??x;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{j&&o(j)}),[j]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function b(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),l=s[a].value;l!==t&&(c(n),r(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,l.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:l}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function N(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,g.jsx)(N,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var t=a(96540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);