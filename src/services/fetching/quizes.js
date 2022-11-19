import React from 'react';

class QuizesFetch extends React.Component {
    constructor(){
        super();

        this.getMultipleQuiz = this.getMultipleQuiz.bind(this);
        this.getSingleQuiz = this.getSingleQuiz.bind(this);
    }

    saveQuiz( accountId, questionsId, quizName, quizLevel ) {
        
    }

    getMultipleQuiz( yearFrom, yearTo, level, amount ){

    }
    
    getSingleQuiz( yearFrom, yearTo, level ){
    
    }

    render(){
        return '';
    }
}

export default QuizesFetch;