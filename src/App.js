import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './NavBar';
import FirstLine from './title.js'
import SecondLine from './SecondLine.js'
import MainContent from './currencyone.js'
import CurrenciesPopulated from './allCurrPopulated.js'

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <FirstLine />
      </div>
      <div>
        <SecondLine />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <CurrenciesPopulated />
      </div>
    </div>
  );
}

export default App;
