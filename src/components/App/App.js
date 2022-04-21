import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

export default function App() {

  return (
    <div className="page">
      <Header />
        <Switch>

          <Route path='/' exact>
            <Main />
          </Route>

          <Route path='/signup'>
            <Register />
          </Route>

          <Route path='/signin'>
            <Login />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='/movies'>
            <Movies />
          </Route>

          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>

          <Route path='/*'>
            <NotFound />
          </Route>

        </Switch>
      <Footer />
    </div>
  );
}
