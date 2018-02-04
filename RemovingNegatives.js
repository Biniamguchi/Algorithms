function removeNeg(){
    var arr = [0, -1, 2, -3, 4, -5, 6];
    var countNeg = 0;
    for (var i = 1; i < arr.length; i++){
         if (arr[i] < 0){
           countNeg++;              
        }
         else {
           arr[i-countNeg] = arr[i];     
        }
    }
    while (countNeg--){
      arr.pop();
      }
    console.log(arr);
}
removeNeg()