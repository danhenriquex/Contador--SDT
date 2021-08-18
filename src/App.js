import React, { useState, useEffect } from 'react';
import Contador from './components/Contador';
import './style.css'

export default function App() {

  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [days, setDays] = React.useState(0);
  const goalDate = new Date("Aug 20, 2021 18:00:00").getTime();

  const goal = () => {
    const now = new Date().getTime();
    const interval = goalDate - now;
    let s = 1000;
    let m = s * 60;
    let h = m * 60;
    let d = h * 24;
    if (interval > 0) {
      setDays(Math.floor(interval / d));
      setHours(Math.floor((interval % d) / h));
      setMinutes(Math.floor((interval % h) / m));
      setSeconds(Math.floor((interval % m) / s));
    }

  };


  useEffect(() => {
    setTimeout(() => {
      goal();
    }, 1000);
  }, [seconds]);

  return (
    <div className="container">
      <Contador value={days} title={days > 1 ? "Dias" : "Dia"} />
      <Contador value={hours} title={hours > 1 ? "horas" : "hora"} />
      <Contador value={minutes} title={minutes > 1 ? "minutos" : "minuto"} />
      <Contador value={seconds} title={seconds > 1 ? "segundos" : "segundo"} />
    </div>
  );
}
