//Write a function iFactorial that behaves like the following:

// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120
// Make sure your solution is iterative and not recursive. We will be implementing the recursive solution the next tab.

function iFactorial(n) {
  var multi = 1;
  for (var i = 1; i<=n; i++){
    multi = multi * i;
    
    }
    return multi;
}
console.log(iFactorial(5));