import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
// import arrowRight from './arrowRight.png';

const searchButton = {
    borderRadius: '50%',
    height: '100px',
    width: '100px',
    backgroundColor: '#C6596F',
    border: '1px',
    marginLeft: '10px',
    padding: '0 17px 0 10px',
};
const searchInput = {
    textAlign: 'center',
    fontSize: '3.75rem',
    backgroundColor: '#f2f4f8',
    height: '6rem',
    color: '#444',
    width: '14.5rem',
    borderRadius: '50px',
    border: '1px',
};
const searchForm = {
    display: 'flex',
    justifyContent: 'center',
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
            <div className="form">
                 <form style={searchForm} onSubmit={this.onFormSubmit}>
                     <MaskedInput
                         mask={[/[0-9]/, /\d/, '-', /\d/, /\d/, /\d/]}
                         placeholderChar={'\u2000'}
                         style={searchInput}
                         title="wprowadź kod w formacie __-___"
                         name="name"
                         className="searchInput"
                         placeholder="kod pocztowy"
                         onChange={this.onChange}
                         value={this.state.value}
                     />
                     <button style={searchButton} className="button" type="submit" value="Wyszukaj">
                         <i className="material-icons" style={{fontSize: '50px', color: 'white'}}>keyboard_arrow_right</i></button>
                </form>
            </div>
        )
    }
}

export default Search