import React, { Component} from "react";
import styles from './GMap.module.scss';

class GMap extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.gmap}>
        <div className={styles.title}>
          
        </div>
      </div>
    )
  }
}

export default GMap;