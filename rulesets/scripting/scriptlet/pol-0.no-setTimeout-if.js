"use strict";(()=>{const e=function(){const e=new Map,t=[["PrebidDamOpen","800"],["HubAPI","3000"],['/getComputedStyle[\\s\\S]*?style\\.display="none"[\\s\\S]*?styleBlocked[\\s\\S]*?detected/'],['function check(){console.log("checked");if($(".adform").children().length>3){console.log("its more");$(".adform").children(".adform-banner").show();clearTimeout(check)}}',"1000"],["ubfix()"],["no-ads-info"],["bioEp.showPopup"],["hasAdblock"],["notDetected"],["Math.round","5000"],["AdBlock"],["adBanner"],["_actions(a)","2"],["mdpDeBlocker"],["block","0"],["detected","300"],["showAdblockImage","2000"],["adBlockTest","100"]],o=new Map([["www.dobreprogramy.pl",0],["kafeteria.pl",1],["polygamia.pl",1],["open.fm",1],["pudelek.pl",1],["wp.pl",2],["naekranie.pl",3],["purepc.pl",4],["calcoolator.pl",5],["pl.vpnmentor.com",6],["aternos.org",7],["filmweb.pl",8],["playpuls.pl",9],["webinsider.pl",10],["start.me",11],["techsetter.pl",12],["temi.pl",13],["film.wp.pl",[14,15]],["www.o2.pl",14],["uroda.abczdrowie.pl",14],["money.pl",15],["komorkomania.pl",15],["abczdrowie.pl",15],["fotoblogia.pl",15],["gadzetomania.pl",15],["autokult.pl",15],["parenting.pl",15],["wiadomosci.wp.pl",15],["tech.wp.pl",15],["dom.wp.pl",15],["facet.wp.pl",15],["finanse.wp.pl",15],["gry.wp.pl",15],["gwiazdy.wp.pl",15],["kobieta.wp.pl",15],["ksiazki.wp.pl",15],["kuchnia.wp.pl",15],["moto.wp.pl",15],["opinie.wp.pl",15],["pogoda.wp.pl",15],["teleshow.wp.pl",15],["turystyka.wp.pl",15],["wideo.wp.pl",15],["wawalove.wp.pl",15],["karmopedia.pl",16],["elektroda.pl",17]]),n=new Map([]),r=new Map([]);function c(t="",o=""){if("string"!=typeof t)return;const n=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,o={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>o.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>o.JSON_parseFn.call(o.JSON,...e),JSON_stringify:(...e)=>o.JSON_stringifyFn.call(o.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const o=!0!==t.canNegate||!1===e.startsWith("!");!1===o&&(e=e.slice(1));const n=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==n?{re:new this.RegExp(n[1],n[2]||t.flags),expect:o}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:o}:{pattern:e,expect:o}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,o=!1){if(""===e)return/^/;const n=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===n){const n=this.escapeRegexChars(e);return new RegExp(o?`^${n}$`:n,t)}try{return new RegExp(n[1],n[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const o=e.slice(t).reduce(((e,t,o,n)=>{if(0==(1&o)){const t=n[o+1],r=/^\d+$/.test(t)?parseInt(t,10):t;e.push([n[o],r])}return e}),[]);return this.Object_fromEntries(o)}};return e.set("safeSelf",o),o}(),r="!"===t.charAt(0);r&&(t=t.slice(1)),""===o&&(o=void 0);let c=!1;void 0!==o&&(c="!"===o.charAt(0),c&&(o=o.slice(1)),o=parseInt(o,10));const p=!1===r&&""===t&&void 0===o?console.log:void 0,i=n.patternToRegex(t);self.setTimeout=new Proxy(self.setTimeout,{apply:function(e,l,s){const a=s[0]instanceof Function?String(n.Function_toString(s[0])):String(s[0]),f=s[1];if(void 0!==p)p('uBO: setTimeout("%s", %s)',a,f);else{let e;""!==t&&(e=i.test(a)!==r),!1!==e&&void 0!==o&&(e=(f===o||isNaN(f)&&isNaN(o))!==c),e&&(s[0]=function(){})}return Reflect.apply(e,l,s)},get:(e,t,o)=>"toString"===t?e.toString.bind(e):Reflect.get(e,t,o)})}const p=[];try{p.push(...document.location.hostname.split("."))}catch(e){}const i=p.length;if(0===i)return;const l=new Set,s=[];if(0!==r.size){for(let e=0;e<i;e++){const t=p.slice(e).join("."),o=r.get(t);o&&s.push(...o)}r.clear()}if(0!==o.size){const e=e=>{let t=o.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)s.includes(e)||l.add(e)}};for(let t=0;t<i;t++){e(p.slice(t).join("."))}e("*"),o.clear()}if(0!==n.size){const e=i-1;for(let t=0;t<e;t++)for(let o=e;o>t;o--){const e=p.slice(t,o).join(".");let r=n.get(e);if(void 0!==r){"number"==typeof r&&(r=[r]);for(const e of r)s.includes(e)||l.add(e)}}n.clear()}for(const e of l)try{c(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let o,n;try{t.uBOL_noSetTimeoutIf=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const r=new t.Blob(...t.uBOL_noSetTimeoutIf);n=t.URL.createObjectURL(r);const c=t.document;o=c.createElement("script"),o.async=!1,o.src=n,(c.head||c.documentElement||c).append(o)}catch(e){console.error(e)}n&&(o&&o.remove(),t.URL.revokeObjectURL(n)),delete t.uBOL_noSetTimeoutIf}})();