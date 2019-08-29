/* eslint-disable array-callback-return */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { gridPaneConfig } from '../../config/gridConfig';
import DataTable from '../../components/DataTable';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    skeleton: {
        margin: '0.7rem 0'
    },
});

const transformDataForTableRow = (data) => {
    return data.map(item => ({
        name: item.name,
        complaints: item.complaints.length,
        expense: item.complaints.reduce((acc, complaint) => {
            acc += parseInt(complaint.Total_Expenses, 10);
            return acc;
        }, 0)
    }));
}

const DashBoardGrid = (props) => {
    const { data, code, args } = props;
    const classes = useStyles();
    const onRowClick = (section, rowData) => {
        args.history.push(`/details/${code}/${section}/${rowData.name}`);
    };

    const grids = gridPaneConfig.map((grid, index) => {
        const tabledata = data ? transformDataForTableRow(data[grid.name]) : [];
        const inputConf = {
            ...grid,
            data: tabledata
        };
        return (
            <Grid key={index} item xs={6}>
                {
                    inputConf.data.length
                        ? (<DataTable tableConfig={inputConf} onRowClick={onRowClick} />)
                        : (<Skeleton className={classes.skeleton} variant="rect" height={200}/>)
                }
            </Grid>
        )
    });
    return (
        <Grid container spacing={3}>
            {grids}
        </Grid>
    );
}

export default DashBoardGrid;