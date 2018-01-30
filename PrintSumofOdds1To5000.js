function printSumofOdds1To5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2) {
        sum = sum + i;
    }
    console.log(sum);
}

printSumofOdds1To5000()