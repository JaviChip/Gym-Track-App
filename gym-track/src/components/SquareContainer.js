import React from 'react';
import './SquareContainer.css';

function SquareContainer({ children }) {
  return <div className="square-container">{children}</div>;
}

export default SquareContainer;
