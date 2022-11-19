import logo from './logo.svg';
import './App.css';
import QuestionsFetch from './services/fetching/questions';
import QuizesFetch from './services/fetching/quizes';


function App() {
  return (
    <div className="App">
      {/* { <QuestionsFetch type="multiple" yearFrom="1917" yearTo="1990" tags="II wojna swiatowa"/> } */}
      { <QuizesFetch /> }
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
