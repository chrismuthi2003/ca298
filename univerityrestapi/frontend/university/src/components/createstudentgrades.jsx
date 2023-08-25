import React, { useState, useEffect } from "react";

function CreateStudentGrades() {
  const usedValues = [];
  const [grades, setGrades] = useState([]);
  const [cohort, setCohort] = useState([]);
  const [module, setModule] = useState([]);
  const [student, setStudent] = useState([]);
  
  const [form, setForm] = useState({
    module: "",
    ca_mark: "",
    exam_mark: "",
    cohort: "",
    student: "",
  });

  useEffect(() => {
    Promise.all([
      fetch("http://127.0.0.1:8000/api/grade/"),
      fetch("http://127.0.0.1:8000/api/student/"),
      fetch("http://127.0.0.1:8000/api/cohort/"),
      fetch("http://127.0.0.1:8000/api/module/"),
    ])
      .then(([gradeResponse, studentResponse, cohortResponse, moduleResponse]) => {
        return Promise.all([
          gradeResponse.json(),
          studentResponse.json(),
          cohortResponse.json(),
          moduleResponse.json(),
        ]);
      })
      .then(([gradesData, studentData, cohortData, moduleData]) => {
        setGrades(gradesData);
        setStudent(studentData);
        setCohort(cohortData);
        setModule(moduleData);
      })
      .catch((error) => console.log(error));
  }, []);  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  
    const studentLink = "https://127.0.0.1:8000/api/student/";
    const linkedStudent = studentLink + form.student + "/";
  
    const linkedForm = {
      ...form,
      student: linkedStudent
    };
  
    fetch("http://127.0.0.1:8000/api/grade/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(linkedForm),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .finally(() => {
        setForm({
            module: "",
            ca_mark: "",
            exam_mark: "",
            cohort: "",
            student: "",
        });
      });
  };
  

  const handleCohortChange = (event) => {
    const selectedCohort = event.target.value;
    setForm((prevState) => ({
      ...prevState,
      cohort: selectedCohort,
    }));
  };

  const handleModuleChange = (event) => {
    const selectedModule = event.target.value;
    setForm((prevState) => ({
      ...prevState,
      module: selectedModule,
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
    <form id="student-form" onSubmit={handleSubmit}>
        <div>
        <label>
          Module 
          <select name="student" value={form.grades} onChange={handleModuleChange}>
            <option value="" disabled selected>Select Module</option>
            {grades.map((grades) =>
              module.map((module) => {
              if (!usedValues.includes(grades.module) && !usedValues.includes(module.code)) {
                usedValues.push(grades.module);
                usedValues.push(module.code);
                return (
                  <option key={`${module.code}`} value={grades.module}>
                    {module.code}
                  </option>
                  );
                }
              })
            )}
        </select>
      </label>
      </div>
      <div>
        <label>Ca Mark </label>
        <input
          type="number"
          name="ca_mark"
          value={form.ca_mark}
          onChange={handleChange}
          max={100}
        />
      </div>
      <div>
        <label>Exam Mark </label>
        <input
          type="number"
          name="exam_mark"
          value={form.exam_mark}
          onChange={handleChange}
          max={100}
        />
      </div>
      <div>
        <label>
          Cohort 
          <select name="student" value={form.grades} onChange={handleCohortChange}>
          <option value="" disabled selected>Select Cohort</option>
            {grades.map((grades) =>
              cohort.map((cohort) => {
              if (!usedValues.includes(grades.cohort) && !usedValues.includes(cohort.name)) {
                usedValues.push(grades.cohort);
                usedValues.push(cohort.name);
                return (
                  <option key={`${cohort.name}`} value={grades.cohort}>
                    {cohort.name}
                  </option>
                  );
                }
              })
            )}
        </select>
      </label>
      </div>
      <div>
        <label>Student ID </label>
        <input
          type="number"
          name="student"
          value={form.student}
          onChange={handleChange}
          min={10000000}
          max={99999999}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateStudentGrades;
