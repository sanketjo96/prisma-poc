import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DASHBOARD_QUERY } from '../../queries/getDashboard';
import ComplaintCard from './Card';

const ComplaintDetails = ({params}) => {
    const section = params.section; // 'Dealer_Wise';
    const key = params.key; // 'UNITECH AUTOMOBILES PVT LTD'; 'HB40019'
    const { loading, error, data } = useQuery(DASHBOARD_QUERY, {
        variables: { Complaint_Group: params.code },
    });

    if (loading) return <div>Fetching</div>;
    if (error) return <div>Error {error}</div>;

    const result = data.dashboard[section].find(item => {
        return item.name === key;
    });

    return (
        <div className='complaint-details'>
            <ComplaintCard data={result.complaints}></ComplaintCard>
        </div>
    );
}

export default ComplaintDetails;