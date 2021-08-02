import React from "react";
import styles from './Navigation.module.scss';
import { Link } from "react-router-dom";

export default function Navigation() {
  const ISEEYA = "iseeya";
  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          <li className={styles.greeting}><span>Hello, User_1</span></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home/">Profile</Link></li>
          <li><Link to="/home">Friends</Link></li>
          <li><Link to="/home">Settings</Link></li>
          <li><Link to="/home">Maps</Link></li>
        </ul>
      </nav>
    </div>
  )
}
