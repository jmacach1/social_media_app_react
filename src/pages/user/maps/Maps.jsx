import React, { Component} from "react";
import { connect } from 'react-redux';
import styles from './Maps.module.scss';
import ISeeYaMaps from './iSeeYaMaps/ISeeYaMaps';

class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myMaps: props.myMaps,
      current_map_index: 0
    }
  }

  changeSelectedMap = (e) => {
    this.setState({
      current_map_index: e.target.value
    });
  }

  render() {
    return (
      <div className={styles.maps}>
        <div className={styles.title}>
          <h1>My Maps</h1>
            <select id="my_maps" onChange={this.changeSelectedMap} value={this.state.current_map_index}>
              {this.state.myMaps.map((myMap, index) => 
                <option value={index}>{myMap.my_map_name}</option>
              )}
            </select>
          <ISeeYaMaps my_maps={this.state.myMaps[this.state.current_map_index]}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.login;
};

export default connect(mapStateToProps)(Maps);