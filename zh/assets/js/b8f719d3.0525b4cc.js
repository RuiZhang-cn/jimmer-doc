"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8689],{78623:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>r});var I=e(74848),a=e(28453);const t={sidebar_position:2,title:"\u521b\u5efa\u6570\u636e\u5e93"},d=void 0,l={id:"quick-view/get-started/create-database",title:"\u521b\u5efa\u6570\u636e\u5e93",description:"UML",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/get-started/create-database.mdx",sourceDirName:"quick-view/get-started",slug:"/quick-view/get-started/create-database",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/create-database",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/get-started/create-database.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521b\u5efa\u6570\u636e\u5e93"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/create-project"},next:{title:"\u5b9a\u4e49\u5b9e\u4f53",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/define-entity"}},o={},r=[{value:"UML",id:"uml",level:2},{value:"\u521b\u5efaSQL\u6587\u4ef6",id:"\u521b\u5efasql\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:2}];function m(n){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.h2,{id:"uml",children:"UML"}),"\n",(0,I.jsx)(i.p,{children:"\u672c\u6559\u7a0b\u7684\u4f8b\u5b50\u9700\u8981\u5982\u4e0b\u56db\u4e2a\u5b9e\u4f53\u7c7b\u578b"}),"\n",(0,I.jsx)(i.p,{children:(0,I.jsx)(i.img,{alt:"uml",src:e(78276).A+"",width:"431",height:"202"})}),"\n",(0,I.jsxs)(i.ul,{children:["\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsx)(i.p,{children:"BookStore\u3001Book\u3001Author:\n\u6f14\u793a\u5404\u79cd\u5173\u8054\uff0c\u5305\u62ec\u591a\u5bf9\u4e00\u3001\u4e00\u5bf9\u591a\u3001\u591a\u5bf9\u591a\u3002"}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsx)(i.p,{children:"TreeNode:\n\u6f14\u793a\u65e0\u9650\u9012\u5f52\u81ea\u5173\u8054\uff0c\u540e\u7eed\u4f8b\u5b50\u4f1a\u57fa\u4e8e\u5b83\u6f14\u793a\u9012\u5f52\u67e5\u8be2\uff0c\u9012\u5f52\u4fdd\u5b58\u3002"}),"\n"]}),"\n"]}),"\n",(0,I.jsx)(i.h2,{id:"\u521b\u5efasql\u6587\u4ef6",children:"\u521b\u5efaSQL\u6587\u4ef6"}),"\n",(0,I.jsxs)(i.p,{children:["\u672c\u6559\u7a0b\u4f8b\u5b50\u91c7\u7528MySQL\uff0c\u65b0\u5efaSQL\u6587\u4ef6",(0,I.jsx)(i.code,{children:"jimmer-demo.sql"}),"\uff0c\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,I.jsx)(i.pre,{children:(0,I.jsx)(i.code,{className:"language-sql",metastring:'title="jimmer-demo.sql"',children:"create database jimmer_demo;\nuse jimmer_demo;\n\ncreate table book_store(\n    id bigint unsigned not null auto_increment primary key,\n    name varchar(50) not null,\n    website varchar(100)\n) engine=innodb;\nalter table book_store auto_increment = 100;\nalter table book_store\n    add constraint business_key_book_store\n        unique(name)\n;\n\ncreate table book(\n    id bigint unsigned not null auto_increment primary key,\n    name varchar(50) not null,\n    edition integer not null,\n    price numeric(10, 2) not null,\n    /* highlight-next-line */\n    store_id bigint unsigned\n) engine=innodb;\nalter table book_store auto_increment = 100;\nalter table book\n    add constraint business_key_book\n        unique(name, edition)\n;\nalter table book\n    add constraint fk_book__book_store\n        /* \u4ece\u4e66\u7c4d\u6307\u5411\u4e66\u5e97\u7684\u5916\u952e */\n        /* highlight-next-line */\n        foreign key(store_id)\n            references book_store(id)\n;\n\ncreate table author(\n    id bigint unsigned not null auto_increment primary key,\n    first_name varchar(25) not null,\n    last_name varchar(25) not null,\n    gender char(1) not null,\n    created_time datetime not null,\n    modified_time datetime not null \n) engine=innodb;\nalter table author auto_increment = 100;\nalter table author\n    add constraint business_key_author\n        unique(first_name, last_name)\n;\nalter table author\n    add constraint ck_author_gender\n        check (gender in('M', 'F'));\n\n/* \n * \u4e24\u4e2a\u5b9e\u4f53\u4e4b\u95f4\u7684\u591a\u5bf9\u591a\u5173\u7cfb\uff0c\u5728ORM\u5b9e\u73b0\u4e2d\uff0c\u9700\u8981\u7528\u6570\u636e\u5e93\u4e2d\u95f4\u8868\u5b9e\u73b0\u3002\n *\n * \u6b64\u8868\u5b58\u50a8\u4e66\u7c4d\u548c\u4f5c\u8005\u4e4b\u95f4\u7684\u591a\u5bf9\u591a\u5173\u8054\uff0c\u8fd9\u662f\u5173\u8054\u8868\uff0c\u800c\u975e\u5b9e\u4f53\u8868\uff0c\u5728\u4e0a\u9762\u7684UML\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u5b9e\u4f53\u3002\n */\n/* highlight-next-line */\ncreate table book_author_mapping(\n    book_id bigint unsigned not null,\n    author_id bigint unsigned not null\n) engine=innodb;\nalter table book_author_mapping\n    add constraint pk_book_author_mapping\n        primary key(book_id, author_id)\n;\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__book\n        /* highlight-next-line */\n        foreign key(book_id)\n            references book(id)\n                on delete cascade\n;\nalter table book_author_mapping\n    add constraint fk_book_author_mapping__author\n        /* highlight-next-line */\n        foreign key(author_id)\n            references author(id)\n                on delete cascade\n;\n\ncreate table tree_node(\n    node_id bigint unsigned not null auto_increment primary key,\n    name varchar(20) not null,\n    /* highlight-next-line */\n    parent_id bigint unsigned\n) engine=innodb;\nalter table tree_node auto_increment = 100;\nalter table tree_node\n    add constraint business_key_tree_node\n        unique(parent_id, name);\nalter table tree_node\n    add constraint fk_tree_node__parent\n        /* \u4ece\u5b50\u8282\u70b9\u6307\u5411\u7236\u8282\u70b9\u7684\u5916\u952e */\n        /* highlight-next-line */\n        foreign key(parent_id)\n            references tree_node(node_id);\n\ninsert into book_store(id, name) values\n    (1, 'O''REILLY'),\n    (2, 'MANNING')\n;\n\ninsert into book(id, name, edition, price, store_id) values\n    (1, 'Learning GraphQL', 1, 50, 1),\n    (2, 'Learning GraphQL', 2, 55, 1),\n    (3, 'Learning GraphQL', 3, 51, 1),\n\n    (4, 'Effective TypeScript', 1, 73, 1),\n    (5, 'Effective TypeScript', 2, 69, 1),\n    (6, 'Effective TypeScript', 3, 88, 1),\n\n    (7, 'Programming TypeScript', 1, 47.5, 1),\n    (8, 'Programming TypeScript', 2, 45, 1),\n    (9, 'Programming TypeScript', 3, 48, 1),\n\n    (10, 'GraphQL in Action', 1, 80, 2),\n    (11, 'GraphQL in Action', 2, 81, 2),\n    (12, 'GraphQL in Action', 3, 80, 2)\n;\n\ninsert into author(id, first_name, last_name, gender, created_time, modified_time) values\n    (1, 'Eve', 'Procello', 'F', now(), now()),\n    (2, 'Alex', 'Banks', 'M', now(), now()),\n    (3, 'Dan', 'Vanderkam', 'M', now(), now()),\n    (4, 'Boris', 'Cherny', 'M', now(), now()),\n    (5, 'Samer', 'Buna', 'M', now(), now())\n;\n\ninsert into book_author_mapping(book_id, author_id) values\n    (1, 1),\n    (2, 1),\n    (3, 1),\n\n    (1, 2),\n    (2, 2),\n    (3, 2),\n\n    (4, 3),\n    (5, 3),\n    (6, 3),\n\n    (7, 4),\n    (8, 4),\n    (9, 4),\n\n    (10, 5),\n    (11, 5),\n    (12, 5)\n;\n\ninsert into tree_node(\n    node_id, name, parent_id\n) values\n    (1, 'Home', null),\n        (2, 'Food', 1),\n            (3, 'Drinks', 2),\n                (4, 'Coca Cola', 3),\n                (5, 'Fanta', 3),\n            (6, 'Bread', 2),\n                (7, 'Baguette', 6),\n                (8, 'Ciabatta', 6),\n        (9, 'Clothing', 1),\n            (10, 'Woman', 9),\n                (11, 'Casual wear', 10),\n                    (12, 'Dress', 11),\n                    (13, 'Miniskirt', 11),\n                    (14, 'Jeans', 11),\n                (15, 'Formal wear', 10),\n                    (16, 'Suit', 15),\n                    (17, 'Shirt', 15),\n            (18, 'Man', 9),\n                (19, 'Casual wear', 18),\n                    (20, 'Jacket', 19),\n                    (21, 'Jeans', 19),\n                (22, 'Formal wear', 18),\n                    (23, 'Suit', 22),\n                    (24, 'Shirt', 22)\n;\n"})}),"\n",(0,I.jsx)(i.p,{children:"\u8fd9\u4e2aSQL\u6587\u4ef6\u5c55\u793a\u4e86\u5982\u4e0b\u6982\u5ff5"}),"\n",(0,I.jsxs)(i.ul,{children:["\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:["\u5b9e\u4f53\u8868\uff1a\n",(0,I.jsx)(i.code,{children:"book_store"}),"\u3001",(0,I.jsx)(i.code,{children:"book"}),"\u3001",(0,I.jsx)(i.code,{children:"author"}),"\u548c",(0,I.jsx)(i.code,{children:"tree_node"}),"\u4e3a\u5b9e\u4f53\u8868\uff0c\u548cUML\u4e2d\u7684\u5b9e\u4f53\u4e00\u4e00\u5bf9\u5e94\u3002\n\u8fd9\u79cd\u8868\u5177\u6709\u4e00\u4e2a\u72ec\u7acb\u7684id\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,I.jsxs)(i.li,{children:["\n",(0,I.jsxs)(i.p,{children:["\u4e2d\u95f4\u5173\u8054\u8868\uff1a\n",(0,I.jsx)(i.code,{children:"book_author_mapping"}),"\u4e3a\u4e2d\u95f4\u5173\u8054\u8868\uff0c\u7b80\u79f0\u4e2d\u95f4\u8868\uff0c\u8868\u793aBook\u548cAuthor\u4e4b\u95f4\u7684\u591a\u5bf9\u591a\u5173\u8054\u3002"]}),"\n",(0,I.jsxs)(i.ul,{children:["\n",(0,I.jsx)(i.li,{children:"\u4e2d\u95f4\u8868\u5728UML\u56fe\u4e2d\u6ca1\u6709\u5bf9\u5b9e\u4f53\uff0c\u56e0\u4e3a\u5b83\u4ec5\u662f\u5173\u7cfb\u578b\u6570\u636e\u5e93\u8868\u793a\u591a\u5bf9\u591a\u5173\u8054\u7684\u6280\u672f\u624b\u6bb5\u3002"}),"\n",(0,I.jsx)(i.li,{children:"\u4e2d\u95f4\u8868\u53ea\u5e94\u8be5\u6709\u4e24\u4e2a\u5916\u952e\u5b57\u6bb5\uff0c\u6307\u5411\u5173\u8054\u4e24\u7aef\u7684\u5b9e\u4f53\u3002"}),"\n",(0,I.jsx)(i.li,{children:"\u4e2d\u95f4\u8868\u4e0d\u5177\u5907\u72ec\u7acbid\uff0c\u4e24\u4e2a\u5916\u952e\u8054\u5408\u8d77\u6765\u5f62\u6210\u4e3b\u952e\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,I.jsxs)(i.admonition,{type:"note",children:[(0,I.jsx)(i.p,{children:"\u8fd9\u91cc\u521b\u5efa\u7684\u6570\u636e\u5e93\u7ed3\u6784\u662f\u6700\u57fa\u7840\u7684\u7248\u672c\uff0c\u540e\u7eed\u6559\u7a0b\u4f1a\u9010\u6e10\u6dfb\u52a0\u66f4\u591a\u7684\u5b57\u6bb5\u3002"}),(0,I.jsxs)(i.p,{children:["\u5b8c\u6574\u7684SQL\u6587\u4ef6\uff0c\u8bf7\u53c2\u89c1",(0,I.jsx)(i.a,{href:"https://github.com/babyfish-ct/jimmer-examples/blob/main/env-with-cache/maxwell/jimmer-demo.sql",children:"https://github.com/babyfish-ct/jimmer-examples/blob/main/env-with-cache/maxwell/jimmer-demo.sql"})]})]}),"\n",(0,I.jsx)(i.h2,{id:"\u521b\u5efa\u6570\u636e\u5e93",children:"\u521b\u5efa\u6570\u636e\u5e93"}),"\n",(0,I.jsx)(i.p,{children:"\u5b89\u88c5docker\uff0c\u6253\u5f00\u547d\u4ee4\u884c\uff0c\u8fdb\u5165SQL\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\uff0c\u6267\u884cshell"}),"\n",(0,I.jsx)(i.pre,{children:(0,I.jsx)(i.code,{className:"language-shell",children:"docker run \\\n\t--restart=always \\\n\t-d \\\n\t--name jimmer-demo-mysql \\\n\t--network jimmer-demo-network \\\n\t--network-alias jimmer-demo-mysql \\\n\t-p 3306:3306 \\\n\t-e MYSQL_ROOT_PASSWORD=123456 \\\n\tmysql \\\n\t--lower_case_table_names=1\ndocker cp jimmer-demo.sql jimmer-demo-mysql:/var/jimmer-demo.sql\ndocker exec jimmer-demo-mysql /bin/sh -c \\\n        'mysql -uroot -p123456 </var/jimmer-demo.sql'\n"})})]})}function c(n={}){const{wrapper:i}={...(0,a.R)(),...n.components};return i?(0,I.jsx)(i,{...n,children:(0,I.jsx)(m,{...n})}):m(n)}},78276:(n,i,e)=>{e.d(i,{A:()=>I});const I="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iNDMxIiBoZWlnaHQ9IjIwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMDIiPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTAiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDExIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxMiIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDEzIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkJvb2tTdG9yZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLDI1KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMTUiIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MSAwUSA4NSAwIDg1IDRMIDg1IDI5USA4NSAzMyA4MSAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDE2Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAxNyIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjVweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMTgiIGR5PSIxNiIgeD0iNDIuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxOSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5Cb29rPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48L2c+PC9nPjxnIGlkPSJTdmdqc0cxMDIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjEsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAyMSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMjIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDIzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAyNCIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDI1IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkF1dGhvcjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMTQ0KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMjciIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MyAwUSA4NyAwIDg3IDRMIDg3IDI5USA4NyAzMyA4MyAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDI4Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAyOSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjdweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMzAiIGR5PSIxNiIgeD0iNDMuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAzMSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5UcmVlTm9kZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAzMiI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMzMiIGQ9Ik0xMTEgNDJMMTQxLjUgNDJMMTQxLjUgNDJMMTcyIDQyIiBzdHJva2U9IiM3ZjdmN2YiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxyZWN0IGlkPSJTdmdqc1JlY3QxMDM0IiB3aWR0aD0iMjEiIGhlaWdodD0iMTYiIHg9IjEzMSIgeT0iMzQiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48dGV4dCBpZD0iU3ZnanNUZXh0MTAzNSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iMjFweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249InRvcCIgbGluZUhlaWdodD0iMTZweCIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSIzMS4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM2IiBkeT0iMTYiIHg9IjE0MS41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM3IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjxnIGlkPSJTdmdqc0cxMDM4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAzOSIgZD0iTTI1OSA0MkwyODkuNSA0MkwyODkuNSA0MkwzMjAgNDIiIHN0cm9rZT0iIzdmOGI5OCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+PHJlY3QgaWQ9IlN2Z2pzUmVjdDEwNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNiIgeD0iMjc3LjUiIHk9IjM0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PHRleHQgaWQ9IlN2Z2pzVGV4dDEwNDEiIGZvbnQtZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTNweCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMzMjMyMzIiIGZvbnQtd2VpZ2h0PSI0MDAiIGFsaWduPSJ0b3AiIGxpbmVIZWlnaHQ9IjE2cHgiIGFuY2hvcj0ibWlkZGxlIiBmYW1pbHk9IuW+rui9r+mbhem7kSIgc2l6ZT0iMTNweCIgd2VpZ2h0PSI0MDAiIGZvbnQtc3R5bGU9IiIgb3BhY2l0eT0iMSIgeT0iMzEuMzc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MiIgZHk9IjE2IiB4PSIyODkuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MyIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5NOk48L3RzcGFuPjwvdHNwYW4+PC90ZXh0PjwvZz48ZyBpZD0iU3ZnanNHMTA0NCI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwNDUiIGQ9Ik02OC45ODMzMzU2NDc2NjYwMSAxNDMuMDAwMTM4ODU5OTYwNEw2OC41IDExNEwxNDIgMTE0TDE0MiAxNjFMMTEzIDE2MSIgc3Ryb2tlPSIjN2Y4Yjk4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjwvcGF0aD48cmVjdCBpZD0iU3ZnanNSZWN0MTA0NiIgd2lkdGg9IjIxIiBoZWlnaHQ9IjE2IiB4PSIxMTguMjQ3OTE2ODExMzIyNTEiIHk9IjEwNiIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pjx0ZXh0IGlkPSJTdmdqc1RleHQxMDQ3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIyMXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0idG9wIiBsaW5lSGVpZ2h0PSIxNnB4IiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjEwMy4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ4IiBkeT0iMTYiIHg9IjEyOC43NDc5MTY4MTEzMjI1Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ5IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="},28453:(n,i,e)=>{e.d(i,{R:()=>d,x:()=>l});var I=e(96540);const a={},t=I.createContext(a);function d(n){const i=I.useContext(t);return I.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:d(n.components),I.createElement(t.Provider,{value:i},n.children)}}}]);