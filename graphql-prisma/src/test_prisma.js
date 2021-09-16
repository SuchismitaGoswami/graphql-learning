// import { graphqlServer } from './graphql-server'
const { PrismaClient } = require('./generated/client')
const prisma = new PrismaClient()
const util = require('util')


// const postUser = async (payload) => {
//     let user = {
//         ...payload,
//         posts: {
//             create: {
//                 title: 'Include this post!',
//             },
//         }
//     }
//     console.log(user)
//     let newUser = await prisma.user.create({
//         data: user
//     })
//     console.log(newUser)
// };

// const createPost = async (post) => {
//     let newpost = await prisma.post.create({

//     })
// }
async function main() {
    let includePosts = true
    let user


    // get all user with posts
    // let users = await prisma.user.findMany({
    //     select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //         posts: {
    //             select: { title: true }
    //         }
    //     }
    // })
    // console.log(util.inspect(users, { showHidden: false, depth: null }))


    // let usersWithPosts = await prisma.user.findMany({
    //     where: {
    //         id: {
    //             in: [1, 23, 18]
    //         }
    //     },
    //     include: {
    //         posts: true
    //     }
    //     // select: {
    //     //     id: true,
    //     //     name: true,
    //     //     email: true,

    //     // }
    // })
    // console.log(util.inspect(usersWithPosts, { showHidden: false, depth: null }))

    // // Check if posts should be included in the query
    // if (includePosts) {
    //     user = {
    //         email: 'elsa-random1@prisma.io',
    //         name: 'Elsa Prisma',
    //         posts: {
    //             create: {
    //                 title: 'Another: Include next random post!',
    //             },
    //         },
    //     }
    // } else {
    //     user = {
    //         email: 'elsa3@prisma.io',
    //         name: 'Elsa Prisma',
    //     }
    // }

    // // Pass 'user' object into query
    // // const createUser = await prisma.user.create({ data: user })
    // // console.log(createUser)
    let post = await prisma.post.create({
        data: {
            title: 'Express framework advanced concepts!',
            body: "An intial draft version",
            author: {
                connectOrCreate: {
                    where: {
                        id: 23
                    },
                    create: {
                        id: 23,
                        name: "Main Mayer",
                        email: "sima123@gmail.com"
                    }
                }
            }
        },
        select: {
            id: true,
            title: true,
            author: {
                select: {
                    name: true,
                    id: true
                }
            }
        }
    })
    // console.log(post)
    // let updatedPost = await prisma.post.update({
    //     where: { title: post.title },
    //     data: {
    //         body: "Updated content",
    //         published: true,
    //         author: {
    //             update: {
    //                 name: "Suchismita Goswami"
    //             }

    //         }
    //     }
    // })
    // console.log(updatedPost)

    // let allpublishedPost = await prisma.post.findMany({
    //     where: {
    //         published: true
    //     },
    //     select: {
    //         title: true,
    //         body: true,
    //         published: true,
    //         author: {
    //             select: {
    //                 name: true,
    //                 id: true
    //             }
    //         }
    //     }
    // })
    // console.log(allpublishedPost)

    console.log(util.inspect(post, { showHidden: false, depth: null }))


    // delete an user and its posts
    let deletedUser = await prisma.user.delete({
        where: {
            id: post.author.id
        },
        select: {
            posts: {
                select: {
                    title: true,
                    id: true
                }
            }
        }
    })

    console.log(deletedUser)

    let deletedPost = await prisma.post.findUnique({
        where: {
            // title: post.title,
            id: post.id
        }
    })
    console.log(deletedPost)

}

// async function main(args) {

//     let user = await postUser({
//         email: "suchi@gmail.com",
//         name: "Suchismita"
//     })
//     console.log(user)
//     // let post = await createPost({

//     // })
// }
main().catch(err => {
    console.log(err)
})

// graphqlServer.start().then(response =>{
//     console.log("Server is up!")
// }).catch(err=>{
//     console.log(err)
// })
