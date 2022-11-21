import React from 'react';
import FetchController from './main'; 

class QuizesFetch extends React.Component {
    constructor(props){
        super(props);

        // this.getMultipleQuiz = this.getMultipleQuiz.bind(this);
        // this.getSingleQuiz = this.getSingleQuiz.bind(this);
        // this.removeQuiz = this.removeQuiz.bind(this);

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
                this.deleteQuiz(quizId);
                break;
            default:
                console.error('Missing arguments for quizes function');
                break;
        }
    }

    async getAllQuizes(props){
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

    deleteQuiz( props ){
        const fetch = new FetchController();
        return fetch.makeRequest(`quiz/${props.id}`, "DELETE");
    }

    addQuestionToQuiz(props){
        const fetch = new FetchController();

        return fetch.makeRequest(`quiz/${props.quizId.id}/addquestion`, "POST", props.quizQuestionId.id);
    }

    deleteQuestionFromQuiz(props){
        const fetch = new FetchController();

        return fetch.makeRequest(`quiz/${props.quizId.id}/removequestion`, "DELETE", props.quizQuestionId.id);
    }

    saveQuiz( data ) {
        const fetch = new FetchController();
        const requestBody = data.name;

        return fetch.makeRequest("quiz", "POST", requestBody);
    }

    getMultipleQuiz( yearFrom, yearTo, level, amount ){
        const fetch = new FetchController();
        console.log(fetch.makeRequest('quiz/5,6,7,8'));
    }
    
    async getSingleQuiz(props){
        console.log(props);
        const { id } = props;

        const fetch = new FetchController();
        const response = await fetch.makeRequest(`quiz/${id}`, "GET");
        return response.json();
    }

    render(){
        return '';
    }
}

export default QuizesFetch;