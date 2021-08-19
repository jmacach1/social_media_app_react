import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const markerOffset = -20; 
const href_example = "https://www.w3schools.com/howto/img_avatar.png";

const ISeeYaMarker = (props) => {
  const {first_name, profile_image_link, coordinates } = props.data;
  if (profile_image_link) {
    const profile_pic_radius = 18;
    return (
      <Marker key={first_name} coordinates={coordinates}>
        <clipPath id="clipCircle">
          <circle r={profile_pic_radius} cx="0" cy="0"/>
        </clipPath>
        <image
          className="image_marker"
          y={-profile_pic_radius}
          x={-profile_pic_radius}
          href={profile_image_link}
          preserveAspectRatio="none"
          width={profile_pic_radius * 2} height={profile_pic_radius * 2}
          clip-path="url(#clipCircle)"
        />
        <text
          textAnchor="middle"
          y={markerOffset}
        >
          {first_name}
        </text>
      </Marker>
    )
  }

  const {city, country} = props.data; 
  const cityCountryKey = `${city}${country}`;
  return (
    <Marker key={cityCountryKey} coordinates={coordinates}>
      <circle r={6} fill="#F00" stroke="#fff" strokeWidth={2} />
      <text
        textAnchor="middle"
        y={markerOffset}
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
      <ZoomableGroup zoom={1}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
        {markers.map(markerData => <ISeeYaMarker data={markerData} />)}
      </ZoomableGroup>
    </ComposableMap>
  );
};

const ISeeYaMaps = (props) => {
  return (
    <div>
      <h1>{props.my_maps.my_map_name}</h1>
      <MapChart markers={props.my_maps.markers}/>
    </div>
  )
};

export default ISeeYaMaps;