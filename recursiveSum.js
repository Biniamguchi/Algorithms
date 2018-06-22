
// Write a function called rSum that takes in a number as an argument
function rSum(n) {
  
  if (n === 1) {
    return 1;
  } 
  else {
  return rSum(n-1) + n;
  
  }
}
console.log(rSum(5));
