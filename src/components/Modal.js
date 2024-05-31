export default function Modal({ countryInfo }) {

    if (countryInfo != null) {
        console.log(countryInfo.deathRateMen);
    }

    return (
        <div className="modal fade" id="modalCountry" tabIndex="-1" aria-labelledby="modalCountryLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" style={{fontFamily: "Cinzel Decorative"}} id="exampleModalLabel">Death Rate in {countryInfo === null ? "Country Not Found" : countryInfo.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {countryInfo === null || countryInfo.deathRateMen === null ? null : <p style={{fontFamily: "Cinzel Decorative"}}>Men &#9794; : {countryInfo.deathRateMen.toFixed(2)} / 100,000</p>}
                        {countryInfo === null ? null : <p style={{fontFamily: "Cinzel Decorative"}}>Women &#9792; : {countryInfo.deathRateWomen.toFixed(2)} / 100,000</p>}
                        <p style={{fontFamily: "Cinzel Decorative"}}><i>This metric represents a mean of numbers of deaths occurring in a population of 100,000 people from 1981 to 2019.</i></p> 
                    </div>
                </div>
            </div>
        </div>
    );
}