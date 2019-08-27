import React from 'react';
import Search from '../../components/search/Search';
import { makeStyles } from '@material-ui/styles';
import DashBoardGrid from './DashboardGrird';
import ComplaintChart from './ComplaintChart';
import { searchConfig } from '../../config/searchConfig';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DASHBOARD_QUERY } from '../../queries/getDashboard';

const useStyles = makeStyles({
    root: {
        margin: '0.5rem 1rem'
    },
});

function Dashboard(props) {
    const [cgroupCode, setcgroupCode] = useState(searchConfig.cgroupCode.selected);
    const classes = useStyles();

    const handleFilterChanges = (data) => {
        if (data.cgroupCode) {
            setcgroupCode(data.cgroupCode)
        }
    }

    const { loading, error, data } = useQuery(DASHBOARD_QUERY, {
        variables: { Complaint_Group: cgroupCode },
    });

    if (loading) return <div>Fetching</div>;
    if (error) return <div>Error {error}</div>;

    return (
        <div className={classes.root}>
            <Search
                selected={{ cgroupCode }}
                searchConfig={searchConfig}
                changeFilters={handleFilterChanges}
            ></Search>
            <ComplaintChart data={data.dashboard.Complaint_Month_Wise}></ComplaintChart>
            <DashBoardGrid data={data.dashboard} code={cgroupCode} args={props.args}/>
        </div>
    )
}

export default Dashboard;