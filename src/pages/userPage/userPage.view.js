import styles from './userPage.module.css';
import React, { useState } from 'react';

const UserPage = () => {
  const [userCreated, setUserCreated] = useState();
  


  const createUser = () => {
    const url = 'http://localhost:3001/user';
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
      }),
      mode: 'cors',
      body: JSON.stringify(body),
    };

    fetch(url, options)
    .then(response => {
      console.log('Primer then');
      console.log(response);
      if (response.status === 200) {
        return response.json();
      }
      return Promise.reject();
    })
    .then(response => {
      console.log('Segundo then');
      console.log(response);
      setUserCreated(response);
      debugger;
    })
    .catch(err => {
      console.error(err);
    });
  }
  

  
  return (
    <div className={styles.container}>
      <h1>User</h1>
     <button onClick={createUser} >Create user</button>

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
