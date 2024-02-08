import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
const { typeDefs } = require('./src/Schema/index');
const { resolvers } = require('./src/Resolver/index');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

