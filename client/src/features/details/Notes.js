import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    item: {
        margin: '0.5rem 0'
    },
    expand: {
        display: 'block'
    },
    label: {
        fontSize: '13px',
        fontWeight: '700'
    },
    icon: {
        padding: '0.2rem',
        fontSize: 20,
        cursor: 'pointer'
    }
}));

const ComplaintNotes = (props) => {
    const { Action_Taken, Investigation, Remark, handleRemarkUpdate} = props;
    const classes = useStyles();
    const [editEnable, setEditEnable] = useState(false);
    const handleEditToggle = () => {
        setEditEnable(!editEnable);
    }

    const [remark, setRemark] = useState(Remark);
    const handleRemarkChange = (e) => {
        setRemark(e.target.value);
    }
    const updateRemark = () => {
        handleRemarkUpdate(remark);
        handleEditToggle();
    }

    let remarkControl = null;
    if (editEnable) {
        remarkControl = (
            <div>
                <TextField
                    id="standard-full-width"
                    label="Remark"
                    value={remark}
                    onChange={handleRemarkChange}
                    style={{ margin: 8 }}
                    fullWidth
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={updateRemark}
                >
                    Update
                </Button>
            </div>
        )
    } else {
        remarkControl = (
            <div>
                <label className={classes.label}>Remark : </label>{remark}
                <EditIcon className={classes.icon} onClick={handleEditToggle} />
            </div>
        )
    }

    return (
        <div className="complaint-grid">
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        Notes
            </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expand}>
                    <div className={classes.item}>
                        <label className={classes.label}>Investigation : </label> {Investigation}
                    </div>
                    <div className={classes.item}>
                        <label className={classes.label}>Action_Taken : </label> {Action_Taken}
                    </div>
                    <div className={classes.item}>
                        {remarkControl}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default ComplaintNotes;