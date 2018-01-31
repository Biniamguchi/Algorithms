function ellimNegNum(){
    var x = [1, 5, 10, -2];
    for (var i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 0;
        }
    }
    console.log(x);
}
ellimNegNum()