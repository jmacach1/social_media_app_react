import React from 'react';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';

export default function Home(props) {

  const loginState = useSelector((state) => state.login);
  const { username, first_name, last_name } = loginState;

  return (
    <div className={styles.home}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h3>profile</h3>
          <p>{username}</p>
          <p>{first_name}</p>
          <p>{last_name}</p>
        </div>
        <div className={styles.section}>
          <h3>friends</h3>
        </div>
        <div className={styles.section}>
          <h3>Maps</h3>
        </div>
      </div>
    </div>
  );
}
