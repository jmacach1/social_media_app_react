import React from 'react';
import styles from './Login.module.scss';

export default function Login(props) {
  return (
    <div className={styles.Login}>
      <input type="text" name="username" placeholder="Username" required/>
      <input type="password" name="password" placeholder="Password" required/>
      <input type="submit" value="Login"/>

      <div>
       <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}
