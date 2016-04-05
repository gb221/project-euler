console.time('time taken');

function isPrime(n) {
    if (n<2) {return false;}
    if (n!=Math.round(n)) {return false;}
    
    var prime=true;
    
    for (var i=2; i<=Math.sqrt(n); i++) {
        if (n%i===0) {prime=false;}
    }
    
    return prime;
}

var primes=[];
var i=0;
var primeCount=0;
var primesBelow=2000000;

while (i<=primesBelow) {
    if (isPrime(i)===true) {
        primes.push(i);
        primeCount++;
    }
    i++;
}

function add(a,b) {
    return a + b;
}

var sum=primes.reduce(add, 0);

console.log(sum);

console.timeEnd('time taken');