import gql from 'graphql-tag';

export const UPDATE_COMPLAINT_REMARK = gql`
  mutation UpdateComplaintRemark($id: ID!, $Remark: String) {
    updateComplaint(id: $id, Remark: $Remark) {
      id,
      Remark
    }
  }
`;