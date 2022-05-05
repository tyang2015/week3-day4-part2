/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times.

If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

***********************************************************************/
//  Two important concepts:

//  1. Specify the conditions for every possible return value.
//  There is a possibility of encountering an indefinite loop in the interval function.

//  2. You cannot return the object when inside of the object. It is not fully defined.

// function dynamicIntervalCount(cb, delay, amount) {

//   let interval = setInterval(function()
//     {
//         cb();
//         amount--;
//           if (amount === 0)(clearInterval( interval))
//     }, delay)
//       if (amount === undefined) {
//         return interval
//       }
//   }

function dynamicIntervalCount(cb, delay, amount){
  let interval = setInterval(function (){
    cb();
    amount--;
    if (amount ===0){
    clearInterval(interval)
    }
    }, delay)
  if (amount===undefined){
    return interval
  }
}


// dynamicIntervalCount(function() {
//     console.log('hi');
// }, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


// const timeoutObject = dynamicIntervalCount(function() {
//     console.log('hi');
// }, 500); // prints 'hi' at 500ms intervals indefinitely

// console.log(timeoutObject); // Timeout { ... }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
