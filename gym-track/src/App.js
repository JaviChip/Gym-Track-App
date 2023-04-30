import React from 'react';
import './App.css';
import Header from './components/Header';
import DateDisplay from './components/DateDisplay';
import SquareContainer from './components/SquareContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <DateDisplay />
      <SquareContainer />
    </div>
  );
}

export default App;
