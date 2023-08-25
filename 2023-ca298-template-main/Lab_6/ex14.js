let people = '{ "person" : [' +
    '{ "name":"John Doe" , "age":19 , "address":"1 house number" } ]}';

const person = JSON.parse(people);

console.log(person.person[0].name);
console.log(person.person[0].age);
console.log(person.person[0].address);
