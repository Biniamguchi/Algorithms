function removeNeg(){
    var arr = [0, -1, 2, -3, 4, -5, 6];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr.pop(arr[i])
        }
    }
    console.log(arr);
}
removeNeg()