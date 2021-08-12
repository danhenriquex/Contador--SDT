import React, { useState } from 'react';
import { Button } from './components/Button';

import './style.css';

export default function App() {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem('@contador:save');

    if (storage) {
      return JSON.parse(storage);
    }

    return 0;
  });

  function handleIncrement() {
    setState(prevState => prevState + 1);
  }

  function handleDecrement() {
    setState(prevState => prevState - 1);
  }

  function handleSaveResult() {
    localStorage.setItem('@contador:save', JSON.stringify(state));
  }

  function handleReset() {
    setState(0);
  }

  return (
    <>
      <div className="container">
        <Button title="Decrementar" onClick={handleDecrement} />
        <p
          id="count"
          style={{
            color: state === 0 ? 'grey' : state > 0 ? '#68C64A' : '#FF0000'
          }}
        >
          {state}
        </p>
        <Button title="Incrementar" onClick={handleIncrement} />
      </div>
      <div className="reset">
        <div style={{ width: '30%' }}>
          <Button title="Resetar" onClick={handleReset} />
        </div>
        <div style={{ width: '30%' }}>
          <Button title="Salvar" onClick={handleSaveResult} />
        </div>
      </div>
    </>
  );
}
