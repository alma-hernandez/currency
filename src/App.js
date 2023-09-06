import React, { useState } from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css';
import NavBar from './NavBar';
import Doctitle from './Doctitle.js'
import CurrencyConverter from './allCurrPopulated.js';
import { TwoCurrencyConverter } from './TwoCurrency';


const App = () => {
  const [route, setRoute] = useState("multi-currencies");

  const converter = route === "multi-currencies"
    ? < CurrencyConverter />
    : <TwoCurrencyConverter />;
  return (
    <div>
      <NavBar route={route} routeUpdated={setRoute} />
      <div>
        <Doctitle />
      </div>
      <div>
        {converter}
      </div>
    </div>
  );
}

export default App;
