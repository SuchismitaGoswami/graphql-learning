let Query = {
    me() {
        return {
            id: "11",
            name: "XYZ",
            age: 27
        }
    },
    async comments(parent, { where }, { prisma }, info) {
        let comments = prisma.comment.findMany({
            where,
            include: {
                author: true,
                post: true
            }
        })
        return comments
    },
    async users(parent, { where }, { prisma }, info) {
        console.log(info["operation"]["selectionSet"]["selections"])
        let users = await prisma.user.findMany({
            where,
            include: {
                posts: true
            }
        })
        return users
    },
    async posts(parent, { where }, { prisma }, info) {
        let posts = await prisma.post.findMany({
            where,
            include: {
                author: true,
                comments: true
            }
        })
        return posts
    }
}

export { Query as default }