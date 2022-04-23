export const BASE_URL = 'http://localhost:3001';
// https://api.evgexmovies.nomoredomains.xyz

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status, res.statusText}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({name, email, password }),
  })
  .then(checkResponse)
  .then (data => data)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
  })
  .then(checkResponse)
  .then (data => data)
}; 

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
//      'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse)
  .then (data => data)
}

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(checkResponse)
    .then (data => data)
};
