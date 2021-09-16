let commentSubscriptions = {
    // This will allow clients to be informed if any comment has been added to a post
    comment: {
        subscribe(parent, { postID }, { db, pubsub }, info) {
            let postExist = db.samplePosts.some((post) => post.id == postID)
            if (!postExist)
                throw new Error("Post does not exist!")
            return pubsub.asyncIterator(`Comment-${postID}`)
        }
    }
}



export { commentSubscriptions as default }