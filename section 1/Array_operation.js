const nums =[1,2,3,7,9,5,3];
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
