var bigo = [5,4,3,2,1];
var bigomega = [1,2,3,4,5];

var selectionSort = function (arr){
    for (var i = 0; i < arr.length; i++){
        console.log("Start of Big Iteration #",i);
        console.log(arr);
        var minIndex = i;
        for (var j = i; j < arr.length; j++) {
            console.log("=======small Iteration #", i);
            console.log(arr);
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if (minIndex != i){
            swap(arr, i, minIndex);
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
console.log(selectionSort(bigo));
console.log("\n\n\n\n\n\n");

console.log("Best case scenario for first bubble");
console.log(selectionSort(bigomega));
console.log("\n\n\n\n\n\n");