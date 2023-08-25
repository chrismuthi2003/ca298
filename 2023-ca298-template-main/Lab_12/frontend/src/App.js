import logo from './logo.svg';
import './App.css';
import HeadingComponent from './components/heading';
import Mybutton from './components/button';
import SomeComponent from './components/Counter';
import CatFacts from './components/catfacts';
import BookList from './components/booklist';
import Book from './components/bookid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadingComponent />
        <Mybutton />
        <SomeComponent />
        <CatFacts />
        <BookList />
        <Book id='1' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
