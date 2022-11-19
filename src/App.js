import logo from './logo.svg';
import './App.css';
import QuestionsFetch from './services/fetching/questions';
import QuizesFetch from './services/fetching/quizes';


function App() {
  const forButtons = new QuizesFetch({disableHandler:true});

  return (
    <div className="App">
      {/* { <QuestionsFetch type="multiple" yearFrom="1917" yearTo="1990" tags="II wojna swiatowa"/> } */}
      {/* { <QuizesFetch type="save" accountId="1" questionsId="1,2,3" quizName="test" quizLevel="average"/> } */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={() => forButtons.saveQuiz(1, '1,2,3', 'test', 'avg')} >
          MAKE REQUEST
        </a>
      </header>
    </div>
  );
}

export default App;
