import React from "react";
// import { initialItems } from "../data";

const PackingList = ({ items, onDeleteItem, onToggleItems }) => {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              key={item.id}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
const Item = ({ item, onDeleteItem, onToggleItems }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItems(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
};
export default PackingList;
