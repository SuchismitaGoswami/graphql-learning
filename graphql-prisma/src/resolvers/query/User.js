let User = {
    email(parent,args, {prisma}, info){
        // console.log(info)
        return parent.email
    }
}

export { User as default }