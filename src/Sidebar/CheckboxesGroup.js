import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './sidebar.css';

const styles = theme => ({
    root: {
        display: 'flex',
        color: '#C6596F',
        '&$checked': {
            color: '#C6596F',
        },
    },
    checked: {},
    formControl: {
        margin: theme.spacing.unit,
    },
});

class CheckboxesGroup extends React.Component {

    state = {
        selectedCategoryIds: [],
        allCategoriesVisible: false,
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

    showMore() {
        this.setState(state => ({
            allCategoriesVisible: !state.allCategoriesVisible
        }));
    }

    render() {
        const { classes } = this.props;
        let categories = this.props.categories;

        if (!this.state.allCategoriesVisible) {
            categories = this.props.categories.slice(0,5)
        }

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"><h2>Szukaj po kategoriach</h2></FormLabel>
                    <FormGroup>
                        {
                            categories.map(
                                category => (
                                    <FormControlLabel className="styleCheckbox"
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
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={() => this.showMore()} className="buttonFormSideBar">
                        { this.state.allCategoriesVisible ? ( <span>MNIEJ</span> ) : ( <span>WIĘCEJ</span> ) }
                    </button>
                    </div>
                </FormControl>
            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);