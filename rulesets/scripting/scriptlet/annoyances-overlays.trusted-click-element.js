"use strict";(()=>{const e=function(){const e=new Map,t=[['[data-automation="continue-to-ads-btn"]',"","10000"]],r=new Map([["moovitapp.com",0]]),n=new Map([]),o=new Map([]);function i(t="",r="",n=""){const o=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,r={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>r.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>r.JSON_parseFn.call(r.JSON,...e),JSON_stringify:(...e)=>r.JSON_stringifyFn.call(r.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const r=!0!==t.canNegate||!1===e.startsWith("!");!1===r&&(e=e.slice(1));const n=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==n?{re:new this.RegExp(n[1],n[2]||t.flags),expect:r}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:r}:{pattern:e,expect:r}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,r=!1){if(""===e)return/^/;const n=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===n){const n=this.escapeRegexChars(e);return new RegExp(r?`^${n}$`:n,t)}try{return new RegExp(n[1],n[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const r=e.slice(t).reduce(((e,t,r,n)=>{if(0==(1&r)){const t=n[r+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([n[r],o])}return e}),[]);return this.Object_fromEntries(r)}};return e.set("safeSelf",r),r}(),i=void 0!==o.getExtraArgs(Array.from(arguments),3).log?(...e)=>{o.uboLog(...e)}:()=>{};if(""!==r){const e=r.split(",").map((e=>{const t=e.indexOf(":"),r=-1!==t?e.slice(0,t):e,n=r.startsWith("!"),o=n?r.slice(1):r,i=-1!==t?e.slice(t+1).trim():"";if(""===i)return;const s={not:n,type:o},c=/^\/(.+)\/(i?)$/.exec(i);if(null!==c)return s.re=new RegExp(c[1],c[2]||void 0),s;const l=i.indexOf("="),a=-1!==l?i.slice(0,l).trim():i,u=-1!==l?i.slice(l+1).trim():"";return s.re=new RegExp(`^${this.escapeRegexChars(a)}=${this.escapeRegexChars(u)}`),s})).filter((e=>void 0!==e)),t=e.some((e=>"cookie"===e.type))?document.cookie.split(/\s*;\s*/).map((e=>{const t=e.indexOf("=");if(0!==t)return-1===t?`${e.trim()}=`:{key:e.slice(0,t).trim(),value:e.slice(t+1).trim()}})).filter((e=>void 0!==e)):[],n=e.some((e=>"localStorage"===e.type))?function(e="localStorage"){const t=self[e],r=[];for(let e=0;e<t.length;e++){const r=t.key(e);return{key:r,value:t.getItem(r)}}return r}():[],o=(e,t)=>{for(const{key:r,value:n}of e)if(t.test(`${r}=${n}`))return!0;return!1};for(const{not:r,type:i,re:s}of e)switch(i){case"cookie":if(o(t,s)===r)return;break;case"localStorage":if(o(n,s)===r)return}}const s=(e,t=document)=>{const r=e.indexOf(" >>> ");if(-1===r)return t.querySelector(e);const n=e.slice(0,r).trim(),o=e.slice(r+5).trim(),i=t.querySelector(n);if(null===i)return null;const c=i.shadowRoot;return c&&s(o,c)},c=t.split(/\s*,\s*/).filter((e=>{try{s(e)}catch(e){return!1}return!0}));if(0===c.length)return;const l=parseInt(n,10)||1,a=Date.now(),u=a+1e4;let f=1!==c.length?a:a+l;const p=()=>{c.length=0,g.stop(),m.stop()},g=e=>{if(0===c.length)return i("trusted-click-element: Completed"),p();const t=Date.now();if(t>=u)return i("trusted-click-element: Timed out"),p();e&&m();const r=Math.max(e?u-t:f-t,1);g.timer=setTimeout((()=>{g.timer=void 0,d()}),r),i(`trusted-click-element: Waiting for ${c[0]}...`)};g.stop=()=>{void 0!==g.timer&&(clearTimeout(g.timer),g.timer=void 0)};const m=()=>{void 0===m.observer&&(m.observer=new MutationObserver((()=>{void 0===m.timer&&(m.timer=setTimeout((()=>{m.timer=void 0,d()}),20))})),m.observer.observe(document,{attributes:!0,childList:!0,subtree:!0}))};m.stop=()=>{void 0!==m.timer&&(clearTimeout(m.timer),m.timer=void 0),m.observer&&(m.observer.disconnect(),m.observer=void 0)};const d=()=>{if(g.stop(),Date.now()<f)return g();const e=c.shift();if(void 0===e)return p();const t=s(e);if(null===t)return c.unshift(e),g(!0);i(`trusted-click-element: Clicked ${e}`),t.click(),f+=l,g()};!function(e){if(document.documentElement)return void e();const t=new MutationObserver((()=>{t.disconnect(),e()}));t.observe(document,{childList:!0})}(d)}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const c=s.length;if(0===c)return;const l=new Set,a=[];if(0!==o.size){for(let e=0;e<c;e++){const t=s.slice(e).join("."),r=o.get(t);r&&a.push(...r)}o.clear()}if(0!==r.size){const e=e=>{let t=r.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)a.includes(e)||l.add(e)}};for(let t=0;t<c;t++){e(s.slice(t).join("."))}e("*"),r.clear()}if(0!==n.size){const e=c-1;for(let t=0;t<e;t++)for(let r=e;r>t;r--){const e=s.slice(t,r).join(".");let o=n.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)a.includes(e)||l.add(e)}}n.clear()}for(const e of l)try{i(...t[e])}catch(e){}t.length=0};e()})();