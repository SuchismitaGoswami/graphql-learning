let Comment = {
    author(parent, args, { db }, info) {
        return db.sampleUsers.find(user => {
            return user.id == parent.author
        })
    },
    post(parent, args, { db }, info) {
        return db.samplePosts.find(post => {
            return post.id == parent.post
        })
    }
}

export { Comment as default }
