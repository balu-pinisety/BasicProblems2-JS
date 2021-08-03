console.log("Program to find 2nd max and min from sorted array");
let upper_limit = 999;
let lower_limit = 100;
let range = upper_limit-lower_limit;
let randNumArr = new Array();
for(i=0; i<10; i++){
    let number = Math.floor(Math.random() * 1000) % range + lower_limit;
    randNumArr.push(number);
}
console.log("Array of 10 Random 3 Digit Number:\n["+randNumArr+"]");
let sortArray = randNumArr.sort();
console.log("Sorted array of Random Numbers:\n["+sortArray+"]");
console.log("1st Maximum:"+sortArray[sortArray.length-1]+
"\n2nd Maximum:"+sortArray[sortArray.length-2]+
"\n1st Minimum:"+sortArray[0]+"\n2nd Minimum:"+sortArray[1]);