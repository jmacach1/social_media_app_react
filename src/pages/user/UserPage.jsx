import React, { Fragment } from 'react';
import styles from './UserPage.module.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from 'pages/user/Navigation/Navigation';
import Home from 'pages/user/home/Home';
import Profile from 'pages/user/profile/profile'

export default function UserPage(props) {
  return (
    <div className={styles.user_page}>
      <Navigation/>
      <Router>
        <Switch>
          <Route path="/iseeya/" exact component={Home} />
          <Route path="/iseeya/profile" exact component={Profile} />
          {/* <Route path="/iseeya/profile" exact component={Home} />
          <Route path="/iseeya/friends" exact component={Home} />
          <Route path="/iseeya/settings" exact component={Home} />
          <Route path="/iseeya/maps" exact component={Home} /> */}
        </Switch>
      </Router>
    </div>
  );
}

const MyPage = ({match:{params:{name}}}) => (
  <Fragment>
    <h1>About {name}</h1>
  </Fragment>
);
