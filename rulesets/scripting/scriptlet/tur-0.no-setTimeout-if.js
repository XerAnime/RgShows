"use strict";(()=>{const e=function(){const e=new Map,t=[["0===o.offsetLeft&&0===o.offsetTop"],["placebo.height()"],["AdBlock"],["ad_block_detected"],["$('body').empty().append"],["kanews-modal-adblock","5000"],["t.open(\\'\\x"],["/filmizletv\\..*\\/uploads\\/Psk\\//"],["wt()","100"]],o=new Map([["zamaninvarken.com",0],["kredi.biz.tr",0],["kriptoradar.com",0],["morlevha.com",0],["bakimlikadin.net",0],["korsanedebiyat.com",0],["ozbeceriksizler.co",0],["genelpara.com",0],["azbuz.org",0],["mustafabukulmez.com",0],["teknotaci.com",1],["sinnerclownceviri.com",2],["intekno.net",3],["kuponuna148.com",4],["kuponuna149.com",4],["kuponuna150.com",4],["kuponuna151.com",4],["kuponuna152.com",4],["kuponuna153.com",4],["kuponuna154.com",4],["kuponuna155.com",4],["kuponuna156.com",4],["kuponuna157.com",4],["kuponuna158.com",4],["kuponuna159.com",4],["kuponuna160.com",4],["kuponuna161.com",4],["kuponuna162.com",4],["kuponuna163.com",4],["kuponuna164.com",4],["kuponuna165.com",4],["kuponuna166.com",4],["kuponuna167.com",4],["kuponuna168.com",4],["kuponuna169.com",4],["kuponuna170.com",4],["veryansintv.com",5],["tekniknot.com",6],["filmizletv2.com",7],["filmizletv3.com",7],["filmizletv4.com",7],["filmizletv5.com",7],["filmizletv6.com",7],["filmizletv7.com",7],["filmizletv8.com",7],["filmizletv9.com",7],["filmizletv10.com",7],["filmizletv11.com",7],["filmizletv12.com",7],["filmizletv13.com",7],["filmizletv14.com",7],["filmizletv15.com",7],["filmizletv16.com",7],["filmizletv17.com",7],["filmizletv18.com",7],["filmizletv19.com",7],["filmizletv20.com",7],["eksisozluk111.com",8]]),n=new Map([["filmizletv",7]]),c=new Map([]);function i(t="",o=""){if("string"!=typeof t)return;const n=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,o={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>o.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>o.JSON_parseFn.call(o.JSON,...e),JSON_stringify:(...e)=>o.JSON_stringifyFn.call(o.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const o=!0!==t.canNegate||!1===e.startsWith("!");!1===o&&(e=e.slice(1));const n=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==n?{re:new this.RegExp(n[1],n[2]||t.flags),expect:o}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:o}:{pattern:e,expect:o}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,o=!1){if(""===e)return/^/;const n=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===n){const n=this.escapeRegexChars(e);return new RegExp(o?`^${n}$`:n,t)}try{return new RegExp(n[1],n[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const o=e.slice(t).reduce(((e,t,o,n)=>{if(0==(1&o)){const t=n[o+1],c=/^\d+$/.test(t)?parseInt(t,10):t;e.push([n[o],c])}return e}),[]);return this.Object_fromEntries(o)}};return e.set("safeSelf",o),o}(),c="!"===t.charAt(0);c&&(t=t.slice(1)),""===o&&(o=void 0);let i=!1;void 0!==o&&(i="!"===o.charAt(0),i&&(o=o.slice(1)),o=parseInt(o,10));const r=!1===c&&""===t&&void 0===o?console.log:void 0,s=n.patternToRegex(t);self.setTimeout=new Proxy(self.setTimeout,{apply:function(e,a,l){const m=l[0]instanceof Function?String(n.Function_toString(l[0])):String(l[0]),u=l[1];if(void 0!==r)r('uBO: setTimeout("%s", %s)',m,u);else{let e;""!==t&&(e=s.test(m)!==c),!1!==e&&void 0!==o&&(e=(u===o||isNaN(u)&&isNaN(o))!==i),e&&(l[0]=function(){})}return Reflect.apply(e,a,l)},get:(e,t,o)=>"toString"===t?e.toString.bind(e):Reflect.get(e,t,o)})}const r=[];try{r.push(...document.location.hostname.split("."))}catch(e){}const s=r.length;if(0===s)return;const a=new Set,l=[];if(0!==c.size){for(let e=0;e<s;e++){const t=r.slice(e).join("."),o=c.get(t);o&&l.push(...o)}c.clear()}if(0!==o.size){const e=e=>{let t=o.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||a.add(e)}};for(let t=0;t<s;t++){e(r.slice(t).join("."))}e("*"),o.clear()}if(0!==n.size){const e=s-1;for(let t=0;t<e;t++)for(let o=e;o>t;o--){const e=r.slice(t,o).join(".");let c=n.get(e);if(void 0!==c){"number"==typeof c&&(c=[c]);for(const e of c)l.includes(e)||a.add(e)}}n.clear()}for(const e of a)try{i(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let o,n;try{t.uBOL_noSetTimeoutIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const c=new t.Blob(...t.uBOL_noSetTimeoutIf);n=t.URL.createObjectURL(c);const i=t.document;o=i.createElement("script"),o.async=!1,o.src=n,(i.head||i.documentElement||i).append(o)}catch(e){console.error(e)}n&&(o&&o.remove(),t.URL.revokeObjectURL(n)),delete t.uBOL_noSetTimeoutIf}})();