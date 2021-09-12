import React, { Component} from "react";
import { connect } from 'react-redux';
import styles from './Friends.module.scss';
import FriendCard from './friend_cards/FriendCard';

class Friends extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.friends}>
        <div className={styles.title}>
          <h2>My Friends</h2>
        </div>
        <div className={styles.main}>
          <div className={styles.cards}>
            {this.props.friends.map(friend => <FriendCard friend={friend}/>)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const friendState = { 
    friends : [] 
  }
  if (state.login.iseeya_user && state.login.iseeya_user.profile) {
    friendState.friends = state.login.iseeya_user.profile.friends 
  }
  return friendState;
};

export default connect(mapStateToProps)(Friends);