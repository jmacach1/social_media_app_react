import React, { Fragment } from 'react';
import styles from './UserPage.module.scss';
import Navigation, 
  { PROFILE, FRIENDS, SETTINGS, MAPS } 
from 'pages/user/Navigation/Navigation';
import { useHistory, useRouteMatch, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from 'pages/user/home/Home';
import Profile from 'pages/user/profile/Profile';
import Friends from 'pages/user/friends/Friends';
import Maps from 'pages/user/maps/Maps';

export default function UserPage(props) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const loginState = useSelector((state) => state.login)
  console.log("loginState", loginState);
  if (!loginState.iseeya_user) {
    history.push("/");
    return (
      <div>
        <h1>No User Information</h1>
      </div>
    )
  }

  return (
    <div className={styles.user_page}>
      <Navigation/>
      <div className={styles.user_page_main}> 
        <Switch>
          <Route path={`${path}`} exact component={Home} />
          <Route path={`${path}/${PROFILE}`} exact component={Profile}/ >
          <Route path={`${path}/${FRIENDS}`} exact component={Friends}/ >
          <Route path={`${path}/${SETTINGS}`}>
            <h1>Settings</h1>
          </Route>
          <Route path={`${path}/${MAPS}`} exact component={Maps}/ >
        </Switch>
      </div>
    </div>
  );
}

const MyPage = ({match:{params:{name}}}) => (
  <Fragment>
    <h1>About {name}</h1>
  </Fragment>
);
