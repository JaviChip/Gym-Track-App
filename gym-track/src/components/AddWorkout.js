import React from 'react';

import './AddWorkout.css'
import { useState } from 'react';

function AddWorkout(props) { 

  return (props.trigger)? (
    <div className="AddWorkout">
      <div className="AddWorkout-inner">
        <button className="closebutton">close</button>
        {props.children}
        </div>
        </div>
  ) : "";
      
}

export default AddWorkout;
