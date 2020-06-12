import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    onInputClick()  {
        console.log('Input was clicked')
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label htmlFor='image-search'>Image Search</label>
                        {/*by leaving off the () in onInputChange, doesn't render automatically*/}
                        {/*with the input element, waits until something changes by passing as param*/}
                        <input type='text' name='image-search' onClick={this.onInputClick} onChange={(e) => console.log(e.target.value)}/>
                    </div>
                </form>
            </div>)
    }
}

export default SearchBar;