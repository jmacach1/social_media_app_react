import React from 'react';
import styles from './Landing.module.scss';
import { useHistory } from "react-router-dom";

export default function Landing(props) {
  const history = useHistory();

  const goToLoginPage = () => history.push("/login");
  const goToSignUpPage = () => history.push("/signup");

  return (
    <div class={styles.Login}>
      <div class={styles.title}>
        <h1>iSeeYa</h1>
        <h2>Create Fun Map with Friends</h2>
      </div>
      <div class={styles.controls}>
        <button onClick={goToLoginPage}>Log in</button>
        <button onClick={goToSignUpPage}>Sign Up</button>
      </div>
    </div>
  );
}