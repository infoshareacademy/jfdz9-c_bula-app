import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <form onSubmit={this.onFormSubmit} type="submit" noValidateautoComplete="off">
                <TextField
                    id="outlined-name"
                    label="kod pocztowy"
                    value={this.state.name}
                    onChange={this.onChange}
                    margin="normal"
                    variant="outlined"
                    value={this.state.value}
                />
                <Button type="submit" variant="outlined">
                    Wyszukaj
                </Button>
            </form>
        </Fragment>
    };
}

export default Search;