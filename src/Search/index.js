import React from 'react';
import PropTypes from 'prop-types';
import WithStyles from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';




const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Żabianka',
    'Przymorze',
    'Śródmieście',
    'Siedlce',
    'Brzeźno',
    'Suchanino',
    'Wrzeszcz',
    'Oliwa',
    'Ujeścisko',
    'Stogi',
];

class MultipleSelect extends React.Component {
    state = {
        name: [],
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

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <form onSubmit={this.onFormSubmit}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple">Name</InputLabel>
                    <input type="text" name="name" className="searchInput" onChange={this.onChange} value={this.state.value}/>
                    <input type="submit" />
                    <Select
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={{
                                    fontWeight:
                                        this.state.name.indexOf(name) === -1
                                            ? theme.typography.fontWeightRegular
                                            : theme.typography.fontWeightMedium,
                                }}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </form>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
                    <Select
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.name.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
                    <Select
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={{
                                    fontWeight:
                                        this.state.name.indexOf(name) === -1
                                            ? theme.typography.fontWeightRegular
                                            : theme.typography.fontWeightMedium,
                                }}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

MultipleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default WithStyles(styles, { withTheme: true })(MultipleSelect);
