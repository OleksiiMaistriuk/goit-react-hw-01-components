import React from 'react';
import PropTypes from 'prop-types';
import StaticList from './StaticList';
import styles from './Statistics.module.css';

const Statistic = ({ stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <StaticList key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistic.defaultProps = {
  title: '',
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Statistic;
