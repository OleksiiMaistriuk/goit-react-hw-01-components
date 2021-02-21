import React from 'react';
import PropTypes from 'prop-types';

const FriendsItem = ({ id, avatar, name, isOnline }) => (
  <li className="item" key={id}>
    <span className="status">{isOnline ? 'online' : 'Offline'}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendsItem;
