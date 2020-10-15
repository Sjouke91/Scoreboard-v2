import React from "react";
import "./Player.scss";

export default function player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  const onClickReset = () => {
    props.resetScore(props.id);
  };

  const onClickDelete = () => {
    props.deletePlayer(props.id);
  };

  return (
    <div>
      <li className="Player">
        <div
          className="percentage_coloring"
          style={{ width: props.score + "%" }}
        />
        <p>
          Hello {props.name} Your score: {props.score}
          <button className="button1" onClick={onClickIncrement}>
            increment
          </button>
          <button className="button2" onClick={onClickReset}>
            Reset
          </button>
          <button className="button3" onClick={onClickDelete}>
            Delete
          </button>
        </p>
      </li>
    </div>
  );
}
