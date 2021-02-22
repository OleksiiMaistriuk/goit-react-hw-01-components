import React from 'react';
import styles from './TransactionHistory.module.css';
const Table = ({ type, amount, currency }) => (
  <tbody className={styles.body}>
    <tr className={styles.bodyItem}>
      <td className={styles.type}>{type}</td>
      <td className={styles.amount}>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
);

export default Table;
