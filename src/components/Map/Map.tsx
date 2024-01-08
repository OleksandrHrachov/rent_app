import { useState, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet, { LatLngExpression } from "leaflet";
import markerIcon from "../../assets/marker.svg";
import "leaflet/dist/leaflet.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  addSelectAdd,
  removeSelectAdd,
  selectVisibleAds,
} from "../../store/adsSlice";
import "./Map.scss";
import { getVisibleMarkers } from "../../helpers";

export const marker = new Leaflet.Icon({
  iconUrl: markerIcon,
});

export const Map = () => {
  const cardsAll = useAppSelector((state) => state.adsList.list);
  const cardsVisible = useAppSelector((state) => state.adsList.visibleList);
  const dispatch = useAppDispatch();

  const handelSelectAd = (id: string) => {
    dispatch(addSelectAdd(id));
  };

  const [map, setMap] = useState<Leaflet.Map | null>(null);

  useEffect(() => {
    if (map) {
      const initVisibleAds = getVisibleMarkers(cardsAll, map);
      dispatch(selectVisibleAds(initVisibleAds));

      map.on("zoomend", () => {
        const visibleAds = getVisibleMarkers(cardsAll, map);
        dispatch(removeSelectAdd());
        dispatch(selectVisibleAds(visibleAds));
      });

      map.on("moveend", () => {
        const visibleAds = getVisibleMarkers(cardsAll, map);
        dispatch(removeSelectAdd());
        dispatch(selectVisibleAds(visibleAds));
      });
    }
  }, [map, cardsAll]);

  useEffect(() => {
    if (map) {
      const initVisibleAds = getVisibleMarkers(cardsAll, map);
      dispatch(selectVisibleAds(initVisibleAds));
    }
  }, [cardsAll]);

  return (
    <div className="map">
      <MapContainer
        center={[48.22, 31.1]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "90vh" }}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cardsVisible.map((card) => {
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
