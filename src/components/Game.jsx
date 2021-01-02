import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [xIsNext, setNext] = useState(true);
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }]);

  const historyCopy = history;
  const current = historyCopy[historyCopy.length - 1];
  const winner = calculateWinner(current.squares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else if (!current.squares.includes(null)) {
    status = 'Draw!';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function calculateWinner(grid) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    const historyCopy = history;
    const current = historyCopy[historyCopy.length - 1];
    const newSquares = current.squares.slice();

    if (calculateWinner(newSquares) || current[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory(prevValue => {
      return [...prevValue, {squares: newSquares}];
    });
    setNext(prevValue => !prevValue);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares}
          onClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;