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

const markers = [
  {
    markerOffset: -30,
    name: "Havana",
    coordinates: [-82.3666, 23.1136] // 23.1136° N, 82.3666° W
  },
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  {
    markerOffset: 0,
    name: "Panama City",
    coordinates: [-79.5199, 8.9824]
  },
  { markerOffset: 0, name: "NYC", coordinates: [-74.006, 40.7128] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

const MapChart = () => {
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
      {markers.map(({ name, coordinates, markerOffset }) => (
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

const ExampleMap = () => {
  return (
    <div>
      <MapChart />
    </div>
  )
};

export default ExampleMap;