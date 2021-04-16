import React, { useCallback } from "react";
import Chat from "./chat";
import Register from "./register";

const App = () => {

  const submit = useCallback(({name, room})=>{
    console.log(name, room);
  }, [])

  // <Register submit={submit}/>
  return (
    <div
      style={{
        width:'100%',
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <Chat />
    </div>
  );
};

export default App;
