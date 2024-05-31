"use client";

import { useEffect, useState } from "react";
import { updateCountryInfo } from "../utils.js";
import dynamic from 'next/dynamic';

import Body from "../components/Body.js";
import Switch from "../components/Switch.js";
import Carousel from "../components/Carousel.js";
const Map = dynamic(() => import('../components/Map.js'), {
  ssr: false,
});
import Modal from "../components/Modal.js";


// Part to select the data to represent
function DataSelect({ active, setActive }) {
  return (
    <div className="col text-center" >
      <h4 style={{fontFamily: "Cinzel Decorative"}}>Type of Cancer</h4>
      <p style={{fontFamily: "Cinzel Decorative"}}>Select a type of cancer to learn about its statistics :</p>
      <Body active={active} setActive={setActive} />
    </div>
  );
}

// Part to represent the data chosen
function DataRepr({ active }) {

  // Mode of representation (false: Graphs, true: Map)
  const [mode, setMode] = useState(false);
  // Information about the selected country
  const [countryInfo, setCountryInfo] = useState(null);

  // Updates the information on countries when the active cancer changes
  useEffect(() => {
    if (countryInfo != null) {
      updateCountryInfo(setCountryInfo, active, countryInfo.name, countryInfo.latlng)
    }
  }, [active]);

  return (
    <div className="col text-center" style={{ "borderLeft": "1px solid #ddd" }}>
      <Modal countryInfo={countryInfo} />
      <h4 style={{fontFamily: "Cinzel Decorative"}}>Statistics {active == null ? "" : "on " + (active.type).toLowerCase() + " cancer"}</h4>
      <div className="switch-container text-center">
        <div className="row align-items-center">
          <div className="col" style={{fontFamily: "Cinzel Decorative"}}>
            Graphs
          </div>
          <div className="col">
            <Switch state={mode} stateSetter={setMode} />
          </div>
          <div className="col" style={{fontFamily: "Cinzel Decorative"}}>
            Map
          </div>
        </div>
      </div>
      {mode ? <Map setCountryInfo={setCountryInfo} currentCancer={active} /> : <Carousel currentCancer={active} />}
    </div>
  );
}

export default function Page() {

  // The current cancer that is displayed
  const [currentCancer, setCurrentCancer] = useState(null);

  const isProd = process.env.NODE_ENV === 'production';

  return (
    <>
      <div className="homepage-container" >
      </div>
      <h1 className="page-title">Interactive Visualizations</h1>
      <div className="interactpage-container">
        <div className="interactions-container row">
          <DataSelect active={currentCancer} setActive={setCurrentCancer} />
          {currentCancer === null ? null : <DataRepr active={currentCancer} />}
        </div>
      </div>
      <h1 className="page-title">Static Visualizations</h1>
      <div className="staticpage-container" >
        <img className="staticpage-img" src={(isProd ? "/TogetherAgainstCancer" : "") + "/wordcloud.png"} alt="" height="500" width="900" />
        <div className="container-sm" width="5">
        <p className="staticpage-text" style={{fontFamily: "Cinzel Decorative"}}>This wordcloud gives an insight on the proportion of each type of cancer. The bigger the name of the cancer, the most frequent it is. We highly recommand (as none experts) a cancer screening for the most frequent cancers as it can sometimes be too late when it is detected without the screening.</p>
        </div>
      </div>

    </>
  );
}