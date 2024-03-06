"use strict";(()=>{const e=function(){const e=new Map,t=[["VAST","","adnxs"],['xpath(//*[name()="MPD"]/@mediaPresentationDuration | //*[name()="Period"][.//*[name()="BaseURL" and contains(text(),\'/ads-\')]] | //*[name()="Period"]/@start)','Period[id^="Ad"i]',".mpd"],['xpath(//*[name()="Period"][.//*[@value="Ad"]] | //*[name()="Period"]/@start)','[value="Ad"]',".mpd"],['xpath(//*[name()="Period"][.//*[name()="AdaptationSet"][@contentType="video"][not(@bitstreamSwitching="true")]])',"",".mpd"],["xpath(//*[name()=\"MPD\"][.//*[name()=\"BaseURL\" and contains(text(),'dash_clear_fmp4') and contains(text(),'/a/')]]/@mediaPresentationDuration | //*[name()=\"Period\"][./*[name()=\"BaseURL\" and contains(text(),'dash_clear_fmp4') and contains(text(),'/a/')]])","",".mpd"],['Period[id*="-roll-"][id*="-ad-"]',"","pubads.g.doubleclick.net/ondemand"],['xpath(//*[name()="Period"][not(.//*[name()="SegmentTimeline"])][not(.//*[name()="ContentProtection"])] | //*[name()="Period"][./*[name()="BaseURL"]][not(.//*[name()="ContentProtection"])])',"",".mpd"],['xpath(//*[name()="MPD"]/@mediaPresentationDuration | //*[name()="Period"]/@start | //*[name()="Period"][.//*[name()="BaseURL" and contains(text(),\'adease\')]])','[media^="A_D/"]',".mpd"],['xpath(//*[name()="Period"][.//*[name()="BaseURL" and contains(text(),\'/ad/\')]])',"",".mpd"]],n=new Map([["imasdk.googleapis.com",0],["hulu.com",1],["www.amazon.co.jp",2],["www.amazon.com",2],["www.amazon.de",2],["www.primevideo.com",2],["vix.com",3],["go.discovery.com",4],["investigationdiscovery.com",4],["go.tlc.com",4],["sciencechannel.com",4],["cbs.com",5],["paramountplus.com",5],["play.max.com",6],["foxtel.com.au",7],["serially.it",8]]),r=new Map([["discoveryplus",4]]),o=new Map([]);function a(t="",n="",r=""){if("string"!=typeof t)return;if(""===t)return;const o=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,n={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>n.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>n.JSON_parseFn.call(n.JSON,...e),JSON_stringify:(...e)=>n.JSON_stringifyFn.call(n.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const n=!0!==t.canNegate||!1===e.startsWith("!");!1===n&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:n}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:n}:{pattern:e,expect:n}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,n=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(n?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const n=e.slice(t).reduce(((e,t,n,r)=>{if(0==(1&n)){const t=r[n+1],o=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[n],o])}return e}),[]);return this.Object_fromEntries(n)}};return e.set("safeSelf",n),n}(),a=o.patternToRegex(r),s=o.getExtraArgs(Array.from(arguments),3),i=function(t){if(t instanceof Object==!1)return!1;return e.has("canDebug")&&t.log}(s)?(...e)=>{o.uboLog(...e)}:()=>{},c=e=>{try{if(""!==n&&null===e.querySelector(n))return e;if(s.logdoc){const t=new XMLSerializer;i(`xmlPrune: document is\n\t${t.serializeToString(e)}`)}const r=((e,t)=>{if(!1===/^xpath\(.+\)$/.test(t))return Array.from(e.querySelectorAll(t));const n=e.evaluate(t.slice(6,-1),e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),r=[];for(let e=0;e<n.snapshotLength;e++){const t=n.snapshotItem(e);r.push(t)}return r})(e,t);if(0===r.length)return e;i(`xmlPrune: removing ${r.length} items`);for(const e of r)1===e.nodeType?e.remove():2===e.nodeType&&e.ownerElement.removeAttribute(e.nodeName),i(`xmlPrune: ${e.constructor.name}.${e.nodeName} removed`)}catch(e){i(e)}return e},l=e=>{if(!1===(/^\s*</.test(e)&&/>\s*$/.test(e)))return e;try{const t=(new DOMParser).parseFromString(e,"text/xml");c(t);e=(new XMLSerializer).serializeToString(t)}catch(e){}return e},p=e=>"string"==typeof e?e:e instanceof Request?e.url:String(e);self.fetch=new Proxy(self.fetch,{apply:function(e,t,n){const r=Reflect.apply(e,t,n);return!1===a.test(p(n[0]))?r:r.then((e=>e.clone().text().then((t=>{const n=new Response(l(t),{status:e.status,statusText:e.statusText,headers:e.headers});return Object.defineProperties(n,{ok:{value:e.ok},redirected:{value:e.redirected},type:{value:e.type},url:{value:e.url}}),n})).catch((()=>e))))}}),self.XMLHttpRequest.prototype.open=new Proxy(self.XMLHttpRequest.prototype.open,{apply:async(e,t,n)=>(!1===a.test(p(n[1]))||t.addEventListener("readystatechange",(function(){if(4!==t.readyState)return;const e=t.responseType;if("document"===e||""===e&&t.responseXML instanceof XMLDocument){c(t.responseXML);const e=(new XMLSerializer).serializeToString(t.responseXML);Object.defineProperty(t,"responseText",{value:e})}else if("text"===e||""===e&&"string"==typeof t.responseText){const e=t.responseText,n=l(e);if(n===e)return;return Object.defineProperty(t,"response",{value:n}),void Object.defineProperty(t,"responseText",{value:n})}})),Reflect.apply(e,t,n))})}const s=[];try{s.push(...document.location.hostname.split("."))}catch(e){}const i=s.length;if(0===i)return;const c=new Set,l=[];if(0!==o.size){for(let e=0;e<i;e++){const t=s.slice(e).join("."),n=o.get(t);n&&l.push(...n)}o.clear()}if(0!==n.size){const e=e=>{let t=n.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||c.add(e)}};for(let t=0;t<i;t++){e(s.slice(t).join("."))}e("*"),n.clear()}if(0!==r.size){const e=i-1;for(let t=0;t<e;t++)for(let n=e;n>t;n--){const e=s.slice(t,n).join(".");let o=r.get(e);if(void 0!==o){"number"==typeof o&&(o=[o]);for(const e of o)l.includes(e)||c.add(e)}}r.clear()}for(const e of c)try{a(...t[e])}catch(e){}t.length=0};if("object"!=typeof wrappedJSObject)return e();{const t=self.wrappedJSObject;let n,r;try{t.uBOL_xmlPrune=cloneInto([["(",e.toString(),")();"],{type:"text/javascript; charset=utf-8"}],self);const o=new t.Blob(...t.uBOL_xmlPrune);r=t.URL.createObjectURL(o);const a=t.document;n=a.createElement("script"),n.async=!1,n.src=r,(a.head||a.documentElement||a).append(n)}catch(e){console.error(e)}r&&(n&&n.remove(),t.URL.revokeObjectURL(r)),delete t.uBOL_xmlPrune}})();