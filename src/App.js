import React from 'react';
import FriendList from './FriendList/index.js';
import SocialNetworkProfile from './SocialNetworkProfile/index.js';
import StatisticSection from './StatisticSection/index.js';
import TransactionHistory from './TransactionHistory/index.js';
const App = () => {
  return (
    <div>
      <FriendList />
      <SocialNetworkProfile />
      <StatisticSection />
      <TransactionHistory />
    </div>
  );
};

export default App;
