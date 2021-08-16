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
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          {/* <circle className="image_marker_circle" cx="0" cy="0" r="12" fill="#000" /> */}
          <image
            className="image_marker"
            y="-15"
            x="-15"
            href={"https://www.w3schools.com/howto/img_avatar.png"}
            preserveAspectRatio="none"
            width="25" height="25"
          />
        </Marker>
      ))}
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