import React from 'react';
import styles from './Home.module.scss';

export default function Home(props) {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>User Home Page</h1>
      </div>
      <div className={styles.windows}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
