import React from 'react';
import FetchController from './main';

class MEiNFetch extends React.Component {
    constructor(){
        super();

        this.getPlacowki = this.getPlacowki.bind(this);
    }

    async getPlacowki(){
        const createHeaders = { 'method':'GET', headers:{'Content-Type': 'application/json', 'accept': 'application/json'}  };

        //yearFrom, yearTo, level, tags
        const response = await fetch( "https://api-rspo.mein.gov.pl/api/placowki?page=1", createHeaders );
        return response.json();
    }

    render(){
        return '';
    }
}

export default MEiNFetch;