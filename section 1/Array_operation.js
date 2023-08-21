const nums =[1,2,3,7,9,5,3,4,10];
console.log(nums);
for(let i=0; i<nums.length; i++)
{     
console.log(nums[i]**2);
}

console.log('2nd mathod')
for (let n of nums){
    console.log(n**2)
}
console.log('3rd way')

nums.forEach( (e) => {console.log(e**2)});
//e take as parameter,the element is pass in this;


// WAP to print all even number from nums
   
// for(let i=0; i,nums.length; i++)
console.log('prime number')
for (let i of nums){
    if (i%2===0){

        console.log(i);
    }
}

console.log();
//element stored in new array

let newArry=[];
for(let i of nums){
    if(i%2===0) newArry.push(i)
}
console.log(newArry);
 console.log();
// filter function
// "call back function" is just only pass as a parameter and it call by function 
console.log('Filter Function')
const filteredArr = nums.filter((n)=>{return n%2===0});
console.log(filteredArr)

console.log();

const prices = [120, 4500 , 700, 1200, 999, 2300, 640, 140]
const newprice= prices.filter((i)=>{return i>1000 && i<3000} );
console.log('newprice')
console.log(newprice)
 console.log('newprice_1')
const newprice1 = prices.filter(p=> p>1000 && p<3000 ) 
console.log(newprice1)

console.log();

const cell=[120,55, 77,85,96,75];
const newcell=cell.filter((c) => {return c%2==0} )
console.log(newcell );

const color=['red','green','pink','oreng','black','white'];
const newcolor = color.filter((co)=>{return co.length>4})
console.log(newcolor)

const result = nums.map((n)=>{return n**2});
console.log(result);

const price2 = ['$654.567','$6546.545','$7874.51'];
console.log('$6545.5454'.slice(1));
const doller = price2.map((pri)=>{return parseInt(pri.slice(1))});
console.log('doller')
console.log(doller)
