import gql from 'graphql-tag';

export const DELETE_COMPLAINT = gql`
  mutation DeleteComplaint($id: ID!) {
    deleteComplaint(id: $id) {
      id
    }
  }
`;