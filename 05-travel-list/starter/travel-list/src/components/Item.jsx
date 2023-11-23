export default function Item({ item, onDeleteItem, onToggleItem }) {
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
