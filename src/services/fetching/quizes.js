import React from 'react';
import FetchController from './main'; 

class QuizesFetch extends React.Component {
    constructor(props){
        super(props);

        this.getMultipleQuiz = this.getMultipleQuiz.bind(this);
        this.getSingleQuiz = this.getSingleQuiz.bind(this);

        // init, the one who rules them all.
        if(!this.props.disableHandler) this.handleRequest(props);
    }

    handleRequest(){
        const { type, accountId, questionsId, quizName, quizLevel } = this.props;
        
        console.log(type);

        if ( !type || type === 'single' ) {
            this.getSingleQuiz(this.props);
        } else if(type === 'save'){
            this.saveQuiz(accountId, questionsId, quizName, quizLevel);
        } else {
            this.getMultipleQuiz(this.props);
        }
    }

    saveQuiz( accountId, questionsId, quizName, quizLevel ) {
        const fetch = new FetchController();
        const body = {accountId, questionsId, quizName, quizLevel}
        console.log(fetch.makeRequest('quiz/5', 'POST', body));
    }

    getMultipleQuiz( yearFrom, yearTo, level, amount ){
        const fetch = new FetchController();
        console.log(fetch.makeRequest('quiz/5,6,7,8'));
    }
    
    getSingleQuiz( yearFrom, yearTo, level ){
        const fetch = new FetchController();
        console.log(fetch.makeRequest('quiz/5'));
    }

    render(){
        return '';
    }
}

export default QuizesFetch;