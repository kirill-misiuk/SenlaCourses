import React from 'react';

const SelectField = props => (
  <div>
    <label>{props.label}</label>
    <select {...props.input}>
      <option />
      <option value="red">Red</option>
      <option value="green">Green</option>
    </select>
  </div>
);

export default SelectField;
