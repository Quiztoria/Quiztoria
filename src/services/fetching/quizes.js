import React from 'react';
import FetchController from './main'; 

class QuizesFetch extends React.Component {
    constructor(props){
        super(props);

        this.getMultipleQuiz = this.getMultipleQuiz.bind(this);
        this.getSingleQuiz = this.getSingleQuiz.bind(this);
        this.removeQuiz = this.removeQuiz.bind(this);

        // init, the one who rules them all.
        if(!this.props.disableHandler) this.handleRequest(props);
    }

    handleRequest(){
        const { type, accountId, questionsId, quizName, quizLevel, quizId } = this.props;
        
        switch (true) {
            case !type || type === 'single':
                this.getSingleQuiz(this.props);
                break;
            case type === 'multiple':
                this.getMultipleQuiz(this.props);
                break;
            case type === 'save':
                this.saveQuiz(accountId, questionsId, quizName, quizLevel);
                break;
            case type === 'delete':
                this.removeQuiz(quizId);
                break;
            default:
                console.error('Missing arguments for quizes function');
                break;
        }
    }

    removeQuiz( quizId ){
        //later
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