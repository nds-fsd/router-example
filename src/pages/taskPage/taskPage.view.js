import styles from './taskPage.module.css';
import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import TaskDetailPage from '../taskDetailPage/taskDetailPage.view';

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
]

const TaskPage = () => {
  let match = useRouteMatch();
  console.log(match);
  debugger;
  
  
  return (
    <div className={styles.container}>
     <h1>TASKS</h1>

     
    {tasks.map(task => (
      <Link to={`${match.url}/inside/${task.id}`}>
        <div className={styles.taskCard}>
          <p>{task.name}</p>
        </div>
      </Link>
    ))}
    <Link to={`${match.url}`}>
        <div className={styles.taskCard}>
          <p>All</p>
        </div>
      </Link>
    <Switch>
      <Route path={`${match.path}/inside/:taskId`}>
        <TaskDetailPage />
      </Route>
    </Switch>

    </div>
  );
}

export default TaskPage;