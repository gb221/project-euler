var multipleThree=[];
var multipleFive=[];
var i=1;
var total=0;

while (i<1000) {
    if (i%3===0) {
        console.log(i+" is a multiple of 3");
        multipleThree.push(i);
        total=total+i;
        i++;
    } else if (i%5===0) {
      console.log(i+" is a multiple of 5");
      multipleFive.push(i);
      total=total+i;
      i++;
    } else {
      i++;
  }
}

console.log(total+" is the total sum of the above.");