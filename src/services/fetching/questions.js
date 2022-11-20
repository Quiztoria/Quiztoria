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
            case type === 'multiple-ids':
                this.getMulitpleQuestionsById(this.props);
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

    deleteQuestion(data){
        const fetch = new FetchController();
        return fetch.makeRequest(`question/${data.id}`, "DELETE");
    }

    saveQuestion(data){
        const fetch = new FetchController();
        const requestBody = JSON.stringify(data);

        return fetch.makeRequest("question", "POST", requestBody);
    }

    async getAllQuestions(props){
        console.log('all questions');
        const { itemsPerPage, page } = props;

        const fetch = new FetchController();
        const response = await fetch.makeRequest(`question?itemsPerPage=${itemsPerPage}&page=${page}`, "GET");
        const delayed = await response.json();

        const toReturn = delayed.map((item) => (
            <div>
                <h3>{item.questionString}</h3>
                <ol>
                    {item.answers.map(question => (
                        <li key={Math.random(1,1000)}>{question}</li>
                    ))}
                </ol>
            </div>
        ));


        return toReturn;
    }   

    async getSingleQuestion(props){
        //yearFrom, yearTo, level, tags
        const { id, yearFrom, yearTo, tags } = props;

        const fetch = new FetchController();
        const response = await fetch.makeRequest(`question/${id}`, "GET");
        const delayed = await response.json();
        
        return (
            <div>
                <h3>{delayed.questionString}</h3>
                <ol>
                    {delayed.answers.map(question => (
                        <li key={Math.random(1,1000)}>{question}</li>
                    ))}
                </ol>
            </div>
        )
    }

    async getQuestionsFromToDate(props){
        //yearFrom, yearTo, level, tags
        const { yearBegin, yearEnd } = props;

        const fetch = new FetchController();
        const response = await fetch.makeRequest(`search/by-time-range/all?yearBegin=${yearBegin.id}&yearEnd=${yearEnd.id}`, "GET");
        const delayed = await response.json();

        const toReturn = delayed.map((item) => (
            <div>
                <h3>{item.questionString}</h3>
                <ol>
                    {item.answers.map(question => (
                        <li key={Math.random(1,1000)}>{question}</li>
                    ))}
                </ol>
            </div>
        ));

        return toReturn;
    }

    async getQuestionsFromToDateRandom(props){
        //yearFrom, yearTo, level, tags
        const { yearBegin, yearEnd, yearAmountResults } = props;

        const fetch = new FetchController();
        const response = await fetch.makeRequest(`search/by-time-range/random?yearBegin=${yearBegin.id}&yearEnd=${yearEnd.id}&number=${yearAmountResults.id}`, "GET");
        const delayed = await response.json();

        const toReturn = delayed.map((item) => (
            <div>
                <h3>{item.questionString}</h3>
                <ol>
                    {item.answers.map(question => (
                        <li key={Math.random(1,1000)}>{question}</li>
                    ))}
                </ol>
            </div>
        ));

        return toReturn;
    }


    render(){
        return '';
    }
}

export default QuestionsFetch;