import React, { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { Loading } from './components/Loading';
import CircularProgress from '@material-ui/core/CircularProgress';

import './style.css';

export default function App() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storage = localStorage.getItem('@contador:save');
    if (storage) {
      setState(JSON.parse(storage));
      setLoading(false);
    } else {
      setValue(0);
      setLoading(false);
    }
  }, []);

  function handleIncrement() {
    setState(prevState => prevState + 1);
  }

  function handleDecrement() {
    setState(prevState => prevState - 1);
  }

  function handleSaveResult() {
    localStorage.setItem('@contador:save', JSON.stringify(state));
    alert('Dados salvos com sucesso.');
  }

  function handleReset() {
    setState(0);
  }

  if (loading) {
    return <Loading />;
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
        <div id="buttonOptions">
          <Button title="Salvar" onClick={handleSaveResult} />
        </div>
      </div>
    </>
  );
}
