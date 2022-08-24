import { useState } from "react";
import Player from "./Player";

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Matias", score: 10 },
    { id: 2, name: "Swen", score: 13 },
    { id: 3, name: "Maria", score: 40 },
  ]);

  const sortedPlayers = [...players].sort((p1, p2) => p2.score - p1.score);

  return (
    <div>
      <h1>Scoreboard!</h1>
      {sortedPlayers.map((p) => (
        <Player name={p.name} score={p.score} addOne={p.addOne} />
      ))}
    </div>
  );
};

export default Scoreboard;
