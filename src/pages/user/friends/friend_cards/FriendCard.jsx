import React, { Component} from "react";
import styles from './FriendCard.module.scss';

class FriendCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.friend_card}>
        <div className={`${styles.card_section} ${styles.profile_section}`}>
          <img className={styles.profile_pic}
            src={this.props.friend.profile_image_link}
            alt="Profile Pic"
          />
        </div>
        <div className={styles.card_section}>
          <p className={styles.card_name}>{`${this.props.friend.first_name} ${this.props.friend.last_name}`}</p>
        </div>
      </div>
    )
  }
}

export default FriendCard;