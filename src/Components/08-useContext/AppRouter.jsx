import React from 'react';
import AboutScreen from "../08-useContext/AboutScreen";
import HomeScreen from "../08-useContext/HomeScreen";
import LoginScreen from "../08-useContext/LoginScreen"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter,
    Redirect
  } from "react-router-dom";
import NavBar from './NavBar';

const AppRouter = () => { 
  return (
    
    <BrowserRouter>

        <NavBar />

      <Routes>
        <Route exact index element={<HomeScreen />}></Route>
        <Route exact path="/about" element={<AboutScreen />}></Route>
        <Route exact path="/login" element={<LoginScreen />}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default AppRouter