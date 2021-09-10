import React from "react";
import styles from './Navigation.module.scss';
import { useRouteMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/login/loginSlice';

export const SEP = "/";
export const PROFILE = 'Profile';
export const FRIENDS = 'Friends';
export const SETTINGS = 'Settings';
export const MAPS = 'Maps';
export const LOGOUT = "Log out";

export default function Navigation() {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();

  const username = useSelector((state) => state.login.iseeya_user.profile.first_name) || "USER";
  const URL_HOME = `${url}`
  const URL_PROFILE = `${url}${SEP}${PROFILE}`;
  const URL_FRIENDS = `${url}${SEP}${FRIENDS}`;
  const URL_MAPS = `${url}${SEP}${MAPS}`;

  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <ul className={styles.left_nav}>
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
            <Link to={URL_MAPS}>
              {MAPS}
            </Link>
          </li>
        </ul>
        <ul className={styles.right_nav}>
          <li className={styles.logout}>
            <button onClick={() => dispatch(logoutUser())}>
              {LOGOUT}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
