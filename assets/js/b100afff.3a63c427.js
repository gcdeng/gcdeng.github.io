(self.webpackChunkgcdeng_github_io=self.webpackChunkgcdeng_github_io||[]).push([[685],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},207:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={slug:"five-ways-to-defend-against-CSRF-attacks",title:"[\u8cc7\u5b89\u7cfb\u5217] \u9632\u79a6CSRF\u653b\u64ca\u7684\u4e94\u7a2e\u65b9\u6cd5",author:"Eric Deng",author_url:"/about",author_image_url:"/img/ericdeng.jpg",tags:["CSRF","cookie","security"],keywords:["CSRF","cookie","security"]},s=void 0,p={permalink:"/five-ways-to-defend-against-CSRF-attacks",source:"@site/blog/2021-11-02-five-ways-to-defend-against-CSRF-attacks.md",title:"[\u8cc7\u5b89\u7cfb\u5217] \u9632\u79a6CSRF\u653b\u64ca\u7684\u4e94\u7a2e\u65b9\u6cd5",description:"charles-deluvio-pjAH2Ax4uWk-unsplash.jpg",date:"2021-11-02T00:00:00.000Z",formattedDate:"November 2, 2021",tags:[{label:"CSRF",permalink:"/tags/csrf"},{label:"cookie",permalink:"/tags/cookie"},{label:"security",permalink:"/tags/security"}],readingTime:1.19,truncated:!1,prevItem:{title:"[\u524d\u7aef\u512a\u5316\u7cfb\u5217] \u4f7f\u7528async, defer\u5c6c\u6027\u52a0\u901f\u7db2\u9801\u8f09\u5165\u6642\u9593",permalink:"/script-tag-async-defer-attributes"},nextItem:{title:"[Javascript] \u6df1\u5165\u4e86\u89e3\u4e8b\u4ef6\u8ff4\u5708(Event Loop)\uff0cMacrotask\u8ddfMicrotask\u662f\u4ec0\u9ebc\uff1f",permalink:"/javascript-deep-dive-into-event-loop"}},c=[{value:"What is CSRF?",id:"what-is-csrf",children:[]},{value:"\u5982\u4f55\u89e3\u6c7a CSRF \u653b\u64ca",id:"\u5982\u4f55\u89e3\u6c7a-csrf-\u653b\u64ca",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"charles-deluvio-pjAH2Ax4uWk-unsplash.jpg",src:r(6639).Z})),(0,o.kt)("figcaption",{align:"center"},"Photo by ",(0,o.kt)("a",{href:"https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Charles Deluvio")," on ",(0,o.kt)("a",{href:"https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash")),(0,o.kt)("h2",{id:"what-is-csrf"},"What is CSRF?"),(0,o.kt)("p",null,"Cross Site Request Forgery \u8de8\u7ad9\u8acb\u6c42\u507d\u9020\uff0c\u4e5f\u88ab\u7a31\u70ba one-click attack \u6216 session riding\uff0c\u901a\u5e38\u7e2e\u5beb\u70ba CSRF \u6216 XSRF\u3002"),(0,o.kt)("p",null,"\u5047\u8a2d\u6709\u5169\u500b\u4e0d\u540c\u7db2\u57df(domain)\u7684\u7db2\u7ad9\u53ca\u4e00\u4f4d\u4f7f\u7528\u8005"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A \u7db2\u7ad9: \u60e1\u610f\u7db2\u7ad9\uff0c\u4f8b\u5982\u5c0f\u904a\u6232\u7db2\u7ad9"),(0,o.kt)("li",{parentName:"ul"},"B \u7db2\u7ad9: \u653b\u64ca\u76ee\u6a19\u7db2\u7ad9"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8005\uff1a\u88ab\u5192\u5145\u8eab\u4efd\u7684\u51a4\u5927\u982d\uff0c\u6211\u5011\u5c31\u5148\u53eb\u4ed6\u5927\u982d\u5427")),(0,o.kt)("p",null,"\u653b\u64ca\u6d41\u7a0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5927\u982d\u5df2\u7d93\u767b\u5165\u904e B \u7db2\u7ad9\u4e26\u4e14\u700f\u89bd\u5668 cookie \u4e2d\u5305\u542b\u8b58\u5225\u8eab\u4efd\u7684 auth token"),(0,o.kt)("li",{parentName:"ol"},"\u99ed\u5ba2\u60f3\u8fa6\u6cd5\u8b93\u5927\u982d\u5728 A \u7db2\u7ad9\u4e0a\u5c0d B \u7db2\u7ad9\u767c\u51fa API \u8acb\u6c42 \u2192 \u8de8\u7ad9\u8acb\u6c42\uff0c\u800c\u4e14\u9019\u500b\u8acb\u6c42\u5e36\u8457 B \u7db2\u7ad9\u7684 cookie \u53ca auth token\u2192 \u507d\u9020\u8eab\u4efd"),(0,o.kt)("li",{parentName:"ol"},"B \u7db2\u7ad9\u6536\u5230\u8acb\u6c42\uff0c\u78ba\u8a8d auth token \u78ba\u5be6\u662f\u5927\u982d\u5f8c\u7e7c\u7e8c\u57f7\u884c\u99ed\u5ba2\u9810\u671f\u7684\u8acb\u6c42\u5167\u5bb9")),(0,o.kt)("p",null,"\u7528\u9019\u500b\u65b9\u5f0f\u5c31\u53ef\u4ee5\u8b93\u4f7f\u7528\u8005\uff08\u5927\u982d\uff09\u5728\u4f7f\u7528 A \u7db2\u7ad9\u6642\u53ef\u80fd\u662f\u9ede\u64ca\u4e00\u500b\u6309\u9215\u751a\u81f3\u662f\u8f09\u5165\u4e00\u5f35\u5716\u7247\u7121\u610f\u9593\u5c31\u4ee5\u81ea\u5df1\u7684\u8eab\u4efd\u5c0d B \u7db2\u7ad9\u57f7\u884c\u60e1\u610f\u653b\u64ca\uff0c\u4f8b\u5982\u5728\u81ea\u5df1\u767b\u5165\u904e\u7684\u9280\u884c\u7db2\u7ad9\u8f49\u5e33\uff0c\u5982\u679c B \u7db2\u7ad9\u4e5f\u6c92\u5bdf\u89ba\u507d\u9020\u7684\u8acb\u6c42\u90a3\u9019\u500b\u653b\u64ca\u5c31\u6210\u529f\u4e86\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u89e3\u6c7a-csrf-\u653b\u64ca"},"\u5982\u4f55\u89e3\u6c7a CSRF \u653b\u64ca"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5f8c\u7aef\u670d\u52d9\u5728 response header ",(0,o.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u6307\u5b9a\u5141\u8a31\u7684 domain\uff0c\u700f\u89bd\u5668\u6703\u5148\u767c\u51fa preflight \u8acb\u6c42\u7d66 server \u6aa2\u67e5 client domain \u662f\u5426\u88ab\u5141\u8a31\uff0c\u5982\u679c\u5141\u8a31\u7684\u8a71\u624d\u6703\u518d\u767c\u51fa\u771f\u6b63\u7684\u8acb\u6c42\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u700f\u89bd\u5668\u6703\u5728 request header \u52a0\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"Referer")," \u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"Origin")," \u5169\u500b\u6b04\u4f4d\u4ee3\u8868\u8acb\u6c42\u7684\u4f86\u6e90 domain\uff0cserver \u53ef\u4ee5\u6aa2\u67e5\u9019\u5169\u500b\u6b04\u4f4d\u7684\u503c\u662f\u4e0d\u662f\u5141\u8a31\u7684 domain\uff0c\u96d6\u7136\u9019\u5169\u500b\u6b04\u4f4d\u662f",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name"},"Forbidden header name")," \uff0c\u4f46\u4ecd\u6709\u4e9b",(0,o.kt)("a",{parentName:"p",href:"https://www.trustedsec.com/blog/setting-the-referer-header-using-javascript/"},"\u5c0f\u6280\u5de7"),"\u53ef\u4ee5\u4fee\u6539\uff0c\u800c\u4e14\u6709\u4e9b\u700f\u89bd\u5668\u53ef\u80fd\u6c92\u6709\u9019\u5169\u500b\u6b04\u4f4d\uff0c\u6240\u4ee5\u53ea\u7528\u9019\u500b\u65b9\u6cd5\u4e26\u4e0d\u5b89\u5168\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"set cookie with ",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite=Strict or Lax")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Strict: \u9019\u500b cookie \u53ea\u6703\u8ddf\u8457\u76f8\u540c domain \u7684\u8acb\u6c42\u9001\u51fa\uff0c\u4e0d\u6703\u8ddf\u8457 cross site request \u4e00\u8d77\u9001\u51fa\u53bb"),(0,o.kt)("li",{parentName:"ul"},"Lax: \u53ea\u5141\u8a31\u7279\u5b9a\u65b9\u5f0f\u7684 cross site request \u53ef\u4ee5\u4e00\u8d77\u5e36\u8457\u9001\u51fa\u53bb\uff0c\u7279\u5b9a\u65b9\u5f0f\u5305\u542b\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"<a>"),", ",(0,o.kt)("inlineCode",{parentName:"li"},'<link rel="prerender">'),", ",(0,o.kt)("inlineCode",{parentName:"li"},'<form method="GET">'),"\uff0cChrome set cookie \u9810\u8a2d",(0,o.kt)("inlineCode",{parentName:"li"},"SameSite=Lax")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CSRF token: server \u52a0\u5bc6\u7522\u751f\u4e00\u500b\u552f\u4e00\u4e14\u6709\u6642\u6548\u6027\u7684 token\uff0c\u5728\u524d\u7aef\u8f09\u5165\u9801\u9762\u6642\u6216\u662f\u5728\u547c\u53eb\u9700\u8981\u4fdd\u8b77\u7684 api \u4e4b\u524d\u5148\u8ddf server \u53d6\u5f97\u9019\u500b token\uff0c\u518d\u628a token \u653e\u9032 api request header \u4e2d\u9001\u7d66 server \u6aa2\u67e5\u662f\u5408\u6cd5 token \u624d\u63a5\u53d7\u8acb\u6c42\u3002"),(0,o.kt)("p",{parentName:"li"},"CSRF token \u5c31\u50cf\u662f\u4e00\u6b21\u6027\u4f7f\u7528\u7684\u9a57\u8b49\u78bc\u4f86\u8b93\u8acb\u6c42\u591a\u4e00\u5c64\u4fdd\u8b77\uff0c\u6240\u4ee5\u7279\u5225\u9700\u8981\u6ce8\u610f\u53d6\u5f97 CSRF token \u7684 api \u4e0d\u80fd\u63a5\u53d7\u8de8\u7db2\u57df\u7684\u8acb\u6c42\uff0c\u5982\u679c\u8b93\u99ed\u5ba2\u6709\u6a5f\u6703\u53d6\u5f97 CSRF token \u4e00\u6a23\u6709\u98a8\u96aa\u3002"),(0,o.kt)("p",{parentName:"li"},"\u9019\u500b\u4e5f\u662f\u6700\u5e38\u898b\u7684\u65b9\u6cd5\uff0c\u5be6\u4f5c\u4e0a\u53ef\u4ee5\u4f7f\u7528\u5957\u4ef6\u9054\u6210\uff0c\u4f8b\u5982 nodejs \u7684",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/en/resources/middleware/csurf.html"},"csurf"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Double submit cookie: \u524d\u7aef\u96a8\u6a5f\u7522\u751f\u4e00\u500b CSRF token\uff0c\u540c\u6642\u653e\u9032 cookie \u4ee5\u53ca\u6bcf\u500b request header\uff0cserver \u6aa2\u67e5\u5169\u908a\u7684 token \u662f\u76f8\u540c\u7684\u624d\u63a5\u53d7\u8acb\u6c42\uff0c\u56e0\u70ba\u700f\u89bd\u5668\u7684\u8a2d\u8a08\u99ed\u5ba2\u7121\u6cd5\u5c07\u507d\u9020\u7684 token \u653e\u9032\u4f60\u7684 domain \u7684 cookie\uff0c\u6b64\u6642\u8de8 domain \u8acb\u6c42\u6240\u5e36\u7684 cookie \u4e2d\u4e00\u5b9a\u6c92\u6709\u6b63\u78ba\u7684 CSRF token\u3002"))),(0,o.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u63d0\u4f9b\u4e86 5 \u500b\u9632\u79a6 CSRF \u653b\u64ca\u7684\u65b9\u6cd5\uff0c\u5be6\u52d9\u4e0a\u4e5f\u8981\u8003\u616e\u54ea\u4e9b\u65b9\u6cd5\u9069\u7528\u5728\u4f60\u7684\u670d\u52d9\u4e2d\uff0c\u53ef\u4ee5\u55ae\u7368\u4f7f\u7528\u4e5f\u53ef\u4ee5\u7d44\u5408\u4f7f\u7528\u5f97\u5230\u66f4\u597d\u7684\u4fdd\u8b77\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u5c0d\u65bc\u4f7f\u7528\u8005\u4f86\u8aaa\u990a\u6210\u767b\u51fa\u7db2\u7ad9\u7684\u597d\u7fd2\u6163\u4e5f\u53ef\u4ee5\u964d\u4f4e\u9047\u5230\u7684\u98a8\u96aa\u5594\uff01"),(0,o.kt)("p",null,"\u5982\u679c\u6709\u4efb\u4f55\u554f\u984c\u6216\u5efa\u8b70\u6b61\u8fce\u8207\u6211\u806f\u7d61\u8a0e\u8ad6\u3002"),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@Tommmmm/csrf-%E6%94%BB%E6%93%8A%E5%8E%9F%E7%90%86-d0f2a51810ca"},"CSRF \u653b\u64ca\u539f\u7406")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite"},"SameSite cookies - HTTP | MDN")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tech-blog.cymetrics.io/posts/jo/zerobased-cross-site-request-forgery/"},"\u96f6\u57fa\u790e\u8cc7\u5b89\u7cfb\u5217\uff08\u4e00\uff09-\u8a8d\u8b58 CSRF\uff08Cross Site Request Forgery\uff09")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.trustedsec.com/blog/setting-the-referer-header-using-javascript/"},"Setting the 'Referer' Header Using JavaScript - TrustedSec")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/blog/cross-site-request-forgery-csrf/#CSRF-Defenses-Strategies"},"Prevent Cross-Site Request Forgery (CSRF) Attacks")))}m.isMDXComponent=!0},6639:function(e,t,r){"use strict";t.Z=r.p+"assets/images/charles-deluvio-pjAH2Ax4uWk-unsplash-5d822d3b9ed5acca5dee755a4078fff7.jpg"}}]);