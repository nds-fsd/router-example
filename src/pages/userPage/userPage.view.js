import styles from './userPage.module.css';
import React, { useState, useContext } from 'react';
import { removeSession, setUserSession } from '../../utils/auth';
import { AuthContext } from '../../context/authContext';

const UserPage = () => {
  const [userCreated, setUserCreated] = useState();
  const {saveUser, saveToken, token, isLoged} = useContext(AuthContext);
  

  const createUser = () => {
    const url = 'http://localhost:3001/register';
    const body = {
      email: 'holaaaaa@nuclio.com',
      password: '123456789',
      name: 'Holaaaaa'
    };

    const options = {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
		    "authorization": `Bearer ${token}`
      }),
      mode: 'cors',
      body: JSON.stringify(body),
    };

    fetch(url, options)
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 409) {
        removeSession();
      }
      return Promise.reject();
    })
    .then(response => {
      setUserSession(response);
      saveToken(response.token);
      saveUser(response.user);
    })
    .catch(err => {

      console.error(err);
    });
  }
  

  
  return (
    <div className={styles.container}>
      <h1>User</h1>
     {!isLoged && <button onClick={createUser} >Login</button>}

     {
       userCreated && (
         <div>
           <p>Name: {userCreated.name}</p>
           <p>Email: {userCreated.email}</p>
           <p>Password hassed: {userCreated.password}</p>
           <p>Id: {userCreated._id}</p>
        </div>
       )
     }
    </div>
  );
}

export default UserPage;
