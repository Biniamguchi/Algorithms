// Go ahead and implement a function iSum that behaves just like rSum but instead of using recursion to implement the solution it uses iteration.

// iSum(1) = 1                  => 1
// iSum(2) = 1 + 2              => 3
// iSum(3) = 1 + 2 + 3          => 6
// iSum(4) = 1 + 2 + 3 + 4      => 10
// iSum(5) = 1 + 2 + 3 + 4 + 5  => 15

function iSum(n) {
  var sum = 0;
  for (var i = 1; i<=n; i++){
    sum = sum + i;
    
    }
    return sum;
}
console.log(iSum(5));
