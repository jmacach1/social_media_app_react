import React from "react";
import styles from './Navigation.module.scss';
import { Link } from "react-router-dom";

const HOME = "home";
const PROFILE = "profile";
const FRIENDS = "friends";
const SETTINGS = "settings";
const MAPS = "maps";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          <li className={styles.greeting}><Link to={HOME}>Hello, User_1</Link></li>
          <li><Link to={PROFILE}>{PROFILE}</Link></li>
          <li><Link to={FRIENDS}>{FRIENDS}</Link></li>
          <li><Link to={SETTINGS}>{SETTINGS}</Link></li>
          <li><Link to={MAPS}>{MAPS}</Link></li>
        </ul>
      </nav>
    </div>
  )
}
