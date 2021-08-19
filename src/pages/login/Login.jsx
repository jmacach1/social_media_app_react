import React from 'react';
import styles from './Login.module.scss';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from 'redux/login/loginSlice';

export default function Login(props) {
  const history = useHistory();
  const goToLanding = () => history.push("/");

  const loginState = useSelector((state) => state.login);
  if (loginState.username !== "") {
    console.log(`logging in ${loginState.username} .......`);
    // history.push("/logged_in");
  }

  const dispatch = useDispatch();
  const onSubmitLogin = (e) => {
    e.preventDefault();
    const login_username = e.target.elements.username.value;
    const login_password = e.target.elements.password.value;
    dispatch(loginUser({ 
      username: login_username, 
      password: login_password
    }))
  }

  return (
    <div className={`${styles.login} flex_center`}>
      <div className={styles.login_box}>
        <div className={`flex_space_between`}>
          <div>
            <h1 className="iSeeYa">iSeeYa</h1>
          </div>
          <div>
            <button className="back_button" onClick={goToLanding}>
              <i className="fas fa-arrow-circle-left"></i>
            </button>
          </div>
        </div>
        <form onSubmit={onSubmitLogin}>
          <div>
            <input type="text" name="username" placeholder="Username"/>
          </div>
          <div>
            <input type="text" name="password" placeholder="Password"/>
          </div>
          <div>
            <input type="submit" value="Login"/>
          </div>
        </form>
      </div>
    </div>
  );
}
