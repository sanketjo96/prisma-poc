/* eslint-disable array-callback-return */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { gridPaneConfig } from '../../config/gridConfig';
import DataTable from '../../components/DataTable';


const transformDataForTableRow = (data) => {
    return data.map(item => ({
        name: item.name,
        complaints: item.complaints.length
    }));
}

const DashBoardGrid = ({ data }) => {
    const grids = gridPaneConfig.map((grid, index) => {
        const ctabledata = transformDataForTableRow(data[grid.name])
        const inputConf = {
            ...grid,
            data: ctabledata
        };
        return (
            <Grid key={index} item xs={6}>
                <DataTable tableConfig={inputConf} />
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