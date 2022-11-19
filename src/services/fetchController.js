import React from 'react';

class FetchController extends React.Component {
    #baseUrl = 'localhost';
    #port = "8080";

    constructor(){
        super();
        console.log(this.#baseUrl);
    }

    render(){
        return 'got the response';
    }
}

export default FetchController;