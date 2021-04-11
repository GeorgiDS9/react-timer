import React, { useState } from "react";

function App() {
  
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  // Array Destructuring & Hook
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={decrease}>-</button>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

export default App;
