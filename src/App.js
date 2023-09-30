import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css';
import NavBar from './NavBar';
import Doctitle from './Doctitle.js'
import CurrencyConverter from './allCurrPopulated.js';
import { TwoCurrencyConverter } from './TwoCurrency';
import { HashRouter, Route } from 'react-router-dom';
import AppFooter from './footer.js';
import ConverterTwo from './secondFunction';



const App = () => {

  return (
    <HashRouter basename="/currency">
      <Route path="/" component={ActualApp} />
    </HashRouter>
  );
}

const ActualApp = () => {
  const [route, setRoute] = useState("multi-currencies");
  const converter =
    route === "multi-currencies" ? <CurrencyConverter /> : <TwoCurrencyConverter />;
  return (
    <>
      <NavBar route={route} routeUpdated={setRoute} />
      <div>
        <Doctitle />
      </div>
      
      <div>{converter}</div>
      
      <AppFooter />
    </>
  );
};

export default App;
