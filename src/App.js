import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';

import './style.css';

export default function App() {
  const [state, setState] = useState(0);

  function handleIncrement() {
    setState(prevState => prevState + 1);
  }

  function handleDecrement() {
    setState(prevState => prevState - 1);
  }

  function handleReset() {
    setState(0);
  }

  return (
    <>
      <div className="container">
        <Button
          title="Decrementar"
          id="buttonCrement"
          onClick={handleDecrement}
        />
        <p
          id="count"
          style={{
            color: state === 0 ? 'grey' : state > 0 ? '#68C64A' : '#FF0000'
          }}
        >
          {state}
        </p>
        <Button
          title="Incrementar"
          id="buttonCrement"
          onClick={handleIncrement}
        />
      </div>
      <div className="reset">
        <div id="buttonOptions">
          <Button title="Resetar" onClick={handleReset} />
        </div>
      </div>
    </>
  );
}
