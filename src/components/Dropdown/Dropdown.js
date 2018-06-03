import React from 'react';

const Dropdown = ({ values, onChange }) => (
  values &&
  <select onChange={onChange} id="time-select" name="time-select" className="time-select">
    {
        values.map(x => <option value={x} key={x}>{x} min</option>)
      }
  </select>
);

export default Dropdown;
