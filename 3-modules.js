
const names = require('./4-names');
const func = require('./5-utils');
const data = require('./6-alternative-way')
require('./7-mind-grenade') // when there is a function that is executed within the module

const {john , peter} = names; // object destructuring
const {items , singlePerson} = data;
const sayHi = func;  

items.map((item) => {
    console.log(item);
    
})

const {name} = singlePerson 

console.log(singlePerson);


// console.log(sayHi);
// console.log(data);


sayHi(john);
sayHi(peter);
sayHi('Susan');
sayHi(name)





