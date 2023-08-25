import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import { useState } from "react";
import DegreeList from "./degreelist";
import CohortList from "./cohortlist";
import ModuleList from "./modulelist";
import SingleDegree from './singledegree';
import SingleCohort from './singlecohort';
import CreateCohort from './createcohort';
import SingleModule from './singlemodule';
import SingleStudent from './singlestudent';
import CreateDegree from './createdegree';
import CreateModule from './createmodule';
import CreateStudent from './createstudent';
import CreateStudentGrades from './createstudentgrades';
import ModulesDelivered from './allmodulesdelivered';


function NavBar() {
    const [currentPage, setCurrentPage] = useState("");

    const handleDegreeListClick = () => {
      setCurrentPage("Degree List");
      window.history.pushState({ page: "degree_list" }, "degree_list", "/degree_list");
    };
    const handleCohortListClick = () => {
      setCurrentPage("Cohort List");
      window.history.pushState({ page: "cohort_list" }, "cohort_list", "/cohort_list");
    };
    const handleModuleListClick = () => {
      setCurrentPage("Module List");
      window.history.pushState({ page: "module_list" }, "module_list", "/module_list");
    };
    const handleSingleDegreeClick = () => {
      setCurrentPage("Single Degree");
      window.history.pushState({ page: "single_degree" }, "single_degree", "/single_degree");
    };
    const handleSingleCohortClick = () => {
      setCurrentPage("Single Cohort");
      window.history.pushState({ page: "single_cohort" }, "single_cohort", "/single_cohort");
    };
    const handleSingleModuleClick = () => {
      setCurrentPage("Single Module");
      window.history.pushState({ page: "single_module" }, "single_module", "/single_module");
    };
    const handleSingleStudentClick = () => {
      setCurrentPage("Single Student");
      window.history.pushState({ page: "single_student" }, "single_student", "/single_student");
    };
    const handleCreateDegreeClick = () => {
      setCurrentPage("Create Degree");
      window.history.pushState({ page: "create_degree" }, "create_degree", "/create_degree");
    };
    const handleCreateCohortClick = () => {
      setCurrentPage("Create Cohort");
      window.history.pushState({ page: "create_cohort" }, "create_cohort", "/create_cohort");
    };
    const handleCreateModuleClick = () => {
      setCurrentPage("Create Module");
      window.history.pushState({ page: "create_module" }, "create_module", "/create_module");
    };
    const handleCreateStudentClick = () => {
      setCurrentPage("Create Student");
      window.history.pushState({ page: "create_student" }, "create_student", "/create_student");
    };
    const handleCreateStudentGradesClick = () => {
      setCurrentPage("Create Student Grades");
      window.history.pushState({ page: "create_student_grades" }, "create_student_grades", "/create_student_grades");
    };
    const handleDeliveredModuleClick = () => {
      setCurrentPage("Delivered Module");
      window.history.pushState({ page: "delivered_module" }, "delivered_module", "/delivered_module");
    };

    let content;

    switch (currentPage) {
      case "Degree List":
        content = <DegreeList />;
        break;
      case "Cohort List":
        content = <CohortList />;
        break;
      case "Module List":
        content = <ModuleList />;
        break;
      case "Single Degree":
        content = <SingleDegree />;
        break;
      case "Single Cohort":
        content = <SingleCohort />;
        break;
      case "Single Module":
        content = <SingleModule />;
        break;
      case "Single Student":
        content = <SingleStudent />;
        break;
      case "Create Degree":
        content = <CreateDegree />;
        break;
      case "Create Cohort":
        content = <CreateCohort />;
        break;
      case "Create Module":
        content = <CreateModule />;
        break;
      case "Create Student":
        content = <CreateStudent />;
        break;
      case "Create Student Grades":
        content = <CreateStudentGrades />;
        break;
      case "Delivered Module":
        content = <ModulesDelivered />;
        break;
      default:
        content = null;
    }

  return (
    <>
    <Navbar bg="primary" expand="sm">
      <Container>
        <Navbar.Brand href="/home" style={{ color: "white" }}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light" style={{backgoundColor: '#282c34'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Degree" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={handleDegreeListClick} style={{ color: "black" }}>Degree List</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleSingleDegreeClick} style={{ color: "black" }}>Single Degree</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleCreateDegreeClick} style={{ color: "black" }}>Create Degree</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cohort" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={handleCohortListClick} style={{ color: "black" }}>Cohort List</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleSingleCohortClick} style={{ color: "black" }}>Single Cohort</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleCreateCohortClick} style={{ color: "black" }}>Create Cohort</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Module" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={handleModuleListClick} style={{ color: "black" }}>Module List</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleSingleModuleClick} style={{ color: "black" }}>Single Module</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleDeliveredModuleClick} style={{ color: "black" }}>Delivered Module</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleCreateModuleClick} style={{ color: "black" }}>Create Module</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Student" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={handleSingleStudentClick} style={{ color: "black" }}>Single Student</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleCreateStudentClick} style={{ color: "black" }}>Create Student</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={handleCreateStudentGradesClick} style={{ color: "black" }}>Create Student Grades</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <br></br>
    <Container variant="dark">{content}</Container>
    </>
  );
}

export default NavBar;