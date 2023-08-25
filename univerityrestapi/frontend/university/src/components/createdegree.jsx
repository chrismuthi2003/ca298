import React, { useState } from "react";

function CreateDegree() {
  const [form, setForm] = useState({
    full_name: "",
    shortcode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://127.0.0.1:8000/api/degree/", {
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
          full_name: "",
          shortcode: "",
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form id="degree-form" onSubmit={handleSubmit}>
      <div>
        <label>Full Name </label>
        <input
          type="text"
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Shortcode </label>
        <input
          type="text"
          name="shortcode"
          value={form.shortcode}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateDegree;
