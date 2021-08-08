import React, { Component} from "react";
import styles from './Maps.module.scss';

class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.maps}>
        <div className={styles.title}>
          <h1>My Maps</h1>
        </div>
      </div>
    )
  }
}

export default Maps;