


export default function Anatomy({cancers, setActive}) {
    return (
        <div className="img-overlay-wrap">
            <h4>Select a zone</h4>
            <img id="overlay-image" src="http://localhost:8000/media/body.jpeg"/>
            <svg id="overlay-svg" viewBox='0 0 100 100'>
                {/*
                cancers == null ?
                null
                :
                cancers.map((c) => (
                <svg id="overlay-svg" viewBox='0 0 100 100'>
                    <circle cx="82.5" cy="17" r="1" type="button" onClick={() => setActive(c.type)}></circle>
                    <text  x="40" y="17" className="hide">{c.type}</text>
                </svg>
                ))*/}
                
                <circle cx="82.5" cy="17" r="1">Brain</circle>
                <text  x="40" y="17" className="hide">Brain</text>

                <circle cx="18" cy="38" r="1">Breast</circle>
                <text  x="40" y="38" className="hide">Breast</text>

                <circle cx="79" cy="50" r="1">Colon</circle>
                <text  x="40" y="50" className="hide">Colon</text>

                <circle cx="13" cy="49" r="1">Kidney</circle>
                <text  x="40" y="49" className="hide">Kidney</text>

                <circle cx="78" cy="41" r="1">Liver</circle>
                <text  x="40" y="41" className="hide">Liver</text>

                <circle cx="18" cy="52" r="1">Ovarian</circle>
                <text  x="40" y="52" className="hide">Ovarian</text>

                <circle cx="83" cy="44" r="1">Pancreas</circle>
                <text  x="40" y="44" className="hide">Pancreas</text>

                <circle cx="84" cy="42" r="1">Stomach</circle>
                <text  x="40" y="42" className="hide">Stomach</text>

                <circle cx="15.5" cy="31" r="1">Trachea</circle>
                <text  x="40" y="31" className="hide">Trachea</text>

                <circle cx="82.5" cy="27" r="1">Thyroid</circle>
                <text  x="40" y="27" className="hide">Thyroid</text>
            
            </svg>
        </div>
    );
  }