import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const submit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={submit}>
      <input
        className="todo-input"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs doing?"
      />
      <button className="todo-button" type="submit">Add</button>
    </form>
  );
}