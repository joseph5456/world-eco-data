import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { useParams } from "react-router-dom";
import "./../style/Button.css";

const geoUrl = "/states.json";

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv("/obesity.csv").then(states => {
      setData(states);
    });
  }, []);

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.ESTIMATE))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const cur = data.find(s => s.STUB_NAME === geo.STUB_NAME);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.ESTIMATE) : "#EEE"}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;