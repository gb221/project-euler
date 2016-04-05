var fibonacciArrayEven=[2];

var firstFibonacciNumber=1;
var secondFibonacciNumber=2;
var sum=0;

while (secondFibonacciNumber<4000000) {
    sum=firstFibonacciNumber+secondFibonacciNumber;
    if (sum%2===0) {
        fibonacciArrayEven.push(sum);
    }
    firstFibonacciNumber=secondFibonacciNumber;
    secondFibonacciNumber=sum; 
}

function add(a, b) {
    return a + b;
}

var sumEvenFibonacci=fibonacciArrayEven.reduce(add,0);

console.log(sumEvenFibonacci);