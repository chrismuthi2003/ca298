import {useState, useEffect} from "react";

function BookList(){
    const[isLoaded, setIsLoaded] = useState(false);
    const[book, setBook] = useState(["book"])
    const displayBooks = () =>{
        return book.map(elem=>
            <li>{elem}</li> // return the jsx to render
        )   
    }
    useEffect(()=>{

        fetch("http://127.0.0.1:8000/api/book/")
        .then(response=>response.json())
        .then(data=>{
            setBook(data.map(e=>e.title))
            setIsLoaded(true);
        })
        .catch(err=>console.log(err))
    }
    )
    if(isLoaded){
        return(
            <ul>
                {displayBooks()}
            </ul>
            )
    }
    else{
        return(
            <img src="loading.gif" />
        )
    }
}

export default BookList;