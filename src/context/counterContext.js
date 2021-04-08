import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const value = {
    count,
    increment,
    reset,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
