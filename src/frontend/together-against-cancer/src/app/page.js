"use client";

import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from './menu.js';
import Anatomy from './anatomy.js';

async function getCancers() {
  const res = await fetch("http://localhost:8000/api/tac/");
  if (!res.ok) {
    throw new Error("Failed to fetch cancer data");
  }
  return res.json();
}


function Listing({ cancers, active, setActive }) {

  return (
    <ul className="list-group col-6 mx-auto">
      {cancers.map((c) => (
        <button key={c.id} type="button" className={"list-group-item list-group-item-action " + ((active != null && active.id == c.id) ? "active" : "")} onClick={() => setActive(c)}>{c.type}</button>
      ))}
    </ul>
  );
}


function Carousel({ currentCancer }) {

  return (
    <div id="carouselGraphs" className="carousel carousel-fade slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={"http://localhost:8000/media/" + (currentCancer.type).toLowerCase() + "/daly.png"} className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={"http://localhost:8000/media/" + (currentCancer.type).toLowerCase() + "/hbar.png"} className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={"http://localhost:8000/media/" + (currentCancer.type).toLowerCase() + "/time_series.png"} className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={"http://localhost:8000/media/" + (currentCancer.type).toLowerCase() + "/vbar.png"} className="d-block w-100"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselGraphs" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselGraphs" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default function Page() {

  const [cancers, setCancers] = useState(null);
  const [currentCancer, setCurrentCancer] = useState(null);

  useEffect(() => {
    const fetchCancers = async () => {
      const c = await getCancers();
      setCancers(c);
    }
    fetchCancers().catch(console.error)
  }, []);

  return (
    <body id="page">
      <div className="index">
        {<Menu cancers={cancers} setActive={setCurrentCancer}/>}
      </div>
      {/* 
      <div className="menu-container row">
        <div className="col text-center" style={{ "borderRight": "1px solid #ddd" }}>

          <h4>Type of Cancer</h4>
          <p>Select a type of cancer to learn about its statistics :</p>
          {cancers == null ?
            <h6>Loading ...</h6>
            :
            <Listing cancers={cancers} active={currentCancer} setActive={setCurrentCancer} />}
        </div>
        <div className="col text-center">
          <h4>Cancer Stat Facts {currentCancer == null ? null : ": " + currentCancer.type}</h4>
          {currentCancer == null ? null : <Carousel currentCancer={currentCancer} />}
        </div>
      </div>
      */}
      <div className="menu-container" id="#data">
        <h4 align="center">{currentCancer == null ? "Select a zone" : currentCancer.type + " data"}</h4>
        {currentCancer == null ?
        <Anatomy/>
        : 
        <Carousel currentCancer={currentCancer} />}
      </div>
    </body>
  );
}