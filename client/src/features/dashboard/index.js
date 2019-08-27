import React from 'react';
import Search from '../../components/search/Search';
import DashBoardGrid from './DashboardGrird';
import { searchConfig } from '../../config/searchConfig';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DASHBOARD_QUERY } from '../../queries/getDashboard';

function Dashboard() {
    const [cgroupCode, setcgroupCode] = useState(searchConfig.cgroupCode.selected);
    const [model, setModel] = useState([searchConfig.modelSelect.selected])

    const handleFilterChanges = (data) => {
        if (data.cgroupCode) {
            setcgroupCode(data.cgroupCode)
        } else if (data.model) {
            setModel(data.model)
        }
    }

    const { loading, error, data } = useQuery(DASHBOARD_QUERY, {
        variables: { Complaint_Group: cgroupCode },
    });

    if (loading) return <div>Fetching</div>;
    if (error) return  <div>Error {error}</div>;

    return (
        <div className='app-dashboard'>
            <Search
                selected={{ cgroupCode, model }}
                searchConfig={searchConfig}
                changeFilters={handleFilterChanges}
            ></Search>
            <DashBoardGrid data={data.dashboard}/>
        </div>
    )
}

export default Dashboard;