import React, {useState, useEffect} from "react";

function CohortList()
{
    const[showCohorts, setShowCohorts] = useState(["showCohorts"]);

    const displayCohorts = () => {
        return showCohorts.map(elem=>
            <li>{elem}</li>
        )
    }

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/cohort/")
        .then(response=>response.json())
        .then(data=>{
            setShowCohorts(data.map(e=>e.name))
        })
        .catch(err=>console.log(err))
    }, []
    )

    return(
        <div>
            <ul>
                {displayCohorts()}
            </ul>
        </div>
    );
}

export default CohortList;