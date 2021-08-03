console.log("program to store and display repeated numbers");
let twiceArr=new Array();
for(i=1;i<100;i++){
    nmb = Math.floor(Math.random() *100)+1;
    if (nmb%11==0) {
        twiceArr.push(nmb);
    }
}
console.log("Twicw Values by Randm: "+twiceArr);