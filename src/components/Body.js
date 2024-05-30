import cancerData from "../data/data.json";

export default function Body({active, setActive}) {

    const isProd = process.env.NODE_ENV === 'production';

    return (
            <svg id="overlay-svg" viewBox='0 0 100 100'>
                <image id="overlay-image" href={(isProd ? "/TogetherAgainstCancer" : "") + "/body.jpeg"} height="100" width="100" />
                {
                cancerData.cancers.map((c) => (
                <svg key={c.id} viewBox='0 0 100 100'>
                    <circle cx={c.point_pos[0]} cy={c.point_pos[1]} r="1" type="button" onClick={() => setActive(c)} fill={active === c ? "blue" : "black"}/>
                    {active === c ? <text x={c.text_pos[0]} y={c.text_pos[1]} fontSize="4" className="hide">{c.type}</text> : null}
                </svg>
                ))}
            </svg>
    );
  }