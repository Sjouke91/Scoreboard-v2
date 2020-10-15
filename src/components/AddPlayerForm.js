import React, { useState } from "react";
import "../App.scss";

export default function AddPlayerForm(props) {
  const [newPlayer, setNewPlayer] = useState("");

  const addPlayer = () => {
    props.addPlayer(newPlayer);
    setNewPlayer("");
  };

  return (
    <div className="AddPlayerForm">
      <p className="input">
        New player:{" "}
        <input
          onChange={(event) => {
            setNewPlayer(event.target.value);
            console.log("this is value", newPlayer);
          }}
          value={newPlayer}
          type="text"
          placeholder="Name"
        />{" "}
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}
