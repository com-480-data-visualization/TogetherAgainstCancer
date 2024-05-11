/*
const allCircles = document.getElementsByTagName("circle");

allCircles.addEventListener( "mouseover", (e) => {
      // highlight the mouseover target
      allCircles.target.style.color = "red";
      allCircles.target.style.transform = "scale(0.5)";
    }
  );
*/
/*
function scaleradius(x){
    document.x.style.r.scale(10)
    document.getElementById("demo").style.color = "red";
}

function _scaleradius(event) {
    const circle = event.target;
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "red");
}


function scaleRadius(event) {
    event.target.style.transform = "scale(2)";
    event.target.style.fill = "red";
}

*/


export default function Anatomy({cancers, setActive}) {
    return (
        <div className="img-overlay-wrap">
            <img id="overlay-image" src="http://localhost:8000/media/body.png"/>
            <svg id="overlay-svg" viewBox='0 0 100 100'>
                <circle cx="65" cy="25" r="1" />
                <circle cx="67" cy="5" r="1"/>
                <circle cx="70" cy="48" r="1" />
            </svg>
        </div>
    );
  }