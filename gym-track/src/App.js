import React from 'react';
import './App.css';
import Header from './components/Header';
import DateDisplay from './components/DateDisplay';
import SquareContainer from './components/SquareContainer';
import AddWorkout from './components/AddWorkout';

function App() {
  return (
    <div className="App">
      <Header />
      <DateDisplay />
      <SquareContainer>
        <AddWorkout />
      </SquareContainer>
    </div>
  );
}

export default App;
