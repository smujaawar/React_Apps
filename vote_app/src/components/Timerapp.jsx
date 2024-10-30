import React, { useEffect, useState } from "react";


function Timerapp() {
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((time) => (time > 0 ? time - 1 : 120));
    }, 1000);

    return () => clearInterval(interval); //memory managemnet and code cleanup
  }, []);

  return (
    <div className="div2">
      <h1>Timer</h1>
      <h1>{timer}</h1>
    </div>
  );
}

export default Timerapp;
