import React from 'react';

const Square = ({value, onClick}) => {
  return (
    <div>
      {<button value = {value} onClick = {onClick}>{value}</button>}
    </div>
  );
}

export default Square;
