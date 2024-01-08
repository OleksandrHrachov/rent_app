import { IAdsCard } from "../types";
import Leaflet, { LatLngExpression } from "leaflet";

export const getVisibleMarkers = (cards: IAdsCard[], map: Leaflet.Map): IAdsCard[] => {
  
    const visibleAds = cards.filter(card => {
      const coords: LatLngExpression = [card.coords.lat, card.coords.lon];
      return map.getBounds().contains(coords);
    })

  return visibleAds
};