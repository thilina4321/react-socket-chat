import React, { useState } from 'react'

const Home = ({submitedData}) => {
    const [name, setName] = useState('')    
    const [room, setRoom] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault();
        submitedData({name, room})
    }
    return (
        <div>
            <h1> Join  </h1>
            <form onSubmit={onSubmit}>
            <div>
                <label> Name </label>
                <input onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label> Room </label>
                <input onChange={(e)=>setRoom(e.target.value)}/>
            </div>
            <button> Join </button>
            </form>
        </div>
    )
}

export default Home
