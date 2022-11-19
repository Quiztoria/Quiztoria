import React from 'react';
import FetchController from './main';

class QuestionsFetch extends React.Component {

    constructor(props){
        super(props);

        this.getMulitpleQuestions = this.getMulitpleQuestions.bind(this);
        this.getSingleQuestion = this.getSingleQuestion.bind(this);

        // init, the one who rules them all.
        if(!this.props.disableHandler) this.handleRequest(props);
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

        const fetch = new FetchController();
        console.log(fetch.makeRequest('questions/5,6,7,8'));
    }   

    getSingleQuestion(){
        //yearFrom, yearTo, level, tags
        console.log('single question');

        const fetch = new FetchController();
        console.log(fetch.makeRequest('questions/5', 'GET'));
    }

    render(){
        return '';
    }
}

export default QuestionsFetch;