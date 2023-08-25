import React, {useState, useEffect} from "react";

function DegreeList()
{
    const[showDegrees, setShowDegrees] = useState(["showDegrees"]);
    const[displayInfo, setDisplayInfo] = useState(false);
    const handleClick=()=>{
        setDisplayInfo(!displayInfo);
    };

    const displayDegrees = () => {
        return showDegrees.map(elem=>
            <li>{elem}</li>
        )
    }

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/degree/")
        .then(response=>response.json())
        .then(data=>{
            setShowDegrees(data.map(e=>e.full_name))
        })
        .catch(err=>console.log(err))
    }, []
    )

    return(
        <div>
            <ul>
                {displayDegrees()}
            </ul>
        </div>
    );
}

export default DegreeList;