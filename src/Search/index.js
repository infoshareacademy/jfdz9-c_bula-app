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
        /*// console.log(event, 'klik')*/

        this.props.onFormSubmit(this.state.value)
    };

    render() {
        const { classes } = this.props;


        return <Fragment>
            <form onSubmit={this.onFormSubmit}>
                <label>

                    <input type="text" name="name" className="searchInput" placeholder="kod pocztowy" onChange={this.onChange} value={this.state.value}/>

                </label>
                <button class="button" type="submit" value="Wyszukaj">Wyszukaj</button>
            </form>


        </Fragment>
    }
}

export default Search