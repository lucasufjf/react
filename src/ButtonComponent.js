import React from 'react';

const ButtonComponent = ({ onClick, label }) => {
  return <button onClick={onClick} className="travel-button">{label}</button>;
}

export default ButtonComponent;