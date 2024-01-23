import { useState } from "react";

export function FormSplitBill({
  friend,
  onSplitBill,
  bill,
  setBill,
  userExpense,
  setUserExpense,
}) {
  const friendExpense = bill ? bill - userExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;
    onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {friend.name}</h2>

        <label>💰 Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧾 Your expense</label>
        <input
          type="text"
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              Number(e.target.value) > bill
                ? userExpense
                : Number(e.target.value)
            )
          }
        />

        <label>👩🏿‍🤝‍👩🏾 {friend.name}'s expense</label>
        <input type="text" disabled value={friendExpense} />

        <label>🤑 Who's paying?</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{friend.name}</option>
        </select>
        <button className="button">Split Bill</button>
      </form>
    </>
  );
}
