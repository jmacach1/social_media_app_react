import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import styles from './ISeeYaMaps.module.scss';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MARKER_OFF_SET = -20; 
const PROFILE_MARKER_RADIUS = 18;
const PROFILE_PIC_DIAMTER = PROFILE_MARKER_RADIUS * 2;

const ISeeYaMarker = (props) => {

  const { location, profile } = props.data;
  const { city, country, lon, lat } = location;
  const coordinates = [lon, lat];
  
  if (profile) {
    const { pk, first_name, last_name, profile_image_link } = profile;
    return (
      <Marker key={pk} coordinates={coordinates}>
        <clipPath id="clipCircle">
          <circle r={PROFILE_MARKER_RADIUS} cx="0" cy="0"/>
        </clipPath>
        <image
          className={styles.image_marker}
          y={-PROFILE_MARKER_RADIUS}
          x={-PROFILE_MARKER_RADIUS}
          href={profile_image_link}
          preserveAspectRatio="none"
          width={PROFILE_PIC_DIAMTER} 
          height={PROFILE_PIC_DIAMTER}
          clip-path="url(#clipCircle)"
        />
        <text
          textAnchor="middle"
          y={MARKER_OFF_SET}
        >
          {`${first_name} ${last_name[0]}.`}
        </text>
      </Marker>
    );
  }

  const cityCountryKey = `${city}${country}`;
  return (
    <Marker key={cityCountryKey} coordinates={coordinates}>
      <circle r={6} fill="#F00" stroke="#fff" strokeWidth={2} />
      <text
        textAnchor="middle"
        y={MARKER_OFF_SET}
        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
      >
        {`${city}, ${country}`}
      </text>
    </Marker>
  )
}

const MapChart = ({markers}) => {
  return (
    <ComposableMap>
      <ZoomableGroup zoom={1.1}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#ffd84a"
                stroke="#ffe"
              />
            ))
        }
      </Geographies>
        {markers.map(marker => <ISeeYaMarker data={marker} />)}
      </ZoomableGroup>
    </ComposableMap>
  );
};

const ISeeYaMaps = ({ myMap }) => {
  return (
    <div>
      <div>
        <h1>{myMap.name}</h1>
      </div>
      <div className={styles.my_mapchart}>
        <MapChart markers={myMap.markers}/>
      </div>
    </div>
  )
};

export default ISeeYaMaps;