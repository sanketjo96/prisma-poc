import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import { DASHBOARD_QUERY } from '../../queries/getDashboard';
import { DELETE_COMPLAINT } from '../../queries/deleteComplaint';
import ComplaintCard from './Card';

const ComplaintDetails = ({ params }) => {
    const code = params.code;
    const section = params.section;
    const key = params.key;

    const { loading, error, data } = useQuery(DASHBOARD_QUERY, {
        variables: { Complaint_Group: code },
    });

    const [deleteComplaint, deletionargs] = useMutation(DELETE_COMPLAINT, {
        update(cache, { data: { deleteComplaint } }) {
            const { dashboard } = cache.readQuery({
                query: DASHBOARD_QUERY,
                variables: { Complaint_Group: code }
            });
            const dataToUpdate = JSON.parse(JSON.stringify(dashboard));
            const itemToUpdate = dataToUpdate[section].find(item => item.name === key);
            itemToUpdate.complaints = itemToUpdate.complaints.filter(complaint => {
                return complaint.id !== deleteComplaint.id
            });
            cache.writeQuery({
                query: DASHBOARD_QUERY,
                variables: { Complaint_Group: code},
                data: { dashboard: {
                    ...dataToUpdate
                }},
              });
        }
    });

    if (loading) return <div>loading</div>;
    if (error) return <div>Error {error}</div>;
    const result = data.dashboard[section].find(item => {
        return item.name === key;
    });

    const handleComplaintDelete = (id) => {
        deleteComplaint({
            variables: { id }
        });
    };

    if (!result) return null;

    return (
        <div className='complaint-details'>
            <ComplaintCard
                data={result.complaints}
                onDelete={handleComplaintDelete}
            >
            </ComplaintCard>
        </div>
    );
}

export default ComplaintDetails;