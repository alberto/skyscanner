import qs from 'qs';

//TODO Use NODE_ENV flags to set appropriate value
const API_DOMAIN = 'http://localhost:4000';

function handleErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}
export function search(terms) {
  const q = qs.stringify(terms);
  return fetch(API_DOMAIN + '/api/search?' + q)
  .then(handleErrors)
  .then((response) => {
    return response.json();
  });
}
