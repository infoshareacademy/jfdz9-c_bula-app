import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    state = {
        value: '',
    };

    onChange = event => {
        this.setState({
            value: event.target.value,
        });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.value)
    };

    render() {

        return (
            <div className="form">
                 <form onSubmit={this.onFormSubmit}>
                     <label>
                        <input type="text" pattern=".{6,6}" title="wprowadź kod w formacie __-___" name="name" className="searchInput" placeholder="kod pocztowy" onChange={this.onChange} value={this.state.value}/>
                     </label>
                 <button className="button" type="submit" value="Wyszukaj">Wyszukaj</button>
                </form>
            </div>
        )
    }
}

export default Search