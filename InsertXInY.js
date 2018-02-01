// [1, 3, 5, 7] and X = 10, and Y = 2
// [1, 3, 10, 5, 7]
function insertXinY(){
    var arr = [1, 3, 5, 7];
    var x = 10;
    var y = 2;
   
    arr.push (0);
    for (var i = arr.length-1; i > y; i--){
        arr[i] = arr[i-1];
    }
    arr[y] = x;    

console.log(arr);
}
insertXinY()

// function insertXinY(){
//     var arr = [1, 3, 5, 7];    
//     var x = 10;
//     var y = 2;      
   
//     arr.push (0);
//     arr[arr.length - 1] =  arr[arr.length - 2];
//     arr[arr.length - 2] =  arr[arr.length - 3];
//     arr[y] = x;    

// console.log(arr);
// }
// insertXinY()
// [1,3,5,7]
// [1,3,5,7,0]
// [1,3,5,7,7]
// [1.3,5,5,7]
// [1,3,10,5,7]