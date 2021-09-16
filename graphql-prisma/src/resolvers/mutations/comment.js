import { checkUserExist, checkPostExist, checkCommentExist } from './util'

let commentMutation = {
    async createComment(parent, { where, data }, { prisma, pubsub }, info) {
        let userExist = checkUserExist({ id: where.author }, prisma)
        let postExist = checkPostExist({ id: where.post }, prisma)
        if (!postExist || !userExist) {
            throw new Error("Either post or user does not exist!")
        }

        let newComment = await prisma.comment.create({
            data: {
                ...data,
                author: {
                    connect: {
                        id: where.author
                    }
                },
                post: {
                    connect: {
                        id: where.post
                    }
                }
            },
            include: {
                post: true,
                author: true
            }
        })
        return newComment
    },

    async updateComment(parent, { where, data }, { prisma }, info) {
        let commentExist = await checkCommentExist(where, prisma)
        if (!commentExist)
            throw new Error("Comment no longer exist!")
        let updatedComment = await prisma.comment.update({
            where, data, include: {
                post: true,
                author: true
            }
        })
        return updatedComment

    }
}

export { commentMutation as default }