function reverseVal(){
    var x = [-3,5,1,3,2,10];  
    
    for (var i = 0; i < Math.floor(x.length/2); i++){
        var temp = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = temp;
    }
    
    console.log(x);
}
reverseVal()


// function reverseVal(){
//     var x = [-3,5,1,3,2,10];
//     var temp = x[0];
//     var demp = x[1];
//     var pemp = x[2];

//     x[0] = x[x.length-1];
//     x[x.length-1] = temp;

//     x[1] = x[x.length-2];
//     x[x.length-2] = demp;

//     x[2] = x[x.length-3];
//     x[x.length-3] = pemp;
    
//     console.log(x);
// }
// reverseVal()