"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31536:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(80102),i=n(83117),o=n(67294),r=n(10209),l=n(59766),s=n(94780),p=n(34867);const c=(0,n(70182).ZP)();var u=n(29628),m=n(39707),d=n(66500),k=n(95408),g=n(98700),h=n(85893);const y=["component","direction","spacing","divider","children","className","useFlexGap"],v=(0,d.Z)(),f=c("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,u.Z)({props:e,name:"MuiStack",defaultTheme:v})}function N(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,i)=>(e.push(a),i<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e)),[])}const T=({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex",flexDirection:"column"},(0,k.k9)({theme:t},(0,k.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,g.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),o=(0,k.P$)({values:e.direction,base:i}),r=(0,k.P$)({values:e.spacing,base:i});"object"==typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const a=t>0?o[n[t-1]]:"column";o[e]=a}}));const s=(t,n)=>{return e.useFlexGap?{gap:(0,g.NA)(a,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${i=n?o[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,g.NA)(a,t)}};var i};n=(0,l.Z)(n,(0,k.k9)({theme:t},r,s))}return n=(0,k.dt)(t.breakpoints,n),n};var I=n(90948),E=n(71657);const Z=function(e={}){const{createStyledComponent:t=f,useThemeProps:n=b,componentName:l="MuiStack"}=e,c=t(T),u=o.forwardRef((function(e,t){const o=n(e),u=(0,m.Z)(o),{component:d="div",direction:k="column",spacing:g=0,divider:v,children:f,className:b,useFlexGap:T=!1}=u,I=(0,a.Z)(u,y),E={direction:k,spacing:g,useFlexGap:T},Z=(0,s.Z)({root:["root"]},(e=>(0,p.Z)(l,e)),{});return(0,h.jsx)(c,(0,i.Z)({as:d,ownerState:E,ref:t,className:(0,r.Z)(Z.root,b)},I,{children:v?N(f,v):f}))}));return u}({createStyledComponent:(0,I.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,E.Z)({props:e,name:"MuiStack"})}),C=Z},86153:(e,t,n)=>{n.d(t,{_:()=>O});var a=n(67294),i=n(87357),o=n(83321),r=n(61903),l=n(23599),s=n(86886),p=n(67720),c=n(90629),u=n(7906),m=n(295),d=n(53252),k=n(72882),g=n(53184),h=n(53816),y=n(24661),v=n(96540),f=n(93946),b=n(41733),N=n(50657),T=n(31425),I=n(6514),E=n(58951),Z=n(37645),C=n(52263),P=n(59457),x=n(53143);const O=(0,a.memo)((()=>{const{i18n:e}=(0,C.Z)(),t=(0,x.S)(),n=(0,a.useMemo)((()=>t?w:j),[t]),O=(0,a.useMemo)((()=>{const e=new Map;for(const t of n)e.set(t.id,t);return e}),[n]),M=(0,a.useMemo)((()=>t?B:D),[t]),_=(0,a.useMemo)((()=>{const e=new Map;for(const t of M)e.set(t.id,t);return e}),[M]),[A,L]=(0,P.x)((()=>({userId:1,province:O.get(1).province,city:O.get(1).city,address:O.get(1).address,items:[{__rowId:1,productId:1,name:_.get(1).name,quantity:2},{__rowId:2,productId:10,name:_.get(10).name,quantity:1}]}))),q=(0,a.useMemo)((()=>Math.max(...A.items.map((e=>e.__rowId)))+1),[A]),R=(0,a.useCallback)((e=>{const t=O.get(parseInt(e.target.value));void 0!==t&&L((e=>{e.userId=t.id,e.province=t.province,e.city=t.city,e.address=t.address}))}),[L,O]),z=(0,a.useCallback)((e=>{L((t=>{t.province=e.target.value}))}),[L]),F=(0,a.useCallback)((e=>{L((t=>{t.city=e.target.value}))}),[L]),U=(0,a.useCallback)((e=>{L((t=>{t.address=e.target.value}))}),[L]),G=(0,a.useCallback)(((e,t)=>{L((n=>{for(const a of n.items)if(a.__rowId===t){a.productId=parseInt(e.target.value),S(n);break}}))}),[L]),J=(0,a.useCallback)(((e,t)=>{L((n=>{for(const a of n.items)if(a.__rowId===t){a.quantity=parseInt(e.target.value),S(n);break}}))}),[L]),W=(0,a.useCallback)((e=>{L((t=>{for(let n=t.items.length-1;n>=0;--n)if(t.items[n].__rowId===e){t.items.splice(n,1);break}}))}),[L]),K=(0,a.useCallback)((()=>{L((e=>{e.items.push({__rowId:q,quantity:1})}))}),[L,q]),[V,H]=(0,a.useState)(!1),X=(0,a.useCallback)((()=>{H(!0)}),[]),$=(0,a.useCallback)((()=>{H(!1)}),[]);return a.createElement(c.Z,{elevation:3,style:{padding:"1.5rem"}},a.createElement(i.Z,{component:"form",noValidate:!0,autoComplete:"off"},a.createElement(s.ZP,{container:!0,spacing:2},a.createElement(s.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,select:!0,label:t?"\u8d2d\u4e70\u4eba":"Purchaser",value:A.userId,onChange:R},n.map((e=>a.createElement(l.Z,{key:e.id,value:e.id},e.nickName))))),a.createElement(s.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u7701\u4efd":"Province",value:A.province,onChange:z})),a.createElement(s.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u57ce\u5e02":"City",value:A.city,onChange:F})),a.createElement(s.ZP,{item:!0,xs:12},a.createElement(r.Z,{fullWidth:!0,label:t?"\u5730\u5740":"Address",value:A.address,onChange:U})),a.createElement(s.ZP,{item:!0,xs:12},a.createElement(p.Z,{textAlign:"left"},t?"\u8ba2\u5355\u660e\u7ec6":"Order Items"),a.createElement(k.Z,{component:c.Z},a.createElement(u.Z,{size:"small"},a.createElement(g.Z,null,a.createElement(h.Z,null,a.createElement(d.Z,null,t?"\u5546\u54c1":"Commodity"),a.createElement(d.Z,null,t?"\u6570\u91cf":"Quantity"),a.createElement(d.Z,null,t?"\u5355\u4ef7":"Unit price"),a.createElement(d.Z,null,t?"\u660e\u7ec6\u4ef7":"Item price"),a.createElement(d.Z,null,t?"\u5220\u9664":"Delete"))),a.createElement(m.Z,null,A.items.map((e=>{const t=void 0!==e.productId?_.get(e.productId):void 0;return a.createElement(h.Z,{key:e.__rowId},a.createElement(d.Z,null,a.createElement(r.Z,{select:!0,value:null==t?void 0:t.id,variant:"standard",size:"small",onChange:t=>{G(t,e.__rowId)}},M.map((e=>a.createElement(l.Z,{key:e.id,value:e.id},e.name))))),a.createElement(d.Z,null,a.createElement(r.Z,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:t=>{J(t,e.__rowId)}})),a.createElement(d.Z,null,null==t?void 0:t.price),a.createElement(d.Z,null,void 0!==t&&t.price*e.quantity),a.createElement(d.Z,null,a.createElement(f.Z,{onClick:()=>W(e.__rowId)},a.createElement(b.Z,null))))}))),a.createElement(y.Z,null,a.createElement(h.Z,null,a.createElement(d.Z,{colSpan:5},a.createElement(o.Z,{onClick:K},a.createElement(v.Z,null),t?"\u6dfb\u52a0":"Add"))))))),a.createElement(s.ZP,{item:!0,xs:12},t?"\u603b\u989d":"Total price",":",A.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>_.get(e.productId).price*e.quantity)).reduce(((e,t)=>e+t),0)),a.createElement(s.ZP,{item:!0,xs:12},a.createElement(o.Z,{variant:"contained",onClick:X},t?"\u63d0\u4ea4":"Submit")))),a.createElement(N.Z,{open:V,onClose:$},a.createElement(Z.Z,null,t?"\u4fe1\u606f":"Info"),a.createElement(I.Z,null,a.createElement(E.Z,null,t?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),a.createElement(T.Z,null,a.createElement(o.Z,{onClick:$},t?"\u5173\u95ed":"Close"))))})),w=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],j=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],B=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],D=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function S(e){const t=e.items,n=new Map;for(let a=0;a<t.length;a++){const e=t[a];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){t.splice(a--,1);continue}if(void 0===e.productId)continue;const i=n.get(e.productId);void 0===i?n.set(e.productId,e):(i.quantity+=e.quantity,t.splice(a--,1))}}},20036:(e,t,n)=>{n.d(t,{k:()=>v});var a=n(52263),i=n(94054),o=n(33841),r=n(23599),l=n(90629),s=n(43246),p=n(31536),c=n(61903),u=n(50657),m=n(37645),d=n(6514),k=n(31425),g=n(58951),h=n(83321),y=n(67294);const v=(0,y.memo)((()=>{const[e,t]=(0,y.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,y.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),v=(0,y.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),f=(0,y.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),b=(0,y.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),N=(0,y.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:T}=(0,a.Z)(),I=(0,y.useMemo)((()=>"zh"==T.currentLocale||"zh_cn"==T.currentLocale||"zh_CN"==T.currentLocale),[T.currentLocale]),[E,Z]=(0,y.useState)(!1),C=(0,y.useCallback)((()=>{Z(!0)}),[]),P=(0,y.useCallback)((()=>{Z(!1)}),[]);return y.createElement(l.Z,{elevation:3,style:{padding:"1.5rem",width:500}},y.createElement(p.Z,{spacing:2},y.createElement("h1",null,"Book Form"),y.createElement(c.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),y.createElement(c.Z,{label:"Edition",type:"number",value:e.edition,onChange:v}),y.createElement(c.Z,{label:"Price",type:"number",value:e.price,onChange:f}),y.createElement(i.Z,{fullWidth:!0},y.createElement(o.Z,{id:"store-select-label"},"Store"),y.createElement(s.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:b},y.createElement(r.Z,{value:-1},"--NONE--"),y.createElement(r.Z,{value:1},"O'REILLY"),y.createElement(r.Z,{value:2},"MANNING"))),y.createElement(i.Z,{fullWidth:!0},y.createElement(o.Z,{id:"author-multi-select-label"},"Authors"),y.createElement(s.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:N},y.createElement(r.Z,{value:1},"Eve Procello"),y.createElement(r.Z,{value:2},"Alex Banks"),y.createElement(r.Z,{value:3},"Dan Vanderkam"),y.createElement(r.Z,{value:4},"Boris Cherny"),y.createElement(r.Z,{value:5},"Samer Buna"))),y.createElement(i.Z,null,y.createElement(h.Z,{onClick:C,variant:"contained"},I?"\u63d0\u4ea4":"Submit"))),y.createElement(u.Z,{open:E,onClose:P},y.createElement(m.Z,null,I?"\u4fe1\u606f":"Info"),y.createElement(d.Z,null,y.createElement(g.Z,null,I?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),y.createElement(k.Z,null,y.createElement(h.Z,{onClick:P},"\u5173\u95ed"))))}))},32102:(e,t,n)=>{n.d(t,{s:()=>g});var a=n(83117),i=n(67294),o=n(42293),r=n(50657),l=n(6514),s=n(54776),p=n(10155),c=n(15861),u=n(93946),m=n(9137),d=n(61274),k=n(50594);const g=(0,i.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,maxWidth:s="md",onClose:g,children:y}=e;const[v,f]=(0,i.useState)(n),b=(0,i.useCallback)((()=>{f((e=>!e))}),[]);return i.createElement(r.Z,{open:t,onClose:g,fullScreen:v,TransitionComponent:h,maxWidth:s},i.createElement(o.Z,{sx:{position:"relative"}},i.createElement(p.Z,null,i.createElement(c.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),i.createElement(u.Z,{onClick:b,style:{color:"white"}},v?i.createElement(d.Z,null):i.createElement(m.Z,null)),i.createElement(u.Z,{"aria-label":"close",onClick:g,style:{color:"white"}},i.createElement(k.Z,null)))),i.createElement(l.Z,null,y))})),h=i.forwardRef((function(e,t){return i.createElement(s.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>r});var a=n(67294),i=n(83321),o=n(32102);const r=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:r=t,variant:l="outlined",large:s=!1,maxWidth:p,useOriginalText:c=!0,children:u}=e;const[m,d]=(0,a.useState)(!1),k=(0,a.useCallback)((e=>{d(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),g=(0,a.useCallback)((()=>{d(!1)}),[]),h=c?{textTransform:"none"}:{};return a.createElement(a.Fragment,null,a.createElement(i.Z,{"data-is-view-more-button":"true",onClick:k,variant:l,size:s?"large":"small",style:h},t),a.createElement(o.s,{open:m,onClose:g,title:r,maxWidth:p,fullScreen:n},u))}))},53143:(e,t,n)=>{n.d(t,{S:()=>i});var a=n(52263);function i(){const{i18n:e}=(0,a.Z)(),t=e.currentLocale;return"zh"===t||"zh_cn"===t||"zh_CN"==t}},92075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>k});var a=n(83117),i=(n(67294),n(3905)),o=n(65488),r=n(85162),l=n(20036),s=n(86153),p=n(39511);const c={sidebar_position:3,title:"Using DTO Language"},u=void 0,m={unversionedId:"mutation/save-command/input-dto/dto-lang",id:"mutation/save-command/input-dto/dto-lang",title:"Using DTO Language",description:"Jimmer provides DTO language.",source:"@site/docs/mutation/save-command/input-dto/dto-lang.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/dto-lang",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/dto-lang",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/input-dto/dto-lang.mdx",tags:[],version:"current",lastUpdatedAt:1731502434,formattedLastUpdatedAt:"Nov 13, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Using DTO Language"},sidebar:"tutorialSidebar",previous:{title:"Lonely Form",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/lonely"},next:{title:"Handle Null Values",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/null-handling"}},d={},k=[{value:"Defining DTO Shape",id:"defining-dto-shape",level:2},{value:"Auto-Generated DTO Types",id:"auto-generated-dto-types",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"Best Practices",id:"best-practices",level:2}],g={toc:k};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jimmer provides ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"DTO language"),"."),(0,i.kt)("p",null,"Developers can use this language to quickly define the shape of the Input DTO to be saved. After compilation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The corresponding Java/Kotlin Input DTO classes will be generated automatically")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The mutual conversion logic between Input DTOs and entities will be generated automatically")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The object fetcher that matches its shape will be automatically generated. ",(0,i.kt)("em",{parentName:"p"},"(This feature is unrelated to input DTOs, so it is not discussed in this article)")))),(0,i.kt)("p",null,"Developers use the auto-generated Input DTOs as method parameters, and persist them in one line of code ",(0,i.kt)("em",{parentName:"p"},"(Internal logic: Call the auto-generated conversion logic to convert the Input DTO to a dynamic entity object, then directly persist using the save command)"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is the most efficient way to eliminate the pain of Input DTO explosion.")),(0,i.kt)("h2",{id:"defining-dto-shape"},"Defining DTO Shape"),(0,i.kt)("p",null,"This article focuses on explaining how to save static DTO types, not a systematic introduction to DTO language.\nPlease refer to ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"Object/DTO conversion/DTO Language")," to know more."),(0,i.kt)("p",null,"Assume the fully qualified name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," class is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.yourcompany.yourproject.model.Book"),". You can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In the project where entity is defined"),", create directory ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto"),", create subdirectories following the package path of the entity, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"com/yourcompany/yourproject/model")," ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under the directory created in previous step, create the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.dto"),". The file must have the same name as the entity class and the extension must be ",(0,i.kt)("inlineCode",{parentName:"p"},"dto"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit this file and use DTO language to define various DTO shapes for the Book entity:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"# highlight-next-line\ninput BookInput {\n    \n    #allScalars(Book)\n    \n    id(store)\n\n    authors {\n        #allScalars(Author)\n        -id\n    }\n}\n\ninput SimpleBookInput { ... }\n\n...Other Input DTO shapes omitted...\n")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Input DTO shapes used as input parameters must be decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," modifier."),(0,i.kt)("p",{parentName:"admonition"},"The specific reasons are elaborated in ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"Object/DTO conversion/DTO Language")," and not repeated here.")))),(0,i.kt)("h2",{id:"auto-generated-dto-types"},"Auto-Generated DTO Types"),(0,i.kt)("p",null,"Jimmer is responsible for compiling dto files and automatically generating DTO types conforming to these shapes."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If Java/Kotlin source files other than dto files are modified, directly clicking the Run button in IDE can trigger recompilation of dto files."),(0,i.kt)("p",{parentName:"admonition"},"However, if no Java/Kotlin files other than dto files are modified, simply clicking the Run button in IDE will not trigger dto file recompilation unless rebuild is explicitly triggered!"),(0,i.kt)("p",{parentName:"admonition"},"If you are using Gradle as your build tool, you can also use the third-party Gradle plugin provided by the community to solve this problem: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Enaium/jimmer-gradle"},"jimmer-gradle"))),(0,i.kt)("p",null,"Take ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," in the above code as an example. After successful compilation of this dto file, the following DTO types will be auto-generated:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},'package com.yourcompany.yourproject.model.dto;\n\nimport com.yourcompany.yourproject.model.Book;\nimport org.babyfish.jimmer.Input;\n\n@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookInput implements Input<Book> {\n\n    @Nullable\n    private Long id; \u2776\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId; \u2777\n\n    private List<TargetOf_authors> authors; \u2778\n\n    public BookInput(Book book) { \u2779\n        ...\n    }\n\n    @Override\n    public Book toEntity() { \u277a\n        ...\n    }\n\n    @Data\n    public static class TargetOf_authors {\n\n        private String firstName;\n        \n        private String lastName;\n        \n        private Gender gender;\n\n        ...Other members omitted...\n    }\n\n    ...Other members omitted...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},'package com.yourcompany.yourproject.model.dto\n\nimport com.yourcompany.yourproject.model.Book\nimport org.babyfish.jimmer.Input\n\n@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookInput(\n    val id: Long? = null, \u2776\n    val name: String = "", \n    val edition: Int = 0,\n    val price: BigDecimal, \n    val storeId: Long? = null, \u2777\n    val authors: List<TargetOf_authors> = emptyList() \u2778\n): Input<Book> {\n\n    constructor(book: Book) : this(...) \u2779\n\n    override fun toEntity(): Book = ... \u277a\n\n    data class TargetOf_authors(\n        val firstName: String,\n        val lastName: String,\n        val gender: Gender\n    ) {\n        ...Other members omitted...\n    }\n\n    ...Other members omitted...\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 If the id is designated some auto-generation strategy, it is not required. This is also a feature of save commands, see details in ",(0,i.kt)("a",{parentName:"p",href:"../save-mode#summary"},"Mutation/Save Command/Save Mode/Summary"),"."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Jimmer entities, ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," cannot be null. Missing ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("em",{parentName:"p"},"(i.e. not assigning it)")," represents the object does not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Input DTOs, static POJO types do not have the concept of missing properties. ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," represents missing ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."))),(0,i.kt)("p",{parentName:"admonition"},"This seems contradictory, but can be handled simply: If Input DTO's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", the converted entity object will not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("em",{parentName:"p"},"(although ",(0,i.kt)("inlineCode",{parentName:"em"},"id")," of entity cannot be assigned ",(0,i.kt)("inlineCode",{parentName:"em"},"null"),", dynamic objects allow unspecified properties)"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 Explicitly specifies this Input DTO wants to edit the entity's many-to-one association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store")," using the ",(0,i.kt)(p.b,{buttonText:"short association",mdxType:"ViewMore"},(0,i.kt)(l.k,{mdxType:"ShortAssociation"}))," mode. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2778 Explicitly specifies this Input DTO wants to edit the entity's many-to-many association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," using the ",(0,i.kt)(p.b,{buttonText:"long association",mdxType:"ViewMore"},(0,i.kt)(s._,{mdxType:"LongAssociation"}))," mode.\nThe type of associated objects is also fixed to the nested Input DTO type ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput.TargetOf_authors"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2779 Convert dynamic entity to static Input DTO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u277a Convert static Input DTO to dynamic entity"))),(0,i.kt)("h2",{id:"http-api"},"HTTP API"),(0,i.kt)("p",null,"The DTO language generates relatively complete code, so we can quickly expose HTTP APIs to persist data:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`  \n    // highlight-next-line\n    bookRepository.save(input); \n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input)\n}\n')))),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"In real projects, we often face the problem that entities may have many properties, and "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Relatively more properties need to be specified during insertion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Relatively fewer properties need to be specified during modification"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity we consistently use as example has few properties and is inconvenient to demonstrate this. "),(0,i.kt)("p",null,"So I make up an entity type ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," with more properties:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Product.java"',title:'"Product.java"'},"@Entity\npublic interface Product {\n\n    ...Many entity properties, omitted... \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Product.kt"',title:'"Product.kt"'},"@Entity  \ninterface Product {\n\n    ...Many entity properties, omitted...\n}\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For insertion which requires specifying relatively more properties, define ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateProductInput"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For modification which requires specifying relatively fewer properties, define ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateProductInput"),"."))),(0,i.kt)("p",null,"So the ",(0,i.kt)("inlineCode",{parentName:"p"},"Product.dto")," code looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"input CreateProductInput {\n    ...More properties, omitted...\n}\n\ninput UpdateProductInput {\n    ...Fewer properties, omitted... \n}\n")),(0,i.kt)("p",null,"After compilation, ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateProductInput")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateProductInput")," Java/Kotlin classes will be auto-generated. So we can quickly implement the following two HTTP APIs:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("/product")\npublic void createProduct(\n    // `CreateProductInput` has relatively more properties  \n    // highlight-next-line\n    @RequestBody CreateProductInput input\n) {\n    productRepository.insert(input);\n}\n\n@PutMapping("/product")  \npublic void updateProduct(\n    // `UpdateProductInput` has relatively fewer properties\n    // highlight-next-line \n    @RequestBody UpdateProductInput input\n) {\n    productRepository.update(input);\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PostMapping("/product")\nfun createProduct(\n    // `CreateProductInput` has relatively more properties\n    // highlight-next-line\n    @RequestBody input: CreateProductInput  \n) {\n    productRepository.insert(input)\n}\n\n@PutMapping("/product")\nfun updateProduct(\n    // `UpdateProductInput` has relatively fewer properties \n    // highlight-next-line\n    @RequestBody input: UpdateProductInput\n) {\n    productRepository.update(input)\n} \n')))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As you can see, no matter how many different ",(0,i.kt)("inlineCode",{parentName:"p"},"Input DTO")," types need to be defined for the same entity according to project requirements, we can quickly generate Input DTO types and related data conversion logic using DTO language, then persist in one line of code calling save commands."),(0,i.kt)("p",{parentName:"admonition"},"Even if the project is more complex, e.g. people with different identities can edit data structures of different shapes, this pattern can still be applied repeatedly to handle such scenarios easily.")))}h.isMDXComponent=!0}}]);