"use strict";(self.webpackChunkgcdeng_github_io=self.webpackChunkgcdeng_github_io||[]).push([[7172],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,h=k["".concat(p,".").concat(c)]||k[c]||u[c]||i;return a?l.createElement(h,n(n({ref:t},m),{},{components:a})):l.createElement(h,n({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var s=2;s<i;s++)n[s]=a[s];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3592:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return m},toc:function(){return u},default:function(){return c}});var l=a(3117),r=a(102),i=(a(7294),a(3905)),n=["components"],o={slug:"a-guidebook-to-optimize-web-vitals",title:"[\u524d\u7aef\u512a\u5316\u7cfb\u5217]Web Vitals\u512a\u5316\u65b9\u6cd5\u61f6\u4eba\u5305",description:"\u9019\u7bc7\u6587\u7ae0\u4ecb\u7d39\u4e86 Web Vitals\u3001\u6e2c\u91cf\u65b9\u5f0f\u4ee5\u53ca\u512a\u5316\u65b9\u6cd5\uff0c\u5176\u4e2d\u512a\u5316\u65b9\u6cd5\u6703\u96a8\u8457\u81ea\u5df1\u7684\u5be6\u52d9\u7d93\u9a57\u53ca\u7814\u7a76\u6301\u7e8c\u66f4\u65b0\uff0c\u5e0c\u671b\u53ef\u4ee5\u6210\u70ba\u512a\u5316\u6548\u80fd\u7528\u7684\u61f6\u4eba\u5305\uff0c\u5728\u958b\u767c\u529f\u80fd\u6642\u4f5c\u70ba\u63d0\u9192\u81ea\u5df1\u6703\u5f71\u97ff\u6548\u80fd\u7684\u6ce8\u610f\u4e8b\u9805\uff0c\u8981\u512a\u5316\u7db2\u7ad9\u6642\u4e5f\u65b9\u4fbf\u56de\u4f86\u627e\u5be6\u4f5c\u7684\u65b9\u5411\u3002",image:"/img/2021-11-14-a-guidebook-to-optimize-web-vitals-assets/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",authors:"ericdeng",tags:["performance","web vitals"],keywords:["performance","web vitals"]},p=void 0,s={permalink:"/blog/a-guidebook-to-optimize-web-vitals",source:"@site/blog/2021-11-14-a-guidebook-to-optimize-web-vitals.md",title:"[\u524d\u7aef\u512a\u5316\u7cfb\u5217]Web Vitals\u512a\u5316\u65b9\u6cd5\u61f6\u4eba\u5305",description:"\u9019\u7bc7\u6587\u7ae0\u4ecb\u7d39\u4e86 Web Vitals\u3001\u6e2c\u91cf\u65b9\u5f0f\u4ee5\u53ca\u512a\u5316\u65b9\u6cd5\uff0c\u5176\u4e2d\u512a\u5316\u65b9\u6cd5\u6703\u96a8\u8457\u81ea\u5df1\u7684\u5be6\u52d9\u7d93\u9a57\u53ca\u7814\u7a76\u6301\u7e8c\u66f4\u65b0\uff0c\u5e0c\u671b\u53ef\u4ee5\u6210\u70ba\u512a\u5316\u6548\u80fd\u7528\u7684\u61f6\u4eba\u5305\uff0c\u5728\u958b\u767c\u529f\u80fd\u6642\u4f5c\u70ba\u63d0\u9192\u81ea\u5df1\u6703\u5f71\u97ff\u6548\u80fd\u7684\u6ce8\u610f\u4e8b\u9805\uff0c\u8981\u512a\u5316\u7db2\u7ad9\u6642\u4e5f\u65b9\u4fbf\u56de\u4f86\u627e\u5be6\u4f5c\u7684\u65b9\u5411\u3002",date:"2021-11-14T00:00:00.000Z",formattedDate:"November 14, 2021",tags:[{label:"performance",permalink:"/blog/tags/performance"},{label:"web vitals",permalink:"/blog/tags/web-vitals"}],readingTime:14.34,truncated:!0,authors:[{name:"Eric Deng",url:"/",imageURL:"/img/ericdeng.jpg",key:"ericdeng"}],prevItem:{title:"React Hooks \u7e3d\u6574\u7406\u7b46\u8a18",permalink:"/blog/react-hooks"},nextItem:{title:"Prerender.io\u5982\u4f55\u5e6b\u52a9CSR\u7684SEO - \u539f\u7406\u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78",permalink:"/blog/solve-seo-problems-with-prerenderio"}},m={authorsImageUrls:[void 0]},u=[{value:"\u76ee\u9304",id:"\u76ee\u9304",children:[],level:2},{value:"\u4ec0\u9ebc\u662f Web Vitals?",id:"\u4ec0\u9ebc\u662f-web-vitals",children:[],level:2},{value:"\u5982\u4f55\u6e2c\u91cf\u7db2\u7ad9\u7684 Web Vitals\uff1f",id:"\u5982\u4f55\u6e2c\u91cf\u7db2\u7ad9\u7684-web-vitals",children:[{value:"\u5be6\u9a57\u6a21\u64ec\u6e2c\u91cf(In the lab)",id:"\u5be6\u9a57\u6a21\u64ec\u6e2c\u91cfin-the-lab",children:[],level:3},{value:"\u5be6\u6e2c(In the field)",id:"\u5be6\u6e2cin-the-field",children:[],level:3},{value:"\u5982\u4f55\u5c07\u6e2c\u91cf\u5de5\u5177\u5c0e\u5165\u7522\u54c1\u958b\u767c\u6d41\u7a0b\u4e2d",id:"\u5982\u4f55\u5c07\u6e2c\u91cf\u5de5\u5177\u5c0e\u5165\u7522\u54c1\u958b\u767c\u6d41\u7a0b\u4e2d",children:[],level:3}],level:2},{value:"\u8f09\u5165\u901f\u5ea6(Loading Performance)",id:"\u8f09\u5165\u901f\u5ea6loading-performance",children:[{value:"Largest Contentful Paint (LCP)",id:"largest-contentful-paint-lcp",children:[],level:3},{value:"First Contentful Paint (FCP)",id:"first-contentful-paint-fcp",children:[],level:3},{value:"Time to First Byte (TTFB)",id:"time-to-first-byte-ttfb",children:[],level:3},{value:"\u512a\u5316\u65b9\u6cd5",id:"\u512a\u5316\u65b9\u6cd5",children:[],level:3}],level:2},{value:"\u4e92\u52d5\u53cd\u61c9\u80fd\u529b(Interactivity)",id:"\u4e92\u52d5\u53cd\u61c9\u80fd\u529binteractivity",children:[{value:"First Input Delay (FID)",id:"first-input-delay-fid",children:[],level:3},{value:"Time to Interactive (TTI)",id:"time-to-interactive-tti",children:[],level:3},{value:"Total Blocking Time (TBT)",id:"total-blocking-time-tbt",children:[],level:3},{value:"\u512a\u5316\u65b9\u6cd5",id:"\u512a\u5316\u65b9\u6cd5-1",children:[],level:3}],level:2},{value:"\u8996\u89ba\u7a69\u5b9a\u6027(Visual Stability)",id:"\u8996\u89ba\u7a69\u5b9a\u6027visual-stability",children:[{value:"Cumulative Layout Shift (CLS)",id:"cumulative-layout-shift-cls",children:[],level:3},{value:"Speed Index (SI)",id:"speed-index-si",children:[],level:3},{value:"\u512a\u5316\u65b9\u6cd5",id:"\u512a\u5316\u65b9\u6cd5-2",children:[],level:3}],level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],k={toc:u};function c(e){var t=e.components,o=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,l.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u4ecb\u7d39\u4e86 Web Vitals\u3001\u6e2c\u91cf\u65b9\u5f0f\u4ee5\u53ca\u512a\u5316\u65b9\u6cd5\uff0c\u5176\u4e2d\u512a\u5316\u65b9\u6cd5\u6703\u96a8\u8457\u81ea\u5df1\u7684\u5be6\u52d9\u7d93\u9a57\u53ca\u7814\u7a76\u6301\u7e8c\u66f4\u65b0\uff0c\u5e0c\u671b\u53ef\u4ee5\u6210\u70ba\u512a\u5316\u6548\u80fd\u7528\u7684\u61f6\u4eba\u5305\uff0c\u5728\u958b\u767c\u529f\u80fd\u6642\u4f5c\u70ba\u63d0\u9192\u81ea\u5df1\u6703\u5f71\u97ff\u6548\u80fd\u7684\u6ce8\u610f\u4e8b\u9805\uff0c\u8981\u512a\u5316\u7db2\u7ad9\u6642\u4e5f\u65b9\u4fbf\u56de\u4f86\u627e\u5be6\u4f5c\u7684\u65b9\u5411\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",src:a(8900).Z}),"Photo by Kate Stone Matheson on Unsplash"),(0,i.kt)("h2",{id:"\u76ee\u9304"},"\u76ee\u9304"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E4%BB%80%E9%BA%BC%E6%98%AF-web-vitals"},"\u4ec0\u9ebc\u662f Web Vitals?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E6%B8%AC%E9%87%8F%E7%B6%B2%E7%AB%99%E7%9A%84-web-vitals%EF%BC%9F"},"\u5982\u4f55\u6e2c\u91cf\u7db2\u7ad9\u7684 Web Vitals\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%AF%A6%E9%A9%97%E6%A8%A1%E6%93%AC%E6%B8%AC%E9%87%8Fin-the-lab"},"\u5be6\u9a57\u6a21\u64ec\u6e2c\u91cf(In the lab)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%AF%A6%E6%B8%ACin-the-field"},"\u5be6\u6e2c(In the field)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%B0%87%E6%B8%AC%E9%87%8F%E5%B7%A5%E5%85%B7%E5%B0%8E%E5%85%A5%E7%94%A2%E5%93%81%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B%E4%B8%AD"},"\u5982\u4f55\u5c07\u6e2c\u91cf\u5de5\u5177\u5c0e\u5165\u7522\u54c1\u958b\u767c\u6d41\u7a0b\u4e2d")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E8%BC%89%E5%85%A5%E9%80%9F%E5%BA%A6loading-performance"},"\u8f09\u5165\u901f\u5ea6(Loading Performance)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#largest-contentful-paint-lcp"},"Largest Contentful Paint (LCP)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-contentful-paint-fcp"},"First Contentful Paint (FCP)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#time-to-first-byte-ttfb"},"Time to First Byte (TTFB)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%84%AA%E5%8C%96%E6%96%B9%E6%B3%95"},"\u512a\u5316\u65b9\u6cd5")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E4%BA%92%E5%8B%95%E5%8F%8D%E6%87%89%E8%83%BD%E5%8A%9Binteractivity"},"\u4e92\u52d5\u53cd\u61c9\u80fd\u529b(Interactivity)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-input-delay-fid"},"First Input Delay (FID)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#time-to-interactive-tti"},"Time to Interactive (TTI)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#total-blocking-time-tbt"},"Total Blocking Time (TBT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%84%AA%E5%8C%96%E6%96%B9%E6%B3%95-1"},"\u512a\u5316\u65b9\u6cd5")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E8%A6%96%E8%A6%BA%E7%A9%A9%E5%AE%9A%E6%80%A7visual-stability"},"\u8996\u89ba\u7a69\u5b9a\u6027(Visual Stability)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cumulative-layout-shift-cls"},"Cumulative Layout Shift (CLS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#speed-index-si"},"Speed Index (SI)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E5%84%AA%E5%8C%96%E6%96%B9%E6%B3%95-2"},"\u512a\u5316\u65b9\u6cd5")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%E7%B8%BD%E7%B5%90"},"\u7e3d\u7d50")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reference"},"Reference"))),(0,i.kt)("h2",{id:"\u4ec0\u9ebc\u662f-web-vitals"},"\u4ec0\u9ebc\u662f Web Vitals?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Web Vitals"),"\u662f\u7531 Google \u63d0\u51fa\u8861\u91cf\u7db2\u7ad9\u6548\u80fd\u53ca\u4f7f\u7528\u9ad4\u9a57\u7684\u91cf\u5316\u6307\u6a19\uff0c\u53ef\u4ee5\u5e6b\u52a9\u958b\u767c\u8005\u505a\u70ba\u512a\u5316\u7db2\u7ad9\u7684\u53c3\u8003\u3002\u4ee5\u4f7f\u7528\u8005\u9ad4\u9a57\u70ba\u4e2d\u5fc3\u63d0\u51fa\u4e86\u4e09\u500b\u6539\u5584\u9762\u5411\uff0c\u6bcf\u500b\u9762\u5411\u6709\u4ee5\u4e0b\u5404\u81ea\u5c0d\u61c9\u7684\u6307\u6a19\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8f09\u5165\u901f\u5ea6(Loading Performance)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Largest Contentful Paint (LCP)")),(0,i.kt)("li",{parentName:"ol"},"First Contentful Paint (FCP)"),(0,i.kt)("li",{parentName:"ol"},"Time to First Byte (TTFB)"))),(0,i.kt)("li",{parentName:"ol"},"\u4e92\u52d5\u53cd\u61c9\u80fd\u529b(Interactivity)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"First Input Delay (FID)")),(0,i.kt)("li",{parentName:"ol"},"Time to Interactive (TTI)"),(0,i.kt)("li",{parentName:"ol"},"Total Blocking Time (TBT)"))),(0,i.kt)("li",{parentName:"ol"},"\u8996\u89ba\u7a69\u5b9a\u6027(Visual Stability)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cumulative Layout Shift (CLS)")),(0,i.kt)("li",{parentName:"ol"},"Speed Index (SI)")))),(0,i.kt)("p",null,"\u5176\u4e2d",(0,i.kt)("strong",{parentName:"p"},"LCP, FID, CLS"),"\u662f\u4e09\u500b\u8f03\u70ba\u91cd\u8981\u4ee3\u8868\u5404\u9762\u5411\u7684",(0,i.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u6307\u6a19(Core Web Vitals)"),"\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u6e2c\u91cf\u7db2\u7ad9\u7684-web-vitals"},"\u5982\u4f55\u6e2c\u91cf\u7db2\u7ad9\u7684 Web Vitals\uff1f"),(0,i.kt)("p",null,"\u6709\u5f88\u591a\u5de5\u5177\u53ef\u4ee5\u5e6b\u6211\u5011\u89e3\u6790\u7db2\u7ad9\u6548\u80fd\uff0c\u4e26\u4e14\u7522\u751f\u51fa\u9019\u4e9b\u91cf\u5316\u6307\u6a19\u5206\u6578\u4ee5\u53ca\u6539\u5584\u5efa\u8b70\u7684\u5206\u6790\u5831\u544a\uff0c\u4f9d\u7167\u74b0\u5883\u5206\u6210\u5169\u7a2e\u6e2c\u91cf\u65b9\u5f0f\uff0c\u4e0d\u540c\u65b9\u5f0f\u6709\u5404\u81ea\u7684\u5de5\u5177\uff1a"),(0,i.kt)("h3",{id:"\u5be6\u9a57\u6a21\u64ec\u6e2c\u91cfin-the-lab"},"\u5be6\u9a57\u6a21\u64ec\u6e2c\u91cf(In the lab)"),(0,i.kt)("p",null,"\u6a21\u64ec\u6e2c\u91cf\u5de5\u5177\u6703\u53bb\u6a21\u64ec\u4f7f\u7528\u8005\u7684\u64cd\u4f5c\u884c\u70ba\uff0c\u4f7f\u7528\u6a21\u64ec\u8cc7\u6599\u8a55\u5206\uff0c\u63d0\u4f9b\u53ef\u4ee5\u91cd\u73fe\u7684\u7d50\u679c\uff0c\u9069\u5408\u7528\u5728\u7522\u54c1\u958b\u767c\u968e\u6bb5\u505a\u5206\u6790\u53ca\u9a57\u8b49\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/lighthouse/"},"Lighthouse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoogleChrome/lighthouse-ci"},"Lighthouse CI"),"\uff0c\u8a2d\u5b9a\u5728 PR \u6642\u81ea\u52d5\u5316\u8dd1 Lighthouse \u7522\u751f\u6e2c\u91cf\u5831\u544a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/evaluate-performance/"},"Chrome DevTools Performance panel"),"\uff0c\u53ef\u4ee5\u9304\u88fd\u756b\u9762\uff0c\u66f4\u6df1\u5165\u91dd\u5c0d\u67d0\u6bb5 frame \u505a\u512a\u5316\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://webpagetest.org/"},"WebPageTest"))),(0,i.kt)("h3",{id:"\u5be6\u6e2cin-the-field"},"\u5be6\u6e2c(In the field)"),(0,i.kt)("p",null,"\u4e5f\u88ab\u7a31\u70ba Real User Monitoring(RUM)\uff0c\u5be6\u6e2c\u5de5\u5177\u6703\u4f7f\u7528\u5f9e\u771f\u5be6\u4f7f\u7528\u8005\u8490\u96c6\u4f86\u7684\u533f\u540d\u4f7f\u7528\u884c\u70ba\u8cc7\u6599\u8a55\u5206\uff0c\u53ef\u4ee5\u77e5\u9053\u4f7f\u7528\u8005\u771f\u5be6\u9ad4\u9a57\u72c0\u6cc1\uff0c\u4f46\u5206\u6578\u4e5f\u6703\u53d7\u4f7f\u7528\u8005\u7576\u4e0b\u88dd\u7f6e\u5f71\u97ff\uff0c\u4f8b\u5982\u4f7f\u7528\u8005\u7684\u7db2\u8def\u72c0\u6cc1\u4e0d\u4f73\uff0c\u6216\u662f\u6bcf\u500b\u4f7f\u7528\u8005\u6703\u986f\u793a\u4e0d\u540c\u7684\u5ba2\u88fd\u5316\u8cc7\u6599\uff0c\u90fd\u6703\u5f71\u97ff\u6e2c\u91cf\u8a55\u5206\uff0c\u56e0\u6b64\u53ef\u80fd\u6703\u8ddf\u6a21\u64ec\u6e2c\u91cf\u7d50\u679c\u6709\u5dee\u8ddd\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/speed/pagespeed/insights/?hl=zh-TW"},"PageSpeed Insights")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://search.google.com/search-console/about"},"Search Console")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-user-experience-report"},"Chrome User Experience Report")," API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/perf-mon"},"Firebase Performance Monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoogleChrome/web-vitals-extension"},"Web Vitals Chrome Extension"))),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u66f4\u8a73\u7d30\u7684\u4f7f\u7528\u884c\u70ba\u8cc7\u6599\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/web-vitals"},"web-vitals")," javascript library\uff0c\u5728\u81ea\u5df1\u7684\u5c08\u6848\u4e2d\u5be6\u4f5c Real User Monitoring\uff0c\u4f86\u89c0\u5bdf\u4f7f\u7528\u8005\u5be6\u969b\u64cd\u4f5c\u7d30\u7bc0\uff0c\u9a57\u8b49\u5728\u7522\u54c1\u74b0\u5883\u4e2d\u6548\u80fd\u554f\u984c\u662f\u5426\u6709\u6539\u5584\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u9019\u7bc7\u6587\u7ae0\u4e0d\u6703\u592a\u8a73\u7d30\u89e3\u91cb\u6bcf\u500b\u6e2c\u91cf\u5de5\u5177\u8a08\u7b97\u6307\u6a19\u5206\u6578\u7684\u516c\u5f0f\uff0c\u5982\u679c\u6709\u8208\u8da3\u53ef\u4ee5\u53c3\u8003\u5404\u6307\u6a19\u7684\u6a19\u984c\u8d85\u9023\u7d50\u3002")),(0,i.kt)("h3",{id:"\u5982\u4f55\u5c07\u6e2c\u91cf\u5de5\u5177\u5c0e\u5165\u7522\u54c1\u958b\u767c\u6d41\u7a0b\u4e2d"},"\u5982\u4f55\u5c07\u6e2c\u91cf\u5de5\u5177\u5c0e\u5165\u7522\u54c1\u958b\u767c\u6d41\u7a0b\u4e2d"),(0,i.kt)("p",null,"\u53c3\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/i18n/en/vitals-tools/"},"https://web.dev/i18n/en/vitals-tools/")," \u63d0\u5230\u7684\u6d41\u7a0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Search Console \u7522\u751f\u6bcf\u500b\u9801\u9762\u7684\u6838\u5fc3\u6307\u6a19\u6e2c\u91cf\u5831\u544a\uff0c\u627e\u5230\u54ea\u500b\u9801\u9762\u9700\u8981\u7279\u5225\u9032\u884c\u512a\u5316\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u627e\u5230\u9700\u8981\u512a\u5316\u7684\u9801\u9762 URL\uff0c\u4f7f\u7528 PageSpeed Insights \u6216\u5176\u4ed6 RUM \u5de5\u5177\u5f97\u5230\u5305\u542b lab \u53ca field \u7684\u8a73\u7d30\u6307\u6a19\u6e2c\u91cf\u7d50\u679c\u8ddf\u512a\u5316\u5efa\u8b70\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u672c\u5730\u958b\u767c\u74b0\u5883\u914d\u5408\u512a\u5316\u5efa\u8b70\u9032\u884c\u4fee\u6b63\uff0c\u914d\u5408 Lighthouse \u8ddf Chrome DevTools \u505a\u9a57\u8b49\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Lighthouse CI \u5728 PR \u81ea\u52d5\u5316\u6e2c\u91cf\uff0c\u901a\u904e\u8a2d\u5b9a\u7684\u6307\u6a19\u5206\u6578\u9580\u6abb\u5f8c\u624d merge \u9032\u4e3b\u7dda\u7136\u5f8c deploy production\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u56de\u5230\u6b65\u9a5f 1 \u8ddf 2\uff0c\u9a57\u8b49\u771f\u5be6\u7522\u54c1\u74b0\u5883\u4e2d\u7684\u6307\u6a19\u5206\u6578\u662f\u5426\u771f\u7684\u6709\u512a\u5316\u6210\u529f\u3002")),(0,i.kt)("h2",{id:"\u8f09\u5165\u901f\u5ea6loading-performance"},"\u8f09\u5165\u901f\u5ea6(Loading Performance)"),(0,i.kt)("p",null,"\u76ee\u6a19\u662f\u8981\u8a55\u4f30\u7db2\u9801\u53ef\u4ee5\u591a\u5feb\u8f09\u5165\u5b8c\u6210\u4e26\u4e14\u6e32\u67d3\u597d\u756b\u9762\u3002"),(0,i.kt)("h3",{id:"largest-contentful-paint-lcp"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/lcp/"},"Largest Contentful Paint (LCP)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"core web vital")),(0,i.kt)("p",null,"\u5f9e\u7db2\u9801\u958b\u59cb\u8f09\u5165\u5230\u6700\u5927\u9762\u7a4d\u7684\u5143\u7d20\u6e32\u67d3(render)\u5230\u756b\u9762\u4e0a\u6240\u82b1\u7684\u6642\u9593\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LCP.svg",src:a(8770).Z})),(0,i.kt)("h3",{id:"first-contentful-paint-fcp"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/fcp/"},"First Contentful Paint (FCP)")),(0,i.kt)("p",null,"\u5f9e\u7db2\u9801\u958b\u59cb\u8f09\u5165\u5230\u4efb\u4f55\u4e00\u500b\u5143\u7d20\u6e32\u67d3\u5230\u756b\u9762\u4e0a\u6240\u82b1\u7684\u6642\u9593\u3002"),(0,i.kt)("h3",{id:"time-to-first-byte-ttfb"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/ttfb/"},"Time to First Byte (TTFB)")),(0,i.kt)("p",null,"\u700f\u89bd\u5668\u5c0d\u4f3a\u670d\u5668\u767c\u51fa\u8acb\u6c42(ex: http api request)\u5f8c\u5230\u6536\u5230\u56de\u61c9\u8cc7\u6599(\u7b2c\u4e00\u500b byte)\u6240\u82b1\u7684\u6642\u9593\u3002"),(0,i.kt)("h3",{id:"\u512a\u5316\u65b9\u6cd5"},"\u512a\u5316\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u52a0\u901f\u53d6\u5f97\u8cc7\u6e90\u7684\u6642\u9593",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cache",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CDN caching",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u4f7f\u7528 SSG \u5c07\u975c\u614b HTML cache \u5728 CDN"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"},"HTTP caching")),(0,i.kt)("li",{parentName:"ul"},"service worker ",(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/workbox/modules/workbox-precaching"},"Workbox Precaching")),(0,i.kt)("li",{parentName:"ul"},"server caching\uff0c\u5c07\u975c\u614b\u6a94\u6848 cache \u5728 server-side disk",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"reverse proxies (Varnish, nginx)"),(0,i.kt)("li",{parentName:"ul"},"cloud provider (Firebase, AWS, Azure)"),(0,i.kt)("li",{parentName:"ul"},"CDN edge servers"))))),(0,i.kt)("li",{parentName:"ul"},"\u5728\u771f\u6b63\u9700\u8981\u57f7\u884c\u4e4b\u524d\u9810\u5148\u4e0b\u8f09\u597d\u8cc7\u6e90\uff0c\u8981\u7528\u6642\u53ef\u4ee5\u76f4\u63a5\u958b\u59cb\u57f7\u884c\uff0c\u4f7f\u7528 Resource Hints ",(0,i.kt)("inlineCode",{parentName:"li"},"preload"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"prefetch"),"\uff0c\u4f8b\u5982 prefetch \u5206\u9801\u7684\u4e0b\u4e00\u9801\u6703\u7528\u5230\u7684\u8cc7\u6e90"),(0,i.kt)("li",{parentName:"ul"},"\u9810\u5148\u8207\u8cc7\u6e90\u670d\u52d9\u5668\u5efa\u7acb\u9023\u7dda\uff0c\u8981\u7528\u6642\u53ef\u4ee5\u66f4\u5feb\u4e0b\u8f09\u5230\u8cc7\u6e90\uff0c\u4f7f\u7528 Resource Hints ",(0,i.kt)("inlineCode",{parentName:"li"},"dns-prefetch"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"preconnect"),"\uff0c\u4f8b\u5982",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/optimize-lcp/#establish-third-party-connections-early"},"\u65e9\u4e00\u9ede\u8207 third-party \u5efa\u7acb\u9023\u7dda")),(0,i.kt)("li",{parentName:"ul"},"\u6e1b\u5c11 HTTP request \u6578\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u901f\u5f8c\u7aef\u4f3a\u670d\u5668\u56de\u61c9\u901f\u5ea6\uff0c\u4f8b\u5982\u512a\u5316 DB query"))),(0,i.kt)("li",{parentName:"ul"},"\u6e1b\u5c11\u8cc7\u6e90\u9ad4\u7a4d\uff0c\u66f4\u5feb\u53d6\u5f97\u53ca\u57f7\u884c\u8cc7\u6e90\u5167\u5bb9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6e1b\u5c11 server remote API response data \u9ad4\u7a4d\uff0c\u4f8b\u5982\u4e0d\u62ff\u591a\u9918\u7528\u4e0d\u5230\u7684\u8cc7\u6599"),(0,i.kt)("li",{parentName:"ul"},"dynamic import\uff0c\u5728\u9700\u8981\u7528\u5230\u6642\u624d\u8f09\u5165 module"),(0,i.kt)("li",{parentName:"ul"},"route-based code splitting\uff0c\u7279\u5b9a\u9801\u9762\u53ea\u8f09\u5165\u76f8\u95dc\u7684\u8173\u672c\u8207\u6a23\u5f0f\u6a94"),(0,i.kt)("li",{parentName:"ul"},"tree shaking"),(0,i.kt)("li",{parentName:"ul"},"partial import\uff0c\u53ea\u5f9e module \u4e2d\u8f09\u5165\u9700\u8981\u7528\u7684 function\uff0c\u4e0d\u662f\u8f09\u5165\u6574\u500b module"),(0,i.kt)("li",{parentName:"ul"},"\u6539\u5584 webpack chunk \u8a2d\u5b9a\uff0c\u6e1b\u5c11 bundle size"),(0,i.kt)("li",{parentName:"ul"},"\u6539\u5584\u5957\u4ef6\u4f7f\u7528\u65b9\u5f0f\uff0c\u76e1\u91cf\u6311\u9078\u9ad4\u7a4d\u5c0f\u7684\u5957\u4ef6\uff0c\u79fb\u9664\u591a\u9918\u5f15\u7528\u7684\u5957\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u6790 bundle size \u5de5\u5177\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/webpack-bundle-analyzer"},"Webpack Bundle Analyzer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/source-map-explorer"},"source-map-explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"},"Import Cost VSCode Extension")))),(0,i.kt)("li",{parentName:"ul"},"\u7cbe\u7c21\u7a0b\u5f0f\u78bc: \u522a\u9664\u7528\u4e0d\u5230\u7684\u7a0b\u5f0f\u78bc\u3001minify js & css"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/serve-modern-code-to-modern-browsers/"},"\u6e1b\u5c11 polyfills \u9ad4\u7a4d"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528@babel/preset-env \u53ea\u91dd\u5c0d\u8981\u652f\u63f4\u7684\u700f\u89bd\u5668\u4f7f\u7528 polyfill"))))),(0,i.kt)("li",{parentName:"ul"},"\u700f\u89bd\u5668\u5728\u4e0b\u8f09\u6216\u57f7\u884c\u8cc7\u6e90(js, css)\u6642\u6703\u66ab\u505c\u89e3\u6790 HTML DOM \u53ca\u5ef6\u9072\u6e32\u67d3\u756b\u9762(",(0,i.kt)("strong",{parentName:"li"},"render-blocking"),")\uff0c\u56e0\u6b64\u6e1b\u5c11 render-blocking \u6642\u9593\u4e5f\u662f\u4e00\u500b\u65b9\u6cd5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CSR \u56e0\u70ba\u6709\u5f88\u591a JS \u9700\u8981\u5728\u700f\u89bd\u5668\u57f7\u884c\uff0c\u5c0d LCP \u5f71\u97ff\u8f03\u5927\uff0c\u53ef\u4ee5\u8003\u616e\u6539\u6210\u4f7f\u7528 server-side rendering \u6216\u662f\u5176\u4ed6 pre-rendering \u65b9\u5f0f\uff0c\u4f46\u53ef\u80fd\u4e5f\u6703\u5c0d TTFB \u53ca TTI \u9020\u6210\u8ca0\u9762\u5f71\u97ff\uff0c\u9700\u8981\u8a55\u4f30\u662f\u5426\u9069\u5408\u81ea\u5df1\u7684\u5c08\u6848"),(0,i.kt)("li",{parentName:"ul"},"script tag \u4f7f\u7528 async \u5c6c\u6027\uff0c\u8b93 js \u53ef\u4ee5\u5728\u80cc\u666f\u4e0b\u8f09\u4e0d\u963b\u64cb\u6e32\u67d3\u756b\u9762"),(0,i.kt)("li",{parentName:"ul"},"script tag \u4f7f\u7528 defer \u5c6c\u6027\uff0c\u8b93\u975e\u95dc\u9375\u7684 js \u53ef\u4ee5\u5ef6\u9072\u57f7\u884c\u4e0d\u963b\u64cb\u6e32\u67d3\u756b\u9762"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/optimize-lcp/#defer-non-critical-css"},"\u5ef6\u9072\u8f09\u5165\u975e\u95dc\u9375\u7684 CSS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/filamentgroup/loadCSS"},"loadCSS")))),(0,i.kt)("li",{parentName:"ul"},"\u52a0\u901f\u53d6\u5f97\u8cc7\u6e90\u7684\u6642\u9593\u4ee5\u53ca\u6e1b\u5c11\u8cc7\u6e90\u9ad4\u7a4d\u4e5f\u53ef\u4ee5\u5e6b\u52a9\u6e1b\u5c11 render-blocking \u6642\u9593"))),(0,i.kt)("li",{parentName:"ul"},"\u512a\u5316\u5716\u7247",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/serve-responsive-images/"},"\u97ff\u61c9\u5f0f\u5716\u6a94"),"\uff0c\u6839\u64da\u88dd\u7f6e\u5c3a\u5bf8\u62ff\u53d6\u5c0d\u61c9\u8db3\u5920\u7684\u5716\u7247\u5c3a\u5bf8"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 WebP\u3001AVIF \u683c\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"Image Server (",(0,i.kt)("a",{parentName:"li",href:"https://cloudinary.com/"},"Cloudinary"),")"),(0,i.kt)("li",{parentName:"ul"},"lazy loading"),(0,i.kt)("li",{parentName:"ul"},"\u58d3\u7e2e\u5716\u7247(",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/use-imagemin-to-compress-images/"},"Imagemin"),")")))),(0,i.kt)("h2",{id:"\u4e92\u52d5\u53cd\u61c9\u80fd\u529binteractivity"},"\u4e92\u52d5\u53cd\u61c9\u80fd\u529b(Interactivity)"),(0,i.kt)("p",null,"\u76ee\u6a19\u662f\u8981\u8a55\u4f30\u7db2\u9801\u591a\u5feb\u53ef\u4ee5\u56de\u61c9\u4f7f\u7528\u8005\u7684\u4e92\u52d5\u884c\u70ba\uff0c\u4f8b\u5982\u6309\u4e0b\u6309\u9215\u4e4b\u5f8c\u591a\u4e45\u6703\u6709\u53cd\u61c9\u3002"),(0,i.kt)("h3",{id:"first-input-delay-fid"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/fid/"},"First Input Delay (FID)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"core web vital")),(0,i.kt)("p",null,"\u4f7f\u7528\u8005\u9996\u6b21\u8207\u7db2\u7ad9\u4e92\u52d5\uff0c\u76f4\u5230\u700f\u89bd\u5668\u56de\u61c9\u4e92\u52d5\u4e8b\u4ef6\u7684\u6642\u9593\u5dee\u3002\u9019\u500b\u6307\u6a19\u6703\u56e0\u70ba\u771f\u5be6\u4f7f\u7528\u8005\u9996\u6b21\u4e92\u52d5\u884c\u70ba\u800c\u6709\u6240\u4e0d\u540c\uff0c\u6240\u4ee5\u53ea\u80fd\u5be6\u6e2c(field)\u7121\u6cd5\u6a21\u64ec\u6e2c\u91cf(lab)\u3002\u5728\u958b\u767c\u968e\u6bb5\u56e0\u70ba\u6c92\u6709\u8fa6\u6cd5\u5be6\u6e2c\uff0c\u53ef\u4ee5\u85c9\u7531\u512a\u5316\u6709\u95dc\u806f\u6027\u7684 TBT \u6307\u6a19\u4f86\u5354\u52a9\u6539\u5584 FID\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FID.svg",src:a(8163).Z})),(0,i.kt)("h3",{id:"time-to-interactive-tti"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/tti/"},"Time to Interactive (TTI)")),(0,i.kt)("p",null,"\u5f9e\u7db2\u9801\u958b\u59cb\u8f09\u5165\u5230\u9577\u6642\u9593\u4efb\u52d9(long tasks)\u90fd\u5df2\u7d93\u7d50\u675f\u800c\u4e14\u53ef\u4ee5\u56de\u61c9\u4f7f\u7528\u8005\u4e92\u52d5\u6240\u82b1\u7684\u6642\u9593\u3002"),(0,i.kt)("p",null,"\u9577\u6642\u9593\u4efb\u52d9(long tasks)\u662f\u6307\u8d85\u904e 50ms \u7684\u4efb\u52d9\uff0c\u53ef\u80fd\u662f\u89e3\u6790 HTML \u5efa\u7acb DOM Tree\u3001\u89e3\u6790 CSS \u5957\u7528\u6a23\u5f0f\u3001\u57f7\u884c JS \u7b49\u3002"),(0,i.kt)("h3",{id:"total-blocking-time-tbt"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/tbt/"},"Total Blocking Time (TBT)")),(0,i.kt)("p",null,"\u4e3b\u57f7\u884c\u7dd2\u88ab\u9577\u6642\u9593\u4efb\u52d9(long tasks)\u963b\u585e\u7684\u7e3d\u6642\u9593\uff0c\u963b\u585e\u7684\u6642\u9593\u662f\u6307\u9577\u6642\u9593\u4efb\u52d9\u4e2d\u8d85\u904e 50ms \u7684\u6642\u9593(long task time - 50ms)\uff0c\u5c07\u6bcf\u500b long task \u963b\u585e\u6642\u9593\u505a\u7e3d\u548c\u5c31\u662f TBT\uff0c\u9019\u6bb5\u6642\u9593\u88ab\u8996\u70ba\u7121\u6cd5\u56de\u61c9\u4f7f\u7528\u8005\u4e92\u52d5\u7684\u6642\u9593\u3002"),(0,i.kt)("h3",{id:"\u512a\u5316\u65b9\u6cd5-1"},"\u512a\u5316\u65b9\u6cd5"),(0,i.kt)("p",null,"\u5ef6\u9072\u4e92\u52d5\u56de\u61c9\u6642\u9593\u7684\u4e3b\u8981\u539f\u56e0\u662f\u7e41\u91cd\u7684 js \u57f7\u884c\u4efb\u52d9\u4f54\u7528\u8457\u4e3b\u57f7\u884c\u7dd2\uff0c\u8b93\u700f\u89bd\u5668\u7121\u6cd5\u8655\u7406\u4f7f\u7528\u8005\u7684\u4e92\u52d5\u884c\u70ba\u4e8b\u4ef6\uff0c\u56e0\u6b64",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://web.dev/mainthread-work-breakdown/"},"\u6e1b\u5c11\u4e3b\u57f7\u884c\u7dd2\u8ca0\u64d4"),"\u53ef\u4ee5\u6709\u6548\u6539\u5584"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6e1b\u5c11 JS \u57f7\u884c\u6642\u9593\uff0c\u53ef\u4ee5\u53c3\u8003\u4e0a\u8ff0\u5df2\u7d93\u63d0\u5230\u7684\u65b9\u6cd5"),(0,i.kt)("li",{parentName:"ul"},"\u62c6\u5206 long task\uff0ccode-split js bundle \u62c6\u5206\u6210\u591a\u500b\u53ef\u4ee5\u975e\u540c\u6b65\u57f7\u884c\u7684\u5c0f\u6a94\u6848(chunk)\uff0c\u914d\u5408 async, defer \u5c6c\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u5ef6\u9072\u57f7\u884c\u4e0d\u91cd\u8981\u7684\u8cc7\u6e90\uff0c\u4f8b\u5982\u4f7f\u7528 script tag defer \u5c6c\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Worker"},"web workers"),"\uff0c\u8b93 js \u5728\u53e6\u4e00\u500b\u80cc\u666f\u57f7\u884c\u7dd2\u57f7\u884c\uff0c\u5957\u4ef6: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/comlink"},"Comlink")),(0,i.kt)("li",{parentName:"ul"},"\u5148\u6e96\u5099\u597d\u4e92\u52d5\u884c\u70ba\u9700\u8981\u7684\u8cc7\u6599\uff0c\u4f8b\u5982\u76e1\u91cf\u907f\u514d\u5728\u4e92\u52d5\u6642\u624d\u53bb\u6253 api fetch \u8cc7\u6599"),(0,i.kt)("li",{parentName:"ul"},"Debounce"),(0,i.kt)("li",{parentName:"ul"},"Throttle")),(0,i.kt)("h2",{id:"\u8996\u89ba\u7a69\u5b9a\u6027visual-stability"},"\u8996\u89ba\u7a69\u5b9a\u6027(Visual Stability)"),(0,i.kt)("p",null,"\u76ee\u6a19\u662f\u8981\u8a55\u4f30\u7db2\u9801\u4e0a\u7684\u5143\u7d20\u662f\u5426\u767c\u751f\u672a\u9810\u671f\u7684\u4f4d\u7f6e\u6539\u8b8a\u800c\u5f71\u97ff\u4f7f\u7528\u8005\u7684\u4e92\u52d5\u884c\u70ba\uff0c\u4f8b\u5982\u8981\u6309\u4e0b\u6309\u9215\u6642\u7a81\u7136\u8df3\u51fa\u5ee3\u544a\u3002\u4ee5\u53ca\u8a55\u4f30\u8f49\u5834\u6216\u52d5\u756b\u7684\u6e32\u67d3\u6709\u7dad\u6301\u4e00\u5b9a\u7684 frame rate\uff0c\u756b\u9762\u4e0a\u6bcf\u500b\u72c0\u614b\u7684\u6539\u8b8a\u662f\u6d41\u66a2\u7684\u3002"),(0,i.kt)("h3",{id:"cumulative-layout-shift-cls"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/cls/"},"Cumulative Layout Shift (CLS)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"core web vital")),(0,i.kt)("p",null,"\u7d2f\u8a08\u4f48\u5c40\u504f\u79fb\uff0c\u756b\u9762\u767c\u751f\u672a\u9810\u671f\u6392\u7248\u79fb\u52d5\u7684\u7a0b\u5ea6\uff0c\u4f8b\u5982\u7a81\u7136\u6ed1\u51fa\u4f86\u7684\u5ee3\u544a\u5c31\u6703\u6709\u5f88\u5927\u7684\u5f71\u97ff\uff0c\u8f03\u4f4e\u7684 CLS \u5206\u6578\u53ef\u4ee5\u6709\u52a9\u65bc\u8996\u89ba\u9ad4\u9a57\u4e0a\u7684\u8212\u9069\u5ea6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CLS.svg",src:a(3980).Z})),(0,i.kt)("h3",{id:"speed-index-si"},(0,i.kt)("a",{parentName:"h3",href:"https://web.dev/speed-index/"},"Speed Index (SI)")),(0,i.kt)("p",null,"\u7db2\u9801\u8f09\u5165\u671f\u9593\u5167\u5bb9\u80fd\u591a\u5feb\u88ab\u4f7f\u7528\u8005\u770b\u5230\uff0c\u7528\u4f86\u8861\u91cf\u8996\u89ba\u7684\u6d41\u66a2\u6027\u3002\u6e2c\u91cf\u5de5\u5177\u6703\u5728\u7db2\u9801\u8f09\u5165\u671f\u9593\u9304\u88fd\u5f71\u7247\uff0c\u8a08\u7b97\u6bcf\u500b frame \u5728\u8996\u89ba\u4e0a\u7684\u5167\u5bb9\u5b8c\u6210\u9032\u5ea6\u3002"),(0,i.kt)("h3",{id:"\u512a\u5316\u65b9\u6cd5-2"},"\u512a\u5316\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"img, video, iframe \u8a2d\u5b9a width, height \u5c6c\u6027\uff0c\u6216\u662f",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/optimize-cls/#images-without-dimensions"},"\u5bec\u9ad8\u6bd4")),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u5728\u73fe\u6709\u5167\u5bb9\u4e0a\u65b9\u63d2\u5165\u52d5\u614b\u8f09\u5165\u7684\u5167\u5bb9\uff0c\u5c0e\u81f4\u63a8\u64e0\u5230\u5176\u4ed6\u5143\u4ef6\u7684\u6392\u7248\uff0c\u53ef\u4ee5\u5148\u9810\u7559\u597d\u9700\u8981\u7684\u7a7a\u9593(",(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/aspect-ratio-boxes/"},"CSS aspect ratio boxes"),")\uff0c\u6216\u662f\u5c07\u53d7\u5f71\u97ff\u7684\u6392\u7248\u79fb\u5230\u53ef\u8996\u7bc4\u570d\u4e4b\u5916"),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u7a81\u7136\u79fb\u52d5\u6216\u84cb\u677f\u7684\u5167\u5bb9\uff0c\u4f8b\u5982\u5ee3\u544a\u7a81\u7136\u8df3\u51fa\u4f86"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/optimize-cls/#web-fonts-causing-foutfoit"},"\u9632\u6b62 FOIT (flash of invisible text) \u6587\u5b57\u7a81\u7136\u51fa\u73fe\u3001FOUT (flash of unstyled text) \u5b57\u9ad4\u7a81\u7136\u6539\u8b8a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"<link rel=preload>")," \u63d0\u65e9\u4e0b\u8f09\u5b57\u9ad4\uff0c@font-face \u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"li"},"font-display: optional")," [",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/preload-optional-fonts/"},"\u53c3\u8003"),"]"),(0,i.kt)("li",{parentName:"ul"},"google fonts url \u52a0\u4e0a",(0,i.kt)("inlineCode",{parentName:"li"},"&display=swap")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/optimize-cls/#animations"},"\u76e1\u91cf\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"a"},"transform"),"\u505a\u52d5\u756b"),"\uff0c\u700f\u89bd\u5668\u904b\u7b97\u6210\u672c\u8f03\u4f4e")),(0,i.kt)("p",null,"\u5728\u5be6\u4f5c\u8996\u89ba\u7a69\u5b9a\u6027\u7684\u6539\u5584\u901a\u5e38\u6703\u9700\u8981\u4f7f\u7528\u5230",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/evaluate-performance/"},"Chrome DevTools Performance panel"),"\uff0c\u53bb\u5206\u6790\u6bcf\u500b frame \u7d30\u90e8\u7684\u72c0\u6cc1\u4f86\u627e\u5230 root cause\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/debug-layout-shifts/"},"\u53c3\u8003\u8a73\u7d30\u5982\u4f55 debug"),"\u3002"),(0,i.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,i.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u5c07\u6703\u8ddf\u8457 Google \u5728 Web Vitals \u4e0a\u7684\u65b0\u63d0\u6848\u4ee5\u53ca\u7b46\u8005\u81ea\u8eab\u7684\u7814\u7a76\u6301\u7e8c\u66f4\u65b0\uff0c\u5982\u679c\u6709\u4efb\u4f55\u554f\u984c\u6216\u5efa\u8b70\u90fd\u6b61\u8fce\u8207\u6211\u806f\u7d61\u3002"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.dev/learn-web-vitals/"},"Web Vitals")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_o0Q-fUjeiA&t=27s&ab_channel=GoogleDevelopersTaiwan-Google%E9%96%8B%E7%99%BC%E4%BA%BA%E5%93%A1%E5%8F%B0%E7%81%A3%E9%A0%BB%E9%81%93"},"I/O Extended 2021 \u7cfb\u5217: Chrome DevTools & Web Vitals")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cythilya.github.io/2021/10/24/mopcon-speed-up-your-app-with-web-vitals/?fbclid=IwAR3GXoUWjr9GXFaYZBjR4NMfiiucoGAIOtjSG8sRg02BFg86qlFF55u6fq4"},"\u6253\u9020\u9ad8\u901f\u7db2\u7ad9\uff0c\u5f9e\u7db2\u7ad9\u6307\u6a19\u958b\u59cb\uff01(Speed Up Your App with Web Vitals) MOPCON 2021 \u9010\u5b57\u7a3f | Summer\u3002\u6851\u83ab\u3002\u590f\u5929")))}c.isMDXComponent=!0},3980:function(e,t,a){t.Z=a.p+"assets/images/CLS-dd385de9e97eef6b87ab0392fa6193c8.svg"},8163:function(e,t,a){t.Z=a.p+"assets/images/FID-3ccf17e6da41287b4d3f58e7e00b9a55.svg"},8770:function(e,t,a){t.Z=a.p+"assets/images/LCP-706b1c82d2aa87bb213a431d7e4f53dd.svg"},8900:function(e,t,a){t.Z=a.p+"assets/images/kate-stone-matheson-uy5t-CJuIK4-unsplash-1e16fdb72a2aa4d88f05b08f360d19ad.jpg"}}]);