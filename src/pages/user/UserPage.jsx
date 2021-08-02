import React from 'react';
import styles from './UserPage.module.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from 'pages/user/Navigation/Navigation';
import Home from 'pages/user/home/Home';

export default function UserPage(props) {
  return (
    <div className={styles.user_page}>
      <Navigation/>
      <Router>
        <Switch>
          <Route path="/iseeya/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
