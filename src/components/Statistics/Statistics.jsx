import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title = 0, stats }) => (
  <section className={styles.section}>
    {title.length && <h2 className={styles.h2}>{title}</h2>}
    <ul className={styles.ul}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={styles.li}>
          <span className={styles.spanText}>{label}</span>
          <span className={styles.spanNumber}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
