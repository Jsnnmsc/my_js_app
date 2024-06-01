import React, { useState } from "react";
import Board from "./Board";
import "./tictactoe.css";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="game">
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
        history={history}
        onJumpTo={jumpTo}
      />
    </div>
  );
}

export default Game;
