import * as Realm from "realm-web";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import dotenv from "dotenv";
dotenv.config();

// Add your App ID
const id: any = process.env.APP_ID;
const config = {
  id,
};
const app = new Realm.App(config);
