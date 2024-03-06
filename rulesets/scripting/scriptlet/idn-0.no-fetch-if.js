"use strict";(()=>{const e=function(){const e=new Map,t=[["adsbygoogle"],["clarity.ms"]],n=new Map([["info.gambar.pro",0],["info.mapsaddress.com",0],["info.vebma.com",0],["thejakartapost.com",0],["netq.me",1]]),r=new Map([]),o=new Map([]);function s(t="",n=""){if("string"!=typeof t)return;const r=c(),o=[];for(const e of t.split(/\s+/)){if(""===e)continue;const t=e.indexOf(":");let n,s;-1!==t?(n=e.slice(0,t),s=e.slice(t+1)):(n="url",s=e),o.push({key:n,re:r.patternToRegex(s)})}const s=0===o.length?console.log.bind(console):void 0;self.fetch=new Proxy(self.fetch,{apply:function(t,i,a){const l=a[0]instanceof self.Request?a[0]:Object.assign({url:a[0]},a[1]);let p=!0;try{const e=new Map;for(const t in l){let n=l[t];if("string"!=typeof n)try{n=JSON.stringify(n)}catch(e){}"string"==typeof n&&e.set(t,n)}if(void 0!==s){const t=Array.from(e).map((e=>`${e[0]}:${e[1]}`)).join(" ");s(`uBO: fetch(${t})`)}p=0===o.length;for(const{key:t,re:n}of o)if(!1===e.has(t)||!1===n.test(e.get(t))){p=!0;break}}catch(e){}if(p)return Reflect.apply(t,i,a);let f="";if(void 0===l.mode||"cors"===l.mode)try{const e=new URL(l.url);f=e.origin!==document.location.origin?"cors":"basic"}catch(e){}return function(t){const n=c(),r=e=>{const t=[];let r=0;do{const e=n.Math_random().toString(36).slice(2);t.push(e),r+=e.length}while(r<e);return t.join(" ").slice(0,e)};if("true"===t)return Promise.resolve(r(10));if("emptyObj"===t)return Promise.resolve("{}");if("emptyArr"===t)return Promise.resolve("[]");if("emptyStr"===t)return Promise.resolve("");if(t.startsWith("length:")){const e=/^length:(\d+)(?:-(\d+))?$/.exec(t);if(e){const t=parseInt(e[1],10),o=n.Math_max(parseInt(e[2],10)||0,t)-t,s=n.Math_min(t+o*n.Math_random(),5e5);return Promise.resolve(r(0|s))}}if(t.startsWith("war:")&&e.has("warOrigin"))return new Promise((r=>{const o=[e.get("warOrigin"),"/",t.slice(4)],s=e.get("warSecret");void 0!==s&&o.push("?secret=",s);const c=new n.XMLHttpRequest;c.responseType="text",c.onloadend=e=>{r(e.target.responseText||"")},c.open("GET",o.join("")),c.send()}));return Promise.resolve("")}(n).then((e=>{const t=new Response(e,{statusText:"OK",headers:{"Content-Length":e.length}});return r.Object_defineProperty(t,"url",{value:l.url}),""!==f&&r.Object_defineProperty(t,"type",{value:f}),t}))}})}function c(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const a=i.length;if(0===a)return;const l=new Set,p=[];if(0!==o.size){for(let e=0;e<a;e++){const t=i.slice(e).join("."),n=o.get(t);n&&p.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)p.includes(e)||l.add(e)}};for(let t=0;t<a;t++){e(i.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=a-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=i.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)p.includes(e)||l.add(e)}}r.clear()}for(const e of l)try{s(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_noFetchIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_noFetchIf);r=t.URL.createObjectURL(o);const s=t.document;n=s.createElement("script"),n.async=!1,n.src=r,(s.head||s.documentElement||s).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_noFetchIf}})();