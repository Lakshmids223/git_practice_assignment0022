
function primeCheck(n){
let count=0;
for(let i=0;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2){
    return true;
}
return false;
}
let answer=primeCheck(11);
if(ans===true){
console.log("prime");
}else{
console.lg("Not prime");
}