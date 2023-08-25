function HeadingComponent({name="Christopher"}){
    const greetings = ["how are you",
        "how's it going",
        "where were you when the Westfold fell",
        "DId yOU pUT YOUr NAmE iN The hoBlet Of fIRE",
        "this is the way",
        "I was there the day Horus slew the Emperor",
        "where were you when Club Penguin Die?",
    ]
    const sayHello = (x,y) =>{
        console.log(x,y) // log the parameters to the terminal
        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
        return `Hello ${name}, ${randomGreeting}`;
    }
    return(
        <h1>{sayHello()}</h1>
    )
}
  export default HeadingComponent;