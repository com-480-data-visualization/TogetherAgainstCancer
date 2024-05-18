"use client";

import { useState } from "react";

function getCancers() {

  const cancerList = [
    {id: 1, type: "Brain"},
    {id: 2, type: "Breast"},
    {id: 3, type: "Colon"},
    {id: 4, type: "Kidney"},
    {id: 5, type: "Liver"},
    {id: 6, type: "Ovarian"},
    {id: 7, type: "Pancreas"},
    {id: 8, type: "Stomach"},
    {id: 9, type: "Trachea"},
    {id: 10, type: "Thyroid"},
  ];

  return cancerList;
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

  const isProd = process.env.NODE_ENV === 'production';

  return (
    <div id="carouselGraphs" className="carousel carousel-fade slide">
      <div className="carousel-inner">
        <div className="carousel-item ">
          <img src={isProd ? "/TogetherAgainstCancer" : "" + "/graphs/" + (currentCancer.type).toLowerCase() + "/daly.png"} className="d-block w-100" />
        </div>
        <div className="carousel-item active">
          <img src={isProd ? "/TogetherAgainstCancer" : "" + "/graphs/" + (currentCancer.type).toLowerCase() + "/hbar.png"} className="d-block w-100" />
        </div>
        <div className="carousel-item active">
          <img src={isProd ? "/TogetherAgainstCancer" : "" + "/graphs/" + (currentCancer.type).toLowerCase() + "/time_series.png"} className="d-block w-100" />
        </div>
        <div className="carousel-item active">
          <img src={isProd ? "/TogetherAgainstCancer" : "" + "/graphs/" + (currentCancer.type).toLowerCase() + "/vbar.png"} className="d-block w-100" />
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

  const [cancers, setCancers] = useState(getCancers());
  const [currentCancer, setCurrentCancer] = useState(null);

  return (
    <div className="menu-container row">
      <div className="col text-center" style={{ "borderRight": "1px solid #ddd" }}>

        <h4>Type of Cancer</h4>
        <p>Select a type of cancer to learn about its statistics :</p>
        {cancers == null ?
          <h6>Loading ...</h6>
          :
          <Listing cancers={cancers} active={currentCancer} setActive={setCurrentCancer} />
        }
      </div>
      <div className="col text-center">
        <h4>Cancer Stat Facts {currentCancer == null ? "" : ": " + currentCancer.type}</h4>
        {currentCancer == null ? null : <Carousel currentCancer={currentCancer} />}
      </div>
    </div>
  );
}