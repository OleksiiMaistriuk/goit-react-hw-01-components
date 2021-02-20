import React from 'react';
import FriendList from './FriendList/index.js';
import Profile from './SocialNetworkProfile/index.js';
import Statistic from './StatisticSection/index.js';
import TransactionHistory from './TransactionHistory/index.js';

import user from './SocialNetworkProfile/user.json';
import statisticalData from './StatisticSection/statistical-data.json';

const App = () => {
  return (
    <div>
      <FriendList />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic stats={statisticalData} />

      <TransactionHistory />
    </div>
  );
};

export default App;
