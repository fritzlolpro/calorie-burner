import React from 'react';

const Input = ({ onChange, placeholder }) => (
  <input className="activity-input" placeholder={placeholder} onChange={onChange} />
);

export default Input;
