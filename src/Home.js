import classes from "./Home.module.css";
import React, { useState } from "react";

const Home = ({ submitedData }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    submitedData({ name, room });
  };
  return (
    <div className={classes.home}>

      <form onSubmit={onSubmit} className={classes.form}>

        <div className={classes.section}>
          <label className={classes.label}> Name </label>
          <input className={classes.input} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className={classes.section}>
          <label className={classes.label}> Room </label>
          <input className={classes.input} onChange={(e) => setRoom(e.target.value)} />
        </div>

        <button className={classes.button}> Join </button>

      </form>

    </div>
  );
};

export default Home;
