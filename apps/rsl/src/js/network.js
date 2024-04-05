export const headers = {
  "Content-Type": "application/json",
};
export const openDrawsEndpoint = `https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws`;

export const makeRequest = async (endpoint, verb, params = null) => {
  const response = await fetch(endpoint, {
    method: verb,
    headers: headers,
    body: JSON.stringify(params),
  });

  const data = await response.json();
  return data;
};
