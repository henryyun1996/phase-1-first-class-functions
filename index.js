const { returns } = require("chai-spies");

function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function receivesAFunction(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function returnsANamedFunction() {
  return function addTwoNumbers(a, b) {
    return a + b;
  };
}

let adder = returnsANamedFunction();
let result = adder(3, 4);
console.log(result);

function returnsAnAnonymousFunction() {
  return function (a, b) {
    return a + b;
  };
}
