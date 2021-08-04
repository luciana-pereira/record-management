import React from 'react';

const Input = ({ label, type, name, value, onChange, error, htmlFor }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;