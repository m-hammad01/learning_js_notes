let numbers = [1, 2, 3, 4, 5, 6, 7];

let mulnumber = numbers.map(number => number*2);
console.log(numbers)
console.log(mulnumber)

let fileterdnumbers = numbers.filter(number => (number>3) );
console.log(fileterdnumbers)

let reduceValue = numbers.reduce((acc,curr) => acc* curr)
console.log(reduceValue)