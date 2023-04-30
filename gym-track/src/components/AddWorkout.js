import React from 'react';

function AddWorkout() {
  const handleAddWorkout = () => {
    // Perform the action to add a workout
    // Example: Send a request to the server, update the database, etc.
    console.log('Adding a workout...');
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleAddWorkout}>
        Create Workout Plan
      </button>
    </div>
  );
}

export default AddWorkout;
