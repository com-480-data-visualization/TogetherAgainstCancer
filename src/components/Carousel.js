import { useState } from "react";

export default function Carousel({ currentCancer }) {

  const isProd = process.env.NODE_ENV === 'production';

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div>
      {activeImage === 0 ? <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/daly.png"} className="d-block w-100" /> : null }
      {activeImage === 1 ? <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/hbar.png"} className="d-block w-100" /> : null }
      {activeImage === 2 ? <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/time_series.png"} className="d-block w-100" /> : null }
      {activeImage === 3 ? <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/vbar.png"} className="d-block w-100" /> : null }
      <div className="row m-2 p-1">
        <div className={"p-1 col" + (activeImage === 0 ? " text-bg-primary" : "")}>
          <img onClick={() => setActiveImage(0)} src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/daly.png"} className="rounded mx-auto d-block w-100" />
        </div>
        <div className={"p-1 col" + (activeImage === 1 ? " text-bg-primary" : "")}>
          <img onClick={() => setActiveImage(1)} src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/hbar.png"} className="rounded mx-auto d-block w-100" />
        </div>
        <div className={"p-1 col" + (activeImage === 2 ? " text-bg-primary" : "")}>
          <img onClick={() => setActiveImage(2)} src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/time_series.png"} className="d-block w-100" />
        </div>
        <div className={"p-1 col" + (activeImage === 3 ? " text-bg-primary" : "")}>
          <img onClick={() => setActiveImage(3)} src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/vbar.png"} className="d-block w-100" />
        </div>
      </div>
    </div >
  );
}