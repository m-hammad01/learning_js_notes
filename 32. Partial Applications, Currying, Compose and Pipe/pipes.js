const pipe = (...functions) => (input) =>
  functions.reduce((result, fn) => fn(result), input);

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const subtractTen = (x) => x - 10;

const transform = pipe(addTwo, multiplyByThree, subtractTen);
console.log(transform(5)); 


// // import R from 'ramda';
// const R = require('ramda') 

// f1 = R.compose (addTwo,multiplyByThree,subtractTen)
// console.log('f1(5): compose ', f1(5))

// f2 = R.pipe (addTwo,multiplyByThree,subtractTen)
// console.log('f2(5): pipe ', f2(5))