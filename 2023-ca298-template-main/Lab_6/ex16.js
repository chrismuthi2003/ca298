const person = { 
    name: "John Doe",
    sayHello: function()
    {
      return this.name;
    }
};

console.log("Helloe my name is " + person.sayHello());
