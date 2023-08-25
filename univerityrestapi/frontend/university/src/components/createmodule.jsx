import React, { useState, useEffect } from "react";

function CreateModule() {
  const usedValues = [];
  const [delivered_to, setDeliveredTo] = useState([]);
  const [degree, setDegree] = useState([]);
  const [form, setForm] = useState({
    code: "",
    full_name: "",
    delivered_to: [],
    ca_split: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/module/")
      .then((response) => response.json())
      .then((data) => setDeliveredTo(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then((response) => response.json())
      .then((data1) => setDegree(data1))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://127.0.0.1:8000/api/module/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .finally(() => {
        setForm({
          code: "",
          full_name: "",
          delivered_to: [],
          ca_split: "",
        });
      });
  };

  const handleDeliveredToChange = (event) => {
    event.preventDefault();
    const selectedDeliveredTo = Array.from(event.target.selectedOptions, (option) => option.value).join(",").split(",");
    setForm((prevState) => ({
      ...prevState,
      delivered_to: selectedDeliveredTo,
    }));
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form id="cohort-form" onSubmit={handleSubmit}>
      <div>
        <label>Code </label>
        <input
          type="text"
          name="code"
          value={form.code}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Full name </label>
        <input
          type="text"
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
        />
      </div> 
      <div>
        <label>
          Delivered to 
            <select name="delivered_to" value={form.delivered_to} onChange={handleDeliveredToChange} multiple={true}>
              {delivered_to.map((delivered_to) => (
                degree.map((degree => {
                if(!usedValues.includes(delivered_to.delivered_to) && !usedValues.includes(degree.name)) {
                  usedValues.push(delivered_to.delivered_to);
                  usedValues.push(degree.name);
                  return (
                    <option key={`${degree.degree}`} value={delivered_to.delivered_to}>
                      {degree.name}
                    </option>
                    );
                  }
                })
              )))}
            </select>
        </label>
      </div>
      <div>
        <label>Ca split </label>
        <input
          type="number"
          name="ca_split"
          value={form.ca_split}
          onChange={handleChange}
          max={100}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateModule;