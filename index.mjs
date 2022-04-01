// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=r,e=t;var s=function(r){var t,s;if(!n(r))throw new TypeError(e("invalid argument. First argument must be a function. Value: `%s`.",r));for(t=new Array(arguments.length-1),s=1;s<arguments.length;s++)t[s-1]=arguments[s];return i;function i(){var n,e;for(n=t.slice(),e=0;e<arguments.length;e++)n.push(arguments[e]);return r.apply(null,n)}};export{s as default};
//# sourceMappingURL=index.mjs.map
