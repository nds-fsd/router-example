import styles from './taskPage.module.css';
import React, { useContext, useState } from 'react';
import { Link, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import TaskDetailPage from '../taskDetailPage/taskDetailPage.view';
import { CounterContext } from '../../context/counterContext';

const tasks = [
  {
    id: '1',
    name: 'Task 1',
  },
  {
    id: '2',
    name: 'Task 2',
  },
  {
    id: '3',
    name: 'Task 3',
  },
  {
    id: '4',
    name: 'Task 4',
  },
];

const TaskPage = () => {
  let match = useRouteMatch();
  let location = useLocation();

  
  
  return (
    <div className={styles.container}>

     <h1>TASKS</h1>
     
    {tasks.map(task => {
      return (
        <Link to={`${match.url}/${task.id}`}>
          <div className={`${styles.taskCard} ${location.pathname.endsWith(task.id) && styles.taskSelected} `}>
            <p>{task.name}</p>
          </div>
        </Link>
      );
    })}
    <Link to={`${match.url}`}>
        <div className={styles.taskCard}>
          <p>All</p>
        </div>
      </Link>
    <Switch>
      <Route path={`${match.url}/:taskId`}>
        <TaskDetailPage />
      </Route>
    </Switch>

    </div>
  );
}

export default TaskPage;