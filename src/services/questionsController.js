import React from 'react';

class QuestionsController extends React.Component {
    constructor(){
        super();

        this.getMulitpleQuestions = this.getMulitpleQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);
    }

    getMulitpleQuestions( yearFrom, yearTo, level, amount ){

    }
    
    getSingleQuestion( yearFrom, yearTo, level ){
    
    }

    render(){
        return '';
    }
}

export default QuestionsController;