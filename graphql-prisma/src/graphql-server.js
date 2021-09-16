import { GraphQLServer } from 'graphql-yoga'
import Mutation from './resolvers/mutations/Mutation'
import Comment from './resolvers/query/Comment'
import Post from './resolvers/query/Post'
import Query from './resolvers/query/Query'
import User from './resolvers/query/User'
import { PubSub } from 'graphql-subscriptions';
import Subscription from './resolvers/subscriptions/Subscription'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

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
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        pubsub,
        prisma
    }
})

export { graphqlServer }

