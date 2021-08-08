import React, { Fragment } from 'react';
import styles from './UserPage.module.scss';
import Navigation, 
  { PROFILE, FRIENDS, SETTINGS, MAPS } 
from 'pages/user/Navigation/Navigation';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Home from 'pages/user/home/Home';
import Profile from 'pages/user/profile/Profile';
import Friends from 'pages/user/friends/Friends';
import Maps from 'pages/user/maps/Maps';

export default function UserPage(props) {
  const { path } = useRouteMatch();

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
