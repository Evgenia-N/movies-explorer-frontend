import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import * as auth from '../../utils/Auth';
import { ProtectedRoute } from '../../utils/ProtectedRoute';
import { AuthorizationRoute } from '../../utils/AuthorizationRoute';
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  // const [movies, setMovies] = React.useState([]);
  // const [userData, setUserData] = React.useState({});

  const [ initialMovies, setInitialMovies ] = React.useState([]);
  const [ areThereStoragedMovies, setAreThereStoragedMovies ] = React.useState(false);
  const [ areStoragedMoviesFiltered, setAreStoragedMoviesFiltered ] = React.useState(false);
  const [ storagedShortMovies, setStoragedShortMovies ] = React.useState([]);
  const [ storagedMovies, setStoragedMovies ] = React.useState([]);
  const [ isShortMoviesCheckboxChecked, setIsShortMoviesCheckboxChecked ] = React.useState(false);

  const location = useLocation();
  const history = useHistory();
  
  const onRegister = (name, email, password) => {
    auth.register(name, email, password)
    .then((res)=> {
      console.log(res)
      if (res) {
  //      setisInfoTooltipOpen(true)
  //      setisSuccessful(true);
  //      setUserData({name, email});
        setTimeout(() => {
          history.push("/signin");;
  //          setisInfoTooltipOpen(false)
      }, 3000);
      }
    })
    .catch((err) => {
  //    setisInfoTooltipOpen(true)
  //    setisSuccessful(false);
      console.log(`${err}`)
    })
  }
  
  const onLogin = (email, password) => {
    auth.authorize(email, password)
    .then((data) => {
      if (!email || !password) {
        return;
      }
      // console.log(data)
      localStorage.setItem('token', data._id);
      setLoggedIn(true);
      history.push("/");
      setCurrentUser(data);
    })
    .catch((err) => {
  //    setisInfoTooltipOpen(true)
  //    setisSuccessful(false);
      console.log(`${err}`)
    })
  }

  function handleLogout() {
    auth.signOut()
    .then((res)=> {
      console.log(res);
      localStorage.removeItem('token');
      setLoggedIn(false);
      history.push("/");
    })
    .catch((err) => {
      console.log(`${err}`)
    })
  }

  const handleTokenCheck = (path) => {
    if (localStorage.getItem('token')) {
      auth.checkToken(localStorage.getItem('token')).then((res) => {
        if(res) {
          setLoggedIn(true);
          history.push(path)
  //        setUserData({email: res.email})
        }
      })
      .catch((err) => { 
        console.log(`${err}`) 
      }) 
    }
  };

  React.useEffect(() => {
     handleTokenCheck(location.pathname);
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((err) =>
        console.log(`${err}`))
    }
  }, [loggedIn]);

  // React.useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([MainApi.getUserInfo(), 
  //     //  MoviesApi.getMovies()
  //     ])
  //     .then(([currentUser, movies]) => {
  //       setCurrentUser(currentUser);
  //     //  setMovies(movies);
  //     })
  //     .catch((err) =>
  //       console.log(`${err}`))
  //   }
  // }, [loggedIn]);

  function handleUserUpdate({ name, email }) {
    MainApi.editUserInfo({name, email})
    .then((data) => {
      setCurrentUser(data);
//      setUserData(data);
    })
    .catch((err) =>
      console.log(`${err}`))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>

          <AuthorizationRoute 
            loggedIn={loggedIn}
            path="/signup"
            component={Register}
            onRegister={onRegister}>
          </AuthorizationRoute>

          <AuthorizationRoute 
            loggedIn={loggedIn}
            path="/signin"
            component={Login}
            onLogin={onLogin}>
          </AuthorizationRoute>

          <ProtectedRoute 
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
            onEdit={handleUserUpdate} 
            onSignOut={handleLogout}>
          </ProtectedRoute>

          <ProtectedRoute 
            loggedIn={loggedIn}
            path="/movies"
            component={Movies}
            initialMovies={initialMovies}
            areThereStoragedMovies={areThereStoragedMovies}
            areStoragedMoviesFiltered={areStoragedMoviesFiltered}
            storagedShortMovies={storagedShortMovies}
            storagedMovies={storagedMovies}
            isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
            setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}>
          </ProtectedRoute>

          <ProtectedRoute 
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}>
          </ProtectedRoute>
          
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
