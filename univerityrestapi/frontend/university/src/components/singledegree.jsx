import React, {useState, useEffect} from "react";

function SingleDegree()
{
    const[showDegrees, setShowDegrees] = useState(["showDegrees"]);
    const[showCohorts, setShowCohorts] = useState(["showCohorts"]);
    const[displayInfo, setDisplayInfo] = useState(false);
    const[output, setOutput] = useState("");
    const[output2, setOutput2] = useState("");
    const handleExecuteClick = () => {
        setDisplayInfo(true);
        setOutput(showDegrees.full_name)
        setOutput2(showCohorts.map(elem=>
            <li>{elem}</li>))
    };
    const[degreeShortcode, setDegreeShortcode] = useState("");
    const handleInputChange = (event) => {
        const newDegreeShortcode = event.target.value.toUpperCase();
        setDegreeShortcode(newDegreeShortcode);
    };

    useEffect(()=>{
      if(degreeShortcode !== '') {
        fetch(`http://127.0.0.1:8000/api/degree/${degreeShortcode}`)
        .then(response=>response.json())
        .then(data=>{
            setShowDegrees(data)
        })
        .catch(err=>console.log(err))
    }
    }, [degreeShortcode]
    )

    useEffect(()=>{
      if(degreeShortcode !== '') {
        fetch(`http://127.0.0.1:8000/api/cohort/?degree=${degreeShortcode}`)
        .then(response=>response.json())
        .then(data1=>{
            setShowCohorts(data1.map(e=>e.name))
        })
        .catch(err=>console.log(err))
    }
    }, [degreeShortcode]
    )

    return(
        <div>
            <label>Enter Degree Shortcode to View Cohorts:</label><br></br>
            <input type="text" value={degreeShortcode} onChange={handleInputChange} />
            <button onClick={handleExecuteClick}>Execute</button>
            <ul>
                {displayInfo && output}
                {displayInfo && output2}
            </ul>

        </div>
    );
}

export default SingleDegree;