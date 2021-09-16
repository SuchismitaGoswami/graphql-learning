import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Mutation from './mutations/Mutation'
import Comment from './resolvers/Comment'
import Post from './resolvers/Post'
import Query from './resolvers/Query'
import User from './resolvers/User'
import { PubSub } from 'graphql-subscriptions';
import Subscription from './subscriptions/Subscription'

const pubsub = new PubSub();

// ############################## Resolvers #############################


const resolvers = {
    Mutation,
    Subscription,
    User,
    Post,
    Comment,
    Query

}

const graphqlServer = new GraphQLServer({
    typeDefs: './src/graphql-basic/schema.graphql',
    resolvers,
    context: {
        db,
        pubsub
    }
})

export { graphqlServer }

