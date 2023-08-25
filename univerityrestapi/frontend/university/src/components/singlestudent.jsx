import React, {useState, useEffect} from "react";

function SingleStudent()
{
    const[showStudent, setStudent] = useState(["showStudent"]);
    const[showGrades, setGrades] = useState(["showGrades"])
    const[displayInfo, setDisplayInfo] = useState(false);
    const[output, setOutput] = useState("");
    const[output2, setOutput2] = useState("");
    const handleExecuteClick = () => {
        setDisplayInfo(true);
        setOutput(`${showStudent.first_name} ${showStudent.last_name}`)
        setOutput2(showGrades.map(grade =>
            <li key={grade.moduleCode}>{grade.moduleCode}: {grade.totalGrade}</li>))
    };
    const[studentID, setStudentID] = useState("");
    const handleInputChange = (event) => {
        const newStudentID = event.target.value.toUpperCase();
        setStudentID(newStudentID);
    };

    useEffect(()=>{
      if(studentID !== '') {
        fetch(`http://127.0.0.1:8000/api/student/${studentID}/`)
        .then(response=>response.json())
        .then(data=>{
            setStudent(data)
        })
        .catch(err=>console.log(err))
    }
    }, [studentID]
    )

    useEffect(()=>{
      if(studentID !== '') {
        fetch(`http://127.0.0.1:8000/api/grade/?student=${studentID}`)
        .then(response=>response.json())
        .then(data1=>{
            setGrades(data1.map(e=>({moduleCode: e.module.split("/")[5], totalGrade: e.total_grade})))
        })
        .catch(err=>console.log(err))
        }
    }, [studentID]
    )

    return(
        <div>
            <label>Enter Student ID to View Student Info:</label><br></br>
            <input type="number" value={studentID} onChange={handleInputChange} />
            <button onClick={handleExecuteClick}>Execute</button>
            <ul>
                {displayInfo && output}
                {displayInfo && <p>Grades:</p>}
                {displayInfo && <ul>{output2}</ul>}
            </ul>

        </div>
    );
}

export default SingleStudent;