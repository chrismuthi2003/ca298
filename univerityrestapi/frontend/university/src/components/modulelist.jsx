import React, {useState, useEffect} from "react";

function ModuleList()
{
    const[showModules, setShowModules] = useState(["showModules"]);

    const displayModules = () => {
        return showModules.map(elem=>
            <li>{elem}</li>
        )
    }

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/module/")
        .then(response=>response.json())
        .then(data=>{
            setShowModules(data.map(e=>e.full_name))
        })
        .catch(err=>console.log(err))
    }, []
    )

    return(
        <div>
            <ul>
                {displayModules()}
            </ul>
        </div>
    );
}

export default ModuleList;