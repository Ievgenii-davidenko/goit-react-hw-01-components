import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.picture} />
        <p className={styles.textName}>{name}</p>
        <p className={styles.textTag}>{tag}</p>
        <p className={styles.textLocation}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
