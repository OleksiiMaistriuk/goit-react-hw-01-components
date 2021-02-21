import React from 'react';
// import ProtoTypes from 'prop-types';
import StaticList from './StaticList';

const Statistic = ({ stats }) => (
  <section className="statistics">
    <ul className="stat-list">
      <h2 className="title">Upload stats</h2>
      {stats.map(({ id, label, percentage }) => (
        <StaticList key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

export default Statistic;
