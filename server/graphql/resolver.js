var _ = require('lodash');

function groupByHelper(data, key) {
    return _.chain(data)
        .groupBy(key)
        .map((value, key) => ({ name: key, complaints: value }))
        .value()
        ;
}

const resolver = {
    Query: {
        complaints(root, args, context) {
            return context.prisma.complaints({});
        },
        dashboard(root, args, context) {
            return context.prisma.complaints({
                where: {
                    Complaint_Group: args.Complaint_Group,
                    Model_in: args.models
                }
            });
        }
    },
    Mutation: {
        deleteComplaint(root, args, context) {
            return context.prisma.deleteComplaint({
                    id: args.id
            })
        }
    },
    DashBoard: {
        Dealer_Wise: (root, args, context) => {
            return groupByHelper(root, 'Dealer_Code_Description')
        },
        Dealer_City_Wise: (root, args, context) => {
            return groupByHelper(root, 'Dealer_City')
        },
        Model_Wise: (root, args, context) => {
            return groupByHelper(root, 'Model')
        },
        Complaint_Month_Wise: (root, args, context) => {
            return groupByHelper(root, 'Complaint_Month')
        },
        Production_Month_Wise: (root, args, context) => {
            return groupByHelper(root, 'Production_Month')
        }
    }
};

module.exports = resolver;