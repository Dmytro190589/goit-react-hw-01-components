import Profile from './Profile/Profile';
import user from '../components/data/user.json';
import Statistics from './statistics/Statistics';
import data from '../components/data/data.json';
import FriendList from "./FriendList/FriendList";
import friends from '../components/data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../components/data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 40px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats = {data} title = "Statistics"/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
