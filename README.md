# js-tsql-parser

##### [WIP] Adding support for TSQL, forked from [JavaScriptor/js-sql-parser](https://github.com/JavaScriptor/js-sql-parser)

> parse / stringify sql (select grammar) in js.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

sql grammar follows https://dev.mysql.com/doc/refman/5.7/en/select.html

## commonjs usage

`npm install --save js-tsql-parser`

```js
const parser = require('js-tsql-parser');
const ast = parser.parse('select * from dual');

console.log(JSON.stringify(ast, null, 2));

ast.value.selectItems.value[0].value = 'foo';
ast.value.from.value[0].value.value.value = 'bar';

console.log(parser.stringify(ast));
// SELECT foo FROM bar
```

## script tag

```js
<script src="./dist/parser/tsqlParser.js"><script/>

var tsqlParser = window.tsqlParser;
var ast = tsqlParser.parse('select * from dual');
var sql = tsqlParser.stringify(ast);
```

## AMD supported

...

## unsupported grammar currently

- Hexadecimal Literals as x'01af' X'01af', but 0x01af is supported.
- keyword COLLATE.
- parammarker: keyword PREPARE / EXECUTE / DEALLOCATE
- variable: keyword SET / CREATE PROCEDURE / CREATE FUNCTION
- identifier expr: ODBC escape syntax
- matchexpr: Full-Text Search Functions. // to support
- intervalexpr: Date INTERVAL keyword.   // to support
- into outfile: INTO OUTFILE keyword.    // to support

## TODO

- ${value} like value place holder support.

## Build

- Run `npm run build` to build the distributable.

## LICENSE

MIT

[npm-image]: https://img.shields.io/npm/v/js-tsql-parser.svg
[npm-url]: https://npmjs.org/package/js-tsql-parser
[downloads-image]: https://img.shields.io/npm/dm/js-tsql-parser.svg
[downloads-url]: https://npmjs.org/package/js-tsql-parser
