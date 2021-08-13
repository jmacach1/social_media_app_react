import React, { Fragment } from "react";
import styles from './App.module.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './pages/Landing/Landing';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import UserPage from './pages/user/UserPage';


export default function App() {
  const name = 'Jerald Macachor';
  return (
    <Provider store={store}>    
      <Router>
        <div className={styles.app}>
          <header>
            <nav className={styles.nav}>
              <ul>
                <li><Link to="/">Landing Page</Link></li>
                <li><Link to={`/signup/`}>Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to={`/about/${name}`}>About</Link></li>
                <li><Link to={`/logged_in`}>UserPage</Link></li>
              </ul>
            </nav>
          </header>
          <main className={styles.app_main}>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/about/:name" component={About} />
              <Route path="/logged_in" component={UserPage}/>
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

const About = ({match:{params:{name}}}) => (
  <Fragment>
    <h1>About {name}</h1>
  </Fragment>
);
