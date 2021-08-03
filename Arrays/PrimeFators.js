console.log("Program to find Prime Factors of given number");
let nmb = Math.floor(Math.random() *100);
console.log("Given Number by Random: "+nmb);
let primeFactArr = new Array();
for (j=2; j<=nmb; j++) {
    while (nmb%j==0){
        primeFactArr.push(j);
        nmb = nmb/j;
    }
}
console.log("Prime Factors of Given number: "+primeFactArr);