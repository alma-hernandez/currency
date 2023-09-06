import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './Nav.css';
import NavBar from './NavBar';
import Doctitle from './Doctitle.js'
import SecondLine from './SecondLine.js'
import MainContent from './currencyone.js'
import CurrencyConverter from './allCurrPopulated.js'


const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Doctitle />
      </div>
      <div>
  
      </div>
      <div>
   
      </div>
      <div>
        <CurrencyConverter />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
