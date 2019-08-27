import gql from 'graphql-tag';

const DASHBOARDFRAGMENT = gql`
    fragment NamesFeild on ComplaintAggregate {
        name
        complaints {
            id
            PCR_Number
            VC_Number
            Chassis_No
            Dealer_Code_Description
            Dealer_City
            Sale_Month
            Complaint_Month
        }
    }
`;

export const DASHBOARD_QUERY = gql`
  query dashboard($Complaint_Group: String!){
    dashboard(Complaint_Group: $Complaint_Group) {
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