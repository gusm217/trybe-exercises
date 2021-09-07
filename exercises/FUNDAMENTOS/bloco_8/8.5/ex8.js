const assert = require("assert");

// escreva greet abaixo
const greet = (name = "nameless person", greeting = "Hi") =>
  `${greeting} ${name}`;

// console.log(greet("John", "Good morning"));

assert.strictEqual(greet("John"), "Hi John");
assert.strictEqual(greet("John", "Good morning"), "Good morning John");
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela");
