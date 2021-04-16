 import React, { useRef } from "react";
import classes from "./register.module.css";

const Register = (props) => {

    const nameRef = useRef()
    const roomRef = useRef()

    const submitHandler = (event)=>{
        const name = nameRef.current.value
        const room = roomRef.current.value
        event.preventDefault();
        props.submit({name, room})
    }

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.register}>
        <h1> Make A Chat with Friends... </h1>
        <label htmlFor="name"> Name </label>
        <input ref={nameRef} id="name" />
        <label htmlFor="room"> Chat Room </label>
        <input ref={roomRef} id="room" />
        <button type="submit"> Connect </button>
      </form>
    </div>
  );
};

export default Register;
