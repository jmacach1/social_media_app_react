import React from 'react';
import styles from './Login.module.scss';
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();
  const goToLanding= () => history.push("/");

  return (
    <div>
      <div className="title">
        <div>
          <h1 className="iSeeYa">iSeeYa</h1>
        </div>
        <div>
          <button className="back_button" onClick={goToLanding}>
            <i class="fas fa-arrow-circle-left"></i>
          </button>
        </div>
      </div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" required/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required/>
        </div>
        <div>
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  );
}
