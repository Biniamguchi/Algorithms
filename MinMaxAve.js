function findMax(){
    var x = [1,5, 10, -2];
    var max =x[0];
    var min = x[0];
    var sum = 0;
    for (var i=0; i<x.length; i++){
        
        if (x[i]>max){
            max=x[i];
        }
        if (x[i]<min){
            min=x[i];
        }
        sum = sum+x[i];
    }
    console.log('Max =', max);
    console.log('Min =', min);
    console.log('Average =', sum/x.length);
}
findMax()