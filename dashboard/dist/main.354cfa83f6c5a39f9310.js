(()=>{"use strict";var e,r,t,n,o,i,a={623:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof HelloWorldApp)return e();t.l("http://localhost:9001/remoteEntry.js",(t=>{if("undefined"!=typeof HelloWorldApp)return e();var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+i+")",n.name="ScriptExternalLoadError",n.type=o,n.request=i,r(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))},876:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof KiwiApp)return e();t.l("http://localhost:9002/remoteEntry.js",(t=>{if("undefined"!=typeof KiwiApp)return e();var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+i+")",n.name="ScriptExternalLoadError",n.type=o,n.request=i,r(n)}),"KiwiApp")})).then((()=>KiwiApp))}},l={};function u(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={exports:{}};return a[e](t,t.exports,u),t.exports}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var r=function(e){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=f(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(r)?r:r+""}u.m=a,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);u.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var a=2&n&&t;"object"==typeof a&&!~e.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,u.d(o,i),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>{},u.miniCssF=e=>{},u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="dashboard:",u.l=(e,r,o,i)=>{if(t[e])t[e].push(r);else{var a,l;if(void 0!==o)for(var f=document.getElementsByTagName("script"),p=0;p<f.length;p++){var d=f[p];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var s=(r,n)=>{a.onerror=a.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={486:[486],510:[510]},i={486:["default","./KiwiPage",876],510:["default","./HelloWorldPage",623]},u.f.remotes=(e,r)=>{u.o(o,e)&&o[e].forEach((e=>{var t=u.R;t||(t=[]);var n=i[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw r},n.p=0},a=(e,t,i,a,l,u)=>{try{var f=e(t,i);if(!f||!f.then)return l(f,a,u);var p=f.then((e=>l(e,a)),o);if(!u)return p;r.push(n.p=p)}catch(e){o(e)}},l=(e,r,o)=>a(r.get,n[1],t,0,f,o),f=r=>{n.p=1,u.m[e]=e=>{e.exports=r()}};a(u,n[2],0,0,((e,r,t)=>e?a(u.I,n[0],0,e,l,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={}),u.S[t];var i=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=u(e);if(!o)return;var i=e=>e&&e.init&&e.init(u.S[t],n);if(o.then)return a.push(o.then(i,r));var l=i(o);if(l&&l.then)return a.push(l.catch(r))}catch(e){r(e)}},a=[];return"default"===t&&(i(623),i(876)),a.length?e[t]=Promise.all(a).then((()=>e[t]=1)):e[t]=1}}})(),u.p="http://localhost:9000/",(()=>{var e={792:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(792==r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=u.p+u.u(r),a=new Error;u.l(i,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[i,a,l]=t,f=0;if(i.some((r=>0!==e[r]))){for(n in a)u.o(a,n)&&(u.m[n]=a[n]);l&&l(u)}for(r&&r(t);f<i.length;f++)o=i[f],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkdashboard=self.webpackChunkdashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),(new(function(){return e=function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)},(r=[{key:"render",value:function(e){var r=e.map((function(e){return"\n        <li>\n          <a href=".concat(e.url,"> ").concat(e.title,"</a>\n        </li>\n      ")})),t=document.createElement("ul");t.innerHTML=r.join(""),t.classList.add("navigation-bar"),document.querySelector("body").appendChild(t)}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r}())).render([{url:"/hello-world-page",title:"Hello world page"},{url:"/kiwi-page",title:"Kiwi page"}]);var s=window.location.pathname;"/hello-world-page"===s?u.e(510).then(u.t.bind(u,510,23)).then((function(e){(new(0,e.default)).render()})):"/kiwi-page"===s&&u.e(486).then(u.t.bind(u,486,23)).then((function(e){(new(0,e.default)).render()}))})();