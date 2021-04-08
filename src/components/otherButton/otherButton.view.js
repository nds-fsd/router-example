import React, { useContext } from 'react';
import { CounterContext } from '../../context/counterContext';

const OtherButton = () => {
  
  const {reset} = useContext(CounterContext);
  
  return (
    <div>
     <button onClick={reset}>Reset</button>
    </div>
  );
}

export default OtherButton;
