let people = '{ "person":[' +
    '{"name":"John Doe","age":"19","address":"1 Street Name"},' +
    '{"name":"Anna Smith","age":"20","address":"2 Street Name"},' +
    '{"name":"Peter Jones","age":"21","address":"3 Street Name"} ]}';


const personObj = JSON.parse(people);

for(let i = 0; i < personObj.person.length; i++)
{
    console.log(personObj.person[i].name);
}
