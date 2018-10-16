import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class ControlledOpenSelect extends React.Component {
    state = {
        district: '',
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
        this.props.onChange(event.target.value);
    };

    render() {
        const {classes} = this.props;

        return (
            <form autoComplete="off">
                <Button className={classes.button}>
                    Wybierz dzielnicę:
                </Button>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">Dzielnica</InputLabel>
                    <Select
                        value={this.state.district}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'district',
                            id: 'demo-controlled-open-select',
                        }}>
                        <MenuItem value="">
                            <em>Wybierz</em>
                        </MenuItem>
                        {
                            this.props.district.map(
                            district => (
                                <MenuItem value={district} key={district}>{district}</MenuItem>
                            )
                        )
                        }

                    </Select>
                </FormControl>
            </form>
        );
    }
}

ControlledOpenSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);