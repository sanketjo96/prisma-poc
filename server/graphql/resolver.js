const resolver = {
    Query: {
        complaints(root, args, context) {
            return context.prisma.complaints({});
        }
    },
    Mutation: {
        createComplaint(root, args, context) {
            return context.prisma.createComplaint(args.input);
        }
    }
};

module.exports = resolver;