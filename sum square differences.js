
var sum1=0;
var sum2=0;

function sumSquare(n) {
    for (i=1; i<=n; i++) {
        sum1=sum1+i*i;
    }
}

function squareSum(n) {
    for (i=1; i<=n; i++) {
        sum2=sum2+i;
    }
    sum2=sum2*sum2;
}

sumSquare(100);
squareSum(100);

var sumDifference=sum2-sum1;
console.log(sumDifference);