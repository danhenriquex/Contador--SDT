import React from 'react';
import './style.css';

const Contador = ({ title, value }) => {
  return (
    <div className="content">
      <div className="number">{value}</div>
      <div className="title">{title}</div>
    </div>
  )
}

export default Contador;