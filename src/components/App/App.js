import React from 'react';
import { Switch, Route, useNavigate, useLocation } from 'react-router-dom';
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
  //const CurrentUserContext = React.createContext();
  //const [currentUser, setCurrentUser] = React.useState({});
  // const navigate = useNavigate(); import { Routes, Route, useNavigate, useLocation }
  // const location = useLocation(); import { Routes, Route, useNavigate, useLocation }

  return (
      <div className="page">
          
          <Switch>
          <Route path='/' exact>
            <Header />
            <Main />
            <Footer />
          </Route>

          <Route path='/signup'>
            <Register />
          </Route>

          <Route path='/signin'>
            <Login />
          </Route>

          <Route path='/profile'>
            <Header />
            <Profile />
          </Route>

          <Route path='/movies'>
            <Header />
            <Movies />
            <Footer />
          </Route>

          <Route path='/saved-movies'>
            <Header />
            <SavedMovies />
            <Footer />
          </Route>

          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    //<CurrentUserContext.Provider value={currentUser}>
    //</CurrentUserContext.Provider>
  );
}
