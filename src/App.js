import logo from './logo.svg';
import './App.css';
import QuestionsFetch from './services/fetching/questions';


function App() {
  return (
    <div className="App">
      { <QuestionsFetch type="single" yearFrom="1917" yearTo="1990" tags="II wojna swiatowa"/> }
      
      <header className="App-header">
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
