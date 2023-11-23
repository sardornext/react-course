import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

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
function Logo() {
  return <h1>🌴Far away👜</h1>;
}

function From({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; // if description is empty, return

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do u need for your 😍trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
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

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
      {/* <p>
        Моя любовь к тебе чиста, Я просто верю в чудеса. Тебя я не хочу терять,
        Хочу тебя я обнимать. И каждый день, и каждый час Тебя люблю я, как
        сейчас. И в эту ночь я не усну, В твоих глазах я утону.
      </p> */}
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    description: PropTypes.string,
    packed: PropTypes.bool,
  }).isRequired,
};

function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You have nothing to pack 😔</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything and You are ready to go ✈️"
          : `👜You have ${numItems} items on your list, and you already packed
        ${numPacked} 
        (${percentage}%).`}
      </em>
    </footer>
  );
}
