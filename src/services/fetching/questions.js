import React from 'react';

class QuestionsFetch extends React.Component {
    constructor(props){
        super(props);

        this.getMulitpleQuestions = this.getMulitpleQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);

        //init, the one who rules them all.
        this.handleRequest(props);
    }

    handleRequest(){
        const { type } = this.props;

        if ( !type || type === 'single' ) {
            this.getSingleQuestion(this.props);
        } else {
            this.getMulitpleQuestions(this.props);
        }
    }

    getMulitpleQuestions(){
        //yearFrom, yearTo, level, amount
        console.log('multiple questions');
    }   

    getSingleQuestion(){
        //yearFrom, yearTo, level, tags
        console.log('single question');
    }

    render(){
        return '';
    }
}

export default QuestionsFetch;