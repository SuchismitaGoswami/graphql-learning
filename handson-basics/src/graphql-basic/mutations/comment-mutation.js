import { v4 as uuidv4 } from 'uuid';

let commentMutation = {
    createComment(parent, { data }, { db, pubsub }, info) {
        let userExist = db.sampleUsers.some((user) => user.id == data.author)
        if (!userExist) {
            throw new Error("User does not exist!")
        }
        let postExist = db.samplePosts.some((p) => p.id == data.post && p.published == true)

        if (!postExist) {
            throw new Error("Post does not exist or not published yet!")
        }
        let comment = { ...data, id: uuidv4() }
        db.sampleComments.push(comment)
        // pubsub.publish('channel-name', {subscription-name(as defined in the subscription): payload})
        pubsub.publish(`Comment-${data.post}`, { commentAdded: comment })
        return comment
    }
}

export { commentMutation as default }