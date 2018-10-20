import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';

// import './search.css';

const searchButton = {
    fontSize: '20px',
    fontWeight: 'bold',
};

const searchLabel = {
    // fontSize: '7px',

};
const searchInput = {
    // marginLeft: '35%',
    textAlign: 'center',
    fontSize: '3.25rem',
    backgroundColor: '#f2f4f8',
    height: '5.5rem',
    color: '#444',
    width: '13.5rem',
};

const backgroundHome = {
    marginLeft: '35%',
};

const searhParagraph = {
    color: 'whitesmoke',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0',

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
                     <p style={searhParagraph}>wprowadź kod pocztowy</p>
                     {/*<InputLabel htmlFor="formatted-text-mask-input">kod pocztowy</InputLabel>*/}
                     <MaskedInput
                         mask={[/[0-9]/, /\d/, '-', /\d/, /\d/, /\d/]}
                         placeholderChar={'\u2000'}
                         style={searchInput}
                         title="wprowadź kod w formacie __-___"
                         name="name"
                         className="searchInput"
                         // placeholder="kod pocztowy"
                         onChange={this.onChange}
                         value={this.state.value}
                     />
                     {/*<label style={searchLabel}>*/}
                        {/*<input style={searchInput} type="text" pattern=".{6,6}" title="wprowadź kod w formacie __-___" name="name" className="searchInput" placeholder="kod pocztowy" onChange={this.onChange} value={this.state.value}/>*/}
                     {/*</label>*/}
                     <button style={searchButton} className="button" type="submit" value="Wyszukaj">Wyszukaj</button>
                </form>
            </div>
        )
    }
}

export default Search