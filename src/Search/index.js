import React, { Component, Fragment } from 'react';
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

        return <Fragment>
            <div className="form">
            <form onSubmit={this.onFormSubmit}>
                <label>
                    <input style={{height:70, fontSize:40}} type="text" pattern=".{6,6}" title="wprowadź kod w formacie __-___" name="name" className="searchInput" placeholder="kod pocztowy" onChange={this.onChange} value={this.state.value}/>
                </label>
                <button style={{height:60}} className="button" type="submit" value="Wyszukaj">Wyszukaj</button>
            </form>
            </div>
        </Fragment>
    }
}

export default Search