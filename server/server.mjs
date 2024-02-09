//  use .mjs file ext to use await in the top level
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { gql } from 'graphql-tag';
// import fs from 'fs';
// import path from 'path';

const app = express();
const httpServer = http.createServer(app);

// const __dirname = await import.meta.url;
// const schema = fs.readdirSync(path.join( '///home/drespana/desk/server', 'src', 'Schema'));
// schema.forEach(file => {console.log(file)});
// const typeDefs = schema.map(file => {
//     const filePath = path.join('///home/drespana/desk/server', 'src',  'Schema', file);
//     const fileContent = fs.readFileSync(filePath, 'utf8');
//     return gql`${fileContent}`;
// });
// const resolverDirectory = fs.readdirSync(path.join('///home/drespana/desk/server', 'src',  'Resolver'));
// const resolvers = resolverDirectory.map((file) => {
//     const filePath = path.join('///home/drespana/desk/server', 'src',  'Resolver', file);
//     const fileContent = fs.readFileSync(filePath, 'utf8');
//     return fileContent;
// })

//schema
const typeDefs = gql`
    type Query {
        hello: String
    }
`

// a map of functions that return data for the schema
const resolvers = {
    Query: {
        hello: () => 'world'
    }
};

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
