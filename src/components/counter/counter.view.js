import React, { useContext } from 'react';
import { CounterContext } from '../../context/counterContext';

const Counter = () => {
  
  const {count} = useContext(CounterContext);
  
  return (
    <div>
     <p>{count}</p>
    </div>
  );
}

export default Counter;
