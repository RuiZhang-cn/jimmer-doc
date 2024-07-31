"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3656],{38491:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=t(74848),o=t(28453),a=t(11470),i=t(19365);const s={sidebar_position:3,title:"Mutation"},l=void 0,u={id:"graphql/mutation",title:"Mutation",description:"GraphQL Input\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/graphql/mutation.mdx",sourceDirName:"graphql",slug:"/graphql/mutation",permalink:"/jimmer-doc/zh/docs/graphql/mutation",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/graphql/mutation.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Mutation"},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/jimmer-doc/zh/docs/graphql/query"},next:{title:"\u5bf9\u8c61\u7bc7",permalink:"/jimmer-doc/zh/docs/object/"}},c={},d=[{value:"GraphQL Input\u4ecb\u7ecd",id:"graphql-input\u4ecb\u7ecd",level:2},{value:"\u5b9a\u4e49Jimmer Input DTO",id:"\u5b9a\u4e49jimmer-input-dto",level:2},{value:"\u5b9e\u73b0GraphQL mutation",id:"\u5b9e\u73b0graphql-mutation",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"graphql-input\u4ecb\u7ecd",children:"GraphQL Input\u4ecb\u7ecd"}),"\n",(0,r.jsx)(e.p,{children:"\u5728GraphQL\u4e2d\uff0c\u67e5\u8be2\u8fd4\u56de\u7684GraphQLObject\uff0c\u5373\u4efb\u610f\u5f62\u72b6\u7684\u52a8\u6001\u5bf9\u8c61\uff1b\u7136\u800c\uff0c\u5982\u679c\u4fee\u6539\u64cd\u4f5c\u63a5\u53d7\u5bf9\u8c61\u53c2\u6570\uff0c\u5fc5\u987b\u662fGraphQLInput\uff0c\u5373\u56fa\u5b9a\u5f62\u72b6\u7684\u9759\u6001\u5bf9\u8c61\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u53c2\u8003",(0,r.jsx)(e.a,{href:"https://graphql.org/graphql-js/mutations-and-input-types/",children:"GraphQLInput"}),"\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4ee5\u9644\u5e26\u4f8b\u5b50\u4e2d\u7684GraphQL\u58f0\u660e\u6587\u4ef6\u4e3a\u4f8b",(0,r.jsx)(e.a,{href:"https://github.com/babyfish-ct/jimmer-examples/blob/main/java/jimmer-sql-graphql/service/src/main/resources/graphql/schema.graphqls",children:"schema.graphqls"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"type Book implements CommonEntity { \u2776\n    id: Long!\n    name: String!\n    edition: Int!\n    price: BigDecimal!\n    store: BookStore\n    authors: [Author!]!\n    createdTime: LocalDateTime!\n    modifiedTime: LocalDateTime!\n    tenant: String!\n}\n\ninput BookInput { \u2777\n    id: Long\n    name: String!\n    edition: Int\n    price: BigDecimal!\n    storeId: Long\n    authorIds: [Long!]!\n}\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2776 ",(0,r.jsx)(e.code,{children:"type"}),"\u5173\u952e\u5b57\u58f0\u660e\u7684\u7c7b\u578b\u662f\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u52a8\u6001\u7c7b\u578b\uff0c\u7528\u4f5cGraphQL\u7684\u8f93\u51fa\u7c7b\u578b"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2777 ",(0,r.jsx)(e.code,{children:"input"}),"\u5173\u952e\u5b57\u58f0\u660e\u7684\u7c7b\u578b\u662f\u8868\u8fbe\u56fa\u5b9a\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u9759\u6001\u7c7b\u578b\uff0c\u7528\u4f5cGraphQL\u7684\u8f93\u5165\u7c7b\u578b"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9a\u4e49jimmer-input-dto",children:"\u5b9a\u4e49Jimmer Input DTO"}),"\n",(0,r.jsxs)(e.p,{children:["Jimmer\u7684Input DTO\u5728",(0,r.jsx)(e.a,{href:"../mutation/save-command/input-dto",children:"\u4fdd\u5b58\u6307\u4ee4/InputDTO"}),"\u4e2d\u6709\u975e\u5e38\u8be6\u7ec6\u7684\u4ecb\u7ecd\uff0c\u672c\u6587\u4e0d\u505a\u8d58\u8ff0\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"Jimmer\u63d0\u4f9b\u4e86\u4e24\u79cd\u5b9a\u4e49Input DTO\u7684\u65b9\u5f0f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"../object/view/dto-language",children:"\u5229\u7528DTO\u8bed\u8a00\u81ea\u52a8\u751f\u6210Input DTO"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"../object/view/mapstruct",children:"\u57fa\u4e8eMapStruct\u624b\u52a8\u5b9a\u4e49Input DTO"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u91c7\u7528DTO\u8bed\u8a00\u53ef\u4ee5\u975e\u5e38\u9ad8\u6548\u5730\u8fbe\u5230\u6211\u4eec\u7684\u76ee\u6807\uff0c\u6240\u4ee5\u672c\u6587\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5728\u5b9e\u4f53\u5b9a\u4e49\u6240\u5728\u9879\u76ee\u4e2d"}),"\uff0c\u5efa\u7acb\u76ee\u5f55",(0,r.jsx)(e.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5728",(0,r.jsx)(e.code,{children:"src/main/dto"}),"\u4e0b\uff0c\u6309\u5b9e\u4f53\u7c7b\u578b\u6240\u5904\u7684\u5305\u8def\u5f84\u5efa\u7acb\u5b50\u76ee\u5f55",(0,r.jsx)(e.code,{children:"com/yourcompany/yourpoject/model"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5728\u4e0a\u4e00\u6b65\u5efa\u7acb\u7684\u76ee\u5f55\u4e0b\uff0c\u5efa\u7acb\u6587\u4ef6",(0,r.jsx)(e.code,{children:"Book.dto"}),"\uff0c\u6587\u4ef6\u5fc5\u987b\u548c\u5b9e\u4f53\u7c7b\u540c\u540d\uff0c\u6269\u5c55\u540d\u5fc5\u987b\u4e3a",(0,r.jsx)(e.code,{children:"dto"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u7f16\u8f91\u6b64\u6587\u4ef6\uff0c\u5229\u7528DTO\u8bed\u8a00\uff0c\u5b9a\u4e49Book\u5b9e\u4f53\u7684\u5404\u79cdDTO\u5f62\u72b6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",metastring:'title="Book.dto"',children:"input BookInput {\n    \n    #allScalars(Book)\n\n    id(store)\n\n    id(authors) as authorIds\n}\n\n...\u7701\u7565\u5176\u4ed6DTO\u5b9a\u4e49...\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5c06\u4f1a\u81ea\u52a8\u751f\u6210\u5982\u4e0bInput DTO"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",metastring:'title="BookInput.java"',children:'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookInput implements Input<Book> { \u2776\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n\n    @Override\n    public Book toEntity() { \u2777\n        ...\u7565...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",metastring:'title="BookInput.kt"',children:'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookInput(\n    val id: Long? = null,\n    val name: String = "",\n    val edition: Int = 0,\n    val price: BigDecimal,\n    val storeId: Long? = null,\n    val authorIds: List<Long> = emptyList()\n): Input<Book> { \u2776\n\n    override fun toEntity(): Book = \u2777\n        ...\u7565...\n    \n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'})})})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2776 ",(0,r.jsx)(e.code,{children:"BookInput"}),"\u7c7b\u5b9e\u73b0\u4e86\u63a5\u53e3",(0,r.jsx)(e.code,{children:"org.babyfish.jimmer.Input"}),"\uff0c\u8be5\u63a5\u53e3\u652f\u6301",(0,r.jsx)(e.code,{children:"toEntity"}),"\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5c06\u5f53\u524dInput DTO\u5bf9\u8c61\u8f6c\u5316\u4e3aJimmer\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2777 \u5b9e\u73b0",(0,r.jsx)(e.code,{children:"Input.toEntity"}),"\u65b9\u6cd5"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9e\u73b0graphql-mutation",children:"\u5b9e\u73b0GraphQL mutation"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",metastring:'title="BookStoreService.java"',children:"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument;\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.stereotype.Controller;\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\npublic class BookStoreService {\n\n    private final BookStoreRepsitory bookStoreRepsitory;\n\n    public BookStoreService(BookStoreRepsitory bookStoreRepsitory) {\n        this.bookStoreRepsitory = bookStoreRepsitory;\n    }\n\n    @MutationMapping \u2776\n    @Transactional\n    public Book saveBook(\n        @Argument BookInput input \u2777\n    ) {\n        // `save(input)`\u662f`save(input.toEntity())`\u7684\u7b80\u5199\u65b9\u5f0f\n        return bookRepository.save(input); \u2778\n    }\n}\n"})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-kotlin",metastring:'title="BookStoreService.kt"',children:"package com.example.business\n\nimport org.springframework.graphql.data.method.annotation.Argument\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.MutationMapping\nimport org.springframework.stereotype.Controller\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\nclass BookStoreService(\n    private val bookStoreRepository: BookStoreRepsitory\n) {\n\n    @MutationMapping \u2776\n    @Transactional\n    fun saveBook(\n        @Argument input: BookInput \u2777\n    ): Book =\n        // `save(input)`\u662f`save(input.toEntity())`\u7684\u7b80\u5199\u65b9\u5f0f\n        bookRepository.save(input) \u2778\n}\n"})})})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2776 \u4f7f\u7528\u6ce8\u89e3",(0,r.jsx)(e.code,{children:"@org.springframework.graphql.data.method.annotation.MutationMapping"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2777 \u4f7f\u7528\u9759\u6001Input DTO\u7c7b\u578b",(0,r.jsx)(e.code,{children:"BookInput"}),"\uff0c\u8ba9\u7528\u6237\u53ea\u80fd\u4f20\u9012\u89c4\u5b9a\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee5\u7b26\u5408",(0,r.jsx)(e.a,{href:"https://graphql.org/graphql-js/mutations-and-input-types/",children:"GraphQLInput"}),"\u7684\u89c4\u8303"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u2778 ",(0,r.jsx)(e.a,{href:"../mutation/save-command",children:"\u4fdd\u5b58\u6307\u4ee4"}),"\uff0c\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u91cc\u7684",(0,r.jsx)(e.code,{children:"bookRepository.save(input)"}),"\uff0c\u5176\u5b9e\u662f",(0,r.jsx)(e.code,{children:"bookRepository.save(input.toEntity())"}),"\u7684\u7b80\u5199\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u65e0\u8bba",(0,r.jsx)(e.code,{children:"BookInput"}),"\u7c7b\u578b\u6240\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\u7b80\u5355\u8fd8\u662f\u76f8\u5bf9\u590d\u6742\uff0c\u90fd\u53ef\u4ee5\u4e00\u53e5\u8bdd\u4fdd\u5b58\u3002\u8fd9\u662f",(0,r.jsx)(e.a,{href:"../mutation/save-command",children:"\u4fdd\u5b58\u6307\u4ee4"}),"\u8fd9\u4e2a\u529f\u80fd\u7684\u6838\u5fc3\u4ef7\u503c\u3002"]})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},19365:(n,e,t)=>{t.d(e,{A:()=>i});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(n){let{children:e,hidden:t,className:i}=n;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t,children:e})}},11470:(n,e,t)=>{t.d(e,{A:()=>y});var r=t(96540),o=t(18215),a=t(23104),i=t(56347),s=t(205),l=t(57485),u=t(31682),c=t(70679);function d(n){return r.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,r.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(n){const{values:e,children:t}=n;return(0,r.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:t,attributes:r,default:o}}=n;return{value:e,label:t,attributes:r,default:o}}))}(t);return function(n){const e=(0,u.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function h(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:t}=n;const o=(0,i.W6)(),a=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((n=>{if(!a)return;const e=new URLSearchParams(o.location.search);e.set(a,n),o.replace({...o.location,search:e.toString()})}),[a,o])]}function g(n){const{defaultValue:e,queryString:t=!1,groupId:o}=n,a=p(n),[i,l]=(0,r.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=t.find((n=>n.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[u,d]=m({queryString:t,groupId:o}),[g,j]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[o,a]=(0,c.Dv)(t);return[o,(0,r.useCallback)((n=>{t&&a.set(n)}),[t,a])]}({groupId:o}),x=(()=>{const n=u??g;return h({value:n,tabValues:a})?n:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((n=>{if(!h({value:n,tabValues:a}))throw new Error(`Can't select invalid tab value=${n}`);l(n),d(n),j(n)}),[d,j,a]),tabValues:a}}var j=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(n){let{className:e,block:t,selectedValue:r,selectValue:i,tabValues:s}=n;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=n=>{const e=n.currentTarget,t=l.indexOf(e),o=s[t].value;o!==r&&(u(e),i(o))},d=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const t=l.indexOf(n.currentTarget)+1;e=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(n.currentTarget)-1;e=l[t]??l[l.length-1];break}}e?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},e),children:s.map((n=>{let{value:e,label:t,attributes:a}=n;return(0,v.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:n=>l.push(n),onKeyDown:d,onClick:c,...a,className:(0,o.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===e}),children:t??e},e)}))})}function f(n){let{lazy:e,children:t,selectedValue:o}=n;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=a.find((n=>n.props.value===o));return n?(0,r.cloneElement)(n,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==o})))})}function k(n){const e=g(n);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(f,{...e,...n})]})}function y(n){const e=(0,j.A)();return(0,v.jsx)(k,{...n,children:d(n.children)},String(e))}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);