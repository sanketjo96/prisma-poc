import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Line} from 'react-chartjs-2';
import {chartConfig} from '../../config/chartConfig';
import {chartOptions} from '../../config/chartConfig';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        margin: '1rem 0',
    },
    chartContainer: {
        width: '100%',
        height: '250px'
    }
});

const ComplaintChart = (props) => {
    chartConfig.labels = props.data.map(item => item.name);
    chartConfig.datasets[0].data = props.data.map(item => item.complaints.length);
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.chartContainer}>
                    <Line data={chartConfig} options={chartOptions}/>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ComplaintChart;