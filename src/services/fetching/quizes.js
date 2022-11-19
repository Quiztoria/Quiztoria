import React from 'react';
import FetchController from './main'; 

class QuizesFetch extends React.Component {
    constructor(props){
        super(props);

        this.getMultipleQuiz = this.getMultipleQuiz.bind(this);
        this.getSingleQuiz = this.getSingleQuiz.bind(this);

        // init, the one who rules them all.
        this.handleRequest(props);
    }

    handleRequest(){
        const { type } = this.props;

        if ( !type || type === 'single' ) {
            this.getSingleQuiz(this.props);
        } else {
            this.getMultipleQuiz(this.props);
        }
    }

    saveQuiz( accountId, questionsId, quizName, quizLevel ) {
        const fetch = new FetchController();
        console.log(fetch.makeRequest('quiz/5', 'post', {accountId, questionsId, quizName, quizLevel}));
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