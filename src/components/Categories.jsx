import React, { useState } from 'react'
import ListItemsCategories from './ListItemsCategories';

const Delivery = () => {
  
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  
  return (
      <div>
        <label>
          <input type="checkbox" 
          checked={checked}
          onChange={handleChange}
          />
          Programacion
        </label>
        <label>
          <input type="checkbox" 
          checked={checked1}
          onChange={handleChange1}
          />
          Dark
        </label>
        {checked ? <ListItemsCategories name='Programming'/> : ''}
        {checked1 ? <ListItemsCategories name='Dark'/> : ''}
      </div>
      );
}

export default Delivery
