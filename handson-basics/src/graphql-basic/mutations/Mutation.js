import UserMuatation from './user-mutation'
import CommentMutation from './comment-mutation'
import PostMutation from './post-mutation'

let Mutation = {
    ...UserMuatation,
    ...CommentMutation,
    ...PostMutation
}

export { Mutation as default }