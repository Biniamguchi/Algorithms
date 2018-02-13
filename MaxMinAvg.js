function maxMinAvg() {
    var arr = [1,5,10,-2];
    var arrnew = [];
    var max =arr[0];
    var min = arr[0];
    var sum = 0;
    var ave = 0;
    for (var i=0; i<arr.length; i++){
        
        sum += arr[i];

       if (arr[i]>max){
           max = arr[i];
       }
       if (arr[i]<min){
           min = arr[i];
       }
    }
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(sum/arr.length);
    console.log(arrnew); 
}
maxMinAvg()

// Given an array with multiple values, write a function
//  that returns a new array that only contains the maximum, 
//  minimum, and average values of the original array. 
//  (e.g. [1,5,10,-2] will return [10,-2,3.5])