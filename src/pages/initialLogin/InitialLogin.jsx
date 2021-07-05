import React from 'react';
import styles from './InitialLogin.module.scss';

export default function InitialLogin(props) {
  return (
    <div class={styles.Login}>
      <div class={styles.title}>
        <h1>Social Media App</h1>
        <h2>Create Fun Map with Friends</h2>
      </div>
      <div class={styles.controls}>
        <button>Log in</button>
        <button>Log in with a Google account</button>
        <button>Log in with a Facebook account</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
