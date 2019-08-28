import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1rem',
        margin: '1rem',
        textAlign: 'left',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '13px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
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
        fontSize: 32,
        textAlign: 'right',
        cursor: 'pointer'
    }
}));

const cols = [
    'PCR_Number',
    'VC_Number',
    'Sale_Month',
    'Complaint_Month',
    'Dealer_Code_Description',
]

const ComplaintCard = ({ data, onDelete }) => {
    const classes = useStyles();
    const onComplaintDelete = (index) => {
        onDelete(data[index].id);
    };
    return (
        data.map((item, index) => (
            <Paper key={`${item.PCR_Number}`} className={classes.root}>
                <div className={classes.icon} >
                    <DeleteForeverIcon onClick={() => onComplaintDelete(index)}/>
                </div>
                {
                    cols.map(col => {
                        return (
                            <div key={`${item.PCR_Number}-${col}`} className={classes.item}>
                                <label className={classes.label}>{col} : </label> {item[col]}
                            </div>
                        )
                    })
                }
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
                                <label className={classes.label}>Investigation : </label> {item.Investigation}
                            </div>
                            <div className={classes.item}>
                                <label className={classes.label}>Action_Taken : </label> {item.Action_Taken}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </Paper>
        ))
    )
}

export default ComplaintCard;