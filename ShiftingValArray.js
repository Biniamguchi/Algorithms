function shiftValArr(){
    var x = [1, 5, 10, 7, -2];
    for (var i = 0; i < x.length-1; i++){
        
        x[i] = x[i+1];
    }
    x.pop();
    x.push(0);
    console.log(x);
}
shiftValArr()

// function shiftValArr(){
//     var x = [1, 5, 10, 7, -2];
//     for (var i = 0; i < x.length-1; i++){
        
//         x[i] = x[i+1];
//     }
//     x[x.length-1]=0;
//     console.log(x);
// }
// shiftValArr()
