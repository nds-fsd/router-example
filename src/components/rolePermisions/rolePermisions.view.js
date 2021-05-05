import React, { useContext, useEffect } from 'react';
import { CounterContext } from '../../context/counterContext';

const RolePermision = ({ children }) => {
  
  const {role} = useContext(CounterContext);

  const confirmPermision = (perm) => {
      if (perm !== 'MASTER') {
          history.push(URL_NOT_PERMISION);
      }
  }

  useEffect(() => {
      confirmPermision('Client');
  }, [role]);
  

  return (children);
}

export default RolePermision;
