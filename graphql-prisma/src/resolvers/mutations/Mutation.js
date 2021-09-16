import UserMuatation from './user'
import CommentMutation from './comment'
import PostMutation from './post'

let Mutation = {
    ...UserMuatation,
    ...CommentMutation,
    ...PostMutation
}

export { Mutation as default }