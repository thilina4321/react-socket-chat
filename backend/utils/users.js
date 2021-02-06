const users = []

const addUser = ({id, name, room})=>{

    // check the room and name entered
    if(!name || !room){
        return {
            error:'user name and room name is required'
        }
    }

    // check is the user exist
    const existingUser = users.find(user=> user.room === room && user.name === name)
    if(existingUser){
        return {
            error:'user name is in use'
        }
    }

    // validate user
    const user = {id, name, room}
    users.push(user)
    return {user}
}

const removeUser = (id)=>{

    // check user
    const findUserIndex = users.findIndex(user => user.id === id)
    if(findUserIndex === -1){
        return {
            error:'user is not found'
        }
    }

    // remove user
    return users.splice(id, 1)
}

const getUser = (id)=>{

    // find user
    const user = users.find(user=> user.id === id)
    if(!user){
        return {
            error:'no user found'
        }
    }
    return {user}
}

const getUsersInRoom = (room)=>{

    // find users
    return users.filter(user=>user.room === room)
    
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

console.log(addUser({id:1, name:'thilina', room:'r2'}));
console.log(addUser({id:2, name:'dilshan', room:'r2'}));

// console.log(removeUser(2));
console.log(getUser(1));
console.log(getUsersInRoom('r2'));
