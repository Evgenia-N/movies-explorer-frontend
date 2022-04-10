import React from 'react';
// import { Router } from 'react-router-dom';
// import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

export default function App() {
  //const CurrentUserContext = React.createContext();
  //const [currentUser, setCurrentUser] = React.useState({});
  // const navigate = useNavigate(); import { Routes, Route, useNavigate, useLocation }
  // const location = useLocation(); import { Routes, Route, useNavigate, useLocation }

  return (
      <div className="page">
          <Header />
          <Main />
      </div>
    //<CurrentUserContext.Provider value={currentUser}>
    //</CurrentUserContext.Provider>
  );
}
