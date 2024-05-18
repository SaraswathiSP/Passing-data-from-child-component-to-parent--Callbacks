import React, { useState } from 'react';
import Child from './child.js';
import './style.css';

// Parent Container
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState(null);

  const getColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <div class="container" style={{ background: `${backgroundColor}` }}></div>
      <Child getColor={getColor} />
    </>
  );
};
export default App;
