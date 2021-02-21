import React from 'react';
// import ProtoTypes from 'prop-types';
import Table from './table';

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(({ id, type, amount, currency }) => (
      <Table key={id} type={type} amount={amount} currency={currency} />
    ))}
  </table>
);

export default TransactionHistory;
