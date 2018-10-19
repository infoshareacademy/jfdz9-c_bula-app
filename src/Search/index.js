import React, { Component, Fragment } from 'react';
import './search.css';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});


function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={[/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class Search extends Component {
    state = {
        value: '',
        textmask: '  -   ',
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

        this.props.onFormSubmit(this.state.value)
    };

    render() {
             const { classes } = this.props;
        const { textmask } = this.state;

        return (
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="formatted-text-mask-input">kod pocztowy</InputLabel>
                    <Input
                        value={textmask}
                        onChange={this.handleChange('textmask')}
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom}
                    />
                </FormControl>
            </div>

            // <div className="form">
            //
            //     );
            // {/*<form onSubmit={this.onFormSubmit}>*/}
            //     {/*<label>*/}
            //         {/*<input style={{height:70, fontSize:40}} type="text" pattern=".{6,6}" title="wprowadź kod w formacie __-___" name="name" className="searchInput" placeholder="kod pocztowy" onChange={this.onChange} value={this.state.value}/>*/}
            //     {/*</label>*/}
            //     {/*<button style={{height:60}} className="button" type="submit" value="Wyszukaj">Wyszukaj</button>*/}
            // {/*</form>*/}
            // </div>

        )
    }
}
Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
