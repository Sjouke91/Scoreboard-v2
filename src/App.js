import React from "react";
import "./App.scss";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Scoreboard />
      </header>
    </div>
  );
}

export default App;
