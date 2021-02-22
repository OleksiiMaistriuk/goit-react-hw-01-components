import React from 'react';
import FriendList from './components/FriendList/index.js';
import Profile from './components/SocialNetworkProfile/index.js';
import Statistic from './components/StatisticSection/index.js';
import TransactionHistory from './components/TransactionHistory/index.js';

import user from './components/SocialNetworkProfile/user.json';
import statisticalData from './components/StatisticSection/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic stats={statisticalData} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
