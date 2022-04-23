class MainApi {
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status, res.statusText}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse);
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
      .then(this._checkResponse);
  }
} 

export default new MainApi ({
  url: 'http://localhost:3001',
  headers: { 
    'content-type': "application/json"
  }
})
