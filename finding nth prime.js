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
var nthPrime=10001;

while (primes.length<nthPrime) {
    if (isPrime(i)===true) {
        primes.push(i);
    }
    i++;
}

console.log(primes[primes.length-1]);