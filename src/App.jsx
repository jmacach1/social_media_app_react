import React, { Fragment } from "react";
import styles from './App.module.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

export default function App() {
  const name = 'Jerald Macachor';
  return (
    <Router>
      <div class={styles.App}>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Landing Page</Link></li>
              <li><Link to={`/signup/${name}`}>Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to={`/about/${name}`}>About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signup"  component={SignUp} />
            <Route path="/login"  component={Login} />
            <Route path="/about/:name"  component={About} />
          </Switch>
        </main>
        <section>
        </section>
      </div>
    </Router>
  );
}

const About = ({match:{params:{name}}}) => (
  <Fragment>
    <h1>About {name}</h1>
  </Fragment>
);
