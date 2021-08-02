import React from 'react';
import styles from './SignUp.module.scss';
import { useHistory } from "react-router-dom";

export default function SignUp(props) {
  const history = useHistory();
  const goToLanding= () => history.push("/");

  return (
    <div className={`${styles.signup} flex_center`}>
      <div className={styles.signup_box}>
        <div className="flex_space_between">
          <div>
            <h1 className="iSeeYa">iSeeYa</h1>
          </div>
          <div>
            <button className="back_button" onClick={goToLanding}>
              <i className="fas fa-arrow-circle-left"></i>
            </button>
          </div>
        </div>
        <form>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

          <div>
            <input type="submit" className="cancel" value="Cancel"/>
            <input type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
    </div>
  );
}
