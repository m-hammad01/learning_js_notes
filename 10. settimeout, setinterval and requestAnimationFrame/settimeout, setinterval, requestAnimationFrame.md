## setTimeout
    Allows to run a function once after the interval of ime.

## setInterval
    allows to run a funtion repeatedly, starting after the interval of time, then repeating continously at that interval.

## Why not to use setInterval
    - In case of async operations, setinterval will create long queues of request whicl will be very counterproductive.
    - In case of time intensive synchronous operations, it may break the rythm.
    - if any error occurs in setinterval code block, it will not stop execution but keeps on running faulty code. you will need a clearInterval function to stop it.
    - Alternatively, you can use setTimeout recursively in case of time sensitive operations.

## requestAnimationFrame
- The requestAnimationFrame method in JavaScript is used to schedule a function to be executed before the next repaint of the browser. It is commonly used for creating smooth and efficient animations on the web.

- ### Why use requestAnimationFrame?
    - smooth animations
    - efficient resource uses
    - better framerate control