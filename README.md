# Convert string to byte array

[![Build Status](https://travis-ci.org/john-yuan/str2bytes.js.svg?branch=master)](https://travis-ci.org/john-yuan/str2bytes.js)

This library helps you to convert string to byte array in javascript. It can convert any string you can use in javascript, including a string containing emoji (✌️). It mainly makes use of the following functions within the enviorenment (browser & Node.js):

* [encodeURIComponent(str)][encodeURIComponent]
* [decodeURIComponent(encodedURI)][decodeURIComponent]
* [parseInt(string, radix)][parseInt]
* [Number.prototype.toString([radix])][toString]
* [String.prototype.charCodeAt(index)][charCodeAt]

[encodeURIComponent]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
[decodeURIComponent]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[parseInt]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[toString]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
[charCodeAt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

> The main target enviorenment of this library is the browser, but you can use it in Node.js if you like.

## Example

Convert string to byte array:

```js
var str = '🍎 is 苹果';
var bytes = str2bytes(str);

// [ 240, 159, 141, 142, 32, 105, 115, 32, 232, 139, 185, 230, 158, 156 ]
console.log(bytes);
```

Convert byte array to string:

```js
var bytes = [ 240, 159, 141, 142, 32, 105, 115, 32, 232, 139, 185, 230, 158, 156 ];
var str = bytes2str(bytes);

// 🍎 is 苹果
console.log(str);
```

## API

```js
/**
 * Convert the given string to byte array
 * 
 * @param {string} str the string to be converted to byte array
 * @returns {number[]}
 */
 str2bytes(str);
 
 //----------------------------------------------------------------
 
 /**
 * Convert the given byte array to string
 * 
 * @param {number[]} bytes The byte array to be converted to string
 * @returns {string}
 */
 bytes2str(bytes);
```

> As you can see, we just put the API into the global namespace. If you don't want the global namespace to be polluted, feel free to copy the source code and give it a namespace.
