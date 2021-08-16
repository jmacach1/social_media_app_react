import React, { Component} from "react";
import styles from './FriendCard.module.scss';

class FriendCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: props.friend.first_name
    }
  }

  render() {
    return (
      <div className={styles.friend_card}>
        <div className={`${styles.card_section} ${styles.profile_section}`}>
          <img className={styles.profile_pic}
            src={`${process.env.PUBLIC_URL}/img/profile_pic_placeholder.png`} 
            alt="Profile Pic"
          />
        </div>
        <div className={styles.card_section}>
          <p className={styles.card_name}>{this.state.first_name}</p>
          <p className={styles.card_city}>Irvine, CA</p>
        </div>
      </div>
    )
  }
}

export default FriendCard;