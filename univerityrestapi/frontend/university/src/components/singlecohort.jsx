import React, {useState, useEffect} from "react";

function SingleCohort()
{
    const[showCohort, setShowCohort] = useState(["showCohort"]);
    const[showStudents, setShowStudents] = useState(["showStudents"]);
    const[displayInfo, setDisplayInfo] = useState(false);
    const[output, setOutput] = useState("");
    const[output2, setOutput2] = useState("");
    const handleExecuteClick = () => {
        setDisplayInfo(true);
        setOutput(showCohort.name)
        setOutput2(showStudents.map(elem=>
            <li>{elem}</li>))
    };
    const[cohortShortcode, setCohortShortcode] = useState("");
    const handleInputChange = (event) => {
        const newCohortShortcode = event.target.value.toUpperCase();
        setCohortShortcode(newCohortShortcode);
    };

    useEffect(()=>{
      if(cohortShortcode !== '') {
        fetch(`http://127.0.0.1:8000/api/cohort/${cohortShortcode}`)
        .then(response=>response.json())
        .then(data=>{
            setShowCohort(data)
        })
        .catch(err=>console.log(err))
    }
    }, [cohortShortcode]
    )

    useEffect(()=>{
      if(cohortShortcode !== '') {
        fetch(`http://127.0.0.1:8000/api/student/?cohort=${cohortShortcode}`)
        .then(response=>response.json())
        .then(data1=>{
            setShowStudents(data1.map(e=>e.student_id))
        })
        .catch(err=>console.log(err))
    }
    }, [cohortShortcode]
    )

    return(
        <div>
            <label>Enter Cohort to View Students:</label><br></br>
            <input type="text" value={cohortShortcode} onChange={handleInputChange} />
            <button onClick={handleExecuteClick}>Execute</button>
            <ul>
                {displayInfo && output}
                {displayInfo && output2}
            </ul>

        </div>
    );
}

export default SingleCohort;