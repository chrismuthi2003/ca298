import logo from './logo.svg';
import './App.css';
import DegreeList from './components/degreelist.jsx';
import CohortList from './components/cohortlist';
import ModuleList from './components/modulelist';
import SingleDegree from './components/singledegree';
import SingleCohort from './components/singlecohort';
import SingleModule from './components/singlemodule';
import ModulesDelivered from './components/allmodulesdelivered';
import SingleStudent from './components/singlestudent';
import CreateDegree from './components/createdegree';
import CreateCohort from './components/createcohort';
import CreateModule from './components/createmodule';
import CreateStudent from './components/createstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import CreateStudentGrades from './components/createstudentgrades';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
