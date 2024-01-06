// https://nominatim.openstreetmap.org/search?street=амосова&city=харьков&format=json

export const getCoords = async (city: string, street: string) => {
  const params = new URLSearchParams({
    street,
    city,
    format: 'json',
    limit: '1'
  })

  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
    method: 'GET'
  })

  const data = await response.json();

  console.log(data)
}