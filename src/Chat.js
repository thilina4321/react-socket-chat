import React, { useRef, useState } from "react";
import { useEffect } from "react";
import classes from "./chat.module.css";

const Chat = () => {
  const messageEl = useRef();
  const messageRef = useRef();
  const [messages, setMessages] = useState([]);


  const addMessages = () => {
    let message = messageRef.current.value;
    console.log(message);
    setMessages((prev) => {
      return [...prev, message];
    });
  };

  const scrollToBottom = () => {
    messageEl.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={classes.chat}>
      <div className={classes.names}> chat </div>
      <div className={classes.room}>
        <div  style={{height:'80%'}}>
          {messages.map((message, index) => (
            <p key={index}> {message} </p>
          ))}
          <div ref={messageEl}>  </div>
        </div>

        <input ref={messageRef} />
        <button onClick={addMessages}> Ok </button>
      </div>
    </div>
  );
};

export default Chat;
