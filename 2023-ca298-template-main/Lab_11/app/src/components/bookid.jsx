import {useState, useEffect} from "react";

function Book({id}){
    const[isLoaded, setIsLoaded] = useState(false);
    const[book, setBook] = useState(["book"])

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/book/${id}/`)
        .then(response=>response.json())
        .then(data=>{
            setBook(data)
            setIsLoaded(true);
        })
        .catch(err=>console.log(err))
    }
    )
    if(isLoaded){
        return(
            <p>{book.title}<br></br>
                {book.author}<br></br>
                {book.release_year}<br></br>
                {book.inventory_number}<br></br>
                {book.genre}</p>
            )
    }
    else{
        return(
            <img src="loading.gif" />
        )
    }
}

export default Book;