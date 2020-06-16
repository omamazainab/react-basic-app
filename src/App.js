import React from 'react';
import Dinner from './Dinner.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dinner dishName = "Biryani"></Dinner>
      <Dinner dishName = "Karhai"></Dinner>
    </div>
  );
}

export default App;
