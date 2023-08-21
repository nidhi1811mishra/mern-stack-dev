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

student.address = 'lucknow';
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
smartphone.color[0] = 'skyblue';
console.log(smartphone)

smartphone.color.unshift('skyblue')
console.log(smartphone)
// console.log(smartphone[0].model)
// smartphone[2].color.push('white');
// console.log(smartphone)

