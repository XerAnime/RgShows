"use strict";(()=>{const e=function(){const e=new Map,t=[[],["12"]],n=new Map([["1movietv.com",0],["legendas.dev",0],["telesintese.com.br",0],["novsport.com",0],["deckbandit.com",0],["getcopy.link",0],["ricettafitness.com",0],["yts-subs.dev",0],["edoujin.net",0],["bitcotasks.com",0],["blackmod.net",0],["click.allkeyshop.com",0],["cl1ca.com",1],["4br.me",1],["fir3.net",1]]),r=new Map([["seulink",1],["encurtalink",1]]),o=new Map([]);function c(t=""){if("string"!=typeof t)return;!function(t,n){const r=e=>{const t={loading:1,interactive:2,end:2,2:2,complete:3,idle:3,3:3},n=Array.isArray(e)?e:[e];for(const e of n){const n=`${e}`;if(!1!==t.hasOwnProperty(n))return t[n]}return 0},o=r(n);if(r(document.readyState)>=o)return void t();const c=()=>{r(document.readyState)<o||(t(),s.removeEventListener.apply(document,i))},s=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}(),i=["readystatechange",c,{capture:!0}];s.addEventListener.apply(document,i)}((()=>{(()=>{const e=document.querySelector('meta[http-equiv="refresh" i][content]');if(null===e)return;const n=""===t?e.getAttribute("content"):t,r=1e3*Math.max(parseFloat(n)||0,0);setTimeout((()=>{window.stop()}),r)})()}),"interactive")}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const i=s.length;if(0===i)return;const a=new Set,l=[];if(0!==o.size){for(let e=0;e<i;e++){const t=s.slice(e).join("."),n=o.get(t);n&&l.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||a.add(e)}};for(let t=0;t<i;t++){e(s.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=s.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)l.includes(e)||a.add(e)}}r.clear()}for(const e of a)try{c(...t[e])}catch(e){}t.length=0};e()})();