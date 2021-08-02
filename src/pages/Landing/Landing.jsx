import React from 'react';
import styles from './Landing.module.scss';
import { useHistory } from "react-router-dom";

export default function Landing(props) {
  const history = useHistory();
  const goToLoginPage = () => history.push("/login");
  const goToSignUpPage = () => history.push("/signup");

  return (
    <div className={`${styles.landing} flex_center`}>
      <div className={styles.landing_box}>
        <div>
          <h1>iSeeYa</h1>
          <h2>Create Fun Map with Friends</h2>
        </div>
        <div>
          <button onClick={goToLoginPage}>Log in</button>
          <button onClick={goToSignUpPage}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}