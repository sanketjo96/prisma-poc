/* eslint-disable array-callback-return */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { gridPaneConfig } from '../../config/gridConfig';
import DataTable from '../../components/DataTable';


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
    const { data, code, args} = props;
    const onRowClick = (section, rowData) => {
        args.history.push(`/details/${code}/${section}/${rowData.name}`);
    };

    const grids = gridPaneConfig.map((grid, index) => {
        const ctabledata = transformDataForTableRow(data[grid.name]);
        // console.log(ctabledata);
        const inputConf = {
            ...grid,
            data: ctabledata
        };
        return (
            <Grid key={index} item xs={6}>
                <DataTable tableConfig={inputConf} onRowClick={onRowClick}/>
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