import { IAdsCard } from "../types";
import Leaflet, { LatLngExpression } from "leaflet";

export const getVisibleMarkers = (
  cards: IAdsCard[],
  map: Leaflet.Map
): IAdsCard[] => {
  const visibleAds = cards.filter((card) => {
    const coords: LatLngExpression = [card.coords.lat, card.coords.lon];
    return map.getBounds().contains(coords);
  });

  return visibleAds;
};

const initData = [
  {
    info: {
      id: "space_suit_wnwass",
      city: "Kharkiv",
      street: "Space street 12",
      name: "John",
      phone: "+356-4465-564-656",
      email: "space@space.com",
      title: "Space suit",
      price: 10000,
      description: "Space suit almost new, no holes, only 158 spacewalks.",
      imageUrl:
        "https://res.cloudinary.com/dakb9rcdn/image/upload/v1704633058/rent_app/eqjfbzv2jxgdt6p2yiis.png",
    },
    coords: {
      lat: 49.9843281,
      lon: 36.45527485404673,
    },
  },
  {
    info: {
      id: "spaceship_j8m1jf",
      city: "Bila Tserkva",
      street: "Space street 52",
      name: "Nick",
      phone: "+356-4465-564-656",
      email: "space@space.com",
      title: "Spaceship",
      price: 700000,
      description:
        "Rent a spaceship, range 100,000 light years, runs on banana peels, 3 bananas for 4 parsecs.",
      imageUrl:
        "https://res.cloudinary.com/dakb9rcdn/image/upload/v1704632758/rent_app/jgaqiajjawhiwfedothq.png",
    },
    coords: {
      lat: 49.7959159,
      lon: 30.13099175,
    },
  },
];

export const getInitData = async (): Promise<IAdsCard[]> => {
  try {
    if (process.env.REACT_APP_BACKEND_URL) {
      const initResponseData = await fetch(process.env.REACT_APP_BACKEND_URL);
      const initData = await initResponseData.json();
      return initData;
    } else {
      return initData;
    }
  } catch (error) {
    throw new Error("error => getInitData()");
  }
};

export const createOffer = async (data: IAdsCard): Promise<boolean> => {
  try {
    const responseData = await fetch(process.env.REACT_APP_BACKEND_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    
    if (responseData.status === 200) {
      return true;
    }

    return false;
  } catch (error) {
    throw new Error("error => createOffer()");
  }
};
