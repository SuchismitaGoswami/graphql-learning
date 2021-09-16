let checkUserExist = async (where, prisma) => {
    let userExist = await prisma.user.findUnique({
        where
    }) != null
    return userExist
}

let checkPostExist = async (where, prisma) => {
    let postExist = await prisma.post.findUnique({
        where
    }) != null
    return postExist
}
let checkCommentExist = async (where, prisma) => {
    let commentExist = await prisma.comment.findUnique({
        where
    }) != null
    return commentExist
}


export { checkUserExist, checkPostExist, checkCommentExist }