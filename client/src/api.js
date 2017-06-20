import qs from 'qs';

//TODO Use NODE_ENV flags to set appropriate value
const API_DOMAIN = 'http://localhost:4000';

function jsonFetch(url, params) {
  return fetch(url, params)
    .then(handleErrors)
    .then(asJson);
}

function handleErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

function asJson(response) {
  return response.json();
}
export function search(terms) {
  const q = qs.stringify(terms);
  return jsonFetch(API_DOMAIN + '/api/search?' + q)
}

export function createSession(terms) {
  return jsonFetch(API_DOMAIN + '/api/pricing', {
    method: 'POST',
    body: JSON.stringify(terms),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}

export function pollSession({sessionKey}) {
  const q = qs.stringify({sessionKey});
  return jsonFetch(API_DOMAIN + '/api/pricing?' + q);
}
