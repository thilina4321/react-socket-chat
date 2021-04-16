import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import classes from './Chat.module.css'

const ENDPOINT = "http://localhost:3001/";
let server = io(ENDPOINT);

const Chat = ({userData,isError}) => {
  const [weleome, setWelcome] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ref = useRef();


  useEffect(() => {
    ref.current.focus();

    if(userData){
        server.emit('join', userData, (error)=>{
            alert(error)
            isError()
        }) 
        
        server.on("welcome", (greeting) => {
          console.log(greeting);
          setWelcome(greeting.text)
        });
    }

    server.on("message", (message) => {
        
      if(message){
          console.log(message);
        setMessages(preMsgs=>[...preMsgs, {text: message.text, user:message.user, time: message.createdAt}]);

      }
      
    });

    server.on("location", (message) => {
      if(message){
        setMessages(preMsgs=>[...preMsgs, {text: <a href={message.location}
             target="__blank"> My location </a>
          , time: message.createdAt,
          user:message.user
        }]);

      }
      
    });
    
  },[userData,isError]);

  const click = () => {
    server.emit("send", message, () => {
      console.log("deliverd");
      
    });
    
    
    setMessage("");
    // console.log(messages);
  };

  const location = () => {
    let latitude;
    let longitude;
    if (!navigator.geolocation) {
      return alert("Sorry location is unavalible at the movement");
    }

    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.longitude;
      longitude = position.coords.latitude;

      server.emit("sendLocation", { latitude, longitude }, () => {
        console.log("location shared");
      });
    });
  };

  return (
    <div>
      <h1> Chat </h1>
      <input
        ref={ref}
        value={message}
        autoComplete="false"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={click}> Click </button>
      <br />
      {weleome && <h2> {weleome} </h2> }
      {messages.map((msg, index) => {
        return (
          <div key={index}>
            {msg.user} - {msg.time}
            <p> {msg.text} </p>
          </div>
        );
      })}
      <button onClick={location}> Location </button>
    </div>
  );
};

export default Chat;
