import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onClearList={onClearList}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          name=""
          id=""
        >
          <option value="input">Sort by input order</option>
          <option value="description">sort by Description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={() => onClearList(items.id)} className="clear">
          Clear list
        </button>
      </div>
    </div>
  );
}
