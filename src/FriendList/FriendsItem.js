import React from 'react';

const FriendsItem = ({ id, avatar, name, isOnline }) => (
  <li class="item" key={id}>
    <span class="status"> {isOnline ? 'online' : 'Offline'}</span>
    <img class="avatar" src={avatar} alt="" width="48" />
    <p class="name">{name}</p>
  </li>
);

export default FriendsItem;
