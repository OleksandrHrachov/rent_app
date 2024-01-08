export interface IAdsCardInfo {
  id: string;
  city: string;
  street: string;
  name: string;
  phone: string;
  email: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface IAdsCardCoords {
  lat: number;
  lon: number;
}

export interface IAdsCard {
  info: IAdsCardInfo;
  coords: IAdsCardCoords;
}

export interface IAdsState {
  selectedAd: string;
  list: IAdsCard[];
  visibleList: IAdsCard[];
}

export interface ICoordsResponse {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: string[];
}
