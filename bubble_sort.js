var bigo = [5,4,3,2,1];
var bigomega = [1,2,3,4,5];

var bubbleSort = function (arr){
    for (var i = 0; i < arr.length-1; i++){
        console.log("Start of Big Iteration #",i);
        console.log(arr);
        //bubble up the element
        for (var j = 1; j < arr.length-1-i; j++) {
            console.log("=======small Iteration #", i);
            console.log(arr);
            if(arr[j] > arr[j+1]){
                swap(arr, j, j + 1)
            }
        }
        console.log("End of Big Iteration #",i);
        console.log(arr);
        console.log("\n\n\n\n\n\n");
    }
    return arr;
}
var swap = function (arr, indexOne, indexTwo){
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}
console.log("Worst case scenario for first bubble");
console.log(bubbleSort(bigo));
console.log("\n\n\n\n\n\n");

console.log("Best case scenario for first bubble");
console.log(bubbleSort(bigomega));
console.log("\n\n\n\n\n\n");


// var bigo = [5,4,3,2,1];
// var bigomega = [1,2,3,4,5];

// var betterBubble = function (arr){
//     var count = 0;
//     do{
//         var swapping =false;
            // console.log("Start of Big Iteration #",i);
            // console.log(arr);
        //bubble up the element
       // for (var i = 0; i < arr.length-1-count; i++){
        // console.log("Start of Big Iteration #",i);
        // console.log(arr);
        // if(arr[i] > arr[i+1]){
        //     swap(arr, i, i + 1);
        //     swapping = true;
        //     }
        // }
        // count ++;
        // } while (swapping === true)
        // console.log("End of Big Iteration #",i);
        // console.log(arr);
        // console.log("\n\n\n\n\n\n");
//         return arr;
//     }
    

// var swap = function (arr, indexOne, indexTwo){
//     var temp = arr[indexOne];
//     arr[indexOne] = arr[indexTwo];
//     arr[indexTwo] = temp;
// }
// console.log("Worst case scenario for first bubble");
// console.log(betterBubble(bigo));
// console.log("\n\n\n\n\n\n");

// console.log("Best case scenario for first bubble");
// console.log(betterBubble(bigomega));
// console.log("\n\n\n\n\n\n");
