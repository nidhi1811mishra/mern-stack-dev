for(let i=0;i<10;i++)
{
    console.log(i)
}
console.log("--------")

//let num =77;
for(let i=100; i<=5000 ;i++)
{if(i%7===0 && i%11===0){ 
  
    console.log(i);
}
}

let a=10;
while(a<20){
    console.log(a);
    a+=2;
}
console.log('----');
//console.log('yhtfd')

let b = 723;
rev =0 ;
while(b>0)
{
    let d=b%10;
    rev= rev*10+d;
    b = parseInt(b/10);
}
console.log(rev);
 
console.log('--do while example---');
let c=10;
do{
    console.log(c);
}while(c>10)
