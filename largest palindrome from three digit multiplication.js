var productArray=[];

function products(a, b, n) {
    while (b<=n) {
        var product=a*b;
        var text=product.toString();
        if (text[0]===text[5]&&text[1]===text[4]&&text[2]===text[3]&&text[0]==="9") {
            productArray.push(text);          
        }
        a++;
        if (a===n+1) {
            b++;
            a=1;
        }
    }
}

products(1,1,998);
console.log(productArray);