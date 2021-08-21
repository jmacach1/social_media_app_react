import React, { Component} from "react";
import { connect } from 'react-redux';
import styles from './FriendSearch.module.scss';

class FriendSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.friends}>
        <div className={styles.title}>
          <h1>Friend Search</h1>
        </div>
        <div className={styles.main}>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.login;
};

export default connect(mapStateToProps)(FriendSearch);