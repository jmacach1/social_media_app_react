import React, { Component } from 'react';
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import axios from 'axios';
import styles from './SignUp.module.scss';
import BackButton from 'buttons/BackButton';

const SIGNUP = {
  SIGNUP: "Sign Up",
  FIRST_NAME : "first_name",
  LAST_NAME : "last_name",
  USERNAME : "username",
  EMAIL : "email",
  PASSWORD1 : "password1",
  PASSWORD2: "password2"
}

const LOCALHOST = "http://127.0.0.1:8000/";
const REGISTRATION_ENDPOINT = "rest-auth/registration/";
const REGISTRATION_URL = LOCALHOST + REGISTRATION_ENDPOINT;
const API = "api/";
const ISEEYA_USER = "iseeya_user"
const CREATE_ISEEYA_USER_URL = LOCALHOST + API + ISEEYA_USER;

const REGISTRATION_SUCCESS = "User was created";
const REGISTRATION_FAILURE = "User not created";

const MessageBox = (props) => {
  const {success, msg } = props.registration_msg;
  if (msg === "") return (<div></div>);
  const msg_1 = success ? REGISTRATION_SUCCESS : REGISTRATION_FAILURE;
  const msg_style = success ? styles.success : styles.failure;
  return (
    <div className={`${styles.message_box} ${msg_style}`}>
      <h3>{msg_1}</h3>
      <p>{msg}</p>
    </div>
  )
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      registration_msg : {
        success: "",
        msg: ""
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitting : true });

    const first_name = event.target.elements[SIGNUP.FIRST_NAME].value;
    const last_name = event.target.elements[SIGNUP.LAST_NAME].value;
    const email = event.target.elements[SIGNUP.EMAIL].value;
    const username = email;
    const password1 = event.target.elements[SIGNUP.PASSWORD1].value;
    const password2 = event.target.elements[SIGNUP.PASSWORD2].value;
    const new_registration_user = { email, username, password1, password2 }
    console.log(new_registration_user);
    
    axios({
      method: 'post',
      url: REGISTRATION_URL,
      data: new_registration_user
    })
    .then((response) => {
      console.log(response.data);
      this.setState({ 
        registration_msg : {
          success: true,
          msg : `You may now log on as ${new_registration_user.email} with your given password.` 
        }
      })
      const key = response.data.key;
      this.createISeeYaUser({ first_name, last_name, key });
    })
    .catch((err) => {
      console.log(err.response.data);
      const data_errors = JSON.stringify(err.response.data);
      this.setState({
        registration_msg : {
          success: false,
          msg : `A problem occured. ${data_errors}` 
        }
      })
    })
    .then(() => {
      event.target.elements[SIGNUP.EMAIL].value = "";
      event.target.elements[SIGNUP.PASSWORD1].value = "";
      event.target.elements[SIGNUP.PASSWORD2].value = "";
      this.setState({ submitting : false })
    });
  }

  createISeeYaUser = (data) => {
    console.log(data);
    axios({
      method: 'post',
      url: CREATE_ISEEYA_USER_URL,
      data: data
    })
    .then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className={`${styles.signup} flex_center`}>
        <div className={styles.signup_box}>
          <div className="flex_space_between">
            <div>
              <h1 className="iSeeYa">iSeeYa</h1>
            </div>
            <div>
              <BackButton/>
            </div>
          </div>
          <MessageBox registration_msg={this.state.registration_msg}/>
          <form onSubmit={this.handleSubmit}>

            <label htmlFor={SIGNUP.FIRST_NAME}><b>First Name</b></label>
            <input type="text" placeholder="First Name" name={SIGNUP.FIRST_NAME} required/>

            <label htmlFor={SIGNUP.LAST_NAME}><b>Last Name</b></label>
            <input type="text" placeholder="Last Name" name={SIGNUP.LAST_NAME} required/>

            <label htmlFor={SIGNUP.EMAIL}><b>Email </b></label>
            <input type="text" placeholder="Enter Email (username)" name={SIGNUP.EMAIL} required/>

            <label htmlFor={SIGNUP.PASSWORD1}><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name={SIGNUP.PASSWORD1} required/>
  
            <label htmlFor={SIGNUP.PASSWORD2}><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name={SIGNUP.PASSWORD2} required/>
            
            <div className={styles.controls}>
              {
                this.state.submitting ?
                <Dots size={30} /> :
                <input type="submit" value={SIGNUP.SIGNUP}/>
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

