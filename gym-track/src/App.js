import React from 'react';
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import DateDisplay from './components/DateDisplay';
import SquareContainer from './components/SquareContainer';
import AddWorkout from './components/AddWorkout';   
function App() {
  const {buttonPopup, setButtonPopup} = useState(false);

  return (
    <div className="App">
      <main>
          <h1>
            React Gym App
          </h1>
          <br/><br/>
          <button onClick={() => setButtonPopup(true)}>Open Gym PopupWorkout</button>
      </main>

      <AddWorkout trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>
          Popup defined
        </h3>
        <p>
          Popup has been triggered for GymWorkout
        </p>
      </AddWorkout>
      <Header />
      <DateDisplay />
      <SquareContainer> 

        

      </SquareContainer>
    </div>
  );
}

export default App;
