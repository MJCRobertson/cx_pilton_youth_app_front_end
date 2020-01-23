const url = 'http://localhost:8080/api/people/';

class PeopleRequest {

  get() {
    return fetch(url)
    .then((res) => res.json())
  }

  delete(id) {
    return fetch(url + id, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
  }

  post(payload){
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
  }

  edit(id, payload) {
    return fetch(url + id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
  }

  findById(id) {
    return fetch(url + id)
    .then((res) => res.json())
  }

}

export default PeopleRequest;
