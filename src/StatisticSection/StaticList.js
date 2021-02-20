import React from 'react';

const StaticList = ({ id, label, percentage }) => (
  <li key={id}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage} %</span>
  </li>
);

export default StaticList;
