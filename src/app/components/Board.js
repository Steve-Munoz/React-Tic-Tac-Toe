"use client"

import React from 'react';
import Square from "./Square"

const Board = ({squares, onClick}) => {
  return (
    <div>
      {squares.map((square,i)=>
      (<Square key={i} value = {square} onClick = {()=>onClick(i)}/>)
      )}
    </div>
  );
}

export default Board;
