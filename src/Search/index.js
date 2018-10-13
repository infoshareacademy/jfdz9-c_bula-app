import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
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




// const styles = themes => ({
//     searchInput: {
//         height: 500,
//         width: 200,
//     }
//
//
// });



class Search extends Component {
    state = {
        value: '',
    };


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onChange = event => {
        this.setState({
            value: event.target.value,
        });
    };

    onFormSubmit = event => {
        event.preventDefault();
        // console.log(event, 'klik')

        this.props.onFormSubmit(this.state.value)
    };

    render() {
        const { classes } = this.props;


        return <Fragment>

            <form onSubmit={this.onFormSubmit}  type="submit" className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    onChange={this.onChange}
                    margin="normal"
                    variant="outlined"
                    value={this.state.value}
                />

                <label>

                    <input type="text" name="name" className="searchInput" />

                </label>

            </form>

            <div>
            <Button variant="outlined" className={classes.button}>
                Default
            </Button>
            <label htmlFor="outlined-button-file">
                <Button variant="outlined" component="span" className={classes.button}>
                    Upload
                </Button>
            </label>
            </div>
                OutlinedTextFields.propTypes = {
                classes: PropTypes.object.isRequired,
            };

        </Fragment>
    }

export default Search;