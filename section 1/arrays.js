const myarray = ['name',3245,345.66,true,console.log ];

console.log(myarray);
console.log(typeof myarray);

const movies= ['KGF','Pushpa','DDLJ','RRR','Thor','Insidious'];
console.log(movies.length); //also work with strings
// Addding new element
console.log('adding new element')
movies.push('Iron Man');// add new element
movies.unshift('Badman'); //add new elelment at the begining
console.log(movies);

// Indexing
console.log('indexding');
console.log(movies[5]); //also work with strings
console.log(movies[-4]);
console.log(movies.at(-4));
//Replacing
movies[4]='Flash';
console.log(movies);

//Removing---
console.log('Removing')
movies.pop(); // remove last element
movies.shift();//remove first element
console.log(movies);
movies.splice(3,2);
console.log(movies);
console.log( movies.slice(1,3));