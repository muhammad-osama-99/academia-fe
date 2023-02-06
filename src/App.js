import './App.css';
import React from 'react';
import "./App.css";
// import "./style/common.css";
import "./style/theme.css";
import "./style/util.css";
import Routing from './routing';
import Footer from './components/common/footer';
import Header from './components/common/header';
import {BrowserRouter, Outlet } from 'react-router-dom';
import { Fragment } from "react";

function App() {
  return(
    
    <Fragment>
    <Header/>
    <Outlet />
    <Footer/>
    </Fragment>
   
  );
}

export default App;
