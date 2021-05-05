import React, { useContext } from 'react';
import { CounterContext } from '../../context/counterContext';

const Counter = () => {
  
  const {count} = useContext(CounterContext);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const { saveCategory } = useCategory();


  const doFetch = () => {
    const url = `http://localhost:3001/user?page=${numPage}&limit=${}`
  }

  const handleClick = (numPage) => {
    history.push()
  }
  
  return (
    <div>
     <p>{count}</p>
     <button onClick={() => handleClick(2)}>2</button>
    </div>
  );
}

export default Counter;
