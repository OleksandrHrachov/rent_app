import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import markerIcon from "../../assets/marker.svg";
import "leaflet/dist/leaflet.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { addSelectAdd } from "../../store/adsSlice";
import "./Map.scss";

export const marker = new Leaflet.Icon({
  iconUrl: markerIcon,
});

export const Map = () => {
  const cards = useAppSelector((state) => state.adsList.list);
  const dispatch = useAppDispatch();

  const handelSelectAd = (id: string) => {
    dispatch(addSelectAdd(id));
  };

  return (
    <div className="map">
      <MapContainer
        center={[48.22, 31.1]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "90vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cards.map((card) => {
          return (
            <Marker
              key={card.info.id}
              position={[card.coords.lat, card.coords.lon]}
              icon={marker}
              eventHandlers={{
                click: () => {
                  handelSelectAd(card.info.id);
                },
                mouseover: (event) => event.target.openPopup(),
                mouseout: (event) => event.target.closePopup(),
              }}
            >
              <Popup>
                {card.info.city} <br /> {card.info.street && card.info.street}{" "}
                <br /> {card.info.title}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
