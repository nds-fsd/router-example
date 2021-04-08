import styles from './counterPage.module.css';
import React from 'react';
import { CounterContextProvider } from '../../context/counterContext';
import Counter from '../../components/counter/counter.view';
import CounterButton from '../../components/counterButton/counterButton.view';
import OtherButton from '../../components/otherButton/otherButton.view';

const CounterPage = () => {
  
  return (
    <CounterContextProvider>
      <div className={styles.container}>
        <h1>Counter</h1>
        <Counter />
        <CounterButton />
        <OtherButton />
      </div>
    </CounterContextProvider>
  );
}

export default CounterPage;
