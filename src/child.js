import React, { useState } from 'react';

const Child = ({ getColor }) => {
  const [color, setColor] = useState(null);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    getColor(newColor);
  };

  return <input type="text" value={color} onChange={handleColorChange} />;
};

export default Child;
