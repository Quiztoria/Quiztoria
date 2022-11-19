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
    "dateEnd": parseInt(2022),
    "dateStart": parseInt(2022),
    "questionString": "test" 
  }

  return (
    <div className="App">
      { <QuestionsFetch id="1" type="single" yearFrom="1917" yearTo="1990" tags="II wojna swiatowa" /> }
      {/* { <QuizesFetch type="save" accountId="1" questionsId="1,2,3" quizName="test" quizLevel="average"/> } */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={() => forButtons.getSingleQuestion({id:1})} >
          MAKE REQUEST
        </a>
      </header>
    </div>
  );
}

export default App;
