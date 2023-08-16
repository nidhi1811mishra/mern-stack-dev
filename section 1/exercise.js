//WAP a program if a number is divisible by 7 or 11
let a=49
if(a%7==0 && a%11==0){ 
console.log('divisible by 7 and 11');}
else if(a%11==0)
{ console.log('divisble by 11 only');
}else if(a%7==0){
    console.log('divisible by 7 only')
}
else
{ 
console.log('not divisible');
}

console.log('234'==234);//true
console.log('234===234');//false it also check data type

console.log(7**3);
console.log(49**0.5);

//1. WAP to check if a number is perfect square
console.log('--1. Number is perfect square--');
let x=16;
 m=x**0.5;
 if(m%1==0)
 {
    console.log(`${x} is perfect squart `)
 } else{ 
 console.log(`${x} is not a perfect sqrt`)
 }

//2. WAP to print all perfect square in range of 100 to 500
console.log('--2. Perfect square in range of 100 to 500--');
let k=0,s,t;
// for(s=100;s<=500;s++)
// {
    // for(t=1;t<=s;t++)
    // {
        // t=parseInt(t**0.5);
        //   k++
    // }
    // if(t==k)

// }


for(let i=100;i<=500;i++)
{s=parseInt(i**0.5);
     console.log(s)
     k=i;    
}

//3. WAP to print fibonacci series
console.log('--3. Fibonacci series--');
let A=0;
let B=1;
let N=10 , F;
console.log(A)
console.log(B)
F= A+B;
while(F<=10){
    console.log(F);
    A=B;
    B=F;
    F=A+B;
     
}

//4.  WAP to check if a number is palindrome 
console.log('--4. Palindrome--')
let n =1234321,l;
let p=0
l=n;

while(n>0)
{
   let d=n%10 
   p= p*10 + d;
   n=parseInt(n/10) 
}
if(l==n){
console.log(``);
} 


//5. WAP to print all prime number in range of 100 to 2000
console.log('--5. All prime number in range 100 to 2000');
let num =0;
let i,j; 
for(i=101 ; i<=2000 ; i++)
{   
    for(j=1;j<=i;j++){
        if(i%j==0)
            num++
        
    }
      if(num==2)
        console.log(i)
        num=0
}

   
