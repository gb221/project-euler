var i=0;
var limit=600851475143;
var primeFactorArray=[];

function isPrime(n) {
    if (n<2) {return false;}
    if (n!=Math.round(n)) {return false;}
    
    var prime=true;
    
    for (var i=2; i<=Math.sqrt(n); i++) {
        if (n%i===0) {prime=false;}
    }
    
    return prime;
}

for (i=0; i<=Math.sqrt(limit); i++) {
    if (isPrime(i)===true) {
        if (limit%i===0) {
            primeFactorArray.push(i);
        }
    }
}

console.log(primeFactorArray[primeFactorArray.length-1]);