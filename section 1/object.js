const rollnums = [453, 457, 789,];

const anm = ['nidhi ','8h7',3456,'b'];
const student = {
    name : 'nidhi',
    email : 'nidhi@gamil.com',
    password : 'nidhi123'
}
console.log(student.name);
console.log(student.email);
console.log(student['password'])
student.password = 'bhfuhtwh' //replacing place

student.address = 'lucknow'; // adding new key value
console.log(student);

const smartphone = {
    brand : "samsung",
    model : "galaxy M31",
    price: 14999,
    color: ["blue","black","white"],
};
console.log(smartphone.color[1]);
smartphone.color.push("red")
console.log(smartphone)
smartphone.color[0] = 'skyblue'; //replacing new colo
console.log(smartphone)
console.log()
smartphone.color[2]='orang'
console.log(smartphone)

smartphone.color.unshift('pink') //adding new color at biginnig
console.log(smartphone)
console.log()
const smartphones = [ 
    {brand : 'samsang', model : 'galaxy M31', price : 49999 , color :['blue','black'] },
    {brand : 'oppo', model : 'A15', price : 24999, color : ['silver','red'] },
    {brand : 'Oneplse', model : 'Nord', price : 35999 , color :['black','sopparia'] },
    {brand : 'Nokia', model : 'Lunina 345', price : 36999 , color :['white','blue'] },

]
 console.log(smartphones)

 console.log(smartphones[0].model);
 console.log(smartphones[0].color[1]);
 console.log()
 
 //print oneplse price

 console.log(smartphones[2].price)
//chnage the model of oppo

smartphones[1].model='C15';
// chnage the second color of Nokia
smartphones[3].color[1]='green';

// add a color in onepluse nord 
smartphones[2].color.push('white');
console.log('print new data')

console.log(smartphones);

 const brands = smartphones.map ((sm) => {return sm.brand});
 console.log(brands);

