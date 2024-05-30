import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import geoData from "../data/custom.geo.json";
import 'leaflet/dist/leaflet.css'
import { updateCountryInfo } from "../utils";


// Map Component
export default function Map({ setCountryInfo, currentCancer }) {

    // Central Europe position
    const position = [48.6908333333, 9.14055555556];

    // Event Handler for each country
    const countryHandler = (feature, layer) => {
        layer.on({
            click: (e) => {
                const country = feature.properties.name;
                updateCountryInfo(setCountryInfo, currentCancer, country, e.latlng);
                const modal = new bootstrap.Modal('#modalCountry', {})
                modal.show()
            }
        });
    };

    return (
        <MapContainer center={position} zoom={4} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON key={Math.random()} data={geoData} onEachFeature={countryHandler} />
        </MapContainer>
    );
}