import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import markerIcon from "../../assets/marker.svg";
import "./Map.scss";
import "leaflet/dist/leaflet.css";

export const marker = new Leaflet.Icon({
  iconUrl: markerIcon,
});

const places = [
  {
    city: "Kharkiv",
    lat: 49.9843281,
    lon: 36.45527485404673,
  },
  {
    city: "Bila Tserkva",
    lat: 49.7959159,
    lon: 30.13099175,
  },
];

export const Map = () => {
  return (
    <div className="map">
      <MapContainer
        center={[48.22, 31.1]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places.map((place) => {
          return (
            <Marker
              key={place.city}
              position={[place.lat, place.lon]}
              icon={marker}
            >
              <Popup>{place.city}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
