"use strict";(()=>{const e=function(){const e=new Map,t=[["doubleclick.net"]],r=new Map([["lemino.docomo.ne.jp",0]]),n=new Map([]),s=new Map([]);function o(t="",r=""){if("string"!=typeof t)return;const n=new WeakMap,s=function(e,t=""){const r=a(),n=new Map;if(void 0===e||""===e)return n;const s={canNegate:!0};for(const o of e.split(/\s+/)){const[e,i]=o.split(":");""!==e&&(void 0!==i?n.set(e,r.initPattern(i,s)):""!==t&&n.set(t,r.initPattern(e,s)))}return n}(t,"url"),o=0===s.size?console.log.bind(console):void 0,c=e.get("warOrigin"),p={date:"","content-type":"","content-length":""};self.XMLHttpRequest=class extends self.XMLHttpRequest{open(e,t,...r){if(void 0!==o)return o(`uBO: xhr.open(${e}, ${t}, ${r.join(", ")})`),super.open(e,t,...r);if(n.delete(this),void 0!==c&&t.startsWith(c))return super.open(e,t,...r);const a={method:e,url:t};return i(s,a)&&n.set(this,a),a.headers=Object.assign({},p),super.open(e,t,...r)}send(...t){const s=n.get(this);if(void 0===s)return super.send(...t);s.headers.date=(new Date).toUTCString();let o=Promise.resolve({xhr:this,directive:r,props:{readyState:{value:4},response:{value:""},responseText:{value:""},responseXML:{value:null},responseURL:{value:s.url},status:{value:200},statusText:{value:"OK"}}});switch(this.responseType){case"arraybuffer":o=o.then((e=>(e.props.response.value=new ArrayBuffer(0),e))),s.headers["content-type"]="application/octet-stream";break;case"blob":o=o.then((e=>(e.props.response.value=new Blob([]),e))),s.headers["content-type"]="application/octet-stream";break;case"document":o=o.then((e=>{const t=(new DOMParser).parseFromString("","text/html");return e.props.response.value=t,e.props.responseXML.value=t,e})),s.headers["content-type"]="text/html";break;case"json":o=o.then((e=>(e.props.response.value={},e.props.responseText.value="{}",e))),s.headers["content-type"]="application/json";break;default:if(""===r)break;o=o.then((t=>function(t){const r=a(),n=e=>{const t=[];let n=0;do{const e=r.Math_random().toString(36).slice(2);t.push(e),n+=e.length}while(n<e);return t.join(" ").slice(0,e)};if("true"===t)return Promise.resolve(n(10));if("emptyObj"===t)return Promise.resolve("{}");if("emptyArr"===t)return Promise.resolve("[]");if("emptyStr"===t)return Promise.resolve("");if(t.startsWith("length:")){const e=/^length:(\d+)(?:-(\d+))?$/.exec(t);if(e){const t=parseInt(e[1],10),s=r.Math_max(parseInt(e[2],10)||0,t)-t,o=r.Math_min(t+s*r.Math_random(),5e5);return Promise.resolve(n(0|o))}}if(t.startsWith("war:")&&e.has("warOrigin"))return new Promise((n=>{const s=[e.get("warOrigin"),"/",t.slice(4)],o=e.get("warSecret");void 0!==o&&s.push("?secret=",o);const i=new r.XMLHttpRequest;i.responseType="text",i.onloadend=e=>{n(e.target.responseText||"")},i.open("GET",s.join("")),i.send()}));return Promise.resolve("")}(t.directive).then((e=>(t.props.response.value=e,t.props.responseText.value=e,t))))),s.headers["content-type"]="text/plain"}o.then((e=>{s.headers["content-length"]=`${e.props.response.value}`.length,Object.defineProperties(e.xhr,e.props),e.xhr.dispatchEvent(new Event("readystatechange")),e.xhr.dispatchEvent(new Event("load")),e.xhr.dispatchEvent(new Event("loadend"))}))}getResponseHeader(e){const t=n.get(this);if(void 0===t||this.readyState<this.HEADERS_RECEIVED)return super.getResponseHeader(e);const r=t.headers[e.toLowerCase()];return void 0!==r&&""!==r?r:null}getAllResponseHeaders(){const e=n.get(this);if(void 0===e||this.readyState<this.HEADERS_RECEIVED)return super.getAllResponseHeaders();const t=[];for(const[r,n]of Object.entries(e.headers))n&&t.push(`${r}: ${n}`);return 0!==t.length&&t.push(""),t.join("\r\n")}}}function i(e,...t){void 0===i.extractProperties&&(i.extractProperties=(e,t,r)=>{for(const n of r){void 0!==e[n]&&(t[n]=e[n])}});const r=a(),n={},s=r.Array_from(e.keys());for(const e of t)e instanceof Object!=!1&&i.extractProperties(e,n,s);for(const[t,s]of e){let e=n[t];if(void 0!==e){if("string"!=typeof e){try{e=JSON.stringify(e)}catch(e){}if("string"!=typeof e)continue}if(!r.testPattern(s,e))return!1}}return!0}function a(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,r={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>r.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>r.JSON_parseFn.call(r.JSON,...e),JSON_stringify:(...e)=>r.JSON_stringifyFn.call(r.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const r=!0!==t.canNegate||!1===e.startsWith("!");!1===r&&(e=e.slice(1));const n=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==n?{re:new this.RegExp(n[1],n[2]||t.flags),expect:r}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:r}:{pattern:e,expect:r}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,r=!1){if(""===e)return/^/;const n=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===n){const n=this.escapeRegexChars(e);return new RegExp(r?`^${n}$`:n,t)}try{return new RegExp(n[1],n[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const r=e.slice(t).reduce(((e,t,r,n)=>{if(0==(1&r)){const t=n[r+1],s=/^\d+$/.test(t)?parseInt(t,10):t;e.push([n[r],s])}return e}),[]);return this.Object_fromEntries(r)}};return e.set("safeSelf",r),r}const c=[];try{c.push(...document.location.hostname.split("."))}catch(e){}const p=c.length;if(0===p)return;const l=new Set,u=[];if(0!==s.size){for(let e=0;e<p;e++){const t=c.slice(e).join("."),r=s.get(t);r&&u.push(...r)}s.clear()}if(0!==r.size){const e=e=>{let t=r.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)u.includes(e)||l.add(e)}};for(let t=0;t<p;t++){e(c.slice(t).join("."))}e("*"),r.clear()}if(0!==n.size){const e=p-1;for(let t=0;t<e;t++)for(let r=e;r>t;r--){const e=c.slice(t,r).join(".");let s=n.get(e);if(void 0!==s){"number"==typeof s&&(s=[s]);for(const e of s)u.includes(e)||l.add(e)}}n.clear()}for(const e of l)try{o(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let r,n;try{t.uBOL_noXhrIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const s=new t.Blob(...t.uBOL_noXhrIf);n=t.URL.createObjectURL(s);const o=t.document;r=o.createElement("script"),r.async=!1,r.src=n,(o.head||o.documentElement||o).append(r)}catch(e){console.error(e)}n&&(r&&r.remove(),t.URL.revokeObjectURL(n)),delete t.uBOL_noXhrIf}})();