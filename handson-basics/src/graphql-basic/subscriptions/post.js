let postSubscriptions = {
    postAdded: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator(`Post`)
        }
    }
}

export { postSubscriptions as default }