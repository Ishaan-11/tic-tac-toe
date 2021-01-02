import React, { useState } from 'react';

function Square(props) {
  const [value, setValue] = useState(null);

  return (
    <button 
      className="square" 
      onClick={() => setValue('X')}
    >
      {value}
    </button>
  );
}

export default Square;