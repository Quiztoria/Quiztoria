import React from 'react';

class FetchController extends React.Component {
    #baseUrl = 'localhost';
    #port = "8080";

    constructor(){
        super();
        this.getUrl = this.getUrl.bind(this);
        
        console.log(this.getUrl());
    }

    getUrl(){
        return this.#baseUrl + ':' + this.#port;
    }

    render(){
        return 'got the response';
    }
}

export default FetchController;