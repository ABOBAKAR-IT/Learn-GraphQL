import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import cors from "cors";
import bodyParser from "body-parser";

import {typeDefs} from './GraphQL/Schemas/Schema.js'
import {resolvers} from './GraphQL/Resolvers/Resolver.js'
const app = express();
app.use(cors());
app.use(bodyParser.json());







const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);
