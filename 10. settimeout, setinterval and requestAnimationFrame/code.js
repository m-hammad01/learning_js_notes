// function sayHello (){
//     console.log("Hello !")
// }

// setTimeout(sayHello, 1000)

// setInterval(sayHello, 1000)


// how clearInterval works

var intervalId;
var count=0;

function myfun(){
    count++;
    if( count > 3 ){
        clearInterval(intervalId);
    }
    console.log("do something!!");
}

intervalId = setInterval(myfun,1000);

/*
// requestAnimationFrame example

function animate() {
  // Perform animation logic here

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
requestAnimationFrame(animate);


*/