function randArr(){
    var x =[];
    for (var i = 0; i < 10; i++){
        x.push(Math.floor(Math.random()*101));
        // var randomInt = Math.floor(Math.random()*101)
        // x.push(randomInt);
        
    }
    console.log(x);
}
randArr()

