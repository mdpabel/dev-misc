/**
 * Monkey patching is a technique to add, modify, or suppress the default behavior of a piece of code
 * at runtime without changing its original source code.
 *
 * https://www.audero.it/blog/2016/12/05/monkey-patching-javascript/
 */

// Adding new methods to String
String.prototype.endsWith1 = function () {
  return this.indexOf("1", this.length - 1) ? true : false;
};

console.log("Hello1".endsWith1());

// Modifying the original behaviour
var log = console.log;
console.log = function () {
  log.apply(console, [new Date().toString()].concat(arguments));
};

console.log("HELLO");
