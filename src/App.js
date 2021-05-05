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
import { HOME, TASK_PAGE, TASK_PAGE_LIST, USER_PAGE, COUNTER } from './routers/routers';
import TaskDetailPage from './pages/taskDetailPage/taskDetailPage.view';
import CounterPage from './pages/counterPage/counterPage.view';
import { AuthContextProvider } from './context/authContext';

function App() {

  
  
  return (
    <Router>
      <AuthContextProvider>
        <Home />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
