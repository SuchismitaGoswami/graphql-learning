import { v4 as uuidv4 } from 'uuid';

let userMutation = {
    deleteUser(parent, args, { db }, info) {
        let userIndex = db.sampleUsers.findIndex((user) => user.id == args.id)
        if (userIndex == -1) {
            throw Error("User does not exist!")
        }
        // remove the user
        let deletedUser = db.sampleUsers.splice(userIndex, 1)

        // remove all associated comment
        for (index = 0; index < db.sampleComments.length; index++) {
            if (deletedUser.id == db.sampleComments[index].author)
                db.sampleComments.slice(index)
        }

        // remove all associated post
        for (index = 0; index < db.samplePosts.length; index++) {
            if (deletedUser.id == db.samplePosts[index].author)
                db.samplePosts.slice(index)
        }

        return deletedUser
    },


    createUser(parent, args, { db }, info) {
        let userExist = db.sampleUsers.some((user) => {
            return user.email == args.data.email
        })
        if (userExist) {
            throw Error('User already exists!')
        }
        let user = {
            ...args.data,
            id: uuidv4()
        }
        db.sampleUsers.push(user)
        console.log(db.sampleUsers)
        return user
    }

}

export { userMutation as default }