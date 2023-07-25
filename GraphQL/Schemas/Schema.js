

export const typeDefs = `
type User {
    _id: ID!
    name: String,
  username: String,
  email: String,
  street: String,
  city: String,
  phone: String,
  website: String,
    
    posts: [Post!]!  # New field to fetch posts by user
  }
  

  
  type Post {
    userId: ID!
    _id: ID!
    title: String!
    body: String!
    user: User!  # New field to fetch the user of the post
  }
  
  type Query {
    findUser: [User!]!
    findUserById(_id: ID!): User!
    findPost: [Post!]!
    findPostById(_id: ID!): Post!
  }

  type Mutation{
    createUser(name: String!, username: String!, email: String!, phone: String!, website: String!, street: String!,city:String!): User!
    createPost(userId: ID!, title: String!, body: String!): Post!
   UpdateUser(id:ID!,name: String!, username: String!, email: String!, phone: String!, website: String!,street: String!,city:String!): User!
   DeleteUser(id:ID!):User!
  }

`;