let User = {
    // for every user GraphQL will call this method to get the info about the posts
    posts(parent, args, { db }, info) {
        if (parent.posts == undefined || parent.posts.length == 0)
            return []
        return db.samplePosts.filter((post) => {
            return parent.posts.includes(post.id)
        })
    }
}

export { User as default }