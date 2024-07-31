"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6623],{56329:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var s=a(74848),l=a(28453),r=a(11470),i=a(19365);const t={sidebar_position:4,title:"\u547d\u540d\u7b56\u7565"},c=void 0,d={id:"mapping/base/naming-strategy",title:"\u547d\u540d\u7b56\u7565",description:"\u547d\u540d\u7b56\u7565\u63a5\u53e3",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/naming-strategy.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/naming-strategy",permalink:"/jimmer-doc/zh/docs/mapping/base/naming-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/naming-strategy.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u547d\u540d\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u5bf9\u591a",permalink:"/jimmer-doc/zh/docs/mapping/base/association/many-to-many"},next:{title:"\u771f\u5047\u5916\u952e",permalink:"/jimmer-doc/zh/docs/mapping/base/foreignkey"}},o={},u=[{value:"\u547d\u540d\u7b56\u7565\u63a5\u53e3",id:"\u547d\u540d\u7b56\u7565\u63a5\u53e3",level:2},{value:"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565",id:"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565",level:2},{value:"UPPER_CASE",id:"upper_case",level:3},{value:"LOWER_CASE",id:"lower_case",level:3},{value:"\u8986\u76d6\u7b56\u7565",id:"\u8986\u76d6\u7b56\u7565",level:2},{value:"\u4f7f\u7528SpringBoot\u65f6",id:"\u4f7f\u7528springboot\u65f6",level:3},{value:"\u4e0d\u4f7f\u7528SprinBoot\u65f6",id:"\u4e0d\u4f7f\u7528sprinboot\u65f6",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u547d\u540d\u7b56\u7565\u63a5\u53e3",children:"\u547d\u540d\u7b56\u7565\u63a5\u53e3"}),"\n",(0,s.jsxs)(n.p,{children:["\u524d\u9762\u7684\u7ae0\u8282\uff0c\u6211\u4eec\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u7b80\u5355\u5b9e\u4f53\u6620\u5c04\u548c\u5173\u8054\u6620\u5c04 ",(0,s.jsx)(n.em,{children:"\uff08\u4e00\u5bf9\u4e00\u3001\u591a\u5bf9\u4e00\u3001\u4e00\u5bf9\u591a\u3001\u591a\u5bf9\u591a\uff09"}),"\u3002\u4ece\u8fd9\u4e9b\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u4e86\u89e3\u5230"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:'@Table(name = "...")'}),"\u660e\u786e\u5730\u4e3a\u5b9e\u4f53\u6307\u5b9a\u8868\u540d"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:'@GeneratedValue(..., sequenceName = "...")'}),"\u660e\u786e\u5730\u6307\u5b9a\u751f\u6210id\u6240\u9700\u7684\u5e8f\u5217\u540d\u79f0 ",(0,s.jsx)(n.em,{children:"\uff08\u524d\u63d0\u662f\u4f7f\u7528\u5e8f\u5217\u589e\u957f\u7b56\u7565\uff09"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:'@Column(name = "...")'}),"\u660e\u786e\u5730\u4e3a\u666e\u901a\u5217\u6307\u5b9a\u5217\u540d"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:'@JoinColumn(name = "...")'}),"\u660e\u786e\u5730\u4e3a\u5916\u952e\u5217\u6307\u5b9a\u5217\u540d"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.code,{children:'@JoinTable(name = "...")'}),"\u660e\u786e\u5730\u4e3a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\u6307\u5b9a\u4e2d\u95f4\u8868\u8868\u540d\u4ee5\u53ca\u5176\u6240\u6709\u5217\u540d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u800c\uff0c\u4e3a\u4e86\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u6211\u4eec\u4e0d\u53ef\u80fd\u8fc7\u591a\u5730\u4f7f\u7528\u8fd9\u4e9b\u6ce8\u89e3\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u7684\u540d\u5b57\u63a8\u5bfc\u884c\u4e3a\u5e94\u8be5\u53ef\u4ee5\u5de5\u4f5c\uff0c\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u624d\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u6ce8\u89e3\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u67d0\u4e2a\u7c7b\u6216\u5c5e\u6027\uff0c\u5982\u679c\u7528\u6237",(0,s.jsx)(n.strong,{children:"\u4e0d"}),"\u7528\u8fd9\u7c7b\u6ce8\u89e3\uff0c\u5982\u4f55\u81ea\u52a8\u51b3\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u6807\u8bc6\u540d\uff0c\u88ab\u79f0\u4e3a\u547d\u540d\u7b56\u7565\uff0c\u662f\u4e00\u4e2a\u53ef\u5b9a\u5236\u7684Java\u63a5\u53e3"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"package org.babyfish.jimmer.sql.meta;\n\nimport org.babyfish.jimmer.meta.ImmutableProp;\nimport org.babyfish.jimmer.meta.ImmutableType;\n\npublic interface DatabaseNamingStrategy {\n\n    String tableName(ImmutableType type);\n\n    String sequenceName(ImmutableType type);\n\n    String columnName(ImmutableProp prop);\n\n    String foreignKeyColumnName(ImmutableProp prop);\n\n    String middleTableName(ImmutableProp prop);\n\n    String middleTableBackRefColumnName(ImmutableProp prop);\n\n    String middleTableTargetRefColumnName(ImmutableProp prop);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"ImmutableType"}),"\u548c",(0,s.jsx)(n.code,{children:"ImmutableProp"}),"\u662fJimmer\u5143\u6570\u636e\u6240\u7528\u7c7b\u578b\uff0c\u53ef\u4ee5\u5f88\u76f4\u89c2\u5730\u7528JVM\u53cd\u5c04API\u7684",(0,s.jsx)(n.code,{children:"Class"}),"\u548c",(0,s.jsx)(n.code,{children:"Field"}),"\u6765\u505a\u7c7b\u6bd4\u7406\u89e3\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5404\u65b9\u6cd5\u7684\u4f5c\u7528\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tableName: \u5df2\u77e5\u4e00\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff0c\u5176\u8868\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"sequenceName: \u5df2\u77e5\u4e00\u4e2aid\u589e\u957f\u7b56\u7565\u4e3a\u5e8f\u5217\u7684\u5b9e\u4f53\u7c7b\u578b\uff0c\u5176\u5e8f\u5217\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"columName: \u5df2\u77e5\u4e00\u4e2a\u975e\u5173\u8054\u5c5e\u6027\uff0c\u5176\u5217\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"foreignKeyColumnName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u5916\u952e\u7684\u5173\u8054\u5c5e\u6027\uff0c\u5176\u5217\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\uff0c\u5176\u4e2d\u95f4\u8868\u8868\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableBackRefColumnName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\uff0c\u4e2d\u95f4\u8868\u4e2d\u6307\u5411\u5f53\u524d\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableTargetRefColumnName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\uff0c\u4e2d\u95f4\u8868\u4e2d\u6307\u5411\u5173\u8054\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565",children:"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565"}),"\n",(0,s.jsxs)(n.p,{children:["\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u90fd\u65e0\u9700\u76f4\u63a5\u5b9e\u73b0\u6b64\u63a5\u53e3\uff0cJimmer\u5185\u7f6e\u7684",(0,s.jsx)(n.code,{children:"org.babyfish.jimmer.sql.runtime.DefaultDatabaseNamingStrategy"}),"\u7c7b\u5df2\u7ecf\u5b9e\u73b0\u4e86\u6b64\u63a5\u53e3\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"DefaultDatabaseNamingStrategy\u7c7b\u6709\u4e24\u4e2a\u9759\u6001\u5b57\u6bb5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"UPPER_CASE:"}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684\u6570\u636e\u5e93\u6807\u8bc6\u540d\u5168\u90e8\u5927\u5199"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5982\u679c\u7528\u6237\u4e0d\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u8fd9\u5c31\u662fJimmer\u9ed8\u8ba4\u7684\u547d\u540d\u7b56\u7565\u3002"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"LOWER_CASE:"}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684\u6570\u636e\u5e93\u6807\u8bc6\u540d\u5168\u90e8\u5c0f\u5199\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e9b\u6570\u636e\u5e93\uff0c\u6bd4\u5982MySQL\uff0c\u53ef\u4ee5\u914d\u7f6e\u662f\u5426\u5927\u5c0f\u5199\u654f\u611f\u3002\u6240\u4ee5\uff0c\u4f60\u5f88\u6709\u53ef\u80fd\u63a5\u624b\u4e00\u4e2aMySQL\u6570\u636e\u5e93\uff0c\u88ab\u8bbe\u7f6e\u4e3a\u5927\u5c0f\u654f\u611f\u6a21\u5f0f\u4e14\u5927\u90e8\u5206\u8868\u540d\u548c\u5217\u540d\u90fd\u662f\u5c0f\u5199\u7684\uff0c\u8fd9\u65f6\uff0c\u4f60\u9700\u8981\u7528\u6b64\u7b56\u7565\u8986\u76d6\u9ed8\u8ba4\u7b56\u7565\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5373\u4f7f",(0,s.jsx)(n.code,{children:"UPPER_CASE"}),"\u548c",(0,s.jsx)(n.code,{children:"LOWER_CASE"}),"\u90fd\u65e0\u6cd5\u6ee1\u8db3\u4f60\u7684\u8981\u6c42\uff0c\u4f60\u9700\u8981\u5b9e\u73b0\u81ea\u5df1\u7684\u7b56\u7565\uff0c\u4e5f\u53ef\u4ee5\u8003\u8651\u7ee7\u627f\u8fd9\u4e2a\u9ed8\u8ba4\u7b56\u7565\uff0c\u800c\u975e\u4ece\u5934\u5b9e\u73b0\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4ecb\u7ecd\u9ed8\u8ba4\u7b56\u7565\u7684\u884c\u4e3a\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u5f15\u5165\u4e00\u4e2a\u5b57\u7b26\u53d8\u6362\u89c4\u5219\uff1asnake\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u8c13snake\uff0c\u5373\u628a\u5927\u5c0f\u5199\u4ea4\u66ff\u7684\u6587\u672c\u8f6c\u5316\u4e3a\u4e0b\u5212\u7ebf\u62fc\u63a5\u7684\u6587\u672c\uff0c\u6bd4\u5982\u7c7b\u540d",(0,s.jsx)(n.code,{children:"BookStore"}),"\u7684snake\u53d8\u5f62\u4e3a",(0,s.jsx)(n.code,{children:"BOOK_STORE"}),"\uff0c\u5c5e\u6027\u540d",(0,s.jsx)(n.code,{children:"firstName"}),"\u7684snake\u53d8\u5f62\u4e3a",(0,s.jsx)(n.code,{children:"FIRST_NAME"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8003\u8651\u5230\u5927\u5c0f\u5199\u95ee\u9898\uff0c\u6211\u4eec\u5b9a\u4e49\u4e24\u4e2a\u51fd\u6570, ",(0,s.jsx)(n.code,{children:"u_snake"}),"\u548c",(0,s.jsx)(n.code,{children:"l_snake"}),"\uff0c\u5176\u884c\u4e3a\u5982\u4e0b"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'u_snake("BookStore")'}),' -> "BOOK_STORE"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'l_snake("BookStore")'}),' -> "book_store"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'u_snake("firstName")'}),' -> "FIRST_NAME"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'l_snake("firstName")'}),' -> "first_name"']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u4e86",(0,s.jsx)(n.code,{children:"u_snake"}),"\u548c",(0,s.jsx)(n.code,{children:"l_snake"}),"\u7684\u89c4\u5b9a\u540e\uff0c\u6211\u4eec\u5f88\u5bb9\u6613\u9610\u8ff0",(0,s.jsx)(n.code,{children:"DefaultDatabaseNamingStrategy"}),"\u7684\u884c\u4e3a"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u4e0b\u6587\u4e2d\u7684ClassName\uff0c\u6307Java\u7c7b\u7684SimpleName\uff0c\u5e76\u975eQualifiedName\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"upper_case",children:"UPPER_CASE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tableName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"u_snake(ClassName)"})]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBookStore -> BOOK_STORE"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"sequenceName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"u_snake(ClassName)"}),"_ID_SEQ"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBookStore -> BOOK_STORE_ID_SEQ"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"columName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"u_snake(ClassName)"})]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1afirstName -> FIRST_NAME"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"foreignKeyColumnName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"u_snake(ClassName)"}),"_ID"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aparentNode -> PARENT_NODE_ID"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"u_snake(SourceClassName)"}),"_",(0,s.jsx)(n.code,{children:"u_snake(TargetClassName)"}),"_MAPPING"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBook::authors -> BOOK_AUTHOR_MAPPING"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableBackRefColumnName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"u_snake(SourceClassName)"}),"_ID"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBook::authors -> BOOK_ID"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableTargetRefColumnName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"u_snake(TargetClassName)"}),"_ID"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBook::authors -> AUTHOR_ID"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"lower_case",children:"LOWER_CASE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"tableName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"l_snake(ClassName)"})]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBookStore -> book_store"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"sequenceName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"l_snake(ClassName)"}),"_id_seq"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBookStore -> book_store_id_seq"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"columName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"l_snake(ClassName)"})]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1afirstName -> first_name"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"foreignKeyColumnName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"l_snake(ClassName)"}),"_id"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aparentNode -> parent_node_id"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"l_snake(SourceClassName)"}),"_",(0,s.jsx)(n.code,{children:"l_snake(TargetClassName)"}),"_mapping"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBook::authors -> book_author_mapping"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableBackRefColumnName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"l_snake(SourceClassName)"}),"_id"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBook::authors -> book_id"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"middleTableTargetRefColumnName"}),"\n",(0,s.jsxs)(n.p,{children:["\u89c4\u5219\uff1a",(0,s.jsx)(n.code,{children:"l_snake(TargetClassName)"}),"_id"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff1aBook::authors -> author_id"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8986\u76d6\u7b56\u7565",children:"\u8986\u76d6\u7b56\u7565"}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u6211\u4eec\u6765\u6f14\u793a\u5982\u4f55\u7528",(0,s.jsx)(n.code,{children:"DefaultDatabaseNamingStrategy.LOWER_CASE"}),"\u8986\u76d6\u9ed8\u8ba4\u7684",(0,s.jsx)(n.code,{children:"DefaultDatabaseNamingStrategy.UPPER_CASE"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528springboot\u65f6",children:"\u4f7f\u7528SpringBoot\u65f6"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(i.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Bean\npublic DatabaseNamingStrategy databaseNamingStrategy() {\n    // highlight-next-line\n    return DefaultDatabaseNamingStrategy.LOWER_CASE;\n}\n"})})}),(0,s.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun databaseNamingStrategy(): DatabaseNamingStrategy =\n    // highlight-next-line\n    DefaultDatabaseNamingStrategy.LOWER_CASE\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0d\u4f7f\u7528sprinboot\u65f6",children:"\u4e0d\u4f7f\u7528SprinBoot\u65f6"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(i.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseNamingStrategy(\n        // highlight-next-line\n        DefaultDatabaseNamingStrategy.LOWER_CASE\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,s.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setDatabaseNamingStrategy(\n        // highlight-next-line\n        DefaultDatabaseNamingStrategy.LOWER_CASE\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var s=a(18215);const l={tabItem:"tabItem_Ymn6"};var r=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(l.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>S});var s=a(96540),l=a(18215),r=a(23104),i=a(56347),t=a(205),c=a(57485),d=a(31682),o=a(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:l}}=e;return{value:n,label:a,attributes:s,default:l}}))}(a);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const l=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,r=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,u]=p({queryString:a,groupId:l}),[x,j]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,o.Dv)(a);return[l,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),b=(()=>{const e=d??x;return m({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function f(e){let{className:n,block:a,selectedValue:s,selectValue:i,tabValues:t}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const n=e.currentTarget,a=c.indexOf(n),l=t[a].value;l!==s&&(d(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n),children:t.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...r,className:(0,l.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function _(e){let{lazy:n,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function N(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(_,{...n,...e})]})}function S(e){const n=(0,j.A)();return(0,g.jsx)(N,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>t});var s=a(96540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);