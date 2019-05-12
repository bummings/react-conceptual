import React from 'react';
import './App.css';
import './index.css';
import Rando from './Rando.js';

function App() {
  return (
    <div className='App'>
      rando number
      <Rando maxNum={420} />
      <i className='fas fa-dice-one' />
    </div>
  );
}

export default App;
