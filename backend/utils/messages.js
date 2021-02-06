const sendMessage = (text, user)=>{
    return {
        text,
        user,
        createdAt: new Date().toString().slice(16,21)
    }
}

const sendLocation = (location, user)=>{
    return {
        location,
        user,
        createdAt: new Date().toString().slice(16,21)

    }
}

module.exports = {
    sendMessage,
    sendLocation
}