// Let's set `fooBar` to the number 2
let fooBar = 2;
console.log(fooBar.toString(2));
// 10 (<- this is its binary representation)
// We're inserting (1) zero at the end of fooBar's binary
// representation
foobar = fooBar << 1;
console.log(foobar.toString(2));
// 100
// ...so this means fooBar, in decimal form, now equals 4. Rad!
console.log(foobar);
// 4

for ( let n = 0; n < 10; n++ )  
{  
	console.log( `${n} is ${n & 1 ? 'odd' : 'even'}` );  
} 
