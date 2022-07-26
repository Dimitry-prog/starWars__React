import { HTTP, HTTPS } from "../constants/api";

export const changeHTTP = url => {
  return url ? url.replace(HTTP, HTTPS) : url;
}

export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log('Could not fetch.', response.status);
      return false;
    }
    return await response.json();
  } catch (error) {
    console.log('Could not fetch.', error.message);
    return false;
  }
}
/* (async () => {
  const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
})(); */

export const makeConcurrentRequest = async (url) => {
  const result = await Promise.all(url.map(res => {
    return fetch(res).then(res => res.json())
  }));

  return result;
}