function addNums(a,b){
    var c=a+b;
    console.log(c);
}
addNums(10,20);
// console.log(c)

const calcPercent = function(m1, m2, m3, m4, m5=70, ){
    console.log(m1,m2, m3, m4, m5)
    let percent = (m1+m2+m3+m4+m5)/5
    console.log(`${percent} is the percent ` )
}
calcPercent(90,90,90,90,40)

 const fact = (n) => {
    let f = 1 ;
    for (let i=2; i<=n;i++)
    {
        f*= i;

    }
    // console.log(f);
    return(f);
}
const ans= fact(5);
console.log(ans)

// WAP to print all the perfect square
console.log('Perfect square')
const isPerfect =(num)=>{
   let sqrt=num**0.5;
   if(sqrt%1==0)
   {
    return true;

   }else{
    return false;
   }
    
}

for(let i=100; i<=500;i++){
    if(isPerfect(i)){
        console.log(i)
    }
}
