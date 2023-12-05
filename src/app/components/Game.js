"use client"

import React,{useState} from 'react';
import Board from "./Board"
import {calculateWinner} from "../helper"

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board)

    const handleClick = (i)=>{
        const boardCopy = [...board]
        if(winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? "X": "O"
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }

    const renderMoves = ()=>{
        <button onClick = {()=>setBoard(Array(9).fill(null))}>Start Game</button>
    }
  return (
    <>
      <Board squares = {board} onClick = {handleClick}/>
      <div>
        <p>{winner ? "The winner is " + winner : "The next player is " + (xIsNext ? "X": "O")}</p>
        {renderMoves}
      </div>
    </>
  );
}

export default Game;
