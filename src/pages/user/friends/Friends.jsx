import React, { Component} from "react";
import styles from './Friends.module.scss';
import FriendCard from './friend_cards/FriendCard';

class Friends extends Component {
  constructor(props) {
    super(props)
    this.state = {

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
            <FriendCard/>
          </div>
        </div>
      </div>
    )
  }
}

export default Friends;