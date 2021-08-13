import React from "react";
import styles from './Navigation.module.scss';
import { useRouteMatch, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const SEP = "/";
export const PROFILE = 'Profile';
export const FRIENDS = 'Friends';
export const SETTINGS = 'Settings';
export const MAPS = 'Maps';

export default function Navigation() {
  let { url } = useRouteMatch();
  const username = useSelector((state) => state.login.username) || "USER";

  const URL_HOME = `${url}`
  const URL_PROFILE = `${url}${SEP}${PROFILE}`;
  const URL_FRIENDS = `${url}${SEP}${FRIENDS}`;
  const URL_SETTINGS = `${url}${SEP}${SETTINGS}`;
  const URL_MAPS = `${url}${SEP}${MAPS}`;

  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          <li className={styles.greeting}>
            <Link to={URL_HOME}>
              Hello, {username}
            </Link>
          </li>

          <li>
            <Link to={URL_PROFILE}>
              {PROFILE}
            </Link>
          </li>

          <li>
            <Link to={URL_FRIENDS}>
              {FRIENDS}
            </Link>
          </li>

          <li>
            <Link to={URL_SETTINGS}>
              {SETTINGS}
            </Link>
          </li>

          <li>
            <Link to={URL_MAPS}>
              {MAPS}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
