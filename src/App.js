import logo from './logo.svg';
import './App.css';
import QuestionsFetch from './services/fetching/questions';
import QuizesFetch from './services/fetching/quizes';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
  }

  forButtons = new QuestionsFetch({disableHandler:true});
  questionPostRequest = {            
    "answCorrect": "tak",
    "answOpt1": "nie",
    "answOpt2": "nie",
    "answOpt3": "nie",
    "dateEnd": parseInt(2022),
    "dateStart": parseInt(2022),
    "questionString": "test" 
  }
  questionDeleteRequest = { id: 1 };
  questionGetAllRequest    = { itemsPerPage: 10, page:0 };
  questionGetRequest    = { id: 1 };

  render(){
    return (
      <div className="App">
        { <QuestionsFetch id="1" type="single" yearFrom="1917" yearTo="1990" tags="II wojna swiatowa" /> }
        {/* { <QuizesFetch type="save" accountId="1" questionsId="1,2,3" quizName="test" quizLevel="average"/> } */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a onClick={() => this.forButtons.getAllQuestions(this.questionGetAllRequest)} >
            QUESTION - GET ALL REQUEST
          </a>
          <a onClick={() => this.forButtons.getSingleQuestion(this.questionGetRequest)} >
            QUESTION - GET SINGLE REQUEST
          </a>
          <a onClick={() => this.forButtons.saveQuestion(this.questionPostRequest)} >
            QUESTION - POST REQUEST
          </a>
          <a onClick={() => this.forButtons.deleteQuestion(this.questionDeleteRequest)} >
            QUESTION - DELETE REQUEST
          </a>
  
          <hr style={{width:"300px"}}/>
        </header>
      </div>
    );
  }

}

export default App;
