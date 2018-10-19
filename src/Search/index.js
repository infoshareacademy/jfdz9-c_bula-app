import React, { Component } from 'react';
// import './search.css';

const searchButton = {
    fontSize: '20px',
    fontWeight: 'bold',
};

const searchLabel = {
    fontSize: '16px',

};
const searchInput = {
    marginLeft: '33%',
};

const backgroundHome = {
    // backgroundColor: 'yellow',
};


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
            <div style={backgroundHome} className="form">
                 <form onSubmit={this.onFormSubmit}>
                     <label style={searchLabel}>
                        <input style={searchInput} type="text" pattern=".{6,6}" title="wprowadź kod w formacie __-___" name="name" className="searchInput" placeholder="kod pocztowy" onChange={this.onChange} value={this.state.value}/>
                     </label>
                     <button style={searchButton} className="button" type="submit" value="Wyszukaj">Wyszukaj</button>
                </form>
            </div>
        )
    }
}

export default Search