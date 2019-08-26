const { prisma } = require('./prisma/generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./graphql/resolver');

const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers,
    context: {
      prisma,
    },
});
server.start(() => console.log('Server is running on http://localhost:4000'))