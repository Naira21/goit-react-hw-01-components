//json-files
import user from "./components/task-1/user.json";
import statisticalData from "./components/task-2/statistical-data.json";
import friends from "./components/task-3/friends.json";
import transactions from "./components/task-4/transactions.json";

//components
import Profile from "./components/task-1/Profile";
import Statistics from "./components/task-2/Statistics";
import FriendList from "./components/task-3/FriendList";
import TransactionHistory from "./components/task-4/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
