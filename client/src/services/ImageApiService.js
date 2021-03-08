const URL = 'http://localhost:4000'



function cloudinaryUpload (fileToUpload) {
    return fetch(URL + '/upload', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(fileToUpload)
      })
    .then(res => res.data)
    .catch(err => console.log(err))
}

export default { cloudinaryUpload }