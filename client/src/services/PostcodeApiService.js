const URL = 'api.postcodes.io/postcodes'


function getSingleEvent (body) {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err));
}

export default { getSingleEvent } ;