class MoviesApi {
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

  getMovies() {
    return fetch(`${this._url}`, {
      method: "GET",
//      credentials: 'include',
      headers: this._headers,
    })
    .then(this._checkResponse)
  }

  saveMovie(movie) {
    return fetch(`${this._url}`, {
      method: "POST",
//      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(movie)
    })
    .then(this._checkResponse)
  }

  deleteCard(movieId) {
    return fetch(`${this._url}/${movieId}`, {
      method: "DELETE",
//      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse);
  }
} 

export default new MoviesApi ({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 
    'content-type': "application/json"
  }
})