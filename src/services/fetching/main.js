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

    makeRequest( url ){
        return this.getUrl() + '/' + url;
    }

    render(){
        return '';
    }
}

export default FetchController;