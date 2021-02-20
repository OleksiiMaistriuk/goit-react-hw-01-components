import React from 'react';
// import ProtoTypes from 'prop-types';
import FriendsItem from './FriendsItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsItem id={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

export default FriendList;
