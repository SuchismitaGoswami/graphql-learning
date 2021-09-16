let Post = {
    author(parent, args, { db }, info) {
        let index = db.sampleUsers.findIndex((user) => {
            return user.id == parent.author
        })
        return db.sampleUsers[index]
    },

    comments(parent, args, { db }, info) {
        let postComments = db.sampleComments.filter((comment) => {
            console.log(comment.text)
            return parent.comments.includes(comment.id)
        })
        console.log(postComments)
        return postComments
    }
}

export { Post as default }