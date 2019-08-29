import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ComplaintNotes from './Notes';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1rem',
        margin: '1rem',
        textAlign: 'left',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '13px'
    },
    item: {
        margin: '0.5rem 0'
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
    'id',
    'PCR_Number',
    'VC_Number',
    'Sale_Month',
    'Complaint_Month',
    'Dealer_Code_Description',
]

const ComplaintCard = ({ data, onDelete, handleRemarkUpdate }) => {
    const classes = useStyles();
    const onComplaintDelete = (index) => {
        onDelete(data[index].id);
    };
    const updateRemark = (id, remark) => {
        handleRemarkUpdate(id, remark);
    }

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
                <ComplaintNotes
                    Investigation={item.Investigation}
                    Action_Taken={item.Action_Taken}
                    Remark={item.Remark}
                    handleRemarkUpdate={(remark) => updateRemark(item.id, remark)}
                    >
                </ComplaintNotes>
            </Paper>
        ))
    )
}

export default ComplaintCard;