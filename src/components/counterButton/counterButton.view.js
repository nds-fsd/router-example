import React, { useContext } from 'react';
import { CounterContext } from '../../context/counterContext';

const CounterButton = () => {
  
  const {increment} = useContext(CounterContext);
  
  return (
    <div>
     <button onClick={increment}>+1</button>
    </div>
  );
}

export default CounterButton;
