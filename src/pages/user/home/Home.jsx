import React from 'react';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';

export default function Home(props) {

  const loginState = useSelector((state) => state.login);
  const { username, first_name, last_name } = loginState;

  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>User Home Page</h1>
      </div>
      <div className={styles.windows}>
        <div>
          <h2>Profile</h2>
          <h3>{username}</h3>
          <h3>{first_name}</h3>
          <h3>{last_name}</h3>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
