## NOTES 
0. REST API vs GraphQL
    - https://www.youtube.com/watch?v=4akSaaEYJqs

1. **Important features of GraphQL** 
    - GraphQL is s query language or framework, the endpoint never changes only the query changes according to the data required. 

    - GraphQL only supports **POST** request
    - GraphQL follows HTTP protocol

    - GraphQL is **faster** than REST API 
        - **REST API Example** : Client App needs the following info 
            - GET: /api/posts/123 - return the details of the post including the author id
            - GET: /api/posts?author=authorID - returns all the posts created by the author
            - GET: /api/posts/123/comments - returns all the comments specific to postID := 123
        With RESTAPI, client app needs to make three HTTP request to get the requested data

        -  **GRAPHQL Example**
            - POST: /graphQL with a graphQL Query: Here clients needs to explain what data it needs, rather than server specifying what data it would return.

    - GraphQL is **flexible**
        - **REST API**: The above problem can be resolved if we returns all the data  while client app sends reqquest to /api/posts/123. However, the no of database operation increases and become irrelevant when all the data is not required sometimes. But the problems is more critical, when we think about multiple types of client application. For example, a mobile application may not need all the data at all, moreover, processing or filtering out data from the response would need expensive comupation which could be constly, battery inefficient. REST provides static endpoint. In contranst, GraphQL allows controlling the amount of data needs to fetched based on the client APP.


2. **GraphQL Operations**
   1. **Query** (Fetch data)
    
    Example: 
      ```
      query{
        hello course courseInstructor 
      }
      ```  
      **Output**
        ```
        {
            "data": {
                "hello": "Hello world!",
                "course": "GraphQL",
                "courseInstructor": "Andrew Mead"
            }
        }
        ```
      // requesting a single/multiple field(s) seperated by space/newline

    // Fetching an object field
    ```
    query{
     hello course courseInstructor 
        me{
            name
            id
        }
    }
    ```
    **Output**

    ```
    {
    "data": {
        "hello": "Hello world!",
        "course": "GraphQL",
        "courseInstructor": "Andrew Mead",
        "me": {
        "name": "Andrew",
        "id": "c3e7f6c2-9aef-4bda-bd87-0358a246bfa3"
        }
    }
    }

    ```
    ------------------
    **Fetching array** 
    ```                                
    query{              
        users{
            name
        }
    }
    ```
    **Output**
    ```
    {
        "data": {
            "users": [
            {
                "name": "Andrew"
            },
            {
                "name": "Sarah"
            },
            {
                "name": "Michael"
            }
            ]
        }
    }
    ```


   2. **Mutation** (Update data)
     - **Input Type**
       - The structure of the input data for the mutation operation could be defined as a type seperately from the mutation operation defination
       - The input type can have only the scalar values.
     ```
     input CreateUserInput{
         name: String!
         age: Int!
     }
     type Mutation{
         createUser(data: CreateUserInput!): User!
     }
     ```
     ==============
     In the graphql query
     ```
      mutation{
          createUser(
              data: {
                  name: "Test"
                  age: 1 
              }
          )
          
      }
     ``` 

   - Context: A Mutable object that is provided to all resolvers. Pass the common data inside the context to graphql server. This will be available inside the ctx variable inside the resolver
   - Mutation best practice: https://www.apollographql.com/blog/graphql/basics/designing-graphql-mutations 
   - Resolver best practice: https://medium.com/paypal-tech/graphql-resolvers-best-practices-cd36fdbcef55

   3. **Subscription** (watch data for changes)
      - Allows server to push data in real time down to all the subscribed clients. This avoids adding polling at the client side to get notification due to any changes to the data.


      - GraphQL schemas must be defined keeping in mind the how the cient wants to see the related data. 
      - This may differ from the actual fields stored in the database schema

      - GraphQL works well with relational database as we need to be explicit about every field of each types
        
- **Type Defination**: Define schemas and opertaion supported
- **Resolver**: Action to perform when an opertaion is performed on a schema        


- **Prisma**
  - Its an ORM.
  - Prisma supports multiple database engine.
  - It wraps the database and exposes graphQL APIs. So, with any changes to the database engine, we don't need to change any code related to the database operation. Only the creating connection part needs to be changed.
  - https://www.npmjs.com/package/prisma

- **Prisma binind**
  - Node js library to interact with the prisma graphQL API 
  - https://www.npmjs.com/package/prisma-binding

- **Prisma Query**
  - where : {condition..: true}
  - select : {set of fields to select:  true} 
  - include : {nested_relation: true}

- **Prisma Mutation**
  - data: {
      ...user,
      role : {
          connect :{
              id: '1klk'
          }
      }
    } - This will create a new user and assign and existing role to it.
  - data: {
      ...user,
      role : {
          create :{
              id: '1klk',
              name: "Admin"
          }
      }
    } - This will create a new user and create and new role and assign to it.


- **Prisma authentication**
  - Prisma Secret: A password shared between the prisma server and node js client. This token must be passe d while connecting to the prisma server
  - `prisma token`: To create the bearer token.
    - `bcrypt-js` to encrypt the secrets like password


- **GraphQL fragment**
  - https://www.youtube.com/watch?v=oTYe4oAaloo 

- **Paginationa nd sorting with GraphQL**
  - https://www.prisma.io/docs/concepts/components/prisma-client/pagination
  - Offset based pagination
  - Curson based pagination

- **GRAPHQL Authentication**
  - https://www.youtube.com/watch?v=qjKZYQih288
  - https://www.youtube.com/watch?v=4_Bcw7BULC8