import gql from 'graphql-tag';

const DASHBOARDFRAGMENT = gql`
    fragment NamesFeild on ComplaintAggregate {
        name
        complaints {
            id
            PCR_Number
            VC_Number
            Dealer_Code_Description
            Dealer_City
            Sale_Month
            Complaint_Month
            Total_Expenses
            Investigation
            Action_Taken
        }
    }
`;

export const DASHBOARD_QUERY = gql`
  query dashboard($Complaint_Group: String!){
    dashboard(Complaint_Group: $Complaint_Group) {
        Complaint_Month_Wise {
            ...NamesFeild
        }
        Dealer_Wise {
            ...NamesFeild
        }
        Dealer_City_Wise {
            ...NamesFeild
        }
        Model_Wise {
            ...NamesFeild
        }
        Production_Month_Wise {
            ...NamesFeild
        }
    }
  }
  ${DASHBOARDFRAGMENT}
`