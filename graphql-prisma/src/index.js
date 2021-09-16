import { graphqlServer } from './graphql-server'


graphqlServer.start().then(response =>{
    console.log("Server is up!")
}).catch(err=>{
    console.log(err)
})

