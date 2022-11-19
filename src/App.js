import logo from './logo.svg';
import './App.css';
import QuestionsFetch from './services/fetching/questions';
import QuizesFetch from './services/fetching/quizes';


function App() {
  const forButtons = new QuestionsFetch({disableHandler:true});
  const dataToSend = {            
    "answCorrect": "tak",
    "answOpt1": "nie",
    "answOpt2": "nie",
    "answOpt3": "nie",
    "dateEnd": "2022-11-19T21:11:55.435Z",
    "dateStart": "2022-11-19T21:11:55.435Z",
    "questionString": "test" 
  }

  return (
    <div className="App">
      {/* { <QuestionsFetch type="single" yearFrom="1917" yearTo="1990" tags="II wojna swiatowa"/> } */}
      {/* { <QuizesFetch type="save" accountId="1" questionsId="1,2,3" quizName="test" quizLevel="average"/> } */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={() => forButtons.saveQuestion(dataToSend)} >
          MAKE REQUEST
        </a>
      </header>
    </div>
  );
}

export default App;
