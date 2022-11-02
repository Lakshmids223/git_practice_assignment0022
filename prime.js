//prime number or not
let count=0;
for(let i=0;i<=4;i++){
    if(4%i==0){
        count++;
    }
}
if(count==2){
    console.log("Yes");
}else{
    console.log("No");
}