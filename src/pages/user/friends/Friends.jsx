import React, { Component} from "react";
import { connect } from 'react-redux';
import styles from './Friends.module.scss';
import FriendCard from './friend_cards/FriendCard';

class Friends extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends : props.friends
    }
  }

  render() {
    return (
      <div className={styles.friends}>
        <div className={styles.title}>
          <h1>My Friends</h1>
        </div>
        <div className={styles.main}>
          <div className={styles.cards}>
            {this.state.friends.map(friend => <FriendCard friend={friend}/>)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (state.login.iseeya_user) {
    return state.login.iseeya_user.iseeya_maps.filter(my_map => my_map.name === "Friends");
  }
  return [];
};

export default connect(mapStateToProps)(Friends);