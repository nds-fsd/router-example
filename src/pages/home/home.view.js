import styles from './home.module.css';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UserPage from '../userPage/userPage.view';

const Home = () => {
  
 
  
  return (
    <div className={styles.container}>
     <h1>Home</h1>
    </div>
  );
}

export default Home;
