import logo from './logo.svg';
import './App.css';
import QuestionsFetch from './services/fetching/questions';
import QuizesFetch from './services/fetching/quizes';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = { questionDeleteRequest: {id: 1}, questionGetRequest: {id: 1} }
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
  
  questionGetAllRequest    = { itemsPerPage: 10, page:0 };

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
        </header>
      </div>
    );
  }

}

export default App;
