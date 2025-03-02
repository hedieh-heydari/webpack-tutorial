(()=>{"use strict";var e,t,r,n,o,i,a={623:(e,t,r)=>{var n=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof HelloWorldApp)return e();r.l("http://localhost:9001/remoteEntry.js",(r=>{if("undefined"!=typeof HelloWorldApp)return e();var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;n.message="Loading script failed.\n("+o+": "+i+")",n.name="ScriptExternalLoadError",n.type=o,n.request=i,t(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))}},u={};function l(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return a[e](r,r.exports,l),r.exports}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function p(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}l.m=a,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);l.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,l.d(o,i),o},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>{},l.miniCssF=e=>{},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="webpack-tutorial:",l.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var a,u;if(void 0!==o)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var p=f[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){a=p;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",n+o),a.src=e),r[e]=[t];var s=(t,n)=>{a.onerror=a.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),u&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={183:[183]},i={183:["default","./HelloWorldButton",623]},l.f.remotes=(e,t)=>{l.o(o,e)&&o[e].forEach((e=>{var r=l.R;r||(r=[]);var n=i[e];if(!(r.indexOf(n)>=0)){if(r.push(n),n.p)return t.push(n.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l.m[e]=()=>{throw t},n.p=0},a=(e,r,i,a,u,l)=>{try{var f=e(r,i);if(!f||!f.then)return u(f,a,l);var c=f.then((e=>u(e,a)),o);if(!l)return c;t.push(n.p=c)}catch(e){o(e)}},u=(e,t,o)=>a(t.get,n[1],r,0,f,o),f=t=>{n.p=1,l.m[e]=e=>{e.exports=t()}};a(l,n[2],0,0,((e,t,r)=>e?a(l.I,n[0],0,e,u,r):o()),1)}}))},(()=>{l.S={};var e={},t={};l.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];l.o(l.S,r)||(l.S[r]={}),l.S[r];var i=[];return"default"===r&&(()=>{var e=e=>{return t="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(t));var t};try{var t=l(623);if(!t)return;var o=e=>e&&e.init&&e.init(l.S[r],n);if(t.then)return i.push(t.then(o,e));var a=o(t);if(a&&a.then)return i.push(a.catch(e))}catch(t){e(t)}})(),i.length?e[r]=Promise.all(i).then((()=>e[r]=1)):e[r]=1}}})(),l.p="http://localhost:9002/",(()=>{var e={792:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(792==t){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=l.p+l.u(t),a=new Error;l.l(i,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var n,o,[i,a,u]=r,f=0;if(i.some((t=>0!==e[t]))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);u&&u(l)}for(t&&t(r);f<i.length;f++)o=i[f],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();const s=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"render",value:function(e){var t=document.createElement("h1");t.textContent="webpack is awsome! this is ".concat(e," page"),document.querySelector("body").appendChild(t)}}])&&c(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),d=l.p+"b161a416c57e084182f9.png";function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function b(e){var t=function(e){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}const v=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"render",value:function(){var e=document.createElement("img");e.src=d,e.alt="alt text demo",e.classList.add("image-component"),document.querySelector("body").appendChild(e)}}])&&y(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();var h=new s,g=new v;h.render("image component"),g.render(),l.e(183).then(l.t.bind(l,183,23)).then((function(e){(new(0,e.default)).render()}))})();