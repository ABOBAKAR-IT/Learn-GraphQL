import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import cors from "cors";
import bodyParser from "body-parser";
import {User} from './fakeDB/fakeUser.js'
import {Post} from './fakeDB/fakePost.js'
const app = express();
app.use(cors());
app.use(bodyParser.json());



const typeDefs = `#gql

type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String!
    website: String!
    company: Company!
    posts: [Post!]!  # New field to fetch posts by user
  }
  
  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: GeoLocation!
  }
  
  type GeoLocation {
    lat: String!
    lng: String!
  }
  
  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }
  
  type Post {
    userId: ID!
    id: ID!
    title: String!
    body: String!
    user: User!  # New field to fetch the user of the post
  }
  
  type Query {
    getUser(id: ID!): User
    getAllUsers: [User!]!
    getPost(id: ID!): Post
    getAllPosts: [Post!]!
    getPostsByUserId(userId: ID!): [Post!]!  # New query to fetch posts by user ID
  }
  

`;

const resolvers = {
  Query: {
   getUser:(_,arg)=>User.find(user=>user.id==arg.id),
   getAllUsers:()=>User,
   getPost:(_,arg)=>Post.find(post=>post.id==arg.id),
   getAllPosts:()=>Post
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);
