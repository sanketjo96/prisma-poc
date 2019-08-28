const globalConfigs = {
    columns: [
        {
            field: 'name',
            title: 'Name'
        },
        {
            field: 'complaints',
            title: 'Complaints'
        },
        {
            field: 'expense',
            title: 'Total Expense (Rs.)'
        }
    ],
}

export const gridPaneConfig = [
    {
        label: 'Dealer Wise',
        name: 'Dealer_Wise',
        ...globalConfigs
    },
    {
        label: 'Dealer City Wise',
        name: 'Dealer_City_Wise',
        ...globalConfigs
    },
    {
        label: 'Model Wise',
        name: 'Model_Wise',
        ...globalConfigs
    },
    {
        label: 'Production Month Wise',
        name: 'Production_Month_Wise',
        ...globalConfigs
    }
]