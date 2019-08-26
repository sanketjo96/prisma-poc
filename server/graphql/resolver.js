const resolver = {
    Query: {
        complaints(root, args, context) {
            return context.prisma.complaints({});
        }
    }
};

module.exports = resolver;