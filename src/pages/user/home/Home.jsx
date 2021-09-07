import React from 'react';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';

export default function Home(props) {

  let email, first_name, last_name;
  const iseeya_user = useSelector((state) => state.login.iseeya_user);
  if (iseeya_user && iseeya_user.profile) {
    ({ email, first_name, last_name } = iseeya_user.profile)
  }

  return (
    <div className={styles.home}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <h3>Profile</h3>
          <p>{email}</p>
          <p>{first_name}</p>
          <p>{last_name}</p>
        </div>
        <div className={styles.section}>
          <h3>Friends</h3>
        </div>
        <div className={styles.section}>
          <h3>Maps</h3>
        </div>
      </div>
    </div>
  );
}
