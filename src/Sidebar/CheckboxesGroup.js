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
const styleCheckbox = {
    fontSize: '20px',
    paddingLeft: '30px'
};

class CheckboxesGroup extends React.Component {

    state = {
        selectedCategoryIds: [],
        allCategoriesVisible: false
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

    showMore(showAll) {
        showAll ? (
            this.setState({ allCategoriesVisible: true })
        ) : (
            this.setState({ allCategoriesVisible: false })
        )
    }

    render() {
        const { classes } = this.props;
        let categories = this.props.categories;

        console.log(this.state.allCategoriesVisible);
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
                                    <FormControlLabel style={styleCheckbox}
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
                    <button onClick={this.showMore}>Więcej</button>
                </FormControl>
            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);