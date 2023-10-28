import React, {useState, useEffect} from "react";
import axios from 'axios';
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
import { H, Section } from "react-headings";
import "./../style/Heading.css";

const geoUrl = "/world.json";


const Map = ({ setTooltipContent, position, setPosition, data, desc, year }) => {
    
    let domain = [0,100];

    if (desc[0] === "P") {
        domain = [0,10]
    }

    const colorScale = scaleLinear()
      .domain(domain)
      .range(["#ffedea", "#ff5233"]);
    
  
    function handleZoomIn() {
    if (position.zoom >= 4) return;
    const newZoom = position.zoom * 2;
    setPosition((pos) => ({
      ...pos,
      zoom: newZoom,
      coordinates: pos.coordinates.map((coord) => coord * 2),
    }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    const newZoom = position.zoom / 2;
    setPosition((pos) => ({
      ...pos,
      zoom: newZoom,
      coordinates: pos.coordinates.map((coord) => coord / 2),
    }));
  }

  return (
    <Section component={<H className="centered-heading">{desc + " (" +year+ ")"}</H>}>
      <div>
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
          }}
        >
          <ZoomableGroup zoom={position.zoom} center={position.coordinates}>
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  let d = null;
                  for (let i = 0;i< data.length;i++) {
                    if (data[i].country === geo.properties.name) {
                        d = data[i]
                    }
                  }
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={d ? colorScale(d.value) : "#F5F4F6"}
                      data-tip={`${geo.properties.name} (${geo.id})`}
                      data-for="map-tooltip"
                      onMouseEnter={() => {
                        if (d) {
                          setTooltipContent({
                            name: geo.properties.name,
                            iso3: geo.id,
                            arableLand: d.value
                          });
                          ReactTooltip.rebuild();
                        }
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        pressed: {
                          fill: "#E42",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <div className="controls" style={{ top: "75px" }}>
          <button onClick={handleZoomIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button onClick={handleZoomOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
};

const LandMap = (desc) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const { year } = useParams();
  const [position, setPosition] = useState({ zoom: 1, coordinates: [0, 0] });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:8081/get/land/desc-year",
        {
            "desc": desc.desc + "",
            "year": year + ""
        }
    ).then((data) => {
      setData(data.data);
    });
  }, []);

  return (
    <div className="map">
      <Map
        setTooltipContent={setTooltipContent}
        position={position}
        setPosition={setPosition}
        data={data}
        desc={desc.desc}
        year={year}
      />
      <ReactTooltip id="map-tooltip" effect="float" place="top" type="dark">
        {tooltipContent && (
          <div>
            <p>{tooltipContent.name}</p>
            <p>Country Code: {tooltipContent.iso3}</p>
            <p>{desc.desc + ": "} {tooltipContent.arableLand + "%"}</p>
          </div>
        )}
      </ReactTooltip>
    </div>
  );
};

export default LandMap;