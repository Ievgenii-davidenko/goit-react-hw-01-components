import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.ul}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id} className={styles.li}>
        <span className={isOnline ? styles.spanActive : styles.spanOffline}>
          {isOnline}
        </span>
        <img className={styles.img} src={avatar} alt="" width="48" />
        <p className={styles.p}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
