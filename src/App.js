import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './NavBar';
import FirstLine from './title.js'

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <FirstLine />
      </div>
    </div>
  );
}

export default App;
