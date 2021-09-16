const samplePosts = [{
    id: "123",
    title: "Fake",
    body: "No proper content",
    published: true,
    author: 11
}, {
    id: "124",
    title: "Fake1",
    body: "No proper content",
    published: true,
    author: 12
}]

const sampleUsers = [{
    id: "11",
    name: "XYZ",
    age: 27,
    email: "suchi123@gmail.com"
}, {
    id: "12",
    name: "XYZA",
    age: 26,
    email: "suchi1234@gmail.com"
}]

const sampleComments = [{
    "id": "555",
    "text": "A Dummy Comment!",
    "author": "12",
    "post": "123"
}, {
    "id": "556",
    "text": "Another Dummy Comment!",
    "author": "11",
    "post": "124"
}]

let db = {
    sampleUsers,
    samplePosts,
    sampleComments
}
export {db as default}