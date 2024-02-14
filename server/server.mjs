//  use .mjs file ext to use await in the top level
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
// import { connectToDatabase } from "../dist/Connection/connection.js";
import typeDefs from '../dist/schema/index.schema.js';
// import typeDefs from '../dist/index.js';
// import resolvers from 'src/resolvers/index.resolver';
// import items from 'src/db/sample';

dotenv.config();
const uri = process.env.URI;
const app = express();
const httpServer = http.createServer(app);

// if (!uri) {
//   console.log("No env variable found.");
//   process.exit(1);
// }

// const typeDefs = gql`
//   type Item {
//     id: ID!
//     name: String!
//     inStock: Int!
//     frequency: String!
//     store: String!
//   }

//   type Query {
//     getItems: [Item!]!
//   }
// `;

// a map of functions that return data for the schema
const resolvers = {
  Query: {
    getItems: () => "items",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

// connectToDatabase(uri).then(() => {
//   app.use(cors(), bodyParser.json(), expressMiddleware(server));
// });

app.use(cors(), bodyParser.json(), expressMiddleware(server));


await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
