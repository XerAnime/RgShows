"use strict";import{dom}from"./dom.js";const mql=self.matchMedia("(prefers-color-scheme: dark)"),theme=mql instanceof Object&&!0===mql.matches?"dark":"light";dom.cl.toggle(dom.html,"dark","dark"===theme),dom.cl.toggle(dom.html,"light","dark"!==theme);