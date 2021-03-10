import './App.css';
import React, { useState } from 'react';
import UserPage from './pages/userPage/userPage.view';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TaskPage from './pages/taskPage/taskPage.view';
import Home from './pages/home/home.view';
import { HOME, TASK_PAGE, USER_PAGE } from './routers/routers';
import TaskDetailPage from './pages/taskDetailPage/taskDetailPage.view';

function App() {
  
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to={HOME}>Home</Link>
          </li>
          <li>
            <Link to={USER_PAGE}>User</Link>
          </li>
          <li>
            <Link to={TASK_PAGE}>Task</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={USER_PAGE}>
          <UserPage />
        </Route>
        <Route path={`${TASK_PAGE}/:taskId`} exact>
          <TaskDetailPage />
        </Route>
        <Route path={TASK_PAGE}>
          <TaskPage />
        </Route>
        <Route path={HOME}>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
