import React, { useCallback, useState } from "react";
import Home from "./Home";
import Chat from "./Chat";

const App = () => {
  const [value, setValue] = useState({});
  const [isHome, setIsHome] = useState(true);

  const onSubmitedData = useCallback((userData) => {
    console.log(userData);
    setValue(userData);
    setIsHome(false);
  }, []);

  const onIsError = useCallback(()=>{
    setIsHome(true)
  },[])

  return (
    <div>{isHome ? <Home submitedData={onSubmitedData} /> : 
    <Chat isError={onIsError} userData={value}/>}</div>
  );
};

export default App;
