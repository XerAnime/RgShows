"use strict";(()=>{const e=function(){const e=new Map,t=[["script","if(!document.getElementById"]],n=new Map([["looopings.nl",0]]),r=new Map([]),o=new Map([]);function s(t,n,...r){!function(t="",n="",r=""){const o=c(),s=o.patternToRegex(t,"i",!0),i=o.patternToRegex(n,"gms"),a=o.getExtraArgs(Array.from(arguments),3),l=e.has("canDebug")&&a.log||0,f=o.patternToRegex(a.condition||"","ms"),p=(e=!0)=>{e&&g(m.takeRecords()),m.disconnect(),0!==l&&o.uboLog(`replace-node-text-core.fn: quitting "${n}" => "${r}"`)};let u=a.sedCount||0;const d=e=>{const t=e.textContent;if(f.lastIndex=0,!1===o.RegExp_test.call(f,t))return!0;if(i.lastIndex=0,!1===o.RegExp_test.call(i,t))return!0;i.lastIndex=0;const s=""!==n?t.replace(i,r):r;return e.textContent=s,0!==l&&(o.uboLog("replace-node-text.fn before:\n",t),o.uboLog("replace-node-text.fn after:\n",s)),0===u||0!=(u-=1)},g=e=>{for(const t of e)for(const e of t.addedNodes)if(!1!==s.test(e.nodeName)&&!d(e))return void p(!1)},m=new MutationObserver(g);if(m.observe(document,{childList:!0,subtree:!0}),document.documentElement){const e=document.createTreeWalker(document.documentElement,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);let t=0;for(;;){const n=e.nextNode();if(t+=1,null===n)break;if(!1!==s.test(n.nodeName)&&!d(n)){p();break}}0!==l&&o.uboLog(`replace-node-text-core.fn ${t} nodes present before installing mutation observer`)}if(a.stay)return;!function(e,t){const n=e=>{const t={loading:1,interactive:2,end:2,2:2,complete:3,idle:3,3:3},n=Array.isArray(e)?e:[e];for(const e of n){const n=`${e}`;if(!1!==t.hasOwnProperty(n))return t[n]}return 0},r=n(t);if(n(document.readyState)>=r)return void e();const o=()=>{n(document.readyState)<r||(e(),s.removeEventListener.apply(document,i))},s=c(),i=["readystatechange",o,{capture:!0}];s.addEventListener.apply(document,i)}((()=>{const e=a.quitAfter||0;0!==e?setTimeout((()=>{p()}),e):p()}),"interactive")}(t,"","","condition",n||"",...r)}function c(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const a=i.length;if(0===a)return;const l=new Set,f=[];if(0!==o.size){for(let e=0;e<a;e++){const t=i.slice(e).join("."),n=o.get(t);n&&f.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)f.includes(e)||l.add(e)}};for(let t=0;t<a;t++){e(i.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=a-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=i.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)f.includes(e)||l.add(e)}}r.clear()}for(const e of l)try{s(...t[e])}catch(e){}t.length=0};e()})();