import React, { Component } from 'react';
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import axios from 'axios';
import { connect } from "react-redux";
import styles from './Login.module.scss';
import BackButton from 'buttons/BackButton';
import { loginUser } from 'redux/login/loginSlice';

const LOCALHOST = "http://127.0.0.1:8000/";
const LOGIN_ENDPOINT = "rest-auth/login/";
const LOGIN_URL = LOCALHOST + LOGIN_ENDPOINT;

const API = "api/";
const GET_ISEEYA_USER = "get_iseeya_user"

const GET_ISEEYA_USER_URL = LOCALHOST + API  + GET_ISEEYA_USER;

const LOGIN_SUCCESS = "Login Success";
const LOGIN_FAILURE = "Login Failure";

const MessageBox = (props) => {
  const { success, msg } = props.login_msg;
  if (msg === "") return (<div></div>);

  const msg_1 = success ? LOGIN_SUCCESS : LOGIN_FAILURE;
  const msg_style = success ? styles.success : styles.failure;

  return (
    <div className={`${styles.message_box} ${msg_style}`}>
      <h3>{msg_1}</h3>
      <p>{msg}</p>
    </div>
  )
}

const LOGIN = {
  login: "Login",
  USERNAME : "username",
  PASSWORD : "password" 
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      login_msg : { 
        success : false,
        msg: ""
      }
    }
  }

  onSubmitLogin = (event) => {
    event.preventDefault();
    this.setState({ submitting : true });

    const username = event.target.elements[LOGIN.USERNAME].value;
    const password = event.target.elements[LOGIN.PASSWORD].value;

    axios({
      method: 'post',
      url: LOGIN_URL,
      data: { username, password }
    })
    .then((response) => {
      console.log(response.data);
      this.setState({ 
        login_msg : {
          success: true,
          msg : `Loggin as ${username}...` 
        }
      })
      const key = response.data["key"]
      if (key) {
        this.getUserByKey(key);
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      const data_errors = JSON.stringify(err.response.data);
      this.setState({
        login_msg : {
          success: false,
          msg : `A problem occured. ${data_errors}` 
        }
      })
    })
    .then(() => {
      event.target.elements[LOGIN.USERNAME].value = "";
      event.target.elements[LOGIN.PASSWORD].value = "";
      this.setState({ submitting : false })
    });
  }

  getUserByKey = (key) => {
    axios({
      method: 'post',
      url: GET_ISEEYA_USER_URL,
      data: { key : key }
    })
    .then((response) => {
      console.log("response data : " ,response.data);
      this.updateReduxLoginUser(response.data);

    })
    .catch((err) => {
      console.log(err.response.data);
    })
  }

  updateReduxLoginUser(user) {
    console.log(this.props);
    this.props.loginUser(user);
    if (this.props.iseeya_user) {
      this.props.history.push("/logged_in");
    }
  }

  render() {
    return (
      <div className={`${styles.login} flex_center`}>
        <div className={styles.login_box}>
          <div className={`flex_space_between`}>
            <div>
              <h1 className="iSeeYa">iSeeYa</h1>
            </div>
            <div>
              <BackButton/>
            </div>
          </div>
          <MessageBox login_msg={this.state.login_msg}/>
          <form onSubmit={this.onSubmitLogin}>
            <div>
              <input type="email" name="username" placeholder="Username"/>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password"/>
            </div>
            <div className={styles.controls}>
              {
                this.state.submitting ?
                <Dots size={30} /> :
                <input type="submit" value={LOGIN.LOGIN}/>
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    iseeya_user: state.login.iseeya_user
})

export default connect(mapStateToProps, { loginUser })(Login)