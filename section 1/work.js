//1- WAP to find all prime number in the range of 1000 - 4000 using function
    console.log('prime number in range of 1000 to 4000');
    function isprime(a,b)
    {
        let i,n;
        n=0;
       
            
    for( i=a;i<=b;i++)
    {
        for(j=1;j<=i;j++)
        { 
        if (i%j===0)
           n++;
         }
         if(n==2)
         console.log(i)
        n=0
        
        }
      }
      isprime(1  )
   
//2- WAP to print fibonacci series giving starting numbers and total numbers to print
      
       const printFibonacci = (st , en , len)=>{
        console.log(st);
        console.log(en);
        for(let i=0;i<=len-2; i++)
        {
            let c= st + en;
            console.log(c)
            st=en;
            en=c;
        }
       }
       
       printFibonacci(0,5,10)
// 3- WAP to accept height as perimeter and print pyramid pattern
        
const printPyramid = (n) => {
    for(let i=1; i<=n;i++){
        for(let j=1;j<=n-i;j++)
        {
            process.stdout.write(' ');
        }
        for(let k=1;k<=i;k++)
        {
            process.stdout.write('* ');
        }
        console.log();    //for new line
    }
}   
printPyramid(5); 
 

// Next method 
const printPyramid2 = (n) => {
    for(let i=1; i<=n;i++){
      process.stdout.write(' '.repeat(n-i));
      process.stdout.write('* '.repeat(i));
      console.log();
    }
}

printPyramid2(7)
// 4- WAP to calculate permutation using functon   
