import React from 'react';
import styles from './Statistics.module.css';

const StaticList = ({ label, percentage }) => (
  <li className={styles.item}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage} %</span>
  </li>
);

export default StaticList;
