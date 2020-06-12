import React from 'react';

class SearchBar extends React.Component {
   state = { term: '' };

    // onInputClick()  {
    //     console.log('Input was clicked')
    // }

    // this would have worked without binding 'this' with the function param pass
    // note: when this.onFormSubmit set on form attribute as variable, losses 'this' context
    //  using the .bind(this) allows you to initially set the context inside that js function
    // note: you could bind the function also in the constructor of the class from the
    //  initialization i.e. constructor() { this.submit = this.submit.bind(this); }
    //  the bind(this) creates a new version that fixes the function context 'this'
    // note: arrow functions automatically fix the bind context issue
    onFormSubmit = (event) => {
        // prevent the form from submitting and refreshing on 'enter' press
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    // onFormSubmit(event) {
    //     // prevent the form from submitting and refreshing on 'enter' press
    //     event.preventDefault();
    //
    //     console.log(`Term submitted: ${this.state.term}`);
    // }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor='image-search'>Image Search</label>
                        <input type='text' name='image-search' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                        {/*by leaving off the () in onInputChange, doesn't render automatically*/}
                        {/*with the input element, waits until something changes by passing as param*/}
                        {/*<input type='text' name='image-search' onClick={this.onInputClick} onChange={(e) => console.log(e.target.value)}/>*/}
                    </div>
                </form>
            </div>)
    }
}

export default SearchBar;