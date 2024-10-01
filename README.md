<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# papply

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Partially apply function arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import papply from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-papply@esm/index.mjs';
```

#### papply( fcn\[, ...args] )

Partially applies function arguments.

```javascript
function add( x, y ) {
    return x + y;
}

var add2 = papply( add, 2 );

var sum = add2( 3 );
// returns 5

sum = add2( 7 );
// returns 9
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation does **not** set the `length` of the returned function. Accordingly, the returned function `length` is **always** `0`.
-   The evaluation context is **always** `null`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';
import papply from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-papply@esm/index.mjs';

var fcn;
var w;
var t;
var s;
var v;
var i;

function add( x, y, z, w, t, s ) {
    return x + y + z + w + t + s;
}

fcn = papply( add, 5, 4, 3 );

for ( i = 0; i < 100; i++ ) {
    w = floor( randu() * 5 );
    t = floor( randu() * 10 );
    s = floor( randu() * 15 );
    v = fcn( w, t, s );
    console.log( '5+4+3+%d+%d+%d = %d', w, t, s, v );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-papply-right`][@stdlib/utils/papply-right]</span><span class="delimiter">: </span><span class="description">partially apply function arguments from the right.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-papply.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-papply

[test-image]: https://github.com/stdlib-js/utils-papply/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-papply/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-papply/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-papply?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-papply.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-papply/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-papply/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-papply/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-papply/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-papply/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-papply/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-papply/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-papply/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-papply/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/papply-right]: https://github.com/stdlib-js/utils-papply-right/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
