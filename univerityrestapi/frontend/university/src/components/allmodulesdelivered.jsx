import React, {useState, useEffect} from "react";

function ModulesDelivered()
{
    const[showModulesDelivered, setShowModulesDelivered] = useState(["showModulesDelivered"]);
    const[displayInfo, setDisplayInfo] = useState(false);
    const[output, setOutput] = useState("");
    const handleExecuteClick = () => {
        setDisplayInfo(true);
        setOutput(showModulesDelivered.map(elem=>
            <li>{elem}</li>))
    };
    const[modulesDeliveredShortcode, setModulesDeliveredShortcode] = useState("");
    const handleInputChange = (event) => {
        const newModulesDeliveredShortcode = event.target.value.toUpperCase();
        setModulesDeliveredShortcode(newModulesDeliveredShortcode);
    };

    useEffect(()=>{
      if(modulesDeliveredShortcode !== '') {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${modulesDeliveredShortcode}`)
        .then(response=>response.json())
        .then(data=>{
            setShowModulesDelivered(data.map(e=>e.full_name))
        })
        .catch(err=>console.log(err))
    }
    }, [modulesDeliveredShortcode]
    )

    return(
        <div>
            <label>Enter Cohort Shortcode to View Modules Delivered:</label><br></br>
            <input type="text" value={modulesDeliveredShortcode} onChange={handleInputChange} />
            <button onClick={handleExecuteClick}>Execute</button>
            <ul>
                {displayInfo && output}
            </ul>

        </div>
    );
}

export default ModulesDelivered;