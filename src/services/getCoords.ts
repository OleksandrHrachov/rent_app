import { ICoordsResponse } from "../types";

export const getCoords = async (city: string, street: string) => {
  const params = new URLSearchParams({
    street,
    city,
    format: "json",
    limit: "1",
  });

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?${params}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data: ICoordsResponse[] = await response.json();

      if (data.length) {
        const coordinates = {
          lat: Number(data[0].lat),
          lon: Number(data[0].lon),
        };

        return coordinates;
      }
    }
  } catch (error) {
    throw new Error("There are problems, please try again later.");
  }
};
