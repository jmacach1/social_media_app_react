import React, { Component, Fragment} from "react";
import { connect } from 'react-redux';
import styles from './Profile.module.scss';

const editable = styles.editable;
const read_only = styles.read_only;

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile : {
        email: props.email || "",
        first_name : props.first_name || "",
        last_name : props.last_name || "", 
        profile_img_src: props.profile_image_link || ""
      },
      editMode: false
    }
  }

  toggleEditMode = (e) => {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
  }

  editControls = () => {
    return this.state.editMode ? 
      (
        <Fragment>
          <button className={styles.cancel_edit} onClick={this.toggleEditMode}>Cancel Edit</button>
          <input type="submit" value="Save" onClick={this.toggleEditMode}/>
        </Fragment>
      ) :
      (
        <button onClick={this.toggleEditMode}>Edit</button>
      )
  }

  render() {
    const edit_class = this.state.editMode ? editable : read_only;

    return (
      <div className={styles.profile}>
        <div className={styles.profile_card}>
          <div className={styles.profile_pic_div}>
            <img className={styles.profile_pic}
              // src={`${process.env.PUBLIC_URL}/img/profile_pic_placeholder.png`}
              src={this.state.profile.profile_img_src} 
              alt="Profile Pic"/>
          </div>
          <form>
            <div className={edit_class}>
              <label htmlFor="email"><b>Email / Username</b></label>
              <input type="text" name="email" value={this.state.profile.email}/>
            </div>
            <div className={edit_class}>
              <label htmlFor="email"><b>First Name</b></label>
              <input type="text" name="email" value={this.state.profile.first_name}/>
            </div>
            <div className={edit_class}>
              <label htmlFor="email"><b>Last Name</b></label>
              <input type="text" name="email" value={this.state.profile.last_name}/>
            </div>
            <div>
              { this.editControls() }
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (state.login.iseeya_user && state.login.iseeya_user.profile) {
    return state.login.iseeya_user.profile;
  }
  return {
    email: "email@address.com",
    first_name :  "First",
    last_name : "Last", 
    profile_img_src: "https://robohash.org/default",
  }
};

export default connect(mapStateToProps)(Profile);