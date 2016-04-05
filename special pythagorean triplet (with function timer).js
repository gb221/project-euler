/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

function pythag(a,b) {
    c=Math.sqrt(a*a+b*b);
    if (a+b+c===1000&&a<b&&b<c) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(a*b*c+" is their product");
    }
}


function genPythag(a,b,n) {
    while (b<=n) {
        pythag(a,b);
        a++;
        if (a===n+1) {
            b++;
            a=1;
        }
    }
}

console.time('time taken');

genPythag(1,1,900);

console.timeEnd('time taken');