
//Write a program that given a positive decimal number, will print its binary value.

let num = 20;
let rem = "";
  
  while (num>0){
     if (num % 2 === 1){
        rem = "1" + rem
     } else {(num % 2 === 0)
        rem = "0" + rem
     }

     num = Math.floor ( num / 2);
     }
     
     
  console.log(rem);
