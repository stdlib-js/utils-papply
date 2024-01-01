// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n){var e,s;if(!t(n))throw new TypeError(r("invalid argument. First argument must be a function. Value: `%s`.",n));for(e=new Array(arguments.length-1),s=1;s<arguments.length;s++)e[s-1]=arguments[s];return i;function i(){var t,r;for(t=e.slice(),r=0;r<arguments.length;r++)t.push(arguments[r]);return n.apply(null,t)}}export{n as default};
//# sourceMappingURL=index.mjs.map
