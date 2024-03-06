"use strict";import{browser}from"./ext.js";function parsedURLromOrigin(s){try{return new URL(s)}catch(s){}}const toBroaderHostname=s=>{if("*"===s)return"";const e=s.indexOf(".");return-1!==e?s.slice(e+1):"*"},isDescendantHostname=(s,e)=>"all-urls"===e||!1!==s.endsWith(e)&&(s!==e&&46===s.charCodeAt(s.length-e.length-1)),isDescendantHostnameOfIter=(s,e)=>{const t=e instanceof Set?e:new Set(e);if(t.has("all-urls")||t.has("*"))return!0;let n=s;for(;n;){const s=n.indexOf(".");if(-1===s)break;if(n=n.slice(s+1),t.has(n))return!0}return!1},intersectHostnameIters=(s,e)=>{const t=e instanceof Set?e:new Set(e);if(t.has("all-urls")||t.has("*"))return Array.from(s);const n=[];for(const e of s)(t.has(e)||isDescendantHostnameOfIter(e,t))&&n.push(e);return n},subtractHostnameIters=(s,e)=>{const t=e instanceof Set?e:new Set(e);if(t.has("all-urls")||t.has("*"))return[];const n=[];for(const e of s)t.has(e)||isDescendantHostnameOfIter(e,t)||n.push(e);return n},matchesFromHostnames=s=>{const e=[];for(const t of s){if("*"===t||"all-urls"===t){e.length=0,e.push("<all_urls>");break}e.push(`*://*.${t}/*`)}return e},hostnamesFromMatches=s=>{const e=[];for(const t of s){if("<all_urls>"===t){e.push("all-urls");continue}const s=/^\*:\/\/(?:\*\.)?([^\/]+)\/\*/.exec(t);null!==s&&e.push(s[1])}return e};export const broadcastMessage=s=>{new self.BroadcastChannel("uBOL").postMessage(s)};const ubolLog=(...s)=>{"ddkjiahejlhfcafbddmgiahcphecmpfh"!==browser.runtime.id&&console.info("[uBOL]",...s)};export{parsedURLromOrigin,toBroaderHostname,isDescendantHostname,isDescendantHostnameOfIter,intersectHostnameIters,subtractHostnameIters,matchesFromHostnames,hostnamesFromMatches,ubolLog};