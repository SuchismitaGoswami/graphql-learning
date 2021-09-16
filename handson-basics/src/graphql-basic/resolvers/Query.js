let Query = {
    me() {
        return {
            id: "11",
            name: "XYZ",
            age: 27
        }
    },
    comments(parent, args, { db }, info) {
        if (!args.text) {
            return db.sampleComments
        }
        return db.sampleComments.filter((comment) => { comment.text.toLowerCase.includes(args.text) })
    },
    users(parent, args, { db }, info) {
        if (!args.name) {
            return db.sampleUsers
        }
        return db.sampleUsers.filter((user) => { return user.name.toLowerCase().includes(args.name.toLowerCase()) })
    },
    posts(parent, { filter: { title, id } }, { db }, info) {
        if (!title && !id) {
            return db.samplePosts
        }

        return db.samplePosts.filter(post => { return post.title.includes(title) || (post.id == id) })
    }
}

export { Query as default }