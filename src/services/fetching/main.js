import React from 'react';

class FetchController extends React.Component {
    #baseUrl = 'localhost';
    #port = "8080";

    constructor(){
        super();
        this.getUrl = this.getUrl.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
        
        console.log(this.getUrl());
    }

    getUrl(){
        return this.#baseUrl + ':' + this.#port;
    }

    async makeRequest( url, method, body ){
        const createHeaders = { method, 'body': body };
        const response = await fetch( this.getUrl() + '/' + url, createHeaders );

        return response;
    }

    render(){
        return '';
    }
}

export default FetchController;