

export const typeDefs = `#gql

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

  type Mutation{
    createUser(name: String!, username: String!, email: String!, phone: String!, website: String!): User!
    createPost(userId: ID!, title: String!, body: String!): Post!
  }

`;