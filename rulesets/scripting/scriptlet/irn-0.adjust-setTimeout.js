"use strict";(()=>{const e=function(){const e=new Map,t=[["document.getElementById","*","0.01"]],n=new Map([["khabarpu.com",0]]),r=new Map([]),o=new Map([]);function s(t="",n="",r=""){if("string"!=typeof t)return;const o=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}().patternToRegex(t);let s="*"!==n?parseInt(n,10):-1;(isNaN(s)||!1===isFinite(s))&&(s=1e3);let c=parseFloat(r);c=!1===isNaN(c)&&isFinite(c)?Math.min(Math.max(c,.001),50):.05,self.setTimeout=new Proxy(self.setTimeout,{apply:function(e,t,n){const[r,i]=n;return-1!==s&&i!==s||!o.test(r.toString())||(n[1]=i*c),e.apply(t,n)}})}const c=[];try{c.push(...document.location.hostname.split("."))}catch(e){}const i=c.length;if(0===i)return;const a=new Set,p=[];if(0!==o.size){for(let e=0;e<i;e++){const t=c.slice(e).join("."),n=o.get(t);n&&p.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)p.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(c.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=c.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)p.includes(e)||a.add(e)}}r.clear()}for(const e of a)try{s(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_adjustSetTimeout=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_adjustSetTimeout);r=t.URL.createObjectURL(o);const s=t.document;n=s.createElement("script"),n.async=!1,n.src=r,(s.head||s.documentElement||s).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_adjustSetTimeout}})();