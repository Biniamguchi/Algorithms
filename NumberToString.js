function numToStr(){
    var x = [-1, -3, 2];
    for (var i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 'Dojo';
        }

    }
    console.log(x);
}
numToStr()