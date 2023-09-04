import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './NavBar';
import FirstLine from './title.js'
import SecondLine from './SecondLine.js'
import MainContent from './currencyone.js'

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
    </div>
  );
}

export default App;
