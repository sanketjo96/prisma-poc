import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

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



const searchConfig = {
    cgroupCode: {
        title: 'Complaint',
        data: [
            'HB40019',
            'CB40019',
            'VJB40019'
        ]
    },
    modelSelect: {
        title: 'Model',
        data: [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
        ]
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'Complaint_Group': '',
            'model': []
        }
    }

    handleCodeChange = (event) => {
        this.setState({ Complaint_Group: event.target.value });
    }

    handleModelChange = (event) => {
        this.setState({ model: event.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="search-bar">
                <FormControl className={classes.formControl}>
                    <InputLabel>{searchConfig.cgroupCode.title}</InputLabel>
                    <Select
                        value={this.state.Complaint_Group}
                        onChange={this.handleCodeChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {searchConfig.cgroupCode.data.map(item => (
                            <MenuItem value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">{searchConfig.modelSelect.title}</InputLabel>
                    <Select
                        multiple
                        value={this.state.model}
                        onChange={this.handleModelChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {searchConfig.modelSelect.data.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.model.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
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