import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import cors from "cors";
import bodyParser from "body-parser";
import {connection} from "./DB/db.js"

import { typeDefs } from "./GraphQL/Schemas/Schema.js";
import { resolvers } from "./GraphQL/Resolvers/Resolver.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const dbcon = async () => {
  try {
      await connection();
  } catch (error) {
      console.log(error);
  }
};

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});
dbcon()

console.log(`🚀  Server ready at: ${url}`);
