function findAve(){
    var x = [1,3,5,7,20];
    var sum =0;
    for (var i=0; i<x.length; i++){
        sum += x[i];
    }
    var ave = sum/x.length;
    console.log(ave);
}
findAve()