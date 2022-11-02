function checkPrime(number){
  let factors=0;
   for(a=1;a<=number;a++){
    if(number%a==0){
     factor++;
    }
   }

if(factor==2){
 return true;
}else{
 return false;
}
}

let output=checkPrime(13);
if(output==true){
console.log("Prime Number);
}else{
console.log("Not a Prime Number);
}