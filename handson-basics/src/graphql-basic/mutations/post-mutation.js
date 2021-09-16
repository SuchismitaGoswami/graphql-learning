import { v4 as uuidv4 } from 'uuid';

const PostMutation = {

    createPost(parent, args, { db, pubsub }, info) {
        let userExist = db.sampleUsers.some((user) => {
            return user.id == args.data.author
        })
        if (!userExist) {
            throw Error("User does not exist!")
        }
        let post = {
            ...args.data,
            id: uuidv4(),
            comments: []
        }
        db.samplePosts.push(post)
        if (post.published) {pubsub.publish('Post', { postAdded: post })}
        return post
    },
}

export { PostMutation as default }