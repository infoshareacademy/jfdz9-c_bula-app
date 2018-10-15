import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

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
        const {classes} = this.props;

        return <Fragment>
            <form onSubmit={this.onFormSubmit} type="submit" className={classes.container} noValidateautoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.onChange}
                    margin="normal"
                    variant="outlined"
                    value={this.state.value}
                />
                <Button variant="outlined" type="submit" className={classes.button}>
                    Wyszukaj
                </Button>
            </form>
        </Fragment>
    };
}

export default Search;