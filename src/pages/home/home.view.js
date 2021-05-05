import styles from './home.module.css';
import React, { useEffect } from 'react';
import { getSessionUser, getUserToken } from '../../utils/auth';
import RolePermision from '../../components/rolePermisions/rolePermisions.view';

const Home = () => {
  const {saveUser, saveToken} = useContext(AuthContext);

  useEffect(() => {
    const token = getUserToken();
    const user = getSessionUser();
  
    if (token) {
      saveToken(token);
    }
    if (user) {
      saveUser(user);
    }
   
  }, []);
  
  
  return (
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
              <Link to={TASK_PAGE_LIST}>Task</Link>
            </li>
            <li>
              <Link to={COUNTER}>setCounter</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path={USER_PAGE}>
            <RolePermision>
              <UserPage />
            </RolePermision>
          </Route>
          <Route path={TASK_PAGE_LIST}>
            <TaskPage />
          </Route>
          <Route path={`${TASK_PAGE}/:taskId`} exact>
            <TaskDetailPage />
          </Route>
          <Route path={COUNTER} exact>
            <CounterPage />
          </Route>
          <Route path={HOME} exact>
            <LandingPage />
          </Route>
        </Switch>
      </div>
  );
}

export default Home;
