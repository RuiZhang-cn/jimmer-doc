"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6885],{12715:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>I,contentTitle:()=>P,default:()=>E,frontMatter:()=>O,metadata:()=>y,toc:()=>N});var n=r(74848),t=r(28453),o=r(96540),l=r(98110),i=r(53881),d=r(88933),s=r(46780),u=r(618),c=r(73231),m=r(11470),h=r(19365),C=r(81455),v=r(56071),x=r(47461),j=r(71543);const k=e=>{let{type:a,locale:r}=e;const[t,l]=(0,o.useState)("OPS"!==a),i=(0,o.useCallback)(((e,a)=>{l(a)}),[]);return(0,n.jsxs)(m.A,{groupId:"chart-mode",children:[(0,n.jsxs)(h.A,{value:"chart",label:"zh"===r?"\u56fe\u8868":"Chart",default:!0,children:["OPS"===a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.A,{children:(0,n.jsx)(v.A,{control:(0,n.jsx)(x.A,{value:t,onChange:i}),label:"zh"===r?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})}),(0,n.jsx)(j.A,{})]}),"OPS"==a?(0,n.jsx)(w,{rows:B,scale:f,showJdbc:t}):(0,n.jsx)(w,{rows:g,scale:J,showJdbc:t})]}),(0,n.jsx)(h.A,{value:"data",label:"zh"===r?"\u6570\u636e":"Data",children:"OPS"===a?(0,n.jsx)(p,{rows:S,valueTitle:"Ops/s"}):(0,n.jsx)(p,{rows:A,valueTitle:"Time(\u03bcs)"})})]})},w=e=>{let{rows:a,scale:r,showJdbc:t,height:o=400}=e;return(0,n.jsxs)(l.Chart,{filter:t?void 0:{framework:e=>!e.startsWith("JDBC")},height:o,padding:"auto",data:a,scale:r,autoFit:!0,children:[(0,n.jsx)(l.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),(0,n.jsx)(l.Axis,{name:"value",title:!0}),(0,n.jsx)(l.Legend,{position:"left"}),(0,n.jsx)(l.Tooltip,{shared:!0}),(0,n.jsx)(l.Interaction,{type:"active-region"})]})},p=e=>{let{rows:a,valueTitle:r}=e;return(0,n.jsxs)(i.A,{children:[(0,n.jsx)(u.A,{children:(0,n.jsxs)(c.A,{children:[(0,n.jsx)(s.A,{children:"Framework"}),(0,n.jsx)(s.A,{children:"Data count"}),(0,n.jsx)(s.A,{children:r})]})}),(0,n.jsx)(d.A,{children:a.map((e=>(0,n.jsxs)(c.A,{children:[(0,n.jsx)(s.A,{children:e.framework}),(0,n.jsx)(s.A,{children:e.dataCount}),(0,n.jsx)(s.A,{children:e.value})]},`${e.framework}-${e.dataCount}`)))})]})},f={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},J={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},D=[{framework:"JDBC(ColIndex)",dataCount:"10",value:662071},{framework:"JDBC(ColIndex)",dataCount:"20",value:453226},{framework:"JDBC(ColIndex)",dataCount:"50",value:259484},{framework:"JDBC(ColIndex)",dataCount:"100",value:130991},{framework:"JDBC(ColIndex)",dataCount:"200",value:77725},{framework:"JDBC(ColIndex)",dataCount:"500",value:32109},{framework:"JDBC(ColIndex)",dataCount:"1000",value:16188},{framework:"JDBC(ColName)",dataCount:"10",value:345169},{framework:"JDBC(ColName)",dataCount:"20",value:238107},{framework:"JDBC(ColName)",dataCount:"50",value:125589},{framework:"JDBC(ColName)",dataCount:"100",value:72424},{framework:"JDBC(ColName)",dataCount:"200",value:33068},{framework:"JDBC(ColName)",dataCount:"500",value:16234},{framework:"JDBC(ColName)",dataCount:"1000",value:8346},{framework:"Jimmer(Java)",dataCount:"10",value:315312},{framework:"Jimmer(Java)",dataCount:"20",value:224179},{framework:"Jimmer(Java)",dataCount:"50",value:132673},{framework:"Jimmer(Java)",dataCount:"100",value:77044},{framework:"Jimmer(Java)",dataCount:"200",value:41474},{framework:"Jimmer(Java)",dataCount:"500",value:16371},{framework:"Jimmer(Java)",dataCount:"1000",value:8831},{framework:"Jimmer(Kotlin)",dataCount:"10",value:309029},{framework:"Jimmer(Kotlin)",dataCount:"20",value:230622},{framework:"Jimmer(Kotlin)",dataCount:"50",value:128315},{framework:"Jimmer(Kotlin)",dataCount:"100",value:74499},{framework:"Jimmer(Kotlin)",dataCount:"200",value:36656},{framework:"Jimmer(Kotlin)",dataCount:"500",value:16870},{framework:"Jimmer(Kotlin)",dataCount:"1000",value:7932},{framework:"EasyQuery",dataCount:"10",value:206634},{framework:"EasyQuery",dataCount:"20",value:135063},{framework:"EasyQuery",dataCount:"50",value:92230},{framework:"EasyQuery",dataCount:"100",value:45502},{framework:"EasyQuery",dataCount:"200",value:28085},{framework:"EasyQuery",dataCount:"500",value:11666},{framework:"EasyQuery",dataCount:"1000",value:4427},{framework:"MyBatis",dataCount:"10",value:68743},{framework:"MyBatis",dataCount:"20",value:43940},{framework:"MyBatis",dataCount:"50",value:20050},{framework:"MyBatis",dataCount:"100",value:10541},{framework:"MyBatis",dataCount:"200",value:5310},{framework:"MyBatis",dataCount:"500",value:2137},{framework:"MyBatis",dataCount:"1000",value:1048},{framework:"Exposed",dataCount:"10",value:92494},{framework:"Exposed",dataCount:"20",value:66934},{framework:"Exposed",dataCount:"50",value:26693},{framework:"Exposed",dataCount:"100",value:19483},{framework:"Exposed",dataCount:"200",value:10008},{framework:"Exposed",dataCount:"500",value:3894},{framework:"Exposed",dataCount:"1000",value:2082},{framework:"JPA(Hibernate)",dataCount:"10",value:90542},{framework:"JPA(Hibernate)",dataCount:"20",value:59926},{framework:"JPA(Hibernate)",dataCount:"50",value:25893},{framework:"JPA(Hibernate)",dataCount:"100",value:13096},{framework:"JPA(Hibernate)",dataCount:"200",value:6900},{framework:"JPA(Hibernate)",dataCount:"500",value:2491},{framework:"JPA(Hibernate)",dataCount:"1000",value:1207},{framework:"JPA(EclipseLink)",dataCount:"10",value:64230},{framework:"JPA(EclipseLink)",dataCount:"20",value:33421},{framework:"JPA(EclipseLink)",dataCount:"50",value:13634},{framework:"JPA(EclipseLink)",dataCount:"100",value:6802},{framework:"JPA(EclipseLink)",dataCount:"200",value:3238},{framework:"JPA(EclipseLink)",dataCount:"500",value:1361},{framework:"JPA(EclipseLink)",dataCount:"1000",value:650},{framework:"JOOQ",dataCount:"10",value:69408},{framework:"JOOQ",dataCount:"20",value:39737},{framework:"JOOQ",dataCount:"50",value:18373},{framework:"JOOQ",dataCount:"100",value:8145},{framework:"JOOQ",dataCount:"200",value:4186},{framework:"JOOQ",dataCount:"500",value:1707},{framework:"JOOQ",dataCount:"1000",value:832},{framework:"Nutz",dataCount:"10",value:76904},{framework:"Nutz",dataCount:"20",value:39501},{framework:"Nutz",dataCount:"50",value:16639},{framework:"Nutz",dataCount:"100",value:8903},{framework:"Nutz",dataCount:"200",value:4374},{framework:"Nutz",dataCount:"500",value:2040},{framework:"Nutz",dataCount:"1000",value:957},{framework:"ObjectiveSQL",dataCount:"10",value:56245},{framework:"ObjectiveSQL",dataCount:"20",value:29975},{framework:"ObjectiveSQL",dataCount:"50",value:12455},{framework:"ObjectiveSQL",dataCount:"100",value:6251},{framework:"ObjectiveSQL",dataCount:"200",value:3470},{framework:"ObjectiveSQL",dataCount:"500",value:1259},{framework:"ObjectiveSQL",dataCount:"1000",value:559},{framework:"Spring Data JDBC",dataCount:"10",value:20494},{framework:"Spring Data JDBC",dataCount:"20",value:10704},{framework:"Spring Data JDBC",dataCount:"50",value:4146},{framework:"Spring Data JDBC",dataCount:"100",value:2229},{framework:"Spring Data JDBC",dataCount:"200",value:1025},{framework:"Spring Data JDBC",dataCount:"500",value:447},{framework:"Spring Data JDBC",dataCount:"1000",value:197},{framework:"Ktorm",dataCount:"10",value:19152},{framework:"Ktorm",dataCount:"20",value:9520},{framework:"Ktorm",dataCount:"50",value:4385},{framework:"Ktorm",dataCount:"100",value:2091},{framework:"Ktorm",dataCount:"200",value:1063},{framework:"Ktorm",dataCount:"500",value:427},{framework:"Ktorm",dataCount:"1000",value:168}],B=D.map((e=>({...e,value:Math.round(e.value)}))),g=D.map((e=>({...e,value:Math.round(1e6/e.value)})));D.filter((e=>!e.framework.startsWith("JDBC(")));function b(e,a){return parseInt(e.dataCount)-parseInt(a.dataCount)}const S=B.sort(b),A=g.sort(b),O={sidebar_position:4,title:"Benchmark\u62a5\u544a"},P=void 0,y={id:"overview/benchmark",title:"Benchmark\u62a5\u544a",description:"Jimmer\u4e0d\u4ec5\u53ef\u4ee5\u4e3a\u4f60\u5e26\u6765\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u8fd8\u53ef\u4ee5\u4e3a\u4f60\u5e26\u6765\u6781\u81f4\u7684\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/overview/benchmark.mdx",sourceDirName:"overview",slug:"/overview/benchmark",permalink:"/jimmer-doc/zh/docs/overview/benchmark",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/overview/benchmark.mdx",tags:[],version:"current",lastUpdatedAt:1722438577e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Benchmark\u62a5\u544a"},sidebar:"tutorialSidebar",previous:{title:"APT/KSP",permalink:"/jimmer-doc/zh/docs/overview/apt-ksp"},next:{title:"\u5feb\u901f\u9884\u89c8 \u2605",permalink:"/jimmer-doc/zh/docs/quick-view/"}},I={},N=[{value:"\u62a5\u544a",id:"\u62a5\u544a",level:2},{value:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",level:3},{value:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",level:3},{value:"\u5b9e\u73b0\u539f\u5219",id:"\u5b9e\u73b0\u539f\u5219",level:2},{value:"\u4ef7\u503c",id:"\u4ef7\u503c",level:2},{value:"\u4e3a\u4ec0\u4e48\u5982\u6b64\u5feb?",id:"\u4e3a\u4ec0\u4e48\u5982\u6b64\u5feb",level:2}];function Q(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Jimmer\u4e0d\u4ec5\u53ef\u4ee5\u4e3a\u4f60\u5e26\u6765\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u8fd8\u53ef\u4ee5\u4e3a\u4f60\u5e26\u6765\u6781\u81f4\u7684\u6027\u80fd\u3002"})}),"\n",(0,n.jsxs)(a.p,{children:["\u57fa\u51c6\u6d4b\u8bd5\u7684\u6e90\u4ee3\u7801",(0,n.jsx)(a.a,{href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark",children:"\u5728\u6b64"}),"\uff0c\u4f7f\u7528H2\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u65e0\u9700\u4efb\u4f55\u73af\u5883\u51c6\u5907\u5373\u53ef\u76f4\u63a5\u8fd0\u884c\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u62a5\u544a",children:"\u62a5\u544a"}),"\n",(0,n.jsx)(a.h3,{id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",children:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"}),"\n",(0,n.jsx)(a.li,{children:"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570\u3002"}),"\n"]}),"\n",(0,n.jsx)(k,{type:"OPS",locale:"zh"}),"\n",(0,n.jsx)(a.h3,{id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",children:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"}),"\n",(0,n.jsx)(a.li,{children:"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6(\u5fae\u79d2)\u3002"}),"\n"]}),"\n",(0,n.jsx)(k,{type:"TIME",locale:"zh"}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["\u7531\u4e8eSpring\u79fb\u9664\u4e86\u5bf9OpenJPA\u7684\u652f\u6301\uff0c\u672c\u57fa\u51c6\u6d4b\u8bd5\u4e0d\u5305\u542b",(0,n.jsx)(a.code,{children:"JPA(OpenJPA)"})]})}),"\n",(0,n.jsx)(a.h2,{id:"\u5b9e\u73b0\u539f\u5219",children:"\u5b9e\u73b0\u539f\u5219"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u6240\u6709\u6846\u67b6\u7981\u7528\u7f13\u5b58"}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u6240\u6709\u6846\u67b6\u5173\u95ed\u65e5\u5fd7"}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u6240\u6709\u6846\u67b6\u6bcf\u6b21\u90fd\u6253\u5f00\u548c\u5173\u95ed\u8fde\u63a5/\u4f1a\u8bdd\uff0c\u4e0d\u505a\u5171\u4eab\uff1b\u9760\u8fde\u63a5\u6c60\u4fdd\u8bc1\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u63a5\u5165Spring\u7684\u8fde\u63a5\u7ba1\u7406\u673a\u5236\u3002\u56e0\u4e0d\u540c\u6846\u67b6API\u4e0d\u540c\uff0c\u5b9e\u73b0\u65b9\u6cd5\u7565\u6709\u4e0d\u540c\u3002"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\u6709\u7684\u4f7f\u7528",(0,n.jsx)(a.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html",children:"DataSourceUtils"}),"\u7684getConnection\u548creleaseConnection"]}),"\n",(0,n.jsxs)(a.li,{children:["\u6709\u7684\u4f7f\u7528",(0,n.jsx)(a.a,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html",children:"TransactionAwareDataSourceProxy"})]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u4f46\u6700\u7ec8\u6548\u679c\u90fd\u4e00\u6837"}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u4e0d\u4f7f\u7528\u4e8b\u52a1"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"Exposed"}),"\u6bd4\u8f83\u7279\u6b8a\uff0c\u5176API\u5f3a\u5236\u8981\u6c42\u4e8b\u52a1\uff0c\u7ed9\u4e88\u5047\u7684\u5b9e\u73b0\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u4f7f\u7528\u5d4c\u5165\u7684H2\u5185\u6570\u636e\u5e93\uff0c\u5c3d\u53ef\u80fd\u538b\u7f29\u6570\u636e\u5e93\u7684\u6d88\u8017\uff0c\u51f8\u663eORM\u672c\u8eab\u7684\u6027\u80fd\uff0c\u5373\u6620\u5c04\u7684\u6027\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"\u4ef7\u503c",children:"\u4ef7\u503c"}),"\n",(0,n.jsx)(a.p,{children:"\u4e00\u79cd\u5e38\u89c1\u7684\u89c2\u70b9\uff1aORM\u672c\u8eab\u7684\u6027\u80fd\u4e0d\u91cd\u8981\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6570\u636e\u5e93\u5e76\u975e\u6709\u5185\u5d4c\u5185\u5b58\u6570\u636e\u5e93\uff0c\u6240\u4ee5ORM\u672c\u8eab\u8017\u65f6\u76f8\u5bf9\u4e8e\u6570\u636e\u5e93\u8017\u65f6\u53ef\u5ffd\u7565\u4e0d\u8ba1\u3002"}),"\n",(0,n.jsx)(a.p,{children:"\u53cd\u9a73\uff1aJava19\u53d1\u5e03\u540e\uff0c\u652f\u6301\u865a\u62df\u7ebf\u7a0b\u3002ORM\u80fd\u5c3d\u5feb\u5b8c\u6210\u6620\u5c04\uff0c\u53ef\u4ee5\u8ba9JVM\u53bb\u8c03\u5ea6\u66f4\u591a\u7684\u865a\u62df\u7ebf\u7a0b\uff0c\u53ef\u4ee5\u63d0\u9ad8\u7cfb\u7edf\u7684\u541e\u5410\u91cf\u3002"}),"\n",(0,n.jsx)(a.h2,{id:"\u4e3a\u4ec0\u4e48\u5982\u6b64\u5feb",children:"\u4e3a\u4ec0\u4e48\u5982\u6b64\u5feb?"}),"\n",(0,n.jsxs)(a.p,{children:["JDBC\u6709\u4e24\u79cd\u7f16\u7a0b\u98ce\u683c\u7528\u4e8e\u4ece",(0,n.jsx)(a.code,{children:"java.sql.ResultSet"}),"\u4e2d\u8bfb\u53d6\u503c"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"JDBC(ColIndex)"}),"\uff0c\u5373\u6309\u7167\u5217\u7d22\u5f15\u8bfb\u53d6\uff0c",(0,n.jsx)(a.code,{children:"rs.getString(1)"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\uff0c\u6309\u7167\u5217\u540d\u79f0\u8bfb\u53d6\uff1a",(0,n.jsx)(a.code,{children:'rs.getString("VALUE_1")'})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"JDBC(ColIndex)"}),"\u6bd4",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u6027\u80fd\u9ad8\uff0c\u56e0\u6b64\uff0cJimmer\u672c\u8eab\u4e5f\u5c06",(0,n.jsx)(a.code,{children:"JDBC(ColIndex)"}),"\u4f5c\u4e3a\u5e95\u5c42\u7684\u8bbf\u95ee",(0,n.jsx)(a.code,{children:"ResultSet"}),"\u7684\u624b\u6bb5\uff0c\u4e3a\u6027\u80fd\u6307\u6807\u8d85\u8d8a",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u63d0\u4f9b\u4e86\u53ef\u80fd\u6027\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u73b0\u5728\u8981\u6211\u4eec\u91cd\u70b9\u8ba8\u8bba\u56fe\u8868 ",(0,n.jsxs)(a.em,{children:["(\u9009\u4e2d",(0,n.jsx)(a.code,{children:"JDBC\u539f\u751fJDBC\u6307\u6807"}),")"]})," \u4e2d\u7684\u4e24\u4e2a\u6848\u4f8b"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u6bcf\u6b21\u67e5\u8be210\u6761\u6570\u636e\uff0c",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u548c",(0,n.jsx)(a.code,{children:"Jimmer(Java)"}),"\u7684OPS\u63a5\u8fd1\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u8fd9\u79cd\u573a\u666f\u4e0b\uff0cJimmer\u548c",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u6027\u80fd\u76f8\u4f3c\u3002",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u7684\u6d4b\u8bd5\u4ee3\u7801\u76f4\u63a5\u786c\u7f16\u7801SQL\uff0c\u800cJimmer\u91c7\u7528DSL\u673a\u5236\u9700\u8981\u52a8\u6001\u6784\u5efaSQL\uff0c\u4ece\u8fd9\u4e2a\u89d2\u5ea6\u8bb2Jimmer\u5e94\u8be5\u66f4\u6162\u3002\u7136\u800cJimmer\u628a",(0,n.jsx)(a.code,{children:"ResultSet"}),"\u8f6c\u5316\u4e3a\u5bf9\u8c61\u7684\u7684\u8fc7\u7a0b\u6bd4",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u5feb\uff0c\u4e8c\u8005\u62b5\u6d88\u3002\u6240\u4ee5\u6027\u80fd\u76f8\u8fd1\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u5f53\u7136Benchamrk\u4e2d\u91c7\u7528\u7684SQL\u8bed\u53e5\u4e0d\u590d\u6742\uff0c\u5982\u679c\u6362\u7528\u66f4\u590d\u6742\u7684SQL\uff0c\u76f4\u63a5\u786c\u7f16\u7801SQL\u7684",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u4f1a\u66f4\u5feb\uff0c\u8fd9\u4e5f\u662fJimmer\u540e\u7eed\u7248\u672c\u53ef\u4ee5\u4f18\u5316\u7684\u7a7a\u95f4\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u6bcf\u6b21\u67e5\u8be21000\u6761\u6570\u636e\uff0cJimmer\u7684ops\u660e\u663e\u9ad8\u4e8e",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u7684OPS\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cJimmer\u628a",(0,n.jsx)(a.code,{children:"ResultSet"}),"\u8f6c\u5316\u4e3a\u5bf9\u8c61\u7684\u6027\u80fd\u4f18\u52bf\u5f97\u5230\u4e86\u5145\u5206\u4f53\u73b0\uff0c\u5373\u4fbfJimmer\u4f7f\u7528DSL\u4e34\u65f6\u751f\u4ea7SQL\u62d6\u6162\u4e86\u901f\u5ea6\uff0c\u4f46\u6574\u4f53\u7ed3\u679c\u4ecd\u7136\u6bd4",(0,n.jsx)(a.code,{children:"JDBC(ColName)"}),"\u5feb\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["Jimmer\u628a",(0,n.jsx)(a.code,{children:"ResultSet"}),"\u8f6c\u5316\u4e3a\u5bf9\u8c61\u7684\u6027\u80fd\u975e\u9ad8\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u5982\u4e0b\u4e24\u4e2a\u539f\u56e0"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u5e95\u5c42\u4f7f\u7528",(0,n.jsx)(a.code,{children:"JDBC(ColIndex)"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u4e0d\u4f7f\u7528Java\u7684\u53cd\u5c04\u673a\u5236\u4e3a\u5bf9\u8c61\u52a8\u6001\u8bbe\u7f6e\u5404\u5c5e\u6027\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u7f16\u8bd1\u65f6\uff0cJimmer\u4e3a\u6bcf\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u5b9e\u4f53\u7c7b\u578b\u751f\u79f0\u4e00\u4e2a\u53ef\u4fee\u6539\u7684",(0,n.jsx)(a.code,{children:"DraftImpl"}),"\u7c7b\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u901a\u7528\u7684",(0,n.jsx)(a.code,{children:"__set(PropId propId, Object value)"}),"\u65b9\u6cd5\u5b8c\u6210\u548cJava\u53cd\u5c04\u7c7b\u4f3c\u7684\u52a8\u6001\u8bbe\u7f6e\u5bf9\u8c61\u5c5e\u6027\u7684\u529f\u80fd\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u540c\u65f6\uff0c\u4e0e\u7f16\u8bd1\u5668\u6bcf\u4e2a\u5c5e\u6027\u5206\u914d\u4e00\u4e2a\u6574\u6570\u4f5c\u4e3aid\uff0c",(0,n.jsx)(a.code,{children:"DraftImpl"}),"\u7c7b\u7684\u7684",(0,n.jsx)(a.code,{children:"__set"}),"\u65b9\u6cd5\u5185\u90e8\u4f7f\u7528",(0,n.jsx)(a.code,{children:"switch"}),"\u8bed\u53e5\u5b9e\u73b0\u4e86\u5bf9\u4f20\u5165\u7684\u5c5e\u6027id\u8fdb\u884c\u9274\u522b\u3002\u4ee5\u751f\u6210\u7684Java\u4ee3\u7801\u4e3a\u4f8b"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:"@Override\npublic void __set(PropId prop, Object value) {\n    int __propIndex = prop.asIndex();\n    switch (__propIndex) {\n        case -1:\n            __set(prop.asName(), value);\n            return;\n        // highlight-next-line\n        case 0:\n            setId((Long)value);\n            break;\n        // highlight-next-line\n        case 1:\n            setName((String)value);\n            break;\n        // highlight-next-line\n        case 2:\n            setEdition((Integer)value);\n            break;\n        ...\u7565...\n    }\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u73b0\u4ee3\u7f16\u8bd1\u5668\u5bf9\u8fd9\u79cd\u57fa\u4e8e\u6574\u6570\u7684",(0,n.jsx)(a.code,{children:"switch"}),"\u8bed\u53e5\u6709\u5145\u5206\u4f18\u5316\uff0c\u53ef\u4ee5\u8ba4\u4e3aJimmer\u5bf9\u5b9e\u4f53\u5bf9\u8c61\u7684\u52a8\u6001\u8d4b\u503c\u4e0d\u4f1a\u6bd4JDBC\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u7684\u786c\u7f16\u7801\u6162\u591a\u5c11\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"\u4ee5\u4e0a\u4e24\u4e2a\u539f\u56e0\uff0c\u662fJimmer\u7684\u5bf9\u8c61\u6620\u5c04\u6027\u80fd\u5982\u6b64\u9ad8\u7684\u6700\u91cd\u8981\u7684\u539f\u56e0\u3002"}),"\n"]}),"\n"]})]})}function E(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(Q,{...e})}):Q(e)}}}]);