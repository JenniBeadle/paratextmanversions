(()=>{"use strict";var e,a,t,r,f,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&f||c>=f)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,f<c&&(c=f));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(f,c),f},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",461:"1de926c6",665:"de1ac5c6",709:"95d2782a",780:"a2e2a6ef",1566:"94c1c5f5",1671:"844e8154",1984:"82993dbf",2024:"f58ac6a9",2094:"10ae4e2f",2296:"20d96a3b",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3667:"d1727341",3668:"3e4a8c33",3989:"d9c8d500",4006:"9cacdc20",4121:"22a201bb",4711:"43819284",4958:"55145e57",5715:"ee6e2833",5745:"218979a3",5815:"4a5322ee",5821:"0e70fcfd",5932:"7b9ba7a6",6422:"11781c08",6590:"766be276",6626:"975ec8ab",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7367:"052f7eb7",7395:"44ade08c",7918:"17896441",7920:"1a4e3797",8245:"896afd29",8282:"eff0a87a",8706:"76bca026",8820:"00bf44a2",8969:"72b0d28b",9514:"1be78505",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9817:"14eb3368",9824:"2a584a3f"}[e]||e)+"."+{53:"c09ec094",461:"b2d24a22",665:"4cf7131e",709:"080ad35a",780:"12279b87",1566:"b2fd3351",1671:"a764c32d",1984:"853d5413",2024:"64e05dc8",2094:"f4658106",2296:"fefc6a91",2487:"eae80f4d",2562:"8845e6e4",2641:"545475d9",2653:"08072025",2658:"108c223f",3220:"336a0b23",3332:"86656545",3437:"d4fe5853",3667:"dcdddc4f",3668:"88ab6374",3989:"0a368516",4006:"bad648ea",4121:"6f59ba04",4711:"f057b1fa",4958:"cbbb688a",4972:"654df9bb",5525:"6916fb1c",5715:"fd8b30c6",5745:"d89ed6bf",5815:"6ae933df",5821:"e2b7390f",5932:"4dc28a85",6422:"3f05bf0e",6590:"b1223c1b",6626:"bec6e39a",6885:"681c9a06",6991:"f1760332",7229:"95fc0e07",7367:"6bbc226c",7395:"40a33508",7918:"fdae88bc",7920:"fa9cca6a",8245:"4404f953",8282:"be2b632f",8443:"ee56e40e",8706:"1c2b2c46",8820:"6f5fb0d3",8969:"40f8a08b",9514:"5d7ad7f5",9671:"ca3690e2",9693:"bc0e16dc",9706:"5c9ac1c0",9817:"fd68dc4c",9824:"2ff89f17"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="paratextmanversions:",o.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",f+t),d.src=e),r[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/paratextmanversions/",o.gca=function(e){return e={17896441:"7918",43819284:"4711",83689511:"9706","935f2afb":"53","1de926c6":"461",de1ac5c6:"665","95d2782a":"709",a2e2a6ef:"780","94c1c5f5":"1566","844e8154":"1671","82993dbf":"1984",f58ac6a9:"2024","10ae4e2f":"2094","20d96a3b":"2296","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",d1727341:"3667","3e4a8c33":"3668",d9c8d500:"3989","9cacdc20":"4006","22a201bb":"4121","55145e57":"4958",ee6e2833:"5715","218979a3":"5745","4a5322ee":"5815","0e70fcfd":"5821","7b9ba7a6":"5932","11781c08":"6422","766be276":"6590","975ec8ab":"6626",d311ccf8:"6885","635fb14e":"6991","04847427":"7229","052f7eb7":"7367","44ade08c":"7395","1a4e3797":"7920","896afd29":"8245",eff0a87a:"8282","76bca026":"8706","00bf44a2":"8820","72b0d28b":"8969","1be78505":"9514","0e384e19":"9671","9ff645a7":"9693","14eb3368":"9817","2a584a3f":"9824"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",d.name="ChunkLoadError",d.type=f,d.request=c,r[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)f=c[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},t=self.webpackChunkparatextmanversions=self.webpackChunkparatextmanversions||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();