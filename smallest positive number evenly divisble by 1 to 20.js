function evenDivis(n) {
    if (n%2!==0) {
        return false;
    } else if (n%2!==0) {
        return false;
    } else if (n%3!==0) {
        return false;
    } else if (n%4!==0) {
        return false;
    } else if (n%5!==0) {
        return false;
    } else if (n%6!==0) {
        return false;
    } else if (n%7!==0) {
        return false;
    } else if (n%8!==0) {
        return false;
    } else if (n%9!==0) {
        return false;
    } else if (n%10!==0) {
        return false;
    } else if (n%11!==0) {
        return false;
    } else if (n%12!==0) {
        return false;
    } else if (n%13!==0) {
        return false;
    } else if (n%14!==0) {
        return false;
    } else if (n%15!==0) {
        return false;
    } else if (n%16!==0) {
        return false;
    } else if (n%17!==0) {
        return false;
    } else if (n%18!==0) {
        return false;
    } else if (n%19!==0) {
        return false;
    } else if (n%20!==0) {
        return false;
    } else {
        return true;
    }
}

    
for (i=1; i<500000000; i++) {
    if (evenDivis(i)===true) {
        console.log(i);
    }
}