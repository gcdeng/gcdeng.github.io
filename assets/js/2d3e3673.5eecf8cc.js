"use strict";(self.webpackChunkgcdeng_github_io=self.webpackChunkgcdeng_github_io||[]).push([[6908],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6166:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={slug:"a-guidebook-to-optimize-web-vitals",title:"[\u524d\u7aef\u512a\u5316\u7cfb\u5217]Web Vitals\u512a\u5316\u65b9\u6cd5\u61f6\u4eba\u5305",description:"\u9019\u7bc7\u6587\u7ae0\u4ecb\u7d39\u4e86 Web Vitals\u3001\u6e2c\u91cf\u65b9\u5f0f\u4ee5\u53ca\u512a\u5316\u65b9\u6cd5\uff0c\u5176\u4e2d\u512a\u5316\u65b9\u6cd5\u6703\u96a8\u8457\u81ea\u5df1\u7684\u5be6\u52d9\u7d93\u9a57\u53ca\u7814\u7a76\u6301\u7e8c\u66f4\u65b0\uff0c\u5e0c\u671b\u53ef\u4ee5\u6210\u70ba\u512a\u5316\u6548\u80fd\u7528\u7684\u61f6\u4eba\u5305\uff0c\u5728\u958b\u767c\u529f\u80fd\u6642\u4f5c\u70ba\u63d0\u9192\u81ea\u5df1\u6703\u5f71\u97ff\u6548\u80fd\u7684\u6ce8\u610f\u4e8b\u9805\uff0c\u8981\u512a\u5316\u7db2\u7ad9\u6642\u4e5f\u65b9\u4fbf\u56de\u4f86\u627e\u5be6\u4f5c\u7684\u65b9\u5411\u3002",image:"/img/2021-11-14-a-guidebook-to-optimize-web-vitals-assets/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",authors:"ericdeng",tags:["performance","web vitals"],keywords:["performance","web vitals"]},c=void 0,u={permalink:"/blog/a-guidebook-to-optimize-web-vitals",source:"@site/blog/2021-11-14-a-guidebook-to-optimize-web-vitals.md",title:"[\u524d\u7aef\u512a\u5316\u7cfb\u5217]Web Vitals\u512a\u5316\u65b9\u6cd5\u61f6\u4eba\u5305",description:"\u9019\u7bc7\u6587\u7ae0\u4ecb\u7d39\u4e86 Web Vitals\u3001\u6e2c\u91cf\u65b9\u5f0f\u4ee5\u53ca\u512a\u5316\u65b9\u6cd5\uff0c\u5176\u4e2d\u512a\u5316\u65b9\u6cd5\u6703\u96a8\u8457\u81ea\u5df1\u7684\u5be6\u52d9\u7d93\u9a57\u53ca\u7814\u7a76\u6301\u7e8c\u66f4\u65b0\uff0c\u5e0c\u671b\u53ef\u4ee5\u6210\u70ba\u512a\u5316\u6548\u80fd\u7528\u7684\u61f6\u4eba\u5305\uff0c\u5728\u958b\u767c\u529f\u80fd\u6642\u4f5c\u70ba\u63d0\u9192\u81ea\u5df1\u6703\u5f71\u97ff\u6548\u80fd\u7684\u6ce8\u610f\u4e8b\u9805\uff0c\u8981\u512a\u5316\u7db2\u7ad9\u6642\u4e5f\u65b9\u4fbf\u56de\u4f86\u627e\u5be6\u4f5c\u7684\u65b9\u5411\u3002",date:"2021-11-14T00:00:00.000Z",formattedDate:"November 14, 2021",tags:[{label:"performance",permalink:"/blog/tags/performance"},{label:"web vitals",permalink:"/blog/tags/web-vitals"}],readingTime:14.34,truncated:!0,authors:[{name:"Eric Deng",url:"/",imageURL:"/img/ericdeng.jpg",key:"ericdeng"}],prevItem:{title:"React Hooks \u7e3d\u6574\u7406\u7b46\u8a18",permalink:"/blog/react-hooks"},nextItem:{title:"Prerender.io\u5982\u4f55\u5e6b\u52a9CSR\u7684SEO - \u539f\u7406\u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78",permalink:"/blog/solve-seo-problems-with-prerenderio"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u4ecb\u7d39\u4e86 Web Vitals\u3001\u6e2c\u91cf\u65b9\u5f0f\u4ee5\u53ca\u512a\u5316\u65b9\u6cd5\uff0c\u5176\u4e2d\u512a\u5316\u65b9\u6cd5\u6703\u96a8\u8457\u81ea\u5df1\u7684\u5be6\u52d9\u7d93\u9a57\u53ca\u7814\u7a76\u6301\u7e8c\u66f4\u65b0\uff0c\u5e0c\u671b\u53ef\u4ee5\u6210\u70ba\u512a\u5316\u6548\u80fd\u7528\u7684\u61f6\u4eba\u5305\uff0c\u5728\u958b\u767c\u529f\u80fd\u6642\u4f5c\u70ba\u63d0\u9192\u81ea\u5df1\u6703\u5f71\u97ff\u6548\u80fd\u7684\u6ce8\u610f\u4e8b\u9805\uff0c\u8981\u512a\u5316\u7db2\u7ad9\u6642\u4e5f\u65b9\u4fbf\u56de\u4f86\u627e\u5be6\u4f5c\u7684\u65b9\u5411\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",src:r(8900).Z}),"Photo by Kate Stone Matheson on Unsplash"))}m.isMDXComponent=!0},8900:function(e,t,r){t.Z=r.p+"assets/images/kate-stone-matheson-uy5t-CJuIK4-unsplash-1e16fdb72a2aa4d88f05b08f360d19ad.jpg"}}]);