import './App.css';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import React from 'react';
import News from './containers/News';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      
    </div>
  );
}

export default App;
