function squareVal(){
    var x = [1,5, 10, -2];    
    
    for (var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];       
    }     
    console.log(x);
}

squareVal()