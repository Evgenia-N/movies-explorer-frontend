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
  const [movies, setMovies] = React.useState([]);
//  const [ areThereStoragedMovies, setAreThereStoragedMovies ] = React.useState(true);
  const [ storagedMovies, setStoragedMovies ] = React.useState([]);
  const [ isShortMoviesCheckboxChecked, setIsShortMoviesCheckboxChecked ] = React.useState(false);
  const [isLoading, setIsLoading ] = React.useState(false);
  const [isPerformed, setIsPerformed] = React.useState(false);
  const [initialValue, setInitialValue ] = React.useState('');
  const [searchResultMessage, setSearchResultMessage] = React.useState('');
  const location = useLocation();
  const history = useHistory();
  
  const onRegister = (name, email, password) => {
    auth.register(name, email, password)
    .then((res)=> {
      console.log(res)
      if (res) {
  //      setisInfoTooltipOpen(true)
  //      setisSuccessful(true);
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

  function handleUserUpdate({ name, email }) {
    MainApi.editUserInfo({name, email})
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) =>
      console.log(`${err}`))
  }

  function arrangeArray(foundArr) {
    let foundMovies = [];
    foundArr.forEach((item, index) => {
      foundMovies[index] = {
        nameRU: item.nameRU,
        image: `https://api.nomoreparties.co${item.image.url}`,
        trailerLink: item.trailerLink,
        country: item.country,
        duration: item.duration,
        movieId: item.id,
        thumbnail: `https://api.nomoreparties.co${item.image.url}`,
        director: item.director,
        year: item.year,
        description: item.description,
        nameEN: item.nameEN,
      };
    });
    return foundMovies;
  }

  
  function performSearch(allMovies, request) {
    return allMovies.filter(
      (item) =>
        item.nameRU.includes(request) ||
        item.nameRU.includes(request.toLowerCase()) ||
        item.nameRU.includes(request.slice(0, 1).toUpperCase() + request.slice(1))
    );
  }

  function filterByDuration(movies) {
    return movies.filter((item) => item.duration < 41);
  }

  function handleSubmitSearchMovies(request) {
    setIsLoading(true);
    MoviesApi
    .getMovies()
    .then((res) => {
      const arrangedArray = arrangeArray(res);
      let foundMovies = performSearch(arrangedArray, request);
      localStorage.setItem('search', request);
      localStorage.setItem('checkboxState',
        JSON.stringify(isShortMoviesCheckboxChecked))
      setIsPerformed(true);
      if (isShortMoviesCheckboxChecked) {
          const filteredMovies = filterByDuration(foundMovies);
          setMovies(filteredMovies);
          if (movies.length < 1) {
            setSearchResultMessage('Ничего не найдено')
          } else {
            localStorage.setItem('storagedMovies', JSON.stringify(filteredMovies));
            setStoragedMovies(localStorage.getItem('storagedMovies'))
          }
      } else {
        setMovies(foundMovies);
        if (movies.length < 1) {
          setSearchResultMessage('Ничего не найдено')
        } else {
        localStorage.setItem('storagedMovies', JSON.stringify(foundMovies));
        setStoragedMovies(foundMovies)
        }
      }
    })
    .catch((err) => console.log(`${err}`),

       // setSearchResultMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
       )
    .finally(() => {
      setIsLoading(false);
    });
  }

  // INITIAL RENDERING
  React.useEffect(() => {
    if (localStorage.getItem('search') && localStorage.getItem('checkboxState') && localStorage.getItem('storagedMovies')) {
      setInitialValue(localStorage.getItem('search'))
      setIsShortMoviesCheckboxChecked(JSON.parse(localStorage.getItem('checkboxState')))
      setMovies(JSON.parse(localStorage.getItem('storagedMovies')));
    }
 }, [initialValue]);

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
            handleSubmitSearchForm={handleSubmitSearchMovies}
            movies={movies}
            isLoading={isLoading}
            isPerformed={isPerformed}
            initialValue={initialValue}
            setInitialValue={setInitialValue}
            searchResultMessage={searchResultMessage}
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
