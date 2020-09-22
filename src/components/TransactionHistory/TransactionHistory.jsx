import React from 'react';
import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.thead}>
      <tr className={styles.tr}>
        <th className={styles.th}>Type</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.tr}>
          <td className={styles.td}>{type}</td>
          <td className={styles.td}>{amount}</td>
          <td className={styles.td}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
