function greaterThanY(){
    var x = [1, 3, 5, 7];
    var y = 3;
    var count = 0;
    for (var i = 0; i < x.length; i++){
        if (x[i] > y){
            count = count + 1;
            // count ++;
        }
        console.log(count);
    }
}
greaterThanY()

// function greaterThanY(){
//     var x = [1, 3, 5, 7];
//     var y = 3;
//     var z = [];
//     for (var i = 0; i < x.length; i++){
//         if (x[i] > y){
//         z.push(x);
//         }        
//     }
//     console.log(z.length);
// }
// greaterThanY()