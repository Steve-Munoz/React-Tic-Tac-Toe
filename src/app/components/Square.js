import React from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({value, onClick}) => {
  return (
    <>
      {<button style = {style} value = {value} onClick = {onClick}>{value}</button>}
    </>
  );
}

export default Square;

