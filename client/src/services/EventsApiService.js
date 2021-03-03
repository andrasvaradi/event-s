/* eslint-disable import/no-anonymous-default-export */
const URL = 'http://localhost:4000'

function getEvents () {
  return fetchRequest('/events');
}
function getSingleEvent (id) {
  return fetchRequest('/events/' + id);
}
function createEvent (body) {
  return fetchRequest('/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
    }
  )
}

function fetchRequest (path, options) {
  return fetch(URL + path, options)
    .then(res => res.status <= 400 ? res: Promise.reject())
    .then(response => response.status === 204 ? response : response.json())
    .catch(err => {
      console.log(`Error fetching ${path}: `, err)
    })
}

export default { getEvents, getSingleEvent, createEvent };
