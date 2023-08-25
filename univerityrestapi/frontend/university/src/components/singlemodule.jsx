import React, {useState, useEffect} from "react";

function SingleModule()
{
    const[showModule, setShowModule] = useState(["showModule"]);
    const[displayInfo, setDisplayInfo] = useState(false);
    const[output, setOutput] = useState("");
    const handleExecuteClick = () => {
        setDisplayInfo(true);
        setOutput(showModule.full_name)
    };
    const[moduleShortcode, setModuleShortcode] = useState("");
    const handleInputChange = (event) => {
        const newModuleShortcode = event.target.value.toUpperCase();
        setModuleShortcode(newModuleShortcode);
    };

    useEffect(()=>{
      if(moduleShortcode !== '') {
        fetch(`http://127.0.0.1:8000/api/module/${moduleShortcode}`)
        .then(response=>response.json())
        .then(data=>{
            setShowModule(data)
        })
        .catch(err=>console.log(err))
    }
    }, [moduleShortcode]
    )

    return(
        <div>
            <label>Enter Module Code to View Module:</label><br></br>
            <input type="text" value={moduleShortcode} onChange={handleInputChange} />
            <button onClick={handleExecuteClick}>Execute</button>
            <ul>
                {displayInfo && output}
            </ul>

        </div>
    );
}

export default SingleModule;