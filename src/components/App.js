import React from 'react';

import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
    rootURL = 'https://api.unsplash.com';
    getImagesURLExtension = '/search/photos';
    ACCESS_KEY = '_Ht4d1irK5F7M1TROfNWcnKwZc8OFtdJ2AmchdCTunA';

    onSearchSubmit = (term) => {
        console.log(`Calling Unsplash API with Axios: ${term}`);
        axios.get(`${this.rootURL}${this.getImagesURLExtension}`, {
            params: { query: term },
            headers: {
                Authorization: `Client-ID ${this.ACCESS_KEY}`
            }
        }).then(response => {
            console.log('Found Car Images:');
            console.log(response);
        });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
            );
    }
}

export default App;