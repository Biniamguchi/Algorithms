function swapTwoVal(){
    var x = [2, 3, 5, 7, 6];
    var temp = x[0];

    x[0]=x[x.length-1];
    x[x.length-1]=temp;
    
    console.log(x);
}
swapTwoVal()