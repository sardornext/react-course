import { useState } from "react";
import Logo from "./logo";
import From from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Socks", quantity: 12, packed: true },
//   { id: 4, description: "Socks", quantity: 12, packed: false },
//   { id: 5, description: "Socks", quantity: 12, packed: false },
//   { id: 6, description: "Socks", quantity: 12, packed: false },
//   { id: 7, description: "Socks", quantity: 12, packed: false },
//   { id: 8, description: "Socks", quantity: 12, packed: false },
//   { id: 9, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the entire list?"
    );
    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <From onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
