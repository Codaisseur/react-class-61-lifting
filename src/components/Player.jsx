import { useState } from "react";

const Player = (props) => {
  const increaseScore = () => {
    // setScore(score + 1);
  };

  console.log("RE_RENDER!!!", props.name);

  return (
    <div>
      <h2>
        Name: {props.name}. Score: {props.score}
      </h2>
      <button onClick={() => props.addOne()}>+</button>
    </div>
  );
};

export default Player;
