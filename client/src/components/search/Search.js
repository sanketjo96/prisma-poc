import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Search extends Component {
    handleCodeChange = (event) => {
        this.props.changeFilters({ cgroupCode: event.target.value });
    }

    handleModelChange = (event) => {
        this.props.changeFilters({ model: event.target.value });
    }

    render() {
        const { classes, searchConfig, selected } = this.props;
        return (
            <div className="search-bar">
                <FormControl className={classes.formControl}>
                    <InputLabel>{searchConfig.cgroupCode.title}</InputLabel>
                    <Select
                        value={selected.cgroupCode}
                        onChange={this.handleCodeChange}
                    >
                        {searchConfig.cgroupCode.data.map(item => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Search);