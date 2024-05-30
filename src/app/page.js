"use client";

import { useEffect, useState } from "react";
import { updateCountryInfo } from "../utils.js";

import Body from "../components/Body.js";
import Switch from "../components/Switch.js";
import Carousel from "../components/Carousel.js";
import Map from "../components/Map.js";
import Modal from "../components/Modal.js";


// Part to select the data to represent
function DataSelect({active, setActive}) {
  return(
      <div className="col text-center" >
        <h4>Type of Cancer</h4>
        <p>Select a type of cancer to learn about its statistics :</p>
        <Body active={active} setActive={setActive} />
      </div>
  );
}

// Part to represent the data chosen
function DataRepr({active}) {

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
          <h4>Statistics {active == null ? "" : "on " + (active.type).toLowerCase() + " cancer"}</h4>
          <div className="switch-container text-center">
            <div className="row align-items-center">
              <div className="col">
                Graphs
              </div>
              <div className="col">
                <Switch state={mode} stateSetter={setMode} />
              </div>
              <div className="col">
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

  return (
    <>

    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          TogetherAgainstCancer
        </a>
      </div>
    </nav>

    <div className="menu-container row">
      <DataSelect active={currentCancer} setActive={setCurrentCancer} />
      {currentCancer === null ? null : <DataRepr active={currentCancer} /> }
    </div>

    </>
  );
}