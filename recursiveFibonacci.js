
// Write a function iFibonacci that behaves like the following:

// rFibonacci(0) = 0           => 0
// rFibonacci(1) = 1           => 1
// rFibonacci(2) = 1           => 1
// rFibonacci(3) = 1 + 1       => 2
// rFibonacci(4) = 1 + 2       => 3
// rFibonacci(5) = 2 + 3       => 5
// rFibonacci(6) = 3 + 5       => 8

// Make sure your solution is recursive.

function recursiveFibonacci(n) {
  var fibs = [0,1];
  
  if (n === 0 || n ===1){
    return n;
    } else {
      
    return recursiveFibonacci(n-2) + recursiveFibonacci(n-1)
    }    
}
console.log(recursiveFibonacci(1));