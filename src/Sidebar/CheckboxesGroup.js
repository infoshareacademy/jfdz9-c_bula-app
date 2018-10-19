import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    root: {
        display: 'flex',
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    formControl: {
        margin: theme.spacing.unit,
    },
});

class CheckboxesGroup extends React.Component {

    state = {
        selectedCategoryIds: []
    };

    handleChange = categoryId => event => {
        this.setState({
            selectedCategoryIds: this.state.selectedCategoryIds.includes(categoryId) ?
                this.state.selectedCategoryIds.filter(id => id !== categoryId) :
                this.state.selectedCategoryIds.concat(categoryId)
        }, () => {
            this.props.setCategoryIds(this.state.selectedCategoryIds)
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"><h2>Szukaj po kategoriach</h2></FormLabel>
                    <FormGroup>
                        {
                            this.props.categories.map(
                                category => (
                                    <FormControlLabel
                                        key={category.id}
                                        control={
                                            <Checkbox checked={this.state.selectedCategoryIds.includes(category.id)}
                                                      onChange={this.handleChange(category.id)}
                                                      value={category.id.toString()}
                                                      classes={{
                                                      root: classes.root,
                                                          checked: classes.checked,
                                                      }}
                                            />
                                        }
                                        label={category.name}
                                    />
                                )
                            )
                        }
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
