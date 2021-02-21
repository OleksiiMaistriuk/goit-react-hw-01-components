import React from 'react';

const FriendsItem = ({ id, avatar, name, isOnline }) => (
  <li className="item" key={id}>
    <span className="status">{isOnline ? 'online' : 'Offline'}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendsItem;
