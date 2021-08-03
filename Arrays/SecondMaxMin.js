console.log("Program to find 2nd Largest and Smallest elements");
let upper_limit = 999;
let lower_limit = 100;
let range = upper_limit-lower_limit;
let randNumArr = new Array();
for(i=0; i<10; i++){
    let number = Math.floor(Math.random() * 1000) % range + lower_limit;
    randNumArr.push(number);
}
console.log("Array of 10 Random 3 Digit Number:\n["+randNumArr+"]");
let max,min,secMax,SecMin;
for(j=0; j<randNumArr.length; j++){
    if (j==0){
        max=min=secMax=SecMin=randNumArr[0];
        continue;
    }
    if (randNumArr[j] > max) {
        secMax = max;
        max = randNumArr[j];
    } else if (randNumArr[j] > secMax) {
        secMax = randNumArr[j];
    } else if (randNumArr[j]< min) {
        secMin = min;
        min = randNumArr[j];
    } else if (randNumArr[j] < secMin) {
        secMin = randNumArr[j];
    }
}
console.log("1st Maximum:"+max+"\n2nd Maximum:"+secMax+
"\n1st Minimum:"+min+"\n2nd Minimum:"+secMin);