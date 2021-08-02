import React from 'react';
import styles from './SignUp.module.scss';
import { useHistory } from "react-router-dom";

export default function SignUp(props) {
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
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

        <div class="clearfix">
          <input type="submit" className="cancel" value="Cancel"/>
          <input type="submit" value="Sign Up"/>
        </div>
      </form>
    </div>
  );
}
