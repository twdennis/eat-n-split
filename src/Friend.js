import { Button } from "./Button";

export function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.image} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} £{(friend.balance * -1).toFixed(2)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you £{friend.balance.toFixed(2)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
