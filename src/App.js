import React from 'react';
import './App.css';
import logo from './logo.svg';
import QuestionsFetch from './services/fetching/questions';
import QuizesFetch from './services/fetching/quizes';
import MEiNFetch from './services/fetching/meinApi';

class App extends React.Component{
  constructor(){
    super()
    this.state = { 
      questionDeleteRequest: {id: 1}, 
      questionGetRequest: {id: 1},
      questionGetRequestIds: {id: []},

      quizGetRequest: {id: 1},
      quizDeleteRequest: {id: 1},
      
      // Add question to quiz
      quizQuestionId: {id: 1},
      quizId: {id: 1}
    }
  }

  // Question related consts
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
  questionGetAllRequest    = { itemsPerPage: 10, page:0 };

  // Quiz related consts
  for2Buttons = new QuizesFetch({disableHandler:true});
  quizPostRequest = { name: "jakis quiz" }
  quizGetAllRequest = { itemsPerPage: 10, page:0 };

  // MEin related
  for3Button = new MEiNFetch();

  handleInput(e){
    const nameOfState = e.target.name;

    this.setState({[nameOfState]: {id: parseInt(e.target.value)}})
  }

  render(){
    return (
      <div className="App">
        {/* { <QuestionsFetch id="1" type="single" yearFrom="1917" yearTo="1990" tags="II wojna swiatowa" /> } */}
        {/* { <QuizesFetch type="save" accountId="1" questionsId="1,2,3" quizName="test" quizLevel="average"/> } */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a onClick={() => this.forButtons.getAllQuestions(this.questionGetAllRequest)} >
            QUESTION - GET ALL REQUEST
          </a>

          <a onClick={() => this.forButtons.getSingleQuestion(this.state.questionGetRequest)} >
            QUESTION - GET SINGLE REQUEST
          </a>
          <input type="number" name="questionGetRequest" onChange={this.handleInput.bind(this)}/>

          <a onClick={() => this.forButtons.saveQuestion(this.questionPostRequest)} >
            QUESTION - POST REQUEST
          </a>

          <a onClick={() => this.forButtons.deleteQuestion(this.state.questionDeleteRequest)} >
            QUESTION - DELETE REQUEST
          </a>
          <input type="number" name="questionDeleteRequest" onChange={this.handleInput.bind(this)}/>
  
          <hr style={{width:"300px"}}/>

          <a onClick={() => this.for2Buttons.getSingleQuiz(this.state.quizGetRequest)} >
            QUIZ - GET REQUEST
          </a>
          <input type="number" name="quizGetRequest" onChange={this.handleInput.bind(this)}/>

          <a onClick={() => this.for2Buttons.saveQuiz(this.quizPostRequest)} >
            QUIZ - POST REQUEST
          </a>

          <a onClick={() => this.for2Buttons.deleteQuiz(this.state.quizDeleteRequest)} >
            QUIZ - DELETE REQUEST
          </a>
          <input type="number" name="quizDeleteRequest" onChange={this.handleInput.bind(this)}/>

          <a onClick={() => this.for2Buttons.addQuestionToQuiz({quizId:this.state.quizId, quizQuestionId:this.state.quizQuestionId})} >
            QUIZ - POST REQUEST -> Add Question To Quiz
          </a>
          <a onClick={() => this.for2Buttons.deleteQuestionFromQuiz({quizId:this.state.quizId, quizQuestionId:this.state.quizQuestionId})} >
            QUIZ - DELETE REQUEST -> Remove Question From Quiz
          </a>
          <input type="number" name="quizQuestionId" onChange={this.handleInput.bind(this)}/>
          <input type="number" name="quizId" onChange={this.handleInput.bind(this)}/>

          <hr style={{width:"300px"}}/>

          <a onClick={() => this.for3Button.getPlacowki()} >
            MEiN - GET REQUEST -> GET PLACOWKI
          </a>
        </header>
      </div>
    );
  }

}

export default App;