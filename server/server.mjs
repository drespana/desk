//  use .mjs file ext to use await in the top level
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectToDatabase } from '../dist/Connection/connection.js'

dotenv.config();
const app = express();
const httpServer = http.createServer(app);


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});
await server.start();

app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
);

await new Promise((resolve) => httpServer.listen({port:4000}, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
