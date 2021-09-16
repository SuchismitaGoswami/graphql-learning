import commentSubscriptions from './comment'
import postSubscriptions  from './post'

const Subscription = {
    ...commentSubscriptions,
    ...postSubscriptions
}

export { Subscription as default }