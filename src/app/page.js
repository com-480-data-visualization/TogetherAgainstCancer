"use client";

import { useState } from "react";

import Body from "../components/Body.js";
import Switch from "../components/Switch.js";
import Listing from "../components/Listing.js";
import Carousel from "../components/Carousel.js";

import cancerData from "../data.json";

export default function Page() {

  const cancers = cancerData.cancers;
  const [currentCancer, setCurrentCancer] = useState(null);
  const [mode, setMode] = useState(false);

  return (
    <div className="menu-container row">
      <div className="col text-center" style={{ "borderRight": "1px solid #ddd" }}>

        <h4>Type of Cancer</h4>
        <p>Select a type of cancer to learn about its statistics :</p>
        <Switch state={mode} stateSetter={setMode} />
        {mode ?
          <Body active={currentCancer} setActive={setCurrentCancer} />
          :
          <Listing cancers={cancers} active={currentCancer} setActive={setCurrentCancer} />
        }
      </div>
      <div className="col text-center">
        <h4>Cancer Stat Facts {currentCancer == null ? "" : ": " + currentCancer.type}</h4>
        {currentCancer == null ?  null : <Carousel currentCancer={currentCancer} />}
      </div>
    </div>
    
  );
}