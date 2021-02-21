import React from 'react';
// import ProtoTypes from 'prop-types';
import FriendsItem from './FriendsItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendsItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
    ))}
  </ul>
);

export default FriendList;
