import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as auth from "../../utils/Auth";
import { ProtectedRoute } from "../../utils/ProtectedRoute";
import { AuthorizationRoute } from "../../utils/AuthorizationRoute";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isShortMoviesCheckboxChecked, setIsShortMoviesCheckboxChecked] =
    React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSearchPerformed, setIsSearchPerformed] = React.useState(false);
  const [isSearchPerformedInSaved, setIsSearchPerformedInSaved] =
    React.useState(false);
  const [initialValue, setInitialValue] = React.useState("");
  const [searchResultMessage, setSearchResultMessage] = React.useState("");
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = React.useState("");
  const location = useLocation();
  const history = useHistory();

  // Регистрация

  const onRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setIsInfoTooltipOpen(true);
          setInfoTooltipMessage("Регистрация прошла успешно!");
          hideInfoTooltip();
          onLogin(email, password);
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setInfoTooltipMessage(
          "Что-то пошло не так! Проверьте правильность введенных данных"
        );
        hideInfoTooltip();
        console.log(`${err}`);
      });
  };

  // Авторизация

  const onLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((data) => {
        if (!email || !password) {
          return;
        }
        setLoggedIn(true);
        localStorage.setItem("token", data._id);
        history.push("/movies");
        setCurrentUser(data);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setInfoTooltipMessage(
          "Что-то пошло не так! Проверьте правильность введенных данных"
        );
        hideInfoTooltip();
        console.log(`${err}`);
      });
  };

  // Выход с сайта

  function handleLogout() {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("search");
        localStorage.removeItem("checkboxState");
        localStorage.removeItem("storagedMovies");
        localStorage.removeItem("storagedSavedShortMovies");
        setLoggedIn(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  // Получение данных пользователя

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((currentUser) => {
          setCurrentUser(currentUser);
        })
        .catch((err) => console.log(`${err}`));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getMovies()
        .then((res) => {
          let arrMovies = [];
          let index = 0;
          res.forEach((item) => {
            if (item.owner === currentUser._id) {
              arrMovies[index] = {
                nameRU: item.nameRU,
                image: item.image,
                trailerLink: item.trailerLink,
                country: item.country,
                duration: item.duration,
                movieId: item._id,
                thumbnail: item.image,
                director: item.director,
                year: item.year,
                description: item.description,
                nameEN: item.nameEN,
              };
              index++;
            }
          });
          if (arrMovies.length > 0) {
            setSavedMovies(arrMovies);
          } else {
            setSavedMovies([]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser._id, loggedIn]);

  // Изменение данных пользователя

  function handleUserUpdate({ name, email }) {
    MainApi.editUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
        setIsInfoTooltipOpen(true);
        setInfoTooltipMessage("Данные успешно обновлены!");
        hideInfoTooltip();
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setInfoTooltipMessage(
          "Что-то пошло не так! Проверьте правильность введенных данных"
        );
        hideInfoTooltip();
        console.log(`${err}`);
      });
  }

  // Проверка наличия токена

  const handleTokenCheck = (path) => {
    if (localStorage.getItem("token")) {
      auth
        .checkToken(localStorage.getItem("token"))
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    }
  };

  React.useEffect(() => {
    handleTokenCheck(location.pathname);
  }, []);

  // ПОИСК ФИЛЬМОВ

  // 1. Работа с запросом

  function performSearch(allMovies, request) {
    return allMovies.filter(
      (item) =>
        item.nameRU.includes(request) ||
        item.nameRU.includes(request.toLowerCase()) ||
        item.nameRU.includes(
          request.slice(0, 1).toUpperCase() + request.slice(1)
        ) ||
        item.nameEN.includes(request) ||
        item.nameEN.includes(request.toLowerCase()) ||
        item.nameEN.includes(
          request.slice(0, 1).toUpperCase() + request.slice(1)
        )
    );
  }

  // 2. Работа с полученным с сайта Beatfilms массивом

  function arrangeArray(foundArr) {
    let foundMovies = [];
    foundArr.forEach((item, index) => {
      foundMovies[index] = {
        nameRU:
          item.nameRU === "" || typeof item.nameRU !== "string"
            ? "название отсутствует"
            : item.nameRU,
        image: `https://api.nomoreparties.co${item.image.url}`,
        trailerLink:
          item.trailerLink === "" || typeof item.trailerLink !== "string"
            ? "https://youtube.com"
            : item.trailerLink,
        country:
          item.country === "" || typeof item.country !== "string"
            ? "неизвестно"
            : item.country,
        duration: item.duration,
        movieId: item.id,
        thumbnail: `https://api.nomoreparties.co${item.image.url}`,
        director:
          item.director === "" || typeof item.director !== "string"
            ? "неизвестно"
            : item.director,
        year:
          item.year === "" || typeof item.year !== "string"
            ? "неизвестно"
            : item.year,
        description:
          item.description === "" || typeof item.description !== "string"
            ? "отсутствует"
            : item.description,
        nameEN:
          item.nameEN === "" || typeof item.nameEN !== "string"
            ? "перевод отсутствует"
            : item.nameEN,
      };
    });
    return foundMovies;
  }

  // 3. Фильтрация фильмов по длительности

  function filterByDuration(movies) {
    return movies.filter((item) => item.duration < 41);
  }

  // 4. Поиск по запросу и выдача результата

  function handleSubmitSearchMovies(request) {
    setIsLoading(true);
    MoviesApi.getMovies()
      .then((res) => {
        const arrangedArray = arrangeArray(res);
        const foundMovies = performSearch(arrangedArray, request);
        localStorage.setItem("search", request);
        localStorage.setItem(
          "checkboxState",
          JSON.stringify(isShortMoviesCheckboxChecked)
        );
        localStorage.removeItem("storagedShortMovies");
        setIsSearchPerformed(true);
        localStorage.setItem("storagedMovies", JSON.stringify(foundMovies));
        if (isShortMoviesCheckboxChecked) {
          const filteredMovies = filterByDuration(foundMovies);
          setMovies(filteredMovies);
          if (filteredMovies.length < 1) {
            setSearchResultMessage("Ничего не найдено");
          } else {
            localStorage.setItem(
              "storagedMovies",
              JSON.stringify(filteredMovies)
            );
          }
        } else {
          setMovies(foundMovies);
          if (foundMovies.length < 1) {
            setSearchResultMessage("Ничего не найдено");
          }
        }
        if (!foundMovies) {
          setSearchResultMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        }
      })
      .catch((err) => console.log(`${err}`))
      .finally(() => {
        setIsLoading(false);
      });
  }

  // 5. Поиск среди сохраненных фильмов

  function handleSubmitSearchSavedMovies(request) {
    setIsLoading(true);
    MainApi.getMovies()
      .then((res) => {
        const foundMovies = performSearch(
          res.filter((item) => item.owner === currentUser._id),
          request
        );
        setIsSearchPerformedInSaved(true);
        if (isShortMoviesCheckboxChecked) {
          const filteredMovies = filterByDuration(foundMovies);
          setSavedMovies(filteredMovies);
          if (savedMovies.length < 1) {
            setSearchResultMessage("Ничего не найдено");
          }
        } else {
          setSavedMovies(foundMovies);
          if (savedMovies.length < 1) {
            setSearchResultMessage("Ничего не найдено");
          }
        }
        if (!foundMovies) {
          setSearchResultMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        }
      })
      .catch((err) => console.log(`${err}`))
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Демонстрация результатов последнего поиска

  React.useEffect(() => {
    if (
      localStorage.getItem("search") &&
      localStorage.getItem("checkboxState")
    ) {
      setInitialValue(localStorage.getItem("search"));
      setIsShortMoviesCheckboxChecked(
        JSON.parse(localStorage.getItem("checkboxState"))
      );
    }
    if (localStorage.getItem("storagedMovies")) {
      if (localStorage.getItem("storagedShortMovies")) {
        setMovies(JSON.parse(localStorage.getItem("storagedShortMovies")));
      } else {
        setMovies(JSON.parse(localStorage.getItem("storagedMovies")));
      }
    }
  }, [initialValue]);

  // Закрытие всплывающего окна (вручную и автоматически)

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }

  function hideInfoTooltip() {
    setTimeout(() => {
      setIsInfoTooltipOpen(false);
    }, 3000);
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
            onRegister={onRegister}
          ></AuthorizationRoute>

          <AuthorizationRoute
            loggedIn={loggedIn}
            path="/signin"
            component={Login}
            onLogin={onLogin}
          ></AuthorizationRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
            onEdit={handleUserUpdate}
            onSignOut={handleLogout}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/movies"
            component={Movies}
            movies={movies}
            setMovies={setMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            isLoading={isLoading}
            isSearchPerformed={isSearchPerformed}
            setIsSearchPerformed={setIsSearchPerformed}
            initialValue={initialValue}
            setInitialValue={setInitialValue}
            handleSubmitSearchForm={handleSubmitSearchMovies}
            searchResultMessage={searchResultMessage}
            isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
            setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
            filterByDuration={filterByDuration}
          ></ProtectedRoute>

          <ProtectedRoute
            loggedIn={loggedIn}
            path="/saved-movies"
            component={SavedMovies}
            movies={movies}
            setMovies={setMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            handleSubmitSearchSavedForm={handleSubmitSearchSavedMovies}
            isLoading={isLoading}
            isSearchPerformedInSaved={isSearchPerformedInSaved}
            searchResultMessage={searchResultMessage}
            isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
            setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
            setIsSearchPerformedInSaved={setIsSearchPerformedInSaved}
            filterByDuration={filterByDuration}
          ></ProtectedRoute>

          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          message={infoTooltipMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
