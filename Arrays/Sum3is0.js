console.log("Program to find 3 integers that makes '0' from array");
let nmb = Math.floor(Math.random() *10) + 5;
console.log("Given Number by Random for No.of Elements: "+nmb);
let randNumArr = new Array();
for(i=0; i<nmb; i++){
    let number = Math.floor(Math.random() * 10) -5;
    randNumArr.push(number);
}
console.log("Array of "+nmb+" Random Numbers:\n["+randNumArr+"]");
let count=0;
for(i=0;i<nmb-2;i++){
    for(j=1;j<nmb-1;j++){
        for(k=2;k<nmb;k++){
            if (randNumArr[i]+randNumArr[j]+randNumArr[k]==0){
                count++;
                console.log(count+":"+"{"+randNumArr[i]+","
                +randNumArr[j]+","+randNumArr[k]+"}");
            }
        }
    }
}