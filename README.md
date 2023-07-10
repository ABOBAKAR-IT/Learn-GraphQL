# graphql

Testing GrapQL following [this link](https://medium.freecodecamp.org/a-beginners-guide-to-graphql-86f849ce1bec)

## Run

```sh
cd Learn-GraphQL
npm install
node index.js
```

- Navigate to [http://localhost:8000](http://localhost:8000)
- Try the following queries
  - Get User By ID

```
query GetUser($getUserId: ID!) {
  getUser(id: $getUserId) {
    id
    name
    phone
    username
    website
    email
    address {
      city
      street
      geo {
        lat
        lng
      }
    }
    company {
      name
      catchPhrase
      bs
    }
  }
}
```

  - Get All User

```
query GetAllUsers {
  getAllUsers {
    id
    name
    phone
    username
    website
    email
    address {
      city
      geo {
        lat
        lng
      }
      street
      suite
      zipcode
    }
    company {
      name
      catchPhrase
      bs
    }
  }
}
```

- 
  - Get Post By ID

```
query GetPost($getPostId: ID!) {
  getPost(id: $getPostId) {
    id
    body
    title
    userId
  }
}
```

  - Get All Post

```
query GetAllPosts {
  getAllPosts {
    id
    userId
    title
    body
  }
}
```


[JSON Placeholder](https://jsonplaceholder.typicode.com/)