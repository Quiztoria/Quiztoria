import React from 'react';
import FetchController from './main';

class QuestionsFetch extends React.Component {

    constructor(props){
        super(props);

        this.state = {doItOnce: false};

        // this.getMulitpleQuestions = this.getMulitpleQuestions.bind(this);
        // this.getSingleQuestion = this.getSingleQuestion.bind(this);
        // this.saveQuestion = this.saveQuestion.bind(this);
        // this.deleteQuestion = this.deleteQuestion.bind(this);

        // init, the one who rules them all.
        if(!this.props.disableHandler) this.handleRequest(props);
    }

    handleRequest(){
        const { type } = this.props;

        switch (true) {
            case !type || type === 'single':
                this.getSingleQuestion(this.props);
                break;
            case type === 'multiple':
                this.getMulitpleQuestions(this.props);
                break;
            case type === 'save':
                this.saveQuestion(this.props);
                break;
            case type === 'delete':
                this.deleteQuestion(this.props);
                break;
            default:
                console.error('Missing arguments for questions function');
                break;
        }
    }

    deleteQuestion(){
        //later
    }

    saveQuestion(data){
        const fetch = new FetchController();
        const requestBody = JSON.stringify(data);

        return fetch.makeRequest("question", "POST", requestBody);
    }

    getMulitpleQuestions(){
        //yearFrom, yearTo, level, amount
        console.log('multiple questions');

        const fetch = new FetchController();
        console.log(fetch.makeRequest('questions/5,6,7,8'));
    }   

    async getSingleQuestion(props){
        //yearFrom, yearTo, level, tags
        const { id, yearFrom, yearTo, tags } = props;

        const fetch = new FetchController();
        const response = await fetch.makeRequest(`question/${id}`, "GET");
        return response.json();
    }

    render(){
        return '';
    }
}

export default QuestionsFetch;