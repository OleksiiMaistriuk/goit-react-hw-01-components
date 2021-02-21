import React from 'react';

const Table = ({ id, type, amount, currency }) => (
  <tbody key={id}>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
);

export default Table;
