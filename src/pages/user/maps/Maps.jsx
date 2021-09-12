import React, { Component} from "react";
import { connect } from 'react-redux';
import styles from './Maps.module.scss';
import ISeeYaMaps from './iSeeYaMaps/ISeeYaMaps';

class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMapIndex: 0
    }
  }

  changeSelectedMap = (e) => {
    const selectedMapIndex = e.target.value;
    this.setState({ selectedMapIndex });
  }

  render() {
    if (this.props.iseeya_maps) {
      return (
        <div className={styles.maps}>
          <div className={styles.map_box}>
            <h2>My Maps</h2>
            <div className={styles.map_container}>
              <select 
                className={styles.map_select}
                id="my_maps" 
                onChange={this.changeSelectedMap} 
                value={this.state.selectedMapIndex}
                >
                {this.props.iseeya_maps.map((myMap, index) => 
                  <option value={index}>{myMap.name}</option>
                  )}
              </select>
              <ISeeYaMaps myMap={this.props.iseeya_maps[this.state.selectedMapIndex]}/>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <h1>No User No Maps</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const mapState = {
    iseeya_maps : []
  }
  if (state.login.iseeya_user) {
    mapState.iseeya_maps = state.login.iseeya_user.iseeya_maps 
  }
  return mapState;
};

export default connect(mapStateToProps)(Maps);