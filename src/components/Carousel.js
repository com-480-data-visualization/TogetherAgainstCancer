export default function Carousel({ currentCancer }) {

  const isProd = process.env.NODE_ENV === 'production';

  return (
    <div id="carouselGraphs" className="carousel carousel-fade slide">
      <div className="carousel-inner">
        <div className="carousel-item ">
          <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/daly.png"} className="d-block w-100" />
        </div>
        <div className="carousel-item active">
          <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/hbar.png"} className="d-block w-100" />
        </div>
        <div className="carousel-item active">
          <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/time_series.png"} className="d-block w-100" />
        </div>
        <div className="carousel-item active">
          <img src={(isProd ? "/TogetherAgainstCancer" : "") + "/graphs/" + (currentCancer.type).toLowerCase() + "/vbar.png"} className="d-block w-100" />
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