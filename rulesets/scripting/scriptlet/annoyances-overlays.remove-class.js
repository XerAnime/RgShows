"use strict";(()=>{const e=function(){const e=new Map,t=[["cookie-paywall-visible","article"],["c-avLazyStickyVideo-sticky",".c-avLazyStickyVideo-container"],["promo-above","body.promo-above"],["floating",".hero-video"],["normal-hasActivity-nav-page",".install-pages"],["hasActivityNavTop","#pageNav"],["stuck",".video-page__player > div.sinparty-player > div"],["oxy-modal-active","body"],["md:pt-[54px]",".z-50.overflow-hidden:not(.group)"],["pt-[64px]",".z-50.overflow-hidden:not(.group)"],["video-flyout--fixed",".video-flyout"],["jw-flag-floating|jw-flag-small-player"],["show",".widget-mini-player"],["StickyVideoPlayer",".OTVVideoPlayer"],["mfp-popup-exit-quiz-v2","body"],["header-infobar-active","body"],["is-benefit","div#homepagePage"],["js-main-header",".header"],["vlog-sticky-video",".video.vlog-sticky-video"],["fancybox-lock","html"],["jw-flag-floating",".jwplayer.jw-flag-floating"],["with-ticker","body"],["randomplayer--fixed",".randomplayer.randomplayer--fixed"],["State--CountrySelectorModal","html"],["tos-opened","body.tos-opened"],["hustle-no-scroll","html"],["open-popup","body.open-popup"],["popup-active",'body[class="popup-active"]'],["js_show-android",".wrapper"],["tp-modal-open","body"],["frozen-mobile-body","body"],["hasAdAlert","header"],["click-to-scroll","body"],["disable-selection","body"]],o=new Map([["postimees.ee",0],["cnet.com",1],["emsisoft.com",2],["pluska.sk",3],["keepstreams.com",[4,5]],["sinparty.com",6],["gamberorosso.it",7],["internxt.com",[8,9]],["nbcnewyork.com",10],["healthline.com",11],["haberturk.com",12],["abc7.com",13],["neilpatel.com",14],["teknosa.com",15],["rogervivier.com",16],["kino.tricolor.tv",17],["whatifshow.com",18],["thestreet.com",19],["qa.opensooq.com",19],["komandacard.ru",19],["dailystar.co.uk",20],["spiegel.de",20],["besthealthmag.ca",20],["videosxgays.com",21],["sportowefakty.wp.pl",22],["hamamatsu.com",23],["autostrada-a4.com.pl",24],["fastbikesmag.com",25],["hindustantimes.com",26],["medobr.com",27],["mycredit.ua",28],["bloomberglinea.com",[29,30]],["bloomberglinea.com.br",[29,30]],["novelza.com",32],["postype.com",33]]),r=new Map([["pornhub",31]]),n=new Map([]);function a(t="",o="",r=""){if("string"!=typeof t)return;if(""===t)return;const n=t.split(/\s*\|\s*/);""===o&&(o="."+n.map((e=>CSS.escape(e))).join(",."));const a=/\bstay\b/.test(r);let i;const s=function(){i=void 0;try{const e=document.querySelectorAll(o);for(const t of e)t.classList.remove(...n)}catch(e){}a||"complete"===document.readyState&&c.disconnect()},c=new MutationObserver((e=>{if(void 0!==i)return;let t=!0;for(let o=0;o<e.length&&t;o++){const{type:r,addedNodes:n,removedNodes:a}=e[o];"attributes"===r&&(t=!1);for(let e=0;e<n.length&&t;e++)if(1===n[e].nodeType){t=!1;break}for(let e=0;e<a.length&&t;e++)if(1===a[e].nodeType){t=!1;break}}t||(i=self.requestIdleCallback(s,{timeout:67}))}));!function(t,o){const r=e=>{const t={loading:1,interactive:2,end:2,2:2,complete:3,idle:3,3:3},o=Array.isArray(e)?e:[e];for(const e of o){const o=`${e}`;if(!1!==t.hasOwnProperty(o))return t[o]}return 0},n=r(o);if(r(document.readyState)>=n)return void t();const a=()=>{r(document.readyState)<n||(t(),i.removeEventListener.apply(document,s))},i=function(){if(e.has("safeSelf"))return e.get("safeSelf");const t=globalThis,o={Array_from:Array.from,Error:t.Error,Function_toStringFn:t.Function.prototype.toString,Function_toString:e=>o.Function_toStringFn.call(e),Math_floor:Math.floor,Math_max:Math.max,Math_min:Math.min,Math_random:Math.random,Object,Object_defineProperty:Object.defineProperty.bind(Object),Object_fromEntries:Object.fromEntries.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),RegExp:t.RegExp,RegExp_test:t.RegExp.prototype.test,RegExp_exec:t.RegExp.prototype.exec,Request_clone:t.Request.prototype.clone,XMLHttpRequest:t.XMLHttpRequest,addEventListener:t.EventTarget.prototype.addEventListener,removeEventListener:t.EventTarget.prototype.removeEventListener,fetch:t.fetch,JSON:t.JSON,JSON_parseFn:t.JSON.parse,JSON_stringifyFn:t.JSON.stringify,JSON_parse:(...e)=>o.JSON_parseFn.call(o.JSON,...e),JSON_stringify:(...e)=>o.JSON_stringifyFn.call(o.JSON,...e),log:console.log.bind(console),uboLog(...t){!1!==e.has("canDebug")&&0!==t.length&&""!=`${t[0]}`&&this.log("[uBO]",...t)},escapeRegexChars:e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),initPattern(e,t={}){if(""===e)return{matchAll:!0};const o=!0!==t.canNegate||!1===e.startsWith("!");!1===o&&(e=e.slice(1));const r=/^\/(.+)\/([gimsu]*)$/.exec(e);return null!==r?{re:new this.RegExp(r[1],r[2]||t.flags),expect:o}:void 0!==t.flags?{re:new this.RegExp(this.escapeRegexChars(e),t.flags),expect:o}:{pattern:e,expect:o}},testPattern(e,t){return!!e.matchAll||(e.re?this.RegExp_test.call(e.re,t)===e.expect:t.includes(e.pattern)===e.expect)},patternToRegex(e,t=void 0,o=!1){if(""===e)return/^/;const r=/^\/(.+)\/([gimsu]*)$/.exec(e);if(null===r){const r=this.escapeRegexChars(e);return new RegExp(o?`^${r}$`:r,t)}try{return new RegExp(r[1],r[2]||void 0)}catch(e){}return/^/},getExtraArgs(e,t=0){const o=e.slice(t).reduce(((e,t,o,r)=>{if(0==(1&o)){const t=r[o+1],n=/^\d+$/.test(t)?parseInt(t,10):t;e.push([r[o],n])}return e}),[]);return this.Object_fromEntries(o)}};return e.set("safeSelf",o),o}(),s=["readystatechange",a,{capture:!0}];i.addEventListener.apply(document,s)}((()=>{s(),c.observe(document,{attributes:!0,attributeFilter:["class"],childList:!0,subtree:!0})}),/\bcomplete\b/.test(r)?"idle":"loading")}const i=[];try{i.push(...document.location.hostname.split("."))}catch(e){}const s=i.length;if(0===s)return;const c=new Set,l=[];if(0!==n.size){for(let e=0;e<s;e++){const t=i.slice(e).join("."),o=n.get(t);o&&l.push(...o)}n.clear()}if(0!==o.size){const e=e=>{let t=o.get(e);if(void 0!==t){"number"==typeof t&&(t=[t]);for(const e of t)l.includes(e)||c.add(e)}};for(let t=0;t<s;t++){e(i.slice(t).join("."))}e("*"),o.clear()}if(0!==r.size){const e=s-1;for(let t=0;t<e;t++)for(let o=e;o>t;o--){const e=i.slice(t,o).join(".");let n=r.get(e);if(void 0!==n){"number"==typeof n&&(n=[n]);for(const e of n)l.includes(e)||c.add(e)}}r.clear()}for(const e of c)try{a(...t[e])}catch(e){}t.length=0};e()})();