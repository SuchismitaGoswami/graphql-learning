import { v4 as uuidv4 } from 'uuid';
import {checkUserExist} from './util'
let userMutation = {
    async deleteUser(parent, { where }, { prisma }, info) {
        let userExist = await checkUserExist(where, prisma)
        if (userExist) {
            let deletedUser = await prisma.user.delete({
                where,
                include: {
                    posts: true,
                    comments: true
                }
            })
            return deletedUser
        }else {
            throw new Error("User does not exist!")
        }
    },


    async createUser(parent, { data }, { prisma }, info) {
        let newUser = await prisma.user.create({
            data: data
        })
        return newUser
    },

    async updateUser(parent, { where, data }, { prisma }, info) {
        let userExist = await checkUserExist(where, prisma)
        if (userExist) {
            let updatedUser = await prisma.user.update({ where, data })
            return updatedUser
        } else {
            throw new Error("User does not exist!")
        }
    }

}



export { userMutation as default }