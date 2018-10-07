import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class CheckboxesGroup extends React.Component {
    state = {
        piekarnie: true,
        warzywniaki: false,
        monopolowe: false,
        miesne: false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { piekarnie, warzywniaki, monopolowe, miesne } = this.state;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"><h2>Wybierz kategorie sklepów:</h2></FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={piekarnie}
                                          onChange={this.handleChange('piekarnie')}
                                          value="piekarnie" />
                            }
                            label="Piekarnie"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={miesne}
                                          onChange={this.handleChange('miesne')}
                                          value="miesne" />
                            }
                            label="Mięsne"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={warzywniaki}
                                          onChange={this.handleChange('warzywniaki')}
                                          value="warzywniaki" />
                            }
                            label="Warzywniaki"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={monopolowe}
                                    onChange={this.handleChange('monopolowe')}
                                    value="monopolowe"
                                />
                            }
                            label="Monopolowe"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
