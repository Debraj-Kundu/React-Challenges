import './App.css';
import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(()=>{
    var id = setInterval(()=>{
      // console.log(time);
      setTime(t => t+1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="Timer">
      <h1>{time}</h1>
    </div>
  );
}

export default Timer;
