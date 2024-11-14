import React, { useState } from "react";
import "./TicTacToe.css";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }

    const playerSymbol = count % 2 === 0 ? "x" : "o";
    const imgSrc = count % 2 === 0 ? cross : circle;

    e.target.innerHTML = `<img src='${imgSrc}'>`;
    data[num] = playerSymbol;
    setCount(count + 1);
    checkWin();
  };

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }

    if (count === 9) {
      alert("It's a draw!");
      setLock(true);
    }
  };

  const won = (winner) => {
    alert(`${winner.toUpperCase()} wins!`);
    setLock(true);
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe Game</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
