import {useState, useEffect} from "react";

function CatFacts(){
    const[isLoaded, setIsLoaded] = useState(false);
    const[facts, setFacts] = useState(["Cats are cool", "Cats are nice"])
    const displayFacts = () =>{
        return facts.map(elem=>
            <li>{elem}</li> // return the jsx to render
        )
    }
    useEffect(()=>{

        fetch("https://cat-fact.herokuapp.com/facts")
        .then(response=>response.json())
        .then(data=>{
            setFacts(data.map(e=>e.text))
            setIsLoaded(true);
        })
        .catch(err=>console.log(err))
    }
    )
    if(isLoaded){
        return(
            <ul>
                {displayFacts()}
            </ul>
            )
    }
    else{
        return(
            <img src="loading.gif" />
        )
    }
}

export default CatFacts;