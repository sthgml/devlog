"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[245],{7190:function(e,t,r){r.r(t),r.d(t,{default:function(){return oe}});var n={};r.r(n),r.d(n,{exclude:function(){return re},extract:function(){return V},parse:function(){return W},parseUrl:function(){return Z},pick:function(){return te},stringify:function(){return X},stringifyUrl:function(){return ee}});var o=r(8060),a=r(644),i=r(4810),s=r(7437);const l=(0,a.A)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),c=(0,a.A)(i.N_,{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var p=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,s.Y)(l,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,s.Y)(c,{to:`/?category=${r}`,active:r===t,key:r},"#",r,"(",n,")")})))},u=r(2532);function d(e){let{profileImage:t}=e;return(0,s.Y)(f,{image:t,alt:"Profile Image"})}const f=(0,a.A)(u.G,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});function g(e){let{profileImage:t}=e;return(0,s.Y)(m,null,(0,s.Y)(y,null,(0,s.Y)(d,{profileImage:t}),(0,s.Y)("div",null,(0,s.Y)(x,null,"Nice to Meet You,"),(0,s.Y)(b,null,"I am Junior Frontend Developer Sohee."))))}const m=(0,a.A)("div",{target:"e160b013"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),y=(0,a.A)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),x=(0,a.A)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),b=(0,a.A)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var h=r(8168);var w=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,s.Y)(v,{to:i},(0,s.Y)(k,{alt:"Post Item Image",image:a}),(0,s.Y)(j,null,(0,s.Y)(A,null,t),(0,s.Y)(I,null,r),(0,s.Y)(F,null,n.map((e=>(0,s.Y)(O,{key:e},e)))),(0,s.Y)(Y,null,o)))};const k=(0,a.A)(u.G,{target:"e1eg5kak7"})({name:"pxpl23",styles:"width:100%;height:200px;border-radius:10px 10px 0 0;object-fit:cover"}),v=(0,a.A)(i.N_,{target:"e1eg5kak6"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),j=(0,a.A)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),A=(0,a.A)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),I=(0,a.A)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),F=(0,a.A)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),O=(0,a.A)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),Y=(0,a.A)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var N=r(6540);var S=function(e,t){const r=(0,N.useRef)(null),{0:n,1:o}=(0,N.useState)(1),a=(0,N.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]),i=(0,N.useRef)(null);return(0,N.useEffect)((()=>{i.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(o((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,N.useEffect)((()=>o(1)),[e]),(0,N.useEffect)((()=>{var e;3*n>=a.length||null===r.current||0===r.current.children.length||null===(e=i.current)||void 0===e||e.observe(r.current.children[r.current.children.length-1])}),[n,e]),{containerRef:r,postList:a.slice(0,3*n)}};const E=(0,a.A)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var C=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=S(t,r);return console.log(o),(0,s.Y)(E,{ref:n},o.map((e=>{var t;return(0,s.Y)(w,(0,h.A)({key:e.node.id},e.node.frontmatter,{link:null===(t=e.node.fields)||void 0===t?void 0:t.slug}))})))};const R="%[a-f0-9]{2}",$=new RegExp("("+R+")|([^%]+?)","gi"),U=new RegExp("("+R+")+","gi");function z(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],z(r),z(n))}function L(e){try{return decodeURIComponent(e)}catch{let t=e.match($)||[];for(let r=1;r<t.length;r++)t=(e=z(t,r).join("")).match($)||[];return e}}function q(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=U.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=L(r[0]);e!==r[0]&&(t[r[0]]=e)}r=U.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function P(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}function _(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}const D=e=>null==e,M=e=>encodeURIComponent(e).replaceAll(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),B=Symbol("encodeFragmentIdentifier");function T(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function G(e,t){return t.encode?t.strict?M(e):encodeURIComponent(e):e}function J(e,t){return t.decode?q(e):e}function K(e){return Array.isArray(e)?e.sort():"object"==typeof e?K(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function H(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function Q(e,t,r){return"string"===r&&"string"==typeof e?e:"function"==typeof r&&"string"==typeof e?r(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()?"number"!==r||Number.isNaN(Number(e))||"string"!=typeof e||""===e.trim()?t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?Number(e):e:Number(e):"true"===e.toLowerCase()}function V(e){const t=(e=H(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function W(e,t){T((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&J(r,e).includes(e.arrayFormatSeparator);r=a?J(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>J(t,e))):null===r?r:J(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?J(r,e):r);const a=null===r?[]:J(r,e).split(e.arrayFormatSeparator);void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replaceAll("+"," "):o;let[a,i]=_(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:J(i,t),r(J(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a&&"string"!==t.types[o])for(const[e,r]of Object.entries(a)){const n=t.types[o]?t.types[o].replace("[]",""):void 0;a[e]=Q(r,t,n)}else"object"==typeof a&&null!==a&&"string"===t.types[o]?n[o]=Object.values(a).join(t.arrayFormatSeparator):n[o]=Q(a,t,t.types[o]);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return e[t]=Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?K(r):r,e}),Object.create(null))}function X(e,t){if(!e)return"";T((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&D(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[G(t,e),"[",o,"]"].join("")]:[...r,[G(t,e),"[",G(o,e),"]=",G(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[G(t,e),"[]"].join("")]:[...r,[G(t,e),"[]=",G(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[G(t,e),":list="].join("")]:[...r,[G(t,e),":list=",G(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[G(r,e),t,G(o,e)].join("")]:[[n,G(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,G(t,e)]:[...r,[G(t,e),"=",G(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?G(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?G(r,t)+"[]":o.reduce(n(r),[]).join("&"):G(r,t)+"="+G(o,t)})).filter((e=>e.length>0)).join("&")}function Z(e,t){t={decode:!0,...t};let[r,n]=_(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:W(V(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:J(n,t)}:{}}}function ee(e,t){t={encode:!0,strict:!0,[B]:!0,...t};const r=H(e.url).split("?")[0]||"";let n=X({...W(V(e.url),{sort:!1}),...e.query},t);n&&=`?${n}`;let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if("string"==typeof e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[B]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function te(e,t,r){r={parseFragmentIdentifier:!0,[B]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=Z(e,r);return ee({url:n,query:P(o,t),fragmentIdentifier:a},r)}function re(e,t,r){return te(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var ne=n;var oe=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:a}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:l},publicURL:c}}}=e;const u=ne.parse(t),d="string"==typeof u.category&&u.category?u.category:"All",f=(0,N.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,s.Y)(o.A,{title:r,description:n,url:a,image:c},(0,s.Y)(g,{profileImage:l}),(0,s.Y)(p,{selectedCategory:d,categoryList:f}),(0,s.Y)(C,{selectedCategory:d,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0a5f8fab6c26a2606910.js.map