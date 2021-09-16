import { v4 as uuidv4 } from 'uuid';
import { checkUserExist, checkPostExist } from './util'
const PostMutation = {

    async createPost(parent, { where, data }, { pubsub, prisma }, info) {
        let userExist = await checkUserExist({ id: where.author }, prisma)
        if (!userExist) {
            throw Error("User does not exist!")
        }
        let newPost = await prisma.post.create({
            data: {
                ...data,
                author: {
                    connect: {
                        id: where.author
                    }
                }
            },
            include: {
                author: true,
                comments: true
            }
        })
        return newPost
    },


    async deletePost(parent, { where }, { prisma }, info) {
        let postExist = await checkPostExist(where, prisma)
        if (!postExist) {
            throw new Error("Post does not exist!")
        }
        let deletedPost = await prisma.post.delete({
            where,
            include: {
                author: true,
                comments: true
            }
        })
        return deletedPost
    },

    async updatePost(parent, { where, data }, { prisma }, info) {
        let postExist = await checkPostExist(where, prisma)
        if (!postExist) {
            throw new Error("Post does not exist!")
        }
        let updatedPost = await prisma.post.update({
            where,
            data,
            include: {
                author: true,
                comments: true
            }
        })
        return updatedPost
    }

}

export { PostMutation as default }