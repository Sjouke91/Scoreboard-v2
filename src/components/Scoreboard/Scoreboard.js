import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayerForm";
import "./Scoreboard.scss";

function compare_score(a, b) {
  return b.score - a.score;
}

function compare_name(a, b) {
  return a.name.localeCompare(b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  console.log(players);

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  function change_sorting(event) {
    set_sort_by(event.target.value);
  }

  function incrementScore(playerId) {
    // console.log(props);
    const id = playerId;
    // console.log(id);
    const new_players_array = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });
    set_players(new_players_array);
  }

  function resetScoreToRandom() {
    const new_players_array = players.map((player) => {
      let randomNum = Math.floor(Math.random() * 100);
      console.log("is this random", randomNum);
      return {
        ...player,
        score: player.score - player.score + randomNum,
      };
    });
    set_players(new_players_array);
  }

  function addPlayer(name) {
    console.log("name:", name);
    const newPlayer = { id: players.length + 1, name: name, score: 0 };
    console.log(newPlayer);
    const new_players = [...players, newPlayer];
    console.log(new_players);
    set_players(new_players);
  }

  function deletePlayer(id) {
    console.log("i got clicked", id);
    const deleteArray = players.filter((player) => {
      return player.id !== id;
    });
    set_players(deleteArray);
  }

  function resetScore(id) {
    console.log("I got clicked", id);
    const resetArray = players.map((player) =>
      player.id === id ? { ...player, score: 0 } : player
    );
    console.log(resetArray);
    set_players(resetArray);
  }

  console.log(players_sorted);
  return (
    <div className="Scoreboard">
      <p className="sortOrder">
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button className="randomizer" onClick={resetScoreToRandom}>
          Randomizer
        </button>
      </p>

      {players_sorted.map((player) => {
        return (
          <div key={player.id}>
            <Player
              incrementScore={incrementScore}
              resetScore={resetScore}
              deletePlayer={deletePlayer}
              id={player.id}
              name={player.name}
              score={player.score}
            />
          </div>
        );
      })}

      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
