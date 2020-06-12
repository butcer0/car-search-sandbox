import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }
    getImagesURLExtension = '/search/photos';

     onSearchSubmit = async term => {
        console.log(`Calling Unsplash API with Axios: ${term}`);
        const response = await unsplash.get(`${this.getImagesURLExtension}`, {
            params: {query: term}
        });

        // replaced with async keyword
        // .then(response => {
        //     console.log('Found Car Images:');
        //     console.log(response.data.results);
        // });

        console.log(response.data.results);
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <br />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;