import React, { useRef, useState } from "react";
import { useEffect } from "react";
import classes from './chat.module.css'

const Chat = () => {

  const messageEl = useRef()
  const messageRef = useRef()
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  const addMessages = ()=>{
    let message = messageRef.current.value
    console.log(message);
    setMessages((prev)=>{
      return [...prev, message]
    })
  }

  return (
    <div className={classes.chat}>
      <div className={classes.names} > chat </div>
      <div className={classes.room} > 
      <div ref={messageEl}>
      {messages.map((message, index)=> <p key={index}> {message} </p> )}
      </div>
       
      <input ref={messageRef}  />
      <button onClick={addMessages}> Ok </button>
       </div>
    </div>
  );
};

export default Chat;
