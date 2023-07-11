function add(a) {
    return function(b) {
      return a + b;
    }
  }
  
  const add5 = add(5);
  console.log(add5(3));

  //-----------------
  const multiply = (x,y) => x*y;

  console.log(multiply(2,6));


  const curriedMultiply = x => y => x*y;

  console.log(curriedMultiply(2)(5));

//-- Partial application using currying

function greet(greeting) {
    return function(name) {
      console.log(greeting + ', ' + name + '!');
    }
  }
  
  const sayHello = greet('Hello');
  sayHello('Ahmed'); 
  sayHello('Ali'); 
  


// Function Composition

// Functions
function addTwo(x) {
    return x + 2;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  function subtractTen(x) {
    return x - 10;
  }
  
  const composedFunction = (x) => subtractTen(multiplyByThree(addTwo(x)));
  
  console.log(composedFunction(5)); 
  

  
