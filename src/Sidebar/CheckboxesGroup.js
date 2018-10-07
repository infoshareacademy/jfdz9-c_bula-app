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
        categories: [],
        selectedCategoryIds: []
    };

    componentDidMount() {
        fetch(process.env.PUBLIC_URL + '/data/categories.json').then(
            response => response.json()
        ).then(
            categories => this.setState({ categories })
        )
    }

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
        const { piekarnie, warzywniaki, monopolowe, miesne } = this.state;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"><h2>Wybierz kategorie sklepów:</h2></FormLabel>
                    <FormGroup>
                        {
                            this.state.categories.map(
                                category => (
                                    <FormControlLabel
                                        key={category.id}
                                        control={
                                            <Checkbox checked={this.state.selectedCategoryIds.includes(category.id)}
                                                      onChange={this.handleChange(category.id)}
                                                      value={category.id.toString()} />
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
