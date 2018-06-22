
// Write a function rFactorial that behaves like the following:

// rFactorial(1) = 1                  => 1
// rFactorial(2) = 2 * 1              => 2
// rFactorial(3) = 3 * 2 * 1          => 6
// rFactorial(4) = 4 * 3 * 2 * 1      => 24
// rFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120
// copy
// Make sure your solution is recursive.

function recursiveFactorial(n) {
  
  if (n === 1) {
    return 1;
  } 
  else {
  return recursiveFactorial(n-1) * n;
  
  }
}
console.log(recursiveFactorial(5));